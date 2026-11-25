// The six physical controls. Each one draws itself into a 400 × 400 SVG in the popup's Space, re-drawing every
// frame while its springs move. Pressing a part pushes it down: the part gets shorter and its hatched shadow
// tucks in under it, so it reads as a solid even though it is only lines.

import { view, CAMERAS, prism, roundRect, circle, move, shift, turnZ, turnX, draw, shadow, facePath, loop, seg, surfText, visibleFaces, Spring, lerp, rad, pathOf } from './iso.js';

const NS = 'http://www.w3.org/2000/svg';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let uid = 0;
export const all = []; // every control on the page, so one switch can turn all their cameras

class Control {
  constructor(host, opts = {}) {
    this.id = `ctl${++uid}`;
    all.push(this);
    this.opts = opts;
    this.onChange = opts.onChange || (() => {});
    this.springs = [];
    const cam = CAMERAS[opts.camera] || CAMERAS.iso;
    this.yaw = this.spring(cam.yaw, 0.12, 0.7);
    this.pitch = this.spring(cam.pitch, 0.12, 0.7);
    this.fillAmt = this.spring(opts.fill ? 1 : 0, 0.14, 0.7); // 0 = as drawn, 1 = the plate fills the Space
    this.lift = 20; // roughly how tall the control stands, for centring a filled drawing
    const svg = (this.svg = document.createElementNS(NS, 'svg'));
    this.box = [400, 400];
    svg.setAttribute('viewBox', '0 0 400 400');
    svg.setAttribute('class', 'iso');
    svg.tabIndex = 0;
    host.prepend(svg);
    svg.addEventListener('pointerdown', (e) => {
      const part = e.target.closest?.('[data-part]')?.dataset.part;
      if (!part) return;
      try { svg.setPointerCapture(e.pointerId); } catch {}
      this.held = true;
      this.down?.(part, this.pt(e), e);
      this.kick();
    });
    svg.addEventListener('pointermove', (e) => { if (this.held) { this.drag?.(this.pt(e)); this.kick(); } });
    const end = (e) => {
      if (!this.held) return;
      this.held = false;
      try { svg.releasePointerCapture(e.pointerId); } catch {}
      this.up?.(); this.kick();
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
    svg.addEventListener('keydown', (e) => { if (this.key?.(e, true)) { e.preventDefault(); this.kick(); } });
    svg.addEventListener('keyup', (e) => { if (this.key?.(e, false)) { e.preventDefault(); this.kick(); } });
  }
  pt(e) {
    const r = this.svg.getBoundingClientRect();
    return [((e.clientX - r.left) * this.box[0]) / r.width, ((e.clientY - r.top) * this.box[1]) / r.height];
  }
  // the view is worked out from the camera springs each frame, so a camera change glides
  get v() {
    const [U, ox0, oy0] = this.base, [bw, bh] = this.box, t = this.fillAmt.x;
    const ox = ox0 + (bw - 400) / 2, oy = oy0 + (bh - 400) / 2; // drawn: centred in the cell as it was in 400 × 400
    const v0 = view(U, ox, oy, this.yaw.x, this.pitch.x);
    if (t < 0.001) return v0;
    return view(U, lerp(ox, bw / 2, t), lerp(oy, bh / 2 + (this.lift * v0.cp * v0.k) / 2, t), this.yaw.x, this.pitch.x);
  }
  // the cell it's drawn in (a light's fader is a tall column beside its dial): the short side stays 400 units
  setBox(w, h) {
    if (!(w > 0 && h > 0)) return;
    const box = w >= h ? [Math.round((400 * w) / h), 400] : [400, Math.round((400 * h) / w)];
    if (box[0] === this.box[0] && box[1] === this.box[1]) return;
    this.box = box;
    this.svg.setAttribute('viewBox', '0 0 ' + box[0] + ' ' + box[1]);
    this.paint();
  }
  setFill(on) { this.fillAmt.t = on ? 1 : 0; this.kick(); }
  // Fill: the plate's width and depth so it fills 352 × 352 of the Space at this camera. Only works while the
  // control faces us (yaw under ~30°); at isometric the corners point at us, so it keeps its drawn size.
  size(w0, d0) {
    const t = this.fillAmt.x;
    if (t < 0.001) return [w0, d0];
    const v = this.v, c = v.cy, s = Math.abs(v.sy), det = c * c - s * s;
    if (det < 0.4) return [w0, d0];
    const A = (this.box[0] - 48) / v.k, B = ((this.box[1] - 48) / v.k - this.lift * v.cp) / v.sp;
    const W = Math.max(w0 * 0.6, (A * c - B * s) / det), D = Math.max(d0 * 0.6, (B * c - A * s) / det);
    return [lerp(w0, W, t), lerp(d0, D, t)];
  }
  setCamera(name) { const c = CAMERAS[name]; if (!c) return; this.yaw.t = c.yaw; this.pitch.t = c.pitch; this.kick(); }
  spring(x, k, d) { const s = new Spring(x, k, d); this.springs.push(s); return s; }
  kick() {
    if (reduceMotion.matches) { this.springs.forEach((s) => { s.x = s.t; s.v = 0; }); this.paint(); return; }
    if (!this.raf) this.raf = requestAnimationFrame(this.tick);
  }
  tick = () => {
    let live = false;
    for (const s of this.springs) live = s.step() || live;
    this.paint();
    this.raf = live ? requestAnimationFrame(this.tick) : 0;
  };
  paint() {
    const h = `${this.id}h`;
    this.svg.innerHTML =
      `<defs><pattern id="${h}" patternUnits="userSpaceOnUse" width="3.4" height="3.4" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="3.4" class="hatch"/></pattern></defs>` +
      this.render(h);
  }
}

/* 1 · Push button: a cap in a bezel on a plinth. Press it and it sinks; let go and it springs back and runs. */
export class PushButton extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.base = [3.4, 200, 190]; this.lift = 21;
    this.h = this.spring(10, 0.32, 0.55);
    this.glow = this.spring(0, 0.05, 0.8);
    this.svg.setAttribute('role', 'button');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  down(part) { if (part !== 'cap') return; this.pressing = true; this.h.t = 2.5; }
  up() {
    if (!this.pressing) return;
    this.pressing = false;
    this.h.t = 10;
    this.glow.x = 1; this.glow.t = 0;
    this.onChange();
  }
  key(e, isDown) {
    if (e.key !== ' ' && e.key !== 'Enter') return false;
    if (isDown && !this.pressing) this.down('cap');
    if (!isDown) this.up();
    return true;
  }
  show() {}
  render(h) {
    const v = this.v, top = 11 + this.h.x;
    const [W, D] = this.size(68, 68), m = Math.min(W, D) / 68;
    const plinth = prism(roundRect(W, D, 18 * m), 0, 8);
    const bezel = prism(circle(25 * m), 8, 11);
    const cap = prism(circle(18.5 * m), 11, top);
    const ring = circle(12.5 * m).map(([x, y]) => [x, y, top]);
    const glow = Math.max(0, Math.min(1, this.glow.x));
    return (
      shadow(v, plinth, 0, h) + draw(v, plinth) +
      draw(v, bezel, 'cap') +
      shadow(v, cap, 11, h, facePath(v, bezel, 1)) +
      draw(v, cap, 'cap') +
      loop(v, ring) +
      (glow > 0.01 ? `<g style="opacity:${glow.toFixed(3)}">${loop(v, ring, 'accent')}</g>` : '')
    );
  }
}

