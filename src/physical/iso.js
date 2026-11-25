// Isometric line drawing: solids are polygons extruded into prisms, seen from (1,1,1).
// A solid draws its visible faces filled with the Space colour (so it hides what is behind it), then only the
// edges that read as lines: outlines, sharp creases, and the silhouette of smooth sides (no seams on a cylinder).

export const C = Math.cos(Math.PI / 6), S = 0.5;
export const f = (n) => Math.round(n * 100) / 100;
export const rad = (d) => (d * Math.PI) / 180;
export const lerp = (a, b, t) => a + (b - a) * t;

// Camera angles: yaw turns the control on the table, pitch is how far above the table we look from.
// Isometric is yaw 45, pitch 35.26. Front is nearly straight down at the control's face, turned a touch.
export const CAMERAS = {
  iso: { yaw: 45, pitch: 35.26, label: 'Isometric' },
  three: { yaw: 22, pitch: 50, label: 'Three-quarter' },
  tilted: { yaw: 7, pitch: 66, label: 'Tilted' },
  front: { yaw: 0, pitch: 60, label: 'Front' }, // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: 'Flat' }, // dead straight on; only the shadows show depth
};

// Orthographic view. U keeps the isometric scale (k = U·√1.5 makes yaw 45 / pitch 35.26 match the old drawings).
export function view(U, ox, oy, yaw = 45, pitch = 35.26) {
  const k = U * Math.sqrt(1.5);
  const cy = Math.cos(rad(yaw)), sy = Math.sin(rad(yaw)), cp = Math.cos(rad(pitch)), sp = Math.sin(rad(pitch));
  // light in camera terms: shadows fall to the right and a little toward us, whatever the angle
  const lx = 0.68, ly = 0.12;
  return {
    U, ox, oy, yaw,
    V: [sy * cp, cy * cp, sp],
    L: [lx * cy + ly * sy, -lx * sy + ly * cy],
    k, cy, sy, sp, cp,
    p: ([x, y, z]) => {
      const x1 = x * cy - y * sy, y1 = x * sy + y * cy;
      return [ox + x1 * k, oy + (y1 * sp - z * cp) * k];
    },
    // screen point → world x, y on the plane at height z
    ground(px, py, z) {
      const x1 = (px - ox) / k, y1 = ((py - oy) / k + z * cp) / sp;
      return [x1 * cy + y1 * sy, -x1 * sy + y1 * cy];
    },
  };
}

export const pathOf = (pts, close = true) =>
  'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L') + (close ? 'Z' : '');

export function roundRect(w, h, r, seg = 7) {
  const pts = [];
  const corners = [[w / 2 - r, h / 2 - r, 0], [-(w / 2 - r), h / 2 - r, 90], [-(w / 2 - r), -(h / 2 - r), 180], [w / 2 - r, -(h / 2 - r), 270]];
  for (const [cx, cy, a0] of corners)
    for (let i = 0; i <= seg; i++) {
      const a = rad(a0 + (90 * i) / seg);
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  return pts;
}

export const circle = (r, n = 56) =>
  Array.from({ length: n }, (_, i) => [r * Math.cos((2 * Math.PI * i) / n), r * Math.sin((2 * Math.PI * i) / n)]);

// profile (u, v) extruded along w from a0 to a1; map turns (u, v, w) into world (x, y, z)
export function prism(profile, a0, a1, smooth = true, map = (u, v, w) => [u, v, w]) {
  const n = profile.length;
  const verts = [...profile.map(([u, v]) => map(u, v, a0)), ...profile.map(([u, v]) => map(u, v, a1))];
  const faces = [
    { idx: profile.map((_, i) => i), smooth: false },
    { idx: profile.map((_, i) => n + i), smooth: false },
  ];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    faces.push({ idx: [i, j, n + j, n + i], smooth });
  }
  return { verts, faces };
}

export const move = (solid, fn) => ({ ...solid, verts: solid.verts.map(fn) });
export const shift = (dx, dy, dz) => ([x, y, z]) => [x + dx, y + dy, z + dz];
export const turnZ = (deg, cx = 0, cy = 0) => {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return ([x, y, z]) => [cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c, z];
};
// tilt about a line parallel to x through (cy, cz); positive leans the top toward +y
export const turnX = (deg, cy = 0, cz = 0) => {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return ([x, y, z]) => [x, cy + (y - cy) * c + (z - cz) * s, cz - (y - cy) * s + (z - cz) * c];
};

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const mean = (pts) => pts.reduce((m, p) => [m[0] + p[0] / pts.length, m[1] + p[1] / pts.length, m[2] + p[2] / pts.length], [0, 0, 0]);
function normal(pts) {
  const n = [0, 0, 0];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    n[0] += (a[1] - b[1]) * (a[2] + b[2]);
    n[1] += (a[2] - b[2]) * (a[0] + b[0]);
    n[2] += (a[0] - b[0]) * (a[1] + b[1]);
  }
  return n;
}

