(function () {
  var html = document.documentElement;
  var ls = localStorage;

  /* ── Theme ── */
  function resolveAutoTheme() {
    var h = new Date().getHours();
    return (h >= 20 || h < 7 || window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.classList.remove('dark', 'light');
    html.classList.add(theme);
    document.getElementById('iconSun').style.display  = theme === 'dark'  ? 'block' : 'none';
    document.getElementById('iconMoon').style.display = theme === 'light' ? 'block' : 'none';
  }

  applyTheme(ls.getItem('theme') || resolveAutoTheme());

  document.getElementById('themeToggle').addEventListener('click', function () {
    var btn = this;
    var next = html.classList.contains('dark') ? 'light' : 'dark';
    ls.setItem('theme', next);
    applyTheme(next);
    btn.classList.remove('spin');
    void btn.offsetWidth;
    btn.classList.add('spin');
    btn.addEventListener('animationend', function () {
      btn.classList.remove('spin');
    }, { once: true });
  });

  /* ── Accessibility mode (high contrast + reduce motion) ── */
  var a11yBtn = document.getElementById('a11yBtn');

  function setA11y(on) {
    html.classList.toggle('a11y', on);
    html.classList.toggle('no-motion', on);
    a11yBtn.classList.toggle('active', on);
    a11yBtn.setAttribute('aria-pressed', String(on));
    a11yBtn.setAttribute('aria-label', on ? 'Disable accessibility mode' : 'Enable accessibility mode');
    ls.setItem('a11y', on ? '1' : '0');
  }

  var saved = ls.getItem('a11y');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setA11y(saved === '1' || (saved === null && prefersReduced));

  a11yBtn.addEventListener('click', function () {
    setA11y(!html.classList.contains('a11y'));
  });
})();
