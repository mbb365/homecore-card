var Bm = Object.defineProperty;
var Pm = (o, n, i) => n in o ? Bm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[n] = i;
var Cp = (o, n, i) => Pm(o, typeof n != "symbol" ? n + "" : n, i);
const Rm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Hm = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;background:none;border-radius:0;--face:var(--card);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}#app .tfMorePage[data-mode^=phys]>.tfMoreSpace:not(.tfPhys),#app .tfMorePage>.tfMoreSpace.tfPhys{display:none!important}#app .tfMorePage[data-mode=phys]>.tfMoreSpace.tfPhys[data-pv=phys],#app .tfMorePage[data-mode=physon]>.tfMoreSpace.tfPhys[data-pv=physon]{display:block!important}#app .tfPhysPreview{position:fixed;left:50%;bottom:96px;z-index:30;width:min(520px,calc(100vw - 32px));box-sizing:border-box;padding:10px;border-radius:34px;background:var(--card);border:.4px solid var(--line);box-shadow:0 18px 48px #00000059;transform:translate(-50%,16px);opacity:0;transition:opacity .2s ease,transform .26s cubic-bezier(.34,1.3,.64,1)}#app .tfPhysPreview.in{opacity:1;transform:translate(-50%)}#app .tfPhysPreview[hidden]{display:none}.tfPhysPreviewHead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 4px 10px 14px}.tfPhysPreviewRow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;transition:opacity .2s ease,filter .2s ease}.tfPhysPreviewCell{display:flex;flex-direction:column;gap:6px;min-width:0}.tfPhysPreviewCell>span{font-size:12px;line-height:16px;color:var(--muted);text-align:center}#app .tfPhysPreview .tfMoreSpace.tfPhys{flex:none;height:auto;min-height:0;aspect-ratio:1/1;width:100%;border-radius:16px}.tfPhysPreviewNote{display:none;padding:10px 14px 4px;font-size:13px;line-height:18px;color:var(--muted)}#app .tfPhysPreview.off .tfPhysPreviewRow{opacity:.3;filter:grayscale(1);pointer-events:none}#app .tfPhysPreview.off .tfPhysPreviewNote{display:block}@media (prefers-reduced-motion:reduce){#app .tfPhysPreview{transition:none}}#app .tfPhysPreview.placed{bottom:auto;transform:translateY(16px)}#app .tfPhysPreview.placed.in{transform:none}#app .tfPhysPreview.dragging{transition:none;box-shadow:0 24px 60px #00000073}.tfPhysPreviewHead{cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhysPreview.dragging .tfPhysPreviewHead{cursor:grabbing}.tfPhysPreviewHead .activityTitle{flex:1}.tfPhysGrip{width:10px;height:16px;flex:none;margin-left:-4px;background:radial-gradient(circle,var(--muted) 1.3px,transparent 1.6px) 0 0/5px 5.33px}.tfPhysGrid{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px}.tfPhysGrid.two{grid-template-rows:1fr}.tfPhysCell{position:relative;min-width:0;min-height:0}.tfPhysCell.bright{grid-row:1/-1}.tfPhys .iso .tint{stroke-width:2.4}.tfPhys .iso .swatch{stroke:currentColor;stroke-width:1}.tfPhysLightDial{position:absolute;top:0;right:0;bottom:0;left:0}.tfPhysLightDial>.tfPhysCell.dial{position:absolute;top:0;right:0;bottom:0;left:0}.tfPhysLightDial>.tfPhysCell.mini{position:absolute;right:0;bottom:0;width:27%;aspect-ratio:1/1;min-width:84px}`, Nm = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Om = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Im = `<main id="app"><div class="shell">
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
`, Ap = "homecore-theme", Fm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, qm = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Fm[o] || "") + "</svg>", Lp = {
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
function Wm(o, { setLight: n, fullscreenSupported: i, toggleFullscreen: l }) {
  const f = (K) => o.getElementById(K), b = f("app");
  o.querySelectorAll("[data-icon]").forEach((K) => {
    K.innerHTML = qm(K.dataset.icon);
  });
  const g = { home: f("homeView"), settings: f("settingsView") }, v = f("homeNav"), D = f("settingsNav");
  function L(K) {
    Object.entries(g).forEach(([tt, z]) => z.classList.toggle("active", tt === K)), v.classList.toggle("active", K === "home"), D.classList.toggle("active", K === "settings");
  }
  v.addEventListener("click", () => L("home")), D.addEventListener("click", () => L("settings")), f("settingsBack").addEventListener("click", () => L("home"));
  function _(K) {
    const tt = K === "light";
    o.querySelectorAll(".themeBtn").forEach((z) => z.classList.toggle("active", z.dataset.theme === K)), b.classList.toggle("light", tt), n(tt);
  }
  _(Lp.get(Ap) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((K) => K.addEventListener("click", () => {
    _(K.dataset.theme), Lp.set(Ap, K.dataset.theme);
  }));
  const P = f("tvNav");
  i || (P.hidden = !0), P.addEventListener("click", () => l());
  let O;
  function k(K) {
    const tt = f("toast");
    tt && (tt.textContent = K, tt.classList.add("show"), clearTimeout(O), O = setTimeout(() => tt.classList.remove("show"), 2600));
  }
  return { showView: L, toast: k };
}
const Vm = /* @__PURE__ */ new Set(["roaming", "test_area"]), jm = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Qn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ae = "made_up_", ao = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Ae);
}, Zn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function qc(o) {
  const n = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((n - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function zm(o) {
  const n = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let l = +n; l < +o; l += 10 * 60 * 1e3) i += qc(new Date(l)) / 6;
  return i;
}
function Tp(o = /* @__PURE__ */ new Date()) {
  const n = [];
  for (let i = 0; i <= 96; i++) {
    const l = +o - (96 - i) * 15 * 60 * 1e3;
    n.push([l, qc(new Date(l))]);
  }
  return n;
}
function Gm({ onChange: o }) {
  const n = {}, i = {}, l = (z, N, et, it) => {
    n[z] = { entity_id: z, state: et, attributes: it, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = N;
  }, f = (z, N, et) => {
    const it = n[z], pt = N ?? it.state;
    n[z] = { ...it, state: pt, attributes: { ...it.attributes, ...et }, last_changed: pt === it.state ? it.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, N, et, it) => l("binary_sensor." + Ae + (z ? z + "_" : "") + Zn(N), z, it ? "on" : "off", { friendly_name: N, device_class: et });
  Object.entries(jm).forEach(([z, N]) => {
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
      l("fan." + Ae + z + "_" + Zn(et), z, "on", it != null ? { friendly_name: et, percentage: it, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: et, supported_features: 48 });
    }
    if (N.waterHeater && l("water_heater." + Ae + z, z, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [et, it] = N.valvePos;
      l("valve." + Ae + z + "_" + Zn(et), z, it == null || it ? "open" : "closed", { friendly_name: et, device_class: "water", supported_features: 3 | (it == null ? 0 : 12), ...it == null ? {} : { current_position: it } });
    }
    if (N.garage && l("cover." + Ae + z + "_" + Zn(N.garage), z, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [et, it, pt, Q] = N.cover;
      l("cover." + Ae + z + "_" + Zn(et), z, pt ? "open" : "closed", { friendly_name: et, device_class: it, current_position: pt, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (N.humidifier && l("humidifier." + Ae + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (l("sensor." + Ae + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), l("sensor." + Ae + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && l("valve." + Ae + z + "_" + Zn(N.valve), z, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && b(z, N.door, "door", N.doorOpen), N.window && b(z, N.window, "window", !1), N.motion && b(z, N.motion, "motion", !1), N.plant) {
      const [et, it, pt, Q, I] = N.plant, $ = Ae + Zn(et), ut = (Rt, ct, S, Ft, Y) => l("sensor." + $ + "_" + Rt, z, String(S), { friendly_name: ct, device_class: Y, state_class: "measurement", unit_of_measurement: Ft, plant_low: S < Qn[Rt][0], plant_high: S > Qn[Rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Rt] });
      ut("moisture", "Moisture", it, "%", "moisture"), ut("light", "Light", pt, "lx", "illuminance"), ut("temperature", "Temperature", Q, "°C", "temperature"), ut("fertility", "Fertility", I, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: it, light: pt, temperature: Q, fertility: I }).filter(([Rt, ct]) => ct < Qn[Rt][0] || ct > Qn[Rt][1]).map(([Rt, ct]) => Rt + (ct < Qn[Rt][0] ? " low" : " high"));
      l("plant." + $, z, xt.length ? "problem" : "ok", { friendly_name: et, moisture: it, brightness: pt, temperature: Q, conductivity: I, problem: xt.join(", ") || "none" });
    }
  }), l("alarm_control_panel." + Ae + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), l("sensor." + Ae + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let D = null;
  function L() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((N) => {
      N.endsWith("_solar_power") && (n[N] = { ...n[N], state: qc(z).toFixed(2) }), N.endsWith("_solar_today") && (n[N] = { ...n[N], state: zm(z).toFixed(1) });
    });
  }
  L();
  let _ = 0;
  function P() {
    let z = !1;
    const N = ++_ % 10 === 0, et = (Q, I, $) => {
      f(Q, I, $), z = !0;
    };
    Object.entries(g).forEach(([Q, I]) => {
      const $ = n[Q].attributes.current_position, ut = $ < I ? Math.min(I, $ + 10) : Math.max(I, $ - 10);
      ut === I && delete g[Q], et(Q, ut === I ? ut === 0 ? "closed" : "open" : I > $ ? "opening" : "closing", { current_position: ut });
    }), Object.entries(v).forEach(([Q, I]) => {
      const $ = n[Q].attributes.current_tilt_position, ut = $ < I ? Math.min(I, $ + 25) : Math.max(I, $ - 25);
      ut === I && delete v[Q], et(Q, null, { current_tilt_position: ut });
    }), Object.keys(n).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const I = n[Q], $ = I.attributes, ut = $.current_temperature, xt = (I.state === "heat" || I.state === "auto") && ut < $.temperature - 0.05, Rt = (I.state === "cool" || I.state === "auto") && ut > $.temperature + 0.05, ct = I.state === "off" ? "off" : xt ? "heating" : Rt ? "cooling" : "idle", S = N ? Math.round((ut + (xt ? 0.1 : Rt ? -0.1 : 0)) * 10) / 10 : ut;
      (S !== ut || ct !== $.hvac_action) && et(Q, null, { current_temperature: S, hvac_action: ct });
    }), Object.keys(n).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const I = n[Q], $ = I.attributes, ut = $.current_humidity, xt = I.state === "on" && ut < $.humidity, Rt = xt && N ? ut + 1 : ut, ct = I.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (Rt !== ut || ct !== $.action) {
        et(Q, null, { current_humidity: Rt, action: ct });
        const S = "sensor." + Ae + i[Q] + "_humidity";
        n[S] && et(S, String(Rt));
      }
    });
    const it = n["vacuum." + Ae + "robot"], pt = it.attributes;
    it.state === "cleaning" && N && et(it.entity_id, null, { battery_level: Math.max(5, pt.battery_level - 1) }), it.state === "returning" && et(it.entity_id, "docked", {}), it.state === "docked" && pt.battery_level < 100 && et(it.entity_id, null, { battery_level: Math.min(100, pt.battery_level + 2) }), D && Date.now() - D.at > 5e3 && (et("alarm_control_panel." + Ae + "house", "armed_" + D.mode, {}), D = null), z && o();
  }
  const O = setInterval(P, 1e3), k = setInterval(() => {
    L(), o();
  }, 60 * 1e3);
  function K(z, N, et) {
    const it = et == null ? void 0 : et.entity_id;
    if (!n[it]) return !1;
    const pt = n[it], Q = pt.attributes, I = ($, ut) => f(it, $, ut);
    if (z === "climate" && (N === "set_temperature" && et.temperature != null && I(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, et.temperature)) }), N === "set_hvac_mode" && I(et.hvac_mode, et.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && I(pt.state === "off" ? "heat" : "off", pt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && et.target_temp_low != null && I(null, { target_temp_low: et.target_temp_low, target_temp_high: et.target_temp_high }), N === "set_fan_mode" && I(null, { fan_mode: et.fan_mode }), N === "set_swing_mode" && I(null, { swing_mode: et.swing_mode }), N === "set_preset_mode" && I(null, { preset_mode: et.preset_mode }), N === "set_humidity" && I(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, et.humidity)) })), z === "fan" && (N === "set_percentage" && I(et.percentage > 0 ? "on" : "off", { percentage: et.percentage }), N === "oscillate" && I(null, { oscillating: et.oscillating }), N === "set_direction" && I(null, { direction: et.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && I(N === "turn_on" || N === "toggle" && pt.state !== "on" ? "on" : "off")), z === "water_heater" && (N === "set_temperature" && I(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, et.temperature)) }), N === "set_operation_mode" && I(et.operation_mode, { operation_mode: et.operation_mode }), N === "set_away_mode" && I(null, { away_mode: et.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const $ = N === "turn_on" || N === "toggle" && pt.state === "off";
      I($ ? "eco" : "off", { operation_mode: $ ? "eco" : "off" });
    }
    if (z === "cover") {
      const $ = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? et.position : N === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete g[it], delete v[it], I(Q.current_position === 0 ? "closed" : "open")), $ != null && Q.current_position == null ? I($ > 0 ? "open" : "closed") : $ != null && $ !== Q.current_position && (g[it] = $, I($ > Q.current_position ? "opening" : "closing"));
      const ut = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? et.tilt_position : null;
      N === "stop_cover_tilt" && delete v[it], ut != null && Q.current_tilt_position != null && ut !== Q.current_tilt_position && (v[it] = ut);
    }
    if (z === "humidifier" && (N === "set_humidity" && I(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, et.humidity)) }), N === "set_mode" && I(null, { mode: et.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const $ = N === "turn_on" || N === "toggle" && pt.state !== "on";
      I($ ? "on" : "off", { action: $ ? "idle" : "off" });
    }
    if (z === "vacuum" && (N === "start" && I("cleaning", { rooms: et.rooms || Q.rooms }), N === "pause" && I("paused"), N === "return_to_base" && I("returning", { rooms: [] }), N === "locate" && I(null, { located: Date.now() }), N === "set_rooms" && I(null, { rooms: et.rooms })), z === "valve") {
      const $ = N === "open_valve" || N === "toggle" && pt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && I($ ? "open" : "closed", Q.current_position != null ? { current_position: $ ? 100 : 0 } : {}), N === "set_valve_position" && I(et.position > 0 ? "open" : "closed", { current_position: et.position });
    }
    if (z === "alarm_control_panel") {
      N === "alarm_disarm" && (D = null, I("disarmed", { changed_by: "Matt" }));
      const $ = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      $ && (D = { mode: $, at: Date.now() }, I("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function tt(z, { madeUp: N = !0 } = {}) {
    const et = N ? n : {}, it = (z == null ? void 0 : z.states) || {}, pt = (z == null ? void 0 : z.entities) || {}, Q = (z == null ? void 0 : z.devices) || {}, I = (ot) => {
      var q;
      const lt = pt[ot];
      return lt && (lt.area_id || lt.device_id && ((q = Q[lt.device_id]) == null ? void 0 : q.area_id)) || null;
    }, $ = (ot) => {
      const lt = pt[ot];
      return it[ot] && it[ot].state !== "unavailable" && !(lt != null && lt.hidden) && !(lt != null && lt.entity_category);
    }, ut = {};
    Object.keys(it).forEach((ot) => {
      const lt = I(ot);
      lt && $(ot) && (ut[lt] || (ut[lt] = [])).push(ot);
    });
    const xt = { ...it, ...et }, Rt = (ot) => {
      var lt, q;
      return (q = (lt = xt[ot]) == null ? void 0 : lt.attributes) == null ? void 0 : q.device_class;
    }, ct = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(it).filter((ot) => ot.startsWith("vacuum.") && $(ot)), Ft = Object.values((z == null ? void 0 : z.areas) || {}).filter((ot) => !Vm.has(ot.area_id)).map((ot) => {
      const lt = ot.area_id, q = ut[lt] || [], gt = (Wt) => q.filter((ge) => ge.startsWith(Wt + ".")), Ct = (Wt) => gt("sensor").filter((ge) => Rt(ge) === Wt), Vt = (Wt) => Object.keys(et).filter((ge) => i[ge] === lt && Wt(ge)), ne = (Wt, ge) => Wt.length ? Wt : Vt(ge), sa = ne(Ct("temperature"), (Wt) => Wt.endsWith(lt + "_temperature")), fa = ne(Ct("humidity"), (Wt) => Wt.endsWith(lt + "_humidity")), So = Ct("power").filter((Wt) => /^(W|kW)$/.test(xt[Wt].attributes.unit_of_measurement || "")), La = gt("binary_sensor").filter((Wt) => Rt(Wt) === "moisture"), rn = ne(gt("plant"), (Wt) => Wt.startsWith("plant.")).map((Wt) => ({ id: Wt, readings: Vt((ge) => ge.startsWith("sensor." + Wt.split(".")[1] + "_")) })), Cn = [...gt("binary_sensor").filter((Wt) => ct.includes(Rt(Wt))), ...Vt((Wt) => Wt.startsWith("binary_sensor."))];
      return {
        id: lt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...sa.slice(0, 1), ...fa.slice(0, 1), ...La],
        power: So.length ? So.reduce((Wt, ge) => Wt + Number(xt[ge].state) * (xt[ge].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: gt("switch"),
        lights: gt("light"),
        actions: [
          ...gt("light"),
          ...ne(gt("climate"), (Wt) => Wt.startsWith("climate.")),
          ...ne(gt("cover"), (Wt) => Wt.startsWith("cover.")),
          ...ne(gt("humidifier"), (Wt) => Wt.startsWith("humidifier.")),
          ...ne(gt("valve"), (Wt) => Wt.startsWith("valve.")),
          ...gt("media_player"),
          ...gt("vacuum"),
          ...S.length ? [] : Vt((Wt) => Wt.startsWith("vacuum.")),
          ...gt("fan"),
          ...Vt((Wt) => Wt.startsWith("fan.")),
          ...gt("water_heater"),
          ...Vt((Wt) => Wt.startsWith("water_heater."))
        ],
        solar: Vt((Wt) => Wt.includes("_solar_")),
        plants: rn,
        openings: Cn,
        alerts: [...La, ...Cn].filter((Wt) => {
          var ge;
          return ((ge = xt[Wt]) == null ? void 0 : ge.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), Y = Object.keys(it).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && it[ot].state !== "unavailable") || null, nt = (ot) => Object.keys(it).filter((lt) => lt.startsWith(ot + ".") && $(lt)), st = nt("alarm_control_panel"), mt = S.length ? S : N ? ["vacuum." + Ae + "robot"] : [];
    return {
      states: xt,
      rooms: Ft,
      grid: Y,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => et[ot] ? i[ot] : I(ot),
      vacuums: mt,
      homeVacuums: mt.filter((ot) => !Ft.some((lt) => lt.actions.includes(ot))),
      security: {
        alarms: st.length ? st : N ? ["alarm_control_panel." + Ae + "house"] : [],
        locks: nt("lock"),
        openings: [...Object.keys(et).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Ae + "doorbell"] : []]
      }
    };
  }
  return { model: tt, call: K, stop() {
    clearInterval(O), clearInterval(k);
  } };
}
const Dp = (o) => +o.toFixed(2), Ep = (o) => o * Math.PI / 180, Di = (o, n, i, l) => [Dp(o + i * Math.cos(Ep(l))), Dp(n + i * Math.sin(Ep(l)))], Dr = (o, n, i, l, f) => {
  const [b, g] = Di(o, n, i, l), [v, D] = Di(o, n, i, f);
  return `M${b} ${g}A${i} ${i} 0 ${f - l > 180 ? 1 : 0} 1 ${v} ${D}`;
}, Xe = (o, n, i, l, f, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${l}" rx="${f}"${b}/>`, Aa = (o, n, i, l = "") => `<circle cx="${o}" cy="${n}" r="${i}"${l}/>`, wa = (o, n = "") => `<path d="${o}"${n}/>`, Ds = (o, n = 2.5) => wa(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), Kn = (o, n = 1.5) => wa(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), Xn = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), $m = (o, n, i, l = 0) => Array.from({ length: o }, (f, b) => {
  const g = l + 360 / o * b, [v, D] = Di(12, 12, n, g), [L, _] = Di(12, 12, i, g);
  return Ds(`M${v} ${D}L${L} ${_}`, 2.2);
}).join(""), Um = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", Ym = [
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
    c: Xn(Xe(8.2, 8.8, 2.2, 6.4, 1.1)) + Xn(Xe(13.6, 8.8, 2.2, 6.4, 1.1))
  },
  {
    id: "thermostat",
    name: "Thermostat",
    use: "climate, heating",
    colour: "#ff5722",
    s: Aa(12, 12, 9.6),
    c: wa(Dr(12, 12, 6.2, 135, 405)) + wa(`M12 12L${Di(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: Xe(9.2, 2.4, 5.6, 14, 2.8) + Aa(12, 17.4, 4.4),
    c: wa("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: Kn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: wa(Dr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => wa(Um, ` transform="rotate(${o} 12 12)"`)).join("") + Aa(12, 12, 2.6),
    c: Aa(12, 12, 3.6)
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
    s: Ds("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Xe(4, 10, 16, 11.6, 4.2),
    c: Xn(Aa(12, 14.9, 1.7)) + wa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Xe(5, 2.4, 14, 19.2, 3.6),
    c: Xn(Aa(15.2, 12.4, 1.5))
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
    s: Kn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Ds(Dr(12, 18.6, 8, 230, 310), 2.4) + Ds(Dr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: Aa(12, 7.2, 4.2) + Kn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Xe(2.6, 5.4, 13.4, 8.6, 3.4) + Kn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Xe(7.2, 14.6, 2.4, 4.2, 1.2) + Xe(3.4, 18.6, 10, 2.6, 1.3),
    c: Xn(Aa(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Xe(5, 2.4, 14, 19.2, 4.2),
    c: Aa(12, 14.6, 3.6) + Xn(Aa(12, 7.4, 1.5))
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
    s: Aa(12, 12, 9.6),
    c: wa("M5.6 8.6H18.4") + Aa(12, 14.4, 2.4)
  },
  {
    id: "energy",
    name: "Energy",
    use: "power, energy",
    colour: "#ffc107",
    s: Kn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: Aa(12, 12, 4.4) + $m(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: Kn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: wa("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Kn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: Xn(Xe(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Zm = 0;
function Km(o, n = 24, i = `hc${++Zm}`) {
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
}, ki = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Bc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, Xm = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Bp = {}, Va = (o, n, i) => {
  const l = o + n + i;
  return Bp[l] || (Bp[l] = Xm(Bc(o).map((f, b) => f + (Bc(n)[b] - f) * i)));
}, Pp = {}, ic = (o) => Pp[o] || (Pp[o] = Bc(o));
function zu(o, n) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || n ? "night" : "day");
}
function Jm(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [Va(n.clear[0], n.cloudy[0], 0.12), Va(n.clear[1], n.cloudy[1], 0.12)], n.storm = [Va(n.rain[0], "#000000", 0.22), Va(n.rain[1], "#000000", 0.22)], n;
}
const Pc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Rc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Hc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Qm(o, n = za) {
  const i = { ...za, ...n }, l = Jm(i), f = String(o).split("/"), b = l[f[0]] ? f[0] : "clear", g = f[1] === "night", v = l[b][g ? 1 : 0], D = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Pc.map(() => ({ o: 0 })),
    rain: Rc.map(() => ({ o: 0, dy: -16 })),
    snow: Hc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, L = (_) => Pc.map(() => ({ o: _ }));
  return b === "clear" ? g ? (D.moon.o = 1, D.stars = L(1)) : D.sun.o = 1 : b === "partly" ? (D.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (D.moon = { x: 34, y: 33, d: 48, o: 1 }, D.stars = L(0.7)) : D.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (D.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? D.moon = { x: 40, y: 36, d: 40, o: 0 } : D.sun = { x: 40, y: 36, r: 20, o: 0 }) : (D.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? D.moon = { x: 38, y: 28, d: 36, o: 0 } : D.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? D.snow = Hc.map(() => ({ o: 1, dy: 0 })) : D.rain = Rc.map((_, P) => ({ o: b === "storm" && P === 1 ? 0 : 1, dy: 0 })), b === "storm" && (D.bolt = { o: 1, dy: 0 })), D;
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
], Jn = (o, n) => (t0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, e0 = 0, Gu = 1, $u = 2, Uu = 3, Yu = 4, vo = 5, Ns = 6, Hr = 7, Zu = 8, Rp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), a0 = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], o0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), n0 = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function r0(o, { size: n = 90, px: i = 2, oneBit: l = !1, colors: f = za, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: D = !1 } = {}) {
  const L = { ...za, ...f }, _ = Math.sin, P = Math.PI * 2, O = Math.max(6, Math.round(n / i)), k = O / 90, K = D ? Math.floor(v / 100) * 100 : 0, tt = D ? _(P * K / 3600) : 0, z = D ? 1.8 * _(P * K / 6400) : 0, N = D ? 0.9 * _(P * K / 4100) : 0, et = D ? 0.8 * _(P * K / 5200) : 0, it = K / 3400 % 1, pt = D && o.bolt.o > 0.5 && (it < 0.04 || it > 0.08 && it < 0.11), Q = new Array(O * O), I = new Uint8Array(O * O), $ = (Y, nt, st, mt, ot) => {
    st == null || Y < 0 || nt < 0 || Y >= O || nt >= O || (mt >= 1 || mt > Jn(Y + 5, nt + 3)) && (Q[nt * O + Y] = st, I[nt * O + Y] = ot);
  }, ut = (Y, nt, st, mt) => {
    for (let ot = Math.max(0, Math.floor(nt - st) - 1); ot <= Math.min(O - 1, nt + st + 1); ot++) for (let lt = Math.max(0, Math.floor(Y - st) - 1); lt <= Math.min(O - 1, Y + st + 1); lt++) mt(lt, ot, lt + 0.5 - Y, ot + 0.5 - nt);
  }, xt = o.skyStops || [o.sky], Rt = o.skyT || 0;
  for (let Y = 0; Y < O; Y++) {
    const nt = o.night ? ki(1 - (Y + 0.5) / (O * 0.7)) * 0.85 : ki(((Y + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let st = 0; st < O; st++) {
      let mt = xt[0];
      if (xt.length > 1) {
        const ot = Rt * (xt.length - 1), lt = Math.min(xt.length - 2, Math.floor(ot));
        mt = ot - lt > Jn(st, Y) ? xt[lt + 1] : xt[lt];
      }
      nt > Jn(st + 2, Y + 5) && (mt = o.night ? Va(mt, "#000000", 0.28) : Va(mt, "#ffffff", 0.2)), Q[Y * O + st] = pt ? Va(mt, "#ffffff", 0.25) : mt;
    }
  }
  if (o.sun.o > 0.01) {
    const Y = o.sun.x * k, nt = o.sun.y * k, st = Math.max(1, o.sun.r * k);
    if (D) {
      const mt = st * (1.45 + 0.06 * tt), ot = Va(L.sun, "#ffffff", 0.55);
      if (ut(Y, nt, mt, (lt, q, gt, Ct) => {
        const Vt = Math.sqrt(gt * gt + Ct * Ct);
        Vt > st && Vt < mt && $(lt, q, ot, 0.26 * (1 - (Vt - st) / (mt - st)) * o.sun.o, e0);
      }), o.sun.o > 0.5) {
        const lt = Math.floor(K / 500) % 2, q = Math.max(1, st * 0.22);
        for (let gt = 0; gt < 8; gt++) if (gt % 2 === lt) for (let Ct = st + 1.5; Ct < st + 1.5 + q; Ct += 0.7) $(Math.floor(Y + Math.cos(gt * Math.PI / 4) * Ct), Math.floor(nt + Math.sin(gt * Math.PI / 4) * Ct), L.sun, o.sun.o, Zu);
      }
    }
    ut(Y, nt, st, (mt, ot, lt, q) => {
      if (lt * lt + q * q > st * st) return;
      const gt = ((lt * 0.643 + q * 0.766) / st + 1) / 2;
      $(mt, ot, ki((gt - 0.62) / 0.38) > Jn(mt, ot) ? L.sunEdge : L.sun, o.sun.o, Gu);
    });
  }
  if (Pc.forEach((Y, nt) => {
    const st = o.stars[nt].o;
    if (st < 0.01) return;
    const mt = Math.floor(Y[0] * k), ot = Math.floor(Y[1] * k), lt = D ? (Math.floor(K / 300) + nt * 3) % 6 : 0;
    if (lt === 5) return;
    const q = Math.round(Y[2] * k * (lt === 4 ? 0.3 : lt < 2 ? 1 : 0.6));
    $(mt, ot, L.star, st, Hr);
    for (let gt = 1; gt <= q; gt++) {
      const Ct = gt === q && q > 1 ? Va(L.star, o.sky, 0.5) : L.star;
      $(mt - gt, ot, Ct, st, Hr), $(mt + gt, ot, Ct, st, Hr), $(mt, ot - gt, Ct, st, Hr), $(mt, ot + gt, Ct, st, Hr);
    }
  }), o.moon.o > 0.01) {
    const Y = Math.max(1.5, o.moon.d * k * 0.37), nt = o.moon.x * k, st = o.moon.y * k + (D && et > 0.4 ? -1 : 0), mt = nt + 0.547 * Y, ot = st - 0.503 * Y, lt = 0.82 * Y, q = Va(L.moon, "#ffffff", 0.6);
    ut(nt, st, Y, (gt, Ct, Vt, ne) => {
      if (Vt * Vt + ne * ne > Y * Y) return;
      const sa = gt + 0.5 - mt, fa = Ct + 0.5 - ot;
      sa * sa + fa * fa <= lt * lt || $(gt, Ct, ki((ne + Y) / (2 * Y) * 1.1 - 0.1) > Jn(gt, Ct) ? L.moon : q, o.moon.o, $u);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * k)), S = Math.max(1, Math.round(5.87 * k * 0.5));
  Rc.forEach((Y, nt) => {
    const st = o.rain[nt];
    let mt = st.dy, ot = st.o;
    if (ot < 0.01) return;
    if (D) {
      const gt = (K / 950 + nt / 3) % 1;
      mt += -5 + gt * 14, ot *= gt < 0.18 ? gt / 0.18 : gt > 0.72 ? (1 - gt) / 0.28 : 1;
    }
    const lt = (Y[0] + 3 + z) * k, q = (Y[1] + mt) * k;
    for (let gt = 0; gt < ct; gt++) for (let Ct = 0; Ct < S; Ct++) $(Math.floor(lt - 0.208 * gt) + Ct, Math.floor(q) + gt, L.rain, ot, Yu);
  });
  const Ft = Math.max(0, Math.round(7.34 * k / 2.6));
  if (Hc.forEach((Y, nt) => {
    const st = o.snow[nt];
    let mt = st.dy, ot = 0, lt = st.o;
    if (lt < 0.01) return;
    if (D) {
      const Ct = (K / 3200 + nt / 5) % 1;
      mt += -6 + Ct * 14, ot = 1.5 * _(P * (Ct * 1.5 + nt / 5)), lt *= Ct < 0.2 ? Ct / 0.2 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1;
    }
    const q = Math.floor((Y[0] + 3.67 + ot + z) * k), gt = Math.floor((Y[1] + 3.67 + mt) * k);
    $(q, gt, L.snow, lt, vo);
    for (let Ct = 1; Ct <= Ft; Ct++)
      $(q - Ct, gt, L.snow, lt, vo), $(q + Ct, gt, L.snow, lt, vo), $(q, gt - Ct, L.snow, lt, vo), $(q, gt + Ct, L.snow, lt, vo), Ft > 1 && Ct < Ft && ($(q - Ct, gt - Ct, L.snow, lt, vo), $(q + Ct, gt - Ct, L.snow, lt, vo), $(q - Ct, gt + Ct, L.snow, lt, vo), $(q + Ct, gt + Ct, L.snow, lt, vo));
  }), o.bolt.o > 0.01)
    if (O >= 30) {
      const Y = 39 + z, nt = 50 + o.bolt.dy;
      for (let st = Math.floor(nt * k); st <= (nt + 28) * k; st++) for (let mt = Math.floor(Y * k); mt <= (Y + 13) * k; mt++)
        n0(o0, (mt + 0.5) / k - Y, (st + 0.5) / k - nt) && $(mt, st, L.sun, o.bolt.o, Ns);
    } else {
      const Y = O / 18, nt = 7, st = 10 + Math.round(o.bolt.dy * 0.2);
      a0.forEach((mt, ot) => mt.split("").forEach((lt, q) => {
        if (lt !== "#") return;
        const gt = Math.floor((nt + q) * Y), Ct = Math.floor((st + ot) * Y);
        for (let Vt = Ct; Vt < Math.max(Ct + 1, Math.floor((st + ot + 1) * Y)); Vt++) for (let ne = gt; ne < Math.max(gt + 1, Math.floor((nt + q + 1) * Y)); ne++) $(ne, Vt, L.sun, o.bolt.o, Ns);
      }));
    }
  if (o.cloud.o > 0.01) {
    const Y = Math.max(3, o.cloud.w * k), nt = Y * 0.6665, st = (o.cloud.x + z) * k - Y / 2, mt = (o.cloud.y + N) * k - nt / 2, ot = Va(L.cloudDay, L.cloudNight, Math.round(o.cloud.f * 4) / 4), lt = Va(ot, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(mt) - 1); q <= Math.min(O - 1, mt + nt + 1); q++) for (let gt = Math.max(0, Math.floor(st) - 1); gt <= Math.min(O - 1, st + Y + 1); gt++) {
      const Ct = (gt + 0.5 - st) / Y, Vt = (q + 0.5 - mt) / Y;
      Rp(Ct, Vt) && $(gt, q, !Rp(Ct, Vt + 1 / Y) || ki((Vt - 0.42) / 0.25) * 0.8 > Jn(gt, q) ? lt : ot, o.cloud.o, Uu);
    }
  }
  return i0(Q, I, O, O, { oneBit: l, ink: b, paper: g, snowInk: !o.night });
}
function i0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const D = new Uint8ClampedArray(i * l * 4), L = ic(b), _ = ic(g);
  for (let P = 0; P < l; P++) for (let O = 0; O < i; O++) {
    const k = P * i + O, K = n[k];
    if (o[k] == null) continue;
    let tt = ic(o[k]);
    if (f) {
      let z;
      K === Yu || K === Zu ? z = !0 : K === vo ? z = v : K === Hr || K === Ns ? z = !1 : z = Math.round((0.2126 * tt[0] + 0.7152 * tt[1] + 0.0722 * tt[2]) / 255 * 4) / 4 <= Jn(O, P), (K === Gu || K === $u || K === Uu || K === Ns) && (O > 0 && n[k - 1] !== K || O < i - 1 && n[k + 1] !== K || P > 0 && n[k - i] !== K || P < l - 1 && n[k + i] !== K) && (z = !0), tt = z ? L : _;
    }
    D[k * 4] = tt[0], D[k * 4 + 1] = tt[1], D[k * 4 + 2] = tt[2], D[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: D };
}
const an = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Nc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, s0 = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Hp = {}, ja = (o, n, i) => {
  const l = o + n + i;
  return Hp[l] || (Hp[l] = s0(Nc(o).map((f, b) => f + (Nc(n)[b] - f) * i)));
}, Np = {}, Es = (o) => Np[o] || (Np[o] = Nc(o));
function l0(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [ja(n.clear[0], n.cloudy[0], 0.12), ja(n.clear[1], n.cloudy[1], 0.12)], n.storm = [ja(n.rain[0], "#000000", 0.22), ja(n.rain[1], "#000000", 0.22)], n;
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
], tn = (o, n) => (c0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Ku = 1, Xu = 2, Ju = 3, Qu = 4, Nr = 5, Os = 6, Oc = 7, tf = 8, Op = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), d0 = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function p0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const D = new Uint8ClampedArray(i * l * 4), L = Es(b), _ = Es(g);
  for (let P = 0; P < l; P++) for (let O = 0; O < i; O++) {
    const k = P * i + O, K = n[k];
    if (o[k] == null) continue;
    let tt = Es(o[k]);
    if (f) {
      let z;
      K === Qu || K === tf ? z = !0 : K === Nr ? z = v : K === Oc || K === Os ? z = !1 : z = Math.round((0.2126 * tt[0] + 0.7152 * tt[1] + 0.0722 * tt[2]) / 255 * 4) / 4 <= tn(O, P), (K === Ku || K === Xu || K === Ju || K === Os) && (O > 0 && n[k - 1] !== K || O < i - 1 && n[k + 1] !== K || P > 0 && n[k - i] !== K || P < l - 1 && n[k + i] !== K) && (z = !0), tt = z ? L : _;
    }
    D[k * 4] = tt[0], D[k * 4 + 1] = tt[1], D[k * 4 + 2] = tt[2], D[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: D };
}
const u0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, f0 = (o) => zu(o, !1).split("/")[0], sc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, h0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", m0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", g0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", b0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", w0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], v0 = [".##", "##.", ".#.", "#.."];
function ef(o, { width: n, height: i, colors: l, wave: f = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const D = { ...za, dawn: "#e5a77e", ...l }, L = l0(D), _ = n, P = i, O = _ / v, k = O / 2, K = Math.PI * 2, tt = o.length ? o : [{ cond: "cloudy", night: !1 }], z = [...Array(v * 2)].map((pt, Q) => {
    const I = tt[Math.min(Q, tt.length - 1)], $ = f0(I.cond), ut = Q % 2 === 1;
    return { cond: I.cond, k: $, night: ut, sky: L[$][ut ? 1 : 0], cover: u0[$] };
  }), N = (pt) => P * (0.5 - f * Math.cos(K * (pt / O - 0.25)));
  return { C: D, S: z, W: _, H: P, cw: O, sw: k, TAU: K, yb: N, side: (pt, Q, I) => {
    const $ = (pt ? N(Q) - I : I - N(Q)) / Math.max(3, b * 1.4) + 0.5;
    return $ <= 0 ? 0 : $ >= 1 ? 1 : $;
  }, glowAt: (pt) => {
    const Q = ((pt / O - 0.25) % 1 + 1) % 1, I = Math.max(0, Math.min(v - 1, Math.round(pt / O - 0.25))), $ = Math.max(0, Math.min(v - 1, Math.round(pt / O - 0.75))), ut = 1 - (z[2 * I].cover + z[2 * $ + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(pt) / P)));
    return { c: Q < 0.5 ? D.dusk : D.dawn, a: g * (0.2 + 0.8 * ut) * xt * xt };
  }, soft: b, tw: O * 0.3, sy: P / 90 };
}
function af(o, { clock: n = 0, ambient: i = !1, seed: l = 1 }) {
  const { S: f, sw: b, side: g, C: v, TAU: D, sy: L, H: _ } = o, P = n, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((tt, z) => {
    const N = sc(l * 977 + z * 131 + 7), et = (z + 0.5) * b, it = tt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[tt.k] : 0;
    for (let pt = 0; pt < it; pt++) {
      const Q = et + (N() - 0.5) * b * 1.6, I = (6 + N() * 76) * L, $ = N() < 0.35, ut = 1.8 + N() * 1.6, xt = g(!0, Q, I) * ($ ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(D * P / 2600 + pt * 1.7 + z) : 1);
      xt >= 0.03 && O.stars.push({ x: Q, y: I, big: $, size: ut, o: xt });
    }
    if (!tt.night && (tt.k === "clear" || tt.k === "partly")) {
      const pt = et + (N() - 0.5) * b * 0.3, Q = Math.min(15, b * 0.29);
      O.suns.push({ x: pt, y: 32 * L, rad: Q, halo: Q * 2.8 * (i ? 1 + 0.07 * Math.sin(D * P / 3600 + z) : 1) });
    }
    if (tt.night && (tt.k === "clear" || tt.k === "partly")) {
      const pt = Math.min(0.78, b * 0.55 / 34), Q = et - 23 * pt + (N() - 0.5) * b * 0.2;
      O.moons.push({ x: Q + 23 * pt, y: (4 + (i ? 0.8 * Math.sin(D * P / 5200 + z) : 0)) * L + 23 * pt, d: 46 * pt });
    }
  });
  const k = Math.max(56, Math.min(100, _ * 0.45)), K = Math.max(1, b / (k * 2.4));
  return f.forEach((tt, z) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[tt.k];
    if (!N) return;
    const et = tt.k === "partly" ? 1 : Math.round(N * K), it = sc(l * 577 + z * 71 + 3), pt = (z + 0.5) * b, Q = tt.k === "rain" || tt.k === "storm" || tt.night ? v.cloudNight : v.cloudDay, I = tt.night ? 0.82 : tt.k === "storm" ? 0.75 : 1;
    for (let $ = 0; $ < et; $++) {
      const ut = k / 46 * (tt.k === "partly" ? 1 : 0.8 + it() * 0.4), xt = pt + (tt.k === "partly" ? b * 0.12 : (($ + 0.5) / et - 0.5) * b * 0.95 + (it() - 0.5) * b * 0.5 / et), Rt = (tt.k === "partly" ? 40 : 6 + it() * 26) * L, ct = i ? 2.5 * Math.sin(D * P / 9e3 + z * 1.3 + $ * 2.1) : 0, S = i ? 0.9 * Math.sin(D * P / 6100 + z + $) : 0;
      O.clouds.push({ x: xt - 23 * ut + ct, y: Rt - 15.33 * ut + S, w: 46 * ut, h: 30.66 * ut, fill: Q, o: I * (et > 1 && $ === 0 ? 0.85 : 1) });
    }
  }), f.forEach((tt, z) => {
    const N = sc(l * 313 + z * 29 + 11), et = (z + 0.5) * b, it = tt.cond === "pouring" ? 16 : tt.cond === "rainy" || tt.cond === "hail" ? 9 : tt.cond === "lightning-rainy" ? 12 : tt.cond === "snowy-rainy" ? 5 : 0;
    for (let Q = 0; Q < it; Q++) {
      let I = et + (N() - 0.5) * b * 1.05, $ = 44 + N() * 36, ut = 1;
      if (i) {
        const Rt = (($ - 44 + P * 0.04) % 36 + 36) % 36;
        I -= 0.21 * (Rt - ($ - 44)), $ = 44 + Rt, ut = Math.min(1, Rt / 6, (36 - Rt) / 6);
      }
      $ *= L;
      const xt = g(tt.night, I, $) * ut;
      xt >= 0.05 && O.drops.push({ x: I, y: $, o: xt });
    }
    const pt = tt.cond === "snowy" ? 11 : tt.cond === "snowy-rainy" ? 6 : 0;
    for (let Q = 0; Q < pt; Q++) {
      let I = et + (N() - 0.5) * b * 1.05, $ = 40 + N() * 44, ut = 1;
      if (i) {
        const Rt = (($ - 40 + P * 9e-3) % 44 + 44) % 44;
        $ = 40 + Rt, I += 1.6 * Math.sin(D * P / 2800 + Q * 1.9 + z), ut = Math.min(1, Rt / 6, (44 - Rt) / 6);
      }
      $ *= L;
      const xt = g(tt.night, I, $) * ut;
      xt >= 0.05 && O.flakes.push({ x: I, y: $, o: xt });
    }
    if (tt.k === "fog") {
      const Q = tt.night ? "#c8ccd6" : "#ffffff", I = tt.night ? 0.28 : 0.62, $ = i ? 4 * Math.sin(D * P / 8e3 + z) : 0;
      for (let ut = 0; ut < 4; ut++) O.fogs.push({ x: et - b * 0.75 + ut % 2 * b * 0.18 + (ut % 2 ? $ : -$), y: (30 + ut * 13) * L, w: b * 1.3, c: Q, a: I });
    }
    if (tt.k === "storm") {
      const Q = (P / 3400 + z * 0.37) % 1;
      O.bolts.push({ x: et + (N() - 0.5) * b * 0.3 - 5, y: 36 * L, o: i && !(Q < 0.05 || Q > 0.09 && Q < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function y0(o, n, i, l, f, b, g, v) {
  const { S: D, C: L, cw: _, yb: P, glowAt: O, soft: k, tw: K, sy: tt } = o, z = new Array(i * l), N = new Uint8Array(i * l), et = new Uint8Array(i * l), it = (Y, nt, st, mt, ot) => {
    st == null || Y < 0 || nt < 0 || Y >= i || nt >= l || (mt >= 1 || mt > tn(Y + 5, nt + 3)) && (z[nt * i + Y] = st, N[nt * i + Y] = ot);
  }, pt = (Y, nt, st, mt) => {
    for (let ot = Math.max(0, Math.floor(nt - st) - 1); ot <= Math.min(l - 1, nt + st + 1); ot++) for (let lt = Math.max(0, Math.floor(Y - st) - 1); lt <= Math.min(i - 1, Y + st + 1); lt++) mt(lt, ot, lt + 0.5 - Y, ot + 0.5 - nt);
  }, Q = (Y, nt, st) => {
    for (let ot = 0; ot < Y.length - 1; ot++) {
      const lt = (ot + nt) * _;
      if (st < lt - K / 2) return [Y[ot], Y[ot], 0];
      if (st <= lt + K / 2) return [Y[ot], Y[ot + 1], (st - lt + K / 2) / K];
    }
    const mt = Y[Y.length - 1];
    return [mt, mt, 0];
  }, I = D.filter((Y) => !Y.night).map((Y) => Y.sky), $ = D.filter((Y) => Y.night).map((Y) => Y.sky), ut = k / b, xt = 16 * tt / b;
  for (let Y = 0; Y < i; Y++) {
    const nt = (Y + 0.5) * f, st = P(nt) / b, mt = Q(I, 0.75, nt), ot = Q($, 1.25, nt), lt = O(nt);
    for (let q = 0; q < l; q++) {
      const gt = tn(Y, q), Ct = q + 0.5 - st, Vt = (ut > 0.01 ? an(0.5 + Ct / ut) : Ct > 0 ? 1 : 0) > gt;
      let ne = Vt ? mt[2] > gt ? mt[1] : mt[0] : ot[2] > gt ? ot[1] : ot[0];
      (Vt ? an(((q + 0.5) / l - 0.45) / 0.55) * 0.7 : an(1 - (q + 0.5) / (l * 0.55)) * 0.7) > tn(Y + 2, q + 5) && (ne = Vt ? ja(ne, "#ffffff", 0.18) : ja(ne, "#000000", 0.25)), Vt && Ct >= 0 && Ct < xt && lt.a * 1.3 * (1 - Ct / xt) > tn(Y + 6, q + 1) && (ne = lt.c), z[q * i + Y] = ne, et[q * i + Y] = Vt ? 0 : 1;
    }
  }
  const Rt = ja(L.sun, "#ffffff", 0.55), ct = ja(L.moon, "#ffffff", 0.6);
  n.stars.forEach((Y) => {
    const nt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    if (nt < 0 || st < 0 || nt >= i || st >= l || !et[st * i + nt] || Y.o < 0.15) return;
    const mt = Y.o > 0.45 ? L.star : ja(L.star, z[st * i + nt], 0.5), ot = Y.big && Y.o > 0.6 ? Math.floor(Y.size / f) : 0;
    it(nt, st, mt, 1, Oc);
    for (let lt = 1; lt <= ot; lt++) [[nt - lt, st], [nt + lt, st], [nt, st - lt], [nt, st + lt]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < l && et[q[1] * i + q[0]] && it(q[0], q[1], mt, 1, Oc);
    });
  }), n.suns.forEach((Y) => {
    const nt = Math.max(1.5, Y.rad / f), st = Y.x / f, mt = Y.y / b, ot = Y.halo / f * 0.85;
    if (pt(st, mt, ot, (lt, q, gt, Ct) => {
      const Vt = Math.sqrt(gt * gt + Ct * Ct);
      Vt > nt && Vt < ot && !et[q * i + lt] && it(lt, q, Rt, 0.3 * (1 - (Vt - nt) / (ot - nt)), 0);
    }), v) {
      const lt = Math.floor(g / 500) % 2, q = Math.max(1, nt * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === lt) for (let Ct = nt + 1.2; Ct < nt + 1.2 + q; Ct += 0.7) it(Math.floor(st + Math.cos(gt * Math.PI / 4) * Ct), Math.floor(mt + Math.sin(gt * Math.PI / 4) * Ct), L.sun, 1, tf);
    }
    pt(st, mt, nt, (lt, q, gt, Ct) => {
      gt * gt + Ct * Ct <= nt * nt && it(lt, q, an(((Ct / nt + 1) / 2 - 0.6) / 0.4) > tn(lt, q) ? L.sunEdge : L.sun, 1, Ku);
    });
  }), n.moons.forEach((Y) => {
    const nt = Math.max(1.5, Y.d * 0.37 / f), st = Y.x / f, mt = Y.y / b, ot = st + 0.547 * nt, lt = mt - 0.503 * nt, q = 0.82 * nt;
    pt(st, mt, nt, (gt, Ct, Vt, ne) => {
      if (Vt * Vt + ne * ne > nt * nt) return;
      const sa = gt + 0.5 - ot, fa = Ct + 0.5 - lt;
      sa * sa + fa * fa > q * q && it(gt, Ct, an((ne + nt) / (2 * nt) * 1.1 - 0.1) > tn(gt, Ct) ? L.moon : ct, 1, Xu);
    });
  }), n.clouds.forEach((Y) => {
    const nt = Math.max(3, Y.w / f), st = nt * 0.6665, mt = Y.x / f, ot = Y.y / b, lt = ja(Y.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ot) - 1); q <= Math.min(l - 1, ot + st + 1); q++) for (let gt = Math.max(0, Math.floor(mt) - 1); gt <= Math.min(i - 1, mt + nt + 1); gt++) {
      const Ct = (gt + 0.5 - mt) / nt, Vt = (q + 0.5 - ot) / nt;
      Op(Ct, Vt) && it(gt, q, !Op(Ct, Vt + 1 / nt) || an((Vt - 0.42) / 0.25) * 0.8 > tn(gt, q) ? lt : Y.fill, Y.o, Ju);
    }
  }), n.fogs.forEach((Y) => {
    const nt = Math.floor(Y.y / b), st = Math.max(nt, Math.floor((Y.y + 6 * tt) / b) - 1), mt = Math.floor(Y.x / f), ot = Math.floor((Y.x + Y.w) / f);
    for (let lt = nt; lt <= st; lt++) for (let q = mt; q <= ot; q++) {
      const gt = (q - mt) / Math.max(1, ot - mt);
      it(q, lt, Y.c, Y.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((Y) => {
    const nt = Y.x / f, st = Math.floor(Y.y / b);
    for (let mt = 0; mt < S; mt++) it(Math.floor(nt - 0.208 * mt * b / f), st + mt, L.rain, Y.o, Qu);
  });
  const Ft = Math.max(0, Math.round(4.4 / f / 2.6));
  return n.flakes.forEach((Y) => {
    const nt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    it(nt, st, L.snow, Y.o, Nr);
    for (let mt = 1; mt <= Ft; mt++)
      it(nt - mt, st, L.snow, Y.o, Nr), it(nt + mt, st, L.snow, Y.o, Nr), it(nt, st - mt, L.snow, Y.o, Nr), it(nt, st + mt, L.snow, Y.o, Nr);
  }), n.bolts.forEach((Y) => {
    if (f <= 3.5)
      for (let nt = Math.floor(Y.y / b); nt <= (Y.y + 24) / b; nt++) for (let st = Math.floor(Y.x / f); st <= (Y.x + 11) / f; st++)
        d0(w0, (st + 0.5) * f - Y.x, (nt + 0.5) * b - Y.y) && it(st, nt, L.sun, 1, Os);
    else {
      const nt = Math.round(Y.x / f), st = Math.round(Y.y / b);
      v0.forEach((mt, ot) => mt.split("").forEach((lt, q) => {
        lt === "#" && it(nt + q, st + ot, L.sun, 1, Os);
      }));
    }
  }), { col: z, ids: N };
}
function x0(o, n) {
  const i = n.px, l = Math.max(6, Math.round(n.width / i)), f = Math.max(6, Math.round(n.height / i)), b = n.width / l, g = n.height / f, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, D = (k) => {
    const K = ef(k, n);
    return y0(K, af(K, { clock: v, ambient: n.ambient, seed: n.seed }), l, f, b, g, v, n.ambient);
  }, L = D(o), _ = n.reveal == null ? 1 : an(n.reveal);
  let P = L.col, O = L.ids;
  if (_ < 1) {
    const k = n.prev ? D(n.prev) : null, K = _ * (l + 12);
    P = new Array(l * f), O = new Uint8Array(l * f);
    for (let tt = 0; tt < l * f; tt++) {
      const z = tt % l, N = tt / l | 0;
      (n.reduce ? _ : an((K - z) / 12)) > tn(z, N) ? (P[tt] = L.col[tt], O[tt] = L.ids[tt]) : k ? (P[tt] = k.col[tt], O[tt] = k.ids[tt]) : (P[tt] = null, O[tt] = 255);
    }
  }
  return p0(P, O, l, f, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function k0(o, n, i) {
  const l = i.width, f = i.height, b = i.reveal == null ? 1 : an(i.reveal), g = (O, k) => {
    const K = ef(k, i);
    M0(O, K, af(K, i));
  };
  if (o.clearRect(0, 0, l, f), b >= 1) {
    g(o, n);
    return;
  }
  if (i.prev && g(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = b, g(o, n), o.restore();
    return;
  }
  const v = o.canvas, D = v.__wxOff || (v.__wxOff = document.createElement("canvas"));
  (D.width !== v.width || D.height !== v.height) && (D.width = v.width, D.height = v.height);
  const L = D.getContext("2d");
  L.setTransform(o.getTransform()), L.clearRect(0, 0, l, f), g(L, n);
  const _ = b * (l + 64) - 64, P = L.createLinearGradient(_, 0, _ + 64, 0);
  P.addColorStop(0, "rgba(0,0,0,1)"), P.addColorStop(1, "rgba(0,0,0,0)"), L.globalCompositeOperation = "destination-in", L.fillStyle = P, L.fillRect(0, 0, l, f), L.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(D, 0, 0), o.restore();
}
function M0(o, n, i) {
  const { W: l, H: f, S: b, C: g, cw: v, yb: D, glowAt: L, soft: _, tw: P, sy: O } = n, k = o.getTransform().a || 1, K = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * k : 0, o.shadowOffsetY = S ? 1.5 * k : 0;
  }, tt = (S, Ft) => {
    const Y = Es(S);
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
      const nt = l * Y / N, st = S == null ? 0 : D(nt) + S;
      Y ? o.lineTo(nt, st) : o.moveTo(nt, st);
    }
    for (let Y = N; Y >= 0; Y--) {
      const nt = l * Y / N;
      o.lineTo(nt, D(nt) + Ft);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = z(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, l, f);
  const it = o.createLinearGradient(0, 0, l, 0);
  for (let S = 0; S <= 64; S++) {
    const Ft = L(l * S / 64);
    it.addColorStop(S / 64, tt(Ft.c, Math.min(1, Ft.a)));
  }
  o.fillStyle = it;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, et(S * 2 * O, (S + 1) * 2 * O);
  o.fillStyle = z(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const pt = Math.max(0.5, _), Q = 6;
  o.globalAlpha = 1, et(null, -pt);
  for (let S = 0; S < Q; S++)
    o.globalAlpha = 1 - (S + 0.5) / Q, et(-pt + 2 * pt * S / Q, -pt + 2 * pt * (S + 1) / Q);
  o.globalAlpha = 1;
  const I = new Path2D(g0), $ = new Path2D(m0), ut = new Path2D(h0), xt = new Path2D(b0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(I), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Rt = ja(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ft = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ft.addColorStop(0, tt(Rt, 0.42)), Ft.addColorStop(0.7, tt(Rt, 0)), o.fillStyle = Ft, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const Y = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    Y.addColorStop(0.6, g.sun), Y.addColorStop(1, g.sunEdge), o.fillStyle = Y, K(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), K(!1);
  });
  const ct = ja(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ft = o.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, ct), Ft.addColorStop(1, g.moon), o.fillStyle = Ft, K(!0), o.fill($), K(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, K(!0), o.fill(ut), K(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ft = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ft.addColorStop(0, tt(S.c, 0)), Ft.addColorStop(0.25, tt(S.c, S.a)), Ft.addColorStop(0.75, tt(S.c, S.a)), Ft.addColorStop(1, tt(S.c, 0)), o.fillStyle = Ft, o.fillRect(S.x, S.y, S.w, 6 * O);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(xt), o.restore();
  }), o.restore();
}
const S0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ws = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, lc = (o, n) => '<path class="' + n + '" d="' + o + '"/>', _0 = (o, n) => ' style="animation-delay:-' + Math.round(o * 137 % n) + 'ms"', qa = (o, n, i, l) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + _0(o, 2400) + ' d="M' + o + " " + (n - i) + "L" + (o + f) + " " + (n - f) + "L" + (o + i) + " " + n + "L" + (o + f) + " " + (n + f) + "L" + o + " " + (n + i) + "L" + (o - f) + " " + (n + f) + "L" + (o - i) + " " + n + "L" + (o - f) + " " + (n - f) + 'Z"/>';
}, Ip = ([o, n, i], l) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + n + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', C0 = (o, n) => n ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', A0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + n + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + n + ' 60.65)"/></g>') : [19, 26, 33].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + n + ' 38)"/></g>')).join(""), L0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([n, i], l) => '<circle class="wbFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + n + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function T0(o, n, i, l) {
  const f = (b) => '<g filter="url(#' + l + '-sh)">' + b + "</g>";
  return o === "clear" ? n ? f(Ip(i ? ws.l : ws.s, l)) + (i ? qa(70, 20, 5.83, 1) + qa(78.33, 41.67, 3.75, 0.8) + qa(60, 71.67, 3.33, 0.6) : qa(42, 12, 3.5, 1) + qa(47, 25, 2.25, 0.8) + qa(36, 43, 2, 0.6)) : f(C0(l, i)) : o === "partly" ? f(n ? Ip(i ? ws.lp : ws.sp, l) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(lc(i ? Er.lp : Er.sp, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(73.33, 16.67, 4.17, 0.9) : qa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? f(lc(i ? Er.lc : Er.s, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(15, 15, 3.75, 0.8) + qa(76.67, 13.33, 2.92, 0.6) : qa(9, 9, 2.25, 0.8) + qa(46, 8, 1.75, 0.6) : "") : f(lc(i ? Er.lr : Er.s, "wbCloudLight")) + (o === "rain" ? A0(i) : L0(i));
}
const D0 = (o, n) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (n ? 1.6 : 1) + '" stdDeviation="' + (n ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function E0(o, n, i, l) {
  let f = S0(o);
  const b = f === "night" || !!i;
  f === "night" && (f = "clear");
  const g = n ? 90 : 54;
  return { k: f, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + D0(l, n) + T0(f, b, n, l) + "</svg>" };
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
], vs = (o, n) => (B0[n % 8 * 8 + o % 8] + 0.5) / 64, no = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], na = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Fp = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, tr = [255, 255, 255], pa = no("#26221e"), qp = no("#0288d1"), P0 = no("#01579b"), cc = no(za.cloudDay), dc = no(za.cloudNight), ys = no(za.dusk), pc = no(za.sunEdge), R0 = no(za.sun), H0 = 10, Wp = 0.3, on = 56, of = 21;
function N0(o) {
  const n = Array.from({ length: of }, () => new Array(on).fill(void 0)), i = (g, v, D) => {
    n[v][g] = D;
  }, l = na(ys, pa, 0.35), f = na(pa, tr, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? on - 2 : on - 1;
    for (let D = 6 - g; D <= v; D++) i(D, g, g < 2 ? l : g === 6 ? f : pa);
  }
  const b = [ys, pc, dc, no(za.skyRainDay), na(ys, pa, 0.2), na(o, pa, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const D = 9 + v * 6;
    for (let L = 0; L < g; L++) {
      const _ = b[(v * 2 + L * 3) % b.length];
      for (let P = D; P < D + 5; P++)
        i(P, 7 + L * 2, na(_, pa, 0.12)), i(P, 8 + L * 2, L === g - 1 ? na(_, tr, 0.3) : _);
      i(D + 5, 7 + L * 2, pa), i(D + 5, 8 + L * 2, pa);
    }
  });
  for (let g = 7; g <= 12; g++) i(5, g, pa);
  i(5, 13, pc);
  for (let g = 7; g <= 14; g++) for (let v = 42; v <= 51; v++) i(v, g, v === 51 ? dc : cc);
  for (let g = 43; g <= 50; g += 2)
    i(g, 12, pa), i(g, 9, na(pa, cc, 0.4));
  for (let g = 40; g <= 53; g++) i(g, 14, g === 40 || g === 53 ? dc : cc);
  for (let g = 15; g <= 18; g++) for (let v = 46; v <= 49; v++) i(v, g, g === 18 ? pa : g === 16 ? pc : ys);
  for (let g = 15; g <= 19; g++) i(44, g, pa);
  return i(44, 20, R0), n;
}
function O0(o, n, i, l) {
  const f = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(f * b * 4), v = no(l.skyClearDay), D = no(l.skyFogDay), L = N0(v), _ = Math.round(b * 0.55), P = Mi(1 - Math.log(i / Wp) / Math.log(H0 / Wp)), O = na(v, D, P), k = (N) => Mi((N - 0.1) / 0.9), K = Mi((1 - Math.exp(-2 / i) - 0.2) / 0.8), tt = Math.round(f / 2 - on / 2), z = _ + 3;
  for (let N = 0; N < b; N++) {
    const et = z - 1 - N, it = N - z;
    for (let pt = 0; pt < f; pt++) {
      const Q = pt - tt;
      let I, $;
      const ut = et >= 0 && et < of && Q >= 0 && Q < on ? L[et][Q] : void 0;
      if (ut)
        I = ut, $ = K;
      else if (et >= 0 && et <= 1 && Q >= 4 - et && Q <= 5 - et)
        I = na(tr, qp, 0.15), $ = K;
      else if (N < _) {
        const ct = Mi(((N + 0.5) / _ - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(ct + vs(pt + 2, N + 5)));
        I = na(O, tr, S * 0.1), $ = P * 0.95;
      } else {
        const ct = (N - _ + 0.5) / (b - _), S = Math.min(1.5, 6e-3 / (ct * ct)), Ft = Mi(ct * 1.4) * 3, Y = Math.min(3, Math.floor(Ft + vs(pt + 1, N + 6)));
        I = na(qp, P0, Y / 3);
        const nt = 1 + Math.round(ct * 7), st = Math.floor(pt / (nt * 3)), mt = 0.06 + 0.16 * ct, ot = pt % (nt * 3) < nt;
        ot && Fp(st, N) < mt ? I = na(I, tr, 0.18 + 0.1 * (1 - ct)) : ot && ct > 0.5 && Fp(st, N - 1) < mt && (I = na(I, pa, 0.12)), $ = k(1 - Math.exp(-S / i)), it === 0 && Q >= 3 && Q <= 8 ? (I = na(I, tr, Q < 6 ? 0.8 : 0.45), $ = K) : it >= 0 && it <= 2 && Q >= on && Q < on + 40 ? ((1 - (Q - on) / 40) * (it === 1 ? 0.9 : 0.5) > vs(pt, N + 3) && (I = na(I, tr, 0.5)), $ = K) : it === 0 && Q >= 6 && Q < on && (I = na(I, pa, Q % 2 === 0 ? 0.35 : 0.2), $ = K);
      }
      const xt = $ > vs(pt, N) ? D : I, Rt = (N * f + pt) * 4;
      g[Rt] = xt[0], g[Rt + 1] = xt[1], g[Rt + 2] = xt[2], g[Rt + 3] = 255;
    }
  }
  return { data: g, w: f, h: b };
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
  const l = (b) => Math.abs(Math.log(b[2] / n)), f = i.reduce((b, g) => l(g) < l(b) ? g : b);
  return l(f) <= Math.log(F0) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const W0 = (o, n) => n === "mi" ? o * 1.609344 : n === "m" ? o / 1e3 : n === "ft" ? o * 3048e-7 : n === "yd" ? o * 9144e-7 : o, V0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Pe = {
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
}, Re = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Ve = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function j0() {
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
const uc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", z0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", G0 = 300, Bs = (o) => Math.min(1, G0 / Math.max(1, o)), fc = (o, n) => 1 + (n / 100 - 1) * Bs(o.offsetWidth);
function $0(o, n) {
  n.style.cssText += ";" + j0();
  let i = null;
  const l = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var N, et;
    const P = _.pointerType === "touch" || Ve() ? null : (et = (N = _.target).closest) == null ? void 0 : et.call(N, uc);
    if (i && i !== P && l(i), i = P, !P || P.disabled) return;
    const O = Pe.pivot, k = P.getBoundingClientRect(), K = (_.clientX - k.left) / k.width, tt = (_.clientY - k.top) / k.height, z = 1;
    P.classList.add("mvPv", "mvMoving", "mvLit"), P.style.setProperty("--pv-persp", O.persp / Bs(Math.max(P.offsetWidth, P.offsetHeight)) + "px"), P.style.setProperty("--ry", (z * (K - 0.5) * 2 * O.tilt * Bs(P.offsetWidth)).toFixed(3) + "deg"), P.style.setProperty("--rx", (z * -(tt - 0.5) * 2 * O.tilt * Bs(P.offsetHeight)).toFixed(3) + "deg"), P.style.setProperty("--mx", (K * 100).toFixed(1) + "%"), P.style.setProperty("--my", (tt * 100).toFixed(1) + "%"), P._down || P.style.setProperty("--sc", fc(P, O.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    i && !i.contains(_.relatedTarget) && (l(i), i = null);
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const P = Ve() ? null : (k = (O = _.target).closest) == null ? void 0 : k.call(O, uc);
    P && (P._down = !0, P.classList.add("mvPv"), P.classList.remove("mvMoving"), P.style.setProperty("--sc", fc(P, Pe.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var O, k;
    const P = (k = (O = _.target).closest) == null ? void 0 : k.call(O, uc);
    P && (P._down = !1, P.style.setProperty("--sc", _.pointerType === "touch" ? 1 : fc(P, Pe.pivot.lift)));
  });
  let f = null;
  o.addEventListener("pointerover", (_) => {
    var P, O, k;
    _.pointerType !== "touch" && ((k = (O = (P = _.target).closest) == null ? void 0 : O.call(P, ".tfBar")) == null || k.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var O, k;
    const P = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    P && !P.contains(_.relatedTarget) && P !== f && P.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const P = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
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
    var O, k;
    const P = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    !P || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (P.classList.add("mvHold"), clearTimeout(P._k), P._k = setTimeout(() => P.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var O, k;
    const P = (k = (O = _.target).closest) == null ? void 0 : k.call(O, "button.tfIcon[data-act]");
    P && U0(P);
  });
  let g = null;
  const v = (_, P, O) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const k = _.getBoundingClientRect(), K = k.width / 2, tt = k.height / 2, z = P.clientX - k.left - K, N = P.clientY - k.top - tt, et = z ? K / Math.abs(z) : 1 / 0, it = N ? tt / Math.abs(N) : 1 / 0, pt = Math.min(Math.max(1 / Math.min(et, it), 0), 1);
    let Q = Math.atan2(N, z) * 180 / Math.PI + 90;
    Q < 0 && (Q += 360);
    const I = O ? 100 : pt * 100;
    _.style.setProperty("--edge-proximity", I.toFixed(3)), _.style.setProperty("--cursor-angle", Q.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", O || I >= Pe.outline.lightAt);
  }, D = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, L = (_) => {
    var O;
    const P = (O = _.closest) == null ? void 0 : O.call(_, z0);
    return P && !n.classList.contains("tfEditing") ? P : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const P = L(_.target);
    g && g !== P && D(g), g = P, P && !P._down && v(P, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    g && !g.contains(_.relatedTarget) && (D(g), g = null);
  }), o.addEventListener("pointerdown", (_) => {
    const P = L(_.target);
    P && Pe.outline.press && (P._down = !0, v(P, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const P = L(_.target);
    P && (P._down = !1, _.pointerType === "touch" ? D(P) : v(P, _, !1));
  }), new MutationObserver((_) => {
    var P;
    for (const O of _) {
      const k = O.target;
      if (O.type === "attributes") {
        (P = k.classList) != null && P.contains("tfMoreBackdrop") && !k.hidden && O.oldValue !== null && Vp(k);
        continue;
      }
      O.addedNodes.forEach((K) => {
        K.nodeType === 1 && K.classList.contains("tfMoreBackdrop") && !K.hidden && Vp(K);
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
function U0(o) {
  var k;
  if (Ve() || o._warp) return;
  const n = Pe.warp, i = n.amount / 100, l = o.firstElementChild;
  if (!l) return;
  const f = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = nf(o), D = (k = v.dataset) == null ? void 0 : k.k, L = rf(o, v), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const P = l.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...f, filter: b }], { duration: n.win, easing: Re.exit, fill: "forwards" }), O = performance.now();
  P.finished.then(() => {
    const K = () => {
      var pt, Q;
      const tt = D ? v.isConnected ? v : (pt = g.querySelector) == null ? void 0 : pt.call(g, '[data-k="' + CSS.escape(D) + '"]') : v, z = tt && sf(tt, L);
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
    const l = o[i - 1] || o[i], f = o[i], b = o[i + 1], g = o[i + 2] || b, v = [f[0] + (b[0] - l[0]) / 6, f[1] + (b[1] - l[1]) / 6], D = [b[0] - (g[0] - f[0]) / 6, b[1] - (g[1] - f[1]) / 6];
    n += "C" + v.map((L) => L.toFixed(1)).join(" ") + " " + D.map((L) => L.toFixed(1)).join(" ") + " " + b.map((L) => L.toFixed(1)).join(" ");
  }
  return n;
}, cf = (o, n, i, l = "mvGrid") => [0, 1, 2].map((f) => {
  const b = (n + (i - n) * f / 2).toFixed(1);
  return '<line class="' + l + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function df(o, n = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (Ve() || !(n != null && n.getTotalLength)) return;
  const l = Pe.graphs, f = n.getTotalLength();
  n.animate([{ strokeDasharray: f, strokeDashoffset: f }, { strokeDasharray: f, strokeDashoffset: 0 }], { duration: l.draw, easing: Re.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: l.draw * 0.6, delay: l.draw * 0.3 + g * 12, easing: Re.standard, fill: "backwards" }));
}
function Ps(o, n, i, l, f) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = l + "px", o.style.width = f + "px", Ve() || n === l && i === f) return;
  const b = Pe.tabs, g = b.stretch / 100, v = (_, P) => ({ left: _ + "px", width: P + "px" }), L = l > n ? v(n + (l - n) * (0.15 * (1 - g)), l + f - (n + (l - n) * (0.15 * (1 - g)))) : v(l, n + i - l - (n - l) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...L }, v(l, f)], { duration: b.dur, easing: Re.standard });
}
function Y0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (f) => f.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), l = (f, b) => b ? [...f.children].indexOf(b) : -1;
  o.addEventListener("click", (f) => {
    var et, it, pt;
    const b = (it = (et = f.target).closest) == null ? void 0 : it.call(et, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || Ve() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const D = l(g, v), L = g.getBoundingClientRect(), _ = v.getBoundingClientRect(), P = getComputedStyle(v).borderRadius, O = g.getRootNode(), k = nf(g), K = (pt = k.dataset) == null ? void 0 : pt.k, tt = rf(g, k), z = performance.now(), N = () => {
      var S, Ft, Y;
      const Q = K && !k.isConnected ? (S = O.querySelector) == null ? void 0 : S.call(O, '[data-k="' + CSS.escape(K) + '"]') : k, I = Q && sf(Q, tt), $ = (Ft = I == null ? void 0 : I.matches) != null && Ft.call(I, n) ? i(I) : null;
      if (!$ || l(I, $) === D) {
        performance.now() - z < 700 && requestAnimationFrame(N);
        return;
      }
      const ut = I.getBoundingClientRect(), xt = $.getBoundingClientRect(), Rt = getComputedStyle($);
      (Y = I.querySelector(":scope>.mvSegInd")) == null || Y.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (xt.top - ut.top - I.clientTop) + "px;height:" + xt.height + "px;border-radius:" + P + ";background:" + Rt.backgroundColor + ";box-shadow:" + Rt.boxShadow, getComputedStyle(I).position === "static" && (I.style.position = "relative"), I.prepend(ct), I.classList.add("mvSegMoving"), Ps(ct, _.left - L.left - I.clientLeft, _.width, xt.left - ut.left - I.clientLeft, xt.width), clearTimeout(I._seg), I._seg = setTimeout(() => {
        ct.remove(), I.classList.remove("mvSegMoving");
      }, Pe.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const pf = (o) => getComputedStyle(o).placeItems.startsWith("end");
function Vp(o) {
  const n = o.firstElementChild;
  if (Ve() || !n || n.classList.contains("still")) return;
  const i = Pe.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Re.standard }), n.style.animation = "none", n.animate(pf(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Re[i.ease] }), [...(n.classList.contains("tfMorePair") && n.querySelector(".tfMore") || n).children].forEach((f, b) => f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Re.standard, fill: "backwards" }));
}
function Z0(o, n) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (Ve() || !i || o.hidden || o._closing) {
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
const K0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function X0(o, n) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", K0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: n }));
}
function J0(o) {
  if (Ve()) return;
  const n = Pe.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: n.dur, easing: Re.spring });
  const i = o.querySelector(".mvTick path");
  i && n.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: n.dur * 0.5, easing: Re.standard, fill: "backwards" });
}
const hc = (o, n, i, l, f = 1) => (o + n * i * f) * Math.pow(l, f);
function mc(o) {
  const n = Pe.drag.squash / 100;
  !o || Ve() || !n || o.animate([{ transform: "scale(" + (1 + n * 0.4) + "," + (1 - n) + ")" }, { transform: "scale(" + (1 - n * 0.1) + "," + (1 + n * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function jp(o) {
  if (!o || Ve()) return;
  const n = Pe.expand;
  [...o.children].slice(1).forEach((i, l) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: n.delay + l * n.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const ze = 6e4, se = 36e5, va = 864e5, Li = 1440, Q0 = 6, t1 = 10 * ze, zp = 3, e1 = 3, xs = { day: [6, 22], waking: [7, 23], all: [0, 24] }, a1 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], o1 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Gp = (o, n, i, l) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const b = Math.cos(f * Math.PI / 180), g = Math.sin(f * Math.PI / 180), v = i + 2, D = i + 2 + l;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * D).toFixed(2) + " " + (n + g * D).toFixed(2);
}).join("") + '"/>', Ko = (o) => '<path d="' + o1 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Xo = (o) => '<path d="' + o + '"/>', $p = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function n1(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? $p : Gp(12, 12, 4, 2.5);
    case "clear-night":
      return $p;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Gp(7.5, 7.5, 2.6, 1.4)) + Ko("translate(3.6,3) scale(.85)");
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
const gc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + n1(o, n) + "</svg>", r1 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), i1 = 30 * ze, s1 = 7, l1 = 3, Up = 1, c1 = ze, d1 = 15 * ze, p1 = 5, le = {
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
}, wt = {
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
}, Ic = 7, Qo = 256, u1 = 3, Yp = 700, f1 = 1800, uf = 5 * ze;
let ks = null, Zp = 0, Si = null;
function h1() {
  return ks && Date.now() - Zp < uf ? Promise.resolve(ks) : Si || (Si = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var l, f;
    const n = (((l = o.radar) == null ? void 0 : l.past) || []).slice(-6), i = (((f = o.radar) == null ? void 0 : f.nowcast) || []).slice(0, u1);
    return ks = { host: o.host, frames: [...n.map((b) => ({ ...b, past: !0 })), ...i] }, Zp = Date.now(), ks;
  }).finally(() => {
    Si = null;
  }), Si);
}
function m1(o, n, i, l) {
  const f = Ic, b = 2 ** f, g = o * Math.PI / 180, v = (n + 180) / 360 * b * Qo, D = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Qo, L = v - i / 2, _ = D - l / 2, P = [];
  for (let O = Math.floor(L / Qo); O <= Math.floor((L + i - 1) / Qo); O++) for (let k = Math.floor(_ / Qo); k <= Math.floor((_ + l - 1) / Qo); k++)
    k < 0 || k >= b || P.push({ x: (O % b + b) % b, y: k, left: O * Qo - L, top: k * Qo - _ });
  return P;
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
}, b1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], w1 = Object.keys(wt.phases), v1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Kp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ff = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ms = 100, Xp = "µg/m³", y1 = "weather_alerts.air_quality_pollen", Is = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], x1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, k1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], M1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, S1 = { daily: 1, hourly: 2 }, Mt = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), aa = (o, n) => o.replace(/\{(\w+)\}/g, (i, l) => n[l] ?? ""), en = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Jp = /* @__PURE__ */ new Map();
function hf(o) {
  let n = Jp.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", l = document.createElementNS(i, "svg"), f = document.createElementNS(i, "path");
    l.setAttribute("viewBox", "0 0 24 24"), l.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", o), l.append(f), document.body.append(l);
    const b = f.getBBox();
    l.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, D = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * D).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * D).toFixed(2) + "px" : "", Jp.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : en(o);
}
const _1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, he = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Qp = /* @__PURE__ */ new Map(), tu = /* @__PURE__ */ new Map(), bc = /* @__PURE__ */ new WeakMap(), C1 = (o) => {
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
  const f = (n == null ? void 0 : n.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, g = f ? "en-US" : C1(n), v = JSON.stringify([g, b]);
  let D = Qp.get(v);
  if (!D) {
    try {
      D = new Intl.NumberFormat(g, b);
    } catch {
      D = new Intl.NumberFormat(void 0, b);
    }
    Qp.set(v, D);
  }
  return D.format(l);
}
const Wc = (o) => {
  var n;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.language) || (o == null ? void 0 : o.language) || void 0;
};
function A1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (bc.has(o)) return bc.get(o);
  const n = o.time_format, i = n === "language" || n === "system" || !n ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(n === "language" ? o.language : void 0).includes("10") : n === "12";
  return bc.set(o, i), i;
}
const mf = (o) => {
  var n, i;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function gf(o, n) {
  const i = JSON.stringify([o, n]);
  let l = tu.get(i);
  if (!l) {
    try {
      l = new Intl.DateTimeFormat(o, n);
    } catch {
      l = new Intl.DateTimeFormat(void 0, { ...n, timeZone: void 0 });
    }
    tu.set(i, l);
  }
  return l;
}
const Je = (o, n) => gf(Wc(n), { hour: "numeric", minute: "2-digit", hourCycle: A1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: mf(n) }).format(o), eu = (o, n) => gf(Wc(n), { weekday: "short", timeZone: mf(n) }).format(o), L1 = (o, n) => o.toLocaleDateString(Wc(n), { weekday: "narrow" }), Me = (o, n) => he(n) ? te(Math.round(Number(n)), o.locale) + "°" : "–", Mn = (o) => {
  const n = new Date(o);
  return n.setHours(0, 0, 0, 0), n;
}, Br = (o, n) => o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate(), ua = Math.PI / 180, T1 = 2440588, D1 = 2451545, Fs = ua * 23.4397, E1 = 149598e3, B1 = -0.833 * ua, P1 = 0.133 * ua, au = 5 * ze, bf = (o) => o.getTime() / va - 0.5 + T1 - D1, wf = (o, n) => Math.atan2(Math.sin(o) * Math.cos(Fs) - Math.tan(n) * Math.sin(Fs), Math.cos(o)), vf = (o, n) => Math.asin(Math.sin(n) * Math.cos(Fs) + Math.cos(n) * Math.sin(Fs) * Math.sin(o)), R1 = (o, n) => ua * (280.16 + 360.9856235 * o) - n, H1 = (o, n, i) => Math.asin(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(o));
function yf(o) {
  const n = ua * (357.5291 + 0.98560028 * o), i = ua * (1.9148 * Math.sin(n) + 0.02 * Math.sin(2 * n) + 3e-4 * Math.sin(3 * n)), l = n + i + ua * 102.9372 + Math.PI;
  return { ra: wf(l, 0), dec: vf(l, 0), dist: E1 };
}
function xf(o) {
  const n = ua * (218.316 + 13.176396 * o), i = ua * (134.963 + 13.064993 * o), l = ua * (93.272 + 13.22935 * o), f = n + ua * 6.289 * Math.sin(i), b = ua * 5.128 * Math.sin(l);
  return { ra: wf(f, b), dec: vf(f, b), dist: 385001 - 20905 * Math.cos(i) };
}
const kf = (o, n, i, l) => {
  const f = bf(n), b = o(f);
  return H1(R1(f, ua * -l) - b.ra, ua * i, b.dec);
}, qs = (o, n, i) => kf(yf, o, n, i), N1 = (o, n, i) => kf(xf, o, n, i);
function Mf(o, n, i, l) {
  const f = {};
  let b = i.getTime(), g = o(i) - n;
  for (let v = b + au; v <= l.getTime(); v += au) {
    const D = o(new Date(v)) - n;
    if (g < 0 != D < 0) {
      const L = new Date(b + (v - b) * g / (g - D));
      D > 0 ? f.rise ?? (f.rise = L) : f.set ?? (f.set = L);
    }
    b = v, g = D;
  }
  return f;
}
const Sf = (o) => {
  const n = Mn(o);
  return [n, new Date(n.getTime() + va)];
}, O1 = (o, n, i) => Mf((l) => qs(l, n, i), B1, ...Sf(o)), I1 = (o, n, i) => Mf((l) => N1(l, n, i), P1, ...Sf(o));
function wc(o) {
  const n = bf(o), i = yf(n), l = xf(n), f = Math.acos(Math.sin(i.dec) * Math.sin(l.dec) + Math.cos(i.dec) * Math.cos(l.dec) * Math.cos(i.ra - l.ra)), b = Math.atan2(i.dist * Math.sin(f), l.dist - i.dist * Math.cos(f)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - l.ra), Math.sin(i.dec) * Math.cos(l.dec) - Math.cos(i.dec) * Math.sin(l.dec) * Math.cos(i.ra - l.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const F1 = (o) => {
  const n = o * 28;
  return n < 0.5 || n > 27.5 ? "new_moon" : n < 6.5 ? "waxing_crescent" : n < 7.5 ? "first_quarter" : n < 13.5 ? "waxing_gibbous" : n < 14.5 ? "full_moon" : n < 20.5 ? "waning_gibbous" : n < 21.5 ? "last_quarter" : "waning_crescent";
}, Or = (o) => {
  const n = o == null ? void 0 : o.config;
  return n && he(n.latitude) && he(n.longitude) ? { lat: Number(n.latitude), lon: Number(n.longitude) } : null;
};
function Pr(o, n) {
  var L, _, P;
  const i = Or(o), l = i ? O1(n, i.lat, i.lon) : {}, f = (L = o == null ? void 0 : o.states) == null ? void 0 : L["sun.sun"], b = Mn(n).getTime(), g = (O) => {
    const k = O ? new Date(O) : null;
    return k && Number.isFinite(k.getTime()) && Mn(k).getTime() === b ? k : null;
  }, v = g((_ = f == null ? void 0 : f.attributes) == null ? void 0 : _.next_rising), D = g((P = f == null ? void 0 : f.attributes) == null ? void 0 : P.next_setting);
  return v && (l.rise = v), D && (l.set = D), l;
}
function q1(o) {
  var l;
  const n = (l = o == null ? void 0 : o.states) == null ? void 0 : l["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Or(o);
  return i ? qs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const er = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Ir = (o, n) => {
  var l;
  const i = (l = o.entities) == null ? void 0 : l[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var l, f;
  for (const b of n) {
    const g = (l = o.states) == null ? void 0 : l[b];
    if (!er(g)) continue;
    const v = (f = g.attributes) == null ? void 0 : f[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, W1 = (o, n) => n.map((i) => {
  var l;
  return (l = o.states) == null ? void 0 : l[i];
}).find(er), V1 = (o, n, i) => n.map((l) => {
  var f;
  return (f = o.states) == null ? void 0 : f[l];
}).find((l) => {
  var f;
  return er(l) && (((f = l.attributes) == null ? void 0 : f.supported_features) == null || Number(l.attributes.supported_features) & S1[i]);
});
function kn(o, n, i) {
  var b, g, v, D;
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
      return f.temperature_unit || ((D = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : D.temperature) || "";
  }
}
function Rs(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [f, ...b] = o.formatEntityAttributeValueToParts(n, i, l).map((g) => g.value);
      return { number: f, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: te(l, o.locale), unit: kn(o, n, i) };
}
function ou(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, l);
  } catch {
  }
  const f = Rs(o, n, i, l);
  return (f.number + " " + f.unit).trim();
}
function Jo(o, n) {
  var l;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (l = n.attributes) == null ? void 0 : l.unit_of_measurement;
  return g1[n.state] || (i && he(n.state) ? te(n.state, o.locale) + " " + i : n.state);
}
function yn(o, n) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(n, { type: "entity" });
  } catch {
  }
  return ((i = n.attributes) == null ? void 0 : i.friendly_name) || n.entity_id;
}
const nu = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ss = (o) => ff.find(([, n]) => o <= n)[0];
function j1(o, n) {
  if (n === "Beaufort") return Math.round(o);
  const i = n ? x1[n] : void 0;
  if (i === void 0) return;
  const l = k1.findIndex((f) => o * i < f);
  return l === -1 ? 12 : l;
}
const ru = (o, n) => {
  const i = n ? M1[n] : void 0;
  return i === void 0 ? void 0 : o * i;
}, iu = (o) => Object.keys(o.states || {}).find((n) => {
  var i, l;
  return n.startsWith("sensor.") && ((l = (i = o.entities) == null ? void 0 : i[n]) == null ? void 0 : l.platform) === "moon";
}), vc = (o) => Object.values(o.states || {}).filter((n) => {
  var i, l;
  return n.entity_id.startsWith("sensor.") && ((i = n.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((l = n.attributes) == null ? void 0 : l.state_class) ?? "") && Ir(o, n.entity_id);
}).map((n) => n.entity_id).sort()[0];
function z1(o) {
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
  return !!l && !!((g = n[l]) != null && g.includes(y1));
};
function G1(o, n) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((l) => {
    var f;
    return l.entity_id.startsWith("sensor.") && Is.includes(((f = l.attributes) == null ? void 0 : f.device_class) ?? "") && Ir(o, l.entity_id) && _f(o, n, l.entity_id);
  }).sort((l, f) => l.entity_id.localeCompare(f.entity_id)).forEach((l) => {
    i.has(l.attributes.device_class) || i.set(l.attributes.device_class, l.entity_id);
  }), Is.map((l) => i.get(l)).filter(Boolean);
}
const $1 = (o, n) => Object.values(o.states || {}).filter((i) => {
  var l, f;
  return i.entity_id.startsWith("sensor.") && Ir(o, i.entity_id) && _f(o, n, i.entity_id) && (((f = (l = o.entities) == null ? void 0 : l[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function su(o, n, i) {
  const l = Math.max(n - o, 1e-6), f = i[i.length - 1], b = i.find((L) => l / L <= 4) ?? f * Math.ceil(l / (4 * f)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const D = [];
  for (let L = g; L <= v + b / 1e3; L += b) D.push(L);
  return { min: g, max: v, ticks: D };
}
const U1 = (o, n, i) => {
  const l = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), f = l(o), b = l(n);
  return "rgb(" + f.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, Y1 = (o, n, i, l) => {
  const f = i * Math.abs(1 - 2 * l), b = l < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + f + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, da = ({ icon: o, name: n, sub: i, visual: l, double: f, backdrop: b, cls: g, zone: v, callouts: D }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + hf(o) + '</div><div class="wbText"><span class="wbName">' + Mt(n) + "</span>" + (i ? '<span class="wbSub">' + Mt(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (D != null && D.length ? '<div class="wbCallouts">' + D.slice(0, 3).map((L) => Array.isArray(L) ? '<span class="wbCallout"><span>' + Mt(L[0]) + "</span><span>" + Mt(L[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Mt(L) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + l + "</div>") + "</div>", _s = (o) => '<div class="wbZoneM">' + o + "</div>", Wa = (o, n) => '<div class="wbValue"><span class="wbNum">' + Mt(o) + "</span>" + (n ? '<span class="wbUnitV">' + Mt(n) + "</span>" : "") + "</div>";
function Z1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, l = (v) => v / Li * 100 + "%", f = (v) => v.map((D) => D.t + "," + i(D.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + l(v.t) + '">' + en(v.rise ? le.sunsetUp : le.sunsetDown) + Mt(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + Mt(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Li + ' 100" preserveAspectRatio="none">' + o.night.map(([v, D]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (D - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Li + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + f(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + l(v.t + 12) + ";width:" + l(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + l(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + l(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + Mt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + Mt(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + l(v.t) + '">' + Mt(v.label) + "</span>").join("") + "</div></div>", g;
}
function lu(o, n, i = 120, l = 300) {
  const g = o.map((N) => N.value), v = Math.min(...g), D = Math.max(...g), L = D - v || 1, _ = (N) => N / (o.length - 1) * l, P = (N) => 18 + (1 - (N - v) / L) * (i - 18 - 18), O = o.map((N, et) => [_(et), P(N.value)]), k = O.length > 2 ? lf(O) : "M" + O.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), K = g.indexOf(D), tt = g.indexOf(v), z = (N) => N === 0 ? "start" : N === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + l + " " + i + '" aria-hidden="true">' + cf(l, 18, i - 18) + ('<path class="wbArea" d="' + k + "L" + l + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + k + '" vector-effect="non-scaling-stroke"></path><text x="' + _(K) + '" y="' + (P(D) - 6) + '" text-anchor="' + z(K) + '">' + Mt(n(D)) + '</text><text x="' + _(tt) + '" y="' + (P(v) + 14) + '" text-anchor="' + z(tt) + '">' + Mt(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Mt(o[0].label) + '</text><text x="' + l + '" y="' + i + '" text-anchor="end">' + Mt(o[o.length - 1].label) + "</text></svg>";
}
function K1(o, n) {
  const b = o.map((P) => P.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, D = v - g || 1, L = 300 / o.length, _ = (P) => (1 - (P - g) / D) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((P, O) => '<rect class="wbBar' + (P.now ? " wbNowBar" : "") + '" x="' + (O * L + L * 0.2) + '" y="' + _(P.value) + '" width="' + L * 0.6 + '" height="' + (104 - _(P.value)) + '" rx="6"></rect><text x="' + (O * L + L / 2) + '" y="120" text-anchor="middle">' + Mt(P.label) + "</text>").join("") + "</svg>";
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
], J1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], cu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Q1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let tg = 0;
function du(o, { getHass: n, entityId: i, style: l = "bitmap", motion: f = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: D } = {}) {
  var Ui, Nn;
  const L = "wb" + ++tg + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = l;
  const P = document.createElement("div");
  P.className = "wbBento", _.appendChild(P), o.replaceChildren(_);
  const O = document.createElement("div");
  O.className = "wb wbPopup", O.dataset.style = l, O.hidden = !0;
  const k = ["aq_tile", "pollen_tile", "radar_tile"], K = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), tt = { current: "wide", hourly: "wide", compared_to_average: "double" }, z = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  K.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = tt[c] || "tile", m.hidden = !0, z.includes(c) && (m.dataset.xl = ""), P.appendChild(m), N[c] = { el: m, html: null };
  });
  let et = !1, it = null, pt = 0, Q = -1, I = !1, $ = null, ut = "";
  const xt = "homecore-next-view", Rt = (() => {
    try {
      return localStorage.getItem(xt);
    } catch {
      return null;
    }
  })(), ct = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Rt === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), Y = /* @__PURE__ */ new Date();
  const nt = {}, st = {}, mt = {}, ot = (c) => {
    var m;
    return ((m = mt[c]) == null ? void 0 : m.forecast) ?? [];
  }, lt = (c, m) => {
    var w;
    return mt[m] ? (w = c.states) == null ? void 0 : w[mt[m].entityId] : void 0;
  };
  function q(c) {
    const m = st[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete st[c]), mt[c] && delete mt[c];
  }
  function gt(c, m, w) {
    var H;
    if (typeof ((H = c.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const x = { entityId: w };
    try {
      x.unsub = Promise.resolve(c.connection.subscribeMessage((W) => {
        et || st[m] !== x || (W != null && W.forecast ? mt[m] = { entityId: w, forecast: W.forecast } : delete mt[m], dn());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (W) {
      x.unsub = Promise.reject(W);
    }
    x.unsub.catch(() => {
      st[m] === x && delete st[m];
    }), st[m] = x;
  }
  function Ct(c, m) {
    var w;
    for (const x of ["daily", "hourly"]) {
      const H = V1(c, m, x);
      ((w = st[x]) == null ? void 0 : w.entityId) !== (H == null ? void 0 : H.entity_id) && (q(x), H && gt(c, x, H.entity_id));
    }
  }
  const Vt = (c, m, w, x = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: x,
    no_attributes: x,
    significant_changes_only: !1
  });
  async function ne(c, m) {
    var Z, J, U;
    const w = Ie(c, m, "pressure");
    if (!w) return;
    const x = w.stateObj.entity_id, H = await Vt(c, x, new Date(Date.now() - 3 * se)), W = (U = (J = (Z = H == null ? void 0 : H[x]) == null ? void 0 : Z.find((at) => {
      var rt;
      return typeof ((rt = at.a) == null ? void 0 : rt.pressure) == "number";
    })) == null ? void 0 : J.a) == null ? void 0 : U.pressure;
    S.pressureHistory = typeof W == "number" ? { entityId: x, value: W } : void 0;
  }
  async function sa(c, m) {
    var J;
    const w = Ie(c, m, "temperature");
    if (!w) return;
    const x = w.stateObj.entity_id, H = Mn(/* @__PURE__ */ new Date()), W = await Vt(c, x, new Date(H.getTime() - s1 * va)), Z = /* @__PURE__ */ new Map();
    for (const U of (W == null ? void 0 : W[x]) ?? []) {
      const at = (J = U.a) == null ? void 0 : J.temperature, rt = new Date((U.lc ?? U.lu) * 1e3);
      if (typeof at != "number" || rt >= H) continue;
      const bt = rt.toDateString();
      Z.set(bt, Math.max(Z.get(bt) ?? -1 / 0, at));
    }
    S.temperatureHistory = { entityId: x, dailyHighs: [...Z.values()], days: [...Z.entries()].map(([U, at]) => ({ date: new Date(U), high: at })) };
  }
  async function fa(c) {
    const m = vc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function So() {
    const c = n == null ? void 0 : n();
    if (!c || et || typeof c.callWS != "function") return;
    const m = Wt(c);
    S.lastFetch = Date.now(), [ne(c, m), sa(c, m), fa(c)].forEach((w) => w.then(() => dn(), () => {
    }));
  }
  async function La() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const m = Ie(c, Wt(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, x = Mn(/* @__PURE__ */ new Date());
    try {
      const H = await Vt(c, w, x), W = (Z) => ((H == null ? void 0 : H[w]) ?? []).map((J) => {
        var U;
        return { time: J.lu * 1e3, value: (U = J.a) == null ? void 0 : U[Z] };
      }).filter((J) => typeof J.value == "number");
      S.todayHistory = { day: x.toDateString(), fetched: Date.now(), temperature: W("temperature"), humidity: W("humidity") }, dn();
    } catch {
    }
  }
  async function rn(c) {
    const m = n == null ? void 0 : n();
    if (m)
      try {
        const w = await Vt(m, c, new Date(Date.now() - 24 * se), !0), x = ((w == null ? void 0 : w[c]) ?? []).filter((W) => he(W.s)), H = Math.max(1, Math.ceil(x.length / 48));
        S.aqHistory = { entityId: c, points: x.filter((W, Z) => Z % H === 0).map((W) => ({ label: Je(new Date(W.lu * 1e3), m), value: Number(W.s) })) }, dn();
      } catch {
      }
  }
  function Cn(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      S.categories = z1(m);
    }, () => {
      S.categories = {};
    }).then(() => dn()));
  }
  function Wt(c) {
    var w;
    const m = Object.keys(c.states || {}).filter((x) => x.startsWith("weather.") && Ir(c, x)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...m.filter((x) => x !== i)] : m;
  }
  const ge = (c) => S.categories ? { air: G1(c, S.categories), pollen: $1(c, S.categories) } : { air: [], pollen: [] };
  function Ke(c, m, w, x) {
    if (l === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + gc(c, w || c === "clear-night") + "</span>";
    if (l === "smooth") {
      const H = E0(c, m === 90, w, L + "g-" + x);
      return '<span class="wbWx wbS' + m + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + Mt(zu(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const Fr = () => ot("daily").filter((c) => c.templow != null).slice(0, Q0);
  function kt(c, m) {
    const w = new Date(m.datetime), x = /* @__PURE__ */ new Date();
    return Br(w, x) ? wt.today : Br(w, new Date(x.getTime() + va)) ? wt.tomorrow : eu(w, c);
  }
  const An = (c, m, w) => w === 0 ? kt(c, m) : eu(new Date(m.datetime), c);
  function qr(c, m) {
    var rt, bt, Bt, Et;
    const w = W1(c, m);
    if (!w) return "";
    const x = Fr(), H = ct.openDay !== void 0 ? x[ct.openDay] : void 0, W = Ie(c, m, "temperature"), Z = x[0], J = Z && Br(new Date(Z.datetime), /* @__PURE__ */ new Date()), U = ((bt = (rt = c.config) == null ? void 0 : rt.unit_system) == null ? void 0 : bt.temperature) || ((Bt = w.attributes) == null ? void 0 : Bt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Mt(wt.openPage) + '">' : '<div class="wbCurrent">') + Ke(w.state, 90, q1(c), "now") + '<div class="wbTempBlock">' + (W && he(W.value) ? '<div class="wbTemp"><span class="wbDeg">' + Mt(te(Math.round(Number(W.value)), c.locale)) + '</span><span class="wbUnit">' + Mt(U) + "</span></div>" : "") + '<div class="wbPlace">' + Mt(((Et = c.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Mt(Jo(c, w)) + "</div>" + (J && Z.templow != null ? '<div class="wbRange">' + Mt(aa(wt.range, { high: Me(c, Z.temperature), low: Me(c, Z.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Se(c) + Pi(c), x.length) {
      const _t = J && W && he(W.value) ? Me(c, W.value) : "", Gt = (Pt, dt, Ot) => Pt === 0 && _t ? '<span class="wbAsDay">' + Mt(dt) + '</span><span class="wbAsNow">' + Mt(Ot) + "</span>" : Mt(dt);
      at += '<div class="wbColumns" role="list">' + x.map((Pt, dt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="col-' + dt + '"><span class="wbDay">' + Gt(dt, An(c, Pt, dt), wt.now) + "</span>" + Ke(Pt.condition ?? "cloudy", 60, !1, "col" + dt) + '<span class="wbTemps"><span class="wbHi">' + Gt(dt, Me(c, Pt.temperature), _t) + '</span><span class="wbLo">' + Mt(Me(c, Pt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + x.map((Pt, dt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="half-' + dt + '">' + Ke(Pt.condition ?? "cloudy", 40, !1, "half" + dt) + '<span class="wbText"><span class="wbName">' + Mt(kt(c, Pt)) + '</span><span class="wbSub">' + Mt(aa(wt.highLow, { high: Me(c, Pt.temperature), low: Me(c, Pt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (H ? _o(c, m, H) : "") + "</div>";
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
  }, nr = {
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
  function Ln(c) {
    const m = Date.now(), w = ot("hourly").filter((bt) => new Date(bt.datetime).getTime() > m - se).slice(0, 13);
    if (w.length < 2) return "";
    const x = (bt) => Je(new Date(bt.datetime), c), H = (bt) => Bi[bt.condition] || "", W = (bt) => nr[bt.condition] || bt.condition;
    let Z = H(w[0]);
    if (!Z) return "";
    let J = w[0], U = 0;
    for (const bt of w.slice(1))
      U === 2 || W(bt) === W(J) || !H(bt) || (Z += (U ? " and " : ", ") + H(bt) + " from " + x(bt), J = bt, U++);
    const at = Number(w[0].temperature), rt = w.filter((bt) => he(bt.temperature));
    if (he(at) && rt.length) {
      const bt = rt.reduce((Et, _t) => Number(_t.temperature) < Number(Et.temperature) ? _t : Et), Bt = rt.reduce((Et, _t) => Number(_t.temperature) > Number(Et.temperature) ? _t : Et);
      at - Number(bt.temperature) >= 3 ? Z += ", down to " + Me(c, bt.temperature) + " by " + x(bt) : Number(Bt.temperature) - at >= 3 && (Z += ", up to " + Me(c, Bt.temperature) + " by " + x(Bt));
    }
    return Z[0].toUpperCase() + Z.slice(1) + ".";
  }
  const Se = (c) => {
    const m = Ln(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + Mt(m) + "</p></div>" : "";
  };
  function Pi(c) {
    const [m, w] = xs[v == null ? void 0 : v()] || xs.day, x = Date.now(), H = ot("hourly").filter((W) => {
      const Z = new Date(W.datetime), J = Z.getHours();
      return Z.getTime() > x - se / 2 && J >= m && J < w && he(W.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((W, Z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Mt(Je(new Date(W.datetime), c)) + "</span>" + Ke(W.condition ?? "cloudy", 40, W.is_daytime === !1, "hr" + Z) + '<span class="wbHourTemp">' + Mt(Me(c, W.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Ta(c) {
    const m = c.getTime(), w = Date.now() - se;
    return ot("hourly").filter((x) => {
      const H = new Date(x.datetime).getTime();
      return H >= m && H < m + va && H > w;
    });
  }
  function Xt(c) {
    if (!c.length) return ["temperature"];
    const m = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && m.push("precipitation"), c.some((w) => w.humidity != null) && m.push("humidity"), m;
  }
  function _o(c, m, w) {
    const x = Mn(new Date(w.datetime)), H = Ta(x), W = Xt(H), Z = W.includes(ct.dayMode) ? ct.dayMode : "temperature", J = (U) => U === "humidity" ? wt.humidity : wt.modes[U];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ke(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Mt(kt(c, w)) + '</span><span class="wbSub">' + Mt(aa(wt.highLow, { high: Me(c, w.temperature), low: Me(c, w.templow) })) + '</span></div><button class="wbBack" title="' + Mt(wt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + en(le.back) + "</button></div>" + (W.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + W.map((U) => '<button aria-pressed="' + (U === Z) + '" data-wb="day-mode" data-mode="' + U + '" data-wb-focus="day-mode-' + U + '">' + Mt(J(U)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Z1(Wr(c, m, x, H, Z)) + "</div></div>";
  }
  function Wr(c, m, w, x, H) {
    var No;
    const W = w.getTime(), Z = Date.now(), J = Br(w, /* @__PURE__ */ new Date()), U = (ee) => (ee - W) / ze, at = (ee) => Je(new Date(ee), c), rt = (ee) => new Date(ee.datetime).getTime(), bt = [0, 3, 6, 9, 12, 15, 18, 21].map((ee) => ({ t: ee * 60, label: at(W + ee * se), minor: ee % 6 !== 0 })), { rise: Bt, set: Et } = Pr(c, w), _t = [], Gt = [];
    Bt && (_t.push({ t: U(Bt.getTime()), label: at(Bt.getTime()), rise: !0 }), Gt.push([0, U(Bt.getTime())])), Et && (_t.push({ t: U(Et.getTime()), label: at(Et.getTime()), rise: !1 }), Gt.push([U(Et.getTime()), Li]));
    const Pt = Or(c);
    !Bt && !Et && Pt && qs(new Date(W + va / 2), Pt.lat, Pt.lon) < 0 && Gt.push([0, Li]);
    const dt = J ? U(Z) : void 0, Ot = { hours: bt, sun: _t, night: Gt };
    if (!x.length && !J) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: wt.noHourly };
    if (H === "precipitation") {
      const ee = x.some((ea) => ea.precipitation_probability != null), Oo = x.map((ea) => ({ t: U(rt(ea)), v: Number((ee ? ea.precipitation_probability : ea.precipitation) ?? 0) })), uo = kn(c, lt(c, "hourly"), "precipitation"), Io = Math.max(0, ...Oo.map((ea) => ea.v)), ii = ee ? 100 : su(0, Math.max(Io, 1), [0.5, 1, 2, 5, 10]).max, Yi = (ea) => ee ? te(ea, c.locale) + "%" : te(ea, c.locale, { maximumFractionDigits: 1 }) + " " + uo, wr = Oo.find((ea) => ea.v === Io);
      return {
        ...Ot,
        kind: "bars",
        points: Oo,
        min: 0,
        max: ii,
        ticks: [0, ii / 2, ii],
        format: Yi,
        now: dt !== void 0 ? { t: dt, v: 0 } : void 0,
        peak: wr && Io > 0 ? { t: wr.t + 30, v: wr.v, label: Yi(wr.v) } : void 0,
        note: Io > 0 ? void 0 : wt.noRain
      };
    }
    const qt = H === "humidity" ? "humidity" : "temperature", ve = x.filter((ee) => ee[qt] != null && (!J || rt(ee) >= Z)).map((ee) => ({ t: U(rt(ee)), v: Number(ee[qt]) }));
    let Dt, re = [];
    if (dt !== void 0) {
      const ee = Ie(c, m, qt);
      ee && he(ee.value) && (Dt = { t: dt, v: Number(ee.value) }, ve.unshift(Dt)), re = (((No = S.todayHistory) == null ? void 0 : No.day) === w.toDateString() ? S.todayHistory[qt] : []).filter((uo) => uo.time <= Z).map((uo) => ({ t: Math.max(0, U(uo.time)), v: uo.value })), Dt && re.length && re.push(Dt);
    }
    const $t = [...re, ...ve];
    if (!$t.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: wt.noHourly };
    const Ma = $t.map((ee) => ee.v), po = su(Math.min(...Ma), Math.max(...Ma), qt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    qt === "humidity" && (po.min = Math.max(0, po.min), po.max = Math.min(100, po.max), po.ticks = po.ticks.filter((ee) => ee >= 0 && ee <= 100));
    const ri = qt === "humidity" ? (ee) => te(ee, c.locale) + "%" : (ee) => Me(c, ee), br = qt === "temperature" ? $t.reduce((ee, Oo) => Oo.v > ee.v ? Oo : ee) : void 0;
    return { ...Ot, kind: "line", points: ve, past: re, ...po, format: ri, now: Dt, peak: br ? { ...br, label: ri(br.v) } : void 0 };
  }
  function jt(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function xa(c, m, w = zp) {
    var W, Z;
    const x = ot("daily"), H = [];
    for (let J = 0; J < w; J++) for (const U of [!1, !0]) {
      const at = c.getTime() + (J * 24 + (U ? 12 : 0)) * se, rt = at + 12 * se, bt = {};
      m.forEach((Et) => {
        const _t = new Date(Et.datetime).getTime();
        Et.condition && _t >= at && _t < rt && (bt[Et.condition] = (bt[Et.condition] ?? 0) + (r1.has(Et.condition) ? 2 : 1));
      });
      let Bt = (W = Object.entries(bt).sort((Et, _t) => _t[1] - Et[1])[0]) == null ? void 0 : W[0];
      if (!Bt) {
        const Et = new Date(at).toDateString();
        Bt = ((Z = x.find((_t) => new Date(_t.datetime).toDateString() === Et)) == null ? void 0 : Z.condition) ?? "cloudy";
      }
      H.push({ cond: U && Bt === "sunny" ? "clear-night" : Bt, night: U });
    }
    return H;
  }
  function Ri(c, m, w) {
    const x = lt(c, "hourly"), H = m.precipitation_probability != null ? te(m.precipitation_probability, c.locale) + "%" : "", W = m.precipitation ? te(m.precipitation, c.locale) + " " + kn(c, x, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return H ? [H, W] : [W || "–", ""];
      case "wind":
        return m.wind_speed != null ? [te(Math.round(m.wind_speed), c.locale), kn(c, x, "wind_speed")] : ["–", ""];
      default:
        return [Me(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Hi(c, m, w) {
    const [x, H] = xs[v == null ? void 0 : v()] || xs.day, W = [];
    for (let Z = 0; Z < 4 && W.length < 3; Z++) {
      const J = /* @__PURE__ */ new Date();
      J.setHours(0, 0, 0, 0), J.setDate(J.getDate() + Z);
      const U = new Date(J);
      U.setHours(H, 0, 0, 0), J.setHours(x, 0, 0, 0), !(U.getTime() <= w || !m.some((at) => {
        const rt = new Date(at.datetime).getTime();
        return rt >= J.getTime() && rt <= U.getTime();
      })) && W.push({ a: J.getTime(), b: U.getTime(), label: kt(c, { datetime: J.toISOString() }) });
    }
    return W;
  }
  function Da(c, m, w, x, H, W) {
    const Z = (w.b - m.a) / se, J = (dt) => ((dt - m.a) / se).toFixed(3), U = 80, at = 32, rt = [];
    for (const dt = new Date(m.a - va); dt.getTime() < w.b + va; dt.setDate(dt.getDate() + 1)) {
      const { rise: Ot, set: qt } = Pr(c, new Date(dt));
      Ot && qt && rt.push({ rise: Ot.getTime(), set: qt.getTime() });
    }
    const bt = (dt, Ot) => U - (U - at) * Math.sin(Math.PI * (Ot - dt.rise) / (dt.set - dt.rise)), Bt = (dt) => !rt.some((Ot) => dt >= Ot.rise && dt <= Ot.set);
    let Et = "", _t = "", Gt = "";
    rt.forEach((dt, Ot) => {
      const qt = [];
      for (let Dt = dt.rise; Dt <= dt.set; Dt += 15 * ze) qt.push(J(Dt) + "," + bt(dt, Dt).toFixed(2));
      qt.push(J(dt.set) + "," + U), Et += '<polyline class="wbLineArc" points="' + qt.join(" ") + '"/>';
      const ve = rt[Ot + 1];
      ve && (Et += '<rect class="wbLineNight" x="' + J(dt.set) + '" y="0" width="' + ((ve.rise - dt.set) / se).toFixed(3) + '" height="100"/>'), [[dt.rise, "↑"], [dt.set, "↓"]].forEach(([Dt, re]) => {
        Dt < m.a || Dt > w.b || (_t += '<line class="wbLineEdge" x1="' + J(Dt) + '" x2="' + J(Dt) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + W(Dt) + '">' + re + " " + Mt(Je(new Date(Dt), c)) + "</span>");
      });
    });
    const Pt = rt.find((dt) => H >= dt.rise && H <= dt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + _t + '<line class="wbLineHorizon" x1="0" x2="' + Z + '" y1="' + U + '" y2="' + U + '"/></svg>' + Gt + (Pt ? '<span class="wbLineNow" style="left:' + W(H) + ";top:" + bt(Pt, H) + '%">' + gc("sunny", !1) + "</span>" : "") + x.filter((dt) => dt.entry && !dt.now).map((dt) => '<span class="wbLineGlyph' + dt.edge + '" style="left:' + W(dt.t) + '">' + gc(dt.entry.condition ?? "cloudy", Bt(dt.t)) + "</span>").join("");
  }
  function Le(c, m) {
    delete nt.hourly;
    const w = ct.hourlyView === "bars" ? "bars" : "strip", x = '<div class="wbHeader"><h2 class="wbTitle">' + Mt(w === "bars" ? wt.nextDays : wt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Mt(wt.showAs) + '">' + ["strip", "bars"].map((Dt) => '<button aria-pressed="' + (Dt === w) + '" data-wb="hourly-view" data-view="' + Dt + '" data-wb-focus="hourly-view-' + Dt + '">' + Mt(wt.views[Dt]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return Tn(c, m, x);
    const H = ot("hourly"), W = Math.floor(Date.now() / ze) * ze, Z = H.filter((Dt) => new Date(Dt.datetime).getTime() > W - se);
    if (!Z.length) return "";
    const J = jt(Z), U = J.includes(ct.hourlyMode) ? ct.hourlyMode : "temperature", at = Hi(c, H, W);
    if (!at.length) return "";
    const rt = at[0], bt = at[at.length - 1], Bt = (rt.b - rt.a) / se, Et = (Dt) => "calc(var(--wb-u) * " + ((Dt - rt.a) / se).toFixed(3) + ")", _t = new Date(rt.a);
    _t.setHours(6, 0, 0, 0), _t.getTime() > rt.a && _t.setDate(_t.getDate() - 1);
    const Gt = Math.ceil((bt.b - _t.getTime()) / va);
    l !== "line" && (nt.hourly = { segs: xa(_t, H, Gt), seed: _t.getDate(), columns: Gt });
    const Pt = (Dt) => Dt === rt.a ? " wbFirst" : Dt === bt.b ? " wbLast" : "", dt = [];
    for (let Dt = rt.a; Dt < bt.b; ) {
      const re = new Date(Dt);
      re.setHours(24, 0, 0, 0);
      const $t = Math.min(re.getTime(), bt.b);
      dt.push({ a: Dt, b: $t, label: kt(c, { datetime: new Date(Dt).toISOString() }), page: at.find((Ma) => Ma.a >= Dt && Ma.a < $t) || at.find((Ma) => Ma.a < $t && Ma.b > Dt) }), Dt = $t;
    }
    const Ot = W > rt.a && W < bt.b ? Math.floor((W - rt.a) / (2 * se)) * 2 : 0, qt = [];
    for (let Dt = rt.a; Dt <= bt.b; Dt += se) {
      const re = new Date(Dt), $t = Pt(Dt);
      !$t && re.getHours() % e1 || !$t && (Math.abs(rt.a - Dt) < 2 * se || Math.abs(bt.b - Dt) < 2 * se) || W >= rt.a && Math.abs(Dt - W) < 1.5 * se && !$t || qt.push({ t: Dt, edge: $t, label: Je(re, c), entry: Dt >= W - se ? H.find((Ma) => new Date(Ma.datetime).getTime() === Dt) : void 0 });
    }
    W > rt.a && W < rt.b && qt.push({ t: W, edge: W - rt.a < se ? " wbFirst" : rt.b - W < se ? " wbLast" : "", label: wt.now, entry: Z[0], now: !0 });
    const ve = (Dt, re) => '<span class="wbMark' + Dt.edge + (Dt.now ? " wbNowMark" : "") + '" style="left:' + Et(Dt.t) + '">' + re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + x + (J.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + J.map((Dt) => '<button aria-pressed="' + (Dt === U) + '" data-wb="hourly-mode" data-mode="' + Dt + '" data-wb-focus="hourly-mode-' + Dt + '">' + Mt(wt.modes[Dt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Mt(wt.nextHours) + '" data-span="' + Bt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Bt + ");width:calc(var(--wb-u) * " + (bt.b - rt.a) / se + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((bt.b - rt.a) / (2 * se)) + 1)].map((Dt, re) => '<i class="wbSnap" style="left:' + Et(rt.a + re * 2 * se) + '"></i>').join("") + '<div class="wbDays">' + dt.map((Dt, re) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Dt.b - Dt.a) / se).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (re === 0 ? Ot : (((($t = Dt.page) == null ? void 0 : $t.a) ?? Dt.a) - rt.a) / se) + '" data-wb-focus="hours-day-' + re + '">' + Mt(Dt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + qt.map((Dt) => ve(Dt, Mt(Dt.label))).join("") + "</div>" + (l === "line" ? '<div class="wbSky wbLineSky">' + Da(c, rt, bt, qt, W, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(_t.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (l === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (W > rt.a ? '<i class="wbPast" style="width:' + Et(Math.min(W, bt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(W) + '"></i>' : "") + dt.slice(1).map((Dt) => '<i class="wbMidnight" style="left:' + Et(Dt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + qt.map((Dt) => {
      if (!Dt.entry) return "";
      const [re, $t] = Ri(c, Dt.entry, U);
      return ve(Dt, '<span class="wbPrimaryV">' + Mt(re) + '</span><span class="wbSecondary">' + Mt($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ni(c) {
    const m = a1, w = m.findIndex(([U]) => U >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [x, H] = m[w - 1], [W, Z] = m[w], J = (c - x) / (W - x);
    return "rgb(" + H.map((U, at) => Math.round(U + (Z[at] - U) * J)).join(",") + ")";
  }
  function Tn(c, m, w) {
    var Et;
    const x = ot("daily").filter((_t) => he(_t.templow) && he(_t.temperature)).slice(0, 7);
    if (!x.length) return "";
    const H = Math.min(...x.map((_t) => Number(_t.templow))), W = Math.max(...x.map((_t) => Number(_t.temperature))), Z = Math.max(1, W - H), J = (_t) => Math.max(0, Math.min(100, (_t - H) / Z * 100)).toFixed(2), U = /F/.test(kn(c, lt(c, "daily"), "temperature")), at = (_t) => U ? (_t - 32) / 1.8 : _t, rt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_t) => Ni(at(H + _t * Z)) + " " + _t * 100 + "%").join(",") + ")", bt = (Et = Ie(c, m, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(ot("hourly").filter((_t) => new Date(_t.datetime).getTime() > Date.now() - se)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + x.map((_t, Gt) => {
      const Pt = kt(c, _t), dt = Br(new Date(_t.datetime), /* @__PURE__ */ new Date()), Ot = Number(_t.templow), qt = Number(_t.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Mt(aa(wt.rangeRow, { day: Pt, low: Me(c, Ot), high: Me(c, qt) })) + '"><span class="wbRangeDay">' + Mt(Pt) + "</span>" + Ke(_t.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + Mt(Me(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + rt + ";clip-path:inset(0 " + (100 - J(qt)) + "% 0 " + J(Ot) + '% round 4px)"></i>' + (dt && he(bt) ? '<i class="wbRangeNow" style="left:' + J(Number(bt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Mt(Me(c, qt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Vr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], zr = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [x, H] = c[w - 1], [W, Z] = c[w];
      return U1(H, Z, (m - x) / (W - x));
    }
    return c[c.length - 1][1];
  }, sn = (c, m, w) => {
    if (!m || !w) return Vr[5][1];
    const x = (c.getTime() - w.getTime()) / ze;
    return x >= -90 ? zr(jr, x) : zr(Vr, (c.getTime() - m.getTime()) / ze);
  }, Vs = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function ro(c) {
    const m = Ft, { rise: w, set: x } = Pr(c, m), H = w && x ? Math.round((x.getTime() - w.getTime()) / ze) : 0, W = Math.floor(H / 60), Z = H % 60, J = (ve) => ve ? Je(ve, c) : "–", U = new Date(m);
    U.setDate(U.getDate() + 1);
    const at = Pr(c, U), rt = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / ze) : 0, bt = new Date(m);
    bt.setDate(bt.getDate() - 1);
    const Bt = !!(w && x && m >= w && m <= x), Et = !!(w && m < w), _t = Bt ? w : Et ? Pr(c, bt).set : x, Gt = Bt ? x : Et ? w : at.rise, Pt = _t && Gt ? Math.min(1, Math.max(0, (m.getTime() - _t.getTime()) / (Gt.getTime() - _t.getTime()))) : 0, dt = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / ze)) : 0, Ot = Gt ? Vs(dt) : "–", qt = Bt ? wt.untilSunset : wt.untilSunrise;
    return da({
      icon: le.sunny,
      name: wt.sun,
      sub: H ? aa(wt.daylightShort, { hours: W, minutes: Z }) : void 0,
      cls: "wbSunTile",
      callouts: [[wt.callout.riseTomorrow, J(at.rise)], [wt.callout.setTomorrow, J(at.set)], ...rt ? [[wt.callout.dayTomorrow, Math.floor(rt / 60) + "h " + rt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + sn(m, w, x) + '"><svg class="wbSunTrack" data-up="' + (Bt ? 1 : 0) + '" data-f="' + Pt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Mt(Ot) + '</span><span class="wbSunWord">' + Mt(qt) + '</span></div><span class="wbSunAt wbSunRise">' + Mt(J(w)) + '</span><span class="wbSunAt wbSunSet">' + Mt(J(x)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      _s(Wa(Ot, ""))
    });
  }
  const Te = 22;
  function rr(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), x = Te, H = x / 2, W = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < x * 3 || w < x * 3 || c.dataset.drawn === W) return;
    c.dataset.drawn = W;
    const Z = "M" + H + " " + (w - x) + "V" + x + "A" + H + " " + H + " 0 0 1 " + x + " " + H + "H" + (m - x) + "A" + H + " " + H + " 0 0 1 " + (m - H) + " " + x + "V" + (w - x), J = "M" + (m - H) + " " + (w - x) + "A" + H + " " + H + " 0 0 1 " + (m - x) + " " + (w - H) + "H" + x + "A" + H + " " + H + " 0 0 1 " + H + " " + (w - x), U = 16, at = 6, rt = "M" + U + " 0H" + (m - U) + "A" + U + " " + U + " 0 0 1 " + m + " " + U + "V" + (w - U) + "A" + U + " " + U + " 0 0 1 " + (m - U) + " " + w + "H" + U + "A" + U + " " + U + " 0 0 1 0 " + (w - U) + "V" + U + "A" + U + " " + U + " 0 0 1 " + U + " 0ZM" + (x + at) + " " + x + "A" + at + " " + at + " 0 0 0 " + x + " " + (x + at) + "V" + (w - x - at) + "A" + at + " " + at + " 0 0 0 " + (x + at) + " " + (w - x) + "H" + (m - x - at) + "A" + at + " " + at + " 0 0 0 " + (m - x) + " " + (w - x - at) + "V" + (x + at) + "A" + at + " " + at + " 0 0 0 " + (m - x - at) + " " + x + "Z", bt = c.dataset.up === "1", Bt = Number(c.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const _t = document.createElementNS(Et, "path");
    _t.setAttribute("d", bt ? Z : J), c.replaceChildren(_t);
    const Gt = _t.getTotalLength(), Pt = _t.getPointAtLength(Gt * Bt), dt = bt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + L + 'sun-day"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + x * 2 + '"></path></mask><mask id="' + L + 'sun-done"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + x * 2 + '" stroke-dasharray="' + (bt ? (dt * Bt).toFixed(1) + " " + (dt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + rt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + rt + '" mask="url(#' + L + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + rt + '" mask="url(#' + L + 'sun-done)"></path><circle class="wbSunDot' + (bt ? "" : " wbSunNight") + '" cx="' + Pt.x.toFixed(1) + '" cy="' + Pt.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const Co = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => rr(m.target))) : null;
  function Gr() {
    Co == null || Co.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      rr(c), Co == null || Co.observe(c);
    });
  }
  function js(c, m, w) {
    const x = (Z) => L + "moon-" + Z, H = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + x("terminator") + ')" d="' + Y1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", W = (Z, J, U, at, rt, bt) => '<filter id="' + x(Z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + J + '" numOctaves="' + U + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Bt) => "<feFunc" + Bt + ' type="linear" slope="' + rt + '" intercept="' + bt + '"></feFunc' + Bt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + x("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + x("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + x("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + x("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + x("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + W("mottle", "0.045", 4, 3, 1.8, -0.4) + W("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + x("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + x("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + x("soften") + ')">' + X1.map(([Z, J, U, at, rt, bt]) => '<ellipse cx="' + Z + '" cy="' + J + '" rx="' + U + '" ry="' + at + '" fill-opacity="' + bt + '" transform="rotate(' + rt + " " + Z + " " + J + ')"></ellipse>').join("") + "</g>" + J1.map(([Z, J, U]) => '<circle class="wbCrater" cx="' + Z + '" cy="' + J + '" r="' + U + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + x("glow") + ')">' + Q1.map(([Z, J]) => '<line x1="54.4" y1="95" x2="' + Z + '" y2="' + J + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + x("glow") + ')">' + cu.map(([Z, J, U]) => '<circle cx="' + Z + '" cy="' + J + '" r="' + U * 2 + '"></circle>').join("") + "</g>" + cu.map(([Z, J, U]) => '<circle class="wbBrightCenter" cx="' + Z + '" cy="' + J + '" r="' + U + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + x("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + x("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Oi(c) {
    const m = Y, w = Or(c), x = (w == null ? void 0 : w.lat) ?? 0, H = wc(m), W = iu(c), Z = W ? c.states[W] : void 0, J = er(Z) && w1.includes(Z.state) ? Z.state : F1(H.phase), { rise: U, set: at } = w ? I1(m, w.lat, w.lon) : {}, rt = H.phase > 0.5 != x < 0, bt = te(Math.round(H.fraction * 100), c.locale) + "%", Bt = U ?? at;
    return Bt && Je(Bt, c), da({
      icon: le.night,
      name: wt.moon,
      sub: wt.phases[J],
      callouts: [...U ? [[wt.callout.moonrise, Je(U, c)]] : [], ...at ? [[wt.callout.moonset, Je(at, c)]] : [], [wt.callout.lit, bt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + js(H.fraction, rt, x < 0) + "</div>" + _s(Wa(te(Math.round(H.fraction * 100), c.locale), "%"))
    });
  }
  function Ut(c, m) {
    var _t;
    const w = Ie(c, m, "wind_speed");
    if (!w || !he(w.value)) return "";
    const x = Ie(c, m, "wind_gust_speed"), H = Ie(c, m, "wind_bearing"), W = H && he(H.value) ? Number(H.value) : void 0, Z = j1(Number(w.value), (_t = w.stateObj.attributes) == null ? void 0 : _t.wind_speed_unit), J = Rs(c, w.stateObj, "wind_speed", w.value), U = W !== void 0 ? wt.cardinal[b1[((W + 11.25) / 22.5 | 0) % 16]] : void 0, at = x ? ou(c, x.stateObj, "wind_gust_speed", x.value) : void 0, rt = [U ? aa(wt.windFrom, { direction: U }) : void 0, Z !== void 0 ? Z + " " + wt.beaufort : void 0].filter(Boolean).join(" · ") || at, bt = (Gt, Pt) => {
      const dt = (Gt - 90) * Math.PI / 180;
      return [100 + Pt * Math.cos(dt), 100 + Pt * Math.sin(dt)];
    }, Bt = Array.from({ length: 36 }, (Gt, Pt) => Pt * 10).map((Gt) => {
      const Pt = Gt % 90 === 0, [dt, Ot] = bt(Gt, 97), [qt, ve] = bt(Gt, Pt ? 83 : 89);
      return '<line class="wbTick' + (Pt ? " wbMajor" : "") + '" x1="' + dt + '" y1="' + Ot + '" x2="' + qt + '" y2="' + ve + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Pt]) => {
      const [dt, Ot] = bt(Pt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + dt + '" y="' + Ot + '">' + Mt(wt.cardinal[Gt]) + "</text>";
    }).join("");
    return da({ icon: le.windy, name: wt.wind, sub: rt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Bt + Et + (W !== void 0 ? '<path class="wbMarker" transform="rotate(' + W + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Mt(J.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Mt(J.unit) + "</text></svg>" });
  }
  const vt = (c, m) => {
    if (c < 3) return wt.advice.fine;
    if (c < 8) return wt.advice.sunblock;
    const w = Date.now(), x = ot("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > w && H.uv_index < 6);
    return x && new Date(x.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? aa(wt.advice.avoidUntil, { time: Je(new Date(x.datetime), m) }) : wt.advice.avoidToday;
  };
  function be(c, m) {
    const w = Ie(c, m, "uv_index");
    if (!w || !he(w.value)) return "";
    const x = Number(w.value), H = wt.uvLevel[nu(x)], W = /* @__PURE__ */ new Date();
    W.setHours(23, 59, 59, 999);
    const Z = ot("hourly").filter((rt) => rt.uv_index != null && new Date(rt.datetime) > /* @__PURE__ */ new Date() && new Date(rt.datetime) <= W).reduce((rt, bt) => !rt || bt.uv_index > rt.uv ? { uv: bt.uv_index, time: new Date(bt.datetime) } : rt, void 0), J = v1[nu(x)], U = 216 * Math.min(1, Math.max(0.08, 0.4 + (x - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + L + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + U.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + J + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + J + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + J + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + U.toFixed(1) + '" fill="url(#' + L + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Mt(te(Math.round(x), c.locale)) + '</span><span class="wbUvWord">' + Mt(H) + "</span></div>" + _s(Wa(te(Math.round(x), c.locale), ""));
    return da({
      icon: le.sunnyAlert,
      name: wt.metrics.uv_index,
      sub: Z && Z.uv > x ? aa(wt.uvPeak, { level: H, uv_index: te(Math.round(Z.uv), c.locale), time: Je(Z.time, c) }) : H,
      zone: at,
      cls: "wbUv",
      callouts: [vt(x, c), [wt.callout.now, te(Math.round(x), c.locale) + " · " + H], [wt.callout.peak, Z && Z.uv > x ? te(Math.round(Z.uv), c.locale) + " at " + Je(Z.time, c) : wt.callout.now]]
    });
  }
  function zt(c) {
    const m = ot("daily")[0], w = S.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !he(m.temperature) || !w || w.dailyHighs.length < l1) return "";
    const x = Number(m.temperature), H = w.dailyHighs.reduce((Pt, dt) => Pt + dt, 0) / w.dailyHighs.length, W = Math.round(x - H) || 0, Z = W > 0 ? "above" : W < 0 ? "below" : "same", J = [...w.days, { date: /* @__PURE__ */ new Date(), high: x, today: !0 }], U = J.map((Pt) => Pt.high).concat(H), at = Math.min(...U) - 1, rt = Math.max(...U) + 1, bt = (Pt) => (1 - (Pt - at) / (rt - at)) * 100, Bt = (Pt) => (Pt + 0.5) / J.length * 100, Et = J.map((Pt, dt) => [Bt(dt), bt(Pt.high)]), _t = Et.map(([Pt, dt], Ot) => (Ot ? "L" : "M") + Pt.toFixed(2) + " " + dt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + L + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _t + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + L + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + bt(H).toFixed(2) + '" y2="' + bt(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _t + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + bt(H).toFixed(2) + '%">' + Mt(Me(c, H)) + "</span>" + J.map((Pt, dt) => {
      const Ot = Pt.today ? " wbToday" : "", qt = "left:" + Bt(dt).toFixed(2) + "%;top:" + bt(Pt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + qt + '"></i><span class="wbAvgValue' + Ot + '" style="' + qt + '">' + Mt(Me(c, Pt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + J.map((Pt, dt) => '<span class="wbAvgDay' + (Pt.today ? " wbToday" : "") + '" style="left:' + Bt(dt).toFixed(2) + '%">' + Mt(L1(Pt.date, c)) + "</span>").join("") + "</div></div>";
    return da({
      icon: le.chartLine,
      name: wt.metrics.compared_to_average,
      double: !0,
      sub: aa(wt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (W > 0 ? "+" : "") + Mt(Me(c, W)) + '</div><div class="wbCompareWords">' + Mt(wt.average[Z]) + '</div><div class="wbCompareTemps">' + Mt(aa(wt.todayVsAverage, { today: Me(c, x), average: Me(c, H) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, m) {
    const w = Ie(c, m, "humidity");
    if (!w || !he(w.value)) return "";
    const x = Ie(c, m, "dew_point"), H = Math.max(0, Math.min(100, Number(w.value)));
    return da({
      icon: le.waterPercent,
      name: wt.metrics.humidity,
      sub: x && he(x.value) ? aa(wt.dewPoint, { dew_point: Me(c, x.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Wa(te(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function Ga(c, m) {
    var Pt, dt, Ot;
    const w = Ie(c, m, "pressure");
    if (!w || !he(w.value)) return "";
    const x = Number(w.value), H = (Pt = w.stateObj.attributes) == null ? void 0 : Pt.pressure_unit, W = ru(x, H), Z = ((dt = S.pressureHistory) == null ? void 0 : dt.entityId) === w.stateObj.entity_id ? ru(S.pressureHistory.value, H) : void 0;
    let J;
    if (W !== void 0 && Z !== void 0) {
      const qt = W - Z;
      J = qt >= Up ? "rising" : qt <= -Up ? "falling" : "steady";
    }
    const U = Rs(c, w.stateObj, "pressure", Math.round(x)), at = w.stateObj, rt = (qt) => H === "inHg" ? Math.round(qt * 100) / 100 : Math.round(qt), bt = (qt) => ou(c, at, "pressure", rt(qt)), Bt = Z !== void 0 ? S.pressureHistory.value : void 0, Et = Bt !== void 0 ? rt(x - Bt) : void 0, _t = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((qt) => he(qt.pressure) && new Date(qt.datetime).getTime() >= Date.now() + 3 * se - 30 * ze) : void 0, Gt = [
      ...J ? [wt.advice[J]] : [],
      ...Bt !== void 0 ? [[wt.callout.hoursAgo, bt(Bt)], [wt.callout.change, (Et > 0 ? "+" : Et < 0 ? "−" : "") + bt(Math.abs(Et))]] : [],
      ..._t ? [[wt.callout.inHours, bt(Number(_t.pressure))]] : []
    ];
    return da({
      icon: le.gauge,
      name: wt.metrics.pressure,
      sub: J ? wt.pressure[J] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Wa(U.number) + '<span class="wbTapeUnit">' + Mt(U.unit) + "</span></div>" + (W !== void 0 ? Dn(c, W) : "") + "</div>"
    });
  }
  function Dn(c, m) {
    const H = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (W, Z) => H + Z).map((W) => {
      const Z = 100 - (W - m) * 9;
      if (Z < 22 || Z > 178) return "";
      const J = W % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (J ? 2 : 8) + '" x2="26" y1="' + Z + '" y2="' + Z + '"></line>' + (J ? '<text class="wbTapeLabel" x="33" y="' + Z + '">' + Mt(te(W, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Mt(wt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Mt(wt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function zs(c) {
    var U, at;
    const m = vc(c), w = m ? c.states[m] : void 0;
    if (!w || ((U = S.rain) == null ? void 0 : U.entityId) !== m || !he(S.rain.change)) return "";
    const x = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", H = lt(c, "hourly"), W = Date.now() + va, Z = ot("hourly").filter((rt) => rt.precipitation != null && new Date(rt.datetime).getTime() <= W), J = Z.reduce((rt, bt) => rt + Number(bt.precipitation), 0);
    return da({
      icon: le.rainy,
      name: wt.metrics.precipitation,
      sub: H && Z.length ? aa(wt.rainExpected, { amount: te(J, c.locale, { maximumFractionDigits: 1 }) + " " + kn(c, H, "precipitation") }) : wt.rainLast24h,
      visual: Wa(te(S.rain.change, c.locale, { maximumFractionDigits: 1 }), x) + (Z.length > 1 ? K1(Z.map((rt) => ({ label: "", value: Number(rt.precipitation) }))) : "")
    });
  }
  function $r(c, m) {
    const w = Ie(c, m, "visibility");
    if (!w || !he(w.value)) return "";
    const x = Rs(c, w.stateObj, "visibility", w.value), H = W0(Number(w.value), kn(c, w.stateObj, "visibility"));
    return da({
      icon: le.eyeOutline,
      name: wt.metrics.visibility,
      sub: wt.visibilityLevel[V0(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Mt(Ii(c, H)) + '</div><div class="wbSeaValue">' + Wa(x.number, x.unit) + "</div></div>"
    });
  }
  function Ii(c, m) {
    var W;
    const w = q0((W = c.config) == null ? void 0 : W.country, m);
    if (w) return aa(wt.visibilityLandmarks, { from: w.from, to: w.to });
    const x = m / p1 * 60;
    if (x < 60) {
      const Z = x < 5 ? Math.max(1, Math.round(x)) : 5 * Math.round(x / 5);
      if (Z < 60) return aa(wt.walkMinutes, { minutes: te(Z, c.locale) });
    }
    const H = Math.max(1, Math.round(x / 30) / 2);
    return H < 8 ? aa(wt.walkHours, { hours: te(H, c.locale) }) : wt.walkDay;
  }
  function Gs(c) {
    S.categories === void 0 && Cn(c);
    const m = ge(c), w = (U) => U.map((at) => c.states[at]).filter(er), x = w(m.air), H = w(m.pollen);
    if (!x.length && !H.length) return "";
    const W = [...x, ...H], Z = (U) => H.includes(U) ? le.flower : le.airFilter, J = W.find((U) => U.entity_id === ct.aq);
    return J ? $s(c, J, Z(J)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Mt(wt.airQuality) + '</h2></div><div class="wbAqTiles">' + W.map((U) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Mt(U.entity_id) + '"><span class="wbChip">' + en(Z(U)) + '</span><span class="wbText"><span class="wbName">' + Mt(yn(c, U)) + '</span><span class="wbSub">' + Mt(Jo(c, U)) + "</span></span></button>").join("") + "</div></div>";
  }
  function $s(c, m, w) {
    var rt, bt, Bt;
    const x = ((rt = m.attributes) == null ? void 0 : rt.unit_of_measurement) ?? "", H = ((bt = m.attributes) == null ? void 0 : bt.device_class) === "pm25" && x === Xp && he(m.state), W = Number(m.state), Z = H ? Ss(W) : void 0, J = ((Bt = S.aqHistory) == null ? void 0 : Bt.entityId) === m.entity_id ? S.aqHistory.points : void 0, U = (Et) => Math.min(100, Math.max(0, Et / Ms * 100));
    let at;
    if (J && J.length > 1) at = lu(J, (Et) => (te(Et, c.locale, { maximumFractionDigits: 1 }) + " " + x).trim());
    else if (Z) {
      let Et = 0;
      const _t = ff.map(([Gt, Pt]) => {
        const dt = U(Math.min(Pt, Ms)), Ot = Kp[Gt] + " " + Et + "% " + dt + "%";
        return Et = dt, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + Mt(wt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ms + '" aria-valuenow="' + W + '" style="background:linear-gradient(to right, ' + _t.join(", ") + ')"><i style="left:' + U(W) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ms + " " + Xp + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + Mt(Jo(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + en(w) + '</span><span class="wbText"><span class="wbName">' + Mt(yn(c, m)) + '</span><span class="wbSub">' + Mt(Jo(c, m)) + (Z ? " · " + Mt(wt.aqLevel[Z]) : "") + '</span></span><button class="wbBack" title="' + Mt(wt.back) + '" data-wb="aq-close">' + en(le.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const Ao = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Fi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function Lo(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var x;
      return w.entity_id.startsWith("sensor.") && Is.includes(((x = w.attributes) == null ? void 0 : x.device_class) ?? "") && er(w) && Ir(c, w.entity_id);
    }).sort((w, x) => w.entity_id.localeCompare(x.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Is.map((w) => m.get(w)).filter(Boolean);
  }
  const To = (c) => Object.values(c.states || {}).filter((m) => {
    var w, x;
    return m.entity_id.startsWith("sensor.") && er(m) && Ir(c, m.entity_id) && (((x = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : x.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), ir = ["none", "very_low", "low", "moderate", "high", "very_high"], $a = (c) => he(c.state) ? Number(c.state) : ir.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), sr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, qi = (c, m, w) => {
    const x = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? Ss(m) : null : null;
    return x === "good" || x === "fair" ? wt.advice.window : x === "moderate" || x === null ? wt.advice.fine : wt.advice.closed;
  }, Us = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], io = (c) => Us[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], lr = "M43 43q1 8 0 10M77 42q1 8 -1 10", Do = {
    good: [lr, "M34 69Q61 98 86 67"],
    fair: [lr, "M40 74Q61 89 81 72"],
    moderate: [lr, "M41 79Q60 76 80 81"],
    poor: [lr, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Eo = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Do[c][0] + '"></path><path d="' + Do[c][1] + '"></path></svg>';
  function ln(c) {
    const m = Lo(c), w = m[0];
    if (!w) return da({ icon: le.airFilter, name: wt.airQuality, sub: wt.noAir, visual: Wa("–", ""), cls: "wbBase" });
    const x = w.attributes.device_class, H = Number(w.state), W = he(w.state), Z = x === "aqi" && W ? Fi(H) : x === "pm25" && W ? Ao[Ss(H)] : Jo(c, w), J = W ? te(Math.round(H), c.locale) : String(w.state), U = x === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = W && x === "aqi" ? io(H) : W && x === "pm25" ? Ss(H) : null;
    return da(at ? {
      icon: le.airFilter,
      name: wt.airQuality,
      sub: Z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Kp[at] + '">' + Eo(at) + '<div class="wbAqBig"><span class="wbAqNum">' + Mt(J) + "</span>" + (U ? '<span class="wbAqUnit">' + Mt(U) + "</span>" : "") + "</div></div>" + _s(Wa(J, U)),
      callouts: [qi(x, H, W), ...m.slice(1, 3).map((rt) => [yn(c, rt), Jo(c, rt)])]
    } : {
      icon: le.airFilter,
      name: wt.airQuality,
      sub: Z,
      cls: "wbBase",
      zone: Wa(J, U),
      callouts: [qi(x, H, W), ...m.slice(1, 3).map((rt) => [yn(c, rt), Jo(c, rt)])]
    });
  }
  const so = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ys = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, x) => {
      const [H, W] = so[x % 3], Z = 10 + x * 7 % 9, J = 2.6 + x * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + x * 37 % 52) + "%;--x:" + (x * 29 % 90 + 4) + "%;--s:" + (0.8 + x * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Z + "s;animation-delay:-" + (x * 2.3 % Z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + J.toFixed(1) + "s;animation-delay:-" + (x * 0.7 % J).toFixed(1) + 's">' + W + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ua(c) {
    const m = To(c).sort((H, W) => $a(W) - $a(H));
    if (!m.length) return da({ icon: le.flower, name: wt.pollen, sub: wt.noPollen, visual: Wa("–", ""), cls: "wbBase" });
    const w = m[0], x = (H) => he(H.state) ? Jo(c, H) : sr(H.state);
    return da({
      icon: le.flower,
      name: wt.pollen,
      sub: yn(c, w) + " · " + x(w),
      cls: "wbBase wbPollen",
      zone: Ys($a(w)) + Wa(x(w), ""),
      callouts: m.slice(0, 3).map((H) => [yn(c, H), x(H)])
    });
  }
  function En(c) {
    var J;
    const m = Date.now(), w = ot("hourly").filter((U) => {
      const at = new Date(U.datetime).getTime();
      return at > m - se && at < m + 12 * se;
    }), x = w.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), H = x ? aa(wt.rainFrom, { time: Je(new Date(Math.max(m, new Date(x.datetime).getTime())), c) }) : w.length ? wt.noRain12 : void 0, W = (D == null ? void 0 : D()) || "rainviewer";
    let Z;
    if (W.startsWith("camera:")) {
      const U = c.states[W.slice(7)], at = U && U.state !== "unavailable" && ((J = U.attributes) == null ? void 0 : J.entity_picture);
      Z = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + Mt(at) + '" data-src="' + Mt(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + Mt(wt.cameraOff) + "</span></div>";
    } else {
      const U = Or(c);
      Z = U ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + U.lat + '" data-lon="' + U.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + Mt(wt.noLocation) + "</span></div>";
    }
    return da({ icon: le.radar, name: wt.rainRadar, sub: H, cls: "wbBase wbRadarTile", visual: Z });
  }
  const Ur = {
    current: qr,
    hourly: Le,
    sun: ro,
    moon: Oi,
    wind: Ut,
    uv_index: be,
    compared_to_average: zt,
    humidity: Fe,
    pressure: Ga,
    precipitation: zs,
    visibility: $r,
    air_quality: Gs,
    aq_tile: ln,
    pollen_tile: Ua,
    radar_tile: En
  }, Oe = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Bo = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Yr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, cr = () => {
    const c = ct.range, m = Date.now();
    if (c.preset !== "custom") {
      const H = Oe.find(([W]) => W === c.preset)[2];
      return [m - H * va, m];
    }
    const w = Mn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), x = Math.min(m, Mn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + va);
    return [Math.min(w, x - se), x];
  }, Zs = (c) => {
    const m = ct.range;
    if (m.preset !== "custom") return Oe.find(([H]) => H === m.preset)[1];
    const [w, x] = cr();
    return m.from === m.to ? Bo(c, new Date(w)) : Bo(c, new Date(w)) + " – " + Bo(c, new Date(x - 1));
  }, Zr = () => ct.range.preset === "custom" ? ct.range.from + "_" + ct.range.to : ct.range.preset, Kr = (c, m) => m - c <= 2 * va, lo = (c, m, w, x) => Kr(w, x) ? Je(m, c) : Bo(c, m), dr = (c, m = 60) => {
    const w = Math.max(1, Math.ceil(c.length / m));
    return c.filter((x, H) => H % w === 0 || H === c.length - 1);
  }, Xr = (c, m, w, x, H = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(x).toISOString(),
    entity_ids: [m],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), cn = (c) => async (m, w, x, H) => {
    const W = Ie(m, w, c);
    if (!W) return [];
    const Z = W.stateObj.entity_id, J = await Xr(m, Z, x, H);
    return dr(((J == null ? void 0 : J[Z]) ?? []).map((U) => {
      var bt;
      const at = ((bt = U.a) == null ? void 0 : bt[c]) ?? (he(U.s) ? Number(U.s) : void 0), rt = (U.lu ?? U.lc) * 1e3;
      return typeof at == "number" && rt >= x && rt <= H ? { t: new Date(rt), value: at } : null;
    }).filter(Boolean)).map((U) => ({ label: lo(m, U.t, x, H), value: U.value }));
  }, Wi = (c, m) => async (w, x, H, W) => {
    const Z = c(w);
    if (!Z) return [];
    const J = Z.entity_id, U = await Xr(w, J, H, W, !0);
    return dr(((U == null ? void 0 : U[J]) ?? []).map((at) => {
      const rt = m(at.s), bt = at.lu * 1e3;
      return rt == null || !Number.isFinite(rt) || bt < H || bt > W ? null : { t: new Date(bt), value: rt };
    }).filter(Boolean)).map((at) => ({ label: lo(w, at.t, H, W), value: at.value }));
  }, Vi = (c, m) => async (w, x, H, W) => {
    const Z = Or(w);
    if (!Z) return [];
    const J = [];
    if (Kr(H, W)) for (let U = H; U <= W; U += se / 2) J.push({ label: Je(new Date(U), w), value: c(new Date(U), Z) });
    else for (let U = W; U >= H; U -= va) {
      const at = new Date(U), rt = m(at, Z, w);
      rt != null && J.unshift({ label: Bo(w, at), value: rt });
    }
    return dr(J);
  }, Po = (c) => To(c).sort((m, w) => $a(w) - $a(m))[0], Ro = (c, m, w) => {
    const x = Ie(c, m, w);
    return x ? kn(c, x.stateObj, w) : "";
  }, pr = {
    current: { name: () => wt.modes.temperature, icon: () => le.sunny, load: cn("temperature"), fmt: (c, m, w) => Me(c, w), now: (c, m) => {
      var w;
      return Me(c, (w = Ie(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => wt.sun,
      icon: () => le.sunny,
      load: Vi((c, m) => Math.round(qs(c, m.lat, m.lon) / ua), (c, m, w) => {
        const x = Pr(w, c);
        return x.rise && x.set ? Math.round((x.set - x.rise) / se * 10) / 10 : null;
      }),
      fmt: (c, m, w, x) => x ? te(w, c.locale) + "°" : te(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => wt.moon,
      icon: () => le.night,
      load: Vi((c) => Math.round(wc(c).fraction * 100), (c) => Math.round(wc(c).fraction * 100)),
      fmt: (c, m, w) => te(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => wt.metrics.uv_index, icon: () => le.sunnyAlert, load: cn("uv_index"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = Ie(c, m, "uv_index");
      return w ? te(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => wt.metrics.humidity, icon: () => le.waterPercent, load: cn("humidity"), fmt: (c, m, w) => te(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = Ie(c, m, "humidity");
      return w ? te(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => wt.metrics.pressure, icon: () => le.gauge, load: cn("pressure"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ro(c, m, "pressure"), now: (c, m) => {
      const w = Ie(c, m, "pressure");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, m, "pressure") : "";
    } },
    wind: { name: () => wt.wind, icon: () => le.windy, load: cn("wind_speed"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Ro(c, m, "wind_speed"), now: (c, m) => {
      const w = Ie(c, m, "wind_speed");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Ro(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => wt.metrics.visibility, icon: () => le.eyeOutline, load: cn("visibility"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale) + " " + Ro(c, m, "visibility"), now: (c, m) => {
      const w = Ie(c, m, "visibility");
      return w ? te(Number(w.value), c.locale) + " " + Ro(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => Lo(c)[0] ? yn(c, Lo(c)[0]) : wt.airQuality,
      icon: () => le.airFilter,
      load: Wi((c) => Lo(c)[0], (c) => he(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var W, Z;
        const x = Lo(c)[0], H = (W = x == null ? void 0 : x.attributes) == null ? void 0 : W.device_class;
        return te(Math.round(w * 10) / 10, c.locale) + (H === "aqi" ? " AQI" : (Z = x == null ? void 0 : x.attributes) != null && Z.unit_of_measurement ? " " + x.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = Lo(c)[0];
        return m ? Jo(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Po(c) ? yn(c, Po(c)) : wt.pollen,
      icon: () => le.flower,
      load: Wi(Po, (c) => {
        const m = $a({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => sr(ir[Math.round(w)] || ""),
      now: (c) => {
        const m = Po(c);
        return m ? sr(m.state) : "";
      }
    }
  }, Ho = {};
  let we = null;
  async function Ea(c) {
    const m = n == null ? void 0 : n();
    if (!m || !pr[c]) return;
    const w = c + "|" + Zr(), [x, H] = cr();
    if (Ho[w] && Date.now() - Ho[w].at < 5 * ze) return;
    Ho[w] = { at: Date.now(), points: null };
    try {
      Ho[w].points = await pr[c].load(m, Wt(m), x, H);
    } catch {
      Ho[w].points = [];
    }
    qe(!0), we === c && ct.graph === c && (we = null, jp(O.querySelector(".wbGraphCard")));
    const W = ct.graph === c && O.querySelector(".wbGraph .wbChart");
    W && df(W, W.querySelector(".wbLine"), W.querySelectorAll(".wbArea"));
  }
  function Ht(c, m) {
    const w = ct.range, x = Yr(Date.now()), [H, W] = cr(), Z = w.pickFrom || Yr(H), J = w.pickTo || Yr(W - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oe.map(([U, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === U) + '" data-wb="graph-preset" data-range="' + U + '" data-wb-focus="graph-preset-' + U + '">' + Mt(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Z + '" max="' + x + '"></label><label><span>To</span><input type="date" data-range-to value="' + J + '" max="' + x + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ur(c, m, w) {
    var bt;
    const x = pr[w], [H, W] = cr(), Z = Kr(H, W), J = (bt = Ho[w + "|" + Zr()]) == null ? void 0 : bt.points, U = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), rt = J ? J.length > 1 ? lu(J, (Bt) => x.fmt(c, m, Bt, Z), 220, U) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + Mt(x.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + hf(x.icon(c)) + '</div><div class="wbText"><span class="wbName">' + Mt(x.name(c)) + '</span><span class="wbSub">' + Mt(x.sub ? x.sub(Z) : x.now ? x.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + en(le.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!ct.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + en(le.calendar) + "<span>" + Mt(Zs(c)) + "</span>" + en(le.chevronDown) + '</button><div class="wbGraph">' + rt + "</div></div>" + (ct.picking ? Ht() : "") + "</div>";
  }
  function qe(c) {
    var Bt, Et, _t, Gt, Pt;
    const m = n == null ? void 0 : n();
    if (!m || et) return;
    const w = Wt(m);
    Ct(m, w), S.lastFetch || So();
    const x = ge(m), H = iu(m), W = vc(m), Z = [
      ...w.map((dt) => m.states[dt]),
      m.states["sun.sun"],
      H && m.states[H],
      W && m.states[W],
      ...x.air.map((dt) => m.states[dt]),
      ...x.pollen.map((dt) => m.states[dt]),
      ...K.some((dt) => k.includes(dt)) ? [...Lo(m), ...To(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / ze)
    ];
    if (!c && it && Z.length === it.length && Z.every((dt, Ot) => dt === it[Ot])) return;
    it = Z;
    const J = _.getRootNode(), U = J.activeElement || document.activeElement;
    for (const dt of K) {
      const Ot = N[dt];
      let qt = "";
      try {
        qt = Ur[dt](m, w) || "";
      } catch {
        qt = "";
      }
      if (qt === Ot.html) continue;
      const ve = U && Ot.el.contains(U) ? (Bt = U.dataset) == null ? void 0 : Bt.wbFocus : void 0, Dt = Ot.el.querySelector(".wbStripScroll"), re = Dt ? Dt.scrollLeft : null;
      Ot.html = qt, Ot.el.hidden = !qt, Ot.el.innerHTML = qt;
      const $t = Ot.el.querySelector(".wbStripScroll");
      $t && re != null ? $t.scrollTo({ left: re }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), ve && !$ && ((Et = Ot.el.querySelector('[data-wb-focus="' + ve + '"]')) == null || Et.focus());
    }
    let at = "";
    if (ct.graph)
      try {
        at = ur(m, w, ct.graph) || "";
      } catch {
        at = "";
      }
    if (at !== ut) {
      const dt = U && O.contains(U) ? (_t = U.dataset) == null ? void 0 : _t.wbFocus : void 0;
      ut = at, O.innerHTML = at, O.hidden = !at, at && !O.isConnected && (_.closest("#app") || _).appendChild(O), dt && !$ && ((Gt = O.querySelector('[data-wb-focus="' + dt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    Gr(), _.querySelectorAll(".wbRadarMap").forEach((dt) => {
      dt._tiles || ta(dt);
    }), $ && ((Pt = _.querySelector('[data-wb-focus="' + $ + '"]') || O.querySelector('[data-wb-focus="' + $ + '"]')) == null || Pt.focus({ preventScroll: !0 }), $ = null);
    let rt = !1, bt = !1;
    for (const dt of K) {
      const Ot = N[dt], qt = !Ot.el.hidden, ve = tt[dt] === "wide" || z.includes(dt), Dt = K.indexOf(dt) >= K.indexOf("moon"), re = qt && (Dt && ve && !rt || !ve && !bt);
      re && ve && (rt = !0), re && !ve && (bt = !0), Ot.el.toggleAttribute("data-break", re);
    }
    Pn(performance.now());
  }
  function dn() {
    I || et || (I = !0, queueMicrotask(() => {
      I = !1, qe(!0);
    }));
  }
  function pn() {
    const c = getComputedStyle(_), m = (Z) => c.getPropertyValue(Z).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Z, J]) => {
      m(J) && (w[Z] = m(J));
    });
    const x = m("--color-text-primary") || "#f1f1f1", H = m("--color-bg-card") || "#222222", W = !!_.closest(".light");
    return { colors: { ...za, ...w }, ink: W ? x : H, paper: W ? H : x };
  }
  const Jr = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Bn = () => f && !_1();
  function ji(c, m) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((w) => fr(w, nt[w.dataset.wbStrip], c, m));
  }
  function fr(c, m, w, x) {
    if (!m || !c.getClientRects().length) return;
    const H = c.clientWidth, W = c.clientHeight;
    if (!H || !W) return;
    const Z = { width: H, height: W, columns: m.columns || zp, colors: x.colors, clock: w, ambient: Bn(), seed: m.seed, soft: 1.5 };
    if (l === "smooth") {
      const J = Math.min(2, window.devicePixelRatio || 1), U = Math.round(H * J), at = Math.round(W * J);
      c.width !== U && (c.width = U), c.height !== at && (c.height = at);
      const rt = c.getContext("2d");
      if (!rt) return;
      rt.setTransform(J, 0, 0, J, 0, 0), k0(rt, m.segs, Z);
    } else Jr(c, x0(m.segs, { ...Z, px: 2, oneBit: l === "onebit", ink: x.ink, paper: x.paper }));
  }
  function Pn(c) {
    if (et) return;
    const m = pn();
    if (l !== "smooth") {
      const w = Bn();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((x) => {
        x.getClientRects().length && Jr(x, r0(Qm(x.dataset.wbWx, m.colors), { size: Number(x.dataset.size) || 40, px: 2, oneBit: l === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const x = w.clientWidth, H = w.clientHeight, W = Number(w.dataset.wbSea), Z = x + "x" + H + ":" + W + ":" + m.colors.skyClearDay;
      !x || !H || !(W > 0) || w.dataset.painted === Z || (w.dataset.painted = Z, Jr(w, O0(x, H, W, m.colors)));
    }), ji(c, m);
  }
  function co(c) {
    if (pt = 0, !(et || !Bn())) {
      if (!document.hidden)
        if (l === "smooth") ji(c, pn());
        else {
          const m = Math.floor(c / 100);
          m !== Q && (Q = m, Pn(c));
        }
      pt = requestAnimationFrame(co);
    }
  }
  function hr() {
    _.classList.toggle("wbMotion", Bn()), !pt && !et && Bn() && (pt = requestAnimationFrame(co));
  }
  function Rn(c) {
    var w, x, H, W, Z, J, U;
    if (c.target === O) {
      ct.graph = void 0, ct.picking = !1, qe(!0);
      return;
    }
    const m = (x = (w = c.target).closest) == null ? void 0 : x.call(w, "[data-wb]");
    if (!m || !(_.contains(m) || O.contains(m))) {
      const at = (W = (H = c.target).closest) == null ? void 0 : W.call(H, ".wbItem"), rt = at == null ? void 0 : at.dataset.card;
      if (!at || !_.contains(at) || !pr[rt] || ct.graph === rt || _.closest(".tfEditing") || rt === "current" && g) return;
      ct.graph = rt, ct.picking = !1, $ = "graph-close", qe(!0), (Z = Ho[rt + "|" + Zr()]) != null && Z.points ? jp(O.querySelector(".wbGraphCard")) : we = rt, Ea(rt);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        ct.openDay = Number(m.dataset.index), ct.opener = m.dataset.wbFocus, $ = "back-day";
        const at = Fr()[ct.openDay], rt = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > t1;
        at && Br(new Date(at.datetime), /* @__PURE__ */ new Date()) && rt && La();
        break;
      }
      case "close-day":
        ct.openDay = void 0, $ = ct.opener, ct.opener = void 0;
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
          localStorage.setItem(xt, ct.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = _.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(m.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        ct.aq = m.dataset.entity, rn(ct.aq);
        break;
      case "aq-close":
        ct.aq = void 0;
        break;
      case "graph-close":
        ct.graph = void 0, ct.picking = !1;
        break;
      case "graph-pick":
        ct.picking = !ct.picking, $ = ct.picking ? "graph-preset-" + (ct.range.preset === "custom" ? "day" : ct.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        ct.range = { preset: m.dataset.range }, ct.picking = !1, $ = "graph-pick", qe(!0), Ea(ct.graph);
        return;
      case "graph-apply": {
        let at = ct.range.pickFrom || ((J = _.querySelector("[data-range-from]")) == null ? void 0 : J.value), rt = ct.range.pickTo || ((U = _.querySelector("[data-range-to]")) == null ? void 0 : U.value);
        if (!at || !rt) return;
        at > rt && ([at, rt] = [rt, at]), ct.range = { preset: "custom", from: at, to: rt }, ct.picking = !1, $ = "graph-pick", qe(!0), Ea(ct.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ha(c) {
    var m, w, x, H, W, Z;
    c.key === "Escape" && ct.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (ct.openDay = void 0, $ = ct.opener, ct.opener = void 0, qe(!0)) : c.key === "Escape" && ct.picking && ((H = (x = c.target).closest) != null && H.call(x, ".wbGraphCard")) ? (ct.picking = !1, $ = "graph-pick", qe(!0)) : c.key === "Escape" && ct.graph && ((Z = (W = c.target).closest) != null && Z.call(W, ".wbGraphCard")) && (ct.graph = void 0, qe(!0));
  }
  let Ge = null;
  function Qr(c) {
    var w, x;
    const m = (x = (w = c.target).closest) == null ? void 0 : x.call(w, ".wbStripScroll");
    !m || c.button !== 0 || (Ge = { startX: c.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", ti), window.addEventListener("mouseup", ei, { once: !0 }));
  }
  function ti(c) {
    const m = _.querySelector(".wbStripScroll");
    if (!Ge || !m) return;
    const w = c.pageX - Ge.startX;
    !Ge.moved && Math.abs(w) > 1 && (Ge.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = Ge.left - w;
  }
  function ei() {
    Ge = null, window.removeEventListener("mousemove", ti);
    const c = _.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const m = [...c.querySelectorAll(".wbSnap")];
    if (m.length) {
      const w = m.reduce((x, H) => Math.abs(H.offsetLeft - c.scrollLeft) < Math.abs(x.offsetLeft - c.scrollLeft) ? H : x);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const mr = (c) => {
    var w, x;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? ct.range.pickFrom = m.value : (x = m.matches) != null && x.call(m, "[data-range-to]") && (ct.range.pickTo = m.value);
  };
  _.addEventListener("change", mr), _.addEventListener("click", Rn), _.addEventListener("keydown", ha), O.addEventListener("change", mr), O.addEventListener("click", Rn), O.addEventListener("keydown", ha), _.addEventListener("mousedown", Qr);
  const zi = 64, Ks = 30;
  let ka = null, Ya = 0;
  const un = () => {
    Ya = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (ka) {
        const x = c.parentElement.getBoundingClientRect(), H = x.left + x.width / 2 - ka.x, W = x.top + x.height / 2 - ka.y, Z = Math.hypot(H, W) || 1;
        if (Z < zi) {
          const J = (1 - Z / zi) * Ks;
          m = H / Z * J, w = W / Z * J;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), ka && (Ya = requestAnimationFrame(un));
  }, Za = (c) => {
    var w, x;
    if (!((x = (w = c.target).closest) == null ? void 0 : x.call(w, ".wbPollen")) || $e != null && $e.matches) {
      ka && (ka = null, Ya || (Ya = requestAnimationFrame(un)));
      return;
    }
    ka = { x: c.clientX, y: c.clientY }, Ya || (Ya = requestAnimationFrame(un));
  }, Gi = () => {
    ka = null, Ya || (Ya = requestAnimationFrame(un));
  };
  _.addEventListener("pointermove", Za), _.addEventListener("pointerleave", Gi);
  const Ka = typeof ResizeObserver == "function" ? new ResizeObserver(() => Pn(performance.now())) : null;
  Ka == null || Ka.observe(_);
  const fn = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && ta(w);
  })) : null;
  function ta(c) {
    var Z;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || et) return;
    const x = m1(Number(c.dataset.lat), Number(c.dataset.lon), m, w), H = !!((Z = _.closest("#app")) != null && Z.classList.contains("light")), W = (J) => ' style="left:' + J.left + "px;top:" + J.top + 'px"';
    c._tiles = x, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + x.map((J) => '<img src="https://' + "abcd"[(J.x + J.y) % 4] + ".basemaps.cartocdn.com/" + (H ? "light_all" : "dark_all") + "/" + Ic + "/" + J.x + "/" + J.y + '.png"' + W(J) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', fn == null || fn.observe(c), h1().then((J) => {
      !c.isConnected || et || c._tiles !== x || (c.querySelector(".wbRadarFrames").innerHTML = J.frames.map((U, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + x.map((rt) => '<img src="' + J.host + U.path + "/" + Qo + "/" + Ic + "/" + rt.x + "/" + rt.y + '/2/1_1.png"' + W(rt) + ' alt="">').join("") + "</div>").join(""), c._frames = J.frames, c._hold = 0, Hn(c, J.frames.findLastIndex((U) => U.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = wt.radarOff);
    });
  }
  function Hn(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((H) => {
      H.hidden = Number(H.dataset.i) !== m;
    });
    const x = w[m];
    c.querySelector(".wbRadarTime").textContent = Je(new Date(x.time * 1e3), n == null ? void 0 : n()) + (x.past ? "" : " · " + wt.forecastTag);
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
        c._hold -= Yp;
        return;
      }
      const m = c._frames.length - 1, w = c._frames.findLastIndex((H) => H.past), x = c._i >= m ? 0 : c._i + 1;
      Hn(c, x), (x === w || x === m) && (c._hold = f1);
    });
  }
  const gr = () => _.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), hn = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && ta(c);
  })) : null, oi = _.closest("#app");
  oi && (hn == null || hn.observe(oi, { attributes: !0, attributeFilter: ["class"] }));
  const $e = (Ui = window.matchMedia) == null ? void 0 : Ui.call(window, "(prefers-reduced-motion: reduce)"), $i = () => {
    hr(), Pn(performance.now());
  };
  (Nn = $e == null ? void 0 : $e.addEventListener) == null || Nn.call($e, "change", $i);
  const ni = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), qe(!0);
    }, c1),
    setInterval(() => {
      Y = /* @__PURE__ */ new Date(), qe(!0);
    }, d1),
    setInterval(So, i1),
    setInterval(ai, Yp),
    setInterval(gr, ze)
  ];
  return qe(!0), hr(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(c) {
      !c || c === l || (l = c, _.dataset.style = l, O.dataset.style = l, qe(!0), hr());
    },
    destroy() {
      var c;
      cancelAnimationFrame(Ya), _.removeEventListener("pointermove", Za), _.removeEventListener("pointerleave", Gi), et = !0, ni.forEach(clearInterval), pt && cancelAnimationFrame(pt), pt = 0, Ka == null || Ka.disconnect(), fn == null || fn.disconnect(), hn == null || hn.disconnect(), (c = $e == null ? void 0 : $e.removeEventListener) == null || c.call($e, "change", $i), ei(), _.removeEventListener("click", Rn), _.removeEventListener("change", mr), _.removeEventListener("keydown", ha), _.removeEventListener("mousedown", Qr), O.removeEventListener("click", Rn), O.removeEventListener("change", mr), O.removeEventListener("keydown", ha), ["daily", "hourly"].forEach(q), _.remove(), O.remove();
    }
  };
}
const Ei = "#E1E1E1", pu = "#F7F4F0", yc = "#03a9f4", oe = 14, ie = 172;
let eg = 0;
const _e = (o) => Math.round(o * 100) / 100, xo = (o, n, i) => Math.max(n, Math.min(i, o)), nn = (o, n, i, l, f, b) => '<rect x="' + _e(o) + '" y="' + _e(n) + '" width="' + _e(i) + '" height="' + _e(l) + '" fill="' + f + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", xc = (o) => o.map((n, i) => (i ? "L" : "M") + _e(n[0]) + " " + _e(n[1])).join("");
function kc(o) {
  const n = (o == null ? void 0 : o.attributes) || {};
  return n.device_class === "curtain" ? "curtain" : n.device_class === "blind" || n.current_tilt_position != null ? "venetian" : "blind";
}
const xn = [
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
  let i = xn[0], l = xn[xn.length - 1];
  for (let v = 0; v < xn.length - 1; v++) if (n >= xn[v][0] && n <= xn[v + 1][0]) {
    i = xn[v], l = xn[v + 1];
    break;
  }
  const f = (n - i[0]) / (l[0] - i[0]), b = f * f * (3 - 2 * f), g = (v, D) => {
    const L = parseInt(v.slice(1), 16), _ = parseInt(D.slice(1), 16);
    return "#" + [16, 8, 0].map((P) => Math.round((L >> P & 255) + ((_ >> P & 255) - (L >> P & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], l[1][0]), bot: g(i[1][1], l[1][1]), warm: g(i[1][2], l[1][2]), cool: g(i[1][3], l[1][3]), op: i[1][4] + (l[1][4] - i[1][4]) * b, t: n };
}
function og(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, l = (n >> 8 & 255) / 255, f = (n & 255) / 255, b = Math.max(i, l, f), g = Math.min(i, l, f);
  let v = 0, D = 0;
  const L = (b + g) / 2;
  if (b !== g) {
    const _ = b - g;
    D = L > 0.5 ? _ / (2 - b - g) : _ / (b + g), v = (b === i ? (l - f) / _ + (l < f ? 6 : 0) : b === l ? (f - i) / _ + 2 : (i - l) / _ + 4) / 6;
  }
  return [v * 360, D * 100, L * 100];
}
function Cf(o, n, i) {
  n = xo(n, 0, 100) / 100, i = xo(i, 0, 100) / 100;
  const l = (g) => (g + o / 30) % 12, f = n * Math.min(i, 1 - i), b = (g) => i - f * Math.max(-1, Math.min(l(g) - 3, Math.min(9 - l(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [Af, Lf, Tf] = og(Ei), uu = Cf(Af, Lf, Math.max(6, Tf - 14)), ng = Cf(Af, Lf, Math.min(96, Tf + 16));
function rg(o, n, i, l, f) {
  const b = ie / 2, g = ie * 0.12, v = b - (b - g) * o, D = (K) => K ** 1.3, L = xo(i, -1.5, 1.5), _ = (K) => -(Math.abs(L) * 4.6 * K ** 1.5) * Math.sign(L), P = o * 1.4, O = (K, tt) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (tt ? 1 : -1) * Math.sign(i || 1), N = tt ? K + v : K, et = tt ? K : K + v, it = (xt) => N + _(xt) + z * Math.sin(xt * Math.PI * 1.2 + l) * D(xt) * 1.4 + P * Math.sin(xt * Math.PI * 2 + l * 0.6) * D(xt) * (tt ? 1 : -1), pt = [[et, oe]];
    for (let xt = 0; xt <= 12; xt++) pt.push([it(xt / 12), oe + ie * xt / 12]);
    pt.push([et, oe + ie]);
    let Q = '<path d="' + xc(pt) + 'Z" fill="' + Ei + '"/>';
    if (f) return Q;
    const I = 1.35 + ((tt ? i > 0 : i < 0) ? 0.35 : 0), $ = (xt) => {
      const Rt = xt / 7, ct = tt ? 1 - Rt : Rt, S = (1 - ct) ** 1.3, Ft = K + v * Rt;
      return Array.from({ length: 13 }, (Y, nt) => {
        const st = nt / 12;
        return [Ft + _(st) * S + z * I * Math.sin(st * Math.PI * 1.2 + l - ct * 3.2) * D(st) * 1.4 * S + P * 1.6 * Math.sin(st * Math.PI * 2 + l * 0.6 - ct * 2.5) * D(st) * o * (0.4 + 0.6 * S), oe + ie * st];
      });
    }, ut = [1, 2, 3, 4, 5, 6].map($);
    for (let xt = 0; xt < 6; xt += 2) Q += '<path d="' + xc(ut[xt]) + xc(ut[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, k = b - (b - g) * n;
  return { body: O(oe, !0) + O(oe + ie - v, !1), rails: [{ x: oe + k - 4, y: oe, w: 4, h: ie }, { x: oe + ie - k, y: oe, w: 4, h: ie }], head: 6.4 };
}
function ig(o, n, i) {
  const l = ie * (1 - o);
  let f = "";
  if (l > 1 && (f += nn(oe, oe, ie, l, Ei), !i))
    for (let b = 1; b < 7; b += 2) f += nn(oe + ie * b / 7, oe, ie / 7, l, "#fff");
  return { body: f, rails: [{ x: oe, y: oe + ie * (1 - n) - 7, w: ie, h: 11 }], head: 10.4 };
}
function sg(o, n, i, l) {
  const f = 9 - 7 * (i / 100), b = oe + ie * (1 - o), g = Math.ceil(ie / 10) + 1, v = oe + f / 2, D = (oe + ie - f / 2 - v) / (g - 1), L = 0.8, _ = 0.6, P = Array.from({ length: g }, (K, tt) => Math.max(v + tt * _, Math.min(v + tt * D, b - f / 2 - (g - 1 - tt) * _))), O = P.slice(0, -1).map((K, tt) => xo((P[tt + 1] - K - _) / (D - _), 0, 1));
  O.push(O[g - 2]);
  let k = "";
  return P.forEach((K, tt) => {
    const z = L + (f - L) * O[tt], N = Math.max(0.5, z / 2), et = Math.max(0.4, z * 0.114);
    k += nn(oe, K - N, ie, Math.max(1, z), Ei), !l && z > 2.2 && (k += nn(oe, K + N - et, ie, et, uu) + nn(oe, K - N, ie, et * 0.55, ng, 0.75));
  }), l || [0.22, 0.78].forEach((K) => {
    k += nn(oe + ie * K - 0.7, oe, 1.4, Math.max(0, P[g - 1] + 1 - oe), uu, 0.85);
  }), { body: k, rails: [{ x: oe, y: oe + ie * (1 - n) - 8, w: ie, h: 8 }], head: 8.8 };
}
const fu = (o, n, i, l, f, b, g) => o === "curtain" ? rg(n, i, f, b, g) : o === "venetian" ? sg(n, i, l, g) : ig(n, i, g);
function lg(o, n) {
  let i = "", l = "";
  return n.forEach((f) => {
    const b = f.w > f.h, g = xo(b ? oe + ie / 2 : f.x + f.w / 2, 17, 183), v = xo(b ? f.y + f.h / 2 : oe + ie / 2, 17, 183);
    i += b ? nn(oe, xo(f.y + f.h / 2, oe, oe + ie) - 1, ie, 2, yc) : nn(xo(f.x + f.w / 2, oe, oe + ie) - 1, oe, 2, ie, yc);
    const D = b ? "M" + _e(g - 4) + " " + _e(v - 3) + "l4 -3l4 3M" + _e(g - 4) + " " + _e(v + 3) + "l4 3l4 -3" : "M" + _e(g - 3) + " " + _e(v - 4) + "l-3 4l3 4M" + _e(g + 3) + " " + _e(v - 4) + "l3 4l-3 4";
    l += '<circle cx="' + _e(g) + '" cy="' + _e(v) + '" r="11" fill="' + yc + '" filter="url(#' + o + 's)"/><path d="' + D + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: l };
}
function cg(o, n) {
  const i = /* @__PURE__ */ new Date(), l = ag(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(l.t * 0.5), b = l.t >= 5 && l.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (l.t - 5) / 15) : 80, g = fu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? fu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", D = n.grip > 4e-3 ? lg(o, g.rails) : null, L = (_) => nn(oe, oe, ie, ie, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + l.top + '"/><stop offset="1" stop-color="' + l.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + _e(f) + '%" cy="' + _e(b) + '%" r="58%"><stop offset="0" stop-color="' + l.warm + '" stop-opacity="' + _e(l.op * 0.8) + '"/><stop offset="1" stop-color="' + l.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + _e(100 - f * 0.8) + '%" cy="' + _e(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + l.cool + '" stop-opacity="' + _e(l.op * 0.64) + '"/><stop offset="1" stop-color="' + l.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + pu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + L("url(#" + o + "l)") + L("url(#" + o + "w)") + L("url(#" + o + "k)") + (v ? '<g opacity="' + _e(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Ei + '" filter="url(#' + o + 's)"/></g>' + (D ? '<g clip-path="url(#' + o + 'c)" opacity="' + _e(n.grip) + '">' + D.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + pu + '" stroke-width="3"/>' + (D ? '<g opacity="' + _e(n.grip) + '">' + D.knobs + "</g>" : "") + "</svg>";
}
function dg({ onMove: o, onSet: n }) {
  var Q;
  const i = "cv" + ++eg, l = document.createElement("div");
  l.className = "tfCoverArt";
  const f = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, D = !1, L = !1, _ = null, P = 0, O = 0;
  const k = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", K = () => _ || D || L || b.moving || b.target != null ? 1 : f ? performance.now() < O ? 1 : 0.4 : 0, tt = () => {
    l.innerHTML = cg(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function z(I) {
    v = 0;
    const $ = g.last ? Math.min(0.064, (I - g.last) / 1e3) : 1 / 60, ut = $ * 60;
    g.last = I;
    const xt = b.pos - g.pos, Rt = g.pos;
    g.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * $), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Rt) / ut * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Rt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * ut);
    const ct = b.tilt - g.tilt;
    g.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * $);
    const S = K();
    g.grip += (S - g.grip) * Math.min(1, $ * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ft = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ft - g.ghost) * Math.min(1, $ * (Ft > g.ghost ? 16 : 3)), Math.abs(Ft - g.ghost) < 4e-3 && (g.ghost = Ft), tt(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ft ? v = requestAnimationFrame(z) : g.last = 0;
  }
  const N = () => {
    b && !v && (v = requestAnimationFrame(z));
  }, et = setInterval(() => {
    b && !v && tt();
  }, 60 * 1e3), it = (I) => {
    const $ = l.getBoundingClientRect();
    return k() === "x" ? (I.clientX - $.left) / $.width : (I.clientY - $.top) / $.height;
  };
  l.addEventListener("pointerdown", (I) => {
    var xt;
    if (!(b != null && b.canSet) || I.button > 0) return;
    I.preventDefault(), (xt = l.setPointerCapture) == null || xt.call(l, I.pointerId);
    const $ = b.target ?? b.pos, ut = l.getBoundingClientRect();
    _ = { p0: it(I), from: $, x0: I.clientX, value: null, side: null }, b.kind === "curtain" && $ > 0 && (_.side = (I.clientX - ut.left) / ut.width < 0.5 ? "L" : "R"), N();
  }), l.addEventListener("pointermove", (I) => {
    if (!_) return;
    let $;
    if (b.kind === "curtain") {
      if (!_.side) {
        const xt = I.clientX - _.x0;
        if (Math.abs(xt) < 4) return;
        _.side = xt < 0 ? "L" : "R";
      }
      const ut = (ie / 2 - ie * 0.12) / 200;
      $ = _.from + (_.side === "L" ? -1 : 1) * ((it(I) - _.p0) / ut) * 100;
    } else $ = _.from - (it(I) - _.p0) / (ie / 200) * 100;
    _.value = xo($, 0, 100), o(_.value);
  });
  const pt = () => {
    if (!_) return;
    const I = _.value;
    _ = null, I != null && n(Math.round(I)), N();
  };
  return l.addEventListener("pointerup", pt), l.addEventListener("pointercancel", pt), l.addEventListener("lostpointercapture", pt), l.addEventListener("pointerenter", () => {
    D = !0, N();
  }), l.addEventListener("pointerleave", () => {
    D = !1, N();
  }), l.addEventListener("focus", () => {
    L = l.matches(":focus-visible"), N();
  }), l.addEventListener("blur", () => {
    L = !1, N();
  }), l.addEventListener("keydown", (I) => {
    if (!(b != null && b.canSet)) return;
    const $ = Math.round(b.target ?? b.pos), ut = I.shiftKey ? 10 : 1, xt = { ArrowUp: $ + ut, ArrowRight: $ + ut, ArrowDown: $ - ut, ArrowLeft: $ - ut, PageUp: $ + 25, PageDown: $ - 25, Home: 0, End: 100 }[I.key];
    if (xt == null) return;
    I.preventDefault();
    const Rt = xo(xt, 0, 100);
    o(Rt), clearTimeout(P), P = setTimeout(() => n(Rt), 500);
  }), {
    el: l,
    update(I) {
      const $ = !b;
      b = I, $ && (g.pos = b.pos, g.tilt = b.tilt, O = performance.now() + 1500, f && setTimeout(N, 1600)), l.classList.toggle("x", k() === "x"), l.classList.toggle("y", k() === "y"), b.canSet ? (l.tabIndex = 0, l.setAttribute("role", "slider"), l.setAttribute("aria-valuemin", "0"), l.setAttribute("aria-valuemax", "100"), l.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), l.setAttribute("aria-orientation", k() === "x" ? "horizontal" : "vertical")) : l.setAttribute("role", "img"), l.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), l.setAttribute("aria-valuetext", b.text), N();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(et), clearTimeout(P), l.remove();
    }
  };
}
const ra = (o) => Math.round(o * 100) / 100, ya = (o) => o * Math.PI / 180, Sn = (o, n, i) => o + (n - o) * i, Mc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function hu(o, n, i, l = 45, f = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(ya(l)), v = Math.sin(ya(l)), D = Math.cos(ya(f)), L = Math.sin(ya(f)), _ = 0.68, P = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: l,
    V: [v * D, g * D, L],
    L: [_ * g + P * v, -_ * v + P * g],
    k: b,
    cy: g,
    sy: v,
    sp: L,
    cp: D,
    p: ([O, k, K]) => {
      const tt = O * g - k * v, z = O * v + k * g;
      return [n + tt * b, i + (z * L - K * D) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(O, k, K) {
      const tt = (O - n) / b, z = ((k - i) / b + K * D) / L;
      return [tt * g + z * v, -tt * v + z * g];
    }
  };
}
const _n = (o, n = !0) => "M" + o.map(([i, l]) => `${ra(i)} ${ra(l)}`).join("L") + (n ? "Z" : "");
function oo(o, n, i, l = 7) {
  const f = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, D] of b)
    for (let L = 0; L <= l; L++) {
      const _ = ya(D + 90 * L / l);
      f.push([g + i * Math.cos(_), v + i * Math.sin(_)]);
    }
  return f;
}
const Qe = (o, n = 56) => Array.from({ length: n }, (i, l) => [o * Math.cos(2 * Math.PI * l / n), o * Math.sin(2 * Math.PI * l / n)]);
function He(o, n, i, l = !0, f = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([D, L]) => f(D, L, n)), ...o.map(([D, L]) => f(D, L, i))], v = [
    { idx: o.map((D, L) => L), smooth: !1 },
    { idx: o.map((D, L) => b + L), smooth: !1 }
  ];
  for (let D = 0; D < b; D++) {
    const L = (D + 1) % b;
    v.push({ idx: [D, L, b + L, b + D], smooth: l });
  }
  return { verts: g, faces: v };
}
const ko = (o, n) => ({ ...o, verts: o.verts.map(n) }), Ti = (o, n, i) => ([l, f, b]) => [l + o, f + n, b + i], Hs = (o, n = 0, i = 0) => {
  const l = Math.cos(ya(o)), f = Math.sin(ya(o));
  return ([b, g, v]) => [n + (b - n) * l - (g - i) * f, i + (b - n) * f + (g - i) * l, v];
}, Fc = (o, n = 0, i = 0) => {
  const l = Math.cos(ya(o)), f = Math.sin(ya(o));
  return ([b, g, v]) => [b, n + (g - n) * l + (v - i) * f, i - (g - n) * f + (v - i) * l];
}, pg = (o, n) => [o[0] - n[0], o[1] - n[1], o[2] - n[2]], mu = (o, n) => o[0] * n[0] + o[1] * n[1] + o[2] * n[2], gu = (o) => o.reduce((n, i) => [n[0] + i[0] / o.length, n[1] + i[1] / o.length, n[2] + i[2] / o.length], [0, 0, 0]);
function ug(o) {
  const n = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const l = o[i], f = o[(i + 1) % o.length];
    n[0] += (l[1] - f[1]) * (l[2] + f[2]), n[1] += (l[2] - f[2]) * (l[0] + f[0]), n[2] += (l[0] - f[0]) * (l[1] + f[1]);
  }
  return n;
}
function Df(o, n = [1, 1, 1]) {
  const i = gu(o.verts);
  return o.faces.map((l) => {
    const f = l.idx.map((g) => o.verts[g]);
    let b = ug(f);
    return mu(b, pg(gu(f), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), mu(b, n) > 1e-6 * Math.hypot(...b);
  });
}
const Mo = (o, n, i) => _n(n.faces[i].idx.map((l) => o.p(n.verts[l])));
function Ne(o, n, i = "", l = "") {
  const f = n.verts.map(o.p), b = Df(n, o.V);
  let g = "";
  n.faces.forEach((L, _) => {
    b[_] && (g += _n(L.idx.map((P) => f[P])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((L, _) => {
    for (let P = 0; P < L.idx.length; P++) {
      const O = L.idx[P], k = L.idx[(P + 1) % L.idx.length], K = O < k ? `${O}-${k}` : `${k}-${O}`;
      v.has(K) || v.set(K, { a: O, b: k, fs: [] }), v.get(K).fs.push(_);
    }
  });
  let D = "";
  for (const { a: L, b: _, fs: P } of v.values()) {
    const [O, k] = P, K = b[O], tt = k === void 0 ? !1 : b[k], z = k !== void 0 && n.faces[O].smooth && n.faces[k].smooth;
    (K !== tt || K && tt && !z) && (D += `M${ra(f[L][0])} ${ra(f[L][1])}L${ra(f[_][0])} ${ra(f[_][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${l ? ` class="${l}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${D}"/></g>`;
}
function fg(o) {
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
let hg = 0;
function ia(o, n, i, l, f = "") {
  const b = n.verts.filter((D) => D[2] >= i - 0.01).map(([D, L, _]) => o.p([D + (_ - i) * o.L[0], L + (_ - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = _n(fg(b));
  if (!f) return `<path class="shade" fill="url(#${l})" d="${g}"/>`;
  const v = `clip${++hg}`;
  return `<clipPath id="${v}"><path d="${f}"/></clipPath><path class="shade" fill="url(#${l})" clip-path="url(#${v})" d="${g}"/>`;
}
const ar = (o, n, i = "edge", l = !0) => `<path class="${i}" d="${_n(n.map(o.p), l)}"/>`, yo = (o, n, i, l = "edge") => {
  const [f, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${l}" d="M${ra(f)} ${ra(b)}L${ra(g)} ${ra(v)}"/>`;
};
function Ws(o, n, i, l, { part: f = "", cls: b = "", w: g = 0 } = {}) {
  const [v, D] = o.p(n), L = o.k, _ = `matrix(${ra(L * o.cy)} ${ra(L * o.sy * o.sp)} ${ra(-L * o.sy)} ${ra(L * o.cy * o.sp)} ${ra(v)} ${ra(D)})`, P = g ? `<rect x="${-g / 2}" y="${-l * 0.9}" width="${g}" height="${l * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${_}"${f ? ` data-part="${f}"` : ""}>${P}<text class="st ${b}" font-size="${l}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class mg {
  constructor(n, i = 0.24, l = 0.62) {
    this.x = n, this.t = n, this.v = 0, this.k = i, this.d = l;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const gg = "http://www.w3.org/2000/svg", bg = matchMedia("(prefers-reduced-motion: reduce)");
let wg = 0;
class or {
  constructor(n, i = {}) {
    Cp(this, "tick", () => {
      let n = !1;
      for (const i of this.springs) n = i.step() || n;
      this.paint(), this.raf = n ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++wg}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const l = Mc[i.camera] || Mc.iso;
    this.yaw = this.spring(l.yaw, 0.12, 0.7), this.pitch = this.spring(l.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const f = this.svg = document.createElementNS(gg, "svg");
    this.box = [400, 400], f.setAttribute("viewBox", "0 0 400 400"), f.setAttribute("class", "iso"), f.tabIndex = 0, n.prepend(f), f.addEventListener("pointerdown", (g) => {
      var D, L, _, P;
      const v = (_ = (L = (D = g.target).closest) == null ? void 0 : L.call(D, "[data-part]")) == null ? void 0 : _.dataset.part;
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
    const [n, i, l] = this.base, [f, b] = this.box, g = this.fillAmt.x, v = i + (f - 400) / 2, D = l + (b - 400) / 2, L = hu(n, v, D, this.yaw.x, this.pitch.x);
    return g < 1e-3 ? L : hu(n, Sn(v, f / 2, g), Sn(D, b / 2 + this.lift * L.cp * L.k / 2, g), this.yaw.x, this.pitch.x);
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
    const D = (this.box[0] - 48) / f.k, L = ((this.box[1] - 48) / f.k - this.lift * f.cp) / f.sp, _ = Math.max(n * 0.6, (D * b - L * g) / v), P = Math.max(i * 0.6, (L * b - D * g) / v);
    return [Sn(n, _, l), Sn(i, P, l)];
  }
  setCamera(n) {
    const i = Mc[n];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(n, i, l) {
    const f = new mg(n, i, l);
    return this.springs.push(f), f;
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
class vg extends or {
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
    const i = this.v, l = 11 + this.h.x, [f, b] = this.size(68, 68), g = Math.min(f, b) / 68, v = He(oo(f, b, 18 * g), 0, 8), D = He(Qe(25 * g), 8, 11), L = He(Qe(18.5 * g), 11, l), _ = Qe(12.5 * g).map(([O, k]) => [O, k, l]), P = Math.max(0, Math.min(1, this.glow.x));
    return ia(i, v, 0, n) + Ne(i, v) + Ne(i, D, "cap") + ia(i, L, 11, n, Mo(i, D, 1)) + Ne(i, L, "cap") + ar(i, _) + (P > 0.01 ? `<g style="opacity:${P.toFixed(3)}">${ar(i, _, "accent")}</g>` : "");
  }
}
class bu extends or {
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
    const i = this.v, l = this.t.x, [f, b] = this.size(72, 96), g = f / 72, v = b / 96, D = Math.min(g, v), L = 9, _ = Sn(3, 12, l), P = Sn(12, 3, l), O = (_ + P) / 2 - 1.4, k = 31 * v, K = He(oo(f, b, 16 * D), 0, 6), tt = He(oo(48 * g, 72 * v, 9 * D), 6, L), z = [[-k, L], [k, L], [k, L + P], [0, L + O], [-k, L + _]], N = He(z, -20 * g, 20 * g, !1, (Q, I, $) => [$, Q, I]), et = (Q) => L + (Q < 0 ? Sn(_, O, (Q + k) / k) : Sn(O, P, Q / k)) + 0.05, it = Qe(4.2 * D, 36).map(([Q, I]) => [Q, I - k / 2, et(I - k / 2)]), pt = [[0, k * 0.32], [0, k * 0.68]].map(([Q, I]) => [Q, I, et(I)]);
    return ia(i, K, 0, n) + Ne(i, K) + Ne(i, tt, "paddle") + ia(i, N, L, n, Mo(i, tt, 1)) + Ne(i, N, "paddle") + ar(i, it, this.on ? "edge mark" : "accent mark") + yo(i, pt[0], pt[1], this.on ? "accent mark" : "edge mark");
  }
}
class yg extends or {
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
    const i = this.v, l = this.size(44, 136)[1], f = 44, b = 1, g = l / 136, v = 1, D = 48 * g, L = 6 + this.kh.x, _ = D - this.L.x * 2 * D;
    this.travel = 2 * D;
    const P = Math.min(32 * b, f - 12), O = P / 32, k = He(oo(f, l, 16 * v), 0, 6), K = ko(He(oo(P, 16 * v, 5 * v), 6, L), Ti(0, _, 0));
    let tt = "";
    for (let et = 0; et <= 10; et++) {
      const it = D - et * (2 * D) / 10, pt = (et % 5 === 0 ? 7 : 4) * b, Q = 9 * v;
      tt += yo(i, [Q, it, 6], [Q + pt, it, 6]) + yo(i, [-Q, it, 6], [-Q - pt, it, 6]);
    }
    const z = oo(6 * v, 2 * D + 6 * v, 3 * v).map(([et, it]) => [et, it, 6]), N = [[-3 * v, D + 3 * v, 6], [3 * v, D + 3 * v, 6], [3 * v, _, 6], [-3 * v, _, 6]];
    return ia(i, k, 0, n) + Ne(i, k, "plate") + `<g class="deco">${tt}${ar(i, z)}<path class="level" d="${_n(N.map(i.p))}"/></g>` + ia(i, K, 6, n, Mo(i, k, 1)) + Ne(i, K, "knob") + `<g class="deco">${yo(i, [-12 * O, _, L], [12 * O, _, L])}${yo(i, [-8 * O, _ - 3.5 * v, L], [8 * O, _ - 3.5 * v, L])}${yo(i, [-8 * O, _ + 3.5 * v, L], [8 * O, _ + 3.5 * v, L])}</g>`;
  }
}
class Sc extends or {
  constructor(n, i) {
    super(n, i), this.min = i.min ?? 10, this.max = i.max ?? 30, this.now = "now" in i ? i.now : 19.5, this.value = i.value ?? 21.5, this.step = i.step ?? 0.5, this.tickStep = i.tick ?? 0.5, this.major = i.major ?? 10, this.tint = i.tint || null, this.labelOf = i.labelOf || ((l) => l), this.title = i.title || "", this.base = [2.85, 200, 194], this.lift = 22, this.val = this.spring(this.value, 0.35, 0.5), this.kh = this.spring(15, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
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
    const l = (this.val.x - this.min) / (this.max - this.min || 1);
    Object.assign(this, {
      min: n.min,
      max: n.max,
      step: n.step,
      tickStep: n.tick,
      major: n.major,
      tint: n.tint || null,
      labelOf: n.labelOf || ((f) => f),
      now: "now" in n ? n.now : null,
      title: n.title || ""
    }), this.val.x = this.min + Math.max(0, Math.min(1, l)) * (this.max - this.min), this.value = Math.max(this.min, Math.min(this.max, i)), this.val.t = this.value, this.svg.setAttribute("aria-label", n.label || this.opts.label), this.svg.setAttribute("aria-valuenow", this.value), this.kick();
  }
  angleAt(n) {
    const [i, l] = this.v.ground(n[0], n[1], 7 + this.kh.x);
    return Math.atan2(l, i) * 180 / Math.PI;
  }
  down(n, i) {
    this.grab = { last: this.angleAt(i), raw: this.value, moved: 0 }, this.kh.t = 11.5;
  }
  drag(n) {
    if (!this.grab) return;
    const i = this.angleAt(n);
    let l = i - this.grab.last;
    l > 180 && (l -= 360), l < -180 && (l += 360), this.grab.last = i, this.grab.moved += Math.abs(l), this.grab.raw = Math.max(this.min, Math.min(this.max, this.grab.raw + l / 270 * (this.max - this.min))), this.set(this.grab.raw);
  }
  up() {
    var i, l;
    const n = this.grab;
    this.grab = null, this.kh.t = 15, n && n.moved < 3 && ((l = (i = this.opts).onPress) == null || l.call(i));
  }
  key(n, i) {
    if ((n.key === "Enter" || n.key === " ") && this.opts.onPress)
      return i && !n.repeat && this.opts.onPress(), !0;
    const l = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[n.key];
    return l === void 0 ? !1 : (i ? (this.set(this.value + l * this.step), this.kh.t = 12.5) : this.kh.t = 15, !0);
  }
  show(n, i) {
    this.held || (i != null && (this.now = i), n != null && (this.value = n, this.val.t = n, this.svg.setAttribute("aria-valuenow", n)), this.kick());
  }
  render(n) {
    const i = this.v, l = 7 + this.kh.x, f = this.ang(this.val.x), [b, g] = this.size(92, 92), v = b / 92, D = g / 92, L = Math.min(v, D), _ = (Q, I, $) => [Q * Math.cos(I) * v, Q * Math.sin(I) * D, $], P = He(Qe(46, 72).map(([Q, I]) => [Q * v, I * D]), 0, 7), O = He(Qe(22 * L, 64), 7, l), k = Math.min(this.now ?? this.value, this.value), K = Math.max(this.now ?? this.value, this.value);
    let tt = "";
    const z = Math.round((this.max - this.min) / this.tickStep), N = Math.max(1, Math.round(this.major / 2));
    for (let Q = 0; Q <= z; Q++) {
      const I = this.min + Q * this.tickStep, $ = ya(this.ang(I)), ut = Q % this.major === 0, xt = ut ? 36.5 : Q % N === 0 ? 34.5 : 33.2, Rt = !this.tint && this.now != null && I >= k && I <= K && this.value > this.now, ct = this.tint ? 'edge tint" style="stroke:' + this.tint(I) : Rt ? "accent" : "edge";
      tt += yo(i, _(30, $, 7), _(this.tint ? 37 : xt, $, 7), ct);
      const S = ut ? this.labelOf(I) : null;
      S != null && S !== "" && (tt += Ws(i, _(41.5, $, 7), S, 4 * L));
    }
    let et = "";
    for (let Q = 0; Q < 40; Q++) {
      const I = ya(f + Q * 9), $ = Math.cos(I), ut = Math.sin(I), xt = 22 * L;
      $ * i.V[0] + ut * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (et += yo(i, [xt * $, xt * ut, 9], [xt * $, xt * ut, l - 2.2]));
    }
    this.title && (tt += Ws(i, _(37, ya(90 - this.yaw.x), 7), this.title, 4.6 * L, { cls: "sel" }));
    const it = ya(f), pt = Qe(18.5 * L, 64).map(([Q, I]) => [Q, I, l]);
    return ia(i, P, 0, n) + Ne(i, P, "knob") + `<g class="deco">${tt}</g>` + ia(i, O, 7, n, Mo(i, P, 1)) + Ne(i, O, "knob") + `<g class="deco">${et}${ar(i, pt)}` + (this.tint ? `<path class="swatch" style="fill:${this.tint(this.value)}" d="${_n(Qe(8 * L, 40).map(([Q, I]) => i.p([Q, I, l])))}"/>` : "") + `${yo(i, [(this.tint ? 10 : 5) * L * Math.cos(it), (this.tint ? 10 : 5) * L * Math.sin(it), l], [15.5 * L * Math.cos(it), 15.5 * L * Math.sin(it), l], "edge pointer")}</g>`;
  }
}
class xg extends or {
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
    const i = this.v, l = this.A.x - this.yaw.x, f = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, D = g / 92, L = Math.min(v, D), _ = He(oo(b, g, 20 * L), 0, 7), P = He(Qe(15 * L, 48), 7, 12), O = ko(He([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([K, tt]) => [K * L, tt * L]), 12, f, !1), Hs(l));
    let k = "";
    return this.positions.forEach((K, tt) => {
      const z = ya(K.a - this.yaw.x), N = tt === this.index, et = Math.cos(z), it = Math.sin(z), pt = Qe(1.7 * L, 20).map(([Q, I]) => [Q + 26.5 * et * v, I + 26.5 * it * D, 7]);
      k += N ? `<path class="dotfill" d="${_n(pt.map(i.p))}"/>` : ar(i, pt), k += Ws(i, [37.5 * et * v, 37.5 * it * D, 7], K.label, 5.6 * L, { part: `pos-${tt}`, cls: N ? "sel" : "", w: 26 });
    }), ia(i, _, 0, n) + Ne(i, _) + k + ia(i, O, 7, n, Mo(i, _, 1)) + Ne(i, P, "knob") + Ne(i, O, "knob") + `<g class="deco">${yo(i, Hs(l)([6 * L, 0, f]), Hs(l)([19 * L, 0, f]))}</g>`;
  }
}
class kg extends or {
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
    const i = this.v, l = 6, f = l - 23, b = 6, [g, v] = this.size(86, 104), D = Math.min(g / 86, v / 104), L = ([I, $, ut]) => [I * D, $ * D, 6 + (ut - 6) * D], _ = He(oo(g, v, 18 * D), 0, 6), P = ko(He(Qe(8, 40), 6, 10), (I) => L(Ti(0, l, 0)(I))), O = (I) => L(Ti(0, l, 10)(Fc(this.phi.x)(I))), k = ko(He(Qe(2.2, 20), 0, 13.5), O), K = ko(He(Qe(3.8, 24), 12.5, 17.5), O), tt = (I) => L(Fc(-this.lid.x, f, b)(I)), z = ko(He(oo(40, 46, 7), 6, 30), (I) => tt(Ti(0, l, 0)(I))), N = Df(z, i.V);
    let et = "";
    if (N[1]) {
      let I = "";
      for (let ut = -84; ut <= 84; ut += 12) {
        const xt = [[ut - 40, l - 40], [ut - 34, l - 40], [ut + 46, l + 40], [ut + 40, l + 40]].map(([Rt, ct]) => i.p(tt([Rt, ct, 30])));
        I += `<path class="level" d="${_n(xt)}"/>`;
      }
      const $ = `${this.id}s`;
      et += `<clipPath id="${$}"><path d="${Mo(i, z, 1)}"/></clipPath><g clip-path="url(#${$})">${I}</g>`;
    }
    N[0] && (et += ar(i, oo(32, 38, 4).map(([I, $]) => tt([I, $ + l, 6]))));
    const it = `<g data-part="toggle">${Ne(i, P)}${Ne(i, k)}${Ne(i, K)}</g>`, pt = `<g data-part="cover">${Ne(i, z)}<g class="deco">${et}</g></g>`, Q = this.lid.x > 45;
    return ia(i, _, 0, n) + Ne(i, _) + ia(i, z, 6, n, Mo(i, _, 1)) + ia(i, K, 6, n, Mo(i, _, 1)) + (Q ? pt + it : it + pt);
  }
}
class _c extends or {
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
    const i = this.v, [l, f] = this.size(64, 84), b = Math.min(l / 64, f / 84), g = ([z, N, et]) => [z * b, N * b, 6 + (et - 6) * b], v = this.press.x * 1.2, D = He(oo(l, f, 16 * b), 0, 6), L = ko(He(Qe(10, 6).map(([z, N]) => [z, N]), 6, 9 - v, !1), (z) => g(Hs(30)(z))), _ = ko(He(Qe(6.5, 36), 9 - v, 12 - v), g), P = (z) => g(Ti(0, 0, 12 - v)(Fc(this.phi.x)(z))), O = ko(He(Qe(2.3, 20), 0, 15), P), k = ko(He(Qe(4, 24), 14, 19), P), K = f / 2 - 13 * b, tt = (z, N, et) => Ws(i, [0, N, 6], z, (this.opts.textSize || 6) * b, { part: "lever", cls: et ? "sel" : "", w: 30 });
    return ia(i, D, 0, n) + Ne(i, D) + tt(this.labels[0], -K, this.on) + tt(this.labels[1], K, !this.on) + ia(i, k, 6, n, Mo(i, D, 1)) + ia(i, O, 6, n, Mo(i, D, 1)) + `<g data-part="lever">${Ne(i, L)}${Ne(i, _)}${Ne(i, O)}${Ne(i, k)}</g>`;
  }
}
const wu = "homecore-density", vu = "homecore-physical", yu = "homecore-physical-view", xu = "homecore-physical-fit", ku = "homecore-physical-binary", Mu = "homecore-physical-preview-at", We = {
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
}, j = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), Su = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Cc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Ac = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Cs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, _u = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Cu = 1, Mg = 4, Au = 16, Lu = 32, Sg = 128, _g = 256, Tu = 16384, Du = 1, Eu = 2, Lc = 4, Bu = 8, Cg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Pu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Ag = { curtain: "curtains", blind: "blind", venetian: "blinds" }, _i = {
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
}, Ru = ["covers", "people", "openings", "leaks", "vacuum"], Hu = "homecore_house", Nu = "homecore-house-used", Ci = ["switch", "fan", "input_boolean", "automation"], Ou = "homecore-house-look", Lg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Tg = [["popup", "Popup"], ["sheet", "Sheet"]], Dg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Eg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Bg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Ai = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Pg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Rg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Iu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Tc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', oa = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', As = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Ec = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ef = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", Ls = Ef(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Fu = Ef(["M20 6L9 17L4 12"]), wo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + j(o || "") + '"' + (n ? ' data-icon-name="' + j(n) + '"' : "") + "></span>", Hg = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', qu = 1, Wu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Vu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ts = ["door", "window", "garage_door", "opening"], ju = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Rr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Ng = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Og = 10, Ig = 20, Fg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, qg = ["living room", "bedroom", "office"];
function Wg(o, { config: n, getHass: i }) {
  var yp, xp, kp;
  const l = (t) => o.getElementById(t), f = l("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let D = We.get(wu) === "1", L = We.get(vu) === "1", _ = We.get(yu) || "front", P = We.get(xu) || "fill", O = We.get(ku) || "toggle", k = {};
  const K = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, tt = (t, e, a) => K({ type: "call_service", domain: t, service: e, service_data: a }), z = o.querySelector("#appearancePane .toggleList");
  z && !l("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), l("densityToggle").addEventListener("click", () => {
    D = !D, We.set(wu, D ? "1" : "0"), ct();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([s, p]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + s + '">' + p + "</button>").join("") + "</div>", it = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function pt() {
    var T, X;
    if (!g || l("housePane")) return;
    const t = l("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (C, V) => '<div class="houseTab' + (C === "look" ? " active" : "") + '" data-house-pane="' + C + '"><section class="card">' + V + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([C, V]) => '<button class="tab segBtn' + (C === "look" ? " active" : "") + '" type="button" data-house-tab="' + C + '">' + V + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", Lg.map(([C, V]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + C + '"><div class="tfCardTitle">' + V + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + N.map(([C, V, yt]) => it(V, yt, '<select class="settingsSelect" data-source="' + C + '" aria-label="' + V + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(_i).map(([C, V]) => it(V.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + C + '" aria-label="' + V.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (C) => t.querySelector('[data-look-group="' + C + '"]'), s = (C) => C == null ? void 0 : C.closest(".toggleRow");
    [s(t.querySelector(".themeBtn"))].forEach((C) => C && r("look").appendChild(C));
    const p = s(l("densityToggle"));
    p && (p.hidden = !0), [s(l("moreInfoChoice")), s(l("namesChoice"))].forEach((C) => C && r("house").appendChild(C)), r("house").insertAdjacentHTML("beforeend", it("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + it("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), r("house").insertAdjacentHTML("beforeend", it("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + it("Angle", "Where the physical controls are seen from.", et("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + it("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", et("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + it("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", et("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const d = () => {
      const C = l("physToggle");
      C.classList.toggle("on", L), C.setAttribute("aria-checked", String(L)), l("physViewRow").hidden = l("physFitRow").hidden = l("physBinaryRow").hidden = !L, t.querySelectorAll("[data-phys-view]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physView === _))), t.querySelectorAll("[data-phys-fit]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physFit === P))), t.querySelectorAll("[data-phys-binary]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.physBinary === O)));
    };
    r("house").addEventListener("click", (C) => {
      const V = C.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      V && (V.id === "physToggle" && (L = !L, We.set(vu, L ? "1" : "0"), bn.clear()), V.dataset.physView && (_ = V.dataset.physView, We.set(yu, _), bn.forEach((yt) => yt.ctls.forEach((Tt) => Tt.setCamera(_)))), V.dataset.physFit && (P = V.dataset.physFit, We.set(xu, P), bn.forEach((yt) => yt.ctls.forEach((Tt) => Tt.setFill(P === "fill")))), V.dataset.physBinary && (O = V.dataset.physBinary, We.set(ku, O), bn.clear()), d(), (V.id === "physToggle" || V.dataset.physBinary) && Na(), A(V.closest(".toggleRow")));
    }), d();
    let u = null;
    const h = () => {
      !u || u.hidden || (u.classList.remove("in"), setTimeout(() => {
        u.classList.contains("in") || (u.hidden = !0);
      }, 220));
    };
    function y(C, V) {
      const yt = u.offsetWidth, Tt = u.offsetHeight;
      u.style.left = Math.max(8, Math.min(window.innerWidth - yt - 8, C)) + "px", u.style.top = Math.max(8, Math.min(window.innerHeight - Tt - 8, V)) + "px", u.classList.add("placed");
    }
    function A(C) {
      const V = o.querySelector("#app");
      if (!V) return;
      if (!u) {
        u = document.createElement("div"), u.className = "tfPhysPreview", u.hidden = !0, u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Physical controls preview"), u.innerHTML = '<div class="tfPhysPreviewHead" title="Drag to move"><span class="tfPhysGrip" aria-hidden="true"></span><span class="activityTitle">Preview</span><button class="tfBack" type="button" data-preview-close aria-label="Close preview">' + Ac + '</button></div><div class="tfPhysPreviewRow"></div><div class="tfPhysPreviewNote">Off: popups show their usual controls.</div>', V.appendChild(u), u.querySelector("[data-preview-close]").addEventListener("click", h);
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
          const fe = (Ia) => y(Ia.clientX - Qt, Ia.clientY - me), ye = () => {
            At.removeEventListener("pointermove", fe), At.removeEventListener("pointerup", ye), At.removeEventListener("pointercancel", ye), u.classList.remove("dragging");
            const Ia = u.getBoundingClientRect();
            We.set(Mu, JSON.stringify([Math.round(Ia.left), Math.round(Ia.top)]));
          };
          At.addEventListener("pointermove", fe), At.addEventListener("pointerup", ye), At.addEventListener("pointercancel", ye);
        }), window.addEventListener("resize", () => {
          if (u.classList.contains("placed")) {
            const ft = u.getBoundingClientRect();
            y(ft.left, ft.top);
          }
        });
      }
      const yt = (() => {
        try {
          return JSON.parse(We.get(Mu) || "null");
        } catch {
          return null;
        }
      })(), Tt = u.querySelector(".tfPhysPreviewRow");
      if (u.dataset.binary !== O) {
        u.dataset.binary = O;
        const At = [[O === "rocker" ? "Rocker" : "Toggle", "Switch"], ["Fader", "Light"], ["Dial", "Thermostat"]];
        Tt.innerHTML = At.map(([, Qt]) => '<div class="tfPhysPreviewCell"><div class="tfMoreSpace tfPhys"></div><span>' + Qt + "</span></div>").join("");
        const ft = Tt.querySelectorAll(".tfPhys"), Lt = { camera: _, fill: P === "fill" };
        u.ctls = [
          O === "rocker" ? new bu(ft[0], { ...Lt, on: !0, label: "Sample switch" }) : new _c(ft[0], { ...Lt, on: !0, label: "Sample switch" }),
          ...np(ft[1], { ...Lt, label: "Sample light" }, null, () => {
          }).ctls,
          new Sc(ft[2], { ...Lt, value: 21.5, now: 19.5, min: 10, max: 30, label: "Sample thermostat target" })
        ];
      } else u.ctls.forEach((At) => {
        At.setCamera(_), At.setFill(P === "fill");
      });
      u.classList.toggle("off", !L), u.hidden && (u.hidden = !1, yt && y(yt[0], yt[1]), u.offsetWidth), u.classList.add("in"), (C && !u.classList.contains("placed") ? C.getBoundingClientRect().bottom - (u.getBoundingClientRect().top - 16) : 0) > 0 && C.scrollIntoView({ block: "center", behavior: Ve() ? "instant" : "smooth" });
    }
    ["#homeNav", "#settingsBack", "#tvNav"].forEach((C) => {
      var V;
      return (V = o.querySelector(C)) == null ? void 0 : V.addEventListener("click", h);
    }), [s(l("hoursChoice")), s(l("wxStyleChoice"))].forEach((C) => C && r("weather").appendChild(C));
    const M = l("housePane"), R = M.querySelector(".houseTabs"), B = R.querySelector(".rubberIndicator"), G = "homecore-light-view", E = (C) => {
      M.classList.toggle("tfLightCardsOn", C === "cards"), M.querySelectorAll("[data-light-view]").forEach((V) => V.setAttribute("aria-pressed", String(V.dataset.lightView === C))), We.set(G, C);
    };
    E(We.get(G) === "table" ? "table" : "cards"), M.querySelector(".tfLightView").addEventListener("click", (C) => {
      const V = C.target.closest("[data-light-view]");
      V && E(V.dataset.lightView);
    }), new ResizeObserver(() => I()).observe(M), (X = (T = document.fonts) == null ? void 0 : T.ready) == null || X.then(() => I());
    const F = (C) => {
      const V = R.querySelector(".tab.active");
      B.style.transition = "none", C ? Ps(B, B.offsetLeft, B.offsetWidth, V.offsetLeft, V.offsetWidth) : (B.style.left = V.offsetLeft + "px", B.style.width = V.offsetWidth + "px");
    };
    new ResizeObserver(() => F(!1)).observe(R), M.addEventListener("click", (C) => {
      const V = C.target.closest("[data-house-tab]");
      if (V) {
        R.querySelectorAll(".tab").forEach((At) => At.classList.toggle("active", At === V)), M.querySelectorAll(".houseTab").forEach((At) => At.classList.toggle("active", At.dataset.housePane === V.dataset.houseTab)), V.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), F(!0), I();
        return;
      }
      const yt = C.target.closest("[data-light-fav]");
      if (yt) {
        Vc(yt.dataset.lightFav);
        return;
      }
      const Tt = C.target.closest("[data-light-pick]");
      if (Tt) {
        const [At, ft] = Tt.dataset.lightPick.split("|"), Lt = { ...Xt[At] };
        Tt.dataset.v ? Lt[ft] = Tt.dataset.v : delete Lt[ft], Xt[At] = Lt, _o(), [...ta.keys()].filter((Qt) => Qt.endsWith(":" + ft)).forEach((Qt) => ta.delete(Qt)), Na();
        return;
      }
      const Nt = C.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Nt || Nt.disabled)) {
        if (Nt.dataset.lights && (Xt.lights = Nt.dataset.lights), Nt.dataset.dacPad && (Xt.dacPad = Nt.dataset.dacPad), (Nt.dataset.lights || Nt.dataset.dacPad) && (_o(), ta.clear()), Nt.dataset.sumToggle) {
          const At = Nt.dataset.sumToggle, ft = new Set(kt.hiddenSums || []);
          ft.has(At) ? ft.delete(At) : ft.add(At), kt = { ...kt, hiddenSums: [...ft] }, Ta();
        }
        Na();
      }
    }), M.addEventListener("change", (C) => {
      const V = C.target;
      V.dataset.source && (kt = { ...kt, sources: { ...kt.sources || {}, [V.dataset.source]: V.value || void 0 } }, Ta());
      const yt = V.dataset.lightStyle || V.dataset.lightPad;
      if (yt) {
        const Tt = V.dataset.lightStyle ? "lightStyles" : "lightPads", Nt = { ...Xt[Tt] };
        V.value ? Nt[yt] = V.value : delete Nt[yt], Xt[Tt] = Nt, _o(), [...ta.keys()].filter((At) => At.endsWith(":" + yt)).forEach((At) => ta.delete(At));
      }
      Na();
    });
  }
  function Q() {
    var M, R;
    ai() && fn();
    const t = l("housePane");
    if (!t) return;
    const e = !!customElements.get(Za);
    t.querySelectorAll("[data-lights]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.lights === Xt.lights))), l("lightsRow").querySelector(".status").textContent = e || !ai() ? "How lights show on the house page." : Ka === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.dacPad === Xt.dacPad))), l("dacPadRow").hidden = !ai();
    for (const B of t.querySelectorAll("[data-source]")) {
      if (B === o.activeElement) continue;
      const [G] = N.find(([F]) => F === B.dataset.source), E = Object.keys(k).filter(N.find(([F]) => F === G)[3]).sort((F, T) => vt(F).localeCompare(vt(T)));
      B.dataset.sig !== E.join(",") && (B.innerHTML = '<option value="">Automatic</option>' + E.map((F) => '<option value="' + j(F) + '">' + j(vt(F)) + "</option>").join(""), B.dataset.sig = E.join(",")), B.value = E.includes((M = kt.sources) == null ? void 0 : M[G]) ? kt.sources[G] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((B) => {
      const G = !(kt.hiddenSums || []).includes(B.dataset.sumToggle);
      B.classList.toggle("on", G), B.setAttribute("aria-checked", String(G));
    });
    const a = l("lightRows"), r = l("lightCards"), s = o.activeElement, p = a != null && a.contains(s) || r != null && r.contains(s) ? s : null;
    if (!a || p != null && p.matches("select")) {
      I();
      return;
    }
    const d = new Set($t()), u = (B, G, E, F) => '<option value="' + B + '"' + (B === E ? " selected" : "") + ">" + G + "</option>", h = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, G) => !Se.get(B) - !Se.get(G) || (Se.get(B) || "").localeCompare(Se.get(G) || "") || vt(B).localeCompare(vt(G))).map((B) => {
      const G = Xt.lightStyles[B] || "", E = Xt.lightPads[B] || "", F = d.has(B), T = j(vt(B));
      return "<tr><td><strong>" + T + "</strong></td><td>" + j(Se.get(B) || "—") + "</td><td>" + j(Oe(B)) + '</td><td class="metaSwitchCol"><button class="switch' + (F ? " on" : "") + '" type="button" role="switch" aria-checked="' + F + '" data-light-fav="' + j(B) + '" aria-label="' + T + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + j(B) + '" aria-label="' + T + ' tile">' + u("", "Default", G) + u("tile", "HomeCore tile", G) + u("dac", "Dual Axis Controller", G) + '</select></td><td><select class="settingsSelect" data-light-pad="' + j(B) + '" aria-label="' + T + ' pad"' + (Hn(B) ? "" : " disabled") + ">" + u("", "Default", E) + u("temperature", "Temperature", E) + u("colour", "Colour", E) + "</select></td></tr>";
    }).join(""), y = (B, G, E, F, T) => '<div class="themeChoice" role="group" aria-label="' + E + '">' + F.map(([X, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (X === T) + '" data-light-pick="' + B + "|" + j(G) + '" data-v="' + X + '">' + C + "</button>").join("") + "</div>", A = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, G) => !Se.get(B) - !Se.get(G) || (Se.get(B) || "").localeCompare(Se.get(G) || "") || vt(B).localeCompare(vt(G))).map((B) => {
      const G = d.has(B), E = j(vt(B)), F = [Se.get(B), Oe(B)].filter(Boolean).map(j).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + E + '</strong><div class="status">' + F + "</div></div></div>" + it("Favourite", "", '<button class="switch' + (G ? " on" : "") + '" type="button" role="switch" aria-checked="' + G + '" data-light-fav="' + j(B) + '" aria-label="' + E + ' is a favourite"></button>') + it("Tile", "", y("lightStyles", B, E + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[B] || "")) + (Hn(B) ? it("Pad", "", y("lightPads", B, E + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[B] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), r.dataset.html !== A && (r.innerHTML = A, r.dataset.html = A), p != null && p.dataset.lightFav && ((R = (r.contains(p) ? r : a).querySelector('[data-light-fav="' + CSS.escape(p.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), I();
  }
  function I() {
    var e, a, r;
    const t = l("housePane");
    if (t)
      for (const s of t.querySelectorAll(".themeChoice")) {
        const p = [...s.querySelectorAll("button")];
        let d = (e = s.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? s.nextElementSibling : null;
        if (!d) {
          d = document.createElement("select"), d.className = "settingsSelect tfChoiceList", d.setAttribute("aria-label", s.getAttribute("aria-label") || ((r = (a = s.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : r.textContent) || ""), d.addEventListener("change", () => {
            var M;
            return (M = p[Number(d.value)]) == null ? void 0 : M.click();
          }), s.after(d);
          const A = () => {
            d.innerHTML = p.map((R, B) => '<option value="' + B + '"' + (R.disabled ? " disabled" : "") + ">" + j(R.textContent) + "</option>").join("");
            const M = p.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            M >= 0 && (d.value = String(M));
          };
          new MutationObserver(A).observe(s, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), A();
        }
        const u = (A) => {
          s.hidden !== !A && (s.hidden = !A), d.hidden !== A && (d.hidden = A);
        };
        if (p.length > 3) {
          u(!1);
          continue;
        }
        if (!s.getClientRects().length && !d.getClientRects().length) {
          d.dataset.fit || u(!0);
          continue;
        }
        const h = s.hidden;
        s.hidden = !1;
        const y = p.every((A) => A.scrollWidth <= A.clientWidth + 1);
        s.hidden = h, u(y), d.dataset.fit = "1";
      }
  }
  const $ = document.createElement("div");
  $.className = "densityBadge", $.setAttribute("aria-live", "polite"), $.hidden = !0, f.appendChild($);
  let ut = 0;
  function xt() {
    if (!D) return;
    const t = l("homeView"), e = (p) => p.offsetParent !== null && !p.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((p) => {
      e(p) && (p.dataset.h = Math.round(p.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, s = a.filter((p) => {
      const d = p.getBoundingClientRect();
      return d.height > 0 && d.top >= 0 && d.bottom <= r + 0.5;
    }).length;
    $.hidden = !t.classList.contains("active"), $.innerHTML = "<b>" + s + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Rt = () => {
    D && requestAnimationFrame(xt);
  };
  function ct() {
    var t;
    f.classList.toggle("showDensity", D), (t = l("densityToggle")) == null || t.classList.toggle("on", D), $.hidden = !D, clearInterval(ut), D && (ut = setInterval(xt, 1e3), xt());
  }
  window.addEventListener("scroll", Rt, { capture: !0, passive: !0 }), window.addEventListener("resize", Rt, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ft = document.createElement("style");
  o.appendChild(Ft);
  const Y = new ResizeObserver(() => mt()), nt = /* @__PURE__ */ new Set(), st = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function mt() {
    const t = f.classList.contains("tfAreaOpen") && !f.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), nt.forEach((h) => {
      (!t || !h.isConnected) && (Y.unobserve(h), nt.delete(h));
    }), !t) {
      Ft.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, s = [...S.children].filter((h) => h.dataset.k && h.offsetParent);
    Ft.disabled = !0;
    const p = s.map((h) => {
      const y = getComputedStyle(h), A = /span (\d+)/.exec(y.gridColumnStart + " " + y.gridColumnEnd);
      return Math.min(r, A ? +A[1] : y.gridColumnEnd === "-1" ? r : 1);
    });
    Ft.disabled = !1;
    let d = 0;
    const u = s.map((h, y) => {
      nt.has(h) || (nt.add(h), Y.observe(h));
      const A = p[y];
      d + A > r && (d = 0);
      const M = d + 1;
      return d = (d + A) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + M + " / span " + A + ";grid-row-end:span " + Math.max(1, Math.ceil(st(h) + a)) + "}";
    }).join(`
`);
    Ft.textContent !== u && (Ft.textContent = u);
  }
  new MutationObserver(mt).observe(S, { childList: !0 }), new MutationObserver(mt).observe(f, { attributes: !0, attributeFilter: ["class"] });
  let ot = null, lt = null, q = null;
  const gt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), sa = /* @__PURE__ */ new Map(), fa = (t) => sa.set(t, (sa.get(t) || 0) + 1), So = () => [.../* @__PURE__ */ new Set([...Vt.keys(), ...ne])];
  let La = !1, rn = 0;
  const Cn = 6;
  let Wt = null;
  const ge = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
  let kt = { favourites: null }, An = {}, qr = {}, Bi = [], nr = null;
  const Ln = (() => {
    try {
      return JSON.parse(We.get(Nu)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Pi = 0;
  function Ta() {
    clearTimeout(Pi), Pi = setTimeout(() => Promise.resolve(K({ type: "frontend/set_user_data", key: Hu, value: kt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(We.get(Ou)) || {};
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
  })(), _o = () => We.set(Ou, JSON.stringify(Xt)), Wr = () => {
    f.dataset.more = Xt.more, f.dataset.names = Xt.names, ql();
  };
  g && z && !l("moreInfoChoice") && (l("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Tg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, _o(), Wr(), l("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Dg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, _o(), Wr(), l("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Eg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, _o(), Le == null || Le.refresh(), l("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Bg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, _o(), Le == null || Le.setStyle(Xt.wxStyle), Te == null || Te.forEach((a) => a.setStyle(Xt.wxStyle)), l("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), pt();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const xa = /* @__PURE__ */ new Map();
  let Ri = "";
  const Hi = g ? Gm({ onChange: () => Ee() }) : null;
  g && f.classList.add("house");
  const Da = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Le = null, Ni = null, Tn = !1;
  function Vr(t) {
    const e = Io();
    if (f.classList.toggle("houseBento", !!e), Le && (Ni !== e || t == null) && (Le.destroy(), Le = null), !e || t == null) {
      Da.remove();
      return;
    }
    Da.isConnected || S.append(Da), Da.style.order = t, !Le && !Tn && (Le = du(Da, { getHass: i, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: Gr }), Ni = e);
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
  ], zr = jr.map(([t]) => t), sn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Vs = { hourly: 2 }, ro = Object.fromEntries(jr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Te = null, rr = null;
  function Co(t) {
    const e = Io();
    Te && rr !== e && (Te.forEach((a) => a.destroy()), Te = null), Object.values(ro).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Te && !Tn && (Te = /* @__PURE__ */ new Map(), rr = e), Oi();
  }
  const Gr = () => {
    var t;
    return ((t = ce().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, js = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => vt(t.entity_id).localeCompare(vt(e.entity_id))).map((t) => ["camera:" + t.entity_id, vt(t.entity_id)])];
  function Oi() {
    if (!Te || Tn) return;
    const t = new Set(ce().hidden);
    jr.forEach(([e, a]) => {
      Te.has(e) || t.has(e) && !(ae != null && ae.fromTray && ae.key === e) || Te.set(e, du(ro[e], { getHass: i, entityId: rr, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => jd("weather") : void 0, radarSource: Gr }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, vt = (t) => Ut(t).friendly_name || t, be = (t, e) => ao(t) || (Number(Ut(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), Ga = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Dn = (t) => Ut(t).supported_color_modes || [], zs = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), $r = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ii = (t) => 0.2126 * $r(t[0]) + 0.7152 * $r(t[1]) + 0.0722 * $r(t[2]), Gs = (t, e) => {
    const a = Ii(t), r = Ii(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, $s = 0.55, Ao = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fi = (t) => {
    const e = Ut(t), a = Ao.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? zs(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Lo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function To(t) {
    var r;
    const e = t.split(".")[0], a = (r = k[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Fi(t) : null : e === "climate" ? Lo[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function ir(t, e, a = !1) {
    const [r, s, p] = t.map((G) => G / 255), d = Math.max(r, s, p), u = Math.min(r, s, p), h = d - u, y = h ? (d === r ? (s - p) / h + (s < p ? 6 : 0) : d === s ? (p - r) / h + 2 : (r - s) / h + 4) * 60 : 0, A = (d + u) / 2, M = h ? h / (1 - Math.abs(2 * A - 1)) : 0, R = h < 0.1 ? Math.min(M, 0.25) : 1, B = (G) => {
      const E = (T) => (T + y / 30) % 12, F = R * Math.min(G, 1 - G);
      return [0, 8, 4].map((T) => Math.round(255 * (G - F * Math.max(-1, Math.min(E(T) - 3, 9 - E(T), 1)))));
    };
    for (let G = 0.5; a ? G < 0.96 : G > 0.04; G += a ? 0.01 : -0.01) {
      const E = B(G);
      if (Gs(E, e) >= 3) return "rgb(" + E.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const $a = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + ir(e, [58, 58, 58], !0) + ";--sum-l:" + ir(e, [230, 230, 230]);
  }, sr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, qi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + sr.d[t] + ";--g" + t + "-l:" + sr.l[t]).join(";"), Us = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", io = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * $s));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + ir(t, e);
  }, lr = (t) => io(Fi(t)), Do = (t) => {
    const e = To(t);
    return e ? ' data-light style="' + io(e) + '"' : "";
  }, Eo = (t) => {
    const e = Dn(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, ln = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], so = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
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
    return Ut(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, En = (t) => {
    var e;
    return m("pos", t, ((e = ge.get(t)) == null ? void 0 : e.pos) ?? Ua(t));
  }, Ur = (t) => {
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
      const u = a.color_temp_kelvin;
      return (Eo(t) ? Ga(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Ao.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const u = Ua(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : zt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (r === "vacuum") return zt(e.state) + (e.state === "cleaning" && ((d = a.rooms) != null && d.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : zt(e.state);
    if (r === "alarm_control_panel") return Vu[e.state] || zt(e.state);
    if (r === "lock" || r === "valve") return zt(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : zt(a.problem);
    if (r === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ts.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + so(a.rang);
    const s = i();
    if (s != null && s.formatEntityState && !ao(t))
      try {
        return s.formatEntityState(e);
      } catch {
      }
    const p = Number(e.state);
    if (e.state !== "" && Number.isFinite(p)) {
      const u = Math.abs(p) >= 100 ? 0 : Math.abs(p) >= 10 ? 1 : 2, h = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return p.toLocaleString(void 0, { maximumFractionDigits: u }) + h + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return zt(e.state);
  }
  const Bo = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Yr = Object.fromEntries(Ym.map((t) => [t.id, t])), cr = {
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
    var a, r, s, p;
    return e ? cr[e] || null : !t || (a = t.attributes) != null && a.icon || (p = (s = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : s[t.entity_id]) != null && p.icon ? null : Zs(t);
  };
  let Kr = 0;
  function lo(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var h;
      const p = k[s.dataset.iconFor], d = s.dataset.iconName || "", u = Zr(p, d);
      if (u) {
        (s.dataset.hc !== u || !s.querySelector(":scope>svg.hcGlyph")) && (s.innerHTML = Km(Yr[u], 24, "hcg" + ++Kr).replace("<svg ", '<svg class="hcGlyph" '), s.dataset.hc = u);
        return;
      }
      if (s.dataset.hc && (delete s.dataset.hc, s.textContent = ""), customElements.get("ha-state-icon") && p && !d) {
        let y = s.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (s.textContent = "", y = document.createElement("ha-state-icon"), s.appendChild(y)), y.hass = e, y.stateObj = p;
      } else if (customElements.get("ha-icon")) {
        let y = s.firstElementChild;
        (!y || y.localName !== "ha-icon") && (s.textContent = "", y = document.createElement("ha-icon"), s.appendChild(y)), y.icon = d || ((h = p == null ? void 0 : p.attributes) == null ? void 0 : h.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || vt(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Xr), (r = t.classList) != null && r.contains("tfIcon") && Xr(t), pr();
  }
  const dr = /* @__PURE__ */ new Map();
  function Xr(t) {
    var p, d, u;
    const e = (((p = t.closest("[data-k]")) == null ? void 0 : p.dataset.k) || "") + "|" + (t.dataset.iconFor || ((d = t.querySelector("[data-icon-for]")) == null ? void 0 : d.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), r = { backgroundColor: a.backgroundColor, color: a.color }, s = dr.get(e);
    dr.set(e, r), !(!s || s.backgroundColor === r.backgroundColor && s.color === r.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([s, r], { duration: Pe.warp.cdur, delay: Pe.warp.cdelay, easing: Re[Pe.warp.ease], fill: "backwards" });
  }
  const cn = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", Wi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Vi(t) {
    var B, G, E, F, T, X, C;
    const e = t.localName === "svg" ? t : Wi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((V) => !V.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (B = t.closest(".tfIcon")) == null ? void 0 : B.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const s = r + "|" + a.map((V) => V.getAttribute("d") || V.localName).join("|");
    if (t.dataset.fitted === s) return !0;
    let p = 1 / 0, d = 1 / 0, u = -1 / 0, h = -1 / 0;
    for (const V of a) {
      const yt = V.getBBox(), Tt = getComputedStyle(V), Nt = Tt.stroke !== "none" ? (parseFloat(Tt.strokeWidth) || 0) / 2 : 0;
      if (!yt.width && !yt.height) continue;
      const At = (T = (F = (E = (G = V.transform) == null ? void 0 : G.baseVal) == null ? void 0 : E.consolidate) == null ? void 0 : F.call(E)) == null ? void 0 : T.matrix, ft = At ? (() => {
        const Lt = [[yt.x, yt.y], [yt.x + yt.width, yt.y], [yt.x, yt.y + yt.height], [yt.x + yt.width, yt.y + yt.height]].map(([fe, ye]) => [At.a * fe + At.c * ye + At.e, At.b * fe + At.d * ye + At.f]), Qt = Lt.map((fe) => fe[0]), me = Lt.map((fe) => fe[1]);
        return { x: Math.min(...Qt), y: Math.min(...me), width: Math.max(...Qt) - Math.min(...Qt), height: Math.max(...me) - Math.min(...me) };
      })() : yt;
      p = Math.min(p, ft.x - Nt), d = Math.min(d, ft.y - Nt), u = Math.max(u, ft.x + ft.width + Nt), h = Math.max(h, ft.y + ft.height + Nt);
    }
    if (!(u > p)) return !1;
    const y = (C = (X = e.viewBox) == null ? void 0 : X.baseVal) != null && C.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, A = r > 40 ? r * (26 / 40) : r - 14, M = A * y.width / Math.max(u - p, h - d), R = M / y.width;
    return t.localName === "svg" ? (t.style.width = M + "px", t.style.height = M + "px") : t.style.setProperty("--mdc-icon-size", M + "px"), e.style.translate = ((y.x + y.width / 2 - (p + u) / 2) * R).toFixed(2) + "px " + ((y.y + y.height / 2 - (d + h) / 2) * R).toFixed(2) + "px", t.dataset.fitted = s, !0;
  }
  let Po = 0;
  function Ro(t = 0) {
    clearTimeout(Po), [...o.querySelectorAll(cn)].filter((a) => !Vi(a)).length && t < 5 && (Po = setTimeout(() => Ro(t + 1), 300));
  }
  function pr() {
    clearTimeout(Po), Po = setTimeout(() => Ro(), 60);
  }
  const Ho = (t) => {
    var e, a, r;
    return t.startsWith("light.") && k[t] && !Ut(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, we = (t, e, a) => (e = e || Ho(t), ' data-icon-for="' + j(t) + '"' + (e ? ' data-icon-name="' + j(e) + '"' : "") + (a ? ' data-letter="' + j(a) + '"' : "")), Ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Ht = (t, e, a, r) => j([t, e, a, r ? JSON.stringify(r) : ""].join("|")), ur = (t) => j(JSON.stringify(t));
  function qe(t) {
    const e = j(vt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + j(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + we(t, Ea(t)) + '></div><div><div class="activityRowName">' + j(vt(t)) + '</div><div class="activityRowMeta">' + j(Oe(t)) + "</div></div></div>";
  }
  const dn = (t, e, a) => '<div class="activityRow" aria-label="' + j(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + we("", a, t) + '></div><div><div class="activityRowName">' + j(t) + '</div><div class="activityRowMeta">' + j(e) + "</div></div></div>";
  function pn(t, e, a, r, s = "", p = null, d = "") {
    return '<section class="card tfCard' + (d ? " " + d : "") + '" data-tf data-k="' + j(t) + '" style="order:' + e + '" aria-label="' + j(a) + '"><div class="activityHeader">' + (p ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + j(p) + '" aria-label="' + j(a + (k[p] ? ", " + Oe(p) : "") + ". More info") + '">' + j(a) + "</button>" : '<div class="activityTitle">' + j(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + s + "</section>";
  }
  function Jr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((s) => qe(s));
    return t.power != null && r.push(dn("Power now", Bo(t.power), "mdi:flash")), pn(a, e, "Readings", r);
  }
  function Bn(t, e) {
    var u;
    const a = "energy:" + t.id, [r, s] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], p = [r, s].filter(Boolean).map((h) => qe(h)), d = Number(((u = k[r]) == null ? void 0 : u.state) || 0) * 1e3;
    return jt.grid && (p.push(qe(jt.grid)), p.push(dn("House use", Bo(d + Number(k[jt.grid].state)), "mdi:home-lightning-bolt"))), pn(a, e, "Energy", p, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ji = (t, e) => pn("plant:" + t.id, e, vt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function fr(t, e, a, r, s, p, d = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), h = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + j(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (s ? ' aria-valuetext="' + j(s) + '"' : "") + ' data-drag="' + j(t + "|" + e) + '">' + (d != null ? '<span class="was" aria-hidden="true" style="left:' + d + '%"></span>' : "") + (p ? u == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Pn = "homecore-house-last-bright", co = (() => {
    try {
      return JSON.parse(We.get(Pn)) || {};
    } catch {
      return {};
    }
  })();
  let hr = 0;
  const Rn = (t, e) => {
    !e || co[t] === e || (co[t] = e, clearTimeout(hr), hr = setTimeout(() => We.set(Pn, JSON.stringify(co)), 500));
  }, ha = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + j(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + j(t.toLowerCase()) + '">' + _u.down + "</button><output>" + j(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + j(t.toLowerCase()) + '">' + _u.up + "</button></div>", Ge = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + j(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + j(r.aria) + '"' : "") + ">" + (r.html || j(r.label)) + "</button>").join("") + "</div>", Qr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ti = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ei = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + j(vt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + j(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Qr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ti(e) + '">' + Math.round(e) + "%</output></div>";
  function mr(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, s) => {
      r.firstElementChild.setAttribute("style", Qr(e, s)), r.lastElementChild.classList.toggle("lit", e >= (s + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ti(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const zi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + j(vt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + j(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ks = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + j(vt(t)) + '">' + [
    be(t, Du) && ["open", "Open", "open_cover", e >= 100 && !a],
    be(t, Bu) && ["stop", "Stop", "stop_cover", !1],
    be(t, Eu) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, s, p, d]) => '<button type="button" data-act="' + Ht("cover", p, t) + '" aria-label="' + s + '"' + (d ? " disabled" : "") + ">" + Cg[r] + "</button>").join("") + "</div>", ka = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + j(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + j(e.art) + '&quot;)"' : we(t, e.icon)) + "></button>", Ya = (t) => '<button class="tfName" type="button" data-more="' + j(t) + '" aria-label="' + j(vt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + j(vt(t)) + '</span><span class="activityRowMeta">' + j(Oe(t)) + "</span></button>";
  function un(t, e = !1, a = null) {
    const r = w(t), s = t.startsWith("light.") && gr(t) && !(a && On(t) < 3), p = a || (e && t.startsWith("light.") ? ["bright"] : null), d = s ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + j(t) + '"></div>'] : r.sections.map((u, h) => u && (!p || p.includes((r.parts || [])[h])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (s ? " tfDac" : "") + (r.on ? " on" : "") + (!s && !d.length ? " tfHeadOnly" : "") + '" data-k="' + j(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Do(t) + '><div class="tfActionHead">' + ka(t, r) + Ya(t) + "</div>" + d.join("") + "</div>";
  }
  const Za = "dual-controller-v3", Gi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ka = null;
  async function fn() {
    if (Ka || customElements.get(Za)) return;
    Ka = "loading";
    const t = await Promise.resolve().then(() => K({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Za), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Za)) return;
    const a = Object.assign(document.createElement("script"), { src: Gi });
    a.onerror = () => {
      Ka = "failed", Q();
    }, document.head.appendChild(a);
  }
  const ta = /* @__PURE__ */ new Map(), Hn = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", ai = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function gr(t) {
    return Hn(t) && !!customElements.get(Za);
  }
  const hn = (t) => Xt.lightPads[t] || Xt.dacPad, oi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (e, a, r, ...s) => t.callService(e, ...gp(e, a, r), ...s)
    };
  }, $e = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", $i = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: $e })).dataset.tf = "");
  }, ni = /* @__PURE__ */ new Map(), Ui = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ni.set(a.dataset.dac, a.offsetHeight));
  }));
  function Nn(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = ta.get(a);
      if (!r) {
        const s = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Za), r.setConfig({ type: "custom:" + Za, entity: s, pad: hn(s), tap_action: { action: "none" } }), ta.set(a, r);
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
    g && (S != null && S.querySelector("[data-tf]")) && Gd(Na);
  });
  const m = (t, e, a) => Vt.has(t + "|" + e) ? Vt.get(t + "|" + e) : a;
  function w(t) {
    var p, d;
    const e = k[t], a = e.attributes, r = t.split(".")[0], s = (u, h) => ({ act: Ht(u, "toggle", t), label: h });
    if (r === "light") {
      const u = e.state === "on", h = Dn(t), [y, A] = ln(t), M = m("bright", t, Ga(e));
      u && Rn(t, Ga(e));
      const R = m("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), B = m("hue", t, u && Ao.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: s("light", "Turn " + vt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Eo(t) && fr("bright", t, M / 100, vt(t) + " brightness", M + "%", !1, u ? null : co[t] ?? null),
        h.includes("color_temp") && fr("ct", t, R == null ? null : (R - y) / (A - y), vt(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        h.some((G) => Ao.includes(G)) && fr("hue", t, B == null ? null : B / 360, vt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const u = a.target_temp_step || 0.5, h = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: s("climate", "Turn " + vt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ha("Target temperature", Fe(h) + " °C", Ht("climate", "set_temperature", t, { temperature: h - u }), Ht("climate", "set_temperature", t, { temperature: h + u })),
        Ge("tfSeg", "Mode", (a.hvac_modes || []).map((y) => ({ label: zt(y), act: Ht("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: e.state === y })))
      ] };
    }
    if (r === "cover") {
      const u = e.state === "opening" || e.state === "closing", h = e.state === "closed", y = En(t), A = Ur(t);
      return { on: !h, tone: "blue", icon: Pu[kc(e)][h ? 1 : 0], button: s("cover", (h ? "Open " : "Close ") + vt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        be(t, Lc) && ei(t, y),
        A != null && zi(t, A),
        Ks(t, y, u)
      ] };
    }
    if (r === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: s("humidifier", "Turn " + vt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target humidity", u + "%", Ht("humidifier", "set_humidity", t, { humidity: u - 1 }), Ht("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((p = a.available_modes) == null ? void 0 : p.length) && Ge("tfSeg", "Mode", a.available_modes.map((h) => ({ label: zt(h), act: Ht("humidifier", "set_mode", t, { mode: h }), pressed: a.mode === h })))
      ] };
    }
    if (r === "media_player") {
      const u = e.state === "playing", h = e.state === "off" || e.state === "standby", y = m("vol", t, a.volume_level), A = h ? { act: Ht("media_player", be(t, Sg) ? "turn_on" : "toggle", t), label: "Turn " + vt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Ht("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + vt(t) } : { act: Ht("media_player", be(t, _g) ? "turn_off" : "toggle", t), label: "Turn " + vt(t) + " off" };
      return { on: !h, tone: "blue", art: !h && a.entity_picture ? a.entity_picture : null, button: A, parts: ["playback", "volume"], sections: h ? [] : [
        (be(t, Au) || be(t, Lu) || be(t, Cu) || be(t, Tu)) && Ge("tfSeg", "Playback", [
          { html: Cs.prev, aria: "Previous", act: Ht("media_player", "media_previous_track", t), disabled: !be(t, Au) },
          { html: u ? Cs.pause : Cs.play, aria: u ? "Pause" : "Play", act: Ht("media_player", "media_play_pause", t), disabled: !(be(t, Cu) || be(t, Tu)) },
          { html: Cs.next, aria: "Next", act: Ht("media_player", "media_next_track", t), disabled: !be(t, Lu) }
        ]),
        be(t, Mg) && y != null && fr("vol", t, y, vt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const u = e.state === "cleaning", h = a.rooms || [], y = (M) => h.includes(M) ? h.filter((R) => R !== M) : h.concat(M), A = Ht("vacuum", u ? "pause" : "start", t, ao(t) ? { rooms: h } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: A, label: (u ? "Pause " : "Start ") + vt(t) }, parts: ["controls", "rooms"], sections: [
        Ge("tfSeg", vt(t), [
          { label: u ? "Pause" : "Start", act: A },
          { label: "Dock", act: Ht("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Ht("vacuum", "locate", t) }
        ]),
        ao(t) && Ge("tfChips", "Rooms to clean", jt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Ht("vacuum", "set_rooms", t, { rooms: y(M.name) }), pressed: h.includes(M.name) })))
      ] };
    }
    if (r === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Ht("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + vt(t) }, parts: ["controls"], sections: [
        Ge("tfSeg", vt(t), [
          { label: "Lock", act: Ht("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Ht("lock", "unlock", t), pressed: e.state === "unlocked" },
          be(t, qu) && { label: "Open", act: Ht("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Ht("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + vt(t) + ", away" : "Disarm " + vt(t) }, parts: ["controls"], sections: [
        Ge("tfSeg", vt(t), Wu.filter(([, , , h]) => !h || be(t, h)).map(([h, y, A]) => ({ label: y, act: Ht("alarm_control_panel", A, t), pressed: e.state === h })))
      ] };
    }
    if (r === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: s("valve", (u ? "Close " : "Open ") + vt(t)), parts: ["controls"], sections: [
        Ge("tfSeg", vt(t), [
          { label: "Open", act: Ht("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Ht("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (r === "water_heater") {
      const u = Number(a.temperature), h = a.target_temp_step || 1, y = e.state !== "off";
      return { on: y, tone: "heat", icon: "mdi:water-boiler", button: { act: Ht("water_heater", y ? "turn_off" : "turn_on", t), label: "Turn " + vt(t) + (y ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target temperature", u + " °C", Ht("water_heater", "set_temperature", t, { temperature: u - h }), Ht("water_heater", "set_temperature", t, { temperature: u + h })),
        ((d = a.operation_list) == null ? void 0 : d.length) && Ge("tfSeg", "Mode", a.operation_list.map((A) => ({ label: zt(A), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: A }), pressed: (a.operation_mode || e.state) === A })))
      ] };
    }
    if (Ci.includes(r)) {
      const u = e.state === "on";
      return { on: u, button: s(r, "Turn " + vt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: vt(t) }, sections: [] };
  }
  const x = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function H(t) {
    var F;
    const e = (T) => t.readings.find((X) => Ut(X).device_class === T), a = e("temperature"), r = e("humidity"), s = (T) => {
      var X;
      return Number((X = k[T]) == null ? void 0 : X.state);
    }, p = (T) => t.actions.filter((X) => T.test(X)), d = t.lights.filter((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) === "on";
    }), u = p(/^cover\./), h = u.filter((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) !== "closed";
    }), y = [...new Set(u.map((T) => kc(k[T])))], A = p(/^climate\./)[0], M = p(/^humidifier\./)[0], R = p(/^media_player\./), B = R.find((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) === "playing";
    }) || R.find((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) === "paused";
    }), G = t.plugs.filter((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) === "on";
    }), E = [];
    if (a && Number.isFinite(s(a)) && E.push({ key: "temp", id: a, kind: "reading", icon: wo(a), label: "Temperature", value: Fe(s(a)) + "°" }), r && Number.isFinite(s(r)) && E.push({ key: "hum", id: r, kind: "reading", icon: wo(r), label: "Humidity", value: Math.round(s(r)) + "%" }), t.lights.length && E.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: wo("", "mdi:lightbulb"),
      label: "Lights",
      value: d.length ? d.length + " of " + t.lights.length + " on" : "All off",
      short: d.length ? d.length + " on" : "Off",
      on: d.length > 0,
      light: d.length ? lr(d[0]) : "",
      acts: t.lights.map((T) => ["light", d.length ? "turn_off" : "turn_on", T]),
      aria: (d.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const T = y.length === 1 ? Ag[y[0]] : "covers", X = Math.round(u.reduce((C, V) => C + Ua(V), 0) / u.length);
      E.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? io([146, 107, 199]) : "",
        icon: wo("", ((F = Pu[y[0]]) == null ? void 0 : F[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(T),
        value: X <= 0 ? "Closed" : X >= 100 ? "Open" : X + "% open",
        short: X <= 0 ? "Closed" : X + "%",
        on: h.length > 0,
        acts: u.map((C) => ["cover", h.length ? "close_cover" : "open_cover", C]),
        aria: (h.length ? "Close the " : "Open the ") + T + " in " + t.name
      });
    }
    if (A) {
      const T = Ut(A), X = k[A].state === "off";
      E.push({
        key: "climate",
        kind: "control",
        tone: T.hvac_action === "cooling" ? "cool" : "heat",
        light: To(A) ? io(To(A)) : "",
        icon: wo(A),
        label: vt(A),
        value: X ? "Off" : zt(T.hvac_action || k[A].state) + " · " + x(T.temperature),
        short: X ? "Off" : x(T.temperature),
        on: !X,
        acts: [["climate", "toggle", A]],
        aria: "Turn " + vt(A) + (X ? " on" : " off")
      });
    }
    if (M) {
      const T = k[M].state === "on";
      E.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: T ? io([33, 150, 243]) : "",
        icon: wo("", "mdi:air-humidifier"),
        label: vt(M),
        value: T ? "On · " + Ut(M).humidity + "%" : "Off",
        short: T ? Ut(M).humidity + "%" : "Off",
        on: T,
        acts: [["humidifier", "toggle", M]],
        aria: "Turn " + vt(M) + (T ? " off" : " on")
      });
    }
    if (R.length) {
      const T = B || R[0], X = k[T], C = X.state === "playing";
      E.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: To(T) ? io(To(T)) : "",
        icon: wo(T),
        label: vt(T),
        value: Oe(T),
        short: C ? "Playing" : X.state === "paused" ? "Paused" : zt(X.state),
        on: C,
        acts: [["media_player", X.state === "playing" || X.state === "paused" ? "media_play_pause" : "toggle", T]],
        aria: (C ? "Pause " : "Play ") + vt(T)
      });
    }
    return t.plugs.length && E.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: G.length ? io([255, 193, 7]) : "",
      icon: wo("", "mdi:power-plug"),
      label: "Plugs",
      value: G.length ? G.length + " of " + t.plugs.length + " on" : "All off",
      short: G.length ? G.length + " on" : "Off",
      on: G.length > 0,
      acts: t.plugs.map((T) => ["switch", G.length ? "turn_off" : "turn_on", T]),
      aria: (G.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((T) => E.push(Ut(T).device_class === "moisture" ? { key: "alert:" + T, kind: "alert", icon: wo(T), label: "Water leak" } : { key: "note:" + T, kind: "note", icon: wo(T), label: vt(T) + " " + Oe(T).toLowerCase() })), E;
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
          var p;
          return ((p = k[s]) == null ? void 0 : p.state) === "playing";
        }) || r.find((s) => {
          var p;
          return ((p = k[s]) == null ? void 0 : p.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function Z(t, e, a = !1) {
    const r = e.find((u) => u.key === "lights"), s = !!(r != null && r.on), p = "", d = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (s ? " on" : "") + '"' + p + ' aria-hidden="true">' + d + "</span>" : '<button class="tfIcon tfAreaIcon' + (s ? " on" : "") + '" type="button"' + p + ' data-acts="' + ur(r.acts) + '" aria-label="' + j(r.aria) + '" aria-pressed="' + s + '">' + d + "</button>";
  }
  const J = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, U = (t, e) => {
    const a = vt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function at(t) {
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(s)) {
      if (a.device_class === "temperature") return { text: x(s) };
      const p = a.unit_of_measurement || "";
      return p === "%" ? { text: Math.round(s) + "%" } : { text: Fe(s, Number.isInteger(s) ? 0 : 1), unit: p };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: x(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Eo(t) ? Ga(e) + "%" : "On" };
    if (r === "cover") {
      const p = Ua(t);
      return { text: p <= 0 ? "Closed" : p >= 100 ? "Open" : p + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Oe(t) };
  }
  const rt = (t, e, a) => {
    const r = a.find((u) => u.key === "temp"), s = a.find((u) => u.key === "hum"), p = Ut(e), d = k[e].state === "off";
    return e.startsWith("climate.") ? [U(t, e), d ? "Off" : zt(p.hvac_action || k[e].state) + (p.temperature != null ? " · " + x(p.temperature) : ""), s && s.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && U(t, e), r && r.id !== e && r.value, s && s.id !== e && s.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function bt(t) {
    const e = t.id === ot, a = H(t), r = J(t), s = r && at(r), p = [...a.filter((d) => d.kind === "control"), ...a.filter((d) => d.kind !== "control" && d.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + j(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + j(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ve(t, null, ' data-cols="2" data-rows="' + On("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Z(t, a, !0) + '<span class="tfACName">' + j(t.name) + '</span></div><span class="tfACMain">' + (s ? j(s.text + (s.unit ? " " + s.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + p.map((d) => '<span class="tfACTile"><span class="tfIcon' + (d.kind === "alert" ? " alert" : "") + '"' + (d.on && d.light ? ' data-light style="' + d.light + '"' : "") + ">" + d.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Bt = [];
  const Et = (t) => {
    const e = kt.areaOrder || [], a = (r) => {
      const s = e.indexOf(r.id);
      return s < 0 ? e.length + t.indexOf(r) : s;
    };
    return [...t].sort((r, s) => a(r) - a(s));
  }, _t = () => {
    var e;
    const t = new Set(((e = kt.dash) == null ? void 0 : e.areasOff) || []);
    return Et(Bt).filter((a) => !t.has(a.id));
  }, Gt = io([255, 162, 75]), Pt = (t) => {
    const e = t.id === ot;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + j(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + j(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, dt = (t) => {
    var r;
    const e = _t();
    e.some((s) => s.id === ot) || (ot = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((s) => s.id === ot);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(bt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? ve(a, null, ' data-cols="2" data-rows="' + On("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Pt).join("") + "</div></div></div>";
  }, Ot = (t) => t.startsWith("room:"), qt = (t) => Bt.find((e) => "room:" + e.id === t);
  function ve(t, e, a = "") {
    const r = H(t), s = J(t), p = s && at(s), d = s ? rt(t, s, r) : "", u = p ? p.text + (p.unit ? " " + p.unit : "") : "", h = (T) => {
      const X = W(t, T.key);
      return X.length === 1 ? X[0] : "group:" + t.id + ":" + T.key;
    }, y = r.filter((T) => T.kind === "control").slice(0, 4), A = (T) => T.on && T.light ? ' data-light style="' + T.light + '"' : "", M = (T) => '<button class="tfIcon' + (T.on ? " on" : "") + '" type="button" data-tone="' + T.tone + '"' + A(T) + ' data-acts="' + ur(T.acts) + '" aria-label="' + j(T.aria) + '" aria-pressed="' + T.on + '">' + T.icon + "</button>", R = (T) => '<button class="tfIcon' + (T.on ? " on" : "") + '" type="button" data-tone="' + T.tone + '"' + A(T) + ' data-more="' + j(h(T)) + '" aria-label="' + j(t.name + " " + T.label.toLowerCase() + ", " + T.value + ". Open") + '">' + T.icon + "</button>", B = y.map(R), G = y.map((T) => '<div class="tfRoomDev' + (T.on ? " on" : "") + '" data-more="' + j(h(T)) + '">' + (T.acts ? M(T) : R(T)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + j(h(T)) + '" aria-label="' + j(t.name + " " + T.label.toLowerCase() + ", " + T.value + ". Open") + '"><span class="activityRowName">' + j(T.label) + '</span><span class="activityRowMeta">' + j(T.value) + "</span></button></div>"), E = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", F = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + j(t.id) + '" aria-label="Open ' + j(t.name) + '">' + E + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + j(e) + '"' : "") + a + ' data-go="' + j(t.id) + '"><div class="tfActionHead">' + F + '<button class="tfName" type="button" data-go="' + j(t.id) + '" aria-label="Open ' + j(t.name) + '"><span class="activityRowName">' + j(t.name) + "</span>" + (u || d ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + j(u) + (d ? " · " : "") + "</span>" : "") + j(d) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + j(s) + '" aria-label="' + j(vt(s) + ", " + Oe(s) + ". More info") + '"><span class="tfRoomBig">' + j(u) + "</span>" + (d ? '<span class="tfRoomSub">' + j(d) + "</span>" : "") + "</button>" : "") + (B.length ? '<div class="tfRoomDevices">' + B.join("") + '</div><div class="tfRoomHeads">' + G.join("") + "</div>" : "") + "</div>";
  }
  const Dt = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], re = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (kt.favourites ?? An.favorite_entities ?? []).filter((t) => k[t]);
  function Ma() {
    if (!nr) {
      const e = Object.entries(Ln).sort((r, s) => s[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      nr = [.../* @__PURE__ */ new Set([...Bi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = $t();
    return nr.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let po = !1;
  const ri = 6;
  function br() {
    if (!po || kt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(k).find((r) => ao(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    kt = { ...kt, favourites: [.../* @__PURE__ */ new Set([...kt.favourites ?? An.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ri), favSeeded: !0 }, Ta();
  }
  const No = () => kt.suggest ?? !An.hide_suggested_entities;
  function ee() {
    const t = new Set(v ? [] : kt.favHidden || []), e = $t().filter((s) => !t.has(s)), a = No() ? Ma().filter((s) => !t.has(s) && ol(s)) : [], r = Math.max(ri, e.length);
    return [...e, ...a].slice(0, v && !is() ? r : Math.min(Og, r));
  }
  const Oo = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + j(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + j(vt(t)) + '">' + Hg(e) + "</button>";
  };
  function uo(t, { area: e = !1, star: a = !1, plain: r = !1, say: s = null, alert: p = !1 } = {}) {
    var G, E, F, T, X, C;
    const d = r && ((X = (G = i()) == null ? void 0 : G.devices) == null ? void 0 : X[(T = (F = (E = i()) == null ? void 0 : E.entities) == null ? void 0 : F[t]) == null ? void 0 : T.device_id]), u = d && (d.name_by_user || d.name) || vt(t), h = t.split(".")[0], y = !r && Rr.includes(h) ? w(t) : null, A = y ? y.on : ["on", "open", "playing"].includes((C = k[t]) == null ? void 0 : C.state), M = r ? null : y ? y.button : Ci.includes(h) ? { act: Ht(h, "toggle", t), label: "Turn " + vt(t) + (A ? " off" : " on") } : h === "scene" || h === "script" ? { act: Ht(h, "turn_on", t), label: "Run " + vt(t) } : null, R = (s ?? Oe(t)) + (e && Se.get(t) ? " · " + Se.get(t) : ""), B = (y == null ? void 0 : y.icon) || Ea(t);
    return '<div class="activityRow' + (M ? " tfPlug" : "") + (A ? " on" : "") + (a ? " tfPick" : "") + (p ? " alert" : "") + '" data-k="' + j((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (y == null ? void 0 : y.tone) || "blue") + '"' + Do(t) + ">" + (M && !a ? '<button class="tfIcon" type="button" data-act="' + M.act + '" aria-label="' + j(M.label) + '"' + we(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + we(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + j(t) + '" aria-label="' + j(u + ", " + R + ". More info") + '"><span class="activityRowName">' + j(u) + '</span><span class="activityRowMeta">' + j(R) + "</span></button>" + (a ? Oo(t) : "") + "</div>";
  }
  const Io = () => {
    var t;
    return k[(t = kt.sources) == null ? void 0 : t.weather] ? kt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function ii() {
    var a;
    const t = (r) => Object.keys(k).filter((s) => s.startsWith("binary_sensor.") && r.includes(Ut(s).device_class));
    return ((a = qr.alert_entities) != null && a.length ? qr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ts).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => k[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[r.entity].state) }));
  }
  function Yi() {
    const t = Object.keys(_i), e = /* @__PURE__ */ new Set(), a = [];
    (An.shortcuts || []).forEach((p) => {
      if (p.type === "summary") {
        if (!t.includes(p.key) || e.has(p.key)) return;
        e.add(p.key);
      }
      a.push(p);
    }), t.forEach((p) => {
      e.has(p) || a.push({ type: "summary", key: p });
    });
    const r = ea().sumOrder || [], s = (p) => p.type === "summary" && r.includes(p.key) ? r.indexOf(p.key) : r.length;
    return r.length ? a.map((p, d) => [p, d]).sort((p, d) => s(p[0]) - s(d[0]) || p[1] - d[1]).map(([p]) => p) : a;
  }
  function wr() {
    var F;
    const t = ((F = i()) == null ? void 0 : F.entities) || {}, e = (T) => Ut(T).device_class, a = Object.keys(k).filter((T) => T.startsWith("sensor.") && e(T) === "battery" || T.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(T))), r = jt.rooms.flatMap((T) => T.plants.map((X) => X.id));
    if (!a.length && !r.length) return null;
    const s = (T) => {
      var C;
      const X = (C = t[T]) == null ? void 0 : C.device_id;
      return !!X && Object.keys(k).some((V) => {
        var yt;
        return V.startsWith("binary_sensor.") && ((yt = t[V]) == null ? void 0 : yt.device_id) === X && e(V) === "battery_charging" && k[V].state === "on";
      });
    }, p = (T) => T.startsWith("vacuum.") ? Ut(T).battery_level <= 20 && k[T].state !== "docked" : T.startsWith("binary_sensor.") ? e(T) === "battery" && k[T].state === "on" : parseFloat(k[T].state) <= 20 && !s(T), d = [...a, ...jt.vacuums].filter((T) => k[T] && p(T)), u = [...a.filter((T) => e(T) === "problem" && k[T].state === "on"), ...r.filter((T) => {
      var X;
      return ((X = k[T]) == null ? void 0 : X.state) === "problem";
    })], h = a.filter((T) => k[T].state === "unavailable"), y = [.../* @__PURE__ */ new Set([...d, ...u, ...h])], A = (T) => {
      const X = parseFloat(k[T].state);
      return e(T) === "battery" && Number.isFinite(X) ? X : 101;
    }, M = [...r, ...jt.vacuums, ...[...a].sort((T, X) => A(T) - A(X))].filter((T) => k[T] && !y.includes(T)), R = /* @__PURE__ */ new Map();
    M.forEach((T) => {
      var C;
      const X = ((C = jt.areaOf) == null ? void 0 : C.call(jt, T)) || "";
      R.set(X, [...R.get(X) || [], T]);
    });
    const B = (T) => {
      const X = jt.rooms.findIndex((C) => C.id === T);
      return T === "" ? 1 / 0 : X < 0 ? jt.rooms.length : X;
    }, G = [...R.keys()].sort((T, X) => B(T) - B(X)), E = (T) => {
      var X, C, V, yt;
      return ((X = jt.rooms.find((Tt) => Tt.id === T)) == null ? void 0 : X.name) || ((yt = (V = (C = i()) == null ? void 0 : C.areas) == null ? void 0 : V[T]) == null ? void 0 : yt.name) || T;
    };
    return {
      value: [d.length && re(d.length, "low battery", "low batteries"), u.length && re(u.length, "problem", "problems"), h.length && re(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: y, alert: !0 }, ...G.map((T) => ({ name: T ? E(T) : G.length > 1 ? "Other devices" : "Devices", ids: R.get(T) }))].filter((T) => T.ids.length)
    };
  }
  const ea = () => v ? kt.home || {} : kt, Xs = (t) => Ru.includes(t) ? (ea().shownSums || []).includes(t) : !(ea().hiddenSums || []).includes(t);
  function Bf(t, e, a) {
    const r = t.flatMap((R) => a(R, /^cover\./)), s = r.filter((R) => {
      var B;
      return ["open", "opening"].includes((B = k[R]) == null ? void 0 : B.state);
    }).length, p = Object.keys(k).filter((R) => R.startsWith("person.")), d = p.filter((R) => {
      var B;
      return ((B = k[R]) == null ? void 0 : B.state) === "home";
    }).length, u = jt.security.openings.filter((R) => k[R]), h = u.filter((R) => k[R].state === "on").length, y = Object.keys(k).filter((R) => R.startsWith("binary_sensor.") && Ut(R).device_class === "moisture"), A = y.filter((R) => k[R].state === "on").length, M = jt.vacuums.filter((R) => k[R]);
    return {
      covers: r.length && { value: s ? s + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: p.length && { value: d ? d + " home" : "Nobody home", groups: [{ name: "People", ids: p }] },
      openings: u.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: y.length && { value: A ? re(A, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: y }] },
      vacuum: M.length && { value: zt(k[M[0]].state), groups: [{ name: "Vacuum", ids: M }] }
    };
  }
  function Zi(t = !1) {
    var At;
    const e = jt.rooms, a = jt.security, r = (ft, Lt) => ft.actions.filter((Qt) => Lt.test(Qt)), s = (ft) => e.map((Lt) => ({ name: Lt.name, ids: ft(Lt) })).filter((Lt) => Lt.ids.length), p = e.flatMap((ft) => ft.lights), d = p.filter((ft) => {
      var Lt;
      return ((Lt = k[ft]) == null ? void 0 : Lt.state) === "on";
    }).length, u = e.map((ft) => ft.readings.find((Lt) => Ut(Lt).device_class === "temperature")).filter(Boolean).map((ft) => Number(k[ft].state)).filter(Number.isFinite), [h, y] = [Fe(Math.min(...u)), Fe(Math.max(...u))], A = e.flatMap((ft) => r(ft, /^media_player\./)), M = A.filter((ft) => {
      var Lt;
      return ((Lt = k[ft]) == null ? void 0 : Lt.state) === "playing";
    }).length, R = ii(), B = R.filter((ft) => ft.severity === "warning" && ft.on).length, G = a.locks.filter((ft) => {
      var Lt;
      return ["unlocked", "jammed", "open"].includes((Lt = k[ft]) == null ? void 0 : Lt.state);
    }).length, E = a.alarms.filter((ft) => {
      var Lt;
      return ((Lt = k[ft]) == null ? void 0 : Lt.state) === "disarmed";
    }).length, F = B ? re(B, "warning", "warnings") : null, T = G ? G + " unlocked" : E ? E + " disarmed" : F ? null : "All secure", X = wr(), C = e.flatMap((ft) => ft.solar), V = C.find((ft) => ft.endsWith("_power")), yt = {
      light: p.length && { value: d ? d + " on" : "All off", groups: s((ft) => ft.lights) },
      climate: u.length && { value: h === y ? h + "°" : h + " - " + y + "°", groups: s((ft) => [...ft.readings.filter((Lt) => ["temperature", "humidity"].includes(Ut(Lt).device_class)), ...r(ft, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [F, T].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((ft) => ft.ids.length) },
      media_players: A.length && { value: M ? M + " playing" : "No media playing", groups: s((ft) => r(ft, /^media_player\./)) },
      maintenance: X,
      energy: jt.grid && { value: Bo(Number(((At = k[V]) == null ? void 0 : At.state) || 0) * 1e3 + Number(k[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, jt.grid] }] },
      ...Bf(e, s, r)
    }, Tt = [], Nt = R.filter((ft) => ft.severity !== "warning" && ft.on);
    return Nt.length && Tt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: re(Nt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Nt.map((ft) => ft.entity) }] }), Yi().forEach((ft) => {
      ft.type !== "summary" ? Tt.push({ key: "path:" + ft.path, name: ft.label || ft.path, icon: ft.icon || "mdi:link-variant", colour: "", value: "" }) : !ft.hidden && yt[ft.key] && (t || Xs(ft.key)) && Tt.push({ key: ft.key, ..._i[ft.key], ...yt[ft.key] });
    }), Tt;
  }
  const Pf = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + j(t.key) + '" data-k="sum:' + j(t.key) + '" aria-label="' + j(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + qi() + '"' : t.colour && $a(t.colour) ? ' style="' + $a(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Us : "") + '<div class="tfIcon" aria-hidden="true"' + we(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + j(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + j(t.value) + "</div>" : "") + "</div></div>";
  function Vc(t) {
    const e = $t();
    kt = { ...kt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (kt.favHidden || []).filter((a) => a !== t) }, Ta(), Ee();
  }
  function jc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function zc(t, e) {
    if (t.startsWith("path:")) {
      jc(t.slice(5));
      return;
    }
    ps("summary:" + t, e);
  }
  async function Rf() {
    const t = (d) => Promise.resolve().then(() => K(d)).catch(() => null), [e, a, r, s] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Hu }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), p = (e == null ? void 0 : e.value) || {};
    kt = { favourites: p.favourites ?? null, sources: p.sources, hiddenSums: p.hiddenSums, shownSums: p.shownSums, home: p.home, dash: p.dash, named: p.named, favHidden: p.favHidden, suggest: p.suggest, favSeeded: p.favSeeded, favsTitle: p.favsTitle, areaOrder: p.areaOrder }, An = (a == null ? void 0 : a.value) || {}, qr = (r == null ? void 0 : r.value) || {}, Bi = Array.isArray(s == null ? void 0 : s.entities) ? s.entities : [], nr = null, Object.keys(k).length && Ee(), Hf(), po = !0, br();
  }
  const Gc = "HomeCore";
  async function Hf() {
    var r, s, p;
    const t = location.pathname.split("/")[1], e = kt.named || [];
    if (!((s = (r = i()) == null ? void 0 : r.user) != null && s.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      kt = { ...kt, named: [...e, t] }, Ta();
    };
    try {
      const d = (p = await K({ type: "lovelace/dashboards/list" })) == null ? void 0 : p.find((y) => y.url_path === t);
      if (!d || d.mode === "yaml") return;
      if (d.title === Gc) {
        a();
        return;
      }
      const u = await K({ type: "lovelace/config", url_path: t }), h = ((u == null ? void 0 : u.views) || []).flatMap((y) => [...y.cards || [], ...(y.sections || []).flatMap((A) => A.cards || [])]);
      if (!h.length || !h.every((y) => (y == null ? void 0 : y.type) === "custom:homecore-card" && !y.page)) return;
      await K({ type: "lovelace/dashboards/update", dashboard_id: d.id, title: Gc }), a();
    } catch {
    }
  }
  let si = null, Js = 0, Qs = !1;
  const $c = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return Ng.includes(e) && (e !== "binary_sensor" || Ts.includes(a) || !!ju[a]);
  }, tl = (t) => t.startsWith("binary_sensor.") ? ju[Ut(t).device_class] : null;
  async function Nf() {
    var t;
    if (!(Qs || Date.now() - Js < 30 * 1e3)) {
      Qs = !0, Js = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter($c), a = e.length ? await K({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        si = Array.isArray(a) ? a.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        si = null;
      }
      Qs = !1, Ee();
    }
  }
  function Of() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (s) => {
      if (!k[s.entity_id] || !$c(s.entity_id) || !ol(s.entity_id) || ["unavailable", "unknown"].includes(s.state)) return;
      if (tl(s.entity_id)) {
        const d = e.get(s.entity_id);
        s.state === "on" ? (!d || s.when > d.when + 1) && e.set(s.entity_id, { ...s, alarm: !0, cleared: null }) : d && !d.cleared && s.when > d.when && (d.cleared = s.when);
        return;
      }
      const p = t.get(s.entity_id);
      (!p || s.when > p.when + 1) && t.set(s.entity_id, s);
    };
    [...si || []].sort((s, p) => s.when - p.when).forEach(a);
    const r = si ? Js / 1e3 - 5 : 0;
    return Object.keys(k).forEach((s) => {
      var u;
      const p = k[s], d = p.last_changed ? Date.parse(p.last_changed) / 1e3 : 0;
      d > r && a({ entity_id: s, state: p.state, when: d, context_user_id: (u = p.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((s, p) => p.when - s.when).slice(0, Ig);
  }
  function If(t) {
    var r;
    const e = t.context_user_id && Object.keys(k).find((s) => s.startsWith("person.") && Ut(s).user_id === t.context_user_id);
    if (e) return vt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Ff(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Vu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function qf(t) {
    const e = t.entity_id, a = t.alarm && tl(e), r = vt(e) + " " + (a ? a[0] : Ff(t)), s = a ? so(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + so(t.cleared * 1e3) : "") : [If(t), so(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + we(e, Ea(e)) + '></div><button class="tfName" type="button" data-more="' + j(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + j(r + ", " + s + ". More info") + '"><span class="activityRowName">' + j(r) + '</span><span class="activityRowMeta">' + j(s) + "</span></button></div>";
  }
  let Xa = null, Uc = 0;
  const Wf = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Yc() {
    var e;
    if (Date.now() - Uc < 5 * 60 * 1e3) return;
    Uc = Date.now();
    const t = [];
    try {
      const a = ((e = await K({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (s) => a.filter((p) => p.type === s).flatMap((p) => s === "grid" ? (p.flow_from || []).map((d) => d.stat_energy_from) : [p.stat_energy_from]).filter(Boolean);
      for (const [s, p, d] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!d.length) continue;
        const u = await Promise.all(d.map((h) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((y) => Number(y == null ? void 0 : y.change) || 0, () => 0)));
        t.push({ key: s, name: p, id: d[0], ids: d, value: u.reduce((h, y) => h + y, 0), unit: Ut(d[0]).unit_of_measurement || (s === "gas" || s === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Xa = t, Ee();
  }
  let vr = null, Zc = [];
  function el() {
    var p;
    const t = Zc = Xa != null && Xa.length ? Xa : Wf.map(([d, u, h, y]) => {
      if (d === "solar") {
        const M = Object.keys(k).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        M && Number.isFinite(Number(k[M].state)) && (h = Number(k[M].state));
      }
      const A = "sensor.made_up_energy_" + d;
      return k[A] = { entity_id: A, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: y, state_class: "total_increasing" } }, { key: d, name: u, id: A, value: h, unit: y };
    });
    Ct.clear(), t.some((d) => d.id === vr) || (vr = t[0].id);
    const e = t.map((d) => {
      const u = Number(d.value).toLocaleString(void 0, { maximumFractionDigits: d.value < 10 ? 2 : 1 }) + " " + d.unit, h = Fg[d.key], y = d.id === vr;
      return Ct.set(d.id, { name: d.name, text: u, icon: h }), '<div class="activityRow tap' + (y ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + j(d.id) + '" aria-pressed="' + y + '" aria-label="' + j(d.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + we("", h, d.name) + '></div><div><div class="activityRowName">' + j(d.name) + '</div><div class="activityRowMeta">' + j(u) + "</div></div></div>";
    }), a = t.find((d) => d.id === vr), r = (((p = ce().opts.energy) == null ? void 0 : p.graph) || "above") === "below", s = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + j(a.id) + '" role="img" aria-label="' + j(a.name) + ', last 24 hours"></svg></div>';
    return pn("dash:energy", 0, "Energy today", e, s, Zi().some((d) => d.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Kc(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === vr || (vr = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const s = r.dataset.energyPick === t;
      r.classList.toggle("picked", s), r.setAttribute("aria-pressed", String(s));
    }), a.dataset.graph = t, a.dataset.drawn = "", xa.set("dash:energy", el()), Id(!0));
  }
  const Xc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Jc = /* @__PURE__ */ new Map();
  async function Vf(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), s = e.getMinutes() / 60, p = Array.from({ length: 24 }, (u, h) => h <= r ? 0 : null);
    if (!t.ids) {
      const u = Xc[t.key] || Xc.electricity, h = u.map((A, M) => M < r ? A : M === r ? A * s : 0), y = h.reduce((A, M) => A + M, 0) || 1;
      return p.map((A, M) => A == null ? null : t.value * h[M] / y);
    }
    const d = Jc.get(t.id);
    if (d && d.day === a && Date.now() - d.at < 5 * 60 * 1e3) return d.hours;
    try {
      const u = await K({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((A) => ((u == null ? void 0 : u[A]) || []).forEach((M) => {
        const R = typeof M.start == "number" ? M.start : Date.parse(M.start), B = new Date(R).getHours();
        R >= a && B < r && (p[B] += Number(M.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), y = await Promise.all(t.ids.map((A) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: A, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
      p[r] = y.reduce((A, M) => A + M, 0);
    } catch {
    }
    return Jc.set(t.id, { at: Date.now(), day: a, hours: p }), p;
  }
  async function jf(t, e) {
    const a = await Vf(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), s = Math.max(60, t.clientHeight || 130), p = 18, d = s - 18, u = r / 24, h = u * 0.72, y = (/* @__PURE__ */ new Date()).getHours(), A = a.map((F) => F ?? 0), M = Math.max(0, ...A), R = (F) => d - (M > 0 ? F / M * (d - p) : 0), B = (F) => F.toLocaleString(void 0, { maximumFractionDigits: F < 10 ? 2 : 1 }) + " " + e.unit, G = (F) => String(F).padStart(2, "0") + ":00", E = M > 0 ? A.indexOf(M) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + s), t.setAttribute("aria-label", e.name + " today by the hour: " + B(e.value) + (E >= 0 ? ", most " + B(M) + " at " + G(E) : "")), t.innerHTML = [p, (p + d) / 2, d].map((F) => '<line x1="0" x2="' + r + '" y1="' + F + '" y2="' + F + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((F, T) => F > 0 ? '<rect x="' + (T * u + (u - h) / 2).toFixed(1) + '" y="' + R(F).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (d - R(F)).toFixed(1) + '" rx="2" fill="' + (T === y ? "var(--primary)" : "var(--text)") + '"' + (T === y ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((F) => '<text x="' + (F * u).toFixed(1) + '" y="' + (s - 3) + '">' + String(F).padStart(2, "0") + "</text>").join("") + (E >= 0 ? '<text x="0" y="11">Most: ' + j(B(M)) + " at " + G(E) + "</text>" : "");
  }
  function zf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, r) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Qc(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    df(t, a, [e].filter(Boolean));
  }
  let Ki = null, al = 0;
  const ol = (t) => !t.startsWith("light.") || qg.includes((Se.get(t) || "").toLowerCase()), nl = () => Math.max(2, gn((S == null ? void 0 : S.clientWidth) || 0).n), td = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, Gf = (t) => td(t).slice(0, On(t) - 1);
  function ed(t) {
    const e = ce().tiles;
    if (e) return e.filter((r) => k[r] || qt(r));
    if (!Ki) {
      const r = (s) => {
        var p;
        return (((p = k[s]) == null ? void 0 : p.state) === "on" ? 1e6 : 0) + (Ln[s] || 0);
      };
      Ki = {
        lights: jt.rooms.flatMap((s) => s.lights).filter((s) => {
          var p;
          return ol(s) && ((p = k[s]) == null ? void 0 : p.state) !== "unavailable";
        }).sort((s, p) => r(p) - r(s) || vt(s).localeCompare(vt(p))),
        climates: jt.rooms.flatMap((s) => s.actions.filter((p) => p.startsWith("climate.")))
      };
    }
    const a = Ki.climates.filter((r) => k[r]).slice(0, t > 3 ? 2 : 1);
    return [...Ki.lights.filter((r) => k[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const rl = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.welcome) ?? !0;
  }, $f = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((r) => {
      var s;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((s = r.attributes) == null ? void 0 : s.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Uf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = $f();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ad = (t, e, a, r) => (s) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + s + "</div></section>";
  function Yf(t, e) {
    var p, d;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? rl() : ce().welcome) ? '<span class="tfGreeting">' + j(Uf()) + "</span>" : "") + j(((d = (p = i()) == null ? void 0 : p.config) == null ? void 0 : d.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ad("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Pf(u) })) }), !v && _t().length && t.push({ key: "areas", html: dt(0) });
    const a = ee();
    if (a.length && t.push({ key: "favs", wrap: ad("tfDash-favs", "favs", "Favourites", Ji()), tiles: a.map((u) => ({ key: "fav:" + u, html: uo(u, { area: !0 }) })) }), v)
      return Yc(), gd() && t.push({ key: "dash:energy", html: el() }), al = nl(), ed(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + j(u) + '">' + h + "</div>",
        tiles: [{ key: u, html: ve(qt(u), u) }]
      })), t;
    const r = Of();
    t.push({ key: "dash:act", html: pn("dash:act", 0, "Activity", r.length ? r.map(qf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: el() });
    const s = nl();
    return al = s, ed(s >= 3 ? s : s * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + j(u) + '">' + h + "</div>",
      tiles: [{ key: u, html: Ot(u) ? ve(qt(u), u) : un(u, !1, Gf(u)) }]
    })), Nf(), Yc(), t;
  }
  const li = 252, ue = 16, Zf = 200, Kf = Math.round(li * 1.25), Xf = 60, Ba = Xf + ue, Jf = 3, od = {
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
  }, Qf = ["wx", "favs", "act", "energy", "avg"], nd = ["XS", "S", "M", "L", "XL"], rd = nd.length, th = ["Narrow", "Wide", "Really wide"], eh = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, id = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && Hn(t) ? rd : Math.min(rd, td(t).length + 1), On = (t) => {
    const e = ce().opts[t] || {}, a = id(t), r = Number(e.h) || (e.tall ? 5 : eh[t] || sd);
    return Math.max(1, Math.min(a, r));
  }, sd = 2, ah = 90, ld = 60, Pa = (t) => {
    var e;
    return od[t] || (t.startsWith("room:") ? ((e = Bt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : vt(t));
  }, oh = 128;
  let ma = !1, ae = null, la = null, il = !1, In = /* @__PURE__ */ new Map(), Xi = 0, mn = 0;
  const Fo = ["title", "sums"], gn = (t) => {
    const e = Math.max(1, Math.floor((t + ue) / (Zf + ue)));
    return { n: e, w: Math.max(1, Math.min(Kf, Math.floor((t - (e - 1) * ue) / e))) };
  }, sl = () => Et(Bt), nh = () => {
    var e;
    const t = new Set(((e = kt.home) == null ? void 0 : e.areasOff) || []);
    return sl().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function rh() {
    const t = nh();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(od).filter((e) => {
        var a, r;
        return !["title", ...((a = kt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((r = kt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...dh() ? ["wx"] : [], ...gd() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: sn,
      areasOff: []
    };
  }
  const ce = () => v ? rh() : ll(), ll = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...kt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = sn.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Fn(t) {
    v || (kt = { ...kt, dash: { ...t, known: sn } }, Ta());
  }
  function qn() {
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
      ...sn.map((e) => [e, ro[e], Vs[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, s = !1]) => ({ key: e, el: a, span: r, tile: s }));
  }
  const cd = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const s = 2 * a + ue;
      t.el.style.setProperty("--area-open", s + "px");
      const p = Math.ceil((s + Math.max(0, _t().length - 1) * (oh + ue) + ue) / (a + ue));
      return Math.max(Math.min(e, 2), Math.min(p, e - (((r = ce().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, ce().spans[t.key] ?? t.span);
  }, dd = (t) => On(t.key), pd = window.matchMedia("(max-width: 620px)"), ih = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(_t().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + ue) / Ba));
  };
  function ud(t, e, a = null) {
    const r = ce().cells, s = t.every((u) => !r[u.key] || r[u.key].col + u.cols <= e), p = (u) => r[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), y = (E, F, T, X) => {
        for (let C = F; C < F + X; C++) for (let V = E; V < E + T; V++) if (u.has(V + "," + C)) return !1;
        return !0;
      }, A = (E, F, T) => {
        for (let X = T; X < T + E.rows; X++) for (let C = F; C < F + E.cols; C++) u.add(C + "," + X);
        h.set(E.key, { col: F, row: T, cols: E.cols, rows: E.rows });
      }, M = (E, F, T) => {
        for (F = Math.max(0, Math.min(e - E.cols, F)), T = Math.max(0, T); !y(F, T, E.cols, E.rows); ) T++;
        A(E, F, T);
      }, R = (E) => {
        for (let F = 0; ; F++) for (let T = 0; T <= e - E.cols; T++) if (y(T, F, E.cols, E.rows)) {
          A(E, T, F);
          return;
        }
      };
      a && M(a, ae.col, ae.row);
      const B = t.filter((E) => E !== a), G = (E, F) => p(E).row - p(F).row || p(E).col - p(F).col;
      return s ? (B.filter((E) => r[E.key]).sort(G).forEach((E) => M(E, r[E.key].col, r[E.key].row)), B.filter((E) => !r[E.key]).forEach(R), h) : ([...B].sort(G).forEach(R), h);
    })();
  }
  function sh(t, e) {
    const a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = (p, d, u) => {
      for (let h = d; h < d + u.rows; h++) for (let y = p; y < p + u.cols; y++) if (a.has(y + "," + h)) return !1;
      return !0;
    };
    return t.forEach((p) => {
      for (let d = 0; ; d++) {
        let u = 0;
        for (; u <= e - p.cols && !s(u, d, p); ) u++;
        if (!(u > e - p.cols)) {
          for (let h = d; h < d + p.rows; h++) for (let y = u; y < u + p.cols; y++) a.add(y + "," + h);
          r.set(p.key, { col: u, row: d, cols: p.cols, rows: p.rows });
          return;
        }
      }
    }), r;
  }
  function cl() {
    const t = ce(), e = new Set(t.hidden), a = qn().filter((d) => !Fo.includes(d.key));
    let r = In;
    if (!r.size) {
      const d = t.pegs || 4, u = a.filter((h) => !e.has(h.key));
      u.forEach((h) => {
        h.cols = cd(h, d, li), h.rows = dd(h) ?? sd;
      }), r = ud(u, d);
    }
    const s = (d) => !e.has(d.key) && r.get(d.key) || { row: 1e9, col: 0 };
    a.sort((d, u) => s(d).row - s(u).row || s(d).col - s(u).col);
    const p = (t.phone || []).map((d) => a.find((u) => u.key === d && !e.has(d))).filter(Boolean);
    return [...p, ...a.filter((d) => !p.includes(d))];
  }
  const lh = () => {
    const t = cl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), dl([...qn().filter((e) => Fo.includes(e.key)), ...t].map((e) => e.el));
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
  const yr = (t, e) => Fn({ ...t, cells: e, pegs: gn(S.clientWidth).n });
  function pl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), s = a.getBoundingClientRect(), p = s.right > r.right ? s.right - r.right : s.left < r.left ? s.left - r.left : 0;
    p && e.scrollBy({ left: p, behavior: t ? "smooth" : "auto" });
  }
  function Ue() {
    var X;
    if (requestAnimationFrame(() => pl(!1)), setTimeout(() => pl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * li + ue, a = f.classList.contains("tfDash");
    v && (ma = !1), f.classList.toggle("tfOverview", v);
    const { n: r, w: s } = e ? { n: 2, w: Math.floor((t - ue) / 2) } : gn(t);
    Da.classList.add("tfPegs"), Da.style.setProperty("--peg-n", r), Da.style.setProperty("--peg-w", s + "px");
    const p = new Set(ce().hidden);
    sn.forEach((C) => {
      var V;
      return (V = ro[C]) == null ? void 0 : V.classList.toggle("tfNotAdded", p.has(C) && !(ae != null && ae.fromTray && ae.key === C));
    }), Oi(), f.classList.toggle("tfBoard", a), f.classList.toggle("tfEditing", a && ma && !e);
    const d = l("dashEditNav");
    !a && Go && El(!1), d && v ? (d.hidden = !a, Go || (d.classList.remove("active"), d.setAttribute("aria-pressed", "false"), d.setAttribute("aria-label", "Edit Home page"), d.title = "Edit", d.innerHTML = Ls)) : d && (d.hidden = !a || e, d.classList.toggle("active", ma), d.setAttribute("aria-pressed", String(ma)), d.setAttribute("aria-label", ma ? "Done editing" : "Edit custom dashboard"), d.title = ma ? "Done" : "Edit", d.innerHTML = ma ? Fu : Ls);
    const u = a ? qn() : [];
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
    const h = new Set(ce().hidden), y = s + ue;
    ae != null && ae.fromTray && h.delete(ae.key), u.forEach((C) => C.el.classList.toggle("tfBoardHidden", h.has(C.key)));
    const A = u.filter((C) => !h.has(C.key) && getComputedStyle(C.el).display !== "none");
    let M = 0;
    A.filter((C) => Fo.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: M + "px" });
      const V = C.key === "sums" && C.el.querySelector(".tfDash-bar"), yt = V ? V.querySelectorAll(".activityRow").length : 0;
      V && (V.style.maxWidth = "none");
      for (let Tt = 1; V && Tt <= yt && (V.style.setProperty("--bar-cols", String(Math.ceil(yt / Tt))), !(V.offsetWidth <= t)); Tt++)
        ;
      V && (V.style.maxWidth = ""), M += C.el.offsetHeight + ue;
    }), mn = M;
    const R = A.filter((C) => !Fo.includes(C.key));
    R.forEach((C) => {
      C.cols = cd(C, r, s), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === r ? t : C.cols * s + (C.cols - 1) * ue) + "px", C.el.style.height = "", C.rows = dd(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + ue - 6) / Ba)), C.key === "areas" && pd.matches && (C.rows = ih(parseFloat(C.el.style.width)));
    });
    const B = ae && R.find((C) => C.key === ae.key), G = e && cl().map((C) => C.key), E = (C) => G.includes(C.key) ? G.indexOf(C.key) : -1, F = e ? sh([...R].sort((C, V) => E(C) - E(V)), r) : ud(R, r, B);
    F.forEach((C) => Object.assign(C, { x: C.cols === r ? 0 : C.col * y, y: mn + C.row * Ba, w: C.cols === r ? t : C.cols * s + (C.cols - 1) * ue, h: C.rows * Ba - ue })), R.forEach((C) => {
      const V = F.get(C.key);
      C.el.style.height = V.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : On(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((yt) => {
        yt.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && V.cols === 1 && r > 1), C.el.dataset.cols = V.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", V.h - ah + "px"), !(C === B && !ae.fromTray) && (C.el.style.left = V.x + "px", C.el.style.top = V.y + "px");
    }), e || (In = F), dl([...A.filter((C) => Fo.includes(C.key)), ...R.slice().sort((C, V) => F.get(C.key).row - F.get(V.key).row || F.get(C.key).col - F.get(V.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, V]) => {
      const yt = F.get(C), Tt = yt && S.querySelector(V), Nt = Tt == null ? void 0 : Tt.querySelector(":scope > .activityRows"), At = Tt == null ? void 0 : Tt.querySelector(":scope > .activityHeader");
      if (!Nt || !At) return;
      const ft = Nt.getBoundingClientRect().top - Tt.getBoundingClientRect().top, Lt = yt.rows === 1 ? yt.h : Math.floor(yt.h - ft - parseFloat(getComputedStyle(Tt).paddingBottom)), Qt = Math.max(1, Math.floor(Lt / ld));
      Nt.style.setProperty("--fill-gap", (Qt > 1 ? (Lt - Qt * ld) / (Qt - 1) : 0).toFixed(2) + "px"), Nt.style.maxHeight = Lt + "px";
    }), Xi = Math.max(0, ...[...F.values()].map((C) => C.row + C.rows));
    let T = mn + Xi * Ba - ue;
    T = ml(ma && !e, R, F, T, r, s), S.style.height = T + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), u.forEach((C) => hl.observe(C.el)), Id(), De();
  }
  const qo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, fd = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, hd = () => {
    var t;
    return fd[(t = kt.home) == null ? void 0 : t.areaSize] ? kt.home.areaSize : "s";
  }, ul = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = kt.home) == null ? void 0 : t.areaLayout) ? kt.home.areaLayout : "bento";
  }, md = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, ch = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ji = () => v ? Wo("favsTitle") : kt.favsTitle !== !1, dh = () => {
    var t;
    return !!((t = kt.home) != null && t.weather && Io());
  }, gd = () => {
    var t;
    return !!((t = kt.home) != null && t.energy && (Xa != null && Xa.length));
  }, Wo = (t) => {
    var e;
    return ((e = kt.home) == null ? void 0 : e[t]) ?? ch[t];
  };
  function ph() {
    var s;
    const t = Object.values(((s = i()) == null ? void 0 : s.floors) || {}), e = new Set(t.map((p) => p.floor_id)), a = t.map((p) => ({ id: p.floor_id, name: p.name, rooms: Bt.filter((d) => d.floor === p.floor_id) })), r = Bt.filter((p) => !e.has(p.floor));
    return r.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: r }), a;
  }
  const bd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let Ce = null, wd = [], ci = /* @__PURE__ */ new Map();
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
    const e = t.target.closest(".tfBoardItem"), a = e && qn().find((u) => u.el === e);
    if (!a || Fo.includes(a.key) || Ot(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), s = ci.get(a.key);
    Ce = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: s.x, top: s.y, order: [...wd] };
    const p = (u) => {
      const h = u.clientX - Ce.x0, y = u.clientY - Ce.y0;
      if (!Ce.on && Math.hypot(h, y) < 5) return;
      Ce.on || (Ce.on = !0, e.classList.add("tfDragging"), Ve() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Ce.left + h + "px", top: Ce.top + y + "px" });
      const A = u.clientX - r.left, M = u.clientY - r.top + S.scrollTop;
      let R = null, B = 1 / 0;
      if (ci.forEach((T, X) => {
        if (X === a.key || !Ce.order.includes(X)) return;
        const C = Math.hypot(A - (T.x + T.w / 2), M - (T.y + T.h / 2));
        C < B && (B = C, R = { key: X, b: T });
      }), !R) return;
      const G = Ce.order.filter((T) => T !== a.key), E = G.indexOf(R.key) + (A > R.b.x + R.b.w / 2 ? 1 : 0), F = [...G.slice(0, E), a.key, ...G.slice(E)];
      F.join() !== Ce.order.join() ? (Ce.order = F, Ue()) : fl(ci.get(a.key));
    }, d = () => {
      removeEventListener("pointermove", p), removeEventListener("pointerup", d), removeEventListener("pointercancel", d);
      const u = Ce;
      Ce = null, e.classList.remove("tfDragging"), u.on && _a({ order: u.order }), Ue(), u.on && !Ve() && setTimeout(() => mc(e), 340);
    };
    addEventListener("pointermove", p), addEventListener("pointerup", d), addEventListener("pointercancel", d);
  }
  function fh(t, e, a) {
    var _p;
    const r = new Set(ce().hidden);
    t.forEach((ht) => ht.el.classList.toggle("tfBoardHidden", r.has(ht.key)));
    const s = t.filter((ht) => !r.has(ht.key) && getComputedStyle(ht.el).display !== "none"), p = ue, d = a ? { w: Math.floor((e - p) / 2) } : gn(e), u = Math.min(e, qo.full);
    let h = 0;
    const y = is();
    f.classList.toggle("hcSumsFit", Ad()), f.classList.toggle("hcFavStrip", y);
    const A = s.filter((ht) => Fo.includes(ht.key) || y && ht.key === "favs");
    A.sort((ht, It) => ["title", "sums", "favs"].indexOf(ht.key) - ["title", "sums", "favs"].indexOf(It.key)), A.forEach((ht) => {
      ht.el.classList.add("tfBoardItem"), ht.el.toggleAttribute("data-narrow", !1), Object.assign(ht.el.style, { width: (ht.key === "title" ? e : u) + "px", height: "", left: "0px", top: h + "px" });
      const It = ht.key !== "title" && (ht.el.querySelector(".tfDash-bar>.activityRows") || ht.key === "favs" && ht.el.querySelector(":scope>.activityRows")), Be = It ? It.children.length : 0;
      if (It && (It.classList.remove("hcBarRows"), !a && It.scrollWidth > It.clientWidth + 1))
        for (let Zt = 2; Zt <= Be && (It.classList.add("hcBarRows"), It.style.setProperty("--bar-cols", String(Math.ceil(Be / Zt))), !(It.scrollWidth <= It.clientWidth + 1)); Zt++)
          ;
      h += ht.el.offsetHeight + (ht.key === "title" ? qo.nameGap : qo.sumsGap);
    });
    const M = ["favs", "wx", "energy"], R = (Ce == null ? void 0 : Ce.order) || ((_p = kt.home) == null ? void 0 : _p.order), B = R ? [...R.filter((ht) => M.includes(ht)), ...M.filter((ht) => !R.includes(ht))] : M;
    wd = B;
    const G = s.filter((ht) => M.includes(ht.key) && !(y && ht.key === "favs")).sort((ht, It) => B.indexOf(ht.key) - B.indexOf(It.key));
    ci = /* @__PURE__ */ new Map();
    const E = (ht, It) => {
      if (ci.set(ht.key, It), Object.assign(ht.el.style, { width: It.w + "px", height: It.h + "px" }), Ce != null && Ce.on && Ce.key === ht.key) {
        fl(It);
        return;
      }
      Object.assign(ht.el.style, { left: It.x + "px", top: It.y + "px" });
    }, F = a ? e : 2 * d.w + p, T = qo.row, X = md() === "stacked" && !a && G.length > 0;
    let C = 0, V = 0, yt = h;
    G.forEach((ht) => {
      ht.el.classList.add("tfBoardItem"), ht.el.dataset.rows = 5, ht.el.dataset.cols = 2, ht.el.toggleAttribute("data-narrow", !1), !X && C && C + F > e && (h += V + p, C = 0, V = 0);
      let It = T;
      if ((a || ht.key === "favs") && (Object.assign(ht.el.style, { width: F + "px", height: "" }), It = ht.el.offsetHeight), X) {
        E(ht, { x: 0, y: yt, w: F, h: It }), yt += It + p;
        return;
      }
      E(ht, { x: C, y: h, w: F, h: It }), C += F + p, V = Math.max(V, It);
    }), G.length && !X && (h += V + p);
    const Tt = X ? F + p : 0, Nt = X ? e - F - p : e, At = a ? "l" : hd(), ft = fd[At], Lt = ul(), Qt = Wo("byFloor"), me = d.w, fe = ft.h, ye = a ? 2 : Math.max(1, Math.floor((Nt + p) / (me + p))), Ia = new Map(s.filter((ht) => Ot(ht.key)).map((ht) => [ht.key, ht])), Fa = (Qt ? ph() : [{ id: "", name: "", icon: "", rooms: Bt }]).map((ht) => ({ ...ht, cards: ht.rooms.map((It) => Ia.get("room:" + It.id)).filter(Boolean) })).filter((ht) => ht.cards.length), ms = Lt === "bento", gs = ms && Wo("bentoMixed"), Am = ms && Qt && Wo("bentoBoxes"), Lm = Lt === "columns" && Qt && !a, Yo = 12, Mp = (ht) => ht.name ? qo.floorHead + qo.floorGap : 0, yi = (ht, It, Be) => {
      const Zt = /* @__PURE__ */ new Set(), de = [];
      ht.cards.forEach((Jt, bo) => {
        const vn = gs && bo === 0 && It >= 2 && ht.cards.length > 1, Ze = vn ? 2 : 1, Zo = vn && !a ? 2 : 1;
        Jt.el.classList.add("tfBoardItem"), Jt.el.dataset.cols = Ze, Jt.el.toggleAttribute("data-narrow", !1);
        for (let Un = 0; ; Un++) {
          const Yn = [...Array(Math.max(0, It - Ze + 1)).keys()].find((xi) => [...Array(Ze).keys()].every((eo) => [...Array(Zo).keys()].every((bs) => !Zt.has(Un + bs + "," + (xi + eo)))));
          if (Yn != null) {
            [...Array(Ze).keys()].forEach((xi) => [...Array(Zo).keys()].forEach((eo) => Zt.add(Un + eo + "," + (Yn + xi)))), de.push({ it: Jt, r: Un, c: Yn, sc: Ze, sr: Zo });
            break;
          }
        }
      });
      const pe = Math.max(0, ...de.map((Jt) => Jt.r + Jt.sr));
      ms && !a && de.forEach((Jt) => {
        for (; Jt.r + Jt.sr < pe && !Zt.has(Jt.r + Jt.sr + "," + Jt.c) && Jt.sc === 1; )
          Zt.add(Jt.r + Jt.sr + "," + Jt.c), Jt.sr++;
      }), de.forEach((Jt) => {
        Jt.it.el.dataset.rows = Math.min(5, Jt.sr * ft.rows), Object.assign(Jt.it.el.style, { width: Jt.sc * Be + (Jt.sc - 1) * p + "px", height: Jt.sr * fe + (Jt.sr - 1) * p + "px" });
      });
      const Kt = [...Array(pe)].map(() => fe), ke = [];
      let Ca = Mp(ht);
      return Kt.forEach((Jt, bo) => {
        ke[bo] = Ca, Ca += Jt + p;
      }), { h: Ca - (pe ? p : 0), places: de.map((Jt) => ({ it: Jt.it, x: Jt.c * (Be + p), y: ke[Jt.r], w: Jt.sc * Be + (Jt.sc - 1) * p, h: Kt.slice(Jt.r, Jt.r + Jt.sr).reduce((bo, vn) => bo + vn, 0) + (Jt.sr - 1) * p })) };
    }, ac = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((ht) => [ht.dataset.floor, ht])), oc = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((ht) => [ht.dataset.floor, ht])), Sp = [], Tm = (ht, It, Be, Zt) => {
      if (!ht.name) return;
      let de = ac.get(ht.id);
      ac.delete(ht.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ht.id, S.appendChild(de)), de.dataset.sig !== ht.name && (de.dataset.sig = ht.name, de.innerHTML = '<h2 class="hcFloorName">' + j(ht.name) + "</h2>"), Object.assign(de.style, { left: It + "px", top: Be + "px", width: Zt + "px" }), Sp.push(de);
    }, Dm = (ht, It, Be, Zt, de) => {
      let pe = oc.get(ht.id);
      oc.delete(ht.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), pe.dataset.floor = ht.id, pe.setAttribute("aria-hidden", "true"), S.prepend(pe)), Object.assign(pe.style, { left: It + "px", top: Be + "px", width: Zt + "px", height: de + "px" });
    }, Em = (ht) => parseFloat(getComputedStyle(ht.cards[0].el).paddingLeft) || 0, nc = (ht, It, Be, Zt, de = 0) => {
      Tm(ht, Be + de, Zt, (It.w ?? e) - de), It.places.forEach((pe) => E(pe.it, { x: Be + pe.x, y: Zt + pe.y, w: pe.w, h: pe.h }));
    };
    if (Fa.length && G.length && !X && (h += qo.floorTop), Lm) {
      let ht = 0, It = h;
      Fa.forEach((Be) => {
        const Zt = { ...yi(Be, 1, me), w: me };
        ht && ht + me > Nt && (h = It + p + qo.floorTop, ht = 0), nc(Be, Zt, Tt + ht, h), It = Math.max(It, h + Zt.h), ht += me + p;
      }), h = It + p;
    } else if (Am) {
      let ht = [{ x0: 0, x1: Nt, t: h }];
      const It = (Zt, de) => Math.max(...ht.filter((pe) => pe.x1 > Zt && pe.x0 < de).map((pe) => pe.t)), Be = (Zt, de, pe) => {
        const Kt = [];
        ht.forEach((ke) => {
          ke.x1 <= Zt || ke.x0 >= de ? Kt.push(ke) : (ke.x0 < Zt && Kt.push({ x0: ke.x0, x1: Zt, t: ke.t }), ke.x1 > de && Kt.push({ x0: de, x1: ke.x1, t: ke.t }));
        }), Kt.push({ x0: Zt, x1: de, t: pe }), ht = Kt.sort((ke, Ca) => ke.x0 - Ca.x0);
      };
      Fa.forEach((Zt) => {
        const de = Zt.cards.length + (gs && Zt.cards.length > 1 ? 3 : 0);
        let pe = a ? 2 : Math.min(ye, Math.max(gs && Zt.cards.length > 1 ? 2 : 1, de <= 3 ? de : Math.ceil(de / 2)));
        for (; !a && pe > 1 && pe * me + (pe - 1) * p + 2 * Yo > Nt; ) pe--;
        let Kt = null;
        for (let Ze = pe; Ze >= (a ? pe : 1); Ze--) {
          const Zo = Math.min(me, Math.floor((Nt - 2 * Yo - (Ze - 1) * p) / Ze)), Un = { ...yi(Zt, Ze, Zo), w: Ze * Zo + (Ze - 1) * p }, Yn = Un.w + 2 * Yo, xi = Un.h + 2 * Yo;
          ht.map((eo) => eo.x0).filter((eo) => eo + Yn <= Nt + 0.5).forEach((eo) => {
            const bs = It(eo, eo + Yn);
            (!Kt || bs < Kt.t - 0.5) && (Kt = { cc: Ze, inner: Zo, bw: Yn, h: xi, t: bs, x: eo });
          });
        }
        if (!Kt) {
          const Ze = Math.min(me, Nt - 2 * Yo), Zo = yi(Zt, 1, Ze);
          Kt = { cc: 1, inner: Ze, bw: Ze + 2 * Yo, h: Zo.h + 2 * Yo, t: It(0, Nt), x: 0 };
        }
        const ke = { ...yi(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * p }, Ca = Kt.bw, Jt = Kt.h, bo = Kt.x, vn = Kt.t;
        Dm(Zt, Tt + bo, vn, Ca, Jt), nc(Zt, ke, Tt + bo + Yo, vn + Yo, Em(Zt)), Be(bo, Math.min(Nt, bo + Ca + p), vn + Jt + p);
      }), h = Math.max(...ht.map((Zt) => Zt.t));
    } else {
      const ht = (It) => {
        var pe;
        if (!((pe = kt.home) != null && pe.fitTogether) || a) return ye;
        const Be = X ? yt - p - h : null, Zt = (Kt) => {
          const ke = It.cards.length + (gs && It.cards.length > 1 && Kt >= 2 ? 3 : 0), Ca = Math.ceil(ke / Kt);
          return { holes: Ca * Kt - ke, rows: Ca, h: Mp(It) + Ca * fe + (Ca - 1) * p, w: Kt * me + (Kt - 1) * p };
        }, de = (Kt) => Kt.holes === 0 || ms && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= ye; Kt++) {
          const ke = Zt(Kt);
          if (de(ke) && ke.h <= (Be ?? ke.w)) return Kt;
        }
        for (let Kt = 1; Kt <= ye; Kt++) {
          const ke = Zt(Kt);
          if (ke.h <= (Be ?? ke.w)) return Kt;
        }
        return ye;
      };
      Fa.forEach((It, Be) => {
        Be && (h += qo.floorTop);
        const Zt = yi(It, ht(It), me);
        nc(It, { ...Zt, w: Nt }, Tt, h), h += Zt.h + p;
      });
    }
    X && (h = Math.max(h, yt)), ac.forEach((ht) => ht.remove()), oc.forEach((ht) => ht.remove()), Ce != null && Ce.on || fl(null), S.style.height = Math.max(0, h - p) + "px", dl([...A.map((ht) => ht.el), ...G.map((ht) => ht.el), ...Sp, ...Fa.flatMap((ht) => ht.cards.map((It) => It.el))]), ml(!1), t.forEach((ht) => [...ht.el.children].forEach((It) => It.toggleAttribute("inert", Go)));
    const rc = S.querySelector(".tfDash-favs>.activityRows");
    rc && (rc.classList.toggle("hcFadeList", !y), bd(rc)), requestAnimationFrame(() => f.classList.add("tfBoardReady")), t.forEach((ht) => hl.observe(ht.el)), De();
  }
  const Qi = () => {
    il || (il = !0, requestAnimationFrame(() => {
      il = !1, Ue();
    }));
  }, hl = new ResizeObserver(() => {
    ae || Qi();
  });
  function hh(t, e, a) {
    const r = a + ue, s = t * a + (t - 1) * ue, p = e * Ba - ue, d = ue / 2, u = r / Math.max(1, Math.round(r / (Ba / 4))), h = Ba / 4, y = 6;
    let A = "";
    for (let M = 0; M <= t; M++) for (let R = 0; R <= e; R++) {
      const B = M * r - d, G = R * Ba - d;
      A += "M" + (B - y) + " " + G + "H" + (B + y) + "M" + B + " " + (G - y) + "V" + (G + y);
    }
    return '<svg width="' + s + '" height="' + p + '" viewBox="0 0 ' + s + " " + p + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -d + '" y="' + -d + '" width="' + u.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -d + '" y="' + -d + '" width="' + (s + ue) + '" height="' + (p + ue) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + A + '"></path></svg>';
  }
  function ml(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, s = 1, p = li) {
    S.querySelectorAll(".tfEditChips").forEach((A) => {
      (!t || !A.closest(".tfBoardItem")) && A.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((A) => A.remove()), S.querySelectorAll(".tfBoardItem").forEach((A) => [...A.children].forEach((M) => {
      M.classList.contains("tfEditChips") || M.toggleAttribute("inert", t);
    }));
    let d = S.querySelector(".tfBoardCells"), u = S.querySelector(".tfBoardLand");
    if (!t)
      return d == null || d.remove(), u == null || u.remove(), fo(), r;
    const h = Xi + Jf;
    if (d || (d = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), d.setAttribute("aria-hidden", "true"), S.prepend(d)), d.style.top = mn + "px", d.dataset.size !== s + "x" + h + "x" + p && (d.dataset.size = s + "x" + h + "x" + p, d.innerHTML = hh(s, h, p)), r = Math.max(r, mn + h * Ba - ue), e.forEach((A) => {
      const M = A.el;
      !M || M.querySelector(":scope > .tfEditChips") || M.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Ai + '</span><button class="tfEditChip" type="button" data-board-more="' + j(A.key) + '" aria-label="' + j(Pa(A.key)) + ' options" aria-haspopup="menu">' + Pg + "</button></div>");
    }), ae && a.has(ae.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(u));
      const A = a.get(ae.key);
      Object.assign(u.style, { left: A.x + "px", top: A.y + "px", width: A.w + "px", height: A.h + "px" });
    } else u == null || u.remove();
    const y = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (y) {
      const A = y.getBoundingClientRect();
      y.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...y.querySelectorAll('[data-k^="fav:"]')].map((M) => {
        const R = M.getBoundingClientRect(), B = M.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + j(B) + '" aria-label="Hide ' + j(vt(B)) + ' from the dashboard" style="left:' + Math.round(R.right - A.left - 42) + "px;top:" + Math.round(R.top - A.top + (R.height - 32) / 2) + 'px">' + Iu + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let gl = "";
  function bl(t) {
    ma = t, t || (ae = null, Vo = jo = !1, fo()), Ue(), t ? (gl = JSON.stringify(kt), kr(Yt, "Edit custom dashboard", null)) : gl && JSON.stringify(kt) !== gl && Ra("Changes saved");
  }
  function mh(t, e) {
    var F, T;
    fo();
    const a = In.get(t), { n: r } = gn(S.clientWidth), s = ce(), p = s.spans[t] ?? (Ot(t) ? 1 : 2);
    if (!a) return;
    const d = a.cols >= r, u = (X, C, V) => '<button type="button" role="menuitem" data-board-act="' + X + '"' + (V ? " disabled" : "") + ">" + C + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", Pa(t) + " options");
    const y = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), A = id(t), M = On(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + nd.map((X, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === M) + '" aria-label="' + X + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < A ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>", B = Qf.includes(t) || Ot(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + th.map((X, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(p, r)) + '" aria-label="' + X + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < r ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>" : "", G = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + js().map(([X, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (X === Gr()) + '" data-board-act="src:' + j(X) + '">' + j(C) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = R + B + G + (t === "energy" ? u("graph", (((F = s.opts.energy) == null ? void 0 : F.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", d || a.col === 0) + u("right", "Move right", d || a.col + a.cols >= r) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (y ? u("remove", "Remove") : u("hide", "Hide")), S.appendChild(h);
    const E = Math.min(a.x + a.w - h.offsetWidth, S.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, E) + "px", top: a.y + 28 + "px" }), la = { key: t, menu: h, opener: e }, (T = h.querySelector("button:not([disabled])")) == null || T.focus();
  }
  function fo(t) {
    if (!la) return;
    const { menu: e, opener: a } = la;
    la = null, e.remove(), t && (a == null || a.focus());
  }
  const Wn = () => Object.fromEntries([...In].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function gh(t, e) {
    var u, h, y;
    if (e === "remove") {
      fo(), bh(t);
      return;
    }
    const a = kt, r = ce(), s = Wn(), p = s[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((u = r.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (s[t] = { ...p, col: p.col - 1 }), e === "right" && (s[t] = { ...p, col: p.col + 1 }), e === "up" && (s[t] = { ...p, row: p.row - 1 }), e === "down" && (s[t] = { ...p, row: p.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ae = { key: t, col: s[t].col, row: s[t].row }), yr(r, s), ae && (Ue(), ae = null, yr(ce(), Wn()));
    const d = /^[hw]:/.test(e) && !Ve() && (la == null ? void 0 : la.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (d) {
      const A = la;
      d.parentElement.querySelectorAll("[aria-checked]").forEach((M) => M.setAttribute("aria-checked", String(M === d))), setTimeout(() => {
        la === A && fo();
      }, Pe.tabs.dur);
    } else fo();
    e === "graph" && (xa.delete("dash:energy"), Ee()), e.startsWith("src:") && ((h = Te == null ? void 0 : Te.get("radar")) == null || h.refresh(), Le == null || Le.refresh()), e.startsWith("h:") && t.includes(".") && Ee(), Ue(), e !== "hide" ? (y = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus() : Ra(Pa(t) + " hidden", rs(a));
  }
  const vd = (t) => {
    var e;
    return sn.includes(t) && !(((e = kt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function wl(t) {
    const e = ce(), a = Pa(t) + vd(t);
    Fn({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Ue(), Ra(a);
  }
  const ts = () => ce().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ce().hidden.includes(t));
  function yd(t, e) {
    const a = ce();
    yr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), Ee(), De();
  }
  const xd = (t) => {
    yd([...ts().filter((e) => e !== t), t], Wn()), Ra(Pa(t) + " added"), xh(t);
  }, bh = (t) => {
    const e = kt, a = Wn();
    delete a[t], yd(ts().filter((r) => r !== t), a), Ra(Pa(t) + " removed", rs(e));
  };
  let vl = 0;
  function Ra(t, e = null) {
    var d;
    const a = l("toast");
    if (!a) return;
    if (X0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(vl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const r = f.getBoundingClientRect(), s = (d = o.querySelector(".bottomNav")) == null ? void 0 : d.getBoundingClientRect(), p = Yt.classList.contains("open") && !ho ? Math.min(r.right, Yt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + p) / 2 + "px", a.style.bottom = (s != null && s.height ? window.innerHeight - s.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), J0(a), clearTimeout(vl), vl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Pe.confirm.stay);
  }
  const wh = 700, vh = 1e3, ga = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ga.setAttribute("role", "tooltip"), ga.setAttribute("aria-hidden", "true"), f.appendChild(ga);
  let di = null, pi = 0, Vn = 0, kd = -1 / 0;
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
      const r = t.getBoundingClientRect(), s = ga.getBoundingClientRect(), p = r.top - s.height - 8 >= 8 ? r.top - s.height - 8 : r.bottom + 8;
      ga.style.left = Math.max(8, Math.min(window.innerWidth - s.width - 8, r.left + r.width / 2 - s.width / 2)) + "px", ga.style.top = p + "px";
    };
    !ga.hidden || performance.now() - kd < vh ? a() : pi = setTimeout(a, wh);
  }
  function as() {
    clearTimeout(pi), clearTimeout(Vn), ga.hidden || (kd = performance.now()), ga.hidden = !0, di = null;
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
    if (a && Xt.names === "scroll" && a.matches(os)) {
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
    Xt.names === "scroll" && (a.filter((s) => s.matches(os)).forEach(xl), a = a.filter((s) => !s.matches(os))), a.length && es(e, a.map((s) => s.textContent.trim()).join(" · "));
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
    if (Xt.names !== "scroll" || ns.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
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
      const s = r / 30 * 1e3, p = s + 1e3 + s;
      t.style.textOverflow = "clip";
      const d = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: s / p },
        { textIndent: -r + "px", offset: (1e3 + s) / p, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: p });
      d.onfinish = d.oncancel = () => {
        t.style.textOverflow = "", ns.delete(t);
      };
    }, 600);
  }
  const Md = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Md.unobserve(e.target), xl(e.target));
  }), { threshold: 1 });
  let kl = !1;
  new MutationObserver(() => {
    kl || Xt.names !== "scroll" || (kl = !0, setTimeout(() => {
      kl = !1, o.querySelectorAll(os).forEach((t) => {
        !t.dataset.glided && yl(t) && (t.dataset.glided = "1", Md.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const rs = (t) => () => {
    kt = t, Ta(), Ee(), Ue(), De();
  };
  function xh(t) {
    const e = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var d;
      const a = e();
      if (!a) return;
      const r = (d = window.matchMedia) == null ? void 0 : d.call(window, "(prefers-reduced-motion: reduce)").matches, s = a.getBoundingClientRect();
      (s.top < 0 || s.bottom > window.innerHeight) && a.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const p = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: p(55) }, { boxShadow: p(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, kh(t) ? 260 : 0);
  }
  function kh(t) {
    const e = In.get(t);
    if (!e || !Yt.classList.contains("open") || ho) return !1;
    const { n: a, w: r } = gn(S.clientWidth), s = Yt.getBoundingClientRect().left - S.getBoundingClientRect().left, p = (h) => h * (r + ue) + e.cols * r + (e.cols - 1) * ue <= s;
    if (p(e.col)) return !1;
    const d = /* @__PURE__ */ new Set();
    In.forEach((h, y) => {
      if (y !== t) for (let A = h.row; A < h.row + h.rows; A++) for (let M = h.col; M < h.col + h.cols; M++) d.add(M + "," + A);
    });
    const u = (h, y) => {
      for (let A = y; A < y + e.rows; A++) for (let M = h; M < h + e.cols; M++) if (d.has(M + "," + A)) return !1;
      return !0;
    };
    for (let h = 0; h <= Xi; h++) for (let y = 0; y + e.cols <= a && p(y); y++)
      if (u(y, h))
        return yr(ce(), { ...Wn(), [t]: { col: y, row: h } }), Ue(), !0;
    return !1;
  }
  const Sd = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, _d = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let xr = "page";
  const Mh = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + j(r) + '</span></span><span class="hcRowEnd">' + Ec + "</span></button>").join("") + "</section>", kr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Sh = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + Cc + "</button>", _h = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Ml(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let s = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((d) => {
      d.hidden = _h(d) !== xr, d.classList.toggle("hcFirst", !d.hidden && s), d.hidden || (s = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((d) => {
      const u = d.dataset.trayTab === xr;
      d.classList.toggle("active", u), d.setAttribute("aria-selected", String(u));
    });
    const p = a.querySelector(".tab.active");
    p != null && p.offsetWidth && (r.style.transition = "none", t ? Ps(r, r.offsetLeft, r.offsetWidth, p.offsetLeft, p.offsetWidth) : (r.style.left = p.offsetLeft + "px", r.style.width = p.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + _d.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + As + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + As + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + As + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Yt);
  let ho = !1, Vo = !1, jo = !1, ui = !1, ca = null, zo = !1;
  const Sl = {}, Ja = (t, e) => {
    if (Sl[t] === e) return;
    Sl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, lo(a);
  }, _l = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + j(vt(t)) + '</span><span class="activityRowMeta">' + j(e) + "</span></span>", Ch = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + j(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + '</span><span class="tfIcon"' + we(t, Ea(t)) + "></span>" + _l(t, e ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + j(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + j(vt(t)) + ' on the dashboard">' + (e ? Iu : Rg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + j(t) + '" aria-label="Remove ' + j(vt(t)) + ' from favourites">' + Tc + "</button>" : "<span></span>") + "</li>";
  function Cl(t, e, a, r) {
    const s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((d) => e(d) && !a.has(d) && k[d].state !== "unavailable").filter((d) => {
      const u = (vt(d) + " " + (Se.get(d) || "") + " " + d).toLowerCase();
      return s.every((h) => u.includes(h));
    }).sort((d, u) => (Se.get(d) || "~").localeCompare(Se.get(u) || "~") || vt(d).localeCompare(vt(u))).slice(0, 40).map((d) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + j(d) + '"><span class="tfIcon"' + we(d, Ea(d)) + "></span>" + _l(d, Se.get(d) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Ah = "https://www.home-assistant.io/dashboards/", Cd = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, xe = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  xe.setAttribute("aria-label", "Edit Home page"), xe.toggleAttribute("inert", !0);
  let Go = !1, Ha = !1, Al = "", Ll = null, Mr = "page";
  function Tl(t, e) {
    const a = xe.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), s = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(s != null && s.offsetWidth)) {
      requestAnimationFrame(() => {
        var p;
        return ((p = xe.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : p.offsetWidth) && Tl(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Ps(r, e.left, e.width, s.offsetLeft, s.offsetWidth) : (r.style.left = s.offsetLeft + "px", r.style.width = s.offsetWidth + "px");
  }
  const jn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + j(Cd[t][0]) + '">' + Dc + "</button>", Sa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + j(e) + '" ' + a + "></button>", Dl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + j(t) + '. Use the up and down arrows">' + Ai + "</button>", Ad = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, is = () => {
    var t;
    return ((t = kt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + j(t) + '">' + r.map(([s, p]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + s + '" aria-pressed="' + (a === s) + '">' + p + "</button>").join("") + "</div></div>", Ld = () => Zi(!0).filter((t) => _i[t.key]).map((t) => t.key);
  function zn() {
    var h, y, A, M, R, B, G;
    if (!Go) return;
    const t = $t(), e = (E) => '<li class="hcHeRow" data-he-id="' + j(E) + '">' + Dl(vt(E)) + '<span class="tfIcon"' + we(E, Ea(E)) + "></span>" + _l(E, Se.get(E) || Oe(E)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + j(E) + '" aria-label="Take ' + j(vt(E)) + ' off Favourites">' + Tc + "</button></li>", a = (E) => {
      const F = _i[E];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + j(E) + '"' + (F.colour && $a(F.colour) ? ' style="' + $a(F.colour).slice(1) + '"' : "") + ">" + Dl(F.name) + '<span class="tfIcon"' + we("", F.icon, F.name) + '></span><span class="activityRowName">' + j(F.name) + "</span>" + Sa(Xs(E), F.name, 'data-he-sum="' + j(E) + '"') + "</li>";
    }, r = ((h = xe.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", s = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], p = new Set(((y = kt.home) == null ? void 0 : y.areasOff) || []), d = (E) => '<li class="hcHeRow" data-he-id="' + j(E.id) + '">' + Dl(E.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="activityRowName">' + j(E.name) + "</span>" + Sa(!p.has(E.id), "Show " + E.name + " on Home", 'data-he-area="' + j(E.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + jn("welcome") + Sa(rl(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Io() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + jn("weather") + Sa(!!((A = kt.home) != null && A.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Xa != null && Xa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + jn("energy") + Sa(!!((M = kt.home) != null && M.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", md(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Sa(Wo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", ul(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ul() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Sa(Wo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Sa(Wo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", hd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + Sa(!!((R = kt.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Sa(((B = kt.home) == null ? void 0 : B.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + jn("favs") + "</div>" + fi("Show as", "data-he-favs-as", is() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (is() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + Sa(Wo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ha + '">' + As + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ha ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + j(r) + '"><ul class="tfTrayList">' + (Ha ? Cl(r, (E) => Sd.test(E), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + jn("suggest") + Sa(No(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + jn("sums") + Sa(((G = kt.home) == null ? void 0 : G.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Ad() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Ld().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + sl().map(d).join("") + "</ul>"
    };
    xe.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + s.map(([E, F]) => '<button class="tab segBtn' + (E === Mr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (E === Mr) + '" data-he-tab="' + E + '">' + F + "</button>").join("") + "</div>" + Mh(s, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[Mr] + "</div>", Tl(!1), lo(xe);
  }
  const Sr = (t) => {
    kt = { ...kt, ...t }, Ta(), Ee(), zn();
  }, _a = (t) => Sr({ home: { ...kt.home || {}, ...t } });
  function El(t) {
    Gn(), Go = t, Ha = !1, xe.classList.toggle("open", t), xe.toggleAttribute("inert", !t), f.classList.toggle("hcHomeEditing", t), g && S && Ue();
    const e = l("dashEditNav"), a = xe.querySelector(".tfTrayHead");
    e && t && (Ll = e.parentElement, a.appendChild(e)), e && !t && Ll && Ll.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Fu : Ls), t ? (Al = JSON.stringify(kt), zn(), kr(xe, "Edit Home page", null)) : Al && JSON.stringify(kt) !== Al && Ra("Changes saved");
  }
  xe.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Sh + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', f.appendChild(xe);
  let $o = null;
  const Qa = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Qa.setAttribute("role", "dialog"), f.appendChild(Qa);
  function Gn() {
    $o && ($o.setAttribute("aria-expanded", "false"), $o = null, Qa.hidden = !0);
  }
  function Td(t) {
    const e = $o;
    if (Gn(), e === t) return;
    const [a, r] = Cd[t.dataset.info];
    Qa.setAttribute("aria-label", a), Qa.innerHTML = '<div class="hcInfoTitle">' + j(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Ah + '" target="_blank" rel="noopener">Learn more</a>', Qa.hidden = !1, $o = t, t.setAttribute("aria-expanded", "true");
    const s = t.getBoundingClientRect(), p = Qa.offsetWidth, d = Qa.offsetHeight;
    Qa.style.left = Math.max(8, Math.min(innerWidth - p - 8, s.left + s.width / 2 - p / 2)) + "px", Qa.style.top = (s.bottom + 8 + d > innerHeight - 8 ? Math.max(8, s.top - 8 - d) : s.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    $o && !t.composedPath().some((e) => e === Qa || e === $o) && Gn();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if ($o) {
        t.stopPropagation();
        const a = $o;
        Gn(), a.focus();
        return;
      }
      if (Ha) {
        t.stopPropagation(), Ha = !1, zn();
        return;
      }
      Go && (t.stopPropagation(), El(!1), (e = l("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Lh = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? sl().map((e) => e.id) : Ld(), Dd = (t, e) => t.dataset.heList === "favs" ? Sr({ favourites: e }) : t.dataset.heList === "areas" ? (Sr({ areaOrder: e }), Ue()) : _a({ sumOrder: e });
  xe.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, s = Lh(r), p = s.indexOf(a.dataset.heId), d = p + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= s.length || (s.splice(d, 0, s.splice(p, 1)[0]), Dd(r, s), (u = xe.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), xe.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Hl(t, e.closest("[data-he-id]"), "heId", (s) => Dd(a, s), (s) => xe.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(s) + '"]'));
  }), xe.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      zn();
      const a = xe.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), xe.addEventListener("click", (t) => {
    var F, T, X, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Td(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      Mr = r.dataset.heGo, Ha = !1, Gn(), zn(), kr(xe, "Edit Home page", Mr, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Gn(), kr(xe, "Edit Home page", null);
      return;
    }
    const s = e.closest("[data-he-tab]");
    if (s) {
      const V = xe.querySelector(".hcTrayTabs .rubberIndicator"), yt = { left: V.offsetLeft, width: V.offsetWidth };
      Mr = s.dataset.heTab, Ha = !1, Gn(), zn(), Tl(!0, yt), xe.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      _a({ welcome: !rl() });
      return;
    }
    const p = e.closest("[data-he-card]");
    if (p) {
      const V = p.dataset.heCard, yt = ["sums", "favs"].includes(V) ? ((F = kt.home) == null ? void 0 : F[V]) !== !1 : !!((T = kt.home) != null && T[V]);
      _a({ [V]: !yt });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      _a({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      _a({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const h = e.closest("[data-he-area-size]");
    if (h) {
      _a({ areaSize: h.dataset.heAreaSize });
      return;
    }
    const y = e.closest("[data-he-area-layout]");
    if (y) {
      _a({ areaLayout: y.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      _a({ fitTogether: !((X = kt.home) != null && X.fitTogether) });
      return;
    }
    const A = e.closest("[data-he-cards-as]");
    if (A) {
      _a({ cardsAs: A.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const V = M.dataset.heFlag;
      _a({ [V]: !Wo(V) }), V === "favsTitle" && Na();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Sr({ suggest: !No() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const V = new Set(((C = kt.home) == null ? void 0 : C.areasOff) || []), yt = R.dataset.heArea;
      V.has(yt) ? V.delete(yt) : V.add(yt), _a({ areasOff: [...V] });
      return;
    }
    const B = e.closest("[data-he-sum]");
    if (B) {
      const V = B.dataset.heSum, yt = !Xs(V), Tt = kt.home || {};
      _a(Ru.includes(V) ? { shownSums: yt ? [...Tt.shownSums || [], V] : (Tt.shownSums || []).filter((Nt) => Nt !== V) } : { hiddenSums: yt ? (Tt.hiddenSums || []).filter((Nt) => Nt !== V) : [...Tt.hiddenSums || [], V] });
      return;
    }
    const G = e.closest("[data-he-remove]");
    if (G) {
      Sr({ favourites: $t().filter((V) => V !== G.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ha = !Ha, zn(), Ha && xe.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const E = e.closest("[data-he-pick-id]");
    E && (Ha = !1, xe.querySelector("[data-he-search]").value = "", Sr({ favourites: [...$t(), E.dataset.hePickId] }));
  });
  function De() {
    var A, M, R;
    const t = ma && f.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && ho), Yt.toggleAttribute("inert", !t), t || (zo = !1), Nd(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = ho ? Cc : Ec, e.setAttribute("aria-expanded", String(!ho)), e.setAttribute("aria-label", ho ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ce().hidden.filter((B) => !Fo.includes(B) && qn().some((G) => G.key === B)), r = (B, G) => '<button class="tfTrayCard" type="button" data-tray-card="' + j(B) + '" aria-label="' + j(Pa(B)) + ": drag it onto the board, or press to " + G + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + "</span>" + j(Pa(B)) + "</button>", s = a.filter((B) => !zr.includes(B)), p = zr.filter((B) => a.includes(B));
    Ja("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + jn("welcome") + '<button class="switch' + (ce().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ce().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((A = kt.dash) != null && A.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((M = kt.dash) != null && M.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Ml(!1)), Ja("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((B) => r(B, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Ja("weather", '<div class="sectionLabel">Weather</div>' + (p.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + p.map((B) => r(B, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Ja("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ce().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + zo + '">' + (zo ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(kt.favHidden || []), u = $t(), h = [...u, ...[...d].filter((B) => !u.includes(B) && k[B])];
    Ja("favs", h.map((B) => Ch(B, d.has(B), u.includes(B))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !jo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(jo)), jo && Ja("tilepick", Cl(Yt.querySelector("[data-tile-search]").value, (B) => Rr.includes(B.split(".")[0]), new Set(ts()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !ui, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ui));
    const y = new Set(((R = kt.dash) == null ? void 0 : R.areasOff) || []);
    if (Ja("areas", Et(Bt).map((B) => '<li class="hcHeRow" data-area-id="' + j(B.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + j(B.name) + '. Use the up and down arrows">' + Ai + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="activityRowName">' + j(B.name) + '</span><button class="switch' + (y.has(B.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !y.has(B.id) + '" aria-label="Show ' + j(B.name) + ' in the Areas card" data-area-on="' + j(B.id) + '"></button></li>').join("")), ui) {
      const B = new Set(ts());
      Ja("roompick", Et(Bt).filter((G) => !B.has("room:" + G.id)).map((G) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + j(G.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + G.id, G.icon || "mdi:texture-box", G.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + j(G.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Vo, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Vo)), Vo && Ja("pick", Cl(Yt.querySelector("[data-fav-search]").value, (B) => Sd.test(B), new Set($t()), "data-fav-pick")), Ja("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ji() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ji() + '" data-fav-title aria-label="Title"></button>'), Ja("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (No() ? " on" : "") + '" type="button" role="switch" aria-checked="' + No() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const $n = (t) => {
    kt = { ...kt, ...t }, Ta(), Ee(), De();
  };
  function Ed(t, e) {
    const a = kt, r = new Set(kt.favHidden || []);
    e ? r.delete(t) : r.add(t), $n({ favHidden: [...r] }), e ? Ra(vt(t) + " put back") : Ra(vt(t) + " hidden", rs(a));
  }
  const Th = (t) => {
    const e = kt;
    $n({ favourites: $t().filter((a) => a !== t), favHidden: (kt.favHidden || []).filter((a) => a !== t) }), Ra(vt(t) + " removed from favourites", rs(e));
  }, Dh = (t) => {
    $n({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (kt.favHidden || []).filter((e) => e !== t) }), Ra(vt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, r, s;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        xr = e.dataset.trayTab, Ml(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        xr = e.dataset.trayGo, Ml(!1), kr(Yt, "Edit custom dashboard", xr, _d.find(([p]) => p === xr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        kr(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) bl(!1);
      else if (e.hasAttribute("data-info")) Td(e);
      else if (e.hasAttribute("data-dash-sums"))
        Fn({ ...ll(), hidden: ll().hidden.filter((p) => p !== "sums"), sumsOff: !((a = kt.dash) != null && a.sumsOff) }), Ee(), De();
      else if (e.hasAttribute("data-dash-welcome")) {
        const p = ce();
        Fn({ ...p, welcome: !p.welcome }), Ee(), De();
      } else if (e.hasAttribute("data-tray-tuck"))
        ho = !ho, De();
      else if (e.hasAttribute("data-phone-toggle"))
        zo = !zo, De(), zo && ((r = ba.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (wl(e.dataset.trayCard), De());
      else if (e.dataset.favEye) Ed(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Th(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Vo = !Vo, De(), Vo && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Dh(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        jo = !jo, De(), jo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) xd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ui = !ui, De();
      else if (e.dataset.roomPick) xd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const p = new Set(((s = kt.dash) == null ? void 0 : s.areasOff) || []);
        p.has(e.dataset.areaOn) ? p.delete(e.dataset.areaOn) : p.add(e.dataset.areaOn), Fn({ ...ce(), areasOff: [...p] }), Ee(), De();
      } else e.hasAttribute("data-fav-suggest") ? $n({ suggest: !No() }) : e.hasAttribute("data-fav-title") && ($n({ favsTitle: !Ji() }), Na());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && De();
  });
  const Bd = (t) => {
    kt = { ...kt, areaOrder: t }, Ta(), Ee(), De();
  };
  Yt.addEventListener("keydown", (t) => {
    var d, u, h;
    const e = (u = (d = t.target).closest) == null ? void 0 : u.call(d, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Et(Bt).map((y) => y.id), s = r.indexOf(a), p = s + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= r.length || (r.splice(p, 0, r.splice(s, 1)[0]), Bd(r), (h = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Hl(t, e.closest("[data-area-id]"), "areaId", Bd, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
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
    t.key !== "Escape" || !(e ? jo : Vo) || (t.stopPropagation(), e ? jo = !1 : Vo = !1, De(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Pd(t, e, a, r) {
    t.preventDefault();
    const s = t.clientX, p = t.clientY;
    let d = null, u = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), y = (M) => {
      if (!d) {
        if (Math.hypot(M.clientX - s, M.clientY - p) < 4) return;
        d = e.cloneNode(!0), d.classList.add("tfTrayGhost"), d.style.width = e.offsetWidth + "px", f.appendChild(d);
      }
      d.style.transform = "translate(" + (M.clientX - 24) + "px," + (M.clientY - 24) + "px)";
      const R = !ho && M.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const E = S.getBoundingClientRect(), { w: F } = gn(S.clientWidth);
        ae = !R && M.clientX >= E.left && M.clientX <= E.right && M.clientY >= E.top + mn ? { key: r, col: Math.max(0, Math.floor((M.clientX - E.left) / (F + ue))), row: Math.max(0, Math.floor((M.clientY - E.top - mn) / Ba)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ue();
        }));
        return;
      }
      const B = S.querySelector(".tfDash-favs"), G = B == null ? void 0 : B.getBoundingClientRect();
      if (ca = null, G && !R && M.clientX >= G.left && M.clientX <= G.right && M.clientY >= G.top && M.clientY <= G.bottom) {
        let E = 1 / 0;
        B.querySelectorAll('[data-k^="fav:"]').forEach((F, T) => {
          const X = F.getBoundingClientRect(), C = Math.hypot(M.clientX - (X.left + X.width / 2), M.clientY - (X.top + X.height / 2));
          C < E && (E = C, ca = { i: T, r: X, after: M.clientX > X.left + X.width / 2 });
        }), ca || (ca = { i: 0, r: null, after: !1 });
      }
      ca != null && ca.r ? (h.isConnected || f.appendChild(h), Object.assign(h.style, { left: (ca.after ? ca.r.right : ca.r.left) - 2 + "px", top: ca.r.top + 8 + "px", height: ca.r.height - 16 + "px" })) : h.remove();
    }, A = () => {
      if (window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), cancelAnimationFrame(u), d == null || d.remove(), h.remove(), a === "card") {
        if (!d) wl(r);
        else if (ae != null && ae.fromTray) {
          Ue();
          const E = Pa(r) + vd(r), F = ce(), T = Wn();
          ae = null, yr({ ...F, hidden: F.hidden.filter((X) => X !== r) }, T), Ra(E);
        }
        ae = null, Ue(), Ee(), De();
        return;
      }
      if (!ca) return;
      const M = new Set(kt.favHidden || []);
      M.delete(r);
      const R = $t().filter((E) => E !== r), B = R.filter((E) => !M.has(E)), G = B[Math.min(ca.i + (ca.after ? 1 : 0), B.length)];
      R.splice(G ? R.indexOf(G) : R.length, 0, r), ca = null, $n({ favourites: R, favHidden: [...M] }), Ra(vt(r) + " put back");
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", A), window.addEventListener("pointercancel", A);
  }
  const Rd = {
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
  }, Hd = 136, Eh = 288, Bh = 0.8, Ph = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ba.setAttribute("aria-label", "Phone order"), ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Tc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(ba);
  let Pl = "";
  function Nd() {
    var u;
    const t = zo && ma && f.classList.contains("tfBoard") && !ho;
    if (ba.classList.toggle("open", t), ba.toggleAttribute("inert", !t), !t) return;
    const e = cl().filter((h) => !ce().hidden.includes(h.key)), a = e.length, r = (h) => Math.round(h * Bh * 10) / 10 + "px", s = (h, y) => {
      const A = h.el.classList.contains("tfDac"), M = h.tile ? A ? Eh : Hd : Rd[h.key] || Hd;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + j(h.key) + '" style="min-height:' + r(M) + '" aria-label="' + j(Pa(h.key) + ", " + (y + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? we(h.key, Ea(h.key)) : we(h.key, Ph[h.key])) + '></span><span class="tfPhoneName">' + j(Pa(h.key)) + "</span></button>";
    }, p = '<div class="tfPhoneTitle">' + j(((u = S.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Rd.sums) + '"><span class="tfPhoneName">' + j(Pa("sums")) + "</span></div>" + e.map(s).join("");
    if (ba.querySelector('[data-phone="note"]').innerHTML = ce().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", p === Pl) return;
    Pl = p;
    const d = ba.querySelector('[data-phone="list"]');
    d.innerHTML = p, lo(d);
  }
  function Od(t, e) {
    var a;
    Fn({ ...ce(), phone: t }), De(), e && ((a = ba.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Rl = () => [...ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Rh(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = ba.querySelector(".tfPhoneScreen"), s = Rl().join();
    e.classList.add("moving");
    const p = (u) => {
      const h = r.getBoundingClientRect();
      u.clientY > h.bottom - 40 ? r.scrollTop += 12 : u.clientY < h.top + 40 && (r.scrollTop -= 12);
      const y = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const B = R.getBoundingClientRect();
        return R !== e && u.clientX >= B.left && u.clientX <= B.right && u.clientY >= B.top && u.clientY <= B.bottom;
      });
      if (!y) return;
      const A = y.getBoundingClientRect(), M = y.classList.contains("tile") ? u.clientX < A.left + A.width / 2 : u.clientY < A.top + A.height / 2;
      a.insertBefore(e, M ? y : y.nextSibling);
    }, d = () => {
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), e.classList.remove("moving");
      const u = Rl();
      Pl = "", u.join() !== s ? Od(u) : Nd();
    };
    window.addEventListener("pointermove", p), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  }
  ba.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Rh(t, e);
  }), ba.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      zo = !1, De(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...s } = ce();
      Fn(s), De();
    }
  }), ba.addEventListener("keydown", (t) => {
    var d, u, h, y;
    if (t.key === "Escape") {
      t.stopPropagation(), zo = !1, De(), (d = Yt.querySelector("[data-phone-toggle]")) == null || d.focus({ preventScroll: !0 });
      return;
    }
    const e = (y = (h = (u = t.target).closest) == null ? void 0 : h.call(u, "[data-phone-key]")) == null ? void 0 : y.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Rl(), s = r.indexOf(e), p = s + a;
    p < 0 || p >= r.length || ([r[s], r[p]] = [r[p], r[s]], Od(r, e));
  });
  function Hl(t, e, a, r, s) {
    t.preventDefault();
    const p = Pe.drag, d = Ve(), u = 1 + p.lift / 100, h = [...e.parentElement.children].filter((Lt) => Lt.dataset[a]), y = h.indexOf(e), A = h.map((Lt) => Lt.getBoundingClientRect()), M = h.length - 1, R = A[y].height + (h.length > 1 ? A[1].top - A[0].bottom : 0), B = (Lt) => A[Lt].top + A[Lt].height / 2, G = t.clientY, E = A[0].top - A[y].top, F = A[M].top - A[y].top;
    let T = 0, X = 0, C = 0, V = 1, yt = y, Tt = 0;
    e.classList.add("hcListDragging"), h.forEach((Lt) => {
      Lt !== e && (Lt.style.transition = d ? "none" : "transform " + p.gap + "ms " + Re.land);
    });
    const Nt = () => {
      if (Tt = requestAnimationFrame(Nt), d) {
        X = T, e.style.transform = "translateY(" + X + "px)";
        return;
      }
      C = hc(C, T - X, p.pull / 100, p.keep / 100), X += C, V += (u - V) * 0.25;
      const Lt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + X.toFixed(2) + "px) scale(" + (V * (1 - 0.063 * Lt)).toFixed(4) + "," + (V * (1 + 0.1 * Lt)).toFixed(4) + ")";
    };
    Tt = requestAnimationFrame(Nt);
    const At = (Lt) => {
      T = Math.max(E, Math.min(F, Lt.clientY - G));
      const Qt = B(y) + T, me = h.filter((fe, ye) => ye !== y && B(ye) < Qt).length;
      me !== yt && (yt = me, h.forEach((fe, ye) => {
        fe !== e && (fe.style.transform = y < yt && ye > y && ye <= yt ? "translateY(" + -R + "px)" : yt < y && ye >= yt && ye < y ? "translateY(" + R + "px)" : "");
      }));
    }, ft = () => {
      window.removeEventListener("pointermove", At), window.removeEventListener("pointerup", ft), window.removeEventListener("pointercancel", ft), cancelAnimationFrame(Tt);
      const Lt = e.getBoundingClientRect(), Qt = e.dataset[a];
      h.forEach((Fa) => {
        Fa.style.transition = "none", Fa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const me = h.map((Fa) => Fa.dataset[a]);
      me.splice(yt, 0, me.splice(y, 1)[0]), r(me);
      const fe = s(Qt) || e;
      if (requestAnimationFrame(() => h.forEach((Fa) => {
        Fa.style.transition = "";
      })), d) return;
      const ye = fe.getBoundingClientRect(), Ia = Lt.top + Lt.height / 2 - (ye.top + ye.height / 2);
      fe.classList.add("hcListLanding"), fe.animate([{ transform: "translateY(" + Ia + "px) scale(" + V + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: p.slide, easing: Re.land }).finished.then(() => {
        fe.classList.remove("hcListLanding"), mc(fe);
      }, () => fe.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", At), window.addEventListener("pointerup", ft), window.addEventListener("pointercancel", ft);
  }
  function Hh(t, e) {
    Hl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set($t());
        Sl.favs = null, $n({ favourites: a.filter((s) => r.has(s)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Pd(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Hh(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Pd(t, a, "fav", a.dataset.trayFav);
  });
  function Nh(t) {
    if (!ma || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && qn().find((Nt) => Nt.el === e);
    if (!a || Fo.includes(a.key)) return;
    const r = In.get(a.key), { w: s } = gn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), fo();
    const p = t.clientX, d = t.clientY;
    let u = !1, h = 0;
    const y = Pe.drag, A = Ve();
    let M = 0, R = 0, B = 0, G = 0, E = 0, F = 0, T = A || y.stick === 0, X = 0;
    const C = (Nt, At, ft, Lt) => {
      e.style.transform = "translate(" + B.toFixed(2) + "px," + G.toFixed(2) + "px) rotate(" + Nt.toFixed(2) + "deg) rotate(" + At + "rad) scale(" + ft.toFixed(4) + "," + Lt.toFixed(4) + ") rotate(" + -At + "rad)";
    }, V = () => {
      if (X = requestAnimationFrame(V), A) {
        B = M, G = R, C(0, 0, 1, 1);
        return;
      }
      if (!T) {
        const Qt = Math.min(Math.hypot(M, R) / Math.max(1, y.stick), 1);
        B = M * 0.35, G = R * 0.35, C(0, Math.atan2(R, M), 1 + 0.155 * Qt, 1 - 0.1 * Qt);
        return;
      }
      E = hc(E, M - B, y.pull / 100, y.keep / 100), F = hc(F, R - G, y.pull / 100, y.keep / 100), B += E, G += F;
      const Nt = Math.hypot(E, F), At = Math.min(Nt / 48, 1), ft = Math.max(-5, Math.min(y.tilt, E * 0.32)), Lt = 1 + y.lift / 100;
      C(ft, Math.atan2(F, E), Lt * (1 + 0.1 * At), Lt * (1 - 0.063 * At));
    }, yt = (Nt) => {
      if (M = Nt.clientX - p, R = Nt.clientY - d, !u) {
        if (Math.hypot(M, R) < 4) return;
        u = !0, ae = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), X = requestAnimationFrame(V);
      }
      !T && Math.hypot(M, R) > y.stick && (T = !0, E = M * 0.085, F = R * 0.085), ae.col = Math.round((r.x + M) / (s + ue)), ae.row = Math.round((r.y + R - mn) / Ba), h || (h = requestAnimationFrame(() => {
        h = 0, Ue();
      }));
    }, Tt = () => {
      var Ia;
      if (window.removeEventListener("pointermove", yt), window.removeEventListener("pointerup", Tt), window.removeEventListener("pointercancel", Tt), !u) return;
      const Nt = (Tr) => {
        Tr.preventDefault(), Tr.stopImmediatePropagation();
      };
      window.addEventListener("click", Nt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Nt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(X);
      const At = e.getBoundingClientRect(), ft = a.key;
      e.style.transition = "none", Ue(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ae = null, yr(ce(), Wn()), Ue(), Ee();
      const Lt = (Ia = qn().find((Tr) => Tr.key === ft)) == null ? void 0 : Ia.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Lt && (Lt.style.transition = "");
      }), !Lt || A) return;
      Lt.style.transition = "none";
      const Qt = Lt.getBoundingClientRect(), me = At.left + At.width / 2 - (Qt.left + Qt.width / 2), fe = At.top + At.height / 2 - (Qt.top + Qt.height / 2);
      Lt.style.zIndex = "20", Lt.animate([{ transform: "translate(" + me + "px," + fe + "px) scale(" + (1 + y.lift / 100) + ")" }, { transform: "none" }], { duration: y.slide, easing: Re.land }).finished.then(() => {
        Lt.style.zIndex = "", mc(Lt);
      }, () => {
        Lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", yt), window.addEventListener("pointerup", Tt), window.addEventListener("pointercancel", Tt);
  }
  function Id(t = !1) {
    const e = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = a;
    const s = Zc.find((p) => p.id === e.dataset.graph);
    s ? jf(e, s).then(() => {
      (t || r) && zf(e);
    }) : hp(e.dataset.graph, e).then(() => {
      t && Qc(e);
    });
  }
  function Fd() {
    var h, y, A;
    jt = Hi.model(i(), { madeUp: !v }), br(), k = jt.states, k[(h = kt.sources) == null ? void 0 : h.grid] && (jt.grid = kt.sources.grid), k[(y = kt.sources) == null ? void 0 : y.alarm] && (jt.security.alarms = [kt.sources.alarm]), ge.forEach((M, R) => {
      const B = k[R], G = (B == null ? void 0 : B.attributes) || {};
      if (!B || Date.now() - M.at > 2 * 60 * 1e3) {
        ge.delete(R);
        return;
      }
      M.pos != null && B.state !== "opening" && B.state !== "closing" && Math.abs(Ua(R) - M.pos) < 1 && delete M.pos, M.tilt != null && Math.abs((G.current_tilt_position ?? -1) - M.tilt) < 1 && delete M.tilt, M.pos == null && M.tilt == null && ge.delete(R);
    });
    const t = [];
    let e = 0;
    const a = Dt();
    Bt = a.filter((M) => M.room).map((M) => M.room), Bt.some((M) => M.id === ot) || (ot = ((A = Bt[0]) == null ? void 0 : A.id) || null);
    const r = lt === "weather" ? { key: "weather", name: "Weather" } : lt && a.find((M) => M.key === lt);
    if (r || (lt = null), f.classList.toggle("tfAreaOpen", !!r), f.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), f.classList.toggle("tfDash", !r), Se = /* @__PURE__ */ new Map(), jt.rooms.forEach((M) => [...M.actions, ...M.plugs, ...M.readings, ...M.openings, ...M.solar, ...M.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => Se.set(R, M.name))), !r) return Yf(t, Zi());
    if (t.push({ key: "areahead", html: Oh(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const s = r.ids, p = r.room ? r.room.id : r.key, d = r.room;
    d != null && d.solar.length && t.push({ key: "energy:" + d.id, html: Bn(d, ++e) }), d && (d.readings.length || d.power != null) && t.push({ key: "readings:" + d.id, html: Jr(d, ++e) }), d == null || d.plants.forEach((M) => t.push({ key: "plant:" + M.id, html: ji(M, ++e) }));
    const u = [...s, ...((d == null ? void 0 : d.plugs) || []).filter((M) => !s.includes(M))];
    return u.length && t.push({ key: "block:" + p, order: ++e, tiles: u.map((M) => ({ key: M, html: un(M) })) }), t;
  }
  const Oh = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Cc + '</button><div class="settingsTitle">' + j(t.name) + "</div></div>";
  let qd = 0, Wd = null;
  const Vd = (t) => t === "weather" ? ro.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function jd(t) {
    var e, a;
    lt || (qd = mi().scrollTop, Wd = ((e = Vd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), lt = t, t.startsWith("room:") && (ot = t.slice(5)), Na(), mi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let hi = null;
  function Ih(t, e) {
    if (hi == null || hi(), e == null) return;
    const a = mi(), r = performance.now() + 1500, s = ["wheel", "touchstart", "pointerdown", "keydown"];
    let p = 0;
    const d = () => {
      cancelAnimationFrame(p), s.forEach((h) => window.removeEventListener(h, d, !0)), hi = null;
    }, u = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const y = h.getBoundingClientRect().top - e;
        Math.abs(y) > 0.5 && (a.scrollTop += y);
      }
      performance.now() < r ? p = requestAnimationFrame(u) : d();
    };
    s.forEach((h) => window.addEventListener(h, d, { capture: !0, passive: !0 })), hi = d, u();
  }
  function Nl() {
    var a;
    const t = lt;
    lt = null, Na(), mi().scrollTop = qd, Ih(() => Vd(t), Wd);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ro.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Fh = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + j(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", zd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function mi() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Gd(t) {
    const e = mi(), a = (u) => {
      const h = u.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, r = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), s = r == null ? void 0 : r.dataset.k, p = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const d = r != null && r.isConnected ? r : s && S.querySelector('[data-k="' + CSS.escape(s) + '"]');
    d != null && d.isConnected && p != null && (e.scrollTop += d.getBoundingClientRect().top - p);
  }
  function Na() {
    if (!g || !S) return;
    const t = Fd(), e = (s) => {
      var p;
      return (((p = s.closest("[data-k]")) == null ? void 0 : p.dataset.k) || "") + "|" + s.dataset.iconFor + "|" + (s.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((s) => {
      s.firstElementChild && (a.get(e(s)) || a.set(e(s), []).get(e(s))).push(s.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((s) => s.remove()), xa.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((s) => s.tiles ? Fh(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((p) => xa.set(p.key, p.html)) : xa.set(s.key, s.html)), Ri = zd(t), r.querySelectorAll("[data-icon-for]").forEach((s) => {
      var d;
      const p = !s.firstElementChild && ((d = a.get(e(s))) == null ? void 0 : d.shift());
      p && s.appendChild(p);
    }), S.append(...r.children), Vr(t.weather), Co(), hl.disconnect(), Ue(), lo(S), Ul(S), Nn(S), Q(), mp(), Ar(), ip(), ap(), requestAnimationFrame(xt);
  }
  const $d = (t) => {
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
    const s = (d) => {
      var u;
      return ((u = d.dataset) == null ? void 0 : u.iconFor) !== void 0;
    };
    if (s(t) && s(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
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
  function Ud(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = $d(t), s = Il(t, a.firstElementChild);
    lo(s), Ul(s), Nn(s), Ol(s, r);
  }
  function Ee() {
    !g || !S || ae || Gd(qh);
  }
  function qh() {
    if (La = !1, !S.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = Fd();
    if (zd(t) !== Ri) {
      Na();
      return;
    }
    const e = (a) => So().some((r) => {
      const s = r.slice(r.indexOf("|") + 1);
      return a === s || a.endsWith(":" + s);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (xa.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && rn) {
        La = !0;
        return;
      }
      const s = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      s && (xa.set(r.key, r.html), Ud(s, r.html), r.key.startsWith("energy:") && mp());
    })), Ar(), ip(), ap(), c(), Q(), Le == null || Le.update(), Te == null || Te.forEach((a) => a.update()), f.classList.contains("tfDash") && Qi(), requestAnimationFrame(xt);
  }
  const _r = {
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
  }, Wh = (t) => ao(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Vh(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + j(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((s) => uo(s, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const St = document.createElement("div");
  St.className = "tfMoreBackdrop", St.hidden = !0, f.appendChild(St);
  const to = document.createElement("div");
  to.className = "tfMoreBackdrop tfMoreUnder", to.hidden = !0, f.insertBefore(to, St);
  const Fl = (t, e) => {
    for (let a = t; a && a !== St; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if ((r === "auto" || r === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let gi = null;
  St.addEventListener("touchstart", (t) => {
    gi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), St.addEventListener("touchmove", (t) => {
    var s, p;
    if (!gi || t.touches.length > 1 || (p = (s = t.target).closest) != null && p.call(s, "input,textarea,select")) return;
    const e = t.touches[0], a = gi.x - e.clientX, r = gi.y - e.clientY;
    gi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Fl(t.target, r) && t.preventDefault();
  }, { passive: !1 }), St.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Fl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const jh = () => window.innerWidth <= 620;
  let Ye = null;
  St.addEventListener("pointerdown", (t) => {
    const e = St.querySelector(".tfMorePair");
    !jh() || !e || !e.contains(t.target) || !t.isPrimary || St._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (Ye = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), St.addEventListener("pointermove", (t) => {
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
        St.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Ye.v = (e - Ye.dy) / Math.max(1, a - Ye.t), Ye.dy = e, Ye.t = a, Ye.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Yd = (t) => {
    if (!Ye || !t.isPrimary) return;
    const e = Ye;
    if (Ye = null, !e.on) return;
    const a = (y) => {
      y.preventDefault(), y.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), s = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || Ve()) {
      r ? Ql() : e.pair.animate([{ transform: s }, { transform: "none" }], { duration: 320, easing: Re.spring });
      return;
    }
    const p = q;
    St._closing = !0, St.style.pointerEvents = "none", St.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Re.exit, fill: "forwards" });
    const d = e.pair.animate([{ transform: s }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Re.exit, fill: "forwards" });
    let u = !1;
    const h = () => {
      u || (u = !0, St._closing = !1, St.style.pointerEvents = "", St.getAnimations().forEach((y) => y.cancel()), e.pair.getAnimations().forEach((y) => y.cancel()), q === p && Ql());
    };
    d.finished.then(h, h), setTimeout(h, 300);
  };
  St.addEventListener("pointerup", Yd), St.addEventListener("pointercancel", Yd);
  function ql() {
    const t = St.querySelector(".tfMorePair"), e = St.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ql, { passive: !0 }), g && Wr();
  let mo = [];
  const zh = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Gh(t) {
    const e = (E, F = "") => '<div class="tfMoreHead">' + (q != null && q.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Su + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + j(E) + "</div>" + F + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Ac + "</button></div>", a = (E, F) => '<div class="tfMoreNow"><div class="tfMoreState">' + j(E) + "</div></div>", r = Vh;
    if (t === "favourites") {
      const E = $t(), F = new Set(E), T = [{ name: "Starred", ids: E }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((X) => ({ name: X.name, ids: [...X.actions, ...X.plugs] }))].map((X, C) => C ? { ...X, ids: X.ids.filter((V) => !F.has(V)) } : X).filter((X) => X.ids.length);
      return [e("Favourites"), a(E.length ? E.length + " starred" : "None starred"), r(T, { star: !0 }, !0)];
    }
    const s = (E, { name: F = "", alert: T = !1, plain: X = !1 } = {}) => {
      const C = X ? [] : E.filter((Tt) => Rr.includes(Tt.split(".")[0])), V = E.filter((Tt) => !C.includes(Tt)), yt = (Tt) => Tt.startsWith("vacuum.") && Ut(Tt).battery_level != null ? Ut(Tt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (F ? '<div class="tfMoreGroupName">' + j(F) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Tt) => un(Tt, !0)).join("") + V.map((Tt) => uo(Tt, { plain: X, alert: T, say: X ? yt(Tt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const E = Zi().find((C) => C.key === t.slice(8));
      if (!E) return null;
      const F = E.key === "light" ? (E.groups || []).flatMap((C) => C.ids) : [], T = F.some((C) => {
        var V;
        return ((V = k[C]) == null ? void 0 : V.state) === "on";
      }), X = F.length ? '<button class="primary" type="button" data-acts="' + ur(F.map((C) => ["light", T ? "turn_off" : "turn_on", C])) + '">' + (T ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(E.name), '<div class="tfMoreNowRow">' + a(E.value) + X + "</div>", ...(E.groups || []).map((C) => s(C.ids, { name: C.name === E.name ? "" : C.name, alert: C.alert, plain: E.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, E, F] = t.split(":"), T = jt.rooms.find((V) => V.id === E), X = T && H(T).find((V) => V.key === F);
      if (!X) return null;
      const C = X.acts ? '<button class="primary" type="button" data-acts="' + ur(X.acts) + '">' + (X.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(T.name + " " + X.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(X.value) + C + "</div>", s(W(T, F))];
    }
    const p = t.split(".")[0];
    k[t];
    const d = Rr.includes(p) || Ci.includes(p) ? w(t) : Wl(t), u = dm(t), h = [...u ? u.pages.map((E) => ({ name: E.name, svg: E.svg, tabs: E.tabs, html: E.space + '<div class="tfMoreCtl"' + Do(t).replace(" data-light", "") + ">" + E.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: oa, ...wn(t) ? { tabs: Qd() } : {}, html: Zh(t) + (wn(t) ? ls(t) : "") + (p === "plant" ? bm(t).join("") : "") + d.sections.filter(Boolean).join("") }], { name: "Info", svg: Dc, html: fm(t) }];
    q && q.page == null && (q.page = 0), q && (q.pages = h.length);
    const y = (q == null ? void 0 : q.page) || 0, A = (q == null ? void 0 : q.mode) || "", M = h.length - 1, R = !!(u != null && u.infoButton), B = h.flatMap((E, F) => (R && F === M ? [] : E.tabs || [{ name: E.name, svg: E.svg }]).map((T) => ({ ...T, page: F }))), G = (E) => E.page === y && (E.mode == null || E.mode === A);
    return [
      Uh(t, d),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (A && y === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + h.map((E) => '<section class="tfMorePage" aria-label="' + E.name + '" data-mode="' + A + '">' + E.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (R ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (B.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (R ? "Views" : "Pages") + '">' + B.map((E) => '<button type="button" role="tab" aria-selected="' + G(E) + '" aria-label="' + E.name + '" title="' + E.name + '" data-more-page="' + E.page + '"' + (E.mode != null ? ' data-more-mode="' + E.mode + '"' : "") + (G(E) ? "" : ' tabindex="-1"') + ">" + E.svg + "</button>").join("") + "</div>" : "") + (R ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (y === M) + '" data-more-page="' + M + '" data-more-toggle>' + Dc + "</button></div>" : "")
    ];
  }
  const $h = (t, e) => {
    const a = t.split(".")[0], r = k[t], s = r.attributes;
    if (a === "light") return Oe(t);
    const p = a === "climate" ? zt(s.hvac_action || r.state) : a === "humidifier" ? zt(s.action || r.state) : a === "water_heater" ? zt(s.operation_mode || r.state) : a === "fan" && r.state === "on" && s.percentage != null ? s.percentage + "%" : (a === "valve" || a === "cover") && s.current_position != null && r.state !== "closed" ? s.current_position + "%" : Oe(t);
    return [e, p].filter(Boolean).join(" · ");
  };
  function Uh(t, e, a) {
    var d, u, h, y, A;
    const r = (d = jt.areaOf) == null ? void 0 : d.call(jt, t), s = r && (((u = jt.rooms.find((M) => M.id === r)) == null ? void 0 : u.name) || ((A = (y = (h = i()) == null ? void 0 : h.areas) == null ? void 0 : y[r]) == null ? void 0 : A.name)) || "", p = e.button ? ka(t, e) : '<div class="tfIcon"' + we(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + (q != null && q.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Su + "</button>" : "") + p + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + j(vt(t)) + '</span><span class="activityRowMeta">' + j($h(t, s)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Ac + "</button></div>";
  }
  const Yh = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Wl(t) {
    var s;
    const e = t.split(".")[0], a = ((s = k[t]) == null ? void 0 : s.state) === "on", r = Ci.includes(e) ? { act: Ht(e, "toggle", t), label: "Turn " + vt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Ht(e, "turn_on", t), label: "Run " + vt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ea(t) };
  }
  function Zh(t) {
    const e = t.split(".")[0];
    if (Yh.includes(e) || e === "light" && !gr(t)) {
      const s = Rr.includes(e) ? w(t) : Wl(t);
      return s != null && s.button ? '<div class="tfMoreSpace tfMoreSwitch' + (s.on ? " on" : "") + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + Do(t) + ">" + ka(t, s) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + j(t) + '"></div></div>';
    if (e === "light" && gr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + j(t) + '"></div></div>';
    const { big: a, lines: r } = um(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (m("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + j(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + j(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([s, p]) => '<div class="tfMoreFact"><span>' + j(s) + "</span><span>" + j(p) + "</span></div>").join("") + "</div></div>";
  }
  const Kh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Xh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Jh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], go = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + j(t) + "</div>" + e + "</div>", Oa = (t, e) => Ge("tfSeg", t, e), Vl = (t, e, a, r, s, p) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + j(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + j(s) + '" data-drag="' + j(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + j(s) + "</output></i>" + (p ? '<span class="tfBarIcon"' + we("", p, r) + "></span>" : "") + "</div>", Cr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Do(t) + ">" + ka(t, e) + "</div>", jl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + j(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + j(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, s]) => '<div class="tfMoreFact"><span>' + j(r) + "</span><span>" + j(s) + "</span></div>").join("") + "</div></div>", Zd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + j((q == null ? void 0 : q.code) || "") + '">', ss = (t, e, a, r, s) => ({ label: r, pressed: s, html: null, coded: [t, e, a].join("|") }), Kd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + j(t) + '">' + e.map((a) => '<button type="button" data-coded="' + j(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + j(a.label) + "</button>").join("") + "</div>", Xd = (t, e, a) => Oa(vt(t), [{ label: "Off", act: Ht(e, "turn_off", t), pressed: !a }, { label: "On", act: Ht(e, "turn_on", t), pressed: a }]), bn = /* @__PURE__ */ new Map(), Qh = [0, 33, 67, 100], tm = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function wn(t, e = "phys") {
    if (!L || !k[t]) return null;
    const a = t.split(".")[0], r = k[t].attributes, s = O === "rocker" ? "rocker" : "toggle";
    return a === "light" ? e === "physon" ? s : Dn(t).some((p) => p !== "onoff") ? "lightdial" : s : a === "climate" ? Number.isFinite(Number(r.temperature)) ? "dial" : null : a === "fan" ? r.percentage != null ? "rotary" : s : ["switch", "input_boolean", "lock", "automation", "siren"].includes(a) ? s : a === "cover" ? r.current_position == null ? s : null : a === "valve" ? "guarded" : a === "scene" || a === "script" || a === "button" ? "push" : null;
  }
  const ls = (t, e = "phys") => '<div class="tfMoreSpace tfPhys" data-pv="' + e + '" data-phys="' + j(t) + '"></div>', zl = (t) => {
    const e = t.split(".")[0], a = k[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Jd = (t, e, a) => (t === "lock" ? je("lock", a ? "lock" : "unlock", e) : t === "cover" ? je("cover", a ? "open_cover" : "close_cover", e) : je(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), em = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], am = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', Qd = (t) => [{ name: "Physical", svg: am, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: oa, mode: "" }]], om = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function bi(t, e) {
    const a = k[t], r = a.attributes, s = a.state === "on";
    return e === "fader" ? [s ? Ga(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [s ? om(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [zl(t)];
  }
  function nm(t, e, a = "phys") {
    const r = document.createElement("div");
    r.className = "tfMoreSpace tfPhys";
    const s = t.split(".")[0], p = k[t].attributes, d = { id: t, kind: e, pv: a, el: r, quiet: 0, timers: {} }, u = (R, B = 260, G = "one") => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timers[G]), d.timers[G] = setTimeout(R, B);
    }, h = { camera: _, fill: P === "fill", label: vt(t) };
    if (e === "push" && (d.ctl = new vg(r, { ...h, onChange: () => je(s, s === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new bu(r, { ...h, on: zl(t), onChange: (R) => u(() => Jd(s, t, R), 0) })), e === "toggle" && (d.ctl = new _c(r, { ...h, on: zl(t), labels: em(s), onChange: (R) => u(() => Jd(s, t, R), 0) })), e === "lightdial") {
      const R = np(r, h, t, (B, G) => u(() => rm(t, B, G).catch(() => {
      }), B === "bright" ? 260 : 300, B));
      d.ctls = R.ctls, d.sync = R.sync;
    }
    if (e === "fader" && (d.ctl = new yg(r, { ...h, value: bi(t, e)[0], onChange: (R) => u(() => (Math.round(R * 100) ? je("light", "turn_on", t, { brightness_pct: Math.round(R * 100) }) : je("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [R, B] = bi(t, e), G = Number(p.min_temp), E = Number(p.max_temp);
      d.ctl = new Sc(r, { ...h, value: R, now: B ?? R, min: Number.isFinite(G) ? G : 7, max: Number.isFinite(E) ? E : 35, onChange: (F) => u(() => je("climate", "set_temperature", t, { temperature: F }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new xg(r, { ...h, positions: tm, index: bi(t, e)[0], onChange: (R) => u(() => (R ? je("fan", "set_percentage", t, { percentage: Qh[R] }) : je("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new kg(r, { ...h, on: bi(t, e)[0], onChange: (R) => u(() => je("valve", R ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) })), d.ctls || (d.ctls = [d.ctl], d.sync = () => d.ctl.show(...bi(t, e))), d.fit = () => d.ctls.forEach((R) => {
      const B = R.svg.parentElement.getBoundingClientRect();
      R.setBox(B.width, B.height);
    });
    const y = new ResizeObserver(d.fit);
    d.ctls.forEach((R) => y.observe(R.svg.parentElement)), d.ro = y;
    const A = "phys|" + t;
    r.addEventListener("pointerdown", () => {
      ne.add(A), fa(A);
    });
    const M = () => {
      ne.has(A) && (ne.delete(A), La && Ee());
    };
    return r.addEventListener("pointerup", M), r.addEventListener("pointercancel", M), d;
  }
  function tp(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = e.dataset.pv || "phys", s = wn(a, r), p = a + "|" + r;
      if (!s) {
        e.remove();
        return;
      }
      let d = bn.get(p);
      (!d || d.kind !== s) && (d = nm(a, s, r), bn.set(p, d)), d.el.dataset.pv = r, e.replaceWith(d.el), d.fit(), ep(d);
    });
  }
  function ep(t) {
    !k[t.id] || performance.now() < t.quiet || t.sync();
  }
  const ap = () => {
    bn.forEach((t, e) => {
      var a;
      t.el.isConnected ? ep(t) : ((a = t.ro) == null || a.disconnect(), bn.delete(e));
    });
  }, op = {
    bright: () => ({ min: 0, max: 100, step: 1, tick: 2, major: 25, now: 0, labelOf: (t) => t % 50 === 0 ? t + "%" : null, title: "Brightness" }),
    colour: () => ({ min: 0, max: 360, step: 5, tick: 10, major: 3, tint: (t) => "hsl(" + t + ",100%,55%)", labelOf: () => null, title: "Colour" }),
    warm: (t) => {
      const [e, a] = ln(t);
      return { min: e, max: a, step: 50, tick: 100, major: 5, tint: cm, labelOf: (r) => r % 1e3 === 0 ? r / 1e3 + "k" : null, title: "Warmth" };
    }
  };
  function np(t, e, a, r) {
    const s = a ? Dn(a) : ["hs", "color_temp"], p = s.some((E) => Ao.includes(E)), d = s.includes("color_temp"), u = (E) => {
      if (!a) return { bright: 64, colour: 30, warm: 3e3 }[E];
      const [F, , T, X] = lm(a);
      return E === "bright" ? Math.round(F * 100) : E === "colour" ? T ?? 30 : X ?? Math.round(ln(a).reduce((C, V) => C + V) / 2);
    };
    let h = p ? "colour" : d ? "warm" : null, y = "bright";
    const A = (E) => ({ ...op[E](a), label: (e.label || "Light") + " " + op[E](a).title.toLowerCase() }), M = document.createElement("div");
    M.className = "tfPhysLightDial", t.appendChild(M);
    const R = document.createElement("div");
    R.className = "tfPhysCell dial", M.appendChild(R);
    const B = new Sc(R, {
      ...e,
      ...A("bright"),
      value: u("bright"),
      onChange: (E) => r(y, E),
      onPress: () => {
        h && (y = y === "bright" ? h : "bright", B.setConfig(A(y), u(y)));
      }
    }), G = [B];
    if (p && d) {
      const E = document.createElement("div");
      E.className = "tfPhysCell mini", M.appendChild(E);
      const F = new _c(E, {
        ...e,
        label: "Dial sets colour or white",
        on: !0,
        labels: ["Colour", "White"],
        textSize: 11,
        onChange: (T) => {
          h = T ? "colour" : "warm", y !== "bright" && (y = h, B.setConfig(A(y), u(y)));
        }
      });
      G.push(F);
    }
    return { ctls: G, sync: () => {
      a && B.show(u(y));
    } };
  }
  const rm = (t, e, a) => {
    var r;
    return e === "bright" ? a ? je("light", "turn_on", t, { brightness_pct: a }) : je("light", "turn_off", t) : e === "colour" ? je("light", "turn_on", t, { hs_color: [a % 360, ((r = k[t].attributes.hs_color) == null ? void 0 : r[1]) || 100] }) : je("light", "turn_on", t, { color_temp_kelvin: a });
  }, im = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Zm0 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-1 2h2v5h-2Z"/></svg>', sm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Zm5-11h2v10h-2Zm1-2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"/></svg>', lm = (t) => {
    const e = k[t], a = e.attributes, r = e.state === "on", s = a.hs_color ? Math.round(a.hs_color[0] / 5) * 5 : null, p = a.color_temp_kelvin ? Math.round(a.color_temp_kelvin / 50) * 50 : null;
    return [Ga(e) / 100, r, s, p];
  }, cm = (t) => {
    const e = t / 100, a = (d) => Math.max(0, Math.min(255, Math.round(d))), r = e <= 66 ? 255 : 329.698727446 * Math.pow(e - 60, -0.1332047592), s = e <= 66 ? 99.4708025861 * Math.log(e) - 161.1195681661 : 288.1221695283 * Math.pow(e - 60, -0.0755148492), p = e >= 66 ? 255 : e <= 19 ? 0 : 138.5177312231 * Math.log(e - 10) - 305.0447927307;
    return "rgb(" + a(r) + "," + a(s) + "," + a(p) + ")";
  };
  function dm(t) {
    const e = pm(t);
    if (e && wn(t) && t.startsWith("light.") && wn(t) === "lightdial") {
      const a = e.pages[0].tabs || [], r = (s) => a.find((p) => p.mode === s);
      e.pages[0].space += ls(t, "phys") + ls(t, "physon"), e.pages[0].tabs = [{ name: "Dial", svg: im, mode: "phys" }, { name: "On and off", svg: sm, mode: "physon" }, r("dac"), r("") || { name: "Sliders", svg: oa, mode: "" }, r("colour")].filter(Boolean);
    } else e && wn(t) && (e.pages[0].space += ls(t), e.pages[0].tabs = Qd(e.pages[0].tabs));
    return e;
  }
  function pm(t) {
    var p, d, u;
    const e = t.split(".")[0], a = k[t], r = a.attributes;
    if (!Jh.includes(e)) return null;
    const s = Rr.includes(e) || Ci.includes(e) ? w(t) : Wl(t);
    if (e === "light") {
      const h = a.state === "on", y = Dn(t), [A, M] = ln(t), R = m("bright", t, h ? Ga(a) : 0), B = m("ctf", t, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), G = m("huev", t, h && Ao.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), E = y.includes("color_temp"), F = y.some((Qt) => Ao.includes(Qt)), T = gr(t), X = (Qt, me, fe, ye) => '<div class="tfBar tfVBar ' + Qt + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + j(vt(t) + " " + me.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(fe) + '" data-drag="' + Qt + "|" + j(t) + '">' + ye + "</div>", C = (Qt, me, fe = "") => '<div class="tfVCol' + fe + '">' + me + "</div>", V = C("Brightness", X("bright", "Brightness", R, '<i style="height:' + R + '%"></i><span class="tfBarIcon"' + we("", "mdi:white-balance-sunny", "Brightness") + "></span>")), yt = B == null ? null : (M - B) / (M - A), Tt = E ? C("Warmth", X("ctf", "Warmth", yt == null ? 0 : yt * 100, yt == null ? "" : '<b style="top:' + Math.round((1 - yt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Nt = F ? C("Colour", X("huev", "Colour", G == null ? 0 : (1 - G / 360) * 100, G == null ? "" : '<b style="top:' + Math.round(G / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", At = '<div class="tfVCols">' + V + (Tt || Nt ? '<div class="tfVSwap">' + Tt + Nt + "</div>" : "") + "</div>", ft = T ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + j(t) + '"></div></div>' : "", Lt = [F && { name: "Colour", svg: Kh, mode: "colour" }, T && { name: "Dual Axis Controller", svg: Xh, mode: "dac" }, { name: "Sliders", svg: oa, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: oa, space: '<div class="tfMoreSpace tfLightSpace">' + At + ft + "</div>", rows: [], tabs: Lt.length > 1 ? Lt : [] }] };
    }
    if (e === "climate") {
      const h = r.target_temp_step || 0.5, y = Number(r.temperature), A = Number(r.target_temp_low), M = Number(r.target_temp_high), R = (F) => Ht("climate", "set_temperature", t, F), B = (F, T, X, C, V) => (T == null ? void 0 : T.length) && go(F, Oa(F, T.map((yt) => ({ label: zt(yt), act: Ht("climate", C, t, { [V]: yt }), pressed: (X === "state" ? a.state : r[X]) === yt })))), G = Number.isFinite(A) && Number.isFinite(M) && go("Range", '<div class="tfMoreRange">' + ha("Low", Fe(A) + " °C", R({ target_temp_low: A - h, target_temp_high: M }), R({ target_temp_low: A + h, target_temp_high: M })) + ha("High", Fe(M) + " °C", R({ target_temp_low: A, target_temp_high: M - h }), R({ target_temp_low: A, target_temp_high: M + h })) + "</div>"), E = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: oa,
        space: jl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(y) ? Fe(y) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(y) && ha("Target temperature", Fe(y) + " °C", R({ temperature: y - h }), R({ temperature: y + h })),
          G,
          B("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          B("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          B("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          B("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(E) && r.min_humidity != null && go("Humidity", ha("Target humidity", E + "%", Ht("climate", "set_humidity", t, { humidity: E - 1 }), Ht("climate", "set_humidity", t, { humidity: E + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const h = a.state === "on", y = m("fan", t, h && Number(r.percentage) || 0), A = r.percentage != null;
      return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: A ? [
        Vl("fan", t, y, vt(t) + " speed", y + "%", "mdi:fan"),
        r.oscillating != null && go("Oscillate", Oa("Oscillate", [{ label: "Off", act: Ht("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Ht("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && go("Direction", Oa("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([M, R]) => ({ label: R, act: Ht("fan", "set_direction", t, { direction: M }), pressed: r.direction === M })))),
        ((p = r.preset_modes) == null ? void 0 : p.length) && go("Preset", Oa("Preset", r.preset_modes.map((M) => ({ label: zt(M), act: Ht("fan", "set_preset_mode", t, { preset_mode: M }), pressed: r.preset_mode === M }))))
      ] : [Xd(t, "fan", h)] }] };
    }
    if (e === "humidifier") {
      const h = Number(r.humidity);
      return { pages: [{ name: "Control", svg: oa, space: jl(String(r.current_humidity), "%", [["Target", Number.isFinite(h) ? h + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(h) && ha("Target humidity", h + "%", Ht("humidifier", "set_humidity", t, { humidity: h - 1 }), Ht("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((d = r.available_modes) == null ? void 0 : d.length) && go("Mode", Oa("Mode", r.available_modes.map((y) => ({ label: zt(y), act: Ht("humidifier", "set_mode", t, { mode: y }), pressed: r.mode === y }))))
      ] }] };
    }
    if (e === "water_heater") {
      const h = Number(r.temperature), y = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: oa, space: jl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(h) ? String(h).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(h) && ha("Target temperature", h + " °C", Ht("water_heater", "set_temperature", t, { temperature: h - y }), Ht("water_heater", "set_temperature", t, { temperature: h + y })),
        ((u = r.operation_list) == null ? void 0 : u.length) && go("Mode", Oa("Mode", r.operation_list.map((A) => ({ label: zt(A), act: Ht("water_heater", "set_operation_mode", t, { operation_mode: A }), pressed: (r.operation_mode || a.state) === A })))),
        r.away_mode != null && go("Away", Oa("Away", [{ label: "Off", act: Ht("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Ht("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const h = [...Wu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , M]) => !M || be(t, M)), y = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], A = '<div class="tfMoreSpace tfMoreKeypad">' + Zd() + '<div class="tfKeypad">' + y.map((M) => '<button type="button" data-key="' + M + '"' + (M === "back" ? ' aria-label="Delete"' : "") + ">" + (M === "clear" ? "Clear" : M === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : M) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: oa, space: A, rows: [Kd(vt(t), h.map(([M, R, B]) => ss("alarm_control_panel", B, t, R, a.state === M)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: [Oa(vt(t), [{ label: "Open", act: Ht("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Ht("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const h = a.state === "opening" || a.state === "closing", y = En(t), A = Ur(t);
      return { pages: [{ name: "Control", svg: oa, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + j(t) + '"></div></div>', rows: [
        be(t, Lc) && ei(t, y),
        A != null && go("Tilt", Vl("tiltp", t, m("tiltp", t, A), vt(t) + " tilt", Math.round(m("tiltp", t, A)) + "%")),
        Oa(vt(t), [be(t, Du) && { label: "Open", act: Ht("cover", "open_cover", t), disabled: y >= 100 && !h }, be(t, Bu) && { label: "Stop", act: Ht("cover", "stop_cover", t) }, be(t, Eu) && { label: "Close", act: Ht("cover", "close_cover", t), disabled: y <= 0 && !h }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: [
        Zd(),
        Kd(vt(t), [ss("lock", "lock", t, "Lock", a.state === "locked"), ss("lock", "unlock", t, "Unlock", a.state === "unlocked"), be(t, qu) && ss("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const h = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: [Oa(vt(t), [{ label: "Open", act: Ht("valve", "open_valve", t), pressed: h }, { label: "Close", act: Ht("valve", "close_valve", t), pressed: !h }])] }] };
      const y = m("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: [
        Vl("valve", t, y, vt(t) + " position", Math.round(y) + "%", "mdi:valve"),
        Oa(vt(t), [{ label: "Open", act: Ht("valve", "open_valve", t) }, be(t, 8) && { label: "Stop", act: Ht("valve", "stop_valve", t) }, { label: "Close", act: Ht("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: oa, space: Cr(t, s), rows: [Xd(t, e, a.state === "on")] }] };
  }
  function um(t) {
    var A;
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = (((A = _r[r]) == null ? void 0 : A.call(_r, a)) || []).filter(([, M]) => M != null && M !== ""), p = (M) => {
      const R = s.findIndex(([B]) => B === M);
      return R < 0 ? null : s.splice(R, 1)[0][1];
    }, d = (M) => {
      const R = String(M).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(M), ""];
    }, u = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    r === "light" ? (p("Brightness"), h = e.state === "on" && Eo(t) ? [String(Ga(e)), "%"] : u()) : r === "climate" ? h = d(p("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (p("Position"), h = a.current_position != null ? [String(Ua(t)), "%"] : u()) : r === "humidifier" ? h = d(p("Current humidity") || e.state) : r === "vacuum" ? h = d(p("Battery") || e.state) : r === "plant" ? h = d(p("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? h = u() : h = d(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const y = s.length ? s.slice(0, 4) : [["State", Oe(t)]];
    return { big: h, lines: y };
  }
  function fm(t) {
    var y, A, M, R, B, G, E;
    const e = k[t], a = i(), r = (y = a == null ? void 0 : a.entities) == null ? void 0 : y[t], s = r != null && r.device_id ? (A = a == null ? void 0 : a.devices) == null ? void 0 : A[r.device_id] : null, p = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + j(t) + '" role="img" aria-label="' + j(vt(t)) + ', last 24 hours"></svg></div>', d = (M = jt.areaOf) == null ? void 0 : M.call(jt, t), u = d && (((R = jt.rooms.find((F) => F.id === d)) == null ? void 0 : R.name) || ((G = (B = a == null ? void 0 : a.areas) == null ? void 0 : B[d]) == null ? void 0 : G.name)) || "", h = [
      ...((E = _r[t.split(".")[0]]) == null ? void 0 : E.call(_r, Ut(t))) || [],
      ["Changed", e.last_changed && Ys(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", s && (s.name_by_user || s.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, F]) => F != null && F !== "");
    return p + '<div class="tfMoreRows">' + h.map(([F, T]) => '<div class="tfMoreRow"><span>' + j(F) + "</span><span>" + j(T) + "</span></div>").join("") + "</div>" + Wh(t) + (s ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + j(r.device_id) + '"><span>Device page</span>' + Ec + "</button>" : "");
  }
  const hm = () => "";
  let Gl = "";
  function $l(t) {
    var e;
    q && (q.details = t, Ar(), (e = St.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const cs = (t) => {
    const e = k[t], a = Ua(t), r = En(t);
    return { kind: kc(e), name: vt(t), text: Oe(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Ur(t) ?? 100, canSet: be(t, Lc) };
  };
  function Ul(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, r = e.dataset.artKey || "more:" + a;
      let s = Ke.get(r);
      s || (s = dg({ onMove: (p) => wi(a, p), onSet: (p) => {
        wi(a, p), vi("pos", a);
      } }), s.coverId = a, Ke.set(r, s)), e.replaceWith(s.el), s.update(cs(a));
    });
  }
  const rp = (t) => [...Ke.values()].filter((e) => e.coverId === t), Yl = () => Ke.forEach((t) => {
    k[t.coverId] && t.update(cs(t.coverId));
  }), ip = () => {
    Ke.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ke.delete(e));
    }), Yl();
  };
  function Ar() {
    var p, d;
    if (!q || !(zh(q.id) || k[q.id])) {
      St.hidden = !0;
      return;
    }
    if (So().some((u) => u.endsWith("|" + q.id))) {
      La = !0, Yl();
      return;
    }
    const t = Gh(q.id), e = St.querySelector(".tfMore");
    if (!t) {
      us();
      return;
    }
    const a = $d(St), r = hm(q.id), s = q.frame ? q.frame.wide : q.id.startsWith("summary:") || q.id.startsWith("group:");
    if (St.hidden || !e || t.length !== mo.length || e.classList.contains("wide") !== s) {
      const u = Xl ? q.scroll || 0 : !St.hidden && e ? e.scrollTop : 0;
      if (St.innerHTML = '<div class="tfMorePair' + (St.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (s ? " wide" : "") + '"' + (q.frame ? ' style="height:' + q.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Gl = r, St.classList.toggle("wide", s), St.hidden = !1, ql(), Ul(St), tp(St), Nn(St), lo(St), St.querySelectorAll("[data-day]").forEach((h) => up(h.dataset.day, h, q.at)), cp(St), u && (St.querySelector(".tfMore").scrollTop = u), sp(), Ol(St, a), !St.contains(o.activeElement)) {
        const h = St.querySelector("[data-more-close]");
        (p = h != null && h.offsetParent ? h : St.querySelector(".tfMore")) == null || p.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, h) => {
        var R, B;
        if (u === mo[h] || u.includes("data-cover-art") || e.children[h].contains((B = (R = o.activeElement) == null ? void 0 : R.matches) != null && B.call(R, "input,select") ? o.activeElement : null)) return;
        if (So().some((G) => e.children[h].querySelector('[data-drag="' + CSS.escape(G) + '"]'))) {
          La = !0;
          return;
        }
        const y = document.createElement("div");
        y.innerHTML = u;
        const A = [...e.children[h].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((G) => G.scrollTop), M = Il(e.children[h], y.firstElementChild);
        M.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((G, E) => {
          A[E] && (G.scrollTop = A[E]);
        }), lo(M), cp(M), tp(M), Nn(M);
      }), r !== Gl) {
        const u = St.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = r), Gl = r;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || up(u.dataset.day, u, q.at);
      }), sp(), St.contains(o.activeElement) || Ol(St, a);
    }
    (d = St.querySelector(".tfMorePair")) == null || d.classList.toggle("details", !!(q.details && r)), mo = t, Yl();
  }
  function sp() {
    const t = St.querySelector("[data-more-pages]");
    !t || !q || (t.scrollTo({ left: (q.page || 0) * t.clientWidth, behavior: "instant" }), Kl(), Zl(t));
  }
  function Zl(t) {
    const e = t.children[(q == null ? void 0 : q.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Kl() {
    var e;
    const t = (q == null ? void 0 : q.page) || 0;
    St.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (q.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = St.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!q.mode && t === 0);
  }
  function mm(t, e) {
    var r, s;
    const a = St.querySelector("[data-more-pages]");
    !a || !q || (q.page = Math.max(0, Math.min((q.pages || 2) - 1, t)), a.scrollTo({ left: q.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Kl(), Zl(a), e && ((s = St.querySelector('.tfMoreDots [aria-selected="true"]')) == null || s.focus({ preventScroll: !0 })));
  }
  function ds(t, e, a) {
    q && (e != null && e !== (q.mode || "") && (q.mode = e, St.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), mm(t, a));
  }
  let Lr = null;
  St.addEventListener("touchstart", (t) => {
    var a, r, s, p;
    const e = t.touches[0];
    Lr = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((p = (s = t.target).closest) != null && p.call(s, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), St.addEventListener("touchend", (t) => {
    if (!Lr || !q || (q.page || 0) !== 0 || !St.querySelector("[data-more-mode]")) {
      Lr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Lr.x, r = e.clientY - Lr.y;
    if (Lr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const s = [...St.querySelectorAll(".tfMoreDots [data-more-mode]")].map((d) => d.dataset.moreMode), p = s.indexOf(q.mode || "");
    a > 0 && p > 0 ? ds(0, s[p - 1]) : a < 0 && q.mode && p < s.length - 1 && ds(0, s[p + 1]);
  }, { passive: !0 });
  let lp = 0;
  St.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !q || (clearTimeout(lp), lp = setTimeout(() => {
      if (!q) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (q.page || 0) && (q.page = r, Kl(), Zl(e));
    }, 80));
  }, !0), St.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && q && (q.code = t.target.value);
  }), St.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!q || !(e || a)) return;
    const r = St.querySelector("[data-code]");
    if (e) {
      const h = e.dataset.key, y = q.code || "";
      q.code = h === "clear" ? "" : h === "back" ? y.slice(0, -1) : (y + h).slice(0, 12), r && (r.value = q.code);
      return;
    }
    const [s, p, d] = a.dataset.coded.split("|"), u = q.code;
    q.code = "", r && (r.value = ""), je(s, p, d, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    q && Ar();
  }, 15 * 1e3);
  function ps(t, e) {
    var s, p;
    const a = !!(q && e && St.contains(e)), r = a && St.querySelector(".tfMore");
    if (a && (q.scroll = r.scrollTop), a && !q.under) {
      const d = St.querySelector(".tfMorePair"), u = { more: q, parts: mo, opener: e };
      d.classList.add("still"), d.style.transform = "", d.inert = !0, to.innerHTML = "", to.appendChild(d), to.classList.toggle("wide", St.classList.contains("wide")), to.hidden = !1, St.hidden = !0, St.innerHTML = "", q = { id: t, opener: e, back: null, frame: null, under: u, at: Number((s = e == null ? void 0 : e.dataset) == null ? void 0 : s.at) || null, mode: wn(t) ? "phys" : "" }, Jl();
      return;
    }
    q = { id: t, opener: a ? q.opener : e, back: a ? q : null, frame: a ? q.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? q.under : null, at: Number((p = e == null ? void 0 : e.dataset) == null ? void 0 : p.at) || null, mode: wn(t) ? "phys" : "" }, Jl();
  }
  let Xl = !1;
  function Jl() {
    mo = [], Xl = !St.hidden, Ke.forEach((t, e) => {
      e !== q.id && St.contains(t.el) && (t.destroy(), Ke.delete(e));
    }), Ar(), Xl = !1;
  }
  function us() {
    if (!q) return;
    const t = q;
    Z0(St, () => {
      q === t && Ql();
    });
  }
  function Ql() {
    var r, s, p, d, u, h, y, A;
    const t = q == null ? void 0 : q.opener, e = q == null ? void 0 : q.under;
    q = null, Ke.forEach((M, R) => {
      St.contains(M.el) && (M.destroy(), Ke.delete(R));
    }), ta.forEach((M, R) => {
      /^more2?:/.test(R) && ta.delete(R);
    }), St.hidden = !0, St.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const M = to.firstElementChild;
      q = e.more, mo = e.parts, M && (M.inert = !1, St.appendChild(M)), St.classList.toggle("wide", to.classList.contains("wide")), to.hidden = !0, to.innerHTML = "", St.hidden = !1;
      const R = St.querySelector(".tfMore");
      R && (R.scrollTop = q.scroll || 0), Ar(), (s = (r = e.opener) != null && r.isConnected ? e.opener : St.querySelector("[data-more-close]")) == null || s.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.more ? (d = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((A = S.querySelector("[data-favs-edit]")) == null || A.focus(a));
  }
  const gm = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function bm(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, s]) => {
      const p = gm[r], d = a + p;
      if (!p || !k[d] || !Qn[p]) return "";
      const u = Ut(d).unit_of_measurement || "", [h, y] = Qn[p], A = s === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + j(vt(d)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + j(d) + '" data-guide="' + (A ? h : y) + '" data-guide-word="' + j("Wants " + (A ? "" : "up to ") + (A ? h : y).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (A ? " or more" : "")) + '" role="img" aria-label="' + j(vt(d)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const cp = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => hp(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Qc(e)));
  function tc(t, e, a, r = {}) {
    const s = e.map((F) => F[1]).concat(r.guide != null ? [r.guide] : []), p = r.zero ? 0 : Math.min(...s), d = Math.max(...s), u = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), y = 8, A = h - 20, M = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, B = (F) => Math.max(0, Math.min(u, (F - M) / R * u)), G = (F) => d === p ? (y + A) / 2 : A - (F - p) / (d - p) * (A - y);
    let E = "M" + B(e[0][0]).toFixed(1) + " " + G(e[0][1]).toFixed(1);
    if (e.length > 2) E = lf(e.map((F) => [B(F[0]), G(F[1])]));
    else for (let F = 1; F < e.length; F++) E += r.smooth ? "L" + B(e[F][0]).toFixed(1) + " " + G(e[F][1]).toFixed(1) : "H" + B(e[F][0]).toFixed(1) + "V" + G(e[F][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + h), t.setAttribute("aria-label", a), t.innerHTML = cf(u, y, A) + '<path d="' + E + "V" + A + "H" + B(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + E + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Pe.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + u + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + G(r.guide).toFixed(1) + '" y2="' + G(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (G(r.guide) < 20 ? G(r.guide) + 14 : G(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + j(r.guideWord || "") + "</text>" : "");
  }
  const dp = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, wm = (t, e) => {
    const a = t.split(".")[0];
    return dp[a] ? dp[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, vm = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ts.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, pp = /* @__PURE__ */ new Map();
  let ym = 0;
  async function xm(t) {
    var s;
    let e = pp.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let p = [];
      if (ao(t) && Number.isFinite(Number((s = k[t]) == null ? void 0 : s.state))) p = fp(t).map(([d, u]) => [d, String(u)]);
      else try {
        const d = await K({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((d == null ? void 0 : d[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      p.length || (p = (si || []).filter((d) => d.entity_id === t).map((d) => [d.when * 1e3, String(d.state)])), e = { at: Date.now(), pts: p }, pp.set(t, e);
    }
    const a = k[t], r = e.pts.slice().sort((p, d) => p[0] - d[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function up(t, e, a) {
    const r = await xm(t);
    if (!e.isConnected) return;
    const s = r.map(([C, V]) => [C, Number(V)]);
    if (r.length > 1 && s.every(([, C]) => Number.isFinite(C))) {
      tc(e, s, vt(t) + ", last 24 hours");
      return;
    }
    const p = Date.now(), d = p - 864e5, u = Math.max(200, e.clientWidth || 360), h = 62, y = (C) => Math.max(0, Math.min(u, (C - d) / 864e5 * u)), A = [];
    let M = null;
    r.forEach(([C, V]) => {
      const yt = wm(t, V);
      yt && M == null ? M = Math.max(C, d) : !yt && M != null && (A.push([M, Math.max(C, d)]), M = null);
    }), M != null && A.push([M, p]);
    const R = tl(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", B = vm(t), G = "tfDayClip" + ++ym, E = A.map(([C, V]) => B + (V >= p - 1e3 && C <= d + 1e3 ? " all day" : V >= p - 1e3 ? " since " + so(C) : C <= d + 1e3 ? " until " + so(V) : " " + so(C) + "–" + so(V)));
    let F = "", T = -1 / 0;
    A.forEach(([C], V) => {
      const yt = E[V].length * 5.4, Tt = Math.min(y(C), u - yt);
      Tt < T + 8 || (F += '<text x="' + Tt.toFixed(1) + '" y="10">' + j(E[V]) + "</text>", T = Tt + yt);
    });
    let X = '<text x="' + u + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let V = new Date(p).setHours(C, 0, 0, 0);
      V > p && (V -= 864e5), y(V) > 8 && y(V) < u - 34 && (X += '<text x="' + y(V).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + h), e.setAttribute("aria-label", vt(t) + ", last 24 hours: " + (E.length ? E.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + G + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + F + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + G + ')">' + A.map(([C, V]) => '<rect x="' + y(C).toFixed(1) + '" y="18" width="' + Math.max(2, y(V) - y(C)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= d ? '<line x1="' + y(a).toFixed(1) + '" x2="' + y(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + X;
  }
  function fp(t) {
    var r;
    const e = Number((r = k[t]) == null ? void 0 : r.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const s = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), p = Math.max(1, a - s);
      return [...Array(49)].map((d, u) => s + p * u / 48).map((d) => [d, Math.round(e * Math.pow((d - s) / p, 1.3) * 100) / 100]);
    }
    if (ao(t) && t.endsWith("_moisture")) return [...Array(48)].map((s, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - p / 48, 1.2)) * 10) / 10]);
    if (ao(t) && t.endsWith("_light")) {
      const s = (d) => {
        const u = new Date(d).getHours() + new Date(d).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, p = (d) => 0.8 + 0.2 * s(d);
      return [...Array(48)].map((d, u) => a - (48 - u) * 30 * 60 * 1e3).map((d) => [d, Math.round(e * p(d) / p(a))]);
    }
    return [...Array(48)].map((s, p) => [a - (48 - p) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(p / 6)) * 10) / 10]);
  }
  async function hp(t, e, a = {}) {
    var G, E;
    let r = gt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Tp() };
    else if (ao(t)) r = { at: Date.now(), points: fp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const F = new Date(Date.now() - 864e5).toISOString(), T = await K({ type: "history/history_during_period", start_time: F, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), X = ((T == null ? void 0 : T[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, V]) => Number.isFinite(C) && Number.isFinite(V));
        r = { at: Date.now(), points: X };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      gt.set(t, r);
    }
    const s = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const p = k[t], d = ((G = p == null ? void 0 : p.attributes) == null ? void 0 : G.unit_of_measurement) || "", u = r.points.slice(), h = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && u.push([Date.now(), h]), u.length < 2) {
      s.setAttribute("aria-label", vt(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((F) => F[1]), A = Math.min(...y), M = Math.max(...y), R = (F) => F.toLocaleString(void 0, { maximumFractionDigits: Math.abs(F) >= 100 ? 0 : 1 }), B = ((E = p == null ? void 0 : p.attributes) == null ? void 0 : E.state_class) === "total_increasing";
    tc(s, u, vt(t) + ", last 24 hours: " + (B ? "+" + R(y[y.length - 1] - y[0]) : A === M ? R(A) : R(A) + " to " + R(M)) + (d ? " " + d : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function mp() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const e = Tp();
    tc(t, e, "Solar, last 24 hours: up to " + Fe(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function km(t, e) {
    const a = e.entity_id, r = ge.get(a) || {}, s = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ua(a) > 0 ? 0 : 100 }[t], p = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    s != null && (r.pos = s), p != null && (r.tilt = p), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), ge.set(a, r);
  }
  function gp(t, e, a) {
    var s;
    const r = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof r != "string" || !co[r] || !Eo(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((s = k[r]) == null ? void 0 : s.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: co[r] }];
  }
  function je(t, e, a, r) {
    let s = { entity_id: a, ...r || {} };
    return [e, s] = gp(t, e, s), t === "cover" && km(e, s), Ln[a] = (Ln[a] || 0) + 1, We.set(Nu, JSON.stringify(Ln)), Hi.call(t, e, s) ? Promise.resolve() : Promise.resolve(tt(t, e, s));
  }
  function ec(t) {
    const [e, a, r, s] = t.split("|");
    je(e, a, r, s ? JSON.parse(s) : null).catch(() => {
    });
  }
  function wi(t, e) {
    Vt.set("pos|" + t, e), fa("pos|" + t), xa.delete(t), mo = mo.map(() => ""), [S, St].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((s) => mr(s, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (q == null ? void 0 : q.id) === t) {
      const r = St.querySelector(".tfMoreState"), s = St.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), s && (s.textContent = "Currently " + Ua(t) + "%");
    }
    rp(t).forEach((r) => r.update(cs(t)));
  }
  const Mm = (t, e) => {
    const a = t.shiftKey ? 10 : 1, r = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function Sm(t, e) {
    var E;
    const a = t.dataset.blocks;
    (E = t.setPointerCapture) == null || E.call(t, e.pointerId), ne.add("pos|" + a), R("pos|" + a);
    const r = (F) => {
      const T = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (F.clientX - T.left) / T.width * 100));
    }, s = r(e), p = e.clientX;
    let d = !1, u = En(a), h = s, y = 0;
    const A = () => {
      u = Math.abs(h - u) < 0.2 ? h : u + (h - u) * 0.14, wi(a, u), y = requestAnimationFrame(A);
    }, M = () => {
      d || (d = !0, t.classList.add("fine"), y = requestAnimationFrame(A));
    }, R = setTimeout(M, 350), B = (F) => {
      h = r(F), Math.abs(F.clientX - p) > 6 && (clearTimeout(R), M());
    }, G = () => {
      clearTimeout(R), cancelAnimationFrame(y), t.removeEventListener("pointermove", B), t.removeEventListener("pointerup", G), t.removeEventListener("pointercancel", G), t.classList.remove("fine"), ne.delete("pos|" + a), wi(a, d ? Math.round(u) : (Math.min(3, Math.floor(s / 25)) + 1) * 25), vi("pos", a);
    };
    t.addEventListener("pointermove", B), t.addEventListener("pointerup", G), t.addEventListener("pointercancel", G);
  }
  function bp(t) {
    var e;
    ot = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var s;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (s = a.querySelector(".panelExpanded")) == null || s.toggleAttribute("inert", !r);
    }), xa.set("areas", dt(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => pl(!0), 340);
  }
  function wp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === ot) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !Ve() ? a.cloneNode(!0) : null, s = _t().map((y) => y.id), p = s.indexOf(t) > s.indexOf(ot) ? 1 : -1;
    ot = t;
    const d = dt(e.style.order || 1);
    xa.set("areas", d), Ud(e, d);
    const u = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), h = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || Ve() || (u.style.setProperty("--dir", p), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), u.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(rn), rn = setTimeout(() => {
      rn = 0, La && Ee();
    }, 340)), h && (h.classList.add("tfAreaLand"), h.addEventListener("animationend", () => h.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const _m = 40;
  function Cm(t) {
    var u, h;
    if (t.pointerType === "mouse" || !t.isPrimary || !((h = (u = t.target).closest) != null && h.call(u, ".tfAreaStage")) || !pd.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let s = null;
    const p = (y) => {
      y.pointerId === r && !s && Math.hypot(y.clientX - e, y.clientY - a) >= Cn && (s = Math.abs(y.clientX - e) > Math.abs(y.clientY - a) ? "x" : "y");
    }, d = (y) => {
      if (y.pointerId !== r) return;
      removeEventListener("pointermove", p, !0), removeEventListener("pointerup", d, !0), removeEventListener("pointercancel", d, !0);
      const A = y.clientX - e;
      if (y.type !== "pointerup" || s !== "x" || Math.abs(A) < _m) return;
      const M = (G) => {
        G.stopPropagation(), G.preventDefault();
      };
      o.addEventListener("click", M, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", M, !0), 400);
      const R = _t(), B = R[R.findIndex((G) => G.id === ot) + (A < 0 ? 1 : -1)];
      B && wp(B.id);
    };
    addEventListener("pointermove", p, !0), addEventListener("pointerup", d, !0), addEventListener("pointercancel", d, !0);
  }
  const fs = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = ln(t);
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
      const [a, r] = ln(t);
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
  function hs(t, e, a, r) {
    var y;
    const s = fs[e].value(a, r);
    Vt.set(e + "|" + a, s), fa(e + "|" + a);
    const p = Math.round(r * 100) + "%", d = t.querySelector("i");
    if (e === "tilt") {
      d.style.width = "calc((100% - 8px) * " + r + ")";
      const [A, M] = t.querySelectorAll("span");
      A.classList.toggle("lit", r > 0.08), M.classList.toggle("lit", r > 0.92), xa.delete(a), mo = mo.map(() => ""), rp(a).forEach((R) => R.update(cs(a)));
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
    u && (u.textContent = fs[e].text(a, s));
    const h = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (y = t.closest(".tfAction")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta");
    h && (h.textContent = fs[e].text(a, s));
  }
  function vi(t, e) {
    const a = t + "|" + e, r = Vt.get(a), s = sa.get(a), [p, d, u] = fs[t].send(e, r), h = () => setTimeout(() => {
      sa.get(a) === s && Vt.delete(a), Ee();
    }, 1500);
    je(p, d, e, u).then(h, h);
  }
  function vp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (la && !e.target.closest(".tfBoardMenu,[data-board-more]") && fo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (la == null ? void 0 : la.key) === a.dataset.boardMore ? fo(!0) : mh(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) gh(la.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) wl(a.dataset.boardShow);
        else if (a.dataset.favHide) Ed(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Kc(a.dataset.energyPick);
        else if (a.dataset.areaPick) wp(a.dataset.areaPick);
        else if (a.dataset.act) ec(a.dataset.act);
        else if (a.hasAttribute("data-details")) $l(!(q != null && q.details));
        else if (a.hasAttribute("data-details-close")) $l(!1);
        else if (a.dataset.summary) zc(a.dataset.summary, a);
        else if (a.dataset.star) Vc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const s = q.id;
          q = q.back, Jl(), (r = St.querySelector('.tfMore [data-more="' + CSS.escape(s) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ps("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([s, p, d, u]) => je(s, p, d, u).catch(() => {
        })) : a.dataset.more ? ps(a.dataset.more, a) : a.hasAttribute("data-more-close") ? us() : a.dataset.morePage ? ds(a.hasAttribute("data-more-toggle") && ((q == null ? void 0 : q.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? jc(a.dataset.path) : a.dataset.go ? jd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Nl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && bp(a);
    }), t.addEventListener("keydown", (e) => {
      var r, s, p, d, u, h, y;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ps(a.dataset.more, a)), (s = a.dataset) != null && s.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Kc(a.dataset.energyPick)), (p = a.classList) != null && p.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), bp(a)), (d = a.dataset) != null && d.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), zc(a.dataset.summary, a)), e.key === "Escape" && la && t === S) {
        e.preventDefault(), fo(!0);
        return;
      }
      if (e.key === "Escape" && ma && t === S) {
        e.preventDefault(), bl(!1), (u = l("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && lt && t === S && (e.preventDefault(), Nl()), (h = a.dataset) != null && h.blocks) {
        const A = a.dataset.blocks, M = Mm(e, Math.round(En(A)));
        if (M == null) return;
        e.preventDefault(), wi(A, M), clearTimeout(Fr.get(A)), Fr.set(A, setTimeout(() => vi("pos", A), 500));
        return;
      }
      if ((y = a.dataset) != null && y.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [A, M] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, B = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        hs(a, A, M, B), vi(A, M);
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
      const [s, p] = r.dataset.drag.split("|"), d = s === "bright" && !Eo(p), u = e.pointerType !== "mouse";
      if (d && !u) {
        ec(Ht("light", "toggle", p));
        return;
      }
      const h = s === "bright" && ((Nt = k[p]) == null ? void 0 : Nt.state) !== "on", y = s + "|" + p;
      ne.add(y), fa(y);
      const A = s === "tilt" ? 4 : 0, M = r.dataset.axis === "y", R = () => M ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - A * 2, B = (At) => {
        const ft = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, M ? 1 - (At.clientY - ft.top) / R() : (At.clientX - ft.left - A) / R()));
      };
      let G = u ? "waiting" : h ? "pressed" : "dragging", E = 0;
      const F = e.clientX, T = e.clientY, X = (At, ft) => Math.hypot(At.clientX - F, At.clientY - T) > ft, C = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), C()), G === "dragging" && hs(r, s, p, B(e));
      const V = () => {
        var At, ft;
        G = "sliding", Wt = r, r.classList.add("held"), C(), (At = navigator.userActivation) != null && At.hasBeenActive && ((ft = navigator.vibrate) == null || ft.call(navigator, 8)), E = h ? (co[p] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, yt = (At) => {
        G === "waiting" && X(At, Cn) ? !d && (M ? Math.abs(At.clientY - T) > Math.abs(At.clientX - F) : Math.abs(At.clientX - F) > Math.abs(At.clientY - T)) ? V() : G = "gone" : G === "pressed" && X(At, 4) && (G = "dragging"), G === "sliding" ? hs(r, s, p, Math.max(0, Math.min(1, E + (M ? T - At.clientY : At.clientX - F) / R()))) : G === "dragging" && hs(r, s, p, B(At));
      }, Tt = (At) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((ft, Lt) => r.removeEventListener(ft, Lt ? Tt : yt)), r.classList.remove("held"), Wt === r && (Wt = null), ne.delete(y), G === "sliding" || G === "dragging" ? vi(s, p) : At.type === "pointerup" && d ? ec(Ht("light", "toggle", p)) : At.type === "pointerup" && h && (G === "waiting" || G === "pressed") && je("light", "turn_on", p).catch(() => {
        }), La && G !== "sliding" && G !== "dragging" && Ee();
      };
      r.addEventListener("pointermove", yt), r.addEventListener("pointerup", Tt), r.addEventListener("pointercancel", Tt);
    }), t.addEventListener("touchmove", (e) => {
      Wt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Rf(), vp(S), S.addEventListener("pointerdown", Cm), vp(St), St.addEventListener("click", (t) => {
    t.target === St && us();
  }), (yp = o.getElementById("homeNav")) == null || yp.addEventListener("click", () => {
    lt && Nl();
  }), (xp = o.querySelector(".bottomNav")) == null || xp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ls + "</button>"), (kp = l("dashEditNav")) == null || kp.addEventListener("click", () => v ? El(!Go) : bl(!ma)), S.addEventListener("pointerdown", Nh), S.addEventListener("pointerdown", uh), S.addEventListener("click", (t) => {
    v && Go && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && bd(t.target);
  }, !0), new ResizeObserver(() => {
    f.classList.contains("tfDash") && nl() !== al ? Ee() : Qi();
  }).observe(S), window.addEventListener("resize", Qi, { passive: !0 }), St.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), q != null && q.details ? $l(!1) : us();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [...St.querySelectorAll(".tfMoreDots [data-more-page]")], s = r.findIndex((d) => d.getAttribute("aria-selected") === "true"), p = r[Math.max(0, Math.min(r.length - 1, s + (t.key === "ArrowRight" ? 1 : -1)))];
      p && ds(Number(p.dataset.morePage), p.dataset.moreMode ?? null, !0);
    }
  })), ct(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([r]) => ao(r))), ...t || {} };
      for (const r in k) r.startsWith("light.") && k[r].state === "on" && Eo(r) && Rn(r, Ga(k[r]));
      e ? Na() : Ee();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Tn = !0, Le == null || Le.destroy(), Le = null, Te == null || Te.forEach((t) => t.destroy()), Te = null;
    },
    resume() {
      Tn = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Da.isConnected && Vr(Da.style.order), Co());
    }
  };
}
const Vg = "0.19.0";
function jg() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class zg extends HTMLElement {
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
    jg();
    const n = this.shadowRoot || this.attachShadow({ mode: "open" });
    n.innerHTML = `<style>${Rm}${Hm}${Nm}${Om}</style>${Im}`;
    const i = n.getElementById("app");
    i.style.opacity = "0", this._shell = Wm(n, {
      setLight: (l) => this.classList.toggle("lightBody", l),
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
        var l;
        return (l = this._shell) == null ? void 0 : l.toast("Full screen isn't available here");
      }
    );
  }
}
customElements.get("homecore-card") || (customElements.define("homecore-card", zg), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Vg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