/* 2 · Rocker: a paddle that rocks on a bar. The pressed half sits low; O at the back, I at the front. */
export class Rocker extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.on = !!opts.on;
    this.base = [2.75, 200, 186]; this.lift = 21;
    this.t = this.spring(this.on ? 1 : 0, 0.3, 0.5);
    this.svg.setAttribute('role', 'switch');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  set(on) { this.on = on; this.t.t = on ? 1 : 0; this.svg.setAttribute('aria-checked', on); this.onChange(on); }
  down(part) { if (part === 'paddle') this.set(!this.on); }
  key(e, isDown) {
    if (e.key !== ' ' && e.key !== 'Enter') return false;
    if (isDown && !e.repeat) this.set(!this.on);
    return true;
  }
  // from the device: moves without sending anything back
  show(on) { if (this.held) return; this.on = on; this.t.t = on ? 1 : 0; this.svg.setAttribute('aria-checked', on); this.kick(); }
  render(h) {
    const v = this.v, t = this.t.x;
    const [W, D] = this.size(72, 96), sx = W / 72, sy = D / 96, m = Math.min(sx, sy);
    const base = 9, hb = lerp(3, 12, t), hf = lerp(12, 3, t), hm = (hb + hf) / 2 - 1.4, L = 31 * sy;
    const plate = prism(roundRect(W, D, 16 * m), 0, 6);
    const bezel = prism(roundRect(48 * sx, 72 * sy, 9 * m), 6, base);
    const profile = [[-L, base], [L, base], [L, base + hf], [0, base + hm], [-L, base + hb]];
    const paddle = prism(profile, -20 * sx, 20 * sx, false, (u, w, x) => [x, u, w]);
    const zAt = (y) => base + (y < 0 ? lerp(hb, hm, (y + L) / L) : lerp(hm, hf, y / L)) + 0.05;
    const o = circle(4.2 * m, 36).map(([x, y]) => [x, y - L / 2, zAt(y - L / 2)]);
    const i = [[0, L * 0.32], [0, L * 0.68]].map(([x, y]) => [x, y, zAt(y)]);
    return (
      shadow(v, plate, 0, h) + draw(v, plate) +
      draw(v, bezel, 'paddle') +
      shadow(v, paddle, base, h, facePath(v, bezel, 1)) +
      draw(v, paddle, 'paddle') +
      loop(v, o, this.on ? 'edge mark' : 'accent mark') +
      seg(v, i[0], i[1], this.on ? 'accent mark' : 'edge mark')
    );
  }
}