export function visibleFaces(solid, V = [1, 1, 1]) {
  const centre = mean(solid.verts);
  return solid.faces.map((fc) => {
    const pts = fc.idx.map((i) => solid.verts[i]);
    let n = normal(pts);
    if (dot(n, sub(mean(pts), centre)) < 0) n = [-n[0], -n[1], -n[2]];
    return dot(n, V) > 1e-6 * Math.hypot(...n);
  });
}

export const facePath = (v, solid, i) => pathOf(solid.faces[i].idx.map((k) => v.p(solid.verts[k])));

export function draw(v, solid, part = '', cls = '') {
  const P = solid.verts.map(v.p);
  const vis = visibleFaces(solid, v.V);
  let fill = '';
  solid.faces.forEach((fc, i) => { if (vis[i]) fill += pathOf(fc.idx.map((k) => P[k])); });
  const edges = new Map();
  solid.faces.forEach((fc, fi) => {
    for (let k = 0; k < fc.idx.length; k++) {
      const a = fc.idx[k], b = fc.idx[(k + 1) % fc.idx.length];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!edges.has(key)) edges.set(key, { a, b, fs: [] });
      edges.get(key).fs.push(fi);
    }
  });
  let edge = '';
  for (const { a, b, fs } of edges.values()) {
    const [f1, f2] = fs;
    const v1 = vis[f1], v2 = f2 === undefined ? false : vis[f2];
    const smooth = f2 !== undefined && solid.faces[f1].smooth && solid.faces[f2].smooth;
    if (v1 !== v2 || (v1 && v2 && !smooth)) edge += `M${f(P[a][0])} ${f(P[a][1])}L${f(P[b][0])} ${f(P[b][1])}`;
  }
  return `<g${part ? ` data-part="${part}"` : ''}${cls ? ` class="${cls}"` : ''}><path class="face" d="${fill}"/><path class="edge" d="${edge}"/></g>`;
}

// Shadow: every point above the plane falls toward the viewer's right (v.L, set per camera).
function hull(pts) {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
let clipN = 0;
export function shadow(v, solid, planeZ, hatchId, clipD = '') {
  const pts = solid.verts
    .filter((p) => p[2] >= planeZ - 0.01)
    .map(([x, y, z]) => v.p([x + (z - planeZ) * v.L[0], y + (z - planeZ) * v.L[1], planeZ]));
  if (pts.length < 3) return '';
  const d = pathOf(hull(pts));
  if (!clipD) return `<path class="shade" fill="url(#${hatchId})" d="${d}"/>`;
  const id = `clip${++clipN}`;
  return `<clipPath id="${id}"><path d="${clipD}"/></clipPath><path class="shade" fill="url(#${hatchId})" clip-path="url(#${id})" d="${d}"/>`;
}

// A loop of world points as a line (marks printed on a surface)
export const loop = (v, pts, cls = 'edge', close = true) => `<path class="${cls}" d="${pathOf(pts.map(v.p), close)}"/>`;
export const seg = (v, a, b, cls = 'edge') => {
  const [x1, y1] = v.p(a), [x2, y2] = v.p(b);
  return `<path class="${cls}" d="M${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}"/>`;
};

// Text printed flat on a horizontal surface; size is in world units
export function surfText(v, at, str, size, { part = '', cls = '', w = 0 } = {}) {
  const [px, py] = v.p(at), k = v.k;
  // world +x and +y as screen vectors, so the text lies flat on the surface
  const m = `matrix(${f(k * v.cy)} ${f(k * v.sy * v.sp)} ${f(-k * v.sy)} ${f(k * v.cy * v.sp)} ${f(px)} ${f(py)})`;
  const hit = w ? `<rect x="${-w / 2}" y="${-size * 0.9}" width="${w}" height="${size * 1.8}" fill="transparent"/>` : '';
  return `<g transform="${m}"${part ? ` data-part="${part}"` : ''}>${hit}<text class="st ${cls}" font-size="${size}" text-anchor="middle" dominant-baseline="central">${str}</text></g>`;
}

export class Spring {
  constructor(x, k = 0.24, d = 0.62) { this.x = x; this.t = x; this.v = 0; this.k = k; this.d = d; }
  step() {
    this.v = (this.v + (this.t - this.x) * this.k) * this.d;
    this.x += this.v;
    if (Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3) { this.x = this.t; this.v = 0; return false; }
    return true;
  }
}
