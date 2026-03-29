/* ════════════════════════════════════════════════════════
   LOADING SCREEN — circular progress, preloads assets
   Covers screen until 3D models + images load, then fades out
   ════════════════════════════════════════════════════════ */
(() => {
  const ASSETS = [
    'assets/models/Me.glb',
    'assets/models/brain.glb',
    'assets/icons/brain.png',
    'assets/icons/backpack.png',
    'assets/icons/mine.svg',
    'assets/icons/word-play-invite.svg',
    'assets/icons/palm.png',
    'assets/icons/heart-rate.png',
    'assets/icons/poop.png',
    'assets/icons/route.png'
  ];

  const CENTER_IMAGE = 'assets/images/Loading.png';
  const MIN_DISPLAY_MS = 3000;
  const BAR_FILL_MS = 2800;
  const FADE_DURATION_MS = 800;

  function createLoader() {
    const overlay = document.createElement('div');
    overlay.id = 'loader-overlay';
    overlay.innerHTML = `
      <div class="loader-content">
        <div class="loader-circle-wrap">
          <svg class="loader-svg" viewBox="0 0 120 120">
            <circle class="loader-bg" cx="60" cy="60" r="54" fill="none" stroke-width="15"/>
            <circle class="loader-progress" cx="60" cy="60" r="54" fill="none" stroke-width="15"
              stroke-dasharray="339.3" stroke-dashoffset="339.3" transform="rotate(-90 60 60)"/>
          </svg>
          <img class="loader-center-img" src="${CENTER_IMAGE}" alt="" />
        </div>
        <div class="loader-percent">0%</div>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #loader-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: #1a1612;
        display: flex; align-items: center; justify-content: center;
        transition: opacity ${FADE_DURATION_MS}ms ease-out;
      }
      #loader-overlay.fade-out { opacity: 0; pointer-events: none; }
      .loader-content {
        display: flex; flex-direction: column; align-items: center; gap: 12px;
      }
      .loader-circle-wrap {
        position: relative; width: 210px; height: 210px;
        margin: 16px;
      }
      .loader-svg {
        width: 100%; height: 100%;
      }
      .loader-bg {
        stroke: rgba(193,171,133,.12);
      }
      .loader-progress {
        stroke: #f73757;
        stroke-linecap: round;
        transition: stroke-dashoffset .12s linear;
      }
      .loader-center-img {
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        width: 150px; height: 150px;
        object-fit: contain;
      }
      .loader-percent {
        font-size: 30px; font-weight: 700;
        color: #d4c5b0;
        letter-spacing: .5px;
      }
    `;
    document.head.appendChild(style);
    document.body.prepend(overlay);
    return overlay;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = resolve;
      img.src = src;
    });
  }

  function loadBinary(src) {
    return fetch(src, { mode: 'cors' }).then(() => {}).catch(() => {});
  }

  async function preloadAssets(onProgress) {
    const total = ASSETS.length;
    let loaded = 0;

    const report = () => {
      loaded++;
      const pct = Math.round((loaded / total) * 100);
      onProgress(pct);
    };

    const promises = ASSETS.map(src => {
      const isGlb = src.endsWith('.glb');
      const p = isGlb ? loadBinary(src) : loadImage(src);
      return p.then(report);
    });

    await Promise.all(promises);
    onProgress(100);
  }

  function run() {
    const overlay = createLoader();
    const progressCircle = overlay.querySelector('.loader-progress');
    const percentEl = overlay.querySelector('.loader-percent');
    const circumference = 339.3;

    function setProgress(pct) {
      const offset = circumference - (pct / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
      percentEl.textContent = Math.round(pct) + '%';
    }

    const startTime = Date.now();
    setProgress(0);

    let assetsDone = false;

    function tryFinish() {
      if (!assetsDone) return;
      const elapsed = Date.now() - startTime;
      if (elapsed < MIN_DISPLAY_MS) {
        setTimeout(tryFinish, MIN_DISPLAY_MS - elapsed);
        return;
      }
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), FADE_DURATION_MS);
    }

    let animId;
    function animateBar() {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / BAR_FILL_MS) * 100);
      setProgress(pct);
      if (pct < 100) animId = requestAnimationFrame(animateBar);
    }
    animId = requestAnimationFrame(animateBar);

    preloadAssets(() => {
      assetsDone = true;
      tryFinish();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
