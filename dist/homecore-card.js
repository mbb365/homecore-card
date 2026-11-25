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
  const g = { home: h("homeView"), settings: h("settingsView") }, v = h("homeNav"), A = h("settingsNav");
  function T(Y) {
    Object.entries(g).forEach(([X, W]) => W.classList.toggle("active", X === Y)), v.classList.toggle("active", Y === "home"), A.classList.toggle("active", Y === "settings");
  }
  v.addEventListener("click", () => T("home")), A.addEventListener("click", () => T("settings")), h("settingsBack").addEventListener("click", () => T("home"));
  function _(Y) {
    const X = Y === "light";
    o.querySelectorAll(".themeBtn").forEach((W) => W.classList.toggle("active", W.dataset.theme === Y)), b.classList.toggle("light", X), n(X);
  }
  _(Cp.get(_p) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((Y) => Y.addEventListener("click", () => {
    _(Y.dataset.theme), Cp.set(_p, Y.dataset.theme);
  }));
  const L = h("tvNav");
  i || (L.hidden = !0), L.addEventListener("click", () => s());
  let O;
  function k(Y) {
    const X = h("toast");
    X && (X.textContent = Y, X.classList.add("show"), clearTimeout(O), O = setTimeout(() => X.classList.remove("show"), 2600));
  }
  return { showView: T, toast: k };
}
const Wm = /* @__PURE__ */ new Set(["roaming", "test_area"]), jm = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, ar = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Te = "made_up_", no = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Te);
}, Jn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
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
  const n = {}, i = {}, s = (W, N, et, rt) => {
    n[W] = { entity_id: W, state: et, attributes: rt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[W] = N;
  }, h = (W, N, et) => {
    const rt = n[W], ft = N ?? rt.state;
    n[W] = { ...rt, state: ft, attributes: { ...rt.attributes, ...et }, last_changed: ft === rt.state ? rt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (W, N, et, rt) => s("binary_sensor." + Te + (W ? W + "_" : "") + Jn(N), W, rt ? "on" : "off", { friendly_name: N, device_class: et });
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
      const [et, rt] = N.fan;
      s("fan." + Te + W + "_" + Jn(et), W, "on", rt != null ? { friendly_name: et, percentage: rt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: et, supported_features: 48 });
    }
    if (N.waterHeater && s("water_heater." + Te + W, W, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [et, rt] = N.valvePos;
      s("valve." + Te + W + "_" + Jn(et), W, rt == null || rt ? "open" : "closed", { friendly_name: et, device_class: "water", supported_features: 3 | (rt == null ? 0 : 12), ...rt == null ? {} : { current_position: rt } });
    }
    if (N.garage && s("cover." + Te + W + "_" + Jn(N.garage), W, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [et, rt, ft, tt] = N.cover;
      s("cover." + Te + W + "_" + Jn(et), W, ft ? "open" : "closed", { friendly_name: et, device_class: rt, current_position: ft, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (N.humidifier && s("humidifier." + Te + W, W, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (s("sensor." + Te + W + "_solar_power", W, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), s("sensor." + Te + W + "_solar_today", W, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && s("valve." + Te + W + "_" + Jn(N.valve), W, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && b(W, N.door, "door", N.doorOpen), N.window && b(W, N.window, "window", !1), N.motion && b(W, N.motion, "motion", !1), N.plant) {
      const [et, rt, ft, tt, F] = N.plant, q = Te + Jn(et), it = (Tt, dt, S, Ft, Z) => s("sensor." + q + "_" + Tt, W, String(S), { friendly_name: dt, device_class: Z, state_class: "measurement", unit_of_measurement: Ft, plant_low: S < ar[Tt][0], plant_high: S > ar[Tt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Tt] });
      it("moisture", "Moisture", rt, "%", "moisture"), it("light", "Light", ft, "lx", "illuminance"), it("temperature", "Temperature", tt, "°C", "temperature"), it("fertility", "Fertility", F, "µS/cm", "conductivity");
      const ut = Object.entries({ moisture: rt, light: ft, temperature: tt, fertility: F }).filter(([Tt, dt]) => dt < ar[Tt][0] || dt > ar[Tt][1]).map(([Tt, dt]) => Tt + (dt < ar[Tt][0] ? " low" : " high"));
      s("plant." + q, W, ut.length ? "problem" : "ok", { friendly_name: et, moisture: rt, brightness: ft, temperature: tt, conductivity: F, problem: ut.join(", ") || "none" });
    }
  }), s("alarm_control_panel." + Te + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), s("sensor." + Te + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let A = null;
  function T() {
    const W = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((N) => {
      N.endsWith("_solar_power") && (n[N] = { ...n[N], state: Fc(W).toFixed(2) }), N.endsWith("_solar_today") && (n[N] = { ...n[N], state: zm(W).toFixed(1) });
    });
  }
  T();
  let _ = 0;
  function L() {
    let W = !1;
    const N = ++_ % 10 === 0, et = (tt, F, q) => {
      h(tt, F, q), W = !0;
    };
    Object.entries(g).forEach(([tt, F]) => {
      const q = n[tt].attributes.current_position, it = q < F ? Math.min(F, q + 10) : Math.max(F, q - 10);
      it === F && delete g[tt], et(tt, it === F ? it === 0 ? "closed" : "open" : F > q ? "opening" : "closing", { current_position: it });
    }), Object.entries(v).forEach(([tt, F]) => {
      const q = n[tt].attributes.current_tilt_position, it = q < F ? Math.min(F, q + 25) : Math.max(F, q - 25);
      it === F && delete v[tt], et(tt, null, { current_tilt_position: it });
    }), Object.keys(n).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const F = n[tt], q = F.attributes, it = q.current_temperature, ut = (F.state === "heat" || F.state === "auto") && it < q.temperature - 0.05, Tt = (F.state === "cool" || F.state === "auto") && it > q.temperature + 0.05, dt = F.state === "off" ? "off" : ut ? "heating" : Tt ? "cooling" : "idle", S = N ? Math.round((it + (ut ? 0.1 : Tt ? -0.1 : 0)) * 10) / 10 : it;
      (S !== it || dt !== q.hvac_action) && et(tt, null, { current_temperature: S, hvac_action: dt });
    }), Object.keys(n).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const F = n[tt], q = F.attributes, it = q.current_humidity, ut = F.state === "on" && it < q.humidity, Tt = ut && N ? it + 1 : it, dt = F.state !== "on" ? "off" : ut ? "humidifying" : "idle";
      if (Tt !== it || dt !== q.action) {
        et(tt, null, { current_humidity: Tt, action: dt });
        const S = "sensor." + Te + i[tt] + "_humidity";
        n[S] && et(S, String(Tt));
      }
    });
    const rt = n["vacuum." + Te + "robot"], ft = rt.attributes;
    rt.state === "cleaning" && N && et(rt.entity_id, null, { battery_level: Math.max(5, ft.battery_level - 1) }), rt.state === "returning" && et(rt.entity_id, "docked", {}), rt.state === "docked" && ft.battery_level < 100 && et(rt.entity_id, null, { battery_level: Math.min(100, ft.battery_level + 2) }), A && Date.now() - A.at > 5e3 && (et("alarm_control_panel." + Te + "house", "armed_" + A.mode, {}), A = null), W && o();
  }
  const O = setInterval(L, 1e3), k = setInterval(() => {
    T(), o();
  }, 60 * 1e3);
  function Y(W, N, et) {
    const rt = et == null ? void 0 : et.entity_id;
    if (!n[rt]) return !1;
    const ft = n[rt], tt = ft.attributes, F = (q, it) => h(rt, q, it);
    if (W === "climate" && (N === "set_temperature" && et.temperature != null && F(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, et.temperature)) }), N === "set_hvac_mode" && F(et.hvac_mode, et.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && F(ft.state === "off" ? "heat" : "off", ft.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && et.target_temp_low != null && F(null, { target_temp_low: et.target_temp_low, target_temp_high: et.target_temp_high }), N === "set_fan_mode" && F(null, { fan_mode: et.fan_mode }), N === "set_swing_mode" && F(null, { swing_mode: et.swing_mode }), N === "set_preset_mode" && F(null, { preset_mode: et.preset_mode }), N === "set_humidity" && F(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, et.humidity)) })), W === "fan" && (N === "set_percentage" && F(et.percentage > 0 ? "on" : "off", { percentage: et.percentage }), N === "oscillate" && F(null, { oscillating: et.oscillating }), N === "set_direction" && F(null, { direction: et.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && F(N === "turn_on" || N === "toggle" && ft.state !== "on" ? "on" : "off")), W === "water_heater" && (N === "set_temperature" && F(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, et.temperature)) }), N === "set_operation_mode" && F(et.operation_mode, { operation_mode: et.operation_mode }), N === "set_away_mode" && F(null, { away_mode: et.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const q = N === "turn_on" || N === "toggle" && ft.state === "off";
      F(q ? "eco" : "off", { operation_mode: q ? "eco" : "off" });
    }
    if (W === "cover") {
      const q = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? et.position : N === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete g[rt], delete v[rt], F(tt.current_position === 0 ? "closed" : "open")), q != null && tt.current_position == null ? F(q > 0 ? "open" : "closed") : q != null && q !== tt.current_position && (g[rt] = q, F(q > tt.current_position ? "opening" : "closing"));
      const it = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? et.tilt_position : null;
      N === "stop_cover_tilt" && delete v[rt], it != null && tt.current_tilt_position != null && it !== tt.current_tilt_position && (v[rt] = it);
    }
    if (W === "humidifier" && (N === "set_humidity" && F(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, et.humidity)) }), N === "set_mode" && F(null, { mode: et.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const q = N === "turn_on" || N === "toggle" && ft.state !== "on";
      F(q ? "on" : "off", { action: q ? "idle" : "off" });
    }
    if (W === "vacuum" && (N === "start" && F("cleaning", { rooms: et.rooms || tt.rooms }), N === "pause" && F("paused"), N === "return_to_base" && F("returning", { rooms: [] }), N === "locate" && F(null, { located: Date.now() }), N === "set_rooms" && F(null, { rooms: et.rooms })), W === "valve") {
      const q = N === "open_valve" || N === "toggle" && ft.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && F(q ? "open" : "closed", tt.current_position != null ? { current_position: q ? 100 : 0 } : {}), N === "set_valve_position" && F(et.position > 0 ? "open" : "closed", { current_position: et.position });
    }
    if (W === "alarm_control_panel") {
      N === "alarm_disarm" && (A = null, F("disarmed", { changed_by: "Matt" }));
      const q = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      q && (A = { mode: q, at: Date.now() }, F("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function X(W, { madeUp: N = !0 } = {}) {
    const et = N ? n : {}, rt = (W == null ? void 0 : W.states) || {}, ft = (W == null ? void 0 : W.entities) || {}, tt = (W == null ? void 0 : W.devices) || {}, F = (ot) => {
      var j;
      const pt = ft[ot];
      return pt && (pt.area_id || pt.device_id && ((j = tt[pt.device_id]) == null ? void 0 : j.area_id)) || null;
    }, q = (ot) => {
      const pt = ft[ot];
      return rt[ot] && rt[ot].state !== "unavailable" && !(pt != null && pt.hidden) && !(pt != null && pt.entity_category);
    }, it = {};
    Object.keys(rt).forEach((ot) => {
      const pt = F(ot);
      pt && q(ot) && (it[pt] || (it[pt] = [])).push(ot);
    });
    const ut = { ...rt, ...et }, Tt = (ot) => {
      var pt, j;
      return (j = (pt = ut[ot]) == null ? void 0 : pt.attributes) == null ? void 0 : j.device_class;
    }, dt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(rt).filter((ot) => ot.startsWith("vacuum.") && q(ot)), Ft = Object.values((W == null ? void 0 : W.areas) || {}).filter((ot) => !Wm.has(ot.area_id)).map((ot) => {
      const pt = ot.area_id, j = it[pt] || [], wt = (Vt) => j.filter((ge) => ge.startsWith(Vt + ".")), Lt = (Vt) => wt("sensor").filter((ge) => Tt(ge) === Vt), Wt = (Vt) => Object.keys(et).filter((ge) => i[ge] === pt && Vt(ge)), ne = (Vt, ge) => Vt.length ? Vt : Wt(ge), la = ne(Lt("temperature"), (Vt) => Vt.endsWith(pt + "_temperature")), ma = ne(Lt("humidity"), (Vt) => Vt.endsWith(pt + "_humidity")), _o = Lt("power").filter((Vt) => /^(W|kW)$/.test(ut[Vt].attributes.unit_of_measurement || "")), Ta = wt("binary_sensor").filter((Vt) => Tt(Vt) === "moisture"), ln = ne(wt("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: Wt((ge) => ge.startsWith("sensor." + Vt.split(".")[1] + "_")) })), Tn = [...wt("binary_sensor").filter((Vt) => dt.includes(Tt(Vt))), ...Wt((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: pt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...la.slice(0, 1), ...ma.slice(0, 1), ...Ta],
        power: _o.length ? _o.reduce((Vt, ge) => Vt + Number(ut[ge].state) * (ut[ge].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: wt("switch"),
        lights: wt("light"),
        actions: [
          ...wt("light"),
          ...ne(wt("climate"), (Vt) => Vt.startsWith("climate.")),
          ...ne(wt("cover"), (Vt) => Vt.startsWith("cover.")),
          ...ne(wt("humidifier"), (Vt) => Vt.startsWith("humidifier.")),
          ...ne(wt("valve"), (Vt) => Vt.startsWith("valve.")),
          ...wt("media_player"),
          ...wt("vacuum"),
          ...S.length ? [] : Wt((Vt) => Vt.startsWith("vacuum.")),
          ...wt("fan"),
          ...Wt((Vt) => Vt.startsWith("fan.")),
          ...wt("water_heater"),
          ...Wt((Vt) => Vt.startsWith("water_heater."))
        ],
        solar: Wt((Vt) => Vt.includes("_solar_")),
        plants: ln,
        openings: Tn,
        alerts: [...Ta, ...Tn].filter((Vt) => {
          var ge;
          return ((ge = ut[Vt]) == null ? void 0 : ge.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), Z = Object.keys(rt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && rt[ot].state !== "unavailable") || null, st = (ot) => Object.keys(rt).filter((pt) => pt.startsWith(ot + ".") && q(pt)), ct = st("alarm_control_panel"), bt = S.length ? S : N ? ["vacuum." + Te + "robot"] : [];
    return {
      states: ut,
      rooms: Ft,
      grid: Z,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => et[ot] ? i[ot] : F(ot),
      vacuums: bt,
      homeVacuums: bt.filter((ot) => !Ft.some((pt) => pt.actions.includes(ot))),
      security: {
        alarms: ct.length ? ct : N ? ["alarm_control_panel." + Te + "house"] : [],
        locks: st("lock"),
        openings: [...Object.keys(et).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Te + "doorbell"] : []]
      }
    };
  }
  return { model: X, call: Y, stop() {
    clearInterval(O), clearInterval(k);
  } };
}
const Lp = (o) => +o.toFixed(2), Tp = (o) => o * Math.PI / 180, Ei = (o, n, i, s) => [Lp(o + i * Math.cos(Tp(s))), Lp(n + i * Math.sin(Tp(s)))], Er = (o, n, i, s, h) => {
  const [b, g] = Ei(o, n, i, s), [v, A] = Ei(o, n, i, h);
  return `M${b} ${g}A${i} ${i} 0 ${h - s > 180 ? 1 : 0} 1 ${v} ${A}`;
}, ta = (o, n, i, s, h, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${s}" rx="${h}"${b}/>`, La = (o, n, i, s = "") => `<circle cx="${o}" cy="${n}" r="${i}"${s}/>`, ya = (o, n = "") => `<path d="${o}"${n}/>`, Es = (o, n = 2.5) => ya(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), Qn = (o, n = 1.5) => ya(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), tr = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), $m = (o, n, i, s = 0) => Array.from({ length: o }, (h, b) => {
  const g = s + 360 / o * b, [v, A] = Ei(12, 12, n, g), [T, _] = Ei(12, 12, i, g);
  return Es(`M${v} ${A}L${T} ${_}`, 2.2);
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
    c: tr(ta(8.2, 8.8, 2.2, 6.4, 1.1)) + tr(ta(13.6, 8.8, 2.2, 6.4, 1.1))
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
    s: Qn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
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
    c: tr(La(12, 14.9, 1.7)) + ya("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: ta(5, 2.4, 14, 19.2, 3.6),
    c: tr(La(15.2, 12.4, 1.5))
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
    s: Qn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Es(Er(12, 18.6, 8, 230, 310), 2.4) + Es(Er(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: La(12, 7.2, 4.2) + Qn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: ta(2.6, 5.4, 13.4, 8.6, 3.4) + Qn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + ta(7.2, 14.6, 2.4, 4.2, 1.2) + ta(3.4, 18.6, 10, 2.6, 1.3),
    c: tr(La(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: ta(5, 2.4, 14, 19.2, 4.2),
    c: La(12, 14.6, 3.6) + tr(La(12, 7.4, 1.5))
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
    s: Qn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
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
    s: Qn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: ya("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Qn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: tr(ta(9.8, 14.2, 4.4, 10, 2.2))
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
  const i = { ...Ga, ...n }, s = Jm(i), h = String(o).split("/"), b = s[h[0]] ? h[0] : "clear", g = h[1] === "night", v = s[b][g ? 1 : 0], A = {
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
  }, T = (_) => Bc.map(() => ({ o: _ }));
  return b === "clear" ? g ? (A.moon.o = 1, A.stars = T(1)) : A.sun.o = 1 : b === "partly" ? (A.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (A.moon = { x: 34, y: 33, d: 48, o: 1 }, A.stars = T(0.7)) : A.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (A.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? A.moon = { x: 40, y: 36, d: 40, o: 0 } : A.sun = { x: 40, y: 36, r: 20, o: 0 }) : (A.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? A.moon = { x: 38, y: 28, d: 36, o: 0 } : A.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? A.snow = Rc.map(() => ({ o: 1, dy: 0 })) : A.rain = Pc.map((_, L) => ({ o: b === "storm" && L === 1 ? 0 : 1, dy: 0 })), b === "storm" && (A.bolt = { o: 1, dy: 0 })), A;
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
], er = (o, n) => (t0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, e0 = 0, zu = 1, Gu = 2, $u = 3, Uu = 4, ko = 5, Os = 6, Nr = 7, Yu = 8, Bp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), a0 = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], o0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), n0 = (o, n, i) => {
  let s = !1;
  for (let h = 0, b = o.length - 1; h < o.length; b = h++) {
    const g = o[h], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (s = !s);
  }
  return s;
};
function r0(o, { size: n = 90, px: i = 2, oneBit: s = !1, colors: h = Ga, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: A = !1 } = {}) {
  const T = { ...Ga, ...h }, _ = Math.sin, L = Math.PI * 2, O = Math.max(6, Math.round(n / i)), k = O / 90, Y = A ? Math.floor(v / 100) * 100 : 0, X = A ? _(L * Y / 3600) : 0, W = A ? 1.8 * _(L * Y / 6400) : 0, N = A ? 0.9 * _(L * Y / 4100) : 0, et = A ? 0.8 * _(L * Y / 5200) : 0, rt = Y / 3400 % 1, ft = A && o.bolt.o > 0.5 && (rt < 0.04 || rt > 0.08 && rt < 0.11), tt = new Array(O * O), F = new Uint8Array(O * O), q = (Z, st, ct, bt, ot) => {
    ct == null || Z < 0 || st < 0 || Z >= O || st >= O || (bt >= 1 || bt > er(Z + 5, st + 3)) && (tt[st * O + Z] = ct, F[st * O + Z] = ot);
  }, it = (Z, st, ct, bt) => {
    for (let ot = Math.max(0, Math.floor(st - ct) - 1); ot <= Math.min(O - 1, st + ct + 1); ot++) for (let pt = Math.max(0, Math.floor(Z - ct) - 1); pt <= Math.min(O - 1, Z + ct + 1); pt++) bt(pt, ot, pt + 0.5 - Z, ot + 0.5 - st);
  }, ut = o.skyStops || [o.sky], Tt = o.skyT || 0;
  for (let Z = 0; Z < O; Z++) {
    const st = o.night ? Mi(1 - (Z + 0.5) / (O * 0.7)) * 0.85 : Mi(((Z + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let ct = 0; ct < O; ct++) {
      let bt = ut[0];
      if (ut.length > 1) {
        const ot = Tt * (ut.length - 1), pt = Math.min(ut.length - 2, Math.floor(ot));
        bt = ot - pt > er(ct, Z) ? ut[pt + 1] : ut[pt];
      }
      st > er(ct + 2, Z + 5) && (bt = o.night ? ja(bt, "#000000", 0.28) : ja(bt, "#ffffff", 0.2)), tt[Z * O + ct] = ft ? ja(bt, "#ffffff", 0.25) : bt;
    }
  }
  if (o.sun.o > 0.01) {
    const Z = o.sun.x * k, st = o.sun.y * k, ct = Math.max(1, o.sun.r * k);
    if (A) {
      const bt = ct * (1.45 + 0.06 * X), ot = ja(T.sun, "#ffffff", 0.55);
      if (it(Z, st, bt, (pt, j, wt, Lt) => {
        const Wt = Math.sqrt(wt * wt + Lt * Lt);
        Wt > ct && Wt < bt && q(pt, j, ot, 0.26 * (1 - (Wt - ct) / (bt - ct)) * o.sun.o, e0);
      }), o.sun.o > 0.5) {
        const pt = Math.floor(Y / 500) % 2, j = Math.max(1, ct * 0.22);
        for (let wt = 0; wt < 8; wt++) if (wt % 2 === pt) for (let Lt = ct + 1.5; Lt < ct + 1.5 + j; Lt += 0.7) q(Math.floor(Z + Math.cos(wt * Math.PI / 4) * Lt), Math.floor(st + Math.sin(wt * Math.PI / 4) * Lt), T.sun, o.sun.o, Yu);
      }
    }
    it(Z, st, ct, (bt, ot, pt, j) => {
      if (pt * pt + j * j > ct * ct) return;
      const wt = ((pt * 0.643 + j * 0.766) / ct + 1) / 2;
      q(bt, ot, Mi((wt - 0.62) / 0.38) > er(bt, ot) ? T.sunEdge : T.sun, o.sun.o, zu);
    });
  }
  if (Bc.forEach((Z, st) => {
    const ct = o.stars[st].o;
    if (ct < 0.01) return;
    const bt = Math.floor(Z[0] * k), ot = Math.floor(Z[1] * k), pt = A ? (Math.floor(Y / 300) + st * 3) % 6 : 0;
    if (pt === 5) return;
    const j = Math.round(Z[2] * k * (pt === 4 ? 0.3 : pt < 2 ? 1 : 0.6));
    q(bt, ot, T.star, ct, Nr);
    for (let wt = 1; wt <= j; wt++) {
      const Lt = wt === j && j > 1 ? ja(T.star, o.sky, 0.5) : T.star;
      q(bt - wt, ot, Lt, ct, Nr), q(bt + wt, ot, Lt, ct, Nr), q(bt, ot - wt, Lt, ct, Nr), q(bt, ot + wt, Lt, ct, Nr);
    }
  }), o.moon.o > 0.01) {
    const Z = Math.max(1.5, o.moon.d * k * 0.37), st = o.moon.x * k, ct = o.moon.y * k + (A && et > 0.4 ? -1 : 0), bt = st + 0.547 * Z, ot = ct - 0.503 * Z, pt = 0.82 * Z, j = ja(T.moon, "#ffffff", 0.6);
    it(st, ct, Z, (wt, Lt, Wt, ne) => {
      if (Wt * Wt + ne * ne > Z * Z) return;
      const la = wt + 0.5 - bt, ma = Lt + 0.5 - ot;
      la * la + ma * ma <= pt * pt || q(wt, Lt, Mi((ne + Z) / (2 * Z) * 1.1 - 0.1) > er(wt, Lt) ? T.moon : j, o.moon.o, Gu);
    });
  }
  const dt = Math.max(2, Math.round(15.65 * k)), S = Math.max(1, Math.round(5.87 * k * 0.5));
  Pc.forEach((Z, st) => {
    const ct = o.rain[st];
    let bt = ct.dy, ot = ct.o;
    if (ot < 0.01) return;
    if (A) {
      const wt = (Y / 950 + st / 3) % 1;
      bt += -5 + wt * 14, ot *= wt < 0.18 ? wt / 0.18 : wt > 0.72 ? (1 - wt) / 0.28 : 1;
    }
    const pt = (Z[0] + 3 + W) * k, j = (Z[1] + bt) * k;
    for (let wt = 0; wt < dt; wt++) for (let Lt = 0; Lt < S; Lt++) q(Math.floor(pt - 0.208 * wt) + Lt, Math.floor(j) + wt, T.rain, ot, Uu);
  });
  const Ft = Math.max(0, Math.round(7.34 * k / 2.6));
  if (Rc.forEach((Z, st) => {
    const ct = o.snow[st];
    let bt = ct.dy, ot = 0, pt = ct.o;
    if (pt < 0.01) return;
    if (A) {
      const Lt = (Y / 3200 + st / 5) % 1;
      bt += -6 + Lt * 14, ot = 1.5 * _(L * (Lt * 1.5 + st / 5)), pt *= Lt < 0.2 ? Lt / 0.2 : Lt > 0.75 ? (1 - Lt) / 0.25 : 1;
    }
    const j = Math.floor((Z[0] + 3.67 + ot + W) * k), wt = Math.floor((Z[1] + 3.67 + bt) * k);
    q(j, wt, T.snow, pt, ko);
    for (let Lt = 1; Lt <= Ft; Lt++)
      q(j - Lt, wt, T.snow, pt, ko), q(j + Lt, wt, T.snow, pt, ko), q(j, wt - Lt, T.snow, pt, ko), q(j, wt + Lt, T.snow, pt, ko), Ft > 1 && Lt < Ft && (q(j - Lt, wt - Lt, T.snow, pt, ko), q(j + Lt, wt - Lt, T.snow, pt, ko), q(j - Lt, wt + Lt, T.snow, pt, ko), q(j + Lt, wt + Lt, T.snow, pt, ko));
  }), o.bolt.o > 0.01)
    if (O >= 30) {
      const Z = 39 + W, st = 50 + o.bolt.dy;
      for (let ct = Math.floor(st * k); ct <= (st + 28) * k; ct++) for (let bt = Math.floor(Z * k); bt <= (Z + 13) * k; bt++)
        n0(o0, (bt + 0.5) / k - Z, (ct + 0.5) / k - st) && q(bt, ct, T.sun, o.bolt.o, Os);
    } else {
      const Z = O / 18, st = 7, ct = 10 + Math.round(o.bolt.dy * 0.2);
      a0.forEach((bt, ot) => bt.split("").forEach((pt, j) => {
        if (pt !== "#") return;
        const wt = Math.floor((st + j) * Z), Lt = Math.floor((ct + ot) * Z);
        for (let Wt = Lt; Wt < Math.max(Lt + 1, Math.floor((ct + ot + 1) * Z)); Wt++) for (let ne = wt; ne < Math.max(wt + 1, Math.floor((st + j + 1) * Z)); ne++) q(ne, Wt, T.sun, o.bolt.o, Os);
      }));
    }
  if (o.cloud.o > 0.01) {
    const Z = Math.max(3, o.cloud.w * k), st = Z * 0.6665, ct = (o.cloud.x + W) * k - Z / 2, bt = (o.cloud.y + N) * k - st / 2, ot = ja(T.cloudDay, T.cloudNight, Math.round(o.cloud.f * 4) / 4), pt = ja(ot, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(bt) - 1); j <= Math.min(O - 1, bt + st + 1); j++) for (let wt = Math.max(0, Math.floor(ct) - 1); wt <= Math.min(O - 1, ct + Z + 1); wt++) {
      const Lt = (wt + 0.5 - ct) / Z, Wt = (j + 0.5 - bt) / Z;
      Bp(Lt, Wt) && q(wt, j, !Bp(Lt, Wt + 1 / Z) || Mi((Wt - 0.42) / 0.25) * 0.8 > er(wt, j) ? pt : ot, o.cloud.o, $u);
    }
  }
  return i0(tt, F, O, O, { oneBit: s, ink: b, paper: g, snowInk: !o.night });
}
function i0(o, n, i, s, { oneBit: h, ink: b, paper: g, snowInk: v }) {
  const A = new Uint8ClampedArray(i * s * 4), T = ic(b), _ = ic(g);
  for (let L = 0; L < s; L++) for (let O = 0; O < i; O++) {
    const k = L * i + O, Y = n[k];
    if (o[k] == null) continue;
    let X = ic(o[k]);
    if (h) {
      let W;
      Y === Uu || Y === Yu ? W = !0 : Y === ko ? W = v : Y === Nr || Y === Os ? W = !1 : W = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= er(O, L), (Y === zu || Y === Gu || Y === $u || Y === Os) && (O > 0 && n[k - 1] !== Y || O < i - 1 && n[k + 1] !== Y || L > 0 && n[k - i] !== Y || L < s - 1 && n[k + i] !== Y) && (W = !0), X = W ? T : _;
    }
    A[k * 4] = X[0], A[k * 4 + 1] = X[1], A[k * 4 + 2] = X[2], A[k * 4 + 3] = 255;
  }
  return { w: i, h: s, data: A };
}
const on = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Hc = (o) => {
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
], en = (o, n) => (c0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Zu = 1, Ku = 2, Xu = 3, Ju = 4, Or = 5, Is = 6, Nc = 7, Qu = 8, Hp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), d0 = (o, n, i) => {
  let s = !1;
  for (let h = 0, b = o.length - 1; h < o.length; b = h++) {
    const g = o[h], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (s = !s);
  }
  return s;
};
function p0(o, n, i, s, { oneBit: h, ink: b, paper: g, snowInk: v }) {
  const A = new Uint8ClampedArray(i * s * 4), T = Bs(b), _ = Bs(g);
  for (let L = 0; L < s; L++) for (let O = 0; O < i; O++) {
    const k = L * i + O, Y = n[k];
    if (o[k] == null) continue;
    let X = Bs(o[k]);
    if (h) {
      let W;
      Y === Ju || Y === Qu ? W = !0 : Y === Or ? W = v : Y === Nc || Y === Is ? W = !1 : W = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= en(O, L), (Y === Zu || Y === Ku || Y === Xu || Y === Is) && (O > 0 && n[k - 1] !== Y || O < i - 1 && n[k + 1] !== Y || L > 0 && n[k - i] !== Y || L < s - 1 && n[k + i] !== Y) && (W = !0), X = W ? T : _;
    }
    A[k * 4] = X[0], A[k * 4 + 1] = X[1], A[k * 4 + 2] = X[2], A[k * 4 + 3] = 255;
  }
  return { w: i, h: s, data: A };
}
const u0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, h0 = (o) => ju(o, !1).split("/")[0], sc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, f0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", m0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", g0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", b0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", w0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], v0 = [".##", "##.", ".#.", "#.."];
function th(o, { width: n, height: i, colors: s, wave: h = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const A = { ...Ga, dawn: "#e5a77e", ...s }, T = l0(A), _ = n, L = i, O = _ / v, k = O / 2, Y = Math.PI * 2, X = o.length ? o : [{ cond: "cloudy", night: !1 }], W = [...Array(v * 2)].map((ft, tt) => {
    const F = X[Math.min(tt, X.length - 1)], q = h0(F.cond), it = tt % 2 === 1;
    return { cond: F.cond, k: q, night: it, sky: T[q][it ? 1 : 0], cover: u0[q] };
  }), N = (ft) => L * (0.5 - h * Math.cos(Y * (ft / O - 0.25)));
  return { C: A, S: W, W: _, H: L, cw: O, sw: k, TAU: Y, yb: N, side: (ft, tt, F) => {
    const q = (ft ? N(tt) - F : F - N(tt)) / Math.max(3, b * 1.4) + 0.5;
    return q <= 0 ? 0 : q >= 1 ? 1 : q;
  }, glowAt: (ft) => {
    const tt = ((ft / O - 0.25) % 1 + 1) % 1, F = Math.max(0, Math.min(v - 1, Math.round(ft / O - 0.25))), q = Math.max(0, Math.min(v - 1, Math.round(ft / O - 0.75))), it = 1 - (W[2 * F].cover + W[2 * q + 1].cover) / 2, ut = Math.sin(Math.PI * Math.min(1, Math.max(0, N(ft) / L)));
    return { c: tt < 0.5 ? A.dusk : A.dawn, a: g * (0.2 + 0.8 * it) * ut * ut };
  }, soft: b, tw: O * 0.3, sy: L / 90 };
}
function eh(o, { clock: n = 0, ambient: i = !1, seed: s = 1 }) {
  const { S: h, sw: b, side: g, C: v, TAU: A, sy: T, H: _ } = o, L = n, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  h.forEach((X, W) => {
    const N = sc(s * 977 + W * 131 + 7), et = (W + 0.5) * b, rt = X.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[X.k] : 0;
    for (let ft = 0; ft < rt; ft++) {
      const tt = et + (N() - 0.5) * b * 1.6, F = (6 + N() * 76) * T, q = N() < 0.35, it = 1.8 + N() * 1.6, ut = g(!0, tt, F) * (q ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(A * L / 2600 + ft * 1.7 + W) : 1);
      ut >= 0.03 && O.stars.push({ x: tt, y: F, big: q, size: it, o: ut });
    }
    if (!X.night && (X.k === "clear" || X.k === "partly")) {
      const ft = et + (N() - 0.5) * b * 0.3, tt = Math.min(15, b * 0.29);
      O.suns.push({ x: ft, y: 32 * T, rad: tt, halo: tt * 2.8 * (i ? 1 + 0.07 * Math.sin(A * L / 3600 + W) : 1) });
    }
    if (X.night && (X.k === "clear" || X.k === "partly")) {
      const ft = Math.min(0.78, b * 0.55 / 34), tt = et - 23 * ft + (N() - 0.5) * b * 0.2;
      O.moons.push({ x: tt + 23 * ft, y: (4 + (i ? 0.8 * Math.sin(A * L / 5200 + W) : 0)) * T + 23 * ft, d: 46 * ft });
    }
  });
  const k = Math.max(56, Math.min(100, _ * 0.45)), Y = Math.max(1, b / (k * 2.4));
  return h.forEach((X, W) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[X.k];
    if (!N) return;
    const et = X.k === "partly" ? 1 : Math.round(N * Y), rt = sc(s * 577 + W * 71 + 3), ft = (W + 0.5) * b, tt = X.k === "rain" || X.k === "storm" || X.night ? v.cloudNight : v.cloudDay, F = X.night ? 0.82 : X.k === "storm" ? 0.75 : 1;
    for (let q = 0; q < et; q++) {
      const it = k / 46 * (X.k === "partly" ? 1 : 0.8 + rt() * 0.4), ut = ft + (X.k === "partly" ? b * 0.12 : ((q + 0.5) / et - 0.5) * b * 0.95 + (rt() - 0.5) * b * 0.5 / et), Tt = (X.k === "partly" ? 40 : 6 + rt() * 26) * T, dt = i ? 2.5 * Math.sin(A * L / 9e3 + W * 1.3 + q * 2.1) : 0, S = i ? 0.9 * Math.sin(A * L / 6100 + W + q) : 0;
      O.clouds.push({ x: ut - 23 * it + dt, y: Tt - 15.33 * it + S, w: 46 * it, h: 30.66 * it, fill: tt, o: F * (et > 1 && q === 0 ? 0.85 : 1) });
    }
  }), h.forEach((X, W) => {
    const N = sc(s * 313 + W * 29 + 11), et = (W + 0.5) * b, rt = X.cond === "pouring" ? 16 : X.cond === "rainy" || X.cond === "hail" ? 9 : X.cond === "lightning-rainy" ? 12 : X.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < rt; tt++) {
      let F = et + (N() - 0.5) * b * 1.05, q = 44 + N() * 36, it = 1;
      if (i) {
        const Tt = ((q - 44 + L * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (Tt - (q - 44)), q = 44 + Tt, it = Math.min(1, Tt / 6, (36 - Tt) / 6);
      }
      q *= T;
      const ut = g(X.night, F, q) * it;
      ut >= 0.05 && O.drops.push({ x: F, y: q, o: ut });
    }
    const ft = X.cond === "snowy" ? 11 : X.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < ft; tt++) {
      let F = et + (N() - 0.5) * b * 1.05, q = 40 + N() * 44, it = 1;
      if (i) {
        const Tt = ((q - 40 + L * 9e-3) % 44 + 44) % 44;
        q = 40 + Tt, F += 1.6 * Math.sin(A * L / 2800 + tt * 1.9 + W), it = Math.min(1, Tt / 6, (44 - Tt) / 6);
      }
      q *= T;
      const ut = g(X.night, F, q) * it;
      ut >= 0.05 && O.flakes.push({ x: F, y: q, o: ut });
    }
    if (X.k === "fog") {
      const tt = X.night ? "#c8ccd6" : "#ffffff", F = X.night ? 0.28 : 0.62, q = i ? 4 * Math.sin(A * L / 8e3 + W) : 0;
      for (let it = 0; it < 4; it++) O.fogs.push({ x: et - b * 0.75 + it % 2 * b * 0.18 + (it % 2 ? q : -q), y: (30 + it * 13) * T, w: b * 1.3, c: tt, a: F });
    }
    if (X.k === "storm") {
      const tt = (L / 3400 + W * 0.37) % 1;
      O.bolts.push({ x: et + (N() - 0.5) * b * 0.3 - 5, y: 36 * T, o: i && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function y0(o, n, i, s, h, b, g, v) {
  const { S: A, C: T, cw: _, yb: L, glowAt: O, soft: k, tw: Y, sy: X } = o, W = new Array(i * s), N = new Uint8Array(i * s), et = new Uint8Array(i * s), rt = (Z, st, ct, bt, ot) => {
    ct == null || Z < 0 || st < 0 || Z >= i || st >= s || (bt >= 1 || bt > en(Z + 5, st + 3)) && (W[st * i + Z] = ct, N[st * i + Z] = ot);
  }, ft = (Z, st, ct, bt) => {
    for (let ot = Math.max(0, Math.floor(st - ct) - 1); ot <= Math.min(s - 1, st + ct + 1); ot++) for (let pt = Math.max(0, Math.floor(Z - ct) - 1); pt <= Math.min(i - 1, Z + ct + 1); pt++) bt(pt, ot, pt + 0.5 - Z, ot + 0.5 - st);
  }, tt = (Z, st, ct) => {
    for (let ot = 0; ot < Z.length - 1; ot++) {
      const pt = (ot + st) * _;
      if (ct < pt - Y / 2) return [Z[ot], Z[ot], 0];
      if (ct <= pt + Y / 2) return [Z[ot], Z[ot + 1], (ct - pt + Y / 2) / Y];
    }
    const bt = Z[Z.length - 1];
    return [bt, bt, 0];
  }, F = A.filter((Z) => !Z.night).map((Z) => Z.sky), q = A.filter((Z) => Z.night).map((Z) => Z.sky), it = k / b, ut = 16 * X / b;
  for (let Z = 0; Z < i; Z++) {
    const st = (Z + 0.5) * h, ct = L(st) / b, bt = tt(F, 0.75, st), ot = tt(q, 1.25, st), pt = O(st);
    for (let j = 0; j < s; j++) {
      const wt = en(Z, j), Lt = j + 0.5 - ct, Wt = (it > 0.01 ? on(0.5 + Lt / it) : Lt > 0 ? 1 : 0) > wt;
      let ne = Wt ? bt[2] > wt ? bt[1] : bt[0] : ot[2] > wt ? ot[1] : ot[0];
      (Wt ? on(((j + 0.5) / s - 0.45) / 0.55) * 0.7 : on(1 - (j + 0.5) / (s * 0.55)) * 0.7) > en(Z + 2, j + 5) && (ne = Wt ? za(ne, "#ffffff", 0.18) : za(ne, "#000000", 0.25)), Wt && Lt >= 0 && Lt < ut && pt.a * 1.3 * (1 - Lt / ut) > en(Z + 6, j + 1) && (ne = pt.c), W[j * i + Z] = ne, et[j * i + Z] = Wt ? 0 : 1;
    }
  }
  const Tt = za(T.sun, "#ffffff", 0.55), dt = za(T.moon, "#ffffff", 0.6);
  n.stars.forEach((Z) => {
    const st = Math.floor(Z.x / h), ct = Math.floor(Z.y / b);
    if (st < 0 || ct < 0 || st >= i || ct >= s || !et[ct * i + st] || Z.o < 0.15) return;
    const bt = Z.o > 0.45 ? T.star : za(T.star, W[ct * i + st], 0.5), ot = Z.big && Z.o > 0.6 ? Math.floor(Z.size / h) : 0;
    rt(st, ct, bt, 1, Nc);
    for (let pt = 1; pt <= ot; pt++) [[st - pt, ct], [st + pt, ct], [st, ct - pt], [st, ct + pt]].forEach((j) => {
      j[0] >= 0 && j[1] >= 0 && j[0] < i && j[1] < s && et[j[1] * i + j[0]] && rt(j[0], j[1], bt, 1, Nc);
    });
  }), n.suns.forEach((Z) => {
    const st = Math.max(1.5, Z.rad / h), ct = Z.x / h, bt = Z.y / b, ot = Z.halo / h * 0.85;
    if (ft(ct, bt, ot, (pt, j, wt, Lt) => {
      const Wt = Math.sqrt(wt * wt + Lt * Lt);
      Wt > st && Wt < ot && !et[j * i + pt] && rt(pt, j, Tt, 0.3 * (1 - (Wt - st) / (ot - st)), 0);
    }), v) {
      const pt = Math.floor(g / 500) % 2, j = Math.max(1, st * 0.3);
      for (let wt = 0; wt < 8; wt++) if (wt % 2 === pt) for (let Lt = st + 1.2; Lt < st + 1.2 + j; Lt += 0.7) rt(Math.floor(ct + Math.cos(wt * Math.PI / 4) * Lt), Math.floor(bt + Math.sin(wt * Math.PI / 4) * Lt), T.sun, 1, Qu);
    }
    ft(ct, bt, st, (pt, j, wt, Lt) => {
      wt * wt + Lt * Lt <= st * st && rt(pt, j, on(((Lt / st + 1) / 2 - 0.6) / 0.4) > en(pt, j) ? T.sunEdge : T.sun, 1, Zu);
    });
  }), n.moons.forEach((Z) => {
    const st = Math.max(1.5, Z.d * 0.37 / h), ct = Z.x / h, bt = Z.y / b, ot = ct + 0.547 * st, pt = bt - 0.503 * st, j = 0.82 * st;
    ft(ct, bt, st, (wt, Lt, Wt, ne) => {
      if (Wt * Wt + ne * ne > st * st) return;
      const la = wt + 0.5 - ot, ma = Lt + 0.5 - pt;
      la * la + ma * ma > j * j && rt(wt, Lt, on((ne + st) / (2 * st) * 1.1 - 0.1) > en(wt, Lt) ? T.moon : dt, 1, Ku);
    });
  }), n.clouds.forEach((Z) => {
    const st = Math.max(3, Z.w / h), ct = st * 0.6665, bt = Z.x / h, ot = Z.y / b, pt = za(Z.fill, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(ot) - 1); j <= Math.min(s - 1, ot + ct + 1); j++) for (let wt = Math.max(0, Math.floor(bt) - 1); wt <= Math.min(i - 1, bt + st + 1); wt++) {
      const Lt = (wt + 0.5 - bt) / st, Wt = (j + 0.5 - ot) / st;
      Hp(Lt, Wt) && rt(wt, j, !Hp(Lt, Wt + 1 / st) || on((Wt - 0.42) / 0.25) * 0.8 > en(wt, j) ? pt : Z.fill, Z.o, Xu);
    }
  }), n.fogs.forEach((Z) => {
    const st = Math.floor(Z.y / b), ct = Math.max(st, Math.floor((Z.y + 6 * X) / b) - 1), bt = Math.floor(Z.x / h), ot = Math.floor((Z.x + Z.w) / h);
    for (let pt = st; pt <= ct; pt++) for (let j = bt; j <= ot; j++) {
      const wt = (j - bt) / Math.max(1, ot - bt);
      rt(j, pt, Z.c, Z.a * (wt < 0.25 ? wt / 0.25 : wt > 0.75 ? (1 - wt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((Z) => {
    const st = Z.x / h, ct = Math.floor(Z.y / b);
    for (let bt = 0; bt < S; bt++) rt(Math.floor(st - 0.208 * bt * b / h), ct + bt, T.rain, Z.o, Ju);
  });
  const Ft = Math.max(0, Math.round(4.4 / h / 2.6));
  return n.flakes.forEach((Z) => {
    const st = Math.floor(Z.x / h), ct = Math.floor(Z.y / b);
    rt(st, ct, T.snow, Z.o, Or);
    for (let bt = 1; bt <= Ft; bt++)
      rt(st - bt, ct, T.snow, Z.o, Or), rt(st + bt, ct, T.snow, Z.o, Or), rt(st, ct - bt, T.snow, Z.o, Or), rt(st, ct + bt, T.snow, Z.o, Or);
  }), n.bolts.forEach((Z) => {
    if (h <= 3.5)
      for (let st = Math.floor(Z.y / b); st <= (Z.y + 24) / b; st++) for (let ct = Math.floor(Z.x / h); ct <= (Z.x + 11) / h; ct++)
        d0(w0, (ct + 0.5) * h - Z.x, (st + 0.5) * b - Z.y) && rt(ct, st, T.sun, 1, Is);
    else {
      const st = Math.round(Z.x / h), ct = Math.round(Z.y / b);
      v0.forEach((bt, ot) => bt.split("").forEach((pt, j) => {
        pt === "#" && rt(st + j, ct + ot, T.sun, 1, Is);
      }));
    }
  }), { col: W, ids: N };
}
function x0(o, n) {
  const i = n.px, s = Math.max(6, Math.round(n.width / i)), h = Math.max(6, Math.round(n.height / i)), b = n.width / s, g = n.height / h, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, A = (k) => {
    const Y = th(k, n);
    return y0(Y, eh(Y, { clock: v, ambient: n.ambient, seed: n.seed }), s, h, b, g, v, n.ambient);
  }, T = A(o), _ = n.reveal == null ? 1 : on(n.reveal);
  let L = T.col, O = T.ids;
  if (_ < 1) {
    const k = n.prev ? A(n.prev) : null, Y = _ * (s + 12);
    L = new Array(s * h), O = new Uint8Array(s * h);
    for (let X = 0; X < s * h; X++) {
      const W = X % s, N = X / s | 0;
      (n.reduce ? _ : on((Y - W) / 12)) > en(W, N) ? (L[X] = T.col[X], O[X] = T.ids[X]) : k ? (L[X] = k.col[X], O[X] = k.ids[X]) : (L[X] = null, O[X] = 255);
    }
  }
  return p0(L, O, s, h, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function k0(o, n, i) {
  const s = i.width, h = i.height, b = i.reveal == null ? 1 : on(i.reveal), g = (O, k) => {
    const Y = th(k, i);
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
  const v = o.canvas, A = v.__wxOff || (v.__wxOff = document.createElement("canvas"));
  (A.width !== v.width || A.height !== v.height) && (A.width = v.width, A.height = v.height);
  const T = A.getContext("2d");
  T.setTransform(o.getTransform()), T.clearRect(0, 0, s, h), g(T, n);
  const _ = b * (s + 64) - 64, L = T.createLinearGradient(_, 0, _ + 64, 0);
  L.addColorStop(0, "rgba(0,0,0,1)"), L.addColorStop(1, "rgba(0,0,0,0)"), T.globalCompositeOperation = "destination-in", T.fillStyle = L, T.fillRect(0, 0, s, h), T.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(A, 0, 0), o.restore();
}
function M0(o, n, i) {
  const { W: s, H: h, S: b, C: g, cw: v, yb: A, glowAt: T, soft: _, tw: L, sy: O } = n, k = o.getTransform().a || 1, Y = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * k : 0, o.shadowOffsetY = S ? 1.5 * k : 0;
  }, X = (S, Ft) => {
    const Z = Bs(S);
    return "rgba(" + Z[0] + "," + Z[1] + "," + Z[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, W = (S, Ft) => {
    const Z = o.createLinearGradient(0, 0, s, 0);
    Z.addColorStop(0, S[0]);
    for (let st = 0; st < S.length - 1; st++) {
      const ct = (st + Ft) * v, bt = (ct - L / 2) / s, ot = (ct + L / 2) / s;
      bt > 0 && bt < 1 && Z.addColorStop(bt, S[st]), ot > 0 && ot < 1 && Z.addColorStop(ot, S[st + 1]);
    }
    return Z.addColorStop(1, S[S.length - 1]), Z;
  }, N = Math.max(24, Math.ceil(s / 4)), et = (S, Ft) => {
    o.beginPath();
    for (let Z = 0; Z <= N; Z++) {
      const st = s * Z / N, ct = S == null ? 0 : A(st) + S;
      Z ? o.lineTo(st, ct) : o.moveTo(st, ct);
    }
    for (let Z = N; Z >= 0; Z--) {
      const st = s * Z / N;
      o.lineTo(st, A(st) + Ft);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = W(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, s, h);
  const rt = o.createLinearGradient(0, 0, s, 0);
  for (let S = 0; S <= 64; S++) {
    const Ft = T(s * S / 64);
    rt.addColorStop(S / 64, X(Ft.c, Math.min(1, Ft.a)));
  }
  o.fillStyle = rt;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, et(S * 2 * O, (S + 1) * 2 * O);
  o.fillStyle = W(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const ft = Math.max(0.5, _), tt = 6;
  o.globalAlpha = 1, et(null, -ft);
  for (let S = 0; S < tt; S++)
    o.globalAlpha = 1 - (S + 0.5) / tt, et(-ft + 2 * ft * S / tt, -ft + 2 * ft * (S + 1) / tt);
  o.globalAlpha = 1;
  const F = new Path2D(g0), q = new Path2D(m0), it = new Path2D(f0), ut = new Path2D(b0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(F), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Tt = za(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ft = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ft.addColorStop(0, X(Tt, 0.42)), Ft.addColorStop(0.7, X(Tt, 0)), o.fillStyle = Ft, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const Z = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    Z.addColorStop(0.6, g.sun), Z.addColorStop(1, g.sunEdge), o.fillStyle = Z, Y(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), Y(!1);
  });
  const dt = za(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ft = o.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, dt), Ft.addColorStop(1, g.moon), o.fillStyle = Ft, Y(!0), o.fill(q), Y(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, Y(!0), o.fill(it), Y(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ft = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ft.addColorStop(0, X(S.c, 0)), Ft.addColorStop(0.25, X(S.c, S.a)), Ft.addColorStop(0.75, X(S.c, S.a)), Ft.addColorStop(1, X(S.c, 0)), o.fillStyle = Ft, o.fillRect(S.x, S.y, S.w, 6 * O);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(ut), o.restore();
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
], ys = (o, n) => (B0[n % 8 * 8 + o % 8] + 0.5) / 64, so = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], ia = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Si = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Op = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, or = [255, 255, 255], ua = so("#26221e"), Ip = so("#0288d1"), P0 = so("#01579b"), cc = so(Ga.cloudDay), dc = so(Ga.cloudNight), xs = so(Ga.dusk), pc = so(Ga.sunEdge), R0 = so(Ga.sun), H0 = 10, Fp = 0.3, nn = 56, ah = 21;
function N0(o) {
  const n = Array.from({ length: ah }, () => new Array(nn).fill(void 0)), i = (g, v, A) => {
    n[v][g] = A;
  }, s = ia(xs, ua, 0.35), h = ia(ua, or, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? nn - 2 : nn - 1;
    for (let A = 6 - g; A <= v; A++) i(A, g, g < 2 ? s : g === 6 ? h : ua);
  }
  const b = [xs, pc, dc, so(Ga.skyRainDay), ia(xs, ua, 0.2), ia(o, ua, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const A = 9 + v * 6;
    for (let T = 0; T < g; T++) {
      const _ = b[(v * 2 + T * 3) % b.length];
      for (let L = A; L < A + 5; L++)
        i(L, 7 + T * 2, ia(_, ua, 0.12)), i(L, 8 + T * 2, T === g - 1 ? ia(_, or, 0.3) : _);
      i(A + 5, 7 + T * 2, ua), i(A + 5, 8 + T * 2, ua);
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
  const h = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(h * b * 4), v = so(s.skyClearDay), A = so(s.skyFogDay), T = N0(v), _ = Math.round(b * 0.55), L = Si(1 - Math.log(i / Fp) / Math.log(H0 / Fp)), O = ia(v, A, L), k = (N) => Si((N - 0.1) / 0.9), Y = Si((1 - Math.exp(-2 / i) - 0.2) / 0.8), X = Math.round(h / 2 - nn / 2), W = _ + 3;
  for (let N = 0; N < b; N++) {
    const et = W - 1 - N, rt = N - W;
    for (let ft = 0; ft < h; ft++) {
      const tt = ft - X;
      let F, q;
      const it = et >= 0 && et < ah && tt >= 0 && tt < nn ? T[et][tt] : void 0;
      if (it)
        F = it, q = Y;
      else if (et >= 0 && et <= 1 && tt >= 4 - et && tt <= 5 - et)
        F = ia(or, Ip, 0.15), q = Y;
      else if (N < _) {
        const dt = Si(((N + 0.5) / _ - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(dt + ys(ft + 2, N + 5)));
        F = ia(O, or, S * 0.1), q = L * 0.95;
      } else {
        const dt = (N - _ + 0.5) / (b - _), S = Math.min(1.5, 6e-3 / (dt * dt)), Ft = Si(dt * 1.4) * 3, Z = Math.min(3, Math.floor(Ft + ys(ft + 1, N + 6)));
        F = ia(Ip, P0, Z / 3);
        const st = 1 + Math.round(dt * 7), ct = Math.floor(ft / (st * 3)), bt = 0.06 + 0.16 * dt, ot = ft % (st * 3) < st;
        ot && Op(ct, N) < bt ? F = ia(F, or, 0.18 + 0.1 * (1 - dt)) : ot && dt > 0.5 && Op(ct, N - 1) < bt && (F = ia(F, ua, 0.12)), q = k(1 - Math.exp(-S / i)), rt === 0 && tt >= 3 && tt <= 8 ? (F = ia(F, or, tt < 6 ? 0.8 : 0.45), q = Y) : rt >= 0 && rt <= 2 && tt >= nn && tt < nn + 40 ? ((1 - (tt - nn) / 40) * (rt === 1 ? 0.9 : 0.5) > ys(ft, N + 3) && (F = ia(F, or, 0.5)), q = Y) : rt === 0 && tt >= 6 && tt < nn && (F = ia(F, ua, tt % 2 === 0 ? 0.35 : 0.2), q = Y);
      }
      const ut = q > ys(ft, N) ? A : F, Tt = (N * h + ft) * 4;
      g[Tt] = ut[0], g[Tt + 1] = ut[1], g[Tt + 2] = ut[2], g[Tt + 3] = 255;
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
    const L = _.pointerType === "touch" || je() ? null : (et = (N = _.target).closest) == null ? void 0 : et.call(N, uc);
    if (i && i !== L && s(i), i = L, !L || L.disabled) return;
    const O = He.pivot, k = L.getBoundingClientRect(), Y = (_.clientX - k.left) / k.width, X = (_.clientY - k.top) / k.height, W = 1;
    L.classList.add("mvPv", "mvMoving", "mvLit"), L.style.setProperty("--pv-persp", O.persp / Ps(Math.max(L.offsetWidth, L.offsetHeight)) + "px"), L.style.setProperty("--ry", (W * (Y - 0.5) * 2 * O.tilt * Ps(L.offsetWidth)).toFixed(3) + "deg"), L.style.setProperty("--rx", (W * -(X - 0.5) * 2 * O.tilt * Ps(L.offsetHeight)).toFixed(3) + "deg"), L.style.setProperty("--mx", (Y * 100).toFixed(1) + "%"), L.style.setProperty("--my", (X * 100).toFixed(1) + "%"), L._down || L.style.setProperty("--sc", hc(L, O.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    i && !i.contains(_.relatedTarget) && (s(i), i = null);
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const L = je() ? null : (k = (O = _.target).closest) == null ? void 0 : k.call(O, uc);
    L && (L._down = !0, L.classList.add("mvPv"), L.classList.remove("mvMoving"), L.style.setProperty("--sc", hc(L, He.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var O, k;
    const L = (k = (O = _.target).closest) == null ? void 0 : k.call(O, uc);
    L && (L._down = !1, L.style.setProperty("--sc", _.pointerType === "touch" ? 1 : hc(L, He.pivot.lift)));
  });
  let h = null;
  o.addEventListener("pointerover", (_) => {
    var L, O, k;
    _.pointerType !== "touch" && ((k = (O = (L = _.target).closest) == null ? void 0 : O.call(L, ".tfBar")) == null || k.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var O, k;
    const L = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    L && !L.contains(_.relatedTarget) && L !== h && L.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const L = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    L && (h = L, L.classList.add("mvHold"));
  });
  const b = (_) => {
    if (!h) return;
    h.classList.remove("mvHold");
    const L = h.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < L.left || _.clientX > L.right || _.clientY < L.top || _.clientY > L.bottom) && h.classList.remove("mvHover"), h = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (_) => {
    var L, O;
    (O = (L = _.target).matches) != null && O.call(L, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var L;
    (L = _.target.classList) == null || L.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var O, k;
    const L = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    !L || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (L.classList.add("mvHold"), clearTimeout(L._k), L._k = setTimeout(() => L.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var O, k;
    const L = (k = (O = _.target).closest) == null ? void 0 : k.call(O, "button.tfIcon[data-act]");
    L && U0(L);
  });
  let g = null;
  const v = (_, L, O) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const k = _.getBoundingClientRect(), Y = k.width / 2, X = k.height / 2, W = L.clientX - k.left - Y, N = L.clientY - k.top - X, et = W ? Y / Math.abs(W) : 1 / 0, rt = N ? X / Math.abs(N) : 1 / 0, ft = Math.min(Math.max(1 / Math.min(et, rt), 0), 1);
    let tt = Math.atan2(N, W) * 180 / Math.PI + 90;
    tt < 0 && (tt += 360);
    const F = O ? 100 : ft * 100;
    _.style.setProperty("--edge-proximity", F.toFixed(3)), _.style.setProperty("--cursor-angle", tt.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", O || F >= He.outline.lightAt);
  }, A = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, T = (_) => {
    var O;
    const L = (O = _.closest) == null ? void 0 : O.call(_, z0);
    return L && !n.classList.contains("tfEditing") ? L : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const L = T(_.target);
    g && g !== L && A(g), g = L, L && !L._down && v(L, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    g && !g.contains(_.relatedTarget) && (A(g), g = null);
  }), o.addEventListener("pointerdown", (_) => {
    const L = T(_.target);
    L && He.outline.press && (L._down = !0, v(L, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const L = T(_.target);
    L && (L._down = !1, _.pointerType === "touch" ? A(L) : v(L, _, !1));
  }), new MutationObserver((_) => {
    var L;
    for (const O of _) {
      const k = O.target;
      if (O.type === "attributes") {
        (L = k.classList) != null && L.contains("tfMoreBackdrop") && !k.hidden && O.oldValue !== null && qp(k);
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
  var k;
  if (je() || o._warp) return;
  const n = He.warp, i = n.amount / 100, s = o.firstElementChild;
  if (!s) return;
  const h = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = oh(o), A = (k = v.dataset) == null ? void 0 : k.k, T = nh(o, v), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const L = s.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...h, filter: b }], { duration: n.win, easing: Ne.exit, fill: "forwards" }), O = performance.now();
  L.finished.then(() => {
    const Y = () => {
      var ft, tt;
      const X = A ? v.isConnected ? v : (ft = g.querySelector) == null ? void 0 : ft.call(g, '[data-k="' + CSS.escape(A) + '"]') : v, W = X && rh(X, T);
      if (W === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - O < 420) {
        requestAnimationFrame(Y);
        return;
      }
      (((tt = W == null ? void 0 : W.matches) != null && tt.call(W, "button.tfIcon") ? W : o).firstElementChild || s).animate([{ ...h, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: n.wout, easing: Ne[n.ease] }), L.cancel(), o._warp = 0;
    };
    Y();
  });
}
const ih = (o) => {
  let n = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const s = o[i - 1] || o[i], h = o[i], b = o[i + 1], g = o[i + 2] || b, v = [h[0] + (b[0] - s[0]) / 6, h[1] + (b[1] - s[1]) / 6], A = [b[0] - (g[0] - h[0]) / 6, b[1] - (g[1] - h[1]) / 6];
    n += "C" + v.map((T) => T.toFixed(1)).join(" ") + " " + A.map((T) => T.toFixed(1)).join(" ") + " " + b.map((T) => T.toFixed(1)).join(" ");
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
  const b = He.tabs, g = b.stretch / 100, v = (_, L) => ({ left: _ + "px", width: L + "px" }), T = s > n ? v(n + (s - n) * (0.15 * (1 - g)), s + h - (n + (s - n) * (0.15 * (1 - g)))) : v(s, n + i - s - (n - s) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...T }, v(s, h)], { duration: b.dur, easing: Ne.standard });
}
function Y0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (h) => h.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), s = (h, b) => b ? [...h.children].indexOf(b) : -1;
  o.addEventListener("click", (h) => {
    var et, rt, ft;
    const b = (rt = (et = h.target).closest) == null ? void 0 : rt.call(et, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || je() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const A = s(g, v), T = g.getBoundingClientRect(), _ = v.getBoundingClientRect(), L = getComputedStyle(v).borderRadius, O = g.getRootNode(), k = oh(g), Y = (ft = k.dataset) == null ? void 0 : ft.k, X = nh(g, k), W = performance.now(), N = () => {
      var S, Ft, Z;
      const tt = Y && !k.isConnected ? (S = O.querySelector) == null ? void 0 : S.call(O, '[data-k="' + CSS.escape(Y) + '"]') : k, F = tt && rh(tt, X), q = (Ft = F == null ? void 0 : F.matches) != null && Ft.call(F, n) ? i(F) : null;
      if (!q || s(F, q) === A) {
        performance.now() - W < 700 && requestAnimationFrame(N);
        return;
      }
      const it = F.getBoundingClientRect(), ut = q.getBoundingClientRect(), Tt = getComputedStyle(q);
      (Z = F.querySelector(":scope>.mvSegInd")) == null || Z.remove();
      const dt = document.createElement("span");
      dt.className = "mvSegInd", dt.style.cssText = "top:" + (ut.top - it.top - F.clientTop) + "px;height:" + ut.height + "px;border-radius:" + L + ";background:" + Tt.backgroundColor + ";box-shadow:" + Tt.boxShadow, getComputedStyle(F).position === "static" && (F.style.position = "relative"), F.prepend(dt), F.classList.add("mvSegMoving"), Rs(dt, _.left - T.left - F.clientLeft, _.width, ut.left - it.left - F.clientLeft, ut.width), clearTimeout(F._seg), F._seg = setTimeout(() => {
        dt.remove(), F.classList.remove("mvSegMoving");
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
const $e = 6e4, le = 36e5, xa = 864e5, Ti = 1440, Q0 = 6, t1 = 10 * $e, Wp = 3, e1 = 3, ks = { day: [6, 22], waking: [7, 23], all: [0, 24] }, a1 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], o1 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", jp = (o, n, i, s) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((h) => {
  const b = Math.cos(h * Math.PI / 180), g = Math.sin(h * Math.PI / 180), v = i + 2, A = i + 2 + s;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * A).toFixed(2) + " " + (n + g * A).toFixed(2);
}).join("") + '"/>', Xo = (o) => '<path d="' + o1 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Jo = (o) => '<path d="' + o + '"/>', zp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function n1(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? zp : jp(12, 12, 4, 2.5);
    case "clear-night":
      return zp;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : jp(7.5, 7.5, 2.6, 1.4)) + Xo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Xo();
    case "fog":
      return Jo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Xo(i) + Jo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Xo(i) + Jo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Xo(i) + Jo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Xo(i) + Jo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Xo(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Xo(i) + Jo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Xo(i) + Jo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Jo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Jo("M12 8v5M12 16h.01");
  }
}
const gc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + n1(o, n) + "</svg>", r1 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), i1 = 30 * $e, s1 = 7, l1 = 3, Gp = 1, c1 = $e, d1 = 15 * $e, p1 = 5, ce = {
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
}, Oc = 7, tn = 256, u1 = 3, $p = 700, h1 = 1800, dh = 5 * $e;
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
  const h = Oc, b = 2 ** h, g = o * Math.PI / 180, v = (n + 180) / 360 * b * tn, A = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * tn, T = v - i / 2, _ = A - s / 2, L = [];
  for (let O = Math.floor(T / tn); O <= Math.floor((T + i - 1) / tn); O++) for (let k = Math.floor(_ / tn); k <= Math.floor((_ + s - 1) / tn); k++)
    k < 0 || k >= b || L.push({ x: (O % b + b) % b, y: k, left: O * tn - T, top: k * tn - _ });
  return L;
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
}, b1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], w1 = Object.keys(yt.phases), v1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Yp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ph = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ss = 100, Zp = "µg/m³", y1 = "weather_alerts.air_quality_pollen", Fs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], x1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, k1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], M1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, S1 = { daily: 1, hourly: 2 }, St = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), na = (o, n) => o.replace(/\{(\w+)\}/g, (i, s) => n[s] ?? ""), an = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Kp = /* @__PURE__ */ new Map();
function uh(o) {
  let n = Kp.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), h = document.createElementNS(i, "path");
    s.setAttribute("viewBox", "0 0 24 24"), s.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", h.setAttribute("d", o), s.append(h), document.body.append(s);
    const b = h.getBBox();
    s.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, A = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * A).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * A).toFixed(2) + "px" : "", Kp.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : an(o);
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
  let A = Xp.get(v);
  if (!A) {
    try {
      A = new Intl.NumberFormat(g, b);
    } catch {
      A = new Intl.NumberFormat(void 0, b);
    }
    Xp.set(v, A);
  }
  return A.format(s);
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
const ea = (o, n) => fh(qc(n), { hour: "numeric", minute: "2-digit", hourCycle: A1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: hh(n) }).format(o), Qp = (o, n) => fh(qc(n), { weekday: "short", timeZone: hh(n) }).format(o), L1 = (o, n) => o.toLocaleDateString(qc(n), { weekday: "narrow" }), ke = (o, n) => fe(n) ? te(Math.round(Number(n)), o.locale) + "°" : "–", _n = (o) => {
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
    const A = o(new Date(v)) - n;
    if (g < 0 != A < 0) {
      const T = new Date(b + (v - b) * g / (g - A));
      A > 0 ? h.rise ?? (h.rise = T) : h.set ?? (h.set = T);
    }
    b = v, g = A;
  }
  return h;
}
const kh = (o) => {
  const n = _n(o);
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
  var T, _, L;
  const i = Ir(o), s = i ? O1(n, i.lat, i.lon) : {}, h = (T = o == null ? void 0 : o.states) == null ? void 0 : T["sun.sun"], b = _n(n).getTime(), g = (O) => {
    const k = O ? new Date(O) : null;
    return k && Number.isFinite(k.getTime()) && _n(k).getTime() === b ? k : null;
  }, v = g((_ = h == null ? void 0 : h.attributes) == null ? void 0 : _.next_rising), A = g((L = h == null ? void 0 : h.attributes) == null ? void 0 : L.next_setting);
  return v && (s.rise = v), A && (s.set = A), s;
}
function q1(o) {
  var s;
  const n = (s = o == null ? void 0 : o.states) == null ? void 0 : s["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Ir(o);
  return i ? Vs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const nr = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Fr = (o, n) => {
  var s;
  const i = (s = o.entities) == null ? void 0 : s[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var s, h;
  for (const b of n) {
    const g = (s = o.states) == null ? void 0 : s[b];
    if (!nr(g)) continue;
    const v = (h = g.attributes) == null ? void 0 : h[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, V1 = (o, n) => n.map((i) => {
  var s;
  return (s = o.states) == null ? void 0 : s[i];
}).find(nr), W1 = (o, n, i) => n.map((s) => {
  var h;
  return (h = o.states) == null ? void 0 : h[s];
}).find((s) => {
  var h;
  return nr(s) && (((h = s.attributes) == null ? void 0 : h.supported_features) == null || Number(s.attributes.supported_features) & S1[i]);
});
function Sn(o, n, i) {
  var b, g, v, A;
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
      return h.temperature_unit || ((A = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : A.temperature) || "";
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
  return { number: te(s, o.locale), unit: Sn(o, n, i) };
}
function eu(o, n, i, s) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, s);
  } catch {
  }
  const h = Hs(o, n, i, s);
  return (h.number + " " + h.unit).trim();
}
function Qo(o, n) {
  var s;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (s = n.attributes) == null ? void 0 : s.unit_of_measurement;
  return g1[n.state] || (i && fe(n.state) ? te(n.state, o.locale) + " " + i : n.state);
}
function kn(o, n) {
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
  const s = Math.max(n - o, 1e-6), h = i[i.length - 1], b = i.find((T) => s / T <= 4) ?? h * Math.ceil(s / (4 * h)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const A = [];
  for (let T = g; T <= v + b / 1e3; T += b) A.push(T);
  return { min: g, max: v, ticks: A };
}
const U1 = (o, n, i) => {
  const s = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), h = s(o), b = s(n);
  return "rgb(" + h.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, Y1 = (o, n, i, s) => {
  const h = i * Math.abs(1 - 2 * s), b = s < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + h + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, pa = ({ icon: o, name: n, sub: i, visual: s, double: h, backdrop: b, cls: g, zone: v, callouts: A }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + uh(o) + '</div><div class="wbText"><span class="wbName">' + St(n) + "</span>" + (i ? '<span class="wbSub">' + St(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (A != null && A.length ? '<div class="wbCallouts">' + A.slice(0, 3).map((T) => Array.isArray(T) ? '<span class="wbCallout"><span>' + St(T[0]) + "</span><span>" + St(T[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + St(T) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + s + "</div>") + "</div>", Cs = (o) => '<div class="wbZoneM">' + o + "</div>", Wa = (o, n) => '<div class="wbValue"><span class="wbNum">' + St(o) + "</span>" + (n ? '<span class="wbUnitV">' + St(n) + "</span>" : "") + "</div>";
function Z1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, s = (v) => v / Ti * 100 + "%", h = (v) => v.map((A) => A.t + "," + i(A.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + s(v.t) + '">' + an(v.rise ? ce.sunsetUp : ce.sunsetDown) + St(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + St(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ti + ' 100" preserveAspectRatio="none">' + o.night.map(([v, A]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (A - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Ti + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + h(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + s(v.t + 12) + ";width:" + s(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + s(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + s(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + St(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + St(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + s(v.t) + '">' + St(v.label) + "</span>").join("") + "</div></div>", g;
}
function iu(o, n, i = 120, s = 300) {
  const g = o.map((N) => N.value), v = Math.min(...g), A = Math.max(...g), T = A - v || 1, _ = (N) => N / (o.length - 1) * s, L = (N) => 18 + (1 - (N - v) / T) * (i - 18 - 18), O = o.map((N, et) => [_(et), L(N.value)]), k = O.length > 2 ? ih(O) : "M" + O.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), Y = g.indexOf(A), X = g.indexOf(v), W = (N) => N === 0 ? "start" : N === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + s + " " + i + '" aria-hidden="true">' + sh(s, 18, i - 18) + ('<path class="wbArea" d="' + k + "L" + s + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + k + '" vector-effect="non-scaling-stroke"></path><text x="' + _(Y) + '" y="' + (L(A) - 6) + '" text-anchor="' + W(Y) + '">' + St(n(A)) + '</text><text x="' + _(X) + '" y="' + (L(v) + 14) + '" text-anchor="' + W(X) + '">' + St(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + St(o[0].label) + '</text><text x="' + s + '" y="' + i + '" text-anchor="end">' + St(o[o.length - 1].label) + "</text></svg>";
}
function K1(o, n) {
  const b = o.map((L) => L.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, A = v - g || 1, T = 300 / o.length, _ = (L) => (1 - (L - g) / A) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((L, O) => '<rect class="wbBar' + (L.now ? " wbNowBar" : "") + '" x="' + (O * T + T * 0.2) + '" y="' + _(L.value) + '" width="' + T * 0.6 + '" height="' + (104 - _(L.value)) + '" rx="6"></rect><text x="' + (O * T + T / 2) + '" y="120" text-anchor="middle">' + St(L.label) + "</text>").join("") + "</svg>";
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
function lu(o, { getHass: n, entityId: i, style: s = "bitmap", motion: h = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: A } = {}) {
  var Yi, Fn;
  const T = "wb" + ++tg + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = s;
  const L = document.createElement("div");
  L.className = "wbBento", _.appendChild(L), o.replaceChildren(_);
  const O = document.createElement("div");
  O.className = "wb wbPopup", O.dataset.style = s, O.hidden = !0;
  const k = ["aq_tile", "pollen_tile", "radar_tile"], Y = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), X = { current: "wide", hourly: "wide", compared_to_average: "double" }, W = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  Y.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = X[c] || "tile", m.hidden = !0, W.includes(c) && (m.dataset.xl = ""), L.appendChild(m), N[c] = { el: m, html: null };
  });
  let et = !1, rt = null, ft = 0, tt = -1, F = !1, q = null, it = "";
  const ut = "homecore-next-view", Tt = (() => {
    try {
      return localStorage.getItem(ut);
    } catch {
      return null;
    }
  })(), dt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Tt === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), Z = /* @__PURE__ */ new Date();
  const st = {}, ct = {}, bt = {}, ot = (c) => {
    var m;
    return ((m = bt[c]) == null ? void 0 : m.forecast) ?? [];
  }, pt = (c, m) => {
    var w;
    return bt[m] ? (w = c.states) == null ? void 0 : w[bt[m].entityId] : void 0;
  };
  function j(c) {
    const m = ct[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete ct[c]), bt[c] && delete bt[c];
  }
  function wt(c, m, w) {
    var R;
    if (typeof ((R = c.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((z) => {
        et || ct[m] !== y || (z != null && z.forecast ? bt[m] = { entityId: w, forecast: z.forecast } : delete bt[m], un());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (z) {
      y.unsub = Promise.reject(z);
    }
    y.unsub.catch(() => {
      ct[m] === y && delete ct[m];
    }), ct[m] = y;
  }
  function Lt(c, m) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const R = W1(c, m, y);
      ((w = ct[y]) == null ? void 0 : w.entityId) !== (R == null ? void 0 : R.entity_id) && (j(y), R && wt(c, y, R.entity_id));
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
    var K, Q, $;
    const w = Ie(c, m, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, R = await Wt(c, y, new Date(Date.now() - 3 * le)), z = ($ = (Q = (K = R == null ? void 0 : R[y]) == null ? void 0 : K.find((at) => {
      var lt;
      return typeof ((lt = at.a) == null ? void 0 : lt.pressure) == "number";
    })) == null ? void 0 : Q.a) == null ? void 0 : $.pressure;
    S.pressureHistory = typeof z == "number" ? { entityId: y, value: z } : void 0;
  }
  async function la(c, m) {
    var Q;
    const w = Ie(c, m, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, R = _n(/* @__PURE__ */ new Date()), z = await Wt(c, y, new Date(R.getTime() - s1 * xa)), K = /* @__PURE__ */ new Map();
    for (const $ of (z == null ? void 0 : z[y]) ?? []) {
      const at = (Q = $.a) == null ? void 0 : Q.temperature, lt = new Date(($.lc ?? $.lu) * 1e3);
      if (typeof at != "number" || lt >= R) continue;
      const vt = lt.toDateString();
      K.set(vt, Math.max(K.get(vt) ?? -1 / 0, at));
    }
    S.temperatureHistory = { entityId: y, dailyHighs: [...K.values()], days: [...K.entries()].map(([$, at]) => ({ date: new Date($), high: at })) };
  }
  async function ma(c) {
    const m = vc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function _o() {
    const c = n == null ? void 0 : n();
    if (!c || et || typeof c.callWS != "function") return;
    const m = Vt(c);
    S.lastFetch = Date.now(), [ne(c, m), la(c, m), ma(c)].forEach((w) => w.then(() => un(), () => {
    }));
  }
  async function Ta() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const m = Ie(c, Vt(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, y = _n(/* @__PURE__ */ new Date());
    try {
      const R = await Wt(c, w, y), z = (K) => ((R == null ? void 0 : R[w]) ?? []).map((Q) => {
        var $;
        return { time: Q.lu * 1e3, value: ($ = Q.a) == null ? void 0 : $[K] };
      }).filter((Q) => typeof Q.value == "number");
      S.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: z("temperature"), humidity: z("humidity") }, un();
    } catch {
    }
  }
  async function ln(c) {
    const m = n == null ? void 0 : n();
    if (m)
      try {
        const w = await Wt(m, c, new Date(Date.now() - 24 * le), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((z) => fe(z.s)), R = Math.max(1, Math.ceil(y.length / 48));
        S.aqHistory = { entityId: c, points: y.filter((z, K) => K % R === 0).map((z) => ({ label: ea(new Date(z.lu * 1e3), m), value: Number(z.s) })) }, un();
      } catch {
      }
  }
  function Tn(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      S.categories = z1(m);
    }, () => {
      S.categories = {};
    }).then(() => un()));
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
      const R = E0(c, m === 90, w, T + "g-" + y);
      return '<span class="wbWx wbS' + m + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + St(ju(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const qr = () => ot("daily").filter((c) => c.templow != null).slice(0, Q0);
  function kt(c, m) {
    const w = new Date(m.datetime), y = /* @__PURE__ */ new Date();
    return Pr(w, y) ? yt.today : Pr(w, new Date(y.getTime() + xa)) ? yt.tomorrow : Qp(w, c);
  }
  const Dn = (c, m, w) => w === 0 ? kt(c, m) : Qp(new Date(m.datetime), c);
  function Vr(c, m) {
    var lt, vt, Bt, Et;
    const w = V1(c, m);
    if (!w) return "";
    const y = qr(), R = dt.openDay !== void 0 ? y[dt.openDay] : void 0, z = Ie(c, m, "temperature"), K = y[0], Q = K && Pr(new Date(K.datetime), /* @__PURE__ */ new Date()), $ = ((vt = (lt = c.config) == null ? void 0 : lt.unit_system) == null ? void 0 : vt.temperature) || ((Bt = w.attributes) == null ? void 0 : Bt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + St(yt.openPage) + '">' : '<div class="wbCurrent">') + Qe(w.state, 90, q1(c), "now") + '<div class="wbTempBlock">' + (z && fe(z.value) ? '<div class="wbTemp"><span class="wbDeg">' + St(te(Math.round(Number(z.value)), c.locale)) + '</span><span class="wbUnit">' + St($) + "</span></div>" : "") + '<div class="wbPlace">' + St(((Et = c.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + St(Qo(c, w)) + "</div>" + (Q && K.templow != null ? '<div class="wbRange">' + St(na(yt.range, { high: ke(c, K.temperature), low: ke(c, K.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Me(c) + Ri(c), y.length) {
      const At = Q && z && fe(z.value) ? ke(c, z.value) : "", Gt = (Rt, mt, Ot) => Rt === 0 && At ? '<span class="wbAsDay">' + St(mt) + '</span><span class="wbAsNow">' + St(Ot) + "</span>" : St(mt);
      at += '<div class="wbColumns" role="list">' + y.map((Rt, mt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + mt + '" data-wb-focus="col-' + mt + '"><span class="wbDay">' + Gt(mt, Dn(c, Rt, mt), yt.now) + "</span>" + Qe(Rt.condition ?? "cloudy", 60, !1, "col" + mt) + '<span class="wbTemps"><span class="wbHi">' + Gt(mt, ke(c, Rt.temperature), At) + '</span><span class="wbLo">' + St(ke(c, Rt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + y.map((Rt, mt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + mt + '" data-wb-focus="half-' + mt + '">' + Qe(Rt.condition ?? "cloudy", 40, !1, "half" + mt) + '<span class="wbText"><span class="wbName">' + St(kt(c, Rt)) + '</span><span class="wbSub">' + St(na(yt.highLow, { high: ke(c, Rt.temperature), low: ke(c, Rt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (R ? Co(c, m, R) : "") + "</div>";
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
  }, ir = {
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
  function En(c) {
    const m = Date.now(), w = ot("hourly").filter((vt) => new Date(vt.datetime).getTime() > m - le).slice(0, 13);
    if (w.length < 2) return "";
    const y = (vt) => ea(new Date(vt.datetime), c), R = (vt) => Pi[vt.condition] || "", z = (vt) => ir[vt.condition] || vt.condition;
    let K = R(w[0]);
    if (!K) return "";
    let Q = w[0], $ = 0;
    for (const vt of w.slice(1))
      $ === 2 || z(vt) === z(Q) || !R(vt) || (K += ($ ? " and " : ", ") + R(vt) + " from " + y(vt), Q = vt, $++);
    const at = Number(w[0].temperature), lt = w.filter((vt) => fe(vt.temperature));
    if (fe(at) && lt.length) {
      const vt = lt.reduce((Et, At) => Number(At.temperature) < Number(Et.temperature) ? At : Et), Bt = lt.reduce((Et, At) => Number(At.temperature) > Number(Et.temperature) ? At : Et);
      at - Number(vt.temperature) >= 3 ? K += ", down to " + ke(c, vt.temperature) + " by " + y(vt) : Number(Bt.temperature) - at >= 3 && (K += ", up to " + ke(c, Bt.temperature) + " by " + y(Bt));
    }
    return K[0].toUpperCase() + K.slice(1) + ".";
  }
  const Me = (c) => {
    const m = En(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + St(m) + "</p></div>" : "";
  };
  function Ri(c) {
    const [m, w] = ks[v == null ? void 0 : v()] || ks.day, y = Date.now(), R = ot("hourly").filter((z) => {
      const K = new Date(z.datetime), Q = K.getHours();
      return K.getTime() > y - le / 2 && Q >= m && Q < w && fe(z.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((z, K) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + St(ea(new Date(z.datetime), c)) + "</span>" + Qe(z.condition ?? "cloudy", 40, z.is_daytime === !1, "hr" + K) + '<span class="wbHourTemp">' + St(ke(c, z.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Da(c) {
    const m = c.getTime(), w = Date.now() - le;
    return ot("hourly").filter((y) => {
      const R = new Date(y.datetime).getTime();
      return R >= m && R < m + xa && R > w;
    });
  }
  function Jt(c) {
    if (!c.length) return ["temperature"];
    const m = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && m.push("precipitation"), c.some((w) => w.humidity != null) && m.push("humidity"), m;
  }
  function Co(c, m, w) {
    const y = _n(new Date(w.datetime)), R = Da(y), z = Jt(R), K = z.includes(dt.dayMode) ? dt.dayMode : "temperature", Q = ($) => $ === "humidity" ? yt.humidity : yt.modes[$];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Qe(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + St(kt(c, w)) + '</span><span class="wbSub">' + St(na(yt.highLow, { high: ke(c, w.temperature), low: ke(c, w.templow) })) + '</span></div><button class="wbBack" title="' + St(yt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + an(ce.back) + "</button></div>" + (z.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + z.map(($) => '<button aria-pressed="' + ($ === K) + '" data-wb="day-mode" data-mode="' + $ + '" data-wb-focus="day-mode-' + $ + '">' + St(Q($)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Z1(Wr(c, m, y, R, K)) + "</div></div>";
  }
  function Wr(c, m, w, y, R) {
    var Oo;
    const z = w.getTime(), K = Date.now(), Q = Pr(w, /* @__PURE__ */ new Date()), $ = (ee) => (ee - z) / $e, at = (ee) => ea(new Date(ee), c), lt = (ee) => new Date(ee.datetime).getTime(), vt = [0, 3, 6, 9, 12, 15, 18, 21].map((ee) => ({ t: ee * 60, label: at(z + ee * le), minor: ee % 6 !== 0 })), { rise: Bt, set: Et } = Rr(c, w), At = [], Gt = [];
    Bt && (At.push({ t: $(Bt.getTime()), label: at(Bt.getTime()), rise: !0 }), Gt.push([0, $(Bt.getTime())])), Et && (At.push({ t: $(Et.getTime()), label: at(Et.getTime()), rise: !1 }), Gt.push([$(Et.getTime()), Ti]));
    const Rt = Ir(c);
    !Bt && !Et && Rt && Vs(new Date(z + xa / 2), Rt.lat, Rt.lon) < 0 && Gt.push([0, Ti]);
    const mt = Q ? $(K) : void 0, Ot = { hours: vt, sun: At, night: Gt };
    if (!y.length && !Q) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    if (R === "precipitation") {
      const ee = y.some((oa) => oa.precipitation_probability != null), Io = y.map((oa) => ({ t: $(lt(oa)), v: Number((ee ? oa.precipitation_probability : oa.precipitation) ?? 0) })), mo = Sn(c, pt(c, "hourly"), "precipitation"), Fo = Math.max(0, ...Io.map((oa) => oa.v)), si = ee ? 100 : ru(0, Math.max(Fo, 1), [0.5, 1, 2, 5, 10]).max, Zi = (oa) => ee ? te(oa, c.locale) + "%" : te(oa, c.locale, { maximumFractionDigits: 1 }) + " " + mo, yr = Io.find((oa) => oa.v === Fo);
      return {
        ...Ot,
        kind: "bars",
        points: Io,
        min: 0,
        max: si,
        ticks: [0, si / 2, si],
        format: Zi,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: yr && Fo > 0 ? { t: yr.t + 30, v: yr.v, label: Zi(yr.v) } : void 0,
        note: Fo > 0 ? void 0 : yt.noRain
      };
    }
    const qt = R === "humidity" ? "humidity" : "temperature", ve = y.filter((ee) => ee[qt] != null && (!Q || lt(ee) >= K)).map((ee) => ({ t: $(lt(ee)), v: Number(ee[qt]) }));
    let Dt, re = [];
    if (mt !== void 0) {
      const ee = Ie(c, m, qt);
      ee && fe(ee.value) && (Dt = { t: mt, v: Number(ee.value) }, ve.unshift(Dt)), re = (((Oo = S.todayHistory) == null ? void 0 : Oo.day) === w.toDateString() ? S.todayHistory[qt] : []).filter((mo) => mo.time <= K).map((mo) => ({ t: Math.max(0, $(mo.time)), v: mo.value })), Dt && re.length && re.push(Dt);
    }
    const $t = [...re, ...ve];
    if (!$t.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    const Sa = $t.map((ee) => ee.v), fo = ru(Math.min(...Sa), Math.max(...Sa), qt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    qt === "humidity" && (fo.min = Math.max(0, fo.min), fo.max = Math.min(100, fo.max), fo.ticks = fo.ticks.filter((ee) => ee >= 0 && ee <= 100));
    const ii = qt === "humidity" ? (ee) => te(ee, c.locale) + "%" : (ee) => ke(c, ee), vr = qt === "temperature" ? $t.reduce((ee, Io) => Io.v > ee.v ? Io : ee) : void 0;
    return { ...Ot, kind: "line", points: ve, past: re, ...fo, format: ii, now: Dt, peak: vr ? { ...vr, label: ii(vr.v) } : void 0 };
  }
  function jt(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function ka(c, m, w = Wp) {
    var z, K;
    const y = ot("daily"), R = [];
    for (let Q = 0; Q < w; Q++) for (const $ of [!1, !0]) {
      const at = c.getTime() + (Q * 24 + ($ ? 12 : 0)) * le, lt = at + 12 * le, vt = {};
      m.forEach((Et) => {
        const At = new Date(Et.datetime).getTime();
        Et.condition && At >= at && At < lt && (vt[Et.condition] = (vt[Et.condition] ?? 0) + (r1.has(Et.condition) ? 2 : 1));
      });
      let Bt = (z = Object.entries(vt).sort((Et, At) => At[1] - Et[1])[0]) == null ? void 0 : z[0];
      if (!Bt) {
        const Et = new Date(at).toDateString();
        Bt = ((K = y.find((At) => new Date(At.datetime).toDateString() === Et)) == null ? void 0 : K.condition) ?? "cloudy";
      }
      R.push({ cond: $ && Bt === "sunny" ? "clear-night" : Bt, night: $ });
    }
    return R;
  }
  function Hi(c, m, w) {
    const y = pt(c, "hourly"), R = m.precipitation_probability != null ? te(m.precipitation_probability, c.locale) + "%" : "", z = m.precipitation ? te(m.precipitation, c.locale) + " " + Sn(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return R ? [R, z] : [z || "–", ""];
      case "wind":
        return m.wind_speed != null ? [te(Math.round(m.wind_speed), c.locale), Sn(c, y, "wind_speed")] : ["–", ""];
      default:
        return [ke(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Ni(c, m, w) {
    const [y, R] = ks[v == null ? void 0 : v()] || ks.day, z = [];
    for (let K = 0; K < 4 && z.length < 3; K++) {
      const Q = /* @__PURE__ */ new Date();
      Q.setHours(0, 0, 0, 0), Q.setDate(Q.getDate() + K);
      const $ = new Date(Q);
      $.setHours(R, 0, 0, 0), Q.setHours(y, 0, 0, 0), !($.getTime() <= w || !m.some((at) => {
        const lt = new Date(at.datetime).getTime();
        return lt >= Q.getTime() && lt <= $.getTime();
      })) && z.push({ a: Q.getTime(), b: $.getTime(), label: kt(c, { datetime: Q.toISOString() }) });
    }
    return z;
  }
  function Ea(c, m, w, y, R, z) {
    const K = (w.b - m.a) / le, Q = (mt) => ((mt - m.a) / le).toFixed(3), $ = 80, at = 32, lt = [];
    for (const mt = new Date(m.a - xa); mt.getTime() < w.b + xa; mt.setDate(mt.getDate() + 1)) {
      const { rise: Ot, set: qt } = Rr(c, new Date(mt));
      Ot && qt && lt.push({ rise: Ot.getTime(), set: qt.getTime() });
    }
    const vt = (mt, Ot) => $ - ($ - at) * Math.sin(Math.PI * (Ot - mt.rise) / (mt.set - mt.rise)), Bt = (mt) => !lt.some((Ot) => mt >= Ot.rise && mt <= Ot.set);
    let Et = "", At = "", Gt = "";
    lt.forEach((mt, Ot) => {
      const qt = [];
      for (let Dt = mt.rise; Dt <= mt.set; Dt += 15 * $e) qt.push(Q(Dt) + "," + vt(mt, Dt).toFixed(2));
      qt.push(Q(mt.set) + "," + $), Et += '<polyline class="wbLineArc" points="' + qt.join(" ") + '"/>';
      const ve = lt[Ot + 1];
      ve && (Et += '<rect class="wbLineNight" x="' + Q(mt.set) + '" y="0" width="' + ((ve.rise - mt.set) / le).toFixed(3) + '" height="100"/>'), [[mt.rise, "↑"], [mt.set, "↓"]].forEach(([Dt, re]) => {
        Dt < m.a || Dt > w.b || (At += '<line class="wbLineEdge" x1="' + Q(Dt) + '" x2="' + Q(Dt) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + z(Dt) + '">' + re + " " + St(ea(new Date(Dt), c)) + "</span>");
      });
    });
    const Rt = lt.find((mt) => R >= mt.rise && R <= mt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + K + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + At + '<line class="wbLineHorizon" x1="0" x2="' + K + '" y1="' + $ + '" y2="' + $ + '"/></svg>' + Gt + (Rt ? '<span class="wbLineNow" style="left:' + z(R) + ";top:" + vt(Rt, R) + '%">' + gc("sunny", !1) + "</span>" : "") + y.filter((mt) => mt.entry && !mt.now).map((mt) => '<span class="wbLineGlyph' + mt.edge + '" style="left:' + z(mt.t) + '">' + gc(mt.entry.condition ?? "cloudy", Bt(mt.t)) + "</span>").join("");
  }
  function De(c, m) {
    delete st.hourly;
    const w = dt.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + St(w === "bars" ? yt.nextDays : yt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + St(yt.showAs) + '">' + ["strip", "bars"].map((Dt) => '<button aria-pressed="' + (Dt === w) + '" data-wb="hourly-view" data-view="' + Dt + '" data-wb-focus="hourly-view-' + Dt + '">' + St(yt.views[Dt]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return Bn(c, m, y);
    const R = ot("hourly"), z = Math.floor(Date.now() / $e) * $e, K = R.filter((Dt) => new Date(Dt.datetime).getTime() > z - le);
    if (!K.length) return "";
    const Q = jt(K), $ = Q.includes(dt.hourlyMode) ? dt.hourlyMode : "temperature", at = Ni(c, R, z);
    if (!at.length) return "";
    const lt = at[0], vt = at[at.length - 1], Bt = (lt.b - lt.a) / le, Et = (Dt) => "calc(var(--wb-u) * " + ((Dt - lt.a) / le).toFixed(3) + ")", At = new Date(lt.a);
    At.setHours(6, 0, 0, 0), At.getTime() > lt.a && At.setDate(At.getDate() - 1);
    const Gt = Math.ceil((vt.b - At.getTime()) / xa);
    s !== "line" && (st.hourly = { segs: ka(At, R, Gt), seed: At.getDate(), columns: Gt });
    const Rt = (Dt) => Dt === lt.a ? " wbFirst" : Dt === vt.b ? " wbLast" : "", mt = [];
    for (let Dt = lt.a; Dt < vt.b; ) {
      const re = new Date(Dt);
      re.setHours(24, 0, 0, 0);
      const $t = Math.min(re.getTime(), vt.b);
      mt.push({ a: Dt, b: $t, label: kt(c, { datetime: new Date(Dt).toISOString() }), page: at.find((Sa) => Sa.a >= Dt && Sa.a < $t) || at.find((Sa) => Sa.a < $t && Sa.b > Dt) }), Dt = $t;
    }
    const Ot = z > lt.a && z < vt.b ? Math.floor((z - lt.a) / (2 * le)) * 2 : 0, qt = [];
    for (let Dt = lt.a; Dt <= vt.b; Dt += le) {
      const re = new Date(Dt), $t = Rt(Dt);
      !$t && re.getHours() % e1 || !$t && (Math.abs(lt.a - Dt) < 2 * le || Math.abs(vt.b - Dt) < 2 * le) || z >= lt.a && Math.abs(Dt - z) < 1.5 * le && !$t || qt.push({ t: Dt, edge: $t, label: ea(re, c), entry: Dt >= z - le ? R.find((Sa) => new Date(Sa.datetime).getTime() === Dt) : void 0 });
    }
    z > lt.a && z < lt.b && qt.push({ t: z, edge: z - lt.a < le ? " wbFirst" : lt.b - z < le ? " wbLast" : "", label: yt.now, entry: K[0], now: !0 });
    const ve = (Dt, re) => '<span class="wbMark' + Dt.edge + (Dt.now ? " wbNowMark" : "") + '" style="left:' + Et(Dt.t) + '">' + re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (Q.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Q.map((Dt) => '<button aria-pressed="' + (Dt === $) + '" data-wb="hourly-mode" data-mode="' + Dt + '" data-wb-focus="hourly-mode-' + Dt + '">' + St(yt.modes[Dt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + St(yt.nextHours) + '" data-span="' + Bt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Bt + ");width:calc(var(--wb-u) * " + (vt.b - lt.a) / le + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((vt.b - lt.a) / (2 * le)) + 1)].map((Dt, re) => '<i class="wbSnap" style="left:' + Et(lt.a + re * 2 * le) + '"></i>').join("") + '<div class="wbDays">' + mt.map((Dt, re) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Dt.b - Dt.a) / le).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (re === 0 ? Ot : (((($t = Dt.page) == null ? void 0 : $t.a) ?? Dt.a) - lt.a) / le) + '" data-wb-focus="hours-day-' + re + '">' + St(Dt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + qt.map((Dt) => ve(Dt, St(Dt.label))).join("") + "</div>" + (s === "line" ? '<div class="wbSky wbLineSky">' + Ea(c, lt, vt, qt, z, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(At.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (s === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (z > lt.a ? '<i class="wbPast" style="width:' + Et(Math.min(z, vt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(z) + '"></i>' : "") + mt.slice(1).map((Dt) => '<i class="wbMidnight" style="left:' + Et(Dt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + qt.map((Dt) => {
      if (!Dt.entry) return "";
      const [re, $t] = Hi(c, Dt.entry, $);
      return ve(Dt, '<span class="wbPrimaryV">' + St(re) + '</span><span class="wbSecondary">' + St($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Oi(c) {
    const m = a1, w = m.findIndex(([$]) => $ >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [y, R] = m[w - 1], [z, K] = m[w], Q = (c - y) / (z - y);
    return "rgb(" + R.map(($, at) => Math.round($ + (K[at] - $) * Q)).join(",") + ")";
  }
  function Bn(c, m, w) {
    var Et;
    const y = ot("daily").filter((At) => fe(At.templow) && fe(At.temperature)).slice(0, 7);
    if (!y.length) return "";
    const R = Math.min(...y.map((At) => Number(At.templow))), z = Math.max(...y.map((At) => Number(At.temperature))), K = Math.max(1, z - R), Q = (At) => Math.max(0, Math.min(100, (At - R) / K * 100)).toFixed(2), $ = /F/.test(Sn(c, pt(c, "daily"), "temperature")), at = (At) => $ ? (At - 32) / 1.8 : At, lt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((At) => Oi(at(R + At * K)) + " " + At * 100 + "%").join(",") + ")", vt = (Et = Ie(c, m, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(ot("hourly").filter((At) => new Date(At.datetime).getTime() > Date.now() - le)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((At, Gt) => {
      const Rt = kt(c, At), mt = Pr(new Date(At.datetime), /* @__PURE__ */ new Date()), Ot = Number(At.templow), qt = Number(At.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + St(na(yt.rangeRow, { day: Rt, low: ke(c, Ot), high: ke(c, qt) })) + '"><span class="wbRangeDay">' + St(Rt) + "</span>" + Qe(At.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + St(ke(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + lt + ";clip-path:inset(0 " + (100 - Q(qt)) + "% 0 " + Q(Ot) + '% round 4px)"></i>' + (mt && fe(vt) ? '<i class="wbRangeNow" style="left:' + Q(Number(vt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + St(ke(c, qt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const jr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], zr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gr = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [y, R] = c[w - 1], [z, K] = c[w];
      return U1(R, K, (m - y) / (z - y));
    }
    return c[c.length - 1][1];
  }, cn = (c, m, w) => {
    if (!m || !w) return jr[5][1];
    const y = (c.getTime() - w.getTime()) / $e;
    return y >= -90 ? Gr(zr, y) : Gr(jr, (c.getTime() - m.getTime()) / $e);
  }, Ws = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function lo(c) {
    const m = Ft, { rise: w, set: y } = Rr(c, m), R = w && y ? Math.round((y.getTime() - w.getTime()) / $e) : 0, z = Math.floor(R / 60), K = R % 60, Q = (ve) => ve ? ea(ve, c) : "–", $ = new Date(m);
    $.setDate($.getDate() + 1);
    const at = Rr(c, $), lt = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / $e) : 0, vt = new Date(m);
    vt.setDate(vt.getDate() - 1);
    const Bt = !!(w && y && m >= w && m <= y), Et = !!(w && m < w), At = Bt ? w : Et ? Rr(c, vt).set : y, Gt = Bt ? y : Et ? w : at.rise, Rt = At && Gt ? Math.min(1, Math.max(0, (m.getTime() - At.getTime()) / (Gt.getTime() - At.getTime()))) : 0, mt = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / $e)) : 0, Ot = Gt ? Ws(mt) : "–", qt = Bt ? yt.untilSunset : yt.untilSunrise;
    return pa({
      icon: ce.sunny,
      name: yt.sun,
      sub: R ? na(yt.daylightShort, { hours: z, minutes: K }) : void 0,
      cls: "wbSunTile",
      callouts: [[yt.callout.riseTomorrow, Q(at.rise)], [yt.callout.setTomorrow, Q(at.set)], ...lt ? [[yt.callout.dayTomorrow, Math.floor(lt / 60) + "h " + lt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + cn(m, w, y) + '"><svg class="wbSunTrack" data-up="' + (Bt ? 1 : 0) + '" data-f="' + Rt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + St(Ot) + '</span><span class="wbSunWord">' + St(qt) + '</span></div><span class="wbSunAt wbSunRise">' + St(Q(w)) + '</span><span class="wbSunAt wbSunSet">' + St(Q(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Cs(Wa(Ot, ""))
    });
  }
  const Ee = 22;
  function sr(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Ee, R = y / 2, z = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < y * 3 || w < y * 3 || c.dataset.drawn === z) return;
    c.dataset.drawn = z;
    const K = "M" + R + " " + (w - y) + "V" + y + "A" + R + " " + R + " 0 0 1 " + y + " " + R + "H" + (m - y) + "A" + R + " " + R + " 0 0 1 " + (m - R) + " " + y + "V" + (w - y), Q = "M" + (m - R) + " " + (w - y) + "A" + R + " " + R + " 0 0 1 " + (m - y) + " " + (w - R) + "H" + y + "A" + R + " " + R + " 0 0 1 " + R + " " + (w - y), $ = 16, at = 6, lt = "M" + $ + " 0H" + (m - $) + "A" + $ + " " + $ + " 0 0 1 " + m + " " + $ + "V" + (w - $) + "A" + $ + " " + $ + " 0 0 1 " + (m - $) + " " + w + "H" + $ + "A" + $ + " " + $ + " 0 0 1 0 " + (w - $) + "V" + $ + "A" + $ + " " + $ + " 0 0 1 " + $ + " 0ZM" + (y + at) + " " + y + "A" + at + " " + at + " 0 0 0 " + y + " " + (y + at) + "V" + (w - y - at) + "A" + at + " " + at + " 0 0 0 " + (y + at) + " " + (w - y) + "H" + (m - y - at) + "A" + at + " " + at + " 0 0 0 " + (m - y) + " " + (w - y - at) + "V" + (y + at) + "A" + at + " " + at + " 0 0 0 " + (m - y - at) + " " + y + "Z", vt = c.dataset.up === "1", Bt = Number(c.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const At = document.createElementNS(Et, "path");
    At.setAttribute("d", vt ? K : Q), c.replaceChildren(At);
    const Gt = At.getTotalLength(), Rt = At.getPointAtLength(Gt * Bt), mt = vt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + T + 'sun-day"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + T + 'sun-done"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (vt ? (mt * Bt).toFixed(1) + " " + (mt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + lt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + lt + '" mask="url(#' + T + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + lt + '" mask="url(#' + T + 'sun-done)"></path><circle class="wbSunDot' + (vt ? "" : " wbSunNight") + '" cx="' + Rt.x.toFixed(1) + '" cy="' + Rt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const Ao = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => sr(m.target))) : null;
  function $r() {
    Ao == null || Ao.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      sr(c), Ao == null || Ao.observe(c);
    });
  }
  function js(c, m, w) {
    const y = (K) => T + "moon-" + K, R = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + Y1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", z = (K, Q, $, at, lt, vt) => '<filter id="' + y(K) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Q + '" numOctaves="' + $ + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Bt) => "<feFunc" + Bt + ' type="linear" slope="' + lt + '" intercept="' + vt + '"></feFunc' + Bt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + z("mottle", "0.045", 4, 3, 1.8, -0.4) + z("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + X1.map(([K, Q, $, at, lt, vt]) => '<ellipse cx="' + K + '" cy="' + Q + '" rx="' + $ + '" ry="' + at + '" fill-opacity="' + vt + '" transform="rotate(' + lt + " " + K + " " + Q + ')"></ellipse>').join("") + "</g>" + J1.map(([K, Q, $]) => '<circle class="wbCrater" cx="' + K + '" cy="' + Q + '" r="' + $ + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + Q1.map(([K, Q]) => '<line x1="54.4" y1="95" x2="' + K + '" y2="' + Q + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + su.map(([K, Q, $]) => '<circle cx="' + K + '" cy="' + Q + '" r="' + $ * 2 + '"></circle>').join("") + "</g>" + su.map(([K, Q, $]) => '<circle class="wbBrightCenter" cx="' + K + '" cy="' + Q + '" r="' + $ + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ii(c) {
    const m = Z, w = Ir(c), y = (w == null ? void 0 : w.lat) ?? 0, R = wc(m), z = nu(c), K = z ? c.states[z] : void 0, Q = nr(K) && w1.includes(K.state) ? K.state : F1(R.phase), { rise: $, set: at } = w ? I1(m, w.lat, w.lon) : {}, lt = R.phase > 0.5 != y < 0, vt = te(Math.round(R.fraction * 100), c.locale) + "%", Bt = $ ?? at;
    return Bt && ea(Bt, c), pa({
      icon: ce.night,
      name: yt.moon,
      sub: yt.phases[Q],
      callouts: [...$ ? [[yt.callout.moonrise, ea($, c)]] : [], ...at ? [[yt.callout.moonset, ea(at, c)]] : [], [yt.callout.lit, vt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + js(R.fraction, lt, y < 0) + "</div>" + Cs(Wa(te(Math.round(R.fraction * 100), c.locale), "%"))
    });
  }
  function Ut(c, m) {
    var At;
    const w = Ie(c, m, "wind_speed");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "wind_gust_speed"), R = Ie(c, m, "wind_bearing"), z = R && fe(R.value) ? Number(R.value) : void 0, K = j1(Number(w.value), (At = w.stateObj.attributes) == null ? void 0 : At.wind_speed_unit), Q = Hs(c, w.stateObj, "wind_speed", w.value), $ = z !== void 0 ? yt.cardinal[b1[((z + 11.25) / 22.5 | 0) % 16]] : void 0, at = y ? eu(c, y.stateObj, "wind_gust_speed", y.value) : void 0, lt = [$ ? na(yt.windFrom, { direction: $ }) : void 0, K !== void 0 ? K + " " + yt.beaufort : void 0].filter(Boolean).join(" · ") || at, vt = (Gt, Rt) => {
      const mt = (Gt - 90) * Math.PI / 180;
      return [100 + Rt * Math.cos(mt), 100 + Rt * Math.sin(mt)];
    }, Bt = Array.from({ length: 36 }, (Gt, Rt) => Rt * 10).map((Gt) => {
      const Rt = Gt % 90 === 0, [mt, Ot] = vt(Gt, 97), [qt, ve] = vt(Gt, Rt ? 83 : 89);
      return '<line class="wbTick' + (Rt ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Ot + '" x2="' + qt + '" y2="' + ve + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Rt]) => {
      const [mt, Ot] = vt(Rt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + Ot + '">' + St(yt.cardinal[Gt]) + "</text>";
    }).join("");
    return pa({ icon: ce.windy, name: yt.wind, sub: lt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Bt + Et + (z !== void 0 ? '<path class="wbMarker" transform="rotate(' + z + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + St(Q.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + St(Q.unit) + "</text></svg>" });
  }
  const xt = (c, m) => {
    if (c < 3) return yt.advice.fine;
    if (c < 8) return yt.advice.sunblock;
    const w = Date.now(), y = ot("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > w && R.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? na(yt.advice.avoidUntil, { time: ea(new Date(y.datetime), m) }) : yt.advice.avoidToday;
  };
  function be(c, m) {
    const w = Ie(c, m, "uv_index");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), R = yt.uvLevel[au(y)], z = /* @__PURE__ */ new Date();
    z.setHours(23, 59, 59, 999);
    const K = ot("hourly").filter((lt) => lt.uv_index != null && new Date(lt.datetime) > /* @__PURE__ */ new Date() && new Date(lt.datetime) <= z).reduce((lt, vt) => !lt || vt.uv_index > lt.uv ? { uv: vt.uv_index, time: new Date(vt.datetime) } : lt, void 0), Q = v1[au(y)], $ = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + T + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + $.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Q + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Q + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Q + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + $.toFixed(1) + '" fill="url(#' + T + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + St(te(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + St(R) + "</span></div>" + Cs(Wa(te(Math.round(y), c.locale), ""));
    return pa({
      icon: ce.sunnyAlert,
      name: yt.metrics.uv_index,
      sub: K && K.uv > y ? na(yt.uvPeak, { level: R, uv_index: te(Math.round(K.uv), c.locale), time: ea(K.time, c) }) : R,
      zone: at,
      cls: "wbUv",
      callouts: [xt(y, c), [yt.callout.now, te(Math.round(y), c.locale) + " · " + R], [yt.callout.peak, K && K.uv > y ? te(Math.round(K.uv), c.locale) + " at " + ea(K.time, c) : yt.callout.now]]
    });
  }
  function zt(c) {
    const m = ot("daily")[0], w = S.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !fe(m.temperature) || !w || w.dailyHighs.length < l1) return "";
    const y = Number(m.temperature), R = w.dailyHighs.reduce((Rt, mt) => Rt + mt, 0) / w.dailyHighs.length, z = Math.round(y - R) || 0, K = z > 0 ? "above" : z < 0 ? "below" : "same", Q = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], $ = Q.map((Rt) => Rt.high).concat(R), at = Math.min(...$) - 1, lt = Math.max(...$) + 1, vt = (Rt) => (1 - (Rt - at) / (lt - at)) * 100, Bt = (Rt) => (Rt + 0.5) / Q.length * 100, Et = Q.map((Rt, mt) => [Bt(mt), vt(Rt.high)]), At = Et.map(([Rt, mt], Ot) => (Ot ? "L" : "M") + Rt.toFixed(2) + " " + mt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + T + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + At + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + T + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + vt(R).toFixed(2) + '" y2="' + vt(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + At + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + vt(R).toFixed(2) + '%">' + St(ke(c, R)) + "</span>" + Q.map((Rt, mt) => {
      const Ot = Rt.today ? " wbToday" : "", qt = "left:" + Bt(mt).toFixed(2) + "%;top:" + vt(Rt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + qt + '"></i><span class="wbAvgValue' + Ot + '" style="' + qt + '">' + St(ke(c, Rt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Q.map((Rt, mt) => '<span class="wbAvgDay' + (Rt.today ? " wbToday" : "") + '" style="left:' + Bt(mt).toFixed(2) + '%">' + St(L1(Rt.date, c)) + "</span>").join("") + "</div></div>";
    return pa({
      icon: ce.chartLine,
      name: yt.metrics.compared_to_average,
      double: !0,
      sub: na(yt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (z > 0 ? "+" : "") + St(ke(c, z)) + '</div><div class="wbCompareWords">' + St(yt.average[K]) + '</div><div class="wbCompareTemps">' + St(na(yt.todayVsAverage, { today: ke(c, y), average: ke(c, R) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, m) {
    const w = Ie(c, m, "humidity");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "dew_point"), R = Math.max(0, Math.min(100, Number(w.value)));
    return pa({
      icon: ce.waterPercent,
      name: yt.metrics.humidity,
      sub: y && fe(y.value) ? na(yt.dewPoint, { dew_point: ke(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Wa(te(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function $a(c, m) {
    var Rt, mt, Ot;
    const w = Ie(c, m, "pressure");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), R = (Rt = w.stateObj.attributes) == null ? void 0 : Rt.pressure_unit, z = ou(y, R), K = ((mt = S.pressureHistory) == null ? void 0 : mt.entityId) === w.stateObj.entity_id ? ou(S.pressureHistory.value, R) : void 0;
    let Q;
    if (z !== void 0 && K !== void 0) {
      const qt = z - K;
      Q = qt >= Gp ? "rising" : qt <= -Gp ? "falling" : "steady";
    }
    const $ = Hs(c, w.stateObj, "pressure", Math.round(y)), at = w.stateObj, lt = (qt) => R === "inHg" ? Math.round(qt * 100) / 100 : Math.round(qt), vt = (qt) => eu(c, at, "pressure", lt(qt)), Bt = K !== void 0 ? S.pressureHistory.value : void 0, Et = Bt !== void 0 ? lt(y - Bt) : void 0, At = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((qt) => fe(qt.pressure) && new Date(qt.datetime).getTime() >= Date.now() + 3 * le - 30 * $e) : void 0, Gt = [
      ...Q ? [yt.advice[Q]] : [],
      ...Bt !== void 0 ? [[yt.callout.hoursAgo, vt(Bt)], [yt.callout.change, (Et > 0 ? "+" : Et < 0 ? "−" : "") + vt(Math.abs(Et))]] : [],
      ...At ? [[yt.callout.inHours, vt(Number(At.pressure))]] : []
    ];
    return pa({
      icon: ce.gauge,
      name: yt.metrics.pressure,
      sub: Q ? yt.pressure[Q] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Wa($.number) + '<span class="wbTapeUnit">' + St($.unit) + "</span></div>" + (z !== void 0 ? Pn(c, z) : "") + "</div>"
    });
  }
  function Pn(c, m) {
    const R = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (z, K) => R + K).map((z) => {
      const K = 100 - (z - m) * 9;
      if (K < 22 || K > 178) return "";
      const Q = z % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(K - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Q ? 2 : 8) + '" x2="26" y1="' + K + '" y2="' + K + '"></line>' + (Q ? '<text class="wbTapeLabel" x="33" y="' + K + '">' + St(te(z, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + St(yt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + St(yt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function zs(c) {
    var $, at;
    const m = vc(c), w = m ? c.states[m] : void 0;
    if (!w || (($ = S.rain) == null ? void 0 : $.entityId) !== m || !fe(S.rain.change)) return "";
    const y = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", R = pt(c, "hourly"), z = Date.now() + xa, K = ot("hourly").filter((lt) => lt.precipitation != null && new Date(lt.datetime).getTime() <= z), Q = K.reduce((lt, vt) => lt + Number(vt.precipitation), 0);
    return pa({
      icon: ce.rainy,
      name: yt.metrics.precipitation,
      sub: R && K.length ? na(yt.rainExpected, { amount: te(Q, c.locale, { maximumFractionDigits: 1 }) + " " + Sn(c, R, "precipitation") }) : yt.rainLast24h,
      visual: Wa(te(S.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (K.length > 1 ? K1(K.map((lt) => ({ label: "", value: Number(lt.precipitation) }))) : "")
    });
  }
  function Ur(c, m) {
    const w = Ie(c, m, "visibility");
    if (!w || !fe(w.value)) return "";
    const y = Hs(c, w.stateObj, "visibility", w.value), R = V0(Number(w.value), Sn(c, w.stateObj, "visibility"));
    return pa({
      icon: ce.eyeOutline,
      name: yt.metrics.visibility,
      sub: yt.visibilityLevel[W0(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + St(Fi(c, R)) + '</div><div class="wbSeaValue">' + Wa(y.number, y.unit) + "</div></div>"
    });
  }
  function Fi(c, m) {
    var z;
    const w = q0((z = c.config) == null ? void 0 : z.country, m);
    if (w) return na(yt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = m / p1 * 60;
    if (y < 60) {
      const K = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (K < 60) return na(yt.walkMinutes, { minutes: te(K, c.locale) });
    }
    const R = Math.max(1, Math.round(y / 30) / 2);
    return R < 8 ? na(yt.walkHours, { hours: te(R, c.locale) }) : yt.walkDay;
  }
  function Gs(c) {
    S.categories === void 0 && Tn(c);
    const m = ge(c), w = ($) => $.map((at) => c.states[at]).filter(nr), y = w(m.air), R = w(m.pollen);
    if (!y.length && !R.length) return "";
    const z = [...y, ...R], K = ($) => R.includes($) ? ce.flower : ce.airFilter, Q = z.find(($) => $.entity_id === dt.aq);
    return Q ? $s(c, Q, K(Q)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + St(yt.airQuality) + '</h2></div><div class="wbAqTiles">' + z.map(($) => '<button class="wbTile" data-wb="aq-open" data-entity="' + St($.entity_id) + '"><span class="wbChip">' + an(K($)) + '</span><span class="wbText"><span class="wbName">' + St(kn(c, $)) + '</span><span class="wbSub">' + St(Qo(c, $)) + "</span></span></button>").join("") + "</div></div>";
  }
  function $s(c, m, w) {
    var lt, vt, Bt;
    const y = ((lt = m.attributes) == null ? void 0 : lt.unit_of_measurement) ?? "", R = ((vt = m.attributes) == null ? void 0 : vt.device_class) === "pm25" && y === Zp && fe(m.state), z = Number(m.state), K = R ? _s(z) : void 0, Q = ((Bt = S.aqHistory) == null ? void 0 : Bt.entityId) === m.entity_id ? S.aqHistory.points : void 0, $ = (Et) => Math.min(100, Math.max(0, Et / Ss * 100));
    let at;
    if (Q && Q.length > 1) at = iu(Q, (Et) => (te(Et, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (K) {
      let Et = 0;
      const At = ph.map(([Gt, Rt]) => {
        const mt = $(Math.min(Rt, Ss)), Ot = Yp[Gt] + " " + Et + "% " + mt + "%";
        return Et = mt, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + St(yt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ss + '" aria-valuenow="' + z + '" style="background:linear-gradient(to right, ' + At.join(", ") + ')"><i style="left:' + $(z) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ss + " " + Zp + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + St(Qo(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + an(w) + '</span><span class="wbText"><span class="wbName">' + St(kn(c, m)) + '</span><span class="wbSub">' + St(Qo(c, m)) + (K ? " · " + St(yt.aqLevel[K]) : "") + '</span></span><button class="wbBack" title="' + St(yt.back) + '" data-wb="aq-close">' + an(ce.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const Lo = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, qi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function To(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Fs.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && nr(w) && Fr(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Fs.map((w) => m.get(w)).filter(Boolean);
  }
  const Do = (c) => Object.values(c.states || {}).filter((m) => {
    var w, y;
    return m.entity_id.startsWith("sensor.") && nr(m) && Fr(c, m.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : y.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), lr = ["none", "very_low", "low", "moderate", "high", "very_high"], Ua = (c) => fe(c.state) ? Number(c.state) : lr.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), cr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, Vi = (c, m, w) => {
    const y = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? _s(m) : null : null;
    return y === "good" || y === "fair" ? yt.advice.window : y === "moderate" || y === null ? yt.advice.fine : yt.advice.closed;
  }, Us = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], co = (c) => Us[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], dr = "M43 43q1 8 0 10M77 42q1 8 -1 10", Eo = {
    good: [dr, "M34 69Q61 98 86 67"],
    fair: [dr, "M40 74Q61 89 81 72"],
    moderate: [dr, "M41 79Q60 76 80 81"],
    poor: [dr, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Bo = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Eo[c][0] + '"></path><path d="' + Eo[c][1] + '"></path></svg>';
  function dn(c) {
    const m = To(c), w = m[0];
    if (!w) return pa({ icon: ce.airFilter, name: yt.airQuality, sub: yt.noAir, visual: Wa("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, R = Number(w.state), z = fe(w.state), K = y === "aqi" && z ? qi(R) : y === "pm25" && z ? Lo[_s(R)] : Qo(c, w), Q = z ? te(Math.round(R), c.locale) : String(w.state), $ = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = z && y === "aqi" ? co(R) : z && y === "pm25" ? _s(R) : null;
    return pa(at ? {
      icon: ce.airFilter,
      name: yt.airQuality,
      sub: K,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Yp[at] + '">' + Bo(at) + '<div class="wbAqBig"><span class="wbAqNum">' + St(Q) + "</span>" + ($ ? '<span class="wbAqUnit">' + St($) + "</span>" : "") + "</div></div>" + Cs(Wa(Q, $)),
      callouts: [Vi(y, R, z), ...m.slice(1, 3).map((lt) => [kn(c, lt), Qo(c, lt)])]
    } : {
      icon: ce.airFilter,
      name: yt.airQuality,
      sub: K,
      cls: "wbBase",
      zone: Wa(Q, $),
      callouts: [Vi(y, R, z), ...m.slice(1, 3).map((lt) => [kn(c, lt), Qo(c, lt)])]
    });
  }
  const po = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ys = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, y) => {
      const [R, z] = po[y % 3], K = 10 + y * 7 % 9, Q = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + K + "s;animation-delay:-" + (y * 2.3 % K).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Q.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % Q).toFixed(1) + 's">' + z + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ya(c) {
    const m = Do(c).sort((R, z) => Ua(z) - Ua(R));
    if (!m.length) return pa({ icon: ce.flower, name: yt.pollen, sub: yt.noPollen, visual: Wa("–", ""), cls: "wbBase" });
    const w = m[0], y = (R) => fe(R.state) ? Qo(c, R) : cr(R.state);
    return pa({
      icon: ce.flower,
      name: yt.pollen,
      sub: kn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: Ys(Ua(w)) + Wa(y(w), ""),
      callouts: m.slice(0, 3).map((R) => [kn(c, R), y(R)])
    });
  }
  function Rn(c) {
    var Q;
    const m = Date.now(), w = ot("hourly").filter(($) => {
      const at = new Date($.datetime).getTime();
      return at > m - le && at < m + 12 * le;
    }), y = w.find(($) => ($.precipitation_probability ?? 0) >= 50 || ($.precipitation ?? 0) >= 0.2), R = y ? na(yt.rainFrom, { time: ea(new Date(Math.max(m, new Date(y.datetime).getTime())), c) }) : w.length ? yt.noRain12 : void 0, z = (A == null ? void 0 : A()) || "rainviewer";
    let K;
    if (z.startsWith("camera:")) {
      const $ = c.states[z.slice(7)], at = $ && $.state !== "unavailable" && ((Q = $.attributes) == null ? void 0 : Q.entity_picture);
      K = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + St(at) + '" data-src="' + St(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + St(yt.cameraOff) + "</span></div>";
    } else {
      const $ = Ir(c);
      K = $ ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + $.lat + '" data-lon="' + $.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + St(yt.noLocation) + "</span></div>";
    }
    return pa({ icon: ce.radar, name: yt.rainRadar, sub: R, cls: "wbBase wbRadarTile", visual: K });
  }
  const Yr = {
    current: Vr,
    hourly: De,
    sun: lo,
    moon: Ii,
    wind: Ut,
    uv_index: be,
    compared_to_average: zt,
    humidity: Fe,
    pressure: $a,
    precipitation: zs,
    visibility: Ur,
    air_quality: Gs,
    aq_tile: dn,
    pollen_tile: Ya,
    radar_tile: Rn
  }, Oe = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Po = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Zr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, pr = () => {
    const c = dt.range, m = Date.now();
    if (c.preset !== "custom") {
      const R = Oe.find(([z]) => z === c.preset)[2];
      return [m - R * xa, m];
    }
    const w = _n(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(m, _n(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + xa);
    return [Math.min(w, y - le), y];
  }, Zs = (c) => {
    const m = dt.range;
    if (m.preset !== "custom") return Oe.find(([R]) => R === m.preset)[1];
    const [w, y] = pr();
    return m.from === m.to ? Po(c, new Date(w)) : Po(c, new Date(w)) + " – " + Po(c, new Date(y - 1));
  }, Kr = () => dt.range.preset === "custom" ? dt.range.from + "_" + dt.range.to : dt.range.preset, Xr = (c, m) => m - c <= 2 * xa, uo = (c, m, w, y) => Xr(w, y) ? ea(m, c) : Po(c, m), ur = (c, m = 60) => {
    const w = Math.max(1, Math.ceil(c.length / m));
    return c.filter((y, R) => R % w === 0 || R === c.length - 1);
  }, Jr = (c, m, w, y, R = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(y).toISOString(),
    entity_ids: [m],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  }), pn = (c) => async (m, w, y, R) => {
    const z = Ie(m, w, c);
    if (!z) return [];
    const K = z.stateObj.entity_id, Q = await Jr(m, K, y, R);
    return ur(((Q == null ? void 0 : Q[K]) ?? []).map(($) => {
      var vt;
      const at = ((vt = $.a) == null ? void 0 : vt[c]) ?? (fe($.s) ? Number($.s) : void 0), lt = ($.lu ?? $.lc) * 1e3;
      return typeof at == "number" && lt >= y && lt <= R ? { t: new Date(lt), value: at } : null;
    }).filter(Boolean)).map(($) => ({ label: uo(m, $.t, y, R), value: $.value }));
  }, Wi = (c, m) => async (w, y, R, z) => {
    const K = c(w);
    if (!K) return [];
    const Q = K.entity_id, $ = await Jr(w, Q, R, z, !0);
    return ur((($ == null ? void 0 : $[Q]) ?? []).map((at) => {
      const lt = m(at.s), vt = at.lu * 1e3;
      return lt == null || !Number.isFinite(lt) || vt < R || vt > z ? null : { t: new Date(vt), value: lt };
    }).filter(Boolean)).map((at) => ({ label: uo(w, at.t, R, z), value: at.value }));
  }, ji = (c, m) => async (w, y, R, z) => {
    const K = Ir(w);
    if (!K) return [];
    const Q = [];
    if (Xr(R, z)) for (let $ = R; $ <= z; $ += le / 2) Q.push({ label: ea(new Date($), w), value: c(new Date($), K) });
    else for (let $ = z; $ >= R; $ -= xa) {
      const at = new Date($), lt = m(at, K, w);
      lt != null && Q.unshift({ label: Po(w, at), value: lt });
    }
    return ur(Q);
  }, Ro = (c) => Do(c).sort((m, w) => Ua(w) - Ua(m))[0], Ho = (c, m, w) => {
    const y = Ie(c, m, w);
    return y ? Sn(c, y.stateObj, w) : "";
  }, hr = {
    current: { name: () => yt.modes.temperature, icon: () => ce.sunny, load: pn("temperature"), fmt: (c, m, w) => ke(c, w), now: (c, m) => {
      var w;
      return ke(c, (w = Ie(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => yt.sun,
      icon: () => ce.sunny,
      load: ji((c, m) => Math.round(Vs(c, m.lat, m.lon) / ha), (c, m, w) => {
        const y = Rr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / le * 10) / 10 : null;
      }),
      fmt: (c, m, w, y) => y ? te(w, c.locale) + "°" : te(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => yt.moon,
      icon: () => ce.night,
      load: ji((c) => Math.round(wc(c).fraction * 100), (c) => Math.round(wc(c).fraction * 100)),
      fmt: (c, m, w) => te(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => yt.metrics.uv_index, icon: () => ce.sunnyAlert, load: pn("uv_index"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = Ie(c, m, "uv_index");
      return w ? te(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => yt.metrics.humidity, icon: () => ce.waterPercent, load: pn("humidity"), fmt: (c, m, w) => te(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = Ie(c, m, "humidity");
      return w ? te(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => yt.metrics.pressure, icon: () => ce.gauge, load: pn("pressure"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ho(c, m, "pressure"), now: (c, m) => {
      const w = Ie(c, m, "pressure");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ho(c, m, "pressure") : "";
    } },
    wind: { name: () => yt.wind, icon: () => ce.windy, load: pn("wind_speed"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ho(c, m, "wind_speed"), now: (c, m) => {
      const w = Ie(c, m, "wind_speed");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ho(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => yt.metrics.visibility, icon: () => ce.eyeOutline, load: pn("visibility"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale) + " " + Ho(c, m, "visibility"), now: (c, m) => {
      const w = Ie(c, m, "visibility");
      return w ? te(Number(w.value), c.locale) + " " + Ho(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => To(c)[0] ? kn(c, To(c)[0]) : yt.airQuality,
      icon: () => ce.airFilter,
      load: Wi((c) => To(c)[0], (c) => fe(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var z, K;
        const y = To(c)[0], R = (z = y == null ? void 0 : y.attributes) == null ? void 0 : z.device_class;
        return te(Math.round(w * 10) / 10, c.locale) + (R === "aqi" ? " AQI" : (K = y == null ? void 0 : y.attributes) != null && K.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = To(c)[0];
        return m ? Qo(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Ro(c) ? kn(c, Ro(c)) : yt.pollen,
      icon: () => ce.flower,
      load: Wi(Ro, (c) => {
        const m = Ua({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => cr(lr[Math.round(w)] || ""),
      now: (c) => {
        const m = Ro(c);
        return m ? cr(m.state) : "";
      }
    }
  }, No = {};
  let we = null;
  async function Ba(c) {
    const m = n == null ? void 0 : n();
    if (!m || !hr[c]) return;
    const w = c + "|" + Kr(), [y, R] = pr();
    if (No[w] && Date.now() - No[w].at < 5 * $e) return;
    No[w] = { at: Date.now(), points: null };
    try {
      No[w].points = await hr[c].load(m, Vt(m), y, R);
    } catch {
      No[w].points = [];
    }
    qe(!0), we === c && dt.graph === c && (we = null, Vp(O.querySelector(".wbGraphCard")));
    const z = dt.graph === c && O.querySelector(".wbGraph .wbChart");
    z && lh(z, z.querySelector(".wbLine"), z.querySelectorAll(".wbArea"));
  }
  function Ht(c, m) {
    const w = dt.range, y = Zr(Date.now()), [R, z] = pr(), K = w.pickFrom || Zr(R), Q = w.pickTo || Zr(z - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oe.map(([$, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === $) + '" data-wb="graph-preset" data-range="' + $ + '" data-wb-focus="graph-preset-' + $ + '">' + St(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + K + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + Q + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function fr(c, m, w) {
    var vt;
    const y = hr[w], [R, z] = pr(), K = Xr(R, z), Q = (vt = No[w + "|" + Kr()]) == null ? void 0 : vt.points, $ = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), lt = Q ? Q.length > 1 ? iu(Q, (Bt) => y.fmt(c, m, Bt, K), 220, $) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + St(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + uh(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + St(y.name(c)) + '</span><span class="wbSub">' + St(y.sub ? y.sub(K) : y.now ? y.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + an(ce.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!dt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + an(ce.calendar) + "<span>" + St(Zs(c)) + "</span>" + an(ce.chevronDown) + '</button><div class="wbGraph">' + lt + "</div></div>" + (dt.picking ? Ht() : "") + "</div>";
  }
  function qe(c) {
    var Bt, Et, At, Gt, Rt;
    const m = n == null ? void 0 : n();
    if (!m || et) return;
    const w = Vt(m);
    Lt(m, w), S.lastFetch || _o();
    const y = ge(m), R = nu(m), z = vc(m), K = [
      ...w.map((mt) => m.states[mt]),
      m.states["sun.sun"],
      R && m.states[R],
      z && m.states[z],
      ...y.air.map((mt) => m.states[mt]),
      ...y.pollen.map((mt) => m.states[mt]),
      ...Y.some((mt) => k.includes(mt)) ? [...To(m), ...Do(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / $e)
    ];
    if (!c && rt && K.length === rt.length && K.every((mt, Ot) => mt === rt[Ot])) return;
    rt = K;
    const Q = _.getRootNode(), $ = Q.activeElement || document.activeElement;
    for (const mt of Y) {
      const Ot = N[mt];
      let qt = "";
      try {
        qt = Yr[mt](m, w) || "";
      } catch {
        qt = "";
      }
      if (qt === Ot.html) continue;
      const ve = $ && Ot.el.contains($) ? (Bt = $.dataset) == null ? void 0 : Bt.wbFocus : void 0, Dt = Ot.el.querySelector(".wbStripScroll"), re = Dt ? Dt.scrollLeft : null;
      Ot.html = qt, Ot.el.hidden = !qt, Ot.el.innerHTML = qt;
      const $t = Ot.el.querySelector(".wbStripScroll");
      $t && re != null ? $t.scrollTo({ left: re }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), ve && !q && ((Et = Ot.el.querySelector('[data-wb-focus="' + ve + '"]')) == null || Et.focus());
    }
    let at = "";
    if (dt.graph)
      try {
        at = fr(m, w, dt.graph) || "";
      } catch {
        at = "";
      }
    if (at !== it) {
      const mt = $ && O.contains($) ? (At = $.dataset) == null ? void 0 : At.wbFocus : void 0;
      it = at, O.innerHTML = at, O.hidden = !at, at && !O.isConnected && (_.closest("#app") || _).appendChild(O), mt && !q && ((Gt = O.querySelector('[data-wb-focus="' + mt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    $r(), _.querySelectorAll(".wbRadarMap").forEach((mt) => {
      mt._tiles || aa(mt);
    }), q && ((Rt = _.querySelector('[data-wb-focus="' + q + '"]') || O.querySelector('[data-wb-focus="' + q + '"]')) == null || Rt.focus({ preventScroll: !0 }), q = null);
    let lt = !1, vt = !1;
    for (const mt of Y) {
      const Ot = N[mt], qt = !Ot.el.hidden, ve = X[mt] === "wide" || W.includes(mt), Dt = Y.indexOf(mt) >= Y.indexOf("moon"), re = qt && (Dt && ve && !lt || !ve && !vt);
      re && ve && (lt = !0), re && !ve && (vt = !0), Ot.el.toggleAttribute("data-break", re);
    }
    Nn(performance.now());
  }
  function un() {
    F || et || (F = !0, queueMicrotask(() => {
      F = !1, qe(!0);
    }));
  }
  function hn() {
    const c = getComputedStyle(_), m = (K) => c.getPropertyValue(K).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([K, Q]) => {
      m(Q) && (w[K] = m(Q));
    });
    const y = m("--color-text-primary") || "#f1f1f1", R = m("--color-bg-card") || "#222222", z = !!_.closest(".light");
    return { colors: { ...Ga, ...w }, ink: z ? y : R, paper: z ? R : y };
  }
  const Qr = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Hn = () => h && !_1();
  function zi(c, m) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((w) => mr(w, st[w.dataset.wbStrip], c, m));
  }
  function mr(c, m, w, y) {
    if (!m || !c.getClientRects().length) return;
    const R = c.clientWidth, z = c.clientHeight;
    if (!R || !z) return;
    const K = { width: R, height: z, columns: m.columns || Wp, colors: y.colors, clock: w, ambient: Hn(), seed: m.seed, soft: 1.5 };
    if (s === "smooth") {
      const Q = Math.min(2, window.devicePixelRatio || 1), $ = Math.round(R * Q), at = Math.round(z * Q);
      c.width !== $ && (c.width = $), c.height !== at && (c.height = at);
      const lt = c.getContext("2d");
      if (!lt) return;
      lt.setTransform(Q, 0, 0, Q, 0, 0), k0(lt, m.segs, K);
    } else Qr(c, x0(m.segs, { ...K, px: 2, oneBit: s === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Nn(c) {
    if (et) return;
    const m = hn();
    if (s !== "smooth") {
      const w = Hn();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Qr(y, r0(Qm(y.dataset.wbWx, m.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: s === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, R = w.clientHeight, z = Number(w.dataset.wbSea), K = y + "x" + R + ":" + z + ":" + m.colors.skyClearDay;
      !y || !R || !(z > 0) || w.dataset.painted === K || (w.dataset.painted = K, Qr(w, O0(y, R, z, m.colors)));
    }), zi(c, m);
  }
  function ho(c) {
    if (ft = 0, !(et || !Hn())) {
      if (!document.hidden)
        if (s === "smooth") zi(c, hn());
        else {
          const m = Math.floor(c / 100);
          m !== tt && (tt = m, Nn(c));
        }
      ft = requestAnimationFrame(ho);
    }
  }
  function gr() {
    _.classList.toggle("wbMotion", Hn()), !ft && !et && Hn() && (ft = requestAnimationFrame(ho));
  }
  function On(c) {
    var w, y, R, z, K, Q, $;
    if (c.target === O) {
      dt.graph = void 0, dt.picking = !1, qe(!0);
      return;
    }
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!m || !(_.contains(m) || O.contains(m))) {
      const at = (z = (R = c.target).closest) == null ? void 0 : z.call(R, ".wbItem"), lt = at == null ? void 0 : at.dataset.card;
      if (!at || !_.contains(at) || !hr[lt] || dt.graph === lt || _.closest(".tfEditing") || lt === "current" && g) return;
      dt.graph = lt, dt.picking = !1, q = "graph-close", qe(!0), (K = No[lt + "|" + Kr()]) != null && K.points ? Vp(O.querySelector(".wbGraphCard")) : we = lt, Ba(lt);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        dt.openDay = Number(m.dataset.index), dt.opener = m.dataset.wbFocus, q = "back-day";
        const at = qr()[dt.openDay], lt = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > t1;
        at && Pr(new Date(at.datetime), /* @__PURE__ */ new Date()) && lt && Ta();
        break;
      }
      case "close-day":
        dt.openDay = void 0, q = dt.opener, dt.opener = void 0;
        break;
      case "open-page":
        g == null || g();
        return;
      case "day-mode":
        dt.dayMode = m.dataset.mode;
        break;
      case "hourly-mode":
        dt.hourlyMode = m.dataset.mode;
        break;
      case "hourly-view":
        dt.hourlyView = m.dataset.view;
        try {
          localStorage.setItem(ut, dt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = _.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(m.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        dt.aq = m.dataset.entity, ln(dt.aq);
        break;
      case "aq-close":
        dt.aq = void 0;
        break;
      case "graph-close":
        dt.graph = void 0, dt.picking = !1;
        break;
      case "graph-pick":
        dt.picking = !dt.picking, q = dt.picking ? "graph-preset-" + (dt.range.preset === "custom" ? "day" : dt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        dt.range = { preset: m.dataset.range }, dt.picking = !1, q = "graph-pick", qe(!0), Ba(dt.graph);
        return;
      case "graph-apply": {
        let at = dt.range.pickFrom || ((Q = _.querySelector("[data-range-from]")) == null ? void 0 : Q.value), lt = dt.range.pickTo || (($ = _.querySelector("[data-range-to]")) == null ? void 0 : $.value);
        if (!at || !lt) return;
        at > lt && ([at, lt] = [lt, at]), dt.range = { preset: "custom", from: at, to: lt }, dt.picking = !1, q = "graph-pick", qe(!0), Ba(dt.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ga(c) {
    var m, w, y, R, z, K;
    c.key === "Escape" && dt.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (dt.openDay = void 0, q = dt.opener, dt.opener = void 0, qe(!0)) : c.key === "Escape" && dt.picking && ((R = (y = c.target).closest) != null && R.call(y, ".wbGraphCard")) ? (dt.picking = !1, q = "graph-pick", qe(!0)) : c.key === "Escape" && dt.graph && ((K = (z = c.target).closest) != null && K.call(z, ".wbGraphCard")) && (dt.graph = void 0, qe(!0));
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
      const w = m.reduce((y, R) => Math.abs(R.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? R : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const br = (c) => {
    var w, y;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? dt.range.pickFrom = m.value : (y = m.matches) != null && y.call(m, "[data-range-to]") && (dt.range.pickTo = m.value);
  };
  _.addEventListener("change", br), _.addEventListener("click", On), _.addEventListener("keydown", ga), O.addEventListener("change", br), O.addEventListener("click", On), O.addEventListener("keydown", ga), _.addEventListener("mousedown", ti);
  const Gi = 64, Ks = 30;
  let Ma = null, Za = 0;
  const fn = () => {
    Za = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (Ma) {
        const y = c.parentElement.getBoundingClientRect(), R = y.left + y.width / 2 - Ma.x, z = y.top + y.height / 2 - Ma.y, K = Math.hypot(R, z) || 1;
        if (K < Gi) {
          const Q = (1 - K / Gi) * Ks;
          m = R / K * Q, w = z / K * Q;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), Ma && (Za = requestAnimationFrame(fn));
  }, Ka = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || Ze != null && Ze.matches) {
      Ma && (Ma = null, Za || (Za = requestAnimationFrame(fn)));
      return;
    }
    Ma = { x: c.clientX, y: c.clientY }, Za || (Za = requestAnimationFrame(fn));
  }, $i = () => {
    Ma = null, Za || (Za = requestAnimationFrame(fn));
  };
  _.addEventListener("pointermove", Ka), _.addEventListener("pointerleave", $i);
  const Xa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Nn(performance.now())) : null;
  Xa == null || Xa.observe(_);
  const mn = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && aa(w);
  })) : null;
  function aa(c) {
    var K;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || et) return;
    const y = m1(Number(c.dataset.lat), Number(c.dataset.lon), m, w), R = !!((K = _.closest("#app")) != null && K.classList.contains("light")), z = (Q) => ' style="left:' + Q.left + "px;top:" + Q.top + 'px"';
    c._tiles = y, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((Q) => '<img src="https://' + "abcd"[(Q.x + Q.y) % 4] + ".basemaps.cartocdn.com/" + (R ? "light_all" : "dark_all") + "/" + Oc + "/" + Q.x + "/" + Q.y + '.png"' + z(Q) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', mn == null || mn.observe(c), f1().then((Q) => {
      !c.isConnected || et || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = Q.frames.map(($, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + y.map((lt) => '<img src="' + Q.host + $.path + "/" + tn + "/" + Oc + "/" + lt.x + "/" + lt.y + '/2/1_1.png"' + z(lt) + ' alt="">').join("") + "</div>").join(""), c._frames = Q.frames, c._hold = 0, In(c, Q.frames.findLastIndex(($) => $.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = yt.radarOff);
    });
  }
  function In(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((R) => {
      R.hidden = Number(R.dataset.i) !== m;
    });
    const y = w[m];
    c.querySelector(".wbRadarTime").textContent = ea(new Date(y.time * 1e3), n == null ? void 0 : n()) + (y.past ? "" : " · " + yt.forecastTag);
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
      const m = c._frames.length - 1, w = c._frames.findLastIndex((R) => R.past), y = c._i >= m ? 0 : c._i + 1;
      In(c, y), (y === w || y === m) && (c._hold = h1);
    });
  }
  const wr = () => _.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), gn = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && aa(c);
  })) : null, ni = _.closest("#app");
  ni && (gn == null || gn.observe(ni, { attributes: !0, attributeFilter: ["class"] }));
  const Ze = (Yi = window.matchMedia) == null ? void 0 : Yi.call(window, "(prefers-reduced-motion: reduce)"), Ui = () => {
    gr(), Nn(performance.now());
  };
  (Fn = Ze == null ? void 0 : Ze.addEventListener) == null || Fn.call(Ze, "change", Ui);
  const ri = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), qe(!0);
    }, c1),
    setInterval(() => {
      Z = /* @__PURE__ */ new Date(), qe(!0);
    }, d1),
    setInterval(_o, i1),
    setInterval(oi, $p),
    setInterval(wr, $e)
  ];
  return qe(!0), gr(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(c) {
      !c || c === s || (s = c, _.dataset.style = s, O.dataset.style = s, qe(!0), gr());
    },
    destroy() {
      var c;
      cancelAnimationFrame(Za), _.removeEventListener("pointermove", Ka), _.removeEventListener("pointerleave", $i), et = !0, ri.forEach(clearInterval), ft && cancelAnimationFrame(ft), ft = 0, Xa == null || Xa.disconnect(), mn == null || mn.disconnect(), gn == null || gn.disconnect(), (c = Ze == null ? void 0 : Ze.removeEventListener) == null || c.call(Ze, "change", Ui), ai(), _.removeEventListener("click", On), _.removeEventListener("change", br), _.removeEventListener("keydown", ga), _.removeEventListener("mousedown", ti), O.removeEventListener("click", On), O.removeEventListener("change", br), O.removeEventListener("keydown", ga), ["daily", "hourly"].forEach(j), _.remove(), O.remove();
    }
  };
}
const Bi = "#E1E1E1", cu = "#F7F4F0", yc = "#03a9f4", oe = 14, se = 172;
let eg = 0;
const _e = (o) => Math.round(o * 100) / 100, Mo = (o, n, i) => Math.max(n, Math.min(i, o)), rn = (o, n, i, s, h, b) => '<rect x="' + _e(o) + '" y="' + _e(n) + '" width="' + _e(i) + '" height="' + _e(s) + '" fill="' + h + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", xc = (o) => o.map((n, i) => (i ? "L" : "M") + _e(n[0]) + " " + _e(n[1])).join("");
function kc(o) {
  const n = (o == null ? void 0 : o.attributes) || {};
  return n.device_class === "curtain" ? "curtain" : n.device_class === "blind" || n.current_tilt_position != null ? "venetian" : "blind";
}
const Mn = [
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
  let i = Mn[0], s = Mn[Mn.length - 1];
  for (let v = 0; v < Mn.length - 1; v++) if (n >= Mn[v][0] && n <= Mn[v + 1][0]) {
    i = Mn[v], s = Mn[v + 1];
    break;
  }
  const h = (n - i[0]) / (s[0] - i[0]), b = h * h * (3 - 2 * h), g = (v, A) => {
    const T = parseInt(v.slice(1), 16), _ = parseInt(A.slice(1), 16);
    return "#" + [16, 8, 0].map((L) => Math.round((T >> L & 255) + ((_ >> L & 255) - (T >> L & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], s[1][0]), bot: g(i[1][1], s[1][1]), warm: g(i[1][2], s[1][2]), cool: g(i[1][3], s[1][3]), op: i[1][4] + (s[1][4] - i[1][4]) * b, t: n };
}
function og(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, s = (n >> 8 & 255) / 255, h = (n & 255) / 255, b = Math.max(i, s, h), g = Math.min(i, s, h);
  let v = 0, A = 0;
  const T = (b + g) / 2;
  if (b !== g) {
    const _ = b - g;
    A = T > 0.5 ? _ / (2 - b - g) : _ / (b + g), v = (b === i ? (s - h) / _ + (s < h ? 6 : 0) : b === s ? (h - i) / _ + 2 : (i - s) / _ + 4) / 6;
  }
  return [v * 360, A * 100, T * 100];
}
function Sh(o, n, i) {
  n = Mo(n, 0, 100) / 100, i = Mo(i, 0, 100) / 100;
  const s = (g) => (g + o / 30) % 12, h = n * Math.min(i, 1 - i), b = (g) => i - h * Math.max(-1, Math.min(s(g) - 3, Math.min(9 - s(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [_h, Ch, Ah] = og(Bi), du = Sh(_h, Ch, Math.max(6, Ah - 14)), ng = Sh(_h, Ch, Math.min(96, Ah + 16));
function rg(o, n, i, s, h) {
  const b = se / 2, g = se * 0.12, v = b - (b - g) * o, A = (Y) => Y ** 1.3, T = Mo(i, -1.5, 1.5), _ = (Y) => -(Math.abs(T) * 4.6 * Y ** 1.5) * Math.sign(T), L = o * 1.4, O = (Y, X) => {
    const W = Math.min(4.8, Math.abs(i) * 2.6) * (X ? 1 : -1) * Math.sign(i || 1), N = X ? Y + v : Y, et = X ? Y : Y + v, rt = (ut) => N + _(ut) + W * Math.sin(ut * Math.PI * 1.2 + s) * A(ut) * 1.4 + L * Math.sin(ut * Math.PI * 2 + s * 0.6) * A(ut) * (X ? 1 : -1), ft = [[et, oe]];
    for (let ut = 0; ut <= 12; ut++) ft.push([rt(ut / 12), oe + se * ut / 12]);
    ft.push([et, oe + se]);
    let tt = '<path d="' + xc(ft) + 'Z" fill="' + Bi + '"/>';
    if (h) return tt;
    const F = 1.35 + ((X ? i > 0 : i < 0) ? 0.35 : 0), q = (ut) => {
      const Tt = ut / 7, dt = X ? 1 - Tt : Tt, S = (1 - dt) ** 1.3, Ft = Y + v * Tt;
      return Array.from({ length: 13 }, (Z, st) => {
        const ct = st / 12;
        return [Ft + _(ct) * S + W * F * Math.sin(ct * Math.PI * 1.2 + s - dt * 3.2) * A(ct) * 1.4 * S + L * 1.6 * Math.sin(ct * Math.PI * 2 + s * 0.6 - dt * 2.5) * A(ct) * o * (0.4 + 0.6 * S), oe + se * ct];
      });
    }, it = [1, 2, 3, 4, 5, 6].map(q);
    for (let ut = 0; ut < 6; ut += 2) tt += '<path d="' + xc(it[ut]) + xc(it[ut + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, k = b - (b - g) * n;
  return { body: O(oe, !0) + O(oe + se - v, !1), rails: [{ x: oe + k - 4, y: oe, w: 4, h: se }, { x: oe + se - k, y: oe, w: 4, h: se }], head: 6.4 };
}
function ig(o, n, i) {
  const s = se * (1 - o);
  let h = "";
  if (s > 1 && (h += rn(oe, oe, se, s, Bi), !i))
    for (let b = 1; b < 7; b += 2) h += rn(oe + se * b / 7, oe, se / 7, s, "#fff");
  return { body: h, rails: [{ x: oe, y: oe + se * (1 - n) - 7, w: se, h: 11 }], head: 10.4 };
}
function sg(o, n, i, s) {
  const h = 9 - 7 * (i / 100), b = oe + se * (1 - o), g = Math.ceil(se / 10) + 1, v = oe + h / 2, A = (oe + se - h / 2 - v) / (g - 1), T = 0.8, _ = 0.6, L = Array.from({ length: g }, (Y, X) => Math.max(v + X * _, Math.min(v + X * A, b - h / 2 - (g - 1 - X) * _))), O = L.slice(0, -1).map((Y, X) => Mo((L[X + 1] - Y - _) / (A - _), 0, 1));
  O.push(O[g - 2]);
  let k = "";
  return L.forEach((Y, X) => {
    const W = T + (h - T) * O[X], N = Math.max(0.5, W / 2), et = Math.max(0.4, W * 0.114);
    k += rn(oe, Y - N, se, Math.max(1, W), Bi), !s && W > 2.2 && (k += rn(oe, Y + N - et, se, et, du) + rn(oe, Y - N, se, et * 0.55, ng, 0.75));
  }), s || [0.22, 0.78].forEach((Y) => {
    k += rn(oe + se * Y - 0.7, oe, 1.4, Math.max(0, L[g - 1] + 1 - oe), du, 0.85);
  }), { body: k, rails: [{ x: oe, y: oe + se * (1 - n) - 8, w: se, h: 8 }], head: 8.8 };
}
const pu = (o, n, i, s, h, b, g) => o === "curtain" ? rg(n, i, h, b, g) : o === "venetian" ? sg(n, i, s, g) : ig(n, i, g);
function lg(o, n) {
  let i = "", s = "";
  return n.forEach((h) => {
    const b = h.w > h.h, g = Mo(b ? oe + se / 2 : h.x + h.w / 2, 17, 183), v = Mo(b ? h.y + h.h / 2 : oe + se / 2, 17, 183);
    i += b ? rn(oe, Mo(h.y + h.h / 2, oe, oe + se) - 1, se, 2, yc) : rn(Mo(h.x + h.w / 2, oe, oe + se) - 1, oe, 2, se, yc);
    const A = b ? "M" + _e(g - 4) + " " + _e(v - 3) + "l4 -3l4 3M" + _e(g - 4) + " " + _e(v + 3) + "l4 3l4 -3" : "M" + _e(g - 3) + " " + _e(v - 4) + "l-3 4l3 4M" + _e(g + 3) + " " + _e(v - 4) + "l3 4l-3 4";
    s += '<circle cx="' + _e(g) + '" cy="' + _e(v) + '" r="11" fill="' + yc + '" filter="url(#' + o + 's)"/><path d="' + A + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: s };
}
function cg(o, n) {
  const i = /* @__PURE__ */ new Date(), s = ag(i.getHours() + i.getMinutes() / 60), h = 42 + 18 * Math.sin(s.t * 0.5), b = s.t >= 5 && s.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (s.t - 5) / 15) : 80, g = pu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? pu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", A = n.grip > 4e-3 ? lg(o, g.rails) : null, T = (_) => rn(oe, oe, se, se, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + s.top + '"/><stop offset="1" stop-color="' + s.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + _e(h) + '%" cy="' + _e(b) + '%" r="58%"><stop offset="0" stop-color="' + s.warm + '" stop-opacity="' + _e(s.op * 0.8) + '"/><stop offset="1" stop-color="' + s.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + _e(100 - h * 0.8) + '%" cy="' + _e(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + s.cool + '" stop-opacity="' + _e(s.op * 0.64) + '"/><stop offset="1" stop-color="' + s.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + cu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + T("url(#" + o + "l)") + T("url(#" + o + "w)") + T("url(#" + o + "k)") + (v ? '<g opacity="' + _e(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Bi + '" filter="url(#' + o + 's)"/></g>' + (A ? '<g clip-path="url(#' + o + 'c)" opacity="' + _e(n.grip) + '">' + A.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + cu + '" stroke-width="3"/>' + (A ? '<g opacity="' + _e(n.grip) + '">' + A.knobs + "</g>" : "") + "</svg>";
}
function dg({ onMove: o, onSet: n }) {
  var tt;
  const i = "cv" + ++eg, s = document.createElement("div");
  s.className = "tfCoverArt";
  const h = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, A = !1, T = !1, _ = null, L = 0, O = 0;
  const k = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", Y = () => _ || A || T || b.moving || b.target != null ? 1 : h ? performance.now() < O ? 1 : 0.4 : 0, X = () => {
    s.innerHTML = cg(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function W(F) {
    v = 0;
    const q = g.last ? Math.min(0.064, (F - g.last) / 1e3) : 1 / 60, it = q * 60;
    g.last = F;
    const ut = b.pos - g.pos, Tt = g.pos;
    g.pos += Math.sign(ut) * Math.min(Math.abs(ut), Math.max(10.5, Math.abs(ut) * 1.4) * q), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Tt) / it * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Tt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * it);
    const dt = b.tilt - g.tilt;
    g.tilt += Math.sign(dt) * Math.min(Math.abs(dt), Math.max(60, Math.abs(dt) * 4) * q);
    const S = Y();
    g.grip += (S - g.grip) * Math.min(1, q * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ft = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ft - g.ghost) * Math.min(1, q * (Ft > g.ghost ? 16 : 3)), Math.abs(Ft - g.ghost) < 4e-3 && (g.ghost = Ft), X(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ft ? v = requestAnimationFrame(W) : g.last = 0;
  }
  const N = () => {
    b && !v && (v = requestAnimationFrame(W));
  }, et = setInterval(() => {
    b && !v && X();
  }, 60 * 1e3), rt = (F) => {
    const q = s.getBoundingClientRect();
    return k() === "x" ? (F.clientX - q.left) / q.width : (F.clientY - q.top) / q.height;
  };
  s.addEventListener("pointerdown", (F) => {
    var ut;
    if (!(b != null && b.canSet) || F.button > 0) return;
    F.preventDefault(), (ut = s.setPointerCapture) == null || ut.call(s, F.pointerId);
    const q = b.target ?? b.pos, it = s.getBoundingClientRect();
    _ = { p0: rt(F), from: q, x0: F.clientX, value: null, side: null }, b.kind === "curtain" && q > 0 && (_.side = (F.clientX - it.left) / it.width < 0.5 ? "L" : "R"), N();
  }), s.addEventListener("pointermove", (F) => {
    if (!_) return;
    let q;
    if (b.kind === "curtain") {
      if (!_.side) {
        const ut = F.clientX - _.x0;
        if (Math.abs(ut) < 4) return;
        _.side = ut < 0 ? "L" : "R";
      }
      const it = (se / 2 - se * 0.12) / 200;
      q = _.from + (_.side === "L" ? -1 : 1) * ((rt(F) - _.p0) / it) * 100;
    } else q = _.from - (rt(F) - _.p0) / (se / 200) * 100;
    _.value = Mo(q, 0, 100), o(_.value);
  });
  const ft = () => {
    if (!_) return;
    const F = _.value;
    _ = null, F != null && n(Math.round(F)), N();
  };
  return s.addEventListener("pointerup", ft), s.addEventListener("pointercancel", ft), s.addEventListener("lostpointercapture", ft), s.addEventListener("pointerenter", () => {
    A = !0, N();
  }), s.addEventListener("pointerleave", () => {
    A = !1, N();
  }), s.addEventListener("focus", () => {
    T = s.matches(":focus-visible"), N();
  }), s.addEventListener("blur", () => {
    T = !1, N();
  }), s.addEventListener("keydown", (F) => {
    if (!(b != null && b.canSet)) return;
    const q = Math.round(b.target ?? b.pos), it = F.shiftKey ? 10 : 1, ut = { ArrowUp: q + it, ArrowRight: q + it, ArrowDown: q - it, ArrowLeft: q - it, PageUp: q + 25, PageDown: q - 25, Home: 0, End: 100 }[F.key];
    if (ut == null) return;
    F.preventDefault();
    const Tt = Mo(ut, 0, 100);
    o(Tt), clearTimeout(L), L = setTimeout(() => n(Tt), 500);
  }), {
    el: s,
    update(F) {
      const q = !b;
      b = F, q && (g.pos = b.pos, g.tilt = b.tilt, O = performance.now() + 1500, h && setTimeout(N, 1600)), s.classList.toggle("x", k() === "x"), s.classList.toggle("y", k() === "y"), b.canSet ? (s.tabIndex = 0, s.setAttribute("role", "slider"), s.setAttribute("aria-valuemin", "0"), s.setAttribute("aria-valuemax", "100"), s.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), s.setAttribute("aria-orientation", k() === "x" ? "horizontal" : "vertical")) : s.setAttribute("role", "img"), s.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), s.setAttribute("aria-valuetext", b.text), N();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(et), clearTimeout(L), s.remove();
    }
  };
}
const sa = (o) => Math.round(o * 100) / 100, ze = (o) => o * Math.PI / 180, Cn = (o, n, i) => o + (n - o) * i, Mc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function uu(o, n, i, s = 45, h = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(ze(s)), v = Math.sin(ze(s)), A = Math.cos(ze(h)), T = Math.sin(ze(h)), _ = 0.68, L = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: s,
    V: [v * A, g * A, T],
    L: [_ * g + L * v, -_ * v + L * g],
    k: b,
    cy: g,
    sy: v,
    sp: T,
    cp: A,
    p: ([O, k, Y]) => {
      const X = O * g - k * v, W = O * v + k * g;
      return [n + X * b, i + (W * T - Y * A) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(O, k, Y) {
      const X = (O - n) / b, W = ((k - i) / b + Y * A) / T;
      return [X * g + W * v, -X * v + W * g];
    }
  };
}
const sn = (o, n = !0) => "M" + o.map(([i, s]) => `${sa(i)} ${sa(s)}`).join("L") + (n ? "Z" : "");
function ro(o, n, i, s = 7) {
  const h = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, A] of b)
    for (let T = 0; T <= s; T++) {
      const _ = ze(A + 90 * T / s);
      h.push([g + i * Math.cos(_), v + i * Math.sin(_)]);
    }
  return h;
}
const Ve = (o, n = 56) => Array.from({ length: n }, (i, s) => [o * Math.cos(2 * Math.PI * s / n), o * Math.sin(2 * Math.PI * s / n)]);
function Ce(o, n, i, s = !0, h = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([A, T]) => h(A, T, n)), ...o.map(([A, T]) => h(A, T, i))], v = [
    { idx: o.map((A, T) => T), smooth: !1 },
    { idx: o.map((A, T) => b + T), smooth: !1 }
  ];
  for (let A = 0; A < b; A++) {
    const T = (A + 1) % b;
    v.push({ idx: [A, T, b + T, b + A], smooth: s });
  }
  return { verts: g, faces: v };
}
const So = (o, n) => ({ ...o, verts: o.verts.map(n) }), Di = (o, n, i) => ([s, h, b]) => [s + o, h + n, b + i], Ns = (o, n = 0, i = 0) => {
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
const io = (o, n, i) => sn(n.faces[i].idx.map((s) => o.p(n.verts[s])));
function Ae(o, n, i = "", s = "") {
  const h = n.verts.map(o.p), b = Lh(n, o.V);
  let g = "";
  n.faces.forEach((T, _) => {
    b[_] && (g += sn(T.idx.map((L) => h[L])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((T, _) => {
    for (let L = 0; L < T.idx.length; L++) {
      const O = T.idx[L], k = T.idx[(L + 1) % T.idx.length], Y = O < k ? `${O}-${k}` : `${k}-${O}`;
      v.has(Y) || v.set(Y, { a: O, b: k, fs: [] }), v.get(Y).fs.push(_);
    }
  });
  let A = "";
  for (const { a: T, b: _, fs: L } of v.values()) {
    const [O, k] = L, Y = b[O], X = k === void 0 ? !1 : b[k], W = k !== void 0 && n.faces[O].smooth && n.faces[k].smooth;
    (Y !== X || Y && X && !W) && (A += `M${sa(h[T][0])} ${sa(h[T][1])}L${sa(h[_][0])} ${sa(h[_][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${s ? ` class="${s}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${A}"/></g>`;
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
  const b = n.verts.filter((A) => A[2] >= i - 0.01).map(([A, T, _]) => o.p([A + (_ - i) * o.L[0], T + (_ - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = sn(hg(b));
  if (!h) return `<path class="shade" fill="url(#${s})" d="${g}"/>`;
  const v = `clip${++fg}`;
  return `<clipPath id="${v}"><path d="${h}"/></clipPath><path class="shade" fill="url(#${s})" clip-path="url(#${v})" d="${g}"/>`;
}
const An = (o, n, i = "edge", s = !0) => `<path class="${i}" d="${sn(n.map(o.p), s)}"/>`, fa = (o, n, i, s = "edge") => {
  const [h, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${s}" d="M${sa(h)} ${sa(b)}L${sa(g)} ${sa(v)}"/>`;
};
function rr(o, n, i, s, { part: h = "", cls: b = "", w: g = 0 } = {}) {
  const [v, A] = o.p(n), T = o.k, _ = `matrix(${sa(T * o.cy)} ${sa(T * o.sy * o.sp)} ${sa(-T * o.sy)} ${sa(T * o.cy * o.sp)} ${sa(v)} ${sa(A)})`, L = g ? `<rect x="${-g / 2}" y="${-s * 0.9}" width="${g}" height="${s * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${_}"${h ? ` data-part="${h}"` : ""}>${L}<text class="st ${b}" font-size="${s}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
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
class Ln {
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
      var A, T, _, L;
      const v = (_ = (T = (A = g.target).closest) == null ? void 0 : T.call(A, "[data-part]")) == null ? void 0 : _.dataset.part;
      if (v) {
        try {
          h.setPointerCapture(g.pointerId);
        } catch {
        }
        this.held = !0, (L = this.down) == null || L.call(this, v, this.pt(g), g), this.kick();
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
    const [n, i, s] = this.base, [h, b] = this.box, g = this.fillAmt.x, v = i + (h - 400) / 2, A = s + (b - 400) / 2, T = uu(n, v, A, this.yaw.x, this.pitch.x);
    return g < 1e-3 ? T : uu(n, Cn(v, h / 2, g), Cn(A, b / 2 + this.lift * T.cp * T.k / 2, g), this.yaw.x, this.pitch.x);
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
    const A = (this.box[0] - 48) / h.k, T = ((this.box[1] - 48) / h.k - this.lift * h.cp) / h.sp, _ = Math.max(n * 0.6, (A * b - T * g) / v), L = Math.max(i * 0.6, (T * b - A * g) / v);
    return [Cn(n, _, s), Cn(i, L, s)];
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
class vg extends Ln {
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
    const i = this.v, s = 11 + this.h.x, [h, b] = this.size(68, 68), g = Math.min(h, b) / 68, v = Ce(ro(h, b, 18 * g), 0, 8), A = Ce(Ve(25 * g), 8, 11), T = Ce(Ve(18.5 * g), 11, s), _ = Ve(12.5 * g).map(([O, k]) => [O, k, s]), L = Math.max(0, Math.min(1, this.glow.x));
    return Ue(i, v, 0, n) + Ae(i, v) + Ae(i, A, "cap") + Ue(i, T, 11, n, io(i, A, 1)) + Ae(i, T, "cap") + An(i, _) + (L > 0.01 ? `<g style="opacity:${L.toFixed(3)}">${An(i, _, "accent")}</g>` : "");
  }
}
class Sc extends Ln {
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
    const i = this.v, s = this.t.x, h = !!this.opts.bare, [b, g] = h ? this.size(48, 72) : this.size(72, 96), v = h ? b / 48 : b / 72, A = h ? g / 72 : g / 96, T = Math.min(v, A), _ = h ? 0 : 6, L = _ + 3, O = Cn(3, 12, s), k = Cn(12, 3, s), Y = (O + k) / 2 - 1.4, X = 31 * A, W = Ce(ro(b, g, 16 * T), 0, 6), N = Ce(ro(48 * v, 72 * A, 9 * T), _, L), et = [[-X, L], [X, L], [X, L + k], [0, L + Y], [-X, L + O]], rt = Ce(et, -20 * v, 20 * v, !1, (q, it, ut) => [ut, q, it]), ft = (q) => L + (q < 0 ? Cn(O, Y, (q + X) / X) : Cn(Y, k, q / X)) + 0.05, tt = Ve(4.2 * T, 36).map(([q, it]) => [q, it - X / 2, ft(it - X / 2)]), F = [[0, X * 0.32], [0, X * 0.68]].map(([q, it]) => [q, it, ft(it)]);
    return (h ? Ue(i, N, 0, n) : Ue(i, W, 0, n) + Ae(i, W)) + Ae(i, N, "paddle") + Ue(i, rt, L, n, io(i, N, 1)) + Ae(i, rt, "paddle") + // words in place of O and I when it's given them (the light dial's Colour / White rocker, Matt 25 Nov): the
    // pressed half's word is the choice. labels[0] is On, at the front; labels[1] Off, at the back
    (this.opts.labels ? rr(i, [0, X / 2, ft(X / 2)], this.opts.labels[0], (this.opts.textSize || 6) * T, { part: "paddle", cls: this.on ? "sel" : "", w: 40 }) + rr(i, [0, -X / 2, ft(-X / 2)], this.opts.labels[1], (this.opts.textSize || 6) * T, { part: "paddle", cls: this.on ? "" : "sel", w: 40 }) : An(i, tt, this.on ? "edge mark" : "accent mark") + fa(i, F[0], F[1], this.on ? "accent mark" : "edge mark"));
  }
}
class yg extends Ln {
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
    const i = this.v, s = this.size(44, 136)[1], h = 44, b = 1, g = s / 136, v = 1, A = 48 * g, T = 6 + this.kh.x, _ = A - this.L.x * 2 * A;
    this.travel = 2 * A;
    const L = Math.min(32 * b, h - 12), O = L / 32, k = Ce(ro(h, s, 16 * v), 0, 6), Y = So(Ce(ro(L, 16 * v, 5 * v), 6, T), Di(0, _, 0));
    let X = "";
    for (let et = 0; et <= 10; et++) {
      const rt = A - et * (2 * A) / 10, ft = (et % 5 === 0 ? 7 : 4) * b, tt = 9 * v;
      X += fa(i, [tt, rt, 6], [tt + ft, rt, 6]) + fa(i, [-tt, rt, 6], [-tt - ft, rt, 6]);
    }
    const W = ro(6 * v, 2 * A + 6 * v, 3 * v).map(([et, rt]) => [et, rt, 6]), N = [[-3 * v, A + 3 * v, 6], [3 * v, A + 3 * v, 6], [3 * v, _, 6], [-3 * v, _, 6]];
    return Ue(i, k, 0, n) + Ae(i, k, "plate") + `<g class="deco">${X}${An(i, W)}<path class="level" d="${sn(N.map(i.p))}"/></g>` + Ue(i, Y, 6, n, io(i, k, 1)) + Ae(i, Y, "knob") + `<g class="deco">${fa(i, [-12 * O, _, T], [12 * O, _, T])}${fa(i, [-8 * O, _ - 3.5 * v, T], [8 * O, _ - 3.5 * v, T])}${fa(i, [-8 * O, _ + 3.5 * v, T], [8 * O, _ + 3.5 * v, T])}</g>`;
  }
}
class mu extends Ln {
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
    const i = this.v, s = 7 + this.kh.x, h = this.ang(this.val.x), [b, g] = this.size(92, 92), v = Math.min(b, g) / 92, A = v, T = v, _ = (tt, F, q) => [tt * Math.cos(F) * A, tt * Math.sin(F) * T, q], L = Ce(Ve(46 * v, 72), 0, 7), O = Ce(Ve(22 * v, 64), 7, s), k = Math.min(this.now ?? this.value, this.value), Y = Math.max(this.now ?? this.value, this.value);
    let X = "";
    const W = Math.round((this.max - this.min) / this.tickStep), N = Math.max(1, Math.round(this.major / 2));
    for (let tt = 0; tt <= W; tt++) {
      const F = this.min + tt * this.tickStep, q = ze(this.ang(F)), it = tt % this.major === 0, ut = it ? 36.5 : tt % N === 0 ? 34.5 : 33.2, Tt = !this.tint && this.now != null && F >= k && F <= Y && this.value > this.now, dt = this.tint ? 'edge tint" style="stroke:' + this.tint(F) : Tt ? "accent" : "edge";
      X += fa(i, _(30, q, 7), _(this.tint ? 37 : ut, q, 7), dt);
      const S = it ? this.labelOf(F) : null;
      S != null && S !== "" && (X += rr(i, _(41.5, q, 7), S, 4 * v));
    }
    let et = "";
    for (let tt = 0; tt < 40; tt++) {
      const F = ze(h + tt * 9), q = Math.cos(F), it = Math.sin(F), ut = 22 * v;
      q * i.V[0] + it * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (et += fa(i, [ut * q, ut * it, 9], [ut * q, ut * it, s - 2.2]));
    }
    this.title && (X += rr(i, _(37, ze(90 - this.yaw.x), 7), this.title, 4.6 * v, { cls: "sel" }));
    const rt = ze(h), ft = Ve(18.5 * v, 64).map(([tt, F]) => [tt, F, s]);
    return Ue(i, L, 0, n) + Ae(i, L, "knob") + `<g class="deco">${X}</g>` + Ue(i, O, 7, n, io(i, L, 1)) + Ae(i, O, "knob") + `<g class="deco">${et}${An(i, ft)}` + (this.tint ? `<path class="swatch" style="fill:${this.tint(this.value)}" d="${sn(Ve(8 * v, 40).map(([tt, F]) => i.p([tt, F, s])))}"/>` : "") + `${fa(i, [(this.tint ? 10 : 5) * v * Math.cos(rt), (this.tint ? 10 : 5) * v * Math.sin(rt), s], [15.5 * v * Math.cos(rt), 15.5 * v * Math.sin(rt), s], "edge pointer")}</g>`;
  }
}
class xg extends Ln {
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
    const i = this.v, s = this.A.x - this.yaw.x, h = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, A = g / 92, T = Math.min(v, A), _ = Ce(ro(b, g, 20 * T), 0, 7), L = Ce(Ve(15 * T, 48), 7, 12), O = So(Ce([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([Y, X]) => [Y * T, X * T]), 12, h, !1), Ns(s));
    let k = "";
    return this.positions.forEach((Y, X) => {
      const W = ze(Y.a - this.yaw.x), N = X === this.index, et = Math.cos(W), rt = Math.sin(W), ft = Ve(1.7 * T, 20).map(([tt, F]) => [tt + 26.5 * et * v, F + 26.5 * rt * A, 7]);
      k += N ? `<path class="dotfill" d="${sn(ft.map(i.p))}"/>` : An(i, ft), k += rr(i, [37.5 * et * v, 37.5 * rt * A, 7], Y.label, 5.6 * T, { part: `pos-${X}`, cls: N ? "sel" : "", w: 26 });
    }), Ue(i, _, 0, n) + Ae(i, _) + k + Ue(i, O, 7, n, io(i, _, 1)) + Ae(i, L, "knob") + Ae(i, O, "knob") + `<g class="deco">${fa(i, Ns(s)([6 * T, 0, h]), Ns(s)([19 * T, 0, h]))}</g>`;
  }
}
class kg extends Ln {
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
    const i = this.v, s = 6, h = s - 23, b = 6, [g, v] = this.size(86, 104), A = Math.min(g / 86, v / 104), T = ([F, q, it]) => [F * A, q * A, 6 + (it - 6) * A], _ = Ce(ro(g, v, 18 * A), 0, 6), L = So(Ce(Ve(8, 40), 6, 10), (F) => T(Di(0, s, 0)(F))), O = (F) => T(Di(0, s, 10)(Ic(this.phi.x)(F))), k = So(Ce(Ve(2.2, 20), 0, 13.5), O), Y = So(Ce(Ve(3.8, 24), 12.5, 17.5), O), X = (F) => T(Ic(-this.lid.x, h, b)(F)), W = So(Ce(ro(40, 46, 7), 6, 30), (F) => X(Di(0, s, 0)(F))), N = Lh(W, i.V);
    let et = "";
    if (N[1]) {
      let F = "";
      for (let it = -84; it <= 84; it += 12) {
        const ut = [[it - 40, s - 40], [it - 34, s - 40], [it + 46, s + 40], [it + 40, s + 40]].map(([Tt, dt]) => i.p(X([Tt, dt, 30])));
        F += `<path class="level" d="${sn(ut)}"/>`;
      }
      const q = `${this.id}s`;
      et += `<clipPath id="${q}"><path d="${io(i, W, 1)}"/></clipPath><g clip-path="url(#${q})">${F}</g>`;
    }
    N[0] && (et += An(i, ro(32, 38, 4).map(([F, q]) => X([F, q + s, 6]))));
    const rt = `<g data-part="toggle">${Ae(i, L)}${Ae(i, k)}${Ae(i, Y)}</g>`, ft = `<g data-part="cover">${Ae(i, W)}<g class="deco">${et}</g></g>`, tt = this.lid.x > 45;
    return Ue(i, _, 0, n) + Ae(i, _) + Ue(i, W, 6, n, io(i, _, 1)) + Ue(i, Y, 6, n, io(i, _, 1)) + (tt ? ft + rt : rt + ft);
  }
}
class gu extends Ln {
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
    const i = this.v, [s, h] = this.size(64, 84), b = Math.min(s / 64, h / 84), g = ([W, N, et]) => [W * b, N * b, 6 + (et - 6) * b], v = this.press.x * 1.2, A = Ce(ro(s, h, 16 * b), 0, 6), T = So(Ce(Ve(10, 6).map(([W, N]) => [W, N]), 6, 9 - v, !1), (W) => g(Ns(30)(W))), _ = So(Ce(Ve(6.5, 36), 9 - v, 12 - v), g), L = (W) => g(Di(0, 0, 12 - v)(Ic(this.phi.x)(W))), O = So(Ce(Ve(2.3, 20), 0, 15), L), k = So(Ce(Ve(4, 24), 14, 19), L), Y = h / 2 - 13 * b, X = (W, N, et) => rr(i, [0, N, 6], W, (this.opts.textSize || 6) * b, { part: "lever", cls: et ? "sel" : "", w: 30 });
    return Ue(i, A, 0, n) + Ae(i, A) + X(this.labels[0], -Y, this.on) + X(this.labels[1], Y, !this.on) + Ue(i, k, 6, n, io(i, A, 1)) + Ue(i, O, 6, n, io(i, A, 1)) + `<g data-part="lever">${Ae(i, T)}${Ae(i, _)}${Ae(i, O)}${Ae(i, k)}</g>`;
  }
}
class Mg extends Ln {
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
    const i = this.v, s = 7 + this.kh.x, [h, b] = this.size(100, 100), g = Math.min(h, b) / 100, v = (it, ut, Tt) => [it * g * Math.cos(ut), it * g * Math.sin(ut), Tt], A = Ce(Ve(50 * g, 80), 0, 7), T = Ce(Ve(19 * g, 64), 7, s), _ = this.rings.bright, L = this.rings.second, O = this.active === "bright";
    let k = "";
    const Y = this.vals.bright.x, X = Math.round((_.max - _.min) / _.tick);
    for (let it = 0; it <= X; it++) {
      const ut = _.min + it * _.tick, Tt = ze(this.angF(this.frac("bright", ut))), dt = it % _.major === 0;
      k += fa(i, v(22, Tt, 7), v(dt ? 28.5 : 27, Tt, 7), ut <= Y + 1e-6 && Y > _.min ? "accent" : "edge");
    }
    let W = "";
    if (L) {
      const it = Math.round((L.max - L.min) / L.tick);
      for (let Tt = 0; Tt <= it; Tt++) {
        const dt = L.min + Tt * L.tick, S = ze(this.angF(this.frac("second", dt)));
        Tt % L.major, W += fa(i, v(34, S, 7), v(47, S, 7), L.tint ? 'edge tint" style="stroke-width:' + (3.4 * Math.min(1.6, g)).toFixed(2) + ";stroke:" + L.tint(dt) : "edge");
      }
      const ut = ze(this.angF(this.frac("second", this.vals.second.x)));
      W += fa(i, v(32, ut, 7), v(48.5, ut, 7), "edge pointer");
    }
    const N = (it, ut) => ut ? it : '<g class="dim">' + it + "</g>", et = rr(i, v(40, ze(90 - this.yaw.x), 7), (O ? _ : L || _).title, 4.4 * g, { cls: "sel" });
    let rt = "";
    const ft = this.angF(this.knobF.x);
    for (let it = 0; it < 40; it++) {
      const ut = ze(ft + it * 9), Tt = Math.cos(ut), dt = Math.sin(ut), S = 19 * g;
      Tt * i.V[0] + dt * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (rt += fa(i, [S * Tt, S * dt, 9], [S * Tt, S * dt, s - 2.2]));
    }
    const tt = ze(ft), F = Ve(15.5 * g, 64).map(([it, ut]) => [it, ut, s]), q = L != null && L.tint ? `<path class="swatch" style="fill:${L.tint(L.value)}" d="${sn(Ve(6.5 * g, 40).map(([it, ut]) => i.p([it, ut, s])))}"/>` : "";
    return Ue(i, A, 0, n) + Ae(i, A, "knob") + `<g class="deco">${N(k, O)}${N(W, !O)}${et}</g>` + Ue(i, T, 7, n, io(i, A, 1)) + Ae(i, T, "knob") + `<g class="deco">${rt}${An(i, F)}${q}${fa(i, [(q ? 8 : 4) * g * Math.cos(tt), (q ? 8 : 4) * g * Math.sin(tt), s], [13 * g * Math.cos(tt), 13 * g * Math.sin(tt), s], "edge pointer")}</g>`;
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
}, Pu = ["covers", "people", "openings", "leaks", "vacuum"], Ru = "homecore_house", Hu = "homecore-house-used", Ai = ["switch", "fan", "input_boolean", "automation"], Nu = "homecore-house-look", Tg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Dg = [["popup", "Popup"], ["sheet", "Sheet"]], Eg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Bg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Pg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Li = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Rg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Hg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Ou = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Lc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ra = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Tc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Ls = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Th = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", Ts = Th(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Iu = Th(["M20 6L9 17L4 12"]), xo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + G(o || "") + '"' + (n ? ' data-icon-name="' + G(n) + '"' : "") + "></span>", Ng = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Fu = 1, qu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Vu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ds = ["door", "window", "garage_door", "opening"], Wu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Hr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Og = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Ig = 10, Fg = 20, qg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Vg = ["living room", "bedroom", "office"];
function Wg(o, { config: n, getHass: i }) {
  var wp, vp, yp;
  const s = (t) => o.getElementById(t), h = s("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let A = We.get(bu) === "1", T = We.get(wu) === "1", _ = We.get(vu) || "front", L = We.get(yu) || "fill", O = We.get(xu) || "toggle", k = {};
  const Y = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, X = (t, e, a) => Y({ type: "call_service", domain: t, service: e, service_data: a }), W = o.querySelector("#appearancePane .toggleList");
  W && !s("densityToggle") && (W.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), s("densityToggle").addEventListener("click", () => {
    A = !A, We.set(bu, A ? "1" : "0"), dt();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([l, p]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + l + '">' + p + "</button>").join("") + "</div>", rt = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function ft() {
    var J, H;
    if (!g || s("housePane")) return;
    const t = s("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"], ["phys", "Physical"]], a = (U, nt) => '<div class="houseTab' + (U === "look" ? " active" : "") + '" data-house-pane="' + U + '"><section class="card">' + nt + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([U, nt]) => '<button class="tab segBtn' + (U === "look" ? " active" : "") + '" type="button" data-house-tab="' + U + '">' + nt + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", Tg.map(([U, nt]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + U + '"><div class="tfCardTitle">' + nt + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("phys", '<div class="toggleList" data-phys-list></div>') + a("sources", '<div class="toggleList">' + N.map(([U, nt, Ct]) => rt(nt, Ct, '<select class="settingsSelect" data-source="' + U + '" aria-label="' + nt + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Ci).map(([U, nt]) => rt(nt.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + U + '" aria-label="' + nt.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (U) => t.querySelector('[data-look-group="' + U + '"]'), l = (U) => U == null ? void 0 : U.closest(".toggleRow");
    [l(t.querySelector(".themeBtn"))].forEach((U) => U && r("look").appendChild(U));
    const p = l(s("densityToggle"));
    p && (p.hidden = !0), [l(s("moreInfoChoice")), l(s("namesChoice"))].forEach((U) => U && r("house").appendChild(U)), r("house").insertAdjacentHTML("beforeend", rt("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + rt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const d = t.querySelector("[data-phys-list]");
    d.insertAdjacentHTML("beforeend", rt("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + rt("Angle", "Where the physical controls are seen from.", et("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + rt("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", et("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + rt("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", et("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const f = () => {
      const U = s("physToggle");
      U.classList.toggle("on", T), U.setAttribute("aria-checked", String(T)), s("physViewRow").hidden = s("physFitRow").hidden = s("physBinaryRow").hidden = !T, t.querySelectorAll("[data-phys-view]").forEach((nt) => nt.setAttribute("aria-pressed", String(nt.dataset.physView === _))), t.querySelectorAll("[data-phys-fit]").forEach((nt) => nt.setAttribute("aria-pressed", String(nt.dataset.physFit === L))), t.querySelectorAll("[data-phys-binary]").forEach((nt) => nt.setAttribute("aria-pressed", String(nt.dataset.physBinary === O)));
    };
    d.addEventListener("click", (U) => {
      const nt = U.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      nt && (nt.id === "physToggle" && (T = !T, We.set(wu, T ? "1" : "0"), vn.clear()), nt.dataset.physView && (_ = nt.dataset.physView, We.set(vu, _), vn.forEach((Ct) => Ct.ctls.forEach((Nt) => Nt.setCamera(_)))), nt.dataset.physFit && (L = nt.dataset.physFit, We.set(yu, L), vn.forEach((Ct) => Ct.ctls.forEach((Nt) => Nt.setFill(L === "fill")))), nt.dataset.physBinary && (O = nt.dataset.physBinary, We.set(xu, O), vn.clear()), f(), (nt.id === "physToggle" || nt.dataset.physBinary) && Oa(), M(nt.closest(".toggleRow")));
    }), f();
    let u = null;
    const x = () => {
      !u || u.hidden || (u.classList.remove("in"), setTimeout(() => {
        u.classList.contains("in") || (u.hidden = !0);
      }, 220));
    };
    function C(U, nt) {
      const Ct = u.offsetWidth, Nt = u.offsetHeight;
      u.style.left = Math.max(8, Math.min(window.innerWidth - Ct - 8, U)) + "px", u.style.top = Math.max(8, Math.min(window.innerHeight - Nt - 8, nt)) + "px", u.classList.add("placed");
    }
    function M(U) {
      const nt = o.querySelector("#app");
      if (!nt) return;
      if (!u) {
        u = document.createElement("div"), u.className = "tfPhysPreview", u.hidden = !0, u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Physical controls preview"), u.innerHTML = '<div class="tfPhysPreviewHead" title="Drag to move"><span class="tfPhysGrip" aria-hidden="true"></span><span class="activityTitle">Preview</span><button class="tfBack" type="button" data-preview-close aria-label="Close preview">' + Cc + '</button></div><div class="tfPhysPreviewRow"></div><div class="tfPhysPreviewNote">Off: popups show their usual controls.</div>', nt.appendChild(u), u.querySelector("[data-preview-close]").addEventListener("click", x);
        const ht = u.querySelector(".tfPhysPreviewHead");
        ht.addEventListener("pointerdown", (Mt) => {
          if (Mt.button > 0 || Mt.target.closest("button")) return;
          Mt.preventDefault();
          const Zt = u.getBoundingClientRect(), ie = Mt.clientX - Zt.left, me = Mt.clientY - Zt.top;
          try {
            ht.setPointerCapture(Mt.pointerId);
          } catch {
          }
          u.classList.add("dragging");
          const Se = (Fa) => C(Fa.clientX - ie, Fa.clientY - me), ao = () => {
            ht.removeEventListener("pointermove", Se), ht.removeEventListener("pointerup", ao), ht.removeEventListener("pointercancel", ao), u.classList.remove("dragging");
            const Fa = u.getBoundingClientRect();
            We.set(ku, JSON.stringify([Math.round(Fa.left), Math.round(Fa.top)]));
          };
          ht.addEventListener("pointermove", Se), ht.addEventListener("pointerup", ao), ht.addEventListener("pointercancel", ao);
        }), window.addEventListener("resize", () => {
          if (u.classList.contains("placed")) {
            const Mt = u.getBoundingClientRect();
            C(Mt.left, Mt.top);
          }
        });
      }
      const Ct = (() => {
        try {
          return JSON.parse(We.get(ku) || "null");
        } catch {
          return null;
        }
      })(), Nt = u.querySelector(".tfPhysPreviewRow");
      if (u.dataset.binary !== O) {
        u.dataset.binary = O;
        const ht = [[O === "rocker" ? "Rocker" : "Toggle", "Switch"], ["Fader", "Light"], ["Dial", "Thermostat"]];
        Nt.innerHTML = ht.map(([, ie]) => '<div class="tfPhysPreviewCell"><div class="tfMoreSpace tfPhys"></div><span>' + ie + "</span></div>").join("");
        const Mt = Nt.querySelectorAll(".tfPhys"), Zt = { camera: _, fill: L === "fill" };
        u.ctls = [
          O === "rocker" ? new Sc(Mt[0], { ...Zt, on: !0, label: "Sample switch" }) : new gu(Mt[0], { ...Zt, on: !0, label: "Sample switch" }),
          ...ap(Mt[1], { ...Zt, label: "Sample light" }, null, () => {
          }).ctls,
          new mu(Mt[2], { ...Zt, value: 21.5, now: 19.5, min: 10, max: 30, label: "Sample thermostat target" })
        ];
      } else u.ctls.forEach((ht) => {
        ht.setCamera(_), ht.setFill(L === "fill");
      });
      u.classList.toggle("off", !T), u.hidden && (u.hidden = !1, Ct && C(Ct[0], Ct[1]), u.offsetWidth), u.classList.add("in"), (U && !u.classList.contains("placed") ? U.getBoundingClientRect().bottom - (u.getBoundingClientRect().top - 16) : 0) > 0 && U.scrollIntoView({ block: "center", behavior: je() ? "instant" : "smooth" });
    }
    ["#homeNav", "#settingsBack", "#tvNav"].forEach((U) => {
      var nt;
      return (nt = o.querySelector(U)) == null ? void 0 : nt.addEventListener("click", x);
    }), [l(s("hoursChoice")), l(s("wxStyleChoice"))].forEach((U) => U && r("weather").appendChild(U));
    const E = s("housePane"), B = E.querySelector(".houseTabs"), I = B.querySelector(".rubberIndicator"), P = "homecore-light-view", V = (U) => {
      E.classList.toggle("tfLightCardsOn", U === "cards"), E.querySelectorAll("[data-light-view]").forEach((nt) => nt.setAttribute("aria-pressed", String(nt.dataset.lightView === U))), We.set(P, U);
    };
    V(We.get(P) === "table" ? "table" : "cards"), E.querySelector(".tfLightView").addEventListener("click", (U) => {
      const nt = U.target.closest("[data-light-view]");
      nt && V(nt.dataset.lightView);
    }), new ResizeObserver(() => F()).observe(E), (H = (J = document.fonts) == null ? void 0 : J.ready) == null || H.then(() => F());
    const D = (U) => {
      const nt = B.querySelector(".tab.active");
      I.style.transition = "none", U ? Rs(I, I.offsetLeft, I.offsetWidth, nt.offsetLeft, nt.offsetWidth) : (I.style.left = nt.offsetLeft + "px", I.style.width = nt.offsetWidth + "px");
    };
    new ResizeObserver(() => D(!1)).observe(B), E.addEventListener("click", (U) => {
      const nt = U.target.closest("[data-house-tab]");
      if (nt) {
        B.querySelectorAll(".tab").forEach((ht) => ht.classList.toggle("active", ht === nt)), E.querySelectorAll(".houseTab").forEach((ht) => ht.classList.toggle("active", ht.dataset.housePane === nt.dataset.houseTab)), nt.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), D(!0), F();
        return;
      }
      const Ct = U.target.closest("[data-light-fav]");
      if (Ct) {
        Vc(Ct.dataset.lightFav);
        return;
      }
      const Nt = U.target.closest("[data-light-pick]");
      if (Nt) {
        const [ht, Mt] = Nt.dataset.lightPick.split("|"), Zt = { ...Jt[ht] };
        Nt.dataset.v ? Zt[Mt] = Nt.dataset.v : delete Zt[Mt], Jt[ht] = Zt, Co(), [...aa.keys()].filter((ie) => ie.endsWith(":" + Mt)).forEach((ie) => aa.delete(ie)), Oa();
        return;
      }
      const Pt = U.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Pt || Pt.disabled)) {
        if (Pt.dataset.lights && (Jt.lights = Pt.dataset.lights), Pt.dataset.dacPad && (Jt.dacPad = Pt.dataset.dacPad), (Pt.dataset.lights || Pt.dataset.dacPad) && (Co(), aa.clear()), Pt.dataset.sumToggle) {
          const ht = Pt.dataset.sumToggle, Mt = new Set(kt.hiddenSums || []);
          Mt.has(ht) ? Mt.delete(ht) : Mt.add(ht), kt = { ...kt, hiddenSums: [...Mt] }, Da();
        }
        Oa();
      }
    }), E.addEventListener("change", (U) => {
      const nt = U.target;
      nt.dataset.source && (kt = { ...kt, sources: { ...kt.sources || {}, [nt.dataset.source]: nt.value || void 0 } }, Da());
      const Ct = nt.dataset.lightStyle || nt.dataset.lightPad;
      if (Ct) {
        const Nt = nt.dataset.lightStyle ? "lightStyles" : "lightPads", Pt = { ...Jt[Nt] };
        nt.value ? Pt[Ct] = nt.value : delete Pt[Ct], Jt[Nt] = Pt, Co(), [...aa.keys()].filter((ht) => ht.endsWith(":" + Ct)).forEach((ht) => aa.delete(ht));
      }
      Oa();
    });
  }
  function tt() {
    var M, E;
    oi() && mn();
    const t = s("housePane");
    if (!t) return;
    const e = !!customElements.get(Ka);
    t.querySelectorAll("[data-lights]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.lights === Jt.lights))), s("lightsRow").querySelector(".status").textContent = e || !oi() ? "How lights show on the house page." : Xa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.dacPad === Jt.dacPad))), s("dacPadRow").hidden = !oi();
    for (const B of t.querySelectorAll("[data-source]")) {
      if (B === o.activeElement) continue;
      const [I] = N.find(([V]) => V === B.dataset.source), P = Object.keys(k).filter(N.find(([V]) => V === I)[3]).sort((V, D) => xt(V).localeCompare(xt(D)));
      B.dataset.sig !== P.join(",") && (B.innerHTML = '<option value="">Automatic</option>' + P.map((V) => '<option value="' + G(V) + '">' + G(xt(V)) + "</option>").join(""), B.dataset.sig = P.join(",")), B.value = P.includes((M = kt.sources) == null ? void 0 : M[I]) ? kt.sources[I] : "";
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
    const d = new Set($t()), f = (B, I, P, V) => '<option value="' + B + '"' + (B === P ? " selected" : "") + ">" + I + "</option>", u = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, I) => !Me.get(B) - !Me.get(I) || (Me.get(B) || "").localeCompare(Me.get(I) || "") || xt(B).localeCompare(xt(I))).map((B) => {
      const I = Jt.lightStyles[B] || "", P = Jt.lightPads[B] || "", V = d.has(B), D = G(xt(B));
      return "<tr><td><strong>" + D + "</strong></td><td>" + G(Me.get(B) || "—") + "</td><td>" + G(Oe(B)) + '</td><td class="metaSwitchCol"><button class="switch' + (V ? " on" : "") + '" type="button" role="switch" aria-checked="' + V + '" data-light-fav="' + G(B) + '" aria-label="' + D + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + G(B) + '" aria-label="' + D + ' tile">' + f("", "Default", I) + f("tile", "HomeCore tile", I) + f("dac", "Dual Axis Controller", I) + '</select></td><td><select class="settingsSelect" data-light-pad="' + G(B) + '" aria-label="' + D + ' pad"' + (In(B) ? "" : " disabled") + ">" + f("", "Default", P) + f("temperature", "Temperature", P) + f("colour", "Colour", P) + "</select></td></tr>";
    }).join(""), x = (B, I, P, V, D) => '<div class="themeChoice" role="group" aria-label="' + P + '">' + V.map(([J, H]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (J === D) + '" data-light-pick="' + B + "|" + G(I) + '" data-v="' + J + '">' + H + "</button>").join("") + "</div>", C = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, I) => !Me.get(B) - !Me.get(I) || (Me.get(B) || "").localeCompare(Me.get(I) || "") || xt(B).localeCompare(xt(I))).map((B) => {
      const I = d.has(B), P = G(xt(B)), V = [Me.get(B), Oe(B)].filter(Boolean).map(G).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + P + '</strong><div class="status">' + V + "</div></div></div>" + rt("Favourite", "", '<button class="switch' + (I ? " on" : "") + '" type="button" role="switch" aria-checked="' + I + '" data-light-fav="' + G(B) + '" aria-label="' + P + ' is a favourite"></button>') + rt("Tile", "", x("lightStyles", B, P + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Jt.lightStyles[B] || "")) + (In(B) ? rt("Pad", "", x("lightPads", B, P + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Jt.lightPads[B] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== u && (a.innerHTML = u, a.dataset.html = u), r.dataset.html !== C && (r.innerHTML = C, r.dataset.html = C), p != null && p.dataset.lightFav && ((E = (r.contains(p) ? r : a).querySelector('[data-light-fav="' + CSS.escape(p.dataset.lightFav) + '"]')) == null || E.focus({ preventScroll: !0 })), F();
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
            var M;
            return (M = p[Number(d.value)]) == null ? void 0 : M.click();
          }), l.after(d);
          const C = () => {
            d.innerHTML = p.map((E, B) => '<option value="' + B + '"' + (E.disabled ? " disabled" : "") + ">" + G(E.textContent) + "</option>").join("");
            const M = p.findIndex((E) => E.getAttribute("aria-pressed") === "true" || E.classList.contains("active"));
            M >= 0 && (d.value = String(M));
          };
          new MutationObserver(C).observe(l, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), C();
        }
        const f = (C) => {
          l.hidden !== !C && (l.hidden = !C), d.hidden !== C && (d.hidden = C);
        };
        if (p.length > 3) {
          f(!1);
          continue;
        }
        if (!l.getClientRects().length && !d.getClientRects().length) {
          d.dataset.fit || f(!0);
          continue;
        }
        const u = l.hidden;
        l.hidden = !1;
        const x = p.every((C) => C.scrollWidth <= C.clientWidth + 1);
        l.hidden = u, f(x), d.dataset.fit = "1";
      }
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, h.appendChild(q);
  let it = 0;
  function ut() {
    if (!A) return;
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
  const Tt = () => {
    A && requestAnimationFrame(ut);
  };
  function dt() {
    var t;
    h.classList.toggle("showDensity", A), (t = s("densityToggle")) == null || t.classList.toggle("on", A), q.hidden = !A, clearInterval(it), A && (it = setInterval(ut, 1e3), ut());
  }
  window.addEventListener("scroll", Tt, { capture: !0, passive: !0 }), window.addEventListener("resize", Tt, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ft = document.createElement("style");
  o.appendChild(Ft);
  const Z = new ResizeObserver(() => bt()), st = /* @__PURE__ */ new Set(), ct = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function bt() {
    const t = h.classList.contains("tfAreaOpen") && !h.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), st.forEach((u) => {
      (!t || !u.isConnected) && (Z.unobserve(u), st.delete(u));
    }), !t) {
      Ft.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, l = [...S.children].filter((u) => u.dataset.k && u.offsetParent);
    Ft.disabled = !0;
    const p = l.map((u) => {
      const x = getComputedStyle(u), C = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(r, C ? +C[1] : x.gridColumnEnd === "-1" ? r : 1);
    });
    Ft.disabled = !1;
    let d = 0;
    const f = l.map((u, x) => {
      st.has(u) || (st.add(u), Z.observe(u));
      const C = p[x];
      d + C > r && (d = 0);
      const M = d + 1;
      return d = (d + C) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(u.dataset.k) + '"]{grid-column:' + M + " / span " + C + ";grid-row-end:span " + Math.max(1, Math.ceil(ct(u) + a)) + "}";
    }).join(`
`);
    Ft.textContent !== f && (Ft.textContent = f);
  }
  new MutationObserver(bt).observe(S, { childList: !0 }), new MutationObserver(bt).observe(h, { attributes: !0, attributeFilter: ["class"] });
  let ot = null, pt = null, j = null;
  const wt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Map(), ma = (t) => la.set(t, (la.get(t) || 0) + 1), _o = () => [.../* @__PURE__ */ new Set([...Wt.keys(), ...ne])];
  let Ta = !1, ln = 0;
  const Tn = 6;
  let Vt = null;
  const ge = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map();
  let kt = { favourites: null }, Dn = {}, Vr = {}, Pi = [], ir = null;
  const En = (() => {
    try {
      return JSON.parse(We.get(Hu)) || {};
    } catch {
      return {};
    }
  })();
  let Me = /* @__PURE__ */ new Map(), Ri = 0;
  function Da() {
    clearTimeout(Ri), Ri = setTimeout(() => Promise.resolve(Y({ type: "frontend/set_user_data", key: Ru, value: kt })).catch(() => {
    }), 400);
  }
  const Jt = (() => {
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
  })(), Co = () => We.set(Nu, JSON.stringify(Jt)), Wr = () => {
    h.dataset.more = Jt.more, h.dataset.names = Jt.names, ql();
  };
  g && W && !s("moreInfoChoice") && (s("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Dg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Jt.more = e.dataset.moreStyle, Co(), Wr(), s("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Eg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Jt.names = e.dataset.namesStyle, Jt.namesPicked = !0, Co(), Wr(), s("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Bg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Jt.hoursWindow = e.dataset.hoursWindow, Co(), De == null || De.refresh(), s("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), s("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Pg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Jt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), s("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Jt.wxStyle = e.dataset.wxStyle, Co(), De == null || De.setStyle(Jt.wxStyle), Ee == null || Ee.forEach((a) => a.setStyle(Jt.wxStyle)), s("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), ft();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ka = /* @__PURE__ */ new Map();
  let Hi = "";
  const Ni = g ? Gm({ onChange: () => Pe() }) : null;
  g && h.classList.add("house");
  const Ea = Object.assign(document.createElement("div"), { className: "tfBento" });
  let De = null, Oi = null, Bn = !1;
  function jr(t) {
    const e = Fo();
    if (h.classList.toggle("houseBento", !!e), De && (Oi !== e || t == null) && (De.destroy(), De = null), !e || t == null) {
      Ea.remove();
      return;
    }
    Ea.isConnected || S.append(Ea), Ea.style.order = t, !De && !Bn && (De = lu(Ea, { getHass: i, entityId: e, style: Jt.wxStyle, hoursWindow: () => Jt.hoursWindow, radarSource: $r }), Oi = e);
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
  ], Gr = zr.map(([t]) => t), cn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ws = { hourly: 2 }, lo = Object.fromEntries(zr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ee = null, sr = null;
  function Ao(t) {
    const e = Fo();
    Ee && sr !== e && (Ee.forEach((a) => a.destroy()), Ee = null), Object.values(lo).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Ee && !Bn && (Ee = /* @__PURE__ */ new Map(), sr = e), Ii();
  }
  const $r = () => {
    var t;
    return ((t = de().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, js = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => xt(t.entity_id).localeCompare(xt(e.entity_id))).map((t) => ["camera:" + t.entity_id, xt(t.entity_id)])];
  function Ii() {
    if (!Ee || Bn) return;
    const t = new Set(de().hidden);
    zr.forEach(([e, a]) => {
      Ee.has(e) || t.has(e) && !(ae != null && ae.fromTray && ae.key === e) || Ee.set(e, lu(lo[e], { getHass: i, entityId: sr, style: Jt.wxStyle, cards: a, onOpen: e === "wx" ? () => Wd("weather") : void 0, radarSource: $r }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, xt = (t) => Ut(t).friendly_name || t, be = (t, e) => no(t) || (Number(Ut(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Pn = (t) => Ut(t).supported_color_modes || [], zs = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ur = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Fi = (t) => 0.2126 * Ur(t[0]) + 0.7152 * Ur(t[1]) + 0.0722 * Ur(t[2]), Gs = (t, e) => {
    const a = Fi(t), r = Fi(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, $s = 0.55, Lo = ["hs", "xy", "rgb", "rgbw", "rgbww"], qi = (t) => {
    const e = Ut(t), a = Lo.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? zs(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, To = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Do(t) {
    var r;
    const e = t.split(".")[0], a = (r = k[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? qi(t) : null : e === "climate" ? To[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function lr(t, e, a = !1) {
    const [r, l, p] = t.map((I) => I / 255), d = Math.max(r, l, p), f = Math.min(r, l, p), u = d - f, x = u ? (d === r ? (l - p) / u + (l < p ? 6 : 0) : d === l ? (p - r) / u + 2 : (r - l) / u + 4) * 60 : 0, C = (d + f) / 2, M = u ? u / (1 - Math.abs(2 * C - 1)) : 0, E = u < 0.1 ? Math.min(M, 0.25) : 1, B = (I) => {
      const P = (D) => (D + x / 30) % 12, V = E * Math.min(I, 1 - I);
      return [0, 8, 4].map((D) => Math.round(255 * (I - V * Math.max(-1, Math.min(P(D) - 3, 9 - P(D), 1)))));
    };
    for (let I = 0.5; a ? I < 0.96 : I > 0.04; I += a ? 0.01 : -0.01) {
      const P = B(I);
      if (Gs(P, e) >= 3) return "rgb(" + P.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Ua = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + lr(e, [58, 58, 58], !0) + ";--sum-l:" + lr(e, [230, 230, 230]);
  }, cr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Vi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + cr.d[t] + ";--g" + t + "-l:" + cr.l[t]).join(";"), Us = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", co = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * $s));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + lr(t, e);
  }, dr = (t) => co(qi(t)), Eo = (t) => {
    const e = Do(t);
    return e ? ' data-light style="' + co(e) + '"' : "";
  }, Bo = (t) => {
    const e = Pn(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, dn = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], po = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
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
    return Ut(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Rn = (t) => {
    var e;
    return m("pos", t, ((e = ge.get(t)) == null ? void 0 : e.pos) ?? Ya(t));
  }, Yr = (t) => {
    var e;
    return m("tilt", t, ((e = ge.get(t)) == null ? void 0 : e.tilt) ?? Ut(t).current_tilt_position);
  };
  function Oe(t) {
    var d;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Bo(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : Lo.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const f = Ya(t), u = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (u > 0 && u < 100 ? " · tilted" : "");
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
    if (a.rang) return "Rang at " + po(a.rang);
    const l = i();
    if (l != null && l.formatEntityState && !no(t))
      try {
        return l.formatEntityState(e);
      } catch {
      }
    const p = Number(e.state);
    if (e.state !== "" && Number.isFinite(p)) {
      const f = Math.abs(p) >= 100 ? 0 : Math.abs(p) >= 10 ? 1 : 2, u = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return p.toLocaleString(void 0, { maximumFractionDigits: f }) + u + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return zt(e.state);
  }
  const Po = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Zr = Object.fromEntries(Ym.map((t) => [t.id, t])), pr = {
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
    return e ? pr[e] || null : !t || (a = t.attributes) != null && a.icon || (p = (l = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : l[t.entity_id]) != null && p.icon ? null : Zs(t);
  };
  let Xr = 0;
  function uo(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var u;
      const p = k[l.dataset.iconFor], d = l.dataset.iconName || "", f = Kr(p, d);
      if (f) {
        (l.dataset.hc !== f || !l.querySelector(":scope>svg.hcGlyph")) && (l.innerHTML = Km(Zr[f], 24, "hcg" + ++Xr).replace("<svg ", '<svg class="hcGlyph" '), l.dataset.hc = f);
        return;
      }
      if (l.dataset.hc && (delete l.dataset.hc, l.textContent = ""), customElements.get("ha-state-icon") && p && !d) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (l.textContent = "", x = document.createElement("ha-state-icon"), l.appendChild(x)), x.hass = e, x.stateObj = p;
      } else if (customElements.get("ha-icon")) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-icon") && (l.textContent = "", x = document.createElement("ha-icon"), l.appendChild(x)), x.icon = d || ((u = p == null ? void 0 : p.attributes) == null ? void 0 : u.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || xt(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Jr), (r = t.classList) != null && r.contains("tfIcon") && Jr(t), hr();
  }
  const ur = /* @__PURE__ */ new Map();
  function Jr(t) {
    var p, d, f;
    const e = (((p = t.closest("[data-k]")) == null ? void 0 : p.dataset.k) || "") + "|" + (t.dataset.iconFor || ((d = t.querySelector("[data-icon-for]")) == null ? void 0 : d.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), r = { backgroundColor: a.backgroundColor, color: a.color }, l = ur.get(e);
    ur.set(e, r), !(!l || l.backgroundColor === r.backgroundColor && l.color === r.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([l, r], { duration: He.warp.cdur, delay: He.warp.cdelay, easing: Ne[He.warp.ease], fill: "backwards" });
  }
  const pn = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", Wi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function ji(t) {
    var B, I, P, V, D, J, H;
    const e = t.localName === "svg" ? t : Wi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((U) => !U.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (B = t.closest(".tfIcon")) == null ? void 0 : B.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const l = r + "|" + a.map((U) => U.getAttribute("d") || U.localName).join("|");
    if (t.dataset.fitted === l) return !0;
    let p = 1 / 0, d = 1 / 0, f = -1 / 0, u = -1 / 0;
    for (const U of a) {
      const nt = U.getBBox(), Ct = getComputedStyle(U), Nt = Ct.stroke !== "none" ? (parseFloat(Ct.strokeWidth) || 0) / 2 : 0;
      if (!nt.width && !nt.height) continue;
      const Pt = (D = (V = (P = (I = U.transform) == null ? void 0 : I.baseVal) == null ? void 0 : P.consolidate) == null ? void 0 : V.call(P)) == null ? void 0 : D.matrix, ht = Pt ? (() => {
        const Mt = [[nt.x, nt.y], [nt.x + nt.width, nt.y], [nt.x, nt.y + nt.height], [nt.x + nt.width, nt.y + nt.height]].map(([me, Se]) => [Pt.a * me + Pt.c * Se + Pt.e, Pt.b * me + Pt.d * Se + Pt.f]), Zt = Mt.map((me) => me[0]), ie = Mt.map((me) => me[1]);
        return { x: Math.min(...Zt), y: Math.min(...ie), width: Math.max(...Zt) - Math.min(...Zt), height: Math.max(...ie) - Math.min(...ie) };
      })() : nt;
      p = Math.min(p, ht.x - Nt), d = Math.min(d, ht.y - Nt), f = Math.max(f, ht.x + ht.width + Nt), u = Math.max(u, ht.y + ht.height + Nt);
    }
    if (!(f > p)) return !1;
    const x = (H = (J = e.viewBox) == null ? void 0 : J.baseVal) != null && H.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, C = r > 40 ? r * (26 / 40) : r - 14, M = C * x.width / Math.max(f - p, u - d), E = M / x.width;
    return t.localName === "svg" ? (t.style.width = M + "px", t.style.height = M + "px") : t.style.setProperty("--mdc-icon-size", M + "px"), e.style.translate = ((x.x + x.width / 2 - (p + f) / 2) * E).toFixed(2) + "px " + ((x.y + x.height / 2 - (d + u) / 2) * E).toFixed(2) + "px", t.dataset.fitted = l, !0;
  }
  let Ro = 0;
  function Ho(t = 0) {
    clearTimeout(Ro), [...o.querySelectorAll(pn)].filter((a) => !ji(a)).length && t < 5 && (Ro = setTimeout(() => Ho(t + 1), 300));
  }
  function hr() {
    clearTimeout(Ro), Ro = setTimeout(() => Ho(), 60);
  }
  const No = (t) => {
    var e, a, r;
    return t.startsWith("light.") && k[t] && !Ut(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, we = (t, e, a) => (e = e || No(t), ' data-icon-for="' + G(t) + '"' + (e ? ' data-icon-name="' + G(e) + '"' : "") + (a ? ' data-letter="' + G(a) + '"' : "")), Ba = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Ht = (t, e, a, r) => G([t, e, a, r ? JSON.stringify(r) : ""].join("|")), fr = (t) => G(JSON.stringify(t));
  function qe(t) {
    const e = G(xt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + G(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + we(t, Ba(t)) + '></div><div><div class="activityRowName">' + G(xt(t)) + '</div><div class="activityRowMeta">' + G(Oe(t)) + "</div></div></div>";
  }
  const un = (t, e, a) => '<div class="activityRow" aria-label="' + G(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + we("", a, t) + '></div><div><div class="activityRowName">' + G(t) + '</div><div class="activityRowMeta">' + G(e) + "</div></div></div>";
  function hn(t, e, a, r, l = "", p = null, d = "") {
    return '<section class="card tfCard' + (d ? " " + d : "") + '" data-tf data-k="' + G(t) + '" style="order:' + e + '" aria-label="' + G(a) + '"><div class="activityHeader">' + (p ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + G(p) + '" aria-label="' + G(a + (k[p] ? ", " + Oe(p) : "") + ". More info") + '">' + G(a) + "</button>" : '<div class="activityTitle">' + G(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + l + "</section>";
  }
  function Qr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((l) => qe(l));
    return t.power != null && r.push(un("Power now", Po(t.power), "mdi:flash")), hn(a, e, "Readings", r);
  }
  function Hn(t, e) {
    var f;
    const a = "energy:" + t.id, [r, l] = [t.solar.find((u) => u.endsWith("_power")), t.solar.find((u) => u.endsWith("_today"))], p = [r, l].filter(Boolean).map((u) => qe(u)), d = Number(((f = k[r]) == null ? void 0 : f.state) || 0) * 1e3;
    return jt.grid && (p.push(qe(jt.grid)), p.push(un("House use", Po(d + Number(k[jt.grid].state)), "mdi:home-lightning-bolt"))), hn(a, e, "Energy", p, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const zi = (t, e) => hn("plant:" + t.id, e, xt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function mr(t, e, a, r, l, p, d = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), u = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + G(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + u + '"' + (l ? ' aria-valuetext="' + G(l) + '"' : "") + ' data-drag="' + G(t + "|" + e) + '">' + (d != null ? '<span class="was" aria-hidden="true" style="left:' + d + '%"></span>' : "") + (p ? f == null ? "" : '<b style="left:' + u + '%"></b>' : '<i style="width:' + u + '%"></i>') + "</div>";
  }
  const Nn = "homecore-house-last-bright", ho = (() => {
    try {
      return JSON.parse(We.get(Nn)) || {};
    } catch {
      return {};
    }
  })();
  let gr = 0;
  const On = (t, e) => {
    !e || ho[t] === e || (ho[t] = e, clearTimeout(gr), gr = setTimeout(() => We.set(Nn, JSON.stringify(ho)), 500));
  }, ga = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + G(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + G(t.toLowerCase()) + '">' + Su.down + "</button><output>" + G(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + G(t.toLowerCase()) + '">' + Su.up + "</button></div>", Ye = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + G(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + G(r.aria) + '"' : "") + ">" + (r.html || G(r.label)) + "</button>").join("") + "</div>", ti = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ei = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ai = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + G(xt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + G(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + ti(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ei(e) + '">' + Math.round(e) + "%</output></div>";
  function br(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, l) => {
      r.firstElementChild.setAttribute("style", ti(e, l)), r.lastElementChild.classList.toggle("lit", e >= (l + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ei(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Gi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + G(xt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + G(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ks = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + G(xt(t)) + '">' + [
    be(t, Tu) && ["open", "Open", "open_cover", e >= 100 && !a],
    be(t, Eu) && ["stop", "Stop", "stop_cover", !1],
    be(t, Du) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, l, p, d]) => '<button type="button" data-act="' + Ht("cover", p, t) + '" aria-label="' + l + '"' + (d ? " disabled" : "") + ">" + Ag[r] + "</button>").join("") + "</div>", Ma = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + G(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + G(e.art) + '&quot;)"' : we(t, e.icon)) + "></button>", Za = (t) => '<button class="tfName" type="button" data-more="' + G(t) + '" aria-label="' + G(xt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + G(xt(t)) + '</span><span class="activityRowMeta">' + G(Oe(t)) + "</span></button>";
  function fn(t, e = !1, a = null) {
    const r = w(t), l = t.startsWith("light.") && wr(t) && !(a && qn(t) < 3), p = a || (e && t.startsWith("light.") ? ["bright"] : null), d = l ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + G(t) + '"></div>'] : r.sections.map((f, u) => f && (!p || p.includes((r.parts || [])[u])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (l ? " tfDac" : "") + (r.on ? " on" : "") + (!l && !d.length ? " tfHeadOnly" : "") + '" data-k="' + G(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Eo(t) + '><div class="tfActionHead">' + Ma(t, r) + Za(t) + "</div>" + d.join("") + "</div>";
  }
  const Ka = "dual-controller-v3", $i = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Xa = null;
  async function mn() {
    if (Xa || customElements.get(Ka)) return;
    Xa = "loading";
    const t = await Promise.resolve().then(() => Y({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Ka), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Ka)) return;
    const a = Object.assign(document.createElement("script"), { src: $i });
    a.onerror = () => {
      Xa = "failed", tt();
    }, document.head.appendChild(a);
  }
  const aa = /* @__PURE__ */ new Map(), In = (t) => (Jt.lightStyles[t] || Jt.lights) === "dac", oi = () => Jt.lights === "dac" || Object.values(Jt.lightStyles).includes("dac");
  function wr(t) {
    return In(t) && !!customElements.get(Ka);
  }
  const gn = (t) => Jt.lightPads[t] || Jt.dacPad, ni = () => {
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
  function Fn(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = aa.get(a);
      if (!r) {
        const l = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Ka), r.setConfig({ type: "custom:" + Ka, entity: l, pad: gn(l), tap_action: { action: "none" } }), aa.set(a, r);
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
    const e = k[t], a = e.attributes, r = t.split(".")[0], l = (f, u) => ({ act: Ht(f, "toggle", t), label: u });
    if (r === "light") {
      const f = e.state === "on", u = Pn(t), [x, C] = dn(t), M = m("bright", t, $a(e));
      f && On(t, $a(e));
      const E = m("ct", t, f && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), B = m("hue", t, f && Lo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: f, button: l("light", "Turn " + xt(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Bo(t) && mr("bright", t, M / 100, xt(t) + " brightness", M + "%", !1, f ? null : ho[t] ?? null),
        u.includes("color_temp") && mr("ct", t, E == null ? null : (E - x) / (C - x), xt(t) + " warm to cool", E == null ? "" : Math.round(E) + " kelvin", !0),
        u.some((I) => Lo.includes(I)) && mr("hue", t, B == null ? null : B / 360, xt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const f = a.target_temp_step || 0.5, u = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: l("climate", "Turn " + xt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ga("Target temperature", Fe(u) + " °C", Ht("climate", "set_temperature", t, { temperature: u - f }), Ht("climate", "set_temperature", t, { temperature: u + f })),
        Ye("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: zt(x), act: Ht("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (r === "cover") {
      const f = e.state === "opening" || e.state === "closing", u = e.state === "closed", x = Rn(t), C = Yr(t);
      return { on: !u, tone: "blue", icon: Bu[kc(e)][u ? 1 : 0], button: l("cover", (u ? "Open " : "Close ") + xt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        be(t, Ac) && ai(t, x),
        C != null && Gi(t, C),
        Ks(t, x, f)
      ] };
    }
    if (r === "humidifier") {
      const f = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: l("humidifier", "Turn " + xt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ga("Target humidity", f + "%", Ht("humidifier", "set_humidity", t, { humidity: f - 1 }), Ht("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((p = a.available_modes) == null ? void 0 : p.length) && Ye("tfSeg", "Mode", a.available_modes.map((u) => ({ label: zt(u), act: Ht("humidifier", "set_mode", t, { mode: u }), pressed: a.mode === u })))
      ] };
    }
    if (r === "media_player") {
      const f = e.state === "playing", u = e.state === "off" || e.state === "standby", x = m("vol", t, a.volume_level), C = u ? { act: Ht("media_player", be(t, _g) ? "turn_on" : "toggle", t), label: "Turn " + xt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Ht("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + xt(t) } : { act: Ht("media_player", be(t, Cg) ? "turn_off" : "toggle", t), label: "Turn " + xt(t) + " off" };
      return { on: !u, tone: "blue", art: !u && a.entity_picture ? a.entity_picture : null, button: C, parts: ["playback", "volume"], sections: u ? [] : [
        (be(t, Cu) || be(t, Au) || be(t, _u) || be(t, Lu)) && Ye("tfSeg", "Playback", [
          { html: As.prev, aria: "Previous", act: Ht("media_player", "media_previous_track", t), disabled: !be(t, Cu) },
          { html: f ? As.pause : As.play, aria: f ? "Pause" : "Play", act: Ht("media_player", "media_play_pause", t), disabled: !(be(t, _u) || be(t, Lu)) },
          { html: As.next, aria: "Next", act: Ht("media_player", "media_next_track", t), disabled: !be(t, Au) }
        ]),
        be(t, Sg) && x != null && mr("vol", t, x, xt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const f = e.state === "cleaning", u = a.rooms || [], x = (M) => u.includes(M) ? u.filter((E) => E !== M) : u.concat(M), C = Ht("vacuum", f ? "pause" : "start", t, no(t) ? { rooms: u } : null);
      return { on: f || e.state === "returning", tone: "blue", button: { act: C, label: (f ? "Pause " : "Start ") + xt(t) }, parts: ["controls", "rooms"], sections: [
        Ye("tfSeg", xt(t), [
          { label: f ? "Pause" : "Start", act: C },
          { label: "Dock", act: Ht("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Ht("vacuum", "locate", t) }
        ]),
        no(t) && Ye("tfChips", "Rooms to clean", jt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Ht("vacuum", "set_rooms", t, { rooms: x(M.name) }), pressed: u.includes(M.name) })))
      ] };
    }
    if (r === "lock") {
      const f = e.state === "locked";
      return { on: !f, tone: "heat", button: { act: Ht("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + xt(t) }, parts: ["controls"], sections: [
        Ye("tfSeg", xt(t), [
          { label: "Lock", act: Ht("lock", "lock", t), pressed: f },
          { label: "Unlock", act: Ht("lock", "unlock", t), pressed: e.state === "unlocked" },
          be(t, Fu) && { label: "Open", act: Ht("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const f = e.state === "disarmed";
      return { on: !f, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Ht("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + xt(t) + ", away" : "Disarm " + xt(t) }, parts: ["controls"], sections: [
        Ye("tfSeg", xt(t), qu.filter(([, , , u]) => !u || be(t, u)).map(([u, x, C]) => ({ label: x, act: Ht("alarm_control_panel", C, t), pressed: e.state === u })))
      ] };
    }
    if (r === "valve") {
      const f = e.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: l("valve", (f ? "Close " : "Open ") + xt(t)), parts: ["controls"], sections: [
        Ye("tfSeg", xt(t), [
          { label: "Open", act: Ht("valve", "open_valve", t), pressed: f },
          { label: "Close", act: Ht("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    if (r === "water_heater") {
      const f = Number(a.temperature), u = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Ht("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + xt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ga("Target temperature", f + " °C", Ht("water_heater", "set_temperature", t, { temperature: f - u }), Ht("water_heater", "set_temperature", t, { temperature: f + u })),
        ((d = a.operation_list) == null ? void 0 : d.length) && Ye("tfSeg", "Mode", a.operation_list.map((C) => ({ label: zt(C), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: C }), pressed: (a.operation_mode || e.state) === C })))
      ] };
    }
    if (Ai.includes(r)) {
      const f = e.state === "on";
      return { on: f, button: l(r, "Turn " + xt(t) + (f ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: xt(t) }, sections: [] };
  }
  const y = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function R(t) {
    var V;
    const e = (D) => t.readings.find((J) => Ut(J).device_class === D), a = e("temperature"), r = e("humidity"), l = (D) => {
      var J;
      return Number((J = k[D]) == null ? void 0 : J.state);
    }, p = (D) => t.actions.filter((J) => D.test(J)), d = t.lights.filter((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) === "on";
    }), f = p(/^cover\./), u = f.filter((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) !== "closed";
    }), x = [...new Set(f.map((D) => kc(k[D])))], C = p(/^climate\./)[0], M = p(/^humidifier\./)[0], E = p(/^media_player\./), B = E.find((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) === "playing";
    }) || E.find((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) === "paused";
    }), I = t.plugs.filter((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) === "on";
    }), P = [];
    if (a && Number.isFinite(l(a)) && P.push({ key: "temp", id: a, kind: "reading", icon: xo(a), label: "Temperature", value: Fe(l(a)) + "°" }), r && Number.isFinite(l(r)) && P.push({ key: "hum", id: r, kind: "reading", icon: xo(r), label: "Humidity", value: Math.round(l(r)) + "%" }), t.lights.length && P.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: xo("", "mdi:lightbulb"),
      label: "Lights",
      value: d.length ? d.length + " of " + t.lights.length + " on" : "All off",
      short: d.length ? d.length + " on" : "Off",
      on: d.length > 0,
      light: d.length ? dr(d[0]) : "",
      acts: t.lights.map((D) => ["light", d.length ? "turn_off" : "turn_on", D]),
      aria: (d.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const D = x.length === 1 ? Lg[x[0]] : "covers", J = Math.round(f.reduce((H, U) => H + Ya(U), 0) / f.length);
      P.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: u.length ? co([146, 107, 199]) : "",
        icon: xo("", ((V = Bu[x[0]]) == null ? void 0 : V[u.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(D),
        value: J <= 0 ? "Closed" : J >= 100 ? "Open" : J + "% open",
        short: J <= 0 ? "Closed" : J + "%",
        on: u.length > 0,
        acts: f.map((H) => ["cover", u.length ? "close_cover" : "open_cover", H]),
        aria: (u.length ? "Close the " : "Open the ") + D + " in " + t.name
      });
    }
    if (C) {
      const D = Ut(C), J = k[C].state === "off";
      P.push({
        key: "climate",
        kind: "control",
        tone: D.hvac_action === "cooling" ? "cool" : "heat",
        light: Do(C) ? co(Do(C)) : "",
        icon: xo(C),
        label: xt(C),
        value: J ? "Off" : zt(D.hvac_action || k[C].state) + " · " + y(D.temperature),
        short: J ? "Off" : y(D.temperature),
        on: !J,
        acts: [["climate", "toggle", C]],
        aria: "Turn " + xt(C) + (J ? " on" : " off")
      });
    }
    if (M) {
      const D = k[M].state === "on";
      P.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: D ? co([33, 150, 243]) : "",
        icon: xo("", "mdi:air-humidifier"),
        label: xt(M),
        value: D ? "On · " + Ut(M).humidity + "%" : "Off",
        short: D ? Ut(M).humidity + "%" : "Off",
        on: D,
        acts: [["humidifier", "toggle", M]],
        aria: "Turn " + xt(M) + (D ? " off" : " on")
      });
    }
    if (E.length) {
      const D = B || E[0], J = k[D], H = J.state === "playing";
      P.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Do(D) ? co(Do(D)) : "",
        icon: xo(D),
        label: xt(D),
        value: Oe(D),
        short: H ? "Playing" : J.state === "paused" ? "Paused" : zt(J.state),
        on: H,
        acts: [["media_player", J.state === "playing" || J.state === "paused" ? "media_play_pause" : "toggle", D]],
        aria: (H ? "Pause " : "Play ") + xt(D)
      });
    }
    return t.plugs.length && P.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: I.length ? co([255, 193, 7]) : "",
      icon: xo("", "mdi:power-plug"),
      label: "Plugs",
      value: I.length ? I.length + " of " + t.plugs.length + " on" : "All off",
      short: I.length ? I.length + " on" : "Off",
      on: I.length > 0,
      acts: t.plugs.map((D) => ["switch", I.length ? "turn_off" : "turn_on", D]),
      aria: (I.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((D) => P.push(Ut(D).device_class === "moisture" ? { key: "alert:" + D, kind: "alert", icon: xo(D), label: "Water leak" } : { key: "note:" + D, kind: "note", icon: xo(D), label: xt(D) + " " + Oe(D).toLowerCase() })), P;
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
          return ((p = k[l]) == null ? void 0 : p.state) === "playing";
        }) || r.find((l) => {
          var p;
          return ((p = k[l]) == null ? void 0 : p.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function K(t, e, a = !1) {
    const r = e.find((f) => f.key === "lights"), l = !!(r != null && r.on), p = "", d = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (l ? " on" : "") + '"' + p + ' aria-hidden="true">' + d + "</span>" : '<button class="tfIcon tfAreaIcon' + (l ? " on" : "") + '" type="button"' + p + ' data-acts="' + fr(r.acts) + '" aria-label="' + G(r.aria) + '" aria-pressed="' + l + '">' + d + "</button>";
  }
  const Q = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, $ = (t, e) => {
    const a = xt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function at(t) {
    const e = k[t], a = Ut(t), r = t.split(".")[0], l = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(l)) {
      if (a.device_class === "temperature") return { text: y(l) };
      const p = a.unit_of_measurement || "";
      return p === "%" ? { text: Math.round(l) + "%" } : { text: Fe(l, Number.isInteger(l) ? 0 : 1), unit: p };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: y(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Bo(t) ? $a(e) + "%" : "On" };
    if (r === "cover") {
      const p = Ya(t);
      return { text: p <= 0 ? "Closed" : p >= 100 ? "Open" : p + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Oe(t) };
  }
  const lt = (t, e, a) => {
    const r = a.find((f) => f.key === "temp"), l = a.find((f) => f.key === "hum"), p = Ut(e), d = k[e].state === "off";
    return e.startsWith("climate.") ? [$(t, e), d ? "Off" : zt(p.hvac_action || k[e].state) + (p.temperature != null ? " · " + y(p.temperature) : ""), l && l.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && $(t, e), r && r.id !== e && r.value, l && l.id !== e && l.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function vt(t) {
    const e = t.id === ot, a = R(t), r = Q(t), l = r && at(r), p = [...a.filter((d) => d.kind === "control"), ...a.filter((d) => d.kind !== "control" && d.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + G(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + G(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ve(t, null, ' data-cols="2" data-rows="' + qn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + K(t, a, !0) + '<span class="tfACName">' + G(t.name) + '</span></div><span class="tfACMain">' + (l ? G(l.text + (l.unit ? " " + l.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + p.map((d) => '<span class="tfACTile"><span class="tfIcon' + (d.kind === "alert" ? " alert" : "") + '"' + (d.on && d.light ? ' data-light style="' + d.light + '"' : "") + ">" + d.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Bt = [];
  const Et = (t) => {
    const e = kt.areaOrder || [], a = (r) => {
      const l = e.indexOf(r.id);
      return l < 0 ? e.length + t.indexOf(r) : l;
    };
    return [...t].sort((r, l) => a(r) - a(l));
  }, At = () => {
    var e;
    const t = new Set(((e = kt.dash) == null ? void 0 : e.areasOff) || []);
    return Et(Bt).filter((a) => !t.has(a.id));
  }, Gt = co([255, 162, 75]), Rt = (t) => {
    const e = t.id === ot;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + G(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + G(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, mt = (t) => {
    var r;
    const e = At();
    e.some((l) => l.id === ot) || (ot = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((l) => l.id === ot);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(vt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? ve(a, null, ' data-cols="2" data-rows="' + qn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Rt).join("") + "</div></div></div>";
  }, Ot = (t) => t.startsWith("room:"), qt = (t) => Bt.find((e) => "room:" + e.id === t);
  function ve(t, e, a = "") {
    const r = R(t), l = Q(t), p = l && at(l), d = l ? lt(t, l, r) : "", f = p ? p.text + (p.unit ? " " + p.unit : "") : "", u = (D) => {
      const J = z(t, D.key);
      return J.length === 1 ? J[0] : "group:" + t.id + ":" + D.key;
    }, x = r.filter((D) => D.kind === "control").slice(0, 4), C = (D) => D.on && D.light ? ' data-light style="' + D.light + '"' : "", M = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + C(D) + ' data-acts="' + fr(D.acts) + '" aria-label="' + G(D.aria) + '" aria-pressed="' + D.on + '">' + D.icon + "</button>", E = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + C(D) + ' data-more="' + G(u(D)) + '" aria-label="' + G(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '">' + D.icon + "</button>", B = x.map(E), I = x.map((D) => '<div class="tfRoomDev' + (D.on ? " on" : "") + '" data-more="' + G(u(D)) + '">' + (D.acts ? M(D) : E(D)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + G(u(D)) + '" aria-label="' + G(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '"><span class="activityRowName">' + G(D.label) + '</span><span class="activityRowMeta">' + G(D.value) + "</span></button></div>"), P = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", V = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + G(t.id) + '" aria-label="Open ' + G(t.name) + '">' + P + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + G(e) + '"' : "") + a + ' data-go="' + G(t.id) + '"><div class="tfActionHead">' + V + '<button class="tfName" type="button" data-go="' + G(t.id) + '" aria-label="Open ' + G(t.name) + '"><span class="activityRowName">' + G(t.name) + "</span>" + (f || d ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + G(f) + (d ? " · " : "") + "</span>" : "") + G(d) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (f ? '<button class="tfRoomReading" type="button" data-more="' + G(l) + '" aria-label="' + G(xt(l) + ", " + Oe(l) + ". More info") + '"><span class="tfRoomBig">' + G(f) + "</span>" + (d ? '<span class="tfRoomSub">' + G(d) + "</span>" : "") + "</button>" : "") + (B.length ? '<div class="tfRoomDevices">' + B.join("") + '</div><div class="tfRoomHeads">' + I.join("") + "</div>" : "") + "</div>";
  }
  const Dt = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], re = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (kt.favourites ?? Dn.favorite_entities ?? []).filter((t) => k[t]);
  function Sa() {
    if (!ir) {
      const e = Object.entries(En).sort((r, l) => l[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      ir = [.../* @__PURE__ */ new Set([...Pi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = $t();
    return ir.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let fo = !1;
  const ii = 6;
  function vr() {
    if (!fo || kt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(k).find((r) => no(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    kt = { ...kt, favourites: [.../* @__PURE__ */ new Set([...kt.favourites ?? Dn.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ii), favSeeded: !0 }, Da();
  }
  const Oo = () => kt.suggest ?? !Dn.hide_suggested_entities;
  function ee() {
    const t = new Set(v ? [] : kt.favHidden || []), e = $t().filter((l) => !t.has(l)), a = Oo() ? Sa().filter((l) => !t.has(l) && ol(l)) : [], r = Math.max(ii, e.length);
    return [...e, ...a].slice(0, v && !ss() ? r : Math.min(Ig, r));
  }
  const Io = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + G(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + G(xt(t)) + '">' + Ng(e) + "</button>";
  };
  function mo(t, { area: e = !1, star: a = !1, plain: r = !1, say: l = null, alert: p = !1 } = {}) {
    var I, P, V, D, J, H;
    const d = r && ((J = (I = i()) == null ? void 0 : I.devices) == null ? void 0 : J[(D = (V = (P = i()) == null ? void 0 : P.entities) == null ? void 0 : V[t]) == null ? void 0 : D.device_id]), f = d && (d.name_by_user || d.name) || xt(t), u = t.split(".")[0], x = !r && Hr.includes(u) ? w(t) : null, C = x ? x.on : ["on", "open", "playing"].includes((H = k[t]) == null ? void 0 : H.state), M = r ? null : x ? x.button : Ai.includes(u) ? { act: Ht(u, "toggle", t), label: "Turn " + xt(t) + (C ? " off" : " on") } : u === "scene" || u === "script" ? { act: Ht(u, "turn_on", t), label: "Run " + xt(t) } : null, E = (l ?? Oe(t)) + (e && Me.get(t) ? " · " + Me.get(t) : ""), B = (x == null ? void 0 : x.icon) || Ba(t);
    return '<div class="activityRow' + (M ? " tfPlug" : "") + (C ? " on" : "") + (a ? " tfPick" : "") + (p ? " alert" : "") + '" data-k="' + G((e ? "fav:" : "row:") + t) + '" data-tone="' + (u === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + Eo(t) + ">" + (M && !a ? '<button class="tfIcon" type="button" data-act="' + M.act + '" aria-label="' + G(M.label) + '"' + we(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + we(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + G(t) + '" aria-label="' + G(f + ", " + E + ". More info") + '"><span class="activityRowName">' + G(f) + '</span><span class="activityRowMeta">' + G(E) + "</span></button>" + (a ? Io(t) : "") + "</div>";
  }
  const Fo = () => {
    var t;
    return k[(t = kt.sources) == null ? void 0 : t.weather] ? kt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function si() {
    var a;
    const t = (r) => Object.keys(k).filter((l) => l.startsWith("binary_sensor.") && r.includes(Ut(l).device_class));
    return ((a = Vr.alert_entities) != null && a.length ? Vr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ds).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => k[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[r.entity].state) }));
  }
  function Zi() {
    const t = Object.keys(Ci), e = /* @__PURE__ */ new Set(), a = [];
    (Dn.shortcuts || []).forEach((p) => {
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
  function yr() {
    var V;
    const t = ((V = i()) == null ? void 0 : V.entities) || {}, e = (D) => Ut(D).device_class, a = Object.keys(k).filter((D) => D.startsWith("sensor.") && e(D) === "battery" || D.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(D))), r = jt.rooms.flatMap((D) => D.plants.map((J) => J.id));
    if (!a.length && !r.length) return null;
    const l = (D) => {
      var H;
      const J = (H = t[D]) == null ? void 0 : H.device_id;
      return !!J && Object.keys(k).some((U) => {
        var nt;
        return U.startsWith("binary_sensor.") && ((nt = t[U]) == null ? void 0 : nt.device_id) === J && e(U) === "battery_charging" && k[U].state === "on";
      });
    }, p = (D) => D.startsWith("vacuum.") ? Ut(D).battery_level <= 20 && k[D].state !== "docked" : D.startsWith("binary_sensor.") ? e(D) === "battery" && k[D].state === "on" : parseFloat(k[D].state) <= 20 && !l(D), d = [...a, ...jt.vacuums].filter((D) => k[D] && p(D)), f = [...a.filter((D) => e(D) === "problem" && k[D].state === "on"), ...r.filter((D) => {
      var J;
      return ((J = k[D]) == null ? void 0 : J.state) === "problem";
    })], u = a.filter((D) => k[D].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...d, ...f, ...u])], C = (D) => {
      const J = parseFloat(k[D].state);
      return e(D) === "battery" && Number.isFinite(J) ? J : 101;
    }, M = [...r, ...jt.vacuums, ...[...a].sort((D, J) => C(D) - C(J))].filter((D) => k[D] && !x.includes(D)), E = /* @__PURE__ */ new Map();
    M.forEach((D) => {
      var H;
      const J = ((H = jt.areaOf) == null ? void 0 : H.call(jt, D)) || "";
      E.set(J, [...E.get(J) || [], D]);
    });
    const B = (D) => {
      const J = jt.rooms.findIndex((H) => H.id === D);
      return D === "" ? 1 / 0 : J < 0 ? jt.rooms.length : J;
    }, I = [...E.keys()].sort((D, J) => B(D) - B(J)), P = (D) => {
      var J, H, U, nt;
      return ((J = jt.rooms.find((Ct) => Ct.id === D)) == null ? void 0 : J.name) || ((nt = (U = (H = i()) == null ? void 0 : H.areas) == null ? void 0 : U[D]) == null ? void 0 : nt.name) || D;
    };
    return {
      value: [d.length && re(d.length, "low battery", "low batteries"), f.length && re(f.length, "problem", "problems"), u.length && re(u.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...I.map((D) => ({ name: D ? P(D) : I.length > 1 ? "Other devices" : "Devices", ids: E.get(D) }))].filter((D) => D.ids.length)
    };
  }
  const oa = () => v ? kt.home || {} : kt, Xs = (t) => Pu.includes(t) ? (oa().shownSums || []).includes(t) : !(oa().hiddenSums || []).includes(t);
  function Dh(t, e, a) {
    const r = t.flatMap((E) => a(E, /^cover\./)), l = r.filter((E) => {
      var B;
      return ["open", "opening"].includes((B = k[E]) == null ? void 0 : B.state);
    }).length, p = Object.keys(k).filter((E) => E.startsWith("person.")), d = p.filter((E) => {
      var B;
      return ((B = k[E]) == null ? void 0 : B.state) === "home";
    }).length, f = jt.security.openings.filter((E) => k[E]), u = f.filter((E) => k[E].state === "on").length, x = Object.keys(k).filter((E) => E.startsWith("binary_sensor.") && Ut(E).device_class === "moisture"), C = x.filter((E) => k[E].state === "on").length, M = jt.vacuums.filter((E) => k[E]);
    return {
      covers: r.length && { value: l ? l + " open" : "All closed", groups: e((E) => a(E, /^cover\./)) },
      people: p.length && { value: d ? d + " home" : "Nobody home", groups: [{ name: "People", ids: p }] },
      openings: f.length && { value: u ? u + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: x.length && { value: C ? re(C, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: M.length && { value: zt(k[M[0]].state), groups: [{ name: "Vacuum", ids: M }] }
    };
  }
  function Ki(t = !1) {
    var Pt;
    const e = jt.rooms, a = jt.security, r = (ht, Mt) => ht.actions.filter((Zt) => Mt.test(Zt)), l = (ht) => e.map((Mt) => ({ name: Mt.name, ids: ht(Mt) })).filter((Mt) => Mt.ids.length), p = e.flatMap((ht) => ht.lights), d = p.filter((ht) => {
      var Mt;
      return ((Mt = k[ht]) == null ? void 0 : Mt.state) === "on";
    }).length, f = e.map((ht) => ht.readings.find((Mt) => Ut(Mt).device_class === "temperature")).filter(Boolean).map((ht) => Number(k[ht].state)).filter(Number.isFinite), [u, x] = [Fe(Math.min(...f)), Fe(Math.max(...f))], C = e.flatMap((ht) => r(ht, /^media_player\./)), M = C.filter((ht) => {
      var Mt;
      return ((Mt = k[ht]) == null ? void 0 : Mt.state) === "playing";
    }).length, E = si(), B = E.filter((ht) => ht.severity === "warning" && ht.on).length, I = a.locks.filter((ht) => {
      var Mt;
      return ["unlocked", "jammed", "open"].includes((Mt = k[ht]) == null ? void 0 : Mt.state);
    }).length, P = a.alarms.filter((ht) => {
      var Mt;
      return ((Mt = k[ht]) == null ? void 0 : Mt.state) === "disarmed";
    }).length, V = B ? re(B, "warning", "warnings") : null, D = I ? I + " unlocked" : P ? P + " disarmed" : V ? null : "All secure", J = yr(), H = e.flatMap((ht) => ht.solar), U = H.find((ht) => ht.endsWith("_power")), nt = {
      light: p.length && { value: d ? d + " on" : "All off", groups: l((ht) => ht.lights) },
      climate: f.length && { value: u === x ? u + "°" : u + " - " + x + "°", groups: l((ht) => [...ht.readings.filter((Mt) => ["temperature", "humidity"].includes(Ut(Mt).device_class)), ...r(ht, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [V, D].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((ht) => ht.ids.length) },
      media_players: C.length && { value: M ? M + " playing" : "No media playing", groups: l((ht) => r(ht, /^media_player\./)) },
      maintenance: J,
      energy: jt.grid && { value: Po(Number(((Pt = k[U]) == null ? void 0 : Pt.state) || 0) * 1e3 + Number(k[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...H, jt.grid] }] },
      ...Dh(e, l, r)
    }, Ct = [], Nt = E.filter((ht) => ht.severity !== "warning" && ht.on);
    return Nt.length && Ct.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: re(Nt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Nt.map((ht) => ht.entity) }] }), Zi().forEach((ht) => {
      ht.type !== "summary" ? Ct.push({ key: "path:" + ht.path, name: ht.label || ht.path, icon: ht.icon || "mdi:link-variant", colour: "", value: "" }) : !ht.hidden && nt[ht.key] && (t || Xs(ht.key)) && Ct.push({ key: ht.key, ...Ci[ht.key], ...nt[ht.key] });
    }), Ct;
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
    kt = { favourites: p.favourites ?? null, sources: p.sources, hiddenSums: p.hiddenSums, shownSums: p.shownSums, home: p.home, dash: p.dash, named: p.named, favHidden: p.favHidden, suggest: p.suggest, favSeeded: p.favSeeded, favsTitle: p.favsTitle, areaOrder: p.areaOrder }, Dn = (a == null ? void 0 : a.value) || {}, Vr = (r == null ? void 0 : r.value) || {}, Pi = Array.isArray(l == null ? void 0 : l.entities) ? l.entities : [], ir = null, Object.keys(k).length && Pe(), Ph(), fo = !0, vr();
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
      const f = await Y({ type: "lovelace/config", url_path: t }), u = ((f == null ? void 0 : f.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((C) => C.cards || [])]);
      if (!u.length || !u.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
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
      if (!k[l.entity_id] || !Gc(l.entity_id) || !ol(l.entity_id) || ["unavailable", "unknown"].includes(l.state)) return;
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
    return Object.keys(k).forEach((l) => {
      var f;
      const p = k[l], d = p.last_changed ? Date.parse(p.last_changed) / 1e3 : 0;
      d > r && a({ entity_id: l, state: p.state, when: d, context_user_id: (f = p.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((l, p) => p.when - l.when).slice(0, Fg);
  }
  function Nh(t) {
    var r;
    const e = t.context_user_id && Object.keys(k).find((l) => l.startsWith("person.") && Ut(l).user_id === t.context_user_id);
    if (e) return xt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Oh(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Vu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function Ih(t) {
    const e = t.entity_id, a = t.alarm && tl(e), r = xt(e) + " " + (a ? a[0] : Oh(t)), l = a ? po(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + po(t.cleared * 1e3) : "") : [Nh(t), po(t.when * 1e3)].filter(Boolean).join(" · ");
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
        const f = await Promise.all(d.map((u) => Promise.resolve(Y({ type: "recorder/statistic_during_period", statistic_id: u, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: l, name: p, id: d[0], ids: d, value: f.reduce((u, x) => u + x, 0), unit: Ut(d[0]).unit_of_measurement || (l === "gas" || l === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ja = t, Pe();
  }
  let xr = null, Yc = [];
  function el() {
    var p;
    const t = Yc = Ja != null && Ja.length ? Ja : Fh.map(([d, f, u, x]) => {
      if (d === "solar") {
        const M = Object.keys(k).find((E) => E.endsWith("_solar_today") && !E.includes("made_up_energy"));
        M && Number.isFinite(Number(k[M].state)) && (u = Number(k[M].state));
      }
      const C = "sensor.made_up_energy_" + d;
      return k[C] = { entity_id: C, state: String(u), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: d, name: f, id: C, value: u, unit: x };
    });
    Lt.clear(), t.some((d) => d.id === xr) || (xr = t[0].id);
    const e = t.map((d) => {
      const f = Number(d.value).toLocaleString(void 0, { maximumFractionDigits: d.value < 10 ? 2 : 1 }) + " " + d.unit, u = qg[d.key], x = d.id === xr;
      return Lt.set(d.id, { name: d.name, text: f, icon: u }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + G(d.id) + '" aria-pressed="' + x + '" aria-label="' + G(d.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + we("", u, d.name) + '></div><div><div class="activityRowName">' + G(d.name) + '</div><div class="activityRowMeta">' + G(f) + "</div></div></div>";
    }), a = t.find((d) => d.id === xr), r = (((p = de().opts.energy) == null ? void 0 : p.graph) || "above") === "below", l = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + G(a.id) + '" role="img" aria-label="' + G(a.name) + ', last 24 hours"></svg></div>';
    return hn("dash:energy", 0, "Energy today", e, l, Ki().some((d) => d.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Zc(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === xr || (xr = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
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
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), l = e.getMinutes() / 60, p = Array.from({ length: 24 }, (f, u) => u <= r ? 0 : null);
    if (!t.ids) {
      const f = Kc[t.key] || Kc.electricity, u = f.map((C, M) => M < r ? C : M === r ? C * l : 0), x = u.reduce((C, M) => C + M, 0) || 1;
      return p.map((C, M) => C == null ? null : t.value * u[M] / x);
    }
    const d = Xc.get(t.id);
    if (d && d.day === a && Date.now() - d.at < 5 * 60 * 1e3) return d.hours;
    try {
      const f = await Y({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((C) => ((f == null ? void 0 : f[C]) || []).forEach((M) => {
        const E = typeof M.start == "number" ? M.start : Date.parse(M.start), B = new Date(E).getHours();
        E >= a && B < r && (p[B] += Number(M.change) || 0);
      }));
      const u = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((C) => Promise.resolve(Y({ type: "recorder/statistic_during_period", statistic_id: C, fixed_period: { start_time: new Date(u).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
      p[r] = x.reduce((C, M) => C + M, 0);
    } catch {
    }
    return Xc.set(t.id, { at: Date.now(), day: a, hours: p }), p;
  }
  async function Vh(t, e) {
    const a = await qh(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), l = Math.max(60, t.clientHeight || 130), p = 18, d = l - 18, f = r / 24, u = f * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), C = a.map((V) => V ?? 0), M = Math.max(0, ...C), E = (V) => d - (M > 0 ? V / M * (d - p) : 0), B = (V) => V.toLocaleString(void 0, { maximumFractionDigits: V < 10 ? 2 : 1 }) + " " + e.unit, I = (V) => String(V).padStart(2, "0") + ":00", P = M > 0 ? C.indexOf(M) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + l), t.setAttribute("aria-label", e.name + " today by the hour: " + B(e.value) + (P >= 0 ? ", most " + B(M) + " at " + I(P) : "")), t.innerHTML = [p, (p + d) / 2, d].map((V) => '<line x1="0" x2="' + r + '" y1="' + V + '" y2="' + V + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((V, D) => V > 0 ? '<rect x="' + (D * f + (f - u) / 2).toFixed(1) + '" y="' + E(V).toFixed(1) + '" width="' + u.toFixed(1) + '" height="' + (d - E(V)).toFixed(1) + '" rx="2" fill="' + (D === x ? "var(--primary)" : "var(--text)") + '"' + (D === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((V) => '<text x="' + (V * f).toFixed(1) + '" y="' + (l - 3) + '">' + String(V).padStart(2, "0") + "</text>").join("") + (P >= 0 ? '<text x="0" y="11">Most: ' + G(B(M)) + " at " + I(P) + "</text>" : "");
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
  const ol = (t) => !t.startsWith("light.") || Vg.includes((Me.get(t) || "").toLowerCase()), nl = () => Math.max(2, wn((S == null ? void 0 : S.clientWidth) || 0).n), Qc = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, jh = (t) => Qc(t).slice(0, qn(t) - 1);
  function td(t) {
    const e = de().tiles;
    if (e) return e.filter((r) => k[r] || qt(r));
    if (!Xi) {
      const r = (l) => {
        var p;
        return (((p = k[l]) == null ? void 0 : p.state) === "on" ? 1e6 : 0) + (En[l] || 0);
      };
      Xi = {
        lights: jt.rooms.flatMap((l) => l.lights).filter((l) => {
          var p;
          return ol(l) && ((p = k[l]) == null ? void 0 : p.state) !== "unavailable";
        }).sort((l, p) => r(p) - r(l) || xt(l).localeCompare(xt(p))),
        climates: jt.rooms.flatMap((l) => l.actions.filter((p) => p.startsWith("climate.")))
      };
    }
    const a = Xi.climates.filter((r) => k[r]).slice(0, t > 3 ? 2 : 1);
    return [...Xi.lights.filter((r) => k[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const rl = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.welcome) ?? !0;
  }, zh = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((r) => {
      var l;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((l = r.attributes) == null ? void 0 : l.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Gh = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = zh();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ed = (t, e, a, r) => (l) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + l + "</div></section>";
  function $h(t, e) {
    var p, d;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? rl() : de().welcome) ? '<span class="tfGreeting">' + G(Gh()) + "</span>" : "") + G(((d = (p = i()) == null ? void 0 : p.config) == null ? void 0 : d.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ed("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: Eh(f) })) }), !v && At().length && t.push({ key: "areas", html: mt(0) });
    const a = ee();
    if (a.length && t.push({ key: "favs", wrap: ed("tfDash-favs", "favs", "Favourites", Qi()), tiles: a.map((f) => ({ key: "fav:" + f, html: mo(f, { area: !0 }) })) }), v)
      return Uc(), md() && t.push({ key: "dash:energy", html: el() }), al = nl(), td(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (u) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + G(f) + '">' + u + "</div>",
        tiles: [{ key: f, html: ve(qt(f), f) }]
      })), t;
    const r = Hh();
    t.push({ key: "dash:act", html: hn("dash:act", 0, "Activity", r.length ? r.map(Ih) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: el() });
    const l = nl();
    return al = l, td(l >= 3 ? l : l * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (u) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + G(f) + '">' + u + "</div>",
      tiles: [{ key: f, html: Ot(f) ? ve(qt(f), f) : fn(f, !1, jh(f)) }]
    })), Rh(), Uc(), t;
  }
  const ci = 252, he = 16, Uh = 200, Yh = Math.round(ci * 1.25), Zh = 60, Pa = Zh + he, Kh = 3, ad = {
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
  }, Xh = ["wx", "favs", "act", "energy", "avg"], od = ["XS", "S", "M", "L", "XL"], nd = od.length, Jh = ["Narrow", "Wide", "Really wide"], Qh = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, rd = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && In(t) ? nd : Math.min(nd, Qc(t).length + 1), qn = (t) => {
    const e = de().opts[t] || {}, a = rd(t), r = Number(e.h) || (e.tall ? 5 : Qh[t] || id);
    return Math.max(1, Math.min(a, r));
  }, id = 2, tf = 90, sd = 60, Ra = (t) => {
    var e;
    return ad[t] || (t.startsWith("room:") ? ((e = Bt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : xt(t));
  }, ef = 128;
  let ba = !1, ae = null, ca = null, il = !1, Vn = /* @__PURE__ */ new Map(), Ji = 0, bn = 0;
  const qo = ["title", "sums"], wn = (t) => {
    const e = Math.max(1, Math.floor((t + he) / (Uh + he)));
    return { n: e, w: Math.max(1, Math.min(Yh, Math.floor((t - (e - 1) * he) / e))) };
  }, sl = () => Et(Bt), af = () => {
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
      known: cn,
      areasOff: []
    };
  }
  const de = () => v ? of() : ll(), ll = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...kt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = cn.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Wn(t) {
    v || (kt = { ...kt, dash: { ...t, known: cn } }, Da());
  }
  function jn() {
    const t = (e) => S.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", lo.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", lo.avg, 2],
      ...cn.map((e) => [e, lo[e], Ws[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, l = !1]) => ({ key: e, el: a, span: r, tile: l }));
  }
  const ld = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const l = 2 * a + he;
      t.el.style.setProperty("--area-open", l + "px");
      const p = Math.ceil((l + Math.max(0, At().length - 1) * (ef + he) + he) / (a + he));
      return Math.max(Math.min(e, 2), Math.min(p, e - (((r = de().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, de().spans[t.key] ?? t.span);
  }, cd = (t) => qn(t.key), dd = window.matchMedia("(max-width: 620px)"), nf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(At().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + he) / Pa));
  };
  function pd(t, e, a = null) {
    const r = de().cells, l = t.every((f) => !r[f.key] || r[f.key].col + f.cols <= e), p = (f) => r[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), x = (P, V, D, J) => {
        for (let H = V; H < V + J; H++) for (let U = P; U < P + D; U++) if (f.has(U + "," + H)) return !1;
        return !0;
      }, C = (P, V, D) => {
        for (let J = D; J < D + P.rows; J++) for (let H = V; H < V + P.cols; H++) f.add(H + "," + J);
        u.set(P.key, { col: V, row: D, cols: P.cols, rows: P.rows });
      }, M = (P, V, D) => {
        for (V = Math.max(0, Math.min(e - P.cols, V)), D = Math.max(0, D); !x(V, D, P.cols, P.rows); ) D++;
        C(P, V, D);
      }, E = (P) => {
        for (let V = 0; ; V++) for (let D = 0; D <= e - P.cols; D++) if (x(D, V, P.cols, P.rows)) {
          C(P, D, V);
          return;
        }
      };
      a && M(a, ae.col, ae.row);
      const B = t.filter((P) => P !== a), I = (P, V) => p(P).row - p(V).row || p(P).col - p(V).col;
      return l ? (B.filter((P) => r[P.key]).sort(I).forEach((P) => M(P, r[P.key].col, r[P.key].row)), B.filter((P) => !r[P.key]).forEach(E), u) : ([...B].sort(I).forEach(E), u);
    })();
  }
  function rf(t, e) {
    const a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), l = (p, d, f) => {
      for (let u = d; u < d + f.rows; u++) for (let x = p; x < p + f.cols; x++) if (a.has(x + "," + u)) return !1;
      return !0;
    };
    return t.forEach((p) => {
      for (let d = 0; ; d++) {
        let f = 0;
        for (; f <= e - p.cols && !l(f, d, p); ) f++;
        if (!(f > e - p.cols)) {
          for (let u = d; u < d + p.rows; u++) for (let x = f; x < f + p.cols; x++) a.add(x + "," + u);
          r.set(p.key, { col: f, row: d, cols: p.cols, rows: p.rows });
          return;
        }
      }
    }), r;
  }
  function cl() {
    const t = de(), e = new Set(t.hidden), a = jn().filter((d) => !qo.includes(d.key));
    let r = Vn;
    if (!r.size) {
      const d = t.pegs || 4, f = a.filter((u) => !e.has(u.key));
      f.forEach((u) => {
        u.cols = ld(u, d, ci), u.rows = cd(u) ?? id;
      }), r = pd(f, d);
    }
    const l = (d) => !e.has(d.key) && r.get(d.key) || { row: 1e9, col: 0 };
    a.sort((d, f) => l(d).row - l(f).row || l(d).col - l(f).col);
    const p = (t.phone || []).map((d) => a.find((f) => f.key === d && !e.has(d))).filter(Boolean);
    return [...p, ...a.filter((d) => !p.includes(d))];
  }
  const sf = () => {
    const t = cl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), dl([...jn().filter((e) => qo.includes(e.key)), ...t].map((e) => e.el));
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
  const kr = (t, e) => Wn({ ...t, cells: e, pegs: wn(S.clientWidth).n });
  function pl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), l = a.getBoundingClientRect(), p = l.right > r.right ? l.right - r.right : l.left < r.left ? l.left - r.left : 0;
    p && e.scrollBy({ left: p, behavior: t ? "smooth" : "auto" });
  }
  function Ke() {
    var J;
    if (requestAnimationFrame(() => pl(!1)), setTimeout(() => pl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * ci + he, a = h.classList.contains("tfDash");
    v && (ba = !1), h.classList.toggle("tfOverview", v);
    const { n: r, w: l } = e ? { n: 2, w: Math.floor((t - he) / 2) } : wn(t);
    Ea.classList.add("tfPegs"), Ea.style.setProperty("--peg-n", r), Ea.style.setProperty("--peg-w", l + "px");
    const p = new Set(de().hidden);
    cn.forEach((H) => {
      var U;
      return (U = lo[H]) == null ? void 0 : U.classList.toggle("tfNotAdded", p.has(H) && !(ae != null && ae.fromTray && ae.key === H));
    }), Ii(), h.classList.toggle("tfBoard", a), h.classList.toggle("tfEditing", a && ba && !e);
    const d = s("dashEditNav");
    !a && $o && El(!1), d && v ? (d.hidden = !a, $o || (d.classList.remove("active"), d.setAttribute("aria-pressed", "false"), d.setAttribute("aria-label", "Edit Home page"), d.title = "Edit", d.innerHTML = Ts)) : d && (d.hidden = !a || e, d.classList.toggle("active", ba), d.setAttribute("aria-pressed", String(ba)), d.setAttribute("aria-label", ba ? "Done editing" : "Edit custom dashboard"), d.title = ba ? "Done" : "Edit", d.innerHTML = ba ? Iu : Ts);
    const f = a ? jn() : [];
    if ((!a || !v) && S.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((H) => H.remove()), !a) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((H) => {
        H.classList.remove("tfBoardItem", "tfBoardHidden"), H.style.left = H.style.top = H.style.width = H.style.height = "";
      }), (J = S.querySelector(".tfDash-act > .activityRows")) == null || J.style.removeProperty("max-height"), ml(!1), h.classList.contains("tfDash") && sf(), Be();
      return;
    }
    if (v) {
      uf(f, t, e);
      return;
    }
    S.style.setProperty("--peg-w", l + "px");
    const u = new Set(de().hidden), x = l + he;
    ae != null && ae.fromTray && u.delete(ae.key), f.forEach((H) => H.el.classList.toggle("tfBoardHidden", u.has(H.key)));
    const C = f.filter((H) => !u.has(H.key) && getComputedStyle(H.el).display !== "none");
    let M = 0;
    C.filter((H) => qo.includes(H.key)).forEach((H) => {
      H.el.classList.add("tfBoardItem"), Object.assign(H.el.style, { width: t + "px", height: "", left: "0px", top: M + "px" });
      const U = H.key === "sums" && H.el.querySelector(".tfDash-bar"), nt = U ? U.querySelectorAll(".activityRow").length : 0;
      U && (U.style.maxWidth = "none");
      for (let Ct = 1; U && Ct <= nt && (U.style.setProperty("--bar-cols", String(Math.ceil(nt / Ct))), !(U.offsetWidth <= t)); Ct++)
        ;
      U && (U.style.maxWidth = ""), M += H.el.offsetHeight + he;
    }), bn = M;
    const E = C.filter((H) => !qo.includes(H.key));
    E.forEach((H) => {
      H.cols = ld(H, r, l), H.el.classList.add("tfBoardItem"), H.el.style.width = (H.cols === r ? t : H.cols * l + (H.cols - 1) * he) + "px", H.el.style.height = "", H.rows = cd(H) ?? Math.max(1, Math.ceil((H.el.offsetHeight + he - 6) / Pa)), H.key === "areas" && dd.matches && (H.rows = nf(parseFloat(H.el.style.width)));
    });
    const B = ae && E.find((H) => H.key === ae.key), I = e && cl().map((H) => H.key), P = (H) => I.includes(H.key) ? I.indexOf(H.key) : -1, V = e ? rf([...E].sort((H, U) => P(H) - P(U)), r) : pd(E, r, B);
    V.forEach((H) => Object.assign(H, { x: H.cols === r ? 0 : H.col * x, y: bn + H.row * Pa, w: H.cols === r ? t : H.cols * l + (H.cols - 1) * he, h: H.rows * Pa - he })), E.forEach((H) => {
      const U = V.get(H.key);
      H.el.style.height = U.h + "px", H.el.dataset.rows = e && H.key === "wx" ? 5 : qn(H.key), H.key === "areas" && H.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((nt) => {
        nt.dataset.rows = H.el.dataset.rows;
      }), H.el.toggleAttribute("data-narrow", !e && U.cols === 1 && r > 1), H.el.dataset.cols = U.cols, H.el.classList.contains("tfDac") && H.el.style.setProperty("--tf-dac-pad", U.h - tf + "px"), !(H === B && !ae.fromTray) && (H.el.style.left = U.x + "px", H.el.style.top = U.y + "px");
    }), e || (Vn = V), dl([...C.filter((H) => qo.includes(H.key)), ...E.slice().sort((H, U) => V.get(H.key).row - V.get(U.key).row || V.get(H.key).col - V.get(U.key).col)].map((H) => H.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([H, U]) => {
      const nt = V.get(H), Ct = nt && S.querySelector(U), Nt = Ct == null ? void 0 : Ct.querySelector(":scope > .activityRows"), Pt = Ct == null ? void 0 : Ct.querySelector(":scope > .activityHeader");
      if (!Nt || !Pt) return;
      const ht = Nt.getBoundingClientRect().top - Ct.getBoundingClientRect().top, Mt = nt.rows === 1 ? nt.h : Math.floor(nt.h - ht - parseFloat(getComputedStyle(Ct).paddingBottom)), Zt = Math.max(1, Math.floor(Mt / sd));
      Nt.style.setProperty("--fill-gap", (Zt > 1 ? (Mt - Zt * sd) / (Zt - 1) : 0).toFixed(2) + "px"), Nt.style.maxHeight = Mt + "px";
    }), Ji = Math.max(0, ...[...V.values()].map((H) => H.row + H.rows));
    let D = bn + Ji * Pa - he;
    D = ml(ba && !e, E, V, D, r, l), S.style.height = D + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), f.forEach((H) => fl.observe(H.el)), Od(), Be();
  }
  const Vo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, ud = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, hd = () => {
    var t;
    return ud[(t = kt.home) == null ? void 0 : t.areaSize] ? kt.home.areaSize : "s";
  }, ul = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = kt.home) == null ? void 0 : t.areaLayout) ? kt.home.areaLayout : "bento";
  }, fd = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, lf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Qi = () => v ? Wo("favsTitle") : kt.favsTitle !== !1, cf = () => {
    var t;
    return !!((t = kt.home) != null && t.weather && Fo());
  }, md = () => {
    var t;
    return !!((t = kt.home) != null && t.energy && (Ja != null && Ja.length));
  }, Wo = (t) => {
    var e;
    return ((e = kt.home) == null ? void 0 : e[t]) ?? lf[t];
  };
  function df() {
    var l;
    const t = Object.values(((l = i()) == null ? void 0 : l.floors) || {}), e = new Set(t.map((p) => p.floor_id)), a = t.map((p) => ({ id: p.floor_id, name: p.name, rooms: Bt.filter((d) => d.floor === p.floor_id) })), r = Bt.filter((p) => !e.has(p.floor));
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
    if (!v || !$o || t.button !== 0 || S.clientWidth < 2 * ci + he) return;
    const e = t.target.closest(".tfBoardItem"), a = e && jn().find((f) => f.el === e);
    if (!a || qo.includes(a.key) || Ot(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), l = di.get(a.key);
    Le = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: l.x, top: l.y, order: [...bd] };
    const p = (f) => {
      const u = f.clientX - Le.x0, x = f.clientY - Le.y0;
      if (!Le.on && Math.hypot(u, x) < 5) return;
      Le.on || (Le.on = !0, e.classList.add("tfDragging"), je() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Le.left + u + "px", top: Le.top + x + "px" });
      const C = f.clientX - r.left, M = f.clientY - r.top + S.scrollTop;
      let E = null, B = 1 / 0;
      if (di.forEach((D, J) => {
        if (J === a.key || !Le.order.includes(J)) return;
        const H = Math.hypot(C - (D.x + D.w / 2), M - (D.y + D.h / 2));
        H < B && (B = H, E = { key: J, b: D });
      }), !E) return;
      const I = Le.order.filter((D) => D !== a.key), P = I.indexOf(E.key) + (C > E.b.x + E.b.w / 2 ? 1 : 0), V = [...I.slice(0, P), a.key, ...I.slice(P)];
      V.join() !== Le.order.join() ? (Le.order = V, Ke()) : hl(di.get(a.key));
    }, d = () => {
      removeEventListener("pointermove", p), removeEventListener("pointerup", d), removeEventListener("pointercancel", d);
      const f = Le;
      Le = null, e.classList.remove("tfDragging"), f.on && Ca({ order: f.order }), Ke(), f.on && !je() && setTimeout(() => mc(e), 340);
    };
    addEventListener("pointermove", p), addEventListener("pointerup", d), addEventListener("pointercancel", d);
  }
  function uf(t, e, a) {
    var Mp;
    const r = new Set(de().hidden);
    t.forEach((gt) => gt.el.classList.toggle("tfBoardHidden", r.has(gt.key)));
    const l = t.filter((gt) => !r.has(gt.key) && getComputedStyle(gt.el).display !== "none"), p = he, d = a ? { w: Math.floor((e - p) / 2) } : wn(e), f = Math.min(e, Vo.full);
    let u = 0;
    const x = ss();
    h.classList.toggle("hcSumsFit", Cd()), h.classList.toggle("hcFavStrip", x);
    const C = l.filter((gt) => qo.includes(gt.key) || x && gt.key === "favs");
    C.sort((gt, It) => ["title", "sums", "favs"].indexOf(gt.key) - ["title", "sums", "favs"].indexOf(It.key)), C.forEach((gt) => {
      gt.el.classList.add("tfBoardItem"), gt.el.toggleAttribute("data-narrow", !1), Object.assign(gt.el.style, { width: (gt.key === "title" ? e : f) + "px", height: "", left: "0px", top: u + "px" });
      const It = gt.key !== "title" && (gt.el.querySelector(".tfDash-bar>.activityRows") || gt.key === "favs" && gt.el.querySelector(":scope>.activityRows")), Re = It ? It.children.length : 0;
      if (It && (It.classList.remove("hcBarRows"), !a && It.scrollWidth > It.clientWidth + 1))
        for (let Kt = 2; Kt <= Re && (It.classList.add("hcBarRows"), It.style.setProperty("--bar-cols", String(Math.ceil(Re / Kt))), !(It.scrollWidth <= It.clientWidth + 1)); Kt++)
          ;
      u += gt.el.offsetHeight + (gt.key === "title" ? Vo.nameGap : Vo.sumsGap);
    });
    const M = ["favs", "wx", "energy"], E = (Le == null ? void 0 : Le.order) || ((Mp = kt.home) == null ? void 0 : Mp.order), B = E ? [...E.filter((gt) => M.includes(gt)), ...M.filter((gt) => !E.includes(gt))] : M;
    bd = B;
    const I = l.filter((gt) => M.includes(gt.key) && !(x && gt.key === "favs")).sort((gt, It) => B.indexOf(gt.key) - B.indexOf(It.key));
    di = /* @__PURE__ */ new Map();
    const P = (gt, It) => {
      if (di.set(gt.key, It), Object.assign(gt.el.style, { width: It.w + "px", height: It.h + "px" }), Le != null && Le.on && Le.key === gt.key) {
        hl(It);
        return;
      }
      Object.assign(gt.el.style, { left: It.x + "px", top: It.y + "px" });
    }, V = a ? e : 2 * d.w + p, D = Vo.row, J = fd() === "stacked" && !a && I.length > 0;
    let H = 0, U = 0, nt = u;
    I.forEach((gt) => {
      gt.el.classList.add("tfBoardItem"), gt.el.dataset.rows = 5, gt.el.dataset.cols = 2, gt.el.toggleAttribute("data-narrow", !1), !J && H && H + V > e && (u += U + p, H = 0, U = 0);
      let It = D;
      if ((a || gt.key === "favs") && (Object.assign(gt.el.style, { width: V + "px", height: "" }), It = gt.el.offsetHeight), J) {
        P(gt, { x: 0, y: nt, w: V, h: It }), nt += It + p;
        return;
      }
      P(gt, { x: H, y: u, w: V, h: It }), H += V + p, U = Math.max(U, It);
    }), I.length && !J && (u += U + p);
    const Ct = J ? V + p : 0, Nt = J ? e - V - p : e, Pt = a ? "l" : hd(), ht = ud[Pt], Mt = ul(), Zt = Wo("byFloor"), ie = d.w, me = ht.h, Se = a ? 2 : Math.max(1, Math.floor((Nt + p) / (ie + p))), ao = new Map(l.filter((gt) => Ot(gt.key)).map((gt) => [gt.key, gt])), qa = (Zt ? df() : [{ id: "", name: "", icon: "", rooms: Bt }]).map((gt) => ({ ...gt, cards: gt.rooms.map((It) => ao.get("room:" + It.id)).filter(Boolean) })).filter((gt) => gt.cards.length), gs = Mt === "bento", bs = gs && Wo("bentoMixed"), Am = gs && Zt && Wo("bentoBoxes"), Lm = Mt === "columns" && Zt && !a, Zo = 12, xp = (gt) => gt.name ? Vo.floorHead + Vo.floorGap : 0, xi = (gt, It, Re) => {
      const Kt = /* @__PURE__ */ new Set(), pe = [];
      gt.cards.forEach((Qt, yo) => {
        const xn = bs && yo === 0 && It >= 2 && gt.cards.length > 1, Je = xn ? 2 : 1, Ko = xn && !a ? 2 : 1;
        Qt.el.classList.add("tfBoardItem"), Qt.el.dataset.cols = Je, Qt.el.toggleAttribute("data-narrow", !1);
        for (let Kn = 0; ; Kn++) {
          const Xn = [...Array(Math.max(0, It - Je + 1)).keys()].find((ki) => [...Array(Je).keys()].every((oo) => [...Array(Ko).keys()].every((ws) => !Kt.has(Kn + ws + "," + (ki + oo)))));
          if (Xn != null) {
            [...Array(Je).keys()].forEach((ki) => [...Array(Ko).keys()].forEach((oo) => Kt.add(Kn + oo + "," + (Xn + ki)))), pe.push({ it: Qt, r: Kn, c: Xn, sc: Je, sr: Ko });
            break;
          }
        }
      });
      const ue = Math.max(0, ...pe.map((Qt) => Qt.r + Qt.sr));
      gs && !a && pe.forEach((Qt) => {
        for (; Qt.r + Qt.sr < ue && !Kt.has(Qt.r + Qt.sr + "," + Qt.c) && Qt.sc === 1; )
          Kt.add(Qt.r + Qt.sr + "," + Qt.c), Qt.sr++;
      }), pe.forEach((Qt) => {
        Qt.it.el.dataset.rows = Math.min(5, Qt.sr * ht.rows), Object.assign(Qt.it.el.style, { width: Qt.sc * Re + (Qt.sc - 1) * p + "px", height: Qt.sr * me + (Qt.sr - 1) * p + "px" });
      });
      const Xt = [...Array(ue)].map(() => me), xe = [];
      let Aa = xp(gt);
      return Xt.forEach((Qt, yo) => {
        xe[yo] = Aa, Aa += Qt + p;
      }), { h: Aa - (ue ? p : 0), places: pe.map((Qt) => ({ it: Qt.it, x: Qt.c * (Re + p), y: xe[Qt.r], w: Qt.sc * Re + (Qt.sc - 1) * p, h: Xt.slice(Qt.r, Qt.r + Qt.sr).reduce((yo, xn) => yo + xn, 0) + (Qt.sr - 1) * p })) };
    }, ac = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((gt) => [gt.dataset.floor, gt])), oc = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((gt) => [gt.dataset.floor, gt])), kp = [], Tm = (gt, It, Re, Kt) => {
      if (!gt.name) return;
      let pe = ac.get(gt.id);
      ac.delete(gt.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloor" }), pe.dataset.floor = gt.id, S.appendChild(pe)), pe.dataset.sig !== gt.name && (pe.dataset.sig = gt.name, pe.innerHTML = '<h2 class="hcFloorName">' + G(gt.name) + "</h2>"), Object.assign(pe.style, { left: It + "px", top: Re + "px", width: Kt + "px" }), kp.push(pe);
    }, Dm = (gt, It, Re, Kt, pe) => {
      let ue = oc.get(gt.id);
      oc.delete(gt.id), ue || (ue = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), ue.dataset.floor = gt.id, ue.setAttribute("aria-hidden", "true"), S.prepend(ue)), Object.assign(ue.style, { left: It + "px", top: Re + "px", width: Kt + "px", height: pe + "px" });
    }, Em = (gt) => parseFloat(getComputedStyle(gt.cards[0].el).paddingLeft) || 0, nc = (gt, It, Re, Kt, pe = 0) => {
      Tm(gt, Re + pe, Kt, (It.w ?? e) - pe), It.places.forEach((ue) => P(ue.it, { x: Re + ue.x, y: Kt + ue.y, w: ue.w, h: ue.h }));
    };
    if (qa.length && I.length && !J && (u += Vo.floorTop), Lm) {
      let gt = 0, It = u;
      qa.forEach((Re) => {
        const Kt = { ...xi(Re, 1, ie), w: ie };
        gt && gt + ie > Nt && (u = It + p + Vo.floorTop, gt = 0), nc(Re, Kt, Ct + gt, u), It = Math.max(It, u + Kt.h), gt += ie + p;
      }), u = It + p;
    } else if (Am) {
      let gt = [{ x0: 0, x1: Nt, t: u }];
      const It = (Kt, pe) => Math.max(...gt.filter((ue) => ue.x1 > Kt && ue.x0 < pe).map((ue) => ue.t)), Re = (Kt, pe, ue) => {
        const Xt = [];
        gt.forEach((xe) => {
          xe.x1 <= Kt || xe.x0 >= pe ? Xt.push(xe) : (xe.x0 < Kt && Xt.push({ x0: xe.x0, x1: Kt, t: xe.t }), xe.x1 > pe && Xt.push({ x0: pe, x1: xe.x1, t: xe.t }));
        }), Xt.push({ x0: Kt, x1: pe, t: ue }), gt = Xt.sort((xe, Aa) => xe.x0 - Aa.x0);
      };
      qa.forEach((Kt) => {
        const pe = Kt.cards.length + (bs && Kt.cards.length > 1 ? 3 : 0);
        let ue = a ? 2 : Math.min(Se, Math.max(bs && Kt.cards.length > 1 ? 2 : 1, pe <= 3 ? pe : Math.ceil(pe / 2)));
        for (; !a && ue > 1 && ue * ie + (ue - 1) * p + 2 * Zo > Nt; ) ue--;
        let Xt = null;
        for (let Je = ue; Je >= (a ? ue : 1); Je--) {
          const Ko = Math.min(ie, Math.floor((Nt - 2 * Zo - (Je - 1) * p) / Je)), Kn = { ...xi(Kt, Je, Ko), w: Je * Ko + (Je - 1) * p }, Xn = Kn.w + 2 * Zo, ki = Kn.h + 2 * Zo;
          gt.map((oo) => oo.x0).filter((oo) => oo + Xn <= Nt + 0.5).forEach((oo) => {
            const ws = It(oo, oo + Xn);
            (!Xt || ws < Xt.t - 0.5) && (Xt = { cc: Je, inner: Ko, bw: Xn, h: ki, t: ws, x: oo });
          });
        }
        if (!Xt) {
          const Je = Math.min(ie, Nt - 2 * Zo), Ko = xi(Kt, 1, Je);
          Xt = { cc: 1, inner: Je, bw: Je + 2 * Zo, h: Ko.h + 2 * Zo, t: It(0, Nt), x: 0 };
        }
        const xe = { ...xi(Kt, Xt.cc, Xt.inner), w: Xt.cc * Xt.inner + (Xt.cc - 1) * p }, Aa = Xt.bw, Qt = Xt.h, yo = Xt.x, xn = Xt.t;
        Dm(Kt, Ct + yo, xn, Aa, Qt), nc(Kt, xe, Ct + yo + Zo, xn + Zo, Em(Kt)), Re(yo, Math.min(Nt, yo + Aa + p), xn + Qt + p);
      }), u = Math.max(...gt.map((Kt) => Kt.t));
    } else {
      const gt = (It) => {
        var ue;
        if (!((ue = kt.home) != null && ue.fitTogether) || a) return Se;
        const Re = J ? nt - p - u : null, Kt = (Xt) => {
          const xe = It.cards.length + (bs && It.cards.length > 1 && Xt >= 2 ? 3 : 0), Aa = Math.ceil(xe / Xt);
          return { holes: Aa * Xt - xe, rows: Aa, h: xp(It) + Aa * me + (Aa - 1) * p, w: Xt * ie + (Xt - 1) * p };
        }, pe = (Xt) => Xt.holes === 0 || gs && Xt.holes === 1 && Xt.rows > 1;
        for (let Xt = 1; Xt <= Se; Xt++) {
          const xe = Kt(Xt);
          if (pe(xe) && xe.h <= (Re ?? xe.w)) return Xt;
        }
        for (let Xt = 1; Xt <= Se; Xt++) {
          const xe = Kt(Xt);
          if (xe.h <= (Re ?? xe.w)) return Xt;
        }
        return Se;
      };
      qa.forEach((It, Re) => {
        Re && (u += Vo.floorTop);
        const Kt = xi(It, gt(It), ie);
        nc(It, { ...Kt, w: Nt }, Ct, u), u += Kt.h + p;
      });
    }
    J && (u = Math.max(u, nt)), ac.forEach((gt) => gt.remove()), oc.forEach((gt) => gt.remove()), Le != null && Le.on || hl(null), S.style.height = Math.max(0, u - p) + "px", dl([...C.map((gt) => gt.el), ...I.map((gt) => gt.el), ...kp, ...qa.flatMap((gt) => gt.cards.map((It) => It.el))]), ml(!1), t.forEach((gt) => [...gt.el.children].forEach((It) => It.toggleAttribute("inert", $o)));
    const rc = S.querySelector(".tfDash-favs>.activityRows");
    rc && (rc.classList.toggle("hcFadeList", !x), gd(rc)), requestAnimationFrame(() => h.classList.add("tfBoardReady")), t.forEach((gt) => fl.observe(gt.el)), Be();
  }
  const ts = () => {
    il || (il = !0, requestAnimationFrame(() => {
      il = !1, Ke();
    }));
  }, fl = new ResizeObserver(() => {
    ae || ts();
  });
  function hf(t, e, a) {
    const r = a + he, l = t * a + (t - 1) * he, p = e * Pa - he, d = he / 2, f = r / Math.max(1, Math.round(r / (Pa / 4))), u = Pa / 4, x = 6;
    let C = "";
    for (let M = 0; M <= t; M++) for (let E = 0; E <= e; E++) {
      const B = M * r - d, I = E * Pa - d;
      C += "M" + (B - x) + " " + I + "H" + (B + x) + "M" + B + " " + (I - x) + "V" + (I + x);
    }
    return '<svg width="' + l + '" height="' + p + '" viewBox="0 0 ' + l + " " + p + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -d + '" y="' + -d + '" width="' + f.toFixed(3) + '" height="' + u + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + u + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + u + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -d + '" y="' + -d + '" width="' + (l + he) + '" height="' + (p + he) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + C + '"></path></svg>';
  }
  function ml(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, l = 1, p = ci) {
    S.querySelectorAll(".tfEditChips").forEach((C) => {
      (!t || !C.closest(".tfBoardItem")) && C.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((C) => C.remove()), S.querySelectorAll(".tfBoardItem").forEach((C) => [...C.children].forEach((M) => {
      M.classList.contains("tfEditChips") || M.toggleAttribute("inert", t);
    }));
    let d = S.querySelector(".tfBoardCells"), f = S.querySelector(".tfBoardLand");
    if (!t)
      return d == null || d.remove(), f == null || f.remove(), go(), r;
    const u = Ji + Kh;
    if (d || (d = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), d.setAttribute("aria-hidden", "true"), S.prepend(d)), d.style.top = bn + "px", d.dataset.size !== l + "x" + u + "x" + p && (d.dataset.size = l + "x" + u + "x" + p, d.innerHTML = hf(l, u, p)), r = Math.max(r, bn + u * Pa - he), e.forEach((C) => {
      const M = C.el;
      !M || M.querySelector(":scope > .tfEditChips") || M.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Li + '</span><button class="tfEditChip" type="button" data-board-more="' + G(C.key) + '" aria-label="' + G(Ra(C.key)) + ' options" aria-haspopup="menu">' + Rg + "</button></div>");
    }), ae && a.has(ae.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(f));
      const C = a.get(ae.key);
      Object.assign(f.style, { left: C.x + "px", top: C.y + "px", width: C.w + "px", height: C.h + "px" });
    } else f == null || f.remove();
    const x = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const C = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((M) => {
        const E = M.getBoundingClientRect(), B = M.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + G(B) + '" aria-label="Hide ' + G(xt(B)) + ' from the dashboard" style="left:' + Math.round(E.right - C.left - 42) + "px;top:" + Math.round(E.top - C.top + (E.height - 32) / 2) + 'px">' + Ou + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let gl = "";
  function bl(t) {
    ba = t, t || (ae = null, jo = zo = !1, go()), Ke(), t ? (gl = JSON.stringify(kt), Sr(Yt, "Edit custom dashboard", null)) : gl && JSON.stringify(kt) !== gl && Ha("Changes saved");
  }
  function ff(t, e) {
    var V, D;
    go();
    const a = Vn.get(t), { n: r } = wn(S.clientWidth), l = de(), p = l.spans[t] ?? (Ot(t) ? 1 : 2);
    if (!a) return;
    const d = a.cols >= r, f = (J, H, U) => '<button type="button" role="menuitem" data-board-act="' + J + '"' + (U ? " disabled" : "") + ">" + H + "</button>", u = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    u.setAttribute("role", "menu"), u.setAttribute("aria-label", Ra(t) + " options");
    const x = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), C = rd(t), M = qn(t), E = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + od.map((J, H) => '<button type="button" role="menuitemradio" aria-checked="' + (H + 1 === M) + '" aria-label="' + J + ", " + (H + 1) + (H ? " rows" : " row") + '" data-board-act="h:' + (H + 1) + '"' + (H < C ? "" : " disabled") + ">" + J + "</button>").join("") + "</div></div>", B = Xh.includes(t) || Ot(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Jh.map((J, H) => '<button type="button" role="menuitemradio" aria-checked="' + (H + 1 === Math.min(p, r)) + '" aria-label="' + J + ", " + (H + 1) + (H ? " columns" : " column") + '" data-board-act="w:' + (H + 1) + '"' + (H < r ? "" : " disabled") + ">" + J + "</button>").join("") + "</div></div>" : "", I = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + js().map(([J, H]) => '<button type="button" role="menuitemradio" aria-checked="' + (J === $r()) + '" data-board-act="src:' + G(J) + '">' + G(H) + "</button>").join("") + "</div></div>" : "";
    u.innerHTML = E + B + I + (t === "energy" ? f("graph", (((V = l.opts.energy) == null ? void 0 : V.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", d || a.col === 0) + f("right", "Move right", d || a.col + a.cols >= r) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (x ? f("remove", "Remove") : f("hide", "Hide")), S.appendChild(u);
    const P = Math.min(a.x + a.w - u.offsetWidth, S.clientWidth - u.offsetWidth);
    Object.assign(u.style, { left: Math.max(0, P) + "px", top: a.y + 28 + "px" }), ca = { key: t, menu: u, opener: e }, (D = u.querySelector("button:not([disabled])")) == null || D.focus();
  }
  function go(t) {
    if (!ca) return;
    const { menu: e, opener: a } = ca;
    ca = null, e.remove(), t && (a == null || a.focus());
  }
  const zn = () => Object.fromEntries([...Vn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function mf(t, e) {
    var f, u, x;
    if (e === "remove") {
      go(), gf(t);
      return;
    }
    const a = kt, r = de(), l = zn(), p = l[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((f = r.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (l[t] = { ...p, col: p.col - 1 }), e === "right" && (l[t] = { ...p, col: p.col + 1 }), e === "up" && (l[t] = { ...p, row: p.row - 1 }), e === "down" && (l[t] = { ...p, row: p.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ae = { key: t, col: l[t].col, row: l[t].row }), kr(r, l), ae && (Ke(), ae = null, kr(de(), zn()));
    const d = /^[hw]:/.test(e) && !je() && (ca == null ? void 0 : ca.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (d) {
      const C = ca;
      d.parentElement.querySelectorAll("[aria-checked]").forEach((M) => M.setAttribute("aria-checked", String(M === d))), setTimeout(() => {
        ca === C && go();
      }, He.tabs.dur);
    } else go();
    e === "graph" && (ka.delete("dash:energy"), Pe()), e.startsWith("src:") && ((u = Ee == null ? void 0 : Ee.get("radar")) == null || u.refresh(), De == null || De.refresh()), e.startsWith("h:") && t.includes(".") && Pe(), Ke(), e !== "hide" ? (x = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Ha(Ra(t) + " hidden", is(a));
  }
  const wd = (t) => {
    var e;
    return cn.includes(t) && !(((e = kt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function wl(t) {
    const e = de(), a = Ra(t) + wd(t);
    Wn({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Ke(), Ha(a);
  }
  const es = () => de().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !de().hidden.includes(t));
  function vd(t, e) {
    const a = de();
    kr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), Pe(), Be();
  }
  const yd = (t) => {
    vd([...es().filter((e) => e !== t), t], zn()), Ha(Ra(t) + " added"), yf(t);
  }, gf = (t) => {
    const e = kt, a = zn();
    delete a[t], vd(es().filter((r) => r !== t), a), Ha(Ra(t) + " removed", is(e));
  };
  let vl = 0;
  function Ha(t, e = null) {
    var d;
    const a = s("toast");
    if (!a) return;
    if (X0(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(vl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const r = h.getBoundingClientRect(), l = (d = o.querySelector(".bottomNav")) == null ? void 0 : d.getBoundingClientRect(), p = Yt.classList.contains("open") && !bo ? Math.min(r.right, Yt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + p) / 2 + "px", a.style.bottom = (l != null && l.height ? window.innerHeight - l.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), J0(a), clearTimeout(vl), vl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : He.confirm.stay);
  }
  const bf = 700, wf = 1e3, wa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  wa.setAttribute("role", "tooltip"), wa.setAttribute("aria-hidden", "true"), h.appendChild(wa);
  let pi = null, ui = 0, Gn = 0, xd = -1 / 0;
  const yl = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, vf = (t) => {
    for (let e = t; e && e !== h; e = e.parentElement) if (yl(e)) return e;
    return null;
  };
  function as(t, e) {
    clearTimeout(ui), clearTimeout(Gn);
    const a = () => {
      if (!t.isConnected) return;
      pi = t, wa.textContent = e, wa.hidden = !1;
      const r = t.getBoundingClientRect(), l = wa.getBoundingClientRect(), p = r.top - l.height - 8 >= 8 ? r.top - l.height - 8 : r.bottom + 8;
      wa.style.left = Math.max(8, Math.min(window.innerWidth - l.width - 8, r.left + r.width / 2 - l.width / 2)) + "px", wa.style.top = p + "px";
    };
    !wa.hidden || performance.now() - xd < wf ? a() : ui = setTimeout(a, bf);
  }
  function os() {
    clearTimeout(ui), clearTimeout(Gn), wa.hidden || (xd = performance.now()), wa.hidden = !0, pi = null;
  }
  o.addEventListener("pointerover", (t) => {
    var r, l;
    if (t.pointerType === "touch") return;
    if (wa.contains(t.target)) {
      clearTimeout(Gn);
      return;
    }
    const e = (l = (r = t.target).closest) == null ? void 0 : l.call(r, ".tfAreaPick");
    if (e) {
      e !== pi ? as(e, e.getAttribute("aria-label")) : clearTimeout(Gn);
      return;
    }
    const a = vf(t.target);
    if (a && Jt.names === "scroll" && a.matches(ns)) {
      xl(a);
      return;
    }
    if (a) {
      a !== pi ? as(a, a.textContent.trim()) : clearTimeout(Gn);
      return;
    }
    clearTimeout(ui), clearTimeout(Gn), Gn = setTimeout(os, 120);
  }), o.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      as(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(yl);
    Jt.names === "scroll" && (a.filter((l) => l.matches(ns)).forEach(xl), a = a.filter((l) => !l.matches(ns))), a.length && as(e, a.map((l) => l.textContent.trim()).join(" · "));
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
    if (Jt.names !== "scroll" || rs.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
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
    kl || Jt.names !== "scroll" || (kl = !0, setTimeout(() => {
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
      const p = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: p(55) }, { boxShadow: p(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, xf(t) ? 260 : 0);
  }
  function xf(t) {
    const e = Vn.get(t);
    if (!e || !Yt.classList.contains("open") || bo) return !1;
    const { n: a, w: r } = wn(S.clientWidth), l = Yt.getBoundingClientRect().left - S.getBoundingClientRect().left, p = (u) => u * (r + he) + e.cols * r + (e.cols - 1) * he <= l;
    if (p(e.col)) return !1;
    const d = /* @__PURE__ */ new Set();
    Vn.forEach((u, x) => {
      if (x !== t) for (let C = u.row; C < u.row + u.rows; C++) for (let M = u.col; M < u.col + u.cols; M++) d.add(M + "," + C);
    });
    const f = (u, x) => {
      for (let C = x; C < x + e.rows; C++) for (let M = u; M < u + e.cols; M++) if (d.has(M + "," + C)) return !1;
      return !0;
    };
    for (let u = 0; u <= Ji; u++) for (let x = 0; x + e.cols <= a && p(x); x++)
      if (f(x, u))
        return kr(de(), { ...zn(), [t]: { col: x, row: u } }), Ke(), !0;
    return !1;
  }
  const Md = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Sd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Mr = "page";
  const kf = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + G(r) + '</span></span><span class="hcRowEnd">' + Dc + "</span></button>").join("") + "</section>", Sr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Mf = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + _c + "</button>", Sf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Ml(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let l = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((d) => {
      d.hidden = Sf(d) !== Mr, d.classList.toggle("hcFirst", !d.hidden && l), d.hidden || (l = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((d) => {
      const f = d.dataset.trayTab === Mr;
      d.classList.toggle("active", f), d.setAttribute("aria-selected", String(f));
    });
    const p = a.querySelector(".tab.active");
    p != null && p.offsetWidth && (r.style.transition = "none", t ? Rs(r, r.offsetLeft, r.offsetWidth, p.offsetLeft, p.offsetWidth) : (r.style.left = p.offsetLeft + "px", r.style.width = p.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Sd.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Ls + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Ls + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', h.appendChild(Yt);
  let bo = !1, jo = !1, zo = !1, hi = !1, da = null, Go = !1;
  const Sl = {}, Qa = (t, e) => {
    if (Sl[t] === e) return;
    Sl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, uo(a);
  }, _l = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + G(xt(t)) + '</span><span class="activityRowMeta">' + G(e) + "</span></span>", _f = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + G(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Li + '</span><span class="tfIcon"' + we(t, Ba(t)) + "></span>" + _l(t, e ? "Hidden" + (Me.get(t) ? " · " + Me.get(t) : "") : Me.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + G(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + G(xt(t)) + ' on the dashboard">' + (e ? Ou : Hg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + G(t) + '" aria-label="Remove ' + G(xt(t)) + ' from favourites">' + Lc + "</button>" : "<span></span>") + "</li>";
  function Cl(t, e, a, r) {
    const l = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((d) => e(d) && !a.has(d) && k[d].state !== "unavailable").filter((d) => {
      const f = (xt(d) + " " + (Me.get(d) || "") + " " + d).toLowerCase();
      return l.every((u) => f.includes(u));
    }).sort((d, f) => (Me.get(d) || "~").localeCompare(Me.get(f) || "~") || xt(d).localeCompare(xt(f))).slice(0, 40).map((d) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + G(d) + '"><span class="tfIcon"' + we(d, Ba(d)) + "></span>" + _l(d, Me.get(d) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Cf = "https://www.home-assistant.io/dashboards/", _d = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ye = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ye.setAttribute("aria-label", "Edit Home page"), ye.toggleAttribute("inert", !0);
  let $o = !1, Na = !1, Al = "", Ll = null, _r = "page";
  function Tl(t, e) {
    const a = ye.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), l = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(l != null && l.offsetWidth)) {
      requestAnimationFrame(() => {
        var p;
        return ((p = ye.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : p.offsetWidth) && Tl(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Rs(r, e.left, e.width, l.offsetLeft, l.offsetWidth) : (r.style.left = l.offsetLeft + "px", r.style.width = l.offsetWidth + "px");
  }
  const $n = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + G(_d[t][0]) + '">' + Tc + "</button>", _a = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + G(e) + '" ' + a + "></button>", Dl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + G(t) + '. Use the up and down arrows">' + Li + "</button>", Cd = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, ss = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + G(t) + '">' + r.map(([l, p]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + l + '" aria-pressed="' + (a === l) + '">' + p + "</button>").join("") + "</div></div>", Ad = () => Ki(!0).filter((t) => Ci[t.key]).map((t) => t.key);
  function Un() {
    var u, x, C, M, E, B, I;
    if (!$o) return;
    const t = $t(), e = (P) => '<li class="hcHeRow" data-he-id="' + G(P) + '">' + Dl(xt(P)) + '<span class="tfIcon"' + we(P, Ba(P)) + "></span>" + _l(P, Me.get(P) || Oe(P)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + G(P) + '" aria-label="Take ' + G(xt(P)) + ' off Favourites">' + Lc + "</button></li>", a = (P) => {
      const V = Ci[P];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + G(P) + '"' + (V.colour && Ua(V.colour) ? ' style="' + Ua(V.colour).slice(1) + '"' : "") + ">" + Dl(V.name) + '<span class="tfIcon"' + we("", V.icon, V.name) + '></span><span class="activityRowName">' + G(V.name) + "</span>" + _a(Xs(P), V.name, 'data-he-sum="' + G(P) + '"') + "</li>";
    }, r = ((u = ye.querySelector("[data-he-search]")) == null ? void 0 : u.value) || "", l = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], p = new Set(((x = kt.home) == null ? void 0 : x.areasOff) || []), d = (P) => '<li class="hcHeRow" data-he-id="' + G(P.id) + '">' + Dl(P.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="activityRowName">' + G(P.name) + "</span>" + _a(!p.has(P.id), "Show " + P.name + " on Home", 'data-he-area="' + G(P.id) + '"') + "</li>", f = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + $n("welcome") + _a(rl(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Fo() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + $n("weather") + _a(!!((C = kt.home) != null && C.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Ja != null && Ja.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + $n("energy") + _a(!!((M = kt.home) != null && M.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", fd(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + _a(Wo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", ul(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ul() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + _a(Wo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + _a(Wo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", hd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + _a(!!((E = kt.home) != null && E.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + _a(((B = kt.home) == null ? void 0 : B.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + $n("favs") + "</div>" + fi("Show as", "data-he-favs-as", ss() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (ss() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + _a(Wo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Na + '">' + Ls + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Na ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + G(r) + '"><ul class="tfTrayList">' + (Na ? Cl(r, (P) => Md.test(P), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + $n("suggest") + _a(Oo(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + $n("sums") + _a(((I = kt.home) == null ? void 0 : I.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Cd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Ad().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + sl().map(d).join("") + "</ul>"
    };
    ye.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + l.map(([P, V]) => '<button class="tab segBtn' + (P === _r ? " active" : "") + '" type="button" role="tab" aria-selected="' + (P === _r) + '" data-he-tab="' + P + '">' + V + "</button>").join("") + "</div>" + kf(l, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + f[_r] + "</div>", Tl(!1), uo(ye);
  }
  const Cr = (t) => {
    kt = { ...kt, ...t }, Da(), Pe(), Un();
  }, Ca = (t) => Cr({ home: { ...kt.home || {}, ...t } });
  function El(t) {
    Yn(), $o = t, Na = !1, ye.classList.toggle("open", t), ye.toggleAttribute("inert", !t), h.classList.toggle("hcHomeEditing", t), g && S && Ke();
    const e = s("dashEditNav"), a = ye.querySelector(".tfTrayHead");
    e && t && (Ll = e.parentElement, a.appendChild(e)), e && !t && Ll && Ll.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Iu : Ts), t ? (Al = JSON.stringify(kt), Un(), Sr(ye, "Edit Home page", null)) : Al && JSON.stringify(kt) !== Al && Ha("Changes saved");
  }
  ye.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Mf + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', h.appendChild(ye);
  let Uo = null;
  const to = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  to.setAttribute("role", "dialog"), h.appendChild(to);
  function Yn() {
    Uo && (Uo.setAttribute("aria-expanded", "false"), Uo = null, to.hidden = !0);
  }
  function Ld(t) {
    const e = Uo;
    if (Yn(), e === t) return;
    const [a, r] = _d[t.dataset.info];
    to.setAttribute("aria-label", a), to.innerHTML = '<div class="hcInfoTitle">' + G(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Cf + '" target="_blank" rel="noopener">Learn more</a>', to.hidden = !1, Uo = t, t.setAttribute("aria-expanded", "true");
    const l = t.getBoundingClientRect(), p = to.offsetWidth, d = to.offsetHeight;
    to.style.left = Math.max(8, Math.min(innerWidth - p - 8, l.left + l.width / 2 - p / 2)) + "px", to.style.top = (l.bottom + 8 + d > innerHeight - 8 ? Math.max(8, l.top - 8 - d) : l.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    Uo && !t.composedPath().some((e) => e === to || e === Uo) && Yn();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Uo) {
        t.stopPropagation();
        const a = Uo;
        Yn(), a.focus();
        return;
      }
      if (Na) {
        t.stopPropagation(), Na = !1, Un();
        return;
      }
      $o && (t.stopPropagation(), El(!1), (e = s("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Af = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? sl().map((e) => e.id) : Ad(), Td = (t, e) => t.dataset.heList === "favs" ? Cr({ favourites: e }) : t.dataset.heList === "areas" ? (Cr({ areaOrder: e }), Ke()) : Ca({ sumOrder: e });
  ye.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, l = Af(r), p = l.indexOf(a.dataset.heId), d = p + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= l.length || (l.splice(d, 0, l.splice(p, 1)[0]), Td(r, l), (f = ye.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), ye.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Hl(t, e.closest("[data-he-id]"), "heId", (l) => Td(a, l), (l) => ye.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(l) + '"]'));
  }), ye.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Un();
      const a = ye.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ye.addEventListener("click", (t) => {
    var V, D, J, H;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Ld(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      _r = r.dataset.heGo, Na = !1, Yn(), Un(), Sr(ye, "Edit Home page", _r, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Yn(), Sr(ye, "Edit Home page", null);
      return;
    }
    const l = e.closest("[data-he-tab]");
    if (l) {
      const U = ye.querySelector(".hcTrayTabs .rubberIndicator"), nt = { left: U.offsetLeft, width: U.offsetWidth };
      _r = l.dataset.heTab, Na = !1, Yn(), Un(), Tl(!0, nt), ye.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Ca({ welcome: !rl() });
      return;
    }
    const p = e.closest("[data-he-card]");
    if (p) {
      const U = p.dataset.heCard, nt = ["sums", "favs"].includes(U) ? ((V = kt.home) == null ? void 0 : V[U]) !== !1 : !!((D = kt.home) != null && D[U]);
      Ca({ [U]: !nt });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      Ca({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const f = e.closest("[data-he-sums-width]");
    if (f) {
      Ca({ sumsWidth: f.dataset.heSumsWidth });
      return;
    }
    const u = e.closest("[data-he-area-size]");
    if (u) {
      Ca({ areaSize: u.dataset.heAreaSize });
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
    const C = e.closest("[data-he-cards-as]");
    if (C) {
      Ca({ cardsAs: C.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const U = M.dataset.heFlag;
      Ca({ [U]: !Wo(U) }), U === "favsTitle" && Oa();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Cr({ suggest: !Oo() });
      return;
    }
    const E = e.closest("[data-he-area]");
    if (E) {
      const U = new Set(((H = kt.home) == null ? void 0 : H.areasOff) || []), nt = E.dataset.heArea;
      U.has(nt) ? U.delete(nt) : U.add(nt), Ca({ areasOff: [...U] });
      return;
    }
    const B = e.closest("[data-he-sum]");
    if (B) {
      const U = B.dataset.heSum, nt = !Xs(U), Ct = kt.home || {};
      Ca(Pu.includes(U) ? { shownSums: nt ? [...Ct.shownSums || [], U] : (Ct.shownSums || []).filter((Nt) => Nt !== U) } : { hiddenSums: nt ? (Ct.hiddenSums || []).filter((Nt) => Nt !== U) : [...Ct.hiddenSums || [], U] });
      return;
    }
    const I = e.closest("[data-he-remove]");
    if (I) {
      Cr({ favourites: $t().filter((U) => U !== I.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Na = !Na, Un(), Na && ye.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const P = e.closest("[data-he-pick-id]");
    P && (Na = !1, ye.querySelector("[data-he-search]").value = "", Cr({ favourites: [...$t(), P.dataset.hePickId] }));
  });
  function Be() {
    var C, M, E;
    const t = ba && h.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && bo), Yt.toggleAttribute("inert", !t), t || (Go = !1), Hd(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = bo ? _c : Dc, e.setAttribute("aria-expanded", String(!bo)), e.setAttribute("aria-label", bo ? "Show the edit tray" : "Tuck the edit tray away");
    const a = de().hidden.filter((B) => !qo.includes(B) && jn().some((I) => I.key === B)), r = (B, I) => '<button class="tfTrayCard" type="button" data-tray-card="' + G(B) + '" aria-label="' + G(Ra(B)) + ": drag it onto the board, or press to " + I + '"><span class="tfTrayGrip" aria-hidden="true">' + Li + "</span>" + G(Ra(B)) + "</button>", l = a.filter((B) => !Gr.includes(B)), p = Gr.filter((B) => a.includes(B));
    Qa("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + $n("welcome") + '<button class="switch' + (de().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!de().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((C = kt.dash) != null && C.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((M = kt.dash) != null && M.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Ml(!1)), Qa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (l.length ? '<div class="tfTrayCards">' + l.map((B) => r(B, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Qa("weather", '<div class="sectionLabel">Weather</div>' + (p.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + p.map((B) => r(B, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Qa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (de().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Go + '">' + (Go ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(kt.favHidden || []), f = $t(), u = [...f, ...[...d].filter((B) => !f.includes(B) && k[B])];
    Qa("favs", u.map((B) => _f(B, d.has(B), f.includes(B))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !zo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(zo)), zo && Qa("tilepick", Cl(Yt.querySelector("[data-tile-search]").value, (B) => Hr.includes(B.split(".")[0]), new Set(es()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !hi, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(hi));
    const x = new Set(((E = kt.dash) == null ? void 0 : E.areasOff) || []);
    if (Qa("areas", Et(Bt).map((B) => '<li class="hcHeRow" data-area-id="' + G(B.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + G(B.name) + '. Use the up and down arrows">' + Li + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="activityRowName">' + G(B.name) + '</span><button class="switch' + (x.has(B.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(B.id) + '" aria-label="Show ' + G(B.name) + ' in the Areas card" data-area-on="' + G(B.id) + '"></button></li>').join("")), hi) {
      const B = new Set(es());
      Qa("roompick", Et(Bt).filter((I) => !B.has("room:" + I.id)).map((I) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + G(I.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + I.id, I.icon || "mdi:texture-box", I.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + G(I.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !jo, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(jo)), jo && Qa("pick", Cl(Yt.querySelector("[data-fav-search]").value, (B) => Md.test(B), new Set($t()), "data-fav-pick")), Qa("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Qi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Qi() + '" data-fav-title aria-label="Title"></button>'), Qa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Oo() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Oo() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Zn = (t) => {
    kt = { ...kt, ...t }, Da(), Pe(), Be();
  };
  function Dd(t, e) {
    const a = kt, r = new Set(kt.favHidden || []);
    e ? r.delete(t) : r.add(t), Zn({ favHidden: [...r] }), e ? Ha(xt(t) + " put back") : Ha(xt(t) + " hidden", is(a));
  }
  const Lf = (t) => {
    const e = kt;
    Zn({ favourites: $t().filter((a) => a !== t), favHidden: (kt.favHidden || []).filter((a) => a !== t) }), Ha(xt(t) + " removed from favourites", is(e));
  }, Tf = (t) => {
    Zn({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (kt.favHidden || []).filter((e) => e !== t) }), Ha(xt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, r, l;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Mr = e.dataset.trayTab, Ml(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Mr = e.dataset.trayGo, Ml(!1), Sr(Yt, "Edit custom dashboard", Mr, Sd.find(([p]) => p === Mr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        Sr(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) bl(!1);
      else if (e.hasAttribute("data-info")) Ld(e);
      else if (e.hasAttribute("data-dash-sums"))
        Wn({ ...ll(), hidden: ll().hidden.filter((p) => p !== "sums"), sumsOff: !((a = kt.dash) != null && a.sumsOff) }), Pe(), Be();
      else if (e.hasAttribute("data-dash-welcome")) {
        const p = de();
        Wn({ ...p, welcome: !p.welcome }), Pe(), Be();
      } else if (e.hasAttribute("data-tray-tuck"))
        bo = !bo, Be();
      else if (e.hasAttribute("data-phone-toggle"))
        Go = !Go, Be(), Go && ((r = va.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (wl(e.dataset.trayCard), Be());
      else if (e.dataset.favEye) Dd(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Lf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        jo = !jo, Be(), jo && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Tf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        zo = !zo, Be(), zo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) yd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        hi = !hi, Be();
      else if (e.dataset.roomPick) yd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const p = new Set(((l = kt.dash) == null ? void 0 : l.areasOff) || []);
        p.has(e.dataset.areaOn) ? p.delete(e.dataset.areaOn) : p.add(e.dataset.areaOn), Wn({ ...de(), areasOff: [...p] }), Pe(), Be();
      } else e.hasAttribute("data-fav-suggest") ? Zn({ suggest: !Oo() }) : e.hasAttribute("data-fav-title") && (Zn({ favsTitle: !Qi() }), Oa());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Be();
  });
  const Ed = (t) => {
    kt = { ...kt, areaOrder: t }, Da(), Pe(), Be();
  };
  Yt.addEventListener("keydown", (t) => {
    var d, f, u;
    const e = (f = (d = t.target).closest) == null ? void 0 : f.call(d, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Et(Bt).map((x) => x.id), l = r.indexOf(a), p = l + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= r.length || (r.splice(p, 0, r.splice(l, 1)[0]), Ed(r), (u = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || u.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Hl(t, e.closest("[data-area-id]"), "areaId", Ed, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Yo = window.visualViewport, Bl = () => {
    if (!Yo) return;
    const t = Math.max(0, Math.round(window.innerHeight - Yo.height - Yo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  Yo == null || Yo.addEventListener("resize", Bl), Yo == null || Yo.addEventListener("scroll", Bl), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Bl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, r;
    const e = !!((r = (a = t.target).closest) != null && r.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? zo : jo) || (t.stopPropagation(), e ? zo = !1 : jo = !1, Be(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Bd(t, e, a, r) {
    t.preventDefault();
    const l = t.clientX, p = t.clientY;
    let d = null, f = 0;
    const u = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (M) => {
      if (!d) {
        if (Math.hypot(M.clientX - l, M.clientY - p) < 4) return;
        d = e.cloneNode(!0), d.classList.add("tfTrayGhost"), d.style.width = e.offsetWidth + "px", h.appendChild(d);
      }
      d.style.transform = "translate(" + (M.clientX - 24) + "px," + (M.clientY - 24) + "px)";
      const E = !bo && M.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const P = S.getBoundingClientRect(), { w: V } = wn(S.clientWidth);
        ae = !E && M.clientX >= P.left && M.clientX <= P.right && M.clientY >= P.top + bn ? { key: r, col: Math.max(0, Math.floor((M.clientX - P.left) / (V + he))), row: Math.max(0, Math.floor((M.clientY - P.top - bn) / Pa)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Ke();
        }));
        return;
      }
      const B = S.querySelector(".tfDash-favs"), I = B == null ? void 0 : B.getBoundingClientRect();
      if (da = null, I && !E && M.clientX >= I.left && M.clientX <= I.right && M.clientY >= I.top && M.clientY <= I.bottom) {
        let P = 1 / 0;
        B.querySelectorAll('[data-k^="fav:"]').forEach((V, D) => {
          const J = V.getBoundingClientRect(), H = Math.hypot(M.clientX - (J.left + J.width / 2), M.clientY - (J.top + J.height / 2));
          H < P && (P = H, da = { i: D, r: J, after: M.clientX > J.left + J.width / 2 });
        }), da || (da = { i: 0, r: null, after: !1 });
      }
      da != null && da.r ? (u.isConnected || h.appendChild(u), Object.assign(u.style, { left: (da.after ? da.r.right : da.r.left) - 2 + "px", top: da.r.top + 8 + "px", height: da.r.height - 16 + "px" })) : u.remove();
    }, C = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), cancelAnimationFrame(f), d == null || d.remove(), u.remove(), a === "card") {
        if (!d) wl(r);
        else if (ae != null && ae.fromTray) {
          Ke();
          const P = Ra(r) + wd(r), V = de(), D = zn();
          ae = null, kr({ ...V, hidden: V.hidden.filter((J) => J !== r) }, D), Ha(P);
        }
        ae = null, Ke(), Pe(), Be();
        return;
      }
      if (!da) return;
      const M = new Set(kt.favHidden || []);
      M.delete(r);
      const E = $t().filter((P) => P !== r), B = E.filter((P) => !M.has(P)), I = B[Math.min(da.i + (da.after ? 1 : 0), B.length)];
      E.splice(I ? E.indexOf(I) : E.length, 0, r), da = null, Zn({ favourites: E, favHidden: [...M] }), Ha(xt(r) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", C), window.addEventListener("pointercancel", C);
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
    var f;
    const t = Go && ba && h.classList.contains("tfBoard") && !bo;
    if (va.classList.toggle("open", t), va.toggleAttribute("inert", !t), !t) return;
    const e = cl().filter((u) => !de().hidden.includes(u.key)), a = e.length, r = (u) => Math.round(u * Ef * 10) / 10 + "px", l = (u, x) => {
      const C = u.el.classList.contains("tfDac"), M = u.tile ? C ? Df : Rd : Pd[u.key] || Rd;
      return '<button class="tfPhoneBlock' + (u.tile ? " tile" : "") + '" type="button" data-phone-key="' + G(u.key) + '" style="min-height:' + r(M) + '" aria-label="' + G(Ra(u.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (u.tile ? we(u.key, Ba(u.key)) : we(u.key, Bf[u.key])) + '></span><span class="tfPhoneName">' + G(Ra(u.key)) + "</span></button>";
    }, p = '<div class="tfPhoneTitle">' + G(((f = S.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Pd.sums) + '"><span class="tfPhoneName">' + G(Ra("sums")) + "</span></div>" + e.map(l).join("");
    if (va.querySelector('[data-phone="note"]').innerHTML = de().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", p === Pl) return;
    Pl = p;
    const d = va.querySelector('[data-phone="list"]');
    d.innerHTML = p, uo(d);
  }
  function Nd(t, e) {
    var a;
    Wn({ ...de(), phone: t }), Be(), e && ((a = va.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Rl = () => [...va.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Pf(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = va.querySelector(".tfPhoneScreen"), l = Rl().join();
    e.classList.add("moving");
    const p = (f) => {
      const u = r.getBoundingClientRect();
      f.clientY > u.bottom - 40 ? r.scrollTop += 12 : f.clientY < u.top + 40 && (r.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((E) => {
        const B = E.getBoundingClientRect();
        return E !== e && f.clientX >= B.left && f.clientX <= B.right && f.clientY >= B.top && f.clientY <= B.bottom;
      });
      if (!x) return;
      const C = x.getBoundingClientRect(), M = x.classList.contains("tile") ? f.clientX < C.left + C.width / 2 : f.clientY < C.top + C.height / 2;
      a.insertBefore(e, M ? x : x.nextSibling);
    }, d = () => {
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), e.classList.remove("moving");
      const f = Rl();
      Pl = "", f.join() !== l ? Nd(f) : Hd();
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
      Go = !1, Be(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...l } = de();
      Wn(l), Be();
    }
  }), va.addEventListener("keydown", (t) => {
    var d, f, u, x;
    if (t.key === "Escape") {
      t.stopPropagation(), Go = !1, Be(), (d = Yt.querySelector("[data-phone-toggle]")) == null || d.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (u = (f = t.target).closest) == null ? void 0 : u.call(f, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Rl(), l = r.indexOf(e), p = l + a;
    p < 0 || p >= r.length || ([r[l], r[p]] = [r[p], r[l]], Nd(r, e));
  });
  function Hl(t, e, a, r, l) {
    t.preventDefault();
    const p = He.drag, d = je(), f = 1 + p.lift / 100, u = [...e.parentElement.children].filter((Mt) => Mt.dataset[a]), x = u.indexOf(e), C = u.map((Mt) => Mt.getBoundingClientRect()), M = u.length - 1, E = C[x].height + (u.length > 1 ? C[1].top - C[0].bottom : 0), B = (Mt) => C[Mt].top + C[Mt].height / 2, I = t.clientY, P = C[0].top - C[x].top, V = C[M].top - C[x].top;
    let D = 0, J = 0, H = 0, U = 1, nt = x, Ct = 0;
    e.classList.add("hcListDragging"), u.forEach((Mt) => {
      Mt !== e && (Mt.style.transition = d ? "none" : "transform " + p.gap + "ms " + Ne.land);
    });
    const Nt = () => {
      if (Ct = requestAnimationFrame(Nt), d) {
        J = D, e.style.transform = "translateY(" + J + "px)";
        return;
      }
      H = fc(H, D - J, p.pull / 100, p.keep / 100), J += H, U += (f - U) * 0.25;
      const Mt = Math.min(Math.abs(H) / 48, 1);
      e.style.transform = "translateY(" + J.toFixed(2) + "px) scale(" + (U * (1 - 0.063 * Mt)).toFixed(4) + "," + (U * (1 + 0.1 * Mt)).toFixed(4) + ")";
    };
    Ct = requestAnimationFrame(Nt);
    const Pt = (Mt) => {
      D = Math.max(P, Math.min(V, Mt.clientY - I));
      const Zt = B(x) + D, ie = u.filter((me, Se) => Se !== x && B(Se) < Zt).length;
      ie !== nt && (nt = ie, u.forEach((me, Se) => {
        me !== e && (me.style.transform = x < nt && Se > x && Se <= nt ? "translateY(" + -E + "px)" : nt < x && Se >= nt && Se < x ? "translateY(" + E + "px)" : "");
      }));
    }, ht = () => {
      window.removeEventListener("pointermove", Pt), window.removeEventListener("pointerup", ht), window.removeEventListener("pointercancel", ht), cancelAnimationFrame(Ct);
      const Mt = e.getBoundingClientRect(), Zt = e.dataset[a];
      u.forEach((qa) => {
        qa.style.transition = "none", qa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const ie = u.map((qa) => qa.dataset[a]);
      ie.splice(nt, 0, ie.splice(x, 1)[0]), r(ie);
      const me = l(Zt) || e;
      if (requestAnimationFrame(() => u.forEach((qa) => {
        qa.style.transition = "";
      })), d) return;
      const Se = me.getBoundingClientRect(), ao = Mt.top + Mt.height / 2 - (Se.top + Se.height / 2);
      me.classList.add("hcListLanding"), me.animate([{ transform: "translateY(" + ao + "px) scale(" + U + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: p.slide, easing: Ne.land }).finished.then(() => {
        me.classList.remove("hcListLanding"), mc(me);
      }, () => me.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Pt), window.addEventListener("pointerup", ht), window.addEventListener("pointercancel", ht);
  }
  function Rf(t, e) {
    Hl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set($t());
        Sl.favs = null, Zn({ favourites: a.filter((l) => r.has(l)) });
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
    const e = t.target.closest(".tfBoardItem"), a = e && jn().find((Nt) => Nt.el === e);
    if (!a || qo.includes(a.key)) return;
    const r = Vn.get(a.key), { w: l } = wn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), go();
    const p = t.clientX, d = t.clientY;
    let f = !1, u = 0;
    const x = He.drag, C = je();
    let M = 0, E = 0, B = 0, I = 0, P = 0, V = 0, D = C || x.stick === 0, J = 0;
    const H = (Nt, Pt, ht, Mt) => {
      e.style.transform = "translate(" + B.toFixed(2) + "px," + I.toFixed(2) + "px) rotate(" + Nt.toFixed(2) + "deg) rotate(" + Pt + "rad) scale(" + ht.toFixed(4) + "," + Mt.toFixed(4) + ") rotate(" + -Pt + "rad)";
    }, U = () => {
      if (J = requestAnimationFrame(U), C) {
        B = M, I = E, H(0, 0, 1, 1);
        return;
      }
      if (!D) {
        const Zt = Math.min(Math.hypot(M, E) / Math.max(1, x.stick), 1);
        B = M * 0.35, I = E * 0.35, H(0, Math.atan2(E, M), 1 + 0.155 * Zt, 1 - 0.1 * Zt);
        return;
      }
      P = fc(P, M - B, x.pull / 100, x.keep / 100), V = fc(V, E - I, x.pull / 100, x.keep / 100), B += P, I += V;
      const Nt = Math.hypot(P, V), Pt = Math.min(Nt / 48, 1), ht = Math.max(-5, Math.min(x.tilt, P * 0.32)), Mt = 1 + x.lift / 100;
      H(ht, Math.atan2(V, P), Mt * (1 + 0.1 * Pt), Mt * (1 - 0.063 * Pt));
    }, nt = (Nt) => {
      if (M = Nt.clientX - p, E = Nt.clientY - d, !f) {
        if (Math.hypot(M, E) < 4) return;
        f = !0, ae = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), J = requestAnimationFrame(U);
      }
      !D && Math.hypot(M, E) > x.stick && (D = !0, P = M * 0.085, V = E * 0.085), ae.col = Math.round((r.x + M) / (l + he)), ae.row = Math.round((r.y + E - bn) / Pa), u || (u = requestAnimationFrame(() => {
        u = 0, Ke();
      }));
    }, Ct = () => {
      var ao;
      if (window.removeEventListener("pointermove", nt), window.removeEventListener("pointerup", Ct), window.removeEventListener("pointercancel", Ct), !f) return;
      const Nt = (Fa) => {
        Fa.preventDefault(), Fa.stopImmediatePropagation();
      };
      window.addEventListener("click", Nt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Nt, { capture: !0 }), 300), cancelAnimationFrame(u), cancelAnimationFrame(J);
      const Pt = e.getBoundingClientRect(), ht = a.key;
      e.style.transition = "none", Ke(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ae = null, kr(de(), zn()), Ke(), Pe();
      const Mt = (ao = jn().find((Fa) => Fa.key === ht)) == null ? void 0 : ao.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Mt && (Mt.style.transition = "");
      }), !Mt || C) return;
      Mt.style.transition = "none";
      const Zt = Mt.getBoundingClientRect(), ie = Pt.left + Pt.width / 2 - (Zt.left + Zt.width / 2), me = Pt.top + Pt.height / 2 - (Zt.top + Zt.height / 2);
      Mt.style.zIndex = "20", Mt.animate([{ transform: "translate(" + ie + "px," + me + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Ne.land }).finished.then(() => {
        Mt.style.zIndex = "", mc(Mt);
      }, () => {
        Mt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", nt), window.addEventListener("pointerup", Ct), window.addEventListener("pointercancel", Ct);
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
    var u, x, C;
    jt = Ni.model(i(), { madeUp: !v }), vr(), k = jt.states, k[(u = kt.sources) == null ? void 0 : u.grid] && (jt.grid = kt.sources.grid), k[(x = kt.sources) == null ? void 0 : x.alarm] && (jt.security.alarms = [kt.sources.alarm]), ge.forEach((M, E) => {
      const B = k[E], I = (B == null ? void 0 : B.attributes) || {};
      if (!B || Date.now() - M.at > 2 * 60 * 1e3) {
        ge.delete(E);
        return;
      }
      M.pos != null && B.state !== "opening" && B.state !== "closing" && Math.abs(Ya(E) - M.pos) < 1 && delete M.pos, M.tilt != null && Math.abs((I.current_tilt_position ?? -1) - M.tilt) < 1 && delete M.tilt, M.pos == null && M.tilt == null && ge.delete(E);
    });
    const t = [];
    let e = 0;
    const a = Dt();
    Bt = a.filter((M) => M.room).map((M) => M.room), Bt.some((M) => M.id === ot) || (ot = ((C = Bt[0]) == null ? void 0 : C.id) || null);
    const r = pt === "weather" ? { key: "weather", name: "Weather" } : pt && a.find((M) => M.key === pt);
    if (r || (pt = null), h.classList.toggle("tfAreaOpen", !!r), h.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), h.classList.toggle("tfDash", !r), Me = /* @__PURE__ */ new Map(), jt.rooms.forEach((M) => [...M.actions, ...M.plugs, ...M.readings, ...M.openings, ...M.solar, ...M.plants.flatMap((E) => [E.id, ...E.readings])].forEach((E) => Me.set(E, M.name))), !r) return $h(t, Ki());
    if (t.push({ key: "areahead", html: Nf(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const l = r.ids, p = r.room ? r.room.id : r.key, d = r.room;
    d != null && d.solar.length && t.push({ key: "energy:" + d.id, html: Hn(d, ++e) }), d && (d.readings.length || d.power != null) && t.push({ key: "readings:" + d.id, html: Qr(d, ++e) }), d == null || d.plants.forEach((M) => t.push({ key: "plant:" + M.id, html: zi(M, ++e) }));
    const f = [...l, ...((d == null ? void 0 : d.plugs) || []).filter((M) => !l.includes(M))];
    return f.length && t.push({ key: "block:" + p, order: ++e, tiles: f.map((M) => ({ key: M, html: fn(M) })) }), t;
  }
  const Nf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + _c + '</button><div class="settingsTitle">' + G(t.name) + "</div></div>";
  let Fd = 0, qd = null;
  const Vd = (t) => t === "weather" ? lo.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function Wd(t) {
    var e, a;
    pt || (Fd = gi().scrollTop, qd = ((e = Vd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), pt = t, t.startsWith("room:") && (ot = t.slice(5)), Oa(), gi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let mi = null;
  function Of(t, e) {
    if (mi == null || mi(), e == null) return;
    const a = gi(), r = performance.now() + 1500, l = ["wheel", "touchstart", "pointerdown", "keydown"];
    let p = 0;
    const d = () => {
      cancelAnimationFrame(p), l.forEach((u) => window.removeEventListener(u, d, !0)), mi = null;
    }, f = () => {
      const u = t();
      if (u != null && u.isConnected) {
        const x = u.getBoundingClientRect().top - e;
        Math.abs(x) > 0.5 && (a.scrollTop += x);
      }
      performance.now() < r ? p = requestAnimationFrame(f) : d();
    };
    l.forEach((u) => window.addEventListener(u, d, { capture: !0, passive: !0 })), mi = d, f();
  }
  function Nl() {
    var a;
    const t = pt;
    pt = null, Oa(), gi().scrollTop = Fd, Of(() => Vd(t), qd);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? lo.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
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
    const e = gi(), a = (f) => {
      const u = f.getBoundingClientRect();
      return u.height && u.bottom > 0 && u.top < window.innerHeight;
    }, r = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), l = r == null ? void 0 : r.dataset.k, p = r == null ? void 0 : r.getBoundingClientRect().top;
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
    }), S.append(...r.children), jr(t.weather), Ao(), fl.disconnect(), Ke(), uo(S), Ul(S), Fn(S), tt(), hp(), Tr(), np(), ep(), requestAnimationFrame(ut);
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
      var f;
      return ((f = d.dataset) == null ? void 0 : f.iconFor) !== void 0;
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
    return [...t.children].forEach((d, f) => Il(d, p[f])), t;
  }
  function $d(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = Gd(t), l = Il(t, a.firstElementChild);
    uo(l), Ul(l), Fn(l), Ol(l, r);
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
    const e = (a) => _o().some((r) => {
      const l = r.slice(r.indexOf("|") + 1);
      return a === l || a.endsWith(":" + l);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (ka.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && ln) {
        Ta = !0;
        return;
      }
      const l = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      l && (ka.set(r.key, r.html), $d(l, r.html), r.key.startsWith("energy:") && hp());
    })), Tr(), np(), ep(), c(), tt(), De == null || De.update(), Ee == null || Ee.forEach((a) => a.update()), h.classList.contains("tfDash") && ts(), requestAnimationFrame(ut);
  }
  const Ar = {
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
  }, qf = (t) => no(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Vf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + G(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((l) => mo(l, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const _t = document.createElement("div");
  _t.className = "tfMoreBackdrop", _t.hidden = !0, h.appendChild(_t);
  const eo = document.createElement("div");
  eo.className = "tfMoreBackdrop tfMoreUnder", eo.hidden = !0, h.insertBefore(eo, _t);
  const Fl = (t, e) => {
    for (let a = t; a && a !== _t; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if ((r === "auto" || r === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let bi = null;
  _t.addEventListener("touchstart", (t) => {
    bi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), _t.addEventListener("touchmove", (t) => {
    var l, p;
    if (!bi || t.touches.length > 1 || (p = (l = t.target).closest) != null && p.call(l, "input,textarea,select")) return;
    const e = t.touches[0], a = bi.x - e.clientX, r = bi.y - e.clientY;
    bi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Fl(t.target, r) && t.preventDefault();
  }, { passive: !1 }), _t.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Fl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Wf = () => window.innerWidth <= 620;
  let Xe = null;
  _t.addEventListener("pointerdown", (t) => {
    const e = _t.querySelector(".tfMorePair");
    !Wf() || !e || !e.contains(t.target) || !t.isPrimary || _t._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (Xe = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), _t.addEventListener("pointermove", (t) => {
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
        _t.setPointerCapture(t.pointerId);
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
    _t._closing = !0, _t.style.pointerEvents = "none", _t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ne.exit, fill: "forwards" });
    const d = e.pair.animate([{ transform: l }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ne.exit, fill: "forwards" });
    let f = !1;
    const u = () => {
      f || (f = !0, _t._closing = !1, _t.style.pointerEvents = "", _t.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), j === p && Ql());
    };
    d.finished.then(u, u), setTimeout(u, 300);
  };
  _t.addEventListener("pointerup", Ud), _t.addEventListener("pointercancel", Ud);
  function ql() {
    const t = _t.querySelector(".tfMorePair"), e = _t.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ql, { passive: !0 }), g && Wr();
  let wo = [];
  const jf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function zf(t) {
    const e = (P, V = "") => '<div class="tfMoreHead">' + (j != null && j.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + G(P) + "</div>" + V + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Cc + "</button></div>", a = (P, V) => '<div class="tfMoreNow"><div class="tfMoreState">' + G(P) + "</div></div>", r = Vf;
    if (t === "favourites") {
      const P = $t(), V = new Set(P), D = [{ name: "Starred", ids: P }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((J) => ({ name: J.name, ids: [...J.actions, ...J.plugs] }))].map((J, H) => H ? { ...J, ids: J.ids.filter((U) => !V.has(U)) } : J).filter((J) => J.ids.length);
      return [e("Favourites"), a(P.length ? P.length + " starred" : "None starred"), r(D, { star: !0 }, !0)];
    }
    const l = (P, { name: V = "", alert: D = !1, plain: J = !1 } = {}) => {
      const H = J ? [] : P.filter((Ct) => Hr.includes(Ct.split(".")[0])), U = P.filter((Ct) => !H.includes(Ct)), nt = (Ct) => Ct.startsWith("vacuum.") && Ut(Ct).battery_level != null ? Ut(Ct).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (V ? '<div class="tfMoreGroupName">' + G(V) + "</div>" : "") + '<div class="tfMoreActions">' + H.map((Ct) => fn(Ct, !0)).join("") + U.map((Ct) => mo(Ct, { plain: J, alert: D, say: J ? nt(Ct) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const P = Ki().find((H) => H.key === t.slice(8));
      if (!P) return null;
      const V = P.key === "light" ? (P.groups || []).flatMap((H) => H.ids) : [], D = V.some((H) => {
        var U;
        return ((U = k[H]) == null ? void 0 : U.state) === "on";
      }), J = V.length ? '<button class="primary" type="button" data-acts="' + fr(V.map((H) => ["light", D ? "turn_off" : "turn_on", H])) + '">' + (D ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(P.name), '<div class="tfMoreNowRow">' + a(P.value) + J + "</div>", ...(P.groups || []).map((H) => l(H.ids, { name: H.name === P.name ? "" : H.name, alert: H.alert, plain: P.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, P, V] = t.split(":"), D = jt.rooms.find((U) => U.id === P), J = D && R(D).find((U) => U.key === V);
      if (!J) return null;
      const H = J.acts ? '<button class="primary" type="button" data-acts="' + fr(J.acts) + '">' + (J.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(D.name + " " + J.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(J.value) + H + "</div>", l(z(D, V))];
    }
    const p = t.split(".")[0];
    k[t];
    const d = Hr.includes(p) || Ai.includes(p) ? w(t) : Vl(t), f = dm(t), u = [...f ? f.pages.map((P) => ({ name: P.name, svg: P.svg, tabs: P.tabs, html: P.space + '<div class="tfMoreCtl"' + Eo(t).replace(" data-light", "") + ">" + P.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ra, ...yn(t) ? { tabs: Jd() } : {}, html: Yf(t) + (yn(t) ? cs(t) : "") + (p === "plant" ? bm(t).join("") : "") + d.sections.filter(Boolean).join("") }], { name: "Info", svg: Tc, html: hm(t) }];
    j && j.page == null && (j.page = 0), j && (j.pages = u.length);
    const x = (j == null ? void 0 : j.page) || 0, C = (j == null ? void 0 : j.mode) || "", M = u.length - 1, E = !!(f != null && f.infoButton), B = u.flatMap((P, V) => (E && V === M ? [] : P.tabs || [{ name: P.name, svg: P.svg }]).map((D) => ({ ...D, page: V }))), I = (P) => P.page === x && (P.mode == null || P.mode === C);
    return [
      $f(t, d),
      '<div class="tfMorePages' + (f ? " tfMorePop" : "") + (C && x === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + u.map((P) => '<section class="tfMorePage" aria-label="' + P.name + '" data-mode="' + C + '">' + P.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (E ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (B.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (E ? "Views" : "Pages") + '">' + B.map((P) => '<button type="button" role="tab" aria-selected="' + I(P) + '" aria-label="' + P.name + '" title="' + P.name + '" data-more-page="' + P.page + '"' + (P.mode != null ? ' data-more-mode="' + P.mode + '"' : "") + (I(P) ? "" : ' tabindex="-1"') + ">" + P.svg + "</button>").join("") + "</div>" : "") + (E ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (x === M) + '" data-more-page="' + M + '" data-more-toggle>' + Tc + "</button></div>" : "")
    ];
  }
  const Gf = (t, e) => {
    const a = t.split(".")[0], r = k[t], l = r.attributes;
    if (a === "light") return Oe(t);
    const p = a === "climate" ? zt(l.hvac_action || r.state) : a === "humidifier" ? zt(l.action || r.state) : a === "water_heater" ? zt(l.operation_mode || r.state) : a === "fan" && r.state === "on" && l.percentage != null ? l.percentage + "%" : (a === "valve" || a === "cover") && l.current_position != null && r.state !== "closed" ? l.current_position + "%" : Oe(t);
    return [e, p].filter(Boolean).join(" · ");
  };
  function $f(t, e, a) {
    var d, f, u, x, C;
    const r = (d = jt.areaOf) == null ? void 0 : d.call(jt, t), l = r && (((f = jt.rooms.find((M) => M.id === r)) == null ? void 0 : f.name) || ((C = (x = (u = i()) == null ? void 0 : u.areas) == null ? void 0 : x[r]) == null ? void 0 : C.name)) || "", p = e.button ? Ma(t, e) : '<div class="tfIcon"' + we(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Eo(t) + ">" + (j != null && j.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + p + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + G(xt(t)) + '</span><span class="activityRowMeta">' + G(Gf(t, l)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Cc + "</button></div>";
  }
  const Uf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Vl(t) {
    var l;
    const e = t.split(".")[0], a = ((l = k[t]) == null ? void 0 : l.state) === "on", r = Ai.includes(e) ? { act: Ht(e, "toggle", t), label: "Turn " + xt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Ht(e, "turn_on", t), label: "Run " + xt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ba(t) };
  }
  function Yf(t) {
    const e = t.split(".")[0];
    if (Uf.includes(e) || e === "light" && !wr(t)) {
      const l = Hr.includes(e) ? w(t) : Vl(t);
      return l != null && l.button ? '<div class="tfMoreSpace tfMoreSwitch' + (l.on ? " on" : "") + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + Eo(t) + ">" + Ma(t, l) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + G(t) + '"></div></div>';
    if (e === "light" && wr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + G(t) + '"></div></div>';
    const { big: a, lines: r } = um(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (m("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + G(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + G(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([l, p]) => '<div class="tfMoreFact"><span>' + G(l) + "</span><span>" + G(p) + "</span></div>").join("") + "</div></div>";
  }
  const Zf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Kf = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Xf = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], vo = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + G(t) + "</div>" + e + "</div>", Ia = (t, e) => Ye("tfSeg", t, e), Wl = (t, e, a, r, l, p) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + G(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + G(l) + '" data-drag="' + G(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + G(l) + "</output></i>" + (p ? '<span class="tfBarIcon"' + we("", p, r) + "></span>" : "") + "</div>", Lr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Eo(t) + ">" + Ma(t, e) + "</div>", jl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + G(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + G(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, l]) => '<div class="tfMoreFact"><span>' + G(r) + "</span><span>" + G(l) + "</span></div>").join("") + "</div></div>", Yd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + G((j == null ? void 0 : j.code) || "") + '">', ls = (t, e, a, r, l) => ({ label: r, pressed: l, html: null, coded: [t, e, a].join("|") }), Zd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + G(t) + '">' + e.map((a) => '<button type="button" data-coded="' + G(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + G(a.label) + "</button>").join("") + "</div>", Kd = (t, e, a) => Ia(xt(t), [{ label: "Off", act: Ht(e, "turn_off", t), pressed: !a }, { label: "On", act: Ht(e, "turn_on", t), pressed: a }]), vn = /* @__PURE__ */ new Map(), Jf = [0, 33, 67, 100], Qf = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function yn(t, e = "phys") {
    if (!T || !k[t]) return null;
    const a = t.split(".")[0], r = k[t].attributes, l = O === "rocker" ? "rocker" : "toggle";
    return a === "light" ? e === "physon" ? l : Pn(t).some((p) => p !== "onoff") ? "lightdial" : l : a === "climate" ? Number.isFinite(Number(r.temperature)) ? "dial" : null : a === "fan" ? r.percentage != null ? "rotary" : l : ["switch", "input_boolean", "lock", "automation", "siren"].includes(a) ? l : a === "cover" ? r.current_position == null ? l : null : a === "valve" ? "guarded" : a === "scene" || a === "script" || a === "button" ? "push" : null;
  }
  const cs = (t, e = "phys") => '<div class="tfMoreSpace tfPhys" data-pv="' + e + '" data-phys="' + G(t) + '"></div>', zl = (t) => {
    const e = t.split(".")[0], a = k[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Xd = (t, e, a) => (t === "lock" ? Ge("lock", a ? "lock" : "unlock", e) : t === "cover" ? Ge("cover", a ? "open_cover" : "close_cover", e) : Ge(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), tm = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], em = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', Jd = (t) => [{ name: "Physical", svg: em, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: ra, mode: "" }]], am = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function wi(t, e) {
    const a = k[t], r = a.attributes, l = a.state === "on";
    return e === "fader" ? [l ? $a(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [l ? am(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [zl(t)];
  }
  function om(t, e, a = "phys") {
    const r = document.createElement("div");
    r.className = "tfMoreSpace tfPhys";
    const l = t.split(".")[0], p = k[t].attributes, d = { id: t, kind: e, pv: a, el: r, quiet: 0, timers: {} }, f = (E, B = 260, I = "one") => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timers[I]), d.timers[I] = setTimeout(E, B);
    }, u = { camera: _, fill: L === "fill", label: xt(t) };
    if (e === "push" && (d.ctl = new vg(r, { ...u, onChange: () => Ge(l, l === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new Sc(r, { ...u, on: zl(t), onChange: (E) => f(() => Xd(l, t, E), 0) })), e === "toggle" && (d.ctl = new gu(r, { ...u, on: zl(t), labels: tm(l), onChange: (E) => f(() => Xd(l, t, E), 0) })), e === "lightdial") {
      const E = ap(r, u, t, (B, I) => f(() => rm(t, B, I).catch(() => {
      }), B === "bright" ? 260 : 300, B));
      d.ctls = E.ctls, d.sync = E.sync;
    }
    if (e === "fader" && (d.ctl = new yg(r, { ...u, value: wi(t, e)[0], onChange: (E) => f(() => (Math.round(E * 100) ? Ge("light", "turn_on", t, { brightness_pct: Math.round(E * 100) }) : Ge("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [E, B] = wi(t, e), I = Number(p.min_temp), P = Number(p.max_temp);
      d.ctl = new mu(r, { ...u, value: E, now: B ?? E, min: Number.isFinite(I) ? I : 7, max: Number.isFinite(P) ? P : 35, onChange: (V) => f(() => Ge("climate", "set_temperature", t, { temperature: V }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new xg(r, { ...u, positions: Qf, index: wi(t, e)[0], onChange: (E) => f(() => (E ? Ge("fan", "set_percentage", t, { percentage: Jf[E] }) : Ge("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new kg(r, { ...u, on: wi(t, e)[0], onChange: (E) => f(() => Ge("valve", E ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) })), d.ctls || (d.ctls = [d.ctl], d.sync = () => d.ctl.show(...wi(t, e))), d.fit = () => d.ctls.forEach((E) => {
      const B = E.svg.parentElement.getBoundingClientRect();
      E.setBox(B.width, B.height);
    });
    const x = new ResizeObserver(d.fit);
    d.ctls.forEach((E) => x.observe(E.svg.parentElement)), d.ro = x;
    const C = "phys|" + t;
    r.addEventListener("pointerdown", () => {
      ne.add(C), ma(C);
    });
    const M = () => {
      ne.has(C) && (ne.delete(C), Ta && Pe());
    };
    return r.addEventListener("pointerup", M), r.addEventListener("pointercancel", M), d;
  }
  function Qd(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = e.dataset.pv || "phys", l = yn(a, r), p = a + "|" + r;
      if (!l) {
        e.remove();
        return;
      }
      let d = vn.get(p);
      (!d || d.kind !== l) && (d = om(a, l, r), vn.set(p, d)), d.el.dataset.pv = r, e.replaceWith(d.el), d.fit(), tp(d);
    });
  }
  function tp(t) {
    !k[t.id] || performance.now() < t.quiet || t.sync();
  }
  const ep = () => {
    vn.forEach((t, e) => {
      var a;
      t.el.isConnected ? tp(t) : ((a = t.ro) == null || a.disconnect(), vn.delete(e));
    });
  }, nm = {
    bright: () => ({ min: 0, max: 100, step: 1, tick: 2, major: 25, now: 0, labelOf: (t) => t % 50 === 0 ? t + "%" : null, title: "Brightness" }),
    colour: () => ({ min: 0, max: 360, step: 5, tick: 10, major: 3, tint: (t) => "hsl(" + t + ",100%,55%)", labelOf: () => null, title: "Colour" }),
    warm: (t) => {
      const [e, a] = dn(t);
      return { min: e, max: a, step: 50, tick: 100, major: 5, tint: cm, labelOf: () => null, title: "Tone", reverse: !0 };
    }
    // white on the left to orange on the right // no numbers on it (Matt, 25 Nov): the colours say it
  };
  function ap(t, e, a, r) {
    const l = a ? Pn(a) : ["hs", "color_temp"], p = l.some((I) => Lo.includes(I)), d = l.includes("color_temp"), f = (I) => {
      if (!a) return { bright: 64, colour: 30, warm: 3e3 }[I];
      const [P, , V, D] = lm(a);
      return I === "bright" ? Math.round(P * 100) : I === "colour" ? V ?? 30 : D ?? Math.round(dn(a).reduce((J, H) => J + H) / 2);
    };
    let u = p ? "colour" : d ? "warm" : null;
    const x = (I) => ({ ...nm[I](a), value: f(I) }), C = document.createElement("div");
    C.className = "tfPhysLightDial", t.appendChild(C);
    const M = document.createElement("div");
    M.className = "tfPhysCell dial", C.appendChild(M);
    const E = new Mg(M, {
      ...e,
      bright: x("bright"),
      second: u ? x(u) : null,
      onChange: (I, P) => r(I === "bright" ? "bright" : u, P)
    }), B = [E];
    if (p && d) {
      const I = document.createElement("div");
      I.className = "tfPhysCell mini", C.appendChild(I);
      const P = new Sc(I, {
        ...e,
        label: "Outer ring sets colour or tone",
        on: !0,
        labels: ["Colour", "Tone"],
        textSize: 9,
        bare: !0,
        onChange: (V) => {
          u = V ? "colour" : "warm", E.setSecond(x(u));
        }
      });
      B.push(P);
    }
    return { ctls: B, sync: () => {
      a && (E.show("bright", f("bright")), u && E.show("second", f(u)));
    } };
  }
  const rm = (t, e, a) => {
    var r;
    return e === "bright" ? a ? Ge("light", "turn_on", t, { brightness_pct: a }) : Ge("light", "turn_off", t) : e === "colour" ? Ge("light", "turn_on", t, { hs_color: [a % 360, ((r = k[t].attributes.hs_color) == null ? void 0 : r[1]) || 100] }) : Ge("light", "turn_on", t, { color_temp_kelvin: a });
  }, im = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Zm0 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-1 2h2v5h-2Z"/></svg>', sm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Zm5-11h2v10h-2Zm1-2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"/></svg>', lm = (t) => {
    const e = k[t], a = e.attributes, r = e.state === "on", l = a.hs_color ? Math.round(a.hs_color[0] / 5) * 5 : null, p = a.color_temp_kelvin ? Math.round(a.color_temp_kelvin / 50) * 50 : null;
    return [$a(e) / 100, r, l, p];
  }, cm = (t) => {
    const e = t / 100, a = (d) => Math.max(0, Math.min(255, Math.round(d))), r = e <= 66 ? 255 : 329.698727446 * Math.pow(e - 60, -0.1332047592), l = e <= 66 ? 99.4708025861 * Math.log(e) - 161.1195681661 : 288.1221695283 * Math.pow(e - 60, -0.0755148492), p = e >= 66 ? 255 : e <= 19 ? 0 : 138.5177312231 * Math.log(e - 10) - 305.0447927307;
    return "rgb(" + a(r) + "," + a(l) + "," + a(p) + ")";
  };
  function dm(t) {
    const e = pm(t);
    if (e && yn(t) && t.startsWith("light.") && yn(t) === "lightdial") {
      const a = e.pages[0].tabs || [], r = (l) => a.find((p) => p.mode === l);
      e.pages[0].space += cs(t, "phys") + cs(t, "physon"), e.pages[0].tabs = [{ name: "Dial", svg: im, mode: "phys" }, { name: "On and off", svg: sm, mode: "physon" }, r("dac"), r("") || { name: "Sliders", svg: ra, mode: "" }, r("colour")].filter(Boolean);
    } else e && yn(t) && (e.pages[0].space += cs(t), e.pages[0].tabs = Jd(e.pages[0].tabs));
    return e;
  }
  function pm(t) {
    var p, d, f;
    const e = t.split(".")[0], a = k[t], r = a.attributes;
    if (!Xf.includes(e)) return null;
    const l = Hr.includes(e) || Ai.includes(e) ? w(t) : Vl(t);
    if (e === "light") {
      const u = a.state === "on", x = Pn(t), [C, M] = dn(t), E = m("bright", t, u ? $a(a) : 0), B = m("ctf", t, u && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), I = m("huev", t, u && Lo.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), P = x.includes("color_temp"), V = x.some((Zt) => Lo.includes(Zt)), D = wr(t), J = (Zt, ie, me, Se) => '<div class="tfBar tfVBar ' + Zt + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + G(xt(t) + " " + ie.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(me) + '" data-drag="' + Zt + "|" + G(t) + '">' + Se + "</div>", H = (Zt, ie, me = "") => '<div class="tfVCol' + me + '">' + ie + "</div>", U = H("Brightness", J("bright", "Brightness", E, '<i style="height:' + E + '%"></i><span class="tfBarIcon"' + we("", "mdi:white-balance-sunny", "Brightness") + "></span>")), nt = B == null ? null : (M - B) / (M - C), Ct = P ? H("Warmth", J("ctf", "Warmth", nt == null ? 0 : nt * 100, nt == null ? "" : '<b style="top:' + Math.round((1 - nt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Nt = V ? H("Colour", J("huev", "Colour", I == null ? 0 : (1 - I / 360) * 100, I == null ? "" : '<b style="top:' + Math.round(I / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Pt = '<div class="tfVCols">' + U + (Ct || Nt ? '<div class="tfVSwap">' + Ct + Nt + "</div>" : "") + "</div>", ht = D ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + G(t) + '"></div></div>' : "", Mt = [V && { name: "Colour", svg: Zf, mode: "colour" }, D && { name: "Dual Axis Controller", svg: Kf, mode: "dac" }, { name: "Sliders", svg: ra, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ra, space: '<div class="tfMoreSpace tfLightSpace">' + Pt + ht + "</div>", rows: [], tabs: Mt.length > 1 ? Mt : [] }] };
    }
    if (e === "climate") {
      const u = r.target_temp_step || 0.5, x = Number(r.temperature), C = Number(r.target_temp_low), M = Number(r.target_temp_high), E = (V) => Ht("climate", "set_temperature", t, V), B = (V, D, J, H, U) => (D == null ? void 0 : D.length) && vo(V, Ia(V, D.map((nt) => ({ label: zt(nt), act: Ht("climate", H, t, { [U]: nt }), pressed: (J === "state" ? a.state : r[J]) === nt })))), I = Number.isFinite(C) && Number.isFinite(M) && vo("Range", '<div class="tfMoreRange">' + ga("Low", Fe(C) + " °C", E({ target_temp_low: C - u, target_temp_high: M }), E({ target_temp_low: C + u, target_temp_high: M })) + ga("High", Fe(M) + " °C", E({ target_temp_low: C, target_temp_high: M - u }), E({ target_temp_low: C, target_temp_high: M + u })) + "</div>"), P = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: ra,
        space: jl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(x) ? Fe(x) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ga("Target temperature", Fe(x) + " °C", E({ temperature: x - u }), E({ temperature: x + u })),
          I,
          B("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          B("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          B("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          B("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(P) && r.min_humidity != null && vo("Humidity", ga("Target humidity", P + "%", Ht("climate", "set_humidity", t, { humidity: P - 1 }), Ht("climate", "set_humidity", t, { humidity: P + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const u = a.state === "on", x = m("fan", t, u && Number(r.percentage) || 0), C = r.percentage != null;
      return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: C ? [
        Wl("fan", t, x, xt(t) + " speed", x + "%", "mdi:fan"),
        r.oscillating != null && vo("Oscillate", Ia("Oscillate", [{ label: "Off", act: Ht("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Ht("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && vo("Direction", Ia("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([M, E]) => ({ label: E, act: Ht("fan", "set_direction", t, { direction: M }), pressed: r.direction === M })))),
        ((p = r.preset_modes) == null ? void 0 : p.length) && vo("Preset", Ia("Preset", r.preset_modes.map((M) => ({ label: zt(M), act: Ht("fan", "set_preset_mode", t, { preset_mode: M }), pressed: r.preset_mode === M }))))
      ] : [Kd(t, "fan", u)] }] };
    }
    if (e === "humidifier") {
      const u = Number(r.humidity);
      return { pages: [{ name: "Control", svg: ra, space: jl(String(r.current_humidity), "%", [["Target", Number.isFinite(u) ? u + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(u) && ga("Target humidity", u + "%", Ht("humidifier", "set_humidity", t, { humidity: u - 1 }), Ht("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((d = r.available_modes) == null ? void 0 : d.length) && vo("Mode", Ia("Mode", r.available_modes.map((x) => ({ label: zt(x), act: Ht("humidifier", "set_mode", t, { mode: x }), pressed: r.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const u = Number(r.temperature), x = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ra, space: jl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(u) ? String(u).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(u) && ga("Target temperature", u + " °C", Ht("water_heater", "set_temperature", t, { temperature: u - x }), Ht("water_heater", "set_temperature", t, { temperature: u + x })),
        ((f = r.operation_list) == null ? void 0 : f.length) && vo("Mode", Ia("Mode", r.operation_list.map((C) => ({ label: zt(C), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: C }), pressed: (r.operation_mode || a.state) === C })))),
        r.away_mode != null && vo("Away", Ia("Away", [{ label: "Off", act: Ht("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Ht("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const u = [...qu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , M]) => !M || be(t, M)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], C = '<div class="tfMoreSpace tfMoreKeypad">' + Yd() + '<div class="tfKeypad">' + x.map((M) => '<button type="button" data-key="' + M + '"' + (M === "back" ? ' aria-label="Delete"' : "") + ">" + (M === "clear" ? "Clear" : M === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : M) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ra, space: C, rows: [Zd(xt(t), u.map(([M, E, B]) => ls("alarm_control_panel", B, t, E, a.state === M)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: [Ia(xt(t), [{ label: "Open", act: Ht("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Ht("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const u = a.state === "opening" || a.state === "closing", x = Rn(t), C = Yr(t);
      return { pages: [{ name: "Control", svg: ra, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + G(t) + '"></div></div>', rows: [
        be(t, Ac) && ai(t, x),
        C != null && vo("Tilt", Wl("tiltp", t, m("tiltp", t, C), xt(t) + " tilt", Math.round(m("tiltp", t, C)) + "%")),
        Ia(xt(t), [be(t, Tu) && { label: "Open", act: Ht("cover", "open_cover", t), disabled: x >= 100 && !u }, be(t, Eu) && { label: "Stop", act: Ht("cover", "stop_cover", t) }, be(t, Du) && { label: "Close", act: Ht("cover", "close_cover", t), disabled: x <= 0 && !u }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: [
        Yd(),
        Zd(xt(t), [ls("lock", "lock", t, "Lock", a.state === "locked"), ls("lock", "unlock", t, "Unlock", a.state === "unlocked"), be(t, Fu) && ls("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const u = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: [Ia(xt(t), [{ label: "Open", act: Ht("valve", "open_valve", t), pressed: u }, { label: "Close", act: Ht("valve", "close_valve", t), pressed: !u }])] }] };
      const x = m("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: [
        Wl("valve", t, x, xt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Ia(xt(t), [{ label: "Open", act: Ht("valve", "open_valve", t) }, be(t, 8) && { label: "Stop", act: Ht("valve", "stop_valve", t) }, { label: "Close", act: Ht("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ra, space: Lr(t, l), rows: [Kd(t, e, a.state === "on")] }] };
  }
  function um(t) {
    var C;
    const e = k[t], a = Ut(t), r = t.split(".")[0], l = (((C = Ar[r]) == null ? void 0 : C.call(Ar, a)) || []).filter(([, M]) => M != null && M !== ""), p = (M) => {
      const E = l.findIndex(([B]) => B === M);
      return E < 0 ? null : l.splice(E, 1)[0][1];
    }, d = (M) => {
      const E = String(M).match(/^(-?[\d.,]+)\s*(.*)$/);
      return E ? [E[1], E[2]] : [String(M), ""];
    }, f = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let u;
    r === "light" ? (p("Brightness"), u = e.state === "on" && Bo(t) ? [String($a(e)), "%"] : f()) : r === "climate" ? u = d(p("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (p("Position"), u = a.current_position != null ? [String(Ya(t)), "%"] : f()) : r === "humidifier" ? u = d(p("Current humidity") || e.state) : r === "vacuum" ? u = d(p("Battery") || e.state) : r === "plant" ? u = d(p("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? u = f() : u = d(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = l.length ? l.slice(0, 4) : [["State", Oe(t)]];
    return { big: u, lines: x };
  }
  function hm(t) {
    var x, C, M, E, B, I, P;
    const e = k[t], a = i(), r = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], l = r != null && r.device_id ? (C = a == null ? void 0 : a.devices) == null ? void 0 : C[r.device_id] : null, p = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + G(t) + '" role="img" aria-label="' + G(xt(t)) + ', last 24 hours"></svg></div>', d = (M = jt.areaOf) == null ? void 0 : M.call(jt, t), f = d && (((E = jt.rooms.find((V) => V.id === d)) == null ? void 0 : E.name) || ((I = (B = a == null ? void 0 : a.areas) == null ? void 0 : B[d]) == null ? void 0 : I.name)) || "", u = [
      ...((P = Ar[t.split(".")[0]]) == null ? void 0 : P.call(Ar, Ut(t))) || [],
      ["Changed", e.last_changed && Ys(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", l && (l.name_by_user || l.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, V]) => V != null && V !== "");
    return p + '<div class="tfMoreRows">' + u.map(([V, D]) => '<div class="tfMoreRow"><span>' + G(V) + "</span><span>" + G(D) + "</span></div>").join("") + "</div>" + qf(t) + (l ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + G(r.device_id) + '"><span>Device page</span>' + Dc + "</button>" : "");
  }
  const fm = () => "";
  let Gl = "";
  function $l(t) {
    var e;
    j && (j.details = t, Tr(), (e = _t.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ds = (t) => {
    const e = k[t], a = Ya(t), r = Rn(t);
    return { kind: kc(e), name: xt(t), text: Oe(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Yr(t) ?? 100, canSet: be(t, Ac) };
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
    k[t.coverId] && t.update(ds(t.coverId));
  }), np = () => {
    Qe.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Qe.delete(e));
    }), Yl();
  };
  function Tr() {
    var p, d;
    if (!j || !(jf(j.id) || k[j.id])) {
      _t.hidden = !0;
      return;
    }
    if (_o().some((f) => f.endsWith("|" + j.id))) {
      Ta = !0, Yl();
      return;
    }
    const t = zf(j.id), e = _t.querySelector(".tfMore");
    if (!t) {
      hs();
      return;
    }
    const a = Gd(_t), r = fm(j.id), l = j.frame ? j.frame.wide : j.id.startsWith("summary:") || j.id.startsWith("group:");
    if (_t.hidden || !e || t.length !== wo.length || e.classList.contains("wide") !== l) {
      const f = Xl ? j.scroll || 0 : !_t.hidden && e ? e.scrollTop : 0;
      if (_t.innerHTML = '<div class="tfMorePair' + (_t.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (l ? " wide" : "") + '"' + (j.frame ? ' style="height:' + j.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Gl = r, _t.classList.toggle("wide", l), _t.hidden = !1, ql(), Ul(_t), Qd(_t), Fn(_t), uo(_t), _t.querySelectorAll("[data-day]").forEach((u) => dp(u.dataset.day, u, j.at)), sp(_t), f && (_t.querySelector(".tfMore").scrollTop = f), rp(), Ol(_t, a), !_t.contains(o.activeElement)) {
        const u = _t.querySelector("[data-more-close]");
        (p = u != null && u.offsetParent ? u : _t.querySelector(".tfMore")) == null || p.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, u) => {
        var E, B;
        if (f === wo[u] || f.includes("data-cover-art") || e.children[u].contains((B = (E = o.activeElement) == null ? void 0 : E.matches) != null && B.call(E, "input,select") ? o.activeElement : null)) return;
        if (_o().some((I) => e.children[u].querySelector('[data-drag="' + CSS.escape(I) + '"]'))) {
          Ta = !0;
          return;
        }
        const x = document.createElement("div");
        x.innerHTML = f;
        const C = [...e.children[u].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((I) => I.scrollTop), M = Il(e.children[u], x.firstElementChild);
        M.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((I, P) => {
          C[P] && (I.scrollTop = C[P]);
        }), uo(M), sp(M), Qd(M), Fn(M);
      }), r !== Gl) {
        const f = _t.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = r), Gl = r;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || dp(f.dataset.day, f, j.at);
      }), rp(), _t.contains(o.activeElement) || Ol(_t, a);
    }
    (d = _t.querySelector(".tfMorePair")) == null || d.classList.toggle("details", !!(j.details && r)), wo = t, Yl();
  }
  function rp() {
    const t = _t.querySelector("[data-more-pages]");
    !t || !j || (t.scrollTo({ left: (j.page || 0) * t.clientWidth, behavior: "instant" }), Kl(), Zl(t));
  }
  function Zl(t) {
    const e = t.children[(j == null ? void 0 : j.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Kl() {
    var e;
    const t = (j == null ? void 0 : j.page) || 0;
    _t.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (j.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = _t.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!j.mode && t === 0);
  }
  function mm(t, e) {
    var r, l;
    const a = _t.querySelector("[data-more-pages]");
    !a || !j || (j.page = Math.max(0, Math.min((j.pages || 2) - 1, t)), a.scrollTo({ left: j.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Kl(), Zl(a), e && ((l = _t.querySelector('.tfMoreDots [aria-selected="true"]')) == null || l.focus({ preventScroll: !0 })));
  }
  function ps(t, e, a) {
    j && (e != null && e !== (j.mode || "") && (j.mode = e, _t.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), mm(t, a));
  }
  let Dr = null;
  _t.addEventListener("touchstart", (t) => {
    var a, r, l, p;
    const e = t.touches[0];
    Dr = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((p = (l = t.target).closest) != null && p.call(l, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), _t.addEventListener("touchend", (t) => {
    if (!Dr || !j || (j.page || 0) !== 0 || !_t.querySelector("[data-more-mode]")) {
      Dr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Dr.x, r = e.clientY - Dr.y;
    if (Dr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const l = [..._t.querySelectorAll(".tfMoreDots [data-more-mode]")].map((d) => d.dataset.moreMode), p = l.indexOf(j.mode || "");
    a > 0 && p > 0 ? ps(0, l[p - 1]) : a < 0 && j.mode && p < l.length - 1 && ps(0, l[p + 1]);
  }, { passive: !0 });
  let ip = 0;
  _t.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !j || (clearTimeout(ip), ip = setTimeout(() => {
      if (!j) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (j.page || 0) && (j.page = r, Kl(), Zl(e));
    }, 80));
  }, !0), _t.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && j && (j.code = t.target.value);
  }), _t.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!j || !(e || a)) return;
    const r = _t.querySelector("[data-code]");
    if (e) {
      const u = e.dataset.key, x = j.code || "";
      j.code = u === "clear" ? "" : u === "back" ? x.slice(0, -1) : (x + u).slice(0, 12), r && (r.value = j.code);
      return;
    }
    const [l, p, d] = a.dataset.coded.split("|"), f = j.code;
    j.code = "", r && (r.value = ""), Ge(l, p, d, f ? { code: f } : null).catch(() => {
    });
  }), setInterval(() => {
    j && Tr();
  }, 15 * 1e3);
  function us(t, e) {
    var l, p;
    const a = !!(j && e && _t.contains(e)), r = a && _t.querySelector(".tfMore");
    if (a && (j.scroll = r.scrollTop), a && !j.under) {
      const d = _t.querySelector(".tfMorePair"), f = { more: j, parts: wo, opener: e };
      d.classList.add("still"), d.style.transform = "", d.inert = !0, eo.innerHTML = "", eo.appendChild(d), eo.classList.toggle("wide", _t.classList.contains("wide")), eo.hidden = !1, _t.hidden = !0, _t.innerHTML = "", j = { id: t, opener: e, back: null, frame: null, under: f, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null, mode: yn(t) ? "phys" : "" }, Jl();
      return;
    }
    j = { id: t, opener: a ? j.opener : e, back: a ? j : null, frame: a ? j.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? j.under : null, at: Number((p = e == null ? void 0 : e.dataset) == null ? void 0 : p.at) || null, mode: yn(t) ? "phys" : "" }, Jl();
  }
  let Xl = !1;
  function Jl() {
    wo = [], Xl = !_t.hidden, Qe.forEach((t, e) => {
      e !== j.id && _t.contains(t.el) && (t.destroy(), Qe.delete(e));
    }), Tr(), Xl = !1;
  }
  function hs() {
    if (!j) return;
    const t = j;
    Z0(_t, () => {
      j === t && Ql();
    });
  }
  function Ql() {
    var r, l, p, d, f, u, x, C;
    const t = j == null ? void 0 : j.opener, e = j == null ? void 0 : j.under;
    j = null, Qe.forEach((M, E) => {
      _t.contains(M.el) && (M.destroy(), Qe.delete(E));
    }), aa.forEach((M, E) => {
      /^more2?:/.test(E) && aa.delete(E);
    }), _t.hidden = !0, _t.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const M = eo.firstElementChild;
      j = e.more, wo = e.parts, M && (M.inert = !1, _t.appendChild(M)), _t.classList.toggle("wide", eo.classList.contains("wide")), eo.hidden = !0, eo.innerHTML = "", _t.hidden = !1;
      const E = _t.querySelector(".tfMore");
      E && (E.scrollTop = j.scroll || 0), Tr(), (l = (r = e.opener) != null && r.isConnected ? e.opener : _t.querySelector("[data-more-close]")) == null || l.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.more ? (d = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (u = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || u.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((C = S.querySelector("[data-favs-edit]")) == null || C.focus(a));
  }
  const gm = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function bm(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, l]) => {
      const p = gm[r], d = a + p;
      if (!p || !k[d] || !ar[p]) return "";
      const f = Ut(d).unit_of_measurement || "", [u, x] = ar[p], C = l === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + G(xt(d)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + G(d) + '" data-guide="' + (C ? u : x) + '" data-guide-word="' + G("Wants " + (C ? "" : "up to ") + (C ? u : x).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (C ? " or more" : "")) + '" role="img" aria-label="' + G(xt(d)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const sp = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => up(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Jc(e)));
  function tc(t, e, a, r = {}) {
    const l = e.map((V) => V[1]).concat(r.guide != null ? [r.guide] : []), p = r.zero ? 0 : Math.min(...l), d = Math.max(...l), f = Math.max(120, t.clientWidth || 260), u = Math.max(60, t.clientHeight || 130), x = 8, C = u - 20, M = Date.now() - 24 * 3600 * 1e3, E = 24 * 3600 * 1e3, B = (V) => Math.max(0, Math.min(f, (V - M) / E * f)), I = (V) => d === p ? (x + C) / 2 : C - (V - p) / (d - p) * (C - x);
    let P = "M" + B(e[0][0]).toFixed(1) + " " + I(e[0][1]).toFixed(1);
    if (e.length > 2) P = ih(e.map((V) => [B(V[0]), I(V[1])]));
    else for (let V = 1; V < e.length; V++) P += r.smooth ? "L" + B(e[V][0]).toFixed(1) + " " + I(e[V][1]).toFixed(1) : "H" + B(e[V][0]).toFixed(1) + "V" + I(e[V][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + u), t.setAttribute("aria-label", a), t.innerHTML = sh(f, x, C) + '<path d="' + P + "V" + C + "H" + B(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + P + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + He.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (u - 4) + '">24 h ago</text><text x="' + f + '" y="' + (u - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + I(r.guide).toFixed(1) + '" y2="' + I(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (I(r.guide) < 20 ? I(r.guide) + 14 : I(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + G(r.guideWord || "") + "</text>" : "");
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
      if (no(t) && Number.isFinite(Number((l = k[t]) == null ? void 0 : l.state))) p = pp(t).map(([d, f]) => [d, String(f)]);
      else try {
        const d = await Y({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((d == null ? void 0 : d[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      p.length || (p = (li || []).filter((d) => d.entity_id === t).map((d) => [d.when * 1e3, String(d.state)])), e = { at: Date.now(), pts: p }, cp.set(t, e);
    }
    const a = k[t], r = e.pts.slice().sort((p, d) => p[0] - d[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function dp(t, e, a) {
    const r = await xm(t);
    if (!e.isConnected) return;
    const l = r.map(([H, U]) => [H, Number(U)]);
    if (r.length > 1 && l.every(([, H]) => Number.isFinite(H))) {
      tc(e, l, xt(t) + ", last 24 hours");
      return;
    }
    const p = Date.now(), d = p - 864e5, f = Math.max(200, e.clientWidth || 360), u = 62, x = (H) => Math.max(0, Math.min(f, (H - d) / 864e5 * f)), C = [];
    let M = null;
    r.forEach(([H, U]) => {
      const nt = wm(t, U);
      nt && M == null ? M = Math.max(H, d) : !nt && M != null && (C.push([M, Math.max(H, d)]), M = null);
    }), M != null && C.push([M, p]);
    const E = tl(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", B = vm(t), I = "tfDayClip" + ++ym, P = C.map(([H, U]) => B + (U >= p - 1e3 && H <= d + 1e3 ? " all day" : U >= p - 1e3 ? " since " + po(H) : H <= d + 1e3 ? " until " + po(U) : " " + po(H) + "–" + po(U)));
    let V = "", D = -1 / 0;
    C.forEach(([H], U) => {
      const nt = P[U].length * 5.4, Ct = Math.min(x(H), f - nt);
      Ct < D + 8 || (V += '<text x="' + Ct.toFixed(1) + '" y="10">' + G(P[U]) + "</text>", D = Ct + nt);
    });
    let J = '<text x="' + f + '" y="' + (u - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((H) => {
      let U = new Date(p).setHours(H, 0, 0, 0);
      U > p && (U -= 864e5), x(U) > 8 && x(U) < f - 34 && (J += '<text x="' + x(U).toFixed(1) + '" y="' + (u - 2) + '" text-anchor="middle">' + String(H).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + u), e.setAttribute("aria-label", xt(t) + ", last 24 hours: " + (P.length ? P.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + I + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + V + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + I + ')">' + C.map(([H, U]) => '<rect x="' + x(H).toFixed(1) + '" y="18" width="' + Math.max(2, x(U) - x(H)).toFixed(1) + '" height="26" fill="' + E + '"/>').join("") + "</g>" + (a && a >= d ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + J;
  }
  function pp(t) {
    var r;
    const e = Number((r = k[t]) == null ? void 0 : r.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const l = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), p = Math.max(1, a - l);
      return [...Array(49)].map((d, f) => l + p * f / 48).map((d) => [d, Math.round(e * Math.pow((d - l) / p, 1.3) * 100) / 100]);
    }
    if (no(t) && t.endsWith("_moisture")) return [...Array(48)].map((l, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - p / 48, 1.2)) * 10) / 10]);
    if (no(t) && t.endsWith("_light")) {
      const l = (d) => {
        const f = new Date(d).getHours() + new Date(d).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, p = (d) => 0.8 + 0.2 * l(d);
      return [...Array(48)].map((d, f) => a - (48 - f) * 30 * 60 * 1e3).map((d) => [d, Math.round(e * p(d) / p(a))]);
    }
    return [...Array(48)].map((l, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(p / 6)) * 10) / 10]);
  }
  async function up(t, e, a = {}) {
    var I, P;
    let r = wt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Ap() };
    else if (no(t)) r = { at: Date.now(), points: pp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const V = new Date(Date.now() - 864e5).toISOString(), D = await Y({ type: "history/history_during_period", start_time: V, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), J = ((D == null ? void 0 : D[t]) || []).map((H) => [H.lu != null ? H.lu * 1e3 : Date.parse(H.last_updated || H.last_changed), Number(H.s ?? H.state)]).filter(([H, U]) => Number.isFinite(H) && Number.isFinite(U));
        r = { at: Date.now(), points: J };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      wt.set(t, r);
    }
    const l = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const p = k[t], d = ((I = p == null ? void 0 : p.attributes) == null ? void 0 : I.unit_of_measurement) || "", f = r.points.slice(), u = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(u) && !t.endsWith("_solar_power") && f.push([Date.now(), u]), f.length < 2) {
      l.setAttribute("aria-label", xt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = f.map((V) => V[1]), C = Math.min(...x), M = Math.max(...x), E = (V) => V.toLocaleString(void 0, { maximumFractionDigits: Math.abs(V) >= 100 ? 0 : 1 }), B = ((P = p == null ? void 0 : p.attributes) == null ? void 0 : P.state_class) === "total_increasing";
    tc(l, f, xt(t) + ", last 24 hours: " + (B ? "+" + E(x[x.length - 1] - x[0]) : C === M ? E(C) : E(C) + " to " + E(M)) + (d ? " " + d : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
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
    return t !== "light" || typeof r != "string" || !ho[r] || !Bo(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((l = k[r]) == null ? void 0 : l.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: ho[r] }];
  }
  function Ge(t, e, a, r) {
    let l = { entity_id: a, ...r || {} };
    return [e, l] = fp(t, e, l), t === "cover" && km(e, l), En[a] = (En[a] || 0) + 1, We.set(Hu, JSON.stringify(En)), Ni.call(t, e, l) ? Promise.resolve() : Promise.resolve(X(t, e, l));
  }
  function ec(t) {
    const [e, a, r, l] = t.split("|");
    Ge(e, a, r, l ? JSON.parse(l) : null).catch(() => {
    });
  }
  function vi(t, e) {
    Wt.set("pos|" + t, e), ma("pos|" + t), ka.delete(t), wo = wo.map(() => ""), [S, _t].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((l) => br(l, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (j == null ? void 0 : j.id) === t) {
      const r = _t.querySelector(".tfMoreState"), l = _t.querySelector(".tfMoreSub");
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
    (P = t.setPointerCapture) == null || P.call(t, e.pointerId), ne.add("pos|" + a), E("pos|" + a);
    const r = (V) => {
      const D = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (V.clientX - D.left) / D.width * 100));
    }, l = r(e), p = e.clientX;
    let d = !1, f = Rn(a), u = l, x = 0;
    const C = () => {
      f = Math.abs(u - f) < 0.2 ? u : f + (u - f) * 0.14, vi(a, f), x = requestAnimationFrame(C);
    }, M = () => {
      d || (d = !0, t.classList.add("fine"), x = requestAnimationFrame(C));
    }, E = setTimeout(M, 350), B = (V) => {
      u = r(V), Math.abs(V.clientX - p) > 6 && (clearTimeout(E), M());
    }, I = () => {
      clearTimeout(E), cancelAnimationFrame(x), t.removeEventListener("pointermove", B), t.removeEventListener("pointerup", I), t.removeEventListener("pointercancel", I), t.classList.remove("fine"), ne.delete("pos|" + a), vi(a, d ? Math.round(f) : (Math.min(3, Math.floor(l / 25)) + 1) * 25), yi("pos", a);
    };
    t.addEventListener("pointermove", B), t.addEventListener("pointerup", I), t.addEventListener("pointercancel", I);
  }
  function mp(t) {
    var e;
    ot = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var l;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (l = a.querySelector(".panelExpanded")) == null || l.toggleAttribute("inert", !r);
    }), ka.set("areas", mt(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => pl(!0), 340);
  }
  function gp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === ot) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !je() ? a.cloneNode(!0) : null, l = At().map((x) => x.id), p = l.indexOf(t) > l.indexOf(ot) ? 1 : -1;
    ot = t;
    const d = mt(e.style.order || 1);
    ka.set("areas", d), $d(e, d);
    const f = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), u = f == null ? void 0 : f.querySelector(":scope>.tfRoomTile");
    !f || je() || (f.style.setProperty("--dir", p), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), f.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(ln), ln = setTimeout(() => {
      ln = 0, Ta && Pe();
    }, 340)), u && (u.classList.add("tfAreaLand"), u.addEventListener("animationend", () => u.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const _m = 40;
  function Cm(t) {
    var f, u;
    if (t.pointerType === "mouse" || !t.isPrimary || !((u = (f = t.target).closest) != null && u.call(f, ".tfAreaStage")) || !dd.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let l = null;
    const p = (x) => {
      x.pointerId === r && !l && Math.hypot(x.clientX - e, x.clientY - a) >= Tn && (l = Math.abs(x.clientX - e) > Math.abs(x.clientY - a) ? "x" : "y");
    }, d = (x) => {
      if (x.pointerId !== r) return;
      removeEventListener("pointermove", p, !0), removeEventListener("pointerup", d, !0), removeEventListener("pointercancel", d, !0);
      const C = x.clientX - e;
      if (x.type !== "pointerup" || l !== "x" || Math.abs(C) < _m) return;
      const M = (I) => {
        I.stopPropagation(), I.preventDefault();
      };
      o.addEventListener("click", M, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", M, !0), 400);
      const E = At(), B = E[E.findIndex((I) => I.id === ot) + (C < 0 ? 1 : -1)];
      B && gp(B.id);
    };
    addEventListener("pointermove", p, !0), addEventListener("pointerup", d, !0), addEventListener("pointercancel", d, !0);
  }
  const fs = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = dn(t);
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
      const [a, r] = dn(t);
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
      const [C, M] = t.querySelectorAll("span");
      C.classList.toggle("lit", r > 0.08), M.classList.toggle("lit", r > 0.92), ka.delete(a), wo = wo.map(() => ""), op(a).forEach((E) => E.update(ds(a)));
    } else if (t.dataset.axis === "y")
      if (d) d.style.height = p;
      else {
        let C = t.querySelector("b");
        C || (C = document.createElement("b"), t.appendChild(C)), C.style.top = Math.round((1 - r) * 1e3) / 10 + "%";
      }
    else if (d) d.style.width = p;
    else {
      let C = t.querySelector("b");
      C || (C = document.createElement("b"), t.appendChild(C)), C.style.left = p;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const f = t.querySelector(".tfBarVal");
    f && (f.textContent = fs[e].text(a, l));
    const u = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    u && (u.textContent = fs[e].text(a, l));
  }
  function yi(t, e) {
    const a = t + "|" + e, r = Wt.get(a), l = la.get(a), [p, d, f] = fs[t].send(e, r), u = () => setTimeout(() => {
      la.get(a) === l && Wt.delete(a), Pe();
    }, 1500);
    Ge(p, d, e, f).then(u, u);
  }
  function bp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (ca && !e.target.closest(".tfBoardMenu,[data-board-more]") && go(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ca == null ? void 0 : ca.key) === a.dataset.boardMore ? go(!0) : ff(a.dataset.boardMore, a);
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
          j = j.back, Jl(), (r = _t.querySelector('.tfMore [data-more="' + CSS.escape(l) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? us("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([l, p, d, f]) => Ge(l, p, d, f).catch(() => {
        })) : a.dataset.more ? us(a.dataset.more, a) : a.hasAttribute("data-more-close") ? hs() : a.dataset.morePage ? ps(a.hasAttribute("data-more-toggle") && ((j == null ? void 0 : j.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? Wc(a.dataset.path) : a.dataset.go ? Wd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Nl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && mp(a);
    }), t.addEventListener("keydown", (e) => {
      var r, l, p, d, f, u, x;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), us(a.dataset.more, a)), (l = a.dataset) != null && l.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Zc(a.dataset.energyPick)), (p = a.classList) != null && p.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), mp(a)), (d = a.dataset) != null && d.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), jc(a.dataset.summary, a)), e.key === "Escape" && ca && t === S) {
        e.preventDefault(), go(!0);
        return;
      }
      if (e.key === "Escape" && ba && t === S) {
        e.preventDefault(), bl(!1), (f = s("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && pt && t === S && (e.preventDefault(), Nl()), (u = a.dataset) != null && u.blocks) {
        const C = a.dataset.blocks, M = Mm(e, Math.round(Rn(C)));
        if (M == null) return;
        e.preventDefault(), vi(C, M), clearTimeout(qr.get(C)), qr.set(C, setTimeout(() => yi("pos", C), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [C, M] = a.dataset.drag.split("|"), E = Number(a.getAttribute("aria-valuenow")) / 100, B = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, E + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        ms(a, C, M, B), yi(C, M);
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
      const [l, p] = r.dataset.drag.split("|"), d = l === "bright" && !Bo(p), f = e.pointerType !== "mouse";
      if (d && !f) {
        ec(Ht("light", "toggle", p));
        return;
      }
      const u = l === "bright" && ((Nt = k[p]) == null ? void 0 : Nt.state) !== "on", x = l + "|" + p;
      ne.add(x), ma(x);
      const C = l === "tilt" ? 4 : 0, M = r.dataset.axis === "y", E = () => M ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - C * 2, B = (Pt) => {
        const ht = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, M ? 1 - (Pt.clientY - ht.top) / E() : (Pt.clientX - ht.left - C) / E()));
      };
      let I = f ? "waiting" : u ? "pressed" : "dragging", P = 0;
      const V = e.clientX, D = e.clientY, J = (Pt, ht) => Math.hypot(Pt.clientX - V, Pt.clientY - D) > ht, H = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), H()), I === "dragging" && ms(r, l, p, B(e));
      const U = () => {
        var Pt, ht;
        I = "sliding", Vt = r, r.classList.add("held"), H(), (Pt = navigator.userActivation) != null && Pt.hasBeenActive && ((ht = navigator.vibrate) == null || ht.call(navigator, 8)), P = u ? (ho[p] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, nt = (Pt) => {
        I === "waiting" && J(Pt, Tn) ? !d && (M ? Math.abs(Pt.clientY - D) > Math.abs(Pt.clientX - V) : Math.abs(Pt.clientX - V) > Math.abs(Pt.clientY - D)) ? U() : I = "gone" : I === "pressed" && J(Pt, 4) && (I = "dragging"), I === "sliding" ? ms(r, l, p, Math.max(0, Math.min(1, P + (M ? D - Pt.clientY : Pt.clientX - V) / E()))) : I === "dragging" && ms(r, l, p, B(Pt));
      }, Ct = (Pt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((ht, Mt) => r.removeEventListener(ht, Mt ? Ct : nt)), r.classList.remove("held"), Vt === r && (Vt = null), ne.delete(x), I === "sliding" || I === "dragging" ? yi(l, p) : Pt.type === "pointerup" && d ? ec(Ht("light", "toggle", p)) : Pt.type === "pointerup" && u && (I === "waiting" || I === "pressed") && Ge("light", "turn_on", p).catch(() => {
        }), Ta && I !== "sliding" && I !== "dragging" && Pe();
      };
      r.addEventListener("pointermove", nt), r.addEventListener("pointerup", Ct), r.addEventListener("pointercancel", Ct);
    }), t.addEventListener("touchmove", (e) => {
      Vt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Bh(), bp(S), S.addEventListener("pointerdown", Cm), bp(_t), _t.addEventListener("click", (t) => {
    t.target === _t && hs();
  }), (wp = o.getElementById("homeNav")) == null || wp.addEventListener("click", () => {
    pt && Nl();
  }), (vp = o.querySelector(".bottomNav")) == null || vp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ts + "</button>"), (yp = s("dashEditNav")) == null || yp.addEventListener("click", () => v ? El(!$o) : bl(!ba)), S.addEventListener("pointerdown", Hf), S.addEventListener("pointerdown", pf), S.addEventListener("click", (t) => {
    v && $o && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && gd(t.target);
  }, !0), new ResizeObserver(() => {
    h.classList.contains("tfDash") && nl() !== al ? Pe() : ts();
  }).observe(S), window.addEventListener("resize", ts, { passive: !0 }), _t.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), j != null && j.details ? $l(!1) : hs();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [..._t.querySelectorAll(".tfMoreDots [data-more-page]")], l = r.findIndex((d) => d.getAttribute("aria-selected") === "true"), p = r[Math.max(0, Math.min(r.length - 1, l + (t.key === "ArrowRight" ? 1 : -1)))];
      p && ps(Number(p.dataset.morePage), p.dataset.moreMode ?? null, !0);
    }
  })), dt(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([r]) => no(r))), ...t || {} };
      for (const r in k) r.startsWith("light.") && k[r].state === "on" && Bo(r) && On(r, $a(k[r]));
      e ? Oa() : Pe();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Bn = !0, De == null || De.destroy(), De = null, Ee == null || Ee.forEach((t) => t.destroy()), Ee = null;
    },
    resume() {
      Bn = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Ea.isConnected && jr(Ea.style.order), Ao());
    }
  };
}
const jg = "0.20.3";
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
