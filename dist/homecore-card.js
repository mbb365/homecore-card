var Lm = Object.defineProperty;
var Tm = (o, n, i) => n in o ? Lm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[n] = i;
var Ap = (o, n, i) => Tm(o, typeof n != "symbol" ? n + "" : n, i);
const Dm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Em = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;background:none;border-radius:0;--face:var(--card);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}#app .tfMorePage[data-mode=phys]>.tfMoreSpace:not(.tfPhys),#app .tfMorePage:not([data-mode=phys])>.tfMoreSpace.tfPhys{display:none!important}#app .tfPhysPreview{position:fixed;left:50%;bottom:96px;z-index:30;width:min(520px,calc(100vw - 32px));box-sizing:border-box;padding:10px;border-radius:34px;background:var(--card);border:.4px solid var(--line);box-shadow:0 18px 48px #00000059;transform:translate(-50%,16px);opacity:0;transition:opacity .2s ease,transform .26s cubic-bezier(.34,1.3,.64,1)}#app .tfPhysPreview.in{opacity:1;transform:translate(-50%)}#app .tfPhysPreview[hidden]{display:none}.tfPhysPreviewHead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 4px 10px 14px}.tfPhysPreviewRow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;transition:opacity .2s ease,filter .2s ease}.tfPhysPreviewCell{display:flex;flex-direction:column;gap:6px;min-width:0}.tfPhysPreviewCell>span{font-size:12px;line-height:16px;color:var(--muted);text-align:center}#app .tfPhysPreview .tfMoreSpace.tfPhys{flex:none;height:auto;min-height:0;aspect-ratio:1/1;width:100%;border-radius:16px}.tfPhysPreviewNote{display:none;padding:10px 14px 4px;font-size:13px;line-height:18px;color:var(--muted)}#app .tfPhysPreview.off .tfPhysPreviewRow{opacity:.3;filter:grayscale(1);pointer-events:none}#app .tfPhysPreview.off .tfPhysPreviewNote{display:block}@media (prefers-reduced-motion:reduce){#app .tfPhysPreview{transition:none}}#app .tfPhysPreview.placed{bottom:auto;transform:translateY(16px)}#app .tfPhysPreview.placed.in{transform:none}#app .tfPhysPreview.dragging{transition:none;box-shadow:0 24px 60px #00000073}.tfPhysPreviewHead{cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhysPreview.dragging .tfPhysPreviewHead{cursor:grabbing}.tfPhysPreviewHead .activityTitle{flex:1}.tfPhysGrip{width:10px;height:16px;flex:none;margin-left:-4px;background:radial-gradient(circle,var(--muted) 1.3px,transparent 1.6px) 0 0/5px 5.33px}.tfPhysGrid{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px}.tfPhysGrid.two{grid-template-rows:1fr}.tfPhysCell{position:relative;min-width:0;min-height:0}.tfPhysCell.bright{grid-row:1/-1}.tfPhys .iso .tint{stroke-width:2.4}.tfPhys .iso .swatch{stroke:currentColor;stroke-width:1}`, Bm = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Pm = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Rm = `<main id="app"><div class="shell">
<div class="toast" id="toast" aria-live="polite"></div>

<!-- HOME: the house page, drawn by test-focus.js into the grid -->
<section class="view active" id="homeView">
  <div class="grid"></div>
</section>

<!-- SETTINGS: HomeCore's own tabs are added by test-focus.js; the theme row is moved into its Appearance tab -->
<section class="view" id="settingsView">
  <div class="settingsHeader"><button class="back" id="settingsBack" aria-label="Back" data-icon="back"></button><div class="settingsTitle">HomeCore</div></div>
  <div class="tabs rubberTabs">
    <div class="rubberIndicator" id="rubberIndicator" aria-hidden="true"></div>
    <button class="tab segBtn active" data-pane="appearancePane">Appearance</button>
  </div>
  <div class="settingsPane active" id="appearancePane">
    <section class="card">
      <div class="toggleList">
        <div class="toggleRow">
          <div>
            <strong>Theme</strong>
            <div class="status">Choose the app surface treatment.</div>
          </div>
          <div class="themeChoice">
            <button class="themeBtn active" data-theme="dark">Dark</button>
            <button class="themeBtn" data-theme="light">Light</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>
</div>

<!-- NAV -->
<nav class="bottomNav">
  <button class="navBtn active" id="homeNav" title="Home" aria-label="Home" data-icon="home"></button>
  <button class="navBtn" id="settingsNav" title="Settings" aria-label="Settings" data-icon="settings"></button>
  <button class="navBtn" id="tvNav" title="Full screen" aria-label="Full screen" data-icon="fullscreen"></button>
</nav>
</main>
`, Lp = "homecore-theme", Hm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Nm = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Hm[o] || "") + "</svg>", Tp = {
  get: (o) => {
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  set: (o, n) => {
    try {
      localStorage.setItem(o, n);
    } catch {
    }
  }
};
function Om(o, { setLight: n, fullscreenSupported: i, toggleFullscreen: l }) {
  const f = (K) => o.getElementById(K), b = f("app");
  o.querySelectorAll("[data-icon]").forEach((K) => {
    K.innerHTML = Nm(K.dataset.icon);
  });
  const g = { home: f("homeView"), settings: f("settingsView") }, v = f("homeNav"), T = f("settingsNav");
  function A(K) {
    Object.entries(g).forEach(([tt, z]) => z.classList.toggle("active", tt === K)), v.classList.toggle("active", K === "home"), T.classList.toggle("active", K === "settings");
  }
  v.addEventListener("click", () => A("home")), T.addEventListener("click", () => A("settings")), f("settingsBack").addEventListener("click", () => A("home"));
  function _(K) {
    const tt = K === "light";
    o.querySelectorAll(".themeBtn").forEach((z) => z.classList.toggle("active", z.dataset.theme === K)), b.classList.toggle("light", tt), n(tt);
  }
  _(Tp.get(Lp) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((K) => K.addEventListener("click", () => {
    _(K.dataset.theme), Tp.set(Lp, K.dataset.theme);
  }));
  const P = f("tvNav");
  i || (P.hidden = !0), P.addEventListener("click", () => l());
  let O;
  function M(K) {
    const tt = f("toast");
    tt && (tt.textContent = K, tt.classList.add("show"), clearTimeout(O), O = setTimeout(() => tt.classList.remove("show"), 2600));
  }
  return { showView: A, toast: M };
}
const Im = /* @__PURE__ */ new Set(["roaming", "test_area"]), Fm = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Jn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ae = "made_up_", ao = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Ae);
}, Yn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Wc(o) {
  const n = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((n - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function qm(o) {
  const n = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let l = +n; l < +o; l += 10 * 60 * 1e3) i += Wc(new Date(l)) / 6;
  return i;
}
function Dp(o = /* @__PURE__ */ new Date()) {
  const n = [];
  for (let i = 0; i <= 96; i++) {
    const l = +o - (96 - i) * 15 * 60 * 1e3;
    n.push([l, Wc(new Date(l))]);
  }
  return n;
}
function Vm({ onChange: o }) {
  const n = {}, i = {}, l = (z, N, et, it) => {
    n[z] = { entity_id: z, state: et, attributes: it, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = N;
  }, f = (z, N, et) => {
    const it = n[z], ut = N ?? it.state;
    n[z] = { ...it, state: ut, attributes: { ...it.attributes, ...et }, last_changed: ut === it.state ? it.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, N, et, it) => l("binary_sensor." + Ae + (z ? z + "_" : "") + Yn(N), z, it ? "on" : "off", { friendly_name: N, device_class: et });
  Object.entries(Fm).forEach(([z, N]) => {
    if (N.temperature != null && l("sensor." + Ae + z + "_temperature", z, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && l("sensor." + Ae + z + "_humidity", z, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && l("vacuum." + Ae + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && l("climate." + Ae + z, z, "heat", {
      friendly_name: "Thermostat",
      hvac_modes: ["off", "heat", "cool", "auto"],
      hvac_action: "heating",
      current_temperature: N.temperature,
      temperature: 21,
      min_temp: 7,
      max_temp: 30,
      target_temp_step: 0.5,
      target_temp_low: 19,
      target_temp_high: 23,
      fan_mode: "auto",
      fan_modes: ["auto", "low", "medium", "high"],
      swing_mode: "off",
      swing_modes: ["off", "on"],
      preset_mode: "home",
      preset_modes: ["home", "away", "eco", "boost"],
      current_humidity: N.humidity,
      humidity: 45,
      min_humidity: 30,
      max_humidity: 70
    }), N.fan) {
      const [et, it] = N.fan;
      l("fan." + Ae + z + "_" + Yn(et), z, "on", it != null ? { friendly_name: et, percentage: it, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: et, supported_features: 48 });
    }
    if (N.waterHeater && l("water_heater." + Ae + z, z, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [et, it] = N.valvePos;
      l("valve." + Ae + z + "_" + Yn(et), z, it == null || it ? "open" : "closed", { friendly_name: et, device_class: "water", supported_features: 3 | (it == null ? 0 : 12), ...it == null ? {} : { current_position: it } });
    }
    if (N.garage && l("cover." + Ae + z + "_" + Yn(N.garage), z, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [et, it, ut, Q] = N.cover;
      l("cover." + Ae + z + "_" + Yn(et), z, ut ? "open" : "closed", { friendly_name: et, device_class: it, current_position: ut, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (N.humidifier && l("humidifier." + Ae + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (l("sensor." + Ae + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), l("sensor." + Ae + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && l("valve." + Ae + z + "_" + Yn(N.valve), z, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && b(z, N.door, "door", N.doorOpen), N.window && b(z, N.window, "window", !1), N.motion && b(z, N.motion, "motion", !1), N.plant) {
      const [et, it, ut, Q, I] = N.plant, G = Ae + Yn(et), ft = (Ht, dt, S, Ft, Y) => l("sensor." + G + "_" + Ht, z, String(S), { friendly_name: dt, device_class: Y, state_class: "measurement", unit_of_measurement: Ft, plant_low: S < Jn[Ht][0], plant_high: S > Jn[Ht][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Ht] });
      ft("moisture", "Moisture", it, "%", "moisture"), ft("light", "Light", ut, "lx", "illuminance"), ft("temperature", "Temperature", Q, "°C", "temperature"), ft("fertility", "Fertility", I, "µS/cm", "conductivity");
      const kt = Object.entries({ moisture: it, light: ut, temperature: Q, fertility: I }).filter(([Ht, dt]) => dt < Jn[Ht][0] || dt > Jn[Ht][1]).map(([Ht, dt]) => Ht + (dt < Jn[Ht][0] ? " low" : " high"));
      l("plant." + G, z, kt.length ? "problem" : "ok", { friendly_name: et, moisture: it, brightness: ut, temperature: Q, conductivity: I, problem: kt.join(", ") || "none" });
    }
  }), l("alarm_control_panel." + Ae + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), l("sensor." + Ae + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let T = null;
  function A() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((N) => {
      N.endsWith("_solar_power") && (n[N] = { ...n[N], state: Wc(z).toFixed(2) }), N.endsWith("_solar_today") && (n[N] = { ...n[N], state: qm(z).toFixed(1) });
    });
  }
  A();
  let _ = 0;
  function P() {
    let z = !1;
    const N = ++_ % 10 === 0, et = (Q, I, G) => {
      f(Q, I, G), z = !0;
    };
    Object.entries(g).forEach(([Q, I]) => {
      const G = n[Q].attributes.current_position, ft = G < I ? Math.min(I, G + 10) : Math.max(I, G - 10);
      ft === I && delete g[Q], et(Q, ft === I ? ft === 0 ? "closed" : "open" : I > G ? "opening" : "closing", { current_position: ft });
    }), Object.entries(v).forEach(([Q, I]) => {
      const G = n[Q].attributes.current_tilt_position, ft = G < I ? Math.min(I, G + 25) : Math.max(I, G - 25);
      ft === I && delete v[Q], et(Q, null, { current_tilt_position: ft });
    }), Object.keys(n).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const I = n[Q], G = I.attributes, ft = G.current_temperature, kt = (I.state === "heat" || I.state === "auto") && ft < G.temperature - 0.05, Ht = (I.state === "cool" || I.state === "auto") && ft > G.temperature + 0.05, dt = I.state === "off" ? "off" : kt ? "heating" : Ht ? "cooling" : "idle", S = N ? Math.round((ft + (kt ? 0.1 : Ht ? -0.1 : 0)) * 10) / 10 : ft;
      (S !== ft || dt !== G.hvac_action) && et(Q, null, { current_temperature: S, hvac_action: dt });
    }), Object.keys(n).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const I = n[Q], G = I.attributes, ft = G.current_humidity, kt = I.state === "on" && ft < G.humidity, Ht = kt && N ? ft + 1 : ft, dt = I.state !== "on" ? "off" : kt ? "humidifying" : "idle";
      if (Ht !== ft || dt !== G.action) {
        et(Q, null, { current_humidity: Ht, action: dt });
        const S = "sensor." + Ae + i[Q] + "_humidity";
        n[S] && et(S, String(Ht));
      }
    });
    const it = n["vacuum." + Ae + "robot"], ut = it.attributes;
    it.state === "cleaning" && N && et(it.entity_id, null, { battery_level: Math.max(5, ut.battery_level - 1) }), it.state === "returning" && et(it.entity_id, "docked", {}), it.state === "docked" && ut.battery_level < 100 && et(it.entity_id, null, { battery_level: Math.min(100, ut.battery_level + 2) }), T && Date.now() - T.at > 5e3 && (et("alarm_control_panel." + Ae + "house", "armed_" + T.mode, {}), T = null), z && o();
  }
  const O = setInterval(P, 1e3), M = setInterval(() => {
    A(), o();
  }, 60 * 1e3);
  function K(z, N, et) {
    const it = et == null ? void 0 : et.entity_id;
    if (!n[it]) return !1;
    const ut = n[it], Q = ut.attributes, I = (G, ft) => f(it, G, ft);
    if (z === "climate" && (N === "set_temperature" && et.temperature != null && I(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, et.temperature)) }), N === "set_hvac_mode" && I(et.hvac_mode, et.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && I(ut.state === "off" ? "heat" : "off", ut.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && et.target_temp_low != null && I(null, { target_temp_low: et.target_temp_low, target_temp_high: et.target_temp_high }), N === "set_fan_mode" && I(null, { fan_mode: et.fan_mode }), N === "set_swing_mode" && I(null, { swing_mode: et.swing_mode }), N === "set_preset_mode" && I(null, { preset_mode: et.preset_mode }), N === "set_humidity" && I(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, et.humidity)) })), z === "fan" && (N === "set_percentage" && I(et.percentage > 0 ? "on" : "off", { percentage: et.percentage }), N === "oscillate" && I(null, { oscillating: et.oscillating }), N === "set_direction" && I(null, { direction: et.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && I(N === "turn_on" || N === "toggle" && ut.state !== "on" ? "on" : "off")), z === "water_heater" && (N === "set_temperature" && I(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, et.temperature)) }), N === "set_operation_mode" && I(et.operation_mode, { operation_mode: et.operation_mode }), N === "set_away_mode" && I(null, { away_mode: et.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const G = N === "turn_on" || N === "toggle" && ut.state === "off";
      I(G ? "eco" : "off", { operation_mode: G ? "eco" : "off" });
    }
    if (z === "cover") {
      const G = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? et.position : N === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete g[it], delete v[it], I(Q.current_position === 0 ? "closed" : "open")), G != null && Q.current_position == null ? I(G > 0 ? "open" : "closed") : G != null && G !== Q.current_position && (g[it] = G, I(G > Q.current_position ? "opening" : "closing"));
      const ft = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? et.tilt_position : null;
      N === "stop_cover_tilt" && delete v[it], ft != null && Q.current_tilt_position != null && ft !== Q.current_tilt_position && (v[it] = ft);
    }
    if (z === "humidifier" && (N === "set_humidity" && I(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, et.humidity)) }), N === "set_mode" && I(null, { mode: et.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const G = N === "turn_on" || N === "toggle" && ut.state !== "on";
      I(G ? "on" : "off", { action: G ? "idle" : "off" });
    }
    if (z === "vacuum" && (N === "start" && I("cleaning", { rooms: et.rooms || Q.rooms }), N === "pause" && I("paused"), N === "return_to_base" && I("returning", { rooms: [] }), N === "locate" && I(null, { located: Date.now() }), N === "set_rooms" && I(null, { rooms: et.rooms })), z === "valve") {
      const G = N === "open_valve" || N === "toggle" && ut.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && I(G ? "open" : "closed", Q.current_position != null ? { current_position: G ? 100 : 0 } : {}), N === "set_valve_position" && I(et.position > 0 ? "open" : "closed", { current_position: et.position });
    }
    if (z === "alarm_control_panel") {
      N === "alarm_disarm" && (T = null, I("disarmed", { changed_by: "Matt" }));
      const G = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      G && (T = { mode: G, at: Date.now() }, I("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function tt(z, { madeUp: N = !0 } = {}) {
    const et = N ? n : {}, it = (z == null ? void 0 : z.states) || {}, ut = (z == null ? void 0 : z.entities) || {}, Q = (z == null ? void 0 : z.devices) || {}, I = (ot) => {
      var q;
      const ct = ut[ot];
      return ct && (ct.area_id || ct.device_id && ((q = Q[ct.device_id]) == null ? void 0 : q.area_id)) || null;
    }, G = (ot) => {
      const ct = ut[ot];
      return it[ot] && it[ot].state !== "unavailable" && !(ct != null && ct.hidden) && !(ct != null && ct.entity_category);
    }, ft = {};
    Object.keys(it).forEach((ot) => {
      const ct = I(ot);
      ct && G(ot) && (ft[ct] || (ft[ct] = [])).push(ot);
    });
    const kt = { ...it, ...et }, Ht = (ot) => {
      var ct, q;
      return (q = (ct = kt[ot]) == null ? void 0 : ct.attributes) == null ? void 0 : q.device_class;
    }, dt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(it).filter((ot) => ot.startsWith("vacuum.") && G(ot)), Ft = Object.values((z == null ? void 0 : z.areas) || {}).filter((ot) => !Im.has(ot.area_id)).map((ot) => {
      const ct = ot.area_id, q = ft[ct] || [], bt = (Vt) => q.filter((ge) => ge.startsWith(Vt + ".")), Tt = (Vt) => bt("sensor").filter((ge) => Ht(ge) === Vt), Wt = (Vt) => Object.keys(et).filter((ge) => i[ge] === ct && Vt(ge)), ne = (Vt, ge) => Vt.length ? Vt : Wt(ge), ia = ne(Tt("temperature"), (Vt) => Vt.endsWith(ct + "_temperature")), fa = ne(Tt("humidity"), (Vt) => Vt.endsWith(ct + "_humidity")), So = Tt("power").filter((Vt) => /^(W|kW)$/.test(kt[Vt].attributes.unit_of_measurement || "")), La = bt("binary_sensor").filter((Vt) => Ht(Vt) === "moisture"), rn = ne(bt("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: Wt((ge) => ge.startsWith("sensor." + Vt.split(".")[1] + "_")) })), Sn = [...bt("binary_sensor").filter((Vt) => dt.includes(Ht(Vt))), ...Wt((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: ct,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...ia.slice(0, 1), ...fa.slice(0, 1), ...La],
        power: So.length ? So.reduce((Vt, ge) => Vt + Number(kt[ge].state) * (kt[ge].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: bt("switch"),
        lights: bt("light"),
        actions: [
          ...bt("light"),
          ...ne(bt("climate"), (Vt) => Vt.startsWith("climate.")),
          ...ne(bt("cover"), (Vt) => Vt.startsWith("cover.")),
          ...ne(bt("humidifier"), (Vt) => Vt.startsWith("humidifier.")),
          ...ne(bt("valve"), (Vt) => Vt.startsWith("valve.")),
          ...bt("media_player"),
          ...bt("vacuum"),
          ...S.length ? [] : Wt((Vt) => Vt.startsWith("vacuum.")),
          ...bt("fan"),
          ...Wt((Vt) => Vt.startsWith("fan.")),
          ...bt("water_heater"),
          ...Wt((Vt) => Vt.startsWith("water_heater."))
        ],
        solar: Wt((Vt) => Vt.includes("_solar_")),
        plants: rn,
        openings: Sn,
        alerts: [...La, ...Sn].filter((Vt) => {
          var ge;
          return ((ge = kt[Vt]) == null ? void 0 : ge.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), Y = Object.keys(it).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && it[ot].state !== "unavailable") || null, nt = (ot) => Object.keys(it).filter((ct) => ct.startsWith(ot + ".") && G(ct)), st = nt("alarm_control_panel"), mt = S.length ? S : N ? ["vacuum." + Ae + "robot"] : [];
    return {
      states: kt,
      rooms: Ft,
      grid: Y,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => et[ot] ? i[ot] : I(ot),
      vacuums: mt,
      homeVacuums: mt.filter((ot) => !Ft.some((ct) => ct.actions.includes(ot))),
      security: {
        alarms: st.length ? st : N ? ["alarm_control_panel." + Ae + "house"] : [],
        locks: nt("lock"),
        openings: [...Object.keys(et).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Ae + "doorbell"] : []]
      }
    };
  }
  return { model: tt, call: K, stop() {
    clearInterval(O), clearInterval(M);
  } };
}
const Ep = (o) => +o.toFixed(2), Bp = (o) => o * Math.PI / 180, Di = (o, n, i, l) => [Ep(o + i * Math.cos(Bp(l))), Ep(n + i * Math.sin(Bp(l)))], Dr = (o, n, i, l, f) => {
  const [b, g] = Di(o, n, i, l), [v, T] = Di(o, n, i, f);
  return `M${b} ${g}A${i} ${i} 0 ${f - l > 180 ? 1 : 0} 1 ${v} ${T}`;
}, Xe = (o, n, i, l, f, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${l}" rx="${f}"${b}/>`, Ca = (o, n, i, l = "") => `<circle cx="${o}" cy="${n}" r="${i}"${l}/>`, wa = (o, n = "") => `<path d="${o}"${n}/>`, Es = (o, n = 2.5) => wa(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), Zn = (o, n = 1.5) => wa(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), Kn = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), Wm = (o, n, i, l = 0) => Array.from({ length: o }, (f, b) => {
  const g = l + 360 / o * b, [v, T] = Di(12, 12, n, g), [A, _] = Di(12, 12, i, g);
  return Es(`M${v} ${T}L${A} ${_}`, 2.2);
}).join(""), jm = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", zm = [
  {
    id: "light",
    name: "Light",
    use: "lights, lamps",
    colour: "#ffc107",
    s: wa("M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z") + Xe(9.4, 19.2, 5.2, 2.6, 1.3),
    c: wa(Dr(12, 9.6, 3.6, 180, 270))
  },
  {
    id: "plug",
    name: "Plug",
    use: "switches, sockets",
    colour: "#ffc107",
    s: Xe(3, 3, 18, 18, 6),
    c: Kn(Xe(8.2, 8.8, 2.2, 6.4, 1.1)) + Kn(Xe(13.6, 8.8, 2.2, 6.4, 1.1))
  },
  {
    id: "thermostat",
    name: "Thermostat",
    use: "climate, heating",
    colour: "#ff5722",
    s: Ca(12, 12, 9.6),
    c: wa(Dr(12, 12, 6.2, 135, 405)) + wa(`M12 12L${Di(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: Xe(9.2, 2.4, 5.6, 14, 2.8) + Ca(12, 17.4, 4.4),
    c: wa("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: Zn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: wa(Dr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => wa(jm, ` transform="rotate(${o} 12 12)"`)).join("") + Ca(12, 12, 2.6),
    c: Ca(12, 12, 3.6)
  },
  {
    id: "blinds",
    name: "Blinds",
    use: "covers, shades, shutters",
    colour: "#9c27b0",
    s: Xe(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((o) => Xe(4, o, 16, 2.5, 1.25)).join(""),
    c: ""
  },
  {
    id: "lock",
    name: "Lock",
    use: "locks",
    colour: "#4caf50",
    s: Es("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Xe(4, 10, 16, 11.6, 4.2),
    c: Kn(Ca(12, 14.9, 1.7)) + wa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Xe(5, 2.4, 14, 19.2, 3.6),
    c: Kn(Ca(15.2, 12.4, 1.5))
  },
  {
    id: "window",
    name: "Window",
    use: "windows, openings",
    colour: "#ff9800",
    s: Xe(3, 3, 18, 18, 4.4),
    c: wa("M12 3V21M3 12H21")
  },
  {
    id: "motion",
    name: "Motion",
    use: "motion, occupancy",
    colour: "#03a9f4",
    s: Zn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Es(Dr(12, 18.6, 8, 230, 310), 2.4) + Es(Dr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: Ca(12, 7.2, 4.2) + Zn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Xe(2.6, 5.4, 13.4, 8.6, 3.4) + Zn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Xe(7.2, 14.6, 2.4, 4.2, 1.2) + Xe(3.4, 18.6, 10, 2.6, 1.3),
    c: Kn(Ca(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Xe(5, 2.4, 14, 19.2, 4.2),
    c: Ca(12, 14.6, 3.6) + Kn(Ca(12, 7.4, 1.5))
  },
  {
    id: "tv",
    name: "TV",
    use: "TVs, displays",
    colour: "#2196f3",
    s: Xe(2.4, 3.6, 19.2, 13.4, 3.4) + Xe(7.6, 18.8, 8.8, 2.6, 1.3),
    c: wa(Dr(18.2, 7.2, 2.4, 270, 360))
  },
  {
    id: "vacuum",
    name: "Vacuum",
    use: "robot vacuums",
    colour: "#4caf50",
    s: Ca(12, 12, 9.6),
    c: wa("M5.6 8.6H18.4") + Ca(12, 14.4, 2.4)
  },
  {
    id: "energy",
    name: "Energy",
    use: "power, energy",
    colour: "#ffc107",
    s: Zn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: Ca(12, 12, 4.4) + Wm(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: Zn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: wa("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Zn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: Kn(Xe(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Gm = 0;
function $m(o, n = 24, i = `hc${++Gm}`) {
  const l = o.c ? `<defs><mask id="${i}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${o.c.replace(/currentColor/g, "#fff")}</g></mask></defs>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${n}" height="${n}" aria-hidden="true">${l}<g fill="currentColor"${o.c ? ` mask="url(#${i})"` : ""}>${o.s}</g>${o.t ? `<g fill="currentColor">${o.t}</g>` : ""}</svg>`;
}
const za = {
  skyClearDay: "#03a9f4",
  skyClearNight: "#1d2b4f",
  skyCloudyDay: "#d8d6d6",
  skyCloudyNight: "#363a45",
  skyRainDay: "#969696",
  skyRainNight: "#2d3139",
  skySnowDay: "#d4d8df",
  skySnowNight: "#384055",
  skyFogDay: "#dddcda",
  skyFogNight: "#3d4047",
  sun: "#ffe100",
  sunEdge: "#ffaa00",
  moon: "#f2c95e",
  star: "#ffffff",
  cloudDay: "#f1f1f1",
  cloudNight: "#d8d6d6",
  rain: "#03a9f4",
  snow: "#ffffff",
  dusk: "#d9876b"
}, ki = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Rc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, Um = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Pp = {}, Wa = (o, n, i) => {
  const l = o + n + i;
  return Pp[l] || (Pp[l] = Um(Rc(o).map((f, b) => f + (Rc(n)[b] - f) * i)));
}, Rp = {}, sc = (o) => Rp[o] || (Rp[o] = Rc(o));
function zu(o, n) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || n ? "night" : "day");
}
function Ym(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [Wa(n.clear[0], n.cloudy[0], 0.12), Wa(n.clear[1], n.cloudy[1], 0.12)], n.storm = [Wa(n.rain[0], "#000000", 0.22), Wa(n.rain[1], "#000000", 0.22)], n;
}
const Hc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Nc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Oc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Zm(o, n = za) {
  const i = { ...za, ...n }, l = Ym(i), f = String(o).split("/"), b = l[f[0]] ? f[0] : "clear", g = f[1] === "night", v = l[b][g ? 1 : 0], T = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Hc.map(() => ({ o: 0 })),
    rain: Nc.map(() => ({ o: 0, dy: -16 })),
    snow: Oc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, A = (_) => Hc.map(() => ({ o: _ }));
  return b === "clear" ? g ? (T.moon.o = 1, T.stars = A(1)) : T.sun.o = 1 : b === "partly" ? (T.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (T.moon = { x: 34, y: 33, d: 48, o: 1 }, T.stars = A(0.7)) : T.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (T.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? T.moon = { x: 40, y: 36, d: 40, o: 0 } : T.sun = { x: 40, y: 36, r: 20, o: 0 }) : (T.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? T.moon = { x: 38, y: 28, d: 36, o: 0 } : T.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? T.snow = Oc.map(() => ({ o: 1, dy: 0 })) : T.rain = Nc.map((_, P) => ({ o: b === "storm" && P === 1 ? 0 : 1, dy: 0 })), b === "storm" && (T.bolt = { o: 1, dy: 0 })), T;
}
const Km = [
  0,
  32,
  8,
  40,
  2,
  34,
  10,
  42,
  48,
  16,
  56,
  24,
  50,
  18,
  58,
  26,
  12,
  44,
  4,
  36,
  14,
  46,
  6,
  38,
  60,
  28,
  52,
  20,
  62,
  30,
  54,
  22,
  3,
  35,
  11,
  43,
  1,
  33,
  9,
  41,
  51,
  19,
  59,
  27,
  49,
  17,
  57,
  25,
  15,
  47,
  7,
  39,
  13,
  45,
  5,
  37,
  63,
  31,
  55,
  23,
  61,
  29,
  53,
  21
], Xn = (o, n) => (Km[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Xm = 0, Gu = 1, $u = 2, Uu = 3, Yu = 4, vo = 5, Os = 6, Hr = 7, Zu = 8, Hp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), Jm = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Qm = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), t0 = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function e0(o, { size: n = 90, px: i = 2, oneBit: l = !1, colors: f = za, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: T = !1 } = {}) {
  const A = { ...za, ...f }, _ = Math.sin, P = Math.PI * 2, O = Math.max(6, Math.round(n / i)), M = O / 90, K = T ? Math.floor(v / 100) * 100 : 0, tt = T ? _(P * K / 3600) : 0, z = T ? 1.8 * _(P * K / 6400) : 0, N = T ? 0.9 * _(P * K / 4100) : 0, et = T ? 0.8 * _(P * K / 5200) : 0, it = K / 3400 % 1, ut = T && o.bolt.o > 0.5 && (it < 0.04 || it > 0.08 && it < 0.11), Q = new Array(O * O), I = new Uint8Array(O * O), G = (Y, nt, st, mt, ot) => {
    st == null || Y < 0 || nt < 0 || Y >= O || nt >= O || (mt >= 1 || mt > Xn(Y + 5, nt + 3)) && (Q[nt * O + Y] = st, I[nt * O + Y] = ot);
  }, ft = (Y, nt, st, mt) => {
    for (let ot = Math.max(0, Math.floor(nt - st) - 1); ot <= Math.min(O - 1, nt + st + 1); ot++) for (let ct = Math.max(0, Math.floor(Y - st) - 1); ct <= Math.min(O - 1, Y + st + 1); ct++) mt(ct, ot, ct + 0.5 - Y, ot + 0.5 - nt);
  }, kt = o.skyStops || [o.sky], Ht = o.skyT || 0;
  for (let Y = 0; Y < O; Y++) {
    const nt = o.night ? ki(1 - (Y + 0.5) / (O * 0.7)) * 0.85 : ki(((Y + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let st = 0; st < O; st++) {
      let mt = kt[0];
      if (kt.length > 1) {
        const ot = Ht * (kt.length - 1), ct = Math.min(kt.length - 2, Math.floor(ot));
        mt = ot - ct > Xn(st, Y) ? kt[ct + 1] : kt[ct];
      }
      nt > Xn(st + 2, Y + 5) && (mt = o.night ? Wa(mt, "#000000", 0.28) : Wa(mt, "#ffffff", 0.2)), Q[Y * O + st] = ut ? Wa(mt, "#ffffff", 0.25) : mt;
    }
  }
  if (o.sun.o > 0.01) {
    const Y = o.sun.x * M, nt = o.sun.y * M, st = Math.max(1, o.sun.r * M);
    if (T) {
      const mt = st * (1.45 + 0.06 * tt), ot = Wa(A.sun, "#ffffff", 0.55);
      if (ft(Y, nt, mt, (ct, q, bt, Tt) => {
        const Wt = Math.sqrt(bt * bt + Tt * Tt);
        Wt > st && Wt < mt && G(ct, q, ot, 0.26 * (1 - (Wt - st) / (mt - st)) * o.sun.o, Xm);
      }), o.sun.o > 0.5) {
        const ct = Math.floor(K / 500) % 2, q = Math.max(1, st * 0.22);
        for (let bt = 0; bt < 8; bt++) if (bt % 2 === ct) for (let Tt = st + 1.5; Tt < st + 1.5 + q; Tt += 0.7) G(Math.floor(Y + Math.cos(bt * Math.PI / 4) * Tt), Math.floor(nt + Math.sin(bt * Math.PI / 4) * Tt), A.sun, o.sun.o, Zu);
      }
    }
    ft(Y, nt, st, (mt, ot, ct, q) => {
      if (ct * ct + q * q > st * st) return;
      const bt = ((ct * 0.643 + q * 0.766) / st + 1) / 2;
      G(mt, ot, ki((bt - 0.62) / 0.38) > Xn(mt, ot) ? A.sunEdge : A.sun, o.sun.o, Gu);
    });
  }
  if (Hc.forEach((Y, nt) => {
    const st = o.stars[nt].o;
    if (st < 0.01) return;
    const mt = Math.floor(Y[0] * M), ot = Math.floor(Y[1] * M), ct = T ? (Math.floor(K / 300) + nt * 3) % 6 : 0;
    if (ct === 5) return;
    const q = Math.round(Y[2] * M * (ct === 4 ? 0.3 : ct < 2 ? 1 : 0.6));
    G(mt, ot, A.star, st, Hr);
    for (let bt = 1; bt <= q; bt++) {
      const Tt = bt === q && q > 1 ? Wa(A.star, o.sky, 0.5) : A.star;
      G(mt - bt, ot, Tt, st, Hr), G(mt + bt, ot, Tt, st, Hr), G(mt, ot - bt, Tt, st, Hr), G(mt, ot + bt, Tt, st, Hr);
    }
  }), o.moon.o > 0.01) {
    const Y = Math.max(1.5, o.moon.d * M * 0.37), nt = o.moon.x * M, st = o.moon.y * M + (T && et > 0.4 ? -1 : 0), mt = nt + 0.547 * Y, ot = st - 0.503 * Y, ct = 0.82 * Y, q = Wa(A.moon, "#ffffff", 0.6);
    ft(nt, st, Y, (bt, Tt, Wt, ne) => {
      if (Wt * Wt + ne * ne > Y * Y) return;
      const ia = bt + 0.5 - mt, fa = Tt + 0.5 - ot;
      ia * ia + fa * fa <= ct * ct || G(bt, Tt, ki((ne + Y) / (2 * Y) * 1.1 - 0.1) > Xn(bt, Tt) ? A.moon : q, o.moon.o, $u);
    });
  }
  const dt = Math.max(2, Math.round(15.65 * M)), S = Math.max(1, Math.round(5.87 * M * 0.5));
  Nc.forEach((Y, nt) => {
    const st = o.rain[nt];
    let mt = st.dy, ot = st.o;
    if (ot < 0.01) return;
    if (T) {
      const bt = (K / 950 + nt / 3) % 1;
      mt += -5 + bt * 14, ot *= bt < 0.18 ? bt / 0.18 : bt > 0.72 ? (1 - bt) / 0.28 : 1;
    }
    const ct = (Y[0] + 3 + z) * M, q = (Y[1] + mt) * M;
    for (let bt = 0; bt < dt; bt++) for (let Tt = 0; Tt < S; Tt++) G(Math.floor(ct - 0.208 * bt) + Tt, Math.floor(q) + bt, A.rain, ot, Yu);
  });
  const Ft = Math.max(0, Math.round(7.34 * M / 2.6));
  if (Oc.forEach((Y, nt) => {
    const st = o.snow[nt];
    let mt = st.dy, ot = 0, ct = st.o;
    if (ct < 0.01) return;
    if (T) {
      const Tt = (K / 3200 + nt / 5) % 1;
      mt += -6 + Tt * 14, ot = 1.5 * _(P * (Tt * 1.5 + nt / 5)), ct *= Tt < 0.2 ? Tt / 0.2 : Tt > 0.75 ? (1 - Tt) / 0.25 : 1;
    }
    const q = Math.floor((Y[0] + 3.67 + ot + z) * M), bt = Math.floor((Y[1] + 3.67 + mt) * M);
    G(q, bt, A.snow, ct, vo);
    for (let Tt = 1; Tt <= Ft; Tt++)
      G(q - Tt, bt, A.snow, ct, vo), G(q + Tt, bt, A.snow, ct, vo), G(q, bt - Tt, A.snow, ct, vo), G(q, bt + Tt, A.snow, ct, vo), Ft > 1 && Tt < Ft && (G(q - Tt, bt - Tt, A.snow, ct, vo), G(q + Tt, bt - Tt, A.snow, ct, vo), G(q - Tt, bt + Tt, A.snow, ct, vo), G(q + Tt, bt + Tt, A.snow, ct, vo));
  }), o.bolt.o > 0.01)
    if (O >= 30) {
      const Y = 39 + z, nt = 50 + o.bolt.dy;
      for (let st = Math.floor(nt * M); st <= (nt + 28) * M; st++) for (let mt = Math.floor(Y * M); mt <= (Y + 13) * M; mt++)
        t0(Qm, (mt + 0.5) / M - Y, (st + 0.5) / M - nt) && G(mt, st, A.sun, o.bolt.o, Os);
    } else {
      const Y = O / 18, nt = 7, st = 10 + Math.round(o.bolt.dy * 0.2);
      Jm.forEach((mt, ot) => mt.split("").forEach((ct, q) => {
        if (ct !== "#") return;
        const bt = Math.floor((nt + q) * Y), Tt = Math.floor((st + ot) * Y);
        for (let Wt = Tt; Wt < Math.max(Tt + 1, Math.floor((st + ot + 1) * Y)); Wt++) for (let ne = bt; ne < Math.max(bt + 1, Math.floor((nt + q + 1) * Y)); ne++) G(ne, Wt, A.sun, o.bolt.o, Os);
      }));
    }
  if (o.cloud.o > 0.01) {
    const Y = Math.max(3, o.cloud.w * M), nt = Y * 0.6665, st = (o.cloud.x + z) * M - Y / 2, mt = (o.cloud.y + N) * M - nt / 2, ot = Wa(A.cloudDay, A.cloudNight, Math.round(o.cloud.f * 4) / 4), ct = Wa(ot, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(mt) - 1); q <= Math.min(O - 1, mt + nt + 1); q++) for (let bt = Math.max(0, Math.floor(st) - 1); bt <= Math.min(O - 1, st + Y + 1); bt++) {
      const Tt = (bt + 0.5 - st) / Y, Wt = (q + 0.5 - mt) / Y;
      Hp(Tt, Wt) && G(bt, q, !Hp(Tt, Wt + 1 / Y) || ki((Wt - 0.42) / 0.25) * 0.8 > Xn(bt, q) ? ct : ot, o.cloud.o, Uu);
    }
  }
  return a0(Q, I, O, O, { oneBit: l, ink: b, paper: g, snowInk: !o.night });
}
function a0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const T = new Uint8ClampedArray(i * l * 4), A = sc(b), _ = sc(g);
  for (let P = 0; P < l; P++) for (let O = 0; O < i; O++) {
    const M = P * i + O, K = n[M];
    if (o[M] == null) continue;
    let tt = sc(o[M]);
    if (f) {
      let z;
      K === Yu || K === Zu ? z = !0 : K === vo ? z = v : K === Hr || K === Os ? z = !1 : z = Math.round((0.2126 * tt[0] + 0.7152 * tt[1] + 0.0722 * tt[2]) / 255 * 4) / 4 <= Xn(O, P), (K === Gu || K === $u || K === Uu || K === Os) && (O > 0 && n[M - 1] !== K || O < i - 1 && n[M + 1] !== K || P > 0 && n[M - i] !== K || P < l - 1 && n[M + i] !== K) && (z = !0), tt = z ? A : _;
    }
    T[M * 4] = tt[0], T[M * 4 + 1] = tt[1], T[M * 4 + 2] = tt[2], T[M * 4 + 3] = 255;
  }
  return { w: i, h: l, data: T };
}
const an = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ic = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, o0 = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Np = {}, ja = (o, n, i) => {
  const l = o + n + i;
  return Np[l] || (Np[l] = o0(Ic(o).map((f, b) => f + (Ic(n)[b] - f) * i)));
}, Op = {}, Bs = (o) => Op[o] || (Op[o] = Ic(o));
function n0(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [ja(n.clear[0], n.cloudy[0], 0.12), ja(n.clear[1], n.cloudy[1], 0.12)], n.storm = [ja(n.rain[0], "#000000", 0.22), ja(n.rain[1], "#000000", 0.22)], n;
}
const r0 = [
  0,
  32,
  8,
  40,
  2,
  34,
  10,
  42,
  48,
  16,
  56,
  24,
  50,
  18,
  58,
  26,
  12,
  44,
  4,
  36,
  14,
  46,
  6,
  38,
  60,
  28,
  52,
  20,
  62,
  30,
  54,
  22,
  3,
  35,
  11,
  43,
  1,
  33,
  9,
  41,
  51,
  19,
  59,
  27,
  49,
  17,
  57,
  25,
  15,
  47,
  7,
  39,
  13,
  45,
  5,
  37,
  63,
  31,
  55,
  23,
  61,
  29,
  53,
  21
], tn = (o, n) => (r0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Ku = 1, Xu = 2, Ju = 3, Qu = 4, Nr = 5, Is = 6, Fc = 7, tf = 8, Ip = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), i0 = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function s0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const T = new Uint8ClampedArray(i * l * 4), A = Bs(b), _ = Bs(g);
  for (let P = 0; P < l; P++) for (let O = 0; O < i; O++) {
    const M = P * i + O, K = n[M];
    if (o[M] == null) continue;
    let tt = Bs(o[M]);
    if (f) {
      let z;
      K === Qu || K === tf ? z = !0 : K === Nr ? z = v : K === Fc || K === Is ? z = !1 : z = Math.round((0.2126 * tt[0] + 0.7152 * tt[1] + 0.0722 * tt[2]) / 255 * 4) / 4 <= tn(O, P), (K === Ku || K === Xu || K === Ju || K === Is) && (O > 0 && n[M - 1] !== K || O < i - 1 && n[M + 1] !== K || P > 0 && n[M - i] !== K || P < l - 1 && n[M + i] !== K) && (z = !0), tt = z ? A : _;
    }
    T[M * 4] = tt[0], T[M * 4 + 1] = tt[1], T[M * 4 + 2] = tt[2], T[M * 4 + 3] = 255;
  }
  return { w: i, h: l, data: T };
}
const l0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, c0 = (o) => zu(o, !1).split("/")[0], lc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, d0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", p0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", u0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", f0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", h0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], m0 = [".##", "##.", ".#.", "#.."];
function ef(o, { width: n, height: i, colors: l, wave: f = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const T = { ...za, dawn: "#e5a77e", ...l }, A = n0(T), _ = n, P = i, O = _ / v, M = O / 2, K = Math.PI * 2, tt = o.length ? o : [{ cond: "cloudy", night: !1 }], z = [...Array(v * 2)].map((ut, Q) => {
    const I = tt[Math.min(Q, tt.length - 1)], G = c0(I.cond), ft = Q % 2 === 1;
    return { cond: I.cond, k: G, night: ft, sky: A[G][ft ? 1 : 0], cover: l0[G] };
  }), N = (ut) => P * (0.5 - f * Math.cos(K * (ut / O - 0.25)));
  return { C: T, S: z, W: _, H: P, cw: O, sw: M, TAU: K, yb: N, side: (ut, Q, I) => {
    const G = (ut ? N(Q) - I : I - N(Q)) / Math.max(3, b * 1.4) + 0.5;
    return G <= 0 ? 0 : G >= 1 ? 1 : G;
  }, glowAt: (ut) => {
    const Q = ((ut / O - 0.25) % 1 + 1) % 1, I = Math.max(0, Math.min(v - 1, Math.round(ut / O - 0.25))), G = Math.max(0, Math.min(v - 1, Math.round(ut / O - 0.75))), ft = 1 - (z[2 * I].cover + z[2 * G + 1].cover) / 2, kt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(ut) / P)));
    return { c: Q < 0.5 ? T.dusk : T.dawn, a: g * (0.2 + 0.8 * ft) * kt * kt };
  }, soft: b, tw: O * 0.3, sy: P / 90 };
}
function af(o, { clock: n = 0, ambient: i = !1, seed: l = 1 }) {
  const { S: f, sw: b, side: g, C: v, TAU: T, sy: A, H: _ } = o, P = n, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((tt, z) => {
    const N = lc(l * 977 + z * 131 + 7), et = (z + 0.5) * b, it = tt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[tt.k] : 0;
    for (let ut = 0; ut < it; ut++) {
      const Q = et + (N() - 0.5) * b * 1.6, I = (6 + N() * 76) * A, G = N() < 0.35, ft = 1.8 + N() * 1.6, kt = g(!0, Q, I) * (G ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(T * P / 2600 + ut * 1.7 + z) : 1);
      kt >= 0.03 && O.stars.push({ x: Q, y: I, big: G, size: ft, o: kt });
    }
    if (!tt.night && (tt.k === "clear" || tt.k === "partly")) {
      const ut = et + (N() - 0.5) * b * 0.3, Q = Math.min(15, b * 0.29);
      O.suns.push({ x: ut, y: 32 * A, rad: Q, halo: Q * 2.8 * (i ? 1 + 0.07 * Math.sin(T * P / 3600 + z) : 1) });
    }
    if (tt.night && (tt.k === "clear" || tt.k === "partly")) {
      const ut = Math.min(0.78, b * 0.55 / 34), Q = et - 23 * ut + (N() - 0.5) * b * 0.2;
      O.moons.push({ x: Q + 23 * ut, y: (4 + (i ? 0.8 * Math.sin(T * P / 5200 + z) : 0)) * A + 23 * ut, d: 46 * ut });
    }
  });
  const M = Math.max(56, Math.min(100, _ * 0.45)), K = Math.max(1, b / (M * 2.4));
  return f.forEach((tt, z) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[tt.k];
    if (!N) return;
    const et = tt.k === "partly" ? 1 : Math.round(N * K), it = lc(l * 577 + z * 71 + 3), ut = (z + 0.5) * b, Q = tt.k === "rain" || tt.k === "storm" || tt.night ? v.cloudNight : v.cloudDay, I = tt.night ? 0.82 : tt.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < et; G++) {
      const ft = M / 46 * (tt.k === "partly" ? 1 : 0.8 + it() * 0.4), kt = ut + (tt.k === "partly" ? b * 0.12 : ((G + 0.5) / et - 0.5) * b * 0.95 + (it() - 0.5) * b * 0.5 / et), Ht = (tt.k === "partly" ? 40 : 6 + it() * 26) * A, dt = i ? 2.5 * Math.sin(T * P / 9e3 + z * 1.3 + G * 2.1) : 0, S = i ? 0.9 * Math.sin(T * P / 6100 + z + G) : 0;
      O.clouds.push({ x: kt - 23 * ft + dt, y: Ht - 15.33 * ft + S, w: 46 * ft, h: 30.66 * ft, fill: Q, o: I * (et > 1 && G === 0 ? 0.85 : 1) });
    }
  }), f.forEach((tt, z) => {
    const N = lc(l * 313 + z * 29 + 11), et = (z + 0.5) * b, it = tt.cond === "pouring" ? 16 : tt.cond === "rainy" || tt.cond === "hail" ? 9 : tt.cond === "lightning-rainy" ? 12 : tt.cond === "snowy-rainy" ? 5 : 0;
    for (let Q = 0; Q < it; Q++) {
      let I = et + (N() - 0.5) * b * 1.05, G = 44 + N() * 36, ft = 1;
      if (i) {
        const Ht = ((G - 44 + P * 0.04) % 36 + 36) % 36;
        I -= 0.21 * (Ht - (G - 44)), G = 44 + Ht, ft = Math.min(1, Ht / 6, (36 - Ht) / 6);
      }
      G *= A;
      const kt = g(tt.night, I, G) * ft;
      kt >= 0.05 && O.drops.push({ x: I, y: G, o: kt });
    }
    const ut = tt.cond === "snowy" ? 11 : tt.cond === "snowy-rainy" ? 6 : 0;
    for (let Q = 0; Q < ut; Q++) {
      let I = et + (N() - 0.5) * b * 1.05, G = 40 + N() * 44, ft = 1;
      if (i) {
        const Ht = ((G - 40 + P * 9e-3) % 44 + 44) % 44;
        G = 40 + Ht, I += 1.6 * Math.sin(T * P / 2800 + Q * 1.9 + z), ft = Math.min(1, Ht / 6, (44 - Ht) / 6);
      }
      G *= A;
      const kt = g(tt.night, I, G) * ft;
      kt >= 0.05 && O.flakes.push({ x: I, y: G, o: kt });
    }
    if (tt.k === "fog") {
      const Q = tt.night ? "#c8ccd6" : "#ffffff", I = tt.night ? 0.28 : 0.62, G = i ? 4 * Math.sin(T * P / 8e3 + z) : 0;
      for (let ft = 0; ft < 4; ft++) O.fogs.push({ x: et - b * 0.75 + ft % 2 * b * 0.18 + (ft % 2 ? G : -G), y: (30 + ft * 13) * A, w: b * 1.3, c: Q, a: I });
    }
    if (tt.k === "storm") {
      const Q = (P / 3400 + z * 0.37) % 1;
      O.bolts.push({ x: et + (N() - 0.5) * b * 0.3 - 5, y: 36 * A, o: i && !(Q < 0.05 || Q > 0.09 && Q < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function g0(o, n, i, l, f, b, g, v) {
  const { S: T, C: A, cw: _, yb: P, glowAt: O, soft: M, tw: K, sy: tt } = o, z = new Array(i * l), N = new Uint8Array(i * l), et = new Uint8Array(i * l), it = (Y, nt, st, mt, ot) => {
    st == null || Y < 0 || nt < 0 || Y >= i || nt >= l || (mt >= 1 || mt > tn(Y + 5, nt + 3)) && (z[nt * i + Y] = st, N[nt * i + Y] = ot);
  }, ut = (Y, nt, st, mt) => {
    for (let ot = Math.max(0, Math.floor(nt - st) - 1); ot <= Math.min(l - 1, nt + st + 1); ot++) for (let ct = Math.max(0, Math.floor(Y - st) - 1); ct <= Math.min(i - 1, Y + st + 1); ct++) mt(ct, ot, ct + 0.5 - Y, ot + 0.5 - nt);
  }, Q = (Y, nt, st) => {
    for (let ot = 0; ot < Y.length - 1; ot++) {
      const ct = (ot + nt) * _;
      if (st < ct - K / 2) return [Y[ot], Y[ot], 0];
      if (st <= ct + K / 2) return [Y[ot], Y[ot + 1], (st - ct + K / 2) / K];
    }
    const mt = Y[Y.length - 1];
    return [mt, mt, 0];
  }, I = T.filter((Y) => !Y.night).map((Y) => Y.sky), G = T.filter((Y) => Y.night).map((Y) => Y.sky), ft = M / b, kt = 16 * tt / b;
  for (let Y = 0; Y < i; Y++) {
    const nt = (Y + 0.5) * f, st = P(nt) / b, mt = Q(I, 0.75, nt), ot = Q(G, 1.25, nt), ct = O(nt);
    for (let q = 0; q < l; q++) {
      const bt = tn(Y, q), Tt = q + 0.5 - st, Wt = (ft > 0.01 ? an(0.5 + Tt / ft) : Tt > 0 ? 1 : 0) > bt;
      let ne = Wt ? mt[2] > bt ? mt[1] : mt[0] : ot[2] > bt ? ot[1] : ot[0];
      (Wt ? an(((q + 0.5) / l - 0.45) / 0.55) * 0.7 : an(1 - (q + 0.5) / (l * 0.55)) * 0.7) > tn(Y + 2, q + 5) && (ne = Wt ? ja(ne, "#ffffff", 0.18) : ja(ne, "#000000", 0.25)), Wt && Tt >= 0 && Tt < kt && ct.a * 1.3 * (1 - Tt / kt) > tn(Y + 6, q + 1) && (ne = ct.c), z[q * i + Y] = ne, et[q * i + Y] = Wt ? 0 : 1;
    }
  }
  const Ht = ja(A.sun, "#ffffff", 0.55), dt = ja(A.moon, "#ffffff", 0.6);
  n.stars.forEach((Y) => {
    const nt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    if (nt < 0 || st < 0 || nt >= i || st >= l || !et[st * i + nt] || Y.o < 0.15) return;
    const mt = Y.o > 0.45 ? A.star : ja(A.star, z[st * i + nt], 0.5), ot = Y.big && Y.o > 0.6 ? Math.floor(Y.size / f) : 0;
    it(nt, st, mt, 1, Fc);
    for (let ct = 1; ct <= ot; ct++) [[nt - ct, st], [nt + ct, st], [nt, st - ct], [nt, st + ct]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < l && et[q[1] * i + q[0]] && it(q[0], q[1], mt, 1, Fc);
    });
  }), n.suns.forEach((Y) => {
    const nt = Math.max(1.5, Y.rad / f), st = Y.x / f, mt = Y.y / b, ot = Y.halo / f * 0.85;
    if (ut(st, mt, ot, (ct, q, bt, Tt) => {
      const Wt = Math.sqrt(bt * bt + Tt * Tt);
      Wt > nt && Wt < ot && !et[q * i + ct] && it(ct, q, Ht, 0.3 * (1 - (Wt - nt) / (ot - nt)), 0);
    }), v) {
      const ct = Math.floor(g / 500) % 2, q = Math.max(1, nt * 0.3);
      for (let bt = 0; bt < 8; bt++) if (bt % 2 === ct) for (let Tt = nt + 1.2; Tt < nt + 1.2 + q; Tt += 0.7) it(Math.floor(st + Math.cos(bt * Math.PI / 4) * Tt), Math.floor(mt + Math.sin(bt * Math.PI / 4) * Tt), A.sun, 1, tf);
    }
    ut(st, mt, nt, (ct, q, bt, Tt) => {
      bt * bt + Tt * Tt <= nt * nt && it(ct, q, an(((Tt / nt + 1) / 2 - 0.6) / 0.4) > tn(ct, q) ? A.sunEdge : A.sun, 1, Ku);
    });
  }), n.moons.forEach((Y) => {
    const nt = Math.max(1.5, Y.d * 0.37 / f), st = Y.x / f, mt = Y.y / b, ot = st + 0.547 * nt, ct = mt - 0.503 * nt, q = 0.82 * nt;
    ut(st, mt, nt, (bt, Tt, Wt, ne) => {
      if (Wt * Wt + ne * ne > nt * nt) return;
      const ia = bt + 0.5 - ot, fa = Tt + 0.5 - ct;
      ia * ia + fa * fa > q * q && it(bt, Tt, an((ne + nt) / (2 * nt) * 1.1 - 0.1) > tn(bt, Tt) ? A.moon : dt, 1, Xu);
    });
  }), n.clouds.forEach((Y) => {
    const nt = Math.max(3, Y.w / f), st = nt * 0.6665, mt = Y.x / f, ot = Y.y / b, ct = ja(Y.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ot) - 1); q <= Math.min(l - 1, ot + st + 1); q++) for (let bt = Math.max(0, Math.floor(mt) - 1); bt <= Math.min(i - 1, mt + nt + 1); bt++) {
      const Tt = (bt + 0.5 - mt) / nt, Wt = (q + 0.5 - ot) / nt;
      Ip(Tt, Wt) && it(bt, q, !Ip(Tt, Wt + 1 / nt) || an((Wt - 0.42) / 0.25) * 0.8 > tn(bt, q) ? ct : Y.fill, Y.o, Ju);
    }
  }), n.fogs.forEach((Y) => {
    const nt = Math.floor(Y.y / b), st = Math.max(nt, Math.floor((Y.y + 6 * tt) / b) - 1), mt = Math.floor(Y.x / f), ot = Math.floor((Y.x + Y.w) / f);
    for (let ct = nt; ct <= st; ct++) for (let q = mt; q <= ot; q++) {
      const bt = (q - mt) / Math.max(1, ot - mt);
      it(q, ct, Y.c, Y.a * (bt < 0.25 ? bt / 0.25 : bt > 0.75 ? (1 - bt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((Y) => {
    const nt = Y.x / f, st = Math.floor(Y.y / b);
    for (let mt = 0; mt < S; mt++) it(Math.floor(nt - 0.208 * mt * b / f), st + mt, A.rain, Y.o, Qu);
  });
  const Ft = Math.max(0, Math.round(4.4 / f / 2.6));
  return n.flakes.forEach((Y) => {
    const nt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    it(nt, st, A.snow, Y.o, Nr);
    for (let mt = 1; mt <= Ft; mt++)
      it(nt - mt, st, A.snow, Y.o, Nr), it(nt + mt, st, A.snow, Y.o, Nr), it(nt, st - mt, A.snow, Y.o, Nr), it(nt, st + mt, A.snow, Y.o, Nr);
  }), n.bolts.forEach((Y) => {
    if (f <= 3.5)
      for (let nt = Math.floor(Y.y / b); nt <= (Y.y + 24) / b; nt++) for (let st = Math.floor(Y.x / f); st <= (Y.x + 11) / f; st++)
        i0(h0, (st + 0.5) * f - Y.x, (nt + 0.5) * b - Y.y) && it(st, nt, A.sun, 1, Is);
    else {
      const nt = Math.round(Y.x / f), st = Math.round(Y.y / b);
      m0.forEach((mt, ot) => mt.split("").forEach((ct, q) => {
        ct === "#" && it(nt + q, st + ot, A.sun, 1, Is);
      }));
    }
  }), { col: z, ids: N };
}
function b0(o, n) {
  const i = n.px, l = Math.max(6, Math.round(n.width / i)), f = Math.max(6, Math.round(n.height / i)), b = n.width / l, g = n.height / f, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, T = (M) => {
    const K = ef(M, n);
    return g0(K, af(K, { clock: v, ambient: n.ambient, seed: n.seed }), l, f, b, g, v, n.ambient);
  }, A = T(o), _ = n.reveal == null ? 1 : an(n.reveal);
  let P = A.col, O = A.ids;
  if (_ < 1) {
    const M = n.prev ? T(n.prev) : null, K = _ * (l + 12);
    P = new Array(l * f), O = new Uint8Array(l * f);
    for (let tt = 0; tt < l * f; tt++) {
      const z = tt % l, N = tt / l | 0;
      (n.reduce ? _ : an((K - z) / 12)) > tn(z, N) ? (P[tt] = A.col[tt], O[tt] = A.ids[tt]) : M ? (P[tt] = M.col[tt], O[tt] = M.ids[tt]) : (P[tt] = null, O[tt] = 255);
    }
  }
  return s0(P, O, l, f, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function w0(o, n, i) {
  const l = i.width, f = i.height, b = i.reveal == null ? 1 : an(i.reveal), g = (O, M) => {
    const K = ef(M, i);
    v0(O, K, af(K, i));
  };
  if (o.clearRect(0, 0, l, f), b >= 1) {
    g(o, n);
    return;
  }
  if (i.prev && g(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = b, g(o, n), o.restore();
    return;
  }
  const v = o.canvas, T = v.__wxOff || (v.__wxOff = document.createElement("canvas"));
  (T.width !== v.width || T.height !== v.height) && (T.width = v.width, T.height = v.height);
  const A = T.getContext("2d");
  A.setTransform(o.getTransform()), A.clearRect(0, 0, l, f), g(A, n);
  const _ = b * (l + 64) - 64, P = A.createLinearGradient(_, 0, _ + 64, 0);
  P.addColorStop(0, "rgba(0,0,0,1)"), P.addColorStop(1, "rgba(0,0,0,0)"), A.globalCompositeOperation = "destination-in", A.fillStyle = P, A.fillRect(0, 0, l, f), A.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(T, 0, 0), o.restore();
}
function v0(o, n, i) {
  const { W: l, H: f, S: b, C: g, cw: v, yb: T, glowAt: A, soft: _, tw: P, sy: O } = n, M = o.getTransform().a || 1, K = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * M : 0, o.shadowOffsetY = S ? 1.5 * M : 0;
  }, tt = (S, Ft) => {
    const Y = Bs(S);
    return "rgba(" + Y[0] + "," + Y[1] + "," + Y[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, z = (S, Ft) => {
    const Y = o.createLinearGradient(0, 0, l, 0);
    Y.addColorStop(0, S[0]);
    for (let nt = 0; nt < S.length - 1; nt++) {
      const st = (nt + Ft) * v, mt = (st - P / 2) / l, ot = (st + P / 2) / l;
      mt > 0 && mt < 1 && Y.addColorStop(mt, S[nt]), ot > 0 && ot < 1 && Y.addColorStop(ot, S[nt + 1]);
    }
    return Y.addColorStop(1, S[S.length - 1]), Y;
  }, N = Math.max(24, Math.ceil(l / 4)), et = (S, Ft) => {
    o.beginPath();
    for (let Y = 0; Y <= N; Y++) {
      const nt = l * Y / N, st = S == null ? 0 : T(nt) + S;
      Y ? o.lineTo(nt, st) : o.moveTo(nt, st);
    }
    for (let Y = N; Y >= 0; Y--) {
      const nt = l * Y / N;
      o.lineTo(nt, T(nt) + Ft);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = z(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, l, f);
  const it = o.createLinearGradient(0, 0, l, 0);
  for (let S = 0; S <= 64; S++) {
    const Ft = A(l * S / 64);
    it.addColorStop(S / 64, tt(Ft.c, Math.min(1, Ft.a)));
  }
  o.fillStyle = it;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, et(S * 2 * O, (S + 1) * 2 * O);
  o.fillStyle = z(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const ut = Math.max(0.5, _), Q = 6;
  o.globalAlpha = 1, et(null, -ut);
  for (let S = 0; S < Q; S++)
    o.globalAlpha = 1 - (S + 0.5) / Q, et(-ut + 2 * ut * S / Q, -ut + 2 * ut * (S + 1) / Q);
  o.globalAlpha = 1;
  const I = new Path2D(u0), G = new Path2D(p0), ft = new Path2D(d0), kt = new Path2D(f0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(I), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Ht = ja(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ft = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ft.addColorStop(0, tt(Ht, 0.42)), Ft.addColorStop(0.7, tt(Ht, 0)), o.fillStyle = Ft, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const Y = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    Y.addColorStop(0.6, g.sun), Y.addColorStop(1, g.sunEdge), o.fillStyle = Y, K(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), K(!1);
  });
  const dt = ja(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ft = o.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, dt), Ft.addColorStop(1, g.moon), o.fillStyle = Ft, K(!0), o.fill(G), K(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, K(!0), o.fill(ft), K(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ft = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ft.addColorStop(0, tt(S.c, 0)), Ft.addColorStop(0.25, tt(S.c, S.a)), Ft.addColorStop(0.75, tt(S.c, S.a)), Ft.addColorStop(1, tt(S.c, 0)), o.fillStyle = Ft, o.fillRect(S.x, S.y, S.w, 6 * O);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(kt), o.restore();
  }), o.restore();
}
const y0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ws = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, cc = (o, n) => '<path class="' + n + '" d="' + o + '"/>', x0 = (o, n) => ' style="animation-delay:-' + Math.round(o * 137 % n) + 'ms"', qa = (o, n, i, l) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + x0(o, 2400) + ' d="M' + o + " " + (n - i) + "L" + (o + f) + " " + (n - f) + "L" + (o + i) + " " + n + "L" + (o + f) + " " + (n + f) + "L" + o + " " + (n + i) + "L" + (o - f) + " " + (n + f) + "L" + (o - i) + " " + n + "L" + (o - f) + " " + (n - f) + 'Z"/>';
}, Fp = ([o, n, i], l) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + n + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', k0 = (o, n) => n ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', M0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + n + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + n + ' 60.65)"/></g>') : [19, 26, 33].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + n + ' 38)"/></g>')).join(""), S0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([n, i], l) => '<circle class="wbFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + n + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function _0(o, n, i, l) {
  const f = (b) => '<g filter="url(#' + l + '-sh)">' + b + "</g>";
  return o === "clear" ? n ? f(Fp(i ? ws.l : ws.s, l)) + (i ? qa(70, 20, 5.83, 1) + qa(78.33, 41.67, 3.75, 0.8) + qa(60, 71.67, 3.33, 0.6) : qa(42, 12, 3.5, 1) + qa(47, 25, 2.25, 0.8) + qa(36, 43, 2, 0.6)) : f(k0(l, i)) : o === "partly" ? f(n ? Fp(i ? ws.lp : ws.sp, l) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(cc(i ? Er.lp : Er.sp, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(73.33, 16.67, 4.17, 0.9) : qa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? f(cc(i ? Er.lc : Er.s, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(15, 15, 3.75, 0.8) + qa(76.67, 13.33, 2.92, 0.6) : qa(9, 9, 2.25, 0.8) + qa(46, 8, 1.75, 0.6) : "") : f(cc(i ? Er.lr : Er.s, "wbCloudLight")) + (o === "rain" ? M0(i) : S0(i));
}
const C0 = (o, n) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (n ? 1.6 : 1) + '" stdDeviation="' + (n ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function A0(o, n, i, l) {
  let f = y0(o);
  const b = f === "night" || !!i;
  f === "night" && (f = "clear");
  const g = n ? 90 : 54;
  return { k: f, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + C0(l, n) + _0(f, b, n, l) + "</svg>" };
}
const L0 = [
  0,
  32,
  8,
  40,
  2,
  34,
  10,
  42,
  48,
  16,
  56,
  24,
  50,
  18,
  58,
  26,
  12,
  44,
  4,
  36,
  14,
  46,
  6,
  38,
  60,
  28,
  52,
  20,
  62,
  30,
  54,
  22,
  3,
  35,
  11,
  43,
  1,
  33,
  9,
  41,
  51,
  19,
  59,
  27,
  49,
  17,
  57,
  25,
  15,
  47,
  7,
  39,
  13,
  45,
  5,
  37,
  63,
  31,
  55,
  23,
  61,
  29,
  53,
  21
], vs = (o, n) => (L0[n % 8 * 8 + o % 8] + 0.5) / 64, no = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], oa = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, qp = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Qn = [255, 255, 255], pa = no("#26221e"), Vp = no("#0288d1"), T0 = no("#01579b"), dc = no(za.cloudDay), pc = no(za.cloudNight), ys = no(za.dusk), uc = no(za.sunEdge), D0 = no(za.sun), E0 = 10, Wp = 0.3, on = 56, of = 21;
function B0(o) {
  const n = Array.from({ length: of }, () => new Array(on).fill(void 0)), i = (g, v, T) => {
    n[v][g] = T;
  }, l = oa(ys, pa, 0.35), f = oa(pa, Qn, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? on - 2 : on - 1;
    for (let T = 6 - g; T <= v; T++) i(T, g, g < 2 ? l : g === 6 ? f : pa);
  }
  const b = [ys, uc, pc, no(za.skyRainDay), oa(ys, pa, 0.2), oa(o, pa, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const T = 9 + v * 6;
    for (let A = 0; A < g; A++) {
      const _ = b[(v * 2 + A * 3) % b.length];
      for (let P = T; P < T + 5; P++)
        i(P, 7 + A * 2, oa(_, pa, 0.12)), i(P, 8 + A * 2, A === g - 1 ? oa(_, Qn, 0.3) : _);
      i(T + 5, 7 + A * 2, pa), i(T + 5, 8 + A * 2, pa);
    }
  });
  for (let g = 7; g <= 12; g++) i(5, g, pa);
  i(5, 13, uc);
  for (let g = 7; g <= 14; g++) for (let v = 42; v <= 51; v++) i(v, g, v === 51 ? pc : dc);
  for (let g = 43; g <= 50; g += 2)
    i(g, 12, pa), i(g, 9, oa(pa, dc, 0.4));
  for (let g = 40; g <= 53; g++) i(g, 14, g === 40 || g === 53 ? pc : dc);
  for (let g = 15; g <= 18; g++) for (let v = 46; v <= 49; v++) i(v, g, g === 18 ? pa : g === 16 ? uc : ys);
  for (let g = 15; g <= 19; g++) i(44, g, pa);
  return i(44, 20, D0), n;
}
function P0(o, n, i, l) {
  const f = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(f * b * 4), v = no(l.skyClearDay), T = no(l.skyFogDay), A = B0(v), _ = Math.round(b * 0.55), P = Mi(1 - Math.log(i / Wp) / Math.log(E0 / Wp)), O = oa(v, T, P), M = (N) => Mi((N - 0.1) / 0.9), K = Mi((1 - Math.exp(-2 / i) - 0.2) / 0.8), tt = Math.round(f / 2 - on / 2), z = _ + 3;
  for (let N = 0; N < b; N++) {
    const et = z - 1 - N, it = N - z;
    for (let ut = 0; ut < f; ut++) {
      const Q = ut - tt;
      let I, G;
      const ft = et >= 0 && et < of && Q >= 0 && Q < on ? A[et][Q] : void 0;
      if (ft)
        I = ft, G = K;
      else if (et >= 0 && et <= 1 && Q >= 4 - et && Q <= 5 - et)
        I = oa(Qn, Vp, 0.15), G = K;
      else if (N < _) {
        const dt = Mi(((N + 0.5) / _ - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(dt + vs(ut + 2, N + 5)));
        I = oa(O, Qn, S * 0.1), G = P * 0.95;
      } else {
        const dt = (N - _ + 0.5) / (b - _), S = Math.min(1.5, 6e-3 / (dt * dt)), Ft = Mi(dt * 1.4) * 3, Y = Math.min(3, Math.floor(Ft + vs(ut + 1, N + 6)));
        I = oa(Vp, T0, Y / 3);
        const nt = 1 + Math.round(dt * 7), st = Math.floor(ut / (nt * 3)), mt = 0.06 + 0.16 * dt, ot = ut % (nt * 3) < nt;
        ot && qp(st, N) < mt ? I = oa(I, Qn, 0.18 + 0.1 * (1 - dt)) : ot && dt > 0.5 && qp(st, N - 1) < mt && (I = oa(I, pa, 0.12)), G = M(1 - Math.exp(-S / i)), it === 0 && Q >= 3 && Q <= 8 ? (I = oa(I, Qn, Q < 6 ? 0.8 : 0.45), G = K) : it >= 0 && it <= 2 && Q >= on && Q < on + 40 ? ((1 - (Q - on) / 40) * (it === 1 ? 0.9 : 0.5) > vs(ut, N + 3) && (I = oa(I, Qn, 0.5)), G = K) : it === 0 && Q >= 6 && Q < on && (I = oa(I, pa, Q % 2 === 0 ? 0.35 : 0.2), G = K);
      }
      const kt = G > vs(ut, N) ? T : I, Ht = (N * f + ut) * 4;
      g[Ht] = kt[0], g[Ht + 1] = kt[1], g[Ht + 2] = kt[2], g[Ht + 3] = 255;
    }
  }
  return { data: g, w: f, h: b };
}
const R0 = {
  GB: [
    ["Big Ben", "the London Eye", 0.46],
    ["Big Ben", "Trafalgar Square", 0.85],
    ["the London Eye", "Buckingham Palace", 1.58],
    ["Big Ben", "the Shard", 2.66],
    ["Big Ben", "Tower Bridge", 3.45],
    ["Buckingham Palace", "Tower Bridge", 4.64],
    ["Big Ben", "Hampstead Heath", 7.09],
    ["Buckingham Palace", "Canary Wharf", 8.48],
    ["Big Ben", "Wembley Stadium", 12.33],
    ["Big Ben", "Heathrow Airport", 23.47],
    ["Big Ben", "Brighton Palace Pier", 76.25]
  ],
  NL: [
    ["the Rijksmuseum", "the Van Gogh Museum", 0.34],
    ["Dam Square", "the Anne Frank House", 0.64],
    ["Dam Square", "Amsterdam Centraal", 0.83],
    ["Dam Square", "the Rijksmuseum", 1.54],
    ["Dam Square", "the Vondelpark", 2.37],
    ["Dam Square", "the Olympic Stadium", 4.22],
    ["Dam Square", "the Johan Cruyff Arena", 7.35],
    ["Dam Square", "Schiphol Airport", 11.34],
    ["Dam Square", "the Grote Kerk in Haarlem", 17.33],
    ["Dam Square", "Keukenhof", 26.12],
    ["Dam Square", "the Dom Tower in Utrecht", 35.05],
    ["Dam Square", "the Erasmus Bridge in Rotterdam", 58.61]
  ]
}, H0 = 1.6;
function N0(o, n) {
  const i = o ? R0[String(o).toUpperCase()] : void 0;
  if (!i || !(n > 0)) return;
  const l = (b) => Math.abs(Math.log(b[2] / n)), f = i.reduce((b, g) => l(g) < l(b) ? g : b);
  return l(f) <= Math.log(H0) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const O0 = (o, n) => n === "mi" ? o * 1.609344 : n === "m" ? o / 1e3 : n === "ft" ? o * 3048e-7 : n === "yd" ? o * 9144e-7 : o, I0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Pe = {
  pivot: {
    tilt: 2,
    persp: 220,
    lift: 102.4,
    /* 103 in the lab, its lift 20% less (Matt, 10 Nov) */
    press: 98,
    shine: 10,
    size: 80,
    ret: 210,
    ease: "soft"
  },
  slider: { glow: 6, spread: 1, strength: 14, hold: 5, holdStrength: 42, grow: 101, ein: 140, eout: 520, ease: "soft" },
  iconbtn: {
    scale: 108.4,
    // 107 in the lab, its growth 20% bigger (Matt, 10 Nov)
    press: 90,
    dur: 160,
    ease: "soft"
  },
  warp: { style: "pinch", amount: 60, win: 120, cdelay: 0, cdur: 500, wout: 340, ease: "soft" },
  expand: { delay: 140, stagger: 145 },
  graphs: { weight: 1, draw: 1e3 },
  tabs: { dur: 360, stretch: 56 },
  dialog: { open: 380, close: 240, ease: "spring", blur: 12, from: 80 },
  confirm: { stay: 2600, dur: 360, draw: 1 },
  drag: { pull: 17, keep: 70, stick: 44, tilt: 5, lift: 3.5, gap: 420, slide: 420, squash: 5 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, Re = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, We = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function F0() {
  const { pivot: o, slider: n, iconbtn: i, warp: l, outline: f } = Pe;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Re[o.ease]],
    ["--ab-blur", n.glow + "px"],
    ["--ab-spread", n.spread + "px"],
    ["--ab-str", n.strength + "%"],
    ["--ab-blur2", n.glow + n.hold + "px"],
    ["--ab-spread2", n.spread + n.hold / 4 + "px"],
    ["--ab-str2", n.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (n.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", n.ein + "ms"],
    ["--ab-out", n.eout + "ms"],
    ["--ab-ease", Re[n.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Re[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", l.cdur + "ms"],
    ["--wc-delay", l.cdelay + "ms"],
    ["--wc-ease", Re[l.ease]],
    ["--ol-esens", f.glowFrom],
    ["--ol-csens", f.colourFrom],
    ["--ol-cone", f.cone],
    ["--ol-glow", f.glow / 100],
    ["--ol-border", f.border / 100],
    ["--ol-fill", f.fill / 100],
    ["--ol-size", f.size / 100],
    ["--ol-h", f.hue + "deg"],
    ["--ol-in", f.fin + "ms"],
    ["--ol-out", f.fout + "ms"]
  ].map(([b, g]) => b + ":" + g).join(";");
}
const fc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", q0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", V0 = 300, Ps = (o) => Math.min(1, V0 / Math.max(1, o)), hc = (o, n) => 1 + (n / 100 - 1) * Ps(o.offsetWidth);
function W0(o, n) {
  n.style.cssText += ";" + F0();
  let i = null;
  const l = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var N, et;
    const P = _.pointerType === "touch" || We() ? null : (et = (N = _.target).closest) == null ? void 0 : et.call(N, fc);
    if (i && i !== P && l(i), i = P, !P || P.disabled) return;
    const O = Pe.pivot, M = P.getBoundingClientRect(), K = (_.clientX - M.left) / M.width, tt = (_.clientY - M.top) / M.height, z = 1;
    P.classList.add("mvPv", "mvMoving", "mvLit"), P.style.setProperty("--pv-persp", O.persp / Ps(Math.max(P.offsetWidth, P.offsetHeight)) + "px"), P.style.setProperty("--ry", (z * (K - 0.5) * 2 * O.tilt * Ps(P.offsetWidth)).toFixed(3) + "deg"), P.style.setProperty("--rx", (z * -(tt - 0.5) * 2 * O.tilt * Ps(P.offsetHeight)).toFixed(3) + "deg"), P.style.setProperty("--mx", (K * 100).toFixed(1) + "%"), P.style.setProperty("--my", (tt * 100).toFixed(1) + "%"), P._down || P.style.setProperty("--sc", hc(P, O.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    i && !i.contains(_.relatedTarget) && (l(i), i = null);
  }), o.addEventListener("pointerdown", (_) => {
    var O, M;
    const P = We() ? null : (M = (O = _.target).closest) == null ? void 0 : M.call(O, fc);
    P && (P._down = !0, P.classList.add("mvPv"), P.classList.remove("mvMoving"), P.style.setProperty("--sc", hc(P, Pe.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var O, M;
    const P = (M = (O = _.target).closest) == null ? void 0 : M.call(O, fc);
    P && (P._down = !1, P.style.setProperty("--sc", _.pointerType === "touch" ? 1 : hc(P, Pe.pivot.lift)));
  });
  let f = null;
  o.addEventListener("pointerover", (_) => {
    var P, O, M;
    _.pointerType !== "touch" && ((M = (O = (P = _.target).closest) == null ? void 0 : O.call(P, ".tfBar")) == null || M.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var O, M;
    const P = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    P && !P.contains(_.relatedTarget) && P !== f && P.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var O, M;
    const P = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    P && (f = P, P.classList.add("mvHold"));
  });
  const b = (_) => {
    if (!f) return;
    f.classList.remove("mvHold");
    const P = f.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < P.left || _.clientX > P.right || _.clientY < P.top || _.clientY > P.bottom) && f.classList.remove("mvHover"), f = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (_) => {
    var P, O;
    (O = (P = _.target).matches) != null && O.call(P, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var P;
    (P = _.target.classList) == null || P.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var O, M;
    const P = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    !P || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (P.classList.add("mvHold"), clearTimeout(P._k), P._k = setTimeout(() => P.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var O, M;
    const P = (M = (O = _.target).closest) == null ? void 0 : M.call(O, "button.tfIcon[data-act]");
    P && j0(P);
  });
  let g = null;
  const v = (_, P, O) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const M = _.getBoundingClientRect(), K = M.width / 2, tt = M.height / 2, z = P.clientX - M.left - K, N = P.clientY - M.top - tt, et = z ? K / Math.abs(z) : 1 / 0, it = N ? tt / Math.abs(N) : 1 / 0, ut = Math.min(Math.max(1 / Math.min(et, it), 0), 1);
    let Q = Math.atan2(N, z) * 180 / Math.PI + 90;
    Q < 0 && (Q += 360);
    const I = O ? 100 : ut * 100;
    _.style.setProperty("--edge-proximity", I.toFixed(3)), _.style.setProperty("--cursor-angle", Q.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", O || I >= Pe.outline.lightAt);
  }, T = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, A = (_) => {
    var O;
    const P = (O = _.closest) == null ? void 0 : O.call(_, q0);
    return P && !n.classList.contains("tfEditing") ? P : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const P = A(_.target);
    g && g !== P && T(g), g = P, P && !P._down && v(P, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    g && !g.contains(_.relatedTarget) && (T(g), g = null);
  }), o.addEventListener("pointerdown", (_) => {
    const P = A(_.target);
    P && Pe.outline.press && (P._down = !0, v(P, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const P = A(_.target);
    P && (P._down = !1, _.pointerType === "touch" ? T(P) : v(P, _, !1));
  }), new MutationObserver((_) => {
    var P;
    for (const O of _) {
      const M = O.target;
      if (O.type === "attributes") {
        (P = M.classList) != null && P.contains("tfMoreBackdrop") && !M.hidden && O.oldValue !== null && jp(M);
        continue;
      }
      O.addedNodes.forEach((K) => {
        K.nodeType === 1 && K.classList.contains("tfMoreBackdrop") && !K.hidden && jp(K);
      });
    }
  }).observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const nf = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function rf(o, n) {
  const i = [];
  for (let l = o; l && l !== n && l.parentNode; l = l.parentNode) i.unshift([...l.parentNode.children].indexOf(l));
  return i;
}
const sf = (o, n) => n.reduce((i, l) => i == null ? void 0 : i.children[l], o);
function j0(o) {
  var M;
  if (We() || o._warp) return;
  const n = Pe.warp, i = n.amount / 100, l = o.firstElementChild;
  if (!l) return;
  const f = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = nf(o), T = (M = v.dataset) == null ? void 0 : M.k, A = rf(o, v), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const P = l.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...f, filter: b }], { duration: n.win, easing: Re.exit, fill: "forwards" }), O = performance.now();
  P.finished.then(() => {
    const K = () => {
      var ut, Q;
      const tt = T ? v.isConnected ? v : (ut = g.querySelector) == null ? void 0 : ut.call(g, '[data-k="' + CSS.escape(T) + '"]') : v, z = tt && sf(tt, A);
      if (z === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - O < 420) {
        requestAnimationFrame(K);
        return;
      }
      (((Q = z == null ? void 0 : z.matches) != null && Q.call(z, "button.tfIcon") ? z : o).firstElementChild || l).animate([{ ...f, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: n.wout, easing: Re[n.ease] }), P.cancel(), o._warp = 0;
    };
    K();
  });
}
const lf = (o) => {
  let n = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const l = o[i - 1] || o[i], f = o[i], b = o[i + 1], g = o[i + 2] || b, v = [f[0] + (b[0] - l[0]) / 6, f[1] + (b[1] - l[1]) / 6], T = [b[0] - (g[0] - f[0]) / 6, b[1] - (g[1] - f[1]) / 6];
    n += "C" + v.map((A) => A.toFixed(1)).join(" ") + " " + T.map((A) => A.toFixed(1)).join(" ") + " " + b.map((A) => A.toFixed(1)).join(" ");
  }
  return n;
}, cf = (o, n, i, l = "mvGrid") => [0, 1, 2].map((f) => {
  const b = (n + (i - n) * f / 2).toFixed(1);
  return '<line class="' + l + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function df(o, n = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(n != null && n.getTotalLength)) return;
  const l = Pe.graphs, f = n.getTotalLength();
  n.animate([{ strokeDasharray: f, strokeDashoffset: f }, { strokeDasharray: f, strokeDashoffset: 0 }], { duration: l.draw, easing: Re.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: l.draw * 0.6, delay: l.draw * 0.3 + g * 12, easing: Re.standard, fill: "backwards" }));
}
function Rs(o, n, i, l, f) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = l + "px", o.style.width = f + "px", We() || n === l && i === f) return;
  const b = Pe.tabs, g = b.stretch / 100, v = (_, P) => ({ left: _ + "px", width: P + "px" }), A = l > n ? v(n + (l - n) * (0.15 * (1 - g)), l + f - (n + (l - n) * (0.15 * (1 - g)))) : v(l, n + i - l - (n - l) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...A }, v(l, f)], { duration: b.dur, easing: Re.standard });
}
function z0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (f) => f.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), l = (f, b) => b ? [...f.children].indexOf(b) : -1;
  o.addEventListener("click", (f) => {
    var et, it, ut;
    const b = (it = (et = f.target).closest) == null ? void 0 : it.call(et, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || We() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const T = l(g, v), A = g.getBoundingClientRect(), _ = v.getBoundingClientRect(), P = getComputedStyle(v).borderRadius, O = g.getRootNode(), M = nf(g), K = (ut = M.dataset) == null ? void 0 : ut.k, tt = rf(g, M), z = performance.now(), N = () => {
      var S, Ft, Y;
      const Q = K && !M.isConnected ? (S = O.querySelector) == null ? void 0 : S.call(O, '[data-k="' + CSS.escape(K) + '"]') : M, I = Q && sf(Q, tt), G = (Ft = I == null ? void 0 : I.matches) != null && Ft.call(I, n) ? i(I) : null;
      if (!G || l(I, G) === T) {
        performance.now() - z < 700 && requestAnimationFrame(N);
        return;
      }
      const ft = I.getBoundingClientRect(), kt = G.getBoundingClientRect(), Ht = getComputedStyle(G);
      (Y = I.querySelector(":scope>.mvSegInd")) == null || Y.remove();
      const dt = document.createElement("span");
      dt.className = "mvSegInd", dt.style.cssText = "top:" + (kt.top - ft.top - I.clientTop) + "px;height:" + kt.height + "px;border-radius:" + P + ";background:" + Ht.backgroundColor + ";box-shadow:" + Ht.boxShadow, getComputedStyle(I).position === "static" && (I.style.position = "relative"), I.prepend(dt), I.classList.add("mvSegMoving"), Rs(dt, _.left - A.left - I.clientLeft, _.width, kt.left - ft.left - I.clientLeft, kt.width), clearTimeout(I._seg), I._seg = setTimeout(() => {
        dt.remove(), I.classList.remove("mvSegMoving");
      }, Pe.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const pf = (o) => getComputedStyle(o).placeItems.startsWith("end");
function jp(o) {
  const n = o.firstElementChild;
  if (We() || !n || n.classList.contains("still")) return;
  const i = Pe.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Re.standard }), n.style.animation = "none", n.animate(pf(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Re[i.ease] }), [...(n.classList.contains("tfMorePair") && n.querySelector(".tfMore") || n).children].forEach((f, b) => f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Re.standard, fill: "backwards" }));
}
function G0(o, n) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (We() || !i || o.hidden || o._closing) {
    n();
    return;
  }
  const l = Pe.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + l.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: l.close, easing: Re.exit, fill: "forwards" });
  const f = i.animate(pf(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + l.from / 100 + ")" }], { duration: l.close, easing: Re.exit, fill: "forwards" });
  let b = !1;
  const g = () => {
    b || (b = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((v) => v.cancel()), i.getAnimations().forEach((v) => v.cancel()), n());
  };
  f.finished.then(g, g), setTimeout(g, l.close + 80);
}
const $0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function U0(o, n) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", $0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: n }));
}
function Y0(o) {
  if (We()) return;
  const n = Pe.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: n.dur, easing: Re.spring });
  const i = o.querySelector(".mvTick path");
  i && n.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: n.dur * 0.5, easing: Re.standard, fill: "backwards" });
}
const mc = (o, n, i, l, f = 1) => (o + n * i * f) * Math.pow(l, f);
function gc(o) {
  const n = Pe.drag.squash / 100;
  !o || We() || !n || o.animate([{ transform: "scale(" + (1 + n * 0.4) + "," + (1 - n) + ")" }, { transform: "scale(" + (1 - n * 0.1) + "," + (1 + n * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function zp(o) {
  if (!o || We()) return;
  const n = Pe.expand;
  [...o.children].slice(1).forEach((i, l) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: n.delay + l * n.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const ze = 6e4, se = 36e5, va = 864e5, Li = 1440, Z0 = 6, K0 = 10 * ze, Gp = 3, X0 = 3, xs = { day: [6, 22], waking: [7, 23], all: [0, 24] }, J0 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Q0 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", $p = (o, n, i, l) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const b = Math.cos(f * Math.PI / 180), g = Math.sin(f * Math.PI / 180), v = i + 2, T = i + 2 + l;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * T).toFixed(2) + " " + (n + g * T).toFixed(2);
}).join("") + '"/>', Ko = (o) => '<path d="' + Q0 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Xo = (o) => '<path d="' + o + '"/>', Up = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function t1(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? Up : $p(12, 12, 4, 2.5);
    case "clear-night":
      return Up;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : $p(7.5, 7.5, 2.6, 1.4)) + Ko("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Ko();
    case "fog":
      return Xo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Ko(i) + Xo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Ko(i) + Xo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Ko(i) + Xo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Ko(i) + Xo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Ko(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Ko(i) + Xo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Ko(i) + Xo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Xo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Xo("M12 8v5M12 16h.01");
  }
}
const bc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + t1(o, n) + "</svg>", e1 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), a1 = 30 * ze, o1 = 7, n1 = 3, Yp = 1, r1 = ze, i1 = 15 * ze, s1 = 5, le = {
  back: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  calendar: "M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z",
  chevronDown: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  sunsetUp: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z",
  sunsetDown: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",
  chartLine: "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z",
  gauge: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z",
  waterPercent: "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
  rainy: "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59",
  sunnyAlert: "M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17",
  night: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",
  sunny: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
  windy: "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
  radar: "M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, yt = {
  // the XL widgets' callout rows (Matt, 9 Nov)
  advice: { fine: "We're all good here 🙂", sunblock: "Cover up with sunblock", avoidUntil: "Avoid the sun until {time}", avoidToday: "Stay out of the sun today", window: "Open the window", closed: "Keep the windows closed", rising: "Rising: fine weather ahead", falling: "Falling: unsettled ahead", steady: "Steady: little change" },
  callout: { riseTomorrow: "Sunrise tomorrow", setTomorrow: "Sunset tomorrow", dayTomorrow: "Daylight tomorrow", moonrise: "Moonrise", moonset: "Moonset", lit: "Lit", now: "Now", peak: "Peak today", hoursAgo: "3 hours ago", change: "Change", inHours: "In 3 hours" },
  now: "Now",
  today: "Today",
  tomorrow: "Tomorrow",
  back: "Back",
  nextHours: "Next hours",
  nextDays: "Next days",
  views: { strip: "Hours", bars: "Days" },
  showAs: "Show as",
  rangeRow: "{day}: low {low}, high {high}",
  humidity: "Humidity",
  high: "High",
  low: "Low",
  modes: { temperature: "Temperature", precipitation: "Rain", wind: "Wind" },
  range: "H {high}   L {low}",
  highLow: "{high} / {low}",
  noHourly: "No hourly forecast for this day",
  noRain: "No rain expected",
  sun: "Sun",
  daylightShort: "{hours}h {minutes}m daylight",
  untilSunset: "until sunset",
  untilSunrise: "until sunrise",
  moon: "Moon",
  phases: { new_moon: "New moon", waxing_crescent: "Waxing crescent", first_quarter: "First quarter", waxing_gibbous: "Waxing gibbous", full_moon: "Full moon", waning_gibbous: "Waning gibbous", last_quarter: "Last quarter", waning_crescent: "Waning crescent" },
  wind: "Wind",
  windFrom: "From {direction}",
  beaufort: "Bft",
  cardinal: { n: "N", nne: "NNE", ne: "NE", ene: "ENE", e: "E", ese: "ESE", se: "SE", sse: "SSE", s: "S", ssw: "SSW", sw: "SW", wsw: "WSW", w: "W", wnw: "WNW", nw: "NW", nnw: "NNW" },
  metrics: { humidity: "Humidity", pressure: "Pressure", uv_index: "UV index", precipitation: "Precipitation", compared_to_average: "Compared to average", visibility: "Visibility" },
  dewPoint: "Dew point {dew_point}",
  pressure: { rising: "Rising over 3 hours", falling: "Falling over 3 hours", steady: "Steady over 3 hours" },
  uvLevel: { low: "Low", moderate: "Moderate", high: "High", very_high: "Very high", extreme: "Extreme" },
  visibilityLevel: { very_poor: "Very poor", poor: "Poor", moderate: "Moderate", good: "Good", very_good: "Very good", excellent: "Excellent" },
  visibilityLandmarks: "As far as {from} is from {to}",
  walkMinutes: "A {minutes}-minute walk",
  walkHours: "A {hours}-hour walk",
  walkDay: "A day's walk",
  uvPeak: "{level} · up to {uv_index} at {time}",
  rainExpected: "{amount} in the next 24 hours",
  rainLast24h: "Last 24 hours",
  average: { above: "above the average high", below: "below the average high", same: "same as the average high" },
  highsLastDays: "Highs of the last {days} days",
  openPage: "Open the weather page",
  todayVsAverage: "Today {today} · average {average}",
  airQuality: "Air quality",
  pollen: "Pollen",
  rainRadar: "Rain radar",
  noAir: "No air quality sensor yet",
  noPollen: "No pollen sensor yet",
  rainFrom: "Rain from {time}",
  noRain12: "No rain in the next 12 hours",
  fineParticles: "fine particles",
  noLocation: "Set your home location in Home Assistant",
  radarOff: "Radar not available",
  cameraOff: "Camera not available",
  forecastTag: "forecast",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, qc = 7, Qo = 256, l1 = 3, Zp = 700, c1 = 1800, uf = 5 * ze;
let ks = null, Kp = 0, Si = null;
function d1() {
  return ks && Date.now() - Kp < uf ? Promise.resolve(ks) : Si || (Si = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var l, f;
    const n = (((l = o.radar) == null ? void 0 : l.past) || []).slice(-6), i = (((f = o.radar) == null ? void 0 : f.nowcast) || []).slice(0, l1);
    return ks = { host: o.host, frames: [...n.map((b) => ({ ...b, past: !0 })), ...i] }, Kp = Date.now(), ks;
  }).finally(() => {
    Si = null;
  }), Si);
}
function p1(o, n, i, l) {
  const f = qc, b = 2 ** f, g = o * Math.PI / 180, v = (n + 180) / 360 * b * Qo, T = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Qo, A = v - i / 2, _ = T - l / 2, P = [];
  for (let O = Math.floor(A / Qo); O <= Math.floor((A + i - 1) / Qo); O++) for (let M = Math.floor(_ / Qo); M <= Math.floor((_ + l - 1) / Qo); M++)
    M < 0 || M >= b || P.push({ x: (O % b + b) % b, y: M, left: O * Qo - A, top: M * Qo - _ });
  return P;
}
const u1 = {
  "clear-night": "Clear, night",
  cloudy: "Cloudy",
  exceptional: "Exceptional",
  fog: "Fog",
  hail: "Hail",
  lightning: "Lightning",
  "lightning-rainy": "Lightning, rainy",
  partlycloudy: "Partly cloudy",
  pouring: "Pouring",
  rainy: "Rainy",
  snowy: "Snowy",
  "snowy-rainy": "Snowy, rainy",
  sunny: "Sunny",
  windy: "Windy",
  "windy-variant": "Windy, cloudy"
}, f1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], h1 = Object.keys(yt.phases), m1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Xp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ff = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ms = 100, Jp = "µg/m³", g1 = "weather_alerts.air_quality_pollen", Fs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], b1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, w1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], v1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, y1 = { daily: 1, hourly: 2 }, St = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), aa = (o, n) => o.replace(/\{(\w+)\}/g, (i, l) => n[l] ?? ""), en = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Qp = /* @__PURE__ */ new Map();
function hf(o) {
  let n = Qp.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", l = document.createElementNS(i, "svg"), f = document.createElementNS(i, "path");
    l.setAttribute("viewBox", "0 0 24 24"), l.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", o), l.append(f), document.body.append(l);
    const b = f.getBBox();
    l.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, T = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * T).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * T).toFixed(2) + "px" : "", Qp.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : en(o);
}
const x1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, me = (o) => o != null && o !== "" && Number.isFinite(Number(o)), tu = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map(), wc = /* @__PURE__ */ new WeakMap(), k1 = (o) => {
  switch (o == null ? void 0 : o.number_format) {
    case "comma_decimal":
      return ["en-US", "en"];
    case "decimal_comma":
      return ["de", "es", "it"];
    case "space_comma":
      return ["fr", "sv", "cs"];
    case "quote_decimal":
      return ["de-CH"];
    case "system":
      return;
    default:
      return o == null ? void 0 : o.language;
  }
};
function te(o, n, i) {
  const l = Number(o);
  if (Number.isNaN(l)) return String(o);
  const f = (n == null ? void 0 : n.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, g = f ? "en-US" : k1(n), v = JSON.stringify([g, b]);
  let T = tu.get(v);
  if (!T) {
    try {
      T = new Intl.NumberFormat(g, b);
    } catch {
      T = new Intl.NumberFormat(void 0, b);
    }
    tu.set(v, T);
  }
  return T.format(l);
}
const jc = (o) => {
  var n;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.language) || (o == null ? void 0 : o.language) || void 0;
};
function M1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (wc.has(o)) return wc.get(o);
  const n = o.time_format, i = n === "language" || n === "system" || !n ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(n === "language" ? o.language : void 0).includes("10") : n === "12";
  return wc.set(o, i), i;
}
const mf = (o) => {
  var n, i;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function gf(o, n) {
  const i = JSON.stringify([o, n]);
  let l = eu.get(i);
  if (!l) {
    try {
      l = new Intl.DateTimeFormat(o, n);
    } catch {
      l = new Intl.DateTimeFormat(void 0, { ...n, timeZone: void 0 });
    }
    eu.set(i, l);
  }
  return l;
}
const Je = (o, n) => gf(jc(n), { hour: "numeric", minute: "2-digit", hourCycle: M1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: mf(n) }).format(o), au = (o, n) => gf(jc(n), { weekday: "short", timeZone: mf(n) }).format(o), S1 = (o, n) => o.toLocaleDateString(jc(n), { weekday: "narrow" }), Me = (o, n) => me(n) ? te(Math.round(Number(n)), o.locale) + "°" : "–", xn = (o) => {
  const n = new Date(o);
  return n.setHours(0, 0, 0, 0), n;
}, Br = (o, n) => o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate(), ua = Math.PI / 180, _1 = 2440588, C1 = 2451545, qs = ua * 23.4397, A1 = 149598e3, L1 = -0.833 * ua, T1 = 0.133 * ua, ou = 5 * ze, bf = (o) => o.getTime() / va - 0.5 + _1 - C1, wf = (o, n) => Math.atan2(Math.sin(o) * Math.cos(qs) - Math.tan(n) * Math.sin(qs), Math.cos(o)), vf = (o, n) => Math.asin(Math.sin(n) * Math.cos(qs) + Math.cos(n) * Math.sin(qs) * Math.sin(o)), D1 = (o, n) => ua * (280.16 + 360.9856235 * o) - n, E1 = (o, n, i) => Math.asin(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(o));
function yf(o) {
  const n = ua * (357.5291 + 0.98560028 * o), i = ua * (1.9148 * Math.sin(n) + 0.02 * Math.sin(2 * n) + 3e-4 * Math.sin(3 * n)), l = n + i + ua * 102.9372 + Math.PI;
  return { ra: wf(l, 0), dec: vf(l, 0), dist: A1 };
}
function xf(o) {
  const n = ua * (218.316 + 13.176396 * o), i = ua * (134.963 + 13.064993 * o), l = ua * (93.272 + 13.22935 * o), f = n + ua * 6.289 * Math.sin(i), b = ua * 5.128 * Math.sin(l);
  return { ra: wf(f, b), dec: vf(f, b), dist: 385001 - 20905 * Math.cos(i) };
}
const kf = (o, n, i, l) => {
  const f = bf(n), b = o(f);
  return E1(D1(f, ua * -l) - b.ra, ua * i, b.dec);
}, Vs = (o, n, i) => kf(yf, o, n, i), B1 = (o, n, i) => kf(xf, o, n, i);
function Mf(o, n, i, l) {
  const f = {};
  let b = i.getTime(), g = o(i) - n;
  for (let v = b + ou; v <= l.getTime(); v += ou) {
    const T = o(new Date(v)) - n;
    if (g < 0 != T < 0) {
      const A = new Date(b + (v - b) * g / (g - T));
      T > 0 ? f.rise ?? (f.rise = A) : f.set ?? (f.set = A);
    }
    b = v, g = T;
  }
  return f;
}
const Sf = (o) => {
  const n = xn(o);
  return [n, new Date(n.getTime() + va)];
}, P1 = (o, n, i) => Mf((l) => Vs(l, n, i), L1, ...Sf(o)), R1 = (o, n, i) => Mf((l) => B1(l, n, i), T1, ...Sf(o));
function vc(o) {
  const n = bf(o), i = yf(n), l = xf(n), f = Math.acos(Math.sin(i.dec) * Math.sin(l.dec) + Math.cos(i.dec) * Math.cos(l.dec) * Math.cos(i.ra - l.ra)), b = Math.atan2(i.dist * Math.sin(f), l.dist - i.dist * Math.cos(f)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - l.ra), Math.sin(i.dec) * Math.cos(l.dec) - Math.cos(i.dec) * Math.sin(l.dec) * Math.cos(i.ra - l.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const H1 = (o) => {
  const n = o * 28;
  return n < 0.5 || n > 27.5 ? "new_moon" : n < 6.5 ? "waxing_crescent" : n < 7.5 ? "first_quarter" : n < 13.5 ? "waxing_gibbous" : n < 14.5 ? "full_moon" : n < 20.5 ? "waning_gibbous" : n < 21.5 ? "last_quarter" : "waning_crescent";
}, Or = (o) => {
  const n = o == null ? void 0 : o.config;
  return n && me(n.latitude) && me(n.longitude) ? { lat: Number(n.latitude), lon: Number(n.longitude) } : null;
};
function Pr(o, n) {
  var A, _, P;
  const i = Or(o), l = i ? P1(n, i.lat, i.lon) : {}, f = (A = o == null ? void 0 : o.states) == null ? void 0 : A["sun.sun"], b = xn(n).getTime(), g = (O) => {
    const M = O ? new Date(O) : null;
    return M && Number.isFinite(M.getTime()) && xn(M).getTime() === b ? M : null;
  }, v = g((_ = f == null ? void 0 : f.attributes) == null ? void 0 : _.next_rising), T = g((P = f == null ? void 0 : f.attributes) == null ? void 0 : P.next_setting);
  return v && (l.rise = v), T && (l.set = T), l;
}
function N1(o) {
  var l;
  const n = (l = o == null ? void 0 : o.states) == null ? void 0 : l["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Or(o);
  return i ? Vs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const tr = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Ir = (o, n) => {
  var l;
  const i = (l = o.entities) == null ? void 0 : l[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var l, f;
  for (const b of n) {
    const g = (l = o.states) == null ? void 0 : l[b];
    if (!tr(g)) continue;
    const v = (f = g.attributes) == null ? void 0 : f[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, O1 = (o, n) => n.map((i) => {
  var l;
  return (l = o.states) == null ? void 0 : l[i];
}).find(tr), I1 = (o, n, i) => n.map((l) => {
  var f;
  return (f = o.states) == null ? void 0 : f[l];
}).find((l) => {
  var f;
  return tr(l) && (((f = l.attributes) == null ? void 0 : f.supported_features) == null || Number(l.attributes.supported_features) & y1[i]);
});
function yn(o, n, i) {
  var b, g, v, T;
  const l = ((g = (b = o.config) == null ? void 0 : b.unit_system) == null ? void 0 : g.length) || "", f = (n == null ? void 0 : n.attributes) || {};
  switch (i) {
    case "precipitation":
      return f.precipitation_unit || (l === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (l === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || l + "/h";
    case "visibility":
      return f.visibility_unit || l;
    default:
      return f.temperature_unit || ((T = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : T.temperature) || "";
  }
}
function Hs(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [f, ...b] = o.formatEntityAttributeValueToParts(n, i, l).map((g) => g.value);
      return { number: f, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: te(l, o.locale), unit: yn(o, n, i) };
}
function nu(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, l);
  } catch {
  }
  const f = Hs(o, n, i, l);
  return (f.number + " " + f.unit).trim();
}
function Jo(o, n) {
  var l;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (l = n.attributes) == null ? void 0 : l.unit_of_measurement;
  return u1[n.state] || (i && me(n.state) ? te(n.state, o.locale) + " " + i : n.state);
}
function wn(o, n) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(n, { type: "entity" });
  } catch {
  }
  return ((i = n.attributes) == null ? void 0 : i.friendly_name) || n.entity_id;
}
const ru = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ss = (o) => ff.find(([, n]) => o <= n)[0];
function F1(o, n) {
  if (n === "Beaufort") return Math.round(o);
  const i = n ? b1[n] : void 0;
  if (i === void 0) return;
  const l = w1.findIndex((f) => o * i < f);
  return l === -1 ? 12 : l;
}
const iu = (o, n) => {
  const i = n ? v1[n] : void 0;
  return i === void 0 ? void 0 : o * i;
}, su = (o) => Object.keys(o.states || {}).find((n) => {
  var i, l;
  return n.startsWith("sensor.") && ((l = (i = o.entities) == null ? void 0 : i[n]) == null ? void 0 : l.platform) === "moon";
}), yc = (o) => Object.values(o.states || {}).filter((n) => {
  var i, l;
  return n.entity_id.startsWith("sensor.") && ((i = n.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((l = n.attributes) == null ? void 0 : l.state_class) ?? "") && Ir(o, n.entity_id);
}).map((n) => n.entity_id).sort()[0];
function q1(o) {
  var i;
  const n = {};
  for (const [l, f] of Object.entries(((i = o == null ? void 0 : o.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      n[l] = f.categories;
      continue;
    }
    for (const [b, g] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) n[b] = g == null ? void 0 : g.categories;
  }
  return n;
}
const _f = (o, n, i) => {
  var f, b, g;
  const l = (b = (f = o.entities) == null ? void 0 : f[i]) == null ? void 0 : b.platform;
  return !!l && !!((g = n[l]) != null && g.includes(g1));
};
function V1(o, n) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((l) => {
    var f;
    return l.entity_id.startsWith("sensor.") && Fs.includes(((f = l.attributes) == null ? void 0 : f.device_class) ?? "") && Ir(o, l.entity_id) && _f(o, n, l.entity_id);
  }).sort((l, f) => l.entity_id.localeCompare(f.entity_id)).forEach((l) => {
    i.has(l.attributes.device_class) || i.set(l.attributes.device_class, l.entity_id);
  }), Fs.map((l) => i.get(l)).filter(Boolean);
}
const W1 = (o, n) => Object.values(o.states || {}).filter((i) => {
  var l, f;
  return i.entity_id.startsWith("sensor.") && Ir(o, i.entity_id) && _f(o, n, i.entity_id) && (((f = (l = o.entities) == null ? void 0 : l[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function lu(o, n, i) {
  const l = Math.max(n - o, 1e-6), f = i[i.length - 1], b = i.find((A) => l / A <= 4) ?? f * Math.ceil(l / (4 * f)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const T = [];
  for (let A = g; A <= v + b / 1e3; A += b) T.push(A);
  return { min: g, max: v, ticks: T };
}
const j1 = (o, n, i) => {
  const l = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), f = l(o), b = l(n);
  return "rgb(" + f.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, z1 = (o, n, i, l) => {
  const f = i * Math.abs(1 - 2 * l), b = l < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + f + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, ca = ({ icon: o, name: n, sub: i, visual: l, double: f, backdrop: b, cls: g, zone: v, callouts: T }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + hf(o) + '</div><div class="wbText"><span class="wbName">' + St(n) + "</span>" + (i ? '<span class="wbSub">' + St(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (T != null && T.length ? '<div class="wbCallouts">' + T.slice(0, 3).map((A) => Array.isArray(A) ? '<span class="wbCallout"><span>' + St(A[0]) + "</span><span>" + St(A[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + St(A) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + l + "</div>") + "</div>", _s = (o) => '<div class="wbZoneM">' + o + "</div>", Va = (o, n) => '<div class="wbValue"><span class="wbNum">' + St(o) + "</span>" + (n ? '<span class="wbUnitV">' + St(n) + "</span>" : "") + "</div>";
function G1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, l = (v) => v / Li * 100 + "%", f = (v) => v.map((T) => T.t + "," + i(T.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + l(v.t) + '">' + en(v.rise ? le.sunsetUp : le.sunsetDown) + St(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + St(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Li + ' 100" preserveAspectRatio="none">' + o.night.map(([v, T]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (T - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Li + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + f(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + l(v.t + 12) + ";width:" + l(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + l(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + l(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + St(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + St(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + l(v.t) + '">' + St(v.label) + "</span>").join("") + "</div></div>", g;
}
function cu(o, n, i = 120, l = 300) {
  const g = o.map((N) => N.value), v = Math.min(...g), T = Math.max(...g), A = T - v || 1, _ = (N) => N / (o.length - 1) * l, P = (N) => 18 + (1 - (N - v) / A) * (i - 18 - 18), O = o.map((N, et) => [_(et), P(N.value)]), M = O.length > 2 ? lf(O) : "M" + O.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), K = g.indexOf(T), tt = g.indexOf(v), z = (N) => N === 0 ? "start" : N === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + l + " " + i + '" aria-hidden="true">' + cf(l, 18, i - 18) + ('<path class="wbArea" d="' + M + "L" + l + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + M + '" vector-effect="non-scaling-stroke"></path><text x="' + _(K) + '" y="' + (P(T) - 6) + '" text-anchor="' + z(K) + '">' + St(n(T)) + '</text><text x="' + _(tt) + '" y="' + (P(v) + 14) + '" text-anchor="' + z(tt) + '">' + St(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + St(o[0].label) + '</text><text x="' + l + '" y="' + i + '" text-anchor="end">' + St(o[o.length - 1].label) + "</text></svg>";
}
function $1(o, n) {
  const b = o.map((P) => P.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, T = v - g || 1, A = 300 / o.length, _ = (P) => (1 - (P - g) / T) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((P, O) => '<rect class="wbBar' + (P.now ? " wbNowBar" : "") + '" x="' + (O * A + A * 0.2) + '" y="' + _(P.value) + '" width="' + A * 0.6 + '" height="' + (104 - _(P.value)) + '" rx="6"></rect><text x="' + (O * A + A / 2) + '" y="120" text-anchor="middle">' + St(P.label) + "</text>").join("") + "</svg>";
}
const U1 = [
  [44.5, 40.1, 16.5, 13.2, -15, 0.7],
  [70.9, 41.2, 8.8, 8.2, 0, 0.75],
  [77.5, 56.6, 12.1, 9.3, 20, 0.7],
  [97.2, 44.5, 6.6, 5.2, 0, 0.8],
  [89.5, 67.6, 6.6, 9.9, 10, 0.55],
  [80.8, 75.3, 4.9, 4.9, 0, 0.6],
  [29.2, 59.9, 14.3, 23.1, 10, 0.45],
  [51.1, 76.4, 9.9, 7.1, -10, 0.5],
  [34.6, 78.6, 5.2, 5.2, 0, 0.6],
  [58.3, 23.7, 22, 3.8, -5, 0.4],
  [61, 53.3, 5, 4, 0, 0.55],
  [44.5, 68.7, 6, 5, 0, 0.45]
], Y1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], du = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Z1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let K1 = 0;
function pu(o, { getHass: n, entityId: i, style: l = "bitmap", motion: f = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: T } = {}) {
  var Ui, Hn;
  const A = "wb" + ++K1 + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = l;
  const P = document.createElement("div");
  P.className = "wbBento", _.appendChild(P), o.replaceChildren(_);
  const O = document.createElement("div");
  O.className = "wb wbPopup", O.dataset.style = l, O.hidden = !0;
  const M = ["aq_tile", "pollen_tile", "radar_tile"], K = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), tt = { current: "wide", hourly: "wide", compared_to_average: "double" }, z = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  K.forEach((c) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = c, h.dataset.size = tt[c] || "tile", h.hidden = !0, z.includes(c) && (h.dataset.xl = ""), P.appendChild(h), N[c] = { el: h, html: null };
  });
  let et = !1, it = null, ut = 0, Q = -1, I = !1, G = null, ft = "";
  const kt = "homecore-next-view", Ht = (() => {
    try {
      return localStorage.getItem(kt);
    } catch {
      return null;
    }
  })(), dt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Ht === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), Y = /* @__PURE__ */ new Date();
  const nt = {}, st = {}, mt = {}, ot = (c) => {
    var h;
    return ((h = mt[c]) == null ? void 0 : h.forecast) ?? [];
  }, ct = (c, h) => {
    var w;
    return mt[h] ? (w = c.states) == null ? void 0 : w[mt[h].entityId] : void 0;
  };
  function q(c) {
    const h = st[c];
    h && (h.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete st[c]), mt[c] && delete mt[c];
  }
  function bt(c, h, w) {
    var R;
    if (typeof ((R = c.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((W) => {
        et || st[h] !== y || (W != null && W.forecast ? mt[h] = { entityId: w, forecast: W.forecast } : delete mt[h], cn());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: w }));
    } catch (W) {
      y.unsub = Promise.reject(W);
    }
    y.unsub.catch(() => {
      st[h] === y && delete st[h];
    }), st[h] = y;
  }
  function Tt(c, h) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const R = I1(c, h, y);
      ((w = st[y]) == null ? void 0 : w.entityId) !== (R == null ? void 0 : R.entity_id) && (q(y), R && bt(c, y, R.entity_id));
    }
  }
  const Wt = (c, h, w, y = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [h],
    minimal_response: y,
    no_attributes: y,
    significant_changes_only: !1
  });
  async function ne(c, h) {
    var Z, J, U;
    const w = Ie(c, h, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, R = await Wt(c, y, new Date(Date.now() - 3 * se)), W = (U = (J = (Z = R == null ? void 0 : R[y]) == null ? void 0 : Z.find((at) => {
      var rt;
      return typeof ((rt = at.a) == null ? void 0 : rt.pressure) == "number";
    })) == null ? void 0 : J.a) == null ? void 0 : U.pressure;
    S.pressureHistory = typeof W == "number" ? { entityId: y, value: W } : void 0;
  }
  async function ia(c, h) {
    var J;
    const w = Ie(c, h, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, R = xn(/* @__PURE__ */ new Date()), W = await Wt(c, y, new Date(R.getTime() - o1 * va)), Z = /* @__PURE__ */ new Map();
    for (const U of (W == null ? void 0 : W[y]) ?? []) {
      const at = (J = U.a) == null ? void 0 : J.temperature, rt = new Date((U.lc ?? U.lu) * 1e3);
      if (typeof at != "number" || rt >= R) continue;
      const vt = rt.toDateString();
      Z.set(vt, Math.max(Z.get(vt) ?? -1 / 0, at));
    }
    S.temperatureHistory = { entityId: y, dailyHighs: [...Z.values()], days: [...Z.entries()].map(([U, at]) => ({ date: new Date(U), high: at })) };
  }
  async function fa(c) {
    const h = yc(c);
    if (!h) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: h, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function So() {
    const c = n == null ? void 0 : n();
    if (!c || et || typeof c.callWS != "function") return;
    const h = Vt(c);
    S.lastFetch = Date.now(), [ne(c, h), ia(c, h), fa(c)].forEach((w) => w.then(() => cn(), () => {
    }));
  }
  async function La() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const h = Ie(c, Vt(c), "temperature");
    if (!h) return;
    const w = h.stateObj.entity_id, y = xn(/* @__PURE__ */ new Date());
    try {
      const R = await Wt(c, w, y), W = (Z) => ((R == null ? void 0 : R[w]) ?? []).map((J) => {
        var U;
        return { time: J.lu * 1e3, value: (U = J.a) == null ? void 0 : U[Z] };
      }).filter((J) => typeof J.value == "number");
      S.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: W("temperature"), humidity: W("humidity") }, cn();
    } catch {
    }
  }
  async function rn(c) {
    const h = n == null ? void 0 : n();
    if (h)
      try {
        const w = await Wt(h, c, new Date(Date.now() - 24 * se), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((W) => me(W.s)), R = Math.max(1, Math.ceil(y.length / 48));
        S.aqHistory = { entityId: c, points: y.filter((W, Z) => Z % R === 0).map((W) => ({ label: Je(new Date(W.lu * 1e3), h), value: Number(W.s) })) }, cn();
      } catch {
      }
  }
  function Sn(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((h) => {
      S.categories = q1(h);
    }, () => {
      S.categories = {};
    }).then(() => cn()));
  }
  function Vt(c) {
    var w;
    const h = Object.keys(c.states || {}).filter((y) => y.startsWith("weather.") && Ir(c, y)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...h.filter((y) => y !== i)] : h;
  }
  const ge = (c) => S.categories ? { air: V1(c, S.categories), pollen: W1(c, S.categories) } : { air: [], pollen: [] };
  function Ke(c, h, w, y) {
    if (l === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + bc(c, w || c === "clear-night") + "</span>";
    if (l === "smooth") {
      const R = A0(c, h === 90, w, A + "g-" + y);
      return '<span class="wbWx wbS' + h + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + St(zu(c, w)) + '" data-size="' + h + '"></canvas></span>';
  }
  const Fr = () => ot("daily").filter((c) => c.templow != null).slice(0, Z0);
  function Mt(c, h) {
    const w = new Date(h.datetime), y = /* @__PURE__ */ new Date();
    return Br(w, y) ? yt.today : Br(w, new Date(y.getTime() + va)) ? yt.tomorrow : au(w, c);
  }
  const _n = (c, h, w) => w === 0 ? Mt(c, h) : au(new Date(h.datetime), c);
  function qr(c, h) {
    var rt, vt, Bt, Et;
    const w = O1(c, h);
    if (!w) return "";
    const y = Fr(), R = dt.openDay !== void 0 ? y[dt.openDay] : void 0, W = Ie(c, h, "temperature"), Z = y[0], J = Z && Br(new Date(Z.datetime), /* @__PURE__ */ new Date()), U = ((vt = (rt = c.config) == null ? void 0 : rt.unit_system) == null ? void 0 : vt.temperature) || ((Bt = w.attributes) == null ? void 0 : Bt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + St(yt.openPage) + '">' : '<div class="wbCurrent">') + Ke(w.state, 90, N1(c), "now") + '<div class="wbTempBlock">' + (W && me(W.value) ? '<div class="wbTemp"><span class="wbDeg">' + St(te(Math.round(Number(W.value)), c.locale)) + '</span><span class="wbUnit">' + St(U) + "</span></div>" : "") + '<div class="wbPlace">' + St(((Et = c.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + St(Jo(c, w)) + "</div>" + (J && Z.templow != null ? '<div class="wbRange">' + St(aa(yt.range, { high: Me(c, Z.temperature), low: Me(c, Z.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Se(c) + Pi(c), y.length) {
      const At = J && W && me(W.value) ? Me(c, W.value) : "", Gt = (Rt, pt, Ot) => Rt === 0 && At ? '<span class="wbAsDay">' + St(pt) + '</span><span class="wbAsNow">' + St(Ot) + "</span>" : St(pt);
      at += '<div class="wbColumns" role="list">' + y.map((Rt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + Gt(pt, _n(c, Rt, pt), yt.now) + "</span>" + Ke(Rt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + Gt(pt, Me(c, Rt.temperature), At) + '</span><span class="wbLo">' + St(Me(c, Rt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + y.map((Rt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Ke(Rt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + St(Mt(c, Rt)) + '</span><span class="wbSub">' + St(aa(yt.highLow, { high: Me(c, Rt.temperature), low: Me(c, Rt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (R ? _o(c, h, R) : "") + "</div>";
  }
  const Bi = {
    sunny: "sunny",
    "clear-night": "clear",
    partlycloudy: "partly cloudy",
    cloudy: "cloudy",
    fog: "foggy",
    rainy: "rain",
    pouring: "heavy rain",
    snowy: "snow",
    "snowy-rainy": "sleet",
    hail: "hail",
    lightning: "thunder",
    "lightning-rainy": "thunderstorms",
    windy: "windy",
    "windy-variant": "windy",
    exceptional: "unsettled"
  }, or = {
    sunny: "clear",
    "clear-night": "clear",
    partlycloudy: "partly",
    cloudy: "cloudy",
    windy: "cloudy",
    "windy-variant": "cloudy",
    fog: "fog",
    rainy: "rain",
    pouring: "rain",
    hail: "rain",
    snowy: "snow",
    "snowy-rainy": "snow",
    lightning: "storm",
    "lightning-rainy": "storm"
  };
  function Cn(c) {
    const h = Date.now(), w = ot("hourly").filter((vt) => new Date(vt.datetime).getTime() > h - se).slice(0, 13);
    if (w.length < 2) return "";
    const y = (vt) => Je(new Date(vt.datetime), c), R = (vt) => Bi[vt.condition] || "", W = (vt) => or[vt.condition] || vt.condition;
    let Z = R(w[0]);
    if (!Z) return "";
    let J = w[0], U = 0;
    for (const vt of w.slice(1))
      U === 2 || W(vt) === W(J) || !R(vt) || (Z += (U ? " and " : ", ") + R(vt) + " from " + y(vt), J = vt, U++);
    const at = Number(w[0].temperature), rt = w.filter((vt) => me(vt.temperature));
    if (me(at) && rt.length) {
      const vt = rt.reduce((Et, At) => Number(At.temperature) < Number(Et.temperature) ? At : Et), Bt = rt.reduce((Et, At) => Number(At.temperature) > Number(Et.temperature) ? At : Et);
      at - Number(vt.temperature) >= 3 ? Z += ", down to " + Me(c, vt.temperature) + " by " + y(vt) : Number(Bt.temperature) - at >= 3 && (Z += ", up to " + Me(c, Bt.temperature) + " by " + y(Bt));
    }
    return Z[0].toUpperCase() + Z.slice(1) + ".";
  }
  const Se = (c) => {
    const h = Cn(c);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + St(h) + "</p></div>" : "";
  };
  function Pi(c) {
    const [h, w] = xs[v == null ? void 0 : v()] || xs.day, y = Date.now(), R = ot("hourly").filter((W) => {
      const Z = new Date(W.datetime), J = Z.getHours();
      return Z.getTime() > y - se / 2 && J >= h && J < w && me(W.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((W, Z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + St(Je(new Date(W.datetime), c)) + "</span>" + Ke(W.condition ?? "cloudy", 40, W.is_daytime === !1, "hr" + Z) + '<span class="wbHourTemp">' + St(Me(c, W.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Ta(c) {
    const h = c.getTime(), w = Date.now() - se;
    return ot("hourly").filter((y) => {
      const R = new Date(y.datetime).getTime();
      return R >= h && R < h + va && R > w;
    });
  }
  function Jt(c) {
    if (!c.length) return ["temperature"];
    const h = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && h.push("precipitation"), c.some((w) => w.humidity != null) && h.push("humidity"), h;
  }
  function _o(c, h, w) {
    const y = xn(new Date(w.datetime)), R = Ta(y), W = Jt(R), Z = W.includes(dt.dayMode) ? dt.dayMode : "temperature", J = (U) => U === "humidity" ? yt.humidity : yt.modes[U];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ke(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + St(Mt(c, w)) + '</span><span class="wbSub">' + St(aa(yt.highLow, { high: Me(c, w.temperature), low: Me(c, w.templow) })) + '</span></div><button class="wbBack" title="' + St(yt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + en(le.back) + "</button></div>" + (W.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + W.map((U) => '<button aria-pressed="' + (U === Z) + '" data-wb="day-mode" data-mode="' + U + '" data-wb-focus="day-mode-' + U + '">' + St(J(U)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + G1(Vr(c, h, y, R, Z)) + "</div></div>";
  }
  function Vr(c, h, w, y, R) {
    var No;
    const W = w.getTime(), Z = Date.now(), J = Br(w, /* @__PURE__ */ new Date()), U = (ee) => (ee - W) / ze, at = (ee) => Je(new Date(ee), c), rt = (ee) => new Date(ee.datetime).getTime(), vt = [0, 3, 6, 9, 12, 15, 18, 21].map((ee) => ({ t: ee * 60, label: at(W + ee * se), minor: ee % 6 !== 0 })), { rise: Bt, set: Et } = Pr(c, w), At = [], Gt = [];
    Bt && (At.push({ t: U(Bt.getTime()), label: at(Bt.getTime()), rise: !0 }), Gt.push([0, U(Bt.getTime())])), Et && (At.push({ t: U(Et.getTime()), label: at(Et.getTime()), rise: !1 }), Gt.push([U(Et.getTime()), Li]));
    const Rt = Or(c);
    !Bt && !Et && Rt && Vs(new Date(W + va / 2), Rt.lat, Rt.lon) < 0 && Gt.push([0, Li]);
    const pt = J ? U(Z) : void 0, Ot = { hours: vt, sun: At, night: Gt };
    if (!y.length && !J) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    if (R === "precipitation") {
      const ee = y.some((ea) => ea.precipitation_probability != null), Oo = y.map((ea) => ({ t: U(rt(ea)), v: Number((ee ? ea.precipitation_probability : ea.precipitation) ?? 0) })), uo = yn(c, ct(c, "hourly"), "precipitation"), Io = Math.max(0, ...Oo.map((ea) => ea.v)), ii = ee ? 100 : lu(0, Math.max(Io, 1), [0.5, 1, 2, 5, 10]).max, Yi = (ea) => ee ? te(ea, c.locale) + "%" : te(ea, c.locale, { maximumFractionDigits: 1 }) + " " + uo, br = Oo.find((ea) => ea.v === Io);
      return {
        ...Ot,
        kind: "bars",
        points: Oo,
        min: 0,
        max: ii,
        ticks: [0, ii / 2, ii],
        format: Yi,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: br && Io > 0 ? { t: br.t + 30, v: br.v, label: Yi(br.v) } : void 0,
        note: Io > 0 ? void 0 : yt.noRain
      };
    }
    const qt = R === "humidity" ? "humidity" : "temperature", ve = y.filter((ee) => ee[qt] != null && (!J || rt(ee) >= Z)).map((ee) => ({ t: U(rt(ee)), v: Number(ee[qt]) }));
    let Dt, re = [];
    if (pt !== void 0) {
      const ee = Ie(c, h, qt);
      ee && me(ee.value) && (Dt = { t: pt, v: Number(ee.value) }, ve.unshift(Dt)), re = (((No = S.todayHistory) == null ? void 0 : No.day) === w.toDateString() ? S.todayHistory[qt] : []).filter((uo) => uo.time <= Z).map((uo) => ({ t: Math.max(0, U(uo.time)), v: uo.value })), Dt && re.length && re.push(Dt);
    }
    const Ut = [...re, ...ve];
    if (!Ut.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    const ka = Ut.map((ee) => ee.v), po = lu(Math.min(...ka), Math.max(...ka), qt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    qt === "humidity" && (po.min = Math.max(0, po.min), po.max = Math.min(100, po.max), po.ticks = po.ticks.filter((ee) => ee >= 0 && ee <= 100));
    const ri = qt === "humidity" ? (ee) => te(ee, c.locale) + "%" : (ee) => Me(c, ee), gr = qt === "temperature" ? Ut.reduce((ee, Oo) => Oo.v > ee.v ? Oo : ee) : void 0;
    return { ...Ot, kind: "line", points: ve, past: re, ...po, format: ri, now: Dt, peak: gr ? { ...gr, label: ri(gr.v) } : void 0 };
  }
  function jt(c) {
    const h = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && h.push("precipitation"), c.some((w) => w.wind_speed != null) && h.push("wind"), h;
  }
  function ya(c, h, w = Gp) {
    var W, Z;
    const y = ot("daily"), R = [];
    for (let J = 0; J < w; J++) for (const U of [!1, !0]) {
      const at = c.getTime() + (J * 24 + (U ? 12 : 0)) * se, rt = at + 12 * se, vt = {};
      h.forEach((Et) => {
        const At = new Date(Et.datetime).getTime();
        Et.condition && At >= at && At < rt && (vt[Et.condition] = (vt[Et.condition] ?? 0) + (e1.has(Et.condition) ? 2 : 1));
      });
      let Bt = (W = Object.entries(vt).sort((Et, At) => At[1] - Et[1])[0]) == null ? void 0 : W[0];
      if (!Bt) {
        const Et = new Date(at).toDateString();
        Bt = ((Z = y.find((At) => new Date(At.datetime).toDateString() === Et)) == null ? void 0 : Z.condition) ?? "cloudy";
      }
      R.push({ cond: U && Bt === "sunny" ? "clear-night" : Bt, night: U });
    }
    return R;
  }
  function Ri(c, h, w) {
    const y = ct(c, "hourly"), R = h.precipitation_probability != null ? te(h.precipitation_probability, c.locale) + "%" : "", W = h.precipitation ? te(h.precipitation, c.locale) + " " + yn(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return R ? [R, W] : [W || "–", ""];
      case "wind":
        return h.wind_speed != null ? [te(Math.round(h.wind_speed), c.locale), yn(c, y, "wind_speed")] : ["–", ""];
      default:
        return [Me(c, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Hi(c, h, w) {
    const [y, R] = xs[v == null ? void 0 : v()] || xs.day, W = [];
    for (let Z = 0; Z < 4 && W.length < 3; Z++) {
      const J = /* @__PURE__ */ new Date();
      J.setHours(0, 0, 0, 0), J.setDate(J.getDate() + Z);
      const U = new Date(J);
      U.setHours(R, 0, 0, 0), J.setHours(y, 0, 0, 0), !(U.getTime() <= w || !h.some((at) => {
        const rt = new Date(at.datetime).getTime();
        return rt >= J.getTime() && rt <= U.getTime();
      })) && W.push({ a: J.getTime(), b: U.getTime(), label: Mt(c, { datetime: J.toISOString() }) });
    }
    return W;
  }
  function Da(c, h, w, y, R, W) {
    const Z = (w.b - h.a) / se, J = (pt) => ((pt - h.a) / se).toFixed(3), U = 80, at = 32, rt = [];
    for (const pt = new Date(h.a - va); pt.getTime() < w.b + va; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ot, set: qt } = Pr(c, new Date(pt));
      Ot && qt && rt.push({ rise: Ot.getTime(), set: qt.getTime() });
    }
    const vt = (pt, Ot) => U - (U - at) * Math.sin(Math.PI * (Ot - pt.rise) / (pt.set - pt.rise)), Bt = (pt) => !rt.some((Ot) => pt >= Ot.rise && pt <= Ot.set);
    let Et = "", At = "", Gt = "";
    rt.forEach((pt, Ot) => {
      const qt = [];
      for (let Dt = pt.rise; Dt <= pt.set; Dt += 15 * ze) qt.push(J(Dt) + "," + vt(pt, Dt).toFixed(2));
      qt.push(J(pt.set) + "," + U), Et += '<polyline class="wbLineArc" points="' + qt.join(" ") + '"/>';
      const ve = rt[Ot + 1];
      ve && (Et += '<rect class="wbLineNight" x="' + J(pt.set) + '" y="0" width="' + ((ve.rise - pt.set) / se).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([Dt, re]) => {
        Dt < h.a || Dt > w.b || (At += '<line class="wbLineEdge" x1="' + J(Dt) + '" x2="' + J(Dt) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + W(Dt) + '">' + re + " " + St(Je(new Date(Dt), c)) + "</span>");
      });
    });
    const Rt = rt.find((pt) => R >= pt.rise && R <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + At + '<line class="wbLineHorizon" x1="0" x2="' + Z + '" y1="' + U + '" y2="' + U + '"/></svg>' + Gt + (Rt ? '<span class="wbLineNow" style="left:' + W(R) + ";top:" + vt(Rt, R) + '%">' + bc("sunny", !1) + "</span>" : "") + y.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + W(pt.t) + '">' + bc(pt.entry.condition ?? "cloudy", Bt(pt.t)) + "</span>").join("");
  }
  function Le(c, h) {
    delete nt.hourly;
    const w = dt.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + St(w === "bars" ? yt.nextDays : yt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + St(yt.showAs) + '">' + ["strip", "bars"].map((Dt) => '<button aria-pressed="' + (Dt === w) + '" data-wb="hourly-view" data-view="' + Dt + '" data-wb-focus="hourly-view-' + Dt + '">' + St(yt.views[Dt]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return An(c, h, y);
    const R = ot("hourly"), W = Math.floor(Date.now() / ze) * ze, Z = R.filter((Dt) => new Date(Dt.datetime).getTime() > W - se);
    if (!Z.length) return "";
    const J = jt(Z), U = J.includes(dt.hourlyMode) ? dt.hourlyMode : "temperature", at = Hi(c, R, W);
    if (!at.length) return "";
    const rt = at[0], vt = at[at.length - 1], Bt = (rt.b - rt.a) / se, Et = (Dt) => "calc(var(--wb-u) * " + ((Dt - rt.a) / se).toFixed(3) + ")", At = new Date(rt.a);
    At.setHours(6, 0, 0, 0), At.getTime() > rt.a && At.setDate(At.getDate() - 1);
    const Gt = Math.ceil((vt.b - At.getTime()) / va);
    l !== "line" && (nt.hourly = { segs: ya(At, R, Gt), seed: At.getDate(), columns: Gt });
    const Rt = (Dt) => Dt === rt.a ? " wbFirst" : Dt === vt.b ? " wbLast" : "", pt = [];
    for (let Dt = rt.a; Dt < vt.b; ) {
      const re = new Date(Dt);
      re.setHours(24, 0, 0, 0);
      const Ut = Math.min(re.getTime(), vt.b);
      pt.push({ a: Dt, b: Ut, label: Mt(c, { datetime: new Date(Dt).toISOString() }), page: at.find((ka) => ka.a >= Dt && ka.a < Ut) || at.find((ka) => ka.a < Ut && ka.b > Dt) }), Dt = Ut;
    }
    const Ot = W > rt.a && W < vt.b ? Math.floor((W - rt.a) / (2 * se)) * 2 : 0, qt = [];
    for (let Dt = rt.a; Dt <= vt.b; Dt += se) {
      const re = new Date(Dt), Ut = Rt(Dt);
      !Ut && re.getHours() % X0 || !Ut && (Math.abs(rt.a - Dt) < 2 * se || Math.abs(vt.b - Dt) < 2 * se) || W >= rt.a && Math.abs(Dt - W) < 1.5 * se && !Ut || qt.push({ t: Dt, edge: Ut, label: Je(re, c), entry: Dt >= W - se ? R.find((ka) => new Date(ka.datetime).getTime() === Dt) : void 0 });
    }
    W > rt.a && W < rt.b && qt.push({ t: W, edge: W - rt.a < se ? " wbFirst" : rt.b - W < se ? " wbLast" : "", label: yt.now, entry: Z[0], now: !0 });
    const ve = (Dt, re) => '<span class="wbMark' + Dt.edge + (Dt.now ? " wbNowMark" : "") + '" style="left:' + Et(Dt.t) + '">' + re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (J.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + J.map((Dt) => '<button aria-pressed="' + (Dt === U) + '" data-wb="hourly-mode" data-mode="' + Dt + '" data-wb-focus="hourly-mode-' + Dt + '">' + St(yt.modes[Dt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + St(yt.nextHours) + '" data-span="' + Bt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Bt + ");width:calc(var(--wb-u) * " + (vt.b - rt.a) / se + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((vt.b - rt.a) / (2 * se)) + 1)].map((Dt, re) => '<i class="wbSnap" style="left:' + Et(rt.a + re * 2 * se) + '"></i>').join("") + '<div class="wbDays">' + pt.map((Dt, re) => {
      var Ut;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Dt.b - Dt.a) / se).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (re === 0 ? Ot : ((((Ut = Dt.page) == null ? void 0 : Ut.a) ?? Dt.a) - rt.a) / se) + '" data-wb-focus="hours-day-' + re + '">' + St(Dt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + qt.map((Dt) => ve(Dt, St(Dt.label))).join("") + "</div>" + (l === "line" ? '<div class="wbSky wbLineSky">' + Da(c, rt, vt, qt, W, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(At.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (l === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (W > rt.a ? '<i class="wbPast" style="width:' + Et(Math.min(W, vt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(W) + '"></i>' : "") + pt.slice(1).map((Dt) => '<i class="wbMidnight" style="left:' + Et(Dt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + qt.map((Dt) => {
      if (!Dt.entry) return "";
      const [re, Ut] = Ri(c, Dt.entry, U);
      return ve(Dt, '<span class="wbPrimaryV">' + St(re) + '</span><span class="wbSecondary">' + St(Ut) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ni(c) {
    const h = J0, w = h.findIndex(([U]) => U >= c);
    if (w <= 0) return "rgb(" + h[w < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [y, R] = h[w - 1], [W, Z] = h[w], J = (c - y) / (W - y);
    return "rgb(" + R.map((U, at) => Math.round(U + (Z[at] - U) * J)).join(",") + ")";
  }
  function An(c, h, w) {
    var Et;
    const y = ot("daily").filter((At) => me(At.templow) && me(At.temperature)).slice(0, 7);
    if (!y.length) return "";
    const R = Math.min(...y.map((At) => Number(At.templow))), W = Math.max(...y.map((At) => Number(At.temperature))), Z = Math.max(1, W - R), J = (At) => Math.max(0, Math.min(100, (At - R) / Z * 100)).toFixed(2), U = /F/.test(yn(c, ct(c, "daily"), "temperature")), at = (At) => U ? (At - 32) / 1.8 : At, rt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((At) => Ni(at(R + At * Z)) + " " + At * 100 + "%").join(",") + ")", vt = (Et = Ie(c, h, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(ot("hourly").filter((At) => new Date(At.datetime).getTime() > Date.now() - se)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((At, Gt) => {
      const Rt = Mt(c, At), pt = Br(new Date(At.datetime), /* @__PURE__ */ new Date()), Ot = Number(At.templow), qt = Number(At.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + St(aa(yt.rangeRow, { day: Rt, low: Me(c, Ot), high: Me(c, qt) })) + '"><span class="wbRangeDay">' + St(Rt) + "</span>" + Ke(At.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + St(Me(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + rt + ";clip-path:inset(0 " + (100 - J(qt)) + "% 0 " + J(Ot) + '% round 4px)"></i>' + (pt && me(vt) ? '<i class="wbRangeNow" style="left:' + J(Number(vt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + St(Me(c, qt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Wr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], zr = (c, h) => {
    if (h <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (h <= c[w][0]) {
      const [y, R] = c[w - 1], [W, Z] = c[w];
      return j1(R, Z, (h - y) / (W - y));
    }
    return c[c.length - 1][1];
  }, sn = (c, h, w) => {
    if (!h || !w) return Wr[5][1];
    const y = (c.getTime() - w.getTime()) / ze;
    return y >= -90 ? zr(jr, y) : zr(Wr, (c.getTime() - h.getTime()) / ze);
  }, Ws = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function ro(c) {
    const h = Ft, { rise: w, set: y } = Pr(c, h), R = w && y ? Math.round((y.getTime() - w.getTime()) / ze) : 0, W = Math.floor(R / 60), Z = R % 60, J = (ve) => ve ? Je(ve, c) : "–", U = new Date(h);
    U.setDate(U.getDate() + 1);
    const at = Pr(c, U), rt = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / ze) : 0, vt = new Date(h);
    vt.setDate(vt.getDate() - 1);
    const Bt = !!(w && y && h >= w && h <= y), Et = !!(w && h < w), At = Bt ? w : Et ? Pr(c, vt).set : y, Gt = Bt ? y : Et ? w : at.rise, Rt = At && Gt ? Math.min(1, Math.max(0, (h.getTime() - At.getTime()) / (Gt.getTime() - At.getTime()))) : 0, pt = Gt ? Math.max(0, Math.round((Gt.getTime() - h.getTime()) / ze)) : 0, Ot = Gt ? Ws(pt) : "–", qt = Bt ? yt.untilSunset : yt.untilSunrise;
    return ca({
      icon: le.sunny,
      name: yt.sun,
      sub: R ? aa(yt.daylightShort, { hours: W, minutes: Z }) : void 0,
      cls: "wbSunTile",
      callouts: [[yt.callout.riseTomorrow, J(at.rise)], [yt.callout.setTomorrow, J(at.set)], ...rt ? [[yt.callout.dayTomorrow, Math.floor(rt / 60) + "h " + rt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + sn(h, w, y) + '"><svg class="wbSunTrack" data-up="' + (Bt ? 1 : 0) + '" data-f="' + Rt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + St(Ot) + '</span><span class="wbSunWord">' + St(qt) + '</span></div><span class="wbSunAt wbSunRise">' + St(J(w)) + '</span><span class="wbSunAt wbSunSet">' + St(J(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      _s(Va(Ot, ""))
    });
  }
  const Te = 22;
  function nr(c) {
    const h = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Te, R = y / 2, W = h + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (h < y * 3 || w < y * 3 || c.dataset.drawn === W) return;
    c.dataset.drawn = W;
    const Z = "M" + R + " " + (w - y) + "V" + y + "A" + R + " " + R + " 0 0 1 " + y + " " + R + "H" + (h - y) + "A" + R + " " + R + " 0 0 1 " + (h - R) + " " + y + "V" + (w - y), J = "M" + (h - R) + " " + (w - y) + "A" + R + " " + R + " 0 0 1 " + (h - y) + " " + (w - R) + "H" + y + "A" + R + " " + R + " 0 0 1 " + R + " " + (w - y), U = 16, at = 6, rt = "M" + U + " 0H" + (h - U) + "A" + U + " " + U + " 0 0 1 " + h + " " + U + "V" + (w - U) + "A" + U + " " + U + " 0 0 1 " + (h - U) + " " + w + "H" + U + "A" + U + " " + U + " 0 0 1 0 " + (w - U) + "V" + U + "A" + U + " " + U + " 0 0 1 " + U + " 0ZM" + (y + at) + " " + y + "A" + at + " " + at + " 0 0 0 " + y + " " + (y + at) + "V" + (w - y - at) + "A" + at + " " + at + " 0 0 0 " + (y + at) + " " + (w - y) + "H" + (h - y - at) + "A" + at + " " + at + " 0 0 0 " + (h - y) + " " + (w - y - at) + "V" + (y + at) + "A" + at + " " + at + " 0 0 0 " + (h - y - at) + " " + y + "Z", vt = c.dataset.up === "1", Bt = Number(c.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + h + " " + w);
    const At = document.createElementNS(Et, "path");
    At.setAttribute("d", vt ? Z : J), c.replaceChildren(At);
    const Gt = At.getTotalLength(), Rt = At.getPointAtLength(Gt * Bt), pt = vt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + A + 'sun-day"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + A + 'sun-done"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (vt ? (pt * Bt).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + rt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + rt + '" mask="url(#' + A + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + rt + '" mask="url(#' + A + 'sun-done)"></path><circle class="wbSunDot' + (vt ? "" : " wbSunNight") + '" cx="' + Rt.x.toFixed(1) + '" cy="' + Rt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const Co = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((h) => nr(h.target))) : null;
  function Gr() {
    Co == null || Co.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      nr(c), Co == null || Co.observe(c);
    });
  }
  function js(c, h, w) {
    const y = (Z) => A + "moon-" + Z, R = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + z1(61, 61, 57.9, c) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", W = (Z, J, U, at, rt, vt) => '<filter id="' + y(Z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + J + '" numOctaves="' + U + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Bt) => "<feFunc" + Bt + ' type="linear" slope="' + rt + '" intercept="' + vt + '"></feFunc' + Bt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + W("mottle", "0.045", 4, 3, 1.8, -0.4) + W("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + U1.map(([Z, J, U, at, rt, vt]) => '<ellipse cx="' + Z + '" cy="' + J + '" rx="' + U + '" ry="' + at + '" fill-opacity="' + vt + '" transform="rotate(' + rt + " " + Z + " " + J + ')"></ellipse>').join("") + "</g>" + Y1.map(([Z, J, U]) => '<circle class="wbCrater" cx="' + Z + '" cy="' + J + '" r="' + U + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + Z1.map(([Z, J]) => '<line x1="54.4" y1="95" x2="' + Z + '" y2="' + J + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + du.map(([Z, J, U]) => '<circle cx="' + Z + '" cy="' + J + '" r="' + U * 2 + '"></circle>').join("") + "</g>" + du.map(([Z, J, U]) => '<circle class="wbBrightCenter" cx="' + Z + '" cy="' + J + '" r="' + U + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Oi(c) {
    const h = Y, w = Or(c), y = (w == null ? void 0 : w.lat) ?? 0, R = vc(h), W = su(c), Z = W ? c.states[W] : void 0, J = tr(Z) && h1.includes(Z.state) ? Z.state : H1(R.phase), { rise: U, set: at } = w ? R1(h, w.lat, w.lon) : {}, rt = R.phase > 0.5 != y < 0, vt = te(Math.round(R.fraction * 100), c.locale) + "%", Bt = U ?? at;
    return Bt && Je(Bt, c), ca({
      icon: le.night,
      name: yt.moon,
      sub: yt.phases[J],
      callouts: [...U ? [[yt.callout.moonrise, Je(U, c)]] : [], ...at ? [[yt.callout.moonset, Je(at, c)]] : [], [yt.callout.lit, vt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + js(R.fraction, rt, y < 0) + "</div>" + _s(Va(te(Math.round(R.fraction * 100), c.locale), "%"))
    });
  }
  function Yt(c, h) {
    var At;
    const w = Ie(c, h, "wind_speed");
    if (!w || !me(w.value)) return "";
    const y = Ie(c, h, "wind_gust_speed"), R = Ie(c, h, "wind_bearing"), W = R && me(R.value) ? Number(R.value) : void 0, Z = F1(Number(w.value), (At = w.stateObj.attributes) == null ? void 0 : At.wind_speed_unit), J = Hs(c, w.stateObj, "wind_speed", w.value), U = W !== void 0 ? yt.cardinal[f1[((W + 11.25) / 22.5 | 0) % 16]] : void 0, at = y ? nu(c, y.stateObj, "wind_gust_speed", y.value) : void 0, rt = [U ? aa(yt.windFrom, { direction: U }) : void 0, Z !== void 0 ? Z + " " + yt.beaufort : void 0].filter(Boolean).join(" · ") || at, vt = (Gt, Rt) => {
      const pt = (Gt - 90) * Math.PI / 180;
      return [100 + Rt * Math.cos(pt), 100 + Rt * Math.sin(pt)];
    }, Bt = Array.from({ length: 36 }, (Gt, Rt) => Rt * 10).map((Gt) => {
      const Rt = Gt % 90 === 0, [pt, Ot] = vt(Gt, 97), [qt, ve] = vt(Gt, Rt ? 83 : 89);
      return '<line class="wbTick' + (Rt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ot + '" x2="' + qt + '" y2="' + ve + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Rt]) => {
      const [pt, Ot] = vt(Rt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ot + '">' + St(yt.cardinal[Gt]) + "</text>";
    }).join("");
    return ca({ icon: le.windy, name: yt.wind, sub: rt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Bt + Et + (W !== void 0 ? '<path class="wbMarker" transform="rotate(' + W + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + St(J.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + St(J.unit) + "</text></svg>" });
  }
  const gt = (c, h) => {
    if (c < 3) return yt.advice.fine;
    if (c < 8) return yt.advice.sunblock;
    const w = Date.now(), y = ot("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > w && R.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? aa(yt.advice.avoidUntil, { time: Je(new Date(y.datetime), h) }) : yt.advice.avoidToday;
  };
  function be(c, h) {
    const w = Ie(c, h, "uv_index");
    if (!w || !me(w.value)) return "";
    const y = Number(w.value), R = yt.uvLevel[ru(y)], W = /* @__PURE__ */ new Date();
    W.setHours(23, 59, 59, 999);
    const Z = ot("hourly").filter((rt) => rt.uv_index != null && new Date(rt.datetime) > /* @__PURE__ */ new Date() && new Date(rt.datetime) <= W).reduce((rt, vt) => !rt || vt.uv_index > rt.uv ? { uv: vt.uv_index, time: new Date(vt.datetime) } : rt, void 0), J = m1[ru(y)], U = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + A + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + U.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + J + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + J + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + J + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + U.toFixed(1) + '" fill="url(#' + A + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + St(te(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + St(R) + "</span></div>" + _s(Va(te(Math.round(y), c.locale), ""));
    return ca({
      icon: le.sunnyAlert,
      name: yt.metrics.uv_index,
      sub: Z && Z.uv > y ? aa(yt.uvPeak, { level: R, uv_index: te(Math.round(Z.uv), c.locale), time: Je(Z.time, c) }) : R,
      zone: at,
      cls: "wbUv",
      callouts: [gt(y, c), [yt.callout.now, te(Math.round(y), c.locale) + " · " + R], [yt.callout.peak, Z && Z.uv > y ? te(Math.round(Z.uv), c.locale) + " at " + Je(Z.time, c) : yt.callout.now]]
    });
  }
  function zt(c) {
    const h = ot("daily")[0], w = S.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !me(h.temperature) || !w || w.dailyHighs.length < n1) return "";
    const y = Number(h.temperature), R = w.dailyHighs.reduce((Rt, pt) => Rt + pt, 0) / w.dailyHighs.length, W = Math.round(y - R) || 0, Z = W > 0 ? "above" : W < 0 ? "below" : "same", J = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], U = J.map((Rt) => Rt.high).concat(R), at = Math.min(...U) - 1, rt = Math.max(...U) + 1, vt = (Rt) => (1 - (Rt - at) / (rt - at)) * 100, Bt = (Rt) => (Rt + 0.5) / J.length * 100, Et = J.map((Rt, pt) => [Bt(pt), vt(Rt.high)]), At = Et.map(([Rt, pt], Ot) => (Ot ? "L" : "M") + Rt.toFixed(2) + " " + pt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + A + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + At + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + A + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + vt(R).toFixed(2) + '" y2="' + vt(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + At + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + vt(R).toFixed(2) + '%">' + St(Me(c, R)) + "</span>" + J.map((Rt, pt) => {
      const Ot = Rt.today ? " wbToday" : "", qt = "left:" + Bt(pt).toFixed(2) + "%;top:" + vt(Rt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + qt + '"></i><span class="wbAvgValue' + Ot + '" style="' + qt + '">' + St(Me(c, Rt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + J.map((Rt, pt) => '<span class="wbAvgDay' + (Rt.today ? " wbToday" : "") + '" style="left:' + Bt(pt).toFixed(2) + '%">' + St(S1(Rt.date, c)) + "</span>").join("") + "</div></div>";
    return ca({
      icon: le.chartLine,
      name: yt.metrics.compared_to_average,
      double: !0,
      sub: aa(yt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (W > 0 ? "+" : "") + St(Me(c, W)) + '</div><div class="wbCompareWords">' + St(yt.average[Z]) + '</div><div class="wbCompareTemps">' + St(aa(yt.todayVsAverage, { today: Me(c, y), average: Me(c, R) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, h) {
    const w = Ie(c, h, "humidity");
    if (!w || !me(w.value)) return "";
    const y = Ie(c, h, "dew_point"), R = Math.max(0, Math.min(100, Number(w.value)));
    return ca({
      icon: le.waterPercent,
      name: yt.metrics.humidity,
      sub: y && me(y.value) ? aa(yt.dewPoint, { dew_point: Me(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Va(te(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function Ga(c, h) {
    var Rt, pt, Ot;
    const w = Ie(c, h, "pressure");
    if (!w || !me(w.value)) return "";
    const y = Number(w.value), R = (Rt = w.stateObj.attributes) == null ? void 0 : Rt.pressure_unit, W = iu(y, R), Z = ((pt = S.pressureHistory) == null ? void 0 : pt.entityId) === w.stateObj.entity_id ? iu(S.pressureHistory.value, R) : void 0;
    let J;
    if (W !== void 0 && Z !== void 0) {
      const qt = W - Z;
      J = qt >= Yp ? "rising" : qt <= -Yp ? "falling" : "steady";
    }
    const U = Hs(c, w.stateObj, "pressure", Math.round(y)), at = w.stateObj, rt = (qt) => R === "inHg" ? Math.round(qt * 100) / 100 : Math.round(qt), vt = (qt) => nu(c, at, "pressure", rt(qt)), Bt = Z !== void 0 ? S.pressureHistory.value : void 0, Et = Bt !== void 0 ? rt(y - Bt) : void 0, At = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((qt) => me(qt.pressure) && new Date(qt.datetime).getTime() >= Date.now() + 3 * se - 30 * ze) : void 0, Gt = [
      ...J ? [yt.advice[J]] : [],
      ...Bt !== void 0 ? [[yt.callout.hoursAgo, vt(Bt)], [yt.callout.change, (Et > 0 ? "+" : Et < 0 ? "−" : "") + vt(Math.abs(Et))]] : [],
      ...At ? [[yt.callout.inHours, vt(Number(At.pressure))]] : []
    ];
    return ca({
      icon: le.gauge,
      name: yt.metrics.pressure,
      sub: J ? yt.pressure[J] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Va(U.number) + '<span class="wbTapeUnit">' + St(U.unit) + "</span></div>" + (W !== void 0 ? Ln(c, W) : "") + "</div>"
    });
  }
  function Ln(c, h) {
    const R = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (W, Z) => R + Z).map((W) => {
      const Z = 100 - (W - h) * 9;
      if (Z < 22 || Z > 178) return "";
      const J = W % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (J ? 2 : 8) + '" x2="26" y1="' + Z + '" y2="' + Z + '"></line>' + (J ? '<text class="wbTapeLabel" x="33" y="' + Z + '">' + St(te(W, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + St(yt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + St(yt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function zs(c) {
    var U, at;
    const h = yc(c), w = h ? c.states[h] : void 0;
    if (!w || ((U = S.rain) == null ? void 0 : U.entityId) !== h || !me(S.rain.change)) return "";
    const y = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", R = ct(c, "hourly"), W = Date.now() + va, Z = ot("hourly").filter((rt) => rt.precipitation != null && new Date(rt.datetime).getTime() <= W), J = Z.reduce((rt, vt) => rt + Number(vt.precipitation), 0);
    return ca({
      icon: le.rainy,
      name: yt.metrics.precipitation,
      sub: R && Z.length ? aa(yt.rainExpected, { amount: te(J, c.locale, { maximumFractionDigits: 1 }) + " " + yn(c, R, "precipitation") }) : yt.rainLast24h,
      visual: Va(te(S.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (Z.length > 1 ? $1(Z.map((rt) => ({ label: "", value: Number(rt.precipitation) }))) : "")
    });
  }
  function $r(c, h) {
    const w = Ie(c, h, "visibility");
    if (!w || !me(w.value)) return "";
    const y = Hs(c, w.stateObj, "visibility", w.value), R = O0(Number(w.value), yn(c, w.stateObj, "visibility"));
    return ca({
      icon: le.eyeOutline,
      name: yt.metrics.visibility,
      sub: yt.visibilityLevel[I0(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + St(Ii(c, R)) + '</div><div class="wbSeaValue">' + Va(y.number, y.unit) + "</div></div>"
    });
  }
  function Ii(c, h) {
    var W;
    const w = N0((W = c.config) == null ? void 0 : W.country, h);
    if (w) return aa(yt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = h / s1 * 60;
    if (y < 60) {
      const Z = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (Z < 60) return aa(yt.walkMinutes, { minutes: te(Z, c.locale) });
    }
    const R = Math.max(1, Math.round(y / 30) / 2);
    return R < 8 ? aa(yt.walkHours, { hours: te(R, c.locale) }) : yt.walkDay;
  }
  function Gs(c) {
    S.categories === void 0 && Sn(c);
    const h = ge(c), w = (U) => U.map((at) => c.states[at]).filter(tr), y = w(h.air), R = w(h.pollen);
    if (!y.length && !R.length) return "";
    const W = [...y, ...R], Z = (U) => R.includes(U) ? le.flower : le.airFilter, J = W.find((U) => U.entity_id === dt.aq);
    return J ? $s(c, J, Z(J)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + St(yt.airQuality) + '</h2></div><div class="wbAqTiles">' + W.map((U) => '<button class="wbTile" data-wb="aq-open" data-entity="' + St(U.entity_id) + '"><span class="wbChip">' + en(Z(U)) + '</span><span class="wbText"><span class="wbName">' + St(wn(c, U)) + '</span><span class="wbSub">' + St(Jo(c, U)) + "</span></span></button>").join("") + "</div></div>";
  }
  function $s(c, h, w) {
    var rt, vt, Bt;
    const y = ((rt = h.attributes) == null ? void 0 : rt.unit_of_measurement) ?? "", R = ((vt = h.attributes) == null ? void 0 : vt.device_class) === "pm25" && y === Jp && me(h.state), W = Number(h.state), Z = R ? Ss(W) : void 0, J = ((Bt = S.aqHistory) == null ? void 0 : Bt.entityId) === h.entity_id ? S.aqHistory.points : void 0, U = (Et) => Math.min(100, Math.max(0, Et / Ms * 100));
    let at;
    if (J && J.length > 1) at = cu(J, (Et) => (te(Et, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (Z) {
      let Et = 0;
      const At = ff.map(([Gt, Rt]) => {
        const pt = U(Math.min(Rt, Ms)), Ot = Xp[Gt] + " " + Et + "% " + pt + "%";
        return Et = pt, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + St(yt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ms + '" aria-valuenow="' + W + '" style="background:linear-gradient(to right, ' + At.join(", ") + ')"><i style="left:' + U(W) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ms + " " + Jp + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + St(Jo(c, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + en(w) + '</span><span class="wbText"><span class="wbName">' + St(wn(c, h)) + '</span><span class="wbSub">' + St(Jo(c, h)) + (Z ? " · " + St(yt.aqLevel[Z]) : "") + '</span></span><button class="wbBack" title="' + St(yt.back) + '" data-wb="aq-close">' + en(le.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const Ao = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Fi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function Lo(c) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Fs.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && tr(w) && Ir(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      h.has(w.attributes.device_class) || h.set(w.attributes.device_class, w);
    }), Fs.map((w) => h.get(w)).filter(Boolean);
  }
  const To = (c) => Object.values(c.states || {}).filter((h) => {
    var w, y;
    return h.entity_id.startsWith("sensor.") && tr(h) && Ir(c, h.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[h.entity_id]) == null ? void 0 : y.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), rr = ["none", "very_low", "low", "moderate", "high", "very_high"], $a = (c) => me(c.state) ? Number(c.state) : rr.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), ir = (c) => {
    const h = String(c).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, qi = (c, h, w) => {
    const y = w ? c === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : c === "pm25" ? Ss(h) : null : null;
    return y === "good" || y === "fair" ? yt.advice.window : y === "moderate" || y === null ? yt.advice.fine : yt.advice.closed;
  }, Us = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], io = (c) => Us[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], sr = "M43 43q1 8 0 10M77 42q1 8 -1 10", Do = {
    good: [sr, "M34 69Q61 98 86 67"],
    fair: [sr, "M40 74Q61 89 81 72"],
    moderate: [sr, "M41 79Q60 76 80 81"],
    poor: [sr, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Eo = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Do[c][0] + '"></path><path d="' + Do[c][1] + '"></path></svg>';
  function Tn(c) {
    const h = Lo(c), w = h[0];
    if (!w) return ca({ icon: le.airFilter, name: yt.airQuality, sub: yt.noAir, visual: Va("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, R = Number(w.state), W = me(w.state), Z = y === "aqi" && W ? Fi(R) : y === "pm25" && W ? Ao[Ss(R)] : Jo(c, w), J = W ? te(Math.round(R), c.locale) : String(w.state), U = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = W && y === "aqi" ? io(R) : W && y === "pm25" ? Ss(R) : null;
    return ca(at ? {
      icon: le.airFilter,
      name: yt.airQuality,
      sub: Z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Xp[at] + '">' + Eo(at) + '<div class="wbAqBig"><span class="wbAqNum">' + St(J) + "</span>" + (U ? '<span class="wbAqUnit">' + St(U) + "</span>" : "") + "</div></div>" + _s(Va(J, U)),
      callouts: [qi(y, R, W), ...h.slice(1, 3).map((rt) => [wn(c, rt), Jo(c, rt)])]
    } : {
      icon: le.airFilter,
      name: yt.airQuality,
      sub: Z,
      cls: "wbBase",
      zone: Va(J, U),
      callouts: [qi(y, R, W), ...h.slice(1, 3).map((rt) => [wn(c, rt), Jo(c, rt)])]
    });
  }
  const so = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ys = (c) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (w, y) => {
      const [R, W] = so[y % 3], Z = 10 + y * 7 % 9, J = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Z + "s;animation-delay:-" + (y * 2.3 % Z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + J.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % J).toFixed(1) + 's">' + W + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ua(c) {
    const h = To(c).sort((R, W) => $a(W) - $a(R));
    if (!h.length) return ca({ icon: le.flower, name: yt.pollen, sub: yt.noPollen, visual: Va("–", ""), cls: "wbBase" });
    const w = h[0], y = (R) => me(R.state) ? Jo(c, R) : ir(R.state);
    return ca({
      icon: le.flower,
      name: yt.pollen,
      sub: wn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: Ys($a(w)) + Va(y(w), ""),
      callouts: h.slice(0, 3).map((R) => [wn(c, R), y(R)])
    });
  }
  function Dn(c) {
    var J;
    const h = Date.now(), w = ot("hourly").filter((U) => {
      const at = new Date(U.datetime).getTime();
      return at > h - se && at < h + 12 * se;
    }), y = w.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), R = y ? aa(yt.rainFrom, { time: Je(new Date(Math.max(h, new Date(y.datetime).getTime())), c) }) : w.length ? yt.noRain12 : void 0, W = (T == null ? void 0 : T()) || "rainviewer";
    let Z;
    if (W.startsWith("camera:")) {
      const U = c.states[W.slice(7)], at = U && U.state !== "unavailable" && ((J = U.attributes) == null ? void 0 : J.entity_picture);
      Z = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + St(at) + '" data-src="' + St(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + St(yt.cameraOff) + "</span></div>";
    } else {
      const U = Or(c);
      Z = U ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + U.lat + '" data-lon="' + U.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + St(yt.noLocation) + "</span></div>";
    }
    return ca({ icon: le.radar, name: yt.rainRadar, sub: R, cls: "wbBase wbRadarTile", visual: Z });
  }
  const Ur = {
    current: qr,
    hourly: Le,
    sun: ro,
    moon: Oi,
    wind: Yt,
    uv_index: be,
    compared_to_average: zt,
    humidity: Fe,
    pressure: Ga,
    precipitation: zs,
    visibility: $r,
    air_quality: Gs,
    aq_tile: Tn,
    pollen_tile: Ua,
    radar_tile: Dn
  }, Oe = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Bo = (c, h) => {
    var w;
    return h.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Yr = (c) => {
    const h = new Date(c);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, lr = () => {
    const c = dt.range, h = Date.now();
    if (c.preset !== "custom") {
      const R = Oe.find(([W]) => W === c.preset)[2];
      return [h - R * va, h];
    }
    const w = xn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(h, xn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + va);
    return [Math.min(w, y - se), y];
  }, Zs = (c) => {
    const h = dt.range;
    if (h.preset !== "custom") return Oe.find(([R]) => R === h.preset)[1];
    const [w, y] = lr();
    return h.from === h.to ? Bo(c, new Date(w)) : Bo(c, new Date(w)) + " – " + Bo(c, new Date(y - 1));
  }, Zr = () => dt.range.preset === "custom" ? dt.range.from + "_" + dt.range.to : dt.range.preset, Kr = (c, h) => h - c <= 2 * va, lo = (c, h, w, y) => Kr(w, y) ? Je(h, c) : Bo(c, h), cr = (c, h = 60) => {
    const w = Math.max(1, Math.ceil(c.length / h));
    return c.filter((y, R) => R % w === 0 || R === c.length - 1);
  }, Xr = (c, h, w, y, R = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(y).toISOString(),
    entity_ids: [h],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  }), ln = (c) => async (h, w, y, R) => {
    const W = Ie(h, w, c);
    if (!W) return [];
    const Z = W.stateObj.entity_id, J = await Xr(h, Z, y, R);
    return cr(((J == null ? void 0 : J[Z]) ?? []).map((U) => {
      var vt;
      const at = ((vt = U.a) == null ? void 0 : vt[c]) ?? (me(U.s) ? Number(U.s) : void 0), rt = (U.lu ?? U.lc) * 1e3;
      return typeof at == "number" && rt >= y && rt <= R ? { t: new Date(rt), value: at } : null;
    }).filter(Boolean)).map((U) => ({ label: lo(h, U.t, y, R), value: U.value }));
  }, Vi = (c, h) => async (w, y, R, W) => {
    const Z = c(w);
    if (!Z) return [];
    const J = Z.entity_id, U = await Xr(w, J, R, W, !0);
    return cr(((U == null ? void 0 : U[J]) ?? []).map((at) => {
      const rt = h(at.s), vt = at.lu * 1e3;
      return rt == null || !Number.isFinite(rt) || vt < R || vt > W ? null : { t: new Date(vt), value: rt };
    }).filter(Boolean)).map((at) => ({ label: lo(w, at.t, R, W), value: at.value }));
  }, Wi = (c, h) => async (w, y, R, W) => {
    const Z = Or(w);
    if (!Z) return [];
    const J = [];
    if (Kr(R, W)) for (let U = R; U <= W; U += se / 2) J.push({ label: Je(new Date(U), w), value: c(new Date(U), Z) });
    else for (let U = W; U >= R; U -= va) {
      const at = new Date(U), rt = h(at, Z, w);
      rt != null && J.unshift({ label: Bo(w, at), value: rt });
    }
    return cr(J);
  }, Po = (c) => To(c).sort((h, w) => $a(w) - $a(h))[0], Ro = (c, h, w) => {
    const y = Ie(c, h, w);
    return y ? yn(c, y.stateObj, w) : "";
  }, dr = {
    current: { name: () => yt.modes.temperature, icon: () => le.sunny, load: ln("temperature"), fmt: (c, h, w) => Me(c, w), now: (c, h) => {
      var w;
      return Me(c, (w = Ie(c, h, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => yt.sun,
      icon: () => le.sunny,
      load: Wi((c, h) => Math.round(Vs(c, h.lat, h.lon) / ua), (c, h, w) => {
        const y = Pr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / se * 10) / 10 : null;
      }),
      fmt: (c, h, w, y) => y ? te(w, c.locale) + "°" : te(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => yt.moon,
      icon: () => le.night,
      load: Wi((c) => Math.round(vc(c).fraction * 100), (c) => Math.round(vc(c).fraction * 100)),
      fmt: (c, h, w) => te(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => yt.metrics.uv_index, icon: () => le.sunnyAlert, load: ln("uv_index"), fmt: (c, h, w) => te(Math.round(w * 10) / 10, c.locale), now: (c, h) => {
      const w = Ie(c, h, "uv_index");
      return w ? te(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => yt.metrics.humidity, icon: () => le.waterPercent, load: ln("humidity"), fmt: (c, h, w) => te(Math.round(w), c.locale) + "%", now: (c, h) => {
      const w = Ie(c, h, "humidity");
      return w ? te(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => yt.metrics.pressure, icon: () => le.gauge, load: ln("pressure"), fmt: (c, h, w) => te(Math.round(w), c.locale) + " " + Ro(c, h, "pressure"), now: (c, h) => {
      const w = Ie(c, h, "pressure");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, h, "pressure") : "";
    } },
    wind: { name: () => yt.wind, icon: () => le.windy, load: ln("wind_speed"), fmt: (c, h, w) => te(Math.round(w), c.locale) + " " + Ro(c, h, "wind_speed"), now: (c, h) => {
      const w = Ie(c, h, "wind_speed");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, h, "wind_speed") : "";
    } },
    visibility: { name: () => yt.metrics.visibility, icon: () => le.eyeOutline, load: ln("visibility"), fmt: (c, h, w) => te(Math.round(w * 10) / 10, c.locale) + " " + Ro(c, h, "visibility"), now: (c, h) => {
      const w = Ie(c, h, "visibility");
      return w ? te(Number(w.value), c.locale) + " " + Ro(c, h, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => Lo(c)[0] ? wn(c, Lo(c)[0]) : yt.airQuality,
      icon: () => le.airFilter,
      load: Vi((c) => Lo(c)[0], (c) => me(c) ? Number(c) : null),
      fmt: (c, h, w) => {
        var W, Z;
        const y = Lo(c)[0], R = (W = y == null ? void 0 : y.attributes) == null ? void 0 : W.device_class;
        return te(Math.round(w * 10) / 10, c.locale) + (R === "aqi" ? " AQI" : (Z = y == null ? void 0 : y.attributes) != null && Z.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const h = Lo(c)[0];
        return h ? Jo(c, h) : "";
      }
    },
    pollen_tile: {
      name: (c) => Po(c) ? wn(c, Po(c)) : yt.pollen,
      icon: () => le.flower,
      load: Vi(Po, (c) => {
        const h = $a({ state: c });
        return h < 0 ? null : h;
      }),
      fmt: (c, h, w) => ir(rr[Math.round(w)] || ""),
      now: (c) => {
        const h = Po(c);
        return h ? ir(h.state) : "";
      }
    }
  }, Ho = {};
  let we = null;
  async function Ea(c) {
    const h = n == null ? void 0 : n();
    if (!h || !dr[c]) return;
    const w = c + "|" + Zr(), [y, R] = lr();
    if (Ho[w] && Date.now() - Ho[w].at < 5 * ze) return;
    Ho[w] = { at: Date.now(), points: null };
    try {
      Ho[w].points = await dr[c].load(h, Vt(h), y, R);
    } catch {
      Ho[w].points = [];
    }
    qe(!0), we === c && dt.graph === c && (we = null, zp(O.querySelector(".wbGraphCard")));
    const W = dt.graph === c && O.querySelector(".wbGraph .wbChart");
    W && df(W, W.querySelector(".wbLine"), W.querySelectorAll(".wbArea"));
  }
  function Nt(c, h) {
    const w = dt.range, y = Yr(Date.now()), [R, W] = lr(), Z = w.pickFrom || Yr(R), J = w.pickTo || Yr(W - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oe.map(([U, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === U) + '" data-wb="graph-preset" data-range="' + U + '" data-wb-focus="graph-preset-' + U + '">' + St(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Z + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + J + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function pr(c, h, w) {
    var vt;
    const y = dr[w], [R, W] = lr(), Z = Kr(R, W), J = (vt = Ho[w + "|" + Zr()]) == null ? void 0 : vt.points, U = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), rt = J ? J.length > 1 ? cu(J, (Bt) => y.fmt(c, h, Bt, Z), 220, U) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + St(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + hf(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + St(y.name(c)) + '</span><span class="wbSub">' + St(y.sub ? y.sub(Z) : y.now ? y.now(c, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + en(le.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!dt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + en(le.calendar) + "<span>" + St(Zs(c)) + "</span>" + en(le.chevronDown) + '</button><div class="wbGraph">' + rt + "</div></div>" + (dt.picking ? Nt() : "") + "</div>";
  }
  function qe(c) {
    var Bt, Et, At, Gt, Rt;
    const h = n == null ? void 0 : n();
    if (!h || et) return;
    const w = Vt(h);
    Tt(h, w), S.lastFetch || So();
    const y = ge(h), R = su(h), W = yc(h), Z = [
      ...w.map((pt) => h.states[pt]),
      h.states["sun.sun"],
      R && h.states[R],
      W && h.states[W],
      ...y.air.map((pt) => h.states[pt]),
      ...y.pollen.map((pt) => h.states[pt]),
      ...K.some((pt) => M.includes(pt)) ? [...Lo(h), ...To(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / ze)
    ];
    if (!c && it && Z.length === it.length && Z.every((pt, Ot) => pt === it[Ot])) return;
    it = Z;
    const J = _.getRootNode(), U = J.activeElement || document.activeElement;
    for (const pt of K) {
      const Ot = N[pt];
      let qt = "";
      try {
        qt = Ur[pt](h, w) || "";
      } catch {
        qt = "";
      }
      if (qt === Ot.html) continue;
      const ve = U && Ot.el.contains(U) ? (Bt = U.dataset) == null ? void 0 : Bt.wbFocus : void 0, Dt = Ot.el.querySelector(".wbStripScroll"), re = Dt ? Dt.scrollLeft : null;
      Ot.html = qt, Ot.el.hidden = !qt, Ot.el.innerHTML = qt;
      const Ut = Ot.el.querySelector(".wbStripScroll");
      Ut && re != null ? Ut.scrollTo({ left: re }) : Ut != null && Ut.dataset.start && Ut.scrollTo({ left: Number(Ut.dataset.start) * Ut.clientWidth / Number(Ut.dataset.span) }), ve && !G && ((Et = Ot.el.querySelector('[data-wb-focus="' + ve + '"]')) == null || Et.focus());
    }
    let at = "";
    if (dt.graph)
      try {
        at = pr(h, w, dt.graph) || "";
      } catch {
        at = "";
      }
    if (at !== ft) {
      const pt = U && O.contains(U) ? (At = U.dataset) == null ? void 0 : At.wbFocus : void 0;
      ft = at, O.innerHTML = at, O.hidden = !at, at && !O.isConnected && (_.closest("#app") || _).appendChild(O), pt && !G && ((Gt = O.querySelector('[data-wb-focus="' + pt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    Gr(), _.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || ta(pt);
    }), G && ((Rt = _.querySelector('[data-wb-focus="' + G + '"]') || O.querySelector('[data-wb-focus="' + G + '"]')) == null || Rt.focus({ preventScroll: !0 }), G = null);
    let rt = !1, vt = !1;
    for (const pt of K) {
      const Ot = N[pt], qt = !Ot.el.hidden, ve = tt[pt] === "wide" || z.includes(pt), Dt = K.indexOf(pt) >= K.indexOf("moon"), re = qt && (Dt && ve && !rt || !ve && !vt);
      re && ve && (rt = !0), re && !ve && (vt = !0), Ot.el.toggleAttribute("data-break", re);
    }
    Bn(performance.now());
  }
  function cn() {
    I || et || (I = !0, queueMicrotask(() => {
      I = !1, qe(!0);
    }));
  }
  function dn() {
    const c = getComputedStyle(_), h = (Z) => c.getPropertyValue(Z).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Z, J]) => {
      h(J) && (w[Z] = h(J));
    });
    const y = h("--color-text-primary") || "#f1f1f1", R = h("--color-bg-card") || "#222222", W = !!_.closest(".light");
    return { colors: { ...za, ...w }, ink: W ? y : R, paper: W ? R : y };
  }
  const Jr = (c, h) => {
    var w;
    c.width !== h.w && (c.width = h.w), c.height !== h.h && (c.height = h.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, En = () => f && !x1();
  function ji(c, h) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((w) => ur(w, nt[w.dataset.wbStrip], c, h));
  }
  function ur(c, h, w, y) {
    if (!h || !c.getClientRects().length) return;
    const R = c.clientWidth, W = c.clientHeight;
    if (!R || !W) return;
    const Z = { width: R, height: W, columns: h.columns || Gp, colors: y.colors, clock: w, ambient: En(), seed: h.seed, soft: 1.5 };
    if (l === "smooth") {
      const J = Math.min(2, window.devicePixelRatio || 1), U = Math.round(R * J), at = Math.round(W * J);
      c.width !== U && (c.width = U), c.height !== at && (c.height = at);
      const rt = c.getContext("2d");
      if (!rt) return;
      rt.setTransform(J, 0, 0, J, 0, 0), w0(rt, h.segs, Z);
    } else Jr(c, b0(h.segs, { ...Z, px: 2, oneBit: l === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Bn(c) {
    if (et) return;
    const h = dn();
    if (l !== "smooth") {
      const w = En();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Jr(y, e0(Zm(y.dataset.wbWx, h.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: l === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: c, idle: w }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, R = w.clientHeight, W = Number(w.dataset.wbSea), Z = y + "x" + R + ":" + W + ":" + h.colors.skyClearDay;
      !y || !R || !(W > 0) || w.dataset.painted === Z || (w.dataset.painted = Z, Jr(w, P0(y, R, W, h.colors)));
    }), ji(c, h);
  }
  function co(c) {
    if (ut = 0, !(et || !En())) {
      if (!document.hidden)
        if (l === "smooth") ji(c, dn());
        else {
          const h = Math.floor(c / 100);
          h !== Q && (Q = h, Bn(c));
        }
      ut = requestAnimationFrame(co);
    }
  }
  function fr() {
    _.classList.toggle("wbMotion", En()), !ut && !et && En() && (ut = requestAnimationFrame(co));
  }
  function Pn(c) {
    var w, y, R, W, Z, J, U;
    if (c.target === O) {
      dt.graph = void 0, dt.picking = !1, qe(!0);
      return;
    }
    const h = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!h || !(_.contains(h) || O.contains(h))) {
      const at = (W = (R = c.target).closest) == null ? void 0 : W.call(R, ".wbItem"), rt = at == null ? void 0 : at.dataset.card;
      if (!at || !_.contains(at) || !dr[rt] || dt.graph === rt || _.closest(".tfEditing") || rt === "current" && g) return;
      dt.graph = rt, dt.picking = !1, G = "graph-close", qe(!0), (Z = Ho[rt + "|" + Zr()]) != null && Z.points ? zp(O.querySelector(".wbGraphCard")) : we = rt, Ea(rt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        dt.openDay = Number(h.dataset.index), dt.opener = h.dataset.wbFocus, G = "back-day";
        const at = Fr()[dt.openDay], rt = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > K0;
        at && Br(new Date(at.datetime), /* @__PURE__ */ new Date()) && rt && La();
        break;
      }
      case "close-day":
        dt.openDay = void 0, G = dt.opener, dt.opener = void 0;
        break;
      case "open-page":
        g == null || g();
        return;
      case "day-mode":
        dt.dayMode = h.dataset.mode;
        break;
      case "hourly-mode":
        dt.hourlyMode = h.dataset.mode;
        break;
      case "hourly-view":
        dt.hourlyView = h.dataset.view;
        try {
          localStorage.setItem(kt, dt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = _.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(h.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        dt.aq = h.dataset.entity, rn(dt.aq);
        break;
      case "aq-close":
        dt.aq = void 0;
        break;
      case "graph-close":
        dt.graph = void 0, dt.picking = !1;
        break;
      case "graph-pick":
        dt.picking = !dt.picking, G = dt.picking ? "graph-preset-" + (dt.range.preset === "custom" ? "day" : dt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        dt.range = { preset: h.dataset.range }, dt.picking = !1, G = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      case "graph-apply": {
        let at = dt.range.pickFrom || ((J = _.querySelector("[data-range-from]")) == null ? void 0 : J.value), rt = dt.range.pickTo || ((U = _.querySelector("[data-range-to]")) == null ? void 0 : U.value);
        if (!at || !rt) return;
        at > rt && ([at, rt] = [rt, at]), dt.range = { preset: "custom", from: at, to: rt }, dt.picking = !1, G = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ha(c) {
    var h, w, y, R, W, Z;
    c.key === "Escape" && dt.openDay !== void 0 && ((w = (h = c.target).closest) != null && w.call(h, '[data-wb-open="day"]')) ? (dt.openDay = void 0, G = dt.opener, dt.opener = void 0, qe(!0)) : c.key === "Escape" && dt.picking && ((R = (y = c.target).closest) != null && R.call(y, ".wbGraphCard")) ? (dt.picking = !1, G = "graph-pick", qe(!0)) : c.key === "Escape" && dt.graph && ((Z = (W = c.target).closest) != null && Z.call(W, ".wbGraphCard")) && (dt.graph = void 0, qe(!0));
  }
  let Ge = null;
  function Qr(c) {
    var w, y;
    const h = (y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbStripScroll");
    !h || c.button !== 0 || (Ge = { startX: c.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", ti), window.addEventListener("mouseup", ei, { once: !0 }));
  }
  function ti(c) {
    const h = _.querySelector(".wbStripScroll");
    if (!Ge || !h) return;
    const w = c.pageX - Ge.startX;
    !Ge.moved && Math.abs(w) > 1 && (Ge.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = Ge.left - w;
  }
  function ei() {
    Ge = null, window.removeEventListener("mousemove", ti);
    const c = _.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const h = [...c.querySelectorAll(".wbSnap")];
    if (h.length) {
      const w = h.reduce((y, R) => Math.abs(R.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? R : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const hr = (c) => {
    var w, y;
    const h = c.target;
    (w = h.matches) != null && w.call(h, "[data-range-from]") ? dt.range.pickFrom = h.value : (y = h.matches) != null && y.call(h, "[data-range-to]") && (dt.range.pickTo = h.value);
  };
  _.addEventListener("change", hr), _.addEventListener("click", Pn), _.addEventListener("keydown", ha), O.addEventListener("change", hr), O.addEventListener("click", Pn), O.addEventListener("keydown", ha), _.addEventListener("mousedown", Qr);
  const zi = 64, Ks = 30;
  let xa = null, Ya = 0;
  const pn = () => {
    Ya = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let h = 0, w = 0;
      if (xa) {
        const y = c.parentElement.getBoundingClientRect(), R = y.left + y.width / 2 - xa.x, W = y.top + y.height / 2 - xa.y, Z = Math.hypot(R, W) || 1;
        if (Z < zi) {
          const J = (1 - Z / zi) * Ks;
          h = R / Z * J, w = W / Z * J;
        }
      }
      c.style.transform = h || w ? "translate(" + h.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), xa && (Ya = requestAnimationFrame(pn));
  }, Za = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || $e != null && $e.matches) {
      xa && (xa = null, Ya || (Ya = requestAnimationFrame(pn)));
      return;
    }
    xa = { x: c.clientX, y: c.clientY }, Ya || (Ya = requestAnimationFrame(pn));
  }, Gi = () => {
    xa = null, Ya || (Ya = requestAnimationFrame(pn));
  };
  _.addEventListener("pointermove", Za), _.addEventListener("pointerleave", Gi);
  const Ka = typeof ResizeObserver == "function" ? new ResizeObserver(() => Bn(performance.now())) : null;
  Ka == null || Ka.observe(_);
  const un = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((h) => {
    const w = h.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && ta(w);
  })) : null;
  function ta(c) {
    var Z;
    const h = c.clientWidth, w = c.clientHeight;
    if (!h || !w || et) return;
    const y = p1(Number(c.dataset.lat), Number(c.dataset.lon), h, w), R = !!((Z = _.closest("#app")) != null && Z.classList.contains("light")), W = (J) => ' style="left:' + J.left + "px;top:" + J.top + 'px"';
    c._tiles = y, c._w = h, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((J) => '<img src="https://' + "abcd"[(J.x + J.y) % 4] + ".basemaps.cartocdn.com/" + (R ? "light_all" : "dark_all") + "/" + qc + "/" + J.x + "/" + J.y + '.png"' + W(J) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', un == null || un.observe(c), d1().then((J) => {
      !c.isConnected || et || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = J.frames.map((U, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + y.map((rt) => '<img src="' + J.host + U.path + "/" + Qo + "/" + qc + "/" + rt.x + "/" + rt.y + '/2/1_1.png"' + W(rt) + ' alt="">').join("") + "</div>").join(""), c._frames = J.frames, c._hold = 0, Rn(c, J.frames.findLastIndex((U) => U.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = yt.radarOff);
    });
  }
  function Rn(c, h) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = h, c.querySelectorAll(".wbRadarRain").forEach((R) => {
      R.hidden = Number(R.dataset.i) !== h;
    });
    const y = w[h];
    c.querySelector(".wbRadarTime").textContent = Je(new Date(y.time * 1e3), n == null ? void 0 : n()) + (y.past ? "" : " · " + yt.forecastTag);
  }
  function ai() {
    _.querySelectorAll(".wbRadarMap").forEach((c) => {
      if (!c._frames) return;
      if (Date.now() - c._built > uf) {
        ta(c);
        return;
      }
      if ($e != null && $e.matches) return;
      if (c._hold > 0) {
        c._hold -= Zp;
        return;
      }
      const h = c._frames.length - 1, w = c._frames.findLastIndex((R) => R.past), y = c._i >= h ? 0 : c._i + 1;
      Rn(c, y), (y === w || y === h) && (c._hold = c1);
    });
  }
  const mr = () => _.querySelectorAll(".wbRadarImg").forEach((c) => {
    const h = c.dataset.src;
    c.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), fn = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && ta(c);
  })) : null, oi = _.closest("#app");
  oi && (fn == null || fn.observe(oi, { attributes: !0, attributeFilter: ["class"] }));
  const $e = (Ui = window.matchMedia) == null ? void 0 : Ui.call(window, "(prefers-reduced-motion: reduce)"), $i = () => {
    fr(), Bn(performance.now());
  };
  (Hn = $e == null ? void 0 : $e.addEventListener) == null || Hn.call($e, "change", $i);
  const ni = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), qe(!0);
    }, r1),
    setInterval(() => {
      Y = /* @__PURE__ */ new Date(), qe(!0);
    }, i1),
    setInterval(So, a1),
    setInterval(ai, Zp),
    setInterval(mr, ze)
  ];
  return qe(!0), fr(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(c) {
      !c || c === l || (l = c, _.dataset.style = l, O.dataset.style = l, qe(!0), fr());
    },
    destroy() {
      var c;
      cancelAnimationFrame(Ya), _.removeEventListener("pointermove", Za), _.removeEventListener("pointerleave", Gi), et = !0, ni.forEach(clearInterval), ut && cancelAnimationFrame(ut), ut = 0, Ka == null || Ka.disconnect(), un == null || un.disconnect(), fn == null || fn.disconnect(), (c = $e == null ? void 0 : $e.removeEventListener) == null || c.call($e, "change", $i), ei(), _.removeEventListener("click", Pn), _.removeEventListener("change", hr), _.removeEventListener("keydown", ha), _.removeEventListener("mousedown", Qr), O.removeEventListener("click", Pn), O.removeEventListener("change", hr), O.removeEventListener("keydown", ha), ["daily", "hourly"].forEach(q), _.remove(), O.remove();
    }
  };
}
const Ei = "#E1E1E1", uu = "#F7F4F0", xc = "#03a9f4", oe = 14, ie = 172;
let X1 = 0;
const _e = (o) => Math.round(o * 100) / 100, xo = (o, n, i) => Math.max(n, Math.min(i, o)), nn = (o, n, i, l, f, b) => '<rect x="' + _e(o) + '" y="' + _e(n) + '" width="' + _e(i) + '" height="' + _e(l) + '" fill="' + f + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", kc = (o) => o.map((n, i) => (i ? "L" : "M") + _e(n[0]) + " " + _e(n[1])).join("");
function Mc(o) {
  const n = (o == null ? void 0 : o.attributes) || {};
  return n.device_class === "curtain" ? "curtain" : n.device_class === "blind" || n.current_tilt_position != null ? "venetian" : "blind";
}
const vn = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function J1(o) {
  const n = o < 2 ? o + 24 : o;
  let i = vn[0], l = vn[vn.length - 1];
  for (let v = 0; v < vn.length - 1; v++) if (n >= vn[v][0] && n <= vn[v + 1][0]) {
    i = vn[v], l = vn[v + 1];
    break;
  }
  const f = (n - i[0]) / (l[0] - i[0]), b = f * f * (3 - 2 * f), g = (v, T) => {
    const A = parseInt(v.slice(1), 16), _ = parseInt(T.slice(1), 16);
    return "#" + [16, 8, 0].map((P) => Math.round((A >> P & 255) + ((_ >> P & 255) - (A >> P & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], l[1][0]), bot: g(i[1][1], l[1][1]), warm: g(i[1][2], l[1][2]), cool: g(i[1][3], l[1][3]), op: i[1][4] + (l[1][4] - i[1][4]) * b, t: n };
}
function Q1(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, l = (n >> 8 & 255) / 255, f = (n & 255) / 255, b = Math.max(i, l, f), g = Math.min(i, l, f);
  let v = 0, T = 0;
  const A = (b + g) / 2;
  if (b !== g) {
    const _ = b - g;
    T = A > 0.5 ? _ / (2 - b - g) : _ / (b + g), v = (b === i ? (l - f) / _ + (l < f ? 6 : 0) : b === l ? (f - i) / _ + 2 : (i - l) / _ + 4) / 6;
  }
  return [v * 360, T * 100, A * 100];
}
function Cf(o, n, i) {
  n = xo(n, 0, 100) / 100, i = xo(i, 0, 100) / 100;
  const l = (g) => (g + o / 30) % 12, f = n * Math.min(i, 1 - i), b = (g) => i - f * Math.max(-1, Math.min(l(g) - 3, Math.min(9 - l(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [Af, Lf, Tf] = Q1(Ei), fu = Cf(Af, Lf, Math.max(6, Tf - 14)), tg = Cf(Af, Lf, Math.min(96, Tf + 16));
function eg(o, n, i, l, f) {
  const b = ie / 2, g = ie * 0.12, v = b - (b - g) * o, T = (K) => K ** 1.3, A = xo(i, -1.5, 1.5), _ = (K) => -(Math.abs(A) * 4.6 * K ** 1.5) * Math.sign(A), P = o * 1.4, O = (K, tt) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (tt ? 1 : -1) * Math.sign(i || 1), N = tt ? K + v : K, et = tt ? K : K + v, it = (kt) => N + _(kt) + z * Math.sin(kt * Math.PI * 1.2 + l) * T(kt) * 1.4 + P * Math.sin(kt * Math.PI * 2 + l * 0.6) * T(kt) * (tt ? 1 : -1), ut = [[et, oe]];
    for (let kt = 0; kt <= 12; kt++) ut.push([it(kt / 12), oe + ie * kt / 12]);
    ut.push([et, oe + ie]);
    let Q = '<path d="' + kc(ut) + 'Z" fill="' + Ei + '"/>';
    if (f) return Q;
    const I = 1.35 + ((tt ? i > 0 : i < 0) ? 0.35 : 0), G = (kt) => {
      const Ht = kt / 7, dt = tt ? 1 - Ht : Ht, S = (1 - dt) ** 1.3, Ft = K + v * Ht;
      return Array.from({ length: 13 }, (Y, nt) => {
        const st = nt / 12;
        return [Ft + _(st) * S + z * I * Math.sin(st * Math.PI * 1.2 + l - dt * 3.2) * T(st) * 1.4 * S + P * 1.6 * Math.sin(st * Math.PI * 2 + l * 0.6 - dt * 2.5) * T(st) * o * (0.4 + 0.6 * S), oe + ie * st];
      });
    }, ft = [1, 2, 3, 4, 5, 6].map(G);
    for (let kt = 0; kt < 6; kt += 2) Q += '<path d="' + kc(ft[kt]) + kc(ft[kt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, M = b - (b - g) * n;
  return { body: O(oe, !0) + O(oe + ie - v, !1), rails: [{ x: oe + M - 4, y: oe, w: 4, h: ie }, { x: oe + ie - M, y: oe, w: 4, h: ie }], head: 6.4 };
}
function ag(o, n, i) {
  const l = ie * (1 - o);
  let f = "";
  if (l > 1 && (f += nn(oe, oe, ie, l, Ei), !i))
    for (let b = 1; b < 7; b += 2) f += nn(oe + ie * b / 7, oe, ie / 7, l, "#fff");
  return { body: f, rails: [{ x: oe, y: oe + ie * (1 - n) - 7, w: ie, h: 11 }], head: 10.4 };
}
function og(o, n, i, l) {
  const f = 9 - 7 * (i / 100), b = oe + ie * (1 - o), g = Math.ceil(ie / 10) + 1, v = oe + f / 2, T = (oe + ie - f / 2 - v) / (g - 1), A = 0.8, _ = 0.6, P = Array.from({ length: g }, (K, tt) => Math.max(v + tt * _, Math.min(v + tt * T, b - f / 2 - (g - 1 - tt) * _))), O = P.slice(0, -1).map((K, tt) => xo((P[tt + 1] - K - _) / (T - _), 0, 1));
  O.push(O[g - 2]);
  let M = "";
  return P.forEach((K, tt) => {
    const z = A + (f - A) * O[tt], N = Math.max(0.5, z / 2), et = Math.max(0.4, z * 0.114);
    M += nn(oe, K - N, ie, Math.max(1, z), Ei), !l && z > 2.2 && (M += nn(oe, K + N - et, ie, et, fu) + nn(oe, K - N, ie, et * 0.55, tg, 0.75));
  }), l || [0.22, 0.78].forEach((K) => {
    M += nn(oe + ie * K - 0.7, oe, 1.4, Math.max(0, P[g - 1] + 1 - oe), fu, 0.85);
  }), { body: M, rails: [{ x: oe, y: oe + ie * (1 - n) - 8, w: ie, h: 8 }], head: 8.8 };
}
const hu = (o, n, i, l, f, b, g) => o === "curtain" ? eg(n, i, f, b, g) : o === "venetian" ? og(n, i, l, g) : ag(n, i, g);
function ng(o, n) {
  let i = "", l = "";
  return n.forEach((f) => {
    const b = f.w > f.h, g = xo(b ? oe + ie / 2 : f.x + f.w / 2, 17, 183), v = xo(b ? f.y + f.h / 2 : oe + ie / 2, 17, 183);
    i += b ? nn(oe, xo(f.y + f.h / 2, oe, oe + ie) - 1, ie, 2, xc) : nn(xo(f.x + f.w / 2, oe, oe + ie) - 1, oe, 2, ie, xc);
    const T = b ? "M" + _e(g - 4) + " " + _e(v - 3) + "l4 -3l4 3M" + _e(g - 4) + " " + _e(v + 3) + "l4 3l4 -3" : "M" + _e(g - 3) + " " + _e(v - 4) + "l-3 4l3 4M" + _e(g + 3) + " " + _e(v - 4) + "l3 4l-3 4";
    l += '<circle cx="' + _e(g) + '" cy="' + _e(v) + '" r="11" fill="' + xc + '" filter="url(#' + o + 's)"/><path d="' + T + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: l };
}
function rg(o, n) {
  const i = /* @__PURE__ */ new Date(), l = J1(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(l.t * 0.5), b = l.t >= 5 && l.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (l.t - 5) / 15) : 80, g = hu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? hu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", T = n.grip > 4e-3 ? ng(o, g.rails) : null, A = (_) => nn(oe, oe, ie, ie, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + l.top + '"/><stop offset="1" stop-color="' + l.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + _e(f) + '%" cy="' + _e(b) + '%" r="58%"><stop offset="0" stop-color="' + l.warm + '" stop-opacity="' + _e(l.op * 0.8) + '"/><stop offset="1" stop-color="' + l.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + _e(100 - f * 0.8) + '%" cy="' + _e(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + l.cool + '" stop-opacity="' + _e(l.op * 0.64) + '"/><stop offset="1" stop-color="' + l.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + uu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + A("url(#" + o + "l)") + A("url(#" + o + "w)") + A("url(#" + o + "k)") + (v ? '<g opacity="' + _e(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Ei + '" filter="url(#' + o + 's)"/></g>' + (T ? '<g clip-path="url(#' + o + 'c)" opacity="' + _e(n.grip) + '">' + T.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + uu + '" stroke-width="3"/>' + (T ? '<g opacity="' + _e(n.grip) + '">' + T.knobs + "</g>" : "") + "</svg>";
}
function ig({ onMove: o, onSet: n }) {
  var Q;
  const i = "cv" + ++X1, l = document.createElement("div");
  l.className = "tfCoverArt";
  const f = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, T = !1, A = !1, _ = null, P = 0, O = 0;
  const M = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", K = () => _ || T || A || b.moving || b.target != null ? 1 : f ? performance.now() < O ? 1 : 0.4 : 0, tt = () => {
    l.innerHTML = rg(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function z(I) {
    v = 0;
    const G = g.last ? Math.min(0.064, (I - g.last) / 1e3) : 1 / 60, ft = G * 60;
    g.last = I;
    const kt = b.pos - g.pos, Ht = g.pos;
    g.pos += Math.sign(kt) * Math.min(Math.abs(kt), Math.max(10.5, Math.abs(kt) * 1.4) * G), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Ht) / ft * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Ht || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * ft);
    const dt = b.tilt - g.tilt;
    g.tilt += Math.sign(dt) * Math.min(Math.abs(dt), Math.max(60, Math.abs(dt) * 4) * G);
    const S = K();
    g.grip += (S - g.grip) * Math.min(1, G * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ft = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ft - g.ghost) * Math.min(1, G * (Ft > g.ghost ? 16 : 3)), Math.abs(Ft - g.ghost) < 4e-3 && (g.ghost = Ft), tt(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ft ? v = requestAnimationFrame(z) : g.last = 0;
  }
  const N = () => {
    b && !v && (v = requestAnimationFrame(z));
  }, et = setInterval(() => {
    b && !v && tt();
  }, 60 * 1e3), it = (I) => {
    const G = l.getBoundingClientRect();
    return M() === "x" ? (I.clientX - G.left) / G.width : (I.clientY - G.top) / G.height;
  };
  l.addEventListener("pointerdown", (I) => {
    var kt;
    if (!(b != null && b.canSet) || I.button > 0) return;
    I.preventDefault(), (kt = l.setPointerCapture) == null || kt.call(l, I.pointerId);
    const G = b.target ?? b.pos, ft = l.getBoundingClientRect();
    _ = { p0: it(I), from: G, x0: I.clientX, value: null, side: null }, b.kind === "curtain" && G > 0 && (_.side = (I.clientX - ft.left) / ft.width < 0.5 ? "L" : "R"), N();
  }), l.addEventListener("pointermove", (I) => {
    if (!_) return;
    let G;
    if (b.kind === "curtain") {
      if (!_.side) {
        const kt = I.clientX - _.x0;
        if (Math.abs(kt) < 4) return;
        _.side = kt < 0 ? "L" : "R";
      }
      const ft = (ie / 2 - ie * 0.12) / 200;
      G = _.from + (_.side === "L" ? -1 : 1) * ((it(I) - _.p0) / ft) * 100;
    } else G = _.from - (it(I) - _.p0) / (ie / 200) * 100;
    _.value = xo(G, 0, 100), o(_.value);
  });
  const ut = () => {
    if (!_) return;
    const I = _.value;
    _ = null, I != null && n(Math.round(I)), N();
  };
  return l.addEventListener("pointerup", ut), l.addEventListener("pointercancel", ut), l.addEventListener("lostpointercapture", ut), l.addEventListener("pointerenter", () => {
    T = !0, N();
  }), l.addEventListener("pointerleave", () => {
    T = !1, N();
  }), l.addEventListener("focus", () => {
    A = l.matches(":focus-visible"), N();
  }), l.addEventListener("blur", () => {
    A = !1, N();
  }), l.addEventListener("keydown", (I) => {
    if (!(b != null && b.canSet)) return;
    const G = Math.round(b.target ?? b.pos), ft = I.shiftKey ? 10 : 1, kt = { ArrowUp: G + ft, ArrowRight: G + ft, ArrowDown: G - ft, ArrowLeft: G - ft, PageUp: G + 25, PageDown: G - 25, Home: 0, End: 100 }[I.key];
    if (kt == null) return;
    I.preventDefault();
    const Ht = xo(kt, 0, 100);
    o(Ht), clearTimeout(P), P = setTimeout(() => n(Ht), 500);
  }), {
    el: l,
    update(I) {
      const G = !b;
      b = I, G && (g.pos = b.pos, g.tilt = b.tilt, O = performance.now() + 1500, f && setTimeout(N, 1600)), l.classList.toggle("x", M() === "x"), l.classList.toggle("y", M() === "y"), b.canSet ? (l.tabIndex = 0, l.setAttribute("role", "slider"), l.setAttribute("aria-valuemin", "0"), l.setAttribute("aria-valuemax", "100"), l.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), l.setAttribute("aria-orientation", M() === "x" ? "horizontal" : "vertical")) : l.setAttribute("role", "img"), l.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), l.setAttribute("aria-valuetext", b.text), N();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(et), clearTimeout(P), l.remove();
    }
  };
}
const na = (o) => Math.round(o * 100) / 100, Aa = (o) => o * Math.PI / 180, kn = (o, n, i) => o + (n - o) * i, Sc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function mu(o, n, i, l = 45, f = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(Aa(l)), v = Math.sin(Aa(l)), T = Math.cos(Aa(f)), A = Math.sin(Aa(f)), _ = 0.68, P = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: l,
    V: [v * T, g * T, A],
    L: [_ * g + P * v, -_ * v + P * g],
    k: b,
    cy: g,
    sy: v,
    sp: A,
    cp: T,
    p: ([O, M, K]) => {
      const tt = O * g - M * v, z = O * v + M * g;
      return [n + tt * b, i + (z * A - K * T) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(O, M, K) {
      const tt = (O - n) / b, z = ((M - i) / b + K * T) / A;
      return [tt * g + z * v, -tt * v + z * g];
    }
  };
}
const Mn = (o, n = !0) => "M" + o.map(([i, l]) => `${na(i)} ${na(l)}`).join("L") + (n ? "Z" : "");
function oo(o, n, i, l = 7) {
  const f = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, T] of b)
    for (let A = 0; A <= l; A++) {
      const _ = Aa(T + 90 * A / l);
      f.push([g + i * Math.cos(_), v + i * Math.sin(_)]);
    }
  return f;
}
const Qe = (o, n = 56) => Array.from({ length: n }, (i, l) => [o * Math.cos(2 * Math.PI * l / n), o * Math.sin(2 * Math.PI * l / n)]);
function He(o, n, i, l = !0, f = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([T, A]) => f(T, A, n)), ...o.map(([T, A]) => f(T, A, i))], v = [
    { idx: o.map((T, A) => A), smooth: !1 },
    { idx: o.map((T, A) => b + A), smooth: !1 }
  ];
  for (let T = 0; T < b; T++) {
    const A = (T + 1) % b;
    v.push({ idx: [T, A, b + A, b + T], smooth: l });
  }
  return { verts: g, faces: v };
}
const ko = (o, n) => ({ ...o, verts: o.verts.map(n) }), Ti = (o, n, i) => ([l, f, b]) => [l + o, f + n, b + i], Ns = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [n + (b - n) * l - (g - i) * f, i + (b - n) * f + (g - i) * l, v];
}, Vc = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [b, n + (g - n) * l + (v - i) * f, i - (g - n) * f + (v - i) * l];
}, sg = (o, n) => [o[0] - n[0], o[1] - n[1], o[2] - n[2]], gu = (o, n) => o[0] * n[0] + o[1] * n[1] + o[2] * n[2], bu = (o) => o.reduce((n, i) => [n[0] + i[0] / o.length, n[1] + i[1] / o.length, n[2] + i[2] / o.length], [0, 0, 0]);
function lg(o) {
  const n = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const l = o[i], f = o[(i + 1) % o.length];
    n[0] += (l[1] - f[1]) * (l[2] + f[2]), n[1] += (l[2] - f[2]) * (l[0] + f[0]), n[2] += (l[0] - f[0]) * (l[1] + f[1]);
  }
  return n;
}
function Df(o, n = [1, 1, 1]) {
  const i = bu(o.verts);
  return o.faces.map((l) => {
    const f = l.idx.map((g) => o.verts[g]);
    let b = lg(f);
    return gu(b, sg(bu(f), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), gu(b, n) > 1e-6 * Math.hypot(...b);
  });
}
const Mo = (o, n, i) => Mn(n.faces[i].idx.map((l) => o.p(n.verts[l])));
function Ne(o, n, i = "", l = "") {
  const f = n.verts.map(o.p), b = Df(n, o.V);
  let g = "";
  n.faces.forEach((A, _) => {
    b[_] && (g += Mn(A.idx.map((P) => f[P])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((A, _) => {
    for (let P = 0; P < A.idx.length; P++) {
      const O = A.idx[P], M = A.idx[(P + 1) % A.idx.length], K = O < M ? `${O}-${M}` : `${M}-${O}`;
      v.has(K) || v.set(K, { a: O, b: M, fs: [] }), v.get(K).fs.push(_);
    }
  });
  let T = "";
  for (const { a: A, b: _, fs: P } of v.values()) {
    const [O, M] = P, K = b[O], tt = M === void 0 ? !1 : b[M], z = M !== void 0 && n.faces[O].smooth && n.faces[M].smooth;
    (K !== tt || K && tt && !z) && (T += `M${na(f[A][0])} ${na(f[A][1])}L${na(f[_][0])} ${na(f[_][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${l ? ` class="${l}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${T}"/></g>`;
}
function cg(o) {
  const n = [...o].sort((b, g) => b[0] - g[0] || b[1] - g[1]), i = (b, g, v) => (g[0] - b[0]) * (v[1] - b[1]) - (g[1] - b[1]) * (v[0] - b[0]), l = [], f = [];
  for (const b of n) {
    for (; l.length >= 2 && i(l[l.length - 2], l[l.length - 1], b) <= 0; ) l.pop();
    l.push(b);
  }
  for (const b of n.reverse()) {
    for (; f.length >= 2 && i(f[f.length - 2], f[f.length - 1], b) <= 0; ) f.pop();
    f.push(b);
  }
  return l.slice(0, -1).concat(f.slice(0, -1));
}
let dg = 0;
function ra(o, n, i, l, f = "") {
  const b = n.verts.filter((T) => T[2] >= i - 0.01).map(([T, A, _]) => o.p([T + (_ - i) * o.L[0], A + (_ - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = Mn(cg(b));
  if (!f) return `<path class="shade" fill="url(#${l})" d="${g}"/>`;
  const v = `clip${++dg}`;
  return `<clipPath id="${v}"><path d="${f}"/></clipPath><path class="shade" fill="url(#${l})" clip-path="url(#${v})" d="${g}"/>`;
}
const er = (o, n, i = "edge", l = !0) => `<path class="${i}" d="${Mn(n.map(o.p), l)}"/>`, yo = (o, n, i, l = "edge") => {
  const [f, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${l}" d="M${na(f)} ${na(b)}L${na(g)} ${na(v)}"/>`;
};
function zc(o, n, i, l, { part: f = "", cls: b = "", w: g = 0 } = {}) {
  const [v, T] = o.p(n), A = o.k, _ = `matrix(${na(A * o.cy)} ${na(A * o.sy * o.sp)} ${na(-A * o.sy)} ${na(A * o.cy * o.sp)} ${na(v)} ${na(T)})`, P = g ? `<rect x="${-g / 2}" y="${-l * 0.9}" width="${g}" height="${l * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${_}"${f ? ` data-part="${f}"` : ""}>${P}<text class="st ${b}" font-size="${l}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class pg {
  constructor(n, i = 0.24, l = 0.62) {
    this.x = n, this.t = n, this.v = 0, this.k = i, this.d = l;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const ug = "http://www.w3.org/2000/svg", fg = matchMedia("(prefers-reduced-motion: reduce)");
let hg = 0;
class ar {
  constructor(n, i = {}) {
    Ap(this, "tick", () => {
      let n = !1;
      for (const i of this.springs) n = i.step() || n;
      this.paint(), this.raf = n ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++hg}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const l = Sc[i.camera] || Sc.iso;
    this.yaw = this.spring(l.yaw, 0.12, 0.7), this.pitch = this.spring(l.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const f = this.svg = document.createElementNS(ug, "svg");
    this.box = [400, 400], f.setAttribute("viewBox", "0 0 400 400"), f.setAttribute("class", "iso"), f.tabIndex = 0, n.prepend(f), f.addEventListener("pointerdown", (g) => {
      var T, A, _, P;
      const v = (_ = (A = (T = g.target).closest) == null ? void 0 : A.call(T, "[data-part]")) == null ? void 0 : _.dataset.part;
      if (v) {
        try {
          f.setPointerCapture(g.pointerId);
        } catch {
        }
        this.held = !0, (P = this.down) == null || P.call(this, v, this.pt(g), g), this.kick();
      }
    }), f.addEventListener("pointermove", (g) => {
      var v;
      this.held && ((v = this.drag) == null || v.call(this, this.pt(g)), this.kick());
    });
    const b = (g) => {
      var v;
      if (this.held) {
        this.held = !1;
        try {
          f.releasePointerCapture(g.pointerId);
        } catch {
        }
        (v = this.up) == null || v.call(this), this.kick();
      }
    };
    f.addEventListener("pointerup", b), f.addEventListener("pointercancel", b), f.addEventListener("keydown", (g) => {
      var v;
      (v = this.key) != null && v.call(this, g, !0) && (g.preventDefault(), this.kick());
    }), f.addEventListener("keyup", (g) => {
      var v;
      (v = this.key) != null && v.call(this, g, !1) && (g.preventDefault(), this.kick());
    });
  }
  pt(n) {
    const i = this.svg.getBoundingClientRect();
    return [(n.clientX - i.left) * this.box[0] / i.width, (n.clientY - i.top) * this.box[1] / i.height];
  }
  // the view is worked out from the camera springs each frame, so a camera change glides
  get v() {
    const [n, i, l] = this.base, [f, b] = this.box, g = this.fillAmt.x, v = i + (f - 400) / 2, T = l + (b - 400) / 2, A = mu(n, v, T, this.yaw.x, this.pitch.x);
    return g < 1e-3 ? A : mu(n, kn(v, f / 2, g), kn(T, b / 2 + this.lift * A.cp * A.k / 2, g), this.yaw.x, this.pitch.x);
  }
  // the cell it's drawn in (a light's fader is a tall column beside its dial): the short side stays 400 units
  setBox(n, i) {
    if (!(n > 0 && i > 0)) return;
    const l = n >= i ? [Math.round(400 * n / i), 400] : [400, Math.round(400 * i / n)];
    l[0] === this.box[0] && l[1] === this.box[1] || (this.box = l, this.svg.setAttribute("viewBox", "0 0 " + l[0] + " " + l[1]), this.paint());
  }
  setFill(n) {
    this.fillAmt.t = n ? 1 : 0, this.kick();
  }
  // Fill: the plate's width and depth so it fills 352 × 352 of the Space at this camera. Only works while the
  // control faces us (yaw under ~30°); at isometric the corners point at us, so it keeps its drawn size.
  size(n, i) {
    const l = this.fillAmt.x;
    if (l < 1e-3) return [n, i];
    const f = this.v, b = f.cy, g = Math.abs(f.sy), v = b * b - g * g;
    if (v < 0.4) return [n, i];
    const T = (this.box[0] - 48) / f.k, A = ((this.box[1] - 48) / f.k - this.lift * f.cp) / f.sp, _ = Math.max(n * 0.6, (T * b - A * g) / v), P = Math.max(i * 0.6, (A * b - T * g) / v);
    return [kn(n, _, l), kn(i, P, l)];
  }
  setCamera(n) {
    const i = Sc[n];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(n, i, l) {
    const f = new pg(n, i, l);
    return this.springs.push(f), f;
  }
  kick() {
    if (fg.matches) {
      this.springs.forEach((n) => {
        n.x = n.t, n.v = 0;
      }), this.paint();
      return;
    }
    this.raf || (this.raf = requestAnimationFrame(this.tick));
  }
  paint() {
    const n = `${this.id}h`;
    this.svg.innerHTML = `<defs><pattern id="${n}" patternUnits="userSpaceOnUse" width="3.4" height="3.4" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="3.4" class="hatch"/></pattern></defs>` + this.render(n);
  }
}
class mg extends ar {
  constructor(n, i) {
    super(n, i), this.base = [3.4, 200, 190], this.lift = 21, this.h = this.spring(10, 0.32, 0.55), this.glow = this.spring(0, 0.05, 0.8), this.svg.setAttribute("role", "button"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  down(n) {
    n === "cap" && (this.pressing = !0, this.h.t = 2.5);
  }
  up() {
    this.pressing && (this.pressing = !1, this.h.t = 10, this.glow.x = 1, this.glow.t = 0, this.onChange());
  }
  key(n, i) {
    return n.key !== " " && n.key !== "Enter" ? !1 : (i && !this.pressing && this.down("cap"), i || this.up(), !0);
  }
  show() {
  }
  render(n) {
    const i = this.v, l = 11 + this.h.x, [f, b] = this.size(68, 68), g = Math.min(f, b) / 68, v = He(oo(f, b, 18 * g), 0, 8), T = He(Qe(25 * g), 8, 11), A = He(Qe(18.5 * g), 11, l), _ = Qe(12.5 * g).map(([O, M]) => [O, M, l]), P = Math.max(0, Math.min(1, this.glow.x));
    return ra(i, v, 0, n) + Ne(i, v) + Ne(i, T, "cap") + ra(i, A, 11, n, Mo(i, T, 1)) + Ne(i, A, "cap") + er(i, _) + (P > 0.01 ? `<g style="opacity:${P.toFixed(3)}">${er(i, _, "accent")}</g>` : "");
  }
}
class _c extends ar {
  constructor(n, i) {
    super(n, i), this.on = !!i.on, this.base = [2.75, 200, 186], this.lift = 21, this.t = this.spring(this.on ? 1 : 0, 0.3, 0.5), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(n) {
    this.on = n, this.t.t = n ? 1 : 0, this.svg.setAttribute("aria-checked", n), this.onChange(n);
  }
  down(n) {
    n === "paddle" && this.set(!this.on);
  }
  key(n, i) {
    return n.key !== " " && n.key !== "Enter" ? !1 : (i && !n.repeat && this.set(!this.on), !0);
  }
  // from the device: moves without sending anything back
  show(n) {
    this.held || (this.on = n, this.t.t = n ? 1 : 0, this.svg.setAttribute("aria-checked", n), this.kick());
  }
  render(n) {
    const i = this.v, l = this.t.x, [f, b] = this.size(72, 96), g = f / 72, v = b / 96, T = Math.min(g, v), A = 9, _ = kn(3, 12, l), P = kn(12, 3, l), O = (_ + P) / 2 - 1.4, M = 31 * v, K = He(oo(f, b, 16 * T), 0, 6), tt = He(oo(48 * g, 72 * v, 9 * T), 6, A), z = [[-M, A], [M, A], [M, A + P], [0, A + O], [-M, A + _]], N = He(z, -20 * g, 20 * g, !1, (Q, I, G) => [G, Q, I]), et = (Q) => A + (Q < 0 ? kn(_, O, (Q + M) / M) : kn(O, P, Q / M)) + 0.05, it = Qe(4.2 * T, 36).map(([Q, I]) => [Q, I - M / 2, et(I - M / 2)]), ut = [[0, M * 0.32], [0, M * 0.68]].map(([Q, I]) => [Q, I, et(I)]);
    return ra(i, K, 0, n) + Ne(i, K) + Ne(i, tt, "paddle") + ra(i, N, A, n, Mo(i, tt, 1)) + Ne(i, N, "paddle") + er(i, it, this.on ? "edge mark" : "accent mark") + yo(i, ut[0], ut[1], this.on ? "accent mark" : "edge mark");
  }
}
class Cc extends ar {
  constructor(n, i) {
    super(n, i), this.level = i.value ?? 0.6, this.base = [2.35, 200, 190], this.lift = 19, this.L = this.spring(this.level, 0.32, 0.6), this.kh = this.spring(13, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(n) {
    this.level = Math.max(0, Math.min(1, n)), this.L.t = this.level, this.svg.setAttribute("aria-valuenow", Math.round(this.level * 100)), this.onChange(this.level);
  }
  down(n, i) {
    this.grab = { p: i, level: this.level }, this.kh.t = 9.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.v, l = i.p([0, 0, 0]), f = i.p([0, 1, 0]), b = [f[0] - l[0], f[1] - l[1]], g = ((n[0] - this.grab.p[0]) * b[0] + (n[1] - this.grab.p[1]) * b[1]) / (b[0] ** 2 + b[1] ** 2);
    this.set(this.grab.level - g / (this.travel || 96));
  }
  up() {
    this.grab = null, this.kh.t = 13;
  }
  key(n, i) {
    const l = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05 }[n.key];
    return l === void 0 ? !1 : (i ? (this.set(Math.round((this.level + l) * 20) / 20), this.kh.t = 10.5) : this.kh.t = 13, !0);
  }
  show(n) {
    this.held || (this.level = Math.max(0, Math.min(1, n)), this.L.t = this.level, this.svg.setAttribute("aria-valuenow", Math.round(this.level * 100)), this.kick());
  }
  render(n) {
    const i = this.v, l = this.size(44, 136)[1], f = 44, b = 1, g = l / 136, v = 1, T = 48 * g, A = 6 + this.kh.x, _ = T - this.L.x * 2 * T;
    this.travel = 2 * T;
    const P = Math.min(32 * b, f - 12), O = P / 32, M = He(oo(f, l, 16 * v), 0, 6), K = ko(He(oo(P, 16 * v, 5 * v), 6, A), Ti(0, _, 0));
    let tt = "";
    for (let et = 0; et <= 10; et++) {
      const it = T - et * (2 * T) / 10, ut = (et % 5 === 0 ? 7 : 4) * b, Q = 9 * v;
      tt += yo(i, [Q, it, 6], [Q + ut, it, 6]) + yo(i, [-Q, it, 6], [-Q - ut, it, 6]);
    }
    const z = oo(6 * v, 2 * T + 6 * v, 3 * v).map(([et, it]) => [et, it, 6]), N = [[-3 * v, T + 3 * v, 6], [3 * v, T + 3 * v, 6], [3 * v, _, 6], [-3 * v, _, 6]];
    return ra(i, M, 0, n) + Ne(i, M, "plate") + `<g class="deco">${tt}${er(i, z)}<path class="level" d="${Mn(N.map(i.p))}"/></g>` + ra(i, K, 6, n, Mo(i, M, 1)) + Ne(i, K, "knob") + `<g class="deco">${yo(i, [-12 * O, _, A], [12 * O, _, A])}${yo(i, [-8 * O, _ - 3.5 * v, A], [8 * O, _ - 3.5 * v, A])}${yo(i, [-8 * O, _ + 3.5 * v, A], [8 * O, _ + 3.5 * v, A])}</g>`;
  }
}
class Cs extends ar {
  constructor(n, i) {
    super(n, i), this.min = i.min ?? 10, this.max = i.max ?? 30, this.now = "now" in i ? i.now : 19.5, this.value = i.value ?? 21.5, this.step = i.step ?? 0.5, this.tickStep = i.tick ?? 0.5, this.major = i.major ?? 10, this.tint = i.tint || null, this.labelOf = i.labelOf || ((l) => l), this.base = [2.85, 200, 194], this.lift = 22, this.val = this.spring(this.value, 0.35, 0.5), this.kh = this.spring(15, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  // the scale's angle as the viewer sees it: the gap always faces us, min on the left, max on the right
  ang(n) {
    return 135 + (n - this.min) / (this.max - this.min) * 270 - this.yaw.x;
  }
  set(n) {
    const i = Math.max(this.min, Math.min(this.max, Math.round(n / this.step) * this.step));
    i !== this.value && (this.value = i, this.onChange(i)), this.val.t = i, this.svg.setAttribute("aria-valuenow", i);
  }
  angleAt(n) {
    const [i, l] = this.v.ground(n[0], n[1], 7 + this.kh.x);
    return Math.atan2(l, i) * 180 / Math.PI;
  }
  down(n, i) {
    this.grab = { last: this.angleAt(i), raw: this.value }, this.kh.t = 11.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.angleAt(n);
    let l = i - this.grab.last;
    l > 180 && (l -= 360), l < -180 && (l += 360), this.grab.last = i, this.grab.raw = Math.max(this.min, Math.min(this.max, this.grab.raw + l / 270 * (this.max - this.min))), this.set(this.grab.raw);
  }
  up() {
    this.grab = null, this.kh.t = 15;
  }
  key(n, i) {
    const l = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[n.key];
    return l === void 0 ? !1 : (i ? (this.set(this.value + l * this.step), this.kh.t = 12.5) : this.kh.t = 15, !0);
  }
  show(n, i) {
    this.held || (i != null && (this.now = i), n != null && (this.value = n, this.val.t = n, this.svg.setAttribute("aria-valuenow", n)), this.kick());
  }
  render(n) {
    const i = this.v, l = 7 + this.kh.x, f = this.ang(this.val.x), [b, g] = this.size(92, 92), v = b / 92, T = g / 92, A = Math.min(v, T), _ = (Q, I, G) => [Q * Math.cos(I) * v, Q * Math.sin(I) * T, G], P = He(Qe(46, 72).map(([Q, I]) => [Q * v, I * T]), 0, 7), O = He(Qe(22 * A, 64), 7, l), M = Math.min(this.now ?? this.value, this.value), K = Math.max(this.now ?? this.value, this.value);
    let tt = "";
    const z = Math.round((this.max - this.min) / this.tickStep), N = Math.max(1, Math.round(this.major / 2));
    for (let Q = 0; Q <= z; Q++) {
      const I = this.min + Q * this.tickStep, G = Aa(this.ang(I)), ft = Q % this.major === 0, kt = ft ? 36.5 : Q % N === 0 ? 34.5 : 33.2, Ht = !this.tint && this.now != null && I >= M && I <= K && this.value > this.now, dt = this.tint ? 'edge tint" style="stroke:' + this.tint(I) : Ht ? "accent" : "edge";
      tt += yo(i, _(30, G, 7), _(this.tint ? 37 : kt, G, 7), dt);
      const S = ft ? this.labelOf(I) : null;
      S != null && S !== "" && (tt += zc(i, _(41.5, G, 7), S, 4 * A));
    }
    let et = "";
    for (let Q = 0; Q < 40; Q++) {
      const I = Aa(f + Q * 9), G = Math.cos(I), ft = Math.sin(I), kt = 22 * A;
      G * i.V[0] + ft * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (et += yo(i, [kt * G, kt * ft, 9], [kt * G, kt * ft, l - 2.2]));
    }
    const it = Aa(f), ut = Qe(18.5 * A, 64).map(([Q, I]) => [Q, I, l]);
    return ra(i, P, 0, n) + Ne(i, P, "knob") + `<g class="deco">${tt}</g>` + ra(i, O, 7, n, Mo(i, P, 1)) + Ne(i, O, "knob") + `<g class="deco">${et}${er(i, ut)}` + (this.tint ? `<path class="swatch" style="fill:${this.tint(this.value)}" d="${Mn(Qe(8 * A, 40).map(([Q, I]) => i.p([Q, I, l])))}"/>` : "") + `${yo(i, [(this.tint ? 10 : 5) * A * Math.cos(it), (this.tint ? 10 : 5) * A * Math.sin(it), l], [15.5 * A * Math.cos(it), 15.5 * A * Math.sin(it), l], "edge pointer")}</g>`;
  }
}
class gg extends ar {
  constructor(n, i) {
    super(n, i), this.positions = i.positions, this.index = i.index ?? 0, this.base = [2.45, 200, 196], this.lift = 21, this.A = this.spring(this.positions[this.index].a, 0.22, 0.6), this.ph = this.spring(9, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(n) {
    this.index = (n + this.positions.length) % this.positions.length, this.A.t = this.positions[this.index].a, this.svg.setAttribute("aria-valuetext", this.positions[this.index].label), this.onChange(this.index);
  }
  angleAt(n) {
    const [i, l] = this.v.ground(n[0], n[1], 12);
    return Math.atan2(l, i) * 180 / Math.PI + this.yaw.x;
  }
  down(n, i) {
    if (n.startsWith("pos-")) {
      this.set(+n.slice(4)), this.ph.t = 7, this.grab = null;
      return;
    }
    this.grab = { last: this.angleAt(i), moved: 0 }, this.ph.t = 6.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.angleAt(n);
    let l = i - this.grab.last;
    l > 180 && (l -= 360), l < -180 && (l += 360), this.grab.last = i, this.grab.moved += Math.abs(l);
    const f = this.positions[0].a, b = this.positions[this.positions.length - 1].a;
    this.A.t = Math.max(f - 8, Math.min(b + 8, this.A.t + l));
  }
  up() {
    if (this.ph.t = 9, !!this.grab) {
      if (this.grab.moved < 4) this.set(this.index + 1);
      else {
        let n = 0;
        this.positions.forEach((i, l) => {
          Math.abs(i.a - this.A.t) < Math.abs(this.positions[n].a - this.A.t) && (n = l);
        }), this.set(n);
      }
      this.grab = null;
    }
  }
  key(n, i) {
    const l = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, " ": 1, Enter: 1 }[n.key];
    if (l === void 0) return !1;
    if (i) {
      const f = Math.max(0, Math.min(this.positions.length - 1, this.index + l));
      this.set(n.key === " " || n.key === "Enter" ? this.index + 1 : f), this.ph.t = 7;
    } else this.ph.t = 9;
    return !0;
  }
  show(n) {
    this.held || n === this.index || (this.index = n, this.A.t = this.positions[n].a, this.svg.setAttribute("aria-valuetext", this.positions[n].label), this.kick());
  }
  render(n) {
    const i = this.v, l = this.A.x - this.yaw.x, f = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, T = g / 92, A = Math.min(v, T), _ = He(oo(b, g, 20 * A), 0, 7), P = He(Qe(15 * A, 48), 7, 12), O = ko(He([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([K, tt]) => [K * A, tt * A]), 12, f, !1), Ns(l));
    let M = "";
    return this.positions.forEach((K, tt) => {
      const z = Aa(K.a - this.yaw.x), N = tt === this.index, et = Math.cos(z), it = Math.sin(z), ut = Qe(1.7 * A, 20).map(([Q, I]) => [Q + 26.5 * et * v, I + 26.5 * it * T, 7]);
      M += N ? `<path class="dotfill" d="${Mn(ut.map(i.p))}"/>` : er(i, ut), M += zc(i, [37.5 * et * v, 37.5 * it * T, 7], K.label, 5.6 * A, { part: `pos-${tt}`, cls: N ? "sel" : "", w: 26 });
    }), ra(i, _, 0, n) + Ne(i, _) + M + ra(i, O, 7, n, Mo(i, _, 1)) + Ne(i, P, "knob") + Ne(i, O, "knob") + `<g class="deco">${yo(i, Ns(l)([6 * A, 0, f]), Ns(l)([19 * A, 0, f]))}</g>`;
  }
}
class bg extends ar {
  constructor(n, i) {
    super(n, i), this.on = !!i.on, this.base = [2.4, 206, 214], this.lift = 30, this.phi = this.spring(this.on ? 24 : -24, 0.3, 0.5), this.lid = this.spring(0, 0.16, 0.66), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  get open() {
    return this.lid.t > 0;
  }
  setLid(n) {
    var i, l;
    this.lid.t = n ? 108 : 0, (l = (i = this.opts).onLid) == null || l.call(i, n);
  }
  flip() {
    this.on = !this.on, this.phi.t = this.on ? 24 : -24, this.svg.setAttribute("aria-checked", this.on), this.onChange(this.on);
  }
  down(n) {
    n === "cover" ? this.setLid(!this.open) : n === "toggle" && this.open && this.flip();
  }
  key(n, i) {
    return n.key === "Escape" ? (i && this.setLid(!1), !0) : n.key !== " " && n.key !== "Enter" ? !1 : (i && !n.repeat && (this.open ? this.flip() : this.setLid(!0)), !0);
  }
  show(n) {
    this.held || (this.on = n, this.phi.t = n ? 24 : -24, this.svg.setAttribute("aria-checked", n), this.kick());
  }
  render(n) {
    const i = this.v, l = 6, f = l - 23, b = 6, [g, v] = this.size(86, 104), T = Math.min(g / 86, v / 104), A = ([I, G, ft]) => [I * T, G * T, 6 + (ft - 6) * T], _ = He(oo(g, v, 18 * T), 0, 6), P = ko(He(Qe(8, 40), 6, 10), (I) => A(Ti(0, l, 0)(I))), O = (I) => A(Ti(0, l, 10)(Vc(this.phi.x)(I))), M = ko(He(Qe(2.2, 20), 0, 13.5), O), K = ko(He(Qe(3.8, 24), 12.5, 17.5), O), tt = (I) => A(Vc(-this.lid.x, f, b)(I)), z = ko(He(oo(40, 46, 7), 6, 30), (I) => tt(Ti(0, l, 0)(I))), N = Df(z, i.V);
    let et = "";
    if (N[1]) {
      let I = "";
      for (let ft = -84; ft <= 84; ft += 12) {
        const kt = [[ft - 40, l - 40], [ft - 34, l - 40], [ft + 46, l + 40], [ft + 40, l + 40]].map(([Ht, dt]) => i.p(tt([Ht, dt, 30])));
        I += `<path class="level" d="${Mn(kt)}"/>`;
      }
      const G = `${this.id}s`;
      et += `<clipPath id="${G}"><path d="${Mo(i, z, 1)}"/></clipPath><g clip-path="url(#${G})">${I}</g>`;
    }
    N[0] && (et += er(i, oo(32, 38, 4).map(([I, G]) => tt([I, G + l, 6]))));
    const it = `<g data-part="toggle">${Ne(i, P)}${Ne(i, M)}${Ne(i, K)}</g>`, ut = `<g data-part="cover">${Ne(i, z)}<g class="deco">${et}</g></g>`, Q = this.lid.x > 45;
    return ra(i, _, 0, n) + Ne(i, _) + ra(i, z, 6, n, Mo(i, _, 1)) + ra(i, K, 6, n, Mo(i, _, 1)) + (Q ? ut + it : it + ut);
  }
}
class Ac extends ar {
  constructor(n, i) {
    super(n, i), this.on = !!i.on, this.labels = i.labels || ["On", "Off"], this.base = [3.1, 200, 206], this.lift = 24, this.phi = this.spring(this.on ? -28 : 28, 0.3, 0.45), this.press = this.spring(0, 0.3, 0.55), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.svg.setAttribute("aria-checked", this.on), this.paint();
  }
  set(n) {
    this.on = n, this.phi.t = n ? -28 : 28, this.svg.setAttribute("aria-checked", n), this.onChange(n);
  }
  show(n) {
    this.held || n === this.on || (this.on = n, this.phi.t = n ? -28 : 28, this.svg.setAttribute("aria-checked", n), this.kick());
  }
  down(n) {
    n === "lever" && (this.press.t = 1, this.set(!this.on));
  }
  up() {
    this.press.t = 0;
  }
  key(n, i) {
    return n.key !== " " && n.key !== "Enter" ? !1 : (i && !n.repeat ? this.down("lever") : i || this.up(), !0);
  }
  render(n) {
    const i = this.v, [l, f] = this.size(64, 84), b = Math.min(l / 64, f / 84), g = ([z, N, et]) => [z * b, N * b, 6 + (et - 6) * b], v = this.press.x * 1.2, T = He(oo(l, f, 16 * b), 0, 6), A = ko(He(Qe(10, 6).map(([z, N]) => [z, N]), 6, 9 - v, !1), (z) => g(Ns(30)(z))), _ = ko(He(Qe(6.5, 36), 9 - v, 12 - v), g), P = (z) => g(Ti(0, 0, 12 - v)(Vc(this.phi.x)(z))), O = ko(He(Qe(2.3, 20), 0, 15), P), M = ko(He(Qe(4, 24), 14, 19), P), K = f / 2 - 13 * b, tt = (z, N, et) => zc(i, [0, N, 6], z, 6 * b, { part: "lever", cls: et ? "sel" : "", w: 30 });
    return ra(i, T, 0, n) + Ne(i, T) + tt(this.labels[0], -K, this.on) + tt(this.labels[1], K, !this.on) + ra(i, M, 6, n, Mo(i, T, 1)) + ra(i, O, 6, n, Mo(i, T, 1)) + `<g data-part="lever">${Ne(i, A)}${Ne(i, _)}${Ne(i, O)}${Ne(i, M)}</g>`;
  }
}
const wu = "homecore-density", vu = "homecore-physical", yu = "homecore-physical-view", xu = "homecore-physical-fit", ku = "homecore-physical-binary", Mu = "homecore-physical-preview-at", Ve = {
  get(o) {
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  set(o, n) {
    try {
      localStorage.setItem(o, n);
    } catch {
    }
  }
}, j = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), Su = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Lc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Tc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', As = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, _u = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Cu = 1, wg = 4, Au = 16, Lu = 32, vg = 128, yg = 256, Tu = 16384, Du = 1, Eu = 2, Dc = 4, Bu = 8, xg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Pu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, kg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, _i = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" },
  // more to choose from (the leadership demo, Matt, 9 Nov), all off until switched on in Edit Home page
  covers: { name: "Covers", icon: "mdi:blinds-horizontal", colour: "#9c27b0" },
  people: { name: "People", icon: "mdi:account-multiple", colour: "#03a9f4" },
  openings: { name: "Doors and windows", icon: "mdi:door-open", colour: "#ff9800" },
  leaks: { name: "Leaks", icon: "mdi:water", colour: "#2196f3" },
  vacuum: { name: "Vacuum", icon: "mdi:robot-vacuum", colour: "#4caf50" }
}, Ru = ["covers", "people", "openings", "leaks", "vacuum"], Hu = "homecore_house", Nu = "homecore-house-used", Ci = ["switch", "fan", "input_boolean", "automation"], Ou = "homecore-house-look", Mg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Sg = [["popup", "Popup"], ["sheet", "Sheet"]], _g = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Cg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ag = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Ai = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Lg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Tg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Iu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Ec = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', da = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Bc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Ls = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Pc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ef = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", Ts = Ef(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Fu = Ef(["M20 6L9 17L4 12"]), wo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + j(o || "") + '"' + (n ? ' data-icon-name="' + j(n) + '"' : "") + "></span>", Dg = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', qu = 1, Vu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Wu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ds = ["door", "window", "garage_door", "opening"], ju = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Rr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Eg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bg = 10, Pg = 20, Rg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Hg = ["living room", "bedroom", "office"];
function Ng(o, { config: n, getHass: i }) {
  var xp, kp, Mp;
  const l = (t) => o.getElementById(t), f = l("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let T = Ve.get(wu) === "1", A = Ve.get(vu) === "1", _ = Ve.get(yu) || "front", P = Ve.get(xu) || "fill", O = Ve.get(ku) || "toggle", M = {};
  const K = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, tt = (t, e, a) => K({ type: "call_service", domain: t, service: e, service_data: a }), z = o.querySelector("#appearancePane .toggleList");
  z && !l("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), l("densityToggle").addEventListener("click", () => {
    T = !T, Ve.set(wu, T ? "1" : "0"), dt();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Yt(t).device_class === "power" && /^(W|kW)$/.test(Yt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + s + '">' + d + "</button>").join("") + "</div>", it = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function ut() {
    var D, X;
    if (!g || l("housePane")) return;
    const t = l("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (C, V) => '<div class="houseTab' + (C === "look" ? " active" : "") + '" data-house-pane="' + C + '"><section class="card">' + V + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([C, V]) => '<button class="tab segBtn' + (C === "look" ? " active" : "") + '" type="button" data-house-tab="' + C + '">' + V + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", Mg.map(([C, V]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + C + '"><div class="tfCardTitle">' + V + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + N.map(([C, V, wt]) => it(V, wt, '<select class="settingsSelect" data-source="' + C + '" aria-label="' + V + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(_i).map(([C, V]) => it(V.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + C + '" aria-label="' + V.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (C) => t.querySelector('[data-look-group="' + C + '"]'), s = (C) => C == null ? void 0 : C.closest(".toggleRow");
    [s(t.querySelector(".themeBtn"))].forEach((C) => C && r("look").appendChild(C));
    const d = s(l("densityToggle"));
    d && (d.hidden = !0), [s(l("moreInfoChoice")), s(l("namesChoice"))].forEach((C) => C && r("house").appendChild(C)), r("house").insertAdjacentHTML("beforeend", it("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + it("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), r("house").insertAdjacentHTML("beforeend", it("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + it("Angle", "Where the physical controls are seen from.", et("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + it("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", et("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + it("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", et("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const p = () => {
      const C = l("physToggle");
      C.classList.toggle("on", A), C.setAttribute("aria-checked", String(A)), l("physViewRow").hidden = l("physFitRow").hidden = l("physBinaryRow").hidden = !A, t.querySelectorAll("[data-phys-view]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physView === _))), t.querySelectorAll("[data-phys-fit]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physFit === P))), t.querySelectorAll("[data-phys-binary]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physBinary === O)));
    };
    r("house").addEventListener("click", (C) => {
      const V = C.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      V && (V.id === "physToggle" && (A = !A, Ve.set(vu, A ? "1" : "0"), gn.clear()), V.dataset.physView && (_ = V.dataset.physView, Ve.set(yu, _), gn.forEach((wt) => wt.ctls.forEach((Lt) => Lt.setCamera(_)))), V.dataset.physFit && (P = V.dataset.physFit, Ve.set(xu, P), gn.forEach((wt) => wt.ctls.forEach((Lt) => Lt.setFill(P === "fill")))), V.dataset.physBinary && (O = V.dataset.physBinary, Ve.set(ku, O), gn.clear()), p(), (V.id === "physToggle" || V.dataset.physBinary) && Na(), L(V.closest(".toggleRow")));
    }), p();
    let u = null;
    const m = () => {
      !u || u.hidden || (u.classList.remove("in"), setTimeout(() => {
        u.classList.contains("in") || (u.hidden = !0);
      }, 220));
    };
    function k(C, V) {
      const wt = u.offsetWidth, Lt = u.offsetHeight;
      u.style.left = Math.max(8, Math.min(window.innerWidth - wt - 8, C)) + "px", u.style.top = Math.max(8, Math.min(window.innerHeight - Lt - 8, V)) + "px", u.classList.add("placed");
    }
    function L(C) {
      const V = o.querySelector("#app");
      if (!V) return;
      if (!u) {
        u = document.createElement("div"), u.className = "tfPhysPreview", u.hidden = !0, u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Physical controls preview"), u.innerHTML = '<div class="tfPhysPreviewHead" title="Drag to move"><span class="tfPhysGrip" aria-hidden="true"></span><span class="activityTitle">Preview</span><button class="tfBack" type="button" data-preview-close aria-label="Close preview">' + Tc + '</button></div><div class="tfPhysPreviewRow"></div><div class="tfPhysPreviewNote">Off: popups show their usual controls.</div>', V.appendChild(u), u.querySelector("[data-preview-close]").addEventListener("click", m);
        const _t = u.querySelector(".tfPhysPreviewHead");
        _t.addEventListener("pointerdown", (lt) => {
          if (lt.button > 0 || lt.target.closest("button")) return;
          lt.preventDefault();
          const xt = u.getBoundingClientRect(), $t = lt.clientX - xt.left, fe = lt.clientY - xt.top;
          try {
            _t.setPointerCapture(lt.pointerId);
          } catch {
          }
          u.classList.add("dragging");
          const he = (Ia) => k(Ia.clientX - $t, Ia.clientY - fe), ye = () => {
            _t.removeEventListener("pointermove", he), _t.removeEventListener("pointerup", ye), _t.removeEventListener("pointercancel", ye), u.classList.remove("dragging");
            const Ia = u.getBoundingClientRect();
            Ve.set(Mu, JSON.stringify([Math.round(Ia.left), Math.round(Ia.top)]));
          };
          _t.addEventListener("pointermove", he), _t.addEventListener("pointerup", ye), _t.addEventListener("pointercancel", ye);
        }), window.addEventListener("resize", () => {
          if (u.classList.contains("placed")) {
            const lt = u.getBoundingClientRect();
            k(lt.left, lt.top);
          }
        });
      }
      const wt = (() => {
        try {
          return JSON.parse(Ve.get(Mu) || "null");
        } catch {
          return null;
        }
      })(), Lt = u.querySelector(".tfPhysPreviewRow");
      if (u.dataset.binary !== O) {
        u.dataset.binary = O;
        const _t = [[O === "rocker" ? "Rocker" : "Toggle", "Switch"], ["Fader", "Light"], ["Dial", "Thermostat"]];
        Lt.innerHTML = _t.map(([, $t]) => '<div class="tfPhysPreviewCell"><div class="tfMoreSpace tfPhys"></div><span>' + $t + "</span></div>").join("");
        const lt = Lt.querySelectorAll(".tfPhys"), xt = { camera: _, fill: P === "fill" };
        u.ctls = [
          O === "rocker" ? new _c(lt[0], { ...xt, on: !0, label: "Sample switch" }) : new Ac(lt[0], { ...xt, on: !0, label: "Sample switch" }),
          new Cc(lt[1], { ...xt, value: 0.64, label: "Sample light brightness" }),
          new Cs(lt[2], { ...xt, value: 21.5, now: 19.5, min: 10, max: 30, label: "Sample thermostat target" })
        ];
      } else u.ctls.forEach((_t) => {
        _t.setCamera(_), _t.setFill(P === "fill");
      });
      u.classList.toggle("off", !A), u.hidden && (u.hidden = !1, wt && k(wt[0], wt[1]), u.offsetWidth), u.classList.add("in"), (C && !u.classList.contains("placed") ? C.getBoundingClientRect().bottom - (u.getBoundingClientRect().top - 16) : 0) > 0 && C.scrollIntoView({ block: "center", behavior: We() ? "instant" : "smooth" });
    }
    ["#homeNav", "#settingsBack", "#tvNav"].forEach((C) => {
      var V;
      return (V = o.querySelector(C)) == null ? void 0 : V.addEventListener("click", m);
    }), [s(l("hoursChoice")), s(l("wxStyleChoice"))].forEach((C) => C && r("weather").appendChild(C));
    const x = l("housePane"), H = x.querySelector(".houseTabs"), E = H.querySelector(".rubberIndicator"), $ = "homecore-light-view", B = (C) => {
      x.classList.toggle("tfLightCardsOn", C === "cards"), x.querySelectorAll("[data-light-view]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.lightView === C))), Ve.set($, C);
    };
    B(Ve.get($) === "table" ? "table" : "cards"), x.querySelector(".tfLightView").addEventListener("click", (C) => {
      const V = C.target.closest("[data-light-view]");
      V && B(V.dataset.lightView);
    }), new ResizeObserver(() => I()).observe(x), (X = (D = document.fonts) == null ? void 0 : D.ready) == null || X.then(() => I());
    const F = (C) => {
      const V = H.querySelector(".tab.active");
      E.style.transition = "none", C ? Rs(E, E.offsetLeft, E.offsetWidth, V.offsetLeft, V.offsetWidth) : (E.style.left = V.offsetLeft + "px", E.style.width = V.offsetWidth + "px");
    };
    new ResizeObserver(() => F(!1)).observe(H), x.addEventListener("click", (C) => {
      const V = C.target.closest("[data-house-tab]");
      if (V) {
        H.querySelectorAll(".tab").forEach((_t) => _t.classList.toggle("active", _t === V)), x.querySelectorAll(".houseTab").forEach((_t) => _t.classList.toggle("active", _t.dataset.housePane === V.dataset.houseTab)), V.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), F(!0), I();
        return;
      }
      const wt = C.target.closest("[data-light-fav]");
      if (wt) {
        Gc(wt.dataset.lightFav);
        return;
      }
      const Lt = C.target.closest("[data-light-pick]");
      if (Lt) {
        const [_t, lt] = Lt.dataset.lightPick.split("|"), xt = { ...Jt[_t] };
        Lt.dataset.v ? xt[lt] = Lt.dataset.v : delete xt[lt], Jt[_t] = xt, _o(), [...ta.keys()].filter(($t) => $t.endsWith(":" + lt)).forEach(($t) => ta.delete($t)), Na();
        return;
      }
      const Pt = C.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Pt || Pt.disabled)) {
        if (Pt.dataset.lights && (Jt.lights = Pt.dataset.lights), Pt.dataset.dacPad && (Jt.dacPad = Pt.dataset.dacPad), (Pt.dataset.lights || Pt.dataset.dacPad) && (_o(), ta.clear()), Pt.dataset.sumToggle) {
          const _t = Pt.dataset.sumToggle, lt = new Set(Mt.hiddenSums || []);
          lt.has(_t) ? lt.delete(_t) : lt.add(_t), Mt = { ...Mt, hiddenSums: [...lt] }, Ta();
        }
        Na();
      }
    }), x.addEventListener("change", (C) => {
      const V = C.target;
      V.dataset.source && (Mt = { ...Mt, sources: { ...Mt.sources || {}, [V.dataset.source]: V.value || void 0 } }, Ta());
      const wt = V.dataset.lightStyle || V.dataset.lightPad;
      if (wt) {
        const Lt = V.dataset.lightStyle ? "lightStyles" : "lightPads", Pt = { ...Jt[Lt] };
        V.value ? Pt[wt] = V.value : delete Pt[wt], Jt[Lt] = Pt, _o(), [...ta.keys()].filter((_t) => _t.endsWith(":" + wt)).forEach((_t) => ta.delete(_t));
      }
      Na();
    });
  }
  function Q() {
    var x, H;
    ai() && un();
    const t = l("housePane");
    if (!t) return;
    const e = !!customElements.get(Za);
    t.querySelectorAll("[data-lights]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lights === Jt.lights))), l("lightsRow").querySelector(".status").textContent = e || !ai() ? "How lights show on the house page." : Ka === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.dacPad === Jt.dacPad))), l("dacPadRow").hidden = !ai();
    for (const E of t.querySelectorAll("[data-source]")) {
      if (E === o.activeElement) continue;
      const [$] = N.find(([F]) => F === E.dataset.source), B = Object.keys(M).filter(N.find(([F]) => F === $)[3]).sort((F, D) => gt(F).localeCompare(gt(D)));
      E.dataset.sig !== B.join(",") && (E.innerHTML = '<option value="">Automatic</option>' + B.map((F) => '<option value="' + j(F) + '">' + j(gt(F)) + "</option>").join(""), E.dataset.sig = B.join(",")), E.value = B.includes((x = Mt.sources) == null ? void 0 : x[$]) ? Mt.sources[$] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((E) => {
      const $ = !(Mt.hiddenSums || []).includes(E.dataset.sumToggle);
      E.classList.toggle("on", $), E.setAttribute("aria-checked", String($));
    });
    const a = l("lightRows"), r = l("lightCards"), s = o.activeElement, d = a != null && a.contains(s) || r != null && r.contains(s) ? s : null;
    if (!a || d != null && d.matches("select")) {
      I();
      return;
    }
    const p = new Set(Ut()), u = (E, $, B, F) => '<option value="' + E + '"' + (E === B ? " selected" : "") + ">" + $ + "</option>", m = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, $) => !Se.get(E) - !Se.get($) || (Se.get(E) || "").localeCompare(Se.get($) || "") || gt(E).localeCompare(gt($))).map((E) => {
      const $ = Jt.lightStyles[E] || "", B = Jt.lightPads[E] || "", F = p.has(E), D = j(gt(E));
      return "<tr><td><strong>" + D + "</strong></td><td>" + j(Se.get(E) || "—") + "</td><td>" + j(Oe(E)) + '</td><td class="metaSwitchCol"><button class="switch' + (F ? " on" : "") + '" type="button" role="switch" aria-checked="' + F + '" data-light-fav="' + j(E) + '" aria-label="' + D + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + j(E) + '" aria-label="' + D + ' tile">' + u("", "Default", $) + u("tile", "HomeCore tile", $) + u("dac", "Dual Axis Controller", $) + '</select></td><td><select class="settingsSelect" data-light-pad="' + j(E) + '" aria-label="' + D + ' pad"' + (Rn(E) ? "" : " disabled") + ">" + u("", "Default", B) + u("temperature", "Temperature", B) + u("colour", "Colour", B) + "</select></td></tr>";
    }).join(""), k = (E, $, B, F, D) => '<div class="themeChoice" role="group" aria-label="' + B + '">' + F.map(([X, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (X === D) + '" data-light-pick="' + E + "|" + j($) + '" data-v="' + X + '">' + C + "</button>").join("") + "</div>", L = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, $) => !Se.get(E) - !Se.get($) || (Se.get(E) || "").localeCompare(Se.get($) || "") || gt(E).localeCompare(gt($))).map((E) => {
      const $ = p.has(E), B = j(gt(E)), F = [Se.get(E), Oe(E)].filter(Boolean).map(j).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + B + '</strong><div class="status">' + F + "</div></div></div>" + it("Favourite", "", '<button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + j(E) + '" aria-label="' + B + ' is a favourite"></button>') + it("Tile", "", k("lightStyles", E, B + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Jt.lightStyles[E] || "")) + (Rn(E) ? it("Pad", "", k("lightPads", E, B + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Jt.lightPads[E] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== m && (a.innerHTML = m, a.dataset.html = m), r.dataset.html !== L && (r.innerHTML = L, r.dataset.html = L), d != null && d.dataset.lightFav && ((H = (r.contains(d) ? r : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || H.focus({ preventScroll: !0 })), I();
  }
  function I() {
    var e, a, r;
    const t = l("housePane");
    if (t)
      for (const s of t.querySelectorAll(".themeChoice")) {
        const d = [...s.querySelectorAll("button")];
        let p = (e = s.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? s.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", s.getAttribute("aria-label") || ((r = (a = s.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var x;
            return (x = d[Number(p.value)]) == null ? void 0 : x.click();
          }), s.after(p);
          const L = () => {
            p.innerHTML = d.map((H, E) => '<option value="' + E + '"' + (H.disabled ? " disabled" : "") + ">" + j(H.textContent) + "</option>").join("");
            const x = d.findIndex((H) => H.getAttribute("aria-pressed") === "true" || H.classList.contains("active"));
            x >= 0 && (p.value = String(x));
          };
          new MutationObserver(L).observe(s, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), L();
        }
        const u = (L) => {
          s.hidden !== !L && (s.hidden = !L), p.hidden !== L && (p.hidden = L);
        };
        if (d.length > 3) {
          u(!1);
          continue;
        }
        if (!s.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || u(!0);
          continue;
        }
        const m = s.hidden;
        s.hidden = !1;
        const k = d.every((L) => L.scrollWidth <= L.clientWidth + 1);
        s.hidden = m, u(k), p.dataset.fit = "1";
      }
  }
  const G = document.createElement("div");
  G.className = "densityBadge", G.setAttribute("aria-live", "polite"), G.hidden = !0, f.appendChild(G);
  let ft = 0;
  function kt() {
    if (!T) return;
    const t = l("homeView"), e = (d) => d.offsetParent !== null && !d.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((d) => {
      e(d) && (d.dataset.h = Math.round(d.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, s = a.filter((d) => {
      const p = d.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    G.hidden = !t.classList.contains("active"), G.innerHTML = "<b>" + s + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Ht = () => {
    T && requestAnimationFrame(kt);
  };
  function dt() {
    var t;
    f.classList.toggle("showDensity", T), (t = l("densityToggle")) == null || t.classList.toggle("on", T), G.hidden = !T, clearInterval(ft), T && (ft = setInterval(kt, 1e3), kt());
  }
  window.addEventListener("scroll", Ht, { capture: !0, passive: !0 }), window.addEventListener("resize", Ht, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ft = document.createElement("style");
  o.appendChild(Ft);
  const Y = new ResizeObserver(() => mt()), nt = /* @__PURE__ */ new Set(), st = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function mt() {
    const t = f.classList.contains("tfAreaOpen") && !f.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), nt.forEach((m) => {
      (!t || !m.isConnected) && (Y.unobserve(m), nt.delete(m));
    }), !t) {
      Ft.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, s = [...S.children].filter((m) => m.dataset.k && m.offsetParent);
    Ft.disabled = !0;
    const d = s.map((m) => {
      const k = getComputedStyle(m), L = /span (\d+)/.exec(k.gridColumnStart + " " + k.gridColumnEnd);
      return Math.min(r, L ? +L[1] : k.gridColumnEnd === "-1" ? r : 1);
    });
    Ft.disabled = !1;
    let p = 0;
    const u = s.map((m, k) => {
      nt.has(m) || (nt.add(m), Y.observe(m));
      const L = d[k];
      p + L > r && (p = 0);
      const x = p + 1;
      return p = (p + L) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(m.dataset.k) + '"]{grid-column:' + x + " / span " + L + ";grid-row-end:span " + Math.max(1, Math.ceil(st(m) + a)) + "}";
    }).join(`
`);
    Ft.textContent !== u && (Ft.textContent = u);
  }
  new MutationObserver(mt).observe(S, { childList: !0 }), new MutationObserver(mt).observe(f, { attributes: !0, attributeFilter: ["class"] });
  let ot = null, ct = null, q = null;
  const bt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Map(), fa = (t) => ia.set(t, (ia.get(t) || 0) + 1), So = () => [.../* @__PURE__ */ new Set([...Wt.keys(), ...ne])];
  let La = !1, rn = 0;
  const Sn = 6;
  let Vt = null;
  const ge = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
  let Mt = { favourites: null }, _n = {}, qr = {}, Bi = [], or = null;
  const Cn = (() => {
    try {
      return JSON.parse(Ve.get(Nu)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Pi = 0;
  function Ta() {
    clearTimeout(Pi), Pi = setTimeout(() => Promise.resolve(K({ type: "frontend/set_user_data", key: Hu, value: Mt })).catch(() => {
    }), 400);
  }
  const Jt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ve.get(Ou)) || {};
    } catch {
    }
    const e = (a, r) => Object.fromEntries(Object.entries(a || {}).filter(([, s]) => r.includes(s)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      names: t.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(t.names) ? t.names : "scroll",
      namesPicked: !!t.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(t.hoursWindow) ? t.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(t.wxStyle) ? t.wxStyle : "bitmap",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: e(t.lightStyles, ["tile", "dac"]),
      lightPads: e(t.lightPads, ["temperature", "colour"])
    };
  })(), _o = () => Ve.set(Ou, JSON.stringify(Jt)), Vr = () => {
    f.dataset.more = Jt.more, f.dataset.names = Jt.names, ql();
  };
  g && z && !l("moreInfoChoice") && (l("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Sg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Jt.more = e.dataset.moreStyle, _o(), Vr(), l("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + _g.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Jt.names = e.dataset.namesStyle, Jt.namesPicked = !0, _o(), Vr(), l("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Cg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Jt.hoursWindow = e.dataset.hoursWindow, _o(), Le == null || Le.refresh(), l("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ag.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Jt.wxStyle = e.dataset.wxStyle, _o(), Le == null || Le.setStyle(Jt.wxStyle), Te == null || Te.forEach((a) => a.setStyle(Jt.wxStyle)), l("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), ut();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ya = /* @__PURE__ */ new Map();
  let Ri = "";
  const Hi = g ? Vm({ onChange: () => Ee() }) : null;
  g && f.classList.add("house");
  const Da = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Le = null, Ni = null, An = !1;
  function Wr(t) {
    const e = Io();
    if (f.classList.toggle("houseBento", !!e), Le && (Ni !== e || t == null) && (Le.destroy(), Le = null), !e || t == null) {
      Da.remove();
      return;
    }
    Da.isConnected || S.append(Da), Da.style.order = t, !Le && !An && (Le = pu(Da, { getHass: i, entityId: e, style: Jt.wxStyle, hoursWindow: () => Jt.hoursWindow, radarSource: Gr }), Ni = e);
  }
  const jr = [
    ["wx", ["current"]],
    ["avg", ["compared_to_average"]],
    ["aq", ["aq_tile"]],
    ["pollen", ["pollen_tile"]],
    ["radar", ["radar_tile"]],
    ["hourly", ["hourly"]],
    ["sun", ["sun"]],
    ["moon", ["moon"]],
    ["uv", ["uv_index"]],
    ["humidity", ["humidity"]],
    ["pressure", ["pressure"]],
    ["wind", ["wind"]],
    ["visibility", ["visibility"]]
  ], zr = jr.map(([t]) => t), sn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ws = { hourly: 2 }, ro = Object.fromEntries(jr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Te = null, nr = null;
  function Co(t) {
    const e = Io();
    Te && nr !== e && (Te.forEach((a) => a.destroy()), Te = null), Object.values(ro).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Te && !An && (Te = /* @__PURE__ */ new Map(), nr = e), Oi();
  }
  const Gr = () => {
    var t;
    return ((t = ce().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, js = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => gt(t.entity_id).localeCompare(gt(e.entity_id))).map((t) => ["camera:" + t.entity_id, gt(t.entity_id)])];
  function Oi() {
    if (!Te || An) return;
    const t = new Set(ce().hidden);
    jr.forEach(([e, a]) => {
      Te.has(e) || t.has(e) && !(ae != null && ae.fromTray && ae.key === e) || Te.set(e, pu(ro[e], { getHass: i, entityId: nr, style: Jt.wxStyle, cards: a, onOpen: e === "wx" ? () => $d("weather") : void 0, radarSource: Gr }));
    });
  }
  const Yt = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, gt = (t) => Yt(t).friendly_name || t, be = (t, e) => ao(t) || (Number(Yt(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), Ga = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ln = (t) => Yt(t).supported_color_modes || [], zs = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), $r = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ii = (t) => 0.2126 * $r(t[0]) + 0.7152 * $r(t[1]) + 0.0722 * $r(t[2]), Gs = (t, e) => {
    const a = Ii(t), r = Ii(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, $s = 0.55, Ao = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fi = (t) => {
    const e = Yt(t), a = Ao.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? zs(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Lo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function To(t) {
    var r;
    const e = t.split(".")[0], a = (r = M[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Fi(t) : null : e === "climate" ? Lo[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function rr(t, e, a = !1) {
    const [r, s, d] = t.map(($) => $ / 255), p = Math.max(r, s, d), u = Math.min(r, s, d), m = p - u, k = m ? (p === r ? (s - d) / m + (s < d ? 6 : 0) : p === s ? (d - r) / m + 2 : (r - s) / m + 4) * 60 : 0, L = (p + u) / 2, x = m ? m / (1 - Math.abs(2 * L - 1)) : 0, H = m < 0.1 ? Math.min(x, 0.25) : 1, E = ($) => {
      const B = (D) => (D + k / 30) % 12, F = H * Math.min($, 1 - $);
      return [0, 8, 4].map((D) => Math.round(255 * ($ - F * Math.max(-1, Math.min(B(D) - 3, 9 - B(D), 1)))));
    };
    for (let $ = 0.5; a ? $ < 0.96 : $ > 0.04; $ += a ? 0.01 : -0.01) {
      const B = E($);
      if (Gs(B, e) >= 3) return "rgb(" + B.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const $a = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + rr(e, [58, 58, 58], !0) + ";--sum-l:" + rr(e, [230, 230, 230]);
  }, ir = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, qi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + ir.d[t] + ";--g" + t + "-l:" + ir.l[t]).join(";"), Us = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", io = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * $s));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + rr(t, e);
  }, sr = (t) => io(Fi(t)), Do = (t) => {
    const e = To(t);
    return e ? ' data-light style="' + io(e) + '"' : "";
  }, Eo = (t) => {
    const e = Ln(t);
    return e.length ? e.some((a) => a !== "onoff") : Yt(t).brightness != null;
  }, Tn = (t) => [Yt(t).min_color_temp_kelvin || 2e3, Yt(t).max_color_temp_kelvin || 6500], so = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Ys(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(a / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const s = Math.round(r / 24);
    return s + (s === 1 ? " day ago" : " days ago");
  }
  const Ua = (t) => {
    var e;
    return Yt(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Dn = (t) => {
    var e;
    return h("pos", t, ((e = ge.get(t)) == null ? void 0 : e.pos) ?? Ua(t));
  }, Ur = (t) => {
    var e;
    return h("tilt", t, ((e = ge.get(t)) == null ? void 0 : e.tilt) ?? Yt(t).current_tilt_position);
  };
  function Oe(t) {
    var p;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (Eo(t) ? Ga(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Ao.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const u = Ua(t), m = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (m > 0 && m < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : zt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (r === "vacuum") return zt(e.state) + (e.state === "cleaning" && ((p = a.rooms) != null && p.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : zt(e.state);
    if (r === "alarm_control_panel") return Wu[e.state] || zt(e.state);
    if (r === "lock" || r === "valve") return zt(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : zt(a.problem);
    if (r === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ds.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + so(a.rang);
    const s = i();
    if (s != null && s.formatEntityState && !ao(t))
      try {
        return s.formatEntityState(e);
      } catch {
      }
    const d = Number(e.state);
    if (e.state !== "" && Number.isFinite(d)) {
      const u = Math.abs(d) >= 100 ? 0 : Math.abs(d) >= 10 ? 1 : 2, m = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return d.toLocaleString(void 0, { maximumFractionDigits: u }) + m + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return zt(e.state);
  }
  const Bo = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Yr = Object.fromEntries(zm.map((t) => [t.id, t])), lr = {
    "mdi:lightbulb": "light",
    "mdi:lamps": "light",
    "mdi:power-plug": "plug",
    "mdi:thermostat": "thermostat",
    "mdi:home-thermometer": "thermostat",
    "mdi:thermometer": "temperature",
    "mdi:water": "humidity",
    "mdi:water-percent": "humidity",
    "mdi:fan": "fan",
    "mdi:blinds-horizontal": "blinds",
    "mdi:blinds-horizontal-closed": "blinds",
    "mdi:roller-shade": "blinds",
    "mdi:roller-shade-closed": "blinds",
    "mdi:window-shutter": "blinds",
    "mdi:curtains": "blinds",
    "mdi:curtains-closed": "blinds",
    "mdi:lock": "lock",
    "mdi:door-open": "door",
    "mdi:door": "door",
    "mdi:window-open": "window",
    "mdi:window-closed": "window",
    "mdi:motion-sensor": "motion",
    "mdi:account": "person",
    "mdi:account-multiple": "person",
    "mdi:cctv": "camera",
    "mdi:doorbell": "camera",
    "mdi:speaker": "speaker",
    "mdi:multimedia": "speaker",
    "mdi:television": "tv",
    "mdi:robot-vacuum": "vacuum",
    "mdi:lightning-bolt": "energy",
    "mdi:flash": "energy",
    "mdi:home-lightning-bolt": "energy",
    "mdi:white-balance-sunny": "sun",
    "mdi:solar-power-variant": "sun",
    "mdi:security": "alarm",
    "mdi:shield-home": "alarm",
    "mdi:home": "home"
  }, Zs = (t) => {
    var r;
    const e = t.entity_id.split(".")[0], a = (r = t.attributes) == null ? void 0 : r.device_class;
    return e === "light" ? "light" : e === "switch" ? "plug" : e === "climate" ? "thermostat" : e === "fan" ? "fan" : e === "cover" ? ["door", "garage", "gate"].includes(a) ? "door" : a === "window" ? "window" : "blinds" : e === "lock" ? "lock" : e === "camera" ? "camera" : e === "media_player" ? a === "tv" ? "tv" : "speaker" : e === "vacuum" ? "vacuum" : e === "alarm_control_panel" ? "alarm" : e === "person" ? "person" : e === "sun" ? "sun" : e === "binary_sensor" ? { door: "door", garage_door: "door", opening: "door", window: "window", motion: "motion", occupancy: "motion", presence: "motion", moisture: "humidity" }[a] || null : e === "sensor" && { temperature: "temperature", humidity: "humidity", moisture: "humidity", power: "energy", energy: "energy", illuminance: "sun" }[a] || null;
  }, Zr = (t, e) => {
    var a, r, s, d;
    return e ? lr[e] || null : !t || (a = t.attributes) != null && a.icon || (d = (s = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : s[t.entity_id]) != null && d.icon ? null : Zs(t);
  };
  let Kr = 0;
  function lo(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var m;
      const d = M[s.dataset.iconFor], p = s.dataset.iconName || "", u = Zr(d, p);
      if (u) {
        (s.dataset.hc !== u || !s.querySelector(":scope>svg.hcGlyph")) && (s.innerHTML = $m(Yr[u], 24, "hcg" + ++Kr).replace("<svg ", '<svg class="hcGlyph" '), s.dataset.hc = u);
        return;
      }
      if (s.dataset.hc && (delete s.dataset.hc, s.textContent = ""), customElements.get("ha-state-icon") && d && !p) {
        let k = s.firstElementChild;
        (!k || k.localName !== "ha-state-icon") && (s.textContent = "", k = document.createElement("ha-state-icon"), s.appendChild(k)), k.hass = e, k.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let k = s.firstElementChild;
        (!k || k.localName !== "ha-icon") && (s.textContent = "", k = document.createElement("ha-icon"), s.appendChild(k)), k.icon = p || ((m = d == null ? void 0 : d.attributes) == null ? void 0 : m.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || gt(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Xr), (r = t.classList) != null && r.contains("tfIcon") && Xr(t), dr();
  }
  const cr = /* @__PURE__ */ new Map();
  function Xr(t) {
    var d, p, u;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), r = { backgroundColor: a.backgroundColor, color: a.color }, s = cr.get(e);
    cr.set(e, r), !(!s || s.backgroundColor === r.backgroundColor && s.color === r.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([s, r], { duration: Pe.warp.cdur, delay: Pe.warp.cdelay, easing: Re[Pe.warp.ease], fill: "backwards" });
  }
  const ln = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", Vi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Wi(t) {
    var E, $, B, F, D, X, C;
    const e = t.localName === "svg" ? t : Vi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((V) => !V.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (E = t.closest(".tfIcon")) == null ? void 0 : E.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const s = r + "|" + a.map((V) => V.getAttribute("d") || V.localName).join("|");
    if (t.dataset.fitted === s) return !0;
    let d = 1 / 0, p = 1 / 0, u = -1 / 0, m = -1 / 0;
    for (const V of a) {
      const wt = V.getBBox(), Lt = getComputedStyle(V), Pt = Lt.stroke !== "none" ? (parseFloat(Lt.strokeWidth) || 0) / 2 : 0;
      if (!wt.width && !wt.height) continue;
      const _t = (D = (F = (B = ($ = V.transform) == null ? void 0 : $.baseVal) == null ? void 0 : B.consolidate) == null ? void 0 : F.call(B)) == null ? void 0 : D.matrix, lt = _t ? (() => {
        const xt = [[wt.x, wt.y], [wt.x + wt.width, wt.y], [wt.x, wt.y + wt.height], [wt.x + wt.width, wt.y + wt.height]].map(([he, ye]) => [_t.a * he + _t.c * ye + _t.e, _t.b * he + _t.d * ye + _t.f]), $t = xt.map((he) => he[0]), fe = xt.map((he) => he[1]);
        return { x: Math.min(...$t), y: Math.min(...fe), width: Math.max(...$t) - Math.min(...$t), height: Math.max(...fe) - Math.min(...fe) };
      })() : wt;
      d = Math.min(d, lt.x - Pt), p = Math.min(p, lt.y - Pt), u = Math.max(u, lt.x + lt.width + Pt), m = Math.max(m, lt.y + lt.height + Pt);
    }
    if (!(u > d)) return !1;
    const k = (C = (X = e.viewBox) == null ? void 0 : X.baseVal) != null && C.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, L = r > 40 ? r * (26 / 40) : r - 14, x = L * k.width / Math.max(u - d, m - p), H = x / k.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((k.x + k.width / 2 - (d + u) / 2) * H).toFixed(2) + "px " + ((k.y + k.height / 2 - (p + m) / 2) * H).toFixed(2) + "px", t.dataset.fitted = s, !0;
  }
  let Po = 0;
  function Ro(t = 0) {
    clearTimeout(Po), [...o.querySelectorAll(ln)].filter((a) => !Wi(a)).length && t < 5 && (Po = setTimeout(() => Ro(t + 1), 300));
  }
  function dr() {
    clearTimeout(Po), Po = setTimeout(() => Ro(), 60);
  }
  const Ho = (t) => {
    var e, a, r;
    return t.startsWith("light.") && M[t] && !Yt(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, we = (t, e, a) => (e = e || Ho(t), ' data-icon-for="' + j(t) + '"' + (e ? ' data-icon-name="' + j(e) + '"' : "") + (a ? ' data-letter="' + j(a) + '"' : "")), Ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Yt(t).rang ? "mdi:doorbell" : "", Nt = (t, e, a, r) => j([t, e, a, r ? JSON.stringify(r) : ""].join("|")), pr = (t) => j(JSON.stringify(t));
  function qe(t) {
    const e = j(gt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + j(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + we(t, Ea(t)) + '></div><div><div class="activityRowName">' + j(gt(t)) + '</div><div class="activityRowMeta">' + j(Oe(t)) + "</div></div></div>";
  }
  const cn = (t, e, a) => '<div class="activityRow" aria-label="' + j(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + we("", a, t) + '></div><div><div class="activityRowName">' + j(t) + '</div><div class="activityRowMeta">' + j(e) + "</div></div></div>";
  function dn(t, e, a, r, s = "", d = null, p = "") {
    return '<section class="card tfCard' + (p ? " " + p : "") + '" data-tf data-k="' + j(t) + '" style="order:' + e + '" aria-label="' + j(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + j(d) + '" aria-label="' + j(a + (M[d] ? ", " + Oe(d) : "") + ". More info") + '">' + j(a) + "</button>" : '<div class="activityTitle">' + j(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + s + "</section>";
  }
  function Jr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((s) => qe(s));
    return t.power != null && r.push(cn("Power now", Bo(t.power), "mdi:flash")), dn(a, e, "Readings", r);
  }
  function En(t, e) {
    var u;
    const a = "energy:" + t.id, [r, s] = [t.solar.find((m) => m.endsWith("_power")), t.solar.find((m) => m.endsWith("_today"))], d = [r, s].filter(Boolean).map((m) => qe(m)), p = Number(((u = M[r]) == null ? void 0 : u.state) || 0) * 1e3;
    return jt.grid && (d.push(qe(jt.grid)), d.push(cn("House use", Bo(p + Number(M[jt.grid].state)), "mdi:home-lightning-bolt"))), dn(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ji = (t, e) => dn("plant:" + t.id, e, gt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function ur(t, e, a, r, s, d, p = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), m = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + j(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + m + '"' + (s ? ' aria-valuetext="' + j(s) + '"' : "") + ' data-drag="' + j(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (d ? u == null ? "" : '<b style="left:' + m + '%"></b>' : '<i style="width:' + m + '%"></i>') + "</div>";
  }
  const Bn = "homecore-house-last-bright", co = (() => {
    try {
      return JSON.parse(Ve.get(Bn)) || {};
    } catch {
      return {};
    }
  })();
  let fr = 0;
  const Pn = (t, e) => {
    !e || co[t] === e || (co[t] = e, clearTimeout(fr), fr = setTimeout(() => Ve.set(Bn, JSON.stringify(co)), 500));
  }, ha = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + j(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + j(t.toLowerCase()) + '">' + _u.down + "</button><output>" + j(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + j(t.toLowerCase()) + '">' + _u.up + "</button></div>", Ge = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + j(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + j(r.aria) + '"' : "") + ">" + (r.html || j(r.label)) + "</button>").join("") + "</div>", Qr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ti = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ei = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + j(gt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + j(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Qr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ti(e) + '">' + Math.round(e) + "%</output></div>";
  function hr(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, s) => {
      r.firstElementChild.setAttribute("style", Qr(e, s)), r.lastElementChild.classList.toggle("lit", e >= (s + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ti(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const zi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + j(gt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + j(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ks = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + j(gt(t)) + '">' + [
    be(t, Du) && ["open", "Open", "open_cover", e >= 100 && !a],
    be(t, Bu) && ["stop", "Stop", "stop_cover", !1],
    be(t, Eu) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, s, d, p]) => '<button type="button" data-act="' + Nt("cover", d, t) + '" aria-label="' + s + '"' + (p ? " disabled" : "") + ">" + xg[r] + "</button>").join("") + "</div>", xa = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + j(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + j(e.art) + '&quot;)"' : we(t, e.icon)) + "></button>", Ya = (t) => '<button class="tfName" type="button" data-more="' + j(t) + '" aria-label="' + j(gt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + j(gt(t)) + '</span><span class="activityRowMeta">' + j(Oe(t)) + "</span></button>";
  function pn(t, e = !1, a = null) {
    const r = w(t), s = t.startsWith("light.") && mr(t) && !(a && Nn(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), p = s ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + j(t) + '"></div>'] : r.sections.map((u, m) => u && (!d || d.includes((r.parts || [])[m])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (s ? " tfDac" : "") + (r.on ? " on" : "") + (!s && !p.length ? " tfHeadOnly" : "") + '" data-k="' + j(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Do(t) + '><div class="tfActionHead">' + xa(t, r) + Ya(t) + "</div>" + p.join("") + "</div>";
  }
  const Za = "dual-controller-v3", Gi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ka = null;
  async function un() {
    if (Ka || customElements.get(Za)) return;
    Ka = "loading";
    const t = await Promise.resolve().then(() => K({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Za), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Za)) return;
    const a = Object.assign(document.createElement("script"), { src: Gi });
    a.onerror = () => {
      Ka = "failed", Q();
    }, document.head.appendChild(a);
  }
  const ta = /* @__PURE__ */ new Map(), Rn = (t) => (Jt.lightStyles[t] || Jt.lights) === "dac", ai = () => Jt.lights === "dac" || Object.values(Jt.lightStyles).includes("dac");
  function mr(t) {
    return Rn(t) && !!customElements.get(Za);
  }
  const fn = (t) => Jt.lightPads[t] || Jt.dacPad, oi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (e, a, r, ...s) => t.callService(e, ...bp(e, a, r), ...s)
    };
  }, $e = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", $i = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: $e })).dataset.tf = "");
  }, ni = /* @__PURE__ */ new Map(), Ui = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ni.set(a.dataset.dac, a.offsetHeight));
  }));
  function Hn(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = ta.get(a);
      if (!r) {
        const s = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Za), r.setConfig({ type: "custom:" + Za, entity: s, pad: fn(s), tap_action: { action: "none" } }), ta.set(a, r);
      }
      r.hass = oi(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && ni.has(a) && (e.style.minHeight = ni.get(a) + "px"), Ui.observe(r), $i(r);
    });
  }
  function c() {
    const t = oi();
    ta.forEach((e, a) => {
      e.isConnected ? e.hass = t : ta.delete(a);
    });
  }
  customElements.whenDefined(Za).then(() => {
    g && (S != null && S.querySelector("[data-tf]")) && Yd(Na);
  });
  const h = (t, e, a) => Wt.has(t + "|" + e) ? Wt.get(t + "|" + e) : a;
  function w(t) {
    var d, p;
    const e = M[t], a = e.attributes, r = t.split(".")[0], s = (u, m) => ({ act: Nt(u, "toggle", t), label: m });
    if (r === "light") {
      const u = e.state === "on", m = Ln(t), [k, L] = Tn(t), x = h("bright", t, Ga(e));
      u && Pn(t, Ga(e));
      const H = h("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), E = h("hue", t, u && Ao.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: s("light", "Turn " + gt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Eo(t) && ur("bright", t, x / 100, gt(t) + " brightness", x + "%", !1, u ? null : co[t] ?? null),
        m.includes("color_temp") && ur("ct", t, H == null ? null : (H - k) / (L - k), gt(t) + " warm to cool", H == null ? "" : Math.round(H) + " kelvin", !0),
        m.some(($) => Ao.includes($)) && ur("hue", t, E == null ? null : E / 360, gt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const u = a.target_temp_step || 0.5, m = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: s("climate", "Turn " + gt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(m) && ha("Target temperature", Fe(m) + " °C", Nt("climate", "set_temperature", t, { temperature: m - u }), Nt("climate", "set_temperature", t, { temperature: m + u })),
        Ge("tfSeg", "Mode", (a.hvac_modes || []).map((k) => ({ label: zt(k), act: Nt("climate", "set_hvac_mode", t, { hvac_mode: k }), pressed: e.state === k })))
      ] };
    }
    if (r === "cover") {
      const u = e.state === "opening" || e.state === "closing", m = e.state === "closed", k = Dn(t), L = Ur(t);
      return { on: !m, tone: "blue", icon: Pu[Mc(e)][m ? 1 : 0], button: s("cover", (m ? "Open " : "Close ") + gt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        be(t, Dc) && ei(t, k),
        L != null && zi(t, L),
        Ks(t, k, u)
      ] };
    }
    if (r === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: s("humidifier", "Turn " + gt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target humidity", u + "%", Nt("humidifier", "set_humidity", t, { humidity: u - 1 }), Nt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && Ge("tfSeg", "Mode", a.available_modes.map((m) => ({ label: zt(m), act: Nt("humidifier", "set_mode", t, { mode: m }), pressed: a.mode === m })))
      ] };
    }
    if (r === "media_player") {
      const u = e.state === "playing", m = e.state === "off" || e.state === "standby", k = h("vol", t, a.volume_level), L = m ? { act: Nt("media_player", be(t, vg) ? "turn_on" : "toggle", t), label: "Turn " + gt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Nt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + gt(t) } : { act: Nt("media_player", be(t, yg) ? "turn_off" : "toggle", t), label: "Turn " + gt(t) + " off" };
      return { on: !m, tone: "blue", art: !m && a.entity_picture ? a.entity_picture : null, button: L, parts: ["playback", "volume"], sections: m ? [] : [
        (be(t, Au) || be(t, Lu) || be(t, Cu) || be(t, Tu)) && Ge("tfSeg", "Playback", [
          { html: As.prev, aria: "Previous", act: Nt("media_player", "media_previous_track", t), disabled: !be(t, Au) },
          { html: u ? As.pause : As.play, aria: u ? "Pause" : "Play", act: Nt("media_player", "media_play_pause", t), disabled: !(be(t, Cu) || be(t, Tu)) },
          { html: As.next, aria: "Next", act: Nt("media_player", "media_next_track", t), disabled: !be(t, Lu) }
        ]),
        be(t, wg) && k != null && ur("vol", t, k, gt(t) + " volume", Math.round(k * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const u = e.state === "cleaning", m = a.rooms || [], k = (x) => m.includes(x) ? m.filter((H) => H !== x) : m.concat(x), L = Nt("vacuum", u ? "pause" : "start", t, ao(t) ? { rooms: m } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: L, label: (u ? "Pause " : "Start ") + gt(t) }, parts: ["controls", "rooms"], sections: [
        Ge("tfSeg", gt(t), [
          { label: u ? "Pause" : "Start", act: L },
          { label: "Dock", act: Nt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Nt("vacuum", "locate", t) }
        ]),
        ao(t) && Ge("tfChips", "Rooms to clean", jt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Nt("vacuum", "set_rooms", t, { rooms: k(x.name) }), pressed: m.includes(x.name) })))
      ] };
    }
    if (r === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Nt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + gt(t) }, parts: ["controls"], sections: [
        Ge("tfSeg", gt(t), [
          { label: "Lock", act: Nt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Nt("lock", "unlock", t), pressed: e.state === "unlocked" },
          be(t, qu) && { label: "Open", act: Nt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Nt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + gt(t) + ", away" : "Disarm " + gt(t) }, parts: ["controls"], sections: [
        Ge("tfSeg", gt(t), Vu.filter(([, , , m]) => !m || be(t, m)).map(([m, k, L]) => ({ label: k, act: Nt("alarm_control_panel", L, t), pressed: e.state === m })))
      ] };
    }
    if (r === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: s("valve", (u ? "Close " : "Open ") + gt(t)), parts: ["controls"], sections: [
        Ge("tfSeg", gt(t), [
          { label: "Open", act: Nt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Nt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (r === "water_heater") {
      const u = Number(a.temperature), m = a.target_temp_step || 1, k = e.state !== "off";
      return { on: k, tone: "heat", icon: "mdi:water-boiler", button: { act: Nt("water_heater", k ? "turn_off" : "turn_on", t), label: "Turn " + gt(t) + (k ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target temperature", u + " °C", Nt("water_heater", "set_temperature", t, { temperature: u - m }), Nt("water_heater", "set_temperature", t, { temperature: u + m })),
        ((p = a.operation_list) == null ? void 0 : p.length) && Ge("tfSeg", "Mode", a.operation_list.map((L) => ({ label: zt(L), act: Nt("water_heater", "set_operation_mode", t, { operation_mode: L }), pressed: (a.operation_mode || e.state) === L })))
      ] };
    }
    if (Ci.includes(r)) {
      const u = e.state === "on";
      return { on: u, button: s(r, "Turn " + gt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: gt(t) }, sections: [] };
  }
  const y = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function R(t) {
    var F;
    const e = (D) => t.readings.find((X) => Yt(X).device_class === D), a = e("temperature"), r = e("humidity"), s = (D) => {
      var X;
      return Number((X = M[D]) == null ? void 0 : X.state);
    }, d = (D) => t.actions.filter((X) => D.test(X)), p = t.lights.filter((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) === "on";
    }), u = d(/^cover\./), m = u.filter((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) !== "closed";
    }), k = [...new Set(u.map((D) => Mc(M[D])))], L = d(/^climate\./)[0], x = d(/^humidifier\./)[0], H = d(/^media_player\./), E = H.find((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) === "playing";
    }) || H.find((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) === "paused";
    }), $ = t.plugs.filter((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) === "on";
    }), B = [];
    if (a && Number.isFinite(s(a)) && B.push({ key: "temp", id: a, kind: "reading", icon: wo(a), label: "Temperature", value: Fe(s(a)) + "°" }), r && Number.isFinite(s(r)) && B.push({ key: "hum", id: r, kind: "reading", icon: wo(r), label: "Humidity", value: Math.round(s(r)) + "%" }), t.lights.length && B.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: wo("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? sr(p[0]) : "",
      acts: t.lights.map((D) => ["light", p.length ? "turn_off" : "turn_on", D]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const D = k.length === 1 ? kg[k[0]] : "covers", X = Math.round(u.reduce((C, V) => C + Ua(V), 0) / u.length);
      B.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: m.length ? io([146, 107, 199]) : "",
        icon: wo("", ((F = Pu[k[0]]) == null ? void 0 : F[m.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(D),
        value: X <= 0 ? "Closed" : X >= 100 ? "Open" : X + "% open",
        short: X <= 0 ? "Closed" : X + "%",
        on: m.length > 0,
        acts: u.map((C) => ["cover", m.length ? "close_cover" : "open_cover", C]),
        aria: (m.length ? "Close the " : "Open the ") + D + " in " + t.name
      });
    }
    if (L) {
      const D = Yt(L), X = M[L].state === "off";
      B.push({
        key: "climate",
        kind: "control",
        tone: D.hvac_action === "cooling" ? "cool" : "heat",
        light: To(L) ? io(To(L)) : "",
        icon: wo(L),
        label: gt(L),
        value: X ? "Off" : zt(D.hvac_action || M[L].state) + " · " + y(D.temperature),
        short: X ? "Off" : y(D.temperature),
        on: !X,
        acts: [["climate", "toggle", L]],
        aria: "Turn " + gt(L) + (X ? " on" : " off")
      });
    }
    if (x) {
      const D = M[x].state === "on";
      B.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: D ? io([33, 150, 243]) : "",
        icon: wo("", "mdi:air-humidifier"),
        label: gt(x),
        value: D ? "On · " + Yt(x).humidity + "%" : "Off",
        short: D ? Yt(x).humidity + "%" : "Off",
        on: D,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + gt(x) + (D ? " off" : " on")
      });
    }
    if (H.length) {
      const D = E || H[0], X = M[D], C = X.state === "playing";
      B.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: To(D) ? io(To(D)) : "",
        icon: wo(D),
        label: gt(D),
        value: Oe(D),
        short: C ? "Playing" : X.state === "paused" ? "Paused" : zt(X.state),
        on: C,
        acts: [["media_player", X.state === "playing" || X.state === "paused" ? "media_play_pause" : "toggle", D]],
        aria: (C ? "Pause " : "Play ") + gt(D)
      });
    }
    return t.plugs.length && B.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: $.length ? io([255, 193, 7]) : "",
      icon: wo("", "mdi:power-plug"),
      label: "Plugs",
      value: $.length ? $.length + " of " + t.plugs.length + " on" : "All off",
      short: $.length ? $.length + " on" : "Off",
      on: $.length > 0,
      acts: t.plugs.map((D) => ["switch", $.length ? "turn_off" : "turn_on", D]),
      aria: ($.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((D) => B.push(Yt(D).device_class === "moisture" ? { key: "alert:" + D, kind: "alert", icon: wo(D), label: "Water leak" } : { key: "note:" + D, kind: "note", icon: wo(D), label: gt(D) + " " + Oe(D).toLowerCase() })), B;
  }
  const W = (t, e) => {
    const a = (r) => t.actions.filter((s) => r.test(s));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const r = a(/^media_player\./);
        return [r.find((s) => {
          var d;
          return ((d = M[s]) == null ? void 0 : d.state) === "playing";
        }) || r.find((s) => {
          var d;
          return ((d = M[s]) == null ? void 0 : d.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function Z(t, e, a = !1) {
    const r = e.find((u) => u.key === "lights"), s = !!(r != null && r.on), d = "", p = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (s ? " on" : "") + '"' + d + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (s ? " on" : "") + '" type="button"' + d + ' data-acts="' + pr(r.acts) + '" aria-label="' + j(r.aria) + '" aria-pressed="' + s + '">' + p + "</button>";
  }
  const J = (t) => t.readings.find((e) => Yt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, U = (t, e) => {
    const a = gt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function at(t) {
    const e = M[t], a = Yt(t), r = t.split(".")[0], s = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(s)) {
      if (a.device_class === "temperature") return { text: y(s) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(s) + "%" } : { text: Fe(s, Number.isInteger(s) ? 0 : 1), unit: d };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: y(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Eo(t) ? Ga(e) + "%" : "On" };
    if (r === "cover") {
      const d = Ua(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Oe(t) };
  }
  const rt = (t, e, a) => {
    const r = a.find((u) => u.key === "temp"), s = a.find((u) => u.key === "hum"), d = Yt(e), p = M[e].state === "off";
    return e.startsWith("climate.") ? [U(t, e), p ? "Off" : zt(d.hvac_action || M[e].state) + (d.temperature != null ? " · " + y(d.temperature) : ""), s && s.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && U(t, e), r && r.id !== e && r.value, s && s.id !== e && s.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function vt(t) {
    const e = t.id === ot, a = R(t), r = J(t), s = r && at(r), d = [...a.filter((p) => p.kind === "control"), ...a.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + j(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + j(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ve(t, null, ' data-cols="2" data-rows="' + Nn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Z(t, a, !0) + '<span class="tfACName">' + j(t.name) + '</span></div><span class="tfACMain">' + (s ? j(s.text + (s.unit ? " " + s.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Bt = [];
  const Et = (t) => {
    const e = Mt.areaOrder || [], a = (r) => {
      const s = e.indexOf(r.id);
      return s < 0 ? e.length + t.indexOf(r) : s;
    };
    return [...t].sort((r, s) => a(r) - a(s));
  }, At = () => {
    var e;
    const t = new Set(((e = Mt.dash) == null ? void 0 : e.areasOff) || []);
    return Et(Bt).filter((a) => !t.has(a.id));
  }, Gt = io([255, 162, 75]), Rt = (t) => {
    const e = t.id === ot;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + j(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + j(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, pt = (t) => {
    var r;
    const e = At();
    e.some((s) => s.id === ot) || (ot = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((s) => s.id === ot);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(vt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? ve(a, null, ' data-cols="2" data-rows="' + Nn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Rt).join("") + "</div></div></div>";
  }, Ot = (t) => t.startsWith("room:"), qt = (t) => Bt.find((e) => "room:" + e.id === t);
  function ve(t, e, a = "") {
    const r = R(t), s = J(t), d = s && at(s), p = s ? rt(t, s, r) : "", u = d ? d.text + (d.unit ? " " + d.unit : "") : "", m = (D) => {
      const X = W(t, D.key);
      return X.length === 1 ? X[0] : "group:" + t.id + ":" + D.key;
    }, k = r.filter((D) => D.kind === "control").slice(0, 4), L = (D) => D.on && D.light ? ' data-light style="' + D.light + '"' : "", x = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + L(D) + ' data-acts="' + pr(D.acts) + '" aria-label="' + j(D.aria) + '" aria-pressed="' + D.on + '">' + D.icon + "</button>", H = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + L(D) + ' data-more="' + j(m(D)) + '" aria-label="' + j(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '">' + D.icon + "</button>", E = k.map(H), $ = k.map((D) => '<div class="tfRoomDev' + (D.on ? " on" : "") + '" data-more="' + j(m(D)) + '">' + (D.acts ? x(D) : H(D)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + j(m(D)) + '" aria-label="' + j(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '"><span class="activityRowName">' + j(D.label) + '</span><span class="activityRowMeta">' + j(D.value) + "</span></button></div>"), B = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", F = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + j(t.id) + '" aria-label="Open ' + j(t.name) + '">' + B + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + j(e) + '"' : "") + a + ' data-go="' + j(t.id) + '"><div class="tfActionHead">' + F + '<button class="tfName" type="button" data-go="' + j(t.id) + '" aria-label="Open ' + j(t.name) + '"><span class="activityRowName">' + j(t.name) + "</span>" + (u || p ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + j(u) + (p ? " · " : "") + "</span>" : "") + j(p) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + j(s) + '" aria-label="' + j(gt(s) + ", " + Oe(s) + ". More info") + '"><span class="tfRoomBig">' + j(u) + "</span>" + (p ? '<span class="tfRoomSub">' + j(p) + "</span>" : "") + "</button>" : "") + (E.length ? '<div class="tfRoomDevices">' + E.join("") + '</div><div class="tfRoomHeads">' + $.join("") + "</div>" : "") + "</div>";
  }
  const Dt = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], re = (t, e, a) => t + " " + (t === 1 ? e : a), Ut = () => (Mt.favourites ?? _n.favorite_entities ?? []).filter((t) => M[t]);
  function ka() {
    if (!or) {
      const e = Object.entries(Cn).sort((r, s) => s[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      or = [.../* @__PURE__ */ new Set([...Bi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = Ut();
    return or.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let po = !1;
  const ri = 6;
  function gr() {
    if (!po || Mt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(M).find((r) => ao(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    Mt = { ...Mt, favourites: [.../* @__PURE__ */ new Set([...Mt.favourites ?? _n.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ri), favSeeded: !0 }, Ta();
  }
  const No = () => Mt.suggest ?? !_n.hide_suggested_entities;
  function ee() {
    const t = new Set(v ? [] : Mt.favHidden || []), e = Ut().filter((s) => !t.has(s)), a = No() ? ka().filter((s) => !t.has(s) && ol(s)) : [], r = Math.max(ri, e.length);
    return [...e, ...a].slice(0, v && !is() ? r : Math.min(Bg, r));
  }
  const Oo = (t) => {
    const e = Ut().includes(t);
    return '<button class="tfStar" type="button" data-star="' + j(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + j(gt(t)) + '">' + Dg(e) + "</button>";
  };
  function uo(t, { area: e = !1, star: a = !1, plain: r = !1, say: s = null, alert: d = !1 } = {}) {
    var $, B, F, D, X, C;
    const p = r && ((X = ($ = i()) == null ? void 0 : $.devices) == null ? void 0 : X[(D = (F = (B = i()) == null ? void 0 : B.entities) == null ? void 0 : F[t]) == null ? void 0 : D.device_id]), u = p && (p.name_by_user || p.name) || gt(t), m = t.split(".")[0], k = !r && Rr.includes(m) ? w(t) : null, L = k ? k.on : ["on", "open", "playing"].includes((C = M[t]) == null ? void 0 : C.state), x = r ? null : k ? k.button : Ci.includes(m) ? { act: Nt(m, "toggle", t), label: "Turn " + gt(t) + (L ? " off" : " on") } : m === "scene" || m === "script" ? { act: Nt(m, "turn_on", t), label: "Run " + gt(t) } : null, H = (s ?? Oe(t)) + (e && Se.get(t) ? " · " + Se.get(t) : ""), E = (k == null ? void 0 : k.icon) || Ea(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (L ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + j((e ? "fav:" : "row:") + t) + '" data-tone="' + (m === "light" ? "light" : (k == null ? void 0 : k.tone) || "blue") + '"' + Do(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + j(x.label) + '"' + we(t, E) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + we(t, E) + "></div>") + '<button class="tfName" type="button" data-more="' + j(t) + '" aria-label="' + j(u + ", " + H + ". More info") + '"><span class="activityRowName">' + j(u) + '</span><span class="activityRowMeta">' + j(H) + "</span></button>" + (a ? Oo(t) : "") + "</div>";
  }
  const Io = () => {
    var t;
    return M[(t = Mt.sources) == null ? void 0 : t.weather] ? Mt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function ii() {
    var a;
    const t = (r) => Object.keys(M).filter((s) => s.startsWith("binary_sensor.") && r.includes(Yt(s).device_class));
    return ((a = qr.alert_entities) != null && a.length ? qr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ds).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Yi() {
    const t = Object.keys(_i), e = /* @__PURE__ */ new Set(), a = [];
    (_n.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const r = ea().sumOrder || [], s = (d) => d.type === "summary" && r.includes(d.key) ? r.indexOf(d.key) : r.length;
    return r.length ? a.map((d, p) => [d, p]).sort((d, p) => s(d[0]) - s(p[0]) || d[1] - p[1]).map(([d]) => d) : a;
  }
  function br() {
    var F;
    const t = ((F = i()) == null ? void 0 : F.entities) || {}, e = (D) => Yt(D).device_class, a = Object.keys(M).filter((D) => D.startsWith("sensor.") && e(D) === "battery" || D.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(D))), r = jt.rooms.flatMap((D) => D.plants.map((X) => X.id));
    if (!a.length && !r.length) return null;
    const s = (D) => {
      var C;
      const X = (C = t[D]) == null ? void 0 : C.device_id;
      return !!X && Object.keys(M).some((V) => {
        var wt;
        return V.startsWith("binary_sensor.") && ((wt = t[V]) == null ? void 0 : wt.device_id) === X && e(V) === "battery_charging" && M[V].state === "on";
      });
    }, d = (D) => D.startsWith("vacuum.") ? Yt(D).battery_level <= 20 && M[D].state !== "docked" : D.startsWith("binary_sensor.") ? e(D) === "battery" && M[D].state === "on" : parseFloat(M[D].state) <= 20 && !s(D), p = [...a, ...jt.vacuums].filter((D) => M[D] && d(D)), u = [...a.filter((D) => e(D) === "problem" && M[D].state === "on"), ...r.filter((D) => {
      var X;
      return ((X = M[D]) == null ? void 0 : X.state) === "problem";
    })], m = a.filter((D) => M[D].state === "unavailable"), k = [.../* @__PURE__ */ new Set([...p, ...u, ...m])], L = (D) => {
      const X = parseFloat(M[D].state);
      return e(D) === "battery" && Number.isFinite(X) ? X : 101;
    }, x = [...r, ...jt.vacuums, ...[...a].sort((D, X) => L(D) - L(X))].filter((D) => M[D] && !k.includes(D)), H = /* @__PURE__ */ new Map();
    x.forEach((D) => {
      var C;
      const X = ((C = jt.areaOf) == null ? void 0 : C.call(jt, D)) || "";
      H.set(X, [...H.get(X) || [], D]);
    });
    const E = (D) => {
      const X = jt.rooms.findIndex((C) => C.id === D);
      return D === "" ? 1 / 0 : X < 0 ? jt.rooms.length : X;
    }, $ = [...H.keys()].sort((D, X) => E(D) - E(X)), B = (D) => {
      var X, C, V, wt;
      return ((X = jt.rooms.find((Lt) => Lt.id === D)) == null ? void 0 : X.name) || ((wt = (V = (C = i()) == null ? void 0 : C.areas) == null ? void 0 : V[D]) == null ? void 0 : wt.name) || D;
    };
    return {
      value: [p.length && re(p.length, "low battery", "low batteries"), u.length && re(u.length, "problem", "problems"), m.length && re(m.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: k, alert: !0 }, ...$.map((D) => ({ name: D ? B(D) : $.length > 1 ? "Other devices" : "Devices", ids: H.get(D) }))].filter((D) => D.ids.length)
    };
  }
  const ea = () => v ? Mt.home || {} : Mt, Xs = (t) => Ru.includes(t) ? (ea().shownSums || []).includes(t) : !(ea().hiddenSums || []).includes(t);
  function Bf(t, e, a) {
    const r = t.flatMap((H) => a(H, /^cover\./)), s = r.filter((H) => {
      var E;
      return ["open", "opening"].includes((E = M[H]) == null ? void 0 : E.state);
    }).length, d = Object.keys(M).filter((H) => H.startsWith("person.")), p = d.filter((H) => {
      var E;
      return ((E = M[H]) == null ? void 0 : E.state) === "home";
    }).length, u = jt.security.openings.filter((H) => M[H]), m = u.filter((H) => M[H].state === "on").length, k = Object.keys(M).filter((H) => H.startsWith("binary_sensor.") && Yt(H).device_class === "moisture"), L = k.filter((H) => M[H].state === "on").length, x = jt.vacuums.filter((H) => M[H]);
    return {
      covers: r.length && { value: s ? s + " open" : "All closed", groups: e((H) => a(H, /^cover\./)) },
      people: d.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: u.length && { value: m ? m + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: k.length && { value: L ? re(L, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: k }] },
      vacuum: x.length && { value: zt(M[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function Zi(t = !1) {
    var _t;
    const e = jt.rooms, a = jt.security, r = (lt, xt) => lt.actions.filter(($t) => xt.test($t)), s = (lt) => e.map((xt) => ({ name: xt.name, ids: lt(xt) })).filter((xt) => xt.ids.length), d = e.flatMap((lt) => lt.lights), p = d.filter((lt) => {
      var xt;
      return ((xt = M[lt]) == null ? void 0 : xt.state) === "on";
    }).length, u = e.map((lt) => lt.readings.find((xt) => Yt(xt).device_class === "temperature")).filter(Boolean).map((lt) => Number(M[lt].state)).filter(Number.isFinite), [m, k] = [Fe(Math.min(...u)), Fe(Math.max(...u))], L = e.flatMap((lt) => r(lt, /^media_player\./)), x = L.filter((lt) => {
      var xt;
      return ((xt = M[lt]) == null ? void 0 : xt.state) === "playing";
    }).length, H = ii(), E = H.filter((lt) => lt.severity === "warning" && lt.on).length, $ = a.locks.filter((lt) => {
      var xt;
      return ["unlocked", "jammed", "open"].includes((xt = M[lt]) == null ? void 0 : xt.state);
    }).length, B = a.alarms.filter((lt) => {
      var xt;
      return ((xt = M[lt]) == null ? void 0 : xt.state) === "disarmed";
    }).length, F = E ? re(E, "warning", "warnings") : null, D = $ ? $ + " unlocked" : B ? B + " disarmed" : F ? null : "All secure", X = br(), C = e.flatMap((lt) => lt.solar), V = C.find((lt) => lt.endsWith("_power")), wt = {
      light: d.length && { value: p ? p + " on" : "All off", groups: s((lt) => lt.lights) },
      climate: u.length && { value: m === k ? m + "°" : m + " - " + k + "°", groups: s((lt) => [...lt.readings.filter((xt) => ["temperature", "humidity"].includes(Yt(xt).device_class)), ...r(lt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [F, D].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((lt) => lt.ids.length) },
      media_players: L.length && { value: x ? x + " playing" : "No media playing", groups: s((lt) => r(lt, /^media_player\./)) },
      maintenance: X,
      energy: jt.grid && { value: Bo(Number(((_t = M[V]) == null ? void 0 : _t.state) || 0) * 1e3 + Number(M[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, jt.grid] }] },
      ...Bf(e, s, r)
    }, Lt = [], Pt = H.filter((lt) => lt.severity !== "warning" && lt.on);
    return Pt.length && Lt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: re(Pt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Pt.map((lt) => lt.entity) }] }), Yi().forEach((lt) => {
      lt.type !== "summary" ? Lt.push({ key: "path:" + lt.path, name: lt.label || lt.path, icon: lt.icon || "mdi:link-variant", colour: "", value: "" }) : !lt.hidden && wt[lt.key] && (t || Xs(lt.key)) && Lt.push({ key: lt.key, ..._i[lt.key], ...wt[lt.key] });
    }), Lt;
  }
  const Pf = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + j(t.key) + '" data-k="sum:' + j(t.key) + '" aria-label="' + j(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + qi() + '"' : t.colour && $a(t.colour) ? ' style="' + $a(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Us : "") + '<div class="tfIcon" aria-hidden="true"' + we(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + j(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + j(t.value) + "</div>" : "") + "</div></div>";
  function Gc(t) {
    const e = Ut();
    Mt = { ...Mt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (Mt.favHidden || []).filter((a) => a !== t) }, Ta(), Ee();
  }
  function $c(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Uc(t, e) {
    if (t.startsWith("path:")) {
      $c(t.slice(5));
      return;
    }
    ps("summary:" + t, e);
  }
  async function Rf() {
    const t = (p) => Promise.resolve().then(() => K(p)).catch(() => null), [e, a, r, s] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Hu }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    Mt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded, favsTitle: d.favsTitle, areaOrder: d.areaOrder }, _n = (a == null ? void 0 : a.value) || {}, qr = (r == null ? void 0 : r.value) || {}, Bi = Array.isArray(s == null ? void 0 : s.entities) ? s.entities : [], or = null, Object.keys(M).length && Ee(), Hf(), po = !0, gr();
  }
  const Yc = "HomeCore";
  async function Hf() {
    var r, s, d;
    const t = location.pathname.split("/")[1], e = Mt.named || [];
    if (!((s = (r = i()) == null ? void 0 : r.user) != null && s.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      Mt = { ...Mt, named: [...e, t] }, Ta();
    };
    try {
      const p = (d = await K({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((k) => k.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === Yc) {
        a();
        return;
      }
      const u = await K({ type: "lovelace/config", url_path: t }), m = ((u == null ? void 0 : u.views) || []).flatMap((k) => [...k.cards || [], ...(k.sections || []).flatMap((L) => L.cards || [])]);
      if (!m.length || !m.every((k) => (k == null ? void 0 : k.type) === "custom:homecore-card" && !k.page)) return;
      await K({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Yc }), a();
    } catch {
    }
  }
  let si = null, Js = 0, Qs = !1;
  const Zc = (t) => {
    const e = t.split(".")[0], a = Yt(t).device_class;
    return Eg.includes(e) && (e !== "binary_sensor" || Ds.includes(a) || !!ju[a]);
  }, tl = (t) => t.startsWith("binary_sensor.") ? ju[Yt(t).device_class] : null;
  async function Nf() {
    var t;
    if (!(Qs || Date.now() - Js < 30 * 1e3)) {
      Qs = !0, Js = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Zc), a = e.length ? await K({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        si = Array.isArray(a) ? a.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        si = null;
      }
      Qs = !1, Ee();
    }
  }
  function Of() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (s) => {
      if (!M[s.entity_id] || !Zc(s.entity_id) || !ol(s.entity_id) || ["unavailable", "unknown"].includes(s.state)) return;
      if (tl(s.entity_id)) {
        const p = e.get(s.entity_id);
        s.state === "on" ? (!p || s.when > p.when + 1) && e.set(s.entity_id, { ...s, alarm: !0, cleared: null }) : p && !p.cleared && s.when > p.when && (p.cleared = s.when);
        return;
      }
      const d = t.get(s.entity_id);
      (!d || s.when > d.when + 1) && t.set(s.entity_id, s);
    };
    [...si || []].sort((s, d) => s.when - d.when).forEach(a);
    const r = si ? Js / 1e3 - 5 : 0;
    return Object.keys(M).forEach((s) => {
      var u;
      const d = M[s], p = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      p > r && a({ entity_id: s, state: d.state, when: p, context_user_id: (u = d.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((s, d) => d.when - s.when).slice(0, Pg);
  }
  function If(t) {
    var r;
    const e = t.context_user_id && Object.keys(M).find((s) => s.startsWith("person.") && Yt(s).user_id === t.context_user_id);
    if (e) return gt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Ff(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Wu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function qf(t) {
    const e = t.entity_id, a = t.alarm && tl(e), r = gt(e) + " " + (a ? a[0] : Ff(t)), s = a ? so(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + so(t.cleared * 1e3) : "") : [If(t), so(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + we(e, Ea(e)) + '></div><button class="tfName" type="button" data-more="' + j(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + j(r + ", " + s + ". More info") + '"><span class="activityRowName">' + j(r) + '</span><span class="activityRowMeta">' + j(s) + "</span></button></div>";
  }
  let Xa = null, Kc = 0;
  const Vf = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Xc() {
    var e;
    if (Date.now() - Kc < 5 * 60 * 1e3) return;
    Kc = Date.now();
    const t = [];
    try {
      const a = ((e = await K({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (s) => a.filter((d) => d.type === s).flatMap((d) => s === "grid" ? (d.flow_from || []).map((p) => p.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [s, d, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const u = await Promise.all(p.map((m) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: m, calendar: { period: "day" }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
        t.push({ key: s, name: d, id: p[0], ids: p, value: u.reduce((m, k) => m + k, 0), unit: Yt(p[0]).unit_of_measurement || (s === "gas" || s === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Xa = t, Ee();
  }
  let wr = null, Jc = [];
  function el() {
    var d;
    const t = Jc = Xa != null && Xa.length ? Xa : Vf.map(([p, u, m, k]) => {
      if (p === "solar") {
        const x = Object.keys(M).find((H) => H.endsWith("_solar_today") && !H.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (m = Number(M[x].state));
      }
      const L = "sensor.made_up_energy_" + p;
      return M[L] = { entity_id: L, state: String(m), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: k, state_class: "total_increasing" } }, { key: p, name: u, id: L, value: m, unit: k };
    });
    Tt.clear(), t.some((p) => p.id === wr) || (wr = t[0].id);
    const e = t.map((p) => {
      const u = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, m = Rg[p.key], k = p.id === wr;
      return Tt.set(p.id, { name: p.name, text: u, icon: m }), '<div class="activityRow tap' + (k ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + j(p.id) + '" aria-pressed="' + k + '" aria-label="' + j(p.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + we("", m, p.name) + '></div><div><div class="activityRowName">' + j(p.name) + '</div><div class="activityRowMeta">' + j(u) + "</div></div></div>";
    }), a = t.find((p) => p.id === wr), r = (((d = ce().opts.energy) == null ? void 0 : d.graph) || "above") === "below", s = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + j(a.id) + '" role="img" aria-label="' + j(a.name) + ', last 24 hours"></svg></div>';
    return dn("dash:energy", 0, "Energy today", e, s, Zi().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Qc(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === wr || (wr = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const s = r.dataset.energyPick === t;
      r.classList.toggle("picked", s), r.setAttribute("aria-pressed", String(s));
    }), a.dataset.graph = t, a.dataset.drawn = "", ya.set("dash:energy", el()), Vd(!0));
  }
  const td = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ed = /* @__PURE__ */ new Map();
  async function Wf(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), s = e.getMinutes() / 60, d = Array.from({ length: 24 }, (u, m) => m <= r ? 0 : null);
    if (!t.ids) {
      const u = td[t.key] || td.electricity, m = u.map((L, x) => x < r ? L : x === r ? L * s : 0), k = m.reduce((L, x) => L + x, 0) || 1;
      return d.map((L, x) => L == null ? null : t.value * m[x] / k);
    }
    const p = ed.get(t.id);
    if (p && p.day === a && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const u = await K({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((L) => ((u == null ? void 0 : u[L]) || []).forEach((x) => {
        const H = typeof x.start == "number" ? x.start : Date.parse(x.start), E = new Date(H).getHours();
        H >= a && E < r && (d[E] += Number(x.change) || 0);
      }));
      const m = new Date(e).setMinutes(0, 0, 0), k = await Promise.all(t.ids.map((L) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: L, fixed_period: { start_time: new Date(m).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      d[r] = k.reduce((L, x) => L + x, 0);
    } catch {
    }
    return ed.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function jf(t, e) {
    const a = await Wf(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), s = Math.max(60, t.clientHeight || 130), d = 18, p = s - 18, u = r / 24, m = u * 0.72, k = (/* @__PURE__ */ new Date()).getHours(), L = a.map((F) => F ?? 0), x = Math.max(0, ...L), H = (F) => p - (x > 0 ? F / x * (p - d) : 0), E = (F) => F.toLocaleString(void 0, { maximumFractionDigits: F < 10 ? 2 : 1 }) + " " + e.unit, $ = (F) => String(F).padStart(2, "0") + ":00", B = x > 0 ? L.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + s), t.setAttribute("aria-label", e.name + " today by the hour: " + E(e.value) + (B >= 0 ? ", most " + E(x) + " at " + $(B) : "")), t.innerHTML = [d, (d + p) / 2, p].map((F) => '<line x1="0" x2="' + r + '" y1="' + F + '" y2="' + F + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((F, D) => F > 0 ? '<rect x="' + (D * u + (u - m) / 2).toFixed(1) + '" y="' + H(F).toFixed(1) + '" width="' + m.toFixed(1) + '" height="' + (p - H(F)).toFixed(1) + '" rx="2" fill="' + (D === k ? "var(--primary)" : "var(--text)") + '"' + (D === k ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((F) => '<text x="' + (F * u).toFixed(1) + '" y="' + (s - 3) + '">' + String(F).padStart(2, "0") + "</text>").join("") + (B >= 0 ? '<text x="0" y="11">Most: ' + j(E(x)) + " at " + $(B) + "</text>" : "");
  }
  function zf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, r) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ad(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    df(t, a, [e].filter(Boolean));
  }
  let Ki = null, al = 0;
  const ol = (t) => !t.startsWith("light.") || Hg.includes((Se.get(t) || "").toLowerCase()), nl = () => Math.max(2, mn((S == null ? void 0 : S.clientWidth) || 0).n), od = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, Gf = (t) => od(t).slice(0, Nn(t) - 1);
  function nd(t) {
    const e = ce().tiles;
    if (e) return e.filter((r) => M[r] || qt(r));
    if (!Ki) {
      const r = (s) => {
        var d;
        return (((d = M[s]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (Cn[s] || 0);
      };
      Ki = {
        lights: jt.rooms.flatMap((s) => s.lights).filter((s) => {
          var d;
          return ol(s) && ((d = M[s]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((s, d) => r(d) - r(s) || gt(s).localeCompare(gt(d))),
        climates: jt.rooms.flatMap((s) => s.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = Ki.climates.filter((r) => M[r]).slice(0, t > 3 ? 2 : 1);
    return [...Ki.lights.filter((r) => M[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const rl = () => {
    var t;
    return ((t = Mt.home) == null ? void 0 : t.welcome) ?? !0;
  }, $f = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((r) => {
      var s;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((s = r.attributes) == null ? void 0 : s.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Uf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = $f();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, rd = (t, e, a, r) => (s) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + s + "</div></section>";
  function Yf(t, e) {
    var d, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? rl() : ce().welcome) ? '<span class="tfGreeting">' + j(Uf()) + "</span>" : "") + j(((p = (d = i()) == null ? void 0 : d.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + rd("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Pf(u) })) }), !v && At().length && t.push({ key: "areas", html: pt(0) });
    const a = ee();
    if (a.length && t.push({ key: "favs", wrap: rd("tfDash-favs", "favs", "Favourites", Ji()), tiles: a.map((u) => ({ key: "fav:" + u, html: uo(u, { area: !0 }) })) }), v)
      return Xc(), vd() && t.push({ key: "dash:energy", html: el() }), al = nl(), nd(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + j(u) + '">' + m + "</div>",
        tiles: [{ key: u, html: ve(qt(u), u) }]
      })), t;
    const r = Of();
    t.push({ key: "dash:act", html: dn("dash:act", 0, "Activity", r.length ? r.map(qf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: el() });
    const s = nl();
    return al = s, nd(s >= 3 ? s : s * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + j(u) + '">' + m + "</div>",
      tiles: [{ key: u, html: Ot(u) ? ve(qt(u), u) : pn(u, !1, Gf(u)) }]
    })), Nf(), Xc(), t;
  }
  const li = 252, ue = 16, Zf = 200, Kf = Math.round(li * 1.25), Xf = 60, Ba = Xf + ue, Jf = 3, id = {
    title: "The name",
    sums: "Summaries",
    wx: "Weather",
    areas: "Areas",
    favs: "Favourites",
    act: "Activity",
    energy: "Energy today",
    avg: "Compared to average",
    aq: "Air quality",
    pollen: "Pollen",
    radar: "Rain radar",
    hourly: "Next hours",
    sun: "Sun",
    moon: "Moon",
    uv: "UV index",
    humidity: "Humidity",
    pressure: "Pressure",
    wind: "Wind",
    visibility: "Visibility"
  }, Qf = ["wx", "favs", "act", "energy", "avg"], sd = ["XS", "S", "M", "L", "XL"], ld = sd.length, th = ["Narrow", "Wide", "Really wide"], eh = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, cd = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && Rn(t) ? ld : Math.min(ld, od(t).length + 1), Nn = (t) => {
    const e = ce().opts[t] || {}, a = cd(t), r = Number(e.h) || (e.tall ? 5 : eh[t] || dd);
    return Math.max(1, Math.min(a, r));
  }, dd = 2, ah = 90, pd = 60, Pa = (t) => {
    var e;
    return id[t] || (t.startsWith("room:") ? ((e = Bt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : gt(t));
  }, oh = 128;
  let ma = !1, ae = null, sa = null, il = !1, On = /* @__PURE__ */ new Map(), Xi = 0, hn = 0;
  const Fo = ["title", "sums"], mn = (t) => {
    const e = Math.max(1, Math.floor((t + ue) / (Zf + ue)));
    return { n: e, w: Math.max(1, Math.min(Kf, Math.floor((t - (e - 1) * ue) / e))) };
  }, sl = () => Et(Bt), nh = () => {
    var e;
    const t = new Set(((e = Mt.home) == null ? void 0 : e.areasOff) || []);
    return sl().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function rh() {
    const t = nh();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(id).filter((e) => {
        var a, r;
        return !["title", ...((a = Mt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((r = Mt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...dh() ? ["wx"] : [], ...vd() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: sn,
      areasOff: []
    };
  }
  const ce = () => v ? rh() : ll(), ll = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...Mt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = sn.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function In(t) {
    v || (Mt = { ...Mt, dash: { ...t, known: sn } }, Ta());
  }
  function Fn() {
    const t = (e) => S.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ro.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ro.avg, 2],
      ...sn.map((e) => [e, ro[e], Ws[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, s = !1]) => ({ key: e, el: a, span: r, tile: s }));
  }
  const ud = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const s = 2 * a + ue;
      t.el.style.setProperty("--area-open", s + "px");
      const d = Math.ceil((s + Math.max(0, At().length - 1) * (oh + ue) + ue) / (a + ue));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((r = ce().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, ce().spans[t.key] ?? t.span);
  }, fd = (t) => Nn(t.key), hd = window.matchMedia("(max-width: 620px)"), ih = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(At().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + ue) / Ba));
  };
  function md(t, e, a = null) {
    const r = ce().cells, s = t.every((u) => !r[u.key] || r[u.key].col + u.cols <= e), d = (u) => r[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), k = (B, F, D, X) => {
        for (let C = F; C < F + X; C++) for (let V = B; V < B + D; V++) if (u.has(V + "," + C)) return !1;
        return !0;
      }, L = (B, F, D) => {
        for (let X = D; X < D + B.rows; X++) for (let C = F; C < F + B.cols; C++) u.add(C + "," + X);
        m.set(B.key, { col: F, row: D, cols: B.cols, rows: B.rows });
      }, x = (B, F, D) => {
        for (F = Math.max(0, Math.min(e - B.cols, F)), D = Math.max(0, D); !k(F, D, B.cols, B.rows); ) D++;
        L(B, F, D);
      }, H = (B) => {
        for (let F = 0; ; F++) for (let D = 0; D <= e - B.cols; D++) if (k(D, F, B.cols, B.rows)) {
          L(B, D, F);
          return;
        }
      };
      a && x(a, ae.col, ae.row);
      const E = t.filter((B) => B !== a), $ = (B, F) => d(B).row - d(F).row || d(B).col - d(F).col;
      return s ? (E.filter((B) => r[B.key]).sort($).forEach((B) => x(B, r[B.key].col, r[B.key].row)), E.filter((B) => !r[B.key]).forEach(H), m) : ([...E].sort($).forEach(H), m);
    })();
  }
  function sh(t, e) {
    const a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = (d, p, u) => {
      for (let m = p; m < p + u.rows; m++) for (let k = d; k < d + u.cols; k++) if (a.has(k + "," + m)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let p = 0; ; p++) {
        let u = 0;
        for (; u <= e - d.cols && !s(u, p, d); ) u++;
        if (!(u > e - d.cols)) {
          for (let m = p; m < p + d.rows; m++) for (let k = u; k < u + d.cols; k++) a.add(k + "," + m);
          r.set(d.key, { col: u, row: p, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), r;
  }
  function cl() {
    const t = ce(), e = new Set(t.hidden), a = Fn().filter((p) => !Fo.includes(p.key));
    let r = On;
    if (!r.size) {
      const p = t.pegs || 4, u = a.filter((m) => !e.has(m.key));
      u.forEach((m) => {
        m.cols = ud(m, p, li), m.rows = fd(m) ?? dd;
      }), r = md(u, p);
    }
    const s = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    a.sort((p, u) => s(p).row - s(u).row || s(p).col - s(u).col);
    const d = (t.phone || []).map((p) => a.find((u) => u.key === p && !e.has(p))).filter(Boolean);
    return [...d, ...a.filter((p) => !d.includes(p))];
  }
  const lh = () => {
    const t = cl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), dl([...Fn().filter((e) => Fo.includes(e.key)), ...t].map((e) => e.el));
  };
  function dl(t) {
    if (ae) return;
    const e = o.activeElement;
    let a = null;
    for (const r of new Set(t.map((s) => {
      for (; s && s.parentElement !== S; ) s = s.parentElement;
      return s;
    }).filter(Boolean))) {
      const s = a ? a.nextSibling : S.querySelector(":scope > [data-tf]");
      if (r !== s)
        try {
          S.moveBefore ? S.moveBefore(r, s) : S.insertBefore(r, s);
        } catch {
          S.insertBefore(r, s);
        }
      a = r;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const vr = (t, e) => In({ ...t, cells: e, pegs: mn(S.clientWidth).n });
  function pl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), s = a.getBoundingClientRect(), d = s.right > r.right ? s.right - r.right : s.left < r.left ? s.left - r.left : 0;
    d && e.scrollBy({ left: d, behavior: t ? "smooth" : "auto" });
  }
  function Ue() {
    var X;
    if (requestAnimationFrame(() => pl(!1)), setTimeout(() => pl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * li + ue, a = f.classList.contains("tfDash");
    v && (ma = !1), f.classList.toggle("tfOverview", v);
    const { n: r, w: s } = e ? { n: 2, w: Math.floor((t - ue) / 2) } : mn(t);
    Da.classList.add("tfPegs"), Da.style.setProperty("--peg-n", r), Da.style.setProperty("--peg-w", s + "px");
    const d = new Set(ce().hidden);
    sn.forEach((C) => {
      var V;
      return (V = ro[C]) == null ? void 0 : V.classList.toggle("tfNotAdded", d.has(C) && !(ae != null && ae.fromTray && ae.key === C));
    }), Oi(), f.classList.toggle("tfBoard", a), f.classList.toggle("tfEditing", a && ma && !e);
    const p = l("dashEditNav");
    !a && Go && El(!1), p && v ? (p.hidden = !a, Go || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = Ts)) : p && (p.hidden = !a || e, p.classList.toggle("active", ma), p.setAttribute("aria-pressed", String(ma)), p.setAttribute("aria-label", ma ? "Done editing" : "Edit custom dashboard"), p.title = ma ? "Done" : "Edit", p.innerHTML = ma ? Fu : Ts);
    const u = a ? Fn() : [];
    if ((!a || !v) && S.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((C) => C.remove()), !a) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((C) => {
        C.classList.remove("tfBoardItem", "tfBoardHidden"), C.style.left = C.style.top = C.style.width = C.style.height = "";
      }), (X = S.querySelector(".tfDash-act > .activityRows")) == null || X.style.removeProperty("max-height"), ml(!1), f.classList.contains("tfDash") && lh(), De();
      return;
    }
    if (v) {
      fh(u, t, e);
      return;
    }
    S.style.setProperty("--peg-w", s + "px");
    const m = new Set(ce().hidden), k = s + ue;
    ae != null && ae.fromTray && m.delete(ae.key), u.forEach((C) => C.el.classList.toggle("tfBoardHidden", m.has(C.key)));
    const L = u.filter((C) => !m.has(C.key) && getComputedStyle(C.el).display !== "none");
    let x = 0;
    L.filter((C) => Fo.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const V = C.key === "sums" && C.el.querySelector(".tfDash-bar"), wt = V ? V.querySelectorAll(".activityRow").length : 0;
      V && (V.style.maxWidth = "none");
      for (let Lt = 1; V && Lt <= wt && (V.style.setProperty("--bar-cols", String(Math.ceil(wt / Lt))), !(V.offsetWidth <= t)); Lt++)
        ;
      V && (V.style.maxWidth = ""), x += C.el.offsetHeight + ue;
    }), hn = x;
    const H = L.filter((C) => !Fo.includes(C.key));
    H.forEach((C) => {
      C.cols = ud(C, r, s), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === r ? t : C.cols * s + (C.cols - 1) * ue) + "px", C.el.style.height = "", C.rows = fd(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + ue - 6) / Ba)), C.key === "areas" && hd.matches && (C.rows = ih(parseFloat(C.el.style.width)));
    });
    const E = ae && H.find((C) => C.key === ae.key), $ = e && cl().map((C) => C.key), B = (C) => $.includes(C.key) ? $.indexOf(C.key) : -1, F = e ? sh([...H].sort((C, V) => B(C) - B(V)), r) : md(H, r, E);
    F.forEach((C) => Object.assign(C, { x: C.cols === r ? 0 : C.col * k, y: hn + C.row * Ba, w: C.cols === r ? t : C.cols * s + (C.cols - 1) * ue, h: C.rows * Ba - ue })), H.forEach((C) => {
      const V = F.get(C.key);
      C.el.style.height = V.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : Nn(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((wt) => {
        wt.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && V.cols === 1 && r > 1), C.el.dataset.cols = V.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", V.h - ah + "px"), !(C === E && !ae.fromTray) && (C.el.style.left = V.x + "px", C.el.style.top = V.y + "px");
    }), e || (On = F), dl([...L.filter((C) => Fo.includes(C.key)), ...H.slice().sort((C, V) => F.get(C.key).row - F.get(V.key).row || F.get(C.key).col - F.get(V.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, V]) => {
      const wt = F.get(C), Lt = wt && S.querySelector(V), Pt = Lt == null ? void 0 : Lt.querySelector(":scope > .activityRows"), _t = Lt == null ? void 0 : Lt.querySelector(":scope > .activityHeader");
      if (!Pt || !_t) return;
      const lt = Pt.getBoundingClientRect().top - Lt.getBoundingClientRect().top, xt = wt.rows === 1 ? wt.h : Math.floor(wt.h - lt - parseFloat(getComputedStyle(Lt).paddingBottom)), $t = Math.max(1, Math.floor(xt / pd));
      Pt.style.setProperty("--fill-gap", ($t > 1 ? (xt - $t * pd) / ($t - 1) : 0).toFixed(2) + "px"), Pt.style.maxHeight = xt + "px";
    }), Xi = Math.max(0, ...[...F.values()].map((C) => C.row + C.rows));
    let D = hn + Xi * Ba - ue;
    D = ml(ma && !e, H, F, D, r, s), S.style.height = D + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), u.forEach((C) => hl.observe(C.el)), Vd(), De();
  }
  const qo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, gd = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, bd = () => {
    var t;
    return gd[(t = Mt.home) == null ? void 0 : t.areaSize] ? Mt.home.areaSize : "s";
  }, ul = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = Mt.home) == null ? void 0 : t.areaLayout) ? Mt.home.areaLayout : "bento";
  }, wd = () => {
    var t;
    return ((t = Mt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, ch = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ji = () => v ? Vo("favsTitle") : Mt.favsTitle !== !1, dh = () => {
    var t;
    return !!((t = Mt.home) != null && t.weather && Io());
  }, vd = () => {
    var t;
    return !!((t = Mt.home) != null && t.energy && (Xa != null && Xa.length));
  }, Vo = (t) => {
    var e;
    return ((e = Mt.home) == null ? void 0 : e[t]) ?? ch[t];
  };
  function ph() {
    var s;
    const t = Object.values(((s = i()) == null ? void 0 : s.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: Bt.filter((p) => p.floor === d.floor_id) })), r = Bt.filter((d) => !e.has(d.floor));
    return r.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: r }), a;
  }
  const yd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let Ce = null, xd = [], ci = /* @__PURE__ */ new Map();
  function fl(t) {
    let e = S.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), S.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function uh(t) {
    if (!v || !Go || t.button !== 0 || S.clientWidth < 2 * li + ue) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Fn().find((u) => u.el === e);
    if (!a || Fo.includes(a.key) || Ot(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), s = ci.get(a.key);
    Ce = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: s.x, top: s.y, order: [...xd] };
    const d = (u) => {
      const m = u.clientX - Ce.x0, k = u.clientY - Ce.y0;
      if (!Ce.on && Math.hypot(m, k) < 5) return;
      Ce.on || (Ce.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Ce.left + m + "px", top: Ce.top + k + "px" });
      const L = u.clientX - r.left, x = u.clientY - r.top + S.scrollTop;
      let H = null, E = 1 / 0;
      if (ci.forEach((D, X) => {
        if (X === a.key || !Ce.order.includes(X)) return;
        const C = Math.hypot(L - (D.x + D.w / 2), x - (D.y + D.h / 2));
        C < E && (E = C, H = { key: X, b: D });
      }), !H) return;
      const $ = Ce.order.filter((D) => D !== a.key), B = $.indexOf(H.key) + (L > H.b.x + H.b.w / 2 ? 1 : 0), F = [...$.slice(0, B), a.key, ...$.slice(B)];
      F.join() !== Ce.order.join() ? (Ce.order = F, Ue()) : fl(ci.get(a.key));
    }, p = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const u = Ce;
      Ce = null, e.classList.remove("tfDragging"), u.on && Sa({ order: u.order }), Ue(), u.on && !We() && setTimeout(() => gc(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function fh(t, e, a) {
    var Cp;
    const r = new Set(ce().hidden);
    t.forEach((ht) => ht.el.classList.toggle("tfBoardHidden", r.has(ht.key)));
    const s = t.filter((ht) => !r.has(ht.key) && getComputedStyle(ht.el).display !== "none"), d = ue, p = a ? { w: Math.floor((e - d) / 2) } : mn(e), u = Math.min(e, qo.full);
    let m = 0;
    const k = is();
    f.classList.toggle("hcSumsFit", Dd()), f.classList.toggle("hcFavStrip", k);
    const L = s.filter((ht) => Fo.includes(ht.key) || k && ht.key === "favs");
    L.sort((ht, It) => ["title", "sums", "favs"].indexOf(ht.key) - ["title", "sums", "favs"].indexOf(It.key)), L.forEach((ht) => {
      ht.el.classList.add("tfBoardItem"), ht.el.toggleAttribute("data-narrow", !1), Object.assign(ht.el.style, { width: (ht.key === "title" ? e : u) + "px", height: "", left: "0px", top: m + "px" });
      const It = ht.key !== "title" && (ht.el.querySelector(".tfDash-bar>.activityRows") || ht.key === "favs" && ht.el.querySelector(":scope>.activityRows")), Be = It ? It.children.length : 0;
      if (It && (It.classList.remove("hcBarRows"), !a && It.scrollWidth > It.clientWidth + 1))
        for (let Kt = 2; Kt <= Be && (It.classList.add("hcBarRows"), It.style.setProperty("--bar-cols", String(Math.ceil(Be / Kt))), !(It.scrollWidth <= It.clientWidth + 1)); Kt++)
          ;
      m += ht.el.offsetHeight + (ht.key === "title" ? qo.nameGap : qo.sumsGap);
    });
    const x = ["favs", "wx", "energy"], H = (Ce == null ? void 0 : Ce.order) || ((Cp = Mt.home) == null ? void 0 : Cp.order), E = H ? [...H.filter((ht) => x.includes(ht)), ...x.filter((ht) => !H.includes(ht))] : x;
    xd = E;
    const $ = s.filter((ht) => x.includes(ht.key) && !(k && ht.key === "favs")).sort((ht, It) => E.indexOf(ht.key) - E.indexOf(It.key));
    ci = /* @__PURE__ */ new Map();
    const B = (ht, It) => {
      if (ci.set(ht.key, It), Object.assign(ht.el.style, { width: It.w + "px", height: It.h + "px" }), Ce != null && Ce.on && Ce.key === ht.key) {
        fl(It);
        return;
      }
      Object.assign(ht.el.style, { left: It.x + "px", top: It.y + "px" });
    }, F = a ? e : 2 * p.w + d, D = qo.row, X = wd() === "stacked" && !a && $.length > 0;
    let C = 0, V = 0, wt = m;
    $.forEach((ht) => {
      ht.el.classList.add("tfBoardItem"), ht.el.dataset.rows = 5, ht.el.dataset.cols = 2, ht.el.toggleAttribute("data-narrow", !1), !X && C && C + F > e && (m += V + d, C = 0, V = 0);
      let It = D;
      if ((a || ht.key === "favs") && (Object.assign(ht.el.style, { width: F + "px", height: "" }), It = ht.el.offsetHeight), X) {
        B(ht, { x: 0, y: wt, w: F, h: It }), wt += It + d;
        return;
      }
      B(ht, { x: C, y: m, w: F, h: It }), C += F + d, V = Math.max(V, It);
    }), $.length && !X && (m += V + d);
    const Lt = X ? F + d : 0, Pt = X ? e - F - d : e, _t = a ? "l" : bd(), lt = gd[_t], xt = ul(), $t = Vo("byFloor"), fe = p.w, he = lt.h, ye = a ? 2 : Math.max(1, Math.floor((Pt + d) / (fe + d))), Ia = new Map(s.filter((ht) => Ot(ht.key)).map((ht) => [ht.key, ht])), Fa = ($t ? ph() : [{ id: "", name: "", icon: "", rooms: Bt }]).map((ht) => ({ ...ht, cards: ht.rooms.map((It) => Ia.get("room:" + It.id)).filter(Boolean) })).filter((ht) => ht.cards.length), ms = xt === "bento", gs = ms && Vo("bentoMixed"), Mm = ms && $t && Vo("bentoBoxes"), Sm = xt === "columns" && $t && !a, Yo = 12, Sp = (ht) => ht.name ? qo.floorHead + qo.floorGap : 0, yi = (ht, It, Be) => {
      const Kt = /* @__PURE__ */ new Set(), de = [];
      ht.cards.forEach((Qt, bo) => {
        const bn = gs && bo === 0 && It >= 2 && ht.cards.length > 1, Ze = bn ? 2 : 1, Zo = bn && !a ? 2 : 1;
        Qt.el.classList.add("tfBoardItem"), Qt.el.dataset.cols = Ze, Qt.el.toggleAttribute("data-narrow", !1);
        for (let $n = 0; ; $n++) {
          const Un = [...Array(Math.max(0, It - Ze + 1)).keys()].find((xi) => [...Array(Ze).keys()].every((eo) => [...Array(Zo).keys()].every((bs) => !Kt.has($n + bs + "," + (xi + eo)))));
          if (Un != null) {
            [...Array(Ze).keys()].forEach((xi) => [...Array(Zo).keys()].forEach((eo) => Kt.add($n + eo + "," + (Un + xi)))), de.push({ it: Qt, r: $n, c: Un, sc: Ze, sr: Zo });
            break;
          }
        }
      });
      const pe = Math.max(0, ...de.map((Qt) => Qt.r + Qt.sr));
      ms && !a && de.forEach((Qt) => {
        for (; Qt.r + Qt.sr < pe && !Kt.has(Qt.r + Qt.sr + "," + Qt.c) && Qt.sc === 1; )
          Kt.add(Qt.r + Qt.sr + "," + Qt.c), Qt.sr++;
      }), de.forEach((Qt) => {
        Qt.it.el.dataset.rows = Math.min(5, Qt.sr * lt.rows), Object.assign(Qt.it.el.style, { width: Qt.sc * Be + (Qt.sc - 1) * d + "px", height: Qt.sr * he + (Qt.sr - 1) * d + "px" });
      });
      const Xt = [...Array(pe)].map(() => he), ke = [];
      let _a = Sp(ht);
      return Xt.forEach((Qt, bo) => {
        ke[bo] = _a, _a += Qt + d;
      }), { h: _a - (pe ? d : 0), places: de.map((Qt) => ({ it: Qt.it, x: Qt.c * (Be + d), y: ke[Qt.r], w: Qt.sc * Be + (Qt.sc - 1) * d, h: Xt.slice(Qt.r, Qt.r + Qt.sr).reduce((bo, bn) => bo + bn, 0) + (Qt.sr - 1) * d })) };
    }, oc = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((ht) => [ht.dataset.floor, ht])), nc = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((ht) => [ht.dataset.floor, ht])), _p = [], _m = (ht, It, Be, Kt) => {
      if (!ht.name) return;
      let de = oc.get(ht.id);
      oc.delete(ht.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ht.id, S.appendChild(de)), de.dataset.sig !== ht.name && (de.dataset.sig = ht.name, de.innerHTML = '<h2 class="hcFloorName">' + j(ht.name) + "</h2>"), Object.assign(de.style, { left: It + "px", top: Be + "px", width: Kt + "px" }), _p.push(de);
    }, Cm = (ht, It, Be, Kt, de) => {
      let pe = nc.get(ht.id);
      nc.delete(ht.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), pe.dataset.floor = ht.id, pe.setAttribute("aria-hidden", "true"), S.prepend(pe)), Object.assign(pe.style, { left: It + "px", top: Be + "px", width: Kt + "px", height: de + "px" });
    }, Am = (ht) => parseFloat(getComputedStyle(ht.cards[0].el).paddingLeft) || 0, rc = (ht, It, Be, Kt, de = 0) => {
      _m(ht, Be + de, Kt, (It.w ?? e) - de), It.places.forEach((pe) => B(pe.it, { x: Be + pe.x, y: Kt + pe.y, w: pe.w, h: pe.h }));
    };
    if (Fa.length && $.length && !X && (m += qo.floorTop), Sm) {
      let ht = 0, It = m;
      Fa.forEach((Be) => {
        const Kt = { ...yi(Be, 1, fe), w: fe };
        ht && ht + fe > Pt && (m = It + d + qo.floorTop, ht = 0), rc(Be, Kt, Lt + ht, m), It = Math.max(It, m + Kt.h), ht += fe + d;
      }), m = It + d;
    } else if (Mm) {
      let ht = [{ x0: 0, x1: Pt, t: m }];
      const It = (Kt, de) => Math.max(...ht.filter((pe) => pe.x1 > Kt && pe.x0 < de).map((pe) => pe.t)), Be = (Kt, de, pe) => {
        const Xt = [];
        ht.forEach((ke) => {
          ke.x1 <= Kt || ke.x0 >= de ? Xt.push(ke) : (ke.x0 < Kt && Xt.push({ x0: ke.x0, x1: Kt, t: ke.t }), ke.x1 > de && Xt.push({ x0: de, x1: ke.x1, t: ke.t }));
        }), Xt.push({ x0: Kt, x1: de, t: pe }), ht = Xt.sort((ke, _a) => ke.x0 - _a.x0);
      };
      Fa.forEach((Kt) => {
        const de = Kt.cards.length + (gs && Kt.cards.length > 1 ? 3 : 0);
        let pe = a ? 2 : Math.min(ye, Math.max(gs && Kt.cards.length > 1 ? 2 : 1, de <= 3 ? de : Math.ceil(de / 2)));
        for (; !a && pe > 1 && pe * fe + (pe - 1) * d + 2 * Yo > Pt; ) pe--;
        let Xt = null;
        for (let Ze = pe; Ze >= (a ? pe : 1); Ze--) {
          const Zo = Math.min(fe, Math.floor((Pt - 2 * Yo - (Ze - 1) * d) / Ze)), $n = { ...yi(Kt, Ze, Zo), w: Ze * Zo + (Ze - 1) * d }, Un = $n.w + 2 * Yo, xi = $n.h + 2 * Yo;
          ht.map((eo) => eo.x0).filter((eo) => eo + Un <= Pt + 0.5).forEach((eo) => {
            const bs = It(eo, eo + Un);
            (!Xt || bs < Xt.t - 0.5) && (Xt = { cc: Ze, inner: Zo, bw: Un, h: xi, t: bs, x: eo });
          });
        }
        if (!Xt) {
          const Ze = Math.min(fe, Pt - 2 * Yo), Zo = yi(Kt, 1, Ze);
          Xt = { cc: 1, inner: Ze, bw: Ze + 2 * Yo, h: Zo.h + 2 * Yo, t: It(0, Pt), x: 0 };
        }
        const ke = { ...yi(Kt, Xt.cc, Xt.inner), w: Xt.cc * Xt.inner + (Xt.cc - 1) * d }, _a = Xt.bw, Qt = Xt.h, bo = Xt.x, bn = Xt.t;
        Cm(Kt, Lt + bo, bn, _a, Qt), rc(Kt, ke, Lt + bo + Yo, bn + Yo, Am(Kt)), Be(bo, Math.min(Pt, bo + _a + d), bn + Qt + d);
      }), m = Math.max(...ht.map((Kt) => Kt.t));
    } else {
      const ht = (It) => {
        var pe;
        if (!((pe = Mt.home) != null && pe.fitTogether) || a) return ye;
        const Be = X ? wt - d - m : null, Kt = (Xt) => {
          const ke = It.cards.length + (gs && It.cards.length > 1 && Xt >= 2 ? 3 : 0), _a = Math.ceil(ke / Xt);
          return { holes: _a * Xt - ke, rows: _a, h: Sp(It) + _a * he + (_a - 1) * d, w: Xt * fe + (Xt - 1) * d };
        }, de = (Xt) => Xt.holes === 0 || ms && Xt.holes === 1 && Xt.rows > 1;
        for (let Xt = 1; Xt <= ye; Xt++) {
          const ke = Kt(Xt);
          if (de(ke) && ke.h <= (Be ?? ke.w)) return Xt;
        }
        for (let Xt = 1; Xt <= ye; Xt++) {
          const ke = Kt(Xt);
          if (ke.h <= (Be ?? ke.w)) return Xt;
        }
        return ye;
      };
      Fa.forEach((It, Be) => {
        Be && (m += qo.floorTop);
        const Kt = yi(It, ht(It), fe);
        rc(It, { ...Kt, w: Pt }, Lt, m), m += Kt.h + d;
      });
    }
    X && (m = Math.max(m, wt)), oc.forEach((ht) => ht.remove()), nc.forEach((ht) => ht.remove()), Ce != null && Ce.on || fl(null), S.style.height = Math.max(0, m - d) + "px", dl([...L.map((ht) => ht.el), ...$.map((ht) => ht.el), ..._p, ...Fa.flatMap((ht) => ht.cards.map((It) => It.el))]), ml(!1), t.forEach((ht) => [...ht.el.children].forEach((It) => It.toggleAttribute("inert", Go)));
    const ic = S.querySelector(".tfDash-favs>.activityRows");
    ic && (ic.classList.toggle("hcFadeList", !k), yd(ic)), requestAnimationFrame(() => f.classList.add("tfBoardReady")), t.forEach((ht) => hl.observe(ht.el)), De();
  }
  const Qi = () => {
    il || (il = !0, requestAnimationFrame(() => {
      il = !1, Ue();
    }));
  }, hl = new ResizeObserver(() => {
    ae || Qi();
  });
  function hh(t, e, a) {
    const r = a + ue, s = t * a + (t - 1) * ue, d = e * Ba - ue, p = ue / 2, u = r / Math.max(1, Math.round(r / (Ba / 4))), m = Ba / 4, k = 6;
    let L = "";
    for (let x = 0; x <= t; x++) for (let H = 0; H <= e; H++) {
      const E = x * r - p, $ = H * Ba - p;
      L += "M" + (E - k) + " " + $ + "H" + (E + k) + "M" + E + " " + ($ - k) + "V" + ($ + k);
    }
    return '<svg width="' + s + '" height="' + d + '" viewBox="0 0 ' + s + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + u.toFixed(3) + '" height="' + m + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + m + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + m + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (s + ue) + '" height="' + (d + ue) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + L + '"></path></svg>';
  }
  function ml(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, s = 1, d = li) {
    S.querySelectorAll(".tfEditChips").forEach((L) => {
      (!t || !L.closest(".tfBoardItem")) && L.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((L) => L.remove()), S.querySelectorAll(".tfBoardItem").forEach((L) => [...L.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let p = S.querySelector(".tfBoardCells"), u = S.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), u == null || u.remove(), fo(), r;
    const m = Xi + Jf;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), S.prepend(p)), p.style.top = hn + "px", p.dataset.size !== s + "x" + m + "x" + d && (p.dataset.size = s + "x" + m + "x" + d, p.innerHTML = hh(s, m, d)), r = Math.max(r, hn + m * Ba - ue), e.forEach((L) => {
      const x = L.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Ai + '</span><button class="tfEditChip" type="button" data-board-more="' + j(L.key) + '" aria-label="' + j(Pa(L.key)) + ' options" aria-haspopup="menu">' + Lg + "</button></div>");
    }), ae && a.has(ae.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(u));
      const L = a.get(ae.key);
      Object.assign(u.style, { left: L.x + "px", top: L.y + "px", width: L.w + "px", height: L.h + "px" });
    } else u == null || u.remove();
    const k = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (k) {
      const L = k.getBoundingClientRect();
      k.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...k.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const H = x.getBoundingClientRect(), E = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + j(E) + '" aria-label="Hide ' + j(gt(E)) + ' from the dashboard" style="left:' + Math.round(H.right - L.left - 42) + "px;top:" + Math.round(H.top - L.top + (H.height - 32) / 2) + 'px">' + Iu + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let gl = "";
  function bl(t) {
    ma = t, t || (ae = null, Wo = jo = !1, fo()), Ue(), t ? (gl = JSON.stringify(Mt), xr(Zt, "Edit custom dashboard", null)) : gl && JSON.stringify(Mt) !== gl && Ra("Changes saved");
  }
  function mh(t, e) {
    var F, D;
    fo();
    const a = On.get(t), { n: r } = mn(S.clientWidth), s = ce(), d = s.spans[t] ?? (Ot(t) ? 1 : 2);
    if (!a) return;
    const p = a.cols >= r, u = (X, C, V) => '<button type="button" role="menuitem" data-board-act="' + X + '"' + (V ? " disabled" : "") + ">" + C + "</button>", m = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    m.setAttribute("role", "menu"), m.setAttribute("aria-label", Pa(t) + " options");
    const k = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), L = cd(t), x = Nn(t), H = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + sd.map((X, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === x) + '" aria-label="' + X + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < L ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>", E = Qf.includes(t) || Ot(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + th.map((X, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(d, r)) + '" aria-label="' + X + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < r ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>" : "", $ = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + js().map(([X, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (X === Gr()) + '" data-board-act="src:' + j(X) + '">' + j(C) + "</button>").join("") + "</div></div>" : "";
    m.innerHTML = H + E + $ + (t === "energy" ? u("graph", (((F = s.opts.energy) == null ? void 0 : F.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", p || a.col === 0) + u("right", "Move right", p || a.col + a.cols >= r) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (k ? u("remove", "Remove") : u("hide", "Hide")), S.appendChild(m);
    const B = Math.min(a.x + a.w - m.offsetWidth, S.clientWidth - m.offsetWidth);
    Object.assign(m.style, { left: Math.max(0, B) + "px", top: a.y + 28 + "px" }), sa = { key: t, menu: m, opener: e }, (D = m.querySelector("button:not([disabled])")) == null || D.focus();
  }
  function fo(t) {
    if (!sa) return;
    const { menu: e, opener: a } = sa;
    sa = null, e.remove(), t && (a == null || a.focus());
  }
  const qn = () => Object.fromEntries([...On].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function gh(t, e) {
    var u, m, k;
    if (e === "remove") {
      fo(), bh(t);
      return;
    }
    const a = Mt, r = ce(), s = qn(), d = s[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((u = r.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (s[t] = { ...d, col: d.col - 1 }), e === "right" && (s[t] = { ...d, col: d.col + 1 }), e === "up" && (s[t] = { ...d, row: d.row - 1 }), e === "down" && (s[t] = { ...d, row: d.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ae = { key: t, col: s[t].col, row: s[t].row }), vr(r, s), ae && (Ue(), ae = null, vr(ce(), qn()));
    const p = /^[hw]:/.test(e) && !We() && (sa == null ? void 0 : sa.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const L = sa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === p))), setTimeout(() => {
        sa === L && fo();
      }, Pe.tabs.dur);
    } else fo();
    e === "graph" && (ya.delete("dash:energy"), Ee()), e.startsWith("src:") && ((m = Te == null ? void 0 : Te.get("radar")) == null || m.refresh(), Le == null || Le.refresh()), e.startsWith("h:") && t.includes(".") && Ee(), Ue(), e !== "hide" ? (k = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || k.focus() : Ra(Pa(t) + " hidden", rs(a));
  }
  const kd = (t) => {
    var e;
    return sn.includes(t) && !(((e = Mt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function wl(t) {
    const e = ce(), a = Pa(t) + kd(t);
    In({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Ue(), Ra(a);
  }
  const ts = () => ce().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ce().hidden.includes(t));
  function Md(t, e) {
    const a = ce();
    vr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), Ee(), De();
  }
  const Sd = (t) => {
    Md([...ts().filter((e) => e !== t), t], qn()), Ra(Pa(t) + " added"), xh(t);
  }, bh = (t) => {
    const e = Mt, a = qn();
    delete a[t], Md(ts().filter((r) => r !== t), a), Ra(Pa(t) + " removed", rs(e));
  };
  let vl = 0;
  function Ra(t, e = null) {
    var p;
    const a = l("toast");
    if (!a) return;
    if (U0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(vl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const r = f.getBoundingClientRect(), s = (p = o.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), d = Zt.classList.contains("open") && !ho ? Math.min(r.right, Zt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + d) / 2 + "px", a.style.bottom = (s != null && s.height ? window.innerHeight - s.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), Y0(a), clearTimeout(vl), vl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Pe.confirm.stay);
  }
  const wh = 700, vh = 1e3, ga = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ga.setAttribute("role", "tooltip"), ga.setAttribute("aria-hidden", "true"), f.appendChild(ga);
  let di = null, pi = 0, Vn = 0, _d = -1 / 0;
  const yl = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, yh = (t) => {
    for (let e = t; e && e !== f; e = e.parentElement) if (yl(e)) return e;
    return null;
  };
  function es(t, e) {
    clearTimeout(pi), clearTimeout(Vn);
    const a = () => {
      if (!t.isConnected) return;
      di = t, ga.textContent = e, ga.hidden = !1;
      const r = t.getBoundingClientRect(), s = ga.getBoundingClientRect(), d = r.top - s.height - 8 >= 8 ? r.top - s.height - 8 : r.bottom + 8;
      ga.style.left = Math.max(8, Math.min(window.innerWidth - s.width - 8, r.left + r.width / 2 - s.width / 2)) + "px", ga.style.top = d + "px";
    };
    !ga.hidden || performance.now() - _d < vh ? a() : pi = setTimeout(a, wh);
  }
  function as() {
    clearTimeout(pi), clearTimeout(Vn), ga.hidden || (_d = performance.now()), ga.hidden = !0, di = null;
  }
  o.addEventListener("pointerover", (t) => {
    var r, s;
    if (t.pointerType === "touch") return;
    if (ga.contains(t.target)) {
      clearTimeout(Vn);
      return;
    }
    const e = (s = (r = t.target).closest) == null ? void 0 : s.call(r, ".tfAreaPick");
    if (e) {
      e !== di ? es(e, e.getAttribute("aria-label")) : clearTimeout(Vn);
      return;
    }
    const a = yh(t.target);
    if (a && Jt.names === "scroll" && a.matches(os)) {
      xl(a);
      return;
    }
    if (a) {
      a !== di ? es(a, a.textContent.trim()) : clearTimeout(Vn);
      return;
    }
    clearTimeout(pi), clearTimeout(Vn), Vn = setTimeout(as, 120);
  }), o.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      es(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(yl);
    Jt.names === "scroll" && (a.filter((s) => s.matches(os)).forEach(xl), a = a.filter((s) => !s.matches(os))), a.length && es(e, a.map((s) => s.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === di && as();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ga.hidden && (t.stopPropagation(), as());
  }, !0), window.addEventListener("scroll", () => {
    (!ga.hidden || pi) && as();
  }, { capture: !0, passive: !0 });
  const os = ".activityRowName,.activityRowMeta", ns = /* @__PURE__ */ new WeakSet();
  function xl(t) {
    var a;
    if (Jt.names !== "scroll" || ns.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ns.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const r = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (r < 2) {
        ns.delete(t);
        return;
      }
      const s = r / 30 * 1e3, d = s + 1e3 + s;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: s / d },
        { textIndent: -r + "px", offset: (1e3 + s) / d, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: d });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", ns.delete(t);
      };
    }, 600);
  }
  const Cd = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Cd.unobserve(e.target), xl(e.target));
  }), { threshold: 1 });
  let kl = !1;
  new MutationObserver(() => {
    kl || Jt.names !== "scroll" || (kl = !0, setTimeout(() => {
      kl = !1, o.querySelectorAll(os).forEach((t) => {
        !t.dataset.glided && yl(t) && (t.dataset.glided = "1", Cd.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const rs = (t) => () => {
    Mt = t, Ta(), Ee(), Ue(), De();
  };
  function xh(t) {
    const e = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const a = e();
      if (!a) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, s = a.getBoundingClientRect();
      (s.top < 0 || s.bottom > window.innerHeight) && a.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const d = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, kh(t) ? 260 : 0);
  }
  function kh(t) {
    const e = On.get(t);
    if (!e || !Zt.classList.contains("open") || ho) return !1;
    const { n: a, w: r } = mn(S.clientWidth), s = Zt.getBoundingClientRect().left - S.getBoundingClientRect().left, d = (m) => m * (r + ue) + e.cols * r + (e.cols - 1) * ue <= s;
    if (d(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    On.forEach((m, k) => {
      if (k !== t) for (let L = m.row; L < m.row + m.rows; L++) for (let x = m.col; x < m.col + m.cols; x++) p.add(x + "," + L);
    });
    const u = (m, k) => {
      for (let L = k; L < k + e.rows; L++) for (let x = m; x < m + e.cols; x++) if (p.has(x + "," + L)) return !1;
      return !0;
    };
    for (let m = 0; m <= Xi; m++) for (let k = 0; k + e.cols <= a && d(k); k++)
      if (u(k, m))
        return vr(ce(), { ...qn(), [t]: { col: k, row: m } }), Ue(), !0;
    return !1;
  }
  const Ad = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ld = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let yr = "page";
  const Mh = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + j(r) + '</span></span><span class="hcRowEnd">' + Pc + "</span></button>").join("") + "</section>", xr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Sh = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + Lc + "</button>", _h = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Ml(t = !1) {
    const e = Zt.querySelector(".tfTrayInner"), a = Zt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let s = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = _h(p) !== yr, p.classList.toggle("hcFirst", !p.hidden && s), p.hidden || (s = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const u = p.dataset.trayTab === yr;
      p.classList.toggle("active", u), p.setAttribute("aria-selected", String(u));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (r.style.transition = "none", t ? Rs(r, r.offsetLeft, r.offsetWidth, d.offsetLeft, d.offsetWidth) : (r.style.left = d.offsetLeft + "px", r.style.width = d.offsetWidth + "px"));
  }
  const Zt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Zt.setAttribute("aria-label", "Edit custom dashboard"), Zt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Ld.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Ls + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Ls + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Zt);
  let ho = !1, Wo = !1, jo = !1, ui = !1, la = null, zo = !1;
  const Sl = {}, Ja = (t, e) => {
    if (Sl[t] === e) return;
    Sl[t] = e;
    const a = Zt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, lo(a);
  }, _l = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + j(gt(t)) + '</span><span class="activityRowMeta">' + j(e) + "</span></span>", Ch = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + j(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + '</span><span class="tfIcon"' + we(t, Ea(t)) + "></span>" + _l(t, e ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + j(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + j(gt(t)) + ' on the dashboard">' + (e ? Iu : Tg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + j(t) + '" aria-label="Remove ' + j(gt(t)) + ' from favourites">' + Ec + "</button>" : "<span></span>") + "</li>";
  function Cl(t, e, a, r) {
    const s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => e(p) && !a.has(p) && M[p].state !== "unavailable").filter((p) => {
      const u = (gt(p) + " " + (Se.get(p) || "") + " " + p).toLowerCase();
      return s.every((m) => u.includes(m));
    }).sort((p, u) => (Se.get(p) || "~").localeCompare(Se.get(u) || "~") || gt(p).localeCompare(gt(u))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + j(p) + '"><span class="tfIcon"' + we(p, Ea(p)) + "></span>" + _l(p, Se.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Ah = "https://www.home-assistant.io/dashboards/", Td = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, xe = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  xe.setAttribute("aria-label", "Edit Home page"), xe.toggleAttribute("inert", !0);
  let Go = !1, Ha = !1, Al = "", Ll = null, kr = "page";
  function Tl(t, e) {
    const a = xe.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), s = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(s != null && s.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = xe.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && Tl(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Rs(r, e.left, e.width, s.offsetLeft, s.offsetWidth) : (r.style.left = s.offsetLeft + "px", r.style.width = s.offsetWidth + "px");
  }
  const Wn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + j(Td[t][0]) + '">' + Bc + "</button>", Ma = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + j(e) + '" ' + a + "></button>", Dl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + j(t) + '. Use the up and down arrows">' + Ai + "</button>", Dd = () => {
    var t;
    return ((t = Mt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, is = () => {
    var t;
    return ((t = Mt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + j(t) + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + s + '" aria-pressed="' + (a === s) + '">' + d + "</button>").join("") + "</div></div>", Ed = () => Zi(!0).filter((t) => _i[t.key]).map((t) => t.key);
  function jn() {
    var m, k, L, x, H, E, $;
    if (!Go) return;
    const t = Ut(), e = (B) => '<li class="hcHeRow" data-he-id="' + j(B) + '">' + Dl(gt(B)) + '<span class="tfIcon"' + we(B, Ea(B)) + "></span>" + _l(B, Se.get(B) || Oe(B)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + j(B) + '" aria-label="Take ' + j(gt(B)) + ' off Favourites">' + Ec + "</button></li>", a = (B) => {
      const F = _i[B];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + j(B) + '"' + (F.colour && $a(F.colour) ? ' style="' + $a(F.colour).slice(1) + '"' : "") + ">" + Dl(F.name) + '<span class="tfIcon"' + we("", F.icon, F.name) + '></span><span class="activityRowName">' + j(F.name) + "</span>" + Ma(Xs(B), F.name, 'data-he-sum="' + j(B) + '"') + "</li>";
    }, r = ((m = xe.querySelector("[data-he-search]")) == null ? void 0 : m.value) || "", s = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], d = new Set(((k = Mt.home) == null ? void 0 : k.areasOff) || []), p = (B) => '<li class="hcHeRow" data-he-id="' + j(B.id) + '">' + Dl(B.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="activityRowName">' + j(B.name) + "</span>" + Ma(!d.has(B.id), "Show " + B.name + " on Home", 'data-he-area="' + j(B.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Wn("welcome") + Ma(rl(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Io() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Wn("weather") + Ma(!!((L = Mt.home) != null && L.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Xa != null && Xa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Wn("energy") + Ma(!!((x = Mt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", wd(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Ma(Vo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", ul(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ul() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Ma(Vo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Ma(Vo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", bd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + Ma(!!((H = Mt.home) != null && H.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Ma(((E = Mt.home) == null ? void 0 : E.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Wn("favs") + "</div>" + fi("Show as", "data-he-favs-as", is() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (is() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + Ma(Vo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ha + '">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ha ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + j(r) + '"><ul class="tfTrayList">' + (Ha ? Cl(r, (B) => Ad.test(B), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Wn("suggest") + Ma(No(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Wn("sums") + Ma((($ = Mt.home) == null ? void 0 : $.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Dd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Ed().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + sl().map(p).join("") + "</ul>"
    };
    xe.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + s.map(([B, F]) => '<button class="tab segBtn' + (B === kr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (B === kr) + '" data-he-tab="' + B + '">' + F + "</button>").join("") + "</div>" + Mh(s, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[kr] + "</div>", Tl(!1), lo(xe);
  }
  const Mr = (t) => {
    Mt = { ...Mt, ...t }, Ta(), Ee(), jn();
  }, Sa = (t) => Mr({ home: { ...Mt.home || {}, ...t } });
  function El(t) {
    zn(), Go = t, Ha = !1, xe.classList.toggle("open", t), xe.toggleAttribute("inert", !t), f.classList.toggle("hcHomeEditing", t), g && S && Ue();
    const e = l("dashEditNav"), a = xe.querySelector(".tfTrayHead");
    e && t && (Ll = e.parentElement, a.appendChild(e)), e && !t && Ll && Ll.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Fu : Ts), t ? (Al = JSON.stringify(Mt), jn(), xr(xe, "Edit Home page", null)) : Al && JSON.stringify(Mt) !== Al && Ra("Changes saved");
  }
  xe.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Sh + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', f.appendChild(xe);
  let $o = null;
  const Qa = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Qa.setAttribute("role", "dialog"), f.appendChild(Qa);
  function zn() {
    $o && ($o.setAttribute("aria-expanded", "false"), $o = null, Qa.hidden = !0);
  }
  function Bd(t) {
    const e = $o;
    if (zn(), e === t) return;
    const [a, r] = Td[t.dataset.info];
    Qa.setAttribute("aria-label", a), Qa.innerHTML = '<div class="hcInfoTitle">' + j(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Ah + '" target="_blank" rel="noopener">Learn more</a>', Qa.hidden = !1, $o = t, t.setAttribute("aria-expanded", "true");
    const s = t.getBoundingClientRect(), d = Qa.offsetWidth, p = Qa.offsetHeight;
    Qa.style.left = Math.max(8, Math.min(innerWidth - d - 8, s.left + s.width / 2 - d / 2)) + "px", Qa.style.top = (s.bottom + 8 + p > innerHeight - 8 ? Math.max(8, s.top - 8 - p) : s.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    $o && !t.composedPath().some((e) => e === Qa || e === $o) && zn();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if ($o) {
        t.stopPropagation();
        const a = $o;
        zn(), a.focus();
        return;
      }
      if (Ha) {
        t.stopPropagation(), Ha = !1, jn();
        return;
      }
      Go && (t.stopPropagation(), El(!1), (e = l("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Lh = (t) => t.dataset.heList === "favs" ? Ut() : t.dataset.heList === "areas" ? sl().map((e) => e.id) : Ed(), Pd = (t, e) => t.dataset.heList === "favs" ? Mr({ favourites: e }) : t.dataset.heList === "areas" ? (Mr({ areaOrder: e }), Ue()) : Sa({ sumOrder: e });
  xe.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, s = Lh(r), d = s.indexOf(a.dataset.heId), p = d + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= s.length || (s.splice(p, 0, s.splice(d, 1)[0]), Pd(r, s), (u = xe.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), xe.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Hl(t, e.closest("[data-he-id]"), "heId", (s) => Pd(a, s), (s) => xe.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(s) + '"]'));
  }), xe.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      jn();
      const a = xe.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), xe.addEventListener("click", (t) => {
    var F, D, X, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Bd(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      kr = r.dataset.heGo, Ha = !1, zn(), jn(), xr(xe, "Edit Home page", kr, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      zn(), xr(xe, "Edit Home page", null);
      return;
    }
    const s = e.closest("[data-he-tab]");
    if (s) {
      const V = xe.querySelector(".hcTrayTabs .rubberIndicator"), wt = { left: V.offsetLeft, width: V.offsetWidth };
      kr = s.dataset.heTab, Ha = !1, zn(), jn(), Tl(!0, wt), xe.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Sa({ welcome: !rl() });
      return;
    }
    const d = e.closest("[data-he-card]");
    if (d) {
      const V = d.dataset.heCard, wt = ["sums", "favs"].includes(V) ? ((F = Mt.home) == null ? void 0 : F[V]) !== !1 : !!((D = Mt.home) != null && D[V]);
      Sa({ [V]: !wt });
      return;
    }
    const p = e.closest("[data-he-favs-as]");
    if (p) {
      Sa({ favsAs: p.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      Sa({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const m = e.closest("[data-he-area-size]");
    if (m) {
      Sa({ areaSize: m.dataset.heAreaSize });
      return;
    }
    const k = e.closest("[data-he-area-layout]");
    if (k) {
      Sa({ areaLayout: k.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      Sa({ fitTogether: !((X = Mt.home) != null && X.fitTogether) });
      return;
    }
    const L = e.closest("[data-he-cards-as]");
    if (L) {
      Sa({ cardsAs: L.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const V = x.dataset.heFlag;
      Sa({ [V]: !Vo(V) }), V === "favsTitle" && Na();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Mr({ suggest: !No() });
      return;
    }
    const H = e.closest("[data-he-area]");
    if (H) {
      const V = new Set(((C = Mt.home) == null ? void 0 : C.areasOff) || []), wt = H.dataset.heArea;
      V.has(wt) ? V.delete(wt) : V.add(wt), Sa({ areasOff: [...V] });
      return;
    }
    const E = e.closest("[data-he-sum]");
    if (E) {
      const V = E.dataset.heSum, wt = !Xs(V), Lt = Mt.home || {};
      Sa(Ru.includes(V) ? { shownSums: wt ? [...Lt.shownSums || [], V] : (Lt.shownSums || []).filter((Pt) => Pt !== V) } : { hiddenSums: wt ? (Lt.hiddenSums || []).filter((Pt) => Pt !== V) : [...Lt.hiddenSums || [], V] });
      return;
    }
    const $ = e.closest("[data-he-remove]");
    if ($) {
      Mr({ favourites: Ut().filter((V) => V !== $.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ha = !Ha, jn(), Ha && xe.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const B = e.closest("[data-he-pick-id]");
    B && (Ha = !1, xe.querySelector("[data-he-search]").value = "", Mr({ favourites: [...Ut(), B.dataset.hePickId] }));
  });
  function De() {
    var L, x, H;
    const t = ma && f.classList.contains("tfBoard");
    if (Zt.classList.toggle("open", t), Zt.classList.toggle("tucked", t && ho), Zt.toggleAttribute("inert", !t), t || (zo = !1), Fd(), !t) return;
    const e = Zt.querySelector("[data-tray-tuck]");
    e.innerHTML = ho ? Lc : Pc, e.setAttribute("aria-expanded", String(!ho)), e.setAttribute("aria-label", ho ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ce().hidden.filter((E) => !Fo.includes(E) && Fn().some(($) => $.key === E)), r = (E, $) => '<button class="tfTrayCard" type="button" data-tray-card="' + j(E) + '" aria-label="' + j(Pa(E)) + ": drag it onto the board, or press to " + $ + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + "</span>" + j(Pa(E)) + "</button>", s = a.filter((E) => !zr.includes(E)), d = zr.filter((E) => a.includes(E));
    Ja("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Wn("welcome") + '<button class="switch' + (ce().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ce().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((L = Mt.dash) != null && L.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = Mt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Ml(!1)), Ja("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((E) => r(E, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Ja("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((E) => r(E, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Ja("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ce().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + zo + '">' + (zo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(Mt.favHidden || []), u = Ut(), m = [...u, ...[...p].filter((E) => !u.includes(E) && M[E])];
    Ja("favs", m.map((E) => Ch(E, p.has(E), u.includes(E))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Zt.querySelector('[data-pick="tiles"]').hidden = !jo, Zt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(jo)), jo && Ja("tilepick", Cl(Zt.querySelector("[data-tile-search]").value, (E) => Rr.includes(E.split(".")[0]), new Set(ts()), "data-tile-pick")), Zt.querySelector('[data-tray="roompick"]').hidden = !ui, Zt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ui));
    const k = new Set(((H = Mt.dash) == null ? void 0 : H.areasOff) || []);
    if (Ja("areas", Et(Bt).map((E) => '<li class="hcHeRow" data-area-id="' + j(E.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + j(E.name) + '. Use the up and down arrows">' + Ai + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="activityRowName">' + j(E.name) + '</span><button class="switch' + (k.has(E.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !k.has(E.id) + '" aria-label="Show ' + j(E.name) + ' in the Areas card" data-area-on="' + j(E.id) + '"></button></li>').join("")), ui) {
      const E = new Set(ts());
      Ja("roompick", Et(Bt).filter(($) => !E.has("room:" + $.id)).map(($) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + j($.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + $.id, $.icon || "mdi:texture-box", $.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + j($.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Zt.querySelector('[data-pick="favs"]').hidden = !Wo, Zt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Wo)), Wo && Ja("pick", Cl(Zt.querySelector("[data-fav-search]").value, (E) => Ad.test(E), new Set(Ut()), "data-fav-pick")), Ja("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ji() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ji() + '" data-fav-title aria-label="Title"></button>'), Ja("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (No() ? " on" : "") + '" type="button" role="switch" aria-checked="' + No() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Gn = (t) => {
    Mt = { ...Mt, ...t }, Ta(), Ee(), De();
  };
  function Rd(t, e) {
    const a = Mt, r = new Set(Mt.favHidden || []);
    e ? r.delete(t) : r.add(t), Gn({ favHidden: [...r] }), e ? Ra(gt(t) + " put back") : Ra(gt(t) + " hidden", rs(a));
  }
  const Th = (t) => {
    const e = Mt;
    Gn({ favourites: Ut().filter((a) => a !== t), favHidden: (Mt.favHidden || []).filter((a) => a !== t) }), Ra(gt(t) + " removed from favourites", rs(e));
  }, Dh = (t) => {
    Gn({ favourites: [...Ut().filter((e) => e !== t), t], favHidden: (Mt.favHidden || []).filter((e) => e !== t) }), Ra(gt(t) + " added to favourites");
  };
  Zt.addEventListener("click", (t) => {
    var a, r, s;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        yr = e.dataset.trayTab, Ml(!0), Zt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        yr = e.dataset.trayGo, Ml(!1), xr(Zt, "Edit custom dashboard", yr, Ld.find(([d]) => d === yr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        xr(Zt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) bl(!1);
      else if (e.hasAttribute("data-info")) Bd(e);
      else if (e.hasAttribute("data-dash-sums"))
        In({ ...ll(), hidden: ll().hidden.filter((d) => d !== "sums"), sumsOff: !((a = Mt.dash) != null && a.sumsOff) }), Ee(), De();
      else if (e.hasAttribute("data-dash-welcome")) {
        const d = ce();
        In({ ...d, welcome: !d.welcome }), Ee(), De();
      } else if (e.hasAttribute("data-tray-tuck"))
        ho = !ho, De();
      else if (e.hasAttribute("data-phone-toggle"))
        zo = !zo, De(), zo && ((r = ba.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (wl(e.dataset.trayCard), De());
      else if (e.dataset.favEye) Rd(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Th(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Wo = !Wo, De(), Wo && Zt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Dh(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        jo = !jo, De(), jo && Zt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Sd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ui = !ui, De();
      else if (e.dataset.roomPick) Sd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const d = new Set(((s = Mt.dash) == null ? void 0 : s.areasOff) || []);
        d.has(e.dataset.areaOn) ? d.delete(e.dataset.areaOn) : d.add(e.dataset.areaOn), In({ ...ce(), areasOff: [...d] }), Ee(), De();
      } else e.hasAttribute("data-fav-suggest") ? Gn({ suggest: !No() }) : e.hasAttribute("data-fav-title") && (Gn({ favsTitle: !Ji() }), Na());
    }
  }), Zt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && De();
  });
  const Hd = (t) => {
    Mt = { ...Mt, areaOrder: t }, Ta(), Ee(), De();
  };
  Zt.addEventListener("keydown", (t) => {
    var p, u, m;
    const e = (u = (p = t.target).closest) == null ? void 0 : u.call(p, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Et(Bt).map((k) => k.id), s = r.indexOf(a), d = s + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= r.length || (r.splice(d, 0, r.splice(s, 1)[0]), Hd(r), (m = Zt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || m.focus());
  }), Zt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Hl(t, e.closest("[data-area-id]"), "areaId", Hd, (a) => Zt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Uo = window.visualViewport, Bl = () => {
    if (!Uo) return;
    const t = Math.max(0, Math.round(window.innerHeight - Uo.height - Uo.offsetTop));
    Zt.style.bottom = t > 40 ? t + "px" : "";
  };
  Uo == null || Uo.addEventListener("resize", Bl), Uo == null || Uo.addEventListener("scroll", Bl), Zt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Bl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Zt.addEventListener("keydown", (t) => {
    var a, r;
    const e = !!((r = (a = t.target).closest) != null && r.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? jo : Wo) || (t.stopPropagation(), e ? jo = !1 : Wo = !1, De(), Zt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Nd(t, e, a, r) {
    t.preventDefault();
    const s = t.clientX, d = t.clientY;
    let p = null, u = 0;
    const m = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), k = (x) => {
      if (!p) {
        if (Math.hypot(x.clientX - s, x.clientY - d) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", f.appendChild(p);
      }
      p.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const H = !ho && x.clientX >= Zt.getBoundingClientRect().left;
      if (a === "card") {
        const B = S.getBoundingClientRect(), { w: F } = mn(S.clientWidth);
        ae = !H && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top + hn ? { key: r, col: Math.max(0, Math.floor((x.clientX - B.left) / (F + ue))), row: Math.max(0, Math.floor((x.clientY - B.top - hn) / Ba)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ue();
        }));
        return;
      }
      const E = S.querySelector(".tfDash-favs"), $ = E == null ? void 0 : E.getBoundingClientRect();
      if (la = null, $ && !H && x.clientX >= $.left && x.clientX <= $.right && x.clientY >= $.top && x.clientY <= $.bottom) {
        let B = 1 / 0;
        E.querySelectorAll('[data-k^="fav:"]').forEach((F, D) => {
          const X = F.getBoundingClientRect(), C = Math.hypot(x.clientX - (X.left + X.width / 2), x.clientY - (X.top + X.height / 2));
          C < B && (B = C, la = { i: D, r: X, after: x.clientX > X.left + X.width / 2 });
        }), la || (la = { i: 0, r: null, after: !1 });
      }
      la != null && la.r ? (m.isConnected || f.appendChild(m), Object.assign(m.style, { left: (la.after ? la.r.right : la.r.left) - 2 + "px", top: la.r.top + 8 + "px", height: la.r.height - 16 + "px" })) : m.remove();
    }, L = () => {
      if (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", L), window.removeEventListener("pointercancel", L), cancelAnimationFrame(u), p == null || p.remove(), m.remove(), a === "card") {
        if (!p) wl(r);
        else if (ae != null && ae.fromTray) {
          Ue();
          const B = Pa(r) + kd(r), F = ce(), D = qn();
          ae = null, vr({ ...F, hidden: F.hidden.filter((X) => X !== r) }, D), Ra(B);
        }
        ae = null, Ue(), Ee(), De();
        return;
      }
      if (!la) return;
      const x = new Set(Mt.favHidden || []);
      x.delete(r);
      const H = Ut().filter((B) => B !== r), E = H.filter((B) => !x.has(B)), $ = E[Math.min(la.i + (la.after ? 1 : 0), E.length)];
      H.splice($ ? H.indexOf($) : H.length, 0, r), la = null, Gn({ favourites: H, favHidden: [...x] }), Ra(gt(r) + " put back");
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", L), window.addEventListener("pointercancel", L);
  }
  const Od = {
    sums: 201,
    wx: 364,
    favs: 364,
    areas: 364,
    act: 364,
    energy: 288,
    avg: 288,
    aq: 288,
    pollen: 288,
    radar: 288,
    hourly: 288,
    sun: 288,
    moon: 288,
    uv: 288,
    humidity: 288,
    pressure: 288,
    wind: 288,
    visibility: 288
  }, Id = 136, Eh = 288, Bh = 0.8, Ph = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ba.setAttribute("aria-label", "Phone order"), ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Ec + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(ba);
  let Pl = "";
  function Fd() {
    var u;
    const t = zo && ma && f.classList.contains("tfBoard") && !ho;
    if (ba.classList.toggle("open", t), ba.toggleAttribute("inert", !t), !t) return;
    const e = cl().filter((m) => !ce().hidden.includes(m.key)), a = e.length, r = (m) => Math.round(m * Bh * 10) / 10 + "px", s = (m, k) => {
      const L = m.el.classList.contains("tfDac"), x = m.tile ? L ? Eh : Id : Od[m.key] || Id;
      return '<button class="tfPhoneBlock' + (m.tile ? " tile" : "") + '" type="button" data-phone-key="' + j(m.key) + '" style="min-height:' + r(x) + '" aria-label="' + j(Pa(m.key) + ", " + (k + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (m.tile ? we(m.key, Ea(m.key)) : we(m.key, Ph[m.key])) + '></span><span class="tfPhoneName">' + j(Pa(m.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + j(((u = S.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Od.sums) + '"><span class="tfPhoneName">' + j(Pa("sums")) + "</span></div>" + e.map(s).join("");
    if (ba.querySelector('[data-phone="note"]').innerHTML = ce().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === Pl) return;
    Pl = d;
    const p = ba.querySelector('[data-phone="list"]');
    p.innerHTML = d, lo(p);
  }
  function qd(t, e) {
    var a;
    In({ ...ce(), phone: t }), De(), e && ((a = ba.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Rl = () => [...ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Rh(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = ba.querySelector(".tfPhoneScreen"), s = Rl().join();
    e.classList.add("moving");
    const d = (u) => {
      const m = r.getBoundingClientRect();
      u.clientY > m.bottom - 40 ? r.scrollTop += 12 : u.clientY < m.top + 40 && (r.scrollTop -= 12);
      const k = [...a.querySelectorAll("[data-phone-key]")].find((H) => {
        const E = H.getBoundingClientRect();
        return H !== e && u.clientX >= E.left && u.clientX <= E.right && u.clientY >= E.top && u.clientY <= E.bottom;
      });
      if (!k) return;
      const L = k.getBoundingClientRect(), x = k.classList.contains("tile") ? u.clientX < L.left + L.width / 2 : u.clientY < L.top + L.height / 2;
      a.insertBefore(e, x ? k : k.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const u = Rl();
      Pl = "", u.join() !== s ? qd(u) : Fd();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  ba.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Rh(t, e);
  }), ba.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      zo = !1, De(), (a = Zt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...s } = ce();
      In(s), De();
    }
  }), ba.addEventListener("keydown", (t) => {
    var p, u, m, k;
    if (t.key === "Escape") {
      t.stopPropagation(), zo = !1, De(), (p = Zt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (k = (m = (u = t.target).closest) == null ? void 0 : m.call(u, "[data-phone-key]")) == null ? void 0 : k.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Rl(), s = r.indexOf(e), d = s + a;
    d < 0 || d >= r.length || ([r[s], r[d]] = [r[d], r[s]], qd(r, e));
  });
  function Hl(t, e, a, r, s) {
    t.preventDefault();
    const d = Pe.drag, p = We(), u = 1 + d.lift / 100, m = [...e.parentElement.children].filter((xt) => xt.dataset[a]), k = m.indexOf(e), L = m.map((xt) => xt.getBoundingClientRect()), x = m.length - 1, H = L[k].height + (m.length > 1 ? L[1].top - L[0].bottom : 0), E = (xt) => L[xt].top + L[xt].height / 2, $ = t.clientY, B = L[0].top - L[k].top, F = L[x].top - L[k].top;
    let D = 0, X = 0, C = 0, V = 1, wt = k, Lt = 0;
    e.classList.add("hcListDragging"), m.forEach((xt) => {
      xt !== e && (xt.style.transition = p ? "none" : "transform " + d.gap + "ms " + Re.land);
    });
    const Pt = () => {
      if (Lt = requestAnimationFrame(Pt), p) {
        X = D, e.style.transform = "translateY(" + X + "px)";
        return;
      }
      C = mc(C, D - X, d.pull / 100, d.keep / 100), X += C, V += (u - V) * 0.25;
      const xt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + X.toFixed(2) + "px) scale(" + (V * (1 - 0.063 * xt)).toFixed(4) + "," + (V * (1 + 0.1 * xt)).toFixed(4) + ")";
    };
    Lt = requestAnimationFrame(Pt);
    const _t = (xt) => {
      D = Math.max(B, Math.min(F, xt.clientY - $));
      const $t = E(k) + D, fe = m.filter((he, ye) => ye !== k && E(ye) < $t).length;
      fe !== wt && (wt = fe, m.forEach((he, ye) => {
        he !== e && (he.style.transform = k < wt && ye > k && ye <= wt ? "translateY(" + -H + "px)" : wt < k && ye >= wt && ye < k ? "translateY(" + H + "px)" : "");
      }));
    }, lt = () => {
      window.removeEventListener("pointermove", _t), window.removeEventListener("pointerup", lt), window.removeEventListener("pointercancel", lt), cancelAnimationFrame(Lt);
      const xt = e.getBoundingClientRect(), $t = e.dataset[a];
      m.forEach((Fa) => {
        Fa.style.transition = "none", Fa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const fe = m.map((Fa) => Fa.dataset[a]);
      fe.splice(wt, 0, fe.splice(k, 1)[0]), r(fe);
      const he = s($t) || e;
      if (requestAnimationFrame(() => m.forEach((Fa) => {
        Fa.style.transition = "";
      })), p) return;
      const ye = he.getBoundingClientRect(), Ia = xt.top + xt.height / 2 - (ye.top + ye.height / 2);
      he.classList.add("hcListLanding"), he.animate([{ transform: "translateY(" + Ia + "px) scale(" + V + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: d.slide, easing: Re.land }).finished.then(() => {
        he.classList.remove("hcListLanding"), gc(he);
      }, () => he.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", _t), window.addEventListener("pointerup", lt), window.addEventListener("pointercancel", lt);
  }
  function Hh(t, e) {
    Hl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set(Ut());
        Sl.favs = null, Gn({ favourites: a.filter((s) => r.has(s)) });
      },
      (a) => Zt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Zt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Nd(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Hh(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Nd(t, a, "fav", a.dataset.trayFav);
  });
  function Nh(t) {
    if (!ma || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Fn().find((Pt) => Pt.el === e);
    if (!a || Fo.includes(a.key)) return;
    const r = On.get(a.key), { w: s } = mn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), fo();
    const d = t.clientX, p = t.clientY;
    let u = !1, m = 0;
    const k = Pe.drag, L = We();
    let x = 0, H = 0, E = 0, $ = 0, B = 0, F = 0, D = L || k.stick === 0, X = 0;
    const C = (Pt, _t, lt, xt) => {
      e.style.transform = "translate(" + E.toFixed(2) + "px," + $.toFixed(2) + "px) rotate(" + Pt.toFixed(2) + "deg) rotate(" + _t + "rad) scale(" + lt.toFixed(4) + "," + xt.toFixed(4) + ") rotate(" + -_t + "rad)";
    }, V = () => {
      if (X = requestAnimationFrame(V), L) {
        E = x, $ = H, C(0, 0, 1, 1);
        return;
      }
      if (!D) {
        const $t = Math.min(Math.hypot(x, H) / Math.max(1, k.stick), 1);
        E = x * 0.35, $ = H * 0.35, C(0, Math.atan2(H, x), 1 + 0.155 * $t, 1 - 0.1 * $t);
        return;
      }
      B = mc(B, x - E, k.pull / 100, k.keep / 100), F = mc(F, H - $, k.pull / 100, k.keep / 100), E += B, $ += F;
      const Pt = Math.hypot(B, F), _t = Math.min(Pt / 48, 1), lt = Math.max(-5, Math.min(k.tilt, B * 0.32)), xt = 1 + k.lift / 100;
      C(lt, Math.atan2(F, B), xt * (1 + 0.1 * _t), xt * (1 - 0.063 * _t));
    }, wt = (Pt) => {
      if (x = Pt.clientX - d, H = Pt.clientY - p, !u) {
        if (Math.hypot(x, H) < 4) return;
        u = !0, ae = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), X = requestAnimationFrame(V);
      }
      !D && Math.hypot(x, H) > k.stick && (D = !0, B = x * 0.085, F = H * 0.085), ae.col = Math.round((r.x + x) / (s + ue)), ae.row = Math.round((r.y + H - hn) / Ba), m || (m = requestAnimationFrame(() => {
        m = 0, Ue();
      }));
    }, Lt = () => {
      var Ia;
      if (window.removeEventListener("pointermove", wt), window.removeEventListener("pointerup", Lt), window.removeEventListener("pointercancel", Lt), !u) return;
      const Pt = (Tr) => {
        Tr.preventDefault(), Tr.stopImmediatePropagation();
      };
      window.addEventListener("click", Pt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Pt, { capture: !0 }), 300), cancelAnimationFrame(m), cancelAnimationFrame(X);
      const _t = e.getBoundingClientRect(), lt = a.key;
      e.style.transition = "none", Ue(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ae = null, vr(ce(), qn()), Ue(), Ee();
      const xt = (Ia = Fn().find((Tr) => Tr.key === lt)) == null ? void 0 : Ia.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", xt && (xt.style.transition = "");
      }), !xt || L) return;
      xt.style.transition = "none";
      const $t = xt.getBoundingClientRect(), fe = _t.left + _t.width / 2 - ($t.left + $t.width / 2), he = _t.top + _t.height / 2 - ($t.top + $t.height / 2);
      xt.style.zIndex = "20", xt.animate([{ transform: "translate(" + fe + "px," + he + "px) scale(" + (1 + k.lift / 100) + ")" }, { transform: "none" }], { duration: k.slide, easing: Re.land }).finished.then(() => {
        xt.style.zIndex = "", gc(xt);
      }, () => {
        xt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", wt), window.addEventListener("pointerup", Lt), window.addEventListener("pointercancel", Lt);
  }
  function Vd(t = !1) {
    const e = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = a;
    const s = Jc.find((d) => d.id === e.dataset.graph);
    s ? jf(e, s).then(() => {
      (t || r) && zf(e);
    }) : mp(e.dataset.graph, e).then(() => {
      t && ad(e);
    });
  }
  function Wd() {
    var m, k, L;
    jt = Hi.model(i(), { madeUp: !v }), gr(), M = jt.states, M[(m = Mt.sources) == null ? void 0 : m.grid] && (jt.grid = Mt.sources.grid), M[(k = Mt.sources) == null ? void 0 : k.alarm] && (jt.security.alarms = [Mt.sources.alarm]), ge.forEach((x, H) => {
      const E = M[H], $ = (E == null ? void 0 : E.attributes) || {};
      if (!E || Date.now() - x.at > 2 * 60 * 1e3) {
        ge.delete(H);
        return;
      }
      x.pos != null && E.state !== "opening" && E.state !== "closing" && Math.abs(Ua(H) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs(($.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && ge.delete(H);
    });
    const t = [];
    let e = 0;
    const a = Dt();
    Bt = a.filter((x) => x.room).map((x) => x.room), Bt.some((x) => x.id === ot) || (ot = ((L = Bt[0]) == null ? void 0 : L.id) || null);
    const r = ct === "weather" ? { key: "weather", name: "Weather" } : ct && a.find((x) => x.key === ct);
    if (r || (ct = null), f.classList.toggle("tfAreaOpen", !!r), f.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), f.classList.toggle("tfDash", !r), Se = /* @__PURE__ */ new Map(), jt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((H) => [H.id, ...H.readings])].forEach((H) => Se.set(H, x.name))), !r) return Yf(t, Zi());
    if (t.push({ key: "areahead", html: Oh(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const s = r.ids, d = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: En(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Jr(p, ++e) }), p == null || p.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: ji(x, ++e) }));
    const u = [...s, ...((p == null ? void 0 : p.plugs) || []).filter((x) => !s.includes(x))];
    return u.length && t.push({ key: "block:" + d, order: ++e, tiles: u.map((x) => ({ key: x, html: pn(x) })) }), t;
  }
  const Oh = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Lc + '</button><div class="settingsTitle">' + j(t.name) + "</div></div>";
  let jd = 0, zd = null;
  const Gd = (t) => t === "weather" ? ro.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function $d(t) {
    var e, a;
    ct || (jd = mi().scrollTop, zd = ((e = Gd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), ct = t, t.startsWith("room:") && (ot = t.slice(5)), Na(), mi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let hi = null;
  function Ih(t, e) {
    if (hi == null || hi(), e == null) return;
    const a = mi(), r = performance.now() + 1500, s = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const p = () => {
      cancelAnimationFrame(d), s.forEach((m) => window.removeEventListener(m, p, !0)), hi = null;
    }, u = () => {
      const m = t();
      if (m != null && m.isConnected) {
        const k = m.getBoundingClientRect().top - e;
        Math.abs(k) > 0.5 && (a.scrollTop += k);
      }
      performance.now() < r ? d = requestAnimationFrame(u) : p();
    };
    s.forEach((m) => window.addEventListener(m, p, { capture: !0, passive: !0 })), hi = p, u();
  }
  function Nl() {
    var a;
    const t = ct;
    ct = null, Na(), mi().scrollTop = jd, Ih(() => Gd(t), zd);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ro.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Fh = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + j(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Ud = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function mi() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Yd(t) {
    const e = mi(), a = (u) => {
      const m = u.getBoundingClientRect();
      return m.height && m.bottom > 0 && m.top < window.innerHeight;
    }, r = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), s = r == null ? void 0 : r.dataset.k, d = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const p = r != null && r.isConnected ? r : s && S.querySelector('[data-k="' + CSS.escape(s) + '"]');
    p != null && p.isConnected && d != null && (e.scrollTop += p.getBoundingClientRect().top - d);
  }
  function Na() {
    if (!g || !S) return;
    const t = Wd(), e = (s) => {
      var d;
      return (((d = s.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + s.dataset.iconFor + "|" + (s.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((s) => {
      s.firstElementChild && (a.get(e(s)) || a.set(e(s), []).get(e(s))).push(s.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((s) => s.remove()), ya.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((s) => s.tiles ? Fh(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => ya.set(d.key, d.html)) : ya.set(s.key, s.html)), Ri = Ud(t), r.querySelectorAll("[data-icon-for]").forEach((s) => {
      var p;
      const d = !s.firstElementChild && ((p = a.get(e(s))) == null ? void 0 : p.shift());
      d && s.appendChild(d);
    }), S.append(...r.children), Wr(t.weather), Co(), hl.disconnect(), Ue(), lo(S), Yl(S), Hn(S), Q(), gp(), Ar(), sp(), rp(), requestAnimationFrame(kt);
  }
  const Zd = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Ol = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Il(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), r = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (r == null ? void 0 : r.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => e.hasAttribute(p) ? t.setAttribute(p, e.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...e.style].forEach((p) => t.style.setProperty(p, e.style.getPropertyValue(p))), t);
    const s = (p) => {
      var u;
      return ((u = p.dataset) == null ? void 0 : u.iconFor) !== void 0;
    };
    if (s(t) && s(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((p) => {
        e.hasAttribute(p.name) || t.removeAttribute(p.name);
      }), [...e.attributes].forEach((p) => {
        t.getAttribute(p.name) !== p.value && t.setAttribute(p.name, p.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((p) => {
      e.hasAttribute(p.name) || t.removeAttribute(p.name);
    }), [...e.attributes].forEach((p) => t.setAttribute(p.name, p.value));
    const d = [...e.children];
    return [...t.children].forEach((p, u) => Il(p, d[u])), t;
  }
  function Kd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = Zd(t), s = Il(t, a.firstElementChild);
    lo(s), Yl(s), Hn(s), Ol(s, r);
  }
  function Ee() {
    !g || !S || ae || Yd(qh);
  }
  function qh() {
    if (La = !1, !S.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = Wd();
    if (Ud(t) !== Ri) {
      Na();
      return;
    }
    const e = (a) => So().some((r) => {
      const s = r.slice(r.indexOf("|") + 1);
      return a === s || a.endsWith(":" + s);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (ya.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && rn) {
        La = !0;
        return;
      }
      const s = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      s && (ya.set(r.key, r.html), Kd(s, r.html), r.key.startsWith("energy:") && gp());
    })), Ar(), sp(), rp(), c(), Q(), Le == null || Le.update(), Te == null || Te.forEach((a) => a.update()), f.classList.contains("tfDash") && Qi(), requestAnimationFrame(kt);
  }
  const Sr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && zt(t.color_mode)]],
    climate: (t) => [["Current temperature", Fe(t.current_temperature) + " °C"], ["Target", Fe(t.temperature) + " °C"], ["Action", zt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", zt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", zt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && zt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && zt(t.operation_mode)], ["Away", t.away_mode && zt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Fe(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : zt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Vh = (t) => ao(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Wh(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + j(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((s) => uo(s, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ct = document.createElement("div");
  Ct.className = "tfMoreBackdrop", Ct.hidden = !0, f.appendChild(Ct);
  const to = document.createElement("div");
  to.className = "tfMoreBackdrop tfMoreUnder", to.hidden = !0, f.insertBefore(to, Ct);
  const Fl = (t, e) => {
    for (let a = t; a && a !== Ct; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if ((r === "auto" || r === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let gi = null;
  Ct.addEventListener("touchstart", (t) => {
    gi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Ct.addEventListener("touchmove", (t) => {
    var s, d;
    if (!gi || t.touches.length > 1 || (d = (s = t.target).closest) != null && d.call(s, "input,textarea,select")) return;
    const e = t.touches[0], a = gi.x - e.clientX, r = gi.y - e.clientY;
    gi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Fl(t.target, r) && t.preventDefault();
  }, { passive: !1 }), Ct.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Fl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const jh = () => window.innerWidth <= 620;
  let Ye = null;
  Ct.addEventListener("pointerdown", (t) => {
    const e = Ct.querySelector(".tfMorePair");
    !jh() || !e || !e.contains(t.target) || !t.isPrimary || Ct._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (Ye = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Ct.addEventListener("pointermove", (t) => {
    if (!Ye || !t.isPrimary) return;
    const e = t.clientY - Ye.y, a = performance.now();
    if (!Ye.on) {
      if (Math.abs(t.clientX - Ye.x) > 8 || e < -8 || !Ye.grab && Fl(Ye.from, -1)) {
        Ye = null;
        return;
      }
      if (e < 8) return;
      Ye.on = !0;
      try {
        Ct.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Ye.v = (e - Ye.dy) / Math.max(1, a - Ye.t), Ye.dy = e, Ye.t = a, Ye.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Xd = (t) => {
    if (!Ye || !t.isPrimary) return;
    const e = Ye;
    if (Ye = null, !e.on) return;
    const a = (k) => {
      k.preventDefault(), k.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), s = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || We()) {
      r ? tc() : e.pair.animate([{ transform: s }, { transform: "none" }], { duration: 320, easing: Re.spring });
      return;
    }
    const d = q;
    Ct._closing = !0, Ct.style.pointerEvents = "none", Ct.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Re.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: s }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Re.exit, fill: "forwards" });
    let u = !1;
    const m = () => {
      u || (u = !0, Ct._closing = !1, Ct.style.pointerEvents = "", Ct.getAnimations().forEach((k) => k.cancel()), e.pair.getAnimations().forEach((k) => k.cancel()), q === d && tc());
    };
    p.finished.then(m, m), setTimeout(m, 300);
  };
  Ct.addEventListener("pointerup", Xd), Ct.addEventListener("pointercancel", Xd);
  function ql() {
    const t = Ct.querySelector(".tfMorePair"), e = Ct.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ql, { passive: !0 }), g && Vr();
  let mo = [];
  const zh = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Gh(t) {
    const e = (B, F = "") => '<div class="tfMoreHead">' + (q != null && q.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Su + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + j(B) + "</div>" + F + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Tc + "</button></div>", a = (B, F) => '<div class="tfMoreNow"><div class="tfMoreState">' + j(B) + "</div></div>", r = Wh;
    if (t === "favourites") {
      const B = Ut(), F = new Set(B), D = [{ name: "Starred", ids: B }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((X) => ({ name: X.name, ids: [...X.actions, ...X.plugs] }))].map((X, C) => C ? { ...X, ids: X.ids.filter((V) => !F.has(V)) } : X).filter((X) => X.ids.length);
      return [e("Favourites"), a(B.length ? B.length + " starred" : "None starred"), r(D, { star: !0 }, !0)];
    }
    const s = (B, { name: F = "", alert: D = !1, plain: X = !1 } = {}) => {
      const C = X ? [] : B.filter((Lt) => Rr.includes(Lt.split(".")[0])), V = B.filter((Lt) => !C.includes(Lt)), wt = (Lt) => Lt.startsWith("vacuum.") && Yt(Lt).battery_level != null ? Yt(Lt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (F ? '<div class="tfMoreGroupName">' + j(F) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Lt) => pn(Lt, !0)).join("") + V.map((Lt) => uo(Lt, { plain: X, alert: D, say: X ? wt(Lt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const B = Zi().find((C) => C.key === t.slice(8));
      if (!B) return null;
      const F = B.key === "light" ? (B.groups || []).flatMap((C) => C.ids) : [], D = F.some((C) => {
        var V;
        return ((V = M[C]) == null ? void 0 : V.state) === "on";
      }), X = F.length ? '<button class="primary" type="button" data-acts="' + pr(F.map((C) => ["light", D ? "turn_off" : "turn_on", C])) + '">' + (D ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(B.name), '<div class="tfMoreNowRow">' + a(B.value) + X + "</div>", ...(B.groups || []).map((C) => s(C.ids, { name: C.name === B.name ? "" : C.name, alert: C.alert, plain: B.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, B, F] = t.split(":"), D = jt.rooms.find((V) => V.id === B), X = D && R(D).find((V) => V.key === F);
      if (!X) return null;
      const C = X.acts ? '<button class="primary" type="button" data-acts="' + pr(X.acts) + '">' + (X.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(D.name + " " + X.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(X.value) + C + "</div>", s(W(D, F))];
    }
    const d = t.split(".")[0];
    M[t];
    const p = Rr.includes(d) || Ci.includes(d) ? w(t) : Vl(t), u = im(t), m = [...u ? u.pages.map((B) => ({ name: B.name, svg: B.svg, tabs: B.tabs, html: B.space + '<div class="tfMoreCtl"' + Do(t).replace(" data-light", "") + ">" + B.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: da, ...Cr(t) ? { tabs: ap() } : {}, html: Zh(t) + (Cr(t) ? ep(t) : "") + (d === "plant" ? fm(t).join("") : "") + p.sections.filter(Boolean).join("") }], { name: "Info", svg: Bc, html: cm(t) }];
    q && q.page == null && (q.page = 0), q && (q.pages = m.length);
    const k = (q == null ? void 0 : q.page) || 0, L = (q == null ? void 0 : q.mode) || "", x = m.length - 1, H = !!(u != null && u.infoButton), E = m.flatMap((B, F) => (H && F === x ? [] : B.tabs || [{ name: B.name, svg: B.svg }]).map((D) => ({ ...D, page: F }))), $ = (B) => B.page === k && (B.mode == null || B.mode === L);
    return [
      Uh(t, p),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (L && k === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + m.map((B) => '<section class="tfMorePage" aria-label="' + B.name + '" data-mode="' + L + '">' + B.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (H ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (E.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (H ? "Views" : "Pages") + '">' + E.map((B) => '<button type="button" role="tab" aria-selected="' + $(B) + '" aria-label="' + B.name + '" title="' + B.name + '" data-more-page="' + B.page + '"' + (B.mode != null ? ' data-more-mode="' + B.mode + '"' : "") + ($(B) ? "" : ' tabindex="-1"') + ">" + B.svg + "</button>").join("") + "</div>" : "") + (H ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (k === x) + '" data-more-page="' + x + '" data-more-toggle>' + Bc + "</button></div>" : "")
    ];
  }
  const $h = (t, e) => {
    const a = t.split(".")[0], r = M[t], s = r.attributes;
    if (a === "light") return Oe(t);
    const d = a === "climate" ? zt(s.hvac_action || r.state) : a === "humidifier" ? zt(s.action || r.state) : a === "water_heater" ? zt(s.operation_mode || r.state) : a === "fan" && r.state === "on" && s.percentage != null ? s.percentage + "%" : (a === "valve" || a === "cover") && s.current_position != null && r.state !== "closed" ? s.current_position + "%" : Oe(t);
    return [e, d].filter(Boolean).join(" · ");
  };
  function Uh(t, e, a) {
    var p, u, m, k, L;
    const r = (p = jt.areaOf) == null ? void 0 : p.call(jt, t), s = r && (((u = jt.rooms.find((x) => x.id === r)) == null ? void 0 : u.name) || ((L = (k = (m = i()) == null ? void 0 : m.areas) == null ? void 0 : k[r]) == null ? void 0 : L.name)) || "", d = e.button ? xa(t, e) : '<div class="tfIcon"' + we(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + (q != null && q.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Su + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + j(gt(t)) + '</span><span class="activityRowMeta">' + j($h(t, s)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Tc + "</button></div>";
  }
  const Yh = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Vl(t) {
    var s;
    const e = t.split(".")[0], a = ((s = M[t]) == null ? void 0 : s.state) === "on", r = Ci.includes(e) ? { act: Nt(e, "toggle", t), label: "Turn " + gt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Nt(e, "turn_on", t), label: "Run " + gt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ea(t) };
  }
  function Zh(t) {
    const e = t.split(".")[0];
    if (Yh.includes(e) || e === "light" && !mr(t)) {
      const s = Rr.includes(e) ? w(t) : Vl(t);
      return s != null && s.button ? '<div class="tfMoreSpace tfMoreSwitch' + (s.on ? " on" : "") + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + Do(t) + ">" + xa(t, s) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + j(t) + '"></div></div>';
    if (e === "light" && mr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + j(t) + '"></div></div>';
    const { big: a, lines: r } = lm(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (h("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + j(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + j(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([s, d]) => '<div class="tfMoreFact"><span>' + j(s) + "</span><span>" + j(d) + "</span></div>").join("") + "</div></div>";
  }
  const Kh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Xh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Jh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], go = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + j(t) + "</div>" + e + "</div>", Oa = (t, e) => Ge("tfSeg", t, e), Wl = (t, e, a, r, s, d) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + j(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + j(s) + '" data-drag="' + j(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + j(s) + "</output></i>" + (d ? '<span class="tfBarIcon"' + we("", d, r) + "></span>" : "") + "</div>", _r = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + xa(t, e) + "</div>", jl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + j(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + j(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, s]) => '<div class="tfMoreFact"><span>' + j(r) + "</span><span>" + j(s) + "</span></div>").join("") + "</div></div>", Jd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + j((q == null ? void 0 : q.code) || "") + '">', ss = (t, e, a, r, s) => ({ label: r, pressed: s, html: null, coded: [t, e, a].join("|") }), Qd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + j(t) + '">' + e.map((a) => '<button type="button" data-coded="' + j(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + j(a.label) + "</button>").join("") + "</div>", tp = (t, e, a) => Oa(gt(t), [{ label: "Off", act: Nt(e, "turn_off", t), pressed: !a }, { label: "On", act: Nt(e, "turn_on", t), pressed: a }]), gn = /* @__PURE__ */ new Map(), Qh = [0, 33, 67, 100], tm = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function Cr(t) {
    if (!A || !M[t]) return null;
    const e = t.split(".")[0], a = M[t].attributes, r = O === "rocker" ? "rocker" : "toggle";
    return e === "light" ? Ln(t).some((s) => s !== "onoff") ? "light" : r : e === "climate" ? Number.isFinite(Number(a.temperature)) ? "dial" : null : e === "fan" ? a.percentage != null ? "rotary" : r : ["switch", "input_boolean", "lock", "automation", "siren"].includes(e) ? r : e === "cover" ? a.current_position == null ? r : null : e === "valve" ? "guarded" : e === "scene" || e === "script" || e === "button" ? "push" : null;
  }
  const ep = (t) => '<div class="tfMoreSpace tfPhys" data-phys="' + j(t) + '"></div>', zl = (t) => {
    const e = t.split(".")[0], a = M[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Gl = (t, e, a) => (t === "lock" ? je("lock", a ? "lock" : "unlock", e) : t === "cover" ? je("cover", a ? "open_cover" : "close_cover", e) : je(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), em = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], am = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', ap = (t) => [{ name: "Physical", svg: am, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: da, mode: "" }]], om = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function bi(t, e) {
    const a = M[t], r = a.attributes, s = a.state === "on";
    return e === "fader" ? [s ? Ga(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [s ? om(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [zl(t)];
  }
  function nm(t, e) {
    const a = document.createElement("div");
    a.className = "tfMoreSpace tfPhys";
    const r = t.split(".")[0], s = M[t].attributes, d = { id: t, kind: e, el: a, quiet: 0, timers: {} }, p = (x, H = 260, E = "one") => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timers[E]), d.timers[E] = setTimeout(x, H);
    }, u = { camera: _, fill: P === "fill", label: gt(t) };
    if (e === "push" && (d.ctl = new mg(a, { ...u, onChange: () => je(r, r === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new _c(a, { ...u, on: zl(t), onChange: (x) => p(() => Gl(r, t, x), 0) })), e === "toggle" && (d.ctl = new Ac(a, { ...u, on: zl(t), labels: em(r), onChange: (x) => p(() => Gl(r, t, x), 0) })), e === "light") {
      const x = Ln(t), H = x.some((lt) => Ao.includes(lt)), E = x.includes("color_temp"), $ = document.createElement("div");
      $.className = "tfPhysGrid" + (H || E ? "" : " two"), a.appendChild($);
      const B = (lt) => {
        const xt = document.createElement("div");
        return xt.className = "tfPhysCell " + lt, $.appendChild(xt), xt;
      }, F = B("bright"), D = (H || E) && B("colour"), X = B("power"), [C, V] = ls(t), wt = new Cc(F, {
        ...u,
        label: gt(t) + " brightness",
        value: V ? C : 0,
        onChange: (lt) => p(() => (Math.round(lt * 100) ? je("light", "turn_on", t, { brightness_pct: Math.round(lt * 100) }) : je("light", "turn_off", t)).catch(() => {
        }), 260, "b")
      }), Lt = O === "rocker" ? _c : Ac, Pt = new Lt(X, { ...u, label: gt(t), on: V, labels: ["On", "Off"], onChange: (lt) => p(() => Gl("light", t, lt), 0, "p") });
      let _t = null;
      if (H) {
        const lt = () => {
          var xt;
          return ((xt = M[t].attributes.hs_color) == null ? void 0 : xt[1]) || 100;
        };
        _t = new Cs(D, {
          ...u,
          label: gt(t) + " colour",
          min: 0,
          max: 360,
          step: 5,
          tick: 10,
          major: 3,
          now: null,
          value: ls(t)[2] ?? 30,
          tint: (xt) => "hsl(" + xt + ",100%,55%)",
          labelOf: () => null,
          onChange: (xt) => p(() => je("light", "turn_on", t, { hs_color: [xt % 360, lt()] }).catch(() => {
          }), 300, "c")
        });
      } else if (E) {
        const [lt, xt] = Tn(t);
        _t = new Cs(D, {
          ...u,
          label: gt(t) + " warmth",
          min: lt,
          max: xt,
          step: 50,
          tick: 100,
          major: 5,
          now: null,
          value: ls(t)[3] ?? Math.round((lt + xt) / 2),
          tint: rm,
          labelOf: ($t) => $t % 1e3 === 0 ? $t / 1e3 + "k" : null,
          onChange: ($t) => p(() => je("light", "turn_on", t, { color_temp_kelvin: $t }).catch(() => {
          }), 300, "c")
        });
      }
      d.ctls = [wt, _t, Pt].filter(Boolean), d.sync = () => {
        const [lt, xt, $t, fe] = ls(t);
        wt.show(xt ? lt : 0), Pt.show(xt), _t && _t.show(H ? $t : fe);
      };
    }
    if (e === "fader" && (d.ctl = new Cc(a, { ...u, value: bi(t, e)[0], onChange: (x) => p(() => (Math.round(x * 100) ? je("light", "turn_on", t, { brightness_pct: Math.round(x * 100) }) : je("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [x, H] = bi(t, e), E = Number(s.min_temp), $ = Number(s.max_temp);
      d.ctl = new Cs(a, { ...u, value: x, now: H ?? x, min: Number.isFinite(E) ? E : 7, max: Number.isFinite($) ? $ : 35, onChange: (B) => p(() => je("climate", "set_temperature", t, { temperature: B }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new gg(a, { ...u, positions: tm, index: bi(t, e)[0], onChange: (x) => p(() => (x ? je("fan", "set_percentage", t, { percentage: Qh[x] }) : je("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new bg(a, { ...u, on: bi(t, e)[0], onChange: (x) => p(() => je("valve", x ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) })), d.ctls || (d.ctls = [d.ctl], d.sync = () => d.ctl.show(...bi(t, e))), d.fit = () => d.ctls.forEach((x) => {
      const H = x.svg.parentElement.getBoundingClientRect();
      x.setBox(H.width, H.height);
    });
    const m = new ResizeObserver(d.fit);
    d.ctls.forEach((x) => m.observe(x.svg.parentElement)), d.ro = m;
    const k = "phys|" + t;
    a.addEventListener("pointerdown", () => {
      ne.add(k), fa(k);
    });
    const L = () => {
      ne.has(k) && (ne.delete(k), La && Ee());
    };
    return a.addEventListener("pointerup", L), a.addEventListener("pointercancel", L), d;
  }
  function op(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = Cr(a);
      if (!r) {
        e.remove();
        return;
      }
      let s = gn.get(a);
      (!s || s.kind !== r) && (s = nm(a, r), gn.set(a, s)), e.replaceWith(s.el), s.fit(), np(s);
    });
  }
  function np(t) {
    !M[t.id] || performance.now() < t.quiet || t.sync();
  }
  const rp = () => {
    gn.forEach((t, e) => {
      var a;
      t.el.isConnected ? np(t) : ((a = t.ro) == null || a.disconnect(), gn.delete(e));
    });
  }, ls = (t) => {
    const e = M[t], a = e.attributes, r = e.state === "on", s = a.hs_color ? Math.round(a.hs_color[0] / 5) * 5 : null, d = a.color_temp_kelvin ? Math.round(a.color_temp_kelvin / 50) * 50 : null;
    return [Ga(e) / 100, r, s, d];
  }, rm = (t) => {
    const e = t / 100, a = (p) => Math.max(0, Math.min(255, Math.round(p))), r = e <= 66 ? 255 : 329.698727446 * Math.pow(e - 60, -0.1332047592), s = e <= 66 ? 99.4708025861 * Math.log(e) - 161.1195681661 : 288.1221695283 * Math.pow(e - 60, -0.0755148492), d = e >= 66 ? 255 : e <= 19 ? 0 : 138.5177312231 * Math.log(e - 10) - 305.0447927307;
    return "rgb(" + a(r) + "," + a(s) + "," + a(d) + ")";
  };
  function im(t) {
    const e = sm(t);
    return e && Cr(t) && (e.pages[0].space += ep(t), e.pages[0].tabs = ap(e.pages[0].tabs)), e;
  }
  function sm(t) {
    var d, p, u;
    const e = t.split(".")[0], a = M[t], r = a.attributes;
    if (!Jh.includes(e)) return null;
    const s = Rr.includes(e) || Ci.includes(e) ? w(t) : Vl(t);
    if (e === "light") {
      const m = a.state === "on", k = Ln(t), [L, x] = Tn(t), H = h("bright", t, m ? Ga(a) : 0), E = h("ctf", t, m && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), $ = h("huev", t, m && Ao.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), B = k.includes("color_temp"), F = k.some(($t) => Ao.includes($t)), D = mr(t), X = ($t, fe, he, ye) => '<div class="tfBar tfVBar ' + $t + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + j(gt(t) + " " + fe.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(he) + '" data-drag="' + $t + "|" + j(t) + '">' + ye + "</div>", C = ($t, fe, he = "") => '<div class="tfVCol' + he + '">' + fe + "</div>", V = C("Brightness", X("bright", "Brightness", H, '<i style="height:' + H + '%"></i><span class="tfBarIcon"' + we("", "mdi:white-balance-sunny", "Brightness") + "></span>")), wt = E == null ? null : (x - E) / (x - L), Lt = B ? C("Warmth", X("ctf", "Warmth", wt == null ? 0 : wt * 100, wt == null ? "" : '<b style="top:' + Math.round((1 - wt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Pt = F ? C("Colour", X("huev", "Colour", $ == null ? 0 : (1 - $ / 360) * 100, $ == null ? "" : '<b style="top:' + Math.round($ / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", _t = '<div class="tfVCols">' + V + (Lt || Pt ? '<div class="tfVSwap">' + Lt + Pt + "</div>" : "") + "</div>", lt = D ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + j(t) + '"></div></div>' : "", xt = [F && { name: "Colour", svg: Kh, mode: "colour" }, D && { name: "Dual Axis Controller", svg: Xh, mode: "dac" }, { name: "Sliders", svg: da, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfLightSpace">' + _t + lt + "</div>", rows: [], tabs: xt.length > 1 ? xt : [] }] };
    }
    if (e === "climate") {
      const m = r.target_temp_step || 0.5, k = Number(r.temperature), L = Number(r.target_temp_low), x = Number(r.target_temp_high), H = (F) => Nt("climate", "set_temperature", t, F), E = (F, D, X, C, V) => (D == null ? void 0 : D.length) && go(F, Oa(F, D.map((wt) => ({ label: zt(wt), act: Nt("climate", C, t, { [V]: wt }), pressed: (X === "state" ? a.state : r[X]) === wt })))), $ = Number.isFinite(L) && Number.isFinite(x) && go("Range", '<div class="tfMoreRange">' + ha("Low", Fe(L) + " °C", H({ target_temp_low: L - m, target_temp_high: x }), H({ target_temp_low: L + m, target_temp_high: x })) + ha("High", Fe(x) + " °C", H({ target_temp_low: L, target_temp_high: x - m }), H({ target_temp_low: L, target_temp_high: x + m })) + "</div>"), B = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: da,
        space: jl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(k) ? Fe(k) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(k) && ha("Target temperature", Fe(k) + " °C", H({ temperature: k - m }), H({ temperature: k + m })),
          $,
          E("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          E("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          E("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          E("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(B) && r.min_humidity != null && go("Humidity", ha("Target humidity", B + "%", Nt("climate", "set_humidity", t, { humidity: B - 1 }), Nt("climate", "set_humidity", t, { humidity: B + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const m = a.state === "on", k = h("fan", t, m && Number(r.percentage) || 0), L = r.percentage != null;
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: L ? [
        Wl("fan", t, k, gt(t) + " speed", k + "%", "mdi:fan"),
        r.oscillating != null && go("Oscillate", Oa("Oscillate", [{ label: "Off", act: Nt("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Nt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && go("Direction", Oa("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, H]) => ({ label: H, act: Nt("fan", "set_direction", t, { direction: x }), pressed: r.direction === x })))),
        ((d = r.preset_modes) == null ? void 0 : d.length) && go("Preset", Oa("Preset", r.preset_modes.map((x) => ({ label: zt(x), act: Nt("fan", "set_preset_mode", t, { preset_mode: x }), pressed: r.preset_mode === x }))))
      ] : [tp(t, "fan", m)] }] };
    }
    if (e === "humidifier") {
      const m = Number(r.humidity);
      return { pages: [{ name: "Control", svg: da, space: jl(String(r.current_humidity), "%", [["Target", Number.isFinite(m) ? m + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(m) && ha("Target humidity", m + "%", Nt("humidifier", "set_humidity", t, { humidity: m - 1 }), Nt("humidifier", "set_humidity", t, { humidity: m + 1 })),
        ((p = r.available_modes) == null ? void 0 : p.length) && go("Mode", Oa("Mode", r.available_modes.map((k) => ({ label: zt(k), act: Nt("humidifier", "set_mode", t, { mode: k }), pressed: r.mode === k }))))
      ] }] };
    }
    if (e === "water_heater") {
      const m = Number(r.temperature), k = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: da, space: jl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(m) ? String(m).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(m) && ha("Target temperature", m + " °C", Nt("water_heater", "set_temperature", t, { temperature: m - k }), Nt("water_heater", "set_temperature", t, { temperature: m + k })),
        ((u = r.operation_list) == null ? void 0 : u.length) && go("Mode", Oa("Mode", r.operation_list.map((L) => ({ label: zt(L), act: Nt("water_heater", "set_operation_mode", t, { operation_mode: L }), pressed: (r.operation_mode || a.state) === L })))),
        r.away_mode != null && go("Away", Oa("Away", [{ label: "Off", act: Nt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Nt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const m = [...Vu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || be(t, x)), k = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], L = '<div class="tfMoreSpace tfMoreKeypad">' + Jd() + '<div class="tfKeypad">' + k.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: da, space: L, rows: [Qd(gt(t), m.map(([x, H, E]) => ss("alarm_control_panel", E, t, H, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [Oa(gt(t), [{ label: "Open", act: Nt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Nt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const m = a.state === "opening" || a.state === "closing", k = Dn(t), L = Ur(t);
      return { pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + j(t) + '"></div></div>', rows: [
        be(t, Dc) && ei(t, k),
        L != null && go("Tilt", Wl("tiltp", t, h("tiltp", t, L), gt(t) + " tilt", Math.round(h("tiltp", t, L)) + "%")),
        Oa(gt(t), [be(t, Du) && { label: "Open", act: Nt("cover", "open_cover", t), disabled: k >= 100 && !m }, be(t, Bu) && { label: "Stop", act: Nt("cover", "stop_cover", t) }, be(t, Eu) && { label: "Close", act: Nt("cover", "close_cover", t), disabled: k <= 0 && !m }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [
        Jd(),
        Qd(gt(t), [ss("lock", "lock", t, "Lock", a.state === "locked"), ss("lock", "unlock", t, "Unlock", a.state === "unlocked"), be(t, qu) && ss("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const m = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [Oa(gt(t), [{ label: "Open", act: Nt("valve", "open_valve", t), pressed: m }, { label: "Close", act: Nt("valve", "close_valve", t), pressed: !m }])] }] };
      const k = h("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [
        Wl("valve", t, k, gt(t) + " position", Math.round(k) + "%", "mdi:valve"),
        Oa(gt(t), [{ label: "Open", act: Nt("valve", "open_valve", t) }, be(t, 8) && { label: "Stop", act: Nt("valve", "stop_valve", t) }, { label: "Close", act: Nt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [tp(t, e, a.state === "on")] }] };
  }
  function lm(t) {
    var L;
    const e = M[t], a = Yt(t), r = t.split(".")[0], s = (((L = Sr[r]) == null ? void 0 : L.call(Sr, a)) || []).filter(([, x]) => x != null && x !== ""), d = (x) => {
      const H = s.findIndex(([E]) => E === x);
      return H < 0 ? null : s.splice(H, 1)[0][1];
    }, p = (x) => {
      const H = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return H ? [H[1], H[2]] : [String(x), ""];
    }, u = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let m;
    r === "light" ? (d("Brightness"), m = e.state === "on" && Eo(t) ? [String(Ga(e)), "%"] : u()) : r === "climate" ? m = p(d("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (d("Position"), m = a.current_position != null ? [String(Ua(t)), "%"] : u()) : r === "humidifier" ? m = p(d("Current humidity") || e.state) : r === "vacuum" ? m = p(d("Battery") || e.state) : r === "plant" ? m = p(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? m = u() : m = p(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const k = s.length ? s.slice(0, 4) : [["State", Oe(t)]];
    return { big: m, lines: k };
  }
  function cm(t) {
    var k, L, x, H, E, $, B;
    const e = M[t], a = i(), r = (k = a == null ? void 0 : a.entities) == null ? void 0 : k[t], s = r != null && r.device_id ? (L = a == null ? void 0 : a.devices) == null ? void 0 : L[r.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + j(t) + '" role="img" aria-label="' + j(gt(t)) + ', last 24 hours"></svg></div>', p = (x = jt.areaOf) == null ? void 0 : x.call(jt, t), u = p && (((H = jt.rooms.find((F) => F.id === p)) == null ? void 0 : H.name) || (($ = (E = a == null ? void 0 : a.areas) == null ? void 0 : E[p]) == null ? void 0 : $.name)) || "", m = [
      ...((B = Sr[t.split(".")[0]]) == null ? void 0 : B.call(Sr, Yt(t))) || [],
      ["Changed", e.last_changed && Ys(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", s && (s.name_by_user || s.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, F]) => F != null && F !== "");
    return d + '<div class="tfMoreRows">' + m.map(([F, D]) => '<div class="tfMoreRow"><span>' + j(F) + "</span><span>" + j(D) + "</span></div>").join("") + "</div>" + Vh(t) + (s ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + j(r.device_id) + '"><span>Device page</span>' + Pc + "</button>" : "");
  }
  const dm = () => "";
  let $l = "";
  function Ul(t) {
    var e;
    q && (q.details = t, Ar(), (e = Ct.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const cs = (t) => {
    const e = M[t], a = Ua(t), r = Dn(t);
    return { kind: Mc(e), name: gt(t), text: Oe(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Ur(t) ?? 100, canSet: be(t, Dc) };
  };
  function Yl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, r = e.dataset.artKey || "more:" + a;
      let s = Ke.get(r);
      s || (s = ig({ onMove: (d) => wi(a, d), onSet: (d) => {
        wi(a, d), vi("pos", a);
      } }), s.coverId = a, Ke.set(r, s)), e.replaceWith(s.el), s.update(cs(a));
    });
  }
  const ip = (t) => [...Ke.values()].filter((e) => e.coverId === t), Zl = () => Ke.forEach((t) => {
    M[t.coverId] && t.update(cs(t.coverId));
  }), sp = () => {
    Ke.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ke.delete(e));
    }), Zl();
  };
  function Ar() {
    var d, p;
    if (!q || !(zh(q.id) || M[q.id])) {
      Ct.hidden = !0;
      return;
    }
    if (So().some((u) => u.endsWith("|" + q.id))) {
      La = !0, Zl();
      return;
    }
    const t = Gh(q.id), e = Ct.querySelector(".tfMore");
    if (!t) {
      us();
      return;
    }
    const a = Zd(Ct), r = dm(q.id), s = q.frame ? q.frame.wide : q.id.startsWith("summary:") || q.id.startsWith("group:");
    if (Ct.hidden || !e || t.length !== mo.length || e.classList.contains("wide") !== s) {
      const u = Jl ? q.scroll || 0 : !Ct.hidden && e ? e.scrollTop : 0;
      if (Ct.innerHTML = '<div class="tfMorePair' + (Ct.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (s ? " wide" : "") + '"' + (q.frame ? ' style="height:' + q.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", $l = r, Ct.classList.toggle("wide", s), Ct.hidden = !1, ql(), Yl(Ct), op(Ct), Hn(Ct), lo(Ct), Ct.querySelectorAll("[data-day]").forEach((m) => fp(m.dataset.day, m, q.at)), dp(Ct), u && (Ct.querySelector(".tfMore").scrollTop = u), lp(), Ol(Ct, a), !Ct.contains(o.activeElement)) {
        const m = Ct.querySelector("[data-more-close]");
        (d = m != null && m.offsetParent ? m : Ct.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, m) => {
        var H, E;
        if (u === mo[m] || u.includes("data-cover-art") || e.children[m].contains((E = (H = o.activeElement) == null ? void 0 : H.matches) != null && E.call(H, "input,select") ? o.activeElement : null)) return;
        if (So().some(($) => e.children[m].querySelector('[data-drag="' + CSS.escape($) + '"]'))) {
          La = !0;
          return;
        }
        const k = document.createElement("div");
        k.innerHTML = u;
        const L = [...e.children[m].querySelectorAll(".tfMoreCtl,.tfMorePage")].map(($) => $.scrollTop), x = Il(e.children[m], k.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach(($, B) => {
          L[B] && ($.scrollTop = L[B]);
        }), lo(x), dp(x), op(x), Hn(x);
      }), r !== $l) {
        const u = Ct.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = r), $l = r;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || fp(u.dataset.day, u, q.at);
      }), lp(), Ct.contains(o.activeElement) || Ol(Ct, a);
    }
    (p = Ct.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(q.details && r)), mo = t, Zl();
  }
  function lp() {
    const t = Ct.querySelector("[data-more-pages]");
    !t || !q || (t.scrollTo({ left: (q.page || 0) * t.clientWidth, behavior: "instant" }), Xl(), Kl(t));
  }
  function Kl(t) {
    const e = t.children[(q == null ? void 0 : q.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Xl() {
    var e;
    const t = (q == null ? void 0 : q.page) || 0;
    Ct.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (q.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = Ct.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!q.mode && t === 0);
  }
  function pm(t, e) {
    var r, s;
    const a = Ct.querySelector("[data-more-pages]");
    !a || !q || (q.page = Math.max(0, Math.min((q.pages || 2) - 1, t)), a.scrollTo({ left: q.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Xl(), Kl(a), e && ((s = Ct.querySelector('.tfMoreDots [aria-selected="true"]')) == null || s.focus({ preventScroll: !0 })));
  }
  function ds(t, e, a) {
    q && (e != null && e !== (q.mode || "") && (q.mode = e, Ct.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), pm(t, a));
  }
  let Lr = null;
  Ct.addEventListener("touchstart", (t) => {
    var a, r, s, d;
    const e = t.touches[0];
    Lr = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((d = (s = t.target).closest) != null && d.call(s, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Ct.addEventListener("touchend", (t) => {
    if (!Lr || !q || (q.page || 0) !== 0 || !Ct.querySelector("[data-more-mode]")) {
      Lr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Lr.x, r = e.clientY - Lr.y;
    if (Lr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const s = [...Ct.querySelectorAll(".tfMoreDots [data-more-mode]")].map((p) => p.dataset.moreMode), d = s.indexOf(q.mode || "");
    a > 0 && d > 0 ? ds(0, s[d - 1]) : a < 0 && q.mode && d < s.length - 1 && ds(0, s[d + 1]);
  }, { passive: !0 });
  let cp = 0;
  Ct.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !q || (clearTimeout(cp), cp = setTimeout(() => {
      if (!q) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (q.page || 0) && (q.page = r, Xl(), Kl(e));
    }, 80));
  }, !0), Ct.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && q && (q.code = t.target.value);
  }), Ct.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!q || !(e || a)) return;
    const r = Ct.querySelector("[data-code]");
    if (e) {
      const m = e.dataset.key, k = q.code || "";
      q.code = m === "clear" ? "" : m === "back" ? k.slice(0, -1) : (k + m).slice(0, 12), r && (r.value = q.code);
      return;
    }
    const [s, d, p] = a.dataset.coded.split("|"), u = q.code;
    q.code = "", r && (r.value = ""), je(s, d, p, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    q && Ar();
  }, 15 * 1e3);
  function ps(t, e) {
    var s, d;
    const a = !!(q && e && Ct.contains(e)), r = a && Ct.querySelector(".tfMore");
    if (a && (q.scroll = r.scrollTop), a && !q.under) {
      const p = Ct.querySelector(".tfMorePair"), u = { more: q, parts: mo, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, to.innerHTML = "", to.appendChild(p), to.classList.toggle("wide", Ct.classList.contains("wide")), to.hidden = !1, Ct.hidden = !0, Ct.innerHTML = "", q = { id: t, opener: e, back: null, frame: null, under: u, at: Number((s = e == null ? void 0 : e.dataset) == null ? void 0 : s.at) || null, mode: Cr(t) ? "phys" : "" }, Ql();
      return;
    }
    q = { id: t, opener: a ? q.opener : e, back: a ? q : null, frame: a ? q.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? q.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null, mode: Cr(t) ? "phys" : "" }, Ql();
  }
  let Jl = !1;
  function Ql() {
    mo = [], Jl = !Ct.hidden, Ke.forEach((t, e) => {
      e !== q.id && Ct.contains(t.el) && (t.destroy(), Ke.delete(e));
    }), Ar(), Jl = !1;
  }
  function us() {
    if (!q) return;
    const t = q;
    G0(Ct, () => {
      q === t && tc();
    });
  }
  function tc() {
    var r, s, d, p, u, m, k, L;
    const t = q == null ? void 0 : q.opener, e = q == null ? void 0 : q.under;
    q = null, Ke.forEach((x, H) => {
      Ct.contains(x.el) && (x.destroy(), Ke.delete(H));
    }), ta.forEach((x, H) => {
      /^more2?:/.test(H) && ta.delete(H);
    }), Ct.hidden = !0, Ct.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = to.firstElementChild;
      q = e.more, mo = e.parts, x && (x.inert = !1, Ct.appendChild(x)), Ct.classList.toggle("wide", to.classList.contains("wide")), to.hidden = !0, to.innerHTML = "", Ct.hidden = !1;
      const H = Ct.querySelector(".tfMore");
      H && (H.scrollTop = q.scroll || 0), Ar(), (s = (r = e.opener) != null && r.isConnected ? e.opener : Ct.querySelector("[data-more-close]")) == null || s.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (p = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (m = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || m.focus(a) : (k = t == null ? void 0 : t.hasAttribute) != null && k.call(t, "data-favs-edit") && ((L = S.querySelector("[data-favs-edit]")) == null || L.focus(a));
  }
  const um = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function fm(t) {
    const e = String(Yt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, s]) => {
      const d = um[r], p = a + d;
      if (!d || !M[p] || !Jn[d]) return "";
      const u = Yt(p).unit_of_measurement || "", [m, k] = Jn[d], L = s === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + j(gt(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + j(p) + '" data-guide="' + (L ? m : k) + '" data-guide-word="' + j("Wants " + (L ? "" : "up to ") + (L ? m : k).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (L ? " or more" : "")) + '" role="img" aria-label="' + j(gt(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const dp = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => mp(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => ad(e)));
  function ec(t, e, a, r = {}) {
    const s = e.map((F) => F[1]).concat(r.guide != null ? [r.guide] : []), d = r.zero ? 0 : Math.min(...s), p = Math.max(...s), u = Math.max(120, t.clientWidth || 260), m = Math.max(60, t.clientHeight || 130), k = 8, L = m - 20, x = Date.now() - 24 * 3600 * 1e3, H = 24 * 3600 * 1e3, E = (F) => Math.max(0, Math.min(u, (F - x) / H * u)), $ = (F) => p === d ? (k + L) / 2 : L - (F - d) / (p - d) * (L - k);
    let B = "M" + E(e[0][0]).toFixed(1) + " " + $(e[0][1]).toFixed(1);
    if (e.length > 2) B = lf(e.map((F) => [E(F[0]), $(F[1])]));
    else for (let F = 1; F < e.length; F++) B += r.smooth ? "L" + E(e[F][0]).toFixed(1) + " " + $(e[F][1]).toFixed(1) : "H" + E(e[F][0]).toFixed(1) + "V" + $(e[F][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + m), t.setAttribute("aria-label", a), t.innerHTML = cf(u, k, L) + '<path d="' + B + "V" + L + "H" + E(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + B + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Pe.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (m - 4) + '">24 h ago</text><text x="' + u + '" y="' + (m - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + $(r.guide).toFixed(1) + '" y2="' + $(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + ($(r.guide) < 20 ? $(r.guide) + 14 : $(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + j(r.guideWord || "") + "</text>" : "");
  }
  const pp = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, hm = (t, e) => {
    const a = t.split(".")[0];
    return pp[a] ? pp[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, mm = (t) => {
    const e = t.split(".")[0], a = Yt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ds.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, up = /* @__PURE__ */ new Map();
  let gm = 0;
  async function bm(t) {
    var s;
    let e = up.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (ao(t) && Number.isFinite(Number((s = M[t]) == null ? void 0 : s.state))) d = hp(t).map(([p, u]) => [p, String(u)]);
      else try {
        const p = await K({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((p == null ? void 0 : p[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      d.length || (d = (si || []).filter((p) => p.entity_id === t).map((p) => [p.when * 1e3, String(p.state)])), e = { at: Date.now(), pts: d }, up.set(t, e);
    }
    const a = M[t], r = e.pts.slice().sort((d, p) => d[0] - p[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function fp(t, e, a) {
    const r = await bm(t);
    if (!e.isConnected) return;
    const s = r.map(([C, V]) => [C, Number(V)]);
    if (r.length > 1 && s.every(([, C]) => Number.isFinite(C))) {
      ec(e, s, gt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), p = d - 864e5, u = Math.max(200, e.clientWidth || 360), m = 62, k = (C) => Math.max(0, Math.min(u, (C - p) / 864e5 * u)), L = [];
    let x = null;
    r.forEach(([C, V]) => {
      const wt = hm(t, V);
      wt && x == null ? x = Math.max(C, p) : !wt && x != null && (L.push([x, Math.max(C, p)]), x = null);
    }), x != null && L.push([x, d]);
    const H = tl(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", E = mm(t), $ = "tfDayClip" + ++gm, B = L.map(([C, V]) => E + (V >= d - 1e3 && C <= p + 1e3 ? " all day" : V >= d - 1e3 ? " since " + so(C) : C <= p + 1e3 ? " until " + so(V) : " " + so(C) + "–" + so(V)));
    let F = "", D = -1 / 0;
    L.forEach(([C], V) => {
      const wt = B[V].length * 5.4, Lt = Math.min(k(C), u - wt);
      Lt < D + 8 || (F += '<text x="' + Lt.toFixed(1) + '" y="10">' + j(B[V]) + "</text>", D = Lt + wt);
    });
    let X = '<text x="' + u + '" y="' + (m - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let V = new Date(d).setHours(C, 0, 0, 0);
      V > d && (V -= 864e5), k(V) > 8 && k(V) < u - 34 && (X += '<text x="' + k(V).toFixed(1) + '" y="' + (m - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + m), e.setAttribute("aria-label", gt(t) + ", last 24 hours: " + (B.length ? B.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + $ + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + F + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + $ + ')">' + L.map(([C, V]) => '<rect x="' + k(C).toFixed(1) + '" y="18" width="' + Math.max(2, k(V) - k(C)).toFixed(1) + '" height="26" fill="' + H + '"/>').join("") + "</g>" + (a && a >= p ? '<line x1="' + k(a).toFixed(1) + '" x2="' + k(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + X;
  }
  function hp(t) {
    var r;
    const e = Number((r = M[t]) == null ? void 0 : r.state), a = Date.now();
    if (Yt(t).state_class === "total_increasing") {
      const s = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - s);
      return [...Array(49)].map((p, u) => s + d * u / 48).map((p) => [p, Math.round(e * Math.pow((p - s) / d, 1.3) * 100) / 100]);
    }
    if (ao(t) && t.endsWith("_moisture")) return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (ao(t) && t.endsWith("_light")) {
      const s = (p) => {
        const u = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, d = (p) => 0.8 + 0.2 * s(p);
      return [...Array(48)].map((p, u) => a - (48 - u) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * d(p) / d(a))]);
    }
    return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function mp(t, e, a = {}) {
    var $, B;
    let r = bt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Dp() };
    else if (ao(t)) r = { at: Date.now(), points: hp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const F = new Date(Date.now() - 864e5).toISOString(), D = await K({ type: "history/history_during_period", start_time: F, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), X = ((D == null ? void 0 : D[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, V]) => Number.isFinite(C) && Number.isFinite(V));
        r = { at: Date.now(), points: X };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      bt.set(t, r);
    }
    const s = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const d = M[t], p = (($ = d == null ? void 0 : d.attributes) == null ? void 0 : $.unit_of_measurement) || "", u = r.points.slice(), m = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(m) && !t.endsWith("_solar_power") && u.push([Date.now(), m]), u.length < 2) {
      s.setAttribute("aria-label", gt(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = u.map((F) => F[1]), L = Math.min(...k), x = Math.max(...k), H = (F) => F.toLocaleString(void 0, { maximumFractionDigits: Math.abs(F) >= 100 ? 0 : 1 }), E = ((B = d == null ? void 0 : d.attributes) == null ? void 0 : B.state_class) === "total_increasing";
    ec(s, u, gt(t) + ", last 24 hours: " + (E ? "+" + H(k[k.length - 1] - k[0]) : L === x ? H(L) : H(L) + " to " + H(x)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function gp() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const e = Dp();
    ec(t, e, "Solar, last 24 hours: up to " + Fe(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function wm(t, e) {
    const a = e.entity_id, r = ge.get(a) || {}, s = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ua(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    s != null && (r.pos = s), d != null && (r.tilt = d), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), ge.set(a, r);
  }
  function bp(t, e, a) {
    var s;
    const r = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof r != "string" || !co[r] || !Eo(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((s = M[r]) == null ? void 0 : s.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: co[r] }];
  }
  function je(t, e, a, r) {
    let s = { entity_id: a, ...r || {} };
    return [e, s] = bp(t, e, s), t === "cover" && wm(e, s), Cn[a] = (Cn[a] || 0) + 1, Ve.set(Nu, JSON.stringify(Cn)), Hi.call(t, e, s) ? Promise.resolve() : Promise.resolve(tt(t, e, s));
  }
  function ac(t) {
    const [e, a, r, s] = t.split("|");
    je(e, a, r, s ? JSON.parse(s) : null).catch(() => {
    });
  }
  function wi(t, e) {
    Wt.set("pos|" + t, e), fa("pos|" + t), ya.delete(t), mo = mo.map(() => ""), [S, Ct].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((s) => hr(s, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (q == null ? void 0 : q.id) === t) {
      const r = Ct.querySelector(".tfMoreState"), s = Ct.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), s && (s.textContent = "Currently " + Ua(t) + "%");
    }
    ip(t).forEach((r) => r.update(cs(t)));
  }
  const vm = (t, e) => {
    const a = t.shiftKey ? 10 : 1, r = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function ym(t, e) {
    var B;
    const a = t.dataset.blocks;
    (B = t.setPointerCapture) == null || B.call(t, e.pointerId), ne.add("pos|" + a), H("pos|" + a);
    const r = (F) => {
      const D = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (F.clientX - D.left) / D.width * 100));
    }, s = r(e), d = e.clientX;
    let p = !1, u = Dn(a), m = s, k = 0;
    const L = () => {
      u = Math.abs(m - u) < 0.2 ? m : u + (m - u) * 0.14, wi(a, u), k = requestAnimationFrame(L);
    }, x = () => {
      p || (p = !0, t.classList.add("fine"), k = requestAnimationFrame(L));
    }, H = setTimeout(x, 350), E = (F) => {
      m = r(F), Math.abs(F.clientX - d) > 6 && (clearTimeout(H), x());
    }, $ = () => {
      clearTimeout(H), cancelAnimationFrame(k), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", $), t.removeEventListener("pointercancel", $), t.classList.remove("fine"), ne.delete("pos|" + a), wi(a, p ? Math.round(u) : (Math.min(3, Math.floor(s / 25)) + 1) * 25), vi("pos", a);
    };
    t.addEventListener("pointermove", E), t.addEventListener("pointerup", $), t.addEventListener("pointercancel", $);
  }
  function wp(t) {
    var e;
    ot = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var s;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (s = a.querySelector(".panelExpanded")) == null || s.toggleAttribute("inert", !r);
    }), ya.set("areas", pt(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => pl(!0), 340);
  }
  function vp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === ot) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !We() ? a.cloneNode(!0) : null, s = At().map((k) => k.id), d = s.indexOf(t) > s.indexOf(ot) ? 1 : -1;
    ot = t;
    const p = pt(e.style.order || 1);
    ya.set("areas", p), Kd(e, p);
    const u = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), m = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || We() || (u.style.setProperty("--dir", d), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), u.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(rn), rn = setTimeout(() => {
      rn = 0, La && Ee();
    }, 340)), m && (m.classList.add("tfAreaLand"), m.addEventListener("animationend", () => m.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const xm = 40;
  function km(t) {
    var u, m;
    if (t.pointerType === "mouse" || !t.isPrimary || !((m = (u = t.target).closest) != null && m.call(u, ".tfAreaStage")) || !hd.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let s = null;
    const d = (k) => {
      k.pointerId === r && !s && Math.hypot(k.clientX - e, k.clientY - a) >= Sn && (s = Math.abs(k.clientX - e) > Math.abs(k.clientY - a) ? "x" : "y");
    }, p = (k) => {
      if (k.pointerId !== r) return;
      removeEventListener("pointermove", d, !0), removeEventListener("pointerup", p, !0), removeEventListener("pointercancel", p, !0);
      const L = k.clientX - e;
      if (k.type !== "pointerup" || s !== "x" || Math.abs(L) < xm) return;
      const x = ($) => {
        $.stopPropagation(), $.preventDefault();
      };
      o.addEventListener("click", x, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", x, !0), 400);
      const H = At(), E = H[H.findIndex(($) => $.id === ot) + (L < 0 ? 1 : -1)];
      E && vp(E.id);
    };
    addEventListener("pointermove", d, !0), addEventListener("pointerup", p, !0), addEventListener("pointercancel", p, !0);
  }
  const fs = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = Tn(t);
      return Math.round(a + e * (r - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Yt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] },
    // the redrawn popups' tracks (17 Nov): warmth flipped (cold at the left), a fan's speed, a valve's position, a
    // cover's tilt as a level
    ctf: { value: (t, e) => {
      const [a, r] = Tn(t);
      return Math.round(r - e * (r - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = Yt(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    // the light popup's vertical colour (17 Nov): red at the top, through the spectrum, to red at the bottom
    huev: { value: (t, e) => Math.round((1 - e) * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Yt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } }
  };
  function hs(t, e, a, r) {
    var k;
    const s = fs[e].value(a, r);
    Wt.set(e + "|" + a, s), fa(e + "|" + a);
    const d = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [L, x] = t.querySelectorAll("span");
      L.classList.toggle("lit", r > 0.08), x.classList.toggle("lit", r > 0.92), ya.delete(a), mo = mo.map(() => ""), ip(a).forEach((H) => H.update(cs(a)));
    } else if (t.dataset.axis === "y")
      if (p) p.style.height = d;
      else {
        let L = t.querySelector("b");
        L || (L = document.createElement("b"), t.appendChild(L)), L.style.top = Math.round((1 - r) * 1e3) / 10 + "%";
      }
    else if (p) p.style.width = d;
    else {
      let L = t.querySelector("b");
      L || (L = document.createElement("b"), t.appendChild(L)), L.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = fs[e].text(a, s));
    const m = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (k = t.closest(".tfAction")) == null ? void 0 : k.querySelector(".tfName .activityRowMeta");
    m && (m.textContent = fs[e].text(a, s));
  }
  function vi(t, e) {
    const a = t + "|" + e, r = Wt.get(a), s = ia.get(a), [d, p, u] = fs[t].send(e, r), m = () => setTimeout(() => {
      ia.get(a) === s && Wt.delete(a), Ee();
    }, 1500);
    je(d, p, e, u).then(m, m);
  }
  function yp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (sa && !e.target.closest(".tfBoardMenu,[data-board-more]") && fo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (sa == null ? void 0 : sa.key) === a.dataset.boardMore ? fo(!0) : mh(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) gh(sa.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) wl(a.dataset.boardShow);
        else if (a.dataset.favHide) Rd(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Qc(a.dataset.energyPick);
        else if (a.dataset.areaPick) vp(a.dataset.areaPick);
        else if (a.dataset.act) ac(a.dataset.act);
        else if (a.hasAttribute("data-details")) Ul(!(q != null && q.details));
        else if (a.hasAttribute("data-details-close")) Ul(!1);
        else if (a.dataset.summary) Uc(a.dataset.summary, a);
        else if (a.dataset.star) Gc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const s = q.id;
          q = q.back, Ql(), (r = Ct.querySelector('.tfMore [data-more="' + CSS.escape(s) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ps("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([s, d, p, u]) => je(s, d, p, u).catch(() => {
        })) : a.dataset.more ? ps(a.dataset.more, a) : a.hasAttribute("data-more-close") ? us() : a.dataset.morePage ? ds(a.hasAttribute("data-more-toggle") && ((q == null ? void 0 : q.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? $c(a.dataset.path) : a.dataset.go ? $d("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Nl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && wp(a);
    }), t.addEventListener("keydown", (e) => {
      var r, s, d, p, u, m, k;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ps(a.dataset.more, a)), (s = a.dataset) != null && s.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Qc(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), wp(a)), (p = a.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Uc(a.dataset.summary, a)), e.key === "Escape" && sa && t === S) {
        e.preventDefault(), fo(!0);
        return;
      }
      if (e.key === "Escape" && ma && t === S) {
        e.preventDefault(), bl(!1), (u = l("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && ct && t === S && (e.preventDefault(), Nl()), (m = a.dataset) != null && m.blocks) {
        const L = a.dataset.blocks, x = vm(e, Math.round(Dn(L)));
        if (x == null) return;
        e.preventDefault(), wi(L, x), clearTimeout(Fr.get(L)), Fr.set(L, setTimeout(() => vi("pos", L), 500));
        return;
      }
      if ((k = a.dataset) != null && k.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [L, x] = a.dataset.drag.split("|"), H = Number(a.getAttribute("aria-valuenow")) / 100, E = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, H + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        hs(a, L, x, E), vi(L, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Pt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), ym(a, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [s, d] = r.dataset.drag.split("|"), p = s === "bright" && !Eo(d), u = e.pointerType !== "mouse";
      if (p && !u) {
        ac(Nt("light", "toggle", d));
        return;
      }
      const m = s === "bright" && ((Pt = M[d]) == null ? void 0 : Pt.state) !== "on", k = s + "|" + d;
      ne.add(k), fa(k);
      const L = s === "tilt" ? 4 : 0, x = r.dataset.axis === "y", H = () => x ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - L * 2, E = (_t) => {
        const lt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, x ? 1 - (_t.clientY - lt.top) / H() : (_t.clientX - lt.left - L) / H()));
      };
      let $ = u ? "waiting" : m ? "pressed" : "dragging", B = 0;
      const F = e.clientX, D = e.clientY, X = (_t, lt) => Math.hypot(_t.clientX - F, _t.clientY - D) > lt, C = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), C()), $ === "dragging" && hs(r, s, d, E(e));
      const V = () => {
        var _t, lt;
        $ = "sliding", Vt = r, r.classList.add("held"), C(), (_t = navigator.userActivation) != null && _t.hasBeenActive && ((lt = navigator.vibrate) == null || lt.call(navigator, 8)), B = m ? (co[d] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, wt = (_t) => {
        $ === "waiting" && X(_t, Sn) ? !p && (x ? Math.abs(_t.clientY - D) > Math.abs(_t.clientX - F) : Math.abs(_t.clientX - F) > Math.abs(_t.clientY - D)) ? V() : $ = "gone" : $ === "pressed" && X(_t, 4) && ($ = "dragging"), $ === "sliding" ? hs(r, s, d, Math.max(0, Math.min(1, B + (x ? D - _t.clientY : _t.clientX - F) / H()))) : $ === "dragging" && hs(r, s, d, E(_t));
      }, Lt = (_t) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((lt, xt) => r.removeEventListener(lt, xt ? Lt : wt)), r.classList.remove("held"), Vt === r && (Vt = null), ne.delete(k), $ === "sliding" || $ === "dragging" ? vi(s, d) : _t.type === "pointerup" && p ? ac(Nt("light", "toggle", d)) : _t.type === "pointerup" && m && ($ === "waiting" || $ === "pressed") && je("light", "turn_on", d).catch(() => {
        }), La && $ !== "sliding" && $ !== "dragging" && Ee();
      };
      r.addEventListener("pointermove", wt), r.addEventListener("pointerup", Lt), r.addEventListener("pointercancel", Lt);
    }), t.addEventListener("touchmove", (e) => {
      Vt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Rf(), yp(S), S.addEventListener("pointerdown", km), yp(Ct), Ct.addEventListener("click", (t) => {
    t.target === Ct && us();
  }), (xp = o.getElementById("homeNav")) == null || xp.addEventListener("click", () => {
    ct && Nl();
  }), (kp = o.querySelector(".bottomNav")) == null || kp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ts + "</button>"), (Mp = l("dashEditNav")) == null || Mp.addEventListener("click", () => v ? El(!Go) : bl(!ma)), S.addEventListener("pointerdown", Nh), S.addEventListener("pointerdown", uh), S.addEventListener("click", (t) => {
    v && Go && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && yd(t.target);
  }, !0), new ResizeObserver(() => {
    f.classList.contains("tfDash") && nl() !== al ? Ee() : Qi();
  }).observe(S), window.addEventListener("resize", Qi, { passive: !0 }), Ct.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), q != null && q.details ? Ul(!1) : us();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [...Ct.querySelectorAll(".tfMoreDots [data-more-page]")], s = r.findIndex((p) => p.getAttribute("aria-selected") === "true"), d = r[Math.max(0, Math.min(r.length - 1, s + (t.key === "ArrowRight" ? 1 : -1)))];
      d && ds(Number(d.dataset.morePage), d.dataset.moreMode ?? null, !0);
    }
  })), dt(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => ao(r))), ...t || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && Eo(r) && Pn(r, Ga(M[r]));
      e ? Na() : Ee();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      An = !0, Le == null || Le.destroy(), Le = null, Te == null || Te.forEach((t) => t.destroy()), Te = null;
    },
    resume() {
      An = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Da.isConnected && Wr(Da.style.order), Co());
    }
  };
}
const Og = "0.18.0";
function Ig() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class Fg extends HTMLElement {
  setConfig(n) {
    this._config = { layout: "test-focus", ...n || {} };
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
  set hass(n) {
    const i = !this._hass;
    if (this._hass = n, i) {
      this._init();
      return;
    }
    this._test && n.states !== this._lastStates && (this._lastStates = n.states, this._test.update(n.states));
  }
  connectedCallback() {
    var n;
    (n = this._test) == null || n.resume();
  }
  disconnectedCallback() {
    var n;
    (n = this._test) == null || n.suspend();
  }
  _init() {
    Ig();
    const n = this.shadowRoot || this.attachShadow({ mode: "open" });
    n.innerHTML = `<style>${Dm}${Em}${Bm}${Pm}</style>${Rm}`;
    const i = n.getElementById("app");
    i.style.opacity = "0", this._shell = Om(n, {
      setLight: (l) => this.classList.toggle("lightBody", l),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = Ng(n, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), W0(n, i), z0(n), this.isConnected || this._test.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "";
  }
  _toggleFullscreen() {
    const n = document;
    if (n.fullscreenElement || n.webkitFullscreenElement) {
      (n.exitFullscreen || n.webkitExitFullscreen).call(n);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => {
        var l;
        return (l = this._shell) == null ? void 0 : l.toast("Full screen isn't available here");
      }
    );
  }
}
customElements.get("homecore-card") || (customElements.define("homecore-card", Fg), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Og} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
