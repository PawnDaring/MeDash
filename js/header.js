/* ════════════════════════════════════════════════════════
   NAME CYCLE
   ════════════════════════════════════════════════════════ */
(() => {
  const names = [
    'James', 'Jimbo', 'Jamie', 'HAH-mess', 'Seamus',
    'Jimmy', 'Jimmy-Bob-Thorton', 'Sweet Baby James', 'Dummy', 'Wizard', 'Guru', 'Jimmothy', 'Jameson','robby',
  ];
  let idx = 0;
  const el = document.getElementById('nameText');
  function showName(dir) {
    el.style.opacity = '0';
    el.style.transform = dir > 0 ? 'translateY(-4px)' : 'translateY(4px)';
    setTimeout(() => {
      if (names[idx] === 'Sweet Baby James' || names[idx] === 'Guru' || names[idx] === 'robby') {
        el.innerHTML = '<span style="text-decoration:line-through;color:#c94e44">' + names[idx] + '</span>';
      } else {
        el.innerHTML = names[idx];
      }
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 180);
  }
  document.getElementById('nameNext').addEventListener('click', () => {
    idx = (idx + 1) % names.length;
    showName(1);
  });
  document.getElementById('namePrev').addEventListener('click', () => {
    idx = (idx - 1 + names.length) % names.length;
    showName(-1);
  });
  el.style.transition = 'opacity .18s, transform .18s';
  el.style.display = 'inline-block';
})();
