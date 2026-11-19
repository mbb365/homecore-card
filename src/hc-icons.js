// HomeCore's own icons (Matt, 19 Nov 2026: "we made some new icons before using the HomeCore style"), from
// ~/Desktop/homecore-icons/icons.js as drawn there and in the Figma Source of truth page (Cell · HomeCore icons).

// HomeCore icons · 24 grid, drawn as solids with 2-wide cuts.
// Each icon: s = solid shapes (currentColor), c = cuts (masked out of the solids), t = solids drawn on top of the cuts.
// Rules: live area 2–22 · cuts 2 (1.5 at the tightest) · no sharp corner anywhere · glass gets the shine cut.

const f = (n) => +n.toFixed(2);
const rad = (a) => (a * Math.PI) / 180;
const pt = (cx, cy, r, a) => [f(cx + r * Math.cos(rad(a))), f(cy + r * Math.sin(rad(a)))];
// an arc as a path, angles in degrees, 0 = right, 90 = down, drawn clockwise from a0 to a1
const arc = (cx, cy, r, a0, a1) => {
  const [x0, y0] = pt(cx, cy, r, a0), [x1, y1] = pt(cx, cy, r, a1);
  return `M${x0} ${y0}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};
const rr = (x, y, w, h, r, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"${extra}/>`;
const ci = (cx, cy, r, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}"${extra}/>`;
const p = (d, extra = '') => `<path d="${d}"${extra}/>`;
const line = (d, w = 2.5) => p(d, ` fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`);
const soft = (d, w = 1.5) => p(d, ` stroke="currentColor" stroke-width="${w}" stroke-linejoin="round"`); // a solid with its corners rounded
const fill = (s) => s.replace(/\/>$/, ' fill="#000" stroke="none"/>'); // a cut that is a filled hole, not a line

const rays = (n, r0, r1, start = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = start + (360 / n) * i, [x0, y0] = pt(12, 12, r0, a), [x1, y1] = pt(12, 12, r1, a);
    return line(`M${x0} ${y0}L${x1} ${y1}`, 2.2);
  }).join('');

const FAN_BLADE = 'M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z';

