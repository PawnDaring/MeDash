/* ════════════════════════════════════════════════════════
   THREE.JS — Model + Wireframe (pulsing)
   ════════════════════════════════════════════════════════ */
(() => {
  const canvas = document.getElementById('model-canvas');
  const container = document.getElementById('modelCanvasWrap') || canvas.parentElement;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.localClippingEnabled = false;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 200);
  camera.position.set(0, 1, 5);

  scene.add(new THREE.AmbientLight(0x555555, 1.0));
  const dir1 = new THREE.DirectionalLight(0xffffff, 1.0);
  dir1.position.set(3, 5, 4); scene.add(dir1);
  const dir2 = new THREE.DirectionalLight(0x888888, 0.4);
  dir2.position.set(-3, 3, -2); scene.add(dir2);
  const rim = new THREE.PointLight(0xffffff, 0.3, 15);
  rim.position.set(0, 2, -3); scene.add(rim);

  const group = new THREE.Group();
  scene.add(group);

  let mixer = null, wireMat = null, hologramMat = null, dotMat = null, dotMatActive = null;
  let dotMeshes = [];
  let activeRegionId = null;
  let modelHeight = 2.025;
  const clock = new THREE.Clock();
  const loader = new THREE.GLTFLoader();

  /* Body dot positions (x,y,z) + region mapping — proportions for ~2 unit tall figure */
  const DOT_CONFIG = [
    { id: 'head', pos: [0.22, 1.92, 0], regionId: 'MIND' },
    { id: 'Rshoulder', pos: [-0.1, 1.68, -0.2], regionId: 'Baggage' },
    { id: 'heart', pos: [0.22, 1.58, 0.1], regionId: 'heart' },
    { id: 'butt', pos: [0.2, 1, -0.2], regionId: 'stomach' },
    { id: 'Rhand', pos: [-0.55, 1.22, 0.0], regionId: 'Occupation' },
    { id: 'Rfoot', pos: [0, 0.06, 0.06], regionId: 'Tracking' }
  ];
  const REGION_ROTATION = { MIND: 0, Baggage: 0.15, Occupation: -0.15, heart: 0, stomach: Math.PI * 0.95, Tracking: 0 };
  const REGION_ICONS = {
    MIND: 'assets/icons/brain.png',
    Baggage: 'assets/icons/backpack.png',
    heart: 'assets/icons/heart-rate.png',
    stomach: 'assets/icons/poop.png',
    Occupation: 'assets/icons/palm.png',
    Tracking: 'assets/icons/route.png'
  };

  function createHologramMat() {
    return new THREE.ShaderMaterial({
      transparent: true, side: THREE.DoubleSide, depthWrite: false,
      uniforms: { uTime:{ value:0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying float vY;
        void main(){
          vec4 wp = modelMatrix * vec4(position,1.0);
          vY = wp.y;
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying float vY;
        uniform float uTime;
        void main(){
          vec3 pink = vec3(0.85,0.45,0.55);
          vec3 puce = vec3(0.72,0.48,0.52);
          vec3 col = mix(pink, puce, 0.3 + 0.2*sin(vY*8.0 + uTime));
          float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 1.5);
          float alpha = 0.12 * (0.4 + 0.6*fresnel);
          gl_FragColor = vec4(col, alpha);
        }`
    });
  }

  function createDotMat() {
    return new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0xe8a0b0) } },
      vertexShader: `void main(){ gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        void main(){
          float pulse = 0.5 + 0.5 * sin(uTime * 2.2);
          gl_FragColor = vec4(uColor, 0.4 + 0.5 * pulse);
        }`
    });
  }

  function createDotMatActive() {
    return new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main(){
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main(){
          vec3 dark = vec3(0.25, 0.18, 0.2);
          vec3 glow = vec3(0.95, 0.35, 0.45);
          float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 2.0);
          vec3 col = mix(dark, glow, fresnel * 0.95);
          float pulse = 0.7 + 0.3 * sin(uTime * 2.2);
          gl_FragColor = vec4(col, 0.85 * pulse);
        }`
    });
  }

  function createWireMat() {
    return new THREE.ShaderMaterial({
      wireframe: true, transparent: true,
      uniforms: { uOpacity:{ value:0.7 }, uTime:{ value:0 } },
      vertexShader: `
        void main(){
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform float uOpacity, uTime;
        void main(){
          vec3 blush  = vec3(0.92,0.58,0.62);
          vec3 rose   = vec3(0.82,0.45,0.52);
          vec3 puce   = vec3(0.72,0.48,0.52);
          vec3 coral  = vec3(0.78,0.38,0.45);
          vec3 col = mix(blush, mix(rose, mix(puce, coral, 0.5), 0.5), 0.3);
          float pulse = 0.5 + 0.5 * sin(uTime * 2.0);
          gl_FragColor = vec4(col, uOpacity * pulse);
        }`
    });
  }

  /* load model */
  loader.load('assets/models/Me.glb', (gltf) => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const targetH = 2.025;
    const scale = targetH / maxDim;
    model.scale.setScalar(scale);

    const box2 = new THREE.Box3().setFromObject(model);
    const min = box2.min;
    const center2 = box2.getCenter(new THREE.Vector3());
    model.position.set(-center2.x, -min.y, -center2.z);
    group.add(model);

    /* hologram fill (semi-transparent pink mesh) - behind wireframe */
    const hologramClone = model.clone(true);
    hologramMat = createHologramMat();
    hologramClone.traverse(child => { if(child.isMesh){ child.material = hologramMat; child.renderOrder = 0; } });
    group.add(hologramClone);

    /* wireframe overlay */
    const wireClone = model.clone(true);
    wireMat = createWireMat();
    wireClone.traverse(child => { if(child.isMesh){ child.material = wireMat; child.renderOrder = 1; } });
    group.add(wireClone);

    modelHeight = box2.max.y - box2.min.y;
    const scaleDot = modelHeight / 2.025;

    /* body dots — pulsing spheres at key points + icon sprites */
    const dotGeo = new THREE.SphereGeometry(0.04 * scaleDot, 12, 12);
    dotMat = createDotMat();
    dotMatActive = createDotMatActive();
    const texLoader = new THREE.TextureLoader();
    const iconSize = 0.055 * scaleDot;

    DOT_CONFIG.forEach(cfg => {
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(cfg.pos[0] * scaleDot, cfg.pos[1] * scaleDot, cfg.pos[2] * scaleDot);
      dot.userData.regionId = cfg.regionId;
      dot.renderOrder = 2;
      group.add(dot);
      dotMeshes.push(dot);

      const iconPath = REGION_ICONS[cfg.regionId];
      if (iconPath) {
        texLoader.load(iconPath, (tex) => {
          const spriteMat = new THREE.SpriteMaterial({
            map: tex,
            transparent: true,
            depthWrite: false,
            depthTest: false
          });
          const sprite = new THREE.Sprite(spriteMat);
          sprite.scale.set(iconSize, iconSize);
          sprite.renderOrder = 3;
          dot.add(sprite);
        });
      }
    });

    const scaledH = modelHeight;
    camera.position.set(0, scaledH * 0.45, 4.5);
    camera.lookAt(0, scaledH * 0.45, 0);

    if(gltf.animations && gltf.animations.length > 0){
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach(clip => { mixer.clipAction(clip).play(); });
    }
  });

  let autoRotate = true;
  let targetRotationY = 0;
  const ROTATE_SPEED = 4;

  window.addEventListener('focusModelRegion', (e) => {
    const regionId = e.detail?.regionId;
    activeRegionId = regionId || null;
    if(!regionId){ autoRotate = true; return; }
    const rot = REGION_ROTATION[regionId];
    if(rot !== undefined){ targetRotationY = rot; autoRotate = false; }
  });

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if(mixer) mixer.update(delta);
    if(autoRotate){
      group.rotation.y += 0.004;
      targetRotationY = group.rotation.y;
    } else {
      const diff = targetRotationY - group.rotation.y;
      const step = Math.sign(diff) * Math.min(Math.abs(diff), delta * ROTATE_SPEED);
      group.rotation.y += step;
      if(Math.abs(diff) < 0.005) autoRotate = true;
    }
    const t = performance.now() * 0.001;
    if(wireMat && wireMat.uniforms) wireMat.uniforms.uTime.value = t;
    if(hologramMat && hologramMat.uniforms) hologramMat.uniforms.uTime.value = t;
    if(dotMat && dotMat.uniforms) dotMat.uniforms.uTime.value = t;
    if(dotMatActive && dotMatActive.uniforms) dotMatActive.uniforms.uTime.value = t;
    dotMeshes.forEach(dot => {
      const isActive = activeRegionId && dot.userData.regionId === activeRegionId;
      dot.material = isActive ? dotMatActive : dotMat;
      const pulse = 1 + 0.12 * Math.sin(t * 2.2);
      const activeScale = isActive ? 1.45 : 1;
      dot.scale.setScalar(pulse * activeScale);
    });
    renderer.render(scene, camera);
  }
  animate();

  /* drag-rotate */
  let isDragging = false, prevX = 0;
  canvas.addEventListener('pointerdown', e => { isDragging = true; prevX = e.clientX; autoRotate = false; });
  window.addEventListener('pointerup', () => { isDragging = false; setTimeout(() => autoRotate = true, 2000); });
  window.addEventListener('pointermove', e => { if(!isDragging) return; group.rotation.y += (e.clientX - prevX) * 0.008; prevX = e.clientX; });

  /* responsive resize — also fires when flex columns change width */
  function onResize(){
    const w = container.clientWidth, h = container.clientHeight;
    if(w === 0 || h === 0) return;
    renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);
  new ResizeObserver(onResize).observe(container);
})();
