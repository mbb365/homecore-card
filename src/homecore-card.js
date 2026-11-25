import css from "./styles.css?inline";
import displayCss from "./display.css?inline";
import bentoCss from "./weather-bento.css?inline";
import motionCss from "./motion.css?inline";
import template from "./template.html?raw";
import { mountShell } from "./shell.js";
import { mountTestFocus } from "./test-focus.js";
import { installMotion, installSegments } from "./motion.js";

const VERSION = "0.15.0";

// Fonts declared inside a shadow root are ignored, so Inter (and Geist, for tile text) is added to the page once.
function loadFonts() {
  if (document.getElementById("homecore-fonts")) return;
  const link = document.createElement("link");
  link.id = "homecore-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap";
  document.head.appendChild(link);
}

class HomeCoreCard extends HTMLElement {
  setConfig(config) {
    // the house page is the default; `page: overview` is the other page
    this._config = { layout: "test-focus", ...(config || {}) };
  }

  static getStubConfig() {
    return {};
  }

  getCardSize() {
    return 12;
  }

  getGridOptions() {
    return { columns: "full", min_columns: 12 };
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) {
      this._init();
      return;
    }
    if (this._test && hass.states !== this._lastStates) {
      this._lastStates = hass.states;
      this._test.update(hass.states);
    }
  }

  connectedCallback() {
    this._test?.resume();
  }

  disconnectedCallback() {
    this._test?.suspend();
  }

  _init() {
    loadFonts();
    const root = this.shadowRoot || this.attachShadow({ mode: "open" });
    root.innerHTML = `<style>${css}${displayCss}${bentoCss}${motionCss}</style>${template}`;
    const app = root.getElementById("app");
    app.style.opacity = "0";

    this._shell = mountShell(root, {
      setLight: (isLight) => this.classList.toggle("lightBody", isLight),
      fullscreenSupported: Boolean(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen(),
    });
    this._lastStates = this._hass.states;
    this._test = mountTestFocus(root, { config: this._config, getHass: () => this._hass });
    this._test.update(this._hass.states);
    // HomeCore's micro-interactions (the Motion Lab's eleven, as the leadership demo)
    installMotion(root, app);
    installSegments(root);
    if (!this.isConnected) this._test.suspend();
    app.style.transition = "opacity .2s ease";
    app.style.opacity = "";
  }

  _toggleFullscreen() {
    const doc = document;
    if (doc.fullscreenElement || doc.webkitFullscreenElement) {
      (doc.exitFullscreen || doc.webkitExitFullscreen).call(doc);
      return;
    }
    const request = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(request.call(this)).catch(() =>
      this._shell?.toast("Full screen isn't available here")
    );
  }
}

if (!customElements.get("homecore-card")) {
  customElements.define("homecore-card", HomeCoreCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "homecore-card",
    name: "HomeCore",
    description: "A test environment for the HomeCore design language.",
    preview: false,
  });
  // eslint-disable-next-line no-console
  console.info(`%c HOMECORE %c ${VERSION} `, "background:#03a9f4;color:#090909;font-weight:700", "");
}