export const ICONS = [
  {
    id: 'light', name: 'Light', use: 'lights, lamps', colour: '#ffc107',
    s: p('M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z') + rr(9.4, 19.2, 5.2, 2.6, 1.3),
    c: p(arc(12, 9.6, 3.6, 180, 270)),
  },
  {
    id: 'plug', name: 'Plug', use: 'switches, sockets', colour: '#ffc107',
    s: rr(3, 3, 18, 18, 6),
    c: fill(rr(8.2, 8.8, 2.2, 6.4, 1.1)) + fill(rr(13.6, 8.8, 2.2, 6.4, 1.1)),
  },
  {
    id: 'thermostat', name: 'Thermostat', use: 'climate, heating', colour: '#ff5722',
    s: ci(12, 12, 9.6),
    c: p(arc(12, 12, 6.2, 135, 405)) + p(`M12 12L${pt(12, 12, 3.4, 300).join(' ')}`),
  },
  {
    id: 'temperature', name: 'Temperature', use: 'temperature sensors', colour: '#ff5722',
    s: rr(9.2, 2.4, 5.6, 14, 2.8) + ci(12, 17.4, 4.4),
    c: p('M12 6.4V14'),
  },
  {
    id: 'humidity', name: 'Humidity', use: 'humidity, leaks, water', colour: '#2196f3',
    s: soft('M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z', 1.2),
    c: p(arc(12, 15, 3.6, 90, 180)),
  },
  {
    id: 'fan', name: 'Fan', use: 'fans, ventilation', colour: '#03a9f4',
    s: [0, 120, 240].map((a) => p(FAN_BLADE, ` transform="rotate(${a} 12 12)"`)).join('') + ci(12, 12, 2.6),
    c: ci(12, 12, 3.6),
  },
  {
    id: 'blinds', name: 'Blinds', use: 'covers, shades, shutters', colour: '#9c27b0',
    s: rr(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((y) => rr(4, y, 16, 2.5, 1.25)).join(''),
    c: '',
  },
  {
    id: 'lock', name: 'Lock', use: 'locks', colour: '#4caf50',
    s: line('M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4') + rr(4, 10, 16, 11.6, 4.2),
    c: fill(ci(12, 14.9, 1.7)) + p('M12 15.2V17.9', ' stroke-width="1.9"'),
  },
  {
    id: 'door', name: 'Door', use: 'doors, openings', colour: '#ff9800',
    s: rr(5, 2.4, 14, 19.2, 3.6),
    c: fill(ci(15.2, 12.4, 1.5)),
  },
  {
    id: 'window', name: 'Window', use: 'windows, openings', colour: '#ff9800',
    s: rr(3, 3, 18, 18, 4.4),
    c: p('M12 3V21M3 12H21'),
  },
  {
    id: 'motion', name: 'Motion', use: 'motion, occupancy', colour: '#03a9f4',
    s: soft('M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z', 1.2) + line(arc(12, 18.6, 8, 230, 310), 2.4) + line(arc(12, 18.6, 12.4, 240, 300), 2.4),
    c: '',
  },
  {
    id: 'person', name: 'Person', use: 'people, presence', colour: '#03a9f4',
    s: ci(12, 7.2, 4.2) + soft('M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z', 1.4),
    c: '',
  },
  {
    id: 'camera', name: 'Camera', use: 'cameras, doorbells', colour: '#607d8b',
    s: rr(2.6, 5.4, 13.4, 8.6, 3.4) + soft('M17.8 8.2L21.4 6.4V13L17.8 11.2Z', 1.4) + rr(7.2, 14.6, 2.4, 4.2, 1.2) + rr(3.4, 18.6, 10, 2.6, 1.3),
    c: fill(ci(6.8, 9.7, 1.4)),
  },
  {
    id: 'speaker', name: 'Speaker', use: 'media players, music', colour: '#2196f3',
    s: rr(5, 2.4, 14, 19.2, 4.2),
    c: ci(12, 14.6, 3.6) + fill(ci(12, 7.4, 1.5)),
  },
  {
    id: 'tv', name: 'TV', use: 'TVs, displays', colour: '#2196f3',
    s: rr(2.4, 3.6, 19.2, 13.4, 3.4) + rr(7.6, 18.8, 8.8, 2.6, 1.3),
    c: p(arc(18.2, 7.2, 2.4, 270, 360)),
  },
  {
    id: 'vacuum', name: 'Vacuum', use: 'robot vacuums', colour: '#4caf50',
    s: ci(12, 12, 9.6),
    c: p('M5.6 8.6H18.4') + ci(12, 14.4, 2.4),
  },
  {
    id: 'energy', name: 'Energy', use: 'power, energy', colour: '#ffc107',
    s: soft('M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z', 1.6),
    c: '',
  },
  {
    id: 'sun', name: 'Sun', use: 'brightness, solar, weather', colour: '#ffc107',
    s: ci(12, 12, 4.4) + rays(8, 7.4, 9.6),
    c: '',
  },
  {
    id: 'alarm', name: 'Alarm', use: 'security, alarm panels', colour: '#607d8b',
    s: soft('M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z', 1.4),
    c: p('M8.6 11.8L11 14.2L15.4 9.6'),
  },
  {
    id: 'home', name: 'Home', use: 'home, areas', colour: '#03a9f4',
    s: soft('M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z', 1.4),
    c: fill(rr(9.8, 14.2, 4.4, 10, 2.2)),
  },
];

let uid = 0;
// The icon as an SVG string. `id` keeps mask ids unique on a page.
export function svg(icon, size = 24, id = `hc${++uid}`) {
  const cuts = icon.c
    ? `<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.c.replace(/currentColor/g, '#fff')}</g></mask></defs>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${cuts}<g fill="currentColor"${icon.c ? ` mask="url(#${id})"` : ''}>${icon.s}</g>${icon.t ? `<g fill="currentColor">${icon.t}</g>` : ''}</svg>`;
}
