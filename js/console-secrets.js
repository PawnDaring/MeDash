/* ════════════════════════════════════════════════════════
   CONSOLE SECRETS — DevTools easter egg
   Fires when someone opens F12 / Inspect / Console
   ════════════════════════════════════════════════════════ */
(() => {
  let fired = false;
  const COOLDOWN_MS = 3000; // min time between triggers (avoid spam on resize)
  let lastFiredAt = 0;

  const banner = `
███████╗ ██████╗██████╗      ██████╗       ██████╗       ██████╗
╚════██║██╔════╝██╔══██╗    ██╔════╝      ██╔═══██╗     ██╔═══██╗
███╗ ██║██║     ██████╔╝    ██║     ████╗ ██║   ██║     ██║   ██║
██╔╝ ██║██║     ██╔══██╗    ██║     ╚═══╝ ██║   ██║     ██║   ██║
███████║╚██████╗██║  ██║    ╚██████╗      ╚██████╔╝ ██╗ ╚██████╔╝
╚══════╝ ╚═════╝╚═╝  ╚═╝     ╚═════╝       ╚═════╝  ╚═╝  ╚═════╝

JCR C-0.0

HELLO! wanderer of Back Alley Inquiries! I greet you and welcome you to explore my hidden secrets... 
More discoveries await you here as well: URL

 ███████╗
█║  █║  █║
█║  █║  █║
╚███████╔╝
 ╚═╚═╚═╚╝


`;

  const subtext = `
  Made by PawnDaring

  // You're Finally Here...! I've been waiting... :]
`;

  function fire() {
    const now = Date.now();
    if (fired && now - lastFiredAt < COOLDOWN_MS) return;
    fired = true;
    lastFiredAt = now;

    console.clear();
    console.log("%c" + banner, "color:#b084f5; font-weight:bold;");
    console.log("%c" + subtext, "color:#888; font-style:italic;");
  }

  /* ── Method 1: Keyboard shortcuts ── */
  document.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const mod = isMac ? (e.metaKey && e.altKey) : (e.ctrlKey && e.shiftKey);

    if (e.key === "F12") {
      fire();
      return;
    }
    if (mod) {
      if (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "i" || e.key === "j" || e.key === "c") {
        fire();
      }
    }
  });

  /* ── Method 2: Window size (DevTools docked reduces viewport) ── */
  const THRESHOLD = 160;
  let lastWidth = window.outerWidth - window.innerWidth;
  let lastHeight = window.outerHeight - window.innerHeight;

  setInterval(() => {
    const w = window.outerWidth - window.innerWidth;
    const h = window.outerHeight - window.innerHeight;
    const devtoolsOpen = w > THRESHOLD || h > THRESHOLD;
    const wasClosed = lastWidth <= THRESHOLD && lastHeight <= THRESHOLD;
    lastWidth = w;
    lastHeight = h;
    if (devtoolsOpen && wasClosed) fire();
  }, 500);
})();
