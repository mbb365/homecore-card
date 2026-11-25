var Bm = Object.defineProperty;
var Pm = (o, n, i) => n in o ? Bm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[n] = i;
var Sp = (o, n, i) => Pm(o, typeof n != "symbol" ? n + "" : n, i);
const Rm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Hm = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;background:none;border-radius:0;--face:var(--card);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}#app .tfMorePage[data-mode^=phys]>.tfMoreSpace:not(.tfPhys),#app .tfMorePage>.tfMoreSpace.tfPhys{display:none!important}#app .tfMorePage[data-mode=phys]>.tfMoreSpace.tfPhys[data-pv=phys],#app .tfMorePage[data-mode=physon]>.tfMoreSpace.tfPhys[data-pv=physon]{display:block!important}#app .tfPhysPreview{position:fixed;left:50%;bottom:96px;z-index:30;width:min(520px,calc(100vw - 32px));box-sizing:border-box;padding:10px;border-radius:34px;background:var(--card);border:.4px solid var(--line);box-shadow:0 18px 48px #00000059;transform:translate(-50%,16px);opacity:0;transition:opacity .2s ease,transform .26s cubic-bezier(.34,1.3,.64,1)}#app .tfPhysPreview.in{opacity:1;transform:translate(-50%)}#app .tfPhysPreview[hidden]{display:none}.tfPhysPreviewHead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 4px 10px 14px}.tfPhysPreviewRow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;transition:opacity .2s ease,filter .2s ease}.tfPhysPreviewCell{display:flex;flex-direction:column;gap:6px;min-width:0}.tfPhysPreviewCell>span{font-size:12px;line-height:16px;color:var(--muted);text-align:center}#app .tfPhysPreview .tfMoreSpace.tfPhys{flex:none;height:auto;min-height:0;aspect-ratio:1/1;width:100%;border-radius:16px}.tfPhysPreviewNote{display:none;padding:10px 14px 4px;font-size:13px;line-height:18px;color:var(--muted)}#app .tfPhysPreview.off .tfPhysPreviewRow{opacity:.3;filter:grayscale(1);pointer-events:none}#app .tfPhysPreview.off .tfPhysPreviewNote{display:block}@media (prefers-reduced-motion:reduce){#app .tfPhysPreview{transition:none}}#app .tfPhysPreview.placed{bottom:auto;transform:translateY(16px)}#app .tfPhysPreview.placed.in{transform:none}#app .tfPhysPreview.dragging{transition:none;box-shadow:0 24px 60px #00000073}.tfPhysPreviewHead{cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhysPreview.dragging .tfPhysPreviewHead{cursor:grabbing}.tfPhysPreviewHead .activityTitle{flex:1}.tfPhysGrip{width:10px;height:16px;flex:none;margin-left:-4px;background:radial-gradient(circle,var(--muted) 1.3px,transparent 1.6px) 0 0/5px 5.33px}.tfPhysGrid{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px}.tfPhysGrid.two{grid-template-rows:1fr}.tfPhysCell{position:relative;min-width:0;min-height:0}.tfPhysCell.bright{grid-row:1/-1}.tfPhys .iso .tint{stroke-width:2.4}.tfPhys .iso .swatch{stroke:currentColor;stroke-width:1}.tfPhysLightDial{position:absolute;top:0;right:0;bottom:0;left:0}.tfPhysLightDial>.tfPhysCell.dial{position:absolute;top:0;right:0;bottom:0;left:0}.tfPhysLightDial>.tfPhysCell.mini{position:absolute;right:0;bottom:0;width:27%;aspect-ratio:1/1;min-width:84px}.tfPhys .iso .dim{opacity:.38}`, Nm = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Om = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Im = `<main id="app"><div class="shell">
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
`, _p = "homecore-theme", Fm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, qm = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Fm[o] || "") + "</svg>", Cp = {
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
function Vm(o, { setLight: n, fullscreenSupported: i, toggleFullscreen: s }) {
  const h = (Y) => o.getElementById(Y), b = h("app");
  o.querySelectorAll("[data-icon]").forEach((Y) => {
    Y.innerHTML = qm(Y.dataset.icon);
  });
  const g = { home: h("homeView"), settings: h("settingsView") }, v = h("homeNav"), L = h("settingsNav");
  function D(Y) {
    Object.entries(g).forEach(([X, W]) => W.classList.toggle("active", X === Y)), v.classList.toggle("active", Y === "home"), L.classList.toggle("active", Y === "settings");
  }
  v.addEventListener("click", () => D("home")), L.addEventListener("click", () => D("settings")), h("settingsBack").addEventListener("click", () => D("home"));
  function _(Y) {
    const X = Y === "light";
    o.querySelectorAll(".themeBtn").forEach((W) => W.classList.toggle("active", W.dataset.theme === Y)), b.classList.toggle("light", X), n(X);
  }
  _(Cp.get(_p) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((Y) => Y.addEventListener("click", () => {
    _(Y.dataset.theme), Cp.set(_p, Y.dataset.theme);
  }));
  const T = h("tvNav");
  i || (T.hidden = !0), T.addEventListener("click", () => s());
  let O;
  function M(Y) {
    const X = h("toast");
    X && (X.textContent = Y, X.classList.add("show"), clearTimeout(O), O = setTimeout(() => X.classList.remove("show"), 2600));
  }
  return { showView: D, toast: M };
}
const Wm = /* @__PURE__ */ new Set(["roaming", "test_area"]), jm = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, er = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Te = "made_up_", oo = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Te);
}, Xn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Fc(o) {
  const n = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((n - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function zm(o) {
  const n = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let s = +n; s < +o; s += 10 * 60 * 1e3) i += Fc(new Date(s)) / 6;
  return i;
}
function Ap(o = /* @__PURE__ */ new Date()) {
  const n = [];
  for (let i = 0; i <= 96; i++) {
    const s = +o - (96 - i) * 15 * 60 * 1e3;
    n.push([s, Fc(new Date(s))]);
  }
  return n;
}
function Gm({ onChange: o }) {
  const n = {}, i = {}, s = (W, N, et, nt) => {
    n[W] = { entity_id: W, state: et, attributes: nt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[W] = N;
  }, h = (W, N, et) => {
    const nt = n[W], ut = N ?? nt.state;
    n[W] = { ...nt, state: ut, attributes: { ...nt.attributes, ...et }, last_changed: ut === nt.state ? nt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (W, N, et, nt) => s("binary_sensor." + Te + (W ? W + "_" : "") + Xn(N), W, nt ? "on" : "off", { friendly_name: N, device_class: et });
  Object.entries(jm).forEach(([W, N]) => {
    if (N.temperature != null && s("sensor." + Te + W + "_temperature", W, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && s("sensor." + Te + W + "_humidity", W, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && s("vacuum." + Te + "robot", W, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && s("climate." + Te + W, W, "heat", {
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
      const [et, nt] = N.fan;
      s("fan." + Te + W + "_" + Xn(et), W, "on", nt != null ? { friendly_name: et, percentage: nt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: et, supported_features: 48 });
    }
    if (N.waterHeater && s("water_heater." + Te + W, W, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [et, nt] = N.valvePos;
      s("valve." + Te + W + "_" + Xn(et), W, nt == null || nt ? "open" : "closed", { friendly_name: et, device_class: "water", supported_features: 3 | (nt == null ? 0 : 12), ...nt == null ? {} : { current_position: nt } });
    }
    if (N.garage && s("cover." + Te + W + "_" + Xn(N.garage), W, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [et, nt, ut, tt] = N.cover;
      s("cover." + Te + W + "_" + Xn(et), W, ut ? "open" : "closed", { friendly_name: et, device_class: nt, current_position: ut, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (N.humidifier && s("humidifier." + Te + W, W, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (s("sensor." + Te + W + "_solar_power", W, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), s("sensor." + Te + W + "_solar_today", W, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && s("valve." + Te + W + "_" + Xn(N.valve), W, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && b(W, N.door, "door", N.doorOpen), N.window && b(W, N.window, "window", !1), N.motion && b(W, N.motion, "motion", !1), N.plant) {
      const [et, nt, ut, tt, F] = N.plant, q = Te + Xn(et), rt = (Dt, ct, S, Ft, Z) => s("sensor." + q + "_" + Dt, W, String(S), { friendly_name: ct, device_class: Z, state_class: "measurement", unit_of_measurement: Ft, plant_low: S < er[Dt][0], plant_high: S > er[Dt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Dt] });
      rt("moisture", "Moisture", nt, "%", "moisture"), rt("light", "Light", ut, "lx", "illuminance"), rt("temperature", "Temperature", tt, "°C", "temperature"), rt("fertility", "Fertility", F, "µS/cm", "conductivity");
      const pt = Object.entries({ moisture: nt, light: ut, temperature: tt, fertility: F }).filter(([Dt, ct]) => ct < er[Dt][0] || ct > er[Dt][1]).map(([Dt, ct]) => Dt + (ct < er[Dt][0] ? " low" : " high"));
      s("plant." + q, W, pt.length ? "problem" : "ok", { friendly_name: et, moisture: nt, brightness: ut, temperature: tt, conductivity: F, problem: pt.join(", ") || "none" });
    }
  }), s("alarm_control_panel." + Te + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), s("sensor." + Te + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let L = null;
  function D() {
    const W = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((N) => {
      N.endsWith("_solar_power") && (n[N] = { ...n[N], state: Fc(W).toFixed(2) }), N.endsWith("_solar_today") && (n[N] = { ...n[N], state: zm(W).toFixed(1) });
    });
  }
  D();
  let _ = 0;
  function T() {
    let W = !1;
    const N = ++_ % 10 === 0, et = (tt, F, q) => {
      h(tt, F, q), W = !0;
    };
    Object.entries(g).forEach(([tt, F]) => {
      const q = n[tt].attributes.current_position, rt = q < F ? Math.min(F, q + 10) : Math.max(F, q - 10);
      rt === F && delete g[tt], et(tt, rt === F ? rt === 0 ? "closed" : "open" : F > q ? "opening" : "closing", { current_position: rt });
    }), Object.entries(v).forEach(([tt, F]) => {
      const q = n[tt].attributes.current_tilt_position, rt = q < F ? Math.min(F, q + 25) : Math.max(F, q - 25);
      rt === F && delete v[tt], et(tt, null, { current_tilt_position: rt });
    }), Object.keys(n).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const F = n[tt], q = F.attributes, rt = q.current_temperature, pt = (F.state === "heat" || F.state === "auto") && rt < q.temperature - 0.05, Dt = (F.state === "cool" || F.state === "auto") && rt > q.temperature + 0.05, ct = F.state === "off" ? "off" : pt ? "heating" : Dt ? "cooling" : "idle", S = N ? Math.round((rt + (pt ? 0.1 : Dt ? -0.1 : 0)) * 10) / 10 : rt;
      (S !== rt || ct !== q.hvac_action) && et(tt, null, { current_temperature: S, hvac_action: ct });
    }), Object.keys(n).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const F = n[tt], q = F.attributes, rt = q.current_humidity, pt = F.state === "on" && rt < q.humidity, Dt = pt && N ? rt + 1 : rt, ct = F.state !== "on" ? "off" : pt ? "humidifying" : "idle";
      if (Dt !== rt || ct !== q.action) {
        et(tt, null, { current_humidity: Dt, action: ct });
        const S = "sensor." + Te + i[tt] + "_humidity";
        n[S] && et(S, String(Dt));
      }
    });
    const nt = n["vacuum." + Te + "robot"], ut = nt.attributes;
    nt.state === "cleaning" && N && et(nt.entity_id, null, { battery_level: Math.max(5, ut.battery_level - 1) }), nt.state === "returning" && et(nt.entity_id, "docked", {}), nt.state === "docked" && ut.battery_level < 100 && et(nt.entity_id, null, { battery_level: Math.min(100, ut.battery_level + 2) }), L && Date.now() - L.at > 5e3 && (et("alarm_control_panel." + Te + "house", "armed_" + L.mode, {}), L = null), W && o();
  }
  const O = setInterval(T, 1e3), M = setInterval(() => {
    D(), o();
  }, 60 * 1e3);
  function Y(W, N, et) {
    const nt = et == null ? void 0 : et.entity_id;
    if (!n[nt]) return !1;
    const ut = n[nt], tt = ut.attributes, F = (q, rt) => h(nt, q, rt);
    if (W === "climate" && (N === "set_temperature" && et.temperature != null && F(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, et.temperature)) }), N === "set_hvac_mode" && F(et.hvac_mode, et.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && F(ut.state === "off" ? "heat" : "off", ut.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && et.target_temp_low != null && F(null, { target_temp_low: et.target_temp_low, target_temp_high: et.target_temp_high }), N === "set_fan_mode" && F(null, { fan_mode: et.fan_mode }), N === "set_swing_mode" && F(null, { swing_mode: et.swing_mode }), N === "set_preset_mode" && F(null, { preset_mode: et.preset_mode }), N === "set_humidity" && F(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, et.humidity)) })), W === "fan" && (N === "set_percentage" && F(et.percentage > 0 ? "on" : "off", { percentage: et.percentage }), N === "oscillate" && F(null, { oscillating: et.oscillating }), N === "set_direction" && F(null, { direction: et.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && F(N === "turn_on" || N === "toggle" && ut.state !== "on" ? "on" : "off")), W === "water_heater" && (N === "set_temperature" && F(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, et.temperature)) }), N === "set_operation_mode" && F(et.operation_mode, { operation_mode: et.operation_mode }), N === "set_away_mode" && F(null, { away_mode: et.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const q = N === "turn_on" || N === "toggle" && ut.state === "off";
      F(q ? "eco" : "off", { operation_mode: q ? "eco" : "off" });
    }
    if (W === "cover") {
      const q = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? et.position : N === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete g[nt], delete v[nt], F(tt.current_position === 0 ? "closed" : "open")), q != null && tt.current_position == null ? F(q > 0 ? "open" : "closed") : q != null && q !== tt.current_position && (g[nt] = q, F(q > tt.current_position ? "opening" : "closing"));
      const rt = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? et.tilt_position : null;
      N === "stop_cover_tilt" && delete v[nt], rt != null && tt.current_tilt_position != null && rt !== tt.current_tilt_position && (v[nt] = rt);
    }
    if (W === "humidifier" && (N === "set_humidity" && F(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, et.humidity)) }), N === "set_mode" && F(null, { mode: et.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const q = N === "turn_on" || N === "toggle" && ut.state !== "on";
      F(q ? "on" : "off", { action: q ? "idle" : "off" });
    }
    if (W === "vacuum" && (N === "start" && F("cleaning", { rooms: et.rooms || tt.rooms }), N === "pause" && F("paused"), N === "return_to_base" && F("returning", { rooms: [] }), N === "locate" && F(null, { located: Date.now() }), N === "set_rooms" && F(null, { rooms: et.rooms })), W === "valve") {
      const q = N === "open_valve" || N === "toggle" && ut.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && F(q ? "open" : "closed", tt.current_position != null ? { current_position: q ? 100 : 0 } : {}), N === "set_valve_position" && F(et.position > 0 ? "open" : "closed", { current_position: et.position });
    }
    if (W === "alarm_control_panel") {
      N === "alarm_disarm" && (L = null, F("disarmed", { changed_by: "Matt" }));
      const q = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      q && (L = { mode: q, at: Date.now() }, F("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function X(W, { madeUp: N = !0 } = {}) {
    const et = N ? n : {}, nt = (W == null ? void 0 : W.states) || {}, ut = (W == null ? void 0 : W.entities) || {}, tt = (W == null ? void 0 : W.devices) || {}, F = (ot) => {
      var j;
      const dt = ut[ot];
      return dt && (dt.area_id || dt.device_id && ((j = tt[dt.device_id]) == null ? void 0 : j.area_id)) || null;
    }, q = (ot) => {
      const dt = ut[ot];
      return nt[ot] && nt[ot].state !== "unavailable" && !(dt != null && dt.hidden) && !(dt != null && dt.entity_category);
    }, rt = {};
    Object.keys(nt).forEach((ot) => {
      const dt = F(ot);
      dt && q(ot) && (rt[dt] || (rt[dt] = [])).push(ot);
    });
    const pt = { ...nt, ...et }, Dt = (ot) => {
      var dt, j;
      return (j = (dt = pt[ot]) == null ? void 0 : dt.attributes) == null ? void 0 : j.device_class;
    }, ct = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(nt).filter((ot) => ot.startsWith("vacuum.") && q(ot)), Ft = Object.values((W == null ? void 0 : W.areas) || {}).filter((ot) => !Wm.has(ot.area_id)).map((ot) => {
      const dt = ot.area_id, j = rt[dt] || [], bt = (Vt) => j.filter((ge) => ge.startsWith(Vt + ".")), Ct = (Vt) => bt("sensor").filter((ge) => Dt(ge) === Vt), Wt = (Vt) => Object.keys(et).filter((ge) => i[ge] === dt && Vt(ge)), ne = (Vt, ge) => Vt.length ? Vt : Wt(ge), la = ne(Ct("temperature"), (Vt) => Vt.endsWith(dt + "_temperature")), ma = ne(Ct("humidity"), (Vt) => Vt.endsWith(dt + "_humidity")), So = Ct("power").filter((Vt) => /^(W|kW)$/.test(pt[Vt].attributes.unit_of_measurement || "")), Ta = bt("binary_sensor").filter((Vt) => Dt(Vt) === "moisture"), sn = ne(bt("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: Wt((ge) => ge.startsWith("sensor." + Vt.split(".")[1] + "_")) })), Ln = [...bt("binary_sensor").filter((Vt) => ct.includes(Dt(Vt))), ...Wt((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: dt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...la.slice(0, 1), ...ma.slice(0, 1), ...Ta],
        power: So.length ? So.reduce((Vt, ge) => Vt + Number(pt[ge].state) * (pt[ge].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
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
        plants: sn,
        openings: Ln,
        alerts: [...Ta, ...Ln].filter((Vt) => {
          var ge;
          return ((ge = pt[Vt]) == null ? void 0 : ge.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), Z = Object.keys(nt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && nt[ot].state !== "unavailable") || null, it = (ot) => Object.keys(nt).filter((dt) => dt.startsWith(ot + ".") && q(dt)), lt = it("alarm_control_panel"), gt = S.length ? S : N ? ["vacuum." + Te + "robot"] : [];
    return {
      states: pt,
      rooms: Ft,
      grid: Z,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => et[ot] ? i[ot] : F(ot),
      vacuums: gt,
      homeVacuums: gt.filter((ot) => !Ft.some((dt) => dt.actions.includes(ot))),
      security: {
        alarms: lt.length ? lt : N ? ["alarm_control_panel." + Te + "house"] : [],
        locks: it("lock"),
        openings: [...Object.keys(et).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Te + "doorbell"] : []]
      }
    };
  }
  return { model: X, call: Y, stop() {
    clearInterval(O), clearInterval(M);
  } };
}
const Lp = (o) => +o.toFixed(2), Tp = (o) => o * Math.PI / 180, Ei = (o, n, i, s) => [Lp(o + i * Math.cos(Tp(s))), Lp(n + i * Math.sin(Tp(s)))], Er = (o, n, i, s, h) => {
  const [b, g] = Ei(o, n, i, s), [v, L] = Ei(o, n, i, h);
  return `M${b} ${g}A${i} ${i} 0 ${h - s > 180 ? 1 : 0} 1 ${v} ${L}`;
}, ta = (o, n, i, s, h, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${s}" rx="${h}"${b}/>`, La = (o, n, i, s = "") => `<circle cx="${o}" cy="${n}" r="${i}"${s}/>`, ya = (o, n = "") => `<path d="${o}"${n}/>`, Es = (o, n = 2.5) => ya(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), Jn = (o, n = 1.5) => ya(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), Qn = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), $m = (o, n, i, s = 0) => Array.from({ length: o }, (h, b) => {
  const g = s + 360 / o * b, [v, L] = Ei(12, 12, n, g), [D, _] = Ei(12, 12, i, g);
  return Es(`M${v} ${L}L${D} ${_}`, 2.2);
}).join(""), Um = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", Ym = [
  {
    id: "light",
    name: "Light",
    use: "lights, lamps",
    colour: "#ffc107",
    s: ya("M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z") + ta(9.4, 19.2, 5.2, 2.6, 1.3),
    c: ya(Er(12, 9.6, 3.6, 180, 270))
  },
  {
    id: "plug",
    name: "Plug",
    use: "switches, sockets",
    colour: "#ffc107",
    s: ta(3, 3, 18, 18, 6),
    c: Qn(ta(8.2, 8.8, 2.2, 6.4, 1.1)) + Qn(ta(13.6, 8.8, 2.2, 6.4, 1.1))
  },
  {
    id: "thermostat",
    name: "Thermostat",
    use: "climate, heating",
    colour: "#ff5722",
    s: La(12, 12, 9.6),
    c: ya(Er(12, 12, 6.2, 135, 405)) + ya(`M12 12L${Ei(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: ta(9.2, 2.4, 5.6, 14, 2.8) + La(12, 17.4, 4.4),
    c: ya("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: Jn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: ya(Er(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => ya(Um, ` transform="rotate(${o} 12 12)"`)).join("") + La(12, 12, 2.6),
    c: La(12, 12, 3.6)
  },
  {
    id: "blinds",
    name: "Blinds",
    use: "covers, shades, shutters",
    colour: "#9c27b0",
    s: ta(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((o) => ta(4, o, 16, 2.5, 1.25)).join(""),
    c: ""
  },
  {
    id: "lock",
    name: "Lock",
    use: "locks",
    colour: "#4caf50",
    s: Es("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + ta(4, 10, 16, 11.6, 4.2),
    c: Qn(La(12, 14.9, 1.7)) + ya("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: ta(5, 2.4, 14, 19.2, 3.6),
    c: Qn(La(15.2, 12.4, 1.5))
  },
  {
    id: "window",
    name: "Window",
    use: "windows, openings",
    colour: "#ff9800",
    s: ta(3, 3, 18, 18, 4.4),
    c: ya("M12 3V21M3 12H21")
  },
  {
    id: "motion",
    name: "Motion",
    use: "motion, occupancy",
    colour: "#03a9f4",
    s: Jn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Es(Er(12, 18.6, 8, 230, 310), 2.4) + Es(Er(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: La(12, 7.2, 4.2) + Jn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: ta(2.6, 5.4, 13.4, 8.6, 3.4) + Jn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + ta(7.2, 14.6, 2.4, 4.2, 1.2) + ta(3.4, 18.6, 10, 2.6, 1.3),
    c: Qn(La(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: ta(5, 2.4, 14, 19.2, 4.2),
    c: La(12, 14.6, 3.6) + Qn(La(12, 7.4, 1.5))
  },
  {
    id: "tv",
    name: "TV",
    use: "TVs, displays",
    colour: "#2196f3",
    s: ta(2.4, 3.6, 19.2, 13.4, 3.4) + ta(7.6, 18.8, 8.8, 2.6, 1.3),
    c: ya(Er(18.2, 7.2, 2.4, 270, 360))
  },
  {
    id: "vacuum",
    name: "Vacuum",
    use: "robot vacuums",
    colour: "#4caf50",
    s: La(12, 12, 9.6),
    c: ya("M5.6 8.6H18.4") + La(12, 14.4, 2.4)
  },
  {
    id: "energy",
    name: "Energy",
    use: "power, energy",
    colour: "#ffc107",
    s: Jn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: La(12, 12, 4.4) + $m(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: Jn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: ya("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Jn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: Qn(ta(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Zm = 0;
function Km(o, n = 24, i = `hc${++Zm}`) {
  const s = o.c ? `<defs><mask id="${i}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${o.c.replace(/currentColor/g, "#fff")}</g></mask></defs>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${n}" height="${n}" aria-hidden="true">${s}<g fill="currentColor"${o.c ? ` mask="url(#${i})"` : ""}>${o.s}</g>${o.t ? `<g fill="currentColor">${o.t}</g>` : ""}</svg>`;
}
const Ga = {
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
}, Mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ec = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((s) => s + s).join("") : n;
  return [0, 2, 4].map((s) => parseInt(i.slice(s, s + 2), 16) || 0);
}, Xm = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Dp = {}, ja = (o, n, i) => {
  const s = o + n + i;
  return Dp[s] || (Dp[s] = Xm(Ec(o).map((h, b) => h + (Ec(n)[b] - h) * i)));
}, Ep = {}, ic = (o) => Ep[o] || (Ep[o] = Ec(o));
function ju(o, n) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || n ? "night" : "day");
}
function Jm(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [ja(n.clear[0], n.cloudy[0], 0.12), ja(n.clear[1], n.cloudy[1], 0.12)], n.storm = [ja(n.rain[0], "#000000", 0.22), ja(n.rain[1], "#000000", 0.22)], n;
}
const Bc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Pc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Rc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Qm(o, n = Ga) {
  const i = { ...Ga, ...n }, s = Jm(i), h = String(o).split("/"), b = s[h[0]] ? h[0] : "clear", g = h[1] === "night", v = s[b][g ? 1 : 0], L = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Bc.map(() => ({ o: 0 })),
    rain: Pc.map(() => ({ o: 0, dy: -16 })),
    snow: Rc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, D = (_) => Bc.map(() => ({ o: _ }));
  return b === "clear" ? g ? (L.moon.o = 1, L.stars = D(1)) : L.sun.o = 1 : b === "partly" ? (L.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (L.moon = { x: 34, y: 33, d: 48, o: 1 }, L.stars = D(0.7)) : L.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (L.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? L.moon = { x: 40, y: 36, d: 40, o: 0 } : L.sun = { x: 40, y: 36, r: 20, o: 0 }) : (L.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? L.moon = { x: 38, y: 28, d: 36, o: 0 } : L.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? L.snow = Rc.map(() => ({ o: 1, dy: 0 })) : L.rain = Pc.map((_, T) => ({ o: b === "storm" && T === 1 ? 0 : 1, dy: 0 })), b === "storm" && (L.bolt = { o: 1, dy: 0 })), L;
}
const t0 = [
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
], tr = (o, n) => (t0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, e0 = 0, zu = 1, Gu = 2, $u = 3, Uu = 4, xo = 5, Os = 6, Nr = 7, Yu = 8, Bp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), a0 = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], o0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), n0 = (o, n, i) => {
  let s = !1;
  for (let h = 0, b = o.length - 1; h < o.length; b = h++) {
    const g = o[h], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (s = !s);
  }
  return s;
};
function r0(o, { size: n = 90, px: i = 2, oneBit: s = !1, colors: h = Ga, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: L = !1 } = {}) {
  const D = { ...Ga, ...h }, _ = Math.sin, T = Math.PI * 2, O = Math.max(6, Math.round(n / i)), M = O / 90, Y = L ? Math.floor(v / 100) * 100 : 0, X = L ? _(T * Y / 3600) : 0, W = L ? 1.8 * _(T * Y / 6400) : 0, N = L ? 0.9 * _(T * Y / 4100) : 0, et = L ? 0.8 * _(T * Y / 5200) : 0, nt = Y / 3400 % 1, ut = L && o.bolt.o > 0.5 && (nt < 0.04 || nt > 0.08 && nt < 0.11), tt = new Array(O * O), F = new Uint8Array(O * O), q = (Z, it, lt, gt, ot) => {
    lt == null || Z < 0 || it < 0 || Z >= O || it >= O || (gt >= 1 || gt > tr(Z + 5, it + 3)) && (tt[it * O + Z] = lt, F[it * O + Z] = ot);
  }, rt = (Z, it, lt, gt) => {
    for (let ot = Math.max(0, Math.floor(it - lt) - 1); ot <= Math.min(O - 1, it + lt + 1); ot++) for (let dt = Math.max(0, Math.floor(Z - lt) - 1); dt <= Math.min(O - 1, Z + lt + 1); dt++) gt(dt, ot, dt + 0.5 - Z, ot + 0.5 - it);
  }, pt = o.skyStops || [o.sky], Dt = o.skyT || 0;
  for (let Z = 0; Z < O; Z++) {
    const it = o.night ? Mi(1 - (Z + 0.5) / (O * 0.7)) * 0.85 : Mi(((Z + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let lt = 0; lt < O; lt++) {
      let gt = pt[0];
      if (pt.length > 1) {
        const ot = Dt * (pt.length - 1), dt = Math.min(pt.length - 2, Math.floor(ot));
        gt = ot - dt > tr(lt, Z) ? pt[dt + 1] : pt[dt];
      }
      it > tr(lt + 2, Z + 5) && (gt = o.night ? ja(gt, "#000000", 0.28) : ja(gt, "#ffffff", 0.2)), tt[Z * O + lt] = ut ? ja(gt, "#ffffff", 0.25) : gt;
    }
  }
  if (o.sun.o > 0.01) {
    const Z = o.sun.x * M, it = o.sun.y * M, lt = Math.max(1, o.sun.r * M);
    if (L) {
      const gt = lt * (1.45 + 0.06 * X), ot = ja(D.sun, "#ffffff", 0.55);
      if (rt(Z, it, gt, (dt, j, bt, Ct) => {
        const Wt = Math.sqrt(bt * bt + Ct * Ct);
        Wt > lt && Wt < gt && q(dt, j, ot, 0.26 * (1 - (Wt - lt) / (gt - lt)) * o.sun.o, e0);
      }), o.sun.o > 0.5) {
        const dt = Math.floor(Y / 500) % 2, j = Math.max(1, lt * 0.22);
        for (let bt = 0; bt < 8; bt++) if (bt % 2 === dt) for (let Ct = lt + 1.5; Ct < lt + 1.5 + j; Ct += 0.7) q(Math.floor(Z + Math.cos(bt * Math.PI / 4) * Ct), Math.floor(it + Math.sin(bt * Math.PI / 4) * Ct), D.sun, o.sun.o, Yu);
      }
    }
    rt(Z, it, lt, (gt, ot, dt, j) => {
      if (dt * dt + j * j > lt * lt) return;
      const bt = ((dt * 0.643 + j * 0.766) / lt + 1) / 2;
      q(gt, ot, Mi((bt - 0.62) / 0.38) > tr(gt, ot) ? D.sunEdge : D.sun, o.sun.o, zu);
    });
  }
  if (Bc.forEach((Z, it) => {
    const lt = o.stars[it].o;
    if (lt < 0.01) return;
    const gt = Math.floor(Z[0] * M), ot = Math.floor(Z[1] * M), dt = L ? (Math.floor(Y / 300) + it * 3) % 6 : 0;
    if (dt === 5) return;
    const j = Math.round(Z[2] * M * (dt === 4 ? 0.3 : dt < 2 ? 1 : 0.6));
    q(gt, ot, D.star, lt, Nr);
    for (let bt = 1; bt <= j; bt++) {
      const Ct = bt === j && j > 1 ? ja(D.star, o.sky, 0.5) : D.star;
      q(gt - bt, ot, Ct, lt, Nr), q(gt + bt, ot, Ct, lt, Nr), q(gt, ot - bt, Ct, lt, Nr), q(gt, ot + bt, Ct, lt, Nr);
    }
  }), o.moon.o > 0.01) {
    const Z = Math.max(1.5, o.moon.d * M * 0.37), it = o.moon.x * M, lt = o.moon.y * M + (L && et > 0.4 ? -1 : 0), gt = it + 0.547 * Z, ot = lt - 0.503 * Z, dt = 0.82 * Z, j = ja(D.moon, "#ffffff", 0.6);
    rt(it, lt, Z, (bt, Ct, Wt, ne) => {
      if (Wt * Wt + ne * ne > Z * Z) return;
      const la = bt + 0.5 - gt, ma = Ct + 0.5 - ot;
      la * la + ma * ma <= dt * dt || q(bt, Ct, Mi((ne + Z) / (2 * Z) * 1.1 - 0.1) > tr(bt, Ct) ? D.moon : j, o.moon.o, Gu);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * M)), S = Math.max(1, Math.round(5.87 * M * 0.5));
  Pc.forEach((Z, it) => {
    const lt = o.rain[it];
    let gt = lt.dy, ot = lt.o;
    if (ot < 0.01) return;
    if (L) {
      const bt = (Y / 950 + it / 3) % 1;
      gt += -5 + bt * 14, ot *= bt < 0.18 ? bt / 0.18 : bt > 0.72 ? (1 - bt) / 0.28 : 1;
    }
    const dt = (Z[0] + 3 + W) * M, j = (Z[1] + gt) * M;
    for (let bt = 0; bt < ct; bt++) for (let Ct = 0; Ct < S; Ct++) q(Math.floor(dt - 0.208 * bt) + Ct, Math.floor(j) + bt, D.rain, ot, Uu);
  });
  const Ft = Math.max(0, Math.round(7.34 * M / 2.6));
  if (Rc.forEach((Z, it) => {
    const lt = o.snow[it];
    let gt = lt.dy, ot = 0, dt = lt.o;
    if (dt < 0.01) return;
    if (L) {
      const Ct = (Y / 3200 + it / 5) % 1;
      gt += -6 + Ct * 14, ot = 1.5 * _(T * (Ct * 1.5 + it / 5)), dt *= Ct < 0.2 ? Ct / 0.2 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1;
    }
    const j = Math.floor((Z[0] + 3.67 + ot + W) * M), bt = Math.floor((Z[1] + 3.67 + gt) * M);
    q(j, bt, D.snow, dt, xo);
    for (let Ct = 1; Ct <= Ft; Ct++)
      q(j - Ct, bt, D.snow, dt, xo), q(j + Ct, bt, D.snow, dt, xo), q(j, bt - Ct, D.snow, dt, xo), q(j, bt + Ct, D.snow, dt, xo), Ft > 1 && Ct < Ft && (q(j - Ct, bt - Ct, D.snow, dt, xo), q(j + Ct, bt - Ct, D.snow, dt, xo), q(j - Ct, bt + Ct, D.snow, dt, xo), q(j + Ct, bt + Ct, D.snow, dt, xo));
  }), o.bolt.o > 0.01)
    if (O >= 30) {
      const Z = 39 + W, it = 50 + o.bolt.dy;
      for (let lt = Math.floor(it * M); lt <= (it + 28) * M; lt++) for (let gt = Math.floor(Z * M); gt <= (Z + 13) * M; gt++)
        n0(o0, (gt + 0.5) / M - Z, (lt + 0.5) / M - it) && q(gt, lt, D.sun, o.bolt.o, Os);
    } else {
      const Z = O / 18, it = 7, lt = 10 + Math.round(o.bolt.dy * 0.2);
      a0.forEach((gt, ot) => gt.split("").forEach((dt, j) => {
        if (dt !== "#") return;
        const bt = Math.floor((it + j) * Z), Ct = Math.floor((lt + ot) * Z);
        for (let Wt = Ct; Wt < Math.max(Ct + 1, Math.floor((lt + ot + 1) * Z)); Wt++) for (let ne = bt; ne < Math.max(bt + 1, Math.floor((it + j + 1) * Z)); ne++) q(ne, Wt, D.sun, o.bolt.o, Os);
      }));
    }
  if (o.cloud.o > 0.01) {
    const Z = Math.max(3, o.cloud.w * M), it = Z * 0.6665, lt = (o.cloud.x + W) * M - Z / 2, gt = (o.cloud.y + N) * M - it / 2, ot = ja(D.cloudDay, D.cloudNight, Math.round(o.cloud.f * 4) / 4), dt = ja(ot, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(gt) - 1); j <= Math.min(O - 1, gt + it + 1); j++) for (let bt = Math.max(0, Math.floor(lt) - 1); bt <= Math.min(O - 1, lt + Z + 1); bt++) {
      const Ct = (bt + 0.5 - lt) / Z, Wt = (j + 0.5 - gt) / Z;
      Bp(Ct, Wt) && q(bt, j, !Bp(Ct, Wt + 1 / Z) || Mi((Wt - 0.42) / 0.25) * 0.8 > tr(bt, j) ? dt : ot, o.cloud.o, $u);
    }
  }
  return i0(tt, F, O, O, { oneBit: s, ink: b, paper: g, snowInk: !o.night });
}
function i0(o, n, i, s, { oneBit: h, ink: b, paper: g, snowInk: v }) {
  const L = new Uint8ClampedArray(i * s * 4), D = ic(b), _ = ic(g);
  for (let T = 0; T < s; T++) for (let O = 0; O < i; O++) {
    const M = T * i + O, Y = n[M];
    if (o[M] == null) continue;
    let X = ic(o[M]);
    if (h) {
      let W;
      Y === Uu || Y === Yu ? W = !0 : Y === xo ? W = v : Y === Nr || Y === Os ? W = !1 : W = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= tr(O, T), (Y === zu || Y === Gu || Y === $u || Y === Os) && (O > 0 && n[M - 1] !== Y || O < i - 1 && n[M + 1] !== Y || T > 0 && n[M - i] !== Y || T < s - 1 && n[M + i] !== Y) && (W = !0), X = W ? D : _;
    }
    L[M * 4] = X[0], L[M * 4 + 1] = X[1], L[M * 4 + 2] = X[2], L[M * 4 + 3] = 255;
  }
  return { w: i, h: s, data: L };
}
const an = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Hc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((s) => s + s).join("") : n;
  return [0, 2, 4].map((s) => parseInt(i.slice(s, s + 2), 16) || 0);
}, s0 = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Pp = {}, za = (o, n, i) => {
  const s = o + n + i;
  return Pp[s] || (Pp[s] = s0(Hc(o).map((h, b) => h + (Hc(n)[b] - h) * i)));
}, Rp = {}, Bs = (o) => Rp[o] || (Rp[o] = Hc(o));
function l0(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [za(n.clear[0], n.cloudy[0], 0.12), za(n.clear[1], n.cloudy[1], 0.12)], n.storm = [za(n.rain[0], "#000000", 0.22), za(n.rain[1], "#000000", 0.22)], n;
}
const c0 = [
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
], tn = (o, n) => (c0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Zu = 1, Ku = 2, Xu = 3, Ju = 4, Or = 5, Is = 6, Nc = 7, Qu = 8, Hp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), d0 = (o, n, i) => {
  let s = !1;
  for (let h = 0, b = o.length - 1; h < o.length; b = h++) {
    const g = o[h], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (s = !s);
  }
  return s;
};
function p0(o, n, i, s, { oneBit: h, ink: b, paper: g, snowInk: v }) {
  const L = new Uint8ClampedArray(i * s * 4), D = Bs(b), _ = Bs(g);
  for (let T = 0; T < s; T++) for (let O = 0; O < i; O++) {
    const M = T * i + O, Y = n[M];
    if (o[M] == null) continue;
    let X = Bs(o[M]);
    if (h) {
      let W;
      Y === Ju || Y === Qu ? W = !0 : Y === Or ? W = v : Y === Nc || Y === Is ? W = !1 : W = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= tn(O, T), (Y === Zu || Y === Ku || Y === Xu || Y === Is) && (O > 0 && n[M - 1] !== Y || O < i - 1 && n[M + 1] !== Y || T > 0 && n[M - i] !== Y || T < s - 1 && n[M + i] !== Y) && (W = !0), X = W ? D : _;
    }
    L[M * 4] = X[0], L[M * 4 + 1] = X[1], L[M * 4 + 2] = X[2], L[M * 4 + 3] = 255;
  }
  return { w: i, h: s, data: L };
}
const u0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, h0 = (o) => ju(o, !1).split("/")[0], sc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, f0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", m0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", g0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", b0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", w0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], v0 = [".##", "##.", ".#.", "#.."];
function th(o, { width: n, height: i, colors: s, wave: h = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const L = { ...Ga, dawn: "#e5a77e", ...s }, D = l0(L), _ = n, T = i, O = _ / v, M = O / 2, Y = Math.PI * 2, X = o.length ? o : [{ cond: "cloudy", night: !1 }], W = [...Array(v * 2)].map((ut, tt) => {
    const F = X[Math.min(tt, X.length - 1)], q = h0(F.cond), rt = tt % 2 === 1;
    return { cond: F.cond, k: q, night: rt, sky: D[q][rt ? 1 : 0], cover: u0[q] };
  }), N = (ut) => T * (0.5 - h * Math.cos(Y * (ut / O - 0.25)));
  return { C: L, S: W, W: _, H: T, cw: O, sw: M, TAU: Y, yb: N, side: (ut, tt, F) => {
    const q = (ut ? N(tt) - F : F - N(tt)) / Math.max(3, b * 1.4) + 0.5;
    return q <= 0 ? 0 : q >= 1 ? 1 : q;
  }, glowAt: (ut) => {
    const tt = ((ut / O - 0.25) % 1 + 1) % 1, F = Math.max(0, Math.min(v - 1, Math.round(ut / O - 0.25))), q = Math.max(0, Math.min(v - 1, Math.round(ut / O - 0.75))), rt = 1 - (W[2 * F].cover + W[2 * q + 1].cover) / 2, pt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(ut) / T)));
    return { c: tt < 0.5 ? L.dusk : L.dawn, a: g * (0.2 + 0.8 * rt) * pt * pt };
  }, soft: b, tw: O * 0.3, sy: T / 90 };
}
function eh(o, { clock: n = 0, ambient: i = !1, seed: s = 1 }) {
  const { S: h, sw: b, side: g, C: v, TAU: L, sy: D, H: _ } = o, T = n, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  h.forEach((X, W) => {
    const N = sc(s * 977 + W * 131 + 7), et = (W + 0.5) * b, nt = X.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[X.k] : 0;
    for (let ut = 0; ut < nt; ut++) {
      const tt = et + (N() - 0.5) * b * 1.6, F = (6 + N() * 76) * D, q = N() < 0.35, rt = 1.8 + N() * 1.6, pt = g(!0, tt, F) * (q ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(L * T / 2600 + ut * 1.7 + W) : 1);
      pt >= 0.03 && O.stars.push({ x: tt, y: F, big: q, size: rt, o: pt });
    }
    if (!X.night && (X.k === "clear" || X.k === "partly")) {
      const ut = et + (N() - 0.5) * b * 0.3, tt = Math.min(15, b * 0.29);
      O.suns.push({ x: ut, y: 32 * D, rad: tt, halo: tt * 2.8 * (i ? 1 + 0.07 * Math.sin(L * T / 3600 + W) : 1) });
    }
    if (X.night && (X.k === "clear" || X.k === "partly")) {
      const ut = Math.min(0.78, b * 0.55 / 34), tt = et - 23 * ut + (N() - 0.5) * b * 0.2;
      O.moons.push({ x: tt + 23 * ut, y: (4 + (i ? 0.8 * Math.sin(L * T / 5200 + W) : 0)) * D + 23 * ut, d: 46 * ut });
    }
  });
  const M = Math.max(56, Math.min(100, _ * 0.45)), Y = Math.max(1, b / (M * 2.4));
  return h.forEach((X, W) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[X.k];
    if (!N) return;
    const et = X.k === "partly" ? 1 : Math.round(N * Y), nt = sc(s * 577 + W * 71 + 3), ut = (W + 0.5) * b, tt = X.k === "rain" || X.k === "storm" || X.night ? v.cloudNight : v.cloudDay, F = X.night ? 0.82 : X.k === "storm" ? 0.75 : 1;
    for (let q = 0; q < et; q++) {
      const rt = M / 46 * (X.k === "partly" ? 1 : 0.8 + nt() * 0.4), pt = ut + (X.k === "partly" ? b * 0.12 : ((q + 0.5) / et - 0.5) * b * 0.95 + (nt() - 0.5) * b * 0.5 / et), Dt = (X.k === "partly" ? 40 : 6 + nt() * 26) * D, ct = i ? 2.5 * Math.sin(L * T / 9e3 + W * 1.3 + q * 2.1) : 0, S = i ? 0.9 * Math.sin(L * T / 6100 + W + q) : 0;
      O.clouds.push({ x: pt - 23 * rt + ct, y: Dt - 15.33 * rt + S, w: 46 * rt, h: 30.66 * rt, fill: tt, o: F * (et > 1 && q === 0 ? 0.85 : 1) });
    }
  }), h.forEach((X, W) => {
    const N = sc(s * 313 + W * 29 + 11), et = (W + 0.5) * b, nt = X.cond === "pouring" ? 16 : X.cond === "rainy" || X.cond === "hail" ? 9 : X.cond === "lightning-rainy" ? 12 : X.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < nt; tt++) {
      let F = et + (N() - 0.5) * b * 1.05, q = 44 + N() * 36, rt = 1;
      if (i) {
        const Dt = ((q - 44 + T * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (Dt - (q - 44)), q = 44 + Dt, rt = Math.min(1, Dt / 6, (36 - Dt) / 6);
      }
      q *= D;
      const pt = g(X.night, F, q) * rt;
      pt >= 0.05 && O.drops.push({ x: F, y: q, o: pt });
    }
    const ut = X.cond === "snowy" ? 11 : X.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < ut; tt++) {
      let F = et + (N() - 0.5) * b * 1.05, q = 40 + N() * 44, rt = 1;
      if (i) {
        const Dt = ((q - 40 + T * 9e-3) % 44 + 44) % 44;
        q = 40 + Dt, F += 1.6 * Math.sin(L * T / 2800 + tt * 1.9 + W), rt = Math.min(1, Dt / 6, (44 - Dt) / 6);
      }
      q *= D;
      const pt = g(X.night, F, q) * rt;
      pt >= 0.05 && O.flakes.push({ x: F, y: q, o: pt });
    }
    if (X.k === "fog") {
      const tt = X.night ? "#c8ccd6" : "#ffffff", F = X.night ? 0.28 : 0.62, q = i ? 4 * Math.sin(L * T / 8e3 + W) : 0;
      for (let rt = 0; rt < 4; rt++) O.fogs.push({ x: et - b * 0.75 + rt % 2 * b * 0.18 + (rt % 2 ? q : -q), y: (30 + rt * 13) * D, w: b * 1.3, c: tt, a: F });
    }
    if (X.k === "storm") {
      const tt = (T / 3400 + W * 0.37) % 1;
      O.bolts.push({ x: et + (N() - 0.5) * b * 0.3 - 5, y: 36 * D, o: i && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function y0(o, n, i, s, h, b, g, v) {
  const { S: L, C: D, cw: _, yb: T, glowAt: O, soft: M, tw: Y, sy: X } = o, W = new Array(i * s), N = new Uint8Array(i * s), et = new Uint8Array(i * s), nt = (Z, it, lt, gt, ot) => {
    lt == null || Z < 0 || it < 0 || Z >= i || it >= s || (gt >= 1 || gt > tn(Z + 5, it + 3)) && (W[it * i + Z] = lt, N[it * i + Z] = ot);
  }, ut = (Z, it, lt, gt) => {
    for (let ot = Math.max(0, Math.floor(it - lt) - 1); ot <= Math.min(s - 1, it + lt + 1); ot++) for (let dt = Math.max(0, Math.floor(Z - lt) - 1); dt <= Math.min(i - 1, Z + lt + 1); dt++) gt(dt, ot, dt + 0.5 - Z, ot + 0.5 - it);
  }, tt = (Z, it, lt) => {
    for (let ot = 0; ot < Z.length - 1; ot++) {
      const dt = (ot + it) * _;
      if (lt < dt - Y / 2) return [Z[ot], Z[ot], 0];
      if (lt <= dt + Y / 2) return [Z[ot], Z[ot + 1], (lt - dt + Y / 2) / Y];
    }
    const gt = Z[Z.length - 1];
    return [gt, gt, 0];
  }, F = L.filter((Z) => !Z.night).map((Z) => Z.sky), q = L.filter((Z) => Z.night).map((Z) => Z.sky), rt = M / b, pt = 16 * X / b;
  for (let Z = 0; Z < i; Z++) {
    const it = (Z + 0.5) * h, lt = T(it) / b, gt = tt(F, 0.75, it), ot = tt(q, 1.25, it), dt = O(it);
    for (let j = 0; j < s; j++) {
      const bt = tn(Z, j), Ct = j + 0.5 - lt, Wt = (rt > 0.01 ? an(0.5 + Ct / rt) : Ct > 0 ? 1 : 0) > bt;
      let ne = Wt ? gt[2] > bt ? gt[1] : gt[0] : ot[2] > bt ? ot[1] : ot[0];
      (Wt ? an(((j + 0.5) / s - 0.45) / 0.55) * 0.7 : an(1 - (j + 0.5) / (s * 0.55)) * 0.7) > tn(Z + 2, j + 5) && (ne = Wt ? za(ne, "#ffffff", 0.18) : za(ne, "#000000", 0.25)), Wt && Ct >= 0 && Ct < pt && dt.a * 1.3 * (1 - Ct / pt) > tn(Z + 6, j + 1) && (ne = dt.c), W[j * i + Z] = ne, et[j * i + Z] = Wt ? 0 : 1;
    }
  }
  const Dt = za(D.sun, "#ffffff", 0.55), ct = za(D.moon, "#ffffff", 0.6);
  n.stars.forEach((Z) => {
    const it = Math.floor(Z.x / h), lt = Math.floor(Z.y / b);
    if (it < 0 || lt < 0 || it >= i || lt >= s || !et[lt * i + it] || Z.o < 0.15) return;
    const gt = Z.o > 0.45 ? D.star : za(D.star, W[lt * i + it], 0.5), ot = Z.big && Z.o > 0.6 ? Math.floor(Z.size / h) : 0;
    nt(it, lt, gt, 1, Nc);
    for (let dt = 1; dt <= ot; dt++) [[it - dt, lt], [it + dt, lt], [it, lt - dt], [it, lt + dt]].forEach((j) => {
      j[0] >= 0 && j[1] >= 0 && j[0] < i && j[1] < s && et[j[1] * i + j[0]] && nt(j[0], j[1], gt, 1, Nc);
    });
  }), n.suns.forEach((Z) => {
    const it = Math.max(1.5, Z.rad / h), lt = Z.x / h, gt = Z.y / b, ot = Z.halo / h * 0.85;
    if (ut(lt, gt, ot, (dt, j, bt, Ct) => {
      const Wt = Math.sqrt(bt * bt + Ct * Ct);
      Wt > it && Wt < ot && !et[j * i + dt] && nt(dt, j, Dt, 0.3 * (1 - (Wt - it) / (ot - it)), 0);
    }), v) {
      const dt = Math.floor(g / 500) % 2, j = Math.max(1, it * 0.3);
      for (let bt = 0; bt < 8; bt++) if (bt % 2 === dt) for (let Ct = it + 1.2; Ct < it + 1.2 + j; Ct += 0.7) nt(Math.floor(lt + Math.cos(bt * Math.PI / 4) * Ct), Math.floor(gt + Math.sin(bt * Math.PI / 4) * Ct), D.sun, 1, Qu);
    }
    ut(lt, gt, it, (dt, j, bt, Ct) => {
      bt * bt + Ct * Ct <= it * it && nt(dt, j, an(((Ct / it + 1) / 2 - 0.6) / 0.4) > tn(dt, j) ? D.sunEdge : D.sun, 1, Zu);
    });
  }), n.moons.forEach((Z) => {
    const it = Math.max(1.5, Z.d * 0.37 / h), lt = Z.x / h, gt = Z.y / b, ot = lt + 0.547 * it, dt = gt - 0.503 * it, j = 0.82 * it;
    ut(lt, gt, it, (bt, Ct, Wt, ne) => {
      if (Wt * Wt + ne * ne > it * it) return;
      const la = bt + 0.5 - ot, ma = Ct + 0.5 - dt;
      la * la + ma * ma > j * j && nt(bt, Ct, an((ne + it) / (2 * it) * 1.1 - 0.1) > tn(bt, Ct) ? D.moon : ct, 1, Ku);
    });
  }), n.clouds.forEach((Z) => {
    const it = Math.max(3, Z.w / h), lt = it * 0.6665, gt = Z.x / h, ot = Z.y / b, dt = za(Z.fill, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(ot) - 1); j <= Math.min(s - 1, ot + lt + 1); j++) for (let bt = Math.max(0, Math.floor(gt) - 1); bt <= Math.min(i - 1, gt + it + 1); bt++) {
      const Ct = (bt + 0.5 - gt) / it, Wt = (j + 0.5 - ot) / it;
      Hp(Ct, Wt) && nt(bt, j, !Hp(Ct, Wt + 1 / it) || an((Wt - 0.42) / 0.25) * 0.8 > tn(bt, j) ? dt : Z.fill, Z.o, Xu);
    }
  }), n.fogs.forEach((Z) => {
    const it = Math.floor(Z.y / b), lt = Math.max(it, Math.floor((Z.y + 6 * X) / b) - 1), gt = Math.floor(Z.x / h), ot = Math.floor((Z.x + Z.w) / h);
    for (let dt = it; dt <= lt; dt++) for (let j = gt; j <= ot; j++) {
      const bt = (j - gt) / Math.max(1, ot - gt);
      nt(j, dt, Z.c, Z.a * (bt < 0.25 ? bt / 0.25 : bt > 0.75 ? (1 - bt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((Z) => {
    const it = Z.x / h, lt = Math.floor(Z.y / b);
    for (let gt = 0; gt < S; gt++) nt(Math.floor(it - 0.208 * gt * b / h), lt + gt, D.rain, Z.o, Ju);
  });
  const Ft = Math.max(0, Math.round(4.4 / h / 2.6));
  return n.flakes.forEach((Z) => {
    const it = Math.floor(Z.x / h), lt = Math.floor(Z.y / b);
    nt(it, lt, D.snow, Z.o, Or);
    for (let gt = 1; gt <= Ft; gt++)
      nt(it - gt, lt, D.snow, Z.o, Or), nt(it + gt, lt, D.snow, Z.o, Or), nt(it, lt - gt, D.snow, Z.o, Or), nt(it, lt + gt, D.snow, Z.o, Or);
  }), n.bolts.forEach((Z) => {
    if (h <= 3.5)
      for (let it = Math.floor(Z.y / b); it <= (Z.y + 24) / b; it++) for (let lt = Math.floor(Z.x / h); lt <= (Z.x + 11) / h; lt++)
        d0(w0, (lt + 0.5) * h - Z.x, (it + 0.5) * b - Z.y) && nt(lt, it, D.sun, 1, Is);
    else {
      const it = Math.round(Z.x / h), lt = Math.round(Z.y / b);
      v0.forEach((gt, ot) => gt.split("").forEach((dt, j) => {
        dt === "#" && nt(it + j, lt + ot, D.sun, 1, Is);
      }));
    }
  }), { col: W, ids: N };
}
function x0(o, n) {
  const i = n.px, s = Math.max(6, Math.round(n.width / i)), h = Math.max(6, Math.round(n.height / i)), b = n.width / s, g = n.height / h, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, L = (M) => {
    const Y = th(M, n);
    return y0(Y, eh(Y, { clock: v, ambient: n.ambient, seed: n.seed }), s, h, b, g, v, n.ambient);
  }, D = L(o), _ = n.reveal == null ? 1 : an(n.reveal);
  let T = D.col, O = D.ids;
  if (_ < 1) {
    const M = n.prev ? L(n.prev) : null, Y = _ * (s + 12);
    T = new Array(s * h), O = new Uint8Array(s * h);
    for (let X = 0; X < s * h; X++) {
      const W = X % s, N = X / s | 0;
      (n.reduce ? _ : an((Y - W) / 12)) > tn(W, N) ? (T[X] = D.col[X], O[X] = D.ids[X]) : M ? (T[X] = M.col[X], O[X] = M.ids[X]) : (T[X] = null, O[X] = 255);
    }
  }
  return p0(T, O, s, h, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function k0(o, n, i) {
  const s = i.width, h = i.height, b = i.reveal == null ? 1 : an(i.reveal), g = (O, M) => {
    const Y = th(M, i);
    M0(O, Y, eh(Y, i));
  };
  if (o.clearRect(0, 0, s, h), b >= 1) {
    g(o, n);
    return;
  }
  if (i.prev && g(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = b, g(o, n), o.restore();
    return;
  }
  const v = o.canvas, L = v.__wxOff || (v.__wxOff = document.createElement("canvas"));
  (L.width !== v.width || L.height !== v.height) && (L.width = v.width, L.height = v.height);
  const D = L.getContext("2d");
  D.setTransform(o.getTransform()), D.clearRect(0, 0, s, h), g(D, n);
  const _ = b * (s + 64) - 64, T = D.createLinearGradient(_, 0, _ + 64, 0);
  T.addColorStop(0, "rgba(0,0,0,1)"), T.addColorStop(1, "rgba(0,0,0,0)"), D.globalCompositeOperation = "destination-in", D.fillStyle = T, D.fillRect(0, 0, s, h), D.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(L, 0, 0), o.restore();
}
function M0(o, n, i) {
  const { W: s, H: h, S: b, C: g, cw: v, yb: L, glowAt: D, soft: _, tw: T, sy: O } = n, M = o.getTransform().a || 1, Y = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * M : 0, o.shadowOffsetY = S ? 1.5 * M : 0;
  }, X = (S, Ft) => {
    const Z = Bs(S);
    return "rgba(" + Z[0] + "," + Z[1] + "," + Z[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, W = (S, Ft) => {
    const Z = o.createLinearGradient(0, 0, s, 0);
    Z.addColorStop(0, S[0]);
    for (let it = 0; it < S.length - 1; it++) {
      const lt = (it + Ft) * v, gt = (lt - T / 2) / s, ot = (lt + T / 2) / s;
      gt > 0 && gt < 1 && Z.addColorStop(gt, S[it]), ot > 0 && ot < 1 && Z.addColorStop(ot, S[it + 1]);
    }
    return Z.addColorStop(1, S[S.length - 1]), Z;
  }, N = Math.max(24, Math.ceil(s / 4)), et = (S, Ft) => {
    o.beginPath();
    for (let Z = 0; Z <= N; Z++) {
      const it = s * Z / N, lt = S == null ? 0 : L(it) + S;
      Z ? o.lineTo(it, lt) : o.moveTo(it, lt);
    }
    for (let Z = N; Z >= 0; Z--) {
      const it = s * Z / N;
      o.lineTo(it, L(it) + Ft);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = W(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, s, h);
  const nt = o.createLinearGradient(0, 0, s, 0);
  for (let S = 0; S <= 64; S++) {
    const Ft = D(s * S / 64);
    nt.addColorStop(S / 64, X(Ft.c, Math.min(1, Ft.a)));
  }
  o.fillStyle = nt;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, et(S * 2 * O, (S + 1) * 2 * O);
  o.fillStyle = W(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const ut = Math.max(0.5, _), tt = 6;
  o.globalAlpha = 1, et(null, -ut);
  for (let S = 0; S < tt; S++)
    o.globalAlpha = 1 - (S + 0.5) / tt, et(-ut + 2 * ut * S / tt, -ut + 2 * ut * (S + 1) / tt);
  o.globalAlpha = 1;
  const F = new Path2D(g0), q = new Path2D(m0), rt = new Path2D(f0), pt = new Path2D(b0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(F), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Dt = za(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ft = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ft.addColorStop(0, X(Dt, 0.42)), Ft.addColorStop(0.7, X(Dt, 0)), o.fillStyle = Ft, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const Z = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    Z.addColorStop(0.6, g.sun), Z.addColorStop(1, g.sunEdge), o.fillStyle = Z, Y(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), Y(!1);
  });
  const ct = za(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ft = o.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, ct), Ft.addColorStop(1, g.moon), o.fillStyle = Ft, Y(!0), o.fill(q), Y(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, Y(!0), o.fill(rt), Y(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ft = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ft.addColorStop(0, X(S.c, 0)), Ft.addColorStop(0.25, X(S.c, S.a)), Ft.addColorStop(0.75, X(S.c, S.a)), Ft.addColorStop(1, X(S.c, 0)), o.fillStyle = Ft, o.fillRect(S.x, S.y, S.w, 6 * O);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(pt), o.restore();
  }), o.restore();
}
const S0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Br = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, lc = (o, n) => '<path class="' + n + '" d="' + o + '"/>', _0 = (o, n) => ' style="animation-delay:-' + Math.round(o * 137 % n) + 'ms"', Va = (o, n, i, s) => {
  const h = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (s < 1 ? ' opacity="' + s + '"' : "") + _0(o, 2400) + ' d="M' + o + " " + (n - i) + "L" + (o + h) + " " + (n - h) + "L" + (o + i) + " " + n + "L" + (o + h) + " " + (n + h) + "L" + o + " " + (n + i) + "L" + (o - h) + " " + (n + h) + "L" + (o - i) + " " + n + "L" + (o - h) + " " + (n - h) + 'Z"/>';
}, Np = ([o, n, i], s) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + s + ')"/><defs><linearGradient id="' + s + '" x1="0" y1="' + n + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', C0 = (o, n) => n ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', A0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + n + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + n + ' 60.65)"/></g>') : [19, 26, 33].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + n + ' 38)"/></g>')).join(""), L0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([n, i], s) => '<circle class="wbFlake" style="animation-delay:-' + s * 640 + 'ms" cx="' + n + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function T0(o, n, i, s) {
  const h = (b) => '<g filter="url(#' + s + '-sh)">' + b + "</g>";
  return o === "clear" ? n ? h(Np(i ? vs.l : vs.s, s)) + (i ? Va(70, 20, 5.83, 1) + Va(78.33, 41.67, 3.75, 0.8) + Va(60, 71.67, 3.33, 0.6) : Va(42, 12, 3.5, 1) + Va(47, 25, 2.25, 0.8) + Va(36, 43, 2, 0.6)) : h(C0(s, i)) : o === "partly" ? h(n ? Np(i ? vs.lp : vs.sp, s) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + h(lc(i ? Br.lp : Br.sp, n ? "wbCloudLight" : "wbBright")) + (n ? i ? Va(73.33, 16.67, 4.17, 0.9) : Va(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? h(lc(i ? Br.lc : Br.s, n ? "wbCloudLight" : "wbBright")) + (n ? i ? Va(15, 15, 3.75, 0.8) + Va(76.67, 13.33, 2.92, 0.6) : Va(9, 9, 2.25, 0.8) + Va(46, 8, 1.75, 0.6) : "") : h(lc(i ? Br.lr : Br.s, "wbCloudLight")) + (o === "rain" ? A0(i) : L0(i));
}
const D0 = (o, n) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (n ? 1.6 : 1) + '" stdDeviation="' + (n ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function E0(o, n, i, s) {
  let h = S0(o);
  const b = h === "night" || !!i;
  h === "night" && (h = "clear");
  const g = n ? 90 : 54;
  return { k: h, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + D0(s, n) + T0(h, b, n, s) + "</svg>" };
}
const B0 = [
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
], ys = (o, n) => (B0[n % 8 * 8 + o % 8] + 0.5) / 64, io = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], ia = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Si = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Op = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, ar = [255, 255, 255], ua = io("#26221e"), Ip = io("#0288d1"), P0 = io("#01579b"), cc = io(Ga.cloudDay), dc = io(Ga.cloudNight), xs = io(Ga.dusk), pc = io(Ga.sunEdge), R0 = io(Ga.sun), H0 = 10, Fp = 0.3, on = 56, ah = 21;
function N0(o) {
  const n = Array.from({ length: ah }, () => new Array(on).fill(void 0)), i = (g, v, L) => {
    n[v][g] = L;
  }, s = ia(xs, ua, 0.35), h = ia(ua, ar, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? on - 2 : on - 1;
    for (let L = 6 - g; L <= v; L++) i(L, g, g < 2 ? s : g === 6 ? h : ua);
  }
  const b = [xs, pc, dc, io(Ga.skyRainDay), ia(xs, ua, 0.2), ia(o, ua, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const L = 9 + v * 6;
    for (let D = 0; D < g; D++) {
      const _ = b[(v * 2 + D * 3) % b.length];
      for (let T = L; T < L + 5; T++)
        i(T, 7 + D * 2, ia(_, ua, 0.12)), i(T, 8 + D * 2, D === g - 1 ? ia(_, ar, 0.3) : _);
      i(L + 5, 7 + D * 2, ua), i(L + 5, 8 + D * 2, ua);
    }
  });
  for (let g = 7; g <= 12; g++) i(5, g, ua);
  i(5, 13, pc);
  for (let g = 7; g <= 14; g++) for (let v = 42; v <= 51; v++) i(v, g, v === 51 ? dc : cc);
  for (let g = 43; g <= 50; g += 2)
    i(g, 12, ua), i(g, 9, ia(ua, cc, 0.4));
  for (let g = 40; g <= 53; g++) i(g, 14, g === 40 || g === 53 ? dc : cc);
  for (let g = 15; g <= 18; g++) for (let v = 46; v <= 49; v++) i(v, g, g === 18 ? ua : g === 16 ? pc : xs);
  for (let g = 15; g <= 19; g++) i(44, g, ua);
  return i(44, 20, R0), n;
}
function O0(o, n, i, s) {
  const h = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(h * b * 4), v = io(s.skyClearDay), L = io(s.skyFogDay), D = N0(v), _ = Math.round(b * 0.55), T = Si(1 - Math.log(i / Fp) / Math.log(H0 / Fp)), O = ia(v, L, T), M = (N) => Si((N - 0.1) / 0.9), Y = Si((1 - Math.exp(-2 / i) - 0.2) / 0.8), X = Math.round(h / 2 - on / 2), W = _ + 3;
  for (let N = 0; N < b; N++) {
    const et = W - 1 - N, nt = N - W;
    for (let ut = 0; ut < h; ut++) {
      const tt = ut - X;
      let F, q;
      const rt = et >= 0 && et < ah && tt >= 0 && tt < on ? D[et][tt] : void 0;
      if (rt)
        F = rt, q = Y;
      else if (et >= 0 && et <= 1 && tt >= 4 - et && tt <= 5 - et)
        F = ia(ar, Ip, 0.15), q = Y;
      else if (N < _) {
        const ct = Si(((N + 0.5) / _ - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(ct + ys(ut + 2, N + 5)));
        F = ia(O, ar, S * 0.1), q = T * 0.95;
      } else {
        const ct = (N - _ + 0.5) / (b - _), S = Math.min(1.5, 6e-3 / (ct * ct)), Ft = Si(ct * 1.4) * 3, Z = Math.min(3, Math.floor(Ft + ys(ut + 1, N + 6)));
        F = ia(Ip, P0, Z / 3);
        const it = 1 + Math.round(ct * 7), lt = Math.floor(ut / (it * 3)), gt = 0.06 + 0.16 * ct, ot = ut % (it * 3) < it;
        ot && Op(lt, N) < gt ? F = ia(F, ar, 0.18 + 0.1 * (1 - ct)) : ot && ct > 0.5 && Op(lt, N - 1) < gt && (F = ia(F, ua, 0.12)), q = M(1 - Math.exp(-S / i)), nt === 0 && tt >= 3 && tt <= 8 ? (F = ia(F, ar, tt < 6 ? 0.8 : 0.45), q = Y) : nt >= 0 && nt <= 2 && tt >= on && tt < on + 40 ? ((1 - (tt - on) / 40) * (nt === 1 ? 0.9 : 0.5) > ys(ut, N + 3) && (F = ia(F, ar, 0.5)), q = Y) : nt === 0 && tt >= 6 && tt < on && (F = ia(F, ua, tt % 2 === 0 ? 0.35 : 0.2), q = Y);
      }
      const pt = q > ys(ut, N) ? L : F, Dt = (N * h + ut) * 4;
      g[Dt] = pt[0], g[Dt + 1] = pt[1], g[Dt + 2] = pt[2], g[Dt + 3] = 255;
    }
  }
  return { data: g, w: h, h: b };
}
const I0 = {
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
}, F0 = 1.6;
function q0(o, n) {
  const i = o ? I0[String(o).toUpperCase()] : void 0;
  if (!i || !(n > 0)) return;
  const s = (b) => Math.abs(Math.log(b[2] / n)), h = i.reduce((b, g) => s(g) < s(b) ? g : b);
  return s(h) <= Math.log(F0) ? { from: h[0], to: h[1], km: h[2] } : void 0;
}
const V0 = (o, n) => n === "mi" ? o * 1.609344 : n === "m" ? o / 1e3 : n === "ft" ? o * 3048e-7 : n === "yd" ? o * 9144e-7 : o, W0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", He = {
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
}, Ne = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, je = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function j0() {
  const { pivot: o, slider: n, iconbtn: i, warp: s, outline: h } = He;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Ne[o.ease]],
    ["--ab-blur", n.glow + "px"],
    ["--ab-spread", n.spread + "px"],
    ["--ab-str", n.strength + "%"],
    ["--ab-blur2", n.glow + n.hold + "px"],
    ["--ab-spread2", n.spread + n.hold / 4 + "px"],
    ["--ab-str2", n.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (n.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", n.ein + "ms"],
    ["--ab-out", n.eout + "ms"],
    ["--ab-ease", Ne[n.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Ne[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", s.cdur + "ms"],
    ["--wc-delay", s.cdelay + "ms"],
    ["--wc-ease", Ne[s.ease]],
    ["--ol-esens", h.glowFrom],
    ["--ol-csens", h.colourFrom],
    ["--ol-cone", h.cone],
    ["--ol-glow", h.glow / 100],
    ["--ol-border", h.border / 100],
    ["--ol-fill", h.fill / 100],
    ["--ol-size", h.size / 100],
    ["--ol-h", h.hue + "deg"],
    ["--ol-in", h.fin + "ms"],
    ["--ol-out", h.fout + "ms"]
  ].map(([b, g]) => b + ":" + g).join(";");
}
const uc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", z0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", G0 = 300, Ps = (o) => Math.min(1, G0 / Math.max(1, o)), hc = (o, n) => 1 + (n / 100 - 1) * Ps(o.offsetWidth);
function $0(o, n) {
  n.style.cssText += ";" + j0();
  let i = null;
  const s = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var N, et;
    const T = _.pointerType === "touch" || je() ? null : (et = (N = _.target).closest) == null ? void 0 : et.call(N, uc);
    if (i && i !== T && s(i), i = T, !T || T.disabled) return;
    const O = He.pivot, M = T.getBoundingClientRect(), Y = (_.clientX - M.left) / M.width, X = (_.clientY - M.top) / M.height, W = 1;
    T.classList.add("mvPv", "mvMoving", "mvLit"), T.style.setProperty("--pv-persp", O.persp / Ps(Math.max(T.offsetWidth, T.offsetHeight)) + "px"), T.style.setProperty("--ry", (W * (Y - 0.5) * 2 * O.tilt * Ps(T.offsetWidth)).toFixed(3) + "deg"), T.style.setProperty("--rx", (W * -(X - 0.5) * 2 * O.tilt * Ps(T.offsetHeight)).toFixed(3) + "deg"), T.style.setProperty("--mx", (Y * 100).toFixed(1) + "%"), T.style.setProperty("--my", (X * 100).toFixed(1) + "%"), T._down || T.style.setProperty("--sc", hc(T, O.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    i && !i.contains(_.relatedTarget) && (s(i), i = null);
  }), o.addEventListener("pointerdown", (_) => {
    var O, M;
    const T = je() ? null : (M = (O = _.target).closest) == null ? void 0 : M.call(O, uc);
    T && (T._down = !0, T.classList.add("mvPv"), T.classList.remove("mvMoving"), T.style.setProperty("--sc", hc(T, He.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var O, M;
    const T = (M = (O = _.target).closest) == null ? void 0 : M.call(O, uc);
    T && (T._down = !1, T.style.setProperty("--sc", _.pointerType === "touch" ? 1 : hc(T, He.pivot.lift)));
  });
  let h = null;
  o.addEventListener("pointerover", (_) => {
    var T, O, M;
    _.pointerType !== "touch" && ((M = (O = (T = _.target).closest) == null ? void 0 : O.call(T, ".tfBar")) == null || M.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var O, M;
    const T = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    T && !T.contains(_.relatedTarget) && T !== h && T.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var O, M;
    const T = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    T && (h = T, T.classList.add("mvHold"));
  });
  const b = (_) => {
    if (!h) return;
    h.classList.remove("mvHold");
    const T = h.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < T.left || _.clientX > T.right || _.clientY < T.top || _.clientY > T.bottom) && h.classList.remove("mvHover"), h = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (_) => {
    var T, O;
    (O = (T = _.target).matches) != null && O.call(T, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var T;
    (T = _.target.classList) == null || T.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var O, M;
    const T = (M = (O = _.target).closest) == null ? void 0 : M.call(O, ".tfBar");
    !T || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (T.classList.add("mvHold"), clearTimeout(T._k), T._k = setTimeout(() => T.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var O, M;
    const T = (M = (O = _.target).closest) == null ? void 0 : M.call(O, "button.tfIcon[data-act]");
    T && U0(T);
  });
  let g = null;
  const v = (_, T, O) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const M = _.getBoundingClientRect(), Y = M.width / 2, X = M.height / 2, W = T.clientX - M.left - Y, N = T.clientY - M.top - X, et = W ? Y / Math.abs(W) : 1 / 0, nt = N ? X / Math.abs(N) : 1 / 0, ut = Math.min(Math.max(1 / Math.min(et, nt), 0), 1);
    let tt = Math.atan2(N, W) * 180 / Math.PI + 90;
    tt < 0 && (tt += 360);
    const F = O ? 100 : ut * 100;
    _.style.setProperty("--edge-proximity", F.toFixed(3)), _.style.setProperty("--cursor-angle", tt.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", O || F >= He.outline.lightAt);
  }, L = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, D = (_) => {
    var O;
    const T = (O = _.closest) == null ? void 0 : O.call(_, z0);
    return T && !n.classList.contains("tfEditing") ? T : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const T = D(_.target);
    g && g !== T && L(g), g = T, T && !T._down && v(T, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    g && !g.contains(_.relatedTarget) && (L(g), g = null);
  }), o.addEventListener("pointerdown", (_) => {
    const T = D(_.target);
    T && He.outline.press && (T._down = !0, v(T, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const T = D(_.target);
    T && (T._down = !1, _.pointerType === "touch" ? L(T) : v(T, _, !1));
  }), new MutationObserver((_) => {
    var T;
    for (const O of _) {
      const M = O.target;
      if (O.type === "attributes") {
        (T = M.classList) != null && T.contains("tfMoreBackdrop") && !M.hidden && O.oldValue !== null && qp(M);
        continue;
      }
      O.addedNodes.forEach((Y) => {
        Y.nodeType === 1 && Y.classList.contains("tfMoreBackdrop") && !Y.hidden && qp(Y);
      });
    }
  }).observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const oh = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function nh(o, n) {
  const i = [];
  for (let s = o; s && s !== n && s.parentNode; s = s.parentNode) i.unshift([...s.parentNode.children].indexOf(s));
  return i;
}
const rh = (o, n) => n.reduce((i, s) => i == null ? void 0 : i.children[s], o);
function U0(o) {
  var M;
  if (je() || o._warp) return;
  const n = He.warp, i = n.amount / 100, s = o.firstElementChild;
  if (!s) return;
  const h = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = oh(o), L = (M = v.dataset) == null ? void 0 : M.k, D = nh(o, v), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const T = s.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...h, filter: b }], { duration: n.win, easing: Ne.exit, fill: "forwards" }), O = performance.now();
  T.finished.then(() => {
    const Y = () => {
      var ut, tt;
      const X = L ? v.isConnected ? v : (ut = g.querySelector) == null ? void 0 : ut.call(g, '[data-k="' + CSS.escape(L) + '"]') : v, W = X && rh(X, D);
      if (W === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - O < 420) {
        requestAnimationFrame(Y);
        return;
      }
      (((tt = W == null ? void 0 : W.matches) != null && tt.call(W, "button.tfIcon") ? W : o).firstElementChild || s).animate([{ ...h, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: n.wout, easing: Ne[n.ease] }), T.cancel(), o._warp = 0;
    };
    Y();
  });
}
const ih = (o) => {
  let n = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const s = o[i - 1] || o[i], h = o[i], b = o[i + 1], g = o[i + 2] || b, v = [h[0] + (b[0] - s[0]) / 6, h[1] + (b[1] - s[1]) / 6], L = [b[0] - (g[0] - h[0]) / 6, b[1] - (g[1] - h[1]) / 6];
    n += "C" + v.map((D) => D.toFixed(1)).join(" ") + " " + L.map((D) => D.toFixed(1)).join(" ") + " " + b.map((D) => D.toFixed(1)).join(" ");
  }
  return n;
}, sh = (o, n, i, s = "mvGrid") => [0, 1, 2].map((h) => {
  const b = (n + (i - n) * h / 2).toFixed(1);
  return '<line class="' + s + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function lh(o, n = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (je() || !(n != null && n.getTotalLength)) return;
  const s = He.graphs, h = n.getTotalLength();
  n.animate([{ strokeDasharray: h, strokeDashoffset: h }, { strokeDasharray: h, strokeDashoffset: 0 }], { duration: s.draw, easing: Ne.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: s.draw * 0.6, delay: s.draw * 0.3 + g * 12, easing: Ne.standard, fill: "backwards" }));
}
function Rs(o, n, i, s, h) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = s + "px", o.style.width = h + "px", je() || n === s && i === h) return;
  const b = He.tabs, g = b.stretch / 100, v = (_, T) => ({ left: _ + "px", width: T + "px" }), D = s > n ? v(n + (s - n) * (0.15 * (1 - g)), s + h - (n + (s - n) * (0.15 * (1 - g)))) : v(s, n + i - s - (n - s) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...D }, v(s, h)], { duration: b.dur, easing: Ne.standard });
}
function Y0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (h) => h.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), s = (h, b) => b ? [...h.children].indexOf(b) : -1;
  o.addEventListener("click", (h) => {
    var et, nt, ut;
    const b = (nt = (et = h.target).closest) == null ? void 0 : nt.call(et, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || je() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const L = s(g, v), D = g.getBoundingClientRect(), _ = v.getBoundingClientRect(), T = getComputedStyle(v).borderRadius, O = g.getRootNode(), M = oh(g), Y = (ut = M.dataset) == null ? void 0 : ut.k, X = nh(g, M), W = performance.now(), N = () => {
      var S, Ft, Z;
      const tt = Y && !M.isConnected ? (S = O.querySelector) == null ? void 0 : S.call(O, '[data-k="' + CSS.escape(Y) + '"]') : M, F = tt && rh(tt, X), q = (Ft = F == null ? void 0 : F.matches) != null && Ft.call(F, n) ? i(F) : null;
      if (!q || s(F, q) === L) {
        performance.now() - W < 700 && requestAnimationFrame(N);
        return;
      }
      const rt = F.getBoundingClientRect(), pt = q.getBoundingClientRect(), Dt = getComputedStyle(q);
      (Z = F.querySelector(":scope>.mvSegInd")) == null || Z.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (pt.top - rt.top - F.clientTop) + "px;height:" + pt.height + "px;border-radius:" + T + ";background:" + Dt.backgroundColor + ";box-shadow:" + Dt.boxShadow, getComputedStyle(F).position === "static" && (F.style.position = "relative"), F.prepend(ct), F.classList.add("mvSegMoving"), Rs(ct, _.left - D.left - F.clientLeft, _.width, pt.left - rt.left - F.clientLeft, pt.width), clearTimeout(F._seg), F._seg = setTimeout(() => {
        ct.remove(), F.classList.remove("mvSegMoving");
      }, He.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const ch = (o) => getComputedStyle(o).placeItems.startsWith("end");
function qp(o) {
  const n = o.firstElementChild;
  if (je() || !n || n.classList.contains("still")) return;
  const i = He.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Ne.standard }), n.style.animation = "none", n.animate(ch(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Ne[i.ease] }), [...(n.classList.contains("tfMorePair") && n.querySelector(".tfMore") || n).children].forEach((h, b) => h.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Ne.standard, fill: "backwards" }));
}
function Z0(o, n) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (je() || !i || o.hidden || o._closing) {
    n();
    return;
  }
  const s = He.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + s.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: s.close, easing: Ne.exit, fill: "forwards" });
  const h = i.animate(ch(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + s.from / 100 + ")" }], { duration: s.close, easing: Ne.exit, fill: "forwards" });
  let b = !1;
  const g = () => {
    b || (b = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((v) => v.cancel()), i.getAnimations().forEach((v) => v.cancel()), n());
  };
  h.finished.then(g, g), setTimeout(g, s.close + 80);
}
const K0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function X0(o, n) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", K0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: n }));
}
function J0(o) {
  if (je()) return;
  const n = He.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: n.dur, easing: Ne.spring });
  const i = o.querySelector(".mvTick path");
  i && n.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: n.dur * 0.5, easing: Ne.standard, fill: "backwards" });
}
const fc = (o, n, i, s, h = 1) => (o + n * i * h) * Math.pow(s, h);
function mc(o) {
  const n = He.drag.squash / 100;
  !o || je() || !n || o.animate([{ transform: "scale(" + (1 + n * 0.4) + "," + (1 - n) + ")" }, { transform: "scale(" + (1 - n * 0.1) + "," + (1 + n * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Vp(o) {
  if (!o || je()) return;
  const n = He.expand;
  [...o.children].slice(1).forEach((i, s) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: n.delay + s * n.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const $e = 6e4, se = 36e5, xa = 864e5, Ti = 1440, Q0 = 6, t1 = 10 * $e, Wp = 3, e1 = 3, ks = { day: [6, 22], waking: [7, 23], all: [0, 24] }, a1 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], o1 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", jp = (o, n, i, s) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((h) => {
  const b = Math.cos(h * Math.PI / 180), g = Math.sin(h * Math.PI / 180), v = i + 2, L = i + 2 + s;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * L).toFixed(2) + " " + (n + g * L).toFixed(2);
}).join("") + '"/>', Ko = (o) => '<path d="' + o1 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Xo = (o) => '<path d="' + o + '"/>', zp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function n1(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? zp : jp(12, 12, 4, 2.5);
    case "clear-night":
      return zp;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : jp(7.5, 7.5, 2.6, 1.4)) + Ko("translate(3.6,3) scale(.85)");
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
const gc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + n1(o, n) + "</svg>", r1 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), i1 = 30 * $e, s1 = 7, l1 = 3, Gp = 1, c1 = $e, d1 = 15 * $e, p1 = 5, le = {
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
}, vt = {
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
}, Oc = 7, Qo = 256, u1 = 3, $p = 700, h1 = 1800, dh = 5 * $e;
let Ms = null, Up = 0, _i = null;
function f1() {
  return Ms && Date.now() - Up < dh ? Promise.resolve(Ms) : _i || (_i = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var s, h;
    const n = (((s = o.radar) == null ? void 0 : s.past) || []).slice(-6), i = (((h = o.radar) == null ? void 0 : h.nowcast) || []).slice(0, u1);
    return Ms = { host: o.host, frames: [...n.map((b) => ({ ...b, past: !0 })), ...i] }, Up = Date.now(), Ms;
  }).finally(() => {
    _i = null;
  }), _i);
}
function m1(o, n, i, s) {
  const h = Oc, b = 2 ** h, g = o * Math.PI / 180, v = (n + 180) / 360 * b * Qo, L = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Qo, D = v - i / 2, _ = L - s / 2, T = [];
  for (let O = Math.floor(D / Qo); O <= Math.floor((D + i - 1) / Qo); O++) for (let M = Math.floor(_ / Qo); M <= Math.floor((_ + s - 1) / Qo); M++)
    M < 0 || M >= b || T.push({ x: (O % b + b) % b, y: M, left: O * Qo - D, top: M * Qo - _ });
  return T;
}
const g1 = {
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
}, b1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], w1 = Object.keys(vt.phases), v1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Yp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ph = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ss = 100, Zp = "µg/m³", y1 = "weather_alerts.air_quality_pollen", Fs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], x1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, k1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], M1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, S1 = { daily: 1, hourly: 2 }, Mt = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), na = (o, n) => o.replace(/\{(\w+)\}/g, (i, s) => n[s] ?? ""), en = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Kp = /* @__PURE__ */ new Map();
function uh(o) {
  let n = Kp.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), h = document.createElementNS(i, "path");
    s.setAttribute("viewBox", "0 0 24 24"), s.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", h.setAttribute("d", o), s.append(h), document.body.append(s);
    const b = h.getBBox();
    s.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, L = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * L).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * L).toFixed(2) + "px" : "", Kp.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : en(o);
}
const _1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, fe = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Xp = /* @__PURE__ */ new Map(), Jp = /* @__PURE__ */ new Map(), bc = /* @__PURE__ */ new WeakMap(), C1 = (o) => {
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
  const s = Number(o);
  if (Number.isNaN(s)) return String(o);
  const h = (n == null ? void 0 : n.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...h ? { useGrouping: !1 } : {} }, g = h ? "en-US" : C1(n), v = JSON.stringify([g, b]);
  let L = Xp.get(v);
  if (!L) {
    try {
      L = new Intl.NumberFormat(g, b);
    } catch {
      L = new Intl.NumberFormat(void 0, b);
    }
    Xp.set(v, L);
  }
  return L.format(s);
}
const qc = (o) => {
  var n;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.language) || (o == null ? void 0 : o.language) || void 0;
};
function A1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (bc.has(o)) return bc.get(o);
  const n = o.time_format, i = n === "language" || n === "system" || !n ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(n === "language" ? o.language : void 0).includes("10") : n === "12";
  return bc.set(o, i), i;
}
const hh = (o) => {
  var n, i;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function fh(o, n) {
  const i = JSON.stringify([o, n]);
  let s = Jp.get(i);
  if (!s) {
    try {
      s = new Intl.DateTimeFormat(o, n);
    } catch {
      s = new Intl.DateTimeFormat(void 0, { ...n, timeZone: void 0 });
    }
    Jp.set(i, s);
  }
  return s;
}
const ea = (o, n) => fh(qc(n), { hour: "numeric", minute: "2-digit", hourCycle: A1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: hh(n) }).format(o), Qp = (o, n) => fh(qc(n), { weekday: "short", timeZone: hh(n) }).format(o), L1 = (o, n) => o.toLocaleDateString(qc(n), { weekday: "narrow" }), Me = (o, n) => fe(n) ? te(Math.round(Number(n)), o.locale) + "°" : "–", Sn = (o) => {
  const n = new Date(o);
  return n.setHours(0, 0, 0, 0), n;
}, Pr = (o, n) => o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate(), ha = Math.PI / 180, T1 = 2440588, D1 = 2451545, qs = ha * 23.4397, E1 = 149598e3, B1 = -0.833 * ha, P1 = 0.133 * ha, tu = 5 * $e, mh = (o) => o.getTime() / xa - 0.5 + T1 - D1, gh = (o, n) => Math.atan2(Math.sin(o) * Math.cos(qs) - Math.tan(n) * Math.sin(qs), Math.cos(o)), bh = (o, n) => Math.asin(Math.sin(n) * Math.cos(qs) + Math.cos(n) * Math.sin(qs) * Math.sin(o)), R1 = (o, n) => ha * (280.16 + 360.9856235 * o) - n, H1 = (o, n, i) => Math.asin(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(o));
function wh(o) {
  const n = ha * (357.5291 + 0.98560028 * o), i = ha * (1.9148 * Math.sin(n) + 0.02 * Math.sin(2 * n) + 3e-4 * Math.sin(3 * n)), s = n + i + ha * 102.9372 + Math.PI;
  return { ra: gh(s, 0), dec: bh(s, 0), dist: E1 };
}
function vh(o) {
  const n = ha * (218.316 + 13.176396 * o), i = ha * (134.963 + 13.064993 * o), s = ha * (93.272 + 13.22935 * o), h = n + ha * 6.289 * Math.sin(i), b = ha * 5.128 * Math.sin(s);
  return { ra: gh(h, b), dec: bh(h, b), dist: 385001 - 20905 * Math.cos(i) };
}
const yh = (o, n, i, s) => {
  const h = mh(n), b = o(h);
  return H1(R1(h, ha * -s) - b.ra, ha * i, b.dec);
}, Vs = (o, n, i) => yh(wh, o, n, i), N1 = (o, n, i) => yh(vh, o, n, i);
function xh(o, n, i, s) {
  const h = {};
  let b = i.getTime(), g = o(i) - n;
  for (let v = b + tu; v <= s.getTime(); v += tu) {
    const L = o(new Date(v)) - n;
    if (g < 0 != L < 0) {
      const D = new Date(b + (v - b) * g / (g - L));
      L > 0 ? h.rise ?? (h.rise = D) : h.set ?? (h.set = D);
    }
    b = v, g = L;
  }
  return h;
}
const kh = (o) => {
  const n = Sn(o);
  return [n, new Date(n.getTime() + xa)];
}, O1 = (o, n, i) => xh((s) => Vs(s, n, i), B1, ...kh(o)), I1 = (o, n, i) => xh((s) => N1(s, n, i), P1, ...kh(o));
function wc(o) {
  const n = mh(o), i = wh(n), s = vh(n), h = Math.acos(Math.sin(i.dec) * Math.sin(s.dec) + Math.cos(i.dec) * Math.cos(s.dec) * Math.cos(i.ra - s.ra)), b = Math.atan2(i.dist * Math.sin(h), s.dist - i.dist * Math.cos(h)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - s.ra), Math.sin(i.dec) * Math.cos(s.dec) - Math.cos(i.dec) * Math.sin(s.dec) * Math.cos(i.ra - s.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const F1 = (o) => {
  const n = o * 28;
  return n < 0.5 || n > 27.5 ? "new_moon" : n < 6.5 ? "waxing_crescent" : n < 7.5 ? "first_quarter" : n < 13.5 ? "waxing_gibbous" : n < 14.5 ? "full_moon" : n < 20.5 ? "waning_gibbous" : n < 21.5 ? "last_quarter" : "waning_crescent";
}, Ir = (o) => {
  const n = o == null ? void 0 : o.config;
  return n && fe(n.latitude) && fe(n.longitude) ? { lat: Number(n.latitude), lon: Number(n.longitude) } : null;
};
function Rr(o, n) {
  var D, _, T;
  const i = Ir(o), s = i ? O1(n, i.lat, i.lon) : {}, h = (D = o == null ? void 0 : o.states) == null ? void 0 : D["sun.sun"], b = Sn(n).getTime(), g = (O) => {
    const M = O ? new Date(O) : null;
    return M && Number.isFinite(M.getTime()) && Sn(M).getTime() === b ? M : null;
  }, v = g((_ = h == null ? void 0 : h.attributes) == null ? void 0 : _.next_rising), L = g((T = h == null ? void 0 : h.attributes) == null ? void 0 : T.next_setting);
  return v && (s.rise = v), L && (s.set = L), s;
}
function q1(o) {
  var s;
  const n = (s = o == null ? void 0 : o.states) == null ? void 0 : s["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Ir(o);
  return i ? Vs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const or = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Fr = (o, n) => {
  var s;
  const i = (s = o.entities) == null ? void 0 : s[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var s, h;
  for (const b of n) {
    const g = (s = o.states) == null ? void 0 : s[b];
    if (!or(g)) continue;
    const v = (h = g.attributes) == null ? void 0 : h[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, V1 = (o, n) => n.map((i) => {
  var s;
  return (s = o.states) == null ? void 0 : s[i];
}).find(or), W1 = (o, n, i) => n.map((s) => {
  var h;
  return (h = o.states) == null ? void 0 : h[s];
}).find((s) => {
  var h;
  return or(s) && (((h = s.attributes) == null ? void 0 : h.supported_features) == null || Number(s.attributes.supported_features) & S1[i]);
});
function Mn(o, n, i) {
  var b, g, v, L;
  const s = ((g = (b = o.config) == null ? void 0 : b.unit_system) == null ? void 0 : g.length) || "", h = (n == null ? void 0 : n.attributes) || {};
  switch (i) {
    case "precipitation":
      return h.precipitation_unit || (s === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (s === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || s + "/h";
    case "visibility":
      return h.visibility_unit || s;
    default:
      return h.temperature_unit || ((L = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : L.temperature) || "";
  }
}
function Hs(o, n, i, s) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [h, ...b] = o.formatEntityAttributeValueToParts(n, i, s).map((g) => g.value);
      return { number: h, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: te(s, o.locale), unit: Mn(o, n, i) };
}
function eu(o, n, i, s) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, s);
  } catch {
  }
  const h = Hs(o, n, i, s);
  return (h.number + " " + h.unit).trim();
}
function Jo(o, n) {
  var s;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (s = n.attributes) == null ? void 0 : s.unit_of_measurement;
  return g1[n.state] || (i && fe(n.state) ? te(n.state, o.locale) + " " + i : n.state);
}
function xn(o, n) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(n, { type: "entity" });
  } catch {
  }
  return ((i = n.attributes) == null ? void 0 : i.friendly_name) || n.entity_id;
}
const au = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", _s = (o) => ph.find(([, n]) => o <= n)[0];
function j1(o, n) {
  if (n === "Beaufort") return Math.round(o);
  const i = n ? x1[n] : void 0;
  if (i === void 0) return;
  const s = k1.findIndex((h) => o * i < h);
  return s === -1 ? 12 : s;
}
const ou = (o, n) => {
  const i = n ? M1[n] : void 0;
  return i === void 0 ? void 0 : o * i;
}, nu = (o) => Object.keys(o.states || {}).find((n) => {
  var i, s;
  return n.startsWith("sensor.") && ((s = (i = o.entities) == null ? void 0 : i[n]) == null ? void 0 : s.platform) === "moon";
}), vc = (o) => Object.values(o.states || {}).filter((n) => {
  var i, s;
  return n.entity_id.startsWith("sensor.") && ((i = n.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((s = n.attributes) == null ? void 0 : s.state_class) ?? "") && Fr(o, n.entity_id);
}).map((n) => n.entity_id).sort()[0];
function z1(o) {
  var i;
  const n = {};
  for (const [s, h] of Object.entries(((i = o == null ? void 0 : o.core) == null ? void 0 : i.integration) ?? {})) {
    if (h && "integration_type" in h) {
      n[s] = h.categories;
      continue;
    }
    for (const [b, g] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) n[b] = g == null ? void 0 : g.categories;
  }
  return n;
}
const Mh = (o, n, i) => {
  var h, b, g;
  const s = (b = (h = o.entities) == null ? void 0 : h[i]) == null ? void 0 : b.platform;
  return !!s && !!((g = n[s]) != null && g.includes(y1));
};
function G1(o, n) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((s) => {
    var h;
    return s.entity_id.startsWith("sensor.") && Fs.includes(((h = s.attributes) == null ? void 0 : h.device_class) ?? "") && Fr(o, s.entity_id) && Mh(o, n, s.entity_id);
  }).sort((s, h) => s.entity_id.localeCompare(h.entity_id)).forEach((s) => {
    i.has(s.attributes.device_class) || i.set(s.attributes.device_class, s.entity_id);
  }), Fs.map((s) => i.get(s)).filter(Boolean);
}
const $1 = (o, n) => Object.values(o.states || {}).filter((i) => {
  var s, h;
  return i.entity_id.startsWith("sensor.") && Fr(o, i.entity_id) && Mh(o, n, i.entity_id) && (((h = (s = o.entities) == null ? void 0 : s[i.entity_id]) == null ? void 0 : h.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function ru(o, n, i) {
  const s = Math.max(n - o, 1e-6), h = i[i.length - 1], b = i.find((D) => s / D <= 4) ?? h * Math.ceil(s / (4 * h)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const L = [];
  for (let D = g; D <= v + b / 1e3; D += b) L.push(D);
  return { min: g, max: v, ticks: L };
}
const U1 = (o, n, i) => {
  const s = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), h = s(o), b = s(n);
  return "rgb(" + h.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, Y1 = (o, n, i, s) => {
  const h = i * Math.abs(1 - 2 * s), b = s < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + h + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, pa = ({ icon: o, name: n, sub: i, visual: s, double: h, backdrop: b, cls: g, zone: v, callouts: L }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + uh(o) + '</div><div class="wbText"><span class="wbName">' + Mt(n) + "</span>" + (i ? '<span class="wbSub">' + Mt(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (L != null && L.length ? '<div class="wbCallouts">' + L.slice(0, 3).map((D) => Array.isArray(D) ? '<span class="wbCallout"><span>' + Mt(D[0]) + "</span><span>" + Mt(D[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Mt(D) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + s + "</div>") + "</div>", Cs = (o) => '<div class="wbZoneM">' + o + "</div>", Wa = (o, n) => '<div class="wbValue"><span class="wbNum">' + Mt(o) + "</span>" + (n ? '<span class="wbUnitV">' + Mt(n) + "</span>" : "") + "</div>";
function Z1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, s = (v) => v / Ti * 100 + "%", h = (v) => v.map((L) => L.t + "," + i(L.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + s(v.t) + '">' + en(v.rise ? le.sunsetUp : le.sunsetDown) + Mt(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + Mt(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ti + ' 100" preserveAspectRatio="none">' + o.night.map(([v, L]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (L - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Ti + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + h(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + s(v.t + 12) + ";width:" + s(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + s(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + s(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + Mt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + Mt(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + s(v.t) + '">' + Mt(v.label) + "</span>").join("") + "</div></div>", g;
}
function iu(o, n, i = 120, s = 300) {
  const g = o.map((N) => N.value), v = Math.min(...g), L = Math.max(...g), D = L - v || 1, _ = (N) => N / (o.length - 1) * s, T = (N) => 18 + (1 - (N - v) / D) * (i - 18 - 18), O = o.map((N, et) => [_(et), T(N.value)]), M = O.length > 2 ? ih(O) : "M" + O.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), Y = g.indexOf(L), X = g.indexOf(v), W = (N) => N === 0 ? "start" : N === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + s + " " + i + '" aria-hidden="true">' + sh(s, 18, i - 18) + ('<path class="wbArea" d="' + M + "L" + s + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + M + '" vector-effect="non-scaling-stroke"></path><text x="' + _(Y) + '" y="' + (T(L) - 6) + '" text-anchor="' + W(Y) + '">' + Mt(n(L)) + '</text><text x="' + _(X) + '" y="' + (T(v) + 14) + '" text-anchor="' + W(X) + '">' + Mt(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Mt(o[0].label) + '</text><text x="' + s + '" y="' + i + '" text-anchor="end">' + Mt(o[o.length - 1].label) + "</text></svg>";
}
function K1(o, n) {
  const b = o.map((T) => T.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, L = v - g || 1, D = 300 / o.length, _ = (T) => (1 - (T - g) / L) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((T, O) => '<rect class="wbBar' + (T.now ? " wbNowBar" : "") + '" x="' + (O * D + D * 0.2) + '" y="' + _(T.value) + '" width="' + D * 0.6 + '" height="' + (104 - _(T.value)) + '" rx="6"></rect><text x="' + (O * D + D / 2) + '" y="120" text-anchor="middle">' + Mt(T.label) + "</text>").join("") + "</svg>";
}
const X1 = [
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
], J1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], su = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Q1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let tg = 0;
function lu(o, { getHass: n, entityId: i, style: s = "bitmap", motion: h = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: L } = {}) {
  var Yi, In;
  const D = "wb" + ++tg + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = s;
  const T = document.createElement("div");
  T.className = "wbBento", _.appendChild(T), o.replaceChildren(_);
  const O = document.createElement("div");
  O.className = "wb wbPopup", O.dataset.style = s, O.hidden = !0;
  const M = ["aq_tile", "pollen_tile", "radar_tile"], Y = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), X = { current: "wide", hourly: "wide", compared_to_average: "double" }, W = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  Y.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = X[c] || "tile", m.hidden = !0, W.includes(c) && (m.dataset.xl = ""), T.appendChild(m), N[c] = { el: m, html: null };
  });
  let et = !1, nt = null, ut = 0, tt = -1, F = !1, q = null, rt = "";
  const pt = "homecore-next-view", Dt = (() => {
    try {
      return localStorage.getItem(pt);
    } catch {
      return null;
    }
  })(), ct = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Dt === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), Z = /* @__PURE__ */ new Date();
  const it = {}, lt = {}, gt = {}, ot = (c) => {
    var m;
    return ((m = gt[c]) == null ? void 0 : m.forecast) ?? [];
  }, dt = (c, m) => {
    var w;
    return gt[m] ? (w = c.states) == null ? void 0 : w[gt[m].entityId] : void 0;
  };
  function j(c) {
    const m = lt[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete lt[c]), gt[c] && delete gt[c];
  }
  function bt(c, m, w) {
    var H;
    if (typeof ((H = c.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((z) => {
        et || lt[m] !== y || (z != null && z.forecast ? gt[m] = { entityId: w, forecast: z.forecast } : delete gt[m], pn());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (z) {
      y.unsub = Promise.reject(z);
    }
    y.unsub.catch(() => {
      lt[m] === y && delete lt[m];
    }), lt[m] = y;
  }
  function Ct(c, m) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const H = W1(c, m, y);
      ((w = lt[y]) == null ? void 0 : w.entityId) !== (H == null ? void 0 : H.entity_id) && (j(y), H && bt(c, y, H.entity_id));
    }
  }
  const Wt = (c, m, w, y = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: y,
    no_attributes: y,
    significant_changes_only: !1
  });
  async function ne(c, m) {
    var K, Q, U;
    const w = Ie(c, m, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, H = await Wt(c, y, new Date(Date.now() - 3 * se)), z = (U = (Q = (K = H == null ? void 0 : H[y]) == null ? void 0 : K.find((at) => {
      var st;
      return typeof ((st = at.a) == null ? void 0 : st.pressure) == "number";
    })) == null ? void 0 : Q.a) == null ? void 0 : U.pressure;
    S.pressureHistory = typeof z == "number" ? { entityId: y, value: z } : void 0;
  }
  async function la(c, m) {
    var Q;
    const w = Ie(c, m, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, H = Sn(/* @__PURE__ */ new Date()), z = await Wt(c, y, new Date(H.getTime() - s1 * xa)), K = /* @__PURE__ */ new Map();
    for (const U of (z == null ? void 0 : z[y]) ?? []) {
      const at = (Q = U.a) == null ? void 0 : Q.temperature, st = new Date((U.lc ?? U.lu) * 1e3);
      if (typeof at != "number" || st >= H) continue;
      const wt = st.toDateString();
      K.set(wt, Math.max(K.get(wt) ?? -1 / 0, at));
    }
    S.temperatureHistory = { entityId: y, dailyHighs: [...K.values()], days: [...K.entries()].map(([U, at]) => ({ date: new Date(U), high: at })) };
  }
  async function ma(c) {
    const m = vc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function So() {
    const c = n == null ? void 0 : n();
    if (!c || et || typeof c.callWS != "function") return;
    const m = Vt(c);
    S.lastFetch = Date.now(), [ne(c, m), la(c, m), ma(c)].forEach((w) => w.then(() => pn(), () => {
    }));
  }
  async function Ta() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const m = Ie(c, Vt(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, y = Sn(/* @__PURE__ */ new Date());
    try {
      const H = await Wt(c, w, y), z = (K) => ((H == null ? void 0 : H[w]) ?? []).map((Q) => {
        var U;
        return { time: Q.lu * 1e3, value: (U = Q.a) == null ? void 0 : U[K] };
      }).filter((Q) => typeof Q.value == "number");
      S.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: z("temperature"), humidity: z("humidity") }, pn();
    } catch {
    }
  }
  async function sn(c) {
    const m = n == null ? void 0 : n();
    if (m)
      try {
        const w = await Wt(m, c, new Date(Date.now() - 24 * se), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((z) => fe(z.s)), H = Math.max(1, Math.ceil(y.length / 48));
        S.aqHistory = { entityId: c, points: y.filter((z, K) => K % H === 0).map((z) => ({ label: ea(new Date(z.lu * 1e3), m), value: Number(z.s) })) }, pn();
      } catch {
      }
  }
  function Ln(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      S.categories = z1(m);
    }, () => {
      S.categories = {};
    }).then(() => pn()));
  }
  function Vt(c) {
    var w;
    const m = Object.keys(c.states || {}).filter((y) => y.startsWith("weather.") && Fr(c, y)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...m.filter((y) => y !== i)] : m;
  }
  const ge = (c) => S.categories ? { air: G1(c, S.categories), pollen: $1(c, S.categories) } : { air: [], pollen: [] };
  function Qe(c, m, w, y) {
    if (s === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + gc(c, w || c === "clear-night") + "</span>";
    if (s === "smooth") {
      const H = E0(c, m === 90, w, D + "g-" + y);
      return '<span class="wbWx wbS' + m + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + Mt(ju(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const qr = () => ot("daily").filter((c) => c.templow != null).slice(0, Q0);
  function kt(c, m) {
    const w = new Date(m.datetime), y = /* @__PURE__ */ new Date();
    return Pr(w, y) ? vt.today : Pr(w, new Date(y.getTime() + xa)) ? vt.tomorrow : Qp(w, c);
  }
  const Tn = (c, m, w) => w === 0 ? kt(c, m) : Qp(new Date(m.datetime), c);
  function Vr(c, m) {
    var st, wt, Pt, Bt;
    const w = V1(c, m);
    if (!w) return "";
    const y = qr(), H = ct.openDay !== void 0 ? y[ct.openDay] : void 0, z = Ie(c, m, "temperature"), K = y[0], Q = K && Pr(new Date(K.datetime), /* @__PURE__ */ new Date()), U = ((wt = (st = c.config) == null ? void 0 : st.unit_system) == null ? void 0 : wt.temperature) || ((Pt = w.attributes) == null ? void 0 : Pt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Mt(vt.openPage) + '">' : '<div class="wbCurrent">') + Qe(w.state, 90, q1(c), "now") + '<div class="wbTempBlock">' + (z && fe(z.value) ? '<div class="wbTemp"><span class="wbDeg">' + Mt(te(Math.round(Number(z.value)), c.locale)) + '</span><span class="wbUnit">' + Mt(U) + "</span></div>" : "") + '<div class="wbPlace">' + Mt(((Bt = c.config) == null ? void 0 : Bt.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Mt(Jo(c, w)) + "</div>" + (Q && K.templow != null ? '<div class="wbRange">' + Mt(na(vt.range, { high: Me(c, K.temperature), low: Me(c, K.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Se(c) + Ri(c), y.length) {
      const _t = Q && z && fe(z.value) ? Me(c, z.value) : "", Gt = (Rt, ht, Ot) => Rt === 0 && _t ? '<span class="wbAsDay">' + Mt(ht) + '</span><span class="wbAsNow">' + Mt(Ot) + "</span>" : Mt(ht);
      at += '<div class="wbColumns" role="list">' + y.map((Rt, ht) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + ht + '" data-wb-focus="col-' + ht + '"><span class="wbDay">' + Gt(ht, Tn(c, Rt, ht), vt.now) + "</span>" + Qe(Rt.condition ?? "cloudy", 60, !1, "col" + ht) + '<span class="wbTemps"><span class="wbHi">' + Gt(ht, Me(c, Rt.temperature), _t) + '</span><span class="wbLo">' + Mt(Me(c, Rt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + y.map((Rt, ht) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + ht + '" data-wb-focus="half-' + ht + '">' + Qe(Rt.condition ?? "cloudy", 40, !1, "half" + ht) + '<span class="wbText"><span class="wbName">' + Mt(kt(c, Rt)) + '</span><span class="wbSub">' + Mt(na(vt.highLow, { high: Me(c, Rt.temperature), low: Me(c, Rt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (H ? _o(c, m, H) : "") + "</div>";
  }
  const Pi = {
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
  }, rr = {
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
  function Dn(c) {
    const m = Date.now(), w = ot("hourly").filter((wt) => new Date(wt.datetime).getTime() > m - se).slice(0, 13);
    if (w.length < 2) return "";
    const y = (wt) => ea(new Date(wt.datetime), c), H = (wt) => Pi[wt.condition] || "", z = (wt) => rr[wt.condition] || wt.condition;
    let K = H(w[0]);
    if (!K) return "";
    let Q = w[0], U = 0;
    for (const wt of w.slice(1))
      U === 2 || z(wt) === z(Q) || !H(wt) || (K += (U ? " and " : ", ") + H(wt) + " from " + y(wt), Q = wt, U++);
    const at = Number(w[0].temperature), st = w.filter((wt) => fe(wt.temperature));
    if (fe(at) && st.length) {
      const wt = st.reduce((Bt, _t) => Number(_t.temperature) < Number(Bt.temperature) ? _t : Bt), Pt = st.reduce((Bt, _t) => Number(_t.temperature) > Number(Bt.temperature) ? _t : Bt);
      at - Number(wt.temperature) >= 3 ? K += ", down to " + Me(c, wt.temperature) + " by " + y(wt) : Number(Pt.temperature) - at >= 3 && (K += ", up to " + Me(c, Pt.temperature) + " by " + y(Pt));
    }
    return K[0].toUpperCase() + K.slice(1) + ".";
  }
  const Se = (c) => {
    const m = Dn(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + Mt(m) + "</p></div>" : "";
  };
  function Ri(c) {
    const [m, w] = ks[v == null ? void 0 : v()] || ks.day, y = Date.now(), H = ot("hourly").filter((z) => {
      const K = new Date(z.datetime), Q = K.getHours();
      return K.getTime() > y - se / 2 && Q >= m && Q < w && fe(z.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((z, K) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Mt(ea(new Date(z.datetime), c)) + "</span>" + Qe(z.condition ?? "cloudy", 40, z.is_daytime === !1, "hr" + K) + '<span class="wbHourTemp">' + Mt(Me(c, z.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Da(c) {
    const m = c.getTime(), w = Date.now() - se;
    return ot("hourly").filter((y) => {
      const H = new Date(y.datetime).getTime();
      return H >= m && H < m + xa && H > w;
    });
  }
  function Xt(c) {
    if (!c.length) return ["temperature"];
    const m = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && m.push("precipitation"), c.some((w) => w.humidity != null) && m.push("humidity"), m;
  }
  function _o(c, m, w) {
    const y = Sn(new Date(w.datetime)), H = Da(y), z = Xt(H), K = z.includes(ct.dayMode) ? ct.dayMode : "temperature", Q = (U) => U === "humidity" ? vt.humidity : vt.modes[U];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Qe(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Mt(kt(c, w)) + '</span><span class="wbSub">' + Mt(na(vt.highLow, { high: Me(c, w.temperature), low: Me(c, w.templow) })) + '</span></div><button class="wbBack" title="' + Mt(vt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + en(le.back) + "</button></div>" + (z.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + z.map((U) => '<button aria-pressed="' + (U === K) + '" data-wb="day-mode" data-mode="' + U + '" data-wb-focus="day-mode-' + U + '">' + Mt(Q(U)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Z1(Wr(c, m, y, H, K)) + "</div></div>";
  }
  function Wr(c, m, w, y, H) {
    var No;
    const z = w.getTime(), K = Date.now(), Q = Pr(w, /* @__PURE__ */ new Date()), U = (ee) => (ee - z) / $e, at = (ee) => ea(new Date(ee), c), st = (ee) => new Date(ee.datetime).getTime(), wt = [0, 3, 6, 9, 12, 15, 18, 21].map((ee) => ({ t: ee * 60, label: at(z + ee * se), minor: ee % 6 !== 0 })), { rise: Pt, set: Bt } = Rr(c, w), _t = [], Gt = [];
    Pt && (_t.push({ t: U(Pt.getTime()), label: at(Pt.getTime()), rise: !0 }), Gt.push([0, U(Pt.getTime())])), Bt && (_t.push({ t: U(Bt.getTime()), label: at(Bt.getTime()), rise: !1 }), Gt.push([U(Bt.getTime()), Ti]));
    const Rt = Ir(c);
    !Pt && !Bt && Rt && Vs(new Date(z + xa / 2), Rt.lat, Rt.lon) < 0 && Gt.push([0, Ti]);
    const ht = Q ? U(K) : void 0, Ot = { hours: wt, sun: _t, night: Gt };
    if (!y.length && !Q) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: vt.noHourly };
    if (H === "precipitation") {
      const ee = y.some((oa) => oa.precipitation_probability != null), Oo = y.map((oa) => ({ t: U(st(oa)), v: Number((ee ? oa.precipitation_probability : oa.precipitation) ?? 0) })), fo = Mn(c, dt(c, "hourly"), "precipitation"), Io = Math.max(0, ...Oo.map((oa) => oa.v)), si = ee ? 100 : ru(0, Math.max(Io, 1), [0.5, 1, 2, 5, 10]).max, Zi = (oa) => ee ? te(oa, c.locale) + "%" : te(oa, c.locale, { maximumFractionDigits: 1 }) + " " + fo, vr = Oo.find((oa) => oa.v === Io);
      return {
        ...Ot,
        kind: "bars",
        points: Oo,
        min: 0,
        max: si,
        ticks: [0, si / 2, si],
        format: Zi,
        now: ht !== void 0 ? { t: ht, v: 0 } : void 0,
        peak: vr && Io > 0 ? { t: vr.t + 30, v: vr.v, label: Zi(vr.v) } : void 0,
        note: Io > 0 ? void 0 : vt.noRain
      };
    }
    const qt = H === "humidity" ? "humidity" : "temperature", ve = y.filter((ee) => ee[qt] != null && (!Q || st(ee) >= K)).map((ee) => ({ t: U(st(ee)), v: Number(ee[qt]) }));
    let Et, re = [];
    if (ht !== void 0) {
      const ee = Ie(c, m, qt);
      ee && fe(ee.value) && (Et = { t: ht, v: Number(ee.value) }, ve.unshift(Et)), re = (((No = S.todayHistory) == null ? void 0 : No.day) === w.toDateString() ? S.todayHistory[qt] : []).filter((fo) => fo.time <= K).map((fo) => ({ t: Math.max(0, U(fo.time)), v: fo.value })), Et && re.length && re.push(Et);
    }
    const $t = [...re, ...ve];
    if (!$t.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: vt.noHourly };
    const Sa = $t.map((ee) => ee.v), ho = ru(Math.min(...Sa), Math.max(...Sa), qt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    qt === "humidity" && (ho.min = Math.max(0, ho.min), ho.max = Math.min(100, ho.max), ho.ticks = ho.ticks.filter((ee) => ee >= 0 && ee <= 100));
    const ii = qt === "humidity" ? (ee) => te(ee, c.locale) + "%" : (ee) => Me(c, ee), wr = qt === "temperature" ? $t.reduce((ee, Oo) => Oo.v > ee.v ? Oo : ee) : void 0;
    return { ...Ot, kind: "line", points: ve, past: re, ...ho, format: ii, now: Et, peak: wr ? { ...wr, label: ii(wr.v) } : void 0 };
  }
  function jt(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function ka(c, m, w = Wp) {
    var z, K;
    const y = ot("daily"), H = [];
    for (let Q = 0; Q < w; Q++) for (const U of [!1, !0]) {
      const at = c.getTime() + (Q * 24 + (U ? 12 : 0)) * se, st = at + 12 * se, wt = {};
      m.forEach((Bt) => {
        const _t = new Date(Bt.datetime).getTime();
        Bt.condition && _t >= at && _t < st && (wt[Bt.condition] = (wt[Bt.condition] ?? 0) + (r1.has(Bt.condition) ? 2 : 1));
      });
      let Pt = (z = Object.entries(wt).sort((Bt, _t) => _t[1] - Bt[1])[0]) == null ? void 0 : z[0];
      if (!Pt) {
        const Bt = new Date(at).toDateString();
        Pt = ((K = y.find((_t) => new Date(_t.datetime).toDateString() === Bt)) == null ? void 0 : K.condition) ?? "cloudy";
      }
      H.push({ cond: U && Pt === "sunny" ? "clear-night" : Pt, night: U });
    }
    return H;
  }
  function Hi(c, m, w) {
    const y = dt(c, "hourly"), H = m.precipitation_probability != null ? te(m.precipitation_probability, c.locale) + "%" : "", z = m.precipitation ? te(m.precipitation, c.locale) + " " + Mn(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return H ? [H, z] : [z || "–", ""];
      case "wind":
        return m.wind_speed != null ? [te(Math.round(m.wind_speed), c.locale), Mn(c, y, "wind_speed")] : ["–", ""];
      default:
        return [Me(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Ni(c, m, w) {
    const [y, H] = ks[v == null ? void 0 : v()] || ks.day, z = [];
    for (let K = 0; K < 4 && z.length < 3; K++) {
      const Q = /* @__PURE__ */ new Date();
      Q.setHours(0, 0, 0, 0), Q.setDate(Q.getDate() + K);
      const U = new Date(Q);
      U.setHours(H, 0, 0, 0), Q.setHours(y, 0, 0, 0), !(U.getTime() <= w || !m.some((at) => {
        const st = new Date(at.datetime).getTime();
        return st >= Q.getTime() && st <= U.getTime();
      })) && z.push({ a: Q.getTime(), b: U.getTime(), label: kt(c, { datetime: Q.toISOString() }) });
    }
    return z;
  }
  function Ea(c, m, w, y, H, z) {
    const K = (w.b - m.a) / se, Q = (ht) => ((ht - m.a) / se).toFixed(3), U = 80, at = 32, st = [];
    for (const ht = new Date(m.a - xa); ht.getTime() < w.b + xa; ht.setDate(ht.getDate() + 1)) {
      const { rise: Ot, set: qt } = Rr(c, new Date(ht));
      Ot && qt && st.push({ rise: Ot.getTime(), set: qt.getTime() });
    }
    const wt = (ht, Ot) => U - (U - at) * Math.sin(Math.PI * (Ot - ht.rise) / (ht.set - ht.rise)), Pt = (ht) => !st.some((Ot) => ht >= Ot.rise && ht <= Ot.set);
    let Bt = "", _t = "", Gt = "";
    st.forEach((ht, Ot) => {
      const qt = [];
      for (let Et = ht.rise; Et <= ht.set; Et += 15 * $e) qt.push(Q(Et) + "," + wt(ht, Et).toFixed(2));
      qt.push(Q(ht.set) + "," + U), Bt += '<polyline class="wbLineArc" points="' + qt.join(" ") + '"/>';
      const ve = st[Ot + 1];
      ve && (Bt += '<rect class="wbLineNight" x="' + Q(ht.set) + '" y="0" width="' + ((ve.rise - ht.set) / se).toFixed(3) + '" height="100"/>'), [[ht.rise, "↑"], [ht.set, "↓"]].forEach(([Et, re]) => {
        Et < m.a || Et > w.b || (_t += '<line class="wbLineEdge" x1="' + Q(Et) + '" x2="' + Q(Et) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + z(Et) + '">' + re + " " + Mt(ea(new Date(Et), c)) + "</span>");
      });
    });
    const Rt = st.find((ht) => H >= ht.rise && H <= ht.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + K + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Bt + _t + '<line class="wbLineHorizon" x1="0" x2="' + K + '" y1="' + U + '" y2="' + U + '"/></svg>' + Gt + (Rt ? '<span class="wbLineNow" style="left:' + z(H) + ";top:" + wt(Rt, H) + '%">' + gc("sunny", !1) + "</span>" : "") + y.filter((ht) => ht.entry && !ht.now).map((ht) => '<span class="wbLineGlyph' + ht.edge + '" style="left:' + z(ht.t) + '">' + gc(ht.entry.condition ?? "cloudy", Pt(ht.t)) + "</span>").join("");
  }
  function De(c, m) {
    delete it.hourly;
    const w = ct.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + Mt(w === "bars" ? vt.nextDays : vt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Mt(vt.showAs) + '">' + ["strip", "bars"].map((Et) => '<button aria-pressed="' + (Et === w) + '" data-wb="hourly-view" data-view="' + Et + '" data-wb-focus="hourly-view-' + Et + '">' + Mt(vt.views[Et]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return En(c, m, y);
    const H = ot("hourly"), z = Math.floor(Date.now() / $e) * $e, K = H.filter((Et) => new Date(Et.datetime).getTime() > z - se);
    if (!K.length) return "";
    const Q = jt(K), U = Q.includes(ct.hourlyMode) ? ct.hourlyMode : "temperature", at = Ni(c, H, z);
    if (!at.length) return "";
    const st = at[0], wt = at[at.length - 1], Pt = (st.b - st.a) / se, Bt = (Et) => "calc(var(--wb-u) * " + ((Et - st.a) / se).toFixed(3) + ")", _t = new Date(st.a);
    _t.setHours(6, 0, 0, 0), _t.getTime() > st.a && _t.setDate(_t.getDate() - 1);
    const Gt = Math.ceil((wt.b - _t.getTime()) / xa);
    s !== "line" && (it.hourly = { segs: ka(_t, H, Gt), seed: _t.getDate(), columns: Gt });
    const Rt = (Et) => Et === st.a ? " wbFirst" : Et === wt.b ? " wbLast" : "", ht = [];
    for (let Et = st.a; Et < wt.b; ) {
      const re = new Date(Et);
      re.setHours(24, 0, 0, 0);
      const $t = Math.min(re.getTime(), wt.b);
      ht.push({ a: Et, b: $t, label: kt(c, { datetime: new Date(Et).toISOString() }), page: at.find((Sa) => Sa.a >= Et && Sa.a < $t) || at.find((Sa) => Sa.a < $t && Sa.b > Et) }), Et = $t;
    }
    const Ot = z > st.a && z < wt.b ? Math.floor((z - st.a) / (2 * se)) * 2 : 0, qt = [];
    for (let Et = st.a; Et <= wt.b; Et += se) {
      const re = new Date(Et), $t = Rt(Et);
      !$t && re.getHours() % e1 || !$t && (Math.abs(st.a - Et) < 2 * se || Math.abs(wt.b - Et) < 2 * se) || z >= st.a && Math.abs(Et - z) < 1.5 * se && !$t || qt.push({ t: Et, edge: $t, label: ea(re, c), entry: Et >= z - se ? H.find((Sa) => new Date(Sa.datetime).getTime() === Et) : void 0 });
    }
    z > st.a && z < st.b && qt.push({ t: z, edge: z - st.a < se ? " wbFirst" : st.b - z < se ? " wbLast" : "", label: vt.now, entry: K[0], now: !0 });
    const ve = (Et, re) => '<span class="wbMark' + Et.edge + (Et.now ? " wbNowMark" : "") + '" style="left:' + Bt(Et.t) + '">' + re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (Q.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Q.map((Et) => '<button aria-pressed="' + (Et === U) + '" data-wb="hourly-mode" data-mode="' + Et + '" data-wb-focus="hourly-mode-' + Et + '">' + Mt(vt.modes[Et]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Mt(vt.nextHours) + '" data-span="' + Pt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Pt + ");width:calc(var(--wb-u) * " + (wt.b - st.a) / se + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((wt.b - st.a) / (2 * se)) + 1)].map((Et, re) => '<i class="wbSnap" style="left:' + Bt(st.a + re * 2 * se) + '"></i>').join("") + '<div class="wbDays">' + ht.map((Et, re) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Et.b - Et.a) / se).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (re === 0 ? Ot : (((($t = Et.page) == null ? void 0 : $t.a) ?? Et.a) - st.a) / se) + '" data-wb-focus="hours-day-' + re + '">' + Mt(Et.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + qt.map((Et) => ve(Et, Mt(Et.label))).join("") + "</div>" + (s === "line" ? '<div class="wbSky wbLineSky">' + Ea(c, st, wt, qt, z, Bt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Bt(_t.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (s === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (z > st.a ? '<i class="wbPast" style="width:' + Bt(Math.min(z, wt.b)) + '"></i><i class="wbNowLine" style="left:' + Bt(z) + '"></i>' : "") + ht.slice(1).map((Et) => '<i class="wbMidnight" style="left:' + Bt(Et.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + qt.map((Et) => {
      if (!Et.entry) return "";
      const [re, $t] = Hi(c, Et.entry, U);
      return ve(Et, '<span class="wbPrimaryV">' + Mt(re) + '</span><span class="wbSecondary">' + Mt($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Oi(c) {
    const m = a1, w = m.findIndex(([U]) => U >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [y, H] = m[w - 1], [z, K] = m[w], Q = (c - y) / (z - y);
    return "rgb(" + H.map((U, at) => Math.round(U + (K[at] - U) * Q)).join(",") + ")";
  }
  function En(c, m, w) {
    var Bt;
    const y = ot("daily").filter((_t) => fe(_t.templow) && fe(_t.temperature)).slice(0, 7);
    if (!y.length) return "";
    const H = Math.min(...y.map((_t) => Number(_t.templow))), z = Math.max(...y.map((_t) => Number(_t.temperature))), K = Math.max(1, z - H), Q = (_t) => Math.max(0, Math.min(100, (_t - H) / K * 100)).toFixed(2), U = /F/.test(Mn(c, dt(c, "daily"), "temperature")), at = (_t) => U ? (_t - 32) / 1.8 : _t, st = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_t) => Oi(at(H + _t * K)) + " " + _t * 100 + "%").join(",") + ")", wt = (Bt = Ie(c, m, "temperature")) == null ? void 0 : Bt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(ot("hourly").filter((_t) => new Date(_t.datetime).getTime() > Date.now() - se)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((_t, Gt) => {
      const Rt = kt(c, _t), ht = Pr(new Date(_t.datetime), /* @__PURE__ */ new Date()), Ot = Number(_t.templow), qt = Number(_t.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Mt(na(vt.rangeRow, { day: Rt, low: Me(c, Ot), high: Me(c, qt) })) + '"><span class="wbRangeDay">' + Mt(Rt) + "</span>" + Qe(_t.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + Mt(Me(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + st + ";clip-path:inset(0 " + (100 - Q(qt)) + "% 0 " + Q(Ot) + '% round 4px)"></i>' + (ht && fe(wt) ? '<i class="wbRangeNow" style="left:' + Q(Number(wt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Mt(Me(c, qt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const jr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], zr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gr = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [y, H] = c[w - 1], [z, K] = c[w];
      return U1(H, K, (m - y) / (z - y));
    }
    return c[c.length - 1][1];
  }, ln = (c, m, w) => {
    if (!m || !w) return jr[5][1];
    const y = (c.getTime() - w.getTime()) / $e;
    return y >= -90 ? Gr(zr, y) : Gr(jr, (c.getTime() - m.getTime()) / $e);
  }, Ws = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function so(c) {
    const m = Ft, { rise: w, set: y } = Rr(c, m), H = w && y ? Math.round((y.getTime() - w.getTime()) / $e) : 0, z = Math.floor(H / 60), K = H % 60, Q = (ve) => ve ? ea(ve, c) : "–", U = new Date(m);
    U.setDate(U.getDate() + 1);
    const at = Rr(c, U), st = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / $e) : 0, wt = new Date(m);
    wt.setDate(wt.getDate() - 1);
    const Pt = !!(w && y && m >= w && m <= y), Bt = !!(w && m < w), _t = Pt ? w : Bt ? Rr(c, wt).set : y, Gt = Pt ? y : Bt ? w : at.rise, Rt = _t && Gt ? Math.min(1, Math.max(0, (m.getTime() - _t.getTime()) / (Gt.getTime() - _t.getTime()))) : 0, ht = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / $e)) : 0, Ot = Gt ? Ws(ht) : "–", qt = Pt ? vt.untilSunset : vt.untilSunrise;
    return pa({
      icon: le.sunny,
      name: vt.sun,
      sub: H ? na(vt.daylightShort, { hours: z, minutes: K }) : void 0,
      cls: "wbSunTile",
      callouts: [[vt.callout.riseTomorrow, Q(at.rise)], [vt.callout.setTomorrow, Q(at.set)], ...st ? [[vt.callout.dayTomorrow, Math.floor(st / 60) + "h " + st % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + ln(m, w, y) + '"><svg class="wbSunTrack" data-up="' + (Pt ? 1 : 0) + '" data-f="' + Rt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Mt(Ot) + '</span><span class="wbSunWord">' + Mt(qt) + '</span></div><span class="wbSunAt wbSunRise">' + Mt(Q(w)) + '</span><span class="wbSunAt wbSunSet">' + Mt(Q(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Cs(Wa(Ot, ""))
    });
  }
  const Ee = 22;
  function ir(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Ee, H = y / 2, z = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < y * 3 || w < y * 3 || c.dataset.drawn === z) return;
    c.dataset.drawn = z;
    const K = "M" + H + " " + (w - y) + "V" + y + "A" + H + " " + H + " 0 0 1 " + y + " " + H + "H" + (m - y) + "A" + H + " " + H + " 0 0 1 " + (m - H) + " " + y + "V" + (w - y), Q = "M" + (m - H) + " " + (w - y) + "A" + H + " " + H + " 0 0 1 " + (m - y) + " " + (w - H) + "H" + y + "A" + H + " " + H + " 0 0 1 " + H + " " + (w - y), U = 16, at = 6, st = "M" + U + " 0H" + (m - U) + "A" + U + " " + U + " 0 0 1 " + m + " " + U + "V" + (w - U) + "A" + U + " " + U + " 0 0 1 " + (m - U) + " " + w + "H" + U + "A" + U + " " + U + " 0 0 1 0 " + (w - U) + "V" + U + "A" + U + " " + U + " 0 0 1 " + U + " 0ZM" + (y + at) + " " + y + "A" + at + " " + at + " 0 0 0 " + y + " " + (y + at) + "V" + (w - y - at) + "A" + at + " " + at + " 0 0 0 " + (y + at) + " " + (w - y) + "H" + (m - y - at) + "A" + at + " " + at + " 0 0 0 " + (m - y) + " " + (w - y - at) + "V" + (y + at) + "A" + at + " " + at + " 0 0 0 " + (m - y - at) + " " + y + "Z", wt = c.dataset.up === "1", Pt = Number(c.dataset.f) || 0, Bt = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const _t = document.createElementNS(Bt, "path");
    _t.setAttribute("d", wt ? K : Q), c.replaceChildren(_t);
    const Gt = _t.getTotalLength(), Rt = _t.getPointAtLength(Gt * Pt), ht = wt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + D + 'sun-day"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + D + 'sun-done"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (wt ? (ht * Pt).toFixed(1) + " " + (ht + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + st + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + st + '" mask="url(#' + D + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + st + '" mask="url(#' + D + 'sun-done)"></path><circle class="wbSunDot' + (wt ? "" : " wbSunNight") + '" cx="' + Rt.x.toFixed(1) + '" cy="' + Rt.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const Co = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => ir(m.target))) : null;
  function $r() {
    Co == null || Co.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      ir(c), Co == null || Co.observe(c);
    });
  }
  function js(c, m, w) {
    const y = (K) => D + "moon-" + K, H = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + Y1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", z = (K, Q, U, at, st, wt) => '<filter id="' + y(K) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Q + '" numOctaves="' + U + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Pt) => "<feFunc" + Pt + ' type="linear" slope="' + st + '" intercept="' + wt + '"></feFunc' + Pt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + z("mottle", "0.045", 4, 3, 1.8, -0.4) + z("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + X1.map(([K, Q, U, at, st, wt]) => '<ellipse cx="' + K + '" cy="' + Q + '" rx="' + U + '" ry="' + at + '" fill-opacity="' + wt + '" transform="rotate(' + st + " " + K + " " + Q + ')"></ellipse>').join("") + "</g>" + J1.map(([K, Q, U]) => '<circle class="wbCrater" cx="' + K + '" cy="' + Q + '" r="' + U + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + Q1.map(([K, Q]) => '<line x1="54.4" y1="95" x2="' + K + '" y2="' + Q + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + su.map(([K, Q, U]) => '<circle cx="' + K + '" cy="' + Q + '" r="' + U * 2 + '"></circle>').join("") + "</g>" + su.map(([K, Q, U]) => '<circle class="wbBrightCenter" cx="' + K + '" cy="' + Q + '" r="' + U + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ii(c) {
    const m = Z, w = Ir(c), y = (w == null ? void 0 : w.lat) ?? 0, H = wc(m), z = nu(c), K = z ? c.states[z] : void 0, Q = or(K) && w1.includes(K.state) ? K.state : F1(H.phase), { rise: U, set: at } = w ? I1(m, w.lat, w.lon) : {}, st = H.phase > 0.5 != y < 0, wt = te(Math.round(H.fraction * 100), c.locale) + "%", Pt = U ?? at;
    return Pt && ea(Pt, c), pa({
      icon: le.night,
      name: vt.moon,
      sub: vt.phases[Q],
      callouts: [...U ? [[vt.callout.moonrise, ea(U, c)]] : [], ...at ? [[vt.callout.moonset, ea(at, c)]] : [], [vt.callout.lit, wt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + js(H.fraction, st, y < 0) + "</div>" + Cs(Wa(te(Math.round(H.fraction * 100), c.locale), "%"))
    });
  }
  function Ut(c, m) {
    var _t;
    const w = Ie(c, m, "wind_speed");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "wind_gust_speed"), H = Ie(c, m, "wind_bearing"), z = H && fe(H.value) ? Number(H.value) : void 0, K = j1(Number(w.value), (_t = w.stateObj.attributes) == null ? void 0 : _t.wind_speed_unit), Q = Hs(c, w.stateObj, "wind_speed", w.value), U = z !== void 0 ? vt.cardinal[b1[((z + 11.25) / 22.5 | 0) % 16]] : void 0, at = y ? eu(c, y.stateObj, "wind_gust_speed", y.value) : void 0, st = [U ? na(vt.windFrom, { direction: U }) : void 0, K !== void 0 ? K + " " + vt.beaufort : void 0].filter(Boolean).join(" · ") || at, wt = (Gt, Rt) => {
      const ht = (Gt - 90) * Math.PI / 180;
      return [100 + Rt * Math.cos(ht), 100 + Rt * Math.sin(ht)];
    }, Pt = Array.from({ length: 36 }, (Gt, Rt) => Rt * 10).map((Gt) => {
      const Rt = Gt % 90 === 0, [ht, Ot] = wt(Gt, 97), [qt, ve] = wt(Gt, Rt ? 83 : 89);
      return '<line class="wbTick' + (Rt ? " wbMajor" : "") + '" x1="' + ht + '" y1="' + Ot + '" x2="' + qt + '" y2="' + ve + '"></line>';
    }).join(""), Bt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Rt]) => {
      const [ht, Ot] = wt(Rt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + ht + '" y="' + Ot + '">' + Mt(vt.cardinal[Gt]) + "</text>";
    }).join("");
    return pa({ icon: le.windy, name: vt.wind, sub: st, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Pt + Bt + (z !== void 0 ? '<path class="wbMarker" transform="rotate(' + z + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Mt(Q.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Mt(Q.unit) + "</text></svg>" });
  }
  const yt = (c, m) => {
    if (c < 3) return vt.advice.fine;
    if (c < 8) return vt.advice.sunblock;
    const w = Date.now(), y = ot("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > w && H.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? na(vt.advice.avoidUntil, { time: ea(new Date(y.datetime), m) }) : vt.advice.avoidToday;
  };
  function be(c, m) {
    const w = Ie(c, m, "uv_index");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), H = vt.uvLevel[au(y)], z = /* @__PURE__ */ new Date();
    z.setHours(23, 59, 59, 999);
    const K = ot("hourly").filter((st) => st.uv_index != null && new Date(st.datetime) > /* @__PURE__ */ new Date() && new Date(st.datetime) <= z).reduce((st, wt) => !st || wt.uv_index > st.uv ? { uv: wt.uv_index, time: new Date(wt.datetime) } : st, void 0), Q = v1[au(y)], U = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + D + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + U.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Q + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Q + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Q + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + U.toFixed(1) + '" fill="url(#' + D + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Mt(te(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + Mt(H) + "</span></div>" + Cs(Wa(te(Math.round(y), c.locale), ""));
    return pa({
      icon: le.sunnyAlert,
      name: vt.metrics.uv_index,
      sub: K && K.uv > y ? na(vt.uvPeak, { level: H, uv_index: te(Math.round(K.uv), c.locale), time: ea(K.time, c) }) : H,
      zone: at,
      cls: "wbUv",
      callouts: [yt(y, c), [vt.callout.now, te(Math.round(y), c.locale) + " · " + H], [vt.callout.peak, K && K.uv > y ? te(Math.round(K.uv), c.locale) + " at " + ea(K.time, c) : vt.callout.now]]
    });
  }
  function zt(c) {
    const m = ot("daily")[0], w = S.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !fe(m.temperature) || !w || w.dailyHighs.length < l1) return "";
    const y = Number(m.temperature), H = w.dailyHighs.reduce((Rt, ht) => Rt + ht, 0) / w.dailyHighs.length, z = Math.round(y - H) || 0, K = z > 0 ? "above" : z < 0 ? "below" : "same", Q = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], U = Q.map((Rt) => Rt.high).concat(H), at = Math.min(...U) - 1, st = Math.max(...U) + 1, wt = (Rt) => (1 - (Rt - at) / (st - at)) * 100, Pt = (Rt) => (Rt + 0.5) / Q.length * 100, Bt = Q.map((Rt, ht) => [Pt(ht), wt(Rt.high)]), _t = Bt.map(([Rt, ht], Ot) => (Ot ? "L" : "M") + Rt.toFixed(2) + " " + ht.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + D + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _t + "L" + Bt[Bt.length - 1][0].toFixed(2) + " 100L" + Bt[0][0].toFixed(2) + ' 100Z" fill="url(#' + D + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + wt(H).toFixed(2) + '" y2="' + wt(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _t + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + wt(H).toFixed(2) + '%">' + Mt(Me(c, H)) + "</span>" + Q.map((Rt, ht) => {
      const Ot = Rt.today ? " wbToday" : "", qt = "left:" + Pt(ht).toFixed(2) + "%;top:" + wt(Rt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + qt + '"></i><span class="wbAvgValue' + Ot + '" style="' + qt + '">' + Mt(Me(c, Rt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Q.map((Rt, ht) => '<span class="wbAvgDay' + (Rt.today ? " wbToday" : "") + '" style="left:' + Pt(ht).toFixed(2) + '%">' + Mt(L1(Rt.date, c)) + "</span>").join("") + "</div></div>";
    return pa({
      icon: le.chartLine,
      name: vt.metrics.compared_to_average,
      double: !0,
      sub: na(vt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (z > 0 ? "+" : "") + Mt(Me(c, z)) + '</div><div class="wbCompareWords">' + Mt(vt.average[K]) + '</div><div class="wbCompareTemps">' + Mt(na(vt.todayVsAverage, { today: Me(c, y), average: Me(c, H) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, m) {
    const w = Ie(c, m, "humidity");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "dew_point"), H = Math.max(0, Math.min(100, Number(w.value)));
    return pa({
      icon: le.waterPercent,
      name: vt.metrics.humidity,
      sub: y && fe(y.value) ? na(vt.dewPoint, { dew_point: Me(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Wa(te(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function $a(c, m) {
    var Rt, ht, Ot;
    const w = Ie(c, m, "pressure");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), H = (Rt = w.stateObj.attributes) == null ? void 0 : Rt.pressure_unit, z = ou(y, H), K = ((ht = S.pressureHistory) == null ? void 0 : ht.entityId) === w.stateObj.entity_id ? ou(S.pressureHistory.value, H) : void 0;
    let Q;
    if (z !== void 0 && K !== void 0) {
      const qt = z - K;
      Q = qt >= Gp ? "rising" : qt <= -Gp ? "falling" : "steady";
    }
    const U = Hs(c, w.stateObj, "pressure", Math.round(y)), at = w.stateObj, st = (qt) => H === "inHg" ? Math.round(qt * 100) / 100 : Math.round(qt), wt = (qt) => eu(c, at, "pressure", st(qt)), Pt = K !== void 0 ? S.pressureHistory.value : void 0, Bt = Pt !== void 0 ? st(y - Pt) : void 0, _t = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((qt) => fe(qt.pressure) && new Date(qt.datetime).getTime() >= Date.now() + 3 * se - 30 * $e) : void 0, Gt = [
      ...Q ? [vt.advice[Q]] : [],
      ...Pt !== void 0 ? [[vt.callout.hoursAgo, wt(Pt)], [vt.callout.change, (Bt > 0 ? "+" : Bt < 0 ? "−" : "") + wt(Math.abs(Bt))]] : [],
      ..._t ? [[vt.callout.inHours, wt(Number(_t.pressure))]] : []
    ];
    return pa({
      icon: le.gauge,
      name: vt.metrics.pressure,
      sub: Q ? vt.pressure[Q] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Wa(U.number) + '<span class="wbTapeUnit">' + Mt(U.unit) + "</span></div>" + (z !== void 0 ? Bn(c, z) : "") + "</div>"
    });
  }
  function Bn(c, m) {
    const H = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (z, K) => H + K).map((z) => {
      const K = 100 - (z - m) * 9;
      if (K < 22 || K > 178) return "";
      const Q = z % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(K - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Q ? 2 : 8) + '" x2="26" y1="' + K + '" y2="' + K + '"></line>' + (Q ? '<text class="wbTapeLabel" x="33" y="' + K + '">' + Mt(te(z, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Mt(vt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Mt(vt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function zs(c) {
    var U, at;
    const m = vc(c), w = m ? c.states[m] : void 0;
    if (!w || ((U = S.rain) == null ? void 0 : U.entityId) !== m || !fe(S.rain.change)) return "";
    const y = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", H = dt(c, "hourly"), z = Date.now() + xa, K = ot("hourly").filter((st) => st.precipitation != null && new Date(st.datetime).getTime() <= z), Q = K.reduce((st, wt) => st + Number(wt.precipitation), 0);
    return pa({
      icon: le.rainy,
      name: vt.metrics.precipitation,
      sub: H && K.length ? na(vt.rainExpected, { amount: te(Q, c.locale, { maximumFractionDigits: 1 }) + " " + Mn(c, H, "precipitation") }) : vt.rainLast24h,
      visual: Wa(te(S.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (K.length > 1 ? K1(K.map((st) => ({ label: "", value: Number(st.precipitation) }))) : "")
    });
  }
  function Ur(c, m) {
    const w = Ie(c, m, "visibility");
    if (!w || !fe(w.value)) return "";
    const y = Hs(c, w.stateObj, "visibility", w.value), H = V0(Number(w.value), Mn(c, w.stateObj, "visibility"));
    return pa({
      icon: le.eyeOutline,
      name: vt.metrics.visibility,
      sub: vt.visibilityLevel[W0(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Mt(Fi(c, H)) + '</div><div class="wbSeaValue">' + Wa(y.number, y.unit) + "</div></div>"
    });
  }
  function Fi(c, m) {
    var z;
    const w = q0((z = c.config) == null ? void 0 : z.country, m);
    if (w) return na(vt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = m / p1 * 60;
    if (y < 60) {
      const K = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (K < 60) return na(vt.walkMinutes, { minutes: te(K, c.locale) });
    }
    const H = Math.max(1, Math.round(y / 30) / 2);
    return H < 8 ? na(vt.walkHours, { hours: te(H, c.locale) }) : vt.walkDay;
  }
  function Gs(c) {
    S.categories === void 0 && Ln(c);
    const m = ge(c), w = (U) => U.map((at) => c.states[at]).filter(or), y = w(m.air), H = w(m.pollen);
    if (!y.length && !H.length) return "";
    const z = [...y, ...H], K = (U) => H.includes(U) ? le.flower : le.airFilter, Q = z.find((U) => U.entity_id === ct.aq);
    return Q ? $s(c, Q, K(Q)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Mt(vt.airQuality) + '</h2></div><div class="wbAqTiles">' + z.map((U) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Mt(U.entity_id) + '"><span class="wbChip">' + en(K(U)) + '</span><span class="wbText"><span class="wbName">' + Mt(xn(c, U)) + '</span><span class="wbSub">' + Mt(Jo(c, U)) + "</span></span></button>").join("") + "</div></div>";
  }
  function $s(c, m, w) {
    var st, wt, Pt;
    const y = ((st = m.attributes) == null ? void 0 : st.unit_of_measurement) ?? "", H = ((wt = m.attributes) == null ? void 0 : wt.device_class) === "pm25" && y === Zp && fe(m.state), z = Number(m.state), K = H ? _s(z) : void 0, Q = ((Pt = S.aqHistory) == null ? void 0 : Pt.entityId) === m.entity_id ? S.aqHistory.points : void 0, U = (Bt) => Math.min(100, Math.max(0, Bt / Ss * 100));
    let at;
    if (Q && Q.length > 1) at = iu(Q, (Bt) => (te(Bt, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (K) {
      let Bt = 0;
      const _t = ph.map(([Gt, Rt]) => {
        const ht = U(Math.min(Rt, Ss)), Ot = Yp[Gt] + " " + Bt + "% " + ht + "%";
        return Bt = ht, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + Mt(vt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ss + '" aria-valuenow="' + z + '" style="background:linear-gradient(to right, ' + _t.join(", ") + ')"><i style="left:' + U(z) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ss + " " + Zp + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + Mt(Jo(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + en(w) + '</span><span class="wbText"><span class="wbName">' + Mt(xn(c, m)) + '</span><span class="wbSub">' + Mt(Jo(c, m)) + (K ? " · " + Mt(vt.aqLevel[K]) : "") + '</span></span><button class="wbBack" title="' + Mt(vt.back) + '" data-wb="aq-close">' + en(le.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const Ao = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, qi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function Lo(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Fs.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && or(w) && Fr(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Fs.map((w) => m.get(w)).filter(Boolean);
  }
  const To = (c) => Object.values(c.states || {}).filter((m) => {
    var w, y;
    return m.entity_id.startsWith("sensor.") && or(m) && Fr(c, m.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : y.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), sr = ["none", "very_low", "low", "moderate", "high", "very_high"], Ua = (c) => fe(c.state) ? Number(c.state) : sr.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), lr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, Vi = (c, m, w) => {
    const y = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? _s(m) : null : null;
    return y === "good" || y === "fair" ? vt.advice.window : y === "moderate" || y === null ? vt.advice.fine : vt.advice.closed;
  }, Us = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], lo = (c) => Us[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], cr = "M43 43q1 8 0 10M77 42q1 8 -1 10", Do = {
    good: [cr, "M34 69Q61 98 86 67"],
    fair: [cr, "M40 74Q61 89 81 72"],
    moderate: [cr, "M41 79Q60 76 80 81"],
    poor: [cr, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Eo = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Do[c][0] + '"></path><path d="' + Do[c][1] + '"></path></svg>';
  function cn(c) {
    const m = Lo(c), w = m[0];
    if (!w) return pa({ icon: le.airFilter, name: vt.airQuality, sub: vt.noAir, visual: Wa("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, H = Number(w.state), z = fe(w.state), K = y === "aqi" && z ? qi(H) : y === "pm25" && z ? Ao[_s(H)] : Jo(c, w), Q = z ? te(Math.round(H), c.locale) : String(w.state), U = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = z && y === "aqi" ? lo(H) : z && y === "pm25" ? _s(H) : null;
    return pa(at ? {
      icon: le.airFilter,
      name: vt.airQuality,
      sub: K,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Yp[at] + '">' + Eo(at) + '<div class="wbAqBig"><span class="wbAqNum">' + Mt(Q) + "</span>" + (U ? '<span class="wbAqUnit">' + Mt(U) + "</span>" : "") + "</div></div>" + Cs(Wa(Q, U)),
      callouts: [Vi(y, H, z), ...m.slice(1, 3).map((st) => [xn(c, st), Jo(c, st)])]
    } : {
      icon: le.airFilter,
      name: vt.airQuality,
      sub: K,
      cls: "wbBase",
      zone: Wa(Q, U),
      callouts: [Vi(y, H, z), ...m.slice(1, 3).map((st) => [xn(c, st), Jo(c, st)])]
    });
  }
  const co = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ys = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, y) => {
      const [H, z] = co[y % 3], K = 10 + y * 7 % 9, Q = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + K + "s;animation-delay:-" + (y * 2.3 % K).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Q.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % Q).toFixed(1) + 's">' + z + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ya(c) {
    const m = To(c).sort((H, z) => Ua(z) - Ua(H));
    if (!m.length) return pa({ icon: le.flower, name: vt.pollen, sub: vt.noPollen, visual: Wa("–", ""), cls: "wbBase" });
    const w = m[0], y = (H) => fe(H.state) ? Jo(c, H) : lr(H.state);
    return pa({
      icon: le.flower,
      name: vt.pollen,
      sub: xn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: Ys(Ua(w)) + Wa(y(w), ""),
      callouts: m.slice(0, 3).map((H) => [xn(c, H), y(H)])
    });
  }
  function Pn(c) {
    var Q;
    const m = Date.now(), w = ot("hourly").filter((U) => {
      const at = new Date(U.datetime).getTime();
      return at > m - se && at < m + 12 * se;
    }), y = w.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), H = y ? na(vt.rainFrom, { time: ea(new Date(Math.max(m, new Date(y.datetime).getTime())), c) }) : w.length ? vt.noRain12 : void 0, z = (L == null ? void 0 : L()) || "rainviewer";
    let K;
    if (z.startsWith("camera:")) {
      const U = c.states[z.slice(7)], at = U && U.state !== "unavailable" && ((Q = U.attributes) == null ? void 0 : Q.entity_picture);
      K = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + Mt(at) + '" data-src="' + Mt(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + Mt(vt.cameraOff) + "</span></div>";
    } else {
      const U = Ir(c);
      K = U ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + U.lat + '" data-lon="' + U.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + Mt(vt.noLocation) + "</span></div>";
    }
    return pa({ icon: le.radar, name: vt.rainRadar, sub: H, cls: "wbBase wbRadarTile", visual: K });
  }
  const Yr = {
    current: Vr,
    hourly: De,
    sun: so,
    moon: Ii,
    wind: Ut,
    uv_index: be,
    compared_to_average: zt,
    humidity: Fe,
    pressure: $a,
    precipitation: zs,
    visibility: Ur,
    air_quality: Gs,
    aq_tile: cn,
    pollen_tile: Ya,
    radar_tile: Pn
  }, Oe = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Bo = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Zr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, dr = () => {
    const c = ct.range, m = Date.now();
    if (c.preset !== "custom") {
      const H = Oe.find(([z]) => z === c.preset)[2];
      return [m - H * xa, m];
    }
    const w = Sn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(m, Sn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + xa);
    return [Math.min(w, y - se), y];
  }, Zs = (c) => {
    const m = ct.range;
    if (m.preset !== "custom") return Oe.find(([H]) => H === m.preset)[1];
    const [w, y] = dr();
    return m.from === m.to ? Bo(c, new Date(w)) : Bo(c, new Date(w)) + " – " + Bo(c, new Date(y - 1));
  }, Kr = () => ct.range.preset === "custom" ? ct.range.from + "_" + ct.range.to : ct.range.preset, Xr = (c, m) => m - c <= 2 * xa, po = (c, m, w, y) => Xr(w, y) ? ea(m, c) : Bo(c, m), pr = (c, m = 60) => {
    const w = Math.max(1, Math.ceil(c.length / m));
    return c.filter((y, H) => H % w === 0 || H === c.length - 1);
  }, Jr = (c, m, w, y, H = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(y).toISOString(),
    entity_ids: [m],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), dn = (c) => async (m, w, y, H) => {
    const z = Ie(m, w, c);
    if (!z) return [];
    const K = z.stateObj.entity_id, Q = await Jr(m, K, y, H);
    return pr(((Q == null ? void 0 : Q[K]) ?? []).map((U) => {
      var wt;
      const at = ((wt = U.a) == null ? void 0 : wt[c]) ?? (fe(U.s) ? Number(U.s) : void 0), st = (U.lu ?? U.lc) * 1e3;
      return typeof at == "number" && st >= y && st <= H ? { t: new Date(st), value: at } : null;
    }).filter(Boolean)).map((U) => ({ label: po(m, U.t, y, H), value: U.value }));
  }, Wi = (c, m) => async (w, y, H, z) => {
    const K = c(w);
    if (!K) return [];
    const Q = K.entity_id, U = await Jr(w, Q, H, z, !0);
    return pr(((U == null ? void 0 : U[Q]) ?? []).map((at) => {
      const st = m(at.s), wt = at.lu * 1e3;
      return st == null || !Number.isFinite(st) || wt < H || wt > z ? null : { t: new Date(wt), value: st };
    }).filter(Boolean)).map((at) => ({ label: po(w, at.t, H, z), value: at.value }));
  }, ji = (c, m) => async (w, y, H, z) => {
    const K = Ir(w);
    if (!K) return [];
    const Q = [];
    if (Xr(H, z)) for (let U = H; U <= z; U += se / 2) Q.push({ label: ea(new Date(U), w), value: c(new Date(U), K) });
    else for (let U = z; U >= H; U -= xa) {
      const at = new Date(U), st = m(at, K, w);
      st != null && Q.unshift({ label: Bo(w, at), value: st });
    }
    return pr(Q);
  }, Po = (c) => To(c).sort((m, w) => Ua(w) - Ua(m))[0], Ro = (c, m, w) => {
    const y = Ie(c, m, w);
    return y ? Mn(c, y.stateObj, w) : "";
  }, ur = {
    current: { name: () => vt.modes.temperature, icon: () => le.sunny, load: dn("temperature"), fmt: (c, m, w) => Me(c, w), now: (c, m) => {
      var w;
      return Me(c, (w = Ie(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => vt.sun,
      icon: () => le.sunny,
      load: ji((c, m) => Math.round(Vs(c, m.lat, m.lon) / ha), (c, m, w) => {
        const y = Rr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / se * 10) / 10 : null;
      }),
      fmt: (c, m, w, y) => y ? te(w, c.locale) + "°" : te(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => vt.moon,
      icon: () => le.night,
      load: ji((c) => Math.round(wc(c).fraction * 100), (c) => Math.round(wc(c).fraction * 100)),
      fmt: (c, m, w) => te(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => vt.metrics.uv_index, icon: () => le.sunnyAlert, load: dn("uv_index"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = Ie(c, m, "uv_index");
      return w ? te(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => vt.metrics.humidity, icon: () => le.waterPercent, load: dn("humidity"), fmt: (c, m, w) => te(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = Ie(c, m, "humidity");
      return w ? te(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => vt.metrics.pressure, icon: () => le.gauge, load: dn("pressure"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ro(c, m, "pressure"), now: (c, m) => {
      const w = Ie(c, m, "pressure");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, m, "pressure") : "";
    } },
    wind: { name: () => vt.wind, icon: () => le.windy, load: dn("wind_speed"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ro(c, m, "wind_speed"), now: (c, m) => {
      const w = Ie(c, m, "wind_speed");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => vt.metrics.visibility, icon: () => le.eyeOutline, load: dn("visibility"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale) + " " + Ro(c, m, "visibility"), now: (c, m) => {
      const w = Ie(c, m, "visibility");
      return w ? te(Number(w.value), c.locale) + " " + Ro(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => Lo(c)[0] ? xn(c, Lo(c)[0]) : vt.airQuality,
      icon: () => le.airFilter,
      load: Wi((c) => Lo(c)[0], (c) => fe(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var z, K;
        const y = Lo(c)[0], H = (z = y == null ? void 0 : y.attributes) == null ? void 0 : z.device_class;
        return te(Math.round(w * 10) / 10, c.locale) + (H === "aqi" ? " AQI" : (K = y == null ? void 0 : y.attributes) != null && K.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = Lo(c)[0];
        return m ? Jo(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Po(c) ? xn(c, Po(c)) : vt.pollen,
      icon: () => le.flower,
      load: Wi(Po, (c) => {
        const m = Ua({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => lr(sr[Math.round(w)] || ""),
      now: (c) => {
        const m = Po(c);
        return m ? lr(m.state) : "";
      }
    }
  }, Ho = {};
  let we = null;
  async function Ba(c) {
    const m = n == null ? void 0 : n();
    if (!m || !ur[c]) return;
    const w = c + "|" + Kr(), [y, H] = dr();
    if (Ho[w] && Date.now() - Ho[w].at < 5 * $e) return;
    Ho[w] = { at: Date.now(), points: null };
    try {
      Ho[w].points = await ur[c].load(m, Vt(m), y, H);
    } catch {
      Ho[w].points = [];
    }
    qe(!0), we === c && ct.graph === c && (we = null, Vp(O.querySelector(".wbGraphCard")));
    const z = ct.graph === c && O.querySelector(".wbGraph .wbChart");
    z && lh(z, z.querySelector(".wbLine"), z.querySelectorAll(".wbArea"));
  }
  function Ht(c, m) {
    const w = ct.range, y = Zr(Date.now()), [H, z] = dr(), K = w.pickFrom || Zr(H), Q = w.pickTo || Zr(z - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oe.map(([U, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === U) + '" data-wb="graph-preset" data-range="' + U + '" data-wb-focus="graph-preset-' + U + '">' + Mt(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + K + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + Q + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function hr(c, m, w) {
    var wt;
    const y = ur[w], [H, z] = dr(), K = Xr(H, z), Q = (wt = Ho[w + "|" + Kr()]) == null ? void 0 : wt.points, U = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), st = Q ? Q.length > 1 ? iu(Q, (Pt) => y.fmt(c, m, Pt, K), 220, U) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + Mt(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + uh(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + Mt(y.name(c)) + '</span><span class="wbSub">' + Mt(y.sub ? y.sub(K) : y.now ? y.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + en(le.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!ct.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + en(le.calendar) + "<span>" + Mt(Zs(c)) + "</span>" + en(le.chevronDown) + '</button><div class="wbGraph">' + st + "</div></div>" + (ct.picking ? Ht() : "") + "</div>";
  }
  function qe(c) {
    var Pt, Bt, _t, Gt, Rt;
    const m = n == null ? void 0 : n();
    if (!m || et) return;
    const w = Vt(m);
    Ct(m, w), S.lastFetch || So();
    const y = ge(m), H = nu(m), z = vc(m), K = [
      ...w.map((ht) => m.states[ht]),
      m.states["sun.sun"],
      H && m.states[H],
      z && m.states[z],
      ...y.air.map((ht) => m.states[ht]),
      ...y.pollen.map((ht) => m.states[ht]),
      ...Y.some((ht) => M.includes(ht)) ? [...Lo(m), ...To(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / $e)
    ];
    if (!c && nt && K.length === nt.length && K.every((ht, Ot) => ht === nt[Ot])) return;
    nt = K;
    const Q = _.getRootNode(), U = Q.activeElement || document.activeElement;
    for (const ht of Y) {
      const Ot = N[ht];
      let qt = "";
      try {
        qt = Yr[ht](m, w) || "";
      } catch {
        qt = "";
      }
      if (qt === Ot.html) continue;
      const ve = U && Ot.el.contains(U) ? (Pt = U.dataset) == null ? void 0 : Pt.wbFocus : void 0, Et = Ot.el.querySelector(".wbStripScroll"), re = Et ? Et.scrollLeft : null;
      Ot.html = qt, Ot.el.hidden = !qt, Ot.el.innerHTML = qt;
      const $t = Ot.el.querySelector(".wbStripScroll");
      $t && re != null ? $t.scrollTo({ left: re }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), ve && !q && ((Bt = Ot.el.querySelector('[data-wb-focus="' + ve + '"]')) == null || Bt.focus());
    }
    let at = "";
    if (ct.graph)
      try {
        at = hr(m, w, ct.graph) || "";
      } catch {
        at = "";
      }
    if (at !== rt) {
      const ht = U && O.contains(U) ? (_t = U.dataset) == null ? void 0 : _t.wbFocus : void 0;
      rt = at, O.innerHTML = at, O.hidden = !at, at && !O.isConnected && (_.closest("#app") || _).appendChild(O), ht && !q && ((Gt = O.querySelector('[data-wb-focus="' + ht + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    $r(), _.querySelectorAll(".wbRadarMap").forEach((ht) => {
      ht._tiles || aa(ht);
    }), q && ((Rt = _.querySelector('[data-wb-focus="' + q + '"]') || O.querySelector('[data-wb-focus="' + q + '"]')) == null || Rt.focus({ preventScroll: !0 }), q = null);
    let st = !1, wt = !1;
    for (const ht of Y) {
      const Ot = N[ht], qt = !Ot.el.hidden, ve = X[ht] === "wide" || W.includes(ht), Et = Y.indexOf(ht) >= Y.indexOf("moon"), re = qt && (Et && ve && !st || !ve && !wt);
      re && ve && (st = !0), re && !ve && (wt = !0), Ot.el.toggleAttribute("data-break", re);
    }
    Hn(performance.now());
  }
  function pn() {
    F || et || (F = !0, queueMicrotask(() => {
      F = !1, qe(!0);
    }));
  }
  function un() {
    const c = getComputedStyle(_), m = (K) => c.getPropertyValue(K).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([K, Q]) => {
      m(Q) && (w[K] = m(Q));
    });
    const y = m("--color-text-primary") || "#f1f1f1", H = m("--color-bg-card") || "#222222", z = !!_.closest(".light");
    return { colors: { ...Ga, ...w }, ink: z ? y : H, paper: z ? H : y };
  }
  const Qr = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Rn = () => h && !_1();
  function zi(c, m) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((w) => fr(w, it[w.dataset.wbStrip], c, m));
  }
  function fr(c, m, w, y) {
    if (!m || !c.getClientRects().length) return;
    const H = c.clientWidth, z = c.clientHeight;
    if (!H || !z) return;
    const K = { width: H, height: z, columns: m.columns || Wp, colors: y.colors, clock: w, ambient: Rn(), seed: m.seed, soft: 1.5 };
    if (s === "smooth") {
      const Q = Math.min(2, window.devicePixelRatio || 1), U = Math.round(H * Q), at = Math.round(z * Q);
      c.width !== U && (c.width = U), c.height !== at && (c.height = at);
      const st = c.getContext("2d");
      if (!st) return;
      st.setTransform(Q, 0, 0, Q, 0, 0), k0(st, m.segs, K);
    } else Qr(c, x0(m.segs, { ...K, px: 2, oneBit: s === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Hn(c) {
    if (et) return;
    const m = un();
    if (s !== "smooth") {
      const w = Rn();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Qr(y, r0(Qm(y.dataset.wbWx, m.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: s === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, H = w.clientHeight, z = Number(w.dataset.wbSea), K = y + "x" + H + ":" + z + ":" + m.colors.skyClearDay;
      !y || !H || !(z > 0) || w.dataset.painted === K || (w.dataset.painted = K, Qr(w, O0(y, H, z, m.colors)));
    }), zi(c, m);
  }
  function uo(c) {
    if (ut = 0, !(et || !Rn())) {
      if (!document.hidden)
        if (s === "smooth") zi(c, un());
        else {
          const m = Math.floor(c / 100);
          m !== tt && (tt = m, Hn(c));
        }
      ut = requestAnimationFrame(uo);
    }
  }
  function mr() {
    _.classList.toggle("wbMotion", Rn()), !ut && !et && Rn() && (ut = requestAnimationFrame(uo));
  }
  function Nn(c) {
    var w, y, H, z, K, Q, U;
    if (c.target === O) {
      ct.graph = void 0, ct.picking = !1, qe(!0);
      return;
    }
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!m || !(_.contains(m) || O.contains(m))) {
      const at = (z = (H = c.target).closest) == null ? void 0 : z.call(H, ".wbItem"), st = at == null ? void 0 : at.dataset.card;
      if (!at || !_.contains(at) || !ur[st] || ct.graph === st || _.closest(".tfEditing") || st === "current" && g) return;
      ct.graph = st, ct.picking = !1, q = "graph-close", qe(!0), (K = Ho[st + "|" + Kr()]) != null && K.points ? Vp(O.querySelector(".wbGraphCard")) : we = st, Ba(st);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        ct.openDay = Number(m.dataset.index), ct.opener = m.dataset.wbFocus, q = "back-day";
        const at = qr()[ct.openDay], st = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > t1;
        at && Pr(new Date(at.datetime), /* @__PURE__ */ new Date()) && st && Ta();
        break;
      }
      case "close-day":
        ct.openDay = void 0, q = ct.opener, ct.opener = void 0;
        break;
      case "open-page":
        g == null || g();
        return;
      case "day-mode":
        ct.dayMode = m.dataset.mode;
        break;
      case "hourly-mode":
        ct.hourlyMode = m.dataset.mode;
        break;
      case "hourly-view":
        ct.hourlyView = m.dataset.view;
        try {
          localStorage.setItem(pt, ct.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = _.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(m.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        ct.aq = m.dataset.entity, sn(ct.aq);
        break;
      case "aq-close":
        ct.aq = void 0;
        break;
      case "graph-close":
        ct.graph = void 0, ct.picking = !1;
        break;
      case "graph-pick":
        ct.picking = !ct.picking, q = ct.picking ? "graph-preset-" + (ct.range.preset === "custom" ? "day" : ct.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        ct.range = { preset: m.dataset.range }, ct.picking = !1, q = "graph-pick", qe(!0), Ba(ct.graph);
        return;
      case "graph-apply": {
        let at = ct.range.pickFrom || ((Q = _.querySelector("[data-range-from]")) == null ? void 0 : Q.value), st = ct.range.pickTo || ((U = _.querySelector("[data-range-to]")) == null ? void 0 : U.value);
        if (!at || !st) return;
        at > st && ([at, st] = [st, at]), ct.range = { preset: "custom", from: at, to: st }, ct.picking = !1, q = "graph-pick", qe(!0), Ba(ct.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ga(c) {
    var m, w, y, H, z, K;
    c.key === "Escape" && ct.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (ct.openDay = void 0, q = ct.opener, ct.opener = void 0, qe(!0)) : c.key === "Escape" && ct.picking && ((H = (y = c.target).closest) != null && H.call(y, ".wbGraphCard")) ? (ct.picking = !1, q = "graph-pick", qe(!0)) : c.key === "Escape" && ct.graph && ((K = (z = c.target).closest) != null && K.call(z, ".wbGraphCard")) && (ct.graph = void 0, qe(!0));
  }
  let Ye = null;
  function ti(c) {
    var w, y;
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbStripScroll");
    !m || c.button !== 0 || (Ye = { startX: c.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", ei), window.addEventListener("mouseup", ai, { once: !0 }));
  }
  function ei(c) {
    const m = _.querySelector(".wbStripScroll");
    if (!Ye || !m) return;
    const w = c.pageX - Ye.startX;
    !Ye.moved && Math.abs(w) > 1 && (Ye.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = Ye.left - w;
  }
  function ai() {
    Ye = null, window.removeEventListener("mousemove", ei);
    const c = _.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const m = [...c.querySelectorAll(".wbSnap")];
    if (m.length) {
      const w = m.reduce((y, H) => Math.abs(H.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? H : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const gr = (c) => {
    var w, y;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? ct.range.pickFrom = m.value : (y = m.matches) != null && y.call(m, "[data-range-to]") && (ct.range.pickTo = m.value);
  };
  _.addEventListener("change", gr), _.addEventListener("click", Nn), _.addEventListener("keydown", ga), O.addEventListener("change", gr), O.addEventListener("click", Nn), O.addEventListener("keydown", ga), _.addEventListener("mousedown", ti);
  const Gi = 64, Ks = 30;
  let Ma = null, Za = 0;
  const hn = () => {
    Za = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (Ma) {
        const y = c.parentElement.getBoundingClientRect(), H = y.left + y.width / 2 - Ma.x, z = y.top + y.height / 2 - Ma.y, K = Math.hypot(H, z) || 1;
        if (K < Gi) {
          const Q = (1 - K / Gi) * Ks;
          m = H / K * Q, w = z / K * Q;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), Ma && (Za = requestAnimationFrame(hn));
  }, Ka = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || Ze != null && Ze.matches) {
      Ma && (Ma = null, Za || (Za = requestAnimationFrame(hn)));
      return;
    }
    Ma = { x: c.clientX, y: c.clientY }, Za || (Za = requestAnimationFrame(hn));
  }, $i = () => {
    Ma = null, Za || (Za = requestAnimationFrame(hn));
  };
  _.addEventListener("pointermove", Ka), _.addEventListener("pointerleave", $i);
  const Xa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Hn(performance.now())) : null;
  Xa == null || Xa.observe(_);
  const fn = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && aa(w);
  })) : null;
  function aa(c) {
    var K;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || et) return;
    const y = m1(Number(c.dataset.lat), Number(c.dataset.lon), m, w), H = !!((K = _.closest("#app")) != null && K.classList.contains("light")), z = (Q) => ' style="left:' + Q.left + "px;top:" + Q.top + 'px"';
    c._tiles = y, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((Q) => '<img src="https://' + "abcd"[(Q.x + Q.y) % 4] + ".basemaps.cartocdn.com/" + (H ? "light_all" : "dark_all") + "/" + Oc + "/" + Q.x + "/" + Q.y + '.png"' + z(Q) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', fn == null || fn.observe(c), f1().then((Q) => {
      !c.isConnected || et || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = Q.frames.map((U, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + y.map((st) => '<img src="' + Q.host + U.path + "/" + Qo + "/" + Oc + "/" + st.x + "/" + st.y + '/2/1_1.png"' + z(st) + ' alt="">').join("") + "</div>").join(""), c._frames = Q.frames, c._hold = 0, On(c, Q.frames.findLastIndex((U) => U.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = vt.radarOff);
    });
  }
  function On(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((H) => {
      H.hidden = Number(H.dataset.i) !== m;
    });
    const y = w[m];
    c.querySelector(".wbRadarTime").textContent = ea(new Date(y.time * 1e3), n == null ? void 0 : n()) + (y.past ? "" : " · " + vt.forecastTag);
  }
  function oi() {
    _.querySelectorAll(".wbRadarMap").forEach((c) => {
      if (!c._frames) return;
      if (Date.now() - c._built > dh) {
        aa(c);
        return;
      }
      if (Ze != null && Ze.matches) return;
      if (c._hold > 0) {
        c._hold -= $p;
        return;
      }
      const m = c._frames.length - 1, w = c._frames.findLastIndex((H) => H.past), y = c._i >= m ? 0 : c._i + 1;
      On(c, y), (y === w || y === m) && (c._hold = h1);
    });
  }
  const br = () => _.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), mn = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && aa(c);
  })) : null, ni = _.closest("#app");
  ni && (mn == null || mn.observe(ni, { attributes: !0, attributeFilter: ["class"] }));
  const Ze = (Yi = window.matchMedia) == null ? void 0 : Yi.call(window, "(prefers-reduced-motion: reduce)"), Ui = () => {
    mr(), Hn(performance.now());
  };
  (In = Ze == null ? void 0 : Ze.addEventListener) == null || In.call(Ze, "change", Ui);
  const ri = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), qe(!0);
    }, c1),
    setInterval(() => {
      Z = /* @__PURE__ */ new Date(), qe(!0);
    }, d1),
    setInterval(So, i1),
    setInterval(oi, $p),
    setInterval(br, $e)
  ];
  return qe(!0), mr(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(c) {
      !c || c === s || (s = c, _.dataset.style = s, O.dataset.style = s, qe(!0), mr());
    },
    destroy() {
      var c;
      cancelAnimationFrame(Za), _.removeEventListener("pointermove", Ka), _.removeEventListener("pointerleave", $i), et = !0, ri.forEach(clearInterval), ut && cancelAnimationFrame(ut), ut = 0, Xa == null || Xa.disconnect(), fn == null || fn.disconnect(), mn == null || mn.disconnect(), (c = Ze == null ? void 0 : Ze.removeEventListener) == null || c.call(Ze, "change", Ui), ai(), _.removeEventListener("click", Nn), _.removeEventListener("change", gr), _.removeEventListener("keydown", ga), _.removeEventListener("mousedown", ti), O.removeEventListener("click", Nn), O.removeEventListener("change", gr), O.removeEventListener("keydown", ga), ["daily", "hourly"].forEach(j), _.remove(), O.remove();
    }
  };
}
const Bi = "#E1E1E1", cu = "#F7F4F0", yc = "#03a9f4", oe = 14, ie = 172;
let eg = 0;
const _e = (o) => Math.round(o * 100) / 100, ko = (o, n, i) => Math.max(n, Math.min(i, o)), nn = (o, n, i, s, h, b) => '<rect x="' + _e(o) + '" y="' + _e(n) + '" width="' + _e(i) + '" height="' + _e(s) + '" fill="' + h + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", xc = (o) => o.map((n, i) => (i ? "L" : "M") + _e(n[0]) + " " + _e(n[1])).join("");
function kc(o) {
  const n = (o == null ? void 0 : o.attributes) || {};
  return n.device_class === "curtain" ? "curtain" : n.device_class === "blind" || n.current_tilt_position != null ? "venetian" : "blind";
}
const kn = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function ag(o) {
  const n = o < 2 ? o + 24 : o;
  let i = kn[0], s = kn[kn.length - 1];
  for (let v = 0; v < kn.length - 1; v++) if (n >= kn[v][0] && n <= kn[v + 1][0]) {
    i = kn[v], s = kn[v + 1];
    break;
  }
  const h = (n - i[0]) / (s[0] - i[0]), b = h * h * (3 - 2 * h), g = (v, L) => {
    const D = parseInt(v.slice(1), 16), _ = parseInt(L.slice(1), 16);
    return "#" + [16, 8, 0].map((T) => Math.round((D >> T & 255) + ((_ >> T & 255) - (D >> T & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], s[1][0]), bot: g(i[1][1], s[1][1]), warm: g(i[1][2], s[1][2]), cool: g(i[1][3], s[1][3]), op: i[1][4] + (s[1][4] - i[1][4]) * b, t: n };
}
function og(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, s = (n >> 8 & 255) / 255, h = (n & 255) / 255, b = Math.max(i, s, h), g = Math.min(i, s, h);
  let v = 0, L = 0;
  const D = (b + g) / 2;
  if (b !== g) {
    const _ = b - g;
    L = D > 0.5 ? _ / (2 - b - g) : _ / (b + g), v = (b === i ? (s - h) / _ + (s < h ? 6 : 0) : b === s ? (h - i) / _ + 2 : (i - s) / _ + 4) / 6;
  }
  return [v * 360, L * 100, D * 100];
}
function Sh(o, n, i) {
  n = ko(n, 0, 100) / 100, i = ko(i, 0, 100) / 100;
  const s = (g) => (g + o / 30) % 12, h = n * Math.min(i, 1 - i), b = (g) => i - h * Math.max(-1, Math.min(s(g) - 3, Math.min(9 - s(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [_h, Ch, Ah] = og(Bi), du = Sh(_h, Ch, Math.max(6, Ah - 14)), ng = Sh(_h, Ch, Math.min(96, Ah + 16));
function rg(o, n, i, s, h) {
  const b = ie / 2, g = ie * 0.12, v = b - (b - g) * o, L = (Y) => Y ** 1.3, D = ko(i, -1.5, 1.5), _ = (Y) => -(Math.abs(D) * 4.6 * Y ** 1.5) * Math.sign(D), T = o * 1.4, O = (Y, X) => {
    const W = Math.min(4.8, Math.abs(i) * 2.6) * (X ? 1 : -1) * Math.sign(i || 1), N = X ? Y + v : Y, et = X ? Y : Y + v, nt = (pt) => N + _(pt) + W * Math.sin(pt * Math.PI * 1.2 + s) * L(pt) * 1.4 + T * Math.sin(pt * Math.PI * 2 + s * 0.6) * L(pt) * (X ? 1 : -1), ut = [[et, oe]];
    for (let pt = 0; pt <= 12; pt++) ut.push([nt(pt / 12), oe + ie * pt / 12]);
    ut.push([et, oe + ie]);
    let tt = '<path d="' + xc(ut) + 'Z" fill="' + Bi + '"/>';
    if (h) return tt;
    const F = 1.35 + ((X ? i > 0 : i < 0) ? 0.35 : 0), q = (pt) => {
      const Dt = pt / 7, ct = X ? 1 - Dt : Dt, S = (1 - ct) ** 1.3, Ft = Y + v * Dt;
      return Array.from({ length: 13 }, (Z, it) => {
        const lt = it / 12;
        return [Ft + _(lt) * S + W * F * Math.sin(lt * Math.PI * 1.2 + s - ct * 3.2) * L(lt) * 1.4 * S + T * 1.6 * Math.sin(lt * Math.PI * 2 + s * 0.6 - ct * 2.5) * L(lt) * o * (0.4 + 0.6 * S), oe + ie * lt];
      });
    }, rt = [1, 2, 3, 4, 5, 6].map(q);
    for (let pt = 0; pt < 6; pt += 2) tt += '<path d="' + xc(rt[pt]) + xc(rt[pt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, M = b - (b - g) * n;
  return { body: O(oe, !0) + O(oe + ie - v, !1), rails: [{ x: oe + M - 4, y: oe, w: 4, h: ie }, { x: oe + ie - M, y: oe, w: 4, h: ie }], head: 6.4 };
}
function ig(o, n, i) {
  const s = ie * (1 - o);
  let h = "";
  if (s > 1 && (h += nn(oe, oe, ie, s, Bi), !i))
    for (let b = 1; b < 7; b += 2) h += nn(oe + ie * b / 7, oe, ie / 7, s, "#fff");
  return { body: h, rails: [{ x: oe, y: oe + ie * (1 - n) - 7, w: ie, h: 11 }], head: 10.4 };
}
function sg(o, n, i, s) {
  const h = 9 - 7 * (i / 100), b = oe + ie * (1 - o), g = Math.ceil(ie / 10) + 1, v = oe + h / 2, L = (oe + ie - h / 2 - v) / (g - 1), D = 0.8, _ = 0.6, T = Array.from({ length: g }, (Y, X) => Math.max(v + X * _, Math.min(v + X * L, b - h / 2 - (g - 1 - X) * _))), O = T.slice(0, -1).map((Y, X) => ko((T[X + 1] - Y - _) / (L - _), 0, 1));
  O.push(O[g - 2]);
  let M = "";
  return T.forEach((Y, X) => {
    const W = D + (h - D) * O[X], N = Math.max(0.5, W / 2), et = Math.max(0.4, W * 0.114);
    M += nn(oe, Y - N, ie, Math.max(1, W), Bi), !s && W > 2.2 && (M += nn(oe, Y + N - et, ie, et, du) + nn(oe, Y - N, ie, et * 0.55, ng, 0.75));
  }), s || [0.22, 0.78].forEach((Y) => {
    M += nn(oe + ie * Y - 0.7, oe, 1.4, Math.max(0, T[g - 1] + 1 - oe), du, 0.85);
  }), { body: M, rails: [{ x: oe, y: oe + ie * (1 - n) - 8, w: ie, h: 8 }], head: 8.8 };
}
const pu = (o, n, i, s, h, b, g) => o === "curtain" ? rg(n, i, h, b, g) : o === "venetian" ? sg(n, i, s, g) : ig(n, i, g);
function lg(o, n) {
  let i = "", s = "";
  return n.forEach((h) => {
    const b = h.w > h.h, g = ko(b ? oe + ie / 2 : h.x + h.w / 2, 17, 183), v = ko(b ? h.y + h.h / 2 : oe + ie / 2, 17, 183);
    i += b ? nn(oe, ko(h.y + h.h / 2, oe, oe + ie) - 1, ie, 2, yc) : nn(ko(h.x + h.w / 2, oe, oe + ie) - 1, oe, 2, ie, yc);
    const L = b ? "M" + _e(g - 4) + " " + _e(v - 3) + "l4 -3l4 3M" + _e(g - 4) + " " + _e(v + 3) + "l4 3l4 -3" : "M" + _e(g - 3) + " " + _e(v - 4) + "l-3 4l3 4M" + _e(g + 3) + " " + _e(v - 4) + "l3 4l-3 4";
    s += '<circle cx="' + _e(g) + '" cy="' + _e(v) + '" r="11" fill="' + yc + '" filter="url(#' + o + 's)"/><path d="' + L + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: s };
}
function cg(o, n) {
  const i = /* @__PURE__ */ new Date(), s = ag(i.getHours() + i.getMinutes() / 60), h = 42 + 18 * Math.sin(s.t * 0.5), b = s.t >= 5 && s.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (s.t - 5) / 15) : 80, g = pu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? pu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", L = n.grip > 4e-3 ? lg(o, g.rails) : null, D = (_) => nn(oe, oe, ie, ie, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + s.top + '"/><stop offset="1" stop-color="' + s.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + _e(h) + '%" cy="' + _e(b) + '%" r="58%"><stop offset="0" stop-color="' + s.warm + '" stop-opacity="' + _e(s.op * 0.8) + '"/><stop offset="1" stop-color="' + s.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + _e(100 - h * 0.8) + '%" cy="' + _e(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + s.cool + '" stop-opacity="' + _e(s.op * 0.64) + '"/><stop offset="1" stop-color="' + s.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + cu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + D("url(#" + o + "l)") + D("url(#" + o + "w)") + D("url(#" + o + "k)") + (v ? '<g opacity="' + _e(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Bi + '" filter="url(#' + o + 's)"/></g>' + (L ? '<g clip-path="url(#' + o + 'c)" opacity="' + _e(n.grip) + '">' + L.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + cu + '" stroke-width="3"/>' + (L ? '<g opacity="' + _e(n.grip) + '">' + L.knobs + "</g>" : "") + "</svg>";
}
function dg({ onMove: o, onSet: n }) {
  var tt;
  const i = "cv" + ++eg, s = document.createElement("div");
  s.className = "tfCoverArt";
  const h = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, L = !1, D = !1, _ = null, T = 0, O = 0;
  const M = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", Y = () => _ || L || D || b.moving || b.target != null ? 1 : h ? performance.now() < O ? 1 : 0.4 : 0, X = () => {
    s.innerHTML = cg(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function W(F) {
    v = 0;
    const q = g.last ? Math.min(0.064, (F - g.last) / 1e3) : 1 / 60, rt = q * 60;
    g.last = F;
    const pt = b.pos - g.pos, Dt = g.pos;
    g.pos += Math.sign(pt) * Math.min(Math.abs(pt), Math.max(10.5, Math.abs(pt) * 1.4) * q), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Dt) / rt * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Dt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * rt);
    const ct = b.tilt - g.tilt;
    g.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * q);
    const S = Y();
    g.grip += (S - g.grip) * Math.min(1, q * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ft = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ft - g.ghost) * Math.min(1, q * (Ft > g.ghost ? 16 : 3)), Math.abs(Ft - g.ghost) < 4e-3 && (g.ghost = Ft), X(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ft ? v = requestAnimationFrame(W) : g.last = 0;
  }
  const N = () => {
    b && !v && (v = requestAnimationFrame(W));
  }, et = setInterval(() => {
    b && !v && X();
  }, 60 * 1e3), nt = (F) => {
    const q = s.getBoundingClientRect();
    return M() === "x" ? (F.clientX - q.left) / q.width : (F.clientY - q.top) / q.height;
  };
  s.addEventListener("pointerdown", (F) => {
    var pt;
    if (!(b != null && b.canSet) || F.button > 0) return;
    F.preventDefault(), (pt = s.setPointerCapture) == null || pt.call(s, F.pointerId);
    const q = b.target ?? b.pos, rt = s.getBoundingClientRect();
    _ = { p0: nt(F), from: q, x0: F.clientX, value: null, side: null }, b.kind === "curtain" && q > 0 && (_.side = (F.clientX - rt.left) / rt.width < 0.5 ? "L" : "R"), N();
  }), s.addEventListener("pointermove", (F) => {
    if (!_) return;
    let q;
    if (b.kind === "curtain") {
      if (!_.side) {
        const pt = F.clientX - _.x0;
        if (Math.abs(pt) < 4) return;
        _.side = pt < 0 ? "L" : "R";
      }
      const rt = (ie / 2 - ie * 0.12) / 200;
      q = _.from + (_.side === "L" ? -1 : 1) * ((nt(F) - _.p0) / rt) * 100;
    } else q = _.from - (nt(F) - _.p0) / (ie / 200) * 100;
    _.value = ko(q, 0, 100), o(_.value);
  });
  const ut = () => {
    if (!_) return;
    const F = _.value;
    _ = null, F != null && n(Math.round(F)), N();
  };
  return s.addEventListener("pointerup", ut), s.addEventListener("pointercancel", ut), s.addEventListener("lostpointercapture", ut), s.addEventListener("pointerenter", () => {
    L = !0, N();
  }), s.addEventListener("pointerleave", () => {
    L = !1, N();
  }), s.addEventListener("focus", () => {
    D = s.matches(":focus-visible"), N();
  }), s.addEventListener("blur", () => {
    D = !1, N();
  }), s.addEventListener("keydown", (F) => {
    if (!(b != null && b.canSet)) return;
    const q = Math.round(b.target ?? b.pos), rt = F.shiftKey ? 10 : 1, pt = { ArrowUp: q + rt, ArrowRight: q + rt, ArrowDown: q - rt, ArrowLeft: q - rt, PageUp: q + 25, PageDown: q - 25, Home: 0, End: 100 }[F.key];
    if (pt == null) return;
    F.preventDefault();
    const Dt = ko(pt, 0, 100);
    o(Dt), clearTimeout(T), T = setTimeout(() => n(Dt), 500);
  }), {
    el: s,
    update(F) {
      const q = !b;
      b = F, q && (g.pos = b.pos, g.tilt = b.tilt, O = performance.now() + 1500, h && setTimeout(N, 1600)), s.classList.toggle("x", M() === "x"), s.classList.toggle("y", M() === "y"), b.canSet ? (s.tabIndex = 0, s.setAttribute("role", "slider"), s.setAttribute("aria-valuemin", "0"), s.setAttribute("aria-valuemax", "100"), s.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), s.setAttribute("aria-orientation", M() === "x" ? "horizontal" : "vertical")) : s.setAttribute("role", "img"), s.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), s.setAttribute("aria-valuetext", b.text), N();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(et), clearTimeout(T), s.remove();
    }
  };
}
const sa = (o) => Math.round(o * 100) / 100, ze = (o) => o * Math.PI / 180, _n = (o, n, i) => o + (n - o) * i, Mc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function uu(o, n, i, s = 45, h = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(ze(s)), v = Math.sin(ze(s)), L = Math.cos(ze(h)), D = Math.sin(ze(h)), _ = 0.68, T = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: s,
    V: [v * L, g * L, D],
    L: [_ * g + T * v, -_ * v + T * g],
    k: b,
    cy: g,
    sy: v,
    sp: D,
    cp: L,
    p: ([O, M, Y]) => {
      const X = O * g - M * v, W = O * v + M * g;
      return [n + X * b, i + (W * D - Y * L) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(O, M, Y) {
      const X = (O - n) / b, W = ((M - i) / b + Y * L) / D;
      return [X * g + W * v, -X * v + W * g];
    }
  };
}
const rn = (o, n = !0) => "M" + o.map(([i, s]) => `${sa(i)} ${sa(s)}`).join("L") + (n ? "Z" : "");
function no(o, n, i, s = 7) {
  const h = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, L] of b)
    for (let D = 0; D <= s; D++) {
      const _ = ze(L + 90 * D / s);
      h.push([g + i * Math.cos(_), v + i * Math.sin(_)]);
    }
  return h;
}
const Ve = (o, n = 56) => Array.from({ length: n }, (i, s) => [o * Math.cos(2 * Math.PI * s / n), o * Math.sin(2 * Math.PI * s / n)]);
function Ce(o, n, i, s = !0, h = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([L, D]) => h(L, D, n)), ...o.map(([L, D]) => h(L, D, i))], v = [
    { idx: o.map((L, D) => D), smooth: !1 },
    { idx: o.map((L, D) => b + D), smooth: !1 }
  ];
  for (let L = 0; L < b; L++) {
    const D = (L + 1) % b;
    v.push({ idx: [L, D, b + D, b + L], smooth: s });
  }
  return { verts: g, faces: v };
}
const Mo = (o, n) => ({ ...o, verts: o.verts.map(n) }), Di = (o, n, i) => ([s, h, b]) => [s + o, h + n, b + i], Ns = (o, n = 0, i = 0) => {
  const s = Math.cos(ze(o)), h = Math.sin(ze(o));
  return ([b, g, v]) => [n + (b - n) * s - (g - i) * h, i + (b - n) * h + (g - i) * s, v];
}, Ic = (o, n = 0, i = 0) => {
  const s = Math.cos(ze(o)), h = Math.sin(ze(o));
  return ([b, g, v]) => [b, n + (g - n) * s + (v - i) * h, i - (g - n) * h + (v - i) * s];
}, pg = (o, n) => [o[0] - n[0], o[1] - n[1], o[2] - n[2]], hu = (o, n) => o[0] * n[0] + o[1] * n[1] + o[2] * n[2], fu = (o) => o.reduce((n, i) => [n[0] + i[0] / o.length, n[1] + i[1] / o.length, n[2] + i[2] / o.length], [0, 0, 0]);
function ug(o) {
  const n = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const s = o[i], h = o[(i + 1) % o.length];
    n[0] += (s[1] - h[1]) * (s[2] + h[2]), n[1] += (s[2] - h[2]) * (s[0] + h[0]), n[2] += (s[0] - h[0]) * (s[1] + h[1]);
  }
  return n;
}
function Lh(o, n = [1, 1, 1]) {
  const i = fu(o.verts);
  return o.faces.map((s) => {
    const h = s.idx.map((g) => o.verts[g]);
    let b = ug(h);
    return hu(b, pg(fu(h), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), hu(b, n) > 1e-6 * Math.hypot(...b);
  });
}
const ro = (o, n, i) => rn(n.faces[i].idx.map((s) => o.p(n.verts[s])));
function Ae(o, n, i = "", s = "") {
  const h = n.verts.map(o.p), b = Lh(n, o.V);
  let g = "";
  n.faces.forEach((D, _) => {
    b[_] && (g += rn(D.idx.map((T) => h[T])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((D, _) => {
    for (let T = 0; T < D.idx.length; T++) {
      const O = D.idx[T], M = D.idx[(T + 1) % D.idx.length], Y = O < M ? `${O}-${M}` : `${M}-${O}`;
      v.has(Y) || v.set(Y, { a: O, b: M, fs: [] }), v.get(Y).fs.push(_);
    }
  });
  let L = "";
  for (const { a: D, b: _, fs: T } of v.values()) {
    const [O, M] = T, Y = b[O], X = M === void 0 ? !1 : b[M], W = M !== void 0 && n.faces[O].smooth && n.faces[M].smooth;
    (Y !== X || Y && X && !W) && (L += `M${sa(h[D][0])} ${sa(h[D][1])}L${sa(h[_][0])} ${sa(h[_][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${s ? ` class="${s}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${L}"/></g>`;
}
function hg(o) {
  const n = [...o].sort((b, g) => b[0] - g[0] || b[1] - g[1]), i = (b, g, v) => (g[0] - b[0]) * (v[1] - b[1]) - (g[1] - b[1]) * (v[0] - b[0]), s = [], h = [];
  for (const b of n) {
    for (; s.length >= 2 && i(s[s.length - 2], s[s.length - 1], b) <= 0; ) s.pop();
    s.push(b);
  }
  for (const b of n.reverse()) {
    for (; h.length >= 2 && i(h[h.length - 2], h[h.length - 1], b) <= 0; ) h.pop();
    h.push(b);
  }
  return s.slice(0, -1).concat(h.slice(0, -1));
}
let fg = 0;
function Ue(o, n, i, s, h = "") {
  const b = n.verts.filter((L) => L[2] >= i - 0.01).map(([L, D, _]) => o.p([L + (_ - i) * o.L[0], D + (_ - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = rn(hg(b));
  if (!h) return `<path class="shade" fill="url(#${s})" d="${g}"/>`;
  const v = `clip${++fg}`;
  return `<clipPath id="${v}"><path d="${h}"/></clipPath><path class="shade" fill="url(#${s})" clip-path="url(#${v})" d="${g}"/>`;
}
const Cn = (o, n, i = "edge", s = !0) => `<path class="${i}" d="${rn(n.map(o.p), s)}"/>`, fa = (o, n, i, s = "edge") => {
  const [h, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${s}" d="M${sa(h)} ${sa(b)}L${sa(g)} ${sa(v)}"/>`;
};
function nr(o, n, i, s, { part: h = "", cls: b = "", w: g = 0 } = {}) {
  const [v, L] = o.p(n), D = o.k, _ = `matrix(${sa(D * o.cy)} ${sa(D * o.sy * o.sp)} ${sa(-D * o.sy)} ${sa(D * o.cy * o.sp)} ${sa(v)} ${sa(L)})`, T = g ? `<rect x="${-g / 2}" y="${-s * 0.9}" width="${g}" height="${s * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${_}"${h ? ` data-part="${h}"` : ""}>${T}<text class="st ${b}" font-size="${s}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class mg {
  constructor(n, i = 0.24, s = 0.62) {
    this.x = n, this.t = n, this.v = 0, this.k = i, this.d = s;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const gg = "http://www.w3.org/2000/svg", bg = matchMedia("(prefers-reduced-motion: reduce)");
let wg = 0;
class An {
  constructor(n, i = {}) {
    Sp(this, "tick", () => {
      let n = !1;
      for (const i of this.springs) n = i.step() || n;
      this.paint(), this.raf = n ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++wg}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const s = Mc[i.camera] || Mc.iso;
    this.yaw = this.spring(s.yaw, 0.12, 0.7), this.pitch = this.spring(s.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const h = this.svg = document.createElementNS(gg, "svg");
    this.box = [400, 400], h.setAttribute("viewBox", "0 0 400 400"), h.setAttribute("class", "iso"), h.tabIndex = 0, n.prepend(h), h.addEventListener("pointerdown", (g) => {
      var L, D, _, T;
      const v = (_ = (D = (L = g.target).closest) == null ? void 0 : D.call(L, "[data-part]")) == null ? void 0 : _.dataset.part;
      if (v) {
        try {
          h.setPointerCapture(g.pointerId);
        } catch {
        }
        this.held = !0, (T = this.down) == null || T.call(this, v, this.pt(g), g), this.kick();
      }
    }), h.addEventListener("pointermove", (g) => {
      var v;
      this.held && ((v = this.drag) == null || v.call(this, this.pt(g)), this.kick());
    });
    const b = (g) => {
      var v;
      if (this.held) {
        this.held = !1;
        try {
          h.releasePointerCapture(g.pointerId);
        } catch {
        }
        (v = this.up) == null || v.call(this), this.kick();
      }
    };
    h.addEventListener("pointerup", b), h.addEventListener("pointercancel", b), h.addEventListener("keydown", (g) => {
      var v;
      (v = this.key) != null && v.call(this, g, !0) && (g.preventDefault(), this.kick());
    }), h.addEventListener("keyup", (g) => {
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
    const [n, i, s] = this.base, [h, b] = this.box, g = this.fillAmt.x, v = i + (h - 400) / 2, L = s + (b - 400) / 2, D = uu(n, v, L, this.yaw.x, this.pitch.x);
    return g < 1e-3 ? D : uu(n, _n(v, h / 2, g), _n(L, b / 2 + this.lift * D.cp * D.k / 2, g), this.yaw.x, this.pitch.x);
  }
  // the cell it's drawn in (a light's fader is a tall column beside its dial): the short side stays 400 units
  setBox(n, i) {
    if (!(n > 0 && i > 0)) return;
    const s = n >= i ? [Math.round(400 * n / i), 400] : [400, Math.round(400 * i / n)];
    s[0] === this.box[0] && s[1] === this.box[1] || (this.box = s, this.svg.setAttribute("viewBox", "0 0 " + s[0] + " " + s[1]), this.paint());
  }
  setFill(n) {
    this.fillAmt.t = n ? 1 : 0, this.kick();
  }
  // Fill: the plate's width and depth so it fills 352 × 352 of the Space at this camera. Only works while the
  // control faces us (yaw under ~30°); at isometric the corners point at us, so it keeps its drawn size.
  size(n, i) {
    const s = this.fillAmt.x;
    if (s < 1e-3) return [n, i];
    const h = this.v, b = h.cy, g = Math.abs(h.sy), v = b * b - g * g;
    if (v < 0.4) return [n, i];
    const L = (this.box[0] - 48) / h.k, D = ((this.box[1] - 48) / h.k - this.lift * h.cp) / h.sp, _ = Math.max(n * 0.6, (L * b - D * g) / v), T = Math.max(i * 0.6, (D * b - L * g) / v);
    return [_n(n, _, s), _n(i, T, s)];
  }
  setCamera(n) {
    const i = Mc[n];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(n, i, s) {
    const h = new mg(n, i, s);
    return this.springs.push(h), h;
  }
  kick() {
    if (bg.matches) {
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
class vg extends An {
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
    const i = this.v, s = 11 + this.h.x, [h, b] = this.size(68, 68), g = Math.min(h, b) / 68, v = Ce(no(h, b, 18 * g), 0, 8), L = Ce(Ve(25 * g), 8, 11), D = Ce(Ve(18.5 * g), 11, s), _ = Ve(12.5 * g).map(([O, M]) => [O, M, s]), T = Math.max(0, Math.min(1, this.glow.x));
    return Ue(i, v, 0, n) + Ae(i, v) + Ae(i, L, "cap") + Ue(i, D, 11, n, ro(i, L, 1)) + Ae(i, D, "cap") + Cn(i, _) + (T > 0.01 ? `<g style="opacity:${T.toFixed(3)}">${Cn(i, _, "accent")}</g>` : "");
  }
}
class Sc extends An {
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
    const i = this.v, s = this.t.x, h = !!this.opts.bare, [b, g] = h ? this.size(48, 72) : this.size(72, 96), v = h ? b / 48 : b / 72, L = h ? g / 72 : g / 96, D = Math.min(v, L), _ = h ? 0 : 6, T = _ + 3, O = _n(3, 12, s), M = _n(12, 3, s), Y = (O + M) / 2 - 1.4, X = 31 * L, W = Ce(no(b, g, 16 * D), 0, 6), N = Ce(no(48 * v, 72 * L, 9 * D), _, T), et = [[-X, T], [X, T], [X, T + M], [0, T + Y], [-X, T + O]], nt = Ce(et, -20 * v, 20 * v, !1, (q, rt, pt) => [pt, q, rt]), ut = (q) => T + (q < 0 ? _n(O, Y, (q + X) / X) : _n(Y, M, q / X)) + 0.05, tt = Ve(4.2 * D, 36).map(([q, rt]) => [q, rt - X / 2, ut(rt - X / 2)]), F = [[0, X * 0.32], [0, X * 0.68]].map(([q, rt]) => [q, rt, ut(rt)]);
    return (h ? Ue(i, N, 0, n) : Ue(i, W, 0, n) + Ae(i, W)) + Ae(i, N, "paddle") + Ue(i, nt, T, n, ro(i, N, 1)) + Ae(i, nt, "paddle") + // words in place of O and I when it's given them (the light dial's Colour / White rocker, Matt 25 Nov): the
    // pressed half's word is the choice. labels[0] is On, at the front; labels[1] Off, at the back
    (this.opts.labels ? nr(i, [0, X / 2, ut(X / 2)], this.opts.labels[0], (this.opts.textSize || 6) * D, { part: "paddle", cls: this.on ? "sel" : "", w: 40 }) + nr(i, [0, -X / 2, ut(-X / 2)], this.opts.labels[1], (this.opts.textSize || 6) * D, { part: "paddle", cls: this.on ? "" : "sel", w: 40 }) : Cn(i, tt, this.on ? "edge mark" : "accent mark") + fa(i, F[0], F[1], this.on ? "accent mark" : "edge mark"));
  }
}
class yg extends An {
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
    const i = this.v, s = i.p([0, 0, 0]), h = i.p([0, 1, 0]), b = [h[0] - s[0], h[1] - s[1]], g = ((n[0] - this.grab.p[0]) * b[0] + (n[1] - this.grab.p[1]) * b[1]) / (b[0] ** 2 + b[1] ** 2);
    this.set(this.grab.level - g / (this.travel || 96));
  }
  up() {
    this.grab = null, this.kh.t = 13;
  }
  key(n, i) {
    const s = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05 }[n.key];
    return s === void 0 ? !1 : (i ? (this.set(Math.round((this.level + s) * 20) / 20), this.kh.t = 10.5) : this.kh.t = 13, !0);
  }
  show(n) {
    this.held || (this.level = Math.max(0, Math.min(1, n)), this.L.t = this.level, this.svg.setAttribute("aria-valuenow", Math.round(this.level * 100)), this.kick());
  }
  render(n) {
    const i = this.v, s = this.size(44, 136)[1], h = 44, b = 1, g = s / 136, v = 1, L = 48 * g, D = 6 + this.kh.x, _ = L - this.L.x * 2 * L;
    this.travel = 2 * L;
    const T = Math.min(32 * b, h - 12), O = T / 32, M = Ce(no(h, s, 16 * v), 0, 6), Y = Mo(Ce(no(T, 16 * v, 5 * v), 6, D), Di(0, _, 0));
    let X = "";
    for (let et = 0; et <= 10; et++) {
      const nt = L - et * (2 * L) / 10, ut = (et % 5 === 0 ? 7 : 4) * b, tt = 9 * v;
      X += fa(i, [tt, nt, 6], [tt + ut, nt, 6]) + fa(i, [-tt, nt, 6], [-tt - ut, nt, 6]);
    }
    const W = no(6 * v, 2 * L + 6 * v, 3 * v).map(([et, nt]) => [et, nt, 6]), N = [[-3 * v, L + 3 * v, 6], [3 * v, L + 3 * v, 6], [3 * v, _, 6], [-3 * v, _, 6]];
    return Ue(i, M, 0, n) + Ae(i, M, "plate") + `<g class="deco">${X}${Cn(i, W)}<path class="level" d="${rn(N.map(i.p))}"/></g>` + Ue(i, Y, 6, n, ro(i, M, 1)) + Ae(i, Y, "knob") + `<g class="deco">${fa(i, [-12 * O, _, D], [12 * O, _, D])}${fa(i, [-8 * O, _ - 3.5 * v, D], [8 * O, _ - 3.5 * v, D])}${fa(i, [-8 * O, _ + 3.5 * v, D], [8 * O, _ + 3.5 * v, D])}</g>`;
  }
}
class mu extends An {
  constructor(n, i) {
    super(n, i), this.min = i.min ?? 10, this.max = i.max ?? 30, this.now = "now" in i ? i.now : 19.5, this.value = i.value ?? 21.5, this.step = i.step ?? 0.5, this.tickStep = i.tick ?? 0.5, this.major = i.major ?? 10, this.tint = i.tint || null, this.labelOf = i.labelOf || ((s) => s), this.title = i.title || "", this.base = [2.85, 200, 194], this.lift = 22, this.val = this.spring(this.value, 0.35, 0.5), this.kh = this.spring(15, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  // the scale's angle as the viewer sees it: the gap always faces us, min on the left, max on the right
  ang(n) {
    return 135 + (n - this.min) / (this.max - this.min) * 270 - this.yaw.x;
  }
  set(n) {
    const i = Math.max(this.min, Math.min(this.max, Math.round(n / this.step) * this.step));
    i !== this.value && (this.value = i, this.onChange(i)), this.val.t = i, this.svg.setAttribute("aria-valuenow", i);
  }
  // what it sets, swapped in place: the knob turns from where it points now to where the new value sits
  setConfig(n, i) {
    const s = (this.val.x - this.min) / (this.max - this.min || 1);
    Object.assign(this, {
      min: n.min,
      max: n.max,
      step: n.step,
      tickStep: n.tick,
      major: n.major,
      tint: n.tint || null,
      labelOf: n.labelOf || ((h) => h),
      now: "now" in n ? n.now : null,
      title: n.title || ""
    }), this.val.x = this.min + Math.max(0, Math.min(1, s)) * (this.max - this.min), this.value = Math.max(this.min, Math.min(this.max, i)), this.val.t = this.value, this.svg.setAttribute("aria-label", n.label || this.opts.label), this.svg.setAttribute("aria-valuenow", this.value), this.kick();
  }
  angleAt(n) {
    const [i, s] = this.v.ground(n[0], n[1], 7 + this.kh.x);
    return Math.atan2(s, i) * 180 / Math.PI;
  }
  down(n, i) {
    this.grab = { last: this.angleAt(i), raw: this.value, moved: 0 }, this.kh.t = 11.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.angleAt(n);
    let s = i - this.grab.last;
    s > 180 && (s -= 360), s < -180 && (s += 360), this.grab.last = i, this.grab.moved += Math.abs(s), this.grab.raw = Math.max(this.min, Math.min(this.max, this.grab.raw + s / 270 * (this.max - this.min))), this.set(this.grab.raw);
  }
  up() {
    var i, s;
    const n = this.grab;
    this.grab = null, this.kh.t = 15, n && n.moved < 3 && ((s = (i = this.opts).onPress) == null || s.call(i));
  }
  key(n, i) {
    if ((n.key === "Enter" || n.key === " ") && this.opts.onPress)
      return i && !n.repeat && this.opts.onPress(), !0;
    const s = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[n.key];
    return s === void 0 ? !1 : (i ? (this.set(this.value + s * this.step), this.kh.t = 12.5) : this.kh.t = 15, !0);
  }
  show(n, i) {
    this.held || (i != null && (this.now = i), n != null && (this.value = n, this.val.t = n, this.svg.setAttribute("aria-valuenow", n)), this.kick());
  }
  render(n) {
    const i = this.v, s = 7 + this.kh.x, h = this.ang(this.val.x), [b, g] = this.size(92, 92), v = Math.min(b, g) / 92, L = v, D = v, _ = (tt, F, q) => [tt * Math.cos(F) * L, tt * Math.sin(F) * D, q], T = Ce(Ve(46 * v, 72), 0, 7), O = Ce(Ve(22 * v, 64), 7, s), M = Math.min(this.now ?? this.value, this.value), Y = Math.max(this.now ?? this.value, this.value);
    let X = "";
    const W = Math.round((this.max - this.min) / this.tickStep), N = Math.max(1, Math.round(this.major / 2));
    for (let tt = 0; tt <= W; tt++) {
      const F = this.min + tt * this.tickStep, q = ze(this.ang(F)), rt = tt % this.major === 0, pt = rt ? 36.5 : tt % N === 0 ? 34.5 : 33.2, Dt = !this.tint && this.now != null && F >= M && F <= Y && this.value > this.now, ct = this.tint ? 'edge tint" style="stroke:' + this.tint(F) : Dt ? "accent" : "edge";
      X += fa(i, _(30, q, 7), _(this.tint ? 37 : pt, q, 7), ct);
      const S = rt ? this.labelOf(F) : null;
      S != null && S !== "" && (X += nr(i, _(41.5, q, 7), S, 4 * v));
    }
    let et = "";
    for (let tt = 0; tt < 40; tt++) {
      const F = ze(h + tt * 9), q = Math.cos(F), rt = Math.sin(F), pt = 22 * v;
      q * i.V[0] + rt * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (et += fa(i, [pt * q, pt * rt, 9], [pt * q, pt * rt, s - 2.2]));
    }
    this.title && (X += nr(i, _(37, ze(90 - this.yaw.x), 7), this.title, 4.6 * v, { cls: "sel" }));
    const nt = ze(h), ut = Ve(18.5 * v, 64).map(([tt, F]) => [tt, F, s]);
    return Ue(i, T, 0, n) + Ae(i, T, "knob") + `<g class="deco">${X}</g>` + Ue(i, O, 7, n, ro(i, T, 1)) + Ae(i, O, "knob") + `<g class="deco">${et}${Cn(i, ut)}` + (this.tint ? `<path class="swatch" style="fill:${this.tint(this.value)}" d="${rn(Ve(8 * v, 40).map(([tt, F]) => i.p([tt, F, s])))}"/>` : "") + `${fa(i, [(this.tint ? 10 : 5) * v * Math.cos(nt), (this.tint ? 10 : 5) * v * Math.sin(nt), s], [15.5 * v * Math.cos(nt), 15.5 * v * Math.sin(nt), s], "edge pointer")}</g>`;
  }
}
class xg extends An {
  constructor(n, i) {
    super(n, i), this.positions = i.positions, this.index = i.index ?? 0, this.base = [2.45, 200, 196], this.lift = 21, this.A = this.spring(this.positions[this.index].a, 0.22, 0.6), this.ph = this.spring(9, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(n) {
    this.index = (n + this.positions.length) % this.positions.length, this.A.t = this.positions[this.index].a, this.svg.setAttribute("aria-valuetext", this.positions[this.index].label), this.onChange(this.index);
  }
  angleAt(n) {
    const [i, s] = this.v.ground(n[0], n[1], 12);
    return Math.atan2(s, i) * 180 / Math.PI + this.yaw.x;
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
    let s = i - this.grab.last;
    s > 180 && (s -= 360), s < -180 && (s += 360), this.grab.last = i, this.grab.moved += Math.abs(s);
    const h = this.positions[0].a, b = this.positions[this.positions.length - 1].a;
    this.A.t = Math.max(h - 8, Math.min(b + 8, this.A.t + s));
  }
  up() {
    if (this.ph.t = 9, !!this.grab) {
      if (this.grab.moved < 4) this.set(this.index + 1);
      else {
        let n = 0;
        this.positions.forEach((i, s) => {
          Math.abs(i.a - this.A.t) < Math.abs(this.positions[n].a - this.A.t) && (n = s);
        }), this.set(n);
      }
      this.grab = null;
    }
  }
  key(n, i) {
    const s = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, " ": 1, Enter: 1 }[n.key];
    if (s === void 0) return !1;
    if (i) {
      const h = Math.max(0, Math.min(this.positions.length - 1, this.index + s));
      this.set(n.key === " " || n.key === "Enter" ? this.index + 1 : h), this.ph.t = 7;
    } else this.ph.t = 9;
    return !0;
  }
  show(n) {
    this.held || n === this.index || (this.index = n, this.A.t = this.positions[n].a, this.svg.setAttribute("aria-valuetext", this.positions[n].label), this.kick());
  }
  render(n) {
    const i = this.v, s = this.A.x - this.yaw.x, h = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, L = g / 92, D = Math.min(v, L), _ = Ce(no(b, g, 20 * D), 0, 7), T = Ce(Ve(15 * D, 48), 7, 12), O = Mo(Ce([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([Y, X]) => [Y * D, X * D]), 12, h, !1), Ns(s));
    let M = "";
    return this.positions.forEach((Y, X) => {
      const W = ze(Y.a - this.yaw.x), N = X === this.index, et = Math.cos(W), nt = Math.sin(W), ut = Ve(1.7 * D, 20).map(([tt, F]) => [tt + 26.5 * et * v, F + 26.5 * nt * L, 7]);
      M += N ? `<path class="dotfill" d="${rn(ut.map(i.p))}"/>` : Cn(i, ut), M += nr(i, [37.5 * et * v, 37.5 * nt * L, 7], Y.label, 5.6 * D, { part: `pos-${X}`, cls: N ? "sel" : "", w: 26 });
    }), Ue(i, _, 0, n) + Ae(i, _) + M + Ue(i, O, 7, n, ro(i, _, 1)) + Ae(i, T, "knob") + Ae(i, O, "knob") + `<g class="deco">${fa(i, Ns(s)([6 * D, 0, h]), Ns(s)([19 * D, 0, h]))}</g>`;
  }
}
class kg extends An {
  constructor(n, i) {
    super(n, i), this.on = !!i.on, this.base = [2.4, 206, 214], this.lift = 30, this.phi = this.spring(this.on ? 24 : -24, 0.3, 0.5), this.lid = this.spring(0, 0.16, 0.66), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  get open() {
    return this.lid.t > 0;
  }
  setLid(n) {
    var i, s;
    this.lid.t = n ? 108 : 0, (s = (i = this.opts).onLid) == null || s.call(i, n);
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
    const i = this.v, s = 6, h = s - 23, b = 6, [g, v] = this.size(86, 104), L = Math.min(g / 86, v / 104), D = ([F, q, rt]) => [F * L, q * L, 6 + (rt - 6) * L], _ = Ce(no(g, v, 18 * L), 0, 6), T = Mo(Ce(Ve(8, 40), 6, 10), (F) => D(Di(0, s, 0)(F))), O = (F) => D(Di(0, s, 10)(Ic(this.phi.x)(F))), M = Mo(Ce(Ve(2.2, 20), 0, 13.5), O), Y = Mo(Ce(Ve(3.8, 24), 12.5, 17.5), O), X = (F) => D(Ic(-this.lid.x, h, b)(F)), W = Mo(Ce(no(40, 46, 7), 6, 30), (F) => X(Di(0, s, 0)(F))), N = Lh(W, i.V);
    let et = "";
    if (N[1]) {
      let F = "";
      for (let rt = -84; rt <= 84; rt += 12) {
        const pt = [[rt - 40, s - 40], [rt - 34, s - 40], [rt + 46, s + 40], [rt + 40, s + 40]].map(([Dt, ct]) => i.p(X([Dt, ct, 30])));
        F += `<path class="level" d="${rn(pt)}"/>`;
      }
      const q = `${this.id}s`;
      et += `<clipPath id="${q}"><path d="${ro(i, W, 1)}"/></clipPath><g clip-path="url(#${q})">${F}</g>`;
    }
    N[0] && (et += Cn(i, no(32, 38, 4).map(([F, q]) => X([F, q + s, 6]))));
    const nt = `<g data-part="toggle">${Ae(i, T)}${Ae(i, M)}${Ae(i, Y)}</g>`, ut = `<g data-part="cover">${Ae(i, W)}<g class="deco">${et}</g></g>`, tt = this.lid.x > 45;
    return Ue(i, _, 0, n) + Ae(i, _) + Ue(i, W, 6, n, ro(i, _, 1)) + Ue(i, Y, 6, n, ro(i, _, 1)) + (tt ? ut + nt : nt + ut);
  }
}
class gu extends An {
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
    const i = this.v, [s, h] = this.size(64, 84), b = Math.min(s / 64, h / 84), g = ([W, N, et]) => [W * b, N * b, 6 + (et - 6) * b], v = this.press.x * 1.2, L = Ce(no(s, h, 16 * b), 0, 6), D = Mo(Ce(Ve(10, 6).map(([W, N]) => [W, N]), 6, 9 - v, !1), (W) => g(Ns(30)(W))), _ = Mo(Ce(Ve(6.5, 36), 9 - v, 12 - v), g), T = (W) => g(Di(0, 0, 12 - v)(Ic(this.phi.x)(W))), O = Mo(Ce(Ve(2.3, 20), 0, 15), T), M = Mo(Ce(Ve(4, 24), 14, 19), T), Y = h / 2 - 13 * b, X = (W, N, et) => nr(i, [0, N, 6], W, (this.opts.textSize || 6) * b, { part: "lever", cls: et ? "sel" : "", w: 30 });
    return Ue(i, L, 0, n) + Ae(i, L) + X(this.labels[0], -Y, this.on) + X(this.labels[1], Y, !this.on) + Ue(i, M, 6, n, ro(i, L, 1)) + Ue(i, O, 6, n, ro(i, L, 1)) + `<g data-part="lever">${Ae(i, D)}${Ae(i, _)}${Ae(i, O)}${Ae(i, M)}</g>`;
  }
}
class Mg extends An {
  constructor(n, i) {
    var s;
    super(n, i), this.rings = { bright: { ...i.bright }, second: i.second ? { ...i.second } : null }, this.active = "bright", this.vals = { bright: this.spring(this.rings.bright.value, 0.35, 0.5), second: this.spring(((s = this.rings.second) == null ? void 0 : s.value) ?? 0, 0.35, 0.5) }, this.knobF = this.spring(this.frac("bright", this.rings.bright.value), 0.3, 0.55), this.kh = this.spring(15, 0.3, 0.55), this.base = [2.6, 200, 194], this.lift = 22, this.svg.setAttribute("role", "slider"), this.label(), this.paint();
  }
  // a ring can run backwards (reverse): Tone goes white to orange, left to right (Matt, 25 Nov)
  frac(n, i) {
    const s = this.rings[n], h = Math.max(0, Math.min(1, (i - s.min) / (s.max - s.min || 1)));
    return s.reverse ? 1 - h : h;
  }
  label() {
    const n = this.rings[this.active];
    this.svg.setAttribute("aria-label", (this.opts.label || "Light") + " " + n.title.toLowerCase() + (this.rings.second ? ". Press to switch" : "")), this.svg.setAttribute("aria-valuenow", n.value);
  }
  // camera angle of a fraction round the scale: the gap faces you, min on the left, max on the right
  angF(n) {
    return 135 + n * 270 - this.yaw.x;
  }
  set(n) {
    const i = this.rings[this.active], s = Math.max(i.min, Math.min(i.max, Math.round(n / i.step) * i.step));
    this.vals[this.active].t = s, this.knobF.t = this.frac(this.active, s), s !== i.value && (i.value = s, this.label(), this.onChange(this.active, s));
  }
  press() {
    var n, i;
    this.rings.second && (this.active = this.active === "bright" ? "second" : "bright", this.knobF.t = this.frac(this.active, this.rings[this.active].value), this.label(), (i = (n = this.opts).onPress) == null || i.call(n, this.active));
  }
  // the outer ring's kind changed (the Colour / White rocker): its scale and value swap in place
  setSecond(n) {
    this.rings.second = { ...n }, this.vals.second.x = this.vals.second.t = n.value, this.active === "second" && (this.knobF.t = this.frac("second", n.value)), this.label(), this.kick();
  }
  show(n, i) {
    this.held || !this.rings[n] || i == null || (this.rings[n].value = i, this.vals[n].t = i, n === this.active && (this.knobF.t = this.frac(n, i), this.label()), this.kick());
  }
  angleAt(n) {
    const [i, s] = this.v.ground(n[0], n[1], 7 + this.kh.x);
    return Math.atan2(s, i) * 180 / Math.PI;
  }
  down(n, i) {
    this.grab = { last: this.angleAt(i), raw: this.rings[this.active].value, moved: 0 }, this.kh.t = 11.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.angleAt(n), s = this.rings[this.active];
    let h = i - this.grab.last;
    h > 180 && (h -= 360), h < -180 && (h += 360), this.grab.last = i, this.grab.moved += Math.abs(h), this.grab.raw = Math.max(s.min, Math.min(s.max, this.grab.raw + (s.reverse ? -1 : 1) * (h / 270) * (s.max - s.min))), this.set(this.grab.raw);
  }
  up() {
    const n = this.grab;
    this.grab = null, this.kh.t = 15, n && n.moved < 3 && this.press();
  }
  key(n, i) {
    if (n.key === "Enter" || n.key === " ")
      return i && !n.repeat && this.press(), !0;
    const s = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[n.key];
    if (s === void 0) return !1;
    const h = this.rings[this.active];
    return i ? (this.set(h.value + (h.reverse ? -1 : 1) * s * h.step), this.kh.t = 12.5) : this.kh.t = 15, !0;
  }
  render(n) {
    const i = this.v, s = 7 + this.kh.x, [h, b] = this.size(100, 100), g = Math.min(h, b) / 100, v = (rt, pt, Dt) => [rt * g * Math.cos(pt), rt * g * Math.sin(pt), Dt], L = Ce(Ve(50 * g, 80), 0, 7), D = Ce(Ve(19 * g, 64), 7, s), _ = this.rings.bright, T = this.rings.second, O = this.active === "bright";
    let M = "";
    const Y = this.vals.bright.x, X = Math.round((_.max - _.min) / _.tick);
    for (let rt = 0; rt <= X; rt++) {
      const pt = _.min + rt * _.tick, Dt = ze(this.angF(this.frac("bright", pt))), ct = rt % _.major === 0;
      M += fa(i, v(22, Dt, 7), v(ct ? 28.5 : 27, Dt, 7), pt <= Y + 1e-6 && Y > _.min ? "accent" : "edge");
    }
    let W = "";
    if (T) {
      const rt = Math.round((T.max - T.min) / T.tick);
      for (let Dt = 0; Dt <= rt; Dt++) {
        const ct = T.min + Dt * T.tick, S = ze(this.angF(this.frac("second", ct)));
        Dt % T.major, W += fa(i, v(34, S, 7), v(47, S, 7), T.tint ? 'edge tint" style="stroke-width:' + (3.4 * Math.min(1.6, g)).toFixed(2) + ";stroke:" + T.tint(ct) : "edge");
      }
      const pt = ze(this.angF(this.frac("second", this.vals.second.x)));
      W += fa(i, v(32, pt, 7), v(48.5, pt, 7), "edge pointer");
    }
    const N = (rt, pt) => pt ? rt : '<g class="dim">' + rt + "</g>", et = nr(i, v(40, ze(90 - this.yaw.x), 7), (O ? _ : T || _).title, 4.4 * g, { cls: "sel" });
    let nt = "";
    const ut = this.angF(this.knobF.x);
    for (let rt = 0; rt < 40; rt++) {
      const pt = ze(ut + rt * 9), Dt = Math.cos(pt), ct = Math.sin(pt), S = 19 * g;
      Dt * i.V[0] + ct * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (nt += fa(i, [S * Dt, S * ct, 9], [S * Dt, S * ct, s - 2.2]));
    }
    const tt = ze(ut), F = Ve(15.5 * g, 64).map(([rt, pt]) => [rt, pt, s]), q = T != null && T.tint ? `<path class="swatch" style="fill:${T.tint(T.value)}" d="${rn(Ve(6.5 * g, 40).map(([rt, pt]) => i.p([rt, pt, s])))}"/>` : "";
    return Ue(i, L, 0, n) + Ae(i, L, "knob") + `<g class="deco">${N(M, O)}${N(W, !O)}${et}</g>` + Ue(i, D, 7, n, ro(i, L, 1)) + Ae(i, D, "knob") + `<g class="deco">${nt}${Cn(i, F)}${q}${fa(i, [(q ? 8 : 4) * g * Math.cos(tt), (q ? 8 : 4) * g * Math.sin(tt), s], [13 * g * Math.cos(tt), 13 * g * Math.sin(tt), s], "edge pointer")}</g>`;
  }
}
const bu = "homecore-density", wu = "homecore-physical", vu = "homecore-physical-view", yu = "homecore-physical-fit", xu = "homecore-physical-binary", ku = "homecore-physical-preview-at", We = {
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
}, G = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), Mu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', _c = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Cc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', As = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Su = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, _u = 1, Sg = 4, Cu = 16, Au = 32, _g = 128, Cg = 256, Lu = 16384, Tu = 1, Du = 2, Ac = 4, Eu = 8, Ag = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Bu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Lg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Ci = {
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
}, Pu = ["covers", "people", "openings", "leaks", "vacuum"], Ru = "homecore_house", Hu = "homecore-house-used", Ai = ["switch", "fan", "input_boolean", "automation"], Nu = "homecore-house-look", Tg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Dg = [["popup", "Popup"], ["sheet", "Sheet"]], Eg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Bg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Pg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Li = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Rg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Hg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Ou = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Lc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ra = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Tc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Ls = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Th = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", Ts = Th(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Iu = Th(["M20 6L9 17L4 12"]), yo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + G(o || "") + '"' + (n ? ' data-icon-name="' + G(n) + '"' : "") + "></span>", Ng = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Fu = 1, qu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Vu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ds = ["door", "window", "garage_door", "opening"], Wu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Hr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Og = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Ig = 10, Fg = 20, qg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Vg = ["living room", "bedroom", "office"];
function Wg(o, { config: n, getHass: i }) {
  var wp, vp, yp;
  const s = (t) => o.getElementById(t), h = s("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let L = We.get(bu) === "1", D = We.get(wu) === "1", _ = We.get(vu) || "front", T = We.get(yu) || "fill", O = We.get(xu) || "toggle", M = {};
  const Y = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, X = (t, e, a) => Y({ type: "call_service", domain: t, service: e, service_data: a }), W = o.querySelector("#appearancePane .toggleList");
  W && !s("densityToggle") && (W.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), s("densityToggle").addEventListener("click", () => {
    L = !L, We.set(bu, L ? "1" : "0"), ct();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([l, p]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + l + '">' + p + "</button>").join("") + "</div>", nt = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function ut() {
    var E, J;
    if (!g || s("housePane")) return;
    const t = s("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (C, $) => '<div class="houseTab' + (C === "look" ? " active" : "") + '" data-house-pane="' + C + '"><section class="card">' + $ + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([C, $]) => '<button class="tab segBtn' + (C === "look" ? " active" : "") + '" type="button" data-house-tab="' + C + '">' + $ + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", Tg.map(([C, $]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + C + '"><div class="tfCardTitle">' + $ + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + N.map(([C, $, xt]) => nt($, xt, '<select class="settingsSelect" data-source="' + C + '" aria-label="' + $ + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Ci).map(([C, $]) => nt($.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + C + '" aria-label="' + $.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (C) => t.querySelector('[data-look-group="' + C + '"]'), l = (C) => C == null ? void 0 : C.closest(".toggleRow");
    [l(t.querySelector(".themeBtn"))].forEach((C) => C && r("look").appendChild(C));
    const p = l(s("densityToggle"));
    p && (p.hidden = !0), [l(s("moreInfoChoice")), l(s("namesChoice"))].forEach((C) => C && r("house").appendChild(C)), r("house").insertAdjacentHTML("beforeend", nt("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + nt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), r("house").insertAdjacentHTML("beforeend", nt("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + nt("Angle", "Where the physical controls are seen from.", et("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + nt("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", et("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + nt("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", et("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const d = () => {
      const C = s("physToggle");
      C.classList.toggle("on", D), C.setAttribute("aria-checked", String(D)), s("physViewRow").hidden = s("physFitRow").hidden = s("physBinaryRow").hidden = !D, t.querySelectorAll("[data-phys-view]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.physView === _))), t.querySelectorAll("[data-phys-fit]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.physFit === T))), t.querySelectorAll("[data-phys-binary]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.physBinary === O)));
    };
    r("house").addEventListener("click", (C) => {
      const $ = C.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      $ && ($.id === "physToggle" && (D = !D, We.set(wu, D ? "1" : "0"), wn.clear()), $.dataset.physView && (_ = $.dataset.physView, We.set(vu, _), wn.forEach((xt) => xt.ctls.forEach((Tt) => Tt.setCamera(_)))), $.dataset.physFit && (T = $.dataset.physFit, We.set(yu, T), wn.forEach((xt) => xt.ctls.forEach((Tt) => Tt.setFill(T === "fill")))), $.dataset.physBinary && (O = $.dataset.physBinary, We.set(xu, O), wn.clear()), d(), ($.id === "physToggle" || $.dataset.physBinary) && Oa(), A($.closest(".toggleRow")));
    }), d();
    let u = null;
    const f = () => {
      !u || u.hidden || (u.classList.remove("in"), setTimeout(() => {
        u.classList.contains("in") || (u.hidden = !0);
      }, 220));
    };
    function x(C, $) {
      const xt = u.offsetWidth, Tt = u.offsetHeight;
      u.style.left = Math.max(8, Math.min(window.innerWidth - xt - 8, C)) + "px", u.style.top = Math.max(8, Math.min(window.innerHeight - Tt - 8, $)) + "px", u.classList.add("placed");
    }
    function A(C) {
      const $ = o.querySelector("#app");
      if (!$) return;
      if (!u) {
        u = document.createElement("div"), u.className = "tfPhysPreview", u.hidden = !0, u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Physical controls preview"), u.innerHTML = '<div class="tfPhysPreviewHead" title="Drag to move"><span class="tfPhysGrip" aria-hidden="true"></span><span class="activityTitle">Preview</span><button class="tfBack" type="button" data-preview-close aria-label="Close preview">' + Cc + '</button></div><div class="tfPhysPreviewRow"></div><div class="tfPhysPreviewNote">Off: popups show their usual controls.</div>', $.appendChild(u), u.querySelector("[data-preview-close]").addEventListener("click", f);
        const At = u.querySelector(".tfPhysPreviewHead");
        At.addEventListener("pointerdown", (ft) => {
          if (ft.button > 0 || ft.target.closest("button")) return;
          ft.preventDefault();
          const Lt = u.getBoundingClientRect(), Qt = ft.clientX - Lt.left, me = ft.clientY - Lt.top;
          try {
            At.setPointerCapture(ft.pointerId);
          } catch {
          }
          u.classList.add("dragging");
          const he = (Fa) => x(Fa.clientX - Qt, Fa.clientY - me), ye = () => {
            At.removeEventListener("pointermove", he), At.removeEventListener("pointerup", ye), At.removeEventListener("pointercancel", ye), u.classList.remove("dragging");
            const Fa = u.getBoundingClientRect();
            We.set(ku, JSON.stringify([Math.round(Fa.left), Math.round(Fa.top)]));
          };
          At.addEventListener("pointermove", he), At.addEventListener("pointerup", ye), At.addEventListener("pointercancel", ye);
        }), window.addEventListener("resize", () => {
          if (u.classList.contains("placed")) {
            const ft = u.getBoundingClientRect();
            x(ft.left, ft.top);
          }
        });
      }
      const xt = (() => {
        try {
          return JSON.parse(We.get(ku) || "null");
        } catch {
          return null;
        }
      })(), Tt = u.querySelector(".tfPhysPreviewRow");
      if (u.dataset.binary !== O) {
        u.dataset.binary = O;
        const At = [[O === "rocker" ? "Rocker" : "Toggle", "Switch"], ["Fader", "Light"], ["Dial", "Thermostat"]];
        Tt.innerHTML = At.map(([, Qt]) => '<div class="tfPhysPreviewCell"><div class="tfMoreSpace tfPhys"></div><span>' + Qt + "</span></div>").join("");
        const ft = Tt.querySelectorAll(".tfPhys"), Lt = { camera: _, fill: T === "fill" };
        u.ctls = [
          O === "rocker" ? new Sc(ft[0], { ...Lt, on: !0, label: "Sample switch" }) : new gu(ft[0], { ...Lt, on: !0, label: "Sample switch" }),
          ...ap(ft[1], { ...Lt, label: "Sample light" }, null, () => {
          }).ctls,
          new mu(ft[2], { ...Lt, value: 21.5, now: 19.5, min: 10, max: 30, label: "Sample thermostat target" })
        ];
      } else u.ctls.forEach((At) => {
        At.setCamera(_), At.setFill(T === "fill");
      });
      u.classList.toggle("off", !D), u.hidden && (u.hidden = !1, xt && x(xt[0], xt[1]), u.offsetWidth), u.classList.add("in"), (C && !u.classList.contains("placed") ? C.getBoundingClientRect().bottom - (u.getBoundingClientRect().top - 16) : 0) > 0 && C.scrollIntoView({ block: "center", behavior: je() ? "instant" : "smooth" });
    }
    ["#homeNav", "#settingsBack", "#tvNav"].forEach((C) => {
      var $;
      return ($ = o.querySelector(C)) == null ? void 0 : $.addEventListener("click", f);
    }), [l(s("hoursChoice")), l(s("wxStyleChoice"))].forEach((C) => C && r("weather").appendChild(C));
    const k = s("housePane"), R = k.querySelector(".houseTabs"), B = R.querySelector(".rubberIndicator"), I = "homecore-light-view", P = (C) => {
      k.classList.toggle("tfLightCardsOn", C === "cards"), k.querySelectorAll("[data-light-view]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.lightView === C))), We.set(I, C);
    };
    P(We.get(I) === "table" ? "table" : "cards"), k.querySelector(".tfLightView").addEventListener("click", (C) => {
      const $ = C.target.closest("[data-light-view]");
      $ && P($.dataset.lightView);
    }), new ResizeObserver(() => F()).observe(k), (J = (E = document.fonts) == null ? void 0 : E.ready) == null || J.then(() => F());
    const V = (C) => {
      const $ = R.querySelector(".tab.active");
      B.style.transition = "none", C ? Rs(B, B.offsetLeft, B.offsetWidth, $.offsetLeft, $.offsetWidth) : (B.style.left = $.offsetLeft + "px", B.style.width = $.offsetWidth + "px");
    };
    new ResizeObserver(() => V(!1)).observe(R), k.addEventListener("click", (C) => {
      const $ = C.target.closest("[data-house-tab]");
      if ($) {
        R.querySelectorAll(".tab").forEach((At) => At.classList.toggle("active", At === $)), k.querySelectorAll(".houseTab").forEach((At) => At.classList.toggle("active", At.dataset.housePane === $.dataset.houseTab)), $.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), V(!0), F();
        return;
      }
      const xt = C.target.closest("[data-light-fav]");
      if (xt) {
        Vc(xt.dataset.lightFav);
        return;
      }
      const Tt = C.target.closest("[data-light-pick]");
      if (Tt) {
        const [At, ft] = Tt.dataset.lightPick.split("|"), Lt = { ...Xt[At] };
        Tt.dataset.v ? Lt[ft] = Tt.dataset.v : delete Lt[ft], Xt[At] = Lt, _o(), [...aa.keys()].filter((Qt) => Qt.endsWith(":" + ft)).forEach((Qt) => aa.delete(Qt)), Oa();
        return;
      }
      const Nt = C.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Nt || Nt.disabled)) {
        if (Nt.dataset.lights && (Xt.lights = Nt.dataset.lights), Nt.dataset.dacPad && (Xt.dacPad = Nt.dataset.dacPad), (Nt.dataset.lights || Nt.dataset.dacPad) && (_o(), aa.clear()), Nt.dataset.sumToggle) {
          const At = Nt.dataset.sumToggle, ft = new Set(kt.hiddenSums || []);
          ft.has(At) ? ft.delete(At) : ft.add(At), kt = { ...kt, hiddenSums: [...ft] }, Da();
        }
        Oa();
      }
    }), k.addEventListener("change", (C) => {
      const $ = C.target;
      $.dataset.source && (kt = { ...kt, sources: { ...kt.sources || {}, [$.dataset.source]: $.value || void 0 } }, Da());
      const xt = $.dataset.lightStyle || $.dataset.lightPad;
      if (xt) {
        const Tt = $.dataset.lightStyle ? "lightStyles" : "lightPads", Nt = { ...Xt[Tt] };
        $.value ? Nt[xt] = $.value : delete Nt[xt], Xt[Tt] = Nt, _o(), [...aa.keys()].filter((At) => At.endsWith(":" + xt)).forEach((At) => aa.delete(At));
      }
      Oa();
    });
  }
  function tt() {
    var k, R;
    oi() && fn();
    const t = s("housePane");
    if (!t) return;
    const e = !!customElements.get(Ka);
    t.querySelectorAll("[data-lights]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.lights === Xt.lights))), s("lightsRow").querySelector(".status").textContent = e || !oi() ? "How lights show on the house page." : Xa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.dacPad === Xt.dacPad))), s("dacPadRow").hidden = !oi();
    for (const B of t.querySelectorAll("[data-source]")) {
      if (B === o.activeElement) continue;
      const [I] = N.find(([V]) => V === B.dataset.source), P = Object.keys(M).filter(N.find(([V]) => V === I)[3]).sort((V, E) => yt(V).localeCompare(yt(E)));
      B.dataset.sig !== P.join(",") && (B.innerHTML = '<option value="">Automatic</option>' + P.map((V) => '<option value="' + G(V) + '">' + G(yt(V)) + "</option>").join(""), B.dataset.sig = P.join(",")), B.value = P.includes((k = kt.sources) == null ? void 0 : k[I]) ? kt.sources[I] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((B) => {
      const I = !(kt.hiddenSums || []).includes(B.dataset.sumToggle);
      B.classList.toggle("on", I), B.setAttribute("aria-checked", String(I));
    });
    const a = s("lightRows"), r = s("lightCards"), l = o.activeElement, p = a != null && a.contains(l) || r != null && r.contains(l) ? l : null;
    if (!a || p != null && p.matches("select")) {
      F();
      return;
    }
    const d = new Set($t()), u = (B, I, P, V) => '<option value="' + B + '"' + (B === P ? " selected" : "") + ">" + I + "</option>", f = Object.keys(M).filter((B) => B.startsWith("light.")).sort((B, I) => !Se.get(B) - !Se.get(I) || (Se.get(B) || "").localeCompare(Se.get(I) || "") || yt(B).localeCompare(yt(I))).map((B) => {
      const I = Xt.lightStyles[B] || "", P = Xt.lightPads[B] || "", V = d.has(B), E = G(yt(B));
      return "<tr><td><strong>" + E + "</strong></td><td>" + G(Se.get(B) || "—") + "</td><td>" + G(Oe(B)) + '</td><td class="metaSwitchCol"><button class="switch' + (V ? " on" : "") + '" type="button" role="switch" aria-checked="' + V + '" data-light-fav="' + G(B) + '" aria-label="' + E + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + G(B) + '" aria-label="' + E + ' tile">' + u("", "Default", I) + u("tile", "HomeCore tile", I) + u("dac", "Dual Axis Controller", I) + '</select></td><td><select class="settingsSelect" data-light-pad="' + G(B) + '" aria-label="' + E + ' pad"' + (On(B) ? "" : " disabled") + ">" + u("", "Default", P) + u("temperature", "Temperature", P) + u("colour", "Colour", P) + "</select></td></tr>";
    }).join(""), x = (B, I, P, V, E) => '<div class="themeChoice" role="group" aria-label="' + P + '">' + V.map(([J, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (J === E) + '" data-light-pick="' + B + "|" + G(I) + '" data-v="' + J + '">' + C + "</button>").join("") + "</div>", A = Object.keys(M).filter((B) => B.startsWith("light.")).sort((B, I) => !Se.get(B) - !Se.get(I) || (Se.get(B) || "").localeCompare(Se.get(I) || "") || yt(B).localeCompare(yt(I))).map((B) => {
      const I = d.has(B), P = G(yt(B)), V = [Se.get(B), Oe(B)].filter(Boolean).map(G).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + P + '</strong><div class="status">' + V + "</div></div></div>" + nt("Favourite", "", '<button class="switch' + (I ? " on" : "") + '" type="button" role="switch" aria-checked="' + I + '" data-light-fav="' + G(B) + '" aria-label="' + P + ' is a favourite"></button>') + nt("Tile", "", x("lightStyles", B, P + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[B] || "")) + (On(B) ? nt("Pad", "", x("lightPads", B, P + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[B] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), r.dataset.html !== A && (r.innerHTML = A, r.dataset.html = A), p != null && p.dataset.lightFav && ((R = (r.contains(p) ? r : a).querySelector('[data-light-fav="' + CSS.escape(p.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), F();
  }
  function F() {
    var e, a, r;
    const t = s("housePane");
    if (t)
      for (const l of t.querySelectorAll(".themeChoice")) {
        const p = [...l.querySelectorAll("button")];
        let d = (e = l.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? l.nextElementSibling : null;
        if (!d) {
          d = document.createElement("select"), d.className = "settingsSelect tfChoiceList", d.setAttribute("aria-label", l.getAttribute("aria-label") || ((r = (a = l.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : r.textContent) || ""), d.addEventListener("change", () => {
            var k;
            return (k = p[Number(d.value)]) == null ? void 0 : k.click();
          }), l.after(d);
          const A = () => {
            d.innerHTML = p.map((R, B) => '<option value="' + B + '"' + (R.disabled ? " disabled" : "") + ">" + G(R.textContent) + "</option>").join("");
            const k = p.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            k >= 0 && (d.value = String(k));
          };
          new MutationObserver(A).observe(l, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), A();
        }
        const u = (A) => {
          l.hidden !== !A && (l.hidden = !A), d.hidden !== A && (d.hidden = A);
        };
        if (p.length > 3) {
          u(!1);
          continue;
        }
        if (!l.getClientRects().length && !d.getClientRects().length) {
          d.dataset.fit || u(!0);
          continue;
        }
        const f = l.hidden;
        l.hidden = !1;
        const x = p.every((A) => A.scrollWidth <= A.clientWidth + 1);
        l.hidden = f, u(x), d.dataset.fit = "1";
      }
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, h.appendChild(q);
  let rt = 0;
  function pt() {
    if (!L) return;
    const t = s("homeView"), e = (p) => p.offsetParent !== null && !p.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((p) => {
      e(p) && (p.dataset.h = Math.round(p.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, l = a.filter((p) => {
      const d = p.getBoundingClientRect();
      return d.height > 0 && d.top >= 0 && d.bottom <= r + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + l + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Dt = () => {
    L && requestAnimationFrame(pt);
  };
  function ct() {
    var t;
    h.classList.toggle("showDensity", L), (t = s("densityToggle")) == null || t.classList.toggle("on", L), q.hidden = !L, clearInterval(rt), L && (rt = setInterval(pt, 1e3), pt());
  }
  window.addEventListener("scroll", Dt, { capture: !0, passive: !0 }), window.addEventListener("resize", Dt, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ft = document.createElement("style");
  o.appendChild(Ft);
  const Z = new ResizeObserver(() => gt()), it = /* @__PURE__ */ new Set(), lt = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function gt() {
    const t = h.classList.contains("tfAreaOpen") && !h.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), it.forEach((f) => {
      (!t || !f.isConnected) && (Z.unobserve(f), it.delete(f));
    }), !t) {
      Ft.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, l = [...S.children].filter((f) => f.dataset.k && f.offsetParent);
    Ft.disabled = !0;
    const p = l.map((f) => {
      const x = getComputedStyle(f), A = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(r, A ? +A[1] : x.gridColumnEnd === "-1" ? r : 1);
    });
    Ft.disabled = !1;
    let d = 0;
    const u = l.map((f, x) => {
      it.has(f) || (it.add(f), Z.observe(f));
      const A = p[x];
      d + A > r && (d = 0);
      const k = d + 1;
      return d = (d + A) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(f.dataset.k) + '"]{grid-column:' + k + " / span " + A + ";grid-row-end:span " + Math.max(1, Math.ceil(lt(f) + a)) + "}";
    }).join(`
`);
    Ft.textContent !== u && (Ft.textContent = u);
  }
  new MutationObserver(gt).observe(S, { childList: !0 }), new MutationObserver(gt).observe(h, { attributes: !0, attributeFilter: ["class"] });
  let ot = null, dt = null, j = null;
  const bt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Map(), ma = (t) => la.set(t, (la.get(t) || 0) + 1), So = () => [.../* @__PURE__ */ new Set([...Wt.keys(), ...ne])];
  let Ta = !1, sn = 0;
  const Ln = 6;
  let Vt = null;
  const ge = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map();
  let kt = { favourites: null }, Tn = {}, Vr = {}, Pi = [], rr = null;
  const Dn = (() => {
    try {
      return JSON.parse(We.get(Hu)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Ri = 0;
  function Da() {
    clearTimeout(Ri), Ri = setTimeout(() => Promise.resolve(Y({ type: "frontend/set_user_data", key: Ru, value: kt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(We.get(Nu)) || {};
    } catch {
    }
    const e = (a, r) => Object.fromEntries(Object.entries(a || {}).filter(([, l]) => r.includes(l)));
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
  })(), _o = () => We.set(Nu, JSON.stringify(Xt)), Wr = () => {
    h.dataset.more = Xt.more, h.dataset.names = Xt.names, ql();
  };
  g && W && !s("moreInfoChoice") && (s("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Dg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, _o(), Wr(), s("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Eg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, _o(), Wr(), s("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Bg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, _o(), De == null || De.refresh(), s("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Pg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, _o(), De == null || De.setStyle(Xt.wxStyle), Ee == null || Ee.forEach((a) => a.setStyle(Xt.wxStyle)), s("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), ut();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ka = /* @__PURE__ */ new Map();
  let Hi = "";
  const Ni = g ? Gm({ onChange: () => Pe() }) : null;
  g && h.classList.add("house");
  const Ea = Object.assign(document.createElement("div"), { className: "tfBento" });
  let De = null, Oi = null, En = !1;
  function jr(t) {
    const e = Io();
    if (h.classList.toggle("houseBento", !!e), De && (Oi !== e || t == null) && (De.destroy(), De = null), !e || t == null) {
      Ea.remove();
      return;
    }
    Ea.isConnected || S.append(Ea), Ea.style.order = t, !De && !En && (De = lu(Ea, { getHass: i, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: $r }), Oi = e);
  }
  const zr = [
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
  ], Gr = zr.map(([t]) => t), ln = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ws = { hourly: 2 }, so = Object.fromEntries(zr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ee = null, ir = null;
  function Co(t) {
    const e = Io();
    Ee && ir !== e && (Ee.forEach((a) => a.destroy()), Ee = null), Object.values(so).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Ee && !En && (Ee = /* @__PURE__ */ new Map(), ir = e), Ii();
  }
  const $r = () => {
    var t;
    return ((t = ce().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, js = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => yt(t.entity_id).localeCompare(yt(e.entity_id))).map((t) => ["camera:" + t.entity_id, yt(t.entity_id)])];
  function Ii() {
    if (!Ee || En) return;
    const t = new Set(ce().hidden);
    zr.forEach(([e, a]) => {
      Ee.has(e) || t.has(e) && !(ae != null && ae.fromTray && ae.key === e) || Ee.set(e, lu(so[e], { getHass: i, entityId: ir, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => Wd("weather") : void 0, radarSource: $r }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, yt = (t) => Ut(t).friendly_name || t, be = (t, e) => oo(t) || (Number(Ut(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Bn = (t) => Ut(t).supported_color_modes || [], zs = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ur = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Fi = (t) => 0.2126 * Ur(t[0]) + 0.7152 * Ur(t[1]) + 0.0722 * Ur(t[2]), Gs = (t, e) => {
    const a = Fi(t), r = Fi(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, $s = 0.55, Ao = ["hs", "xy", "rgb", "rgbw", "rgbww"], qi = (t) => {
    const e = Ut(t), a = Ao.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? zs(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Lo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function To(t) {
    var r;
    const e = t.split(".")[0], a = (r = M[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? qi(t) : null : e === "climate" ? Lo[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function sr(t, e, a = !1) {
    const [r, l, p] = t.map((I) => I / 255), d = Math.max(r, l, p), u = Math.min(r, l, p), f = d - u, x = f ? (d === r ? (l - p) / f + (l < p ? 6 : 0) : d === l ? (p - r) / f + 2 : (r - l) / f + 4) * 60 : 0, A = (d + u) / 2, k = f ? f / (1 - Math.abs(2 * A - 1)) : 0, R = f < 0.1 ? Math.min(k, 0.25) : 1, B = (I) => {
      const P = (E) => (E + x / 30) % 12, V = R * Math.min(I, 1 - I);
      return [0, 8, 4].map((E) => Math.round(255 * (I - V * Math.max(-1, Math.min(P(E) - 3, 9 - P(E), 1)))));
    };
    for (let I = 0.5; a ? I < 0.96 : I > 0.04; I += a ? 0.01 : -0.01) {
      const P = B(I);
      if (Gs(P, e) >= 3) return "rgb(" + P.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Ua = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + sr(e, [58, 58, 58], !0) + ";--sum-l:" + sr(e, [230, 230, 230]);
  }, lr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Vi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + lr.d[t] + ";--g" + t + "-l:" + lr.l[t]).join(";"), Us = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", lo = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * $s));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + sr(t, e);
  }, cr = (t) => lo(qi(t)), Do = (t) => {
    const e = To(t);
    return e ? ' data-light style="' + lo(e) + '"' : "";
  }, Eo = (t) => {
    const e = Bn(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, cn = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], co = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Ys(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(a / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const l = Math.round(r / 24);
    return l + (l === 1 ? " day ago" : " days ago");
  }
  const Ya = (t) => {
    var e;
    return Ut(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Pn = (t) => {
    var e;
    return m("pos", t, ((e = ge.get(t)) == null ? void 0 : e.pos) ?? Ya(t));
  }, Yr = (t) => {
    var e;
    return m("tilt", t, ((e = ge.get(t)) == null ? void 0 : e.tilt) ?? Ut(t).current_tilt_position);
  };
  function Oe(t) {
    var d;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (Eo(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Ao.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const u = Ya(t), f = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (f > 0 && f < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : zt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (r === "vacuum") return zt(e.state) + (e.state === "cleaning" && ((d = a.rooms) != null && d.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : zt(e.state);
    if (r === "alarm_control_panel") return Vu[e.state] || zt(e.state);
    if (r === "lock" || r === "valve") return zt(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : zt(a.problem);
    if (r === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ds.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + co(a.rang);
    const l = i();
    if (l != null && l.formatEntityState && !oo(t))
      try {
        return l.formatEntityState(e);
      } catch {
      }
    const p = Number(e.state);
    if (e.state !== "" && Number.isFinite(p)) {
      const u = Math.abs(p) >= 100 ? 0 : Math.abs(p) >= 10 ? 1 : 2, f = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return p.toLocaleString(void 0, { maximumFractionDigits: u }) + f + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return zt(e.state);
  }
  const Bo = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Zr = Object.fromEntries(Ym.map((t) => [t.id, t])), dr = {
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
  }, Kr = (t, e) => {
    var a, r, l, p;
    return e ? dr[e] || null : !t || (a = t.attributes) != null && a.icon || (p = (l = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : l[t.entity_id]) != null && p.icon ? null : Zs(t);
  };
  let Xr = 0;
  function po(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var f;
      const p = M[l.dataset.iconFor], d = l.dataset.iconName || "", u = Kr(p, d);
      if (u) {
        (l.dataset.hc !== u || !l.querySelector(":scope>svg.hcGlyph")) && (l.innerHTML = Km(Zr[u], 24, "hcg" + ++Xr).replace("<svg ", '<svg class="hcGlyph" '), l.dataset.hc = u);
        return;
      }
      if (l.dataset.hc && (delete l.dataset.hc, l.textContent = ""), customElements.get("ha-state-icon") && p && !d) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (l.textContent = "", x = document.createElement("ha-state-icon"), l.appendChild(x)), x.hass = e, x.stateObj = p;
      } else if (customElements.get("ha-icon")) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-icon") && (l.textContent = "", x = document.createElement("ha-icon"), l.appendChild(x)), x.icon = d || ((f = p == null ? void 0 : p.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || yt(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Jr), (r = t.classList) != null && r.contains("tfIcon") && Jr(t), ur();
  }
  const pr = /* @__PURE__ */ new Map();
  function Jr(t) {
    var p, d, u;
    const e = (((p = t.closest("[data-k]")) == null ? void 0 : p.dataset.k) || "") + "|" + (t.dataset.iconFor || ((d = t.querySelector("[data-icon-for]")) == null ? void 0 : d.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), r = { backgroundColor: a.backgroundColor, color: a.color }, l = pr.get(e);
    pr.set(e, r), !(!l || l.backgroundColor === r.backgroundColor && l.color === r.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([l, r], { duration: He.warp.cdur, delay: He.warp.cdelay, easing: Ne[He.warp.ease], fill: "backwards" });
  }
  const dn = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", Wi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function ji(t) {
    var B, I, P, V, E, J, C;
    const e = t.localName === "svg" ? t : Wi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter(($) => !$.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (B = t.closest(".tfIcon")) == null ? void 0 : B.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const l = r + "|" + a.map(($) => $.getAttribute("d") || $.localName).join("|");
    if (t.dataset.fitted === l) return !0;
    let p = 1 / 0, d = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const $ of a) {
      const xt = $.getBBox(), Tt = getComputedStyle($), Nt = Tt.stroke !== "none" ? (parseFloat(Tt.strokeWidth) || 0) / 2 : 0;
      if (!xt.width && !xt.height) continue;
      const At = (E = (V = (P = (I = $.transform) == null ? void 0 : I.baseVal) == null ? void 0 : P.consolidate) == null ? void 0 : V.call(P)) == null ? void 0 : E.matrix, ft = At ? (() => {
        const Lt = [[xt.x, xt.y], [xt.x + xt.width, xt.y], [xt.x, xt.y + xt.height], [xt.x + xt.width, xt.y + xt.height]].map(([he, ye]) => [At.a * he + At.c * ye + At.e, At.b * he + At.d * ye + At.f]), Qt = Lt.map((he) => he[0]), me = Lt.map((he) => he[1]);
        return { x: Math.min(...Qt), y: Math.min(...me), width: Math.max(...Qt) - Math.min(...Qt), height: Math.max(...me) - Math.min(...me) };
      })() : xt;
      p = Math.min(p, ft.x - Nt), d = Math.min(d, ft.y - Nt), u = Math.max(u, ft.x + ft.width + Nt), f = Math.max(f, ft.y + ft.height + Nt);
    }
    if (!(u > p)) return !1;
    const x = (C = (J = e.viewBox) == null ? void 0 : J.baseVal) != null && C.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, A = r > 40 ? r * (26 / 40) : r - 14, k = A * x.width / Math.max(u - p, f - d), R = k / x.width;
    return t.localName === "svg" ? (t.style.width = k + "px", t.style.height = k + "px") : t.style.setProperty("--mdc-icon-size", k + "px"), e.style.translate = ((x.x + x.width / 2 - (p + u) / 2) * R).toFixed(2) + "px " + ((x.y + x.height / 2 - (d + f) / 2) * R).toFixed(2) + "px", t.dataset.fitted = l, !0;
  }
  let Po = 0;
  function Ro(t = 0) {
    clearTimeout(Po), [...o.querySelectorAll(dn)].filter((a) => !ji(a)).length && t < 5 && (Po = setTimeout(() => Ro(t + 1), 300));
  }
  function ur() {
    clearTimeout(Po), Po = setTimeout(() => Ro(), 60);
  }
  const Ho = (t) => {
    var e, a, r;
    return t.startsWith("light.") && M[t] && !Ut(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, we = (t, e, a) => (e = e || Ho(t), ' data-icon-for="' + G(t) + '"' + (e ? ' data-icon-name="' + G(e) + '"' : "") + (a ? ' data-letter="' + G(a) + '"' : "")), Ba = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Ht = (t, e, a, r) => G([t, e, a, r ? JSON.stringify(r) : ""].join("|")), hr = (t) => G(JSON.stringify(t));
  function qe(t) {
    const e = G(yt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + G(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + we(t, Ba(t)) + '></div><div><div class="activityRowName">' + G(yt(t)) + '</div><div class="activityRowMeta">' + G(Oe(t)) + "</div></div></div>";
  }
  const pn = (t, e, a) => '<div class="activityRow" aria-label="' + G(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + we("", a, t) + '></div><div><div class="activityRowName">' + G(t) + '</div><div class="activityRowMeta">' + G(e) + "</div></div></div>";
  function un(t, e, a, r, l = "", p = null, d = "") {
    return '<section class="card tfCard' + (d ? " " + d : "") + '" data-tf data-k="' + G(t) + '" style="order:' + e + '" aria-label="' + G(a) + '"><div class="activityHeader">' + (p ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + G(p) + '" aria-label="' + G(a + (M[p] ? ", " + Oe(p) : "") + ". More info") + '">' + G(a) + "</button>" : '<div class="activityTitle">' + G(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + l + "</section>";
  }
  function Qr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((l) => qe(l));
    return t.power != null && r.push(pn("Power now", Bo(t.power), "mdi:flash")), un(a, e, "Readings", r);
  }
  function Rn(t, e) {
    var u;
    const a = "energy:" + t.id, [r, l] = [t.solar.find((f) => f.endsWith("_power")), t.solar.find((f) => f.endsWith("_today"))], p = [r, l].filter(Boolean).map((f) => qe(f)), d = Number(((u = M[r]) == null ? void 0 : u.state) || 0) * 1e3;
    return jt.grid && (p.push(qe(jt.grid)), p.push(pn("House use", Bo(d + Number(M[jt.grid].state)), "mdi:home-lightning-bolt"))), un(a, e, "Energy", p, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const zi = (t, e) => un("plant:" + t.id, e, yt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function fr(t, e, a, r, l, p, d = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), f = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + G(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + f + '"' + (l ? ' aria-valuetext="' + G(l) + '"' : "") + ' data-drag="' + G(t + "|" + e) + '">' + (d != null ? '<span class="was" aria-hidden="true" style="left:' + d + '%"></span>' : "") + (p ? u == null ? "" : '<b style="left:' + f + '%"></b>' : '<i style="width:' + f + '%"></i>') + "</div>";
  }
  const Hn = "homecore-house-last-bright", uo = (() => {
    try {
      return JSON.parse(We.get(Hn)) || {};
    } catch {
      return {};
    }
  })();
  let mr = 0;
  const Nn = (t, e) => {
    !e || uo[t] === e || (uo[t] = e, clearTimeout(mr), mr = setTimeout(() => We.set(Hn, JSON.stringify(uo)), 500));
  }, ga = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + G(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + G(t.toLowerCase()) + '">' + Su.down + "</button><output>" + G(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + G(t.toLowerCase()) + '">' + Su.up + "</button></div>", Ye = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + G(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + G(r.aria) + '"' : "") + ">" + (r.html || G(r.label)) + "</button>").join("") + "</div>", ti = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ei = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ai = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + G(yt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + G(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + ti(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ei(e) + '">' + Math.round(e) + "%</output></div>";
  function gr(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, l) => {
      r.firstElementChild.setAttribute("style", ti(e, l)), r.lastElementChild.classList.toggle("lit", e >= (l + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ei(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Gi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + G(yt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + G(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ks = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + G(yt(t)) + '">' + [
    be(t, Tu) && ["open", "Open", "open_cover", e >= 100 && !a],
    be(t, Eu) && ["stop", "Stop", "stop_cover", !1],
    be(t, Du) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, l, p, d]) => '<button type="button" data-act="' + Ht("cover", p, t) + '" aria-label="' + l + '"' + (d ? " disabled" : "") + ">" + Ag[r] + "</button>").join("") + "</div>", Ma = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + G(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + G(e.art) + '&quot;)"' : we(t, e.icon)) + "></button>", Za = (t) => '<button class="tfName" type="button" data-more="' + G(t) + '" aria-label="' + G(yt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + G(yt(t)) + '</span><span class="activityRowMeta">' + G(Oe(t)) + "</span></button>";
  function hn(t, e = !1, a = null) {
    const r = w(t), l = t.startsWith("light.") && br(t) && !(a && Fn(t) < 3), p = a || (e && t.startsWith("light.") ? ["bright"] : null), d = l ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + G(t) + '"></div>'] : r.sections.map((u, f) => u && (!p || p.includes((r.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (l ? " tfDac" : "") + (r.on ? " on" : "") + (!l && !d.length ? " tfHeadOnly" : "") + '" data-k="' + G(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Do(t) + '><div class="tfActionHead">' + Ma(t, r) + Za(t) + "</div>" + d.join("") + "</div>";
  }
  const Ka = "dual-controller-v3", $i = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Xa = null;
  async function fn() {
    if (Xa || customElements.get(Ka)) return;
    Xa = "loading";
    const t = await Promise.resolve().then(() => Y({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Ka), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Ka)) return;
    const a = Object.assign(document.createElement("script"), { src: $i });
    a.onerror = () => {
      Xa = "failed", tt();
    }, document.head.appendChild(a);
  }
  const aa = /* @__PURE__ */ new Map(), On = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", oi = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function br(t) {
    return On(t) && !!customElements.get(Ka);
  }
  const mn = (t) => Xt.lightPads[t] || Xt.dacPad, ni = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !h.classList.contains("light") },
      callService: (e, a, r, ...l) => t.callService(e, ...fp(e, a, r), ...l)
    };
  }, Ze = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", Ui = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ze })).dataset.tf = "");
  }, ri = /* @__PURE__ */ new Map(), Yi = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ri.set(a.dataset.dac, a.offsetHeight));
  }));
  function In(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = aa.get(a);
      if (!r) {
        const l = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Ka), r.setConfig({ type: "custom:" + Ka, entity: l, pad: mn(l), tap_action: { action: "none" } }), aa.set(a, r);
      }
      r.hass = ni(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && ri.has(a) && (e.style.minHeight = ri.get(a) + "px"), Yi.observe(r), Ui(r);
    });
  }
  function c() {
    const t = ni();
    aa.forEach((e, a) => {
      e.isConnected ? e.hass = t : aa.delete(a);
    });
  }
  customElements.whenDefined(Ka).then(() => {
    g && (S != null && S.querySelector("[data-tf]")) && zd(Oa);
  });
  const m = (t, e, a) => Wt.has(t + "|" + e) ? Wt.get(t + "|" + e) : a;
  function w(t) {
    var p, d;
    const e = M[t], a = e.attributes, r = t.split(".")[0], l = (u, f) => ({ act: Ht(u, "toggle", t), label: f });
    if (r === "light") {
      const u = e.state === "on", f = Bn(t), [x, A] = cn(t), k = m("bright", t, $a(e));
      u && Nn(t, $a(e));
      const R = m("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), B = m("hue", t, u && Ao.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: l("light", "Turn " + yt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Eo(t) && fr("bright", t, k / 100, yt(t) + " brightness", k + "%", !1, u ? null : uo[t] ?? null),
        f.includes("color_temp") && fr("ct", t, R == null ? null : (R - x) / (A - x), yt(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        f.some((I) => Ao.includes(I)) && fr("hue", t, B == null ? null : B / 360, yt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: l("climate", "Turn " + yt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ga("Target temperature", Fe(f) + " °C", Ht("climate", "set_temperature", t, { temperature: f - u }), Ht("climate", "set_temperature", t, { temperature: f + u })),
        Ye("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: zt(x), act: Ht("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (r === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", x = Pn(t), A = Yr(t);
      return { on: !f, tone: "blue", icon: Bu[kc(e)][f ? 1 : 0], button: l("cover", (f ? "Open " : "Close ") + yt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        be(t, Ac) && ai(t, x),
        A != null && Gi(t, A),
        Ks(t, x, u)
      ] };
    }
    if (r === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: l("humidifier", "Turn " + yt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ga("Target humidity", u + "%", Ht("humidifier", "set_humidity", t, { humidity: u - 1 }), Ht("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((p = a.available_modes) == null ? void 0 : p.length) && Ye("tfSeg", "Mode", a.available_modes.map((f) => ({ label: zt(f), act: Ht("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (r === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", x = m("vol", t, a.volume_level), A = f ? { act: Ht("media_player", be(t, _g) ? "turn_on" : "toggle", t), label: "Turn " + yt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Ht("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + yt(t) } : { act: Ht("media_player", be(t, Cg) ? "turn_off" : "toggle", t), label: "Turn " + yt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: A, parts: ["playback", "volume"], sections: f ? [] : [
        (be(t, Cu) || be(t, Au) || be(t, _u) || be(t, Lu)) && Ye("tfSeg", "Playback", [
          { html: As.prev, aria: "Previous", act: Ht("media_player", "media_previous_track", t), disabled: !be(t, Cu) },
          { html: u ? As.pause : As.play, aria: u ? "Pause" : "Play", act: Ht("media_player", "media_play_pause", t), disabled: !(be(t, _u) || be(t, Lu)) },
          { html: As.next, aria: "Next", act: Ht("media_player", "media_next_track", t), disabled: !be(t, Au) }
        ]),
        be(t, Sg) && x != null && fr("vol", t, x, yt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], x = (k) => f.includes(k) ? f.filter((R) => R !== k) : f.concat(k), A = Ht("vacuum", u ? "pause" : "start", t, oo(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: A, label: (u ? "Pause " : "Start ") + yt(t) }, parts: ["controls", "rooms"], sections: [
        Ye("tfSeg", yt(t), [
          { label: u ? "Pause" : "Start", act: A },
          { label: "Dock", act: Ht("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Ht("vacuum", "locate", t) }
        ]),
        oo(t) && Ye("tfChips", "Rooms to clean", jt.rooms.filter((k) => k.id !== "balcony").map((k) => ({ label: k.name, act: Ht("vacuum", "set_rooms", t, { rooms: x(k.name) }), pressed: f.includes(k.name) })))
      ] };
    }
    if (r === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Ht("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + yt(t) }, parts: ["controls"], sections: [
        Ye("tfSeg", yt(t), [
          { label: "Lock", act: Ht("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Ht("lock", "unlock", t), pressed: e.state === "unlocked" },
          be(t, Fu) && { label: "Open", act: Ht("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Ht("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + yt(t) + ", away" : "Disarm " + yt(t) }, parts: ["controls"], sections: [
        Ye("tfSeg", yt(t), qu.filter(([, , , f]) => !f || be(t, f)).map(([f, x, A]) => ({ label: x, act: Ht("alarm_control_panel", A, t), pressed: e.state === f })))
      ] };
    }
    if (r === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: l("valve", (u ? "Close " : "Open ") + yt(t)), parts: ["controls"], sections: [
        Ye("tfSeg", yt(t), [
          { label: "Open", act: Ht("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Ht("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (r === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Ht("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + yt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ga("Target temperature", u + " °C", Ht("water_heater", "set_temperature", t, { temperature: u - f }), Ht("water_heater", "set_temperature", t, { temperature: u + f })),
        ((d = a.operation_list) == null ? void 0 : d.length) && Ye("tfSeg", "Mode", a.operation_list.map((A) => ({ label: zt(A), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: A }), pressed: (a.operation_mode || e.state) === A })))
      ] };
    }
    if (Ai.includes(r)) {
      const u = e.state === "on";
      return { on: u, button: l(r, "Turn " + yt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: yt(t) }, sections: [] };
  }
  const y = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function H(t) {
    var V;
    const e = (E) => t.readings.find((J) => Ut(J).device_class === E), a = e("temperature"), r = e("humidity"), l = (E) => {
      var J;
      return Number((J = M[E]) == null ? void 0 : J.state);
    }, p = (E) => t.actions.filter((J) => E.test(J)), d = t.lights.filter((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) === "on";
    }), u = p(/^cover\./), f = u.filter((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) !== "closed";
    }), x = [...new Set(u.map((E) => kc(M[E])))], A = p(/^climate\./)[0], k = p(/^humidifier\./)[0], R = p(/^media_player\./), B = R.find((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) === "playing";
    }) || R.find((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) === "paused";
    }), I = t.plugs.filter((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) === "on";
    }), P = [];
    if (a && Number.isFinite(l(a)) && P.push({ key: "temp", id: a, kind: "reading", icon: yo(a), label: "Temperature", value: Fe(l(a)) + "°" }), r && Number.isFinite(l(r)) && P.push({ key: "hum", id: r, kind: "reading", icon: yo(r), label: "Humidity", value: Math.round(l(r)) + "%" }), t.lights.length && P.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: yo("", "mdi:lightbulb"),
      label: "Lights",
      value: d.length ? d.length + " of " + t.lights.length + " on" : "All off",
      short: d.length ? d.length + " on" : "Off",
      on: d.length > 0,
      light: d.length ? cr(d[0]) : "",
      acts: t.lights.map((E) => ["light", d.length ? "turn_off" : "turn_on", E]),
      aria: (d.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const E = x.length === 1 ? Lg[x[0]] : "covers", J = Math.round(u.reduce((C, $) => C + Ya($), 0) / u.length);
      P.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? lo([146, 107, 199]) : "",
        icon: yo("", ((V = Bu[x[0]]) == null ? void 0 : V[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(E),
        value: J <= 0 ? "Closed" : J >= 100 ? "Open" : J + "% open",
        short: J <= 0 ? "Closed" : J + "%",
        on: f.length > 0,
        acts: u.map((C) => ["cover", f.length ? "close_cover" : "open_cover", C]),
        aria: (f.length ? "Close the " : "Open the ") + E + " in " + t.name
      });
    }
    if (A) {
      const E = Ut(A), J = M[A].state === "off";
      P.push({
        key: "climate",
        kind: "control",
        tone: E.hvac_action === "cooling" ? "cool" : "heat",
        light: To(A) ? lo(To(A)) : "",
        icon: yo(A),
        label: yt(A),
        value: J ? "Off" : zt(E.hvac_action || M[A].state) + " · " + y(E.temperature),
        short: J ? "Off" : y(E.temperature),
        on: !J,
        acts: [["climate", "toggle", A]],
        aria: "Turn " + yt(A) + (J ? " on" : " off")
      });
    }
    if (k) {
      const E = M[k].state === "on";
      P.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: E ? lo([33, 150, 243]) : "",
        icon: yo("", "mdi:air-humidifier"),
        label: yt(k),
        value: E ? "On · " + Ut(k).humidity + "%" : "Off",
        short: E ? Ut(k).humidity + "%" : "Off",
        on: E,
        acts: [["humidifier", "toggle", k]],
        aria: "Turn " + yt(k) + (E ? " off" : " on")
      });
    }
    if (R.length) {
      const E = B || R[0], J = M[E], C = J.state === "playing";
      P.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: To(E) ? lo(To(E)) : "",
        icon: yo(E),
        label: yt(E),
        value: Oe(E),
        short: C ? "Playing" : J.state === "paused" ? "Paused" : zt(J.state),
        on: C,
        acts: [["media_player", J.state === "playing" || J.state === "paused" ? "media_play_pause" : "toggle", E]],
        aria: (C ? "Pause " : "Play ") + yt(E)
      });
    }
    return t.plugs.length && P.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: I.length ? lo([255, 193, 7]) : "",
      icon: yo("", "mdi:power-plug"),
      label: "Plugs",
      value: I.length ? I.length + " of " + t.plugs.length + " on" : "All off",
      short: I.length ? I.length + " on" : "Off",
      on: I.length > 0,
      acts: t.plugs.map((E) => ["switch", I.length ? "turn_off" : "turn_on", E]),
      aria: (I.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((E) => P.push(Ut(E).device_class === "moisture" ? { key: "alert:" + E, kind: "alert", icon: yo(E), label: "Water leak" } : { key: "note:" + E, kind: "note", icon: yo(E), label: yt(E) + " " + Oe(E).toLowerCase() })), P;
  }
  const z = (t, e) => {
    const a = (r) => t.actions.filter((l) => r.test(l));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const r = a(/^media_player\./);
        return [r.find((l) => {
          var p;
          return ((p = M[l]) == null ? void 0 : p.state) === "playing";
        }) || r.find((l) => {
          var p;
          return ((p = M[l]) == null ? void 0 : p.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function K(t, e, a = !1) {
    const r = e.find((u) => u.key === "lights"), l = !!(r != null && r.on), p = "", d = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (l ? " on" : "") + '"' + p + ' aria-hidden="true">' + d + "</span>" : '<button class="tfIcon tfAreaIcon' + (l ? " on" : "") + '" type="button"' + p + ' data-acts="' + hr(r.acts) + '" aria-label="' + G(r.aria) + '" aria-pressed="' + l + '">' + d + "</button>";
  }
  const Q = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, U = (t, e) => {
    const a = yt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function at(t) {
    const e = M[t], a = Ut(t), r = t.split(".")[0], l = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(l)) {
      if (a.device_class === "temperature") return { text: y(l) };
      const p = a.unit_of_measurement || "";
      return p === "%" ? { text: Math.round(l) + "%" } : { text: Fe(l, Number.isInteger(l) ? 0 : 1), unit: p };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: y(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Eo(t) ? $a(e) + "%" : "On" };
    if (r === "cover") {
      const p = Ya(t);
      return { text: p <= 0 ? "Closed" : p >= 100 ? "Open" : p + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Oe(t) };
  }
  const st = (t, e, a) => {
    const r = a.find((u) => u.key === "temp"), l = a.find((u) => u.key === "hum"), p = Ut(e), d = M[e].state === "off";
    return e.startsWith("climate.") ? [U(t, e), d ? "Off" : zt(p.hvac_action || M[e].state) + (p.temperature != null ? " · " + y(p.temperature) : ""), l && l.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && U(t, e), r && r.id !== e && r.value, l && l.id !== e && l.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function wt(t) {
    const e = t.id === ot, a = H(t), r = Q(t), l = r && at(r), p = [...a.filter((d) => d.kind === "control"), ...a.filter((d) => d.kind !== "control" && d.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + G(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + G(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ve(t, null, ' data-cols="2" data-rows="' + Fn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + K(t, a, !0) + '<span class="tfACName">' + G(t.name) + '</span></div><span class="tfACMain">' + (l ? G(l.text + (l.unit ? " " + l.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + p.map((d) => '<span class="tfACTile"><span class="tfIcon' + (d.kind === "alert" ? " alert" : "") + '"' + (d.on && d.light ? ' data-light style="' + d.light + '"' : "") + ">" + d.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Pt = [];
  const Bt = (t) => {
    const e = kt.areaOrder || [], a = (r) => {
      const l = e.indexOf(r.id);
      return l < 0 ? e.length + t.indexOf(r) : l;
    };
    return [...t].sort((r, l) => a(r) - a(l));
  }, _t = () => {
    var e;
    const t = new Set(((e = kt.dash) == null ? void 0 : e.areasOff) || []);
    return Bt(Pt).filter((a) => !t.has(a.id));
  }, Gt = lo([255, 162, 75]), Rt = (t) => {
    const e = t.id === ot;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + G(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + G(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, ht = (t) => {
    var r;
    const e = _t();
    e.some((l) => l.id === ot) || (ot = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((l) => l.id === ot);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(wt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? ve(a, null, ' data-cols="2" data-rows="' + Fn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Rt).join("") + "</div></div></div>";
  }, Ot = (t) => t.startsWith("room:"), qt = (t) => Pt.find((e) => "room:" + e.id === t);
  function ve(t, e, a = "") {
    const r = H(t), l = Q(t), p = l && at(l), d = l ? st(t, l, r) : "", u = p ? p.text + (p.unit ? " " + p.unit : "") : "", f = (E) => {
      const J = z(t, E.key);
      return J.length === 1 ? J[0] : "group:" + t.id + ":" + E.key;
    }, x = r.filter((E) => E.kind === "control").slice(0, 4), A = (E) => E.on && E.light ? ' data-light style="' + E.light + '"' : "", k = (E) => '<button class="tfIcon' + (E.on ? " on" : "") + '" type="button" data-tone="' + E.tone + '"' + A(E) + ' data-acts="' + hr(E.acts) + '" aria-label="' + G(E.aria) + '" aria-pressed="' + E.on + '">' + E.icon + "</button>", R = (E) => '<button class="tfIcon' + (E.on ? " on" : "") + '" type="button" data-tone="' + E.tone + '"' + A(E) + ' data-more="' + G(f(E)) + '" aria-label="' + G(t.name + " " + E.label.toLowerCase() + ", " + E.value + ". Open") + '">' + E.icon + "</button>", B = x.map(R), I = x.map((E) => '<div class="tfRoomDev' + (E.on ? " on" : "") + '" data-more="' + G(f(E)) + '">' + (E.acts ? k(E) : R(E)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + G(f(E)) + '" aria-label="' + G(t.name + " " + E.label.toLowerCase() + ", " + E.value + ". Open") + '"><span class="activityRowName">' + G(E.label) + '</span><span class="activityRowMeta">' + G(E.value) + "</span></button></div>"), P = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", V = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + G(t.id) + '" aria-label="Open ' + G(t.name) + '">' + P + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + G(e) + '"' : "") + a + ' data-go="' + G(t.id) + '"><div class="tfActionHead">' + V + '<button class="tfName" type="button" data-go="' + G(t.id) + '" aria-label="Open ' + G(t.name) + '"><span class="activityRowName">' + G(t.name) + "</span>" + (u || d ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + G(u) + (d ? " · " : "") + "</span>" : "") + G(d) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + G(l) + '" aria-label="' + G(yt(l) + ", " + Oe(l) + ". More info") + '"><span class="tfRoomBig">' + G(u) + "</span>" + (d ? '<span class="tfRoomSub">' + G(d) + "</span>" : "") + "</button>" : "") + (B.length ? '<div class="tfRoomDevices">' + B.join("") + '</div><div class="tfRoomHeads">' + I.join("") + "</div>" : "") + "</div>";
  }
  const Et = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], re = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (kt.favourites ?? Tn.favorite_entities ?? []).filter((t) => M[t]);
  function Sa() {
    if (!rr) {
      const e = Object.entries(Dn).sort((r, l) => l[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      rr = [.../* @__PURE__ */ new Set([...Pi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = $t();
    return rr.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let ho = !1;
  const ii = 6;
  function wr() {
    if (!ho || kt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(M).find((r) => oo(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    kt = { ...kt, favourites: [.../* @__PURE__ */ new Set([...kt.favourites ?? Tn.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ii), favSeeded: !0 }, Da();
  }
  const No = () => kt.suggest ?? !Tn.hide_suggested_entities;
  function ee() {
    const t = new Set(v ? [] : kt.favHidden || []), e = $t().filter((l) => !t.has(l)), a = No() ? Sa().filter((l) => !t.has(l) && ol(l)) : [], r = Math.max(ii, e.length);
    return [...e, ...a].slice(0, v && !ss() ? r : Math.min(Ig, r));
  }
  const Oo = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + G(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + G(yt(t)) + '">' + Ng(e) + "</button>";
  };
  function fo(t, { area: e = !1, star: a = !1, plain: r = !1, say: l = null, alert: p = !1 } = {}) {
    var I, P, V, E, J, C;
    const d = r && ((J = (I = i()) == null ? void 0 : I.devices) == null ? void 0 : J[(E = (V = (P = i()) == null ? void 0 : P.entities) == null ? void 0 : V[t]) == null ? void 0 : E.device_id]), u = d && (d.name_by_user || d.name) || yt(t), f = t.split(".")[0], x = !r && Hr.includes(f) ? w(t) : null, A = x ? x.on : ["on", "open", "playing"].includes((C = M[t]) == null ? void 0 : C.state), k = r ? null : x ? x.button : Ai.includes(f) ? { act: Ht(f, "toggle", t), label: "Turn " + yt(t) + (A ? " off" : " on") } : f === "scene" || f === "script" ? { act: Ht(f, "turn_on", t), label: "Run " + yt(t) } : null, R = (l ?? Oe(t)) + (e && Se.get(t) ? " · " + Se.get(t) : ""), B = (x == null ? void 0 : x.icon) || Ba(t);
    return '<div class="activityRow' + (k ? " tfPlug" : "") + (A ? " on" : "") + (a ? " tfPick" : "") + (p ? " alert" : "") + '" data-k="' + G((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + Do(t) + ">" + (k && !a ? '<button class="tfIcon" type="button" data-act="' + k.act + '" aria-label="' + G(k.label) + '"' + we(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + we(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + G(t) + '" aria-label="' + G(u + ", " + R + ". More info") + '"><span class="activityRowName">' + G(u) + '</span><span class="activityRowMeta">' + G(R) + "</span></button>" + (a ? Oo(t) : "") + "</div>";
  }
  const Io = () => {
    var t;
    return M[(t = kt.sources) == null ? void 0 : t.weather] ? kt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function si() {
    var a;
    const t = (r) => Object.keys(M).filter((l) => l.startsWith("binary_sensor.") && r.includes(Ut(l).device_class));
    return ((a = Vr.alert_entities) != null && a.length ? Vr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ds).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Zi() {
    const t = Object.keys(Ci), e = /* @__PURE__ */ new Set(), a = [];
    (Tn.shortcuts || []).forEach((p) => {
      if (p.type === "summary") {
        if (!t.includes(p.key) || e.has(p.key)) return;
        e.add(p.key);
      }
      a.push(p);
    }), t.forEach((p) => {
      e.has(p) || a.push({ type: "summary", key: p });
    });
    const r = oa().sumOrder || [], l = (p) => p.type === "summary" && r.includes(p.key) ? r.indexOf(p.key) : r.length;
    return r.length ? a.map((p, d) => [p, d]).sort((p, d) => l(p[0]) - l(d[0]) || p[1] - d[1]).map(([p]) => p) : a;
  }
  function vr() {
    var V;
    const t = ((V = i()) == null ? void 0 : V.entities) || {}, e = (E) => Ut(E).device_class, a = Object.keys(M).filter((E) => E.startsWith("sensor.") && e(E) === "battery" || E.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(E))), r = jt.rooms.flatMap((E) => E.plants.map((J) => J.id));
    if (!a.length && !r.length) return null;
    const l = (E) => {
      var C;
      const J = (C = t[E]) == null ? void 0 : C.device_id;
      return !!J && Object.keys(M).some(($) => {
        var xt;
        return $.startsWith("binary_sensor.") && ((xt = t[$]) == null ? void 0 : xt.device_id) === J && e($) === "battery_charging" && M[$].state === "on";
      });
    }, p = (E) => E.startsWith("vacuum.") ? Ut(E).battery_level <= 20 && M[E].state !== "docked" : E.startsWith("binary_sensor.") ? e(E) === "battery" && M[E].state === "on" : parseFloat(M[E].state) <= 20 && !l(E), d = [...a, ...jt.vacuums].filter((E) => M[E] && p(E)), u = [...a.filter((E) => e(E) === "problem" && M[E].state === "on"), ...r.filter((E) => {
      var J;
      return ((J = M[E]) == null ? void 0 : J.state) === "problem";
    })], f = a.filter((E) => M[E].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...d, ...u, ...f])], A = (E) => {
      const J = parseFloat(M[E].state);
      return e(E) === "battery" && Number.isFinite(J) ? J : 101;
    }, k = [...r, ...jt.vacuums, ...[...a].sort((E, J) => A(E) - A(J))].filter((E) => M[E] && !x.includes(E)), R = /* @__PURE__ */ new Map();
    k.forEach((E) => {
      var C;
      const J = ((C = jt.areaOf) == null ? void 0 : C.call(jt, E)) || "";
      R.set(J, [...R.get(J) || [], E]);
    });
    const B = (E) => {
      const J = jt.rooms.findIndex((C) => C.id === E);
      return E === "" ? 1 / 0 : J < 0 ? jt.rooms.length : J;
    }, I = [...R.keys()].sort((E, J) => B(E) - B(J)), P = (E) => {
      var J, C, $, xt;
      return ((J = jt.rooms.find((Tt) => Tt.id === E)) == null ? void 0 : J.name) || ((xt = ($ = (C = i()) == null ? void 0 : C.areas) == null ? void 0 : $[E]) == null ? void 0 : xt.name) || E;
    };
    return {
      value: [d.length && re(d.length, "low battery", "low batteries"), u.length && re(u.length, "problem", "problems"), f.length && re(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...I.map((E) => ({ name: E ? P(E) : I.length > 1 ? "Other devices" : "Devices", ids: R.get(E) }))].filter((E) => E.ids.length)
    };
  }
  const oa = () => v ? kt.home || {} : kt, Xs = (t) => Pu.includes(t) ? (oa().shownSums || []).includes(t) : !(oa().hiddenSums || []).includes(t);
  function Dh(t, e, a) {
    const r = t.flatMap((R) => a(R, /^cover\./)), l = r.filter((R) => {
      var B;
      return ["open", "opening"].includes((B = M[R]) == null ? void 0 : B.state);
    }).length, p = Object.keys(M).filter((R) => R.startsWith("person.")), d = p.filter((R) => {
      var B;
      return ((B = M[R]) == null ? void 0 : B.state) === "home";
    }).length, u = jt.security.openings.filter((R) => M[R]), f = u.filter((R) => M[R].state === "on").length, x = Object.keys(M).filter((R) => R.startsWith("binary_sensor.") && Ut(R).device_class === "moisture"), A = x.filter((R) => M[R].state === "on").length, k = jt.vacuums.filter((R) => M[R]);
    return {
      covers: r.length && { value: l ? l + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: p.length && { value: d ? d + " home" : "Nobody home", groups: [{ name: "People", ids: p }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: x.length && { value: A ? re(A, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: k.length && { value: zt(M[k[0]].state), groups: [{ name: "Vacuum", ids: k }] }
    };
  }
  function Ki(t = !1) {
    var At;
    const e = jt.rooms, a = jt.security, r = (ft, Lt) => ft.actions.filter((Qt) => Lt.test(Qt)), l = (ft) => e.map((Lt) => ({ name: Lt.name, ids: ft(Lt) })).filter((Lt) => Lt.ids.length), p = e.flatMap((ft) => ft.lights), d = p.filter((ft) => {
      var Lt;
      return ((Lt = M[ft]) == null ? void 0 : Lt.state) === "on";
    }).length, u = e.map((ft) => ft.readings.find((Lt) => Ut(Lt).device_class === "temperature")).filter(Boolean).map((ft) => Number(M[ft].state)).filter(Number.isFinite), [f, x] = [Fe(Math.min(...u)), Fe(Math.max(...u))], A = e.flatMap((ft) => r(ft, /^media_player\./)), k = A.filter((ft) => {
      var Lt;
      return ((Lt = M[ft]) == null ? void 0 : Lt.state) === "playing";
    }).length, R = si(), B = R.filter((ft) => ft.severity === "warning" && ft.on).length, I = a.locks.filter((ft) => {
      var Lt;
      return ["unlocked", "jammed", "open"].includes((Lt = M[ft]) == null ? void 0 : Lt.state);
    }).length, P = a.alarms.filter((ft) => {
      var Lt;
      return ((Lt = M[ft]) == null ? void 0 : Lt.state) === "disarmed";
    }).length, V = B ? re(B, "warning", "warnings") : null, E = I ? I + " unlocked" : P ? P + " disarmed" : V ? null : "All secure", J = vr(), C = e.flatMap((ft) => ft.solar), $ = C.find((ft) => ft.endsWith("_power")), xt = {
      light: p.length && { value: d ? d + " on" : "All off", groups: l((ft) => ft.lights) },
      climate: u.length && { value: f === x ? f + "°" : f + " - " + x + "°", groups: l((ft) => [...ft.readings.filter((Lt) => ["temperature", "humidity"].includes(Ut(Lt).device_class)), ...r(ft, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [V, E].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((ft) => ft.ids.length) },
      media_players: A.length && { value: k ? k + " playing" : "No media playing", groups: l((ft) => r(ft, /^media_player\./)) },
      maintenance: J,
      energy: jt.grid && { value: Bo(Number(((At = M[$]) == null ? void 0 : At.state) || 0) * 1e3 + Number(M[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, jt.grid] }] },
      ...Dh(e, l, r)
    }, Tt = [], Nt = R.filter((ft) => ft.severity !== "warning" && ft.on);
    return Nt.length && Tt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: re(Nt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Nt.map((ft) => ft.entity) }] }), Zi().forEach((ft) => {
      ft.type !== "summary" ? Tt.push({ key: "path:" + ft.path, name: ft.label || ft.path, icon: ft.icon || "mdi:link-variant", colour: "", value: "" }) : !ft.hidden && xt[ft.key] && (t || Xs(ft.key)) && Tt.push({ key: ft.key, ...Ci[ft.key], ...xt[ft.key] });
    }), Tt;
  }
  const Eh = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + G(t.key) + '" data-k="sum:' + G(t.key) + '" aria-label="' + G(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Vi() + '"' : t.colour && Ua(t.colour) ? ' style="' + Ua(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Us : "") + '<div class="tfIcon" aria-hidden="true"' + we(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + G(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + G(t.value) + "</div>" : "") + "</div></div>";
  function Vc(t) {
    const e = $t();
    kt = { ...kt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (kt.favHidden || []).filter((a) => a !== t) }, Da(), Pe();
  }
  function Wc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function jc(t, e) {
    if (t.startsWith("path:")) {
      Wc(t.slice(5));
      return;
    }
    us("summary:" + t, e);
  }
  async function Bh() {
    const t = (d) => Promise.resolve().then(() => Y(d)).catch(() => null), [e, a, r, l] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Ru }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), p = (e == null ? void 0 : e.value) || {};
    kt = { favourites: p.favourites ?? null, sources: p.sources, hiddenSums: p.hiddenSums, shownSums: p.shownSums, home: p.home, dash: p.dash, named: p.named, favHidden: p.favHidden, suggest: p.suggest, favSeeded: p.favSeeded, favsTitle: p.favsTitle, areaOrder: p.areaOrder }, Tn = (a == null ? void 0 : a.value) || {}, Vr = (r == null ? void 0 : r.value) || {}, Pi = Array.isArray(l == null ? void 0 : l.entities) ? l.entities : [], rr = null, Object.keys(M).length && Pe(), Ph(), ho = !0, wr();
  }
  const zc = "HomeCore";
  async function Ph() {
    var r, l, p;
    const t = location.pathname.split("/")[1], e = kt.named || [];
    if (!((l = (r = i()) == null ? void 0 : r.user) != null && l.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      kt = { ...kt, named: [...e, t] }, Da();
    };
    try {
      const d = (p = await Y({ type: "lovelace/dashboards/list" })) == null ? void 0 : p.find((x) => x.url_path === t);
      if (!d || d.mode === "yaml") return;
      if (d.title === zc) {
        a();
        return;
      }
      const u = await Y({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((A) => A.cards || [])]);
      if (!f.length || !f.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
      await Y({ type: "lovelace/dashboards/update", dashboard_id: d.id, title: zc }), a();
    } catch {
    }
  }
  let li = null, Js = 0, Qs = !1;
  const Gc = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return Og.includes(e) && (e !== "binary_sensor" || Ds.includes(a) || !!Wu[a]);
  }, tl = (t) => t.startsWith("binary_sensor.") ? Wu[Ut(t).device_class] : null;
  async function Rh() {
    var t;
    if (!(Qs || Date.now() - Js < 30 * 1e3)) {
      Qs = !0, Js = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Gc), a = e.length ? await Y({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        li = Array.isArray(a) ? a.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        li = null;
      }
      Qs = !1, Pe();
    }
  }
  function Hh() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (l) => {
      if (!M[l.entity_id] || !Gc(l.entity_id) || !ol(l.entity_id) || ["unavailable", "unknown"].includes(l.state)) return;
      if (tl(l.entity_id)) {
        const d = e.get(l.entity_id);
        l.state === "on" ? (!d || l.when > d.when + 1) && e.set(l.entity_id, { ...l, alarm: !0, cleared: null }) : d && !d.cleared && l.when > d.when && (d.cleared = l.when);
        return;
      }
      const p = t.get(l.entity_id);
      (!p || l.when > p.when + 1) && t.set(l.entity_id, l);
    };
    [...li || []].sort((l, p) => l.when - p.when).forEach(a);
    const r = li ? Js / 1e3 - 5 : 0;
    return Object.keys(M).forEach((l) => {
      var u;
      const p = M[l], d = p.last_changed ? Date.parse(p.last_changed) / 1e3 : 0;
      d > r && a({ entity_id: l, state: p.state, when: d, context_user_id: (u = p.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((l, p) => p.when - l.when).slice(0, Fg);
  }
  function Nh(t) {
    var r;
    const e = t.context_user_id && Object.keys(M).find((l) => l.startsWith("person.") && Ut(l).user_id === t.context_user_id);
    if (e) return yt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Oh(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Vu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function Ih(t) {
    const e = t.entity_id, a = t.alarm && tl(e), r = yt(e) + " " + (a ? a[0] : Oh(t)), l = a ? co(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + co(t.cleared * 1e3) : "") : [Nh(t), co(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + we(e, Ba(e)) + '></div><button class="tfName" type="button" data-more="' + G(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + G(r + ", " + l + ". More info") + '"><span class="activityRowName">' + G(r) + '</span><span class="activityRowMeta">' + G(l) + "</span></button></div>";
  }
  let Ja = null, $c = 0;
  const Fh = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Uc() {
    var e;
    if (Date.now() - $c < 5 * 60 * 1e3) return;
    $c = Date.now();
    const t = [];
    try {
      const a = ((e = await Y({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (l) => a.filter((p) => p.type === l).flatMap((p) => l === "grid" ? (p.flow_from || []).map((d) => d.stat_energy_from) : [p.stat_energy_from]).filter(Boolean);
      for (const [l, p, d] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!d.length) continue;
        const u = await Promise.all(d.map((f) => Promise.resolve(Y({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: l, name: p, id: d[0], ids: d, value: u.reduce((f, x) => f + x, 0), unit: Ut(d[0]).unit_of_measurement || (l === "gas" || l === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ja = t, Pe();
  }
  let yr = null, Yc = [];
  function el() {
    var p;
    const t = Yc = Ja != null && Ja.length ? Ja : Fh.map(([d, u, f, x]) => {
      if (d === "solar") {
        const k = Object.keys(M).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        k && Number.isFinite(Number(M[k].state)) && (f = Number(M[k].state));
      }
      const A = "sensor.made_up_energy_" + d;
      return M[A] = { entity_id: A, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: d, name: u, id: A, value: f, unit: x };
    });
    Ct.clear(), t.some((d) => d.id === yr) || (yr = t[0].id);
    const e = t.map((d) => {
      const u = Number(d.value).toLocaleString(void 0, { maximumFractionDigits: d.value < 10 ? 2 : 1 }) + " " + d.unit, f = qg[d.key], x = d.id === yr;
      return Ct.set(d.id, { name: d.name, text: u, icon: f }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + G(d.id) + '" aria-pressed="' + x + '" aria-label="' + G(d.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + we("", f, d.name) + '></div><div><div class="activityRowName">' + G(d.name) + '</div><div class="activityRowMeta">' + G(u) + "</div></div></div>";
    }), a = t.find((d) => d.id === yr), r = (((p = ce().opts.energy) == null ? void 0 : p.graph) || "above") === "below", l = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + G(a.id) + '" role="img" aria-label="' + G(a.name) + ', last 24 hours"></svg></div>';
    return un("dash:energy", 0, "Energy today", e, l, Ki().some((d) => d.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Zc(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === yr || (yr = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const l = r.dataset.energyPick === t;
      r.classList.toggle("picked", l), r.setAttribute("aria-pressed", String(l));
    }), a.dataset.graph = t, a.dataset.drawn = "", ka.set("dash:energy", el()), Od(!0));
  }
  const Kc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Xc = /* @__PURE__ */ new Map();
  async function qh(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), l = e.getMinutes() / 60, p = Array.from({ length: 24 }, (u, f) => f <= r ? 0 : null);
    if (!t.ids) {
      const u = Kc[t.key] || Kc.electricity, f = u.map((A, k) => k < r ? A : k === r ? A * l : 0), x = f.reduce((A, k) => A + k, 0) || 1;
      return p.map((A, k) => A == null ? null : t.value * f[k] / x);
    }
    const d = Xc.get(t.id);
    if (d && d.day === a && Date.now() - d.at < 5 * 60 * 1e3) return d.hours;
    try {
      const u = await Y({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((A) => ((u == null ? void 0 : u[A]) || []).forEach((k) => {
        const R = typeof k.start == "number" ? k.start : Date.parse(k.start), B = new Date(R).getHours();
        R >= a && B < r && (p[B] += Number(k.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((A) => Promise.resolve(Y({ type: "recorder/statistic_during_period", statistic_id: A, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
      p[r] = x.reduce((A, k) => A + k, 0);
    } catch {
    }
    return Xc.set(t.id, { at: Date.now(), day: a, hours: p }), p;
  }
  async function Vh(t, e) {
    const a = await qh(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), l = Math.max(60, t.clientHeight || 130), p = 18, d = l - 18, u = r / 24, f = u * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), A = a.map((V) => V ?? 0), k = Math.max(0, ...A), R = (V) => d - (k > 0 ? V / k * (d - p) : 0), B = (V) => V.toLocaleString(void 0, { maximumFractionDigits: V < 10 ? 2 : 1 }) + " " + e.unit, I = (V) => String(V).padStart(2, "0") + ":00", P = k > 0 ? A.indexOf(k) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + l), t.setAttribute("aria-label", e.name + " today by the hour: " + B(e.value) + (P >= 0 ? ", most " + B(k) + " at " + I(P) : "")), t.innerHTML = [p, (p + d) / 2, d].map((V) => '<line x1="0" x2="' + r + '" y1="' + V + '" y2="' + V + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((V, E) => V > 0 ? '<rect x="' + (E * u + (u - f) / 2).toFixed(1) + '" y="' + R(V).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (d - R(V)).toFixed(1) + '" rx="2" fill="' + (E === x ? "var(--primary)" : "var(--text)") + '"' + (E === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((V) => '<text x="' + (V * u).toFixed(1) + '" y="' + (l - 3) + '">' + String(V).padStart(2, "0") + "</text>").join("") + (P >= 0 ? '<text x="0" y="11">Most: ' + G(B(k)) + " at " + I(P) + "</text>" : "");
  }
  function Wh(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, r) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Jc(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    lh(t, a, [e].filter(Boolean));
  }
  let Xi = null, al = 0;
  const ol = (t) => !t.startsWith("light.") || Vg.includes((Se.get(t) || "").toLowerCase()), nl = () => Math.max(2, bn((S == null ? void 0 : S.clientWidth) || 0).n), Qc = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, jh = (t) => Qc(t).slice(0, Fn(t) - 1);
  function td(t) {
    const e = ce().tiles;
    if (e) return e.filter((r) => M[r] || qt(r));
    if (!Xi) {
      const r = (l) => {
        var p;
        return (((p = M[l]) == null ? void 0 : p.state) === "on" ? 1e6 : 0) + (Dn[l] || 0);
      };
      Xi = {
        lights: jt.rooms.flatMap((l) => l.lights).filter((l) => {
          var p;
          return ol(l) && ((p = M[l]) == null ? void 0 : p.state) !== "unavailable";
        }).sort((l, p) => r(p) - r(l) || yt(l).localeCompare(yt(p))),
        climates: jt.rooms.flatMap((l) => l.actions.filter((p) => p.startsWith("climate.")))
      };
    }
    const a = Xi.climates.filter((r) => M[r]).slice(0, t > 3 ? 2 : 1);
    return [...Xi.lights.filter((r) => M[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const rl = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.welcome) ?? !0;
  }, zh = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((r) => {
      var l;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((l = r.attributes) == null ? void 0 : l.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Gh = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = zh();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ed = (t, e, a, r) => (l) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + l + "</div></section>";
  function $h(t, e) {
    var p, d;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? rl() : ce().welcome) ? '<span class="tfGreeting">' + G(Gh()) + "</span>" : "") + G(((d = (p = i()) == null ? void 0 : p.config) == null ? void 0 : d.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ed("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Eh(u) })) }), !v && _t().length && t.push({ key: "areas", html: ht(0) });
    const a = ee();
    if (a.length && t.push({ key: "favs", wrap: ed("tfDash-favs", "favs", "Favourites", Qi()), tiles: a.map((u) => ({ key: "fav:" + u, html: fo(u, { area: !0 }) })) }), v)
      return Uc(), md() && t.push({ key: "dash:energy", html: el() }), al = nl(), td(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + G(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: ve(qt(u), u) }]
      })), t;
    const r = Hh();
    t.push({ key: "dash:act", html: un("dash:act", 0, "Activity", r.length ? r.map(Ih) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: el() });
    const l = nl();
    return al = l, td(l >= 3 ? l : l * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + G(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: Ot(u) ? ve(qt(u), u) : hn(u, !1, jh(u)) }]
    })), Rh(), Uc(), t;
  }
  const ci = 252, ue = 16, Uh = 200, Yh = Math.round(ci * 1.25), Zh = 60, Pa = Zh + ue, Kh = 3, ad = {
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
  }, Xh = ["wx", "favs", "act", "energy", "avg"], od = ["XS", "S", "M", "L", "XL"], nd = od.length, Jh = ["Narrow", "Wide", "Really wide"], Qh = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, rd = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && On(t) ? nd : Math.min(nd, Qc(t).length + 1), Fn = (t) => {
    const e = ce().opts[t] || {}, a = rd(t), r = Number(e.h) || (e.tall ? 5 : Qh[t] || id);
    return Math.max(1, Math.min(a, r));
  }, id = 2, tf = 90, sd = 60, Ra = (t) => {
    var e;
    return ad[t] || (t.startsWith("room:") ? ((e = Pt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : yt(t));
  }, ef = 128;
  let ba = !1, ae = null, ca = null, il = !1, qn = /* @__PURE__ */ new Map(), Ji = 0, gn = 0;
  const Fo = ["title", "sums"], bn = (t) => {
    const e = Math.max(1, Math.floor((t + ue) / (Uh + ue)));
    return { n: e, w: Math.max(1, Math.min(Yh, Math.floor((t - (e - 1) * ue) / e))) };
  }, sl = () => Bt(Pt), af = () => {
    var e;
    const t = new Set(((e = kt.home) == null ? void 0 : e.areasOff) || []);
    return sl().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function of() {
    const t = af();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(ad).filter((e) => {
        var a, r;
        return !["title", ...((a = kt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((r = kt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...cf() ? ["wx"] : [], ...md() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: ln,
      areasOff: []
    };
  }
  const ce = () => v ? of() : ll(), ll = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...kt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = ln.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Vn(t) {
    v || (kt = { ...kt, dash: { ...t, known: ln } }, Da());
  }
  function Wn() {
    const t = (e) => S.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", so.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", so.avg, 2],
      ...ln.map((e) => [e, so[e], Ws[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, l = !1]) => ({ key: e, el: a, span: r, tile: l }));
  }
  const ld = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const l = 2 * a + ue;
      t.el.style.setProperty("--area-open", l + "px");
      const p = Math.ceil((l + Math.max(0, _t().length - 1) * (ef + ue) + ue) / (a + ue));
      return Math.max(Math.min(e, 2), Math.min(p, e - (((r = ce().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, ce().spans[t.key] ?? t.span);
  }, cd = (t) => Fn(t.key), dd = window.matchMedia("(max-width: 620px)"), nf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(_t().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + ue) / Pa));
  };
  function pd(t, e, a = null) {
    const r = ce().cells, l = t.every((u) => !r[u.key] || r[u.key].col + u.cols <= e), p = (u) => r[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), x = (P, V, E, J) => {
        for (let C = V; C < V + J; C++) for (let $ = P; $ < P + E; $++) if (u.has($ + "," + C)) return !1;
        return !0;
      }, A = (P, V, E) => {
        for (let J = E; J < E + P.rows; J++) for (let C = V; C < V + P.cols; C++) u.add(C + "," + J);
        f.set(P.key, { col: V, row: E, cols: P.cols, rows: P.rows });
      }, k = (P, V, E) => {
        for (V = Math.max(0, Math.min(e - P.cols, V)), E = Math.max(0, E); !x(V, E, P.cols, P.rows); ) E++;
        A(P, V, E);
      }, R = (P) => {
        for (let V = 0; ; V++) for (let E = 0; E <= e - P.cols; E++) if (x(E, V, P.cols, P.rows)) {
          A(P, E, V);
          return;
        }
      };
      a && k(a, ae.col, ae.row);
      const B = t.filter((P) => P !== a), I = (P, V) => p(P).row - p(V).row || p(P).col - p(V).col;
      return l ? (B.filter((P) => r[P.key]).sort(I).forEach((P) => k(P, r[P.key].col, r[P.key].row)), B.filter((P) => !r[P.key]).forEach(R), f) : ([...B].sort(I).forEach(R), f);
    })();
  }
  function rf(t, e) {
    const a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), l = (p, d, u) => {
      for (let f = d; f < d + u.rows; f++) for (let x = p; x < p + u.cols; x++) if (a.has(x + "," + f)) return !1;
      return !0;
    };
    return t.forEach((p) => {
      for (let d = 0; ; d++) {
        let u = 0;
        for (; u <= e - p.cols && !l(u, d, p); ) u++;
        if (!(u > e - p.cols)) {
          for (let f = d; f < d + p.rows; f++) for (let x = u; x < u + p.cols; x++) a.add(x + "," + f);
          r.set(p.key, { col: u, row: d, cols: p.cols, rows: p.rows });
          return;
        }
      }
    }), r;
  }
  function cl() {
    const t = ce(), e = new Set(t.hidden), a = Wn().filter((d) => !Fo.includes(d.key));
    let r = qn;
    if (!r.size) {
      const d = t.pegs || 4, u = a.filter((f) => !e.has(f.key));
      u.forEach((f) => {
        f.cols = ld(f, d, ci), f.rows = cd(f) ?? id;
      }), r = pd(u, d);
    }
    const l = (d) => !e.has(d.key) && r.get(d.key) || { row: 1e9, col: 0 };
    a.sort((d, u) => l(d).row - l(u).row || l(d).col - l(u).col);
    const p = (t.phone || []).map((d) => a.find((u) => u.key === d && !e.has(d))).filter(Boolean);
    return [...p, ...a.filter((d) => !p.includes(d))];
  }
  const sf = () => {
    const t = cl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), dl([...Wn().filter((e) => Fo.includes(e.key)), ...t].map((e) => e.el));
  };
  function dl(t) {
    if (ae) return;
    const e = o.activeElement;
    let a = null;
    for (const r of new Set(t.map((l) => {
      for (; l && l.parentElement !== S; ) l = l.parentElement;
      return l;
    }).filter(Boolean))) {
      const l = a ? a.nextSibling : S.querySelector(":scope > [data-tf]");
      if (r !== l)
        try {
          S.moveBefore ? S.moveBefore(r, l) : S.insertBefore(r, l);
        } catch {
          S.insertBefore(r, l);
        }
      a = r;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const xr = (t, e) => Vn({ ...t, cells: e, pegs: bn(S.clientWidth).n });
  function pl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), l = a.getBoundingClientRect(), p = l.right > r.right ? l.right - r.right : l.left < r.left ? l.left - r.left : 0;
    p && e.scrollBy({ left: p, behavior: t ? "smooth" : "auto" });
  }
  function Ke() {
    var J;
    if (requestAnimationFrame(() => pl(!1)), setTimeout(() => pl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * ci + ue, a = h.classList.contains("tfDash");
    v && (ba = !1), h.classList.toggle("tfOverview", v);
    const { n: r, w: l } = e ? { n: 2, w: Math.floor((t - ue) / 2) } : bn(t);
    Ea.classList.add("tfPegs"), Ea.style.setProperty("--peg-n", r), Ea.style.setProperty("--peg-w", l + "px");
    const p = new Set(ce().hidden);
    ln.forEach((C) => {
      var $;
      return ($ = so[C]) == null ? void 0 : $.classList.toggle("tfNotAdded", p.has(C) && !(ae != null && ae.fromTray && ae.key === C));
    }), Ii(), h.classList.toggle("tfBoard", a), h.classList.toggle("tfEditing", a && ba && !e);
    const d = s("dashEditNav");
    !a && Go && El(!1), d && v ? (d.hidden = !a, Go || (d.classList.remove("active"), d.setAttribute("aria-pressed", "false"), d.setAttribute("aria-label", "Edit Home page"), d.title = "Edit", d.innerHTML = Ts)) : d && (d.hidden = !a || e, d.classList.toggle("active", ba), d.setAttribute("aria-pressed", String(ba)), d.setAttribute("aria-label", ba ? "Done editing" : "Edit custom dashboard"), d.title = ba ? "Done" : "Edit", d.innerHTML = ba ? Iu : Ts);
    const u = a ? Wn() : [];
    if ((!a || !v) && S.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((C) => C.remove()), !a) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((C) => {
        C.classList.remove("tfBoardItem", "tfBoardHidden"), C.style.left = C.style.top = C.style.width = C.style.height = "";
      }), (J = S.querySelector(".tfDash-act > .activityRows")) == null || J.style.removeProperty("max-height"), ml(!1), h.classList.contains("tfDash") && sf(), Be();
      return;
    }
    if (v) {
      uf(u, t, e);
      return;
    }
    S.style.setProperty("--peg-w", l + "px");
    const f = new Set(ce().hidden), x = l + ue;
    ae != null && ae.fromTray && f.delete(ae.key), u.forEach((C) => C.el.classList.toggle("tfBoardHidden", f.has(C.key)));
    const A = u.filter((C) => !f.has(C.key) && getComputedStyle(C.el).display !== "none");
    let k = 0;
    A.filter((C) => Fo.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: k + "px" });
      const $ = C.key === "sums" && C.el.querySelector(".tfDash-bar"), xt = $ ? $.querySelectorAll(".activityRow").length : 0;
      $ && ($.style.maxWidth = "none");
      for (let Tt = 1; $ && Tt <= xt && ($.style.setProperty("--bar-cols", String(Math.ceil(xt / Tt))), !($.offsetWidth <= t)); Tt++)
        ;
      $ && ($.style.maxWidth = ""), k += C.el.offsetHeight + ue;
    }), gn = k;
    const R = A.filter((C) => !Fo.includes(C.key));
    R.forEach((C) => {
      C.cols = ld(C, r, l), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === r ? t : C.cols * l + (C.cols - 1) * ue) + "px", C.el.style.height = "", C.rows = cd(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + ue - 6) / Pa)), C.key === "areas" && dd.matches && (C.rows = nf(parseFloat(C.el.style.width)));
    });
    const B = ae && R.find((C) => C.key === ae.key), I = e && cl().map((C) => C.key), P = (C) => I.includes(C.key) ? I.indexOf(C.key) : -1, V = e ? rf([...R].sort((C, $) => P(C) - P($)), r) : pd(R, r, B);
    V.forEach((C) => Object.assign(C, { x: C.cols === r ? 0 : C.col * x, y: gn + C.row * Pa, w: C.cols === r ? t : C.cols * l + (C.cols - 1) * ue, h: C.rows * Pa - ue })), R.forEach((C) => {
      const $ = V.get(C.key);
      C.el.style.height = $.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : Fn(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((xt) => {
        xt.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && $.cols === 1 && r > 1), C.el.dataset.cols = $.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", $.h - tf + "px"), !(C === B && !ae.fromTray) && (C.el.style.left = $.x + "px", C.el.style.top = $.y + "px");
    }), e || (qn = V), dl([...A.filter((C) => Fo.includes(C.key)), ...R.slice().sort((C, $) => V.get(C.key).row - V.get($.key).row || V.get(C.key).col - V.get($.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, $]) => {
      const xt = V.get(C), Tt = xt && S.querySelector($), Nt = Tt == null ? void 0 : Tt.querySelector(":scope > .activityRows"), At = Tt == null ? void 0 : Tt.querySelector(":scope > .activityHeader");
      if (!Nt || !At) return;
      const ft = Nt.getBoundingClientRect().top - Tt.getBoundingClientRect().top, Lt = xt.rows === 1 ? xt.h : Math.floor(xt.h - ft - parseFloat(getComputedStyle(Tt).paddingBottom)), Qt = Math.max(1, Math.floor(Lt / sd));
      Nt.style.setProperty("--fill-gap", (Qt > 1 ? (Lt - Qt * sd) / (Qt - 1) : 0).toFixed(2) + "px"), Nt.style.maxHeight = Lt + "px";
    }), Ji = Math.max(0, ...[...V.values()].map((C) => C.row + C.rows));
    let E = gn + Ji * Pa - ue;
    E = ml(ba && !e, R, V, E, r, l), S.style.height = E + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), u.forEach((C) => fl.observe(C.el)), Od(), Be();
  }
  const qo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, ud = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, hd = () => {
    var t;
    return ud[(t = kt.home) == null ? void 0 : t.areaSize] ? kt.home.areaSize : "s";
  }, ul = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = kt.home) == null ? void 0 : t.areaLayout) ? kt.home.areaLayout : "bento";
  }, fd = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, lf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Qi = () => v ? Vo("favsTitle") : kt.favsTitle !== !1, cf = () => {
    var t;
    return !!((t = kt.home) != null && t.weather && Io());
  }, md = () => {
    var t;
    return !!((t = kt.home) != null && t.energy && (Ja != null && Ja.length));
  }, Vo = (t) => {
    var e;
    return ((e = kt.home) == null ? void 0 : e[t]) ?? lf[t];
  };
  function df() {
    var l;
    const t = Object.values(((l = i()) == null ? void 0 : l.floors) || {}), e = new Set(t.map((p) => p.floor_id)), a = t.map((p) => ({ id: p.floor_id, name: p.name, rooms: Pt.filter((d) => d.floor === p.floor_id) })), r = Pt.filter((p) => !e.has(p.floor));
    return r.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: r }), a;
  }
  const gd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let Le = null, bd = [], di = /* @__PURE__ */ new Map();
  function hl(t) {
    let e = S.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), S.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function pf(t) {
    if (!v || !Go || t.button !== 0 || S.clientWidth < 2 * ci + ue) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Wn().find((u) => u.el === e);
    if (!a || Fo.includes(a.key) || Ot(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), l = di.get(a.key);
    Le = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: l.x, top: l.y, order: [...bd] };
    const p = (u) => {
      const f = u.clientX - Le.x0, x = u.clientY - Le.y0;
      if (!Le.on && Math.hypot(f, x) < 5) return;
      Le.on || (Le.on = !0, e.classList.add("tfDragging"), je() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Le.left + f + "px", top: Le.top + x + "px" });
      const A = u.clientX - r.left, k = u.clientY - r.top + S.scrollTop;
      let R = null, B = 1 / 0;
      if (di.forEach((E, J) => {
        if (J === a.key || !Le.order.includes(J)) return;
        const C = Math.hypot(A - (E.x + E.w / 2), k - (E.y + E.h / 2));
        C < B && (B = C, R = { key: J, b: E });
      }), !R) return;
      const I = Le.order.filter((E) => E !== a.key), P = I.indexOf(R.key) + (A > R.b.x + R.b.w / 2 ? 1 : 0), V = [...I.slice(0, P), a.key, ...I.slice(P)];
      V.join() !== Le.order.join() ? (Le.order = V, Ke()) : hl(di.get(a.key));
    }, d = () => {
      removeEventListener("pointermove", p), removeEventListener("pointerup", d), removeEventListener("pointercancel", d);
      const u = Le;
      Le = null, e.classList.remove("tfDragging"), u.on && Ca({ order: u.order }), Ke(), u.on && !je() && setTimeout(() => mc(e), 340);
    };
    addEventListener("pointermove", p), addEventListener("pointerup", d), addEventListener("pointercancel", d);
  }
  function uf(t, e, a) {
    var Mp;
    const r = new Set(ce().hidden);
    t.forEach((mt) => mt.el.classList.toggle("tfBoardHidden", r.has(mt.key)));
    const l = t.filter((mt) => !r.has(mt.key) && getComputedStyle(mt.el).display !== "none"), p = ue, d = a ? { w: Math.floor((e - p) / 2) } : bn(e), u = Math.min(e, qo.full);
    let f = 0;
    const x = ss();
    h.classList.toggle("hcSumsFit", Cd()), h.classList.toggle("hcFavStrip", x);
    const A = l.filter((mt) => Fo.includes(mt.key) || x && mt.key === "favs");
    A.sort((mt, It) => ["title", "sums", "favs"].indexOf(mt.key) - ["title", "sums", "favs"].indexOf(It.key)), A.forEach((mt) => {
      mt.el.classList.add("tfBoardItem"), mt.el.toggleAttribute("data-narrow", !1), Object.assign(mt.el.style, { width: (mt.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const It = mt.key !== "title" && (mt.el.querySelector(".tfDash-bar>.activityRows") || mt.key === "favs" && mt.el.querySelector(":scope>.activityRows")), Re = It ? It.children.length : 0;
      if (It && (It.classList.remove("hcBarRows"), !a && It.scrollWidth > It.clientWidth + 1))
        for (let Zt = 2; Zt <= Re && (It.classList.add("hcBarRows"), It.style.setProperty("--bar-cols", String(Math.ceil(Re / Zt))), !(It.scrollWidth <= It.clientWidth + 1)); Zt++)
          ;
      f += mt.el.offsetHeight + (mt.key === "title" ? qo.nameGap : qo.sumsGap);
    });
    const k = ["favs", "wx", "energy"], R = (Le == null ? void 0 : Le.order) || ((Mp = kt.home) == null ? void 0 : Mp.order), B = R ? [...R.filter((mt) => k.includes(mt)), ...k.filter((mt) => !R.includes(mt))] : k;
    bd = B;
    const I = l.filter((mt) => k.includes(mt.key) && !(x && mt.key === "favs")).sort((mt, It) => B.indexOf(mt.key) - B.indexOf(It.key));
    di = /* @__PURE__ */ new Map();
    const P = (mt, It) => {
      if (di.set(mt.key, It), Object.assign(mt.el.style, { width: It.w + "px", height: It.h + "px" }), Le != null && Le.on && Le.key === mt.key) {
        hl(It);
        return;
      }
      Object.assign(mt.el.style, { left: It.x + "px", top: It.y + "px" });
    }, V = a ? e : 2 * d.w + p, E = qo.row, J = fd() === "stacked" && !a && I.length > 0;
    let C = 0, $ = 0, xt = f;
    I.forEach((mt) => {
      mt.el.classList.add("tfBoardItem"), mt.el.dataset.rows = 5, mt.el.dataset.cols = 2, mt.el.toggleAttribute("data-narrow", !1), !J && C && C + V > e && (f += $ + p, C = 0, $ = 0);
      let It = E;
      if ((a || mt.key === "favs") && (Object.assign(mt.el.style, { width: V + "px", height: "" }), It = mt.el.offsetHeight), J) {
        P(mt, { x: 0, y: xt, w: V, h: It }), xt += It + p;
        return;
      }
      P(mt, { x: C, y: f, w: V, h: It }), C += V + p, $ = Math.max($, It);
    }), I.length && !J && (f += $ + p);
    const Tt = J ? V + p : 0, Nt = J ? e - V - p : e, At = a ? "l" : hd(), ft = ud[At], Lt = ul(), Qt = Vo("byFloor"), me = d.w, he = ft.h, ye = a ? 2 : Math.max(1, Math.floor((Nt + p) / (me + p))), Fa = new Map(l.filter((mt) => Ot(mt.key)).map((mt) => [mt.key, mt])), qa = (Qt ? df() : [{ id: "", name: "", icon: "", rooms: Pt }]).map((mt) => ({ ...mt, cards: mt.rooms.map((It) => Fa.get("room:" + It.id)).filter(Boolean) })).filter((mt) => mt.cards.length), gs = Lt === "bento", bs = gs && Vo("bentoMixed"), Am = gs && Qt && Vo("bentoBoxes"), Lm = Lt === "columns" && Qt && !a, Yo = 12, xp = (mt) => mt.name ? qo.floorHead + qo.floorGap : 0, xi = (mt, It, Re) => {
      const Zt = /* @__PURE__ */ new Set(), de = [];
      mt.cards.forEach((Jt, vo) => {
        const yn = bs && vo === 0 && It >= 2 && mt.cards.length > 1, Je = yn ? 2 : 1, Zo = yn && !a ? 2 : 1;
        Jt.el.classList.add("tfBoardItem"), Jt.el.dataset.cols = Je, Jt.el.toggleAttribute("data-narrow", !1);
        for (let Zn = 0; ; Zn++) {
          const Kn = [...Array(Math.max(0, It - Je + 1)).keys()].find((ki) => [...Array(Je).keys()].every((ao) => [...Array(Zo).keys()].every((ws) => !Zt.has(Zn + ws + "," + (ki + ao)))));
          if (Kn != null) {
            [...Array(Je).keys()].forEach((ki) => [...Array(Zo).keys()].forEach((ao) => Zt.add(Zn + ao + "," + (Kn + ki)))), de.push({ it: Jt, r: Zn, c: Kn, sc: Je, sr: Zo });
            break;
          }
        }
      });
      const pe = Math.max(0, ...de.map((Jt) => Jt.r + Jt.sr));
      gs && !a && de.forEach((Jt) => {
        for (; Jt.r + Jt.sr < pe && !Zt.has(Jt.r + Jt.sr + "," + Jt.c) && Jt.sc === 1; )
          Zt.add(Jt.r + Jt.sr + "," + Jt.c), Jt.sr++;
      }), de.forEach((Jt) => {
        Jt.it.el.dataset.rows = Math.min(5, Jt.sr * ft.rows), Object.assign(Jt.it.el.style, { width: Jt.sc * Re + (Jt.sc - 1) * p + "px", height: Jt.sr * he + (Jt.sr - 1) * p + "px" });
      });
      const Kt = [...Array(pe)].map(() => he), ke = [];
      let Aa = xp(mt);
      return Kt.forEach((Jt, vo) => {
        ke[vo] = Aa, Aa += Jt + p;
      }), { h: Aa - (pe ? p : 0), places: de.map((Jt) => ({ it: Jt.it, x: Jt.c * (Re + p), y: ke[Jt.r], w: Jt.sc * Re + (Jt.sc - 1) * p, h: Kt.slice(Jt.r, Jt.r + Jt.sr).reduce((vo, yn) => vo + yn, 0) + (Jt.sr - 1) * p })) };
    }, ac = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((mt) => [mt.dataset.floor, mt])), oc = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((mt) => [mt.dataset.floor, mt])), kp = [], Tm = (mt, It, Re, Zt) => {
      if (!mt.name) return;
      let de = ac.get(mt.id);
      ac.delete(mt.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = mt.id, S.appendChild(de)), de.dataset.sig !== mt.name && (de.dataset.sig = mt.name, de.innerHTML = '<h2 class="hcFloorName">' + G(mt.name) + "</h2>"), Object.assign(de.style, { left: It + "px", top: Re + "px", width: Zt + "px" }), kp.push(de);
    }, Dm = (mt, It, Re, Zt, de) => {
      let pe = oc.get(mt.id);
      oc.delete(mt.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), pe.dataset.floor = mt.id, pe.setAttribute("aria-hidden", "true"), S.prepend(pe)), Object.assign(pe.style, { left: It + "px", top: Re + "px", width: Zt + "px", height: de + "px" });
    }, Em = (mt) => parseFloat(getComputedStyle(mt.cards[0].el).paddingLeft) || 0, nc = (mt, It, Re, Zt, de = 0) => {
      Tm(mt, Re + de, Zt, (It.w ?? e) - de), It.places.forEach((pe) => P(pe.it, { x: Re + pe.x, y: Zt + pe.y, w: pe.w, h: pe.h }));
    };
    if (qa.length && I.length && !J && (f += qo.floorTop), Lm) {
      let mt = 0, It = f;
      qa.forEach((Re) => {
        const Zt = { ...xi(Re, 1, me), w: me };
        mt && mt + me > Nt && (f = It + p + qo.floorTop, mt = 0), nc(Re, Zt, Tt + mt, f), It = Math.max(It, f + Zt.h), mt += me + p;
      }), f = It + p;
    } else if (Am) {
      let mt = [{ x0: 0, x1: Nt, t: f }];
      const It = (Zt, de) => Math.max(...mt.filter((pe) => pe.x1 > Zt && pe.x0 < de).map((pe) => pe.t)), Re = (Zt, de, pe) => {
        const Kt = [];
        mt.forEach((ke) => {
          ke.x1 <= Zt || ke.x0 >= de ? Kt.push(ke) : (ke.x0 < Zt && Kt.push({ x0: ke.x0, x1: Zt, t: ke.t }), ke.x1 > de && Kt.push({ x0: de, x1: ke.x1, t: ke.t }));
        }), Kt.push({ x0: Zt, x1: de, t: pe }), mt = Kt.sort((ke, Aa) => ke.x0 - Aa.x0);
      };
      qa.forEach((Zt) => {
        const de = Zt.cards.length + (bs && Zt.cards.length > 1 ? 3 : 0);
        let pe = a ? 2 : Math.min(ye, Math.max(bs && Zt.cards.length > 1 ? 2 : 1, de <= 3 ? de : Math.ceil(de / 2)));
        for (; !a && pe > 1 && pe * me + (pe - 1) * p + 2 * Yo > Nt; ) pe--;
        let Kt = null;
        for (let Je = pe; Je >= (a ? pe : 1); Je--) {
          const Zo = Math.min(me, Math.floor((Nt - 2 * Yo - (Je - 1) * p) / Je)), Zn = { ...xi(Zt, Je, Zo), w: Je * Zo + (Je - 1) * p }, Kn = Zn.w + 2 * Yo, ki = Zn.h + 2 * Yo;
          mt.map((ao) => ao.x0).filter((ao) => ao + Kn <= Nt + 0.5).forEach((ao) => {
            const ws = It(ao, ao + Kn);
            (!Kt || ws < Kt.t - 0.5) && (Kt = { cc: Je, inner: Zo, bw: Kn, h: ki, t: ws, x: ao });
          });
        }
        if (!Kt) {
          const Je = Math.min(me, Nt - 2 * Yo), Zo = xi(Zt, 1, Je);
          Kt = { cc: 1, inner: Je, bw: Je + 2 * Yo, h: Zo.h + 2 * Yo, t: It(0, Nt), x: 0 };
        }
        const ke = { ...xi(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * p }, Aa = Kt.bw, Jt = Kt.h, vo = Kt.x, yn = Kt.t;
        Dm(Zt, Tt + vo, yn, Aa, Jt), nc(Zt, ke, Tt + vo + Yo, yn + Yo, Em(Zt)), Re(vo, Math.min(Nt, vo + Aa + p), yn + Jt + p);
      }), f = Math.max(...mt.map((Zt) => Zt.t));
    } else {
      const mt = (It) => {
        var pe;
        if (!((pe = kt.home) != null && pe.fitTogether) || a) return ye;
        const Re = J ? xt - p - f : null, Zt = (Kt) => {
          const ke = It.cards.length + (bs && It.cards.length > 1 && Kt >= 2 ? 3 : 0), Aa = Math.ceil(ke / Kt);
          return { holes: Aa * Kt - ke, rows: Aa, h: xp(It) + Aa * he + (Aa - 1) * p, w: Kt * me + (Kt - 1) * p };
        }, de = (Kt) => Kt.holes === 0 || gs && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= ye; Kt++) {
          const ke = Zt(Kt);
          if (de(ke) && ke.h <= (Re ?? ke.w)) return Kt;
        }
        for (let Kt = 1; Kt <= ye; Kt++) {
          const ke = Zt(Kt);
          if (ke.h <= (Re ?? ke.w)) return Kt;
        }
        return ye;
      };
      qa.forEach((It, Re) => {
        Re && (f += qo.floorTop);
        const Zt = xi(It, mt(It), me);
        nc(It, { ...Zt, w: Nt }, Tt, f), f += Zt.h + p;
      });
    }
    J && (f = Math.max(f, xt)), ac.forEach((mt) => mt.remove()), oc.forEach((mt) => mt.remove()), Le != null && Le.on || hl(null), S.style.height = Math.max(0, f - p) + "px", dl([...A.map((mt) => mt.el), ...I.map((mt) => mt.el), ...kp, ...qa.flatMap((mt) => mt.cards.map((It) => It.el))]), ml(!1), t.forEach((mt) => [...mt.el.children].forEach((It) => It.toggleAttribute("inert", Go)));
    const rc = S.querySelector(".tfDash-favs>.activityRows");
    rc && (rc.classList.toggle("hcFadeList", !x), gd(rc)), requestAnimationFrame(() => h.classList.add("tfBoardReady")), t.forEach((mt) => fl.observe(mt.el)), Be();
  }
  const ts = () => {
    il || (il = !0, requestAnimationFrame(() => {
      il = !1, Ke();
    }));
  }, fl = new ResizeObserver(() => {
    ae || ts();
  });
  function hf(t, e, a) {
    const r = a + ue, l = t * a + (t - 1) * ue, p = e * Pa - ue, d = ue / 2, u = r / Math.max(1, Math.round(r / (Pa / 4))), f = Pa / 4, x = 6;
    let A = "";
    for (let k = 0; k <= t; k++) for (let R = 0; R <= e; R++) {
      const B = k * r - d, I = R * Pa - d;
      A += "M" + (B - x) + " " + I + "H" + (B + x) + "M" + B + " " + (I - x) + "V" + (I + x);
    }
    return '<svg width="' + l + '" height="' + p + '" viewBox="0 0 ' + l + " " + p + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -d + '" y="' + -d + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -d + '" y="' + -d + '" width="' + (l + ue) + '" height="' + (p + ue) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + A + '"></path></svg>';
  }
  function ml(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, l = 1, p = ci) {
    S.querySelectorAll(".tfEditChips").forEach((A) => {
      (!t || !A.closest(".tfBoardItem")) && A.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((A) => A.remove()), S.querySelectorAll(".tfBoardItem").forEach((A) => [...A.children].forEach((k) => {
      k.classList.contains("tfEditChips") || k.toggleAttribute("inert", t);
    }));
    let d = S.querySelector(".tfBoardCells"), u = S.querySelector(".tfBoardLand");
    if (!t)
      return d == null || d.remove(), u == null || u.remove(), mo(), r;
    const f = Ji + Kh;
    if (d || (d = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), d.setAttribute("aria-hidden", "true"), S.prepend(d)), d.style.top = gn + "px", d.dataset.size !== l + "x" + f + "x" + p && (d.dataset.size = l + "x" + f + "x" + p, d.innerHTML = hf(l, f, p)), r = Math.max(r, gn + f * Pa - ue), e.forEach((A) => {
      const k = A.el;
      !k || k.querySelector(":scope > .tfEditChips") || k.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Li + '</span><button class="tfEditChip" type="button" data-board-more="' + G(A.key) + '" aria-label="' + G(Ra(A.key)) + ' options" aria-haspopup="menu">' + Rg + "</button></div>");
    }), ae && a.has(ae.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(u));
      const A = a.get(ae.key);
      Object.assign(u.style, { left: A.x + "px", top: A.y + "px", width: A.w + "px", height: A.h + "px" });
    } else u == null || u.remove();
    const x = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const A = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((k) => {
        const R = k.getBoundingClientRect(), B = k.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + G(B) + '" aria-label="Hide ' + G(yt(B)) + ' from the dashboard" style="left:' + Math.round(R.right - A.left - 42) + "px;top:" + Math.round(R.top - A.top + (R.height - 32) / 2) + 'px">' + Ou + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let gl = "";
  function bl(t) {
    ba = t, t || (ae = null, Wo = jo = !1, mo()), Ke(), t ? (gl = JSON.stringify(kt), Mr(Yt, "Edit custom dashboard", null)) : gl && JSON.stringify(kt) !== gl && Ha("Changes saved");
  }
  function ff(t, e) {
    var V, E;
    mo();
    const a = qn.get(t), { n: r } = bn(S.clientWidth), l = ce(), p = l.spans[t] ?? (Ot(t) ? 1 : 2);
    if (!a) return;
    const d = a.cols >= r, u = (J, C, $) => '<button type="button" role="menuitem" data-board-act="' + J + '"' + ($ ? " disabled" : "") + ">" + C + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Ra(t) + " options");
    const x = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), A = rd(t), k = Fn(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + od.map((J, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === k) + '" aria-label="' + J + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < A ? "" : " disabled") + ">" + J + "</button>").join("") + "</div></div>", B = Xh.includes(t) || Ot(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Jh.map((J, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(p, r)) + '" aria-label="' + J + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < r ? "" : " disabled") + ">" + J + "</button>").join("") + "</div></div>" : "", I = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + js().map(([J, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (J === $r()) + '" data-board-act="src:' + G(J) + '">' + G(C) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = R + B + I + (t === "energy" ? u("graph", (((V = l.opts.energy) == null ? void 0 : V.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", d || a.col === 0) + u("right", "Move right", d || a.col + a.cols >= r) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (x ? u("remove", "Remove") : u("hide", "Hide")), S.appendChild(f);
    const P = Math.min(a.x + a.w - f.offsetWidth, S.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, P) + "px", top: a.y + 28 + "px" }), ca = { key: t, menu: f, opener: e }, (E = f.querySelector("button:not([disabled])")) == null || E.focus();
  }
  function mo(t) {
    if (!ca) return;
    const { menu: e, opener: a } = ca;
    ca = null, e.remove(), t && (a == null || a.focus());
  }
  const jn = () => Object.fromEntries([...qn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function mf(t, e) {
    var u, f, x;
    if (e === "remove") {
      mo(), gf(t);
      return;
    }
    const a = kt, r = ce(), l = jn(), p = l[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((u = r.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (l[t] = { ...p, col: p.col - 1 }), e === "right" && (l[t] = { ...p, col: p.col + 1 }), e === "up" && (l[t] = { ...p, row: p.row - 1 }), e === "down" && (l[t] = { ...p, row: p.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ae = { key: t, col: l[t].col, row: l[t].row }), xr(r, l), ae && (Ke(), ae = null, xr(ce(), jn()));
    const d = /^[hw]:/.test(e) && !je() && (ca == null ? void 0 : ca.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (d) {
      const A = ca;
      d.parentElement.querySelectorAll("[aria-checked]").forEach((k) => k.setAttribute("aria-checked", String(k === d))), setTimeout(() => {
        ca === A && mo();
      }, He.tabs.dur);
    } else mo();
    e === "graph" && (ka.delete("dash:energy"), Pe()), e.startsWith("src:") && ((f = Ee == null ? void 0 : Ee.get("radar")) == null || f.refresh(), De == null || De.refresh()), e.startsWith("h:") && t.includes(".") && Pe(), Ke(), e !== "hide" ? (x = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Ha(Ra(t) + " hidden", is(a));
  }
  const wd = (t) => {
    var e;
    return ln.includes(t) && !(((e = kt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function wl(t) {
    const e = ce(), a = Ra(t) + wd(t);
    Vn({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Ke(), Ha(a);
  }
  const es = () => ce().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ce().hidden.includes(t));
  function vd(t, e) {
    const a = ce();
    xr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), Pe(), Be();
  }
  const yd = (t) => {
    vd([...es().filter((e) => e !== t), t], jn()), Ha(Ra(t) + " added"), yf(t);
  }, gf = (t) => {
    const e = kt, a = jn();
    delete a[t], vd(es().filter((r) => r !== t), a), Ha(Ra(t) + " removed", is(e));
  };
  let vl = 0;
  function Ha(t, e = null) {
    var d;
    const a = s("toast");
    if (!a) return;
    if (X0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(vl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const r = h.getBoundingClientRect(), l = (d = o.querySelector(".bottomNav")) == null ? void 0 : d.getBoundingClientRect(), p = Yt.classList.contains("open") && !go ? Math.min(r.right, Yt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + p) / 2 + "px", a.style.bottom = (l != null && l.height ? window.innerHeight - l.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), J0(a), clearTimeout(vl), vl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : He.confirm.stay);
  }
  const bf = 700, wf = 1e3, wa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  wa.setAttribute("role", "tooltip"), wa.setAttribute("aria-hidden", "true"), h.appendChild(wa);
  let pi = null, ui = 0, zn = 0, xd = -1 / 0;
  const yl = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, vf = (t) => {
    for (let e = t; e && e !== h; e = e.parentElement) if (yl(e)) return e;
    return null;
  };
  function as(t, e) {
    clearTimeout(ui), clearTimeout(zn);
    const a = () => {
      if (!t.isConnected) return;
      pi = t, wa.textContent = e, wa.hidden = !1;
      const r = t.getBoundingClientRect(), l = wa.getBoundingClientRect(), p = r.top - l.height - 8 >= 8 ? r.top - l.height - 8 : r.bottom + 8;
      wa.style.left = Math.max(8, Math.min(window.innerWidth - l.width - 8, r.left + r.width / 2 - l.width / 2)) + "px", wa.style.top = p + "px";
    };
    !wa.hidden || performance.now() - xd < wf ? a() : ui = setTimeout(a, bf);
  }
  function os() {
    clearTimeout(ui), clearTimeout(zn), wa.hidden || (xd = performance.now()), wa.hidden = !0, pi = null;
  }
  o.addEventListener("pointerover", (t) => {
    var r, l;
    if (t.pointerType === "touch") return;
    if (wa.contains(t.target)) {
      clearTimeout(zn);
      return;
    }
    const e = (l = (r = t.target).closest) == null ? void 0 : l.call(r, ".tfAreaPick");
    if (e) {
      e !== pi ? as(e, e.getAttribute("aria-label")) : clearTimeout(zn);
      return;
    }
    const a = vf(t.target);
    if (a && Xt.names === "scroll" && a.matches(ns)) {
      xl(a);
      return;
    }
    if (a) {
      a !== pi ? as(a, a.textContent.trim()) : clearTimeout(zn);
      return;
    }
    clearTimeout(ui), clearTimeout(zn), zn = setTimeout(os, 120);
  }), o.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      as(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(yl);
    Xt.names === "scroll" && (a.filter((l) => l.matches(ns)).forEach(xl), a = a.filter((l) => !l.matches(ns))), a.length && as(e, a.map((l) => l.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === pi && os();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !wa.hidden && (t.stopPropagation(), os());
  }, !0), window.addEventListener("scroll", () => {
    (!wa.hidden || ui) && os();
  }, { capture: !0, passive: !0 });
  const ns = ".activityRowName,.activityRowMeta", rs = /* @__PURE__ */ new WeakSet();
  function xl(t) {
    var a;
    if (Xt.names !== "scroll" || rs.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    rs.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const r = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (r < 2) {
        rs.delete(t);
        return;
      }
      const l = r / 30 * 1e3, p = l + 1e3 + l;
      t.style.textOverflow = "clip";
      const d = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: l / p },
        { textIndent: -r + "px", offset: (1e3 + l) / p, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: p });
      d.onfinish = d.oncancel = () => {
        t.style.textOverflow = "", rs.delete(t);
      };
    }, 600);
  }
  const kd = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (kd.unobserve(e.target), xl(e.target));
  }), { threshold: 1 });
  let kl = !1;
  new MutationObserver(() => {
    kl || Xt.names !== "scroll" || (kl = !0, setTimeout(() => {
      kl = !1, o.querySelectorAll(ns).forEach((t) => {
        !t.dataset.glided && yl(t) && (t.dataset.glided = "1", kd.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const is = (t) => () => {
    kt = t, Da(), Pe(), Ke(), Be();
  };
  function yf(t) {
    const e = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var d;
      const a = e();
      if (!a) return;
      const r = (d = window.matchMedia) == null ? void 0 : d.call(window, "(prefers-reduced-motion: reduce)").matches, l = a.getBoundingClientRect();
      (l.top < 0 || l.bottom > window.innerHeight) && a.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const p = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: p(55) }, { boxShadow: p(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, xf(t) ? 260 : 0);
  }
  function xf(t) {
    const e = qn.get(t);
    if (!e || !Yt.classList.contains("open") || go) return !1;
    const { n: a, w: r } = bn(S.clientWidth), l = Yt.getBoundingClientRect().left - S.getBoundingClientRect().left, p = (f) => f * (r + ue) + e.cols * r + (e.cols - 1) * ue <= l;
    if (p(e.col)) return !1;
    const d = /* @__PURE__ */ new Set();
    qn.forEach((f, x) => {
      if (x !== t) for (let A = f.row; A < f.row + f.rows; A++) for (let k = f.col; k < f.col + f.cols; k++) d.add(k + "," + A);
    });
    const u = (f, x) => {
      for (let A = x; A < x + e.rows; A++) for (let k = f; k < f + e.cols; k++) if (d.has(k + "," + A)) return !1;
      return !0;
    };
    for (let f = 0; f <= Ji; f++) for (let x = 0; x + e.cols <= a && p(x); x++)
      if (u(x, f))
        return xr(ce(), { ...jn(), [t]: { col: x, row: f } }), Ke(), !0;
    return !1;
  }
  const Md = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Sd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let kr = "page";
  const kf = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + G(r) + '</span></span><span class="hcRowEnd">' + Dc + "</span></button>").join("") + "</section>", Mr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Mf = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + _c + "</button>", Sf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Ml(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let l = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((d) => {
      d.hidden = Sf(d) !== kr, d.classList.toggle("hcFirst", !d.hidden && l), d.hidden || (l = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((d) => {
      const u = d.dataset.trayTab === kr;
      d.classList.toggle("active", u), d.setAttribute("aria-selected", String(u));
    });
    const p = a.querySelector(".tab.active");
    p != null && p.offsetWidth && (r.style.transition = "none", t ? Rs(r, r.offsetLeft, r.offsetWidth, p.offsetLeft, p.offsetWidth) : (r.style.left = p.offsetLeft + "px", r.style.width = p.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Sd.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Ls + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Ls + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', h.appendChild(Yt);
  let go = !1, Wo = !1, jo = !1, hi = !1, da = null, zo = !1;
  const Sl = {}, Qa = (t, e) => {
    if (Sl[t] === e) return;
    Sl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, po(a);
  }, _l = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + G(yt(t)) + '</span><span class="activityRowMeta">' + G(e) + "</span></span>", _f = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + G(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Li + '</span><span class="tfIcon"' + we(t, Ba(t)) + "></span>" + _l(t, e ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + G(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + G(yt(t)) + ' on the dashboard">' + (e ? Ou : Hg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + G(t) + '" aria-label="Remove ' + G(yt(t)) + ' from favourites">' + Lc + "</button>" : "<span></span>") + "</li>";
  function Cl(t, e, a, r) {
    const l = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((d) => e(d) && !a.has(d) && M[d].state !== "unavailable").filter((d) => {
      const u = (yt(d) + " " + (Se.get(d) || "") + " " + d).toLowerCase();
      return l.every((f) => u.includes(f));
    }).sort((d, u) => (Se.get(d) || "~").localeCompare(Se.get(u) || "~") || yt(d).localeCompare(yt(u))).slice(0, 40).map((d) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + G(d) + '"><span class="tfIcon"' + we(d, Ba(d)) + "></span>" + _l(d, Se.get(d) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Cf = "https://www.home-assistant.io/dashboards/", _d = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, xe = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  xe.setAttribute("aria-label", "Edit Home page"), xe.toggleAttribute("inert", !0);
  let Go = !1, Na = !1, Al = "", Ll = null, Sr = "page";
  function Tl(t, e) {
    const a = xe.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), l = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(l != null && l.offsetWidth)) {
      requestAnimationFrame(() => {
        var p;
        return ((p = xe.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : p.offsetWidth) && Tl(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Rs(r, e.left, e.width, l.offsetLeft, l.offsetWidth) : (r.style.left = l.offsetLeft + "px", r.style.width = l.offsetWidth + "px");
  }
  const Gn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + G(_d[t][0]) + '">' + Tc + "</button>", _a = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + G(e) + '" ' + a + "></button>", Dl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + G(t) + '. Use the up and down arrows">' + Li + "</button>", Cd = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, ss = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + G(t) + '">' + r.map(([l, p]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + l + '" aria-pressed="' + (a === l) + '">' + p + "</button>").join("") + "</div></div>", Ad = () => Ki(!0).filter((t) => Ci[t.key]).map((t) => t.key);
  function $n() {
    var f, x, A, k, R, B, I;
    if (!Go) return;
    const t = $t(), e = (P) => '<li class="hcHeRow" data-he-id="' + G(P) + '">' + Dl(yt(P)) + '<span class="tfIcon"' + we(P, Ba(P)) + "></span>" + _l(P, Se.get(P) || Oe(P)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + G(P) + '" aria-label="Take ' + G(yt(P)) + ' off Favourites">' + Lc + "</button></li>", a = (P) => {
      const V = Ci[P];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + G(P) + '"' + (V.colour && Ua(V.colour) ? ' style="' + Ua(V.colour).slice(1) + '"' : "") + ">" + Dl(V.name) + '<span class="tfIcon"' + we("", V.icon, V.name) + '></span><span class="activityRowName">' + G(V.name) + "</span>" + _a(Xs(P), V.name, 'data-he-sum="' + G(P) + '"') + "</li>";
    }, r = ((f = xe.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", l = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], p = new Set(((x = kt.home) == null ? void 0 : x.areasOff) || []), d = (P) => '<li class="hcHeRow" data-he-id="' + G(P.id) + '">' + Dl(P.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="activityRowName">' + G(P.name) + "</span>" + _a(!p.has(P.id), "Show " + P.name + " on Home", 'data-he-area="' + G(P.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Gn("welcome") + _a(rl(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Io() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Gn("weather") + _a(!!((A = kt.home) != null && A.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Ja != null && Ja.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Gn("energy") + _a(!!((k = kt.home) != null && k.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", fd(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + _a(Vo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", ul(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ul() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + _a(Vo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + _a(Vo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", hd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + _a(!!((R = kt.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + _a(((B = kt.home) == null ? void 0 : B.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Gn("favs") + "</div>" + fi("Show as", "data-he-favs-as", ss() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (ss() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + _a(Vo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Na + '">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Na ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + G(r) + '"><ul class="tfTrayList">' + (Na ? Cl(r, (P) => Md.test(P), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Gn("suggest") + _a(No(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Gn("sums") + _a(((I = kt.home) == null ? void 0 : I.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Cd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Ad().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + sl().map(d).join("") + "</ul>"
    };
    xe.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + l.map(([P, V]) => '<button class="tab segBtn' + (P === Sr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (P === Sr) + '" data-he-tab="' + P + '">' + V + "</button>").join("") + "</div>" + kf(l, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[Sr] + "</div>", Tl(!1), po(xe);
  }
  const _r = (t) => {
    kt = { ...kt, ...t }, Da(), Pe(), $n();
  }, Ca = (t) => _r({ home: { ...kt.home || {}, ...t } });
  function El(t) {
    Un(), Go = t, Na = !1, xe.classList.toggle("open", t), xe.toggleAttribute("inert", !t), h.classList.toggle("hcHomeEditing", t), g && S && Ke();
    const e = s("dashEditNav"), a = xe.querySelector(".tfTrayHead");
    e && t && (Ll = e.parentElement, a.appendChild(e)), e && !t && Ll && Ll.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Iu : Ts), t ? (Al = JSON.stringify(kt), $n(), Mr(xe, "Edit Home page", null)) : Al && JSON.stringify(kt) !== Al && Ha("Changes saved");
  }
  xe.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Mf + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', h.appendChild(xe);
  let $o = null;
  const to = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  to.setAttribute("role", "dialog"), h.appendChild(to);
  function Un() {
    $o && ($o.setAttribute("aria-expanded", "false"), $o = null, to.hidden = !0);
  }
  function Ld(t) {
    const e = $o;
    if (Un(), e === t) return;
    const [a, r] = _d[t.dataset.info];
    to.setAttribute("aria-label", a), to.innerHTML = '<div class="hcInfoTitle">' + G(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Cf + '" target="_blank" rel="noopener">Learn more</a>', to.hidden = !1, $o = t, t.setAttribute("aria-expanded", "true");
    const l = t.getBoundingClientRect(), p = to.offsetWidth, d = to.offsetHeight;
    to.style.left = Math.max(8, Math.min(innerWidth - p - 8, l.left + l.width / 2 - p / 2)) + "px", to.style.top = (l.bottom + 8 + d > innerHeight - 8 ? Math.max(8, l.top - 8 - d) : l.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    $o && !t.composedPath().some((e) => e === to || e === $o) && Un();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if ($o) {
        t.stopPropagation();
        const a = $o;
        Un(), a.focus();
        return;
      }
      if (Na) {
        t.stopPropagation(), Na = !1, $n();
        return;
      }
      Go && (t.stopPropagation(), El(!1), (e = s("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Af = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? sl().map((e) => e.id) : Ad(), Td = (t, e) => t.dataset.heList === "favs" ? _r({ favourites: e }) : t.dataset.heList === "areas" ? (_r({ areaOrder: e }), Ke()) : Ca({ sumOrder: e });
  xe.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, l = Af(r), p = l.indexOf(a.dataset.heId), d = p + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= l.length || (l.splice(d, 0, l.splice(p, 1)[0]), Td(r, l), (u = xe.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), xe.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Hl(t, e.closest("[data-he-id]"), "heId", (l) => Td(a, l), (l) => xe.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(l) + '"]'));
  }), xe.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      $n();
      const a = xe.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), xe.addEventListener("click", (t) => {
    var V, E, J, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Ld(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      Sr = r.dataset.heGo, Na = !1, Un(), $n(), Mr(xe, "Edit Home page", Sr, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Un(), Mr(xe, "Edit Home page", null);
      return;
    }
    const l = e.closest("[data-he-tab]");
    if (l) {
      const $ = xe.querySelector(".hcTrayTabs .rubberIndicator"), xt = { left: $.offsetLeft, width: $.offsetWidth };
      Sr = l.dataset.heTab, Na = !1, Un(), $n(), Tl(!0, xt), xe.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Ca({ welcome: !rl() });
      return;
    }
    const p = e.closest("[data-he-card]");
    if (p) {
      const $ = p.dataset.heCard, xt = ["sums", "favs"].includes($) ? ((V = kt.home) == null ? void 0 : V[$]) !== !1 : !!((E = kt.home) != null && E[$]);
      Ca({ [$]: !xt });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      Ca({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      Ca({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      Ca({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const x = e.closest("[data-he-area-layout]");
    if (x) {
      Ca({ areaLayout: x.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      Ca({ fitTogether: !((J = kt.home) != null && J.fitTogether) });
      return;
    }
    const A = e.closest("[data-he-cards-as]");
    if (A) {
      Ca({ cardsAs: A.dataset.heCardsAs });
      return;
    }
    const k = e.closest("[data-he-flag]");
    if (k) {
      const $ = k.dataset.heFlag;
      Ca({ [$]: !Vo($) }), $ === "favsTitle" && Oa();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      _r({ suggest: !No() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const $ = new Set(((C = kt.home) == null ? void 0 : C.areasOff) || []), xt = R.dataset.heArea;
      $.has(xt) ? $.delete(xt) : $.add(xt), Ca({ areasOff: [...$] });
      return;
    }
    const B = e.closest("[data-he-sum]");
    if (B) {
      const $ = B.dataset.heSum, xt = !Xs($), Tt = kt.home || {};
      Ca(Pu.includes($) ? { shownSums: xt ? [...Tt.shownSums || [], $] : (Tt.shownSums || []).filter((Nt) => Nt !== $) } : { hiddenSums: xt ? (Tt.hiddenSums || []).filter((Nt) => Nt !== $) : [...Tt.hiddenSums || [], $] });
      return;
    }
    const I = e.closest("[data-he-remove]");
    if (I) {
      _r({ favourites: $t().filter(($) => $ !== I.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Na = !Na, $n(), Na && xe.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const P = e.closest("[data-he-pick-id]");
    P && (Na = !1, xe.querySelector("[data-he-search]").value = "", _r({ favourites: [...$t(), P.dataset.hePickId] }));
  });
  function Be() {
    var A, k, R;
    const t = ba && h.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && go), Yt.toggleAttribute("inert", !t), t || (zo = !1), Hd(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = go ? _c : Dc, e.setAttribute("aria-expanded", String(!go)), e.setAttribute("aria-label", go ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ce().hidden.filter((B) => !Fo.includes(B) && Wn().some((I) => I.key === B)), r = (B, I) => '<button class="tfTrayCard" type="button" data-tray-card="' + G(B) + '" aria-label="' + G(Ra(B)) + ": drag it onto the board, or press to " + I + '"><span class="tfTrayGrip" aria-hidden="true">' + Li + "</span>" + G(Ra(B)) + "</button>", l = a.filter((B) => !Gr.includes(B)), p = Gr.filter((B) => a.includes(B));
    Qa("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Gn("welcome") + '<button class="switch' + (ce().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ce().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((A = kt.dash) != null && A.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((k = kt.dash) != null && k.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Ml(!1)), Qa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (l.length ? '<div class="tfTrayCards">' + l.map((B) => r(B, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Qa("weather", '<div class="sectionLabel">Weather</div>' + (p.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + p.map((B) => r(B, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Qa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ce().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + zo + '">' + (zo ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(kt.favHidden || []), u = $t(), f = [...u, ...[...d].filter((B) => !u.includes(B) && M[B])];
    Qa("favs", f.map((B) => _f(B, d.has(B), u.includes(B))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !jo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(jo)), jo && Qa("tilepick", Cl(Yt.querySelector("[data-tile-search]").value, (B) => Hr.includes(B.split(".")[0]), new Set(es()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !hi, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(hi));
    const x = new Set(((R = kt.dash) == null ? void 0 : R.areasOff) || []);
    if (Qa("areas", Bt(Pt).map((B) => '<li class="hcHeRow" data-area-id="' + G(B.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + G(B.name) + '. Use the up and down arrows">' + Li + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="activityRowName">' + G(B.name) + '</span><button class="switch' + (x.has(B.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(B.id) + '" aria-label="Show ' + G(B.name) + ' in the Areas card" data-area-on="' + G(B.id) + '"></button></li>').join("")), hi) {
      const B = new Set(es());
      Qa("roompick", Bt(Pt).filter((I) => !B.has("room:" + I.id)).map((I) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + G(I.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + I.id, I.icon || "mdi:texture-box", I.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + G(I.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Wo, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Wo)), Wo && Qa("pick", Cl(Yt.querySelector("[data-fav-search]").value, (B) => Md.test(B), new Set($t()), "data-fav-pick")), Qa("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Qi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Qi() + '" data-fav-title aria-label="Title"></button>'), Qa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (No() ? " on" : "") + '" type="button" role="switch" aria-checked="' + No() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Yn = (t) => {
    kt = { ...kt, ...t }, Da(), Pe(), Be();
  };
  function Dd(t, e) {
    const a = kt, r = new Set(kt.favHidden || []);
    e ? r.delete(t) : r.add(t), Yn({ favHidden: [...r] }), e ? Ha(yt(t) + " put back") : Ha(yt(t) + " hidden", is(a));
  }
  const Lf = (t) => {
    const e = kt;
    Yn({ favourites: $t().filter((a) => a !== t), favHidden: (kt.favHidden || []).filter((a) => a !== t) }), Ha(yt(t) + " removed from favourites", is(e));
  }, Tf = (t) => {
    Yn({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (kt.favHidden || []).filter((e) => e !== t) }), Ha(yt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, r, l;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        kr = e.dataset.trayTab, Ml(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        kr = e.dataset.trayGo, Ml(!1), Mr(Yt, "Edit custom dashboard", kr, Sd.find(([p]) => p === kr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        Mr(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) bl(!1);
      else if (e.hasAttribute("data-info")) Ld(e);
      else if (e.hasAttribute("data-dash-sums"))
        Vn({ ...ll(), hidden: ll().hidden.filter((p) => p !== "sums"), sumsOff: !((a = kt.dash) != null && a.sumsOff) }), Pe(), Be();
      else if (e.hasAttribute("data-dash-welcome")) {
        const p = ce();
        Vn({ ...p, welcome: !p.welcome }), Pe(), Be();
      } else if (e.hasAttribute("data-tray-tuck"))
        go = !go, Be();
      else if (e.hasAttribute("data-phone-toggle"))
        zo = !zo, Be(), zo && ((r = va.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (wl(e.dataset.trayCard), Be());
      else if (e.dataset.favEye) Dd(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Lf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Wo = !Wo, Be(), Wo && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Tf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        jo = !jo, Be(), jo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) yd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        hi = !hi, Be();
      else if (e.dataset.roomPick) yd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const p = new Set(((l = kt.dash) == null ? void 0 : l.areasOff) || []);
        p.has(e.dataset.areaOn) ? p.delete(e.dataset.areaOn) : p.add(e.dataset.areaOn), Vn({ ...ce(), areasOff: [...p] }), Pe(), Be();
      } else e.hasAttribute("data-fav-suggest") ? Yn({ suggest: !No() }) : e.hasAttribute("data-fav-title") && (Yn({ favsTitle: !Qi() }), Oa());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Be();
  });
  const Ed = (t) => {
    kt = { ...kt, areaOrder: t }, Da(), Pe(), Be();
  };
  Yt.addEventListener("keydown", (t) => {
    var d, u, f;
    const e = (u = (d = t.target).closest) == null ? void 0 : u.call(d, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Bt(Pt).map((x) => x.id), l = r.indexOf(a), p = l + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= r.length || (r.splice(p, 0, r.splice(l, 1)[0]), Ed(r), (f = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Hl(t, e.closest("[data-area-id]"), "areaId", Ed, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Uo = window.visualViewport, Bl = () => {
    if (!Uo) return;
    const t = Math.max(0, Math.round(window.innerHeight - Uo.height - Uo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  Uo == null || Uo.addEventListener("resize", Bl), Uo == null || Uo.addEventListener("scroll", Bl), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Bl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, r;
    const e = !!((r = (a = t.target).closest) != null && r.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? jo : Wo) || (t.stopPropagation(), e ? jo = !1 : Wo = !1, Be(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Bd(t, e, a, r) {
    t.preventDefault();
    const l = t.clientX, p = t.clientY;
    let d = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (k) => {
      if (!d) {
        if (Math.hypot(k.clientX - l, k.clientY - p) < 4) return;
        d = e.cloneNode(!0), d.classList.add("tfTrayGhost"), d.style.width = e.offsetWidth + "px", h.appendChild(d);
      }
      d.style.transform = "translate(" + (k.clientX - 24) + "px," + (k.clientY - 24) + "px)";
      const R = !go && k.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const P = S.getBoundingClientRect(), { w: V } = bn(S.clientWidth);
        ae = !R && k.clientX >= P.left && k.clientX <= P.right && k.clientY >= P.top + gn ? { key: r, col: Math.max(0, Math.floor((k.clientX - P.left) / (V + ue))), row: Math.max(0, Math.floor((k.clientY - P.top - gn) / Pa)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ke();
        }));
        return;
      }
      const B = S.querySelector(".tfDash-favs"), I = B == null ? void 0 : B.getBoundingClientRect();
      if (da = null, I && !R && k.clientX >= I.left && k.clientX <= I.right && k.clientY >= I.top && k.clientY <= I.bottom) {
        let P = 1 / 0;
        B.querySelectorAll('[data-k^="fav:"]').forEach((V, E) => {
          const J = V.getBoundingClientRect(), C = Math.hypot(k.clientX - (J.left + J.width / 2), k.clientY - (J.top + J.height / 2));
          C < P && (P = C, da = { i: E, r: J, after: k.clientX > J.left + J.width / 2 });
        }), da || (da = { i: 0, r: null, after: !1 });
      }
      da != null && da.r ? (f.isConnected || h.appendChild(f), Object.assign(f.style, { left: (da.after ? da.r.right : da.r.left) - 2 + "px", top: da.r.top + 8 + "px", height: da.r.height - 16 + "px" })) : f.remove();
    }, A = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), cancelAnimationFrame(u), d == null || d.remove(), f.remove(), a === "card") {
        if (!d) wl(r);
        else if (ae != null && ae.fromTray) {
          Ke();
          const P = Ra(r) + wd(r), V = ce(), E = jn();
          ae = null, xr({ ...V, hidden: V.hidden.filter((J) => J !== r) }, E), Ha(P);
        }
        ae = null, Ke(), Pe(), Be();
        return;
      }
      if (!da) return;
      const k = new Set(kt.favHidden || []);
      k.delete(r);
      const R = $t().filter((P) => P !== r), B = R.filter((P) => !k.has(P)), I = B[Math.min(da.i + (da.after ? 1 : 0), B.length)];
      R.splice(I ? R.indexOf(I) : R.length, 0, r), da = null, Yn({ favourites: R, favHidden: [...k] }), Ha(yt(r) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", A), window.addEventListener("pointercancel", A);
  }
  const Pd = {
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
  }, Rd = 136, Df = 288, Ef = 0.8, Bf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, va = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  va.setAttribute("aria-label", "Phone order"), va.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Lc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', h.appendChild(va);
  let Pl = "";
  function Hd() {
    var u;
    const t = zo && ba && h.classList.contains("tfBoard") && !go;
    if (va.classList.toggle("open", t), va.toggleAttribute("inert", !t), !t) return;
    const e = cl().filter((f) => !ce().hidden.includes(f.key)), a = e.length, r = (f) => Math.round(f * Ef * 10) / 10 + "px", l = (f, x) => {
      const A = f.el.classList.contains("tfDac"), k = f.tile ? A ? Df : Rd : Pd[f.key] || Rd;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + G(f.key) + '" style="min-height:' + r(k) + '" aria-label="' + G(Ra(f.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? we(f.key, Ba(f.key)) : we(f.key, Bf[f.key])) + '></span><span class="tfPhoneName">' + G(Ra(f.key)) + "</span></button>";
    }, p = '<div class="tfPhoneTitle">' + G(((u = S.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Pd.sums) + '"><span class="tfPhoneName">' + G(Ra("sums")) + "</span></div>" + e.map(l).join("");
    if (va.querySelector('[data-phone="note"]').innerHTML = ce().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", p === Pl) return;
    Pl = p;
    const d = va.querySelector('[data-phone="list"]');
    d.innerHTML = p, po(d);
  }
  function Nd(t, e) {
    var a;
    Vn({ ...ce(), phone: t }), Be(), e && ((a = va.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Rl = () => [...va.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Pf(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = va.querySelector(".tfPhoneScreen"), l = Rl().join();
    e.classList.add("moving");
    const p = (u) => {
      const f = r.getBoundingClientRect();
      u.clientY > f.bottom - 40 ? r.scrollTop += 12 : u.clientY < f.top + 40 && (r.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const B = R.getBoundingClientRect();
        return R !== e && u.clientX >= B.left && u.clientX <= B.right && u.clientY >= B.top && u.clientY <= B.bottom;
      });
      if (!x) return;
      const A = x.getBoundingClientRect(), k = x.classList.contains("tile") ? u.clientX < A.left + A.width / 2 : u.clientY < A.top + A.height / 2;
      a.insertBefore(e, k ? x : x.nextSibling);
    }, d = () => {
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), e.classList.remove("moving");
      const u = Rl();
      Pl = "", u.join() !== l ? Nd(u) : Hd();
    };
    window.addEventListener("pointermove", p), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  }
  va.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Pf(t, e);
  }), va.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      zo = !1, Be(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...l } = ce();
      Vn(l), Be();
    }
  }), va.addEventListener("keydown", (t) => {
    var d, u, f, x;
    if (t.key === "Escape") {
      t.stopPropagation(), zo = !1, Be(), (d = Yt.querySelector("[data-phone-toggle]")) == null || d.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (f = (u = t.target).closest) == null ? void 0 : f.call(u, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Rl(), l = r.indexOf(e), p = l + a;
    p < 0 || p >= r.length || ([r[l], r[p]] = [r[p], r[l]], Nd(r, e));
  });
  function Hl(t, e, a, r, l) {
    t.preventDefault();
    const p = He.drag, d = je(), u = 1 + p.lift / 100, f = [...e.parentElement.children].filter((Lt) => Lt.dataset[a]), x = f.indexOf(e), A = f.map((Lt) => Lt.getBoundingClientRect()), k = f.length - 1, R = A[x].height + (f.length > 1 ? A[1].top - A[0].bottom : 0), B = (Lt) => A[Lt].top + A[Lt].height / 2, I = t.clientY, P = A[0].top - A[x].top, V = A[k].top - A[x].top;
    let E = 0, J = 0, C = 0, $ = 1, xt = x, Tt = 0;
    e.classList.add("hcListDragging"), f.forEach((Lt) => {
      Lt !== e && (Lt.style.transition = d ? "none" : "transform " + p.gap + "ms " + Ne.land);
    });
    const Nt = () => {
      if (Tt = requestAnimationFrame(Nt), d) {
        J = E, e.style.transform = "translateY(" + J + "px)";
        return;
      }
      C = fc(C, E - J, p.pull / 100, p.keep / 100), J += C, $ += (u - $) * 0.25;
      const Lt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + J.toFixed(2) + "px) scale(" + ($ * (1 - 0.063 * Lt)).toFixed(4) + "," + ($ * (1 + 0.1 * Lt)).toFixed(4) + ")";
    };
    Tt = requestAnimationFrame(Nt);
    const At = (Lt) => {
      E = Math.max(P, Math.min(V, Lt.clientY - I));
      const Qt = B(x) + E, me = f.filter((he, ye) => ye !== x && B(ye) < Qt).length;
      me !== xt && (xt = me, f.forEach((he, ye) => {
        he !== e && (he.style.transform = x < xt && ye > x && ye <= xt ? "translateY(" + -R + "px)" : xt < x && ye >= xt && ye < x ? "translateY(" + R + "px)" : "");
      }));
    }, ft = () => {
      window.removeEventListener("pointermove", At), window.removeEventListener("pointerup", ft), window.removeEventListener("pointercancel", ft), cancelAnimationFrame(Tt);
      const Lt = e.getBoundingClientRect(), Qt = e.dataset[a];
      f.forEach((qa) => {
        qa.style.transition = "none", qa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const me = f.map((qa) => qa.dataset[a]);
      me.splice(xt, 0, me.splice(x, 1)[0]), r(me);
      const he = l(Qt) || e;
      if (requestAnimationFrame(() => f.forEach((qa) => {
        qa.style.transition = "";
      })), d) return;
      const ye = he.getBoundingClientRect(), Fa = Lt.top + Lt.height / 2 - (ye.top + ye.height / 2);
      he.classList.add("hcListLanding"), he.animate([{ transform: "translateY(" + Fa + "px) scale(" + $ + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: p.slide, easing: Ne.land }).finished.then(() => {
        he.classList.remove("hcListLanding"), mc(he);
      }, () => he.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", At), window.addEventListener("pointerup", ft), window.addEventListener("pointercancel", ft);
  }
  function Rf(t, e) {
    Hl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set($t());
        Sl.favs = null, Yn({ favourites: a.filter((l) => r.has(l)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Bd(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Rf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Bd(t, a, "fav", a.dataset.trayFav);
  });
  function Hf(t) {
    if (!ba || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Wn().find((Nt) => Nt.el === e);
    if (!a || Fo.includes(a.key)) return;
    const r = qn.get(a.key), { w: l } = bn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), mo();
    const p = t.clientX, d = t.clientY;
    let u = !1, f = 0;
    const x = He.drag, A = je();
    let k = 0, R = 0, B = 0, I = 0, P = 0, V = 0, E = A || x.stick === 0, J = 0;
    const C = (Nt, At, ft, Lt) => {
      e.style.transform = "translate(" + B.toFixed(2) + "px," + I.toFixed(2) + "px) rotate(" + Nt.toFixed(2) + "deg) rotate(" + At + "rad) scale(" + ft.toFixed(4) + "," + Lt.toFixed(4) + ") rotate(" + -At + "rad)";
    }, $ = () => {
      if (J = requestAnimationFrame($), A) {
        B = k, I = R, C(0, 0, 1, 1);
        return;
      }
      if (!E) {
        const Qt = Math.min(Math.hypot(k, R) / Math.max(1, x.stick), 1);
        B = k * 0.35, I = R * 0.35, C(0, Math.atan2(R, k), 1 + 0.155 * Qt, 1 - 0.1 * Qt);
        return;
      }
      P = fc(P, k - B, x.pull / 100, x.keep / 100), V = fc(V, R - I, x.pull / 100, x.keep / 100), B += P, I += V;
      const Nt = Math.hypot(P, V), At = Math.min(Nt / 48, 1), ft = Math.max(-5, Math.min(x.tilt, P * 0.32)), Lt = 1 + x.lift / 100;
      C(ft, Math.atan2(V, P), Lt * (1 + 0.1 * At), Lt * (1 - 0.063 * At));
    }, xt = (Nt) => {
      if (k = Nt.clientX - p, R = Nt.clientY - d, !u) {
        if (Math.hypot(k, R) < 4) return;
        u = !0, ae = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), J = requestAnimationFrame($);
      }
      !E && Math.hypot(k, R) > x.stick && (E = !0, P = k * 0.085, V = R * 0.085), ae.col = Math.round((r.x + k) / (l + ue)), ae.row = Math.round((r.y + R - gn) / Pa), f || (f = requestAnimationFrame(() => {
        f = 0, Ke();
      }));
    }, Tt = () => {
      var Fa;
      if (window.removeEventListener("pointermove", xt), window.removeEventListener("pointerup", Tt), window.removeEventListener("pointercancel", Tt), !u) return;
      const Nt = (Dr) => {
        Dr.preventDefault(), Dr.stopImmediatePropagation();
      };
      window.addEventListener("click", Nt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Nt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(J);
      const At = e.getBoundingClientRect(), ft = a.key;
      e.style.transition = "none", Ke(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ae = null, xr(ce(), jn()), Ke(), Pe();
      const Lt = (Fa = Wn().find((Dr) => Dr.key === ft)) == null ? void 0 : Fa.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Lt && (Lt.style.transition = "");
      }), !Lt || A) return;
      Lt.style.transition = "none";
      const Qt = Lt.getBoundingClientRect(), me = At.left + At.width / 2 - (Qt.left + Qt.width / 2), he = At.top + At.height / 2 - (Qt.top + Qt.height / 2);
      Lt.style.zIndex = "20", Lt.animate([{ transform: "translate(" + me + "px," + he + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Ne.land }).finished.then(() => {
        Lt.style.zIndex = "", mc(Lt);
      }, () => {
        Lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", xt), window.addEventListener("pointerup", Tt), window.addEventListener("pointercancel", Tt);
  }
  function Od(t = !1) {
    const e = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = a;
    const l = Yc.find((p) => p.id === e.dataset.graph);
    l ? Vh(e, l).then(() => {
      (t || r) && Wh(e);
    }) : up(e.dataset.graph, e).then(() => {
      t && Jc(e);
    });
  }
  function Id() {
    var f, x, A;
    jt = Ni.model(i(), { madeUp: !v }), wr(), M = jt.states, M[(f = kt.sources) == null ? void 0 : f.grid] && (jt.grid = kt.sources.grid), M[(x = kt.sources) == null ? void 0 : x.alarm] && (jt.security.alarms = [kt.sources.alarm]), ge.forEach((k, R) => {
      const B = M[R], I = (B == null ? void 0 : B.attributes) || {};
      if (!B || Date.now() - k.at > 2 * 60 * 1e3) {
        ge.delete(R);
        return;
      }
      k.pos != null && B.state !== "opening" && B.state !== "closing" && Math.abs(Ya(R) - k.pos) < 1 && delete k.pos, k.tilt != null && Math.abs((I.current_tilt_position ?? -1) - k.tilt) < 1 && delete k.tilt, k.pos == null && k.tilt == null && ge.delete(R);
    });
    const t = [];
    let e = 0;
    const a = Et();
    Pt = a.filter((k) => k.room).map((k) => k.room), Pt.some((k) => k.id === ot) || (ot = ((A = Pt[0]) == null ? void 0 : A.id) || null);
    const r = dt === "weather" ? { key: "weather", name: "Weather" } : dt && a.find((k) => k.key === dt);
    if (r || (dt = null), h.classList.toggle("tfAreaOpen", !!r), h.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), h.classList.toggle("tfDash", !r), Se = /* @__PURE__ */ new Map(), jt.rooms.forEach((k) => [...k.actions, ...k.plugs, ...k.readings, ...k.openings, ...k.solar, ...k.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => Se.set(R, k.name))), !r) return $h(t, Ki());
    if (t.push({ key: "areahead", html: Nf(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const l = r.ids, p = r.room ? r.room.id : r.key, d = r.room;
    d != null && d.solar.length && t.push({ key: "energy:" + d.id, html: Rn(d, ++e) }), d && (d.readings.length || d.power != null) && t.push({ key: "readings:" + d.id, html: Qr(d, ++e) }), d == null || d.plants.forEach((k) => t.push({ key: "plant:" + k.id, html: zi(k, ++e) }));
    const u = [...l, ...((d == null ? void 0 : d.plugs) || []).filter((k) => !l.includes(k))];
    return u.length && t.push({ key: "block:" + p, order: ++e, tiles: u.map((k) => ({ key: k, html: hn(k) })) }), t;
  }
  const Nf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + _c + '</button><div class="settingsTitle">' + G(t.name) + "</div></div>";
  let Fd = 0, qd = null;
  const Vd = (t) => t === "weather" ? so.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function Wd(t) {
    var e, a;
    dt || (Fd = gi().scrollTop, qd = ((e = Vd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), dt = t, t.startsWith("room:") && (ot = t.slice(5)), Oa(), gi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let mi = null;
  function Of(t, e) {
    if (mi == null || mi(), e == null) return;
    const a = gi(), r = performance.now() + 1500, l = ["wheel", "touchstart", "pointerdown", "keydown"];
    let p = 0;
    const d = () => {
      cancelAnimationFrame(p), l.forEach((f) => window.removeEventListener(f, d, !0)), mi = null;
    }, u = () => {
      const f = t();
      if (f != null && f.isConnected) {
        const x = f.getBoundingClientRect().top - e;
        Math.abs(x) > 0.5 && (a.scrollTop += x);
      }
      performance.now() < r ? p = requestAnimationFrame(u) : d();
    };
    l.forEach((f) => window.addEventListener(f, d, { capture: !0, passive: !0 })), mi = d, u();
  }
  function Nl() {
    var a;
    const t = dt;
    dt = null, Oa(), gi().scrollTop = Fd, Of(() => Vd(t), qd);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? so.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const If = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + G(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", jd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function gi() {
    for (let t = h.parentElement || h.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function zd(t) {
    const e = gi(), a = (u) => {
      const f = u.getBoundingClientRect();
      return f.height && f.bottom > 0 && f.top < window.innerHeight;
    }, r = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), l = r == null ? void 0 : r.dataset.k, p = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const d = r != null && r.isConnected ? r : l && S.querySelector('[data-k="' + CSS.escape(l) + '"]');
    d != null && d.isConnected && p != null && (e.scrollTop += d.getBoundingClientRect().top - p);
  }
  function Oa() {
    if (!g || !S) return;
    const t = Id(), e = (l) => {
      var p;
      return (((p = l.closest("[data-k]")) == null ? void 0 : p.dataset.k) || "") + "|" + l.dataset.iconFor + "|" + (l.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((l) => {
      l.firstElementChild && (a.get(e(l)) || a.set(e(l), []).get(e(l))).push(l.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((l) => l.remove()), ka.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((l) => l.tiles ? If(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((p) => ka.set(p.key, p.html)) : ka.set(l.key, l.html)), Hi = jd(t), r.querySelectorAll("[data-icon-for]").forEach((l) => {
      var d;
      const p = !l.firstElementChild && ((d = a.get(e(l))) == null ? void 0 : d.shift());
      p && l.appendChild(p);
    }), S.append(...r.children), jr(t.weather), Co(), fl.disconnect(), Ke(), po(S), Ul(S), In(S), tt(), hp(), Lr(), np(), ep(), requestAnimationFrame(pt);
  }
  const Gd = (t) => {
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
      return (r == null ? void 0 : r.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((d) => e.hasAttribute(d) ? t.setAttribute(d, e.getAttribute(d)) : t.removeAttribute(d)), [...t.style].filter((d) => d.startsWith("--") && !d.startsWith("--tf-")).forEach((d) => t.style.removeProperty(d)), [...e.style].forEach((d) => t.style.setProperty(d, e.style.getPropertyValue(d))), t);
    const l = (d) => {
      var u;
      return ((u = d.dataset) == null ? void 0 : u.iconFor) !== void 0;
    };
    if (l(t) && l(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((d) => {
        e.hasAttribute(d.name) || t.removeAttribute(d.name);
      }), [...e.attributes].forEach((d) => {
        t.getAttribute(d.name) !== d.value && t.setAttribute(d.name, d.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((d) => {
      e.hasAttribute(d.name) || t.removeAttribute(d.name);
    }), [...e.attributes].forEach((d) => t.setAttribute(d.name, d.value));
    const p = [...e.children];
    return [...t.children].forEach((d, u) => Il(d, p[u])), t;
  }
  function $d(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = Gd(t), l = Il(t, a.firstElementChild);
    po(l), Ul(l), In(l), Ol(l, r);
  }
  function Pe() {
    !g || !S || ae || zd(Ff);
  }
  function Ff() {
    if (Ta = !1, !S.querySelector("[data-tf]")) {
      Oa();
      return;
    }
    const t = Id();
    if (jd(t) !== Hi) {
      Oa();
      return;
    }
    const e = (a) => So().some((r) => {
      const l = r.slice(r.indexOf("|") + 1);
      return a === l || a.endsWith(":" + l);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (ka.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && sn) {
        Ta = !0;
        return;
      }
      const l = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      l && (ka.set(r.key, r.html), $d(l, r.html), r.key.startsWith("energy:") && hp());
    })), Lr(), np(), ep(), c(), tt(), De == null || De.update(), Ee == null || Ee.forEach((a) => a.update()), h.classList.contains("tfDash") && ts(), requestAnimationFrame(pt);
  }
  const Cr = {
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
  }, qf = (t) => oo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Vf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + G(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((l) => fo(l, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const St = document.createElement("div");
  St.className = "tfMoreBackdrop", St.hidden = !0, h.appendChild(St);
  const eo = document.createElement("div");
  eo.className = "tfMoreBackdrop tfMoreUnder", eo.hidden = !0, h.insertBefore(eo, St);
  const Fl = (t, e) => {
    for (let a = t; a && a !== St; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if ((r === "auto" || r === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let bi = null;
  St.addEventListener("touchstart", (t) => {
    bi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), St.addEventListener("touchmove", (t) => {
    var l, p;
    if (!bi || t.touches.length > 1 || (p = (l = t.target).closest) != null && p.call(l, "input,textarea,select")) return;
    const e = t.touches[0], a = bi.x - e.clientX, r = bi.y - e.clientY;
    bi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Fl(t.target, r) && t.preventDefault();
  }, { passive: !1 }), St.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Fl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Wf = () => window.innerWidth <= 620;
  let Xe = null;
  St.addEventListener("pointerdown", (t) => {
    const e = St.querySelector(".tfMorePair");
    !Wf() || !e || !e.contains(t.target) || !t.isPrimary || St._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (Xe = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), St.addEventListener("pointermove", (t) => {
    if (!Xe || !t.isPrimary) return;
    const e = t.clientY - Xe.y, a = performance.now();
    if (!Xe.on) {
      if (Math.abs(t.clientX - Xe.x) > 8 || e < -8 || !Xe.grab && Fl(Xe.from, -1)) {
        Xe = null;
        return;
      }
      if (e < 8) return;
      Xe.on = !0;
      try {
        St.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Xe.v = (e - Xe.dy) / Math.max(1, a - Xe.t), Xe.dy = e, Xe.t = a, Xe.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Ud = (t) => {
    if (!Xe || !t.isPrimary) return;
    const e = Xe;
    if (Xe = null, !e.on) return;
    const a = (x) => {
      x.preventDefault(), x.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), l = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || je()) {
      r ? Ql() : e.pair.animate([{ transform: l }, { transform: "none" }], { duration: 320, easing: Ne.spring });
      return;
    }
    const p = j;
    St._closing = !0, St.style.pointerEvents = "none", St.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ne.exit, fill: "forwards" });
    const d = e.pair.animate([{ transform: l }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ne.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, St._closing = !1, St.style.pointerEvents = "", St.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), j === p && Ql());
    };
    d.finished.then(f, f), setTimeout(f, 300);
  };
  St.addEventListener("pointerup", Ud), St.addEventListener("pointercancel", Ud);
  function ql() {
    const t = St.querySelector(".tfMorePair"), e = St.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ql, { passive: !0 }), g && Wr();
  let bo = [];
  const jf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function zf(t) {
    const e = (P, V = "") => '<div class="tfMoreHead">' + (j != null && j.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + G(P) + "</div>" + V + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Cc + "</button></div>", a = (P, V) => '<div class="tfMoreNow"><div class="tfMoreState">' + G(P) + "</div></div>", r = Vf;
    if (t === "favourites") {
      const P = $t(), V = new Set(P), E = [{ name: "Starred", ids: P }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((J) => ({ name: J.name, ids: [...J.actions, ...J.plugs] }))].map((J, C) => C ? { ...J, ids: J.ids.filter(($) => !V.has($)) } : J).filter((J) => J.ids.length);
      return [e("Favourites"), a(P.length ? P.length + " starred" : "None starred"), r(E, { star: !0 }, !0)];
    }
    const l = (P, { name: V = "", alert: E = !1, plain: J = !1 } = {}) => {
      const C = J ? [] : P.filter((Tt) => Hr.includes(Tt.split(".")[0])), $ = P.filter((Tt) => !C.includes(Tt)), xt = (Tt) => Tt.startsWith("vacuum.") && Ut(Tt).battery_level != null ? Ut(Tt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (V ? '<div class="tfMoreGroupName">' + G(V) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Tt) => hn(Tt, !0)).join("") + $.map((Tt) => fo(Tt, { plain: J, alert: E, say: J ? xt(Tt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const P = Ki().find((C) => C.key === t.slice(8));
      if (!P) return null;
      const V = P.key === "light" ? (P.groups || []).flatMap((C) => C.ids) : [], E = V.some((C) => {
        var $;
        return (($ = M[C]) == null ? void 0 : $.state) === "on";
      }), J = V.length ? '<button class="primary" type="button" data-acts="' + hr(V.map((C) => ["light", E ? "turn_off" : "turn_on", C])) + '">' + (E ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(P.name), '<div class="tfMoreNowRow">' + a(P.value) + J + "</div>", ...(P.groups || []).map((C) => l(C.ids, { name: C.name === P.name ? "" : C.name, alert: C.alert, plain: P.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, P, V] = t.split(":"), E = jt.rooms.find(($) => $.id === P), J = E && H(E).find(($) => $.key === V);
      if (!J) return null;
      const C = J.acts ? '<button class="primary" type="button" data-acts="' + hr(J.acts) + '">' + (J.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(E.name + " " + J.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(J.value) + C + "</div>", l(z(E, V))];
    }
    const p = t.split(".")[0];
    M[t];
    const d = Hr.includes(p) || Ai.includes(p) ? w(t) : Vl(t), u = dm(t), f = [...u ? u.pages.map((P) => ({ name: P.name, svg: P.svg, tabs: P.tabs, html: P.space + '<div class="tfMoreCtl"' + Do(t).replace(" data-light", "") + ">" + P.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ra, ...vn(t) ? { tabs: Jd() } : {}, html: Yf(t) + (vn(t) ? cs(t) : "") + (p === "plant" ? bm(t).join("") : "") + d.sections.filter(Boolean).join("") }], { name: "Info", svg: Tc, html: hm(t) }];
    j && j.page == null && (j.page = 0), j && (j.pages = f.length);
    const x = (j == null ? void 0 : j.page) || 0, A = (j == null ? void 0 : j.mode) || "", k = f.length - 1, R = !!(u != null && u.infoButton), B = f.flatMap((P, V) => (R && V === k ? [] : P.tabs || [{ name: P.name, svg: P.svg }]).map((E) => ({ ...E, page: V }))), I = (P) => P.page === x && (P.mode == null || P.mode === A);
    return [
      $f(t, d),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (A && x === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((P) => '<section class="tfMorePage" aria-label="' + P.name + '" data-mode="' + A + '">' + P.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (R ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (B.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (R ? "Views" : "Pages") + '">' + B.map((P) => '<button type="button" role="tab" aria-selected="' + I(P) + '" aria-label="' + P.name + '" title="' + P.name + '" data-more-page="' + P.page + '"' + (P.mode != null ? ' data-more-mode="' + P.mode + '"' : "") + (I(P) ? "" : ' tabindex="-1"') + ">" + P.svg + "</button>").join("") + "</div>" : "") + (R ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (x === k) + '" data-more-page="' + k + '" data-more-toggle>' + Tc + "</button></div>" : "")
    ];
  }
  const Gf = (t, e) => {
    const a = t.split(".")[0], r = M[t], l = r.attributes;
    if (a === "light") return Oe(t);
    const p = a === "climate" ? zt(l.hvac_action || r.state) : a === "humidifier" ? zt(l.action || r.state) : a === "water_heater" ? zt(l.operation_mode || r.state) : a === "fan" && r.state === "on" && l.percentage != null ? l.percentage + "%" : (a === "valve" || a === "cover") && l.current_position != null && r.state !== "closed" ? l.current_position + "%" : Oe(t);
    return [e, p].filter(Boolean).join(" · ");
  };
  function $f(t, e, a) {
    var d, u, f, x, A;
    const r = (d = jt.areaOf) == null ? void 0 : d.call(jt, t), l = r && (((u = jt.rooms.find((k) => k.id === r)) == null ? void 0 : u.name) || ((A = (x = (f = i()) == null ? void 0 : f.areas) == null ? void 0 : x[r]) == null ? void 0 : A.name)) || "", p = e.button ? Ma(t, e) : '<div class="tfIcon"' + we(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + (j != null && j.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + p + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + G(yt(t)) + '</span><span class="activityRowMeta">' + G(Gf(t, l)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Cc + "</button></div>";
  }
  const Uf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Vl(t) {
    var l;
    const e = t.split(".")[0], a = ((l = M[t]) == null ? void 0 : l.state) === "on", r = Ai.includes(e) ? { act: Ht(e, "toggle", t), label: "Turn " + yt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Ht(e, "turn_on", t), label: "Run " + yt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ba(t) };
  }
  function Yf(t) {
    const e = t.split(".")[0];
    if (Uf.includes(e) || e === "light" && !br(t)) {
      const l = Hr.includes(e) ? w(t) : Vl(t);
      return l != null && l.button ? '<div class="tfMoreSpace tfMoreSwitch' + (l.on ? " on" : "") + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + Do(t) + ">" + Ma(t, l) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + G(t) + '"></div></div>';
    if (e === "light" && br(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + G(t) + '"></div></div>';
    const { big: a, lines: r } = um(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (m("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + G(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + G(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([l, p]) => '<div class="tfMoreFact"><span>' + G(l) + "</span><span>" + G(p) + "</span></div>").join("") + "</div></div>";
  }
  const Zf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Kf = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Xf = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], wo = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + G(t) + "</div>" + e + "</div>", Ia = (t, e) => Ye("tfSeg", t, e), Wl = (t, e, a, r, l, p) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + G(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + G(l) + '" data-drag="' + G(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + G(l) + "</output></i>" + (p ? '<span class="tfBarIcon"' + we("", p, r) + "></span>" : "") + "</div>", Ar = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + Ma(t, e) + "</div>", jl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + G(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + G(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, l]) => '<div class="tfMoreFact"><span>' + G(r) + "</span><span>" + G(l) + "</span></div>").join("") + "</div></div>", Yd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + G((j == null ? void 0 : j.code) || "") + '">', ls = (t, e, a, r, l) => ({ label: r, pressed: l, html: null, coded: [t, e, a].join("|") }), Zd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + G(t) + '">' + e.map((a) => '<button type="button" data-coded="' + G(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + G(a.label) + "</button>").join("") + "</div>", Kd = (t, e, a) => Ia(yt(t), [{ label: "Off", act: Ht(e, "turn_off", t), pressed: !a }, { label: "On", act: Ht(e, "turn_on", t), pressed: a }]), wn = /* @__PURE__ */ new Map(), Jf = [0, 33, 67, 100], Qf = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function vn(t, e = "phys") {
    if (!D || !M[t]) return null;
    const a = t.split(".")[0], r = M[t].attributes, l = O === "rocker" ? "rocker" : "toggle";
    return a === "light" ? e === "physon" ? l : Bn(t).some((p) => p !== "onoff") ? "lightdial" : l : a === "climate" ? Number.isFinite(Number(r.temperature)) ? "dial" : null : a === "fan" ? r.percentage != null ? "rotary" : l : ["switch", "input_boolean", "lock", "automation", "siren"].includes(a) ? l : a === "cover" ? r.current_position == null ? l : null : a === "valve" ? "guarded" : a === "scene" || a === "script" || a === "button" ? "push" : null;
  }
  const cs = (t, e = "phys") => '<div class="tfMoreSpace tfPhys" data-pv="' + e + '" data-phys="' + G(t) + '"></div>', zl = (t) => {
    const e = t.split(".")[0], a = M[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Xd = (t, e, a) => (t === "lock" ? Ge("lock", a ? "lock" : "unlock", e) : t === "cover" ? Ge("cover", a ? "open_cover" : "close_cover", e) : Ge(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), tm = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], em = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', Jd = (t) => [{ name: "Physical", svg: em, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: ra, mode: "" }]], am = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function wi(t, e) {
    const a = M[t], r = a.attributes, l = a.state === "on";
    return e === "fader" ? [l ? $a(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [l ? am(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [zl(t)];
  }
  function om(t, e, a = "phys") {
    const r = document.createElement("div");
    r.className = "tfMoreSpace tfPhys";
    const l = t.split(".")[0], p = M[t].attributes, d = { id: t, kind: e, pv: a, el: r, quiet: 0, timers: {} }, u = (R, B = 260, I = "one") => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timers[I]), d.timers[I] = setTimeout(R, B);
    }, f = { camera: _, fill: T === "fill", label: yt(t) };
    if (e === "push" && (d.ctl = new vg(r, { ...f, onChange: () => Ge(l, l === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new Sc(r, { ...f, on: zl(t), onChange: (R) => u(() => Xd(l, t, R), 0) })), e === "toggle" && (d.ctl = new gu(r, { ...f, on: zl(t), labels: tm(l), onChange: (R) => u(() => Xd(l, t, R), 0) })), e === "lightdial") {
      const R = ap(r, f, t, (B, I) => u(() => rm(t, B, I).catch(() => {
      }), B === "bright" ? 260 : 300, B));
      d.ctls = R.ctls, d.sync = R.sync;
    }
    if (e === "fader" && (d.ctl = new yg(r, { ...f, value: wi(t, e)[0], onChange: (R) => u(() => (Math.round(R * 100) ? Ge("light", "turn_on", t, { brightness_pct: Math.round(R * 100) }) : Ge("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [R, B] = wi(t, e), I = Number(p.min_temp), P = Number(p.max_temp);
      d.ctl = new mu(r, { ...f, value: R, now: B ?? R, min: Number.isFinite(I) ? I : 7, max: Number.isFinite(P) ? P : 35, onChange: (V) => u(() => Ge("climate", "set_temperature", t, { temperature: V }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new xg(r, { ...f, positions: Qf, index: wi(t, e)[0], onChange: (R) => u(() => (R ? Ge("fan", "set_percentage", t, { percentage: Jf[R] }) : Ge("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new kg(r, { ...f, on: wi(t, e)[0], onChange: (R) => u(() => Ge("valve", R ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) })), d.ctls || (d.ctls = [d.ctl], d.sync = () => d.ctl.show(...wi(t, e))), d.fit = () => d.ctls.forEach((R) => {
      const B = R.svg.parentElement.getBoundingClientRect();
      R.setBox(B.width, B.height);
    });
    const x = new ResizeObserver(d.fit);
    d.ctls.forEach((R) => x.observe(R.svg.parentElement)), d.ro = x;
    const A = "phys|" + t;
    r.addEventListener("pointerdown", () => {
      ne.add(A), ma(A);
    });
    const k = () => {
      ne.has(A) && (ne.delete(A), Ta && Pe());
    };
    return r.addEventListener("pointerup", k), r.addEventListener("pointercancel", k), d;
  }
  function Qd(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = e.dataset.pv || "phys", l = vn(a, r), p = a + "|" + r;
      if (!l) {
        e.remove();
        return;
      }
      let d = wn.get(p);
      (!d || d.kind !== l) && (d = om(a, l, r), wn.set(p, d)), d.el.dataset.pv = r, e.replaceWith(d.el), d.fit(), tp(d);
    });
  }
  function tp(t) {
    !M[t.id] || performance.now() < t.quiet || t.sync();
  }
  const ep = () => {
    wn.forEach((t, e) => {
      var a;
      t.el.isConnected ? tp(t) : ((a = t.ro) == null || a.disconnect(), wn.delete(e));
    });
  }, nm = {
    bright: () => ({ min: 0, max: 100, step: 1, tick: 2, major: 25, now: 0, labelOf: (t) => t % 50 === 0 ? t + "%" : null, title: "Brightness" }),
    colour: () => ({ min: 0, max: 360, step: 5, tick: 10, major: 3, tint: (t) => "hsl(" + t + ",100%,55%)", labelOf: () => null, title: "Colour" }),
    warm: (t) => {
      const [e, a] = cn(t);
      return { min: e, max: a, step: 50, tick: 100, major: 5, tint: cm, labelOf: () => null, title: "Tone", reverse: !0 };
    }
    // white on the left to orange on the right // no numbers on it (Matt, 25 Nov): the colours say it
  };
  function ap(t, e, a, r) {
    const l = a ? Bn(a) : ["hs", "color_temp"], p = l.some((I) => Ao.includes(I)), d = l.includes("color_temp"), u = (I) => {
      if (!a) return { bright: 64, colour: 30, warm: 3e3 }[I];
      const [P, , V, E] = lm(a);
      return I === "bright" ? Math.round(P * 100) : I === "colour" ? V ?? 30 : E ?? Math.round(cn(a).reduce((J, C) => J + C) / 2);
    };
    let f = p ? "colour" : d ? "warm" : null;
    const x = (I) => ({ ...nm[I](a), value: u(I) }), A = document.createElement("div");
    A.className = "tfPhysLightDial", t.appendChild(A);
    const k = document.createElement("div");
    k.className = "tfPhysCell dial", A.appendChild(k);
    const R = new Mg(k, {
      ...e,
      bright: x("bright"),
      second: f ? x(f) : null,
      onChange: (I, P) => r(I === "bright" ? "bright" : f, P)
    }), B = [R];
    if (p && d) {
      const I = document.createElement("div");
      I.className = "tfPhysCell mini", A.appendChild(I);
      const P = new Sc(I, {
        ...e,
        label: "Outer ring sets colour or tone",
        on: !0,
        labels: ["Colour", "Tone"],
        textSize: 9,
        bare: !0,
        onChange: (V) => {
          f = V ? "colour" : "warm", R.setSecond(x(f));
        }
      });
      B.push(P);
    }
    return { ctls: B, sync: () => {
      a && (R.show("bright", u("bright")), f && R.show("second", u(f)));
    } };
  }
  const rm = (t, e, a) => {
    var r;
    return e === "bright" ? a ? Ge("light", "turn_on", t, { brightness_pct: a }) : Ge("light", "turn_off", t) : e === "colour" ? Ge("light", "turn_on", t, { hs_color: [a % 360, ((r = M[t].attributes.hs_color) == null ? void 0 : r[1]) || 100] }) : Ge("light", "turn_on", t, { color_temp_kelvin: a });
  }, im = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Zm0 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-1 2h2v5h-2Z"/></svg>', sm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Zm5-11h2v10h-2Zm1-2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"/></svg>', lm = (t) => {
    const e = M[t], a = e.attributes, r = e.state === "on", l = a.hs_color ? Math.round(a.hs_color[0] / 5) * 5 : null, p = a.color_temp_kelvin ? Math.round(a.color_temp_kelvin / 50) * 50 : null;
    return [$a(e) / 100, r, l, p];
  }, cm = (t) => {
    const e = t / 100, a = (d) => Math.max(0, Math.min(255, Math.round(d))), r = e <= 66 ? 255 : 329.698727446 * Math.pow(e - 60, -0.1332047592), l = e <= 66 ? 99.4708025861 * Math.log(e) - 161.1195681661 : 288.1221695283 * Math.pow(e - 60, -0.0755148492), p = e >= 66 ? 255 : e <= 19 ? 0 : 138.5177312231 * Math.log(e - 10) - 305.0447927307;
    return "rgb(" + a(r) + "," + a(l) + "," + a(p) + ")";
  };
  function dm(t) {
    const e = pm(t);
    if (e && vn(t) && t.startsWith("light.") && vn(t) === "lightdial") {
      const a = e.pages[0].tabs || [], r = (l) => a.find((p) => p.mode === l);
      e.pages[0].space += cs(t, "phys") + cs(t, "physon"), e.pages[0].tabs = [{ name: "Dial", svg: im, mode: "phys" }, { name: "On and off", svg: sm, mode: "physon" }, r("dac"), r("") || { name: "Sliders", svg: ra, mode: "" }, r("colour")].filter(Boolean);
    } else e && vn(t) && (e.pages[0].space += cs(t), e.pages[0].tabs = Jd(e.pages[0].tabs));
    return e;
  }
  function pm(t) {
    var p, d, u;
    const e = t.split(".")[0], a = M[t], r = a.attributes;
    if (!Xf.includes(e)) return null;
    const l = Hr.includes(e) || Ai.includes(e) ? w(t) : Vl(t);
    if (e === "light") {
      const f = a.state === "on", x = Bn(t), [A, k] = cn(t), R = m("bright", t, f ? $a(a) : 0), B = m("ctf", t, f && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), I = m("huev", t, f && Ao.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), P = x.includes("color_temp"), V = x.some((Qt) => Ao.includes(Qt)), E = br(t), J = (Qt, me, he, ye) => '<div class="tfBar tfVBar ' + Qt + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + G(yt(t) + " " + me.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(he) + '" data-drag="' + Qt + "|" + G(t) + '">' + ye + "</div>", C = (Qt, me, he = "") => '<div class="tfVCol' + he + '">' + me + "</div>", $ = C("Brightness", J("bright", "Brightness", R, '<i style="height:' + R + '%"></i><span class="tfBarIcon"' + we("", "mdi:white-balance-sunny", "Brightness") + "></span>")), xt = B == null ? null : (k - B) / (k - A), Tt = P ? C("Warmth", J("ctf", "Warmth", xt == null ? 0 : xt * 100, xt == null ? "" : '<b style="top:' + Math.round((1 - xt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Nt = V ? C("Colour", J("huev", "Colour", I == null ? 0 : (1 - I / 360) * 100, I == null ? "" : '<b style="top:' + Math.round(I / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", At = '<div class="tfVCols">' + $ + (Tt || Nt ? '<div class="tfVSwap">' + Tt + Nt + "</div>" : "") + "</div>", ft = E ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + G(t) + '"></div></div>' : "", Lt = [V && { name: "Colour", svg: Zf, mode: "colour" }, E && { name: "Dual Axis Controller", svg: Kf, mode: "dac" }, { name: "Sliders", svg: ra, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ra, space: '<div class="tfMoreSpace tfLightSpace">' + At + ft + "</div>", rows: [], tabs: Lt.length > 1 ? Lt : [] }] };
    }
    if (e === "climate") {
      const f = r.target_temp_step || 0.5, x = Number(r.temperature), A = Number(r.target_temp_low), k = Number(r.target_temp_high), R = (V) => Ht("climate", "set_temperature", t, V), B = (V, E, J, C, $) => (E == null ? void 0 : E.length) && wo(V, Ia(V, E.map((xt) => ({ label: zt(xt), act: Ht("climate", C, t, { [$]: xt }), pressed: (J === "state" ? a.state : r[J]) === xt })))), I = Number.isFinite(A) && Number.isFinite(k) && wo("Range", '<div class="tfMoreRange">' + ga("Low", Fe(A) + " °C", R({ target_temp_low: A - f, target_temp_high: k }), R({ target_temp_low: A + f, target_temp_high: k })) + ga("High", Fe(k) + " °C", R({ target_temp_low: A, target_temp_high: k - f }), R({ target_temp_low: A, target_temp_high: k + f })) + "</div>"), P = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: ra,
        space: jl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(x) ? Fe(x) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ga("Target temperature", Fe(x) + " °C", R({ temperature: x - f }), R({ temperature: x + f })),
          I,
          B("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          B("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          B("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          B("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(P) && r.min_humidity != null && wo("Humidity", ga("Target humidity", P + "%", Ht("climate", "set_humidity", t, { humidity: P - 1 }), Ht("climate", "set_humidity", t, { humidity: P + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", x = m("fan", t, f && Number(r.percentage) || 0), A = r.percentage != null;
      return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: A ? [
        Wl("fan", t, x, yt(t) + " speed", x + "%", "mdi:fan"),
        r.oscillating != null && wo("Oscillate", Ia("Oscillate", [{ label: "Off", act: Ht("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Ht("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && wo("Direction", Ia("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([k, R]) => ({ label: R, act: Ht("fan", "set_direction", t, { direction: k }), pressed: r.direction === k })))),
        ((p = r.preset_modes) == null ? void 0 : p.length) && wo("Preset", Ia("Preset", r.preset_modes.map((k) => ({ label: zt(k), act: Ht("fan", "set_preset_mode", t, { preset_mode: k }), pressed: r.preset_mode === k }))))
      ] : [Kd(t, "fan", f)] }] };
    }
    if (e === "humidifier") {
      const f = Number(r.humidity);
      return { pages: [{ name: "Control", svg: ra, space: jl(String(r.current_humidity), "%", [["Target", Number.isFinite(f) ? f + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(f) && ga("Target humidity", f + "%", Ht("humidifier", "set_humidity", t, { humidity: f - 1 }), Ht("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((d = r.available_modes) == null ? void 0 : d.length) && wo("Mode", Ia("Mode", r.available_modes.map((x) => ({ label: zt(x), act: Ht("humidifier", "set_mode", t, { mode: x }), pressed: r.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const f = Number(r.temperature), x = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ra, space: jl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(f) ? String(f).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(f) && ga("Target temperature", f + " °C", Ht("water_heater", "set_temperature", t, { temperature: f - x }), Ht("water_heater", "set_temperature", t, { temperature: f + x })),
        ((u = r.operation_list) == null ? void 0 : u.length) && wo("Mode", Ia("Mode", r.operation_list.map((A) => ({ label: zt(A), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: A }), pressed: (r.operation_mode || a.state) === A })))),
        r.away_mode != null && wo("Away", Ia("Away", [{ label: "Off", act: Ht("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Ht("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const f = [...qu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , k]) => !k || be(t, k)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], A = '<div class="tfMoreSpace tfMoreKeypad">' + Yd() + '<div class="tfKeypad">' + x.map((k) => '<button type="button" data-key="' + k + '"' + (k === "back" ? ' aria-label="Delete"' : "") + ">" + (k === "clear" ? "Clear" : k === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : k) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ra, space: A, rows: [Zd(yt(t), f.map(([k, R, B]) => ls("alarm_control_panel", B, t, R, a.state === k)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: [Ia(yt(t), [{ label: "Open", act: Ht("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Ht("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", x = Pn(t), A = Yr(t);
      return { pages: [{ name: "Control", svg: ra, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + G(t) + '"></div></div>', rows: [
        be(t, Ac) && ai(t, x),
        A != null && wo("Tilt", Wl("tiltp", t, m("tiltp", t, A), yt(t) + " tilt", Math.round(m("tiltp", t, A)) + "%")),
        Ia(yt(t), [be(t, Tu) && { label: "Open", act: Ht("cover", "open_cover", t), disabled: x >= 100 && !f }, be(t, Eu) && { label: "Stop", act: Ht("cover", "stop_cover", t) }, be(t, Du) && { label: "Close", act: Ht("cover", "close_cover", t), disabled: x <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: [
        Yd(),
        Zd(yt(t), [ls("lock", "lock", t, "Lock", a.state === "locked"), ls("lock", "unlock", t, "Unlock", a.state === "unlocked"), be(t, Fu) && ls("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const f = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: [Ia(yt(t), [{ label: "Open", act: Ht("valve", "open_valve", t), pressed: f }, { label: "Close", act: Ht("valve", "close_valve", t), pressed: !f }])] }] };
      const x = m("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: [
        Wl("valve", t, x, yt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Ia(yt(t), [{ label: "Open", act: Ht("valve", "open_valve", t) }, be(t, 8) && { label: "Stop", act: Ht("valve", "stop_valve", t) }, { label: "Close", act: Ht("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ra, space: Ar(t, l), rows: [Kd(t, e, a.state === "on")] }] };
  }
  function um(t) {
    var A;
    const e = M[t], a = Ut(t), r = t.split(".")[0], l = (((A = Cr[r]) == null ? void 0 : A.call(Cr, a)) || []).filter(([, k]) => k != null && k !== ""), p = (k) => {
      const R = l.findIndex(([B]) => B === k);
      return R < 0 ? null : l.splice(R, 1)[0][1];
    }, d = (k) => {
      const R = String(k).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(k), ""];
    }, u = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    r === "light" ? (p("Brightness"), f = e.state === "on" && Eo(t) ? [String($a(e)), "%"] : u()) : r === "climate" ? f = d(p("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (p("Position"), f = a.current_position != null ? [String(Ya(t)), "%"] : u()) : r === "humidifier" ? f = d(p("Current humidity") || e.state) : r === "vacuum" ? f = d(p("Battery") || e.state) : r === "plant" ? f = d(p("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? f = u() : f = d(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = l.length ? l.slice(0, 4) : [["State", Oe(t)]];
    return { big: f, lines: x };
  }
  function hm(t) {
    var x, A, k, R, B, I, P;
    const e = M[t], a = i(), r = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], l = r != null && r.device_id ? (A = a == null ? void 0 : a.devices) == null ? void 0 : A[r.device_id] : null, p = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + G(t) + '" role="img" aria-label="' + G(yt(t)) + ', last 24 hours"></svg></div>', d = (k = jt.areaOf) == null ? void 0 : k.call(jt, t), u = d && (((R = jt.rooms.find((V) => V.id === d)) == null ? void 0 : R.name) || ((I = (B = a == null ? void 0 : a.areas) == null ? void 0 : B[d]) == null ? void 0 : I.name)) || "", f = [
      ...((P = Cr[t.split(".")[0]]) == null ? void 0 : P.call(Cr, Ut(t))) || [],
      ["Changed", e.last_changed && Ys(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", l && (l.name_by_user || l.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, V]) => V != null && V !== "");
    return p + '<div class="tfMoreRows">' + f.map(([V, E]) => '<div class="tfMoreRow"><span>' + G(V) + "</span><span>" + G(E) + "</span></div>").join("") + "</div>" + qf(t) + (l ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + G(r.device_id) + '"><span>Device page</span>' + Dc + "</button>" : "");
  }
  const fm = () => "";
  let Gl = "";
  function $l(t) {
    var e;
    j && (j.details = t, Lr(), (e = St.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ds = (t) => {
    const e = M[t], a = Ya(t), r = Pn(t);
    return { kind: kc(e), name: yt(t), text: Oe(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Yr(t) ?? 100, canSet: be(t, Ac) };
  };
  function Ul(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, r = e.dataset.artKey || "more:" + a;
      let l = Qe.get(r);
      l || (l = dg({ onMove: (p) => vi(a, p), onSet: (p) => {
        vi(a, p), yi("pos", a);
      } }), l.coverId = a, Qe.set(r, l)), e.replaceWith(l.el), l.update(ds(a));
    });
  }
  const op = (t) => [...Qe.values()].filter((e) => e.coverId === t), Yl = () => Qe.forEach((t) => {
    M[t.coverId] && t.update(ds(t.coverId));
  }), np = () => {
    Qe.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Qe.delete(e));
    }), Yl();
  };
  function Lr() {
    var p, d;
    if (!j || !(jf(j.id) || M[j.id])) {
      St.hidden = !0;
      return;
    }
    if (So().some((u) => u.endsWith("|" + j.id))) {
      Ta = !0, Yl();
      return;
    }
    const t = zf(j.id), e = St.querySelector(".tfMore");
    if (!t) {
      hs();
      return;
    }
    const a = Gd(St), r = fm(j.id), l = j.frame ? j.frame.wide : j.id.startsWith("summary:") || j.id.startsWith("group:");
    if (St.hidden || !e || t.length !== bo.length || e.classList.contains("wide") !== l) {
      const u = Xl ? j.scroll || 0 : !St.hidden && e ? e.scrollTop : 0;
      if (St.innerHTML = '<div class="tfMorePair' + (St.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (l ? " wide" : "") + '"' + (j.frame ? ' style="height:' + j.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Gl = r, St.classList.toggle("wide", l), St.hidden = !1, ql(), Ul(St), Qd(St), In(St), po(St), St.querySelectorAll("[data-day]").forEach((f) => dp(f.dataset.day, f, j.at)), sp(St), u && (St.querySelector(".tfMore").scrollTop = u), rp(), Ol(St, a), !St.contains(o.activeElement)) {
        const f = St.querySelector("[data-more-close]");
        (p = f != null && f.offsetParent ? f : St.querySelector(".tfMore")) == null || p.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var R, B;
        if (u === bo[f] || u.includes("data-cover-art") || e.children[f].contains((B = (R = o.activeElement) == null ? void 0 : R.matches) != null && B.call(R, "input,select") ? o.activeElement : null)) return;
        if (So().some((I) => e.children[f].querySelector('[data-drag="' + CSS.escape(I) + '"]'))) {
          Ta = !0;
          return;
        }
        const x = document.createElement("div");
        x.innerHTML = u;
        const A = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((I) => I.scrollTop), k = Il(e.children[f], x.firstElementChild);
        k.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((I, P) => {
          A[P] && (I.scrollTop = A[P]);
        }), po(k), sp(k), Qd(k), In(k);
      }), r !== Gl) {
        const u = St.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = r), Gl = r;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || dp(u.dataset.day, u, j.at);
      }), rp(), St.contains(o.activeElement) || Ol(St, a);
    }
    (d = St.querySelector(".tfMorePair")) == null || d.classList.toggle("details", !!(j.details && r)), bo = t, Yl();
  }
  function rp() {
    const t = St.querySelector("[data-more-pages]");
    !t || !j || (t.scrollTo({ left: (j.page || 0) * t.clientWidth, behavior: "instant" }), Kl(), Zl(t));
  }
  function Zl(t) {
    const e = t.children[(j == null ? void 0 : j.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Kl() {
    var e;
    const t = (j == null ? void 0 : j.page) || 0;
    St.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (j.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = St.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!j.mode && t === 0);
  }
  function mm(t, e) {
    var r, l;
    const a = St.querySelector("[data-more-pages]");
    !a || !j || (j.page = Math.max(0, Math.min((j.pages || 2) - 1, t)), a.scrollTo({ left: j.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Kl(), Zl(a), e && ((l = St.querySelector('.tfMoreDots [aria-selected="true"]')) == null || l.focus({ preventScroll: !0 })));
  }
  function ps(t, e, a) {
    j && (e != null && e !== (j.mode || "") && (j.mode = e, St.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), mm(t, a));
  }
  let Tr = null;
  St.addEventListener("touchstart", (t) => {
    var a, r, l, p;
    const e = t.touches[0];
    Tr = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((p = (l = t.target).closest) != null && p.call(l, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), St.addEventListener("touchend", (t) => {
    if (!Tr || !j || (j.page || 0) !== 0 || !St.querySelector("[data-more-mode]")) {
      Tr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Tr.x, r = e.clientY - Tr.y;
    if (Tr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const l = [...St.querySelectorAll(".tfMoreDots [data-more-mode]")].map((d) => d.dataset.moreMode), p = l.indexOf(j.mode || "");
    a > 0 && p > 0 ? ps(0, l[p - 1]) : a < 0 && j.mode && p < l.length - 1 && ps(0, l[p + 1]);
  }, { passive: !0 });
  let ip = 0;
  St.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !j || (clearTimeout(ip), ip = setTimeout(() => {
      if (!j) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (j.page || 0) && (j.page = r, Kl(), Zl(e));
    }, 80));
  }, !0), St.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && j && (j.code = t.target.value);
  }), St.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!j || !(e || a)) return;
    const r = St.querySelector("[data-code]");
    if (e) {
      const f = e.dataset.key, x = j.code || "";
      j.code = f === "clear" ? "" : f === "back" ? x.slice(0, -1) : (x + f).slice(0, 12), r && (r.value = j.code);
      return;
    }
    const [l, p, d] = a.dataset.coded.split("|"), u = j.code;
    j.code = "", r && (r.value = ""), Ge(l, p, d, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    j && Lr();
  }, 15 * 1e3);
  function us(t, e) {
    var l, p;
    const a = !!(j && e && St.contains(e)), r = a && St.querySelector(".tfMore");
    if (a && (j.scroll = r.scrollTop), a && !j.under) {
      const d = St.querySelector(".tfMorePair"), u = { more: j, parts: bo, opener: e };
      d.classList.add("still"), d.style.transform = "", d.inert = !0, eo.innerHTML = "", eo.appendChild(d), eo.classList.toggle("wide", St.classList.contains("wide")), eo.hidden = !1, St.hidden = !0, St.innerHTML = "", j = { id: t, opener: e, back: null, frame: null, under: u, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null, mode: vn(t) ? "phys" : "" }, Jl();
      return;
    }
    j = { id: t, opener: a ? j.opener : e, back: a ? j : null, frame: a ? j.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? j.under : null, at: Number((p = e == null ? void 0 : e.dataset) == null ? void 0 : p.at) || null, mode: vn(t) ? "phys" : "" }, Jl();
  }
  let Xl = !1;
  function Jl() {
    bo = [], Xl = !St.hidden, Qe.forEach((t, e) => {
      e !== j.id && St.contains(t.el) && (t.destroy(), Qe.delete(e));
    }), Lr(), Xl = !1;
  }
  function hs() {
    if (!j) return;
    const t = j;
    Z0(St, () => {
      j === t && Ql();
    });
  }
  function Ql() {
    var r, l, p, d, u, f, x, A;
    const t = j == null ? void 0 : j.opener, e = j == null ? void 0 : j.under;
    j = null, Qe.forEach((k, R) => {
      St.contains(k.el) && (k.destroy(), Qe.delete(R));
    }), aa.forEach((k, R) => {
      /^more2?:/.test(R) && aa.delete(R);
    }), St.hidden = !0, St.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const k = eo.firstElementChild;
      j = e.more, bo = e.parts, k && (k.inert = !1, St.appendChild(k)), St.classList.toggle("wide", eo.classList.contains("wide")), eo.hidden = !0, eo.innerHTML = "", St.hidden = !1;
      const R = St.querySelector(".tfMore");
      R && (R.scrollTop = j.scroll || 0), Lr(), (l = (r = e.opener) != null && r.isConnected ? e.opener : St.querySelector("[data-more-close]")) == null || l.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.more ? (d = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((A = S.querySelector("[data-favs-edit]")) == null || A.focus(a));
  }
  const gm = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function bm(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, l]) => {
      const p = gm[r], d = a + p;
      if (!p || !M[d] || !er[p]) return "";
      const u = Ut(d).unit_of_measurement || "", [f, x] = er[p], A = l === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + G(yt(d)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + G(d) + '" data-guide="' + (A ? f : x) + '" data-guide-word="' + G("Wants " + (A ? "" : "up to ") + (A ? f : x).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (A ? " or more" : "")) + '" role="img" aria-label="' + G(yt(d)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const sp = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => up(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Jc(e)));
  function tc(t, e, a, r = {}) {
    const l = e.map((V) => V[1]).concat(r.guide != null ? [r.guide] : []), p = r.zero ? 0 : Math.min(...l), d = Math.max(...l), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), x = 8, A = f - 20, k = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, B = (V) => Math.max(0, Math.min(u, (V - k) / R * u)), I = (V) => d === p ? (x + A) / 2 : A - (V - p) / (d - p) * (A - x);
    let P = "M" + B(e[0][0]).toFixed(1) + " " + I(e[0][1]).toFixed(1);
    if (e.length > 2) P = ih(e.map((V) => [B(V[0]), I(V[1])]));
    else for (let V = 1; V < e.length; V++) P += r.smooth ? "L" + B(e[V][0]).toFixed(1) + " " + I(e[V][1]).toFixed(1) : "H" + B(e[V][0]).toFixed(1) + "V" + I(e[V][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = sh(u, x, A) + '<path d="' + P + "V" + A + "H" + B(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + P + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + He.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + I(r.guide).toFixed(1) + '" y2="' + I(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (I(r.guide) < 20 ? I(r.guide) + 14 : I(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + G(r.guideWord || "") + "</text>" : "");
  }
  const lp = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, wm = (t, e) => {
    const a = t.split(".")[0];
    return lp[a] ? lp[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, vm = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ds.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, cp = /* @__PURE__ */ new Map();
  let ym = 0;
  async function xm(t) {
    var l;
    let e = cp.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let p = [];
      if (oo(t) && Number.isFinite(Number((l = M[t]) == null ? void 0 : l.state))) p = pp(t).map(([d, u]) => [d, String(u)]);
      else try {
        const d = await Y({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((d == null ? void 0 : d[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      p.length || (p = (li || []).filter((d) => d.entity_id === t).map((d) => [d.when * 1e3, String(d.state)])), e = { at: Date.now(), pts: p }, cp.set(t, e);
    }
    const a = M[t], r = e.pts.slice().sort((p, d) => p[0] - d[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function dp(t, e, a) {
    const r = await xm(t);
    if (!e.isConnected) return;
    const l = r.map(([C, $]) => [C, Number($)]);
    if (r.length > 1 && l.every(([, C]) => Number.isFinite(C))) {
      tc(e, l, yt(t) + ", last 24 hours");
      return;
    }
    const p = Date.now(), d = p - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, x = (C) => Math.max(0, Math.min(u, (C - d) / 864e5 * u)), A = [];
    let k = null;
    r.forEach(([C, $]) => {
      const xt = wm(t, $);
      xt && k == null ? k = Math.max(C, d) : !xt && k != null && (A.push([k, Math.max(C, d)]), k = null);
    }), k != null && A.push([k, p]);
    const R = tl(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", B = vm(t), I = "tfDayClip" + ++ym, P = A.map(([C, $]) => B + ($ >= p - 1e3 && C <= d + 1e3 ? " all day" : $ >= p - 1e3 ? " since " + co(C) : C <= d + 1e3 ? " until " + co($) : " " + co(C) + "–" + co($)));
    let V = "", E = -1 / 0;
    A.forEach(([C], $) => {
      const xt = P[$].length * 5.4, Tt = Math.min(x(C), u - xt);
      Tt < E + 8 || (V += '<text x="' + Tt.toFixed(1) + '" y="10">' + G(P[$]) + "</text>", E = Tt + xt);
    });
    let J = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let $ = new Date(p).setHours(C, 0, 0, 0);
      $ > p && ($ -= 864e5), x($) > 8 && x($) < u - 34 && (J += '<text x="' + x($).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", yt(t) + ", last 24 hours: " + (P.length ? P.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + I + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + V + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + I + ')">' + A.map(([C, $]) => '<rect x="' + x(C).toFixed(1) + '" y="18" width="' + Math.max(2, x($) - x(C)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= d ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + J;
  }
  function pp(t) {
    var r;
    const e = Number((r = M[t]) == null ? void 0 : r.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const l = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), p = Math.max(1, a - l);
      return [...Array(49)].map((d, u) => l + p * u / 48).map((d) => [d, Math.round(e * Math.pow((d - l) / p, 1.3) * 100) / 100]);
    }
    if (oo(t) && t.endsWith("_moisture")) return [...Array(48)].map((l, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - p / 48, 1.2)) * 10) / 10]);
    if (oo(t) && t.endsWith("_light")) {
      const l = (d) => {
        const u = new Date(d).getHours() + new Date(d).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, p = (d) => 0.8 + 0.2 * l(d);
      return [...Array(48)].map((d, u) => a - (48 - u) * 30 * 60 * 1e3).map((d) => [d, Math.round(e * p(d) / p(a))]);
    }
    return [...Array(48)].map((l, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(p / 6)) * 10) / 10]);
  }
  async function up(t, e, a = {}) {
    var I, P;
    let r = bt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Ap() };
    else if (oo(t)) r = { at: Date.now(), points: pp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const V = new Date(Date.now() - 864e5).toISOString(), E = await Y({ type: "history/history_during_period", start_time: V, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), J = ((E == null ? void 0 : E[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, $]) => Number.isFinite(C) && Number.isFinite($));
        r = { at: Date.now(), points: J };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      bt.set(t, r);
    }
    const l = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const p = M[t], d = ((I = p == null ? void 0 : p.attributes) == null ? void 0 : I.unit_of_measurement) || "", u = r.points.slice(), f = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      l.setAttribute("aria-label", yt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = u.map((V) => V[1]), A = Math.min(...x), k = Math.max(...x), R = (V) => V.toLocaleString(void 0, { maximumFractionDigits: Math.abs(V) >= 100 ? 0 : 1 }), B = ((P = p == null ? void 0 : p.attributes) == null ? void 0 : P.state_class) === "total_increasing";
    tc(l, u, yt(t) + ", last 24 hours: " + (B ? "+" + R(x[x.length - 1] - x[0]) : A === k ? R(A) : R(A) + " to " + R(k)) + (d ? " " + d : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function hp() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const e = Ap();
    tc(t, e, "Solar, last 24 hours: up to " + Fe(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function km(t, e) {
    const a = e.entity_id, r = ge.get(a) || {}, l = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ya(a) > 0 ? 0 : 100 }[t], p = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    l != null && (r.pos = l), p != null && (r.tilt = p), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), ge.set(a, r);
  }
  function fp(t, e, a) {
    var l;
    const r = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof r != "string" || !uo[r] || !Eo(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((l = M[r]) == null ? void 0 : l.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: uo[r] }];
  }
  function Ge(t, e, a, r) {
    let l = { entity_id: a, ...r || {} };
    return [e, l] = fp(t, e, l), t === "cover" && km(e, l), Dn[a] = (Dn[a] || 0) + 1, We.set(Hu, JSON.stringify(Dn)), Ni.call(t, e, l) ? Promise.resolve() : Promise.resolve(X(t, e, l));
  }
  function ec(t) {
    const [e, a, r, l] = t.split("|");
    Ge(e, a, r, l ? JSON.parse(l) : null).catch(() => {
    });
  }
  function vi(t, e) {
    Wt.set("pos|" + t, e), ma("pos|" + t), ka.delete(t), bo = bo.map(() => ""), [S, St].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((l) => gr(l, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (j == null ? void 0 : j.id) === t) {
      const r = St.querySelector(".tfMoreState"), l = St.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), l && (l.textContent = "Currently " + Ya(t) + "%");
    }
    op(t).forEach((r) => r.update(ds(t)));
  }
  const Mm = (t, e) => {
    const a = t.shiftKey ? 10 : 1, r = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function Sm(t, e) {
    var P;
    const a = t.dataset.blocks;
    (P = t.setPointerCapture) == null || P.call(t, e.pointerId), ne.add("pos|" + a), R("pos|" + a);
    const r = (V) => {
      const E = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (V.clientX - E.left) / E.width * 100));
    }, l = r(e), p = e.clientX;
    let d = !1, u = Pn(a), f = l, x = 0;
    const A = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, vi(a, u), x = requestAnimationFrame(A);
    }, k = () => {
      d || (d = !0, t.classList.add("fine"), x = requestAnimationFrame(A));
    }, R = setTimeout(k, 350), B = (V) => {
      f = r(V), Math.abs(V.clientX - p) > 6 && (clearTimeout(R), k());
    }, I = () => {
      clearTimeout(R), cancelAnimationFrame(x), t.removeEventListener("pointermove", B), t.removeEventListener("pointerup", I), t.removeEventListener("pointercancel", I), t.classList.remove("fine"), ne.delete("pos|" + a), vi(a, d ? Math.round(u) : (Math.min(3, Math.floor(l / 25)) + 1) * 25), yi("pos", a);
    };
    t.addEventListener("pointermove", B), t.addEventListener("pointerup", I), t.addEventListener("pointercancel", I);
  }
  function mp(t) {
    var e;
    ot = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var l;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (l = a.querySelector(".panelExpanded")) == null || l.toggleAttribute("inert", !r);
    }), ka.set("areas", ht(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => pl(!0), 340);
  }
  function gp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === ot) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !je() ? a.cloneNode(!0) : null, l = _t().map((x) => x.id), p = l.indexOf(t) > l.indexOf(ot) ? 1 : -1;
    ot = t;
    const d = ht(e.style.order || 1);
    ka.set("areas", d), $d(e, d);
    const u = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), f = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || je() || (u.style.setProperty("--dir", p), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), u.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(sn), sn = setTimeout(() => {
      sn = 0, Ta && Pe();
    }, 340)), f && (f.classList.add("tfAreaLand"), f.addEventListener("animationend", () => f.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const _m = 40;
  function Cm(t) {
    var u, f;
    if (t.pointerType === "mouse" || !t.isPrimary || !((f = (u = t.target).closest) != null && f.call(u, ".tfAreaStage")) || !dd.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let l = null;
    const p = (x) => {
      x.pointerId === r && !l && Math.hypot(x.clientX - e, x.clientY - a) >= Ln && (l = Math.abs(x.clientX - e) > Math.abs(x.clientY - a) ? "x" : "y");
    }, d = (x) => {
      if (x.pointerId !== r) return;
      removeEventListener("pointermove", p, !0), removeEventListener("pointerup", d, !0), removeEventListener("pointercancel", d, !0);
      const A = x.clientX - e;
      if (x.type !== "pointerup" || l !== "x" || Math.abs(A) < _m) return;
      const k = (I) => {
        I.stopPropagation(), I.preventDefault();
      };
      o.addEventListener("click", k, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", k, !0), 400);
      const R = _t(), B = R[R.findIndex((I) => I.id === ot) + (A < 0 ? 1 : -1)];
      B && gp(B.id);
    };
    addEventListener("pointermove", p, !0), addEventListener("pointerup", d, !0), addEventListener("pointercancel", d, !0);
  }
  const fs = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = cn(t);
      return Math.round(a + e * (r - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Ut(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] },
    // the redrawn popups' tracks (17 Nov): warmth flipped (cold at the left), a fan's speed, a valve's position, a
    // cover's tilt as a level
    ctf: { value: (t, e) => {
      const [a, r] = cn(t);
      return Math.round(r - e * (r - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = Ut(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    // the light popup's vertical colour (17 Nov): red at the top, through the spectrum, to red at the bottom
    huev: { value: (t, e) => Math.round((1 - e) * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Ut(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } }
  };
  function ms(t, e, a, r) {
    var x;
    const l = fs[e].value(a, r);
    Wt.set(e + "|" + a, l), ma(e + "|" + a);
    const p = Math.round(r * 100) + "%", d = t.querySelector("i");
    if (e === "tilt") {
      d.style.width = "calc((100% - 8px) * " + r + ")";
      const [A, k] = t.querySelectorAll("span");
      A.classList.toggle("lit", r > 0.08), k.classList.toggle("lit", r > 0.92), ka.delete(a), bo = bo.map(() => ""), op(a).forEach((R) => R.update(ds(a)));
    } else if (t.dataset.axis === "y")
      if (d) d.style.height = p;
      else {
        let A = t.querySelector("b");
        A || (A = document.createElement("b"), t.appendChild(A)), A.style.top = Math.round((1 - r) * 1e3) / 10 + "%";
      }
    else if (d) d.style.width = p;
    else {
      let A = t.querySelector("b");
      A || (A = document.createElement("b"), t.appendChild(A)), A.style.left = p;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = fs[e].text(a, l));
    const f = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    f && (f.textContent = fs[e].text(a, l));
  }
  function yi(t, e) {
    const a = t + "|" + e, r = Wt.get(a), l = la.get(a), [p, d, u] = fs[t].send(e, r), f = () => setTimeout(() => {
      la.get(a) === l && Wt.delete(a), Pe();
    }, 1500);
    Ge(p, d, e, u).then(f, f);
  }
  function bp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (ca && !e.target.closest(".tfBoardMenu,[data-board-more]") && mo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ca == null ? void 0 : ca.key) === a.dataset.boardMore ? mo(!0) : ff(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) mf(ca.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) wl(a.dataset.boardShow);
        else if (a.dataset.favHide) Dd(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Zc(a.dataset.energyPick);
        else if (a.dataset.areaPick) gp(a.dataset.areaPick);
        else if (a.dataset.act) ec(a.dataset.act);
        else if (a.hasAttribute("data-details")) $l(!(j != null && j.details));
        else if (a.hasAttribute("data-details-close")) $l(!1);
        else if (a.dataset.summary) jc(a.dataset.summary, a);
        else if (a.dataset.star) Vc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const l = j.id;
          j = j.back, Jl(), (r = St.querySelector('.tfMore [data-more="' + CSS.escape(l) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? us("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([l, p, d, u]) => Ge(l, p, d, u).catch(() => {
        })) : a.dataset.more ? us(a.dataset.more, a) : a.hasAttribute("data-more-close") ? hs() : a.dataset.morePage ? ps(a.hasAttribute("data-more-toggle") && ((j == null ? void 0 : j.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? Wc(a.dataset.path) : a.dataset.go ? Wd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Nl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && mp(a);
    }), t.addEventListener("keydown", (e) => {
      var r, l, p, d, u, f, x;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), us(a.dataset.more, a)), (l = a.dataset) != null && l.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Zc(a.dataset.energyPick)), (p = a.classList) != null && p.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), mp(a)), (d = a.dataset) != null && d.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), jc(a.dataset.summary, a)), e.key === "Escape" && ca && t === S) {
        e.preventDefault(), mo(!0);
        return;
      }
      if (e.key === "Escape" && ba && t === S) {
        e.preventDefault(), bl(!1), (u = s("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && dt && t === S && (e.preventDefault(), Nl()), (f = a.dataset) != null && f.blocks) {
        const A = a.dataset.blocks, k = Mm(e, Math.round(Pn(A)));
        if (k == null) return;
        e.preventDefault(), vi(A, k), clearTimeout(qr.get(A)), qr.set(A, setTimeout(() => yi("pos", A), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [A, k] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, B = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        ms(a, A, k, B), yi(A, k);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Nt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), Sm(a, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [l, p] = r.dataset.drag.split("|"), d = l === "bright" && !Eo(p), u = e.pointerType !== "mouse";
      if (d && !u) {
        ec(Ht("light", "toggle", p));
        return;
      }
      const f = l === "bright" && ((Nt = M[p]) == null ? void 0 : Nt.state) !== "on", x = l + "|" + p;
      ne.add(x), ma(x);
      const A = l === "tilt" ? 4 : 0, k = r.dataset.axis === "y", R = () => k ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - A * 2, B = (At) => {
        const ft = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, k ? 1 - (At.clientY - ft.top) / R() : (At.clientX - ft.left - A) / R()));
      };
      let I = u ? "waiting" : f ? "pressed" : "dragging", P = 0;
      const V = e.clientX, E = e.clientY, J = (At, ft) => Math.hypot(At.clientX - V, At.clientY - E) > ft, C = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), C()), I === "dragging" && ms(r, l, p, B(e));
      const $ = () => {
        var At, ft;
        I = "sliding", Vt = r, r.classList.add("held"), C(), (At = navigator.userActivation) != null && At.hasBeenActive && ((ft = navigator.vibrate) == null || ft.call(navigator, 8)), P = f ? (uo[p] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, xt = (At) => {
        I === "waiting" && J(At, Ln) ? !d && (k ? Math.abs(At.clientY - E) > Math.abs(At.clientX - V) : Math.abs(At.clientX - V) > Math.abs(At.clientY - E)) ? $() : I = "gone" : I === "pressed" && J(At, 4) && (I = "dragging"), I === "sliding" ? ms(r, l, p, Math.max(0, Math.min(1, P + (k ? E - At.clientY : At.clientX - V) / R()))) : I === "dragging" && ms(r, l, p, B(At));
      }, Tt = (At) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((ft, Lt) => r.removeEventListener(ft, Lt ? Tt : xt)), r.classList.remove("held"), Vt === r && (Vt = null), ne.delete(x), I === "sliding" || I === "dragging" ? yi(l, p) : At.type === "pointerup" && d ? ec(Ht("light", "toggle", p)) : At.type === "pointerup" && f && (I === "waiting" || I === "pressed") && Ge("light", "turn_on", p).catch(() => {
        }), Ta && I !== "sliding" && I !== "dragging" && Pe();
      };
      r.addEventListener("pointermove", xt), r.addEventListener("pointerup", Tt), r.addEventListener("pointercancel", Tt);
    }), t.addEventListener("touchmove", (e) => {
      Vt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Bh(), bp(S), S.addEventListener("pointerdown", Cm), bp(St), St.addEventListener("click", (t) => {
    t.target === St && hs();
  }), (wp = o.getElementById("homeNav")) == null || wp.addEventListener("click", () => {
    dt && Nl();
  }), (vp = o.querySelector(".bottomNav")) == null || vp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ts + "</button>"), (yp = s("dashEditNav")) == null || yp.addEventListener("click", () => v ? El(!Go) : bl(!ba)), S.addEventListener("pointerdown", Hf), S.addEventListener("pointerdown", pf), S.addEventListener("click", (t) => {
    v && Go && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && gd(t.target);
  }, !0), new ResizeObserver(() => {
    h.classList.contains("tfDash") && nl() !== al ? Pe() : ts();
  }).observe(S), window.addEventListener("resize", ts, { passive: !0 }), St.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), j != null && j.details ? $l(!1) : hs();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [...St.querySelectorAll(".tfMoreDots [data-more-page]")], l = r.findIndex((d) => d.getAttribute("aria-selected") === "true"), p = r[Math.max(0, Math.min(r.length - 1, l + (t.key === "ArrowRight" ? 1 : -1)))];
      p && ps(Number(p.dataset.morePage), p.dataset.moreMode ?? null, !0);
    }
  })), ct(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => oo(r))), ...t || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && Eo(r) && Nn(r, $a(M[r]));
      e ? Oa() : Pe();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      En = !0, De == null || De.destroy(), De = null, Ee == null || Ee.forEach((t) => t.destroy()), Ee = null;
    },
    resume() {
      En = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Ea.isConnected && jr(Ea.style.order), Co());
    }
  };
}
const jg = "0.20.2";
function zg() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class Gg extends HTMLElement {
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
    zg();
    const n = this.shadowRoot || this.attachShadow({ mode: "open" });
    n.innerHTML = `<style>${Rm}${Hm}${Nm}${Om}</style>${Im}`;
    const i = n.getElementById("app");
    i.style.opacity = "0", this._shell = Vm(n, {
      setLight: (s) => this.classList.toggle("lightBody", s),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = Wg(n, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), $0(n, i), Y0(n), this.isConnected || this._test.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "";
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
        var s;
        return (s = this._shell) == null ? void 0 : s.toast("Full screen isn't available here");
      }
    );
  }
}
customElements.get("homecore-card") || (customElements.define("homecore-card", Gg), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${jg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
