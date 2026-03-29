/* ════════════════════════════════════════════════════════
   MIND-STREAM FEED — simulated stream-of-consciousness
   ════════════════════════════════════════════════════════ */
(() => {
  const feed = document.getElementById('mindFeed');
  const hrVal = document.getElementById('hrVal');
  const hrWrap = document.getElementById('mindHR');

  const thoughts = [
    /* ── ACT 1: CALM — settling in (HR 66-72) ── */
    { tag:'SYS',    msg:'Presentation mode initializing…', hr:66 },
    { tag:'SCAN',   msg:'Room mapped — 24 Coworkers, 3 standing, 1 laptop open', hr:68 },
    { tag:'PREP',   msg:'James-Clourd loaded. 18 slides. 5 min window.', hr:68 },
    { tag:'BREATH', msg:'Diaphragm rhythm locked — 14/min', hr:67 },
    { tag:'SELF',   msg:'Start presenting so we can get this over with.', whisper:true, hr:68 },
    { tag:'MOOD',   msg:'Serotonin nominal — mild anticipation detected', hr:69 },
    { tag:'VOICE',  msg:'Vocal cord calibration — tension within range', hr:70 },
    { tag:'FOCUS',  msg:'Eye contact protocol active — scanning crowd', hr:70 },
    { tag:'CALM',   msg:'Cortisol baseline steady. Confidence index 78%', hr:68 },
    { tag:'SELF',   msg:'Deep breath. It is only scary in your mind.', whisper:true, hr:69 },
    { tag:'OPEN',   msg:'"Good Morning everyone…" — delivery: smooth', hr:71 },
    { tag:'FLOW',   msg:'Slide 1 → Slide 2 transitioning', hr:70 },

    /* ── ACT 2: FIRST CRACKS — unease builds (HR 74-90) ── */
    { tag:'SCAN',   msg:'Front row — someone frowning. Why?', hr:76 },
    { tag:'SELF',   msg:'Don\'t look at them. Keep going.', whisper:true, hr:78 },
    { tag:'HANDS',  msg:'Palm moisture +18% from baseline', accent:true, hr:80 },
    { tag:'VOICE',  msg:'Micro-tremor detected on "implementation"', hr:82 },
    { tag:'CORTEX', msg:'Cognitive load spiking to 74%…', hr:83 },
    { tag:'SELF',   msg:'I need more coffee...', whisper:true, hr:84 },
    { tag:'DOUBT',  msg:'Slide 5 data — did I double-check those numbers?', hr:86 },
    { tag:'SKIN',   msg:'Galvanic response climbing — perspiration onset', accent:true, hr:87 },
    { tag:'SELF',   msg:'They\'re looking at their phones. They\'re bored.', whisper:true, hr:88 },
    { tag:'BREATH', msg:'Respiratory rate 21/min — ⚠ elevated', accent:true, hr:89 },
    { tag:'POSTURE',msg:'Shoulders tensing. Jaw clenching.', hr:90 },

    /* ── ACT 3: SPIRALING — anxiety takes over (HR 94-128) ── */
    { tag:'PANIC',  msg:'Amygdala hijack probability rising — 44%', accent:true, hr:94 },
    { tag:'SELF',   msg:'hands are shaking.', whisper:true, hr:97 },
    { tag:'ERROR',  msg:'Lost position — which slide is this?', flash:true, hr:102 },
    { tag:'LOOP',   msg:'"I should have practiced more" × 23 iterations', hr:105 },
    { tag:'SELF',   msg:'You\'re going to forget everything.', whisper:true, hr:108 },
    { tag:'ALERT',  msg:'Voice crack detected on "methodology"', flash:true, hr:110 },
    { tag:'DOUBT',  msg:'Imposter syndrome module — fully activated', accent:true, hr:112 },
    { tag:'DOUBT',  msg:'Imposter syndrome module — Overheating', accent:true, hr:120 },
    { tag:'DOUBT',  msg:'Imposter syndrome module — Overheating', accent:true, hr:130 },
    { tag:'FEAR',   msg:'42 pairs of eyes. All judging. All watching. Heartrate erratic', flash:true, hr:131 },
    { tag:'LOOP',   msg:'Thought recursion depth: 12 — stack overflow imminent', hr:132 },
    { tag:'SELF',   msg:'what if I just… stop talking', whisper:true, hr:130 },
    { tag:'SPIRAL', msg:'Breathe', flash:true, hr:125 },
    { tag:'BLANK',  msg:'████ — white Noise Activated— ████', flash:true, hr:128 },
    { tag:'SELF',   msg:'Clearing Distraction Cache', whisper:true, hr:125},

    /* ── ACT 4: THE PAUSE — grounding (HR 122-100) ── */
    { tag:'GRIP',   msg:'…Almost Done Presenting.', hr:122 },
    { tag:'BREATH', msg:'…inhale 4s … hold 7s … exhale 8s …', hr:116 },
    { tag:'SELF',   msg:'Feel your feet on the floor.', whisper:true, hr:110 },
    { tag:'BREATH', msg:'…inhale … hold … exhale … again …', hr:105 },
    { tag:'GROUND', msg:'System is cooling down.', hr:100 },

    /* ── ACT 5: RECOVERY — finding the thread (HR 96-72) ── */
    { tag:'SELF',   msg:'Everything is okay now...', whisper:true, hr:92 },
    { tag:'FOCUS',  msg:'Finishing Slides', hr:88 },
    { tag:'FLOW',   msg:'Sentence lands. A nod from the back row.', hr:84 },
    { tag:'SELF',   msg:'They\'re still listening. Keep going.', whisper:true, hr:82 },
    { tag:'MOOD',   msg:'Dopamine micro-release — momentum returning', hr:80 },
    { tag:'VOICE',  msg:'Cadence stabilizing. Volume steady.', hr:78 },
    { tag:'CONF',   msg:'Slide 16/18 — almost there.', hr:76 },
    { tag:'SELF',   msg:'You\'re going to finish this.', whisper:true, hr:74 },
    { tag:'END',    msg:'applause detected — it\'s over.', accent:true, hr:72 },
    { tag:'SELF',   msg:'You did it.', whisper:true, hr:70 },
    { tag:'SYS',    msg:'Presentation mode terminated. Flushing anxiety buffer…', hr:68 },
    { tag:'CALM',   msg:'Parasympathetic restore complete. Baseline nominal.', hr:66 },
    { tag:'SELF',   msg:'System Stablized', whisper:true, dim:true, hr:66 },
    { tag:'SELF',   msg:'System Stablized', whisper:true, dim:true, hr:66 },
    { tag:'SELF',   msg:'System Stablized', whisper:true, dim:true, hr:66 },
    { tag:'SELF',   msg:'System Stablized', whisper:true, dim:true, hr:66 },

  ];

  let tIdx = 0;
  let currentHR = 66;
  let targetHR = 66;

  function ts(){
    const n = new Date();
    return `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
  }

  const HR_BASE = 66;
  const HR_PEAK = 128;

  function updateHR(){
    if(currentHR < targetHR) currentHR = Math.min(currentHR + 2, targetHR);
    else if(currentHR > targetHR) currentHR = Math.max(currentHR - 2, targetHR);
    const jitter = Math.round((Math.random() - 0.5) * 3);
    const display = Math.max(55, currentHR + jitter);
    hrVal.textContent = display;

    hrWrap.classList.remove('hr-elevated','hr-critical');
    if(currentHR >= 110)     hrWrap.classList.add('hr-critical');
    else if(currentHR >= 85) hrWrap.classList.add('hr-elevated');

    const t = Math.min(1, Math.max(0, (currentHR - HR_BASE) / (HR_PEAK - HR_BASE)));
    const scale = 1 + t * 0.85;
    hrWrap.style.transform = `scale(${scale.toFixed(2)})`;
  }

  function pushThought(){
    const t = thoughts[tIdx % thoughts.length];
    tIdx++;

    if(t.hr !== undefined) targetHR = t.hr;
    updateHR();

    const line = document.createElement('div');
    let cls = 'mind-line';
    if(t.flash)   cls += ' m-flash';
    else if(t.accent) cls += ' m-accent';
    else if(t.dim)    cls += ' m-dim';
    if(t.whisper) cls += ' m-whisper';
    line.className = cls;

    const tagText = t.whisper ? '…' : `[${t.tag}]`;
    line.innerHTML = `<span class="m-time">${ts()}</span><span class="m-tag">${tagText}</span><span class="m-msg">${t.msg}</span>`;

    const cursor = feed.querySelector('.m-cursor');
    feed.insertBefore(line, cursor);
    feed.scrollTop = feed.scrollHeight;

    while(feed.querySelectorAll('.mind-line').length > 80){
      feed.querySelector('.mind-line').remove();
    }
  }

  /* pacing: starts slow, speeds up during spiral, slows for recovery */
  function getInterval(){
    const pos = (tIdx % thoughts.length) / thoughts.length;
    if(pos < 0.20)      return 2800 + Math.random() * 1200;
    if(pos < 0.40)      return 2000 + Math.random() * 1000;
    if(pos < 0.55)      return 1000 + Math.random() * 600;
    if(pos < 0.65)      return 2400 + Math.random() * 1400;
    return 2200 + Math.random() * 1000;
  }

  function scheduleNext(){
    setTimeout(() => { pushThought(); scheduleNext(); }, getInterval());
  }

  /* HR smoothing tick — runs independently */
  setInterval(updateHR, 800);

  /* staggered start */
  setTimeout(() => { pushThought(); scheduleNext(); }, 800);
  setTimeout(() => pushThought(), 1600);
  setTimeout(() => pushThought(), 2600);
})();