/* 3 · Fader: a knob that slides along a slot; the slot fills up to it. Grabbing it presses it down a little. */
export class Fader extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.level = opts.value ?? 0.6;
    this.base = [2.35, 200, 190]; this.lift = 19;
    this.L = this.spring(this.level, 0.32, 0.6);
    this.kh = this.spring(13, 0.3, 0.55);
    this.svg.setAttribute('role', 'slider');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  set(level) {
    this.level = Math.max(0, Math.min(1, level));
    this.L.t = this.level;
    this.svg.setAttribute('aria-valuenow', Math.round(this.level * 100));
    this.onChange(this.level);
  }
  down(part, p) { this.grab = { p, level: this.level }; this.kh.t = 9.5; }
  drag(p) {
    if (!this.grab) return;
    const v = this.v, a = v.p([0, 0, 0]), b = v.p([0, 1, 0]);
    const dir = [b[0] - a[0], b[1] - a[1]]; // screen vector of one world step along +y
    const dy = ((p[0] - this.grab.p[0]) * dir[0] + (p[1] - this.grab.p[1]) * dir[1]) / (dir[0] ** 2 + dir[1] ** 2);
    this.set(this.grab.level - dy / (this.travel || 96));
  }
  up() { this.grab = null; this.kh.t = 13; }
  key(e, isDown) {
    const step = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05 }[e.key];
    if (step === undefined) return false;
    if (isDown) { this.set(Math.round((this.level + step) * 20) / 20); this.kh.t = 10.5; } else this.kh.t = 13;
    return true;
  }
  show(level) { if (this.held) return; this.level = Math.max(0, Math.min(1, level)); this.L.t = this.level; this.svg.setAttribute('aria-valuenow', Math.round(this.level * 100)); this.kick(); }
  render(h) {
    const v = this.v;
    // Fill makes the fader longer, never wider: it stays a narrow strip (Matt, 25 Nov)
    const D = this.size(44, 136)[1], W = 44, sx = 1, sy = D / 136, m = 1;
    const half = 48 * sy, top = 6 + this.kh.x, y = half - this.L.x * 2 * half;
    this.travel = 2 * half;
    const kw = Math.min(32 * sx, W - 12), g = kw / 32;
    const plate = prism(roundRect(W, D, 16 * m), 0, 6);
    const knob = move(prism(roundRect(kw, 16 * m, 5 * m), 6, top), shift(0, y, 0));
    let ticks = '';
    for (let k = 0; k <= 10; k++) {
      const ty = half - k * (2 * half) / 10, len = (k % 5 === 0 ? 7 : 4) * sx, x0 = 9 * m;
      ticks += seg(v, [x0, ty, 6], [x0 + len, ty, 6]) + seg(v, [-x0, ty, 6], [-x0 - len, ty, 6]);
    }
    const slot = roundRect(6 * m, 2 * half + 6 * m, 3 * m).map(([x, yy]) => [x, yy, 6]);
    const level = [[-3 * m, half + 3 * m, 6], [3 * m, half + 3 * m, 6], [3 * m, y, 6], [-3 * m, y, 6]];
    return (
      shadow(v, plate, 0, h) + draw(v, plate, 'plate') +
      `<g class="deco">${ticks}${loop(v, slot)}<path class="level" d="${pathOf(level.map(v.p))}"/></g>` +
      shadow(v, knob, 6, h, facePath(v, plate, 1)) +
      draw(v, knob, 'knob') +
      `<g class="deco">${seg(v, [-12 * g, y, top], [12 * g, y, top])}${seg(v, [-8 * g, y - 3.5 * m, top], [8 * g, y - 3.5 * m, top])}${seg(v, [-8 * g, y + 3.5 * m, top], [8 * g, y + 3.5 * m, top])}</g>`
    );
  }
}

