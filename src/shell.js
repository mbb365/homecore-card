// HomeCore's shell: the home and settings views, the bottom bar, the theme and the toast. The house page itself is
// test-focus.js; this is only what it needs round it.
const THEME_KEY = 'homecore-theme';

const ICONS = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>',
};
const icon = (name) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';

const local = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode: the choice lasts the session */ } },
};

export function mountShell(root, { setLight, fullscreenSupported, toggleFullscreen }) {
  const $ = (id) => root.getElementById(id);
  const app = $('app');
  root.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  /* the views: Home and Settings */
  const views = { home: $('homeView'), settings: $('settingsView') };
  const homeNav = $('homeNav'), settingsNav = $('settingsNav');
  function showView(name) {
    Object.entries(views).forEach(([k, v]) => v.classList.toggle('active', k === name));
    homeNav.classList.toggle('active', name === 'home');
    settingsNav.classList.toggle('active', name === 'settings');
  }
  homeNav.addEventListener('click', () => showView('home'));
  settingsNav.addEventListener('click', () => showView('settings'));
  $('settingsBack').addEventListener('click', () => showView('home'));

  /* the theme, dark unless chosen otherwise */
  function applyTheme(theme) {
    const isLight = theme === 'light';
    root.querySelectorAll('.themeBtn').forEach((b) => b.classList.toggle('active', b.dataset.theme === theme));
    app.classList.toggle('light', isLight);
    setLight(isLight);
  }
  applyTheme(local.get(THEME_KEY) === 'light' ? 'light' : 'dark');
  root.querySelectorAll('.themeBtn').forEach((btn) => btn.addEventListener('click', () => { applyTheme(btn.dataset.theme); local.set(THEME_KEY, btn.dataset.theme); }));

  /* full screen, where the browser allows it */
  const tvNav = $('tvNav');
  if (!fullscreenSupported) tvNav.hidden = true;
  tvNav.addEventListener('click', () => toggleFullscreen());

  /* a line at the bottom for a moment */
  let toastTimer;
  function toast(message) {
    const el = $('toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  return { showView, toast };
}