/* 4 · Dial: a knurled knob on a plinth with a printed scale. Turn it and it clicks in half-degree steps. */
export class Dial extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.min = opts.min ?? 10; this.max = opts.max ?? 30; this.now = 'now' in opts ? opts.now : 19.5;
    this.value = opts.value ?? 21.5;
    // a colour dial (Matt, 25 Nov: "a thermostat style control for colour") prints its scale in colour: tint(val)
    // gives each tick's colour and the knob's top shows the chosen one; step, tick and major set its divisions
    this.step = opts.step ?? 0.5; this.tickStep = opts.tick ?? 0.5; this.major = opts.major ?? 10; // (tickStep: `tick` is the animation)
    this.tint = opts.tint || null; this.labelOf = opts.labelOf || ((val) => val);
    this.base = [2.85, 200, 194]; this.lift = 22;
    this.val = this.spring(this.value, 0.35, 0.5);
    this.kh = this.spring(15, 0.3, 0.55);
    this.svg.setAttribute('role', 'slider');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  // the scale's angle as the viewer sees it: the gap always faces us, min on the left, max on the right
  ang(val) { return 135 + ((val - this.min) / (this.max - this.min)) * 270 - this.yaw.x; }
  set(val) {
    const snapped = Math.max(this.min, Math.min(this.max, Math.round(val / this.step) * this.step));
    if (snapped !== this.value) { this.value = snapped; this.onChange(snapped); }
    this.val.t = snapped;
    this.svg.setAttribute('aria-valuenow', snapped);
  }
  angleAt(p) { const [x, y] = this.v.ground(p[0], p[1], 7 + this.kh.x); return (Math.atan2(y, x) * 180) / Math.PI; }
  down(part, p) { this.grab = { last: this.angleAt(p), raw: this.value }; this.kh.t = 11.5; }
  drag(p) {
    if (!this.grab) return;
    const a = this.angleAt(p);
    let d = a - this.grab.last;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    this.grab.last = a;
    this.grab.raw = Math.max(this.min, Math.min(this.max, this.grab.raw + (d / 270) * (this.max - this.min)));
    this.set(this.grab.raw);
  }
  up() { this.grab = null; this.kh.t = 15; }
  key(e, isDown) {
    const step = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
    if (step === undefined) return false;
    if (isDown) { this.set(this.value + step * this.step); this.kh.t = 12.5; } else this.kh.t = 15;
    return true;
  }
  show(val, now) { if (this.held) return; if (now != null) this.now = now; if (val != null) { this.value = val; this.val.t = val; this.svg.setAttribute('aria-valuenow', val); } this.kick(); }
  render(h) {
    const v = this.v, top = 7 + this.kh.x, a = this.ang(this.val.x);
    const [W, D] = this.size(92, 92), rx = W / 92, ry = D / 92, m = Math.min(rx, ry);
    const at = (r, t, z) => [r * Math.cos(t) * rx, r * Math.sin(t) * ry, z];
    const plinth = prism(circle(46, 72).map(([x, y]) => [x * rx, y * ry]), 0, 7);
    const knob = prism(circle(22 * m, 64), 7, top);
    const lo = Math.min(this.now ?? this.value, this.value), hi = Math.max(this.now ?? this.value, this.value);
    let scale = '';
    const n = Math.round((this.max - this.min) / this.tickStep), half = Math.max(1, Math.round(this.major / 2));
    for (let k = 0; k <= n; k++) {
      const val = this.min + k * this.tickStep, t = rad(this.ang(val)), major = k % this.major === 0;
      const r1 = major ? 36.5 : k % half === 0 ? 34.5 : 33.2;
      const on = !this.tint && this.now != null && val >= lo && val <= hi && this.value > this.now;
      const cls = this.tint ? 'edge tint" style="stroke:' + this.tint(val) : on ? 'accent' : 'edge';
      scale += seg(v, at(30, t, 7), at(this.tint ? 37 : r1, t, 7), cls);
      const label = major ? this.labelOf(val) : null;
      if (label != null && label !== '') scale += surfText(v, at(41.5, t, 7), label, 4 * m);
    }
    let knurl = '';
    for (let j = 0; j < 40; j++) {
      const t = rad(a + j * 9), c = Math.cos(t), s = Math.sin(t), r = 22 * m;
      if (c * v.V[0] + s * v.V[1] > 0.12 * Math.hypot(v.V[0], v.V[1])) knurl += seg(v, [r * c, r * s, 9], [r * c, r * s, top - 2.2]);
    }
    const t = rad(a);
    const ring = circle(18.5 * m, 64).map(([x, y]) => [x, y, top]);
    return (
      shadow(v, plinth, 0, h) + draw(v, plinth, 'knob') +
      `<g class="deco">${scale}</g>` +
      shadow(v, knob, 7, h, facePath(v, plinth, 1)) +
      draw(v, knob, 'knob') +
      `<g class="deco">${knurl}${loop(v, ring)}` +
      (this.tint ? `<path class="swatch" style="fill:${this.tint(this.value)}" d="${pathOf(circle(8 * m, 40).map(([x, y]) => v.p([x, y, top])))}"/>` : '') +
      `${seg(v, [(this.tint ? 10 : 5) * m * Math.cos(t), (this.tint ? 10 : 5) * m * Math.sin(t), top], [15.5 * m * Math.cos(t), 15.5 * m * Math.sin(t), top], 'edge pointer')}</g>`
    );
  }
}

/* 5 · Rotary selector: a pointer knob that clicks between named positions printed on the plate. */
export class Rotary extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.positions = opts.positions; // [{ label, a }]
    this.index = opts.index ?? 0;
    this.base = [2.45, 200, 196]; this.lift = 21;
    this.A = this.spring(this.positions[this.index].a, 0.22, 0.6); // camera angle; the world angle is A − yaw
    this.ph = this.spring(9, 0.3, 0.55);
    this.svg.setAttribute('role', 'slider');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  set(i) {
    this.index = (i + this.positions.length) % this.positions.length;
    this.A.t = this.positions[this.index].a;
    this.svg.setAttribute('aria-valuetext', this.positions[this.index].label);
    this.onChange(this.index);
  }
  angleAt(p) { const [x, y] = this.v.ground(p[0], p[1], 12); return (Math.atan2(y, x) * 180) / Math.PI + this.yaw.x; }
  down(part, p) {
    if (part.startsWith('pos-')) { this.set(+part.slice(4)); this.ph.t = 7; this.grab = null; return; }
    this.grab = { last: this.angleAt(p), moved: 0 };
    this.ph.t = 6.5;
  }
  drag(p) {
    if (!this.grab) return;
    const a = this.angleAt(p);
    let d = a - this.grab.last;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    this.grab.last = a;
    this.grab.moved += Math.abs(d);
    const first = this.positions[0].a, last = this.positions[this.positions.length - 1].a;
    this.A.t = Math.max(first - 8, Math.min(last + 8, this.A.t + d));
  }
  up() {
    this.ph.t = 9;
    if (!this.grab) return;
    if (this.grab.moved < 4) this.set(this.index + 1);
    else {
      let best = 0;
      this.positions.forEach((p, i) => { if (Math.abs(p.a - this.A.t) < Math.abs(this.positions[best].a - this.A.t)) best = i; });
      this.set(best);
    }
    this.grab = null;
  }
  key(e, isDown) {
    const step = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, ' ': 1, Enter: 1 }[e.key];
    if (step === undefined) return false;
    if (isDown) {
      const i = Math.max(0, Math.min(this.positions.length - 1, this.index + step));
      this.set(e.key === ' ' || e.key === 'Enter' ? this.index + 1 : i);
      this.ph.t = 7;
    } else this.ph.t = 9;
    return true;
  }
  show(i) { if (this.held || i === this.index) return; this.index = i; this.A.t = this.positions[i].a; this.svg.setAttribute('aria-valuetext', this.positions[i].label); this.kick(); }
  render(h) {
    const v = this.v, A = this.A.x - this.yaw.x, top = 12 + this.ph.x;
    const [W, D] = this.size(92, 92), sx = W / 92, sy = D / 92, m = Math.min(sx, sy);
    const plate = prism(roundRect(W, D, 20 * m), 0, 7);
    const body = prism(circle(15 * m, 48), 7, 12);
    const bar = move(prism([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([x, y]) => [x * m, y * m]), 12, top, false), turnZ(A));
    let marks = '';
    this.positions.forEach((p, i) => {
      const t = rad(p.a - this.yaw.x), sel = i === this.index, c = Math.cos(t), s = Math.sin(t);
      const dot = circle(1.7 * m, 20).map(([x, y]) => [x + 26.5 * c * sx, y + 26.5 * s * sy, 7]);
      marks += sel ? `<path class="dotfill" d="${pathOf(dot.map(v.p))}"/>` : loop(v, dot);
      marks += surfText(v, [37.5 * c * sx, 37.5 * s * sy, 7], p.label, 5.6 * m, { part: `pos-${i}`, cls: sel ? 'sel' : '', w: 26 });
    });
    return (
      shadow(v, plate, 0, h) + draw(v, plate) +
      marks +
      shadow(v, bar, 7, h, facePath(v, plate, 1)) +
      draw(v, body, 'knob') +
      draw(v, bar, 'knob') +
      `<g class="deco">${seg(v, turnZ(A)([6 * m, 0, top]), turnZ(A)([19 * m, 0, top]))}</g>`
    );
  }
}

/* 6 · Guarded switch: a striped cover hinged at the back. Lift it, then flip the toggle underneath. */
export class Guarded extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.on = !!opts.on;
    this.base = [2.4, 206, 214]; this.lift = 30;
    this.phi = this.spring(this.on ? 24 : -24, 0.3, 0.5);
    this.lid = this.spring(0, 0.16, 0.66);
    this.svg.setAttribute('role', 'switch');
    this.svg.setAttribute('aria-label', opts.label);
    this.paint();
  }
  get open() { return this.lid.t > 0; }
  setLid(open) { this.lid.t = open ? 108 : 0; this.opts.onLid?.(open); }
  flip() { this.on = !this.on; this.phi.t = this.on ? 24 : -24; this.svg.setAttribute('aria-checked', this.on); this.onChange(this.on); }
  down(part) {
    if (part === 'cover') this.setLid(!this.open);
    else if (part === 'toggle' && this.open) this.flip();
  }
  key(e, isDown) {
    if (e.key === 'Escape') { if (isDown) this.setLid(false); return true; }
    if (e.key !== ' ' && e.key !== 'Enter') return false;
    if (isDown && !e.repeat) this.open ? this.flip() : this.setLid(true);
    return true;
  }
  show(on) { if (this.held) return; this.on = on; this.phi.t = on ? 24 : -24; this.svg.setAttribute('aria-checked', on); this.kick(); }
  render(h) {
    const v = this.v, cy = 6, hingeY = cy - 23, hingeZ = 6;
    const [W, D] = this.size(86, 104), m = Math.min(W / 86, D / 104);
    const grow = ([x, y, z]) => [x * m, y * m, 6 + (z - 6) * m]; // the cover and toggle grow with the plate, from its top
    const plate = prism(roundRect(W, D, 18 * m), 0, 6);
    const collar = move(prism(circle(8, 40), 6, 10), (p) => grow(shift(0, cy, 0)(p)));
    const tilt = (p) => grow(shift(0, cy, 10)(turnX(this.phi.x)(p)));
    const bat = move(prism(circle(2.2, 20), 0, 13.5), tilt);
    const tip = move(prism(circle(3.8, 24), 12.5, 17.5), tilt);
    const lidT = (p) => grow(turnX(-this.lid.x, hingeY, hingeZ)(p));
    const cover = move(prism(roundRect(40, 46, 7), 6, 30), (p) => lidT(shift(0, cy, 0)(p)));
    const vis = visibleFaces(cover, v.V);
    let deco = '';
    if (vis[1]) {
      let stripes = '';
      for (let k = -84; k <= 84; k += 12) {
        const band = [[k - 40, cy - 40], [k - 34, cy - 40], [k + 46, cy + 40], [k + 40, cy + 40]].map(([x, y]) => v.p(lidT([x, y, 30])));
        stripes += `<path class="level" d="${pathOf(band)}"/>`;
      }
      const id = `${this.id}s`;
      deco += `<clipPath id="${id}"><path d="${facePath(v, cover, 1)}"/></clipPath><g clip-path="url(#${id})">${stripes}</g>`;
    }
    if (vis[0]) deco += loop(v, roundRect(32, 38, 4).map(([x, y]) => lidT([x, y + cy, 6])));
    const toggle = `<g data-part="toggle">${draw(v, collar)}${draw(v, bat)}${draw(v, tip)}</g>`;
    const lid = `<g data-part="cover">${draw(v, cover)}<g class="deco">${deco}</g></g>`;
    const openish = this.lid.x > 45;
    return (
      shadow(v, plate, 0, h) + draw(v, plate) +
      shadow(v, cover, 6, h, facePath(v, plate, 1)) +
      shadow(v, tip, 6, h, facePath(v, plate, 1)) +
      (openish ? lid + toggle : toggle + lid)
    );
  }
}

/* 7 · Toggle switch: a lever on a collar, for anything that is on or off. Up (away from you) is On, down is Off,
   printed on the plate; the lever flips with a little overshoot and the nut dips as it's pressed. */
export class Toggle extends Control {
  constructor(host, opts) {
    super(host, opts);
    this.on = !!opts.on;
    this.labels = opts.labels || ['On', 'Off'];
    this.base = [3.1, 200, 206]; this.lift = 24;
    this.phi = this.spring(this.on ? -28 : 28, 0.3, 0.45);
    this.press = this.spring(0, 0.3, 0.55);
    this.svg.setAttribute('role', 'switch');
    this.svg.setAttribute('aria-label', opts.label);
    this.svg.setAttribute('aria-checked', this.on);
    this.paint();
  }
  set(on) { this.on = on; this.phi.t = on ? -28 : 28; this.svg.setAttribute('aria-checked', on); this.onChange(on); }
  show(on) { if (this.held || on === this.on) return; this.on = on; this.phi.t = on ? -28 : 28; this.svg.setAttribute('aria-checked', on); this.kick(); }
  down(part) { if (part !== 'lever') return; this.press.t = 1; this.set(!this.on); }
  up() { this.press.t = 0; }
  key(e, isDown) {
    if (e.key !== ' ' && e.key !== 'Enter') return false;
    if (isDown && !e.repeat) this.down('lever'); else if (!isDown) this.up();
    return true;
  }
  render(h) {
    const v = this.v;
    const [W, D] = this.size(64, 84), m = Math.min(W / 64, D / 84);
    const grow = ([x, y, z]) => [x * m, y * m, 6 + (z - 6) * m]; // the lever grows with the plate, from its top
    const dip = this.press.x * 1.2;
    const plate = prism(roundRect(W, D, 16 * m), 0, 6);
    const nut = move(prism(circle(10, 6).map(([x, y]) => [x, y]), 6, 9 - dip, false), (p) => grow(turnZ(30)(p)));
    const collar = move(prism(circle(6.5, 36), 9 - dip, 12 - dip), grow);
    const tilt = (p) => grow(shift(0, 0, 12 - dip)(turnX(this.phi.x)(p)));
    const bat = move(prism(circle(2.3, 20), 0, 15), tilt);
    const tip = move(prism(circle(4, 24), 14, 19), tilt);
    const ly = D / 2 - 13 * m;
    const label = (txt, y, sel) => surfText(v, [0, y, 6], txt, 6 * m, { part: 'lever', cls: sel ? 'sel' : '', w: 30 });
    return (
      shadow(v, plate, 0, h) + draw(v, plate) +
      label(this.labels[0], -ly, this.on) + label(this.labels[1], ly, !this.on) +
      shadow(v, tip, 6, h, facePath(v, plate, 1)) + shadow(v, bat, 6, h, facePath(v, plate, 1)) +
      `<g data-part="lever">${draw(v, nut)}${draw(v, collar)}${draw(v, bat)}${draw(v, tip)}</g>`
    );
  }
}
