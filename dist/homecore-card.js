var Cm = Object.defineProperty;
var Am = (o, n, i) => n in o ? Cm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[n] = i;
var kp = (o, n, i) => Am(o, typeof n != "symbol" ? n + "" : n, i);
const Lm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Tm = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;--face:var(--tile);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}#app .tfMorePage[data-mode=phys]>.tfMoreSpace:not(.tfPhys),#app .tfMorePage:not([data-mode=phys])>.tfMoreSpace.tfPhys{display:none!important}#app .tfPhysPreview{position:fixed;left:50%;bottom:96px;z-index:30;width:min(520px,calc(100vw - 32px));box-sizing:border-box;padding:10px;border-radius:34px;background:var(--card);border:.4px solid var(--line);box-shadow:0 18px 48px #00000059;transform:translate(-50%,16px);opacity:0;transition:opacity .2s ease,transform .26s cubic-bezier(.34,1.3,.64,1)}#app .tfPhysPreview.in{opacity:1;transform:translate(-50%)}#app .tfPhysPreview[hidden]{display:none}.tfPhysPreviewHead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 4px 10px 14px}.tfPhysPreviewRow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;transition:opacity .2s ease,filter .2s ease}.tfPhysPreviewCell{display:flex;flex-direction:column;gap:6px;min-width:0}.tfPhysPreviewCell>span{font-size:12px;line-height:16px;color:var(--muted);text-align:center}#app .tfPhysPreview .tfMoreSpace.tfPhys{flex:none;height:auto;min-height:0;aspect-ratio:1/1;width:100%;border-radius:16px}.tfPhysPreviewNote{display:none;padding:10px 14px 4px;font-size:13px;line-height:18px;color:var(--muted)}#app .tfPhysPreview.off .tfPhysPreviewRow{opacity:.3;filter:grayscale(1);pointer-events:none}#app .tfPhysPreview.off .tfPhysPreviewNote{display:block}@media (prefers-reduced-motion:reduce){#app .tfPhysPreview{transition:none}}#app .tfPhysPreview.placed{bottom:auto;transform:translateY(16px)}#app .tfPhysPreview.placed.in{transform:none}#app .tfPhysPreview.dragging{transition:none;box-shadow:0 24px 60px #00000073}.tfPhysPreviewHead{cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhysPreview.dragging .tfPhysPreviewHead{cursor:grabbing}.tfPhysPreviewHead .activityTitle{flex:1}.tfPhysGrip{width:10px;height:16px;flex:none;margin-left:-4px;background:radial-gradient(circle,var(--muted) 1.3px,transparent 1.6px) 0 0/5px 5.33px}`, Dm = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Em = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Bm = `<main id="app"><div class="shell">
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
`, Mp = "homecore-theme", Pm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Rm = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Pm[o] || "") + "</svg>", Sp = {
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
function Hm(o, { setLight: n, fullscreenSupported: i, toggleFullscreen: l }) {
  const f = (K) => o.getElementById(K), b = f("app");
  o.querySelectorAll("[data-icon]").forEach((K) => {
    K.innerHTML = Rm(K.dataset.icon);
  });
  const g = { home: f("homeView"), settings: f("settingsView") }, v = f("homeNav"), T = f("settingsNav");
  function L(K) {
    Object.entries(g).forEach(([Q, z]) => z.classList.toggle("active", Q === K)), v.classList.toggle("active", K === "home"), T.classList.toggle("active", K === "settings");
  }
  v.addEventListener("click", () => L("home")), T.addEventListener("click", () => L("settings")), f("settingsBack").addEventListener("click", () => L("home"));
  function _(K) {
    const Q = K === "light";
    o.querySelectorAll(".themeBtn").forEach((z) => z.classList.toggle("active", z.dataset.theme === K)), b.classList.toggle("light", Q), n(Q);
  }
  _(Sp.get(Mp) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((K) => K.addEventListener("click", () => {
    _(K.dataset.theme), Sp.set(Mp, K.dataset.theme);
  }));
  const E = f("tvNav");
  i || (E.hidden = !0), E.addEventListener("click", () => l());
  let O;
  function k(K) {
    const Q = f("toast");
    Q && (Q.textContent = K, Q.classList.add("show"), clearTimeout(O), O = setTimeout(() => Q.classList.remove("show"), 2600));
  }
  return { showView: L, toast: k };
}
const Nm = /* @__PURE__ */ new Set(["roaming", "test_area"]), Om = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Zn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ae = "made_up_", eo = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Ae);
}, Gn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Nc(o) {
  const n = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((n - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Im(o) {
  const n = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let l = +n; l < +o; l += 10 * 60 * 1e3) i += Nc(new Date(l)) / 6;
  return i;
}
function _p(o = /* @__PURE__ */ new Date()) {
  const n = [];
  for (let i = 0; i <= 96; i++) {
    const l = +o - (96 - i) * 15 * 60 * 1e3;
    n.push([l, Nc(new Date(l))]);
  }
  return n;
}
function Fm({ onChange: o }) {
  const n = {}, i = {}, l = (z, H, tt, ot) => {
    n[z] = { entity_id: z, state: tt, attributes: ot, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = H;
  }, f = (z, H, tt) => {
    const ot = n[z], ct = H ?? ot.state;
    n[z] = { ...ot, state: ct, attributes: { ...ot.attributes, ...tt }, last_changed: ct === ot.state ? ot.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, H, tt, ot) => l("binary_sensor." + Ae + (z ? z + "_" : "") + Gn(H), z, ot ? "on" : "off", { friendly_name: H, device_class: tt });
  Object.entries(Om).forEach(([z, H]) => {
    if (H.temperature != null && l("sensor." + Ae + z + "_temperature", z, String(H.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), H.humidity != null && l("sensor." + Ae + z + "_humidity", z, String(H.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), H.vacuum && l("vacuum." + Ae + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), H.climate && l("climate." + Ae + z, z, "heat", {
      friendly_name: "Thermostat",
      hvac_modes: ["off", "heat", "cool", "auto"],
      hvac_action: "heating",
      current_temperature: H.temperature,
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
      current_humidity: H.humidity,
      humidity: 45,
      min_humidity: 30,
      max_humidity: 70
    }), H.fan) {
      const [tt, ot] = H.fan;
      l("fan." + Ae + z + "_" + Gn(tt), z, "on", ot != null ? { friendly_name: tt, percentage: ot, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: tt, supported_features: 48 });
    }
    if (H.waterHeater && l("water_heater." + Ae + z, z, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), H.valvePos) {
      const [tt, ot] = H.valvePos;
      l("valve." + Ae + z + "_" + Gn(tt), z, ot == null || ot ? "open" : "closed", { friendly_name: tt, device_class: "water", supported_features: 3 | (ot == null ? 0 : 12), ...ot == null ? {} : { current_position: ot } });
    }
    if (H.garage && l("cover." + Ae + z + "_" + Gn(H.garage), z, "closed", { friendly_name: H.garage, device_class: "garage", supported_features: 3 }), H.cover) {
      const [tt, ot, ct, et] = H.cover;
      l("cover." + Ae + z + "_" + Gn(tt), z, ct ? "open" : "closed", { friendly_name: tt, device_class: ot, current_position: ct, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (H.humidifier && l("humidifier." + Ae + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: H.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), H.solar && (l("sensor." + Ae + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), l("sensor." + Ae + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), H.valve && l("valve." + Ae + z + "_" + Gn(H.valve), z, "closed", { friendly_name: H.valve, device_class: "water" }), H.door && b(z, H.door, "door", H.doorOpen), H.window && b(z, H.window, "window", !1), H.motion && b(z, H.motion, "motion", !1), H.plant) {
      const [tt, ot, ct, et, F] = H.plant, G = Ae + Gn(tt), mt = (Nt, dt, S, Ft, Y) => l("sensor." + G + "_" + Nt, z, String(S), { friendly_name: dt, device_class: Y, state_class: "measurement", unit_of_measurement: Ft, plant_low: S < Zn[Nt][0], plant_high: S > Zn[Nt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Nt] });
      mt("moisture", "Moisture", ot, "%", "moisture"), mt("light", "Light", ct, "lx", "illuminance"), mt("temperature", "Temperature", et, "°C", "temperature"), mt("fertility", "Fertility", F, "µS/cm", "conductivity");
      const kt = Object.entries({ moisture: ot, light: ct, temperature: et, fertility: F }).filter(([Nt, dt]) => dt < Zn[Nt][0] || dt > Zn[Nt][1]).map(([Nt, dt]) => Nt + (dt < Zn[Nt][0] ? " low" : " high"));
      l("plant." + G, z, kt.length ? "problem" : "ok", { friendly_name: tt, moisture: ot, brightness: ct, temperature: et, conductivity: F, problem: kt.join(", ") || "none" });
    }
  }), l("alarm_control_panel." + Ae + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), l("sensor." + Ae + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let T = null;
  function L() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((H) => {
      H.endsWith("_solar_power") && (n[H] = { ...n[H], state: Nc(z).toFixed(2) }), H.endsWith("_solar_today") && (n[H] = { ...n[H], state: Im(z).toFixed(1) });
    });
  }
  L();
  let _ = 0;
  function E() {
    let z = !1;
    const H = ++_ % 10 === 0, tt = (et, F, G) => {
      f(et, F, G), z = !0;
    };
    Object.entries(g).forEach(([et, F]) => {
      const G = n[et].attributes.current_position, mt = G < F ? Math.min(F, G + 10) : Math.max(F, G - 10);
      mt === F && delete g[et], tt(et, mt === F ? mt === 0 ? "closed" : "open" : F > G ? "opening" : "closing", { current_position: mt });
    }), Object.entries(v).forEach(([et, F]) => {
      const G = n[et].attributes.current_tilt_position, mt = G < F ? Math.min(F, G + 25) : Math.max(F, G - 25);
      mt === F && delete v[et], tt(et, null, { current_tilt_position: mt });
    }), Object.keys(n).filter((et) => et.startsWith("climate.")).forEach((et) => {
      const F = n[et], G = F.attributes, mt = G.current_temperature, kt = (F.state === "heat" || F.state === "auto") && mt < G.temperature - 0.05, Nt = (F.state === "cool" || F.state === "auto") && mt > G.temperature + 0.05, dt = F.state === "off" ? "off" : kt ? "heating" : Nt ? "cooling" : "idle", S = H ? Math.round((mt + (kt ? 0.1 : Nt ? -0.1 : 0)) * 10) / 10 : mt;
      (S !== mt || dt !== G.hvac_action) && tt(et, null, { current_temperature: S, hvac_action: dt });
    }), Object.keys(n).filter((et) => et.startsWith("humidifier.")).forEach((et) => {
      const F = n[et], G = F.attributes, mt = G.current_humidity, kt = F.state === "on" && mt < G.humidity, Nt = kt && H ? mt + 1 : mt, dt = F.state !== "on" ? "off" : kt ? "humidifying" : "idle";
      if (Nt !== mt || dt !== G.action) {
        tt(et, null, { current_humidity: Nt, action: dt });
        const S = "sensor." + Ae + i[et] + "_humidity";
        n[S] && tt(S, String(Nt));
      }
    });
    const ot = n["vacuum." + Ae + "robot"], ct = ot.attributes;
    ot.state === "cleaning" && H && tt(ot.entity_id, null, { battery_level: Math.max(5, ct.battery_level - 1) }), ot.state === "returning" && tt(ot.entity_id, "docked", {}), ot.state === "docked" && ct.battery_level < 100 && tt(ot.entity_id, null, { battery_level: Math.min(100, ct.battery_level + 2) }), T && Date.now() - T.at > 5e3 && (tt("alarm_control_panel." + Ae + "house", "armed_" + T.mode, {}), T = null), z && o();
  }
  const O = setInterval(E, 1e3), k = setInterval(() => {
    L(), o();
  }, 60 * 1e3);
  function K(z, H, tt) {
    const ot = tt == null ? void 0 : tt.entity_id;
    if (!n[ot]) return !1;
    const ct = n[ot], et = ct.attributes, F = (G, mt) => f(ot, G, mt);
    if (z === "climate" && (H === "set_temperature" && tt.temperature != null && F(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, tt.temperature)) }), H === "set_hvac_mode" && F(tt.hvac_mode, tt.hvac_mode === "off" ? { hvac_action: "off" } : {}), H === "toggle" && F(ct.state === "off" ? "heat" : "off", ct.state === "off" ? {} : { hvac_action: "off" }), H === "set_temperature" && tt.target_temp_low != null && F(null, { target_temp_low: tt.target_temp_low, target_temp_high: tt.target_temp_high }), H === "set_fan_mode" && F(null, { fan_mode: tt.fan_mode }), H === "set_swing_mode" && F(null, { swing_mode: tt.swing_mode }), H === "set_preset_mode" && F(null, { preset_mode: tt.preset_mode }), H === "set_humidity" && F(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, tt.humidity)) })), z === "fan" && (H === "set_percentage" && F(tt.percentage > 0 ? "on" : "off", { percentage: tt.percentage }), H === "oscillate" && F(null, { oscillating: tt.oscillating }), H === "set_direction" && F(null, { direction: tt.direction }), (H === "turn_on" || H === "turn_off" || H === "toggle") && F(H === "turn_on" || H === "toggle" && ct.state !== "on" ? "on" : "off")), z === "water_heater" && (H === "set_temperature" && F(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, tt.temperature)) }), H === "set_operation_mode" && F(tt.operation_mode, { operation_mode: tt.operation_mode }), H === "set_away_mode" && F(null, { away_mode: tt.away_mode ? "on" : "off" }), H === "turn_on" || H === "turn_off" || H === "toggle")) {
      const G = H === "turn_on" || H === "toggle" && ct.state === "off";
      F(G ? "eco" : "off", { operation_mode: G ? "eco" : "off" });
    }
    if (z === "cover") {
      const G = H === "open_cover" ? 100 : H === "close_cover" ? 0 : H === "set_cover_position" ? tt.position : H === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      H === "stop_cover" && (delete g[ot], delete v[ot], F(et.current_position === 0 ? "closed" : "open")), G != null && et.current_position == null ? F(G > 0 ? "open" : "closed") : G != null && G !== et.current_position && (g[ot] = G, F(G > et.current_position ? "opening" : "closing"));
      const mt = H === "open_cover_tilt" ? 100 : H === "close_cover_tilt" ? 0 : H === "set_cover_tilt_position" ? tt.tilt_position : null;
      H === "stop_cover_tilt" && delete v[ot], mt != null && et.current_tilt_position != null && mt !== et.current_tilt_position && (v[ot] = mt);
    }
    if (z === "humidifier" && (H === "set_humidity" && F(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, tt.humidity)) }), H === "set_mode" && F(null, { mode: tt.mode }), H === "turn_on" || H === "turn_off" || H === "toggle")) {
      const G = H === "turn_on" || H === "toggle" && ct.state !== "on";
      F(G ? "on" : "off", { action: G ? "idle" : "off" });
    }
    if (z === "vacuum" && (H === "start" && F("cleaning", { rooms: tt.rooms || et.rooms }), H === "pause" && F("paused"), H === "return_to_base" && F("returning", { rooms: [] }), H === "locate" && F(null, { located: Date.now() }), H === "set_rooms" && F(null, { rooms: tt.rooms })), z === "valve") {
      const G = H === "open_valve" || H === "toggle" && ct.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(H) && F(G ? "open" : "closed", et.current_position != null ? { current_position: G ? 100 : 0 } : {}), H === "set_valve_position" && F(tt.position > 0 ? "open" : "closed", { current_position: tt.position });
    }
    if (z === "alarm_control_panel") {
      H === "alarm_disarm" && (T = null, F("disarmed", { changed_by: "Matt" }));
      const G = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[H];
      G && (T = { mode: G, at: Date.now() }, F("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function Q(z, { madeUp: H = !0 } = {}) {
    const tt = H ? n : {}, ot = (z == null ? void 0 : z.states) || {}, ct = (z == null ? void 0 : z.entities) || {}, et = (z == null ? void 0 : z.devices) || {}, F = (nt) => {
      var I;
      const lt = ct[nt];
      return lt && (lt.area_id || lt.device_id && ((I = et[lt.device_id]) == null ? void 0 : I.area_id)) || null;
    }, G = (nt) => {
      const lt = ct[nt];
      return ot[nt] && ot[nt].state !== "unavailable" && !(lt != null && lt.hidden) && !(lt != null && lt.entity_category);
    }, mt = {};
    Object.keys(ot).forEach((nt) => {
      const lt = F(nt);
      lt && G(nt) && (mt[lt] || (mt[lt] = [])).push(nt);
    });
    const kt = { ...ot, ...tt }, Nt = (nt) => {
      var lt, I;
      return (I = (lt = kt[nt]) == null ? void 0 : lt.attributes) == null ? void 0 : I.device_class;
    }, dt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(ot).filter((nt) => nt.startsWith("vacuum.") && G(nt)), Ft = Object.values((z == null ? void 0 : z.areas) || {}).filter((nt) => !Nm.has(nt.area_id)).map((nt) => {
      const lt = nt.area_id, I = mt[lt] || [], gt = (Vt) => I.filter((ge) => ge.startsWith(Vt + ".")), Ct = (Vt) => gt("sensor").filter((ge) => Nt(ge) === Vt), Wt = (Vt) => Object.keys(tt).filter((ge) => i[ge] === lt && Vt(ge)), ne = (Vt, ge) => Vt.length ? Vt : Wt(ge), ra = ne(Ct("temperature"), (Vt) => Vt.endsWith(lt + "_temperature")), fa = ne(Ct("humidity"), (Vt) => Vt.endsWith(lt + "_humidity")), So = Ct("power").filter((Vt) => /^(W|kW)$/.test(kt[Vt].attributes.unit_of_measurement || "")), La = gt("binary_sensor").filter((Vt) => Nt(Vt) === "moisture"), nn = ne(gt("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: Wt((ge) => ge.startsWith("sensor." + Vt.split(".")[1] + "_")) })), Mn = [...gt("binary_sensor").filter((Vt) => dt.includes(Nt(Vt))), ...Wt((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: lt,
        name: nt.name,
        icon: nt.icon,
        floor: nt.floor_id || null,
        readings: [...ra.slice(0, 1), ...fa.slice(0, 1), ...La],
        power: So.length ? So.reduce((Vt, ge) => Vt + Number(kt[ge].state) * (kt[ge].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: gt("switch"),
        lights: gt("light"),
        actions: [
          ...gt("light"),
          ...ne(gt("climate"), (Vt) => Vt.startsWith("climate.")),
          ...ne(gt("cover"), (Vt) => Vt.startsWith("cover.")),
          ...ne(gt("humidifier"), (Vt) => Vt.startsWith("humidifier.")),
          ...ne(gt("valve"), (Vt) => Vt.startsWith("valve.")),
          ...gt("media_player"),
          ...gt("vacuum"),
          ...S.length ? [] : Wt((Vt) => Vt.startsWith("vacuum.")),
          ...gt("fan"),
          ...Wt((Vt) => Vt.startsWith("fan.")),
          ...gt("water_heater"),
          ...Wt((Vt) => Vt.startsWith("water_heater."))
        ],
        solar: Wt((Vt) => Vt.includes("_solar_")),
        plants: nn,
        openings: Mn,
        alerts: [...La, ...Mn].filter((Vt) => {
          var ge;
          return ((ge = kt[Vt]) == null ? void 0 : ge.state) === "on";
        })
      };
    }).filter((nt) => nt.readings.length || nt.plugs.length || nt.actions.length || nt.solar.length || nt.plants.length), Y = Object.keys(ot).find((nt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(nt) && ot[nt].state !== "unavailable") || null, rt = (nt) => Object.keys(ot).filter((lt) => lt.startsWith(nt + ".") && G(lt)), st = rt("alarm_control_panel"), ht = S.length ? S : H ? ["vacuum." + Ae + "robot"] : [];
    return {
      states: kt,
      rooms: Ft,
      grid: Y,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (nt) => tt[nt] ? i[nt] : F(nt),
      vacuums: ht,
      homeVacuums: ht.filter((nt) => !Ft.some((lt) => lt.actions.includes(nt))),
      security: {
        alarms: st.length ? st : H ? ["alarm_control_panel." + Ae + "house"] : [],
        locks: rt("lock"),
        openings: [...Object.keys(tt).filter((nt) => nt.startsWith("binary_sensor.")), ...H ? ["sensor." + Ae + "doorbell"] : []]
      }
    };
  }
  return { model: Q, call: K, stop() {
    clearInterval(O), clearInterval(k);
  } };
}
const Cp = (o) => +o.toFixed(2), Ap = (o) => o * Math.PI / 180, Di = (o, n, i, l) => [Cp(o + i * Math.cos(Ap(l))), Cp(n + i * Math.sin(Ap(l)))], Dr = (o, n, i, l, f) => {
  const [b, g] = Di(o, n, i, l), [v, T] = Di(o, n, i, f);
  return `M${b} ${g}A${i} ${i} 0 ${f - l > 180 ? 1 : 0} 1 ${v} ${T}`;
}, Ke = (o, n, i, l, f, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${l}" rx="${f}"${b}/>`, Ca = (o, n, i, l = "") => `<circle cx="${o}" cy="${n}" r="${i}"${l}/>`, wa = (o, n = "") => `<path d="${o}"${n}/>`, Ts = (o, n = 2.5) => wa(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), $n = (o, n = 1.5) => wa(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), Un = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), qm = (o, n, i, l = 0) => Array.from({ length: o }, (f, b) => {
  const g = l + 360 / o * b, [v, T] = Di(12, 12, n, g), [L, _] = Di(12, 12, i, g);
  return Ts(`M${v} ${T}L${L} ${_}`, 2.2);
}).join(""), Vm = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", Wm = [
  {
    id: "light",
    name: "Light",
    use: "lights, lamps",
    colour: "#ffc107",
    s: wa("M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z") + Ke(9.4, 19.2, 5.2, 2.6, 1.3),
    c: wa(Dr(12, 9.6, 3.6, 180, 270))
  },
  {
    id: "plug",
    name: "Plug",
    use: "switches, sockets",
    colour: "#ffc107",
    s: Ke(3, 3, 18, 18, 6),
    c: Un(Ke(8.2, 8.8, 2.2, 6.4, 1.1)) + Un(Ke(13.6, 8.8, 2.2, 6.4, 1.1))
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
    s: Ke(9.2, 2.4, 5.6, 14, 2.8) + Ca(12, 17.4, 4.4),
    c: wa("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: $n("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: wa(Dr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => wa(Vm, ` transform="rotate(${o} 12 12)"`)).join("") + Ca(12, 12, 2.6),
    c: Ca(12, 12, 3.6)
  },
  {
    id: "blinds",
    name: "Blinds",
    use: "covers, shades, shutters",
    colour: "#9c27b0",
    s: Ke(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((o) => Ke(4, o, 16, 2.5, 1.25)).join(""),
    c: ""
  },
  {
    id: "lock",
    name: "Lock",
    use: "locks",
    colour: "#4caf50",
    s: Ts("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Ke(4, 10, 16, 11.6, 4.2),
    c: Un(Ca(12, 14.9, 1.7)) + wa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Ke(5, 2.4, 14, 19.2, 3.6),
    c: Un(Ca(15.2, 12.4, 1.5))
  },
  {
    id: "window",
    name: "Window",
    use: "windows, openings",
    colour: "#ff9800",
    s: Ke(3, 3, 18, 18, 4.4),
    c: wa("M12 3V21M3 12H21")
  },
  {
    id: "motion",
    name: "Motion",
    use: "motion, occupancy",
    colour: "#03a9f4",
    s: $n("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Ts(Dr(12, 18.6, 8, 230, 310), 2.4) + Ts(Dr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: Ca(12, 7.2, 4.2) + $n("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Ke(2.6, 5.4, 13.4, 8.6, 3.4) + $n("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Ke(7.2, 14.6, 2.4, 4.2, 1.2) + Ke(3.4, 18.6, 10, 2.6, 1.3),
    c: Un(Ca(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Ke(5, 2.4, 14, 19.2, 4.2),
    c: Ca(12, 14.6, 3.6) + Un(Ca(12, 7.4, 1.5))
  },
  {
    id: "tv",
    name: "TV",
    use: "TVs, displays",
    colour: "#2196f3",
    s: Ke(2.4, 3.6, 19.2, 13.4, 3.4) + Ke(7.6, 18.8, 8.8, 2.6, 1.3),
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
    s: $n("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: Ca(12, 12, 4.4) + qm(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: $n("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: wa("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: $n("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: Un(Ke(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let jm = 0;
function zm(o, n = 24, i = `hc${++jm}`) {
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
}, ki = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Lc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, Gm = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Lp = {}, Wa = (o, n, i) => {
  const l = o + n + i;
  return Lp[l] || (Lp[l] = Gm(Lc(o).map((f, b) => f + (Lc(n)[b] - f) * i)));
}, Tp = {}, nc = (o) => Tp[o] || (Tp[o] = Lc(o));
function ju(o, n) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || n ? "night" : "day");
}
function $m(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [Wa(n.clear[0], n.cloudy[0], 0.12), Wa(n.clear[1], n.cloudy[1], 0.12)], n.storm = [Wa(n.rain[0], "#000000", 0.22), Wa(n.rain[1], "#000000", 0.22)], n;
}
const Tc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Dc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ec = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Um(o, n = za) {
  const i = { ...za, ...n }, l = $m(i), f = String(o).split("/"), b = l[f[0]] ? f[0] : "clear", g = f[1] === "night", v = l[b][g ? 1 : 0], T = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Tc.map(() => ({ o: 0 })),
    rain: Dc.map(() => ({ o: 0, dy: -16 })),
    snow: Ec.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, L = (_) => Tc.map(() => ({ o: _ }));
  return b === "clear" ? g ? (T.moon.o = 1, T.stars = L(1)) : T.sun.o = 1 : b === "partly" ? (T.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (T.moon = { x: 34, y: 33, d: 48, o: 1 }, T.stars = L(0.7)) : T.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (T.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? T.moon = { x: 40, y: 36, d: 40, o: 0 } : T.sun = { x: 40, y: 36, r: 20, o: 0 }) : (T.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? T.moon = { x: 38, y: 28, d: 36, o: 0 } : T.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? T.snow = Ec.map(() => ({ o: 1, dy: 0 })) : T.rain = Dc.map((_, E) => ({ o: b === "storm" && E === 1 ? 0 : 1, dy: 0 })), b === "storm" && (T.bolt = { o: 1, dy: 0 })), T;
}
const Ym = [
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
], Yn = (o, n) => (Ym[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Zm = 0, zu = 1, Gu = 2, $u = 3, Uu = 4, vo = 5, Hs = 6, Hr = 7, Yu = 8, Dp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), Km = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Xm = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Jm = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function Qm(o, { size: n = 90, px: i = 2, oneBit: l = !1, colors: f = za, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: T = !1 } = {}) {
  const L = { ...za, ...f }, _ = Math.sin, E = Math.PI * 2, O = Math.max(6, Math.round(n / i)), k = O / 90, K = T ? Math.floor(v / 100) * 100 : 0, Q = T ? _(E * K / 3600) : 0, z = T ? 1.8 * _(E * K / 6400) : 0, H = T ? 0.9 * _(E * K / 4100) : 0, tt = T ? 0.8 * _(E * K / 5200) : 0, ot = K / 3400 % 1, ct = T && o.bolt.o > 0.5 && (ot < 0.04 || ot > 0.08 && ot < 0.11), et = new Array(O * O), F = new Uint8Array(O * O), G = (Y, rt, st, ht, nt) => {
    st == null || Y < 0 || rt < 0 || Y >= O || rt >= O || (ht >= 1 || ht > Yn(Y + 5, rt + 3)) && (et[rt * O + Y] = st, F[rt * O + Y] = nt);
  }, mt = (Y, rt, st, ht) => {
    for (let nt = Math.max(0, Math.floor(rt - st) - 1); nt <= Math.min(O - 1, rt + st + 1); nt++) for (let lt = Math.max(0, Math.floor(Y - st) - 1); lt <= Math.min(O - 1, Y + st + 1); lt++) ht(lt, nt, lt + 0.5 - Y, nt + 0.5 - rt);
  }, kt = o.skyStops || [o.sky], Nt = o.skyT || 0;
  for (let Y = 0; Y < O; Y++) {
    const rt = o.night ? ki(1 - (Y + 0.5) / (O * 0.7)) * 0.85 : ki(((Y + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let st = 0; st < O; st++) {
      let ht = kt[0];
      if (kt.length > 1) {
        const nt = Nt * (kt.length - 1), lt = Math.min(kt.length - 2, Math.floor(nt));
        ht = nt - lt > Yn(st, Y) ? kt[lt + 1] : kt[lt];
      }
      rt > Yn(st + 2, Y + 5) && (ht = o.night ? Wa(ht, "#000000", 0.28) : Wa(ht, "#ffffff", 0.2)), et[Y * O + st] = ct ? Wa(ht, "#ffffff", 0.25) : ht;
    }
  }
  if (o.sun.o > 0.01) {
    const Y = o.sun.x * k, rt = o.sun.y * k, st = Math.max(1, o.sun.r * k);
    if (T) {
      const ht = st * (1.45 + 0.06 * Q), nt = Wa(L.sun, "#ffffff", 0.55);
      if (mt(Y, rt, ht, (lt, I, gt, Ct) => {
        const Wt = Math.sqrt(gt * gt + Ct * Ct);
        Wt > st && Wt < ht && G(lt, I, nt, 0.26 * (1 - (Wt - st) / (ht - st)) * o.sun.o, Zm);
      }), o.sun.o > 0.5) {
        const lt = Math.floor(K / 500) % 2, I = Math.max(1, st * 0.22);
        for (let gt = 0; gt < 8; gt++) if (gt % 2 === lt) for (let Ct = st + 1.5; Ct < st + 1.5 + I; Ct += 0.7) G(Math.floor(Y + Math.cos(gt * Math.PI / 4) * Ct), Math.floor(rt + Math.sin(gt * Math.PI / 4) * Ct), L.sun, o.sun.o, Yu);
      }
    }
    mt(Y, rt, st, (ht, nt, lt, I) => {
      if (lt * lt + I * I > st * st) return;
      const gt = ((lt * 0.643 + I * 0.766) / st + 1) / 2;
      G(ht, nt, ki((gt - 0.62) / 0.38) > Yn(ht, nt) ? L.sunEdge : L.sun, o.sun.o, zu);
    });
  }
  if (Tc.forEach((Y, rt) => {
    const st = o.stars[rt].o;
    if (st < 0.01) return;
    const ht = Math.floor(Y[0] * k), nt = Math.floor(Y[1] * k), lt = T ? (Math.floor(K / 300) + rt * 3) % 6 : 0;
    if (lt === 5) return;
    const I = Math.round(Y[2] * k * (lt === 4 ? 0.3 : lt < 2 ? 1 : 0.6));
    G(ht, nt, L.star, st, Hr);
    for (let gt = 1; gt <= I; gt++) {
      const Ct = gt === I && I > 1 ? Wa(L.star, o.sky, 0.5) : L.star;
      G(ht - gt, nt, Ct, st, Hr), G(ht + gt, nt, Ct, st, Hr), G(ht, nt - gt, Ct, st, Hr), G(ht, nt + gt, Ct, st, Hr);
    }
  }), o.moon.o > 0.01) {
    const Y = Math.max(1.5, o.moon.d * k * 0.37), rt = o.moon.x * k, st = o.moon.y * k + (T && tt > 0.4 ? -1 : 0), ht = rt + 0.547 * Y, nt = st - 0.503 * Y, lt = 0.82 * Y, I = Wa(L.moon, "#ffffff", 0.6);
    mt(rt, st, Y, (gt, Ct, Wt, ne) => {
      if (Wt * Wt + ne * ne > Y * Y) return;
      const ra = gt + 0.5 - ht, fa = Ct + 0.5 - nt;
      ra * ra + fa * fa <= lt * lt || G(gt, Ct, ki((ne + Y) / (2 * Y) * 1.1 - 0.1) > Yn(gt, Ct) ? L.moon : I, o.moon.o, Gu);
    });
  }
  const dt = Math.max(2, Math.round(15.65 * k)), S = Math.max(1, Math.round(5.87 * k * 0.5));
  Dc.forEach((Y, rt) => {
    const st = o.rain[rt];
    let ht = st.dy, nt = st.o;
    if (nt < 0.01) return;
    if (T) {
      const gt = (K / 950 + rt / 3) % 1;
      ht += -5 + gt * 14, nt *= gt < 0.18 ? gt / 0.18 : gt > 0.72 ? (1 - gt) / 0.28 : 1;
    }
    const lt = (Y[0] + 3 + z) * k, I = (Y[1] + ht) * k;
    for (let gt = 0; gt < dt; gt++) for (let Ct = 0; Ct < S; Ct++) G(Math.floor(lt - 0.208 * gt) + Ct, Math.floor(I) + gt, L.rain, nt, Uu);
  });
  const Ft = Math.max(0, Math.round(7.34 * k / 2.6));
  if (Ec.forEach((Y, rt) => {
    const st = o.snow[rt];
    let ht = st.dy, nt = 0, lt = st.o;
    if (lt < 0.01) return;
    if (T) {
      const Ct = (K / 3200 + rt / 5) % 1;
      ht += -6 + Ct * 14, nt = 1.5 * _(E * (Ct * 1.5 + rt / 5)), lt *= Ct < 0.2 ? Ct / 0.2 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1;
    }
    const I = Math.floor((Y[0] + 3.67 + nt + z) * k), gt = Math.floor((Y[1] + 3.67 + ht) * k);
    G(I, gt, L.snow, lt, vo);
    for (let Ct = 1; Ct <= Ft; Ct++)
      G(I - Ct, gt, L.snow, lt, vo), G(I + Ct, gt, L.snow, lt, vo), G(I, gt - Ct, L.snow, lt, vo), G(I, gt + Ct, L.snow, lt, vo), Ft > 1 && Ct < Ft && (G(I - Ct, gt - Ct, L.snow, lt, vo), G(I + Ct, gt - Ct, L.snow, lt, vo), G(I - Ct, gt + Ct, L.snow, lt, vo), G(I + Ct, gt + Ct, L.snow, lt, vo));
  }), o.bolt.o > 0.01)
    if (O >= 30) {
      const Y = 39 + z, rt = 50 + o.bolt.dy;
      for (let st = Math.floor(rt * k); st <= (rt + 28) * k; st++) for (let ht = Math.floor(Y * k); ht <= (Y + 13) * k; ht++)
        Jm(Xm, (ht + 0.5) / k - Y, (st + 0.5) / k - rt) && G(ht, st, L.sun, o.bolt.o, Hs);
    } else {
      const Y = O / 18, rt = 7, st = 10 + Math.round(o.bolt.dy * 0.2);
      Km.forEach((ht, nt) => ht.split("").forEach((lt, I) => {
        if (lt !== "#") return;
        const gt = Math.floor((rt + I) * Y), Ct = Math.floor((st + nt) * Y);
        for (let Wt = Ct; Wt < Math.max(Ct + 1, Math.floor((st + nt + 1) * Y)); Wt++) for (let ne = gt; ne < Math.max(gt + 1, Math.floor((rt + I + 1) * Y)); ne++) G(ne, Wt, L.sun, o.bolt.o, Hs);
      }));
    }
  if (o.cloud.o > 0.01) {
    const Y = Math.max(3, o.cloud.w * k), rt = Y * 0.6665, st = (o.cloud.x + z) * k - Y / 2, ht = (o.cloud.y + H) * k - rt / 2, nt = Wa(L.cloudDay, L.cloudNight, Math.round(o.cloud.f * 4) / 4), lt = Wa(nt, "#000000", 0.16);
    for (let I = Math.max(0, Math.floor(ht) - 1); I <= Math.min(O - 1, ht + rt + 1); I++) for (let gt = Math.max(0, Math.floor(st) - 1); gt <= Math.min(O - 1, st + Y + 1); gt++) {
      const Ct = (gt + 0.5 - st) / Y, Wt = (I + 0.5 - ht) / Y;
      Dp(Ct, Wt) && G(gt, I, !Dp(Ct, Wt + 1 / Y) || ki((Wt - 0.42) / 0.25) * 0.8 > Yn(gt, I) ? lt : nt, o.cloud.o, $u);
    }
  }
  return t0(et, F, O, O, { oneBit: l, ink: b, paper: g, snowInk: !o.night });
}
function t0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const T = new Uint8ClampedArray(i * l * 4), L = nc(b), _ = nc(g);
  for (let E = 0; E < l; E++) for (let O = 0; O < i; O++) {
    const k = E * i + O, K = n[k];
    if (o[k] == null) continue;
    let Q = nc(o[k]);
    if (f) {
      let z;
      K === Uu || K === Yu ? z = !0 : K === vo ? z = v : K === Hr || K === Hs ? z = !1 : z = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Yn(O, E), (K === zu || K === Gu || K === $u || K === Hs) && (O > 0 && n[k - 1] !== K || O < i - 1 && n[k + 1] !== K || E > 0 && n[k - i] !== K || E < l - 1 && n[k + i] !== K) && (z = !0), Q = z ? L : _;
    }
    T[k * 4] = Q[0], T[k * 4 + 1] = Q[1], T[k * 4 + 2] = Q[2], T[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: T };
}
const en = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Bc = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, e0 = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Ep = {}, ja = (o, n, i) => {
  const l = o + n + i;
  return Ep[l] || (Ep[l] = e0(Bc(o).map((f, b) => f + (Bc(n)[b] - f) * i)));
}, Bp = {}, Ds = (o) => Bp[o] || (Bp[o] = Bc(o));
function a0(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [ja(n.clear[0], n.cloudy[0], 0.12), ja(n.clear[1], n.cloudy[1], 0.12)], n.storm = [ja(n.rain[0], "#000000", 0.22), ja(n.rain[1], "#000000", 0.22)], n;
}
const o0 = [
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
], Qo = (o, n) => (o0[(n & 7) * 8 + (o & 7)] + 0.5) / 64, Zu = 1, Ku = 2, Xu = 3, Ju = 4, Nr = 5, Ns = 6, Pc = 7, Qu = 8, Pp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), n0 = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function r0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const T = new Uint8ClampedArray(i * l * 4), L = Ds(b), _ = Ds(g);
  for (let E = 0; E < l; E++) for (let O = 0; O < i; O++) {
    const k = E * i + O, K = n[k];
    if (o[k] == null) continue;
    let Q = Ds(o[k]);
    if (f) {
      let z;
      K === Ju || K === Qu ? z = !0 : K === Nr ? z = v : K === Pc || K === Ns ? z = !1 : z = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Qo(O, E), (K === Zu || K === Ku || K === Xu || K === Ns) && (O > 0 && n[k - 1] !== K || O < i - 1 && n[k + 1] !== K || E > 0 && n[k - i] !== K || E < l - 1 && n[k + i] !== K) && (z = !0), Q = z ? L : _;
    }
    T[k * 4] = Q[0], T[k * 4 + 1] = Q[1], T[k * 4 + 2] = Q[2], T[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: T };
}
const i0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, s0 = (o) => ju(o, !1).split("/")[0], rc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, l0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", c0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", d0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", p0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", u0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], f0 = [".##", "##.", ".#.", "#.."];
function tf(o, { width: n, height: i, colors: l, wave: f = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const T = { ...za, dawn: "#e5a77e", ...l }, L = a0(T), _ = n, E = i, O = _ / v, k = O / 2, K = Math.PI * 2, Q = o.length ? o : [{ cond: "cloudy", night: !1 }], z = [...Array(v * 2)].map((ct, et) => {
    const F = Q[Math.min(et, Q.length - 1)], G = s0(F.cond), mt = et % 2 === 1;
    return { cond: F.cond, k: G, night: mt, sky: L[G][mt ? 1 : 0], cover: i0[G] };
  }), H = (ct) => E * (0.5 - f * Math.cos(K * (ct / O - 0.25)));
  return { C: T, S: z, W: _, H: E, cw: O, sw: k, TAU: K, yb: H, side: (ct, et, F) => {
    const G = (ct ? H(et) - F : F - H(et)) / Math.max(3, b * 1.4) + 0.5;
    return G <= 0 ? 0 : G >= 1 ? 1 : G;
  }, glowAt: (ct) => {
    const et = ((ct / O - 0.25) % 1 + 1) % 1, F = Math.max(0, Math.min(v - 1, Math.round(ct / O - 0.25))), G = Math.max(0, Math.min(v - 1, Math.round(ct / O - 0.75))), mt = 1 - (z[2 * F].cover + z[2 * G + 1].cover) / 2, kt = Math.sin(Math.PI * Math.min(1, Math.max(0, H(ct) / E)));
    return { c: et < 0.5 ? T.dusk : T.dawn, a: g * (0.2 + 0.8 * mt) * kt * kt };
  }, soft: b, tw: O * 0.3, sy: E / 90 };
}
function ef(o, { clock: n = 0, ambient: i = !1, seed: l = 1 }) {
  const { S: f, sw: b, side: g, C: v, TAU: T, sy: L, H: _ } = o, E = n, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Q, z) => {
    const H = rc(l * 977 + z * 131 + 7), tt = (z + 0.5) * b, ot = Q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Q.k] : 0;
    for (let ct = 0; ct < ot; ct++) {
      const et = tt + (H() - 0.5) * b * 1.6, F = (6 + H() * 76) * L, G = H() < 0.35, mt = 1.8 + H() * 1.6, kt = g(!0, et, F) * (G ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(T * E / 2600 + ct * 1.7 + z) : 1);
      kt >= 0.03 && O.stars.push({ x: et, y: F, big: G, size: mt, o: kt });
    }
    if (!Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const ct = tt + (H() - 0.5) * b * 0.3, et = Math.min(15, b * 0.29);
      O.suns.push({ x: ct, y: 32 * L, rad: et, halo: et * 2.8 * (i ? 1 + 0.07 * Math.sin(T * E / 3600 + z) : 1) });
    }
    if (Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const ct = Math.min(0.78, b * 0.55 / 34), et = tt - 23 * ct + (H() - 0.5) * b * 0.2;
      O.moons.push({ x: et + 23 * ct, y: (4 + (i ? 0.8 * Math.sin(T * E / 5200 + z) : 0)) * L + 23 * ct, d: 46 * ct });
    }
  });
  const k = Math.max(56, Math.min(100, _ * 0.45)), K = Math.max(1, b / (k * 2.4));
  return f.forEach((Q, z) => {
    const H = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Q.k];
    if (!H) return;
    const tt = Q.k === "partly" ? 1 : Math.round(H * K), ot = rc(l * 577 + z * 71 + 3), ct = (z + 0.5) * b, et = Q.k === "rain" || Q.k === "storm" || Q.night ? v.cloudNight : v.cloudDay, F = Q.night ? 0.82 : Q.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < tt; G++) {
      const mt = k / 46 * (Q.k === "partly" ? 1 : 0.8 + ot() * 0.4), kt = ct + (Q.k === "partly" ? b * 0.12 : ((G + 0.5) / tt - 0.5) * b * 0.95 + (ot() - 0.5) * b * 0.5 / tt), Nt = (Q.k === "partly" ? 40 : 6 + ot() * 26) * L, dt = i ? 2.5 * Math.sin(T * E / 9e3 + z * 1.3 + G * 2.1) : 0, S = i ? 0.9 * Math.sin(T * E / 6100 + z + G) : 0;
      O.clouds.push({ x: kt - 23 * mt + dt, y: Nt - 15.33 * mt + S, w: 46 * mt, h: 30.66 * mt, fill: et, o: F * (tt > 1 && G === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Q, z) => {
    const H = rc(l * 313 + z * 29 + 11), tt = (z + 0.5) * b, ot = Q.cond === "pouring" ? 16 : Q.cond === "rainy" || Q.cond === "hail" ? 9 : Q.cond === "lightning-rainy" ? 12 : Q.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < ot; et++) {
      let F = tt + (H() - 0.5) * b * 1.05, G = 44 + H() * 36, mt = 1;
      if (i) {
        const Nt = ((G - 44 + E * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (Nt - (G - 44)), G = 44 + Nt, mt = Math.min(1, Nt / 6, (36 - Nt) / 6);
      }
      G *= L;
      const kt = g(Q.night, F, G) * mt;
      kt >= 0.05 && O.drops.push({ x: F, y: G, o: kt });
    }
    const ct = Q.cond === "snowy" ? 11 : Q.cond === "snowy-rainy" ? 6 : 0;
    for (let et = 0; et < ct; et++) {
      let F = tt + (H() - 0.5) * b * 1.05, G = 40 + H() * 44, mt = 1;
      if (i) {
        const Nt = ((G - 40 + E * 9e-3) % 44 + 44) % 44;
        G = 40 + Nt, F += 1.6 * Math.sin(T * E / 2800 + et * 1.9 + z), mt = Math.min(1, Nt / 6, (44 - Nt) / 6);
      }
      G *= L;
      const kt = g(Q.night, F, G) * mt;
      kt >= 0.05 && O.flakes.push({ x: F, y: G, o: kt });
    }
    if (Q.k === "fog") {
      const et = Q.night ? "#c8ccd6" : "#ffffff", F = Q.night ? 0.28 : 0.62, G = i ? 4 * Math.sin(T * E / 8e3 + z) : 0;
      for (let mt = 0; mt < 4; mt++) O.fogs.push({ x: tt - b * 0.75 + mt % 2 * b * 0.18 + (mt % 2 ? G : -G), y: (30 + mt * 13) * L, w: b * 1.3, c: et, a: F });
    }
    if (Q.k === "storm") {
      const et = (E / 3400 + z * 0.37) % 1;
      O.bolts.push({ x: tt + (H() - 0.5) * b * 0.3 - 5, y: 36 * L, o: i && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function h0(o, n, i, l, f, b, g, v) {
  const { S: T, C: L, cw: _, yb: E, glowAt: O, soft: k, tw: K, sy: Q } = o, z = new Array(i * l), H = new Uint8Array(i * l), tt = new Uint8Array(i * l), ot = (Y, rt, st, ht, nt) => {
    st == null || Y < 0 || rt < 0 || Y >= i || rt >= l || (ht >= 1 || ht > Qo(Y + 5, rt + 3)) && (z[rt * i + Y] = st, H[rt * i + Y] = nt);
  }, ct = (Y, rt, st, ht) => {
    for (let nt = Math.max(0, Math.floor(rt - st) - 1); nt <= Math.min(l - 1, rt + st + 1); nt++) for (let lt = Math.max(0, Math.floor(Y - st) - 1); lt <= Math.min(i - 1, Y + st + 1); lt++) ht(lt, nt, lt + 0.5 - Y, nt + 0.5 - rt);
  }, et = (Y, rt, st) => {
    for (let nt = 0; nt < Y.length - 1; nt++) {
      const lt = (nt + rt) * _;
      if (st < lt - K / 2) return [Y[nt], Y[nt], 0];
      if (st <= lt + K / 2) return [Y[nt], Y[nt + 1], (st - lt + K / 2) / K];
    }
    const ht = Y[Y.length - 1];
    return [ht, ht, 0];
  }, F = T.filter((Y) => !Y.night).map((Y) => Y.sky), G = T.filter((Y) => Y.night).map((Y) => Y.sky), mt = k / b, kt = 16 * Q / b;
  for (let Y = 0; Y < i; Y++) {
    const rt = (Y + 0.5) * f, st = E(rt) / b, ht = et(F, 0.75, rt), nt = et(G, 1.25, rt), lt = O(rt);
    for (let I = 0; I < l; I++) {
      const gt = Qo(Y, I), Ct = I + 0.5 - st, Wt = (mt > 0.01 ? en(0.5 + Ct / mt) : Ct > 0 ? 1 : 0) > gt;
      let ne = Wt ? ht[2] > gt ? ht[1] : ht[0] : nt[2] > gt ? nt[1] : nt[0];
      (Wt ? en(((I + 0.5) / l - 0.45) / 0.55) * 0.7 : en(1 - (I + 0.5) / (l * 0.55)) * 0.7) > Qo(Y + 2, I + 5) && (ne = Wt ? ja(ne, "#ffffff", 0.18) : ja(ne, "#000000", 0.25)), Wt && Ct >= 0 && Ct < kt && lt.a * 1.3 * (1 - Ct / kt) > Qo(Y + 6, I + 1) && (ne = lt.c), z[I * i + Y] = ne, tt[I * i + Y] = Wt ? 0 : 1;
    }
  }
  const Nt = ja(L.sun, "#ffffff", 0.55), dt = ja(L.moon, "#ffffff", 0.6);
  n.stars.forEach((Y) => {
    const rt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    if (rt < 0 || st < 0 || rt >= i || st >= l || !tt[st * i + rt] || Y.o < 0.15) return;
    const ht = Y.o > 0.45 ? L.star : ja(L.star, z[st * i + rt], 0.5), nt = Y.big && Y.o > 0.6 ? Math.floor(Y.size / f) : 0;
    ot(rt, st, ht, 1, Pc);
    for (let lt = 1; lt <= nt; lt++) [[rt - lt, st], [rt + lt, st], [rt, st - lt], [rt, st + lt]].forEach((I) => {
      I[0] >= 0 && I[1] >= 0 && I[0] < i && I[1] < l && tt[I[1] * i + I[0]] && ot(I[0], I[1], ht, 1, Pc);
    });
  }), n.suns.forEach((Y) => {
    const rt = Math.max(1.5, Y.rad / f), st = Y.x / f, ht = Y.y / b, nt = Y.halo / f * 0.85;
    if (ct(st, ht, nt, (lt, I, gt, Ct) => {
      const Wt = Math.sqrt(gt * gt + Ct * Ct);
      Wt > rt && Wt < nt && !tt[I * i + lt] && ot(lt, I, Nt, 0.3 * (1 - (Wt - rt) / (nt - rt)), 0);
    }), v) {
      const lt = Math.floor(g / 500) % 2, I = Math.max(1, rt * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === lt) for (let Ct = rt + 1.2; Ct < rt + 1.2 + I; Ct += 0.7) ot(Math.floor(st + Math.cos(gt * Math.PI / 4) * Ct), Math.floor(ht + Math.sin(gt * Math.PI / 4) * Ct), L.sun, 1, Qu);
    }
    ct(st, ht, rt, (lt, I, gt, Ct) => {
      gt * gt + Ct * Ct <= rt * rt && ot(lt, I, en(((Ct / rt + 1) / 2 - 0.6) / 0.4) > Qo(lt, I) ? L.sunEdge : L.sun, 1, Zu);
    });
  }), n.moons.forEach((Y) => {
    const rt = Math.max(1.5, Y.d * 0.37 / f), st = Y.x / f, ht = Y.y / b, nt = st + 0.547 * rt, lt = ht - 0.503 * rt, I = 0.82 * rt;
    ct(st, ht, rt, (gt, Ct, Wt, ne) => {
      if (Wt * Wt + ne * ne > rt * rt) return;
      const ra = gt + 0.5 - nt, fa = Ct + 0.5 - lt;
      ra * ra + fa * fa > I * I && ot(gt, Ct, en((ne + rt) / (2 * rt) * 1.1 - 0.1) > Qo(gt, Ct) ? L.moon : dt, 1, Ku);
    });
  }), n.clouds.forEach((Y) => {
    const rt = Math.max(3, Y.w / f), st = rt * 0.6665, ht = Y.x / f, nt = Y.y / b, lt = ja(Y.fill, "#000000", 0.16);
    for (let I = Math.max(0, Math.floor(nt) - 1); I <= Math.min(l - 1, nt + st + 1); I++) for (let gt = Math.max(0, Math.floor(ht) - 1); gt <= Math.min(i - 1, ht + rt + 1); gt++) {
      const Ct = (gt + 0.5 - ht) / rt, Wt = (I + 0.5 - nt) / rt;
      Pp(Ct, Wt) && ot(gt, I, !Pp(Ct, Wt + 1 / rt) || en((Wt - 0.42) / 0.25) * 0.8 > Qo(gt, I) ? lt : Y.fill, Y.o, Xu);
    }
  }), n.fogs.forEach((Y) => {
    const rt = Math.floor(Y.y / b), st = Math.max(rt, Math.floor((Y.y + 6 * Q) / b) - 1), ht = Math.floor(Y.x / f), nt = Math.floor((Y.x + Y.w) / f);
    for (let lt = rt; lt <= st; lt++) for (let I = ht; I <= nt; I++) {
      const gt = (I - ht) / Math.max(1, nt - ht);
      ot(I, lt, Y.c, Y.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((Y) => {
    const rt = Y.x / f, st = Math.floor(Y.y / b);
    for (let ht = 0; ht < S; ht++) ot(Math.floor(rt - 0.208 * ht * b / f), st + ht, L.rain, Y.o, Ju);
  });
  const Ft = Math.max(0, Math.round(4.4 / f / 2.6));
  return n.flakes.forEach((Y) => {
    const rt = Math.floor(Y.x / f), st = Math.floor(Y.y / b);
    ot(rt, st, L.snow, Y.o, Nr);
    for (let ht = 1; ht <= Ft; ht++)
      ot(rt - ht, st, L.snow, Y.o, Nr), ot(rt + ht, st, L.snow, Y.o, Nr), ot(rt, st - ht, L.snow, Y.o, Nr), ot(rt, st + ht, L.snow, Y.o, Nr);
  }), n.bolts.forEach((Y) => {
    if (f <= 3.5)
      for (let rt = Math.floor(Y.y / b); rt <= (Y.y + 24) / b; rt++) for (let st = Math.floor(Y.x / f); st <= (Y.x + 11) / f; st++)
        n0(u0, (st + 0.5) * f - Y.x, (rt + 0.5) * b - Y.y) && ot(st, rt, L.sun, 1, Ns);
    else {
      const rt = Math.round(Y.x / f), st = Math.round(Y.y / b);
      f0.forEach((ht, nt) => ht.split("").forEach((lt, I) => {
        lt === "#" && ot(rt + I, st + nt, L.sun, 1, Ns);
      }));
    }
  }), { col: z, ids: H };
}
function m0(o, n) {
  const i = n.px, l = Math.max(6, Math.round(n.width / i)), f = Math.max(6, Math.round(n.height / i)), b = n.width / l, g = n.height / f, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, T = (k) => {
    const K = tf(k, n);
    return h0(K, ef(K, { clock: v, ambient: n.ambient, seed: n.seed }), l, f, b, g, v, n.ambient);
  }, L = T(o), _ = n.reveal == null ? 1 : en(n.reveal);
  let E = L.col, O = L.ids;
  if (_ < 1) {
    const k = n.prev ? T(n.prev) : null, K = _ * (l + 12);
    E = new Array(l * f), O = new Uint8Array(l * f);
    for (let Q = 0; Q < l * f; Q++) {
      const z = Q % l, H = Q / l | 0;
      (n.reduce ? _ : en((K - z) / 12)) > Qo(z, H) ? (E[Q] = L.col[Q], O[Q] = L.ids[Q]) : k ? (E[Q] = k.col[Q], O[Q] = k.ids[Q]) : (E[Q] = null, O[Q] = 255);
    }
  }
  return r0(E, O, l, f, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function g0(o, n, i) {
  const l = i.width, f = i.height, b = i.reveal == null ? 1 : en(i.reveal), g = (O, k) => {
    const K = tf(k, i);
    b0(O, K, ef(K, i));
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
  const L = T.getContext("2d");
  L.setTransform(o.getTransform()), L.clearRect(0, 0, l, f), g(L, n);
  const _ = b * (l + 64) - 64, E = L.createLinearGradient(_, 0, _ + 64, 0);
  E.addColorStop(0, "rgba(0,0,0,1)"), E.addColorStop(1, "rgba(0,0,0,0)"), L.globalCompositeOperation = "destination-in", L.fillStyle = E, L.fillRect(0, 0, l, f), L.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(T, 0, 0), o.restore();
}
function b0(o, n, i) {
  const { W: l, H: f, S: b, C: g, cw: v, yb: T, glowAt: L, soft: _, tw: E, sy: O } = n, k = o.getTransform().a || 1, K = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * k : 0, o.shadowOffsetY = S ? 1.5 * k : 0;
  }, Q = (S, Ft) => {
    const Y = Ds(S);
    return "rgba(" + Y[0] + "," + Y[1] + "," + Y[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, z = (S, Ft) => {
    const Y = o.createLinearGradient(0, 0, l, 0);
    Y.addColorStop(0, S[0]);
    for (let rt = 0; rt < S.length - 1; rt++) {
      const st = (rt + Ft) * v, ht = (st - E / 2) / l, nt = (st + E / 2) / l;
      ht > 0 && ht < 1 && Y.addColorStop(ht, S[rt]), nt > 0 && nt < 1 && Y.addColorStop(nt, S[rt + 1]);
    }
    return Y.addColorStop(1, S[S.length - 1]), Y;
  }, H = Math.max(24, Math.ceil(l / 4)), tt = (S, Ft) => {
    o.beginPath();
    for (let Y = 0; Y <= H; Y++) {
      const rt = l * Y / H, st = S == null ? 0 : T(rt) + S;
      Y ? o.lineTo(rt, st) : o.moveTo(rt, st);
    }
    for (let Y = H; Y >= 0; Y--) {
      const rt = l * Y / H;
      o.lineTo(rt, T(rt) + Ft);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = z(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, l, f);
  const ot = o.createLinearGradient(0, 0, l, 0);
  for (let S = 0; S <= 64; S++) {
    const Ft = L(l * S / 64);
    ot.addColorStop(S / 64, Q(Ft.c, Math.min(1, Ft.a)));
  }
  o.fillStyle = ot;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, tt(S * 2 * O, (S + 1) * 2 * O);
  o.fillStyle = z(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const ct = Math.max(0.5, _), et = 6;
  o.globalAlpha = 1, tt(null, -ct);
  for (let S = 0; S < et; S++)
    o.globalAlpha = 1 - (S + 0.5) / et, tt(-ct + 2 * ct * S / et, -ct + 2 * ct * (S + 1) / et);
  o.globalAlpha = 1;
  const F = new Path2D(d0), G = new Path2D(c0), mt = new Path2D(l0), kt = new Path2D(p0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(F), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Nt = ja(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ft = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ft.addColorStop(0, Q(Nt, 0.42)), Ft.addColorStop(0.7, Q(Nt, 0)), o.fillStyle = Ft, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const Y = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    Y.addColorStop(0.6, g.sun), Y.addColorStop(1, g.sunEdge), o.fillStyle = Y, K(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), K(!1);
  });
  const dt = ja(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ft = o.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, dt), Ft.addColorStop(1, g.moon), o.fillStyle = Ft, K(!0), o.fill(G), K(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, K(!0), o.fill(mt), K(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ft = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ft.addColorStop(0, Q(S.c, 0)), Ft.addColorStop(0.25, Q(S.c, S.a)), Ft.addColorStop(0.75, Q(S.c, S.a)), Ft.addColorStop(1, Q(S.c, 0)), o.fillStyle = Ft, o.fillRect(S.x, S.y, S.w, 6 * O);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(kt), o.restore();
  }), o.restore();
}
const w0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, bs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, ic = (o, n) => '<path class="' + n + '" d="' + o + '"/>', v0 = (o, n) => ' style="animation-delay:-' + Math.round(o * 137 % n) + 'ms"', qa = (o, n, i, l) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + v0(o, 2400) + ' d="M' + o + " " + (n - i) + "L" + (o + f) + " " + (n - f) + "L" + (o + i) + " " + n + "L" + (o + f) + " " + (n + f) + "L" + o + " " + (n + i) + "L" + (o - f) + " " + (n + f) + "L" + (o - i) + " " + n + "L" + (o - f) + " " + (n - f) + 'Z"/>';
}, Rp = ([o, n, i], l) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + n + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', y0 = (o, n) => n ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', x0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + n + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + n + ' 60.65)"/></g>') : [19, 26, 33].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + n + ' 38)"/></g>')).join(""), k0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([n, i], l) => '<circle class="wbFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + n + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function M0(o, n, i, l) {
  const f = (b) => '<g filter="url(#' + l + '-sh)">' + b + "</g>";
  return o === "clear" ? n ? f(Rp(i ? bs.l : bs.s, l)) + (i ? qa(70, 20, 5.83, 1) + qa(78.33, 41.67, 3.75, 0.8) + qa(60, 71.67, 3.33, 0.6) : qa(42, 12, 3.5, 1) + qa(47, 25, 2.25, 0.8) + qa(36, 43, 2, 0.6)) : f(y0(l, i)) : o === "partly" ? f(n ? Rp(i ? bs.lp : bs.sp, l) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(ic(i ? Er.lp : Er.sp, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(73.33, 16.67, 4.17, 0.9) : qa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? f(ic(i ? Er.lc : Er.s, n ? "wbCloudLight" : "wbBright")) + (n ? i ? qa(15, 15, 3.75, 0.8) + qa(76.67, 13.33, 2.92, 0.6) : qa(9, 9, 2.25, 0.8) + qa(46, 8, 1.75, 0.6) : "") : f(ic(i ? Er.lr : Er.s, "wbCloudLight")) + (o === "rain" ? x0(i) : k0(i));
}
const S0 = (o, n) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (n ? 1.6 : 1) + '" stdDeviation="' + (n ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function _0(o, n, i, l) {
  let f = w0(o);
  const b = f === "night" || !!i;
  f === "night" && (f = "clear");
  const g = n ? 90 : 54;
  return { k: f, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + S0(l, n) + M0(f, b, n, l) + "</svg>" };
}
const C0 = [
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
], ws = (o, n) => (C0[n % 8 * 8 + o % 8] + 0.5) / 64, oo = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], ea = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Hp = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Kn = [255, 255, 255], pa = oo("#26221e"), Np = oo("#0288d1"), A0 = oo("#01579b"), sc = oo(za.cloudDay), lc = oo(za.cloudNight), vs = oo(za.dusk), cc = oo(za.sunEdge), L0 = oo(za.sun), T0 = 10, Op = 0.3, an = 56, af = 21;
function D0(o) {
  const n = Array.from({ length: af }, () => new Array(an).fill(void 0)), i = (g, v, T) => {
    n[v][g] = T;
  }, l = ea(vs, pa, 0.35), f = ea(pa, Kn, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? an - 2 : an - 1;
    for (let T = 6 - g; T <= v; T++) i(T, g, g < 2 ? l : g === 6 ? f : pa);
  }
  const b = [vs, cc, lc, oo(za.skyRainDay), ea(vs, pa, 0.2), ea(o, pa, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const T = 9 + v * 6;
    for (let L = 0; L < g; L++) {
      const _ = b[(v * 2 + L * 3) % b.length];
      for (let E = T; E < T + 5; E++)
        i(E, 7 + L * 2, ea(_, pa, 0.12)), i(E, 8 + L * 2, L === g - 1 ? ea(_, Kn, 0.3) : _);
      i(T + 5, 7 + L * 2, pa), i(T + 5, 8 + L * 2, pa);
    }
  });
  for (let g = 7; g <= 12; g++) i(5, g, pa);
  i(5, 13, cc);
  for (let g = 7; g <= 14; g++) for (let v = 42; v <= 51; v++) i(v, g, v === 51 ? lc : sc);
  for (let g = 43; g <= 50; g += 2)
    i(g, 12, pa), i(g, 9, ea(pa, sc, 0.4));
  for (let g = 40; g <= 53; g++) i(g, 14, g === 40 || g === 53 ? lc : sc);
  for (let g = 15; g <= 18; g++) for (let v = 46; v <= 49; v++) i(v, g, g === 18 ? pa : g === 16 ? cc : vs);
  for (let g = 15; g <= 19; g++) i(44, g, pa);
  return i(44, 20, L0), n;
}
function E0(o, n, i, l) {
  const f = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(f * b * 4), v = oo(l.skyClearDay), T = oo(l.skyFogDay), L = D0(v), _ = Math.round(b * 0.55), E = Mi(1 - Math.log(i / Op) / Math.log(T0 / Op)), O = ea(v, T, E), k = (H) => Mi((H - 0.1) / 0.9), K = Mi((1 - Math.exp(-2 / i) - 0.2) / 0.8), Q = Math.round(f / 2 - an / 2), z = _ + 3;
  for (let H = 0; H < b; H++) {
    const tt = z - 1 - H, ot = H - z;
    for (let ct = 0; ct < f; ct++) {
      const et = ct - Q;
      let F, G;
      const mt = tt >= 0 && tt < af && et >= 0 && et < an ? L[tt][et] : void 0;
      if (mt)
        F = mt, G = K;
      else if (tt >= 0 && tt <= 1 && et >= 4 - tt && et <= 5 - tt)
        F = ea(Kn, Np, 0.15), G = K;
      else if (H < _) {
        const dt = Mi(((H + 0.5) / _ - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(dt + ws(ct + 2, H + 5)));
        F = ea(O, Kn, S * 0.1), G = E * 0.95;
      } else {
        const dt = (H - _ + 0.5) / (b - _), S = Math.min(1.5, 6e-3 / (dt * dt)), Ft = Mi(dt * 1.4) * 3, Y = Math.min(3, Math.floor(Ft + ws(ct + 1, H + 6)));
        F = ea(Np, A0, Y / 3);
        const rt = 1 + Math.round(dt * 7), st = Math.floor(ct / (rt * 3)), ht = 0.06 + 0.16 * dt, nt = ct % (rt * 3) < rt;
        nt && Hp(st, H) < ht ? F = ea(F, Kn, 0.18 + 0.1 * (1 - dt)) : nt && dt > 0.5 && Hp(st, H - 1) < ht && (F = ea(F, pa, 0.12)), G = k(1 - Math.exp(-S / i)), ot === 0 && et >= 3 && et <= 8 ? (F = ea(F, Kn, et < 6 ? 0.8 : 0.45), G = K) : ot >= 0 && ot <= 2 && et >= an && et < an + 40 ? ((1 - (et - an) / 40) * (ot === 1 ? 0.9 : 0.5) > ws(ct, H + 3) && (F = ea(F, Kn, 0.5)), G = K) : ot === 0 && et >= 6 && et < an && (F = ea(F, pa, et % 2 === 0 ? 0.35 : 0.2), G = K);
      }
      const kt = G > ws(ct, H) ? T : F, Nt = (H * f + ct) * 4;
      g[Nt] = kt[0], g[Nt + 1] = kt[1], g[Nt + 2] = kt[2], g[Nt + 3] = 255;
    }
  }
  return { data: g, w: f, h: b };
}
const B0 = {
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
}, P0 = 1.6;
function R0(o, n) {
  const i = o ? B0[String(o).toUpperCase()] : void 0;
  if (!i || !(n > 0)) return;
  const l = (b) => Math.abs(Math.log(b[2] / n)), f = i.reduce((b, g) => l(g) < l(b) ? g : b);
  return l(f) <= Math.log(P0) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const H0 = (o, n) => n === "mi" ? o * 1.609344 : n === "m" ? o / 1e3 : n === "ft" ? o * 3048e-7 : n === "yd" ? o * 9144e-7 : o, N0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Pe = {
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
function O0() {
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
const dc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", I0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", F0 = 300, Es = (o) => Math.min(1, F0 / Math.max(1, o)), pc = (o, n) => 1 + (n / 100 - 1) * Es(o.offsetWidth);
function q0(o, n) {
  n.style.cssText += ";" + O0();
  let i = null;
  const l = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var H, tt;
    const E = _.pointerType === "touch" || We() ? null : (tt = (H = _.target).closest) == null ? void 0 : tt.call(H, dc);
    if (i && i !== E && l(i), i = E, !E || E.disabled) return;
    const O = Pe.pivot, k = E.getBoundingClientRect(), K = (_.clientX - k.left) / k.width, Q = (_.clientY - k.top) / k.height, z = 1;
    E.classList.add("mvPv", "mvMoving", "mvLit"), E.style.setProperty("--pv-persp", O.persp / Es(Math.max(E.offsetWidth, E.offsetHeight)) + "px"), E.style.setProperty("--ry", (z * (K - 0.5) * 2 * O.tilt * Es(E.offsetWidth)).toFixed(3) + "deg"), E.style.setProperty("--rx", (z * -(Q - 0.5) * 2 * O.tilt * Es(E.offsetHeight)).toFixed(3) + "deg"), E.style.setProperty("--mx", (K * 100).toFixed(1) + "%"), E.style.setProperty("--my", (Q * 100).toFixed(1) + "%"), E._down || E.style.setProperty("--sc", pc(E, O.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    i && !i.contains(_.relatedTarget) && (l(i), i = null);
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const E = We() ? null : (k = (O = _.target).closest) == null ? void 0 : k.call(O, dc);
    E && (E._down = !0, E.classList.add("mvPv"), E.classList.remove("mvMoving"), E.style.setProperty("--sc", pc(E, Pe.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var O, k;
    const E = (k = (O = _.target).closest) == null ? void 0 : k.call(O, dc);
    E && (E._down = !1, E.style.setProperty("--sc", _.pointerType === "touch" ? 1 : pc(E, Pe.pivot.lift)));
  });
  let f = null;
  o.addEventListener("pointerover", (_) => {
    var E, O, k;
    _.pointerType !== "touch" && ((k = (O = (E = _.target).closest) == null ? void 0 : O.call(E, ".tfBar")) == null || k.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var O, k;
    const E = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    E && !E.contains(_.relatedTarget) && E !== f && E.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var O, k;
    const E = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    E && (f = E, E.classList.add("mvHold"));
  });
  const b = (_) => {
    if (!f) return;
    f.classList.remove("mvHold");
    const E = f.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < E.left || _.clientX > E.right || _.clientY < E.top || _.clientY > E.bottom) && f.classList.remove("mvHover"), f = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (_) => {
    var E, O;
    (O = (E = _.target).matches) != null && O.call(E, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var E;
    (E = _.target.classList) == null || E.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var O, k;
    const E = (k = (O = _.target).closest) == null ? void 0 : k.call(O, ".tfBar");
    !E || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (E.classList.add("mvHold"), clearTimeout(E._k), E._k = setTimeout(() => E.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var O, k;
    const E = (k = (O = _.target).closest) == null ? void 0 : k.call(O, "button.tfIcon[data-act]");
    E && V0(E);
  });
  let g = null;
  const v = (_, E, O) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const k = _.getBoundingClientRect(), K = k.width / 2, Q = k.height / 2, z = E.clientX - k.left - K, H = E.clientY - k.top - Q, tt = z ? K / Math.abs(z) : 1 / 0, ot = H ? Q / Math.abs(H) : 1 / 0, ct = Math.min(Math.max(1 / Math.min(tt, ot), 0), 1);
    let et = Math.atan2(H, z) * 180 / Math.PI + 90;
    et < 0 && (et += 360);
    const F = O ? 100 : ct * 100;
    _.style.setProperty("--edge-proximity", F.toFixed(3)), _.style.setProperty("--cursor-angle", et.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", O || F >= Pe.outline.lightAt);
  }, T = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, L = (_) => {
    var O;
    const E = (O = _.closest) == null ? void 0 : O.call(_, I0);
    return E && !n.classList.contains("tfEditing") ? E : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const E = L(_.target);
    g && g !== E && T(g), g = E, E && !E._down && v(E, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    g && !g.contains(_.relatedTarget) && (T(g), g = null);
  }), o.addEventListener("pointerdown", (_) => {
    const E = L(_.target);
    E && Pe.outline.press && (E._down = !0, v(E, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const E = L(_.target);
    E && (E._down = !1, _.pointerType === "touch" ? T(E) : v(E, _, !1));
  }), new MutationObserver((_) => {
    var E;
    for (const O of _) {
      const k = O.target;
      if (O.type === "attributes") {
        (E = k.classList) != null && E.contains("tfMoreBackdrop") && !k.hidden && O.oldValue !== null && Ip(k);
        continue;
      }
      O.addedNodes.forEach((K) => {
        K.nodeType === 1 && K.classList.contains("tfMoreBackdrop") && !K.hidden && Ip(K);
      });
    }
  }).observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const of = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function nf(o, n) {
  const i = [];
  for (let l = o; l && l !== n && l.parentNode; l = l.parentNode) i.unshift([...l.parentNode.children].indexOf(l));
  return i;
}
const rf = (o, n) => n.reduce((i, l) => i == null ? void 0 : i.children[l], o);
function V0(o) {
  var k;
  if (We() || o._warp) return;
  const n = Pe.warp, i = n.amount / 100, l = o.firstElementChild;
  if (!l) return;
  const f = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = of(o), T = (k = v.dataset) == null ? void 0 : k.k, L = nf(o, v), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const E = l.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...f, filter: b }], { duration: n.win, easing: Re.exit, fill: "forwards" }), O = performance.now();
  E.finished.then(() => {
    const K = () => {
      var ct, et;
      const Q = T ? v.isConnected ? v : (ct = g.querySelector) == null ? void 0 : ct.call(g, '[data-k="' + CSS.escape(T) + '"]') : v, z = Q && rf(Q, L);
      if (z === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - O < 420) {
        requestAnimationFrame(K);
        return;
      }
      (((et = z == null ? void 0 : z.matches) != null && et.call(z, "button.tfIcon") ? z : o).firstElementChild || l).animate([{ ...f, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: n.wout, easing: Re[n.ease] }), E.cancel(), o._warp = 0;
    };
    K();
  });
}
const sf = (o) => {
  let n = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const l = o[i - 1] || o[i], f = o[i], b = o[i + 1], g = o[i + 2] || b, v = [f[0] + (b[0] - l[0]) / 6, f[1] + (b[1] - l[1]) / 6], T = [b[0] - (g[0] - f[0]) / 6, b[1] - (g[1] - f[1]) / 6];
    n += "C" + v.map((L) => L.toFixed(1)).join(" ") + " " + T.map((L) => L.toFixed(1)).join(" ") + " " + b.map((L) => L.toFixed(1)).join(" ");
  }
  return n;
}, lf = (o, n, i, l = "mvGrid") => [0, 1, 2].map((f) => {
  const b = (n + (i - n) * f / 2).toFixed(1);
  return '<line class="' + l + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function cf(o, n = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(n != null && n.getTotalLength)) return;
  const l = Pe.graphs, f = n.getTotalLength();
  n.animate([{ strokeDasharray: f, strokeDashoffset: f }, { strokeDasharray: f, strokeDashoffset: 0 }], { duration: l.draw, easing: Re.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: l.draw * 0.6, delay: l.draw * 0.3 + g * 12, easing: Re.standard, fill: "backwards" }));
}
function Bs(o, n, i, l, f) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = l + "px", o.style.width = f + "px", We() || n === l && i === f) return;
  const b = Pe.tabs, g = b.stretch / 100, v = (_, E) => ({ left: _ + "px", width: E + "px" }), L = l > n ? v(n + (l - n) * (0.15 * (1 - g)), l + f - (n + (l - n) * (0.15 * (1 - g)))) : v(l, n + i - l - (n - l) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...L }, v(l, f)], { duration: b.dur, easing: Re.standard });
}
function W0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (f) => f.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), l = (f, b) => b ? [...f.children].indexOf(b) : -1;
  o.addEventListener("click", (f) => {
    var tt, ot, ct;
    const b = (ot = (tt = f.target).closest) == null ? void 0 : ot.call(tt, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || We() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const T = l(g, v), L = g.getBoundingClientRect(), _ = v.getBoundingClientRect(), E = getComputedStyle(v).borderRadius, O = g.getRootNode(), k = of(g), K = (ct = k.dataset) == null ? void 0 : ct.k, Q = nf(g, k), z = performance.now(), H = () => {
      var S, Ft, Y;
      const et = K && !k.isConnected ? (S = O.querySelector) == null ? void 0 : S.call(O, '[data-k="' + CSS.escape(K) + '"]') : k, F = et && rf(et, Q), G = (Ft = F == null ? void 0 : F.matches) != null && Ft.call(F, n) ? i(F) : null;
      if (!G || l(F, G) === T) {
        performance.now() - z < 700 && requestAnimationFrame(H);
        return;
      }
      const mt = F.getBoundingClientRect(), kt = G.getBoundingClientRect(), Nt = getComputedStyle(G);
      (Y = F.querySelector(":scope>.mvSegInd")) == null || Y.remove();
      const dt = document.createElement("span");
      dt.className = "mvSegInd", dt.style.cssText = "top:" + (kt.top - mt.top - F.clientTop) + "px;height:" + kt.height + "px;border-radius:" + E + ";background:" + Nt.backgroundColor + ";box-shadow:" + Nt.boxShadow, getComputedStyle(F).position === "static" && (F.style.position = "relative"), F.prepend(dt), F.classList.add("mvSegMoving"), Bs(dt, _.left - L.left - F.clientLeft, _.width, kt.left - mt.left - F.clientLeft, kt.width), clearTimeout(F._seg), F._seg = setTimeout(() => {
        dt.remove(), F.classList.remove("mvSegMoving");
      }, Pe.tabs.dur + 20);
    };
    requestAnimationFrame(H);
  }, !0);
}
const df = (o) => getComputedStyle(o).placeItems.startsWith("end");
function Ip(o) {
  const n = o.firstElementChild;
  if (We() || !n || n.classList.contains("still")) return;
  const i = Pe.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Re.standard }), n.style.animation = "none", n.animate(df(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Re[i.ease] }), [...(n.classList.contains("tfMorePair") && n.querySelector(".tfMore") || n).children].forEach((f, b) => f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Re.standard, fill: "backwards" }));
}
function j0(o, n) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (We() || !i || o.hidden || o._closing) {
    n();
    return;
  }
  const l = Pe.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + l.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: l.close, easing: Re.exit, fill: "forwards" });
  const f = i.animate(df(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + l.from / 100 + ")" }], { duration: l.close, easing: Re.exit, fill: "forwards" });
  let b = !1;
  const g = () => {
    b || (b = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((v) => v.cancel()), i.getAnimations().forEach((v) => v.cancel()), n());
  };
  f.finished.then(g, g), setTimeout(g, l.close + 80);
}
const z0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function G0(o, n) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", z0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: n }));
}
function $0(o) {
  if (We()) return;
  const n = Pe.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: n.dur, easing: Re.spring });
  const i = o.querySelector(".mvTick path");
  i && n.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: n.dur * 0.5, easing: Re.standard, fill: "backwards" });
}
const uc = (o, n, i, l, f = 1) => (o + n * i * f) * Math.pow(l, f);
function fc(o) {
  const n = Pe.drag.squash / 100;
  !o || We() || !n || o.animate([{ transform: "scale(" + (1 + n * 0.4) + "," + (1 - n) + ")" }, { transform: "scale(" + (1 - n * 0.1) + "," + (1 + n * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Fp(o) {
  if (!o || We()) return;
  const n = Pe.expand;
  [...o.children].slice(1).forEach((i, l) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: n.delay + l * n.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const je = 6e4, se = 36e5, va = 864e5, Li = 1440, U0 = 6, Y0 = 10 * je, qp = 3, Z0 = 3, ys = { day: [6, 22], waking: [7, 23], all: [0, 24] }, K0 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], X0 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Vp = (o, n, i, l) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const b = Math.cos(f * Math.PI / 180), g = Math.sin(f * Math.PI / 180), v = i + 2, T = i + 2 + l;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * T).toFixed(2) + " " + (n + g * T).toFixed(2);
}).join("") + '"/>', Zo = (o) => '<path d="' + X0 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Ko = (o) => '<path d="' + o + '"/>', Wp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function J0(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? Wp : Vp(12, 12, 4, 2.5);
    case "clear-night":
      return Wp;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Vp(7.5, 7.5, 2.6, 1.4)) + Zo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Zo();
    case "fog":
      return Ko("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Zo(i) + Ko("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Zo(i) + Ko("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Zo(i) + Ko("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Zo(i) + Ko("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Zo(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Zo(i) + Ko("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Zo(i) + Ko("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Ko("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Ko("M12 8v5M12 16h.01");
  }
}
const hc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + J0(o, n) + "</svg>", Q0 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), t1 = 30 * je, e1 = 7, a1 = 3, jp = 1, o1 = je, n1 = 15 * je, r1 = 5, le = {
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
}, Rc = 7, Jo = 256, i1 = 3, zp = 700, s1 = 1800, pf = 5 * je;
let xs = null, Gp = 0, Si = null;
function l1() {
  return xs && Date.now() - Gp < pf ? Promise.resolve(xs) : Si || (Si = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var l, f;
    const n = (((l = o.radar) == null ? void 0 : l.past) || []).slice(-6), i = (((f = o.radar) == null ? void 0 : f.nowcast) || []).slice(0, i1);
    return xs = { host: o.host, frames: [...n.map((b) => ({ ...b, past: !0 })), ...i] }, Gp = Date.now(), xs;
  }).finally(() => {
    Si = null;
  }), Si);
}
function c1(o, n, i, l) {
  const f = Rc, b = 2 ** f, g = o * Math.PI / 180, v = (n + 180) / 360 * b * Jo, T = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Jo, L = v - i / 2, _ = T - l / 2, E = [];
  for (let O = Math.floor(L / Jo); O <= Math.floor((L + i - 1) / Jo); O++) for (let k = Math.floor(_ / Jo); k <= Math.floor((_ + l - 1) / Jo); k++)
    k < 0 || k >= b || E.push({ x: (O % b + b) % b, y: k, left: O * Jo - L, top: k * Jo - _ });
  return E;
}
const d1 = {
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
}, p1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], u1 = Object.keys(wt.phases), f1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, $p = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, uf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ks = 100, Up = "µg/m³", h1 = "weather_alerts.air_quality_pollen", Os = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], m1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, g1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], b1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, w1 = { daily: 1, hourly: 2 }, Mt = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), ta = (o, n) => o.replace(/\{(\w+)\}/g, (i, l) => n[l] ?? ""), tn = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Yp = /* @__PURE__ */ new Map();
function ff(o) {
  let n = Yp.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", l = document.createElementNS(i, "svg"), f = document.createElementNS(i, "path");
    l.setAttribute("viewBox", "0 0 24 24"), l.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", o), l.append(f), document.body.append(l);
    const b = f.getBBox();
    l.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, T = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * T).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * T).toFixed(2) + "px" : "", Yp.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : tn(o);
}
const v1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, he = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Zp = /* @__PURE__ */ new Map(), Kp = /* @__PURE__ */ new Map(), mc = /* @__PURE__ */ new WeakMap(), y1 = (o) => {
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
  const f = (n == null ? void 0 : n.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, g = f ? "en-US" : y1(n), v = JSON.stringify([g, b]);
  let T = Zp.get(v);
  if (!T) {
    try {
      T = new Intl.NumberFormat(g, b);
    } catch {
      T = new Intl.NumberFormat(void 0, b);
    }
    Zp.set(v, T);
  }
  return T.format(l);
}
const Oc = (o) => {
  var n;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.language) || (o == null ? void 0 : o.language) || void 0;
};
function x1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (mc.has(o)) return mc.get(o);
  const n = o.time_format, i = n === "language" || n === "system" || !n ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(n === "language" ? o.language : void 0).includes("10") : n === "12";
  return mc.set(o, i), i;
}
const hf = (o) => {
  var n, i;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function mf(o, n) {
  const i = JSON.stringify([o, n]);
  let l = Kp.get(i);
  if (!l) {
    try {
      l = new Intl.DateTimeFormat(o, n);
    } catch {
      l = new Intl.DateTimeFormat(void 0, { ...n, timeZone: void 0 });
    }
    Kp.set(i, l);
  }
  return l;
}
const Xe = (o, n) => mf(Oc(n), { hour: "numeric", minute: "2-digit", hourCycle: x1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: hf(n) }).format(o), Xp = (o, n) => mf(Oc(n), { weekday: "short", timeZone: hf(n) }).format(o), k1 = (o, n) => o.toLocaleDateString(Oc(n), { weekday: "narrow" }), Me = (o, n) => he(n) ? te(Math.round(Number(n)), o.locale) + "°" : "–", xn = (o) => {
  const n = new Date(o);
  return n.setHours(0, 0, 0, 0), n;
}, Br = (o, n) => o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate(), ua = Math.PI / 180, M1 = 2440588, S1 = 2451545, Is = ua * 23.4397, _1 = 149598e3, C1 = -0.833 * ua, A1 = 0.133 * ua, Jp = 5 * je, gf = (o) => o.getTime() / va - 0.5 + M1 - S1, bf = (o, n) => Math.atan2(Math.sin(o) * Math.cos(Is) - Math.tan(n) * Math.sin(Is), Math.cos(o)), wf = (o, n) => Math.asin(Math.sin(n) * Math.cos(Is) + Math.cos(n) * Math.sin(Is) * Math.sin(o)), L1 = (o, n) => ua * (280.16 + 360.9856235 * o) - n, T1 = (o, n, i) => Math.asin(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(o));
function vf(o) {
  const n = ua * (357.5291 + 0.98560028 * o), i = ua * (1.9148 * Math.sin(n) + 0.02 * Math.sin(2 * n) + 3e-4 * Math.sin(3 * n)), l = n + i + ua * 102.9372 + Math.PI;
  return { ra: bf(l, 0), dec: wf(l, 0), dist: _1 };
}
function yf(o) {
  const n = ua * (218.316 + 13.176396 * o), i = ua * (134.963 + 13.064993 * o), l = ua * (93.272 + 13.22935 * o), f = n + ua * 6.289 * Math.sin(i), b = ua * 5.128 * Math.sin(l);
  return { ra: bf(f, b), dec: wf(f, b), dist: 385001 - 20905 * Math.cos(i) };
}
const xf = (o, n, i, l) => {
  const f = gf(n), b = o(f);
  return T1(L1(f, ua * -l) - b.ra, ua * i, b.dec);
}, Fs = (o, n, i) => xf(vf, o, n, i), D1 = (o, n, i) => xf(yf, o, n, i);
function kf(o, n, i, l) {
  const f = {};
  let b = i.getTime(), g = o(i) - n;
  for (let v = b + Jp; v <= l.getTime(); v += Jp) {
    const T = o(new Date(v)) - n;
    if (g < 0 != T < 0) {
      const L = new Date(b + (v - b) * g / (g - T));
      T > 0 ? f.rise ?? (f.rise = L) : f.set ?? (f.set = L);
    }
    b = v, g = T;
  }
  return f;
}
const Mf = (o) => {
  const n = xn(o);
  return [n, new Date(n.getTime() + va)];
}, E1 = (o, n, i) => kf((l) => Fs(l, n, i), C1, ...Mf(o)), B1 = (o, n, i) => kf((l) => D1(l, n, i), A1, ...Mf(o));
function gc(o) {
  const n = gf(o), i = vf(n), l = yf(n), f = Math.acos(Math.sin(i.dec) * Math.sin(l.dec) + Math.cos(i.dec) * Math.cos(l.dec) * Math.cos(i.ra - l.ra)), b = Math.atan2(i.dist * Math.sin(f), l.dist - i.dist * Math.cos(f)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - l.ra), Math.sin(i.dec) * Math.cos(l.dec) - Math.cos(i.dec) * Math.sin(l.dec) * Math.cos(i.ra - l.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const P1 = (o) => {
  const n = o * 28;
  return n < 0.5 || n > 27.5 ? "new_moon" : n < 6.5 ? "waxing_crescent" : n < 7.5 ? "first_quarter" : n < 13.5 ? "waxing_gibbous" : n < 14.5 ? "full_moon" : n < 20.5 ? "waning_gibbous" : n < 21.5 ? "last_quarter" : "waning_crescent";
}, Or = (o) => {
  const n = o == null ? void 0 : o.config;
  return n && he(n.latitude) && he(n.longitude) ? { lat: Number(n.latitude), lon: Number(n.longitude) } : null;
};
function Pr(o, n) {
  var L, _, E;
  const i = Or(o), l = i ? E1(n, i.lat, i.lon) : {}, f = (L = o == null ? void 0 : o.states) == null ? void 0 : L["sun.sun"], b = xn(n).getTime(), g = (O) => {
    const k = O ? new Date(O) : null;
    return k && Number.isFinite(k.getTime()) && xn(k).getTime() === b ? k : null;
  }, v = g((_ = f == null ? void 0 : f.attributes) == null ? void 0 : _.next_rising), T = g((E = f == null ? void 0 : f.attributes) == null ? void 0 : E.next_setting);
  return v && (l.rise = v), T && (l.set = T), l;
}
function R1(o) {
  var l;
  const n = (l = o == null ? void 0 : o.states) == null ? void 0 : l["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Or(o);
  return i ? Fs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Xn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Ir = (o, n) => {
  var l;
  const i = (l = o.entities) == null ? void 0 : l[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var l, f;
  for (const b of n) {
    const g = (l = o.states) == null ? void 0 : l[b];
    if (!Xn(g)) continue;
    const v = (f = g.attributes) == null ? void 0 : f[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, H1 = (o, n) => n.map((i) => {
  var l;
  return (l = o.states) == null ? void 0 : l[i];
}).find(Xn), N1 = (o, n, i) => n.map((l) => {
  var f;
  return (f = o.states) == null ? void 0 : f[l];
}).find((l) => {
  var f;
  return Xn(l) && (((f = l.attributes) == null ? void 0 : f.supported_features) == null || Number(l.attributes.supported_features) & w1[i]);
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
function Ps(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [f, ...b] = o.formatEntityAttributeValueToParts(n, i, l).map((g) => g.value);
      return { number: f, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: te(l, o.locale), unit: yn(o, n, i) };
}
function Qp(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, l);
  } catch {
  }
  const f = Ps(o, n, i, l);
  return (f.number + " " + f.unit).trim();
}
function Xo(o, n) {
  var l;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (l = n.attributes) == null ? void 0 : l.unit_of_measurement;
  return d1[n.state] || (i && he(n.state) ? te(n.state, o.locale) + " " + i : n.state);
}
function wn(o, n) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(n, { type: "entity" });
  } catch {
  }
  return ((i = n.attributes) == null ? void 0 : i.friendly_name) || n.entity_id;
}
const tu = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ms = (o) => uf.find(([, n]) => o <= n)[0];
function O1(o, n) {
  if (n === "Beaufort") return Math.round(o);
  const i = n ? m1[n] : void 0;
  if (i === void 0) return;
  const l = g1.findIndex((f) => o * i < f);
  return l === -1 ? 12 : l;
}
const eu = (o, n) => {
  const i = n ? b1[n] : void 0;
  return i === void 0 ? void 0 : o * i;
}, au = (o) => Object.keys(o.states || {}).find((n) => {
  var i, l;
  return n.startsWith("sensor.") && ((l = (i = o.entities) == null ? void 0 : i[n]) == null ? void 0 : l.platform) === "moon";
}), bc = (o) => Object.values(o.states || {}).filter((n) => {
  var i, l;
  return n.entity_id.startsWith("sensor.") && ((i = n.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((l = n.attributes) == null ? void 0 : l.state_class) ?? "") && Ir(o, n.entity_id);
}).map((n) => n.entity_id).sort()[0];
function I1(o) {
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
const Sf = (o, n, i) => {
  var f, b, g;
  const l = (b = (f = o.entities) == null ? void 0 : f[i]) == null ? void 0 : b.platform;
  return !!l && !!((g = n[l]) != null && g.includes(h1));
};
function F1(o, n) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((l) => {
    var f;
    return l.entity_id.startsWith("sensor.") && Os.includes(((f = l.attributes) == null ? void 0 : f.device_class) ?? "") && Ir(o, l.entity_id) && Sf(o, n, l.entity_id);
  }).sort((l, f) => l.entity_id.localeCompare(f.entity_id)).forEach((l) => {
    i.has(l.attributes.device_class) || i.set(l.attributes.device_class, l.entity_id);
  }), Os.map((l) => i.get(l)).filter(Boolean);
}
const q1 = (o, n) => Object.values(o.states || {}).filter((i) => {
  var l, f;
  return i.entity_id.startsWith("sensor.") && Ir(o, i.entity_id) && Sf(o, n, i.entity_id) && (((f = (l = o.entities) == null ? void 0 : l[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function ou(o, n, i) {
  const l = Math.max(n - o, 1e-6), f = i[i.length - 1], b = i.find((L) => l / L <= 4) ?? f * Math.ceil(l / (4 * f)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const T = [];
  for (let L = g; L <= v + b / 1e3; L += b) T.push(L);
  return { min: g, max: v, ticks: T };
}
const V1 = (o, n, i) => {
  const l = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), f = l(o), b = l(n);
  return "rgb(" + f.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, W1 = (o, n, i, l) => {
  const f = i * Math.abs(1 - 2 * l), b = l < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + f + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, ca = ({ icon: o, name: n, sub: i, visual: l, double: f, backdrop: b, cls: g, zone: v, callouts: T }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + ff(o) + '</div><div class="wbText"><span class="wbName">' + Mt(n) + "</span>" + (i ? '<span class="wbSub">' + Mt(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (T != null && T.length ? '<div class="wbCallouts">' + T.slice(0, 3).map((L) => Array.isArray(L) ? '<span class="wbCallout"><span>' + Mt(L[0]) + "</span><span>" + Mt(L[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Mt(L) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + l + "</div>") + "</div>", Ss = (o) => '<div class="wbZoneM">' + o + "</div>", Va = (o, n) => '<div class="wbValue"><span class="wbNum">' + Mt(o) + "</span>" + (n ? '<span class="wbUnitV">' + Mt(n) + "</span>" : "") + "</div>";
function j1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, l = (v) => v / Li * 100 + "%", f = (v) => v.map((T) => T.t + "," + i(T.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + l(v.t) + '">' + tn(v.rise ? le.sunsetUp : le.sunsetDown) + Mt(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + Mt(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Li + ' 100" preserveAspectRatio="none">' + o.night.map(([v, T]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (T - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Li + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + f(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + l(v.t + 12) + ";width:" + l(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + l(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + l(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + Mt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + Mt(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + l(v.t) + '">' + Mt(v.label) + "</span>").join("") + "</div></div>", g;
}
function nu(o, n, i = 120, l = 300) {
  const g = o.map((H) => H.value), v = Math.min(...g), T = Math.max(...g), L = T - v || 1, _ = (H) => H / (o.length - 1) * l, E = (H) => 18 + (1 - (H - v) / L) * (i - 18 - 18), O = o.map((H, tt) => [_(tt), E(H.value)]), k = O.length > 2 ? sf(O) : "M" + O.map((H) => H[0].toFixed(1) + " " + H[1].toFixed(1)).join("L"), K = g.indexOf(T), Q = g.indexOf(v), z = (H) => H === 0 ? "start" : H === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + l + " " + i + '" aria-hidden="true">' + lf(l, 18, i - 18) + ('<path class="wbArea" d="' + k + "L" + l + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + k + '" vector-effect="non-scaling-stroke"></path><text x="' + _(K) + '" y="' + (E(T) - 6) + '" text-anchor="' + z(K) + '">' + Mt(n(T)) + '</text><text x="' + _(Q) + '" y="' + (E(v) + 14) + '" text-anchor="' + z(Q) + '">' + Mt(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Mt(o[0].label) + '</text><text x="' + l + '" y="' + i + '" text-anchor="end">' + Mt(o[o.length - 1].label) + "</text></svg>";
}
function z1(o, n) {
  const b = o.map((E) => E.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, T = v - g || 1, L = 300 / o.length, _ = (E) => (1 - (E - g) / T) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((E, O) => '<rect class="wbBar' + (E.now ? " wbNowBar" : "") + '" x="' + (O * L + L * 0.2) + '" y="' + _(E.value) + '" width="' + L * 0.6 + '" height="' + (104 - _(E.value)) + '" rx="6"></rect><text x="' + (O * L + L / 2) + '" y="120" text-anchor="middle">' + Mt(E.label) + "</text>").join("") + "</svg>";
}
const G1 = [
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
], $1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], ru = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], U1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Y1 = 0;
function iu(o, { getHass: n, entityId: i, style: l = "bitmap", motion: f = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: T } = {}) {
  var Ui, Bn;
  const L = "wb" + ++Y1 + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = l;
  const E = document.createElement("div");
  E.className = "wbBento", _.appendChild(E), o.replaceChildren(_);
  const O = document.createElement("div");
  O.className = "wb wbPopup", O.dataset.style = l, O.hidden = !0;
  const k = ["aq_tile", "pollen_tile", "radar_tile"], K = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), Q = { current: "wide", hourly: "wide", compared_to_average: "double" }, z = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], H = {};
  K.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = Q[c] || "tile", m.hidden = !0, z.includes(c) && (m.dataset.xl = ""), E.appendChild(m), H[c] = { el: m, html: null };
  });
  let tt = !1, ot = null, ct = 0, et = -1, F = !1, G = null, mt = "";
  const kt = "homecore-next-view", Nt = (() => {
    try {
      return localStorage.getItem(kt);
    } catch {
      return null;
    }
  })(), dt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Nt === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), Y = /* @__PURE__ */ new Date();
  const rt = {}, st = {}, ht = {}, nt = (c) => {
    var m;
    return ((m = ht[c]) == null ? void 0 : m.forecast) ?? [];
  }, lt = (c, m) => {
    var w;
    return ht[m] ? (w = c.states) == null ? void 0 : w[ht[m].entityId] : void 0;
  };
  function I(c) {
    const m = st[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete st[c]), ht[c] && delete ht[c];
  }
  function gt(c, m, w) {
    var R;
    if (typeof ((R = c.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((q) => {
        tt || st[m] !== y || (q != null && q.forecast ? ht[m] = { entityId: w, forecast: q.forecast } : delete ht[m], cn());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (q) {
      y.unsub = Promise.reject(q);
    }
    y.unsub.catch(() => {
      st[m] === y && delete st[m];
    }), st[m] = y;
  }
  function Ct(c, m) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const R = N1(c, m, y);
      ((w = st[y]) == null ? void 0 : w.entityId) !== (R == null ? void 0 : R.entity_id) && (I(y), R && gt(c, y, R.entity_id));
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
    var Z, J, $;
    const w = Ie(c, m, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, R = await Wt(c, y, new Date(Date.now() - 3 * se)), q = ($ = (J = (Z = R == null ? void 0 : R[y]) == null ? void 0 : Z.find((at) => {
      var it;
      return typeof ((it = at.a) == null ? void 0 : it.pressure) == "number";
    })) == null ? void 0 : J.a) == null ? void 0 : $.pressure;
    S.pressureHistory = typeof q == "number" ? { entityId: y, value: q } : void 0;
  }
  async function ra(c, m) {
    var J;
    const w = Ie(c, m, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, R = xn(/* @__PURE__ */ new Date()), q = await Wt(c, y, new Date(R.getTime() - e1 * va)), Z = /* @__PURE__ */ new Map();
    for (const $ of (q == null ? void 0 : q[y]) ?? []) {
      const at = (J = $.a) == null ? void 0 : J.temperature, it = new Date(($.lc ?? $.lu) * 1e3);
      if (typeof at != "number" || it >= R) continue;
      const bt = it.toDateString();
      Z.set(bt, Math.max(Z.get(bt) ?? -1 / 0, at));
    }
    S.temperatureHistory = { entityId: y, dailyHighs: [...Z.values()], days: [...Z.entries()].map(([$, at]) => ({ date: new Date($), high: at })) };
  }
  async function fa(c) {
    const m = bc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function So() {
    const c = n == null ? void 0 : n();
    if (!c || tt || typeof c.callWS != "function") return;
    const m = Vt(c);
    S.lastFetch = Date.now(), [ne(c, m), ra(c, m), fa(c)].forEach((w) => w.then(() => cn(), () => {
    }));
  }
  async function La() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const m = Ie(c, Vt(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, y = xn(/* @__PURE__ */ new Date());
    try {
      const R = await Wt(c, w, y), q = (Z) => ((R == null ? void 0 : R[w]) ?? []).map((J) => {
        var $;
        return { time: J.lu * 1e3, value: ($ = J.a) == null ? void 0 : $[Z] };
      }).filter((J) => typeof J.value == "number");
      S.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: q("temperature"), humidity: q("humidity") }, cn();
    } catch {
    }
  }
  async function nn(c) {
    const m = n == null ? void 0 : n();
    if (m)
      try {
        const w = await Wt(m, c, new Date(Date.now() - 24 * se), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((q) => he(q.s)), R = Math.max(1, Math.ceil(y.length / 48));
        S.aqHistory = { entityId: c, points: y.filter((q, Z) => Z % R === 0).map((q) => ({ label: Xe(new Date(q.lu * 1e3), m), value: Number(q.s) })) }, cn();
      } catch {
      }
  }
  function Mn(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      S.categories = I1(m);
    }, () => {
      S.categories = {};
    }).then(() => cn()));
  }
  function Vt(c) {
    var w;
    const m = Object.keys(c.states || {}).filter((y) => y.startsWith("weather.") && Ir(c, y)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...m.filter((y) => y !== i)] : m;
  }
  const ge = (c) => S.categories ? { air: F1(c, S.categories), pollen: q1(c, S.categories) } : { air: [], pollen: [] };
  function Ze(c, m, w, y) {
    if (l === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + hc(c, w || c === "clear-night") + "</span>";
    if (l === "smooth") {
      const R = _0(c, m === 90, w, L + "g-" + y);
      return '<span class="wbWx wbS' + m + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + Mt(ju(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const Fr = () => nt("daily").filter((c) => c.templow != null).slice(0, U0);
  function xt(c, m) {
    const w = new Date(m.datetime), y = /* @__PURE__ */ new Date();
    return Br(w, y) ? wt.today : Br(w, new Date(y.getTime() + va)) ? wt.tomorrow : Xp(w, c);
  }
  const Sn = (c, m, w) => w === 0 ? xt(c, m) : Xp(new Date(m.datetime), c);
  function qr(c, m) {
    var it, bt, Bt, Et;
    const w = H1(c, m);
    if (!w) return "";
    const y = Fr(), R = dt.openDay !== void 0 ? y[dt.openDay] : void 0, q = Ie(c, m, "temperature"), Z = y[0], J = Z && Br(new Date(Z.datetime), /* @__PURE__ */ new Date()), $ = ((bt = (it = c.config) == null ? void 0 : it.unit_system) == null ? void 0 : bt.temperature) || ((Bt = w.attributes) == null ? void 0 : Bt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Mt(wt.openPage) + '">' : '<div class="wbCurrent">') + Ze(w.state, 90, R1(c), "now") + '<div class="wbTempBlock">' + (q && he(q.value) ? '<div class="wbTemp"><span class="wbDeg">' + Mt(te(Math.round(Number(q.value)), c.locale)) + '</span><span class="wbUnit">' + Mt($) + "</span></div>" : "") + '<div class="wbPlace">' + Mt(((Et = c.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Mt(Xo(c, w)) + "</div>" + (J && Z.templow != null ? '<div class="wbRange">' + Mt(ta(wt.range, { high: Me(c, Z.temperature), low: Me(c, Z.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Se(c) + Pi(c), y.length) {
      const _t = J && q && he(q.value) ? Me(c, q.value) : "", Gt = (Pt, pt, Ot) => Pt === 0 && _t ? '<span class="wbAsDay">' + Mt(pt) + '</span><span class="wbAsNow">' + Mt(Ot) + "</span>" : Mt(pt);
      at += '<div class="wbColumns" role="list">' + y.map((Pt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + Gt(pt, Sn(c, Pt, pt), wt.now) + "</span>" + Ze(Pt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + Gt(pt, Me(c, Pt.temperature), _t) + '</span><span class="wbLo">' + Mt(Me(c, Pt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + y.map((Pt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Ze(Pt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + Mt(xt(c, Pt)) + '</span><span class="wbSub">' + Mt(ta(wt.highLow, { high: Me(c, Pt.temperature), low: Me(c, Pt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (R ? _o(c, m, R) : "") + "</div>";
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
  }, er = {
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
  function _n(c) {
    const m = Date.now(), w = nt("hourly").filter((bt) => new Date(bt.datetime).getTime() > m - se).slice(0, 13);
    if (w.length < 2) return "";
    const y = (bt) => Xe(new Date(bt.datetime), c), R = (bt) => Bi[bt.condition] || "", q = (bt) => er[bt.condition] || bt.condition;
    let Z = R(w[0]);
    if (!Z) return "";
    let J = w[0], $ = 0;
    for (const bt of w.slice(1))
      $ === 2 || q(bt) === q(J) || !R(bt) || (Z += ($ ? " and " : ", ") + R(bt) + " from " + y(bt), J = bt, $++);
    const at = Number(w[0].temperature), it = w.filter((bt) => he(bt.temperature));
    if (he(at) && it.length) {
      const bt = it.reduce((Et, _t) => Number(_t.temperature) < Number(Et.temperature) ? _t : Et), Bt = it.reduce((Et, _t) => Number(_t.temperature) > Number(Et.temperature) ? _t : Et);
      at - Number(bt.temperature) >= 3 ? Z += ", down to " + Me(c, bt.temperature) + " by " + y(bt) : Number(Bt.temperature) - at >= 3 && (Z += ", up to " + Me(c, Bt.temperature) + " by " + y(Bt));
    }
    return Z[0].toUpperCase() + Z.slice(1) + ".";
  }
  const Se = (c) => {
    const m = _n(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + Mt(m) + "</p></div>" : "";
  };
  function Pi(c) {
    const [m, w] = ys[v == null ? void 0 : v()] || ys.day, y = Date.now(), R = nt("hourly").filter((q) => {
      const Z = new Date(q.datetime), J = Z.getHours();
      return Z.getTime() > y - se / 2 && J >= m && J < w && he(q.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((q, Z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Mt(Xe(new Date(q.datetime), c)) + "</span>" + Ze(q.condition ?? "cloudy", 40, q.is_daytime === !1, "hr" + Z) + '<span class="wbHourTemp">' + Mt(Me(c, q.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Ta(c) {
    const m = c.getTime(), w = Date.now() - se;
    return nt("hourly").filter((y) => {
      const R = new Date(y.datetime).getTime();
      return R >= m && R < m + va && R > w;
    });
  }
  function Xt(c) {
    if (!c.length) return ["temperature"];
    const m = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && m.push("precipitation"), c.some((w) => w.humidity != null) && m.push("humidity"), m;
  }
  function _o(c, m, w) {
    const y = xn(new Date(w.datetime)), R = Ta(y), q = Xt(R), Z = q.includes(dt.dayMode) ? dt.dayMode : "temperature", J = ($) => $ === "humidity" ? wt.humidity : wt.modes[$];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ze(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Mt(xt(c, w)) + '</span><span class="wbSub">' + Mt(ta(wt.highLow, { high: Me(c, w.temperature), low: Me(c, w.templow) })) + '</span></div><button class="wbBack" title="' + Mt(wt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + tn(le.back) + "</button></div>" + (q.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + q.map(($) => '<button aria-pressed="' + ($ === Z) + '" data-wb="day-mode" data-mode="' + $ + '" data-wb-focus="day-mode-' + $ + '">' + Mt(J($)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + j1(Vr(c, m, y, R, Z)) + "</div></div>";
  }
  function Vr(c, m, w, y, R) {
    var Ho;
    const q = w.getTime(), Z = Date.now(), J = Br(w, /* @__PURE__ */ new Date()), $ = (ee) => (ee - q) / je, at = (ee) => Xe(new Date(ee), c), it = (ee) => new Date(ee.datetime).getTime(), bt = [0, 3, 6, 9, 12, 15, 18, 21].map((ee) => ({ t: ee * 60, label: at(q + ee * se), minor: ee % 6 !== 0 })), { rise: Bt, set: Et } = Pr(c, w), _t = [], Gt = [];
    Bt && (_t.push({ t: $(Bt.getTime()), label: at(Bt.getTime()), rise: !0 }), Gt.push([0, $(Bt.getTime())])), Et && (_t.push({ t: $(Et.getTime()), label: at(Et.getTime()), rise: !1 }), Gt.push([$(Et.getTime()), Li]));
    const Pt = Or(c);
    !Bt && !Et && Pt && Fs(new Date(q + va / 2), Pt.lat, Pt.lon) < 0 && Gt.push([0, Li]);
    const pt = J ? $(Z) : void 0, Ot = { hours: bt, sun: _t, night: Gt };
    if (!y.length && !J) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: wt.noHourly };
    if (R === "precipitation") {
      const ee = y.some((Qe) => Qe.precipitation_probability != null), No = y.map((Qe) => ({ t: $(it(Qe)), v: Number((ee ? Qe.precipitation_probability : Qe.precipitation) ?? 0) })), uo = yn(c, lt(c, "hourly"), "precipitation"), Oo = Math.max(0, ...No.map((Qe) => Qe.v)), ii = ee ? 100 : ou(0, Math.max(Oo, 1), [0.5, 1, 2, 5, 10]).max, Yi = (Qe) => ee ? te(Qe, c.locale) + "%" : te(Qe, c.locale, { maximumFractionDigits: 1 }) + " " + uo, br = No.find((Qe) => Qe.v === Oo);
      return {
        ...Ot,
        kind: "bars",
        points: No,
        min: 0,
        max: ii,
        ticks: [0, ii / 2, ii],
        format: Yi,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: br && Oo > 0 ? { t: br.t + 30, v: br.v, label: Yi(br.v) } : void 0,
        note: Oo > 0 ? void 0 : wt.noRain
      };
    }
    const qt = R === "humidity" ? "humidity" : "temperature", ve = y.filter((ee) => ee[qt] != null && (!J || it(ee) >= Z)).map((ee) => ({ t: $(it(ee)), v: Number(ee[qt]) }));
    let Tt, re = [];
    if (pt !== void 0) {
      const ee = Ie(c, m, qt);
      ee && he(ee.value) && (Tt = { t: pt, v: Number(ee.value) }, ve.unshift(Tt)), re = (((Ho = S.todayHistory) == null ? void 0 : Ho.day) === w.toDateString() ? S.todayHistory[qt] : []).filter((uo) => uo.time <= Z).map((uo) => ({ t: Math.max(0, $(uo.time)), v: uo.value })), Tt && re.length && re.push(Tt);
    }
    const $t = [...re, ...ve];
    if (!$t.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: wt.noHourly };
    const ka = $t.map((ee) => ee.v), po = ou(Math.min(...ka), Math.max(...ka), qt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    qt === "humidity" && (po.min = Math.max(0, po.min), po.max = Math.min(100, po.max), po.ticks = po.ticks.filter((ee) => ee >= 0 && ee <= 100));
    const ri = qt === "humidity" ? (ee) => te(ee, c.locale) + "%" : (ee) => Me(c, ee), gr = qt === "temperature" ? $t.reduce((ee, No) => No.v > ee.v ? No : ee) : void 0;
    return { ...Ot, kind: "line", points: ve, past: re, ...po, format: ri, now: Tt, peak: gr ? { ...gr, label: ri(gr.v) } : void 0 };
  }
  function jt(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function ya(c, m, w = qp) {
    var q, Z;
    const y = nt("daily"), R = [];
    for (let J = 0; J < w; J++) for (const $ of [!1, !0]) {
      const at = c.getTime() + (J * 24 + ($ ? 12 : 0)) * se, it = at + 12 * se, bt = {};
      m.forEach((Et) => {
        const _t = new Date(Et.datetime).getTime();
        Et.condition && _t >= at && _t < it && (bt[Et.condition] = (bt[Et.condition] ?? 0) + (Q0.has(Et.condition) ? 2 : 1));
      });
      let Bt = (q = Object.entries(bt).sort((Et, _t) => _t[1] - Et[1])[0]) == null ? void 0 : q[0];
      if (!Bt) {
        const Et = new Date(at).toDateString();
        Bt = ((Z = y.find((_t) => new Date(_t.datetime).toDateString() === Et)) == null ? void 0 : Z.condition) ?? "cloudy";
      }
      R.push({ cond: $ && Bt === "sunny" ? "clear-night" : Bt, night: $ });
    }
    return R;
  }
  function Ri(c, m, w) {
    const y = lt(c, "hourly"), R = m.precipitation_probability != null ? te(m.precipitation_probability, c.locale) + "%" : "", q = m.precipitation ? te(m.precipitation, c.locale) + " " + yn(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return R ? [R, q] : [q || "–", ""];
      case "wind":
        return m.wind_speed != null ? [te(Math.round(m.wind_speed), c.locale), yn(c, y, "wind_speed")] : ["–", ""];
      default:
        return [Me(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Hi(c, m, w) {
    const [y, R] = ys[v == null ? void 0 : v()] || ys.day, q = [];
    for (let Z = 0; Z < 4 && q.length < 3; Z++) {
      const J = /* @__PURE__ */ new Date();
      J.setHours(0, 0, 0, 0), J.setDate(J.getDate() + Z);
      const $ = new Date(J);
      $.setHours(R, 0, 0, 0), J.setHours(y, 0, 0, 0), !($.getTime() <= w || !m.some((at) => {
        const it = new Date(at.datetime).getTime();
        return it >= J.getTime() && it <= $.getTime();
      })) && q.push({ a: J.getTime(), b: $.getTime(), label: xt(c, { datetime: J.toISOString() }) });
    }
    return q;
  }
  function Da(c, m, w, y, R, q) {
    const Z = (w.b - m.a) / se, J = (pt) => ((pt - m.a) / se).toFixed(3), $ = 80, at = 32, it = [];
    for (const pt = new Date(m.a - va); pt.getTime() < w.b + va; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ot, set: qt } = Pr(c, new Date(pt));
      Ot && qt && it.push({ rise: Ot.getTime(), set: qt.getTime() });
    }
    const bt = (pt, Ot) => $ - ($ - at) * Math.sin(Math.PI * (Ot - pt.rise) / (pt.set - pt.rise)), Bt = (pt) => !it.some((Ot) => pt >= Ot.rise && pt <= Ot.set);
    let Et = "", _t = "", Gt = "";
    it.forEach((pt, Ot) => {
      const qt = [];
      for (let Tt = pt.rise; Tt <= pt.set; Tt += 15 * je) qt.push(J(Tt) + "," + bt(pt, Tt).toFixed(2));
      qt.push(J(pt.set) + "," + $), Et += '<polyline class="wbLineArc" points="' + qt.join(" ") + '"/>';
      const ve = it[Ot + 1];
      ve && (Et += '<rect class="wbLineNight" x="' + J(pt.set) + '" y="0" width="' + ((ve.rise - pt.set) / se).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([Tt, re]) => {
        Tt < m.a || Tt > w.b || (_t += '<line class="wbLineEdge" x1="' + J(Tt) + '" x2="' + J(Tt) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + q(Tt) + '">' + re + " " + Mt(Xe(new Date(Tt), c)) + "</span>");
      });
    });
    const Pt = it.find((pt) => R >= pt.rise && R <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + _t + '<line class="wbLineHorizon" x1="0" x2="' + Z + '" y1="' + $ + '" y2="' + $ + '"/></svg>' + Gt + (Pt ? '<span class="wbLineNow" style="left:' + q(R) + ";top:" + bt(Pt, R) + '%">' + hc("sunny", !1) + "</span>" : "") + y.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + q(pt.t) + '">' + hc(pt.entry.condition ?? "cloudy", Bt(pt.t)) + "</span>").join("");
  }
  function Le(c, m) {
    delete rt.hourly;
    const w = dt.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + Mt(w === "bars" ? wt.nextDays : wt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Mt(wt.showAs) + '">' + ["strip", "bars"].map((Tt) => '<button aria-pressed="' + (Tt === w) + '" data-wb="hourly-view" data-view="' + Tt + '" data-wb-focus="hourly-view-' + Tt + '">' + Mt(wt.views[Tt]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return Cn(c, m, y);
    const R = nt("hourly"), q = Math.floor(Date.now() / je) * je, Z = R.filter((Tt) => new Date(Tt.datetime).getTime() > q - se);
    if (!Z.length) return "";
    const J = jt(Z), $ = J.includes(dt.hourlyMode) ? dt.hourlyMode : "temperature", at = Hi(c, R, q);
    if (!at.length) return "";
    const it = at[0], bt = at[at.length - 1], Bt = (it.b - it.a) / se, Et = (Tt) => "calc(var(--wb-u) * " + ((Tt - it.a) / se).toFixed(3) + ")", _t = new Date(it.a);
    _t.setHours(6, 0, 0, 0), _t.getTime() > it.a && _t.setDate(_t.getDate() - 1);
    const Gt = Math.ceil((bt.b - _t.getTime()) / va);
    l !== "line" && (rt.hourly = { segs: ya(_t, R, Gt), seed: _t.getDate(), columns: Gt });
    const Pt = (Tt) => Tt === it.a ? " wbFirst" : Tt === bt.b ? " wbLast" : "", pt = [];
    for (let Tt = it.a; Tt < bt.b; ) {
      const re = new Date(Tt);
      re.setHours(24, 0, 0, 0);
      const $t = Math.min(re.getTime(), bt.b);
      pt.push({ a: Tt, b: $t, label: xt(c, { datetime: new Date(Tt).toISOString() }), page: at.find((ka) => ka.a >= Tt && ka.a < $t) || at.find((ka) => ka.a < $t && ka.b > Tt) }), Tt = $t;
    }
    const Ot = q > it.a && q < bt.b ? Math.floor((q - it.a) / (2 * se)) * 2 : 0, qt = [];
    for (let Tt = it.a; Tt <= bt.b; Tt += se) {
      const re = new Date(Tt), $t = Pt(Tt);
      !$t && re.getHours() % Z0 || !$t && (Math.abs(it.a - Tt) < 2 * se || Math.abs(bt.b - Tt) < 2 * se) || q >= it.a && Math.abs(Tt - q) < 1.5 * se && !$t || qt.push({ t: Tt, edge: $t, label: Xe(re, c), entry: Tt >= q - se ? R.find((ka) => new Date(ka.datetime).getTime() === Tt) : void 0 });
    }
    q > it.a && q < it.b && qt.push({ t: q, edge: q - it.a < se ? " wbFirst" : it.b - q < se ? " wbLast" : "", label: wt.now, entry: Z[0], now: !0 });
    const ve = (Tt, re) => '<span class="wbMark' + Tt.edge + (Tt.now ? " wbNowMark" : "") + '" style="left:' + Et(Tt.t) + '">' + re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (J.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + J.map((Tt) => '<button aria-pressed="' + (Tt === $) + '" data-wb="hourly-mode" data-mode="' + Tt + '" data-wb-focus="hourly-mode-' + Tt + '">' + Mt(wt.modes[Tt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Mt(wt.nextHours) + '" data-span="' + Bt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Bt + ");width:calc(var(--wb-u) * " + (bt.b - it.a) / se + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((bt.b - it.a) / (2 * se)) + 1)].map((Tt, re) => '<i class="wbSnap" style="left:' + Et(it.a + re * 2 * se) + '"></i>').join("") + '<div class="wbDays">' + pt.map((Tt, re) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Tt.b - Tt.a) / se).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (re === 0 ? Ot : (((($t = Tt.page) == null ? void 0 : $t.a) ?? Tt.a) - it.a) / se) + '" data-wb-focus="hours-day-' + re + '">' + Mt(Tt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + qt.map((Tt) => ve(Tt, Mt(Tt.label))).join("") + "</div>" + (l === "line" ? '<div class="wbSky wbLineSky">' + Da(c, it, bt, qt, q, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(_t.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (l === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (q > it.a ? '<i class="wbPast" style="width:' + Et(Math.min(q, bt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(q) + '"></i>' : "") + pt.slice(1).map((Tt) => '<i class="wbMidnight" style="left:' + Et(Tt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + qt.map((Tt) => {
      if (!Tt.entry) return "";
      const [re, $t] = Ri(c, Tt.entry, $);
      return ve(Tt, '<span class="wbPrimaryV">' + Mt(re) + '</span><span class="wbSecondary">' + Mt($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ni(c) {
    const m = K0, w = m.findIndex(([$]) => $ >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [y, R] = m[w - 1], [q, Z] = m[w], J = (c - y) / (q - y);
    return "rgb(" + R.map(($, at) => Math.round($ + (Z[at] - $) * J)).join(",") + ")";
  }
  function Cn(c, m, w) {
    var Et;
    const y = nt("daily").filter((_t) => he(_t.templow) && he(_t.temperature)).slice(0, 7);
    if (!y.length) return "";
    const R = Math.min(...y.map((_t) => Number(_t.templow))), q = Math.max(...y.map((_t) => Number(_t.temperature))), Z = Math.max(1, q - R), J = (_t) => Math.max(0, Math.min(100, (_t - R) / Z * 100)).toFixed(2), $ = /F/.test(yn(c, lt(c, "daily"), "temperature")), at = (_t) => $ ? (_t - 32) / 1.8 : _t, it = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_t) => Ni(at(R + _t * Z)) + " " + _t * 100 + "%").join(",") + ")", bt = (Et = Ie(c, m, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(nt("hourly").filter((_t) => new Date(_t.datetime).getTime() > Date.now() - se)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((_t, Gt) => {
      const Pt = xt(c, _t), pt = Br(new Date(_t.datetime), /* @__PURE__ */ new Date()), Ot = Number(_t.templow), qt = Number(_t.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Mt(ta(wt.rangeRow, { day: Pt, low: Me(c, Ot), high: Me(c, qt) })) + '"><span class="wbRangeDay">' + Mt(Pt) + "</span>" + Ze(_t.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + Mt(Me(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + it + ";clip-path:inset(0 " + (100 - J(qt)) + "% 0 " + J(Ot) + '% round 4px)"></i>' + (pt && he(bt) ? '<i class="wbRangeNow" style="left:' + J(Number(bt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Mt(Me(c, qt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Wr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], zr = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [y, R] = c[w - 1], [q, Z] = c[w];
      return V1(R, Z, (m - y) / (q - y));
    }
    return c[c.length - 1][1];
  }, rn = (c, m, w) => {
    if (!m || !w) return Wr[5][1];
    const y = (c.getTime() - w.getTime()) / je;
    return y >= -90 ? zr(jr, y) : zr(Wr, (c.getTime() - m.getTime()) / je);
  }, qs = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function no(c) {
    const m = Ft, { rise: w, set: y } = Pr(c, m), R = w && y ? Math.round((y.getTime() - w.getTime()) / je) : 0, q = Math.floor(R / 60), Z = R % 60, J = (ve) => ve ? Xe(ve, c) : "–", $ = new Date(m);
    $.setDate($.getDate() + 1);
    const at = Pr(c, $), it = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / je) : 0, bt = new Date(m);
    bt.setDate(bt.getDate() - 1);
    const Bt = !!(w && y && m >= w && m <= y), Et = !!(w && m < w), _t = Bt ? w : Et ? Pr(c, bt).set : y, Gt = Bt ? y : Et ? w : at.rise, Pt = _t && Gt ? Math.min(1, Math.max(0, (m.getTime() - _t.getTime()) / (Gt.getTime() - _t.getTime()))) : 0, pt = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / je)) : 0, Ot = Gt ? qs(pt) : "–", qt = Bt ? wt.untilSunset : wt.untilSunrise;
    return ca({
      icon: le.sunny,
      name: wt.sun,
      sub: R ? ta(wt.daylightShort, { hours: q, minutes: Z }) : void 0,
      cls: "wbSunTile",
      callouts: [[wt.callout.riseTomorrow, J(at.rise)], [wt.callout.setTomorrow, J(at.set)], ...it ? [[wt.callout.dayTomorrow, Math.floor(it / 60) + "h " + it % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + rn(m, w, y) + '"><svg class="wbSunTrack" data-up="' + (Bt ? 1 : 0) + '" data-f="' + Pt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Mt(Ot) + '</span><span class="wbSunWord">' + Mt(qt) + '</span></div><span class="wbSunAt wbSunRise">' + Mt(J(w)) + '</span><span class="wbSunAt wbSunSet">' + Mt(J(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Ss(Va(Ot, ""))
    });
  }
  const Te = 22;
  function ar(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Te, R = y / 2, q = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < y * 3 || w < y * 3 || c.dataset.drawn === q) return;
    c.dataset.drawn = q;
    const Z = "M" + R + " " + (w - y) + "V" + y + "A" + R + " " + R + " 0 0 1 " + y + " " + R + "H" + (m - y) + "A" + R + " " + R + " 0 0 1 " + (m - R) + " " + y + "V" + (w - y), J = "M" + (m - R) + " " + (w - y) + "A" + R + " " + R + " 0 0 1 " + (m - y) + " " + (w - R) + "H" + y + "A" + R + " " + R + " 0 0 1 " + R + " " + (w - y), $ = 16, at = 6, it = "M" + $ + " 0H" + (m - $) + "A" + $ + " " + $ + " 0 0 1 " + m + " " + $ + "V" + (w - $) + "A" + $ + " " + $ + " 0 0 1 " + (m - $) + " " + w + "H" + $ + "A" + $ + " " + $ + " 0 0 1 0 " + (w - $) + "V" + $ + "A" + $ + " " + $ + " 0 0 1 " + $ + " 0ZM" + (y + at) + " " + y + "A" + at + " " + at + " 0 0 0 " + y + " " + (y + at) + "V" + (w - y - at) + "A" + at + " " + at + " 0 0 0 " + (y + at) + " " + (w - y) + "H" + (m - y - at) + "A" + at + " " + at + " 0 0 0 " + (m - y) + " " + (w - y - at) + "V" + (y + at) + "A" + at + " " + at + " 0 0 0 " + (m - y - at) + " " + y + "Z", bt = c.dataset.up === "1", Bt = Number(c.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const _t = document.createElementNS(Et, "path");
    _t.setAttribute("d", bt ? Z : J), c.replaceChildren(_t);
    const Gt = _t.getTotalLength(), Pt = _t.getPointAtLength(Gt * Bt), pt = bt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + L + 'sun-day"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + L + 'sun-done"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (bt ? (pt * Bt).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + it + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + it + '" mask="url(#' + L + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + it + '" mask="url(#' + L + 'sun-done)"></path><circle class="wbSunDot' + (bt ? "" : " wbSunNight") + '" cx="' + Pt.x.toFixed(1) + '" cy="' + Pt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const Co = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => ar(m.target))) : null;
  function Gr() {
    Co == null || Co.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      ar(c), Co == null || Co.observe(c);
    });
  }
  function Vs(c, m, w) {
    const y = (Z) => L + "moon-" + Z, R = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + W1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", q = (Z, J, $, at, it, bt) => '<filter id="' + y(Z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + J + '" numOctaves="' + $ + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Bt) => "<feFunc" + Bt + ' type="linear" slope="' + it + '" intercept="' + bt + '"></feFunc' + Bt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + q("mottle", "0.045", 4, 3, 1.8, -0.4) + q("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + G1.map(([Z, J, $, at, it, bt]) => '<ellipse cx="' + Z + '" cy="' + J + '" rx="' + $ + '" ry="' + at + '" fill-opacity="' + bt + '" transform="rotate(' + it + " " + Z + " " + J + ')"></ellipse>').join("") + "</g>" + $1.map(([Z, J, $]) => '<circle class="wbCrater" cx="' + Z + '" cy="' + J + '" r="' + $ + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + U1.map(([Z, J]) => '<line x1="54.4" y1="95" x2="' + Z + '" y2="' + J + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + ru.map(([Z, J, $]) => '<circle cx="' + Z + '" cy="' + J + '" r="' + $ * 2 + '"></circle>').join("") + "</g>" + ru.map(([Z, J, $]) => '<circle class="wbBrightCenter" cx="' + Z + '" cy="' + J + '" r="' + $ + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Oi(c) {
    const m = Y, w = Or(c), y = (w == null ? void 0 : w.lat) ?? 0, R = gc(m), q = au(c), Z = q ? c.states[q] : void 0, J = Xn(Z) && u1.includes(Z.state) ? Z.state : P1(R.phase), { rise: $, set: at } = w ? B1(m, w.lat, w.lon) : {}, it = R.phase > 0.5 != y < 0, bt = te(Math.round(R.fraction * 100), c.locale) + "%", Bt = $ ?? at;
    return Bt && Xe(Bt, c), ca({
      icon: le.night,
      name: wt.moon,
      sub: wt.phases[J],
      callouts: [...$ ? [[wt.callout.moonrise, Xe($, c)]] : [], ...at ? [[wt.callout.moonset, Xe(at, c)]] : [], [wt.callout.lit, bt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Vs(R.fraction, it, y < 0) + "</div>" + Ss(Va(te(Math.round(R.fraction * 100), c.locale), "%"))
    });
  }
  function Ut(c, m) {
    var _t;
    const w = Ie(c, m, "wind_speed");
    if (!w || !he(w.value)) return "";
    const y = Ie(c, m, "wind_gust_speed"), R = Ie(c, m, "wind_bearing"), q = R && he(R.value) ? Number(R.value) : void 0, Z = O1(Number(w.value), (_t = w.stateObj.attributes) == null ? void 0 : _t.wind_speed_unit), J = Ps(c, w.stateObj, "wind_speed", w.value), $ = q !== void 0 ? wt.cardinal[p1[((q + 11.25) / 22.5 | 0) % 16]] : void 0, at = y ? Qp(c, y.stateObj, "wind_gust_speed", y.value) : void 0, it = [$ ? ta(wt.windFrom, { direction: $ }) : void 0, Z !== void 0 ? Z + " " + wt.beaufort : void 0].filter(Boolean).join(" · ") || at, bt = (Gt, Pt) => {
      const pt = (Gt - 90) * Math.PI / 180;
      return [100 + Pt * Math.cos(pt), 100 + Pt * Math.sin(pt)];
    }, Bt = Array.from({ length: 36 }, (Gt, Pt) => Pt * 10).map((Gt) => {
      const Pt = Gt % 90 === 0, [pt, Ot] = bt(Gt, 97), [qt, ve] = bt(Gt, Pt ? 83 : 89);
      return '<line class="wbTick' + (Pt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ot + '" x2="' + qt + '" y2="' + ve + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Pt]) => {
      const [pt, Ot] = bt(Pt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ot + '">' + Mt(wt.cardinal[Gt]) + "</text>";
    }).join("");
    return ca({ icon: le.windy, name: wt.wind, sub: it, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Bt + Et + (q !== void 0 ? '<path class="wbMarker" transform="rotate(' + q + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Mt(J.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Mt(J.unit) + "</text></svg>" });
  }
  const vt = (c, m) => {
    if (c < 3) return wt.advice.fine;
    if (c < 8) return wt.advice.sunblock;
    const w = Date.now(), y = nt("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > w && R.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? ta(wt.advice.avoidUntil, { time: Xe(new Date(y.datetime), m) }) : wt.advice.avoidToday;
  };
  function be(c, m) {
    const w = Ie(c, m, "uv_index");
    if (!w || !he(w.value)) return "";
    const y = Number(w.value), R = wt.uvLevel[tu(y)], q = /* @__PURE__ */ new Date();
    q.setHours(23, 59, 59, 999);
    const Z = nt("hourly").filter((it) => it.uv_index != null && new Date(it.datetime) > /* @__PURE__ */ new Date() && new Date(it.datetime) <= q).reduce((it, bt) => !it || bt.uv_index > it.uv ? { uv: bt.uv_index, time: new Date(bt.datetime) } : it, void 0), J = f1[tu(y)], $ = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + L + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + $.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + J + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + J + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + J + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + $.toFixed(1) + '" fill="url(#' + L + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Mt(te(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + Mt(R) + "</span></div>" + Ss(Va(te(Math.round(y), c.locale), ""));
    return ca({
      icon: le.sunnyAlert,
      name: wt.metrics.uv_index,
      sub: Z && Z.uv > y ? ta(wt.uvPeak, { level: R, uv_index: te(Math.round(Z.uv), c.locale), time: Xe(Z.time, c) }) : R,
      zone: at,
      cls: "wbUv",
      callouts: [vt(y, c), [wt.callout.now, te(Math.round(y), c.locale) + " · " + R], [wt.callout.peak, Z && Z.uv > y ? te(Math.round(Z.uv), c.locale) + " at " + Xe(Z.time, c) : wt.callout.now]]
    });
  }
  function zt(c) {
    const m = nt("daily")[0], w = S.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !he(m.temperature) || !w || w.dailyHighs.length < a1) return "";
    const y = Number(m.temperature), R = w.dailyHighs.reduce((Pt, pt) => Pt + pt, 0) / w.dailyHighs.length, q = Math.round(y - R) || 0, Z = q > 0 ? "above" : q < 0 ? "below" : "same", J = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], $ = J.map((Pt) => Pt.high).concat(R), at = Math.min(...$) - 1, it = Math.max(...$) + 1, bt = (Pt) => (1 - (Pt - at) / (it - at)) * 100, Bt = (Pt) => (Pt + 0.5) / J.length * 100, Et = J.map((Pt, pt) => [Bt(pt), bt(Pt.high)]), _t = Et.map(([Pt, pt], Ot) => (Ot ? "L" : "M") + Pt.toFixed(2) + " " + pt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + L + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _t + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + L + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + bt(R).toFixed(2) + '" y2="' + bt(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _t + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + bt(R).toFixed(2) + '%">' + Mt(Me(c, R)) + "</span>" + J.map((Pt, pt) => {
      const Ot = Pt.today ? " wbToday" : "", qt = "left:" + Bt(pt).toFixed(2) + "%;top:" + bt(Pt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + qt + '"></i><span class="wbAvgValue' + Ot + '" style="' + qt + '">' + Mt(Me(c, Pt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + J.map((Pt, pt) => '<span class="wbAvgDay' + (Pt.today ? " wbToday" : "") + '" style="left:' + Bt(pt).toFixed(2) + '%">' + Mt(k1(Pt.date, c)) + "</span>").join("") + "</div></div>";
    return ca({
      icon: le.chartLine,
      name: wt.metrics.compared_to_average,
      double: !0,
      sub: ta(wt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (q > 0 ? "+" : "") + Mt(Me(c, q)) + '</div><div class="wbCompareWords">' + Mt(wt.average[Z]) + '</div><div class="wbCompareTemps">' + Mt(ta(wt.todayVsAverage, { today: Me(c, y), average: Me(c, R) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, m) {
    const w = Ie(c, m, "humidity");
    if (!w || !he(w.value)) return "";
    const y = Ie(c, m, "dew_point"), R = Math.max(0, Math.min(100, Number(w.value)));
    return ca({
      icon: le.waterPercent,
      name: wt.metrics.humidity,
      sub: y && he(y.value) ? ta(wt.dewPoint, { dew_point: Me(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Va(te(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function ro(c, m) {
    var Pt, pt, Ot;
    const w = Ie(c, m, "pressure");
    if (!w || !he(w.value)) return "";
    const y = Number(w.value), R = (Pt = w.stateObj.attributes) == null ? void 0 : Pt.pressure_unit, q = eu(y, R), Z = ((pt = S.pressureHistory) == null ? void 0 : pt.entityId) === w.stateObj.entity_id ? eu(S.pressureHistory.value, R) : void 0;
    let J;
    if (q !== void 0 && Z !== void 0) {
      const qt = q - Z;
      J = qt >= jp ? "rising" : qt <= -jp ? "falling" : "steady";
    }
    const $ = Ps(c, w.stateObj, "pressure", Math.round(y)), at = w.stateObj, it = (qt) => R === "inHg" ? Math.round(qt * 100) / 100 : Math.round(qt), bt = (qt) => Qp(c, at, "pressure", it(qt)), Bt = Z !== void 0 ? S.pressureHistory.value : void 0, Et = Bt !== void 0 ? it(y - Bt) : void 0, _t = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? nt("hourly").find((qt) => he(qt.pressure) && new Date(qt.datetime).getTime() >= Date.now() + 3 * se - 30 * je) : void 0, Gt = [
      ...J ? [wt.advice[J]] : [],
      ...Bt !== void 0 ? [[wt.callout.hoursAgo, bt(Bt)], [wt.callout.change, (Et > 0 ? "+" : Et < 0 ? "−" : "") + bt(Math.abs(Et))]] : [],
      ..._t ? [[wt.callout.inHours, bt(Number(_t.pressure))]] : []
    ];
    return ca({
      icon: le.gauge,
      name: wt.metrics.pressure,
      sub: J ? wt.pressure[J] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Va($.number) + '<span class="wbTapeUnit">' + Mt($.unit) + "</span></div>" + (q !== void 0 ? or(c, q) : "") + "</div>"
    });
  }
  function or(c, m) {
    const R = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (q, Z) => R + Z).map((q) => {
      const Z = 100 - (q - m) * 9;
      if (Z < 22 || Z > 178) return "";
      const J = q % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (J ? 2 : 8) + '" x2="26" y1="' + Z + '" y2="' + Z + '"></line>' + (J ? '<text class="wbTapeLabel" x="33" y="' + Z + '">' + Mt(te(q, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Mt(wt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Mt(wt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Ws(c) {
    var $, at;
    const m = bc(c), w = m ? c.states[m] : void 0;
    if (!w || (($ = S.rain) == null ? void 0 : $.entityId) !== m || !he(S.rain.change)) return "";
    const y = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", R = lt(c, "hourly"), q = Date.now() + va, Z = nt("hourly").filter((it) => it.precipitation != null && new Date(it.datetime).getTime() <= q), J = Z.reduce((it, bt) => it + Number(bt.precipitation), 0);
    return ca({
      icon: le.rainy,
      name: wt.metrics.precipitation,
      sub: R && Z.length ? ta(wt.rainExpected, { amount: te(J, c.locale, { maximumFractionDigits: 1 }) + " " + yn(c, R, "precipitation") }) : wt.rainLast24h,
      visual: Va(te(S.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (Z.length > 1 ? z1(Z.map((it) => ({ label: "", value: Number(it.precipitation) }))) : "")
    });
  }
  function $r(c, m) {
    const w = Ie(c, m, "visibility");
    if (!w || !he(w.value)) return "";
    const y = Ps(c, w.stateObj, "visibility", w.value), R = H0(Number(w.value), yn(c, w.stateObj, "visibility"));
    return ca({
      icon: le.eyeOutline,
      name: wt.metrics.visibility,
      sub: wt.visibilityLevel[N0(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Mt(Ii(c, R)) + '</div><div class="wbSeaValue">' + Va(y.number, y.unit) + "</div></div>"
    });
  }
  function Ii(c, m) {
    var q;
    const w = R0((q = c.config) == null ? void 0 : q.country, m);
    if (w) return ta(wt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = m / r1 * 60;
    if (y < 60) {
      const Z = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (Z < 60) return ta(wt.walkMinutes, { minutes: te(Z, c.locale) });
    }
    const R = Math.max(1, Math.round(y / 30) / 2);
    return R < 8 ? ta(wt.walkHours, { hours: te(R, c.locale) }) : wt.walkDay;
  }
  function js(c) {
    S.categories === void 0 && Mn(c);
    const m = ge(c), w = ($) => $.map((at) => c.states[at]).filter(Xn), y = w(m.air), R = w(m.pollen);
    if (!y.length && !R.length) return "";
    const q = [...y, ...R], Z = ($) => R.includes($) ? le.flower : le.airFilter, J = q.find(($) => $.entity_id === dt.aq);
    return J ? zs(c, J, Z(J)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Mt(wt.airQuality) + '</h2></div><div class="wbAqTiles">' + q.map(($) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Mt($.entity_id) + '"><span class="wbChip">' + tn(Z($)) + '</span><span class="wbText"><span class="wbName">' + Mt(wn(c, $)) + '</span><span class="wbSub">' + Mt(Xo(c, $)) + "</span></span></button>").join("") + "</div></div>";
  }
  function zs(c, m, w) {
    var it, bt, Bt;
    const y = ((it = m.attributes) == null ? void 0 : it.unit_of_measurement) ?? "", R = ((bt = m.attributes) == null ? void 0 : bt.device_class) === "pm25" && y === Up && he(m.state), q = Number(m.state), Z = R ? Ms(q) : void 0, J = ((Bt = S.aqHistory) == null ? void 0 : Bt.entityId) === m.entity_id ? S.aqHistory.points : void 0, $ = (Et) => Math.min(100, Math.max(0, Et / ks * 100));
    let at;
    if (J && J.length > 1) at = nu(J, (Et) => (te(Et, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (Z) {
      let Et = 0;
      const _t = uf.map(([Gt, Pt]) => {
        const pt = $(Math.min(Pt, ks)), Ot = $p[Gt] + " " + Et + "% " + pt + "%";
        return Et = pt, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + Mt(wt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ks + '" aria-valuenow="' + q + '" style="background:linear-gradient(to right, ' + _t.join(", ") + ')"><i style="left:' + $(q) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ks + " " + Up + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + Mt(Xo(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + tn(w) + '</span><span class="wbText"><span class="wbName">' + Mt(wn(c, m)) + '</span><span class="wbSub">' + Mt(Xo(c, m)) + (Z ? " · " + Mt(wt.aqLevel[Z]) : "") + '</span></span><button class="wbBack" title="' + Mt(wt.back) + '" data-wb="aq-close">' + tn(le.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const sn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Fi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function Ao(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Os.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && Xn(w) && Ir(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Os.map((w) => m.get(w)).filter(Boolean);
  }
  const Lo = (c) => Object.values(c.states || {}).filter((m) => {
    var w, y;
    return m.entity_id.startsWith("sensor.") && Xn(m) && Ir(c, m.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : y.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), nr = ["none", "very_low", "low", "moderate", "high", "very_high"], Ga = (c) => he(c.state) ? Number(c.state) : nr.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), rr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, qi = (c, m, w) => {
    const y = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? Ms(m) : null : null;
    return y === "good" || y === "fair" ? wt.advice.window : y === "moderate" || y === null ? wt.advice.fine : wt.advice.closed;
  }, Gs = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], io = (c) => Gs[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], ir = "M43 43q1 8 0 10M77 42q1 8 -1 10", To = {
    good: [ir, "M34 69Q61 98 86 67"],
    fair: [ir, "M40 74Q61 89 81 72"],
    moderate: [ir, "M41 79Q60 76 80 81"],
    poor: [ir, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Do = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + To[c][0] + '"></path><path d="' + To[c][1] + '"></path></svg>';
  function sr(c) {
    const m = Ao(c), w = m[0];
    if (!w) return ca({ icon: le.airFilter, name: wt.airQuality, sub: wt.noAir, visual: Va("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, R = Number(w.state), q = he(w.state), Z = y === "aqi" && q ? Fi(R) : y === "pm25" && q ? sn[Ms(R)] : Xo(c, w), J = q ? te(Math.round(R), c.locale) : String(w.state), $ = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = q && y === "aqi" ? io(R) : q && y === "pm25" ? Ms(R) : null;
    return ca(at ? {
      icon: le.airFilter,
      name: wt.airQuality,
      sub: Z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + $p[at] + '">' + Do(at) + '<div class="wbAqBig"><span class="wbAqNum">' + Mt(J) + "</span>" + ($ ? '<span class="wbAqUnit">' + Mt($) + "</span>" : "") + "</div></div>" + Ss(Va(J, $)),
      callouts: [qi(y, R, q), ...m.slice(1, 3).map((it) => [wn(c, it), Xo(c, it)])]
    } : {
      icon: le.airFilter,
      name: wt.airQuality,
      sub: Z,
      cls: "wbBase",
      zone: Va(J, $),
      callouts: [qi(y, R, q), ...m.slice(1, 3).map((it) => [wn(c, it), Xo(c, it)])]
    });
  }
  const so = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], $s = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, y) => {
      const [R, q] = so[y % 3], Z = 10 + y * 7 % 9, J = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Z + "s;animation-delay:-" + (y * 2.3 % Z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + J.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % J).toFixed(1) + 's">' + q + "</span></span></span>";
    }).join("") + "</div>";
  };
  function $a(c) {
    const m = Lo(c).sort((R, q) => Ga(q) - Ga(R));
    if (!m.length) return ca({ icon: le.flower, name: wt.pollen, sub: wt.noPollen, visual: Va("–", ""), cls: "wbBase" });
    const w = m[0], y = (R) => he(R.state) ? Xo(c, R) : rr(R.state);
    return ca({
      icon: le.flower,
      name: wt.pollen,
      sub: wn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: $s(Ga(w)) + Va(y(w), ""),
      callouts: m.slice(0, 3).map((R) => [wn(c, R), y(R)])
    });
  }
  function An(c) {
    var J;
    const m = Date.now(), w = nt("hourly").filter(($) => {
      const at = new Date($.datetime).getTime();
      return at > m - se && at < m + 12 * se;
    }), y = w.find(($) => ($.precipitation_probability ?? 0) >= 50 || ($.precipitation ?? 0) >= 0.2), R = y ? ta(wt.rainFrom, { time: Xe(new Date(Math.max(m, new Date(y.datetime).getTime())), c) }) : w.length ? wt.noRain12 : void 0, q = (T == null ? void 0 : T()) || "rainviewer";
    let Z;
    if (q.startsWith("camera:")) {
      const $ = c.states[q.slice(7)], at = $ && $.state !== "unavailable" && ((J = $.attributes) == null ? void 0 : J.entity_picture);
      Z = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + Mt(at) + '" data-src="' + Mt(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + Mt(wt.cameraOff) + "</span></div>";
    } else {
      const $ = Or(c);
      Z = $ ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + $.lat + '" data-lon="' + $.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + Mt(wt.noLocation) + "</span></div>";
    }
    return ca({ icon: le.radar, name: wt.rainRadar, sub: R, cls: "wbBase wbRadarTile", visual: Z });
  }
  const Ur = {
    current: qr,
    hourly: Le,
    sun: no,
    moon: Oi,
    wind: Ut,
    uv_index: be,
    compared_to_average: zt,
    humidity: Fe,
    pressure: ro,
    precipitation: Ws,
    visibility: $r,
    air_quality: js,
    aq_tile: sr,
    pollen_tile: $a,
    radar_tile: An
  }, Oe = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Eo = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Yr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, lr = () => {
    const c = dt.range, m = Date.now();
    if (c.preset !== "custom") {
      const R = Oe.find(([q]) => q === c.preset)[2];
      return [m - R * va, m];
    }
    const w = xn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(m, xn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + va);
    return [Math.min(w, y - se), y];
  }, Us = (c) => {
    const m = dt.range;
    if (m.preset !== "custom") return Oe.find(([R]) => R === m.preset)[1];
    const [w, y] = lr();
    return m.from === m.to ? Eo(c, new Date(w)) : Eo(c, new Date(w)) + " – " + Eo(c, new Date(y - 1));
  }, Zr = () => dt.range.preset === "custom" ? dt.range.from + "_" + dt.range.to : dt.range.preset, Kr = (c, m) => m - c <= 2 * va, lo = (c, m, w, y) => Kr(w, y) ? Xe(m, c) : Eo(c, m), cr = (c, m = 60) => {
    const w = Math.max(1, Math.ceil(c.length / m));
    return c.filter((y, R) => R % w === 0 || R === c.length - 1);
  }, Xr = (c, m, w, y, R = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(y).toISOString(),
    entity_ids: [m],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  }), ln = (c) => async (m, w, y, R) => {
    const q = Ie(m, w, c);
    if (!q) return [];
    const Z = q.stateObj.entity_id, J = await Xr(m, Z, y, R);
    return cr(((J == null ? void 0 : J[Z]) ?? []).map(($) => {
      var bt;
      const at = ((bt = $.a) == null ? void 0 : bt[c]) ?? (he($.s) ? Number($.s) : void 0), it = ($.lu ?? $.lc) * 1e3;
      return typeof at == "number" && it >= y && it <= R ? { t: new Date(it), value: at } : null;
    }).filter(Boolean)).map(($) => ({ label: lo(m, $.t, y, R), value: $.value }));
  }, Vi = (c, m) => async (w, y, R, q) => {
    const Z = c(w);
    if (!Z) return [];
    const J = Z.entity_id, $ = await Xr(w, J, R, q, !0);
    return cr((($ == null ? void 0 : $[J]) ?? []).map((at) => {
      const it = m(at.s), bt = at.lu * 1e3;
      return it == null || !Number.isFinite(it) || bt < R || bt > q ? null : { t: new Date(bt), value: it };
    }).filter(Boolean)).map((at) => ({ label: lo(w, at.t, R, q), value: at.value }));
  }, Wi = (c, m) => async (w, y, R, q) => {
    const Z = Or(w);
    if (!Z) return [];
    const J = [];
    if (Kr(R, q)) for (let $ = R; $ <= q; $ += se / 2) J.push({ label: Xe(new Date($), w), value: c(new Date($), Z) });
    else for (let $ = q; $ >= R; $ -= va) {
      const at = new Date($), it = m(at, Z, w);
      it != null && J.unshift({ label: Eo(w, at), value: it });
    }
    return cr(J);
  }, Bo = (c) => Lo(c).sort((m, w) => Ga(w) - Ga(m))[0], Po = (c, m, w) => {
    const y = Ie(c, m, w);
    return y ? yn(c, y.stateObj, w) : "";
  }, dr = {
    current: { name: () => wt.modes.temperature, icon: () => le.sunny, load: ln("temperature"), fmt: (c, m, w) => Me(c, w), now: (c, m) => {
      var w;
      return Me(c, (w = Ie(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => wt.sun,
      icon: () => le.sunny,
      load: Wi((c, m) => Math.round(Fs(c, m.lat, m.lon) / ua), (c, m, w) => {
        const y = Pr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / se * 10) / 10 : null;
      }),
      fmt: (c, m, w, y) => y ? te(w, c.locale) + "°" : te(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => wt.moon,
      icon: () => le.night,
      load: Wi((c) => Math.round(gc(c).fraction * 100), (c) => Math.round(gc(c).fraction * 100)),
      fmt: (c, m, w) => te(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => wt.metrics.uv_index, icon: () => le.sunnyAlert, load: ln("uv_index"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = Ie(c, m, "uv_index");
      return w ? te(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => wt.metrics.humidity, icon: () => le.waterPercent, load: ln("humidity"), fmt: (c, m, w) => te(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = Ie(c, m, "humidity");
      return w ? te(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => wt.metrics.pressure, icon: () => le.gauge, load: ln("pressure"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Po(c, m, "pressure"), now: (c, m) => {
      const w = Ie(c, m, "pressure");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Po(c, m, "pressure") : "";
    } },
    wind: { name: () => wt.wind, icon: () => le.windy, load: ln("wind_speed"), fmt: (c, m, w) => te(Math.round(w), c.locale) + " " + Po(c, m, "wind_speed"), now: (c, m) => {
      const w = Ie(c, m, "wind_speed");
      return w ? te(Math.round(Number(w.value)), c.locale) + " " + Po(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => wt.metrics.visibility, icon: () => le.eyeOutline, load: ln("visibility"), fmt: (c, m, w) => te(Math.round(w * 10) / 10, c.locale) + " " + Po(c, m, "visibility"), now: (c, m) => {
      const w = Ie(c, m, "visibility");
      return w ? te(Number(w.value), c.locale) + " " + Po(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => Ao(c)[0] ? wn(c, Ao(c)[0]) : wt.airQuality,
      icon: () => le.airFilter,
      load: Vi((c) => Ao(c)[0], (c) => he(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var q, Z;
        const y = Ao(c)[0], R = (q = y == null ? void 0 : y.attributes) == null ? void 0 : q.device_class;
        return te(Math.round(w * 10) / 10, c.locale) + (R === "aqi" ? " AQI" : (Z = y == null ? void 0 : y.attributes) != null && Z.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = Ao(c)[0];
        return m ? Xo(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Bo(c) ? wn(c, Bo(c)) : wt.pollen,
      icon: () => le.flower,
      load: Vi(Bo, (c) => {
        const m = Ga({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => rr(nr[Math.round(w)] || ""),
      now: (c) => {
        const m = Bo(c);
        return m ? rr(m.state) : "";
      }
    }
  }, Ro = {};
  let we = null;
  async function Ea(c) {
    const m = n == null ? void 0 : n();
    if (!m || !dr[c]) return;
    const w = c + "|" + Zr(), [y, R] = lr();
    if (Ro[w] && Date.now() - Ro[w].at < 5 * je) return;
    Ro[w] = { at: Date.now(), points: null };
    try {
      Ro[w].points = await dr[c].load(m, Vt(m), y, R);
    } catch {
      Ro[w].points = [];
    }
    qe(!0), we === c && dt.graph === c && (we = null, Fp(O.querySelector(".wbGraphCard")));
    const q = dt.graph === c && O.querySelector(".wbGraph .wbChart");
    q && cf(q, q.querySelector(".wbLine"), q.querySelectorAll(".wbArea"));
  }
  function Rt(c, m) {
    const w = dt.range, y = Yr(Date.now()), [R, q] = lr(), Z = w.pickFrom || Yr(R), J = w.pickTo || Yr(q - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oe.map(([$, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === $) + '" data-wb="graph-preset" data-range="' + $ + '" data-wb-focus="graph-preset-' + $ + '">' + Mt(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Z + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + J + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function pr(c, m, w) {
    var bt;
    const y = dr[w], [R, q] = lr(), Z = Kr(R, q), J = (bt = Ro[w + "|" + Zr()]) == null ? void 0 : bt.points, $ = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), it = J ? J.length > 1 ? nu(J, (Bt) => y.fmt(c, m, Bt, Z), 220, $) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + Mt(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + ff(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + Mt(y.name(c)) + '</span><span class="wbSub">' + Mt(y.sub ? y.sub(Z) : y.now ? y.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + tn(le.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!dt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + tn(le.calendar) + "<span>" + Mt(Us(c)) + "</span>" + tn(le.chevronDown) + '</button><div class="wbGraph">' + it + "</div></div>" + (dt.picking ? Rt() : "") + "</div>";
  }
  function qe(c) {
    var Bt, Et, _t, Gt, Pt;
    const m = n == null ? void 0 : n();
    if (!m || tt) return;
    const w = Vt(m);
    Ct(m, w), S.lastFetch || So();
    const y = ge(m), R = au(m), q = bc(m), Z = [
      ...w.map((pt) => m.states[pt]),
      m.states["sun.sun"],
      R && m.states[R],
      q && m.states[q],
      ...y.air.map((pt) => m.states[pt]),
      ...y.pollen.map((pt) => m.states[pt]),
      ...K.some((pt) => k.includes(pt)) ? [...Ao(m), ...Lo(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / je)
    ];
    if (!c && ot && Z.length === ot.length && Z.every((pt, Ot) => pt === ot[Ot])) return;
    ot = Z;
    const J = _.getRootNode(), $ = J.activeElement || document.activeElement;
    for (const pt of K) {
      const Ot = H[pt];
      let qt = "";
      try {
        qt = Ur[pt](m, w) || "";
      } catch {
        qt = "";
      }
      if (qt === Ot.html) continue;
      const ve = $ && Ot.el.contains($) ? (Bt = $.dataset) == null ? void 0 : Bt.wbFocus : void 0, Tt = Ot.el.querySelector(".wbStripScroll"), re = Tt ? Tt.scrollLeft : null;
      Ot.html = qt, Ot.el.hidden = !qt, Ot.el.innerHTML = qt;
      const $t = Ot.el.querySelector(".wbStripScroll");
      $t && re != null ? $t.scrollTo({ left: re }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), ve && !G && ((Et = Ot.el.querySelector('[data-wb-focus="' + ve + '"]')) == null || Et.focus());
    }
    let at = "";
    if (dt.graph)
      try {
        at = pr(m, w, dt.graph) || "";
      } catch {
        at = "";
      }
    if (at !== mt) {
      const pt = $ && O.contains($) ? (_t = $.dataset) == null ? void 0 : _t.wbFocus : void 0;
      mt = at, O.innerHTML = at, O.hidden = !at, at && !O.isConnected && (_.closest("#app") || _).appendChild(O), pt && !G && ((Gt = O.querySelector('[data-wb-focus="' + pt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    Gr(), _.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || Je(pt);
    }), G && ((Pt = _.querySelector('[data-wb-focus="' + G + '"]') || O.querySelector('[data-wb-focus="' + G + '"]')) == null || Pt.focus({ preventScroll: !0 }), G = null);
    let it = !1, bt = !1;
    for (const pt of K) {
      const Ot = H[pt], qt = !Ot.el.hidden, ve = Q[pt] === "wide" || z.includes(pt), Tt = K.indexOf(pt) >= K.indexOf("moon"), re = qt && (Tt && ve && !it || !ve && !bt);
      re && ve && (it = !0), re && !ve && (bt = !0), Ot.el.toggleAttribute("data-break", re);
    }
    Tn(performance.now());
  }
  function cn() {
    F || tt || (F = !0, queueMicrotask(() => {
      F = !1, qe(!0);
    }));
  }
  function dn() {
    const c = getComputedStyle(_), m = (Z) => c.getPropertyValue(Z).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Z, J]) => {
      m(J) && (w[Z] = m(J));
    });
    const y = m("--color-text-primary") || "#f1f1f1", R = m("--color-bg-card") || "#222222", q = !!_.closest(".light");
    return { colors: { ...za, ...w }, ink: q ? y : R, paper: q ? R : y };
  }
  const Jr = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Ln = () => f && !v1();
  function ji(c, m) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((w) => ur(w, rt[w.dataset.wbStrip], c, m));
  }
  function ur(c, m, w, y) {
    if (!m || !c.getClientRects().length) return;
    const R = c.clientWidth, q = c.clientHeight;
    if (!R || !q) return;
    const Z = { width: R, height: q, columns: m.columns || qp, colors: y.colors, clock: w, ambient: Ln(), seed: m.seed, soft: 1.5 };
    if (l === "smooth") {
      const J = Math.min(2, window.devicePixelRatio || 1), $ = Math.round(R * J), at = Math.round(q * J);
      c.width !== $ && (c.width = $), c.height !== at && (c.height = at);
      const it = c.getContext("2d");
      if (!it) return;
      it.setTransform(J, 0, 0, J, 0, 0), g0(it, m.segs, Z);
    } else Jr(c, m0(m.segs, { ...Z, px: 2, oneBit: l === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Tn(c) {
    if (tt) return;
    const m = dn();
    if (l !== "smooth") {
      const w = Ln();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Jr(y, Qm(Um(y.dataset.wbWx, m.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: l === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, R = w.clientHeight, q = Number(w.dataset.wbSea), Z = y + "x" + R + ":" + q + ":" + m.colors.skyClearDay;
      !y || !R || !(q > 0) || w.dataset.painted === Z || (w.dataset.painted = Z, Jr(w, E0(y, R, q, m.colors)));
    }), ji(c, m);
  }
  function co(c) {
    if (ct = 0, !(tt || !Ln())) {
      if (!document.hidden)
        if (l === "smooth") ji(c, dn());
        else {
          const m = Math.floor(c / 100);
          m !== et && (et = m, Tn(c));
        }
      ct = requestAnimationFrame(co);
    }
  }
  function fr() {
    _.classList.toggle("wbMotion", Ln()), !ct && !tt && Ln() && (ct = requestAnimationFrame(co));
  }
  function Dn(c) {
    var w, y, R, q, Z, J, $;
    if (c.target === O) {
      dt.graph = void 0, dt.picking = !1, qe(!0);
      return;
    }
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!m || !(_.contains(m) || O.contains(m))) {
      const at = (q = (R = c.target).closest) == null ? void 0 : q.call(R, ".wbItem"), it = at == null ? void 0 : at.dataset.card;
      if (!at || !_.contains(at) || !dr[it] || dt.graph === it || _.closest(".tfEditing") || it === "current" && g) return;
      dt.graph = it, dt.picking = !1, G = "graph-close", qe(!0), (Z = Ro[it + "|" + Zr()]) != null && Z.points ? Fp(O.querySelector(".wbGraphCard")) : we = it, Ea(it);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        dt.openDay = Number(m.dataset.index), dt.opener = m.dataset.wbFocus, G = "back-day";
        const at = Fr()[dt.openDay], it = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > Y0;
        at && Br(new Date(at.datetime), /* @__PURE__ */ new Date()) && it && La();
        break;
      }
      case "close-day":
        dt.openDay = void 0, G = dt.opener, dt.opener = void 0;
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
          localStorage.setItem(kt, dt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = _.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(m.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        dt.aq = m.dataset.entity, nn(dt.aq);
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
        dt.range = { preset: m.dataset.range }, dt.picking = !1, G = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      case "graph-apply": {
        let at = dt.range.pickFrom || ((J = _.querySelector("[data-range-from]")) == null ? void 0 : J.value), it = dt.range.pickTo || (($ = _.querySelector("[data-range-to]")) == null ? void 0 : $.value);
        if (!at || !it) return;
        at > it && ([at, it] = [it, at]), dt.range = { preset: "custom", from: at, to: it }, dt.picking = !1, G = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ha(c) {
    var m, w, y, R, q, Z;
    c.key === "Escape" && dt.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (dt.openDay = void 0, G = dt.opener, dt.opener = void 0, qe(!0)) : c.key === "Escape" && dt.picking && ((R = (y = c.target).closest) != null && R.call(y, ".wbGraphCard")) ? (dt.picking = !1, G = "graph-pick", qe(!0)) : c.key === "Escape" && dt.graph && ((Z = (q = c.target).closest) != null && Z.call(q, ".wbGraphCard")) && (dt.graph = void 0, qe(!0));
  }
  let ze = null;
  function Qr(c) {
    var w, y;
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbStripScroll");
    !m || c.button !== 0 || (ze = { startX: c.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", ti), window.addEventListener("mouseup", ei, { once: !0 }));
  }
  function ti(c) {
    const m = _.querySelector(".wbStripScroll");
    if (!ze || !m) return;
    const w = c.pageX - ze.startX;
    !ze.moved && Math.abs(w) > 1 && (ze.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = ze.left - w;
  }
  function ei() {
    ze = null, window.removeEventListener("mousemove", ti);
    const c = _.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const m = [...c.querySelectorAll(".wbSnap")];
    if (m.length) {
      const w = m.reduce((y, R) => Math.abs(R.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? R : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const hr = (c) => {
    var w, y;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? dt.range.pickFrom = m.value : (y = m.matches) != null && y.call(m, "[data-range-to]") && (dt.range.pickTo = m.value);
  };
  _.addEventListener("change", hr), _.addEventListener("click", Dn), _.addEventListener("keydown", ha), O.addEventListener("change", hr), O.addEventListener("click", Dn), O.addEventListener("keydown", ha), _.addEventListener("mousedown", Qr);
  const zi = 64, Ys = 30;
  let xa = null, Ua = 0;
  const pn = () => {
    Ua = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (xa) {
        const y = c.parentElement.getBoundingClientRect(), R = y.left + y.width / 2 - xa.x, q = y.top + y.height / 2 - xa.y, Z = Math.hypot(R, q) || 1;
        if (Z < zi) {
          const J = (1 - Z / zi) * Ys;
          m = R / Z * J, w = q / Z * J;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), xa && (Ua = requestAnimationFrame(pn));
  }, Ya = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || Ge != null && Ge.matches) {
      xa && (xa = null, Ua || (Ua = requestAnimationFrame(pn)));
      return;
    }
    xa = { x: c.clientX, y: c.clientY }, Ua || (Ua = requestAnimationFrame(pn));
  }, Gi = () => {
    xa = null, Ua || (Ua = requestAnimationFrame(pn));
  };
  _.addEventListener("pointermove", Ya), _.addEventListener("pointerleave", Gi);
  const Za = typeof ResizeObserver == "function" ? new ResizeObserver(() => Tn(performance.now())) : null;
  Za == null || Za.observe(_);
  const un = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && Je(w);
  })) : null;
  function Je(c) {
    var Z;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || tt) return;
    const y = c1(Number(c.dataset.lat), Number(c.dataset.lon), m, w), R = !!((Z = _.closest("#app")) != null && Z.classList.contains("light")), q = (J) => ' style="left:' + J.left + "px;top:" + J.top + 'px"';
    c._tiles = y, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((J) => '<img src="https://' + "abcd"[(J.x + J.y) % 4] + ".basemaps.cartocdn.com/" + (R ? "light_all" : "dark_all") + "/" + Rc + "/" + J.x + "/" + J.y + '.png"' + q(J) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', un == null || un.observe(c), l1().then((J) => {
      !c.isConnected || tt || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = J.frames.map(($, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + y.map((it) => '<img src="' + J.host + $.path + "/" + Jo + "/" + Rc + "/" + it.x + "/" + it.y + '/2/1_1.png"' + q(it) + ' alt="">').join("") + "</div>").join(""), c._frames = J.frames, c._hold = 0, En(c, J.frames.findLastIndex(($) => $.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = wt.radarOff);
    });
  }
  function En(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((R) => {
      R.hidden = Number(R.dataset.i) !== m;
    });
    const y = w[m];
    c.querySelector(".wbRadarTime").textContent = Xe(new Date(y.time * 1e3), n == null ? void 0 : n()) + (y.past ? "" : " · " + wt.forecastTag);
  }
  function ai() {
    _.querySelectorAll(".wbRadarMap").forEach((c) => {
      if (!c._frames) return;
      if (Date.now() - c._built > pf) {
        Je(c);
        return;
      }
      if (Ge != null && Ge.matches) return;
      if (c._hold > 0) {
        c._hold -= zp;
        return;
      }
      const m = c._frames.length - 1, w = c._frames.findLastIndex((R) => R.past), y = c._i >= m ? 0 : c._i + 1;
      En(c, y), (y === w || y === m) && (c._hold = s1);
    });
  }
  const mr = () => _.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), fn = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && Je(c);
  })) : null, oi = _.closest("#app");
  oi && (fn == null || fn.observe(oi, { attributes: !0, attributeFilter: ["class"] }));
  const Ge = (Ui = window.matchMedia) == null ? void 0 : Ui.call(window, "(prefers-reduced-motion: reduce)"), $i = () => {
    fr(), Tn(performance.now());
  };
  (Bn = Ge == null ? void 0 : Ge.addEventListener) == null || Bn.call(Ge, "change", $i);
  const ni = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), qe(!0);
    }, o1),
    setInterval(() => {
      Y = /* @__PURE__ */ new Date(), qe(!0);
    }, n1),
    setInterval(So, t1),
    setInterval(ai, zp),
    setInterval(mr, je)
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
      cancelAnimationFrame(Ua), _.removeEventListener("pointermove", Ya), _.removeEventListener("pointerleave", Gi), tt = !0, ni.forEach(clearInterval), ct && cancelAnimationFrame(ct), ct = 0, Za == null || Za.disconnect(), un == null || un.disconnect(), fn == null || fn.disconnect(), (c = Ge == null ? void 0 : Ge.removeEventListener) == null || c.call(Ge, "change", $i), ei(), _.removeEventListener("click", Dn), _.removeEventListener("change", hr), _.removeEventListener("keydown", ha), _.removeEventListener("mousedown", Qr), O.removeEventListener("click", Dn), O.removeEventListener("change", hr), O.removeEventListener("keydown", ha), ["daily", "hourly"].forEach(I), _.remove(), O.remove();
    }
  };
}
const Ei = "#E1E1E1", su = "#F7F4F0", wc = "#03a9f4", oe = 14, ie = 172;
let Z1 = 0;
const _e = (o) => Math.round(o * 100) / 100, xo = (o, n, i) => Math.max(n, Math.min(i, o)), on = (o, n, i, l, f, b) => '<rect x="' + _e(o) + '" y="' + _e(n) + '" width="' + _e(i) + '" height="' + _e(l) + '" fill="' + f + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", vc = (o) => o.map((n, i) => (i ? "L" : "M") + _e(n[0]) + " " + _e(n[1])).join("");
function yc(o) {
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
function K1(o) {
  const n = o < 2 ? o + 24 : o;
  let i = vn[0], l = vn[vn.length - 1];
  for (let v = 0; v < vn.length - 1; v++) if (n >= vn[v][0] && n <= vn[v + 1][0]) {
    i = vn[v], l = vn[v + 1];
    break;
  }
  const f = (n - i[0]) / (l[0] - i[0]), b = f * f * (3 - 2 * f), g = (v, T) => {
    const L = parseInt(v.slice(1), 16), _ = parseInt(T.slice(1), 16);
    return "#" + [16, 8, 0].map((E) => Math.round((L >> E & 255) + ((_ >> E & 255) - (L >> E & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], l[1][0]), bot: g(i[1][1], l[1][1]), warm: g(i[1][2], l[1][2]), cool: g(i[1][3], l[1][3]), op: i[1][4] + (l[1][4] - i[1][4]) * b, t: n };
}
function X1(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, l = (n >> 8 & 255) / 255, f = (n & 255) / 255, b = Math.max(i, l, f), g = Math.min(i, l, f);
  let v = 0, T = 0;
  const L = (b + g) / 2;
  if (b !== g) {
    const _ = b - g;
    T = L > 0.5 ? _ / (2 - b - g) : _ / (b + g), v = (b === i ? (l - f) / _ + (l < f ? 6 : 0) : b === l ? (f - i) / _ + 2 : (i - l) / _ + 4) / 6;
  }
  return [v * 360, T * 100, L * 100];
}
function _f(o, n, i) {
  n = xo(n, 0, 100) / 100, i = xo(i, 0, 100) / 100;
  const l = (g) => (g + o / 30) % 12, f = n * Math.min(i, 1 - i), b = (g) => i - f * Math.max(-1, Math.min(l(g) - 3, Math.min(9 - l(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [Cf, Af, Lf] = X1(Ei), lu = _f(Cf, Af, Math.max(6, Lf - 14)), J1 = _f(Cf, Af, Math.min(96, Lf + 16));
function Q1(o, n, i, l, f) {
  const b = ie / 2, g = ie * 0.12, v = b - (b - g) * o, T = (K) => K ** 1.3, L = xo(i, -1.5, 1.5), _ = (K) => -(Math.abs(L) * 4.6 * K ** 1.5) * Math.sign(L), E = o * 1.4, O = (K, Q) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (Q ? 1 : -1) * Math.sign(i || 1), H = Q ? K + v : K, tt = Q ? K : K + v, ot = (kt) => H + _(kt) + z * Math.sin(kt * Math.PI * 1.2 + l) * T(kt) * 1.4 + E * Math.sin(kt * Math.PI * 2 + l * 0.6) * T(kt) * (Q ? 1 : -1), ct = [[tt, oe]];
    for (let kt = 0; kt <= 12; kt++) ct.push([ot(kt / 12), oe + ie * kt / 12]);
    ct.push([tt, oe + ie]);
    let et = '<path d="' + vc(ct) + 'Z" fill="' + Ei + '"/>';
    if (f) return et;
    const F = 1.35 + ((Q ? i > 0 : i < 0) ? 0.35 : 0), G = (kt) => {
      const Nt = kt / 7, dt = Q ? 1 - Nt : Nt, S = (1 - dt) ** 1.3, Ft = K + v * Nt;
      return Array.from({ length: 13 }, (Y, rt) => {
        const st = rt / 12;
        return [Ft + _(st) * S + z * F * Math.sin(st * Math.PI * 1.2 + l - dt * 3.2) * T(st) * 1.4 * S + E * 1.6 * Math.sin(st * Math.PI * 2 + l * 0.6 - dt * 2.5) * T(st) * o * (0.4 + 0.6 * S), oe + ie * st];
      });
    }, mt = [1, 2, 3, 4, 5, 6].map(G);
    for (let kt = 0; kt < 6; kt += 2) et += '<path d="' + vc(mt[kt]) + vc(mt[kt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, k = b - (b - g) * n;
  return { body: O(oe, !0) + O(oe + ie - v, !1), rails: [{ x: oe + k - 4, y: oe, w: 4, h: ie }, { x: oe + ie - k, y: oe, w: 4, h: ie }], head: 6.4 };
}
function tg(o, n, i) {
  const l = ie * (1 - o);
  let f = "";
  if (l > 1 && (f += on(oe, oe, ie, l, Ei), !i))
    for (let b = 1; b < 7; b += 2) f += on(oe + ie * b / 7, oe, ie / 7, l, "#fff");
  return { body: f, rails: [{ x: oe, y: oe + ie * (1 - n) - 7, w: ie, h: 11 }], head: 10.4 };
}
function eg(o, n, i, l) {
  const f = 9 - 7 * (i / 100), b = oe + ie * (1 - o), g = Math.ceil(ie / 10) + 1, v = oe + f / 2, T = (oe + ie - f / 2 - v) / (g - 1), L = 0.8, _ = 0.6, E = Array.from({ length: g }, (K, Q) => Math.max(v + Q * _, Math.min(v + Q * T, b - f / 2 - (g - 1 - Q) * _))), O = E.slice(0, -1).map((K, Q) => xo((E[Q + 1] - K - _) / (T - _), 0, 1));
  O.push(O[g - 2]);
  let k = "";
  return E.forEach((K, Q) => {
    const z = L + (f - L) * O[Q], H = Math.max(0.5, z / 2), tt = Math.max(0.4, z * 0.114);
    k += on(oe, K - H, ie, Math.max(1, z), Ei), !l && z > 2.2 && (k += on(oe, K + H - tt, ie, tt, lu) + on(oe, K - H, ie, tt * 0.55, J1, 0.75));
  }), l || [0.22, 0.78].forEach((K) => {
    k += on(oe + ie * K - 0.7, oe, 1.4, Math.max(0, E[g - 1] + 1 - oe), lu, 0.85);
  }), { body: k, rails: [{ x: oe, y: oe + ie * (1 - n) - 8, w: ie, h: 8 }], head: 8.8 };
}
const cu = (o, n, i, l, f, b, g) => o === "curtain" ? Q1(n, i, f, b, g) : o === "venetian" ? eg(n, i, l, g) : tg(n, i, g);
function ag(o, n) {
  let i = "", l = "";
  return n.forEach((f) => {
    const b = f.w > f.h, g = xo(b ? oe + ie / 2 : f.x + f.w / 2, 17, 183), v = xo(b ? f.y + f.h / 2 : oe + ie / 2, 17, 183);
    i += b ? on(oe, xo(f.y + f.h / 2, oe, oe + ie) - 1, ie, 2, wc) : on(xo(f.x + f.w / 2, oe, oe + ie) - 1, oe, 2, ie, wc);
    const T = b ? "M" + _e(g - 4) + " " + _e(v - 3) + "l4 -3l4 3M" + _e(g - 4) + " " + _e(v + 3) + "l4 3l4 -3" : "M" + _e(g - 3) + " " + _e(v - 4) + "l-3 4l3 4M" + _e(g + 3) + " " + _e(v - 4) + "l3 4l-3 4";
    l += '<circle cx="' + _e(g) + '" cy="' + _e(v) + '" r="11" fill="' + wc + '" filter="url(#' + o + 's)"/><path d="' + T + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: l };
}
function og(o, n) {
  const i = /* @__PURE__ */ new Date(), l = K1(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(l.t * 0.5), b = l.t >= 5 && l.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (l.t - 5) / 15) : 80, g = cu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? cu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", T = n.grip > 4e-3 ? ag(o, g.rails) : null, L = (_) => on(oe, oe, ie, ie, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + l.top + '"/><stop offset="1" stop-color="' + l.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + _e(f) + '%" cy="' + _e(b) + '%" r="58%"><stop offset="0" stop-color="' + l.warm + '" stop-opacity="' + _e(l.op * 0.8) + '"/><stop offset="1" stop-color="' + l.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + _e(100 - f * 0.8) + '%" cy="' + _e(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + l.cool + '" stop-opacity="' + _e(l.op * 0.64) + '"/><stop offset="1" stop-color="' + l.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + su + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + L("url(#" + o + "l)") + L("url(#" + o + "w)") + L("url(#" + o + "k)") + (v ? '<g opacity="' + _e(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Ei + '" filter="url(#' + o + 's)"/></g>' + (T ? '<g clip-path="url(#' + o + 'c)" opacity="' + _e(n.grip) + '">' + T.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + su + '" stroke-width="3"/>' + (T ? '<g opacity="' + _e(n.grip) + '">' + T.knobs + "</g>" : "") + "</svg>";
}
function ng({ onMove: o, onSet: n }) {
  var et;
  const i = "cv" + ++Z1, l = document.createElement("div");
  l.className = "tfCoverArt";
  const f = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, T = !1, L = !1, _ = null, E = 0, O = 0;
  const k = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", K = () => _ || T || L || b.moving || b.target != null ? 1 : f ? performance.now() < O ? 1 : 0.4 : 0, Q = () => {
    l.innerHTML = og(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function z(F) {
    v = 0;
    const G = g.last ? Math.min(0.064, (F - g.last) / 1e3) : 1 / 60, mt = G * 60;
    g.last = F;
    const kt = b.pos - g.pos, Nt = g.pos;
    g.pos += Math.sign(kt) * Math.min(Math.abs(kt), Math.max(10.5, Math.abs(kt) * 1.4) * G), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Nt) / mt * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Nt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * mt);
    const dt = b.tilt - g.tilt;
    g.tilt += Math.sign(dt) * Math.min(Math.abs(dt), Math.max(60, Math.abs(dt) * 4) * G);
    const S = K();
    g.grip += (S - g.grip) * Math.min(1, G * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ft = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ft - g.ghost) * Math.min(1, G * (Ft > g.ghost ? 16 : 3)), Math.abs(Ft - g.ghost) < 4e-3 && (g.ghost = Ft), Q(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ft ? v = requestAnimationFrame(z) : g.last = 0;
  }
  const H = () => {
    b && !v && (v = requestAnimationFrame(z));
  }, tt = setInterval(() => {
    b && !v && Q();
  }, 60 * 1e3), ot = (F) => {
    const G = l.getBoundingClientRect();
    return k() === "x" ? (F.clientX - G.left) / G.width : (F.clientY - G.top) / G.height;
  };
  l.addEventListener("pointerdown", (F) => {
    var kt;
    if (!(b != null && b.canSet) || F.button > 0) return;
    F.preventDefault(), (kt = l.setPointerCapture) == null || kt.call(l, F.pointerId);
    const G = b.target ?? b.pos, mt = l.getBoundingClientRect();
    _ = { p0: ot(F), from: G, x0: F.clientX, value: null, side: null }, b.kind === "curtain" && G > 0 && (_.side = (F.clientX - mt.left) / mt.width < 0.5 ? "L" : "R"), H();
  }), l.addEventListener("pointermove", (F) => {
    if (!_) return;
    let G;
    if (b.kind === "curtain") {
      if (!_.side) {
        const kt = F.clientX - _.x0;
        if (Math.abs(kt) < 4) return;
        _.side = kt < 0 ? "L" : "R";
      }
      const mt = (ie / 2 - ie * 0.12) / 200;
      G = _.from + (_.side === "L" ? -1 : 1) * ((ot(F) - _.p0) / mt) * 100;
    } else G = _.from - (ot(F) - _.p0) / (ie / 200) * 100;
    _.value = xo(G, 0, 100), o(_.value);
  });
  const ct = () => {
    if (!_) return;
    const F = _.value;
    _ = null, F != null && n(Math.round(F)), H();
  };
  return l.addEventListener("pointerup", ct), l.addEventListener("pointercancel", ct), l.addEventListener("lostpointercapture", ct), l.addEventListener("pointerenter", () => {
    T = !0, H();
  }), l.addEventListener("pointerleave", () => {
    T = !1, H();
  }), l.addEventListener("focus", () => {
    L = l.matches(":focus-visible"), H();
  }), l.addEventListener("blur", () => {
    L = !1, H();
  }), l.addEventListener("keydown", (F) => {
    if (!(b != null && b.canSet)) return;
    const G = Math.round(b.target ?? b.pos), mt = F.shiftKey ? 10 : 1, kt = { ArrowUp: G + mt, ArrowRight: G + mt, ArrowDown: G - mt, ArrowLeft: G - mt, PageUp: G + 25, PageDown: G - 25, Home: 0, End: 100 }[F.key];
    if (kt == null) return;
    F.preventDefault();
    const Nt = xo(kt, 0, 100);
    o(Nt), clearTimeout(E), E = setTimeout(() => n(Nt), 500);
  }), {
    el: l,
    update(F) {
      const G = !b;
      b = F, G && (g.pos = b.pos, g.tilt = b.tilt, O = performance.now() + 1500, f && setTimeout(H, 1600)), l.classList.toggle("x", k() === "x"), l.classList.toggle("y", k() === "y"), b.canSet ? (l.tabIndex = 0, l.setAttribute("role", "slider"), l.setAttribute("aria-valuemin", "0"), l.setAttribute("aria-valuemax", "100"), l.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), l.setAttribute("aria-orientation", k() === "x" ? "horizontal" : "vertical")) : l.setAttribute("role", "img"), l.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), l.setAttribute("aria-valuetext", b.text), H();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(tt), clearTimeout(E), l.remove();
    }
  };
}
const aa = (o) => Math.round(o * 100) / 100, Aa = (o) => o * Math.PI / 180, kn = (o, n, i) => o + (n - o) * i, xc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function du(o, n, i, l = 45, f = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(Aa(l)), v = Math.sin(Aa(l)), T = Math.cos(Aa(f)), L = Math.sin(Aa(f)), _ = 0.68, E = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: l,
    V: [v * T, g * T, L],
    L: [_ * g + E * v, -_ * v + E * g],
    k: b,
    cy: g,
    sy: v,
    sp: L,
    cp: T,
    p: ([O, k, K]) => {
      const Q = O * g - k * v, z = O * v + k * g;
      return [n + Q * b, i + (z * L - K * T) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(O, k, K) {
      const Q = (O - n) / b, z = ((k - i) / b + K * T) / L;
      return [Q * g + z * v, -Q * v + z * g];
    }
  };
}
const Qn = (o, n = !0) => "M" + o.map(([i, l]) => `${aa(i)} ${aa(l)}`).join("L") + (n ? "Z" : "");
function ao(o, n, i, l = 7) {
  const f = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, T] of b)
    for (let L = 0; L <= l; L++) {
      const _ = Aa(T + 90 * L / l);
      f.push([g + i * Math.cos(_), v + i * Math.sin(_)]);
    }
  return f;
}
const oa = (o, n = 56) => Array.from({ length: n }, (i, l) => [o * Math.cos(2 * Math.PI * l / n), o * Math.sin(2 * Math.PI * l / n)]);
function He(o, n, i, l = !0, f = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([T, L]) => f(T, L, n)), ...o.map(([T, L]) => f(T, L, i))], v = [
    { idx: o.map((T, L) => L), smooth: !1 },
    { idx: o.map((T, L) => b + L), smooth: !1 }
  ];
  for (let T = 0; T < b; T++) {
    const L = (T + 1) % b;
    v.push({ idx: [T, L, b + L, b + T], smooth: l });
  }
  return { verts: g, faces: v };
}
const ko = (o, n) => ({ ...o, verts: o.verts.map(n) }), Ti = (o, n, i) => ([l, f, b]) => [l + o, f + n, b + i], Rs = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [n + (b - n) * l - (g - i) * f, i + (b - n) * f + (g - i) * l, v];
}, Hc = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [b, n + (g - n) * l + (v - i) * f, i - (g - n) * f + (v - i) * l];
}, rg = (o, n) => [o[0] - n[0], o[1] - n[1], o[2] - n[2]], pu = (o, n) => o[0] * n[0] + o[1] * n[1] + o[2] * n[2], uu = (o) => o.reduce((n, i) => [n[0] + i[0] / o.length, n[1] + i[1] / o.length, n[2] + i[2] / o.length], [0, 0, 0]);
function ig(o) {
  const n = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const l = o[i], f = o[(i + 1) % o.length];
    n[0] += (l[1] - f[1]) * (l[2] + f[2]), n[1] += (l[2] - f[2]) * (l[0] + f[0]), n[2] += (l[0] - f[0]) * (l[1] + f[1]);
  }
  return n;
}
function Tf(o, n = [1, 1, 1]) {
  const i = uu(o.verts);
  return o.faces.map((l) => {
    const f = l.idx.map((g) => o.verts[g]);
    let b = ig(f);
    return pu(b, rg(uu(f), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), pu(b, n) > 1e-6 * Math.hypot(...b);
  });
}
const Mo = (o, n, i) => Qn(n.faces[i].idx.map((l) => o.p(n.verts[l])));
function Ne(o, n, i = "", l = "") {
  const f = n.verts.map(o.p), b = Tf(n, o.V);
  let g = "";
  n.faces.forEach((L, _) => {
    b[_] && (g += Qn(L.idx.map((E) => f[E])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((L, _) => {
    for (let E = 0; E < L.idx.length; E++) {
      const O = L.idx[E], k = L.idx[(E + 1) % L.idx.length], K = O < k ? `${O}-${k}` : `${k}-${O}`;
      v.has(K) || v.set(K, { a: O, b: k, fs: [] }), v.get(K).fs.push(_);
    }
  });
  let T = "";
  for (const { a: L, b: _, fs: E } of v.values()) {
    const [O, k] = E, K = b[O], Q = k === void 0 ? !1 : b[k], z = k !== void 0 && n.faces[O].smooth && n.faces[k].smooth;
    (K !== Q || K && Q && !z) && (T += `M${aa(f[L][0])} ${aa(f[L][1])}L${aa(f[_][0])} ${aa(f[_][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${l ? ` class="${l}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${T}"/></g>`;
}
function sg(o) {
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
let lg = 0;
function na(o, n, i, l, f = "") {
  const b = n.verts.filter((T) => T[2] >= i - 0.01).map(([T, L, _]) => o.p([T + (_ - i) * o.L[0], L + (_ - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = Qn(sg(b));
  if (!f) return `<path class="shade" fill="url(#${l})" d="${g}"/>`;
  const v = `clip${++lg}`;
  return `<clipPath id="${v}"><path d="${f}"/></clipPath><path class="shade" fill="url(#${l})" clip-path="url(#${v})" d="${g}"/>`;
}
const Jn = (o, n, i = "edge", l = !0) => `<path class="${i}" d="${Qn(n.map(o.p), l)}"/>`, yo = (o, n, i, l = "edge") => {
  const [f, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${l}" d="M${aa(f)} ${aa(b)}L${aa(g)} ${aa(v)}"/>`;
};
function Ic(o, n, i, l, { part: f = "", cls: b = "", w: g = 0 } = {}) {
  const [v, T] = o.p(n), L = o.k, _ = `matrix(${aa(L * o.cy)} ${aa(L * o.sy * o.sp)} ${aa(-L * o.sy)} ${aa(L * o.cy * o.sp)} ${aa(v)} ${aa(T)})`, E = g ? `<rect x="${-g / 2}" y="${-l * 0.9}" width="${g}" height="${l * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${_}"${f ? ` data-part="${f}"` : ""}>${E}<text class="st ${b}" font-size="${l}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class cg {
  constructor(n, i = 0.24, l = 0.62) {
    this.x = n, this.t = n, this.v = 0, this.k = i, this.d = l;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const dg = "http://www.w3.org/2000/svg", pg = matchMedia("(prefers-reduced-motion: reduce)");
let ug = 0;
class tr {
  constructor(n, i = {}) {
    kp(this, "tick", () => {
      let n = !1;
      for (const i of this.springs) n = i.step() || n;
      this.paint(), this.raf = n ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++ug}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const l = xc[i.camera] || xc.iso;
    this.yaw = this.spring(l.yaw, 0.12, 0.7), this.pitch = this.spring(l.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const f = this.svg = document.createElementNS(dg, "svg");
    f.setAttribute("viewBox", "0 0 400 400"), f.setAttribute("class", "iso"), f.tabIndex = 0, n.prepend(f), f.addEventListener("pointerdown", (g) => {
      var T, L, _, E;
      const v = (_ = (L = (T = g.target).closest) == null ? void 0 : L.call(T, "[data-part]")) == null ? void 0 : _.dataset.part;
      if (v) {
        try {
          f.setPointerCapture(g.pointerId);
        } catch {
        }
        this.held = !0, (E = this.down) == null || E.call(this, v, this.pt(g), g), this.kick();
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
    return [(n.clientX - i.left) * 400 / i.width, (n.clientY - i.top) * 400 / i.height];
  }
  // the view is worked out from the camera springs each frame, so a camera change glides
  get v() {
    const [n, i, l] = this.base, f = this.fillAmt.x, b = du(n, i, l, this.yaw.x, this.pitch.x);
    return f < 1e-3 ? b : du(n, kn(i, 200, f), kn(l, 200 + this.lift * b.cp * b.k / 2, f), this.yaw.x, this.pitch.x);
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
    const T = 352 / f.k, L = (352 / f.k - this.lift * f.cp) / f.sp, _ = Math.max(n * 0.6, (T * b - L * g) / v), E = Math.max(i * 0.6, (L * b - T * g) / v);
    return [kn(n, _, l), kn(i, E, l)];
  }
  setCamera(n) {
    const i = xc[n];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(n, i, l) {
    const f = new cg(n, i, l);
    return this.springs.push(f), f;
  }
  kick() {
    if (pg.matches) {
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
class fg extends tr {
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
    const i = this.v, l = 11 + this.h.x, [f, b] = this.size(68, 68), g = Math.min(f, b) / 68, v = He(ao(f, b, 18 * g), 0, 8), T = He(oa(25 * g), 8, 11), L = He(oa(18.5 * g), 11, l), _ = oa(12.5 * g).map(([O, k]) => [O, k, l]), E = Math.max(0, Math.min(1, this.glow.x));
    return na(i, v, 0, n) + Ne(i, v) + Ne(i, T, "cap") + na(i, L, 11, n, Mo(i, T, 1)) + Ne(i, L, "cap") + Jn(i, _) + (E > 0.01 ? `<g style="opacity:${E.toFixed(3)}">${Jn(i, _, "accent")}</g>` : "");
  }
}
class fu extends tr {
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
    const i = this.v, l = this.t.x, [f, b] = this.size(72, 96), g = f / 72, v = b / 96, T = Math.min(g, v), L = 9, _ = kn(3, 12, l), E = kn(12, 3, l), O = (_ + E) / 2 - 1.4, k = 31 * v, K = He(ao(f, b, 16 * T), 0, 6), Q = He(ao(48 * g, 72 * v, 9 * T), 6, L), z = [[-k, L], [k, L], [k, L + E], [0, L + O], [-k, L + _]], H = He(z, -20 * g, 20 * g, !1, (et, F, G) => [G, et, F]), tt = (et) => L + (et < 0 ? kn(_, O, (et + k) / k) : kn(O, E, et / k)) + 0.05, ot = oa(4.2 * T, 36).map(([et, F]) => [et, F - k / 2, tt(F - k / 2)]), ct = [[0, k * 0.32], [0, k * 0.68]].map(([et, F]) => [et, F, tt(F)]);
    return na(i, K, 0, n) + Ne(i, K) + Ne(i, Q, "paddle") + na(i, H, L, n, Mo(i, Q, 1)) + Ne(i, H, "paddle") + Jn(i, ot, this.on ? "edge mark" : "accent mark") + yo(i, ct[0], ct[1], this.on ? "accent mark" : "edge mark");
  }
}
class hu extends tr {
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
    const i = this.v, l = this.size(44, 136)[1], f = 44, b = 1, g = l / 136, v = 1, T = 48 * g, L = 6 + this.kh.x, _ = T - this.L.x * 2 * T;
    this.travel = 2 * T;
    const E = Math.min(32 * b, f - 12), O = E / 32, k = He(ao(f, l, 16 * v), 0, 6), K = ko(He(ao(E, 16 * v, 5 * v), 6, L), Ti(0, _, 0));
    let Q = "";
    for (let tt = 0; tt <= 10; tt++) {
      const ot = T - tt * (2 * T) / 10, ct = (tt % 5 === 0 ? 7 : 4) * b, et = 9 * v;
      Q += yo(i, [et, ot, 6], [et + ct, ot, 6]) + yo(i, [-et, ot, 6], [-et - ct, ot, 6]);
    }
    const z = ao(6 * v, 2 * T + 6 * v, 3 * v).map(([tt, ot]) => [tt, ot, 6]), H = [[-3 * v, T + 3 * v, 6], [3 * v, T + 3 * v, 6], [3 * v, _, 6], [-3 * v, _, 6]];
    return na(i, k, 0, n) + Ne(i, k, "plate") + `<g class="deco">${Q}${Jn(i, z)}<path class="level" d="${Qn(H.map(i.p))}"/></g>` + na(i, K, 6, n, Mo(i, k, 1)) + Ne(i, K, "knob") + `<g class="deco">${yo(i, [-12 * O, _, L], [12 * O, _, L])}${yo(i, [-8 * O, _ - 3.5 * v, L], [8 * O, _ - 3.5 * v, L])}${yo(i, [-8 * O, _ + 3.5 * v, L], [8 * O, _ + 3.5 * v, L])}</g>`;
  }
}
class mu extends tr {
  constructor(n, i) {
    super(n, i), this.min = i.min ?? 10, this.max = i.max ?? 30, this.now = i.now ?? 19.5, this.value = i.value ?? 21.5, this.base = [2.85, 200, 194], this.lift = 22, this.val = this.spring(this.value, 0.35, 0.5), this.kh = this.spring(15, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  // the scale's angle as the viewer sees it: the gap always faces us, min on the left, max on the right
  ang(n) {
    return 135 + (n - this.min) / (this.max - this.min) * 270 - this.yaw.x;
  }
  set(n) {
    const i = Math.max(this.min, Math.min(this.max, Math.round(n * 2) / 2));
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
    const l = { ArrowUp: 0.5, ArrowRight: 0.5, ArrowDown: -0.5, ArrowLeft: -0.5 }[n.key];
    return l === void 0 ? !1 : (i ? (this.set(this.value + l), this.kh.t = 12.5) : this.kh.t = 15, !0);
  }
  show(n, i) {
    this.held || (i != null && (this.now = i), n != null && (this.value = n, this.val.t = n, this.svg.setAttribute("aria-valuenow", n)), this.kick());
  }
  render(n) {
    const i = this.v, l = 7 + this.kh.x, f = this.ang(this.val.x), [b, g] = this.size(92, 92), v = b / 92, T = g / 92, L = Math.min(v, T), _ = (ot, ct, et) => [ot * Math.cos(ct) * v, ot * Math.sin(ct) * T, et], E = He(oa(46, 72).map(([ot, ct]) => [ot * v, ct * T]), 0, 7), O = He(oa(22 * L, 64), 7, l), k = Math.min(this.now, this.value), K = Math.max(this.now, this.value);
    let Q = "";
    for (let ot = 0; ot <= (this.max - this.min) * 2; ot++) {
      const ct = this.min + ot / 2, et = Aa(this.ang(ct)), F = ot % 10 === 0 ? 36.5 : ot % 2 === 0 ? 34.5 : 33.2, G = ct >= k && ct <= K && this.value > this.now;
      Q += yo(i, _(30, et, 7), _(F, et, 7), G ? "accent" : "edge"), ot % 10 === 0 && (Q += Ic(i, _(41, et, 7), ct, 4 * L));
    }
    let z = "";
    for (let ot = 0; ot < 40; ot++) {
      const ct = Aa(f + ot * 9), et = Math.cos(ct), F = Math.sin(ct), G = 22 * L;
      et * i.V[0] + F * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (z += yo(i, [G * et, G * F, 9], [G * et, G * F, l - 2.2]));
    }
    const H = Aa(f), tt = oa(18.5 * L, 64).map(([ot, ct]) => [ot, ct, l]);
    return na(i, E, 0, n) + Ne(i, E, "knob") + `<g class="deco">${Q}</g>` + na(i, O, 7, n, Mo(i, E, 1)) + Ne(i, O, "knob") + `<g class="deco">${z}${Jn(i, tt)}${yo(i, [5 * L * Math.cos(H), 5 * L * Math.sin(H), l], [15.5 * L * Math.cos(H), 15.5 * L * Math.sin(H), l], "edge pointer")}</g>`;
  }
}
class hg extends tr {
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
    const i = this.v, l = this.A.x - this.yaw.x, f = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, T = g / 92, L = Math.min(v, T), _ = He(ao(b, g, 20 * L), 0, 7), E = He(oa(15 * L, 48), 7, 12), O = ko(He([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([K, Q]) => [K * L, Q * L]), 12, f, !1), Rs(l));
    let k = "";
    return this.positions.forEach((K, Q) => {
      const z = Aa(K.a - this.yaw.x), H = Q === this.index, tt = Math.cos(z), ot = Math.sin(z), ct = oa(1.7 * L, 20).map(([et, F]) => [et + 26.5 * tt * v, F + 26.5 * ot * T, 7]);
      k += H ? `<path class="dotfill" d="${Qn(ct.map(i.p))}"/>` : Jn(i, ct), k += Ic(i, [37.5 * tt * v, 37.5 * ot * T, 7], K.label, 5.6 * L, { part: `pos-${Q}`, cls: H ? "sel" : "", w: 26 });
    }), na(i, _, 0, n) + Ne(i, _) + k + na(i, O, 7, n, Mo(i, _, 1)) + Ne(i, E, "knob") + Ne(i, O, "knob") + `<g class="deco">${yo(i, Rs(l)([6 * L, 0, f]), Rs(l)([19 * L, 0, f]))}</g>`;
  }
}
class mg extends tr {
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
    const i = this.v, l = 6, f = l - 23, b = 6, [g, v] = this.size(86, 104), T = Math.min(g / 86, v / 104), L = ([F, G, mt]) => [F * T, G * T, 6 + (mt - 6) * T], _ = He(ao(g, v, 18 * T), 0, 6), E = ko(He(oa(8, 40), 6, 10), (F) => L(Ti(0, l, 0)(F))), O = (F) => L(Ti(0, l, 10)(Hc(this.phi.x)(F))), k = ko(He(oa(2.2, 20), 0, 13.5), O), K = ko(He(oa(3.8, 24), 12.5, 17.5), O), Q = (F) => L(Hc(-this.lid.x, f, b)(F)), z = ko(He(ao(40, 46, 7), 6, 30), (F) => Q(Ti(0, l, 0)(F))), H = Tf(z, i.V);
    let tt = "";
    if (H[1]) {
      let F = "";
      for (let mt = -84; mt <= 84; mt += 12) {
        const kt = [[mt - 40, l - 40], [mt - 34, l - 40], [mt + 46, l + 40], [mt + 40, l + 40]].map(([Nt, dt]) => i.p(Q([Nt, dt, 30])));
        F += `<path class="level" d="${Qn(kt)}"/>`;
      }
      const G = `${this.id}s`;
      tt += `<clipPath id="${G}"><path d="${Mo(i, z, 1)}"/></clipPath><g clip-path="url(#${G})">${F}</g>`;
    }
    H[0] && (tt += Jn(i, ao(32, 38, 4).map(([F, G]) => Q([F, G + l, 6]))));
    const ot = `<g data-part="toggle">${Ne(i, E)}${Ne(i, k)}${Ne(i, K)}</g>`, ct = `<g data-part="cover">${Ne(i, z)}<g class="deco">${tt}</g></g>`, et = this.lid.x > 45;
    return na(i, _, 0, n) + Ne(i, _) + na(i, z, 6, n, Mo(i, _, 1)) + na(i, K, 6, n, Mo(i, _, 1)) + (et ? ct + ot : ot + ct);
  }
}
class gu extends tr {
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
    const i = this.v, [l, f] = this.size(64, 84), b = Math.min(l / 64, f / 84), g = ([z, H, tt]) => [z * b, H * b, 6 + (tt - 6) * b], v = this.press.x * 1.2, T = He(ao(l, f, 16 * b), 0, 6), L = ko(He(oa(10, 6).map(([z, H]) => [z, H]), 6, 9 - v, !1), (z) => g(Rs(30)(z))), _ = ko(He(oa(6.5, 36), 9 - v, 12 - v), g), E = (z) => g(Ti(0, 0, 12 - v)(Hc(this.phi.x)(z))), O = ko(He(oa(2.3, 20), 0, 15), E), k = ko(He(oa(4, 24), 14, 19), E), K = f / 2 - 13 * b, Q = (z, H, tt) => Ic(i, [0, H, 6], z, 6 * b, { part: "lever", cls: tt ? "sel" : "", w: 30 });
    return na(i, T, 0, n) + Ne(i, T) + Q(this.labels[0], -K, this.on) + Q(this.labels[1], K, !this.on) + na(i, k, 6, n, Mo(i, T, 1)) + na(i, O, 6, n, Mo(i, T, 1)) + `<g data-part="lever">${Ne(i, L)}${Ne(i, _)}${Ne(i, O)}${Ne(i, k)}</g>`;
  }
}
const bu = "homecore-density", wu = "homecore-physical", vu = "homecore-physical-view", yu = "homecore-physical-fit", xu = "homecore-physical-binary", ku = "homecore-physical-preview-at", Ve = {
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
}, W = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), Mu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', kc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Mc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', _s = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Su = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, _u = 1, gg = 4, Cu = 16, Au = 32, bg = 128, wg = 256, Lu = 16384, Tu = 1, Du = 2, Sc = 4, Eu = 8, vg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Bu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, yg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, _i = {
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
}, Pu = ["covers", "people", "openings", "leaks", "vacuum"], Ru = "homecore_house", Hu = "homecore-house-used", Ci = ["switch", "fan", "input_boolean", "automation"], Nu = "homecore-house-look", xg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kg = [["popup", "Popup"], ["sheet", "Sheet"]], Mg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], _g = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Ai = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Cg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Ag = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Ou = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', _c = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', da = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Cc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Cs = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Ac = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Df = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", As = Df(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Iu = Df(["M20 6L9 17L4 12"]), wo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + W(o || "") + '"' + (n ? ' data-icon-name="' + W(n) + '"' : "") + "></span>", Lg = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Fu = 1, qu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Vu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ls = ["door", "window", "garage_door", "opening"], Wu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Rr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Tg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Dg = 10, Eg = 20, Bg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Pg = ["living room", "bedroom", "office"];
function Rg(o, { config: n, getHass: i }) {
  var gp, bp, wp;
  const l = (t) => o.getElementById(t), f = l("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let T = Ve.get(bu) === "1", L = Ve.get(wu) === "1", _ = Ve.get(vu) || "front", E = Ve.get(yu) || "fill", O = Ve.get(xu) || "toggle", k = {};
  const K = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, Q = (t, e, a) => K({ type: "call_service", domain: t, service: e, service_data: a }), z = o.querySelector("#appearancePane .toggleList");
  z && !l("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), l("densityToggle").addEventListener("click", () => {
    T = !T, Ve.set(bu, T ? "1" : "0"), dt();
  }));
  const H = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], tt = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + s + '">' + d + "</button>").join("") + "</div>", ot = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function ct() {
    var D, X;
    if (!g || l("housePane")) return;
    const t = l("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (A, j) => '<div class="houseTab' + (A === "look" ? " active" : "") + '" data-house-pane="' + A + '"><section class="card">' + j + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([A, j]) => '<button class="tab segBtn' + (A === "look" ? " active" : "") + '" type="button" data-house-tab="' + A + '">' + j + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", xg.map(([A, j]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + A + '"><div class="tfCardTitle">' + j + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + H.map(([A, j, yt]) => ot(j, yt, '<select class="settingsSelect" data-source="' + A + '" aria-label="' + j + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(_i).map(([A, j]) => ot(j.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + A + '" aria-label="' + j.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (A) => t.querySelector('[data-look-group="' + A + '"]'), s = (A) => A == null ? void 0 : A.closest(".toggleRow");
    [s(t.querySelector(".themeBtn"))].forEach((A) => A && r("look").appendChild(A));
    const d = s(l("densityToggle"));
    d && (d.hidden = !0), [s(l("moreInfoChoice")), s(l("namesChoice"))].forEach((A) => A && r("house").appendChild(A)), r("house").insertAdjacentHTML("beforeend", ot("Lights", "How lights show on the house page.", tt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ot("Pad", "What the Dual Axis Controller’s pad sets on its tile.", tt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), r("house").insertAdjacentHTML("beforeend", ot("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + ot("Angle", "Where the physical controls are seen from.", tt("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + ot("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", tt("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + ot("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", tt("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const p = () => {
      const A = l("physToggle");
      A.classList.toggle("on", L), A.setAttribute("aria-checked", String(L)), l("physViewRow").hidden = l("physFitRow").hidden = l("physBinaryRow").hidden = !L, t.querySelectorAll("[data-phys-view]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.physView === _))), t.querySelectorAll("[data-phys-fit]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.physFit === E))), t.querySelectorAll("[data-phys-binary]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.physBinary === O)));
    };
    r("house").addEventListener("click", (A) => {
      const j = A.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      j && (j.id === "physToggle" && (L = !L, Ve.set(wu, L ? "1" : "0"), gn.clear()), j.dataset.physView && (_ = j.dataset.physView, Ve.set(vu, _), gn.forEach((yt) => yt.ctl.setCamera(_))), j.dataset.physFit && (E = j.dataset.physFit, Ve.set(yu, E), gn.forEach((yt) => yt.ctl.setFill(E === "fill"))), j.dataset.physBinary && (O = j.dataset.physBinary, Ve.set(xu, O), gn.clear()), p(), (j.id === "physToggle" || j.dataset.physBinary) && Na(), C(j.closest(".toggleRow")));
    }), p();
    let u = null;
    const h = () => {
      !u || u.hidden || (u.classList.remove("in"), setTimeout(() => {
        u.classList.contains("in") || (u.hidden = !0);
      }, 220));
    };
    function x(A, j) {
      const yt = u.offsetWidth, Dt = u.offsetHeight;
      u.style.left = Math.max(8, Math.min(window.innerWidth - yt - 8, A)) + "px", u.style.top = Math.max(8, Math.min(window.innerHeight - Dt - 8, j)) + "px", u.classList.add("placed");
    }
    function C(A) {
      const j = o.querySelector("#app");
      if (!j) return;
      if (!u) {
        u = document.createElement("div"), u.className = "tfPhysPreview", u.hidden = !0, u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Physical controls preview"), u.innerHTML = '<div class="tfPhysPreviewHead" title="Drag to move"><span class="tfPhysGrip" aria-hidden="true"></span><span class="activityTitle">Preview</span><button class="tfBack" type="button" data-preview-close aria-label="Close preview">' + Mc + '</button></div><div class="tfPhysPreviewRow"></div><div class="tfPhysPreviewNote">Off: popups show their usual controls.</div>', j.appendChild(u), u.querySelector("[data-preview-close]").addEventListener("click", h);
        const At = u.querySelector(".tfPhysPreviewHead");
        At.addEventListener("pointerdown", (ut) => {
          if (ut.button > 0 || ut.target.closest("button")) return;
          ut.preventDefault();
          const Lt = u.getBoundingClientRect(), Qt = ut.clientX - Lt.left, me = ut.clientY - Lt.top;
          try {
            At.setPointerCapture(ut.pointerId);
          } catch {
          }
          u.classList.add("dragging");
          const fe = (Ia) => x(Ia.clientX - Qt, Ia.clientY - me), ye = () => {
            At.removeEventListener("pointermove", fe), At.removeEventListener("pointerup", ye), At.removeEventListener("pointercancel", ye), u.classList.remove("dragging");
            const Ia = u.getBoundingClientRect();
            Ve.set(ku, JSON.stringify([Math.round(Ia.left), Math.round(Ia.top)]));
          };
          At.addEventListener("pointermove", fe), At.addEventListener("pointerup", ye), At.addEventListener("pointercancel", ye);
        }), window.addEventListener("resize", () => {
          if (u.classList.contains("placed")) {
            const ut = u.getBoundingClientRect();
            x(ut.left, ut.top);
          }
        });
      }
      const yt = (() => {
        try {
          return JSON.parse(Ve.get(ku) || "null");
        } catch {
          return null;
        }
      })(), Dt = u.querySelector(".tfPhysPreviewRow");
      if (u.dataset.binary !== O) {
        u.dataset.binary = O;
        const At = [[O === "rocker" ? "Rocker" : "Toggle", "Switch"], ["Fader", "Light"], ["Dial", "Thermostat"]];
        Dt.innerHTML = At.map(([, Qt]) => '<div class="tfPhysPreviewCell"><div class="tfMoreSpace tfPhys"></div><span>' + Qt + "</span></div>").join("");
        const ut = Dt.querySelectorAll(".tfPhys"), Lt = { camera: _, fill: E === "fill" };
        u.ctls = [
          O === "rocker" ? new fu(ut[0], { ...Lt, on: !0, label: "Sample switch" }) : new gu(ut[0], { ...Lt, on: !0, label: "Sample switch" }),
          new hu(ut[1], { ...Lt, value: 0.64, label: "Sample light brightness" }),
          new mu(ut[2], { ...Lt, value: 21.5, now: 19.5, min: 10, max: 30, label: "Sample thermostat target" })
        ];
      } else u.ctls.forEach((At) => {
        At.setCamera(_), At.setFill(E === "fill");
      });
      u.classList.toggle("off", !L), u.hidden && (u.hidden = !1, yt && x(yt[0], yt[1]), u.offsetWidth), u.classList.add("in"), (A && !u.classList.contains("placed") ? A.getBoundingClientRect().bottom - (u.getBoundingClientRect().top - 16) : 0) > 0 && A.scrollIntoView({ block: "center", behavior: We() ? "instant" : "smooth" });
    }
    ["#homeNav", "#settingsBack", "#tvNav"].forEach((A) => {
      var j;
      return (j = o.querySelector(A)) == null ? void 0 : j.addEventListener("click", h);
    }), [s(l("hoursChoice")), s(l("wxStyleChoice"))].forEach((A) => A && r("weather").appendChild(A));
    const M = l("housePane"), N = M.querySelector(".houseTabs"), B = N.querySelector(".rubberIndicator"), U = "homecore-light-view", P = (A) => {
      M.classList.toggle("tfLightCardsOn", A === "cards"), M.querySelectorAll("[data-light-view]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.lightView === A))), Ve.set(U, A);
    };
    P(Ve.get(U) === "table" ? "table" : "cards"), M.querySelector(".tfLightView").addEventListener("click", (A) => {
      const j = A.target.closest("[data-light-view]");
      j && P(j.dataset.lightView);
    }), new ResizeObserver(() => F()).observe(M), (X = (D = document.fonts) == null ? void 0 : D.ready) == null || X.then(() => F());
    const V = (A) => {
      const j = N.querySelector(".tab.active");
      B.style.transition = "none", A ? Bs(B, B.offsetLeft, B.offsetWidth, j.offsetLeft, j.offsetWidth) : (B.style.left = j.offsetLeft + "px", B.style.width = j.offsetWidth + "px");
    };
    new ResizeObserver(() => V(!1)).observe(N), M.addEventListener("click", (A) => {
      const j = A.target.closest("[data-house-tab]");
      if (j) {
        N.querySelectorAll(".tab").forEach((At) => At.classList.toggle("active", At === j)), M.querySelectorAll(".houseTab").forEach((At) => At.classList.toggle("active", At.dataset.housePane === j.dataset.houseTab)), j.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), V(!0), F();
        return;
      }
      const yt = A.target.closest("[data-light-fav]");
      if (yt) {
        Fc(yt.dataset.lightFav);
        return;
      }
      const Dt = A.target.closest("[data-light-pick]");
      if (Dt) {
        const [At, ut] = Dt.dataset.lightPick.split("|"), Lt = { ...Xt[At] };
        Dt.dataset.v ? Lt[ut] = Dt.dataset.v : delete Lt[ut], Xt[At] = Lt, _o(), [...Je.keys()].filter((Qt) => Qt.endsWith(":" + ut)).forEach((Qt) => Je.delete(Qt)), Na();
        return;
      }
      const Ht = A.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ht || Ht.disabled)) {
        if (Ht.dataset.lights && (Xt.lights = Ht.dataset.lights), Ht.dataset.dacPad && (Xt.dacPad = Ht.dataset.dacPad), (Ht.dataset.lights || Ht.dataset.dacPad) && (_o(), Je.clear()), Ht.dataset.sumToggle) {
          const At = Ht.dataset.sumToggle, ut = new Set(xt.hiddenSums || []);
          ut.has(At) ? ut.delete(At) : ut.add(At), xt = { ...xt, hiddenSums: [...ut] }, Ta();
        }
        Na();
      }
    }), M.addEventListener("change", (A) => {
      const j = A.target;
      j.dataset.source && (xt = { ...xt, sources: { ...xt.sources || {}, [j.dataset.source]: j.value || void 0 } }, Ta());
      const yt = j.dataset.lightStyle || j.dataset.lightPad;
      if (yt) {
        const Dt = j.dataset.lightStyle ? "lightStyles" : "lightPads", Ht = { ...Xt[Dt] };
        j.value ? Ht[yt] = j.value : delete Ht[yt], Xt[Dt] = Ht, _o(), [...Je.keys()].filter((At) => At.endsWith(":" + yt)).forEach((At) => Je.delete(At));
      }
      Na();
    });
  }
  function et() {
    var M, N;
    ai() && un();
    const t = l("housePane");
    if (!t) return;
    const e = !!customElements.get(Ya);
    t.querySelectorAll("[data-lights]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.lights === Xt.lights))), l("lightsRow").querySelector(".status").textContent = e || !ai() ? "How lights show on the house page." : Za === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((B) => B.setAttribute("aria-pressed", String(B.dataset.dacPad === Xt.dacPad))), l("dacPadRow").hidden = !ai();
    for (const B of t.querySelectorAll("[data-source]")) {
      if (B === o.activeElement) continue;
      const [U] = H.find(([V]) => V === B.dataset.source), P = Object.keys(k).filter(H.find(([V]) => V === U)[3]).sort((V, D) => vt(V).localeCompare(vt(D)));
      B.dataset.sig !== P.join(",") && (B.innerHTML = '<option value="">Automatic</option>' + P.map((V) => '<option value="' + W(V) + '">' + W(vt(V)) + "</option>").join(""), B.dataset.sig = P.join(",")), B.value = P.includes((M = xt.sources) == null ? void 0 : M[U]) ? xt.sources[U] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((B) => {
      const U = !(xt.hiddenSums || []).includes(B.dataset.sumToggle);
      B.classList.toggle("on", U), B.setAttribute("aria-checked", String(U));
    });
    const a = l("lightRows"), r = l("lightCards"), s = o.activeElement, d = a != null && a.contains(s) || r != null && r.contains(s) ? s : null;
    if (!a || d != null && d.matches("select")) {
      F();
      return;
    }
    const p = new Set($t()), u = (B, U, P, V) => '<option value="' + B + '"' + (B === P ? " selected" : "") + ">" + U + "</option>", h = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, U) => !Se.get(B) - !Se.get(U) || (Se.get(B) || "").localeCompare(Se.get(U) || "") || vt(B).localeCompare(vt(U))).map((B) => {
      const U = Xt.lightStyles[B] || "", P = Xt.lightPads[B] || "", V = p.has(B), D = W(vt(B));
      return "<tr><td><strong>" + D + "</strong></td><td>" + W(Se.get(B) || "—") + "</td><td>" + W(Oe(B)) + '</td><td class="metaSwitchCol"><button class="switch' + (V ? " on" : "") + '" type="button" role="switch" aria-checked="' + V + '" data-light-fav="' + W(B) + '" aria-label="' + D + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + W(B) + '" aria-label="' + D + ' tile">' + u("", "Default", U) + u("tile", "HomeCore tile", U) + u("dac", "Dual Axis Controller", U) + '</select></td><td><select class="settingsSelect" data-light-pad="' + W(B) + '" aria-label="' + D + ' pad"' + (En(B) ? "" : " disabled") + ">" + u("", "Default", P) + u("temperature", "Temperature", P) + u("colour", "Colour", P) + "</select></td></tr>";
    }).join(""), x = (B, U, P, V, D) => '<div class="themeChoice" role="group" aria-label="' + P + '">' + V.map(([X, A]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (X === D) + '" data-light-pick="' + B + "|" + W(U) + '" data-v="' + X + '">' + A + "</button>").join("") + "</div>", C = Object.keys(k).filter((B) => B.startsWith("light.")).sort((B, U) => !Se.get(B) - !Se.get(U) || (Se.get(B) || "").localeCompare(Se.get(U) || "") || vt(B).localeCompare(vt(U))).map((B) => {
      const U = p.has(B), P = W(vt(B)), V = [Se.get(B), Oe(B)].filter(Boolean).map(W).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + P + '</strong><div class="status">' + V + "</div></div></div>" + ot("Favourite", "", '<button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + W(B) + '" aria-label="' + P + ' is a favourite"></button>') + ot("Tile", "", x("lightStyles", B, P + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[B] || "")) + (En(B) ? ot("Pad", "", x("lightPads", B, P + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[B] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), r.dataset.html !== C && (r.innerHTML = C, r.dataset.html = C), d != null && d.dataset.lightFav && ((N = (r.contains(d) ? r : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || N.focus({ preventScroll: !0 })), F();
  }
  function F() {
    var e, a, r;
    const t = l("housePane");
    if (t)
      for (const s of t.querySelectorAll(".themeChoice")) {
        const d = [...s.querySelectorAll("button")];
        let p = (e = s.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? s.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", s.getAttribute("aria-label") || ((r = (a = s.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var M;
            return (M = d[Number(p.value)]) == null ? void 0 : M.click();
          }), s.after(p);
          const C = () => {
            p.innerHTML = d.map((N, B) => '<option value="' + B + '"' + (N.disabled ? " disabled" : "") + ">" + W(N.textContent) + "</option>").join("");
            const M = d.findIndex((N) => N.getAttribute("aria-pressed") === "true" || N.classList.contains("active"));
            M >= 0 && (p.value = String(M));
          };
          new MutationObserver(C).observe(s, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), C();
        }
        const u = (C) => {
          s.hidden !== !C && (s.hidden = !C), p.hidden !== C && (p.hidden = C);
        };
        if (d.length > 3) {
          u(!1);
          continue;
        }
        if (!s.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || u(!0);
          continue;
        }
        const h = s.hidden;
        s.hidden = !1;
        const x = d.every((C) => C.scrollWidth <= C.clientWidth + 1);
        s.hidden = h, u(x), p.dataset.fit = "1";
      }
  }
  const G = document.createElement("div");
  G.className = "densityBadge", G.setAttribute("aria-live", "polite"), G.hidden = !0, f.appendChild(G);
  let mt = 0;
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
  const Nt = () => {
    T && requestAnimationFrame(kt);
  };
  function dt() {
    var t;
    f.classList.toggle("showDensity", T), (t = l("densityToggle")) == null || t.classList.toggle("on", T), G.hidden = !T, clearInterval(mt), T && (mt = setInterval(kt, 1e3), kt());
  }
  window.addEventListener("scroll", Nt, { capture: !0, passive: !0 }), window.addEventListener("resize", Nt, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ft = document.createElement("style");
  o.appendChild(Ft);
  const Y = new ResizeObserver(() => ht()), rt = /* @__PURE__ */ new Set(), st = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function ht() {
    const t = f.classList.contains("tfAreaOpen") && !f.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), rt.forEach((h) => {
      (!t || !h.isConnected) && (Y.unobserve(h), rt.delete(h));
    }), !t) {
      Ft.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, s = [...S.children].filter((h) => h.dataset.k && h.offsetParent);
    Ft.disabled = !0;
    const d = s.map((h) => {
      const x = getComputedStyle(h), C = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(r, C ? +C[1] : x.gridColumnEnd === "-1" ? r : 1);
    });
    Ft.disabled = !1;
    let p = 0;
    const u = s.map((h, x) => {
      rt.has(h) || (rt.add(h), Y.observe(h));
      const C = d[x];
      p + C > r && (p = 0);
      const M = p + 1;
      return p = (p + C) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + M + " / span " + C + ";grid-row-end:span " + Math.max(1, Math.ceil(st(h) + a)) + "}";
    }).join(`
`);
    Ft.textContent !== u && (Ft.textContent = u);
  }
  new MutationObserver(ht).observe(S, { childList: !0 }), new MutationObserver(ht).observe(f, { attributes: !0, attributeFilter: ["class"] });
  let nt = null, lt = null, I = null;
  const gt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Map(), fa = (t) => ra.set(t, (ra.get(t) || 0) + 1), So = () => [.../* @__PURE__ */ new Set([...Wt.keys(), ...ne])];
  let La = !1, nn = 0;
  const Mn = 6;
  let Vt = null;
  const ge = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
  let xt = { favourites: null }, Sn = {}, qr = {}, Bi = [], er = null;
  const _n = (() => {
    try {
      return JSON.parse(Ve.get(Hu)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Pi = 0;
  function Ta() {
    clearTimeout(Pi), Pi = setTimeout(() => Promise.resolve(K({ type: "frontend/set_user_data", key: Ru, value: xt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ve.get(Nu)) || {};
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
  })(), _o = () => Ve.set(Nu, JSON.stringify(Xt)), Vr = () => {
    f.dataset.more = Xt.more, f.dataset.names = Xt.names, Il();
  };
  g && z && !l("moreInfoChoice") && (l("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, _o(), Vr(), l("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, _o(), Vr(), l("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, _o(), Le == null || Le.refresh(), l("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + _g.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, _o(), Le == null || Le.setStyle(Xt.wxStyle), Te == null || Te.forEach((a) => a.setStyle(Xt.wxStyle)), l("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), ct();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ya = /* @__PURE__ */ new Map();
  let Ri = "";
  const Hi = g ? Fm({ onChange: () => Ee() }) : null;
  g && f.classList.add("house");
  const Da = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Le = null, Ni = null, Cn = !1;
  function Wr(t) {
    const e = Oo();
    if (f.classList.toggle("houseBento", !!e), Le && (Ni !== e || t == null) && (Le.destroy(), Le = null), !e || t == null) {
      Da.remove();
      return;
    }
    Da.isConnected || S.append(Da), Da.style.order = t, !Le && !Cn && (Le = iu(Da, { getHass: i, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: Gr }), Ni = e);
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
  ], zr = jr.map(([t]) => t), rn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], qs = { hourly: 2 }, no = Object.fromEntries(jr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Te = null, ar = null;
  function Co(t) {
    const e = Oo();
    Te && ar !== e && (Te.forEach((a) => a.destroy()), Te = null), Object.values(no).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Te && !Cn && (Te = /* @__PURE__ */ new Map(), ar = e), Oi();
  }
  const Gr = () => {
    var t;
    return ((t = ce().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Vs = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => vt(t.entity_id).localeCompare(vt(e.entity_id))).map((t) => ["camera:" + t.entity_id, vt(t.entity_id)])];
  function Oi() {
    if (!Te || Cn) return;
    const t = new Set(ce().hidden);
    jr.forEach(([e, a]) => {
      Te.has(e) || t.has(e) && !(ae != null && ae.fromTray && ae.key === e) || Te.set(e, iu(no[e], { getHass: i, entityId: ar, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => qd("weather") : void 0, radarSource: Gr }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, vt = (t) => Ut(t).friendly_name || t, be = (t, e) => eo(t) || (Number(Ut(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), ro = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, or = (t) => Ut(t).supported_color_modes || [], Ws = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), $r = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ii = (t) => 0.2126 * $r(t[0]) + 0.7152 * $r(t[1]) + 0.0722 * $r(t[2]), js = (t, e) => {
    const a = Ii(t), r = Ii(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, zs = 0.55, sn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fi = (t) => {
    const e = Ut(t), a = sn.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? Ws(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Ao = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Lo(t) {
    var r;
    const e = t.split(".")[0], a = (r = k[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Fi(t) : null : e === "climate" ? Ao[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function nr(t, e, a = !1) {
    const [r, s, d] = t.map((U) => U / 255), p = Math.max(r, s, d), u = Math.min(r, s, d), h = p - u, x = h ? (p === r ? (s - d) / h + (s < d ? 6 : 0) : p === s ? (d - r) / h + 2 : (r - s) / h + 4) * 60 : 0, C = (p + u) / 2, M = h ? h / (1 - Math.abs(2 * C - 1)) : 0, N = h < 0.1 ? Math.min(M, 0.25) : 1, B = (U) => {
      const P = (D) => (D + x / 30) % 12, V = N * Math.min(U, 1 - U);
      return [0, 8, 4].map((D) => Math.round(255 * (U - V * Math.max(-1, Math.min(P(D) - 3, 9 - P(D), 1)))));
    };
    for (let U = 0.5; a ? U < 0.96 : U > 0.04; U += a ? 0.01 : -0.01) {
      const P = B(U);
      if (js(P, e) >= 3) return "rgb(" + P.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Ga = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + nr(e, [58, 58, 58], !0) + ";--sum-l:" + nr(e, [230, 230, 230]);
  }, rr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, qi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + rr.d[t] + ";--g" + t + "-l:" + rr.l[t]).join(";"), Gs = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", io = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * zs));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + nr(t, e);
  }, ir = (t) => io(Fi(t)), To = (t) => {
    const e = Lo(t);
    return e ? ' data-light style="' + io(e) + '"' : "";
  }, Do = (t) => {
    const e = or(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, sr = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], so = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function $s(t) {
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
  const $a = (t) => {
    var e;
    return Ut(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, An = (t) => {
    var e;
    return m("pos", t, ((e = ge.get(t)) == null ? void 0 : e.pos) ?? $a(t));
  }, Ur = (t) => {
    var e;
    return m("tilt", t, ((e = ge.get(t)) == null ? void 0 : e.tilt) ?? Ut(t).current_tilt_position);
  };
  function Oe(t) {
    var p;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (Do(t) ? ro(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : sn.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const u = $a(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : zt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (r === "vacuum") return zt(e.state) + (e.state === "cleaning" && ((p = a.rooms) != null && p.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : zt(e.state);
    if (r === "alarm_control_panel") return Vu[e.state] || zt(e.state);
    if (r === "lock" || r === "valve") return zt(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : zt(a.problem);
    if (r === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ls.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + so(a.rang);
    const s = i();
    if (s != null && s.formatEntityState && !eo(t))
      try {
        return s.formatEntityState(e);
      } catch {
      }
    const d = Number(e.state);
    if (e.state !== "" && Number.isFinite(d)) {
      const u = Math.abs(d) >= 100 ? 0 : Math.abs(d) >= 10 ? 1 : 2, h = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return d.toLocaleString(void 0, { maximumFractionDigits: u }) + h + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return zt(e.state);
  }
  const Eo = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Yr = Object.fromEntries(Wm.map((t) => [t.id, t])), lr = {
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
  }, Us = (t) => {
    var r;
    const e = t.entity_id.split(".")[0], a = (r = t.attributes) == null ? void 0 : r.device_class;
    return e === "light" ? "light" : e === "switch" ? "plug" : e === "climate" ? "thermostat" : e === "fan" ? "fan" : e === "cover" ? ["door", "garage", "gate"].includes(a) ? "door" : a === "window" ? "window" : "blinds" : e === "lock" ? "lock" : e === "camera" ? "camera" : e === "media_player" ? a === "tv" ? "tv" : "speaker" : e === "vacuum" ? "vacuum" : e === "alarm_control_panel" ? "alarm" : e === "person" ? "person" : e === "sun" ? "sun" : e === "binary_sensor" ? { door: "door", garage_door: "door", opening: "door", window: "window", motion: "motion", occupancy: "motion", presence: "motion", moisture: "humidity" }[a] || null : e === "sensor" && { temperature: "temperature", humidity: "humidity", moisture: "humidity", power: "energy", energy: "energy", illuminance: "sun" }[a] || null;
  }, Zr = (t, e) => {
    var a, r, s, d;
    return e ? lr[e] || null : !t || (a = t.attributes) != null && a.icon || (d = (s = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : s[t.entity_id]) != null && d.icon ? null : Us(t);
  };
  let Kr = 0;
  function lo(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var h;
      const d = k[s.dataset.iconFor], p = s.dataset.iconName || "", u = Zr(d, p);
      if (u) {
        (s.dataset.hc !== u || !s.querySelector(":scope>svg.hcGlyph")) && (s.innerHTML = zm(Yr[u], 24, "hcg" + ++Kr).replace("<svg ", '<svg class="hcGlyph" '), s.dataset.hc = u);
        return;
      }
      if (s.dataset.hc && (delete s.dataset.hc, s.textContent = ""), customElements.get("ha-state-icon") && d && !p) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (s.textContent = "", x = document.createElement("ha-state-icon"), s.appendChild(x)), x.hass = e, x.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-icon") && (s.textContent = "", x = document.createElement("ha-icon"), s.appendChild(x)), x.icon = p || ((h = d == null ? void 0 : d.attributes) == null ? void 0 : h.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || vt(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
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
    var B, U, P, V, D, X, A;
    const e = t.localName === "svg" ? t : Vi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((j) => !j.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (B = t.closest(".tfIcon")) == null ? void 0 : B.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const s = r + "|" + a.map((j) => j.getAttribute("d") || j.localName).join("|");
    if (t.dataset.fitted === s) return !0;
    let d = 1 / 0, p = 1 / 0, u = -1 / 0, h = -1 / 0;
    for (const j of a) {
      const yt = j.getBBox(), Dt = getComputedStyle(j), Ht = Dt.stroke !== "none" ? (parseFloat(Dt.strokeWidth) || 0) / 2 : 0;
      if (!yt.width && !yt.height) continue;
      const At = (D = (V = (P = (U = j.transform) == null ? void 0 : U.baseVal) == null ? void 0 : P.consolidate) == null ? void 0 : V.call(P)) == null ? void 0 : D.matrix, ut = At ? (() => {
        const Lt = [[yt.x, yt.y], [yt.x + yt.width, yt.y], [yt.x, yt.y + yt.height], [yt.x + yt.width, yt.y + yt.height]].map(([fe, ye]) => [At.a * fe + At.c * ye + At.e, At.b * fe + At.d * ye + At.f]), Qt = Lt.map((fe) => fe[0]), me = Lt.map((fe) => fe[1]);
        return { x: Math.min(...Qt), y: Math.min(...me), width: Math.max(...Qt) - Math.min(...Qt), height: Math.max(...me) - Math.min(...me) };
      })() : yt;
      d = Math.min(d, ut.x - Ht), p = Math.min(p, ut.y - Ht), u = Math.max(u, ut.x + ut.width + Ht), h = Math.max(h, ut.y + ut.height + Ht);
    }
    if (!(u > d)) return !1;
    const x = (A = (X = e.viewBox) == null ? void 0 : X.baseVal) != null && A.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, C = r > 40 ? r * (26 / 40) : r - 14, M = C * x.width / Math.max(u - d, h - p), N = M / x.width;
    return t.localName === "svg" ? (t.style.width = M + "px", t.style.height = M + "px") : t.style.setProperty("--mdc-icon-size", M + "px"), e.style.translate = ((x.x + x.width / 2 - (d + u) / 2) * N).toFixed(2) + "px " + ((x.y + x.height / 2 - (p + h) / 2) * N).toFixed(2) + "px", t.dataset.fitted = s, !0;
  }
  let Bo = 0;
  function Po(t = 0) {
    clearTimeout(Bo), [...o.querySelectorAll(ln)].filter((a) => !Wi(a)).length && t < 5 && (Bo = setTimeout(() => Po(t + 1), 300));
  }
  function dr() {
    clearTimeout(Bo), Bo = setTimeout(() => Po(), 60);
  }
  const Ro = (t) => {
    var e, a, r;
    return t.startsWith("light.") && k[t] && !Ut(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, we = (t, e, a) => (e = e || Ro(t), ' data-icon-for="' + W(t) + '"' + (e ? ' data-icon-name="' + W(e) + '"' : "") + (a ? ' data-letter="' + W(a) + '"' : "")), Ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Rt = (t, e, a, r) => W([t, e, a, r ? JSON.stringify(r) : ""].join("|")), pr = (t) => W(JSON.stringify(t));
  function qe(t) {
    const e = W(vt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + W(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + we(t, Ea(t)) + '></div><div><div class="activityRowName">' + W(vt(t)) + '</div><div class="activityRowMeta">' + W(Oe(t)) + "</div></div></div>";
  }
  const cn = (t, e, a) => '<div class="activityRow" aria-label="' + W(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + we("", a, t) + '></div><div><div class="activityRowName">' + W(t) + '</div><div class="activityRowMeta">' + W(e) + "</div></div></div>";
  function dn(t, e, a, r, s = "", d = null, p = "") {
    return '<section class="card tfCard' + (p ? " " + p : "") + '" data-tf data-k="' + W(t) + '" style="order:' + e + '" aria-label="' + W(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + W(d) + '" aria-label="' + W(a + (k[d] ? ", " + Oe(d) : "") + ". More info") + '">' + W(a) + "</button>" : '<div class="activityTitle">' + W(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + s + "</section>";
  }
  function Jr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((s) => qe(s));
    return t.power != null && r.push(cn("Power now", Eo(t.power), "mdi:flash")), dn(a, e, "Readings", r);
  }
  function Ln(t, e) {
    var u;
    const a = "energy:" + t.id, [r, s] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], d = [r, s].filter(Boolean).map((h) => qe(h)), p = Number(((u = k[r]) == null ? void 0 : u.state) || 0) * 1e3;
    return jt.grid && (d.push(qe(jt.grid)), d.push(cn("House use", Eo(p + Number(k[jt.grid].state)), "mdi:home-lightning-bolt"))), dn(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ji = (t, e) => dn("plant:" + t.id, e, vt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function ur(t, e, a, r, s, d, p = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), h = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (s ? ' aria-valuetext="' + W(s) + '"' : "") + ' data-drag="' + W(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (d ? u == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Tn = "homecore-house-last-bright", co = (() => {
    try {
      return JSON.parse(Ve.get(Tn)) || {};
    } catch {
      return {};
    }
  })();
  let fr = 0;
  const Dn = (t, e) => {
    !e || co[t] === e || (co[t] = e, clearTimeout(fr), fr = setTimeout(() => Ve.set(Tn, JSON.stringify(co)), 500));
  }, ha = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + W(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + W(t.toLowerCase()) + '">' + Su.down + "</button><output>" + W(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + W(t.toLowerCase()) + '">' + Su.up + "</button></div>", ze = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + W(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + W(r.aria) + '"' : "") + ">" + (r.html || W(r.label)) + "</button>").join("") + "</div>", Qr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ti = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ei = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + W(vt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + W(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Qr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ti(e) + '">' + Math.round(e) + "%</output></div>";
  function hr(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, s) => {
      r.firstElementChild.setAttribute("style", Qr(e, s)), r.lastElementChild.classList.toggle("lit", e >= (s + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ti(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const zi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + W(vt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + W(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ys = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + W(vt(t)) + '">' + [
    be(t, Tu) && ["open", "Open", "open_cover", e >= 100 && !a],
    be(t, Eu) && ["stop", "Stop", "stop_cover", !1],
    be(t, Du) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, s, d, p]) => '<button type="button" data-act="' + Rt("cover", d, t) + '" aria-label="' + s + '"' + (p ? " disabled" : "") + ">" + vg[r] + "</button>").join("") + "</div>", xa = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + W(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + W(e.art) + '&quot;)"' : we(t, e.icon)) + "></button>", Ua = (t) => '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(vt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + W(vt(t)) + '</span><span class="activityRowMeta">' + W(Oe(t)) + "</span></button>";
  function pn(t, e = !1, a = null) {
    const r = w(t), s = t.startsWith("light.") && mr(t) && !(a && Pn(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), p = s ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + W(t) + '"></div>'] : r.sections.map((u, h) => u && (!d || d.includes((r.parts || [])[h])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (s ? " tfDac" : "") + (r.on ? " on" : "") + (!s && !p.length ? " tfHeadOnly" : "") + '" data-k="' + W(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + To(t) + '><div class="tfActionHead">' + xa(t, r) + Ua(t) + "</div>" + p.join("") + "</div>";
  }
  const Ya = "dual-controller-v3", Gi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Za = null;
  async function un() {
    if (Za || customElements.get(Ya)) return;
    Za = "loading";
    const t = await Promise.resolve().then(() => K({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Ya), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Ya)) return;
    const a = Object.assign(document.createElement("script"), { src: Gi });
    a.onerror = () => {
      Za = "failed", et();
    }, document.head.appendChild(a);
  }
  const Je = /* @__PURE__ */ new Map(), En = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", ai = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function mr(t) {
    return En(t) && !!customElements.get(Ya);
  }
  const fn = (t) => Xt.lightPads[t] || Xt.dacPad, oi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (e, a, r, ...s) => t.callService(e, ...up(e, a, r), ...s)
    };
  }, Ge = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", $i = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ge })).dataset.tf = "");
  }, ni = /* @__PURE__ */ new Map(), Ui = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ni.set(a.dataset.dac, a.offsetHeight));
  }));
  function Bn(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = Je.get(a);
      if (!r) {
        const s = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Ya), r.setConfig({ type: "custom:" + Ya, entity: s, pad: fn(s), tap_action: { action: "none" } }), Je.set(a, r);
      }
      r.hass = oi(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && ni.has(a) && (e.style.minHeight = ni.get(a) + "px"), Ui.observe(r), $i(r);
    });
  }
  function c() {
    const t = oi();
    Je.forEach((e, a) => {
      e.isConnected ? e.hass = t : Je.delete(a);
    });
  }
  customElements.whenDefined(Ya).then(() => {
    g && (S != null && S.querySelector("[data-tf]")) && Wd(Na);
  });
  const m = (t, e, a) => Wt.has(t + "|" + e) ? Wt.get(t + "|" + e) : a;
  function w(t) {
    var d, p;
    const e = k[t], a = e.attributes, r = t.split(".")[0], s = (u, h) => ({ act: Rt(u, "toggle", t), label: h });
    if (r === "light") {
      const u = e.state === "on", h = or(t), [x, C] = sr(t), M = m("bright", t, ro(e));
      u && Dn(t, ro(e));
      const N = m("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), B = m("hue", t, u && sn.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: s("light", "Turn " + vt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Do(t) && ur("bright", t, M / 100, vt(t) + " brightness", M + "%", !1, u ? null : co[t] ?? null),
        h.includes("color_temp") && ur("ct", t, N == null ? null : (N - x) / (C - x), vt(t) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        h.some((U) => sn.includes(U)) && ur("hue", t, B == null ? null : B / 360, vt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const u = a.target_temp_step || 0.5, h = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: s("climate", "Turn " + vt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ha("Target temperature", Fe(h) + " °C", Rt("climate", "set_temperature", t, { temperature: h - u }), Rt("climate", "set_temperature", t, { temperature: h + u })),
        ze("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: zt(x), act: Rt("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (r === "cover") {
      const u = e.state === "opening" || e.state === "closing", h = e.state === "closed", x = An(t), C = Ur(t);
      return { on: !h, tone: "blue", icon: Bu[yc(e)][h ? 1 : 0], button: s("cover", (h ? "Open " : "Close ") + vt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        be(t, Sc) && ei(t, x),
        C != null && zi(t, C),
        Ys(t, x, u)
      ] };
    }
    if (r === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: s("humidifier", "Turn " + vt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target humidity", u + "%", Rt("humidifier", "set_humidity", t, { humidity: u - 1 }), Rt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && ze("tfSeg", "Mode", a.available_modes.map((h) => ({ label: zt(h), act: Rt("humidifier", "set_mode", t, { mode: h }), pressed: a.mode === h })))
      ] };
    }
    if (r === "media_player") {
      const u = e.state === "playing", h = e.state === "off" || e.state === "standby", x = m("vol", t, a.volume_level), C = h ? { act: Rt("media_player", be(t, bg) ? "turn_on" : "toggle", t), label: "Turn " + vt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Rt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + vt(t) } : { act: Rt("media_player", be(t, wg) ? "turn_off" : "toggle", t), label: "Turn " + vt(t) + " off" };
      return { on: !h, tone: "blue", art: !h && a.entity_picture ? a.entity_picture : null, button: C, parts: ["playback", "volume"], sections: h ? [] : [
        (be(t, Cu) || be(t, Au) || be(t, _u) || be(t, Lu)) && ze("tfSeg", "Playback", [
          { html: _s.prev, aria: "Previous", act: Rt("media_player", "media_previous_track", t), disabled: !be(t, Cu) },
          { html: u ? _s.pause : _s.play, aria: u ? "Pause" : "Play", act: Rt("media_player", "media_play_pause", t), disabled: !(be(t, _u) || be(t, Lu)) },
          { html: _s.next, aria: "Next", act: Rt("media_player", "media_next_track", t), disabled: !be(t, Au) }
        ]),
        be(t, gg) && x != null && ur("vol", t, x, vt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const u = e.state === "cleaning", h = a.rooms || [], x = (M) => h.includes(M) ? h.filter((N) => N !== M) : h.concat(M), C = Rt("vacuum", u ? "pause" : "start", t, eo(t) ? { rooms: h } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: C, label: (u ? "Pause " : "Start ") + vt(t) }, parts: ["controls", "rooms"], sections: [
        ze("tfSeg", vt(t), [
          { label: u ? "Pause" : "Start", act: C },
          { label: "Dock", act: Rt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Rt("vacuum", "locate", t) }
        ]),
        eo(t) && ze("tfChips", "Rooms to clean", jt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Rt("vacuum", "set_rooms", t, { rooms: x(M.name) }), pressed: h.includes(M.name) })))
      ] };
    }
    if (r === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Rt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + vt(t) }, parts: ["controls"], sections: [
        ze("tfSeg", vt(t), [
          { label: "Lock", act: Rt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Rt("lock", "unlock", t), pressed: e.state === "unlocked" },
          be(t, Fu) && { label: "Open", act: Rt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Rt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + vt(t) + ", away" : "Disarm " + vt(t) }, parts: ["controls"], sections: [
        ze("tfSeg", vt(t), qu.filter(([, , , h]) => !h || be(t, h)).map(([h, x, C]) => ({ label: x, act: Rt("alarm_control_panel", C, t), pressed: e.state === h })))
      ] };
    }
    if (r === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: s("valve", (u ? "Close " : "Open ") + vt(t)), parts: ["controls"], sections: [
        ze("tfSeg", vt(t), [
          { label: "Open", act: Rt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Rt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (r === "water_heater") {
      const u = Number(a.temperature), h = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Rt("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + vt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target temperature", u + " °C", Rt("water_heater", "set_temperature", t, { temperature: u - h }), Rt("water_heater", "set_temperature", t, { temperature: u + h })),
        ((p = a.operation_list) == null ? void 0 : p.length) && ze("tfSeg", "Mode", a.operation_list.map((C) => ({ label: zt(C), act: Rt("water_heater", "set_operation_mode", t, { operation_mode: C }), pressed: (a.operation_mode || e.state) === C })))
      ] };
    }
    if (Ci.includes(r)) {
      const u = e.state === "on";
      return { on: u, button: s(r, "Turn " + vt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: vt(t) }, sections: [] };
  }
  const y = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function R(t) {
    var V;
    const e = (D) => t.readings.find((X) => Ut(X).device_class === D), a = e("temperature"), r = e("humidity"), s = (D) => {
      var X;
      return Number((X = k[D]) == null ? void 0 : X.state);
    }, d = (D) => t.actions.filter((X) => D.test(X)), p = t.lights.filter((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) === "on";
    }), u = d(/^cover\./), h = u.filter((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) !== "closed";
    }), x = [...new Set(u.map((D) => yc(k[D])))], C = d(/^climate\./)[0], M = d(/^humidifier\./)[0], N = d(/^media_player\./), B = N.find((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) === "playing";
    }) || N.find((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) === "paused";
    }), U = t.plugs.filter((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) === "on";
    }), P = [];
    if (a && Number.isFinite(s(a)) && P.push({ key: "temp", id: a, kind: "reading", icon: wo(a), label: "Temperature", value: Fe(s(a)) + "°" }), r && Number.isFinite(s(r)) && P.push({ key: "hum", id: r, kind: "reading", icon: wo(r), label: "Humidity", value: Math.round(s(r)) + "%" }), t.lights.length && P.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: wo("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? ir(p[0]) : "",
      acts: t.lights.map((D) => ["light", p.length ? "turn_off" : "turn_on", D]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const D = x.length === 1 ? yg[x[0]] : "covers", X = Math.round(u.reduce((A, j) => A + $a(j), 0) / u.length);
      P.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? io([146, 107, 199]) : "",
        icon: wo("", ((V = Bu[x[0]]) == null ? void 0 : V[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(D),
        value: X <= 0 ? "Closed" : X >= 100 ? "Open" : X + "% open",
        short: X <= 0 ? "Closed" : X + "%",
        on: h.length > 0,
        acts: u.map((A) => ["cover", h.length ? "close_cover" : "open_cover", A]),
        aria: (h.length ? "Close the " : "Open the ") + D + " in " + t.name
      });
    }
    if (C) {
      const D = Ut(C), X = k[C].state === "off";
      P.push({
        key: "climate",
        kind: "control",
        tone: D.hvac_action === "cooling" ? "cool" : "heat",
        light: Lo(C) ? io(Lo(C)) : "",
        icon: wo(C),
        label: vt(C),
        value: X ? "Off" : zt(D.hvac_action || k[C].state) + " · " + y(D.temperature),
        short: X ? "Off" : y(D.temperature),
        on: !X,
        acts: [["climate", "toggle", C]],
        aria: "Turn " + vt(C) + (X ? " on" : " off")
      });
    }
    if (M) {
      const D = k[M].state === "on";
      P.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: D ? io([33, 150, 243]) : "",
        icon: wo("", "mdi:air-humidifier"),
        label: vt(M),
        value: D ? "On · " + Ut(M).humidity + "%" : "Off",
        short: D ? Ut(M).humidity + "%" : "Off",
        on: D,
        acts: [["humidifier", "toggle", M]],
        aria: "Turn " + vt(M) + (D ? " off" : " on")
      });
    }
    if (N.length) {
      const D = B || N[0], X = k[D], A = X.state === "playing";
      P.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Lo(D) ? io(Lo(D)) : "",
        icon: wo(D),
        label: vt(D),
        value: Oe(D),
        short: A ? "Playing" : X.state === "paused" ? "Paused" : zt(X.state),
        on: A,
        acts: [["media_player", X.state === "playing" || X.state === "paused" ? "media_play_pause" : "toggle", D]],
        aria: (A ? "Pause " : "Play ") + vt(D)
      });
    }
    return t.plugs.length && P.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: U.length ? io([255, 193, 7]) : "",
      icon: wo("", "mdi:power-plug"),
      label: "Plugs",
      value: U.length ? U.length + " of " + t.plugs.length + " on" : "All off",
      short: U.length ? U.length + " on" : "Off",
      on: U.length > 0,
      acts: t.plugs.map((D) => ["switch", U.length ? "turn_off" : "turn_on", D]),
      aria: (U.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((D) => P.push(Ut(D).device_class === "moisture" ? { key: "alert:" + D, kind: "alert", icon: wo(D), label: "Water leak" } : { key: "note:" + D, kind: "note", icon: wo(D), label: vt(D) + " " + Oe(D).toLowerCase() })), P;
  }
  const q = (t, e) => {
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
          return ((d = k[s]) == null ? void 0 : d.state) === "playing";
        }) || r.find((s) => {
          var d;
          return ((d = k[s]) == null ? void 0 : d.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function Z(t, e, a = !1) {
    const r = e.find((u) => u.key === "lights"), s = !!(r != null && r.on), d = "", p = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (s ? " on" : "") + '"' + d + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (s ? " on" : "") + '" type="button"' + d + ' data-acts="' + pr(r.acts) + '" aria-label="' + W(r.aria) + '" aria-pressed="' + s + '">' + p + "</button>";
  }
  const J = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, $ = (t, e) => {
    const a = vt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function at(t) {
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(s)) {
      if (a.device_class === "temperature") return { text: y(s) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(s) + "%" } : { text: Fe(s, Number.isInteger(s) ? 0 : 1), unit: d };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: y(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Do(t) ? ro(e) + "%" : "On" };
    if (r === "cover") {
      const d = $a(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Oe(t) };
  }
  const it = (t, e, a) => {
    const r = a.find((u) => u.key === "temp"), s = a.find((u) => u.key === "hum"), d = Ut(e), p = k[e].state === "off";
    return e.startsWith("climate.") ? [$(t, e), p ? "Off" : zt(d.hvac_action || k[e].state) + (d.temperature != null ? " · " + y(d.temperature) : ""), s && s.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && $(t, e), r && r.id !== e && r.value, s && s.id !== e && s.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function bt(t) {
    const e = t.id === nt, a = R(t), r = J(t), s = r && at(r), d = [...a.filter((p) => p.kind === "control"), ...a.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + W(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + W(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ve(t, null, ' data-cols="2" data-rows="' + Pn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Z(t, a, !0) + '<span class="tfACName">' + W(t.name) + '</span></div><span class="tfACMain">' + (s ? W(s.text + (s.unit ? " " + s.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Bt = [];
  const Et = (t) => {
    const e = xt.areaOrder || [], a = (r) => {
      const s = e.indexOf(r.id);
      return s < 0 ? e.length + t.indexOf(r) : s;
    };
    return [...t].sort((r, s) => a(r) - a(s));
  }, _t = () => {
    var e;
    const t = new Set(((e = xt.dash) == null ? void 0 : e.areasOff) || []);
    return Et(Bt).filter((a) => !t.has(a.id));
  }, Gt = io([255, 162, 75]), Pt = (t) => {
    const e = t.id === nt;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + W(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + W(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, pt = (t) => {
    var r;
    const e = _t();
    e.some((s) => s.id === nt) || (nt = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((s) => s.id === nt);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(bt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? ve(a, null, ' data-cols="2" data-rows="' + Pn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Pt).join("") + "</div></div></div>";
  }, Ot = (t) => t.startsWith("room:"), qt = (t) => Bt.find((e) => "room:" + e.id === t);
  function ve(t, e, a = "") {
    const r = R(t), s = J(t), d = s && at(s), p = s ? it(t, s, r) : "", u = d ? d.text + (d.unit ? " " + d.unit : "") : "", h = (D) => {
      const X = q(t, D.key);
      return X.length === 1 ? X[0] : "group:" + t.id + ":" + D.key;
    }, x = r.filter((D) => D.kind === "control").slice(0, 4), C = (D) => D.on && D.light ? ' data-light style="' + D.light + '"' : "", M = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + C(D) + ' data-acts="' + pr(D.acts) + '" aria-label="' + W(D.aria) + '" aria-pressed="' + D.on + '">' + D.icon + "</button>", N = (D) => '<button class="tfIcon' + (D.on ? " on" : "") + '" type="button" data-tone="' + D.tone + '"' + C(D) + ' data-more="' + W(h(D)) + '" aria-label="' + W(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '">' + D.icon + "</button>", B = x.map(N), U = x.map((D) => '<div class="tfRoomDev' + (D.on ? " on" : "") + '" data-more="' + W(h(D)) + '">' + (D.acts ? M(D) : N(D)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + W(h(D)) + '" aria-label="' + W(t.name + " " + D.label.toLowerCase() + ", " + D.value + ". Open") + '"><span class="activityRowName">' + W(D.label) + '</span><span class="activityRowMeta">' + W(D.value) + "</span></button></div>"), P = '<span class="tfAreaGlyph"' + we("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", V = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '">' + P + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + W(e) + '"' : "") + a + ' data-go="' + W(t.id) + '"><div class="tfActionHead">' + V + '<button class="tfName" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '"><span class="activityRowName">' + W(t.name) + "</span>" + (u || p ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + W(u) + (p ? " · " : "") + "</span>" : "") + W(p) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + W(s) + '" aria-label="' + W(vt(s) + ", " + Oe(s) + ". More info") + '"><span class="tfRoomBig">' + W(u) + "</span>" + (p ? '<span class="tfRoomSub">' + W(p) + "</span>" : "") + "</button>" : "") + (B.length ? '<div class="tfRoomDevices">' + B.join("") + '</div><div class="tfRoomHeads">' + U.join("") + "</div>" : "") + "</div>";
  }
  const Tt = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], re = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (xt.favourites ?? Sn.favorite_entities ?? []).filter((t) => k[t]);
  function ka() {
    if (!er) {
      const e = Object.entries(_n).sort((r, s) => s[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      er = [.../* @__PURE__ */ new Set([...Bi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = $t();
    return er.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let po = !1;
  const ri = 6;
  function gr() {
    if (!po || xt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(k).find((r) => eo(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    xt = { ...xt, favourites: [.../* @__PURE__ */ new Set([...xt.favourites ?? Sn.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ri), favSeeded: !0 }, Ta();
  }
  const Ho = () => xt.suggest ?? !Sn.hide_suggested_entities;
  function ee() {
    const t = new Set(v ? [] : xt.favHidden || []), e = $t().filter((s) => !t.has(s)), a = Ho() ? ka().filter((s) => !t.has(s) && el(s)) : [], r = Math.max(ri, e.length);
    return [...e, ...a].slice(0, v && !is() ? r : Math.min(Dg, r));
  }
  const No = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + W(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + W(vt(t)) + '">' + Lg(e) + "</button>";
  };
  function uo(t, { area: e = !1, star: a = !1, plain: r = !1, say: s = null, alert: d = !1 } = {}) {
    var U, P, V, D, X, A;
    const p = r && ((X = (U = i()) == null ? void 0 : U.devices) == null ? void 0 : X[(D = (V = (P = i()) == null ? void 0 : P.entities) == null ? void 0 : V[t]) == null ? void 0 : D.device_id]), u = p && (p.name_by_user || p.name) || vt(t), h = t.split(".")[0], x = !r && Rr.includes(h) ? w(t) : null, C = x ? x.on : ["on", "open", "playing"].includes((A = k[t]) == null ? void 0 : A.state), M = r ? null : x ? x.button : Ci.includes(h) ? { act: Rt(h, "toggle", t), label: "Turn " + vt(t) + (C ? " off" : " on") } : h === "scene" || h === "script" ? { act: Rt(h, "turn_on", t), label: "Run " + vt(t) } : null, N = (s ?? Oe(t)) + (e && Se.get(t) ? " · " + Se.get(t) : ""), B = (x == null ? void 0 : x.icon) || Ea(t);
    return '<div class="activityRow' + (M ? " tfPlug" : "") + (C ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + W((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + To(t) + ">" + (M && !a ? '<button class="tfIcon" type="button" data-act="' + M.act + '" aria-label="' + W(M.label) + '"' + we(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + we(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(u + ", " + N + ". More info") + '"><span class="activityRowName">' + W(u) + '</span><span class="activityRowMeta">' + W(N) + "</span></button>" + (a ? No(t) : "") + "</div>";
  }
  const Oo = () => {
    var t;
    return k[(t = xt.sources) == null ? void 0 : t.weather] ? xt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function ii() {
    var a;
    const t = (r) => Object.keys(k).filter((s) => s.startsWith("binary_sensor.") && r.includes(Ut(s).device_class));
    return ((a = qr.alert_entities) != null && a.length ? qr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ls).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => k[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[r.entity].state) }));
  }
  function Yi() {
    const t = Object.keys(_i), e = /* @__PURE__ */ new Set(), a = [];
    (Sn.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const r = Qe().sumOrder || [], s = (d) => d.type === "summary" && r.includes(d.key) ? r.indexOf(d.key) : r.length;
    return r.length ? a.map((d, p) => [d, p]).sort((d, p) => s(d[0]) - s(p[0]) || d[1] - p[1]).map(([d]) => d) : a;
  }
  function br() {
    var V;
    const t = ((V = i()) == null ? void 0 : V.entities) || {}, e = (D) => Ut(D).device_class, a = Object.keys(k).filter((D) => D.startsWith("sensor.") && e(D) === "battery" || D.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(D))), r = jt.rooms.flatMap((D) => D.plants.map((X) => X.id));
    if (!a.length && !r.length) return null;
    const s = (D) => {
      var A;
      const X = (A = t[D]) == null ? void 0 : A.device_id;
      return !!X && Object.keys(k).some((j) => {
        var yt;
        return j.startsWith("binary_sensor.") && ((yt = t[j]) == null ? void 0 : yt.device_id) === X && e(j) === "battery_charging" && k[j].state === "on";
      });
    }, d = (D) => D.startsWith("vacuum.") ? Ut(D).battery_level <= 20 && k[D].state !== "docked" : D.startsWith("binary_sensor.") ? e(D) === "battery" && k[D].state === "on" : parseFloat(k[D].state) <= 20 && !s(D), p = [...a, ...jt.vacuums].filter((D) => k[D] && d(D)), u = [...a.filter((D) => e(D) === "problem" && k[D].state === "on"), ...r.filter((D) => {
      var X;
      return ((X = k[D]) == null ? void 0 : X.state) === "problem";
    })], h = a.filter((D) => k[D].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...p, ...u, ...h])], C = (D) => {
      const X = parseFloat(k[D].state);
      return e(D) === "battery" && Number.isFinite(X) ? X : 101;
    }, M = [...r, ...jt.vacuums, ...[...a].sort((D, X) => C(D) - C(X))].filter((D) => k[D] && !x.includes(D)), N = /* @__PURE__ */ new Map();
    M.forEach((D) => {
      var A;
      const X = ((A = jt.areaOf) == null ? void 0 : A.call(jt, D)) || "";
      N.set(X, [...N.get(X) || [], D]);
    });
    const B = (D) => {
      const X = jt.rooms.findIndex((A) => A.id === D);
      return D === "" ? 1 / 0 : X < 0 ? jt.rooms.length : X;
    }, U = [...N.keys()].sort((D, X) => B(D) - B(X)), P = (D) => {
      var X, A, j, yt;
      return ((X = jt.rooms.find((Dt) => Dt.id === D)) == null ? void 0 : X.name) || ((yt = (j = (A = i()) == null ? void 0 : A.areas) == null ? void 0 : j[D]) == null ? void 0 : yt.name) || D;
    };
    return {
      value: [p.length && re(p.length, "low battery", "low batteries"), u.length && re(u.length, "problem", "problems"), h.length && re(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...U.map((D) => ({ name: D ? P(D) : U.length > 1 ? "Other devices" : "Devices", ids: N.get(D) }))].filter((D) => D.ids.length)
    };
  }
  const Qe = () => v ? xt.home || {} : xt, Zs = (t) => Pu.includes(t) ? (Qe().shownSums || []).includes(t) : !(Qe().hiddenSums || []).includes(t);
  function Ef(t, e, a) {
    const r = t.flatMap((N) => a(N, /^cover\./)), s = r.filter((N) => {
      var B;
      return ["open", "opening"].includes((B = k[N]) == null ? void 0 : B.state);
    }).length, d = Object.keys(k).filter((N) => N.startsWith("person.")), p = d.filter((N) => {
      var B;
      return ((B = k[N]) == null ? void 0 : B.state) === "home";
    }).length, u = jt.security.openings.filter((N) => k[N]), h = u.filter((N) => k[N].state === "on").length, x = Object.keys(k).filter((N) => N.startsWith("binary_sensor.") && Ut(N).device_class === "moisture"), C = x.filter((N) => k[N].state === "on").length, M = jt.vacuums.filter((N) => k[N]);
    return {
      covers: r.length && { value: s ? s + " open" : "All closed", groups: e((N) => a(N, /^cover\./)) },
      people: d.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: u.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: x.length && { value: C ? re(C, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: M.length && { value: zt(k[M[0]].state), groups: [{ name: "Vacuum", ids: M }] }
    };
  }
  function Zi(t = !1) {
    var At;
    const e = jt.rooms, a = jt.security, r = (ut, Lt) => ut.actions.filter((Qt) => Lt.test(Qt)), s = (ut) => e.map((Lt) => ({ name: Lt.name, ids: ut(Lt) })).filter((Lt) => Lt.ids.length), d = e.flatMap((ut) => ut.lights), p = d.filter((ut) => {
      var Lt;
      return ((Lt = k[ut]) == null ? void 0 : Lt.state) === "on";
    }).length, u = e.map((ut) => ut.readings.find((Lt) => Ut(Lt).device_class === "temperature")).filter(Boolean).map((ut) => Number(k[ut].state)).filter(Number.isFinite), [h, x] = [Fe(Math.min(...u)), Fe(Math.max(...u))], C = e.flatMap((ut) => r(ut, /^media_player\./)), M = C.filter((ut) => {
      var Lt;
      return ((Lt = k[ut]) == null ? void 0 : Lt.state) === "playing";
    }).length, N = ii(), B = N.filter((ut) => ut.severity === "warning" && ut.on).length, U = a.locks.filter((ut) => {
      var Lt;
      return ["unlocked", "jammed", "open"].includes((Lt = k[ut]) == null ? void 0 : Lt.state);
    }).length, P = a.alarms.filter((ut) => {
      var Lt;
      return ((Lt = k[ut]) == null ? void 0 : Lt.state) === "disarmed";
    }).length, V = B ? re(B, "warning", "warnings") : null, D = U ? U + " unlocked" : P ? P + " disarmed" : V ? null : "All secure", X = br(), A = e.flatMap((ut) => ut.solar), j = A.find((ut) => ut.endsWith("_power")), yt = {
      light: d.length && { value: p ? p + " on" : "All off", groups: s((ut) => ut.lights) },
      climate: u.length && { value: h === x ? h + "°" : h + " - " + x + "°", groups: s((ut) => [...ut.readings.filter((Lt) => ["temperature", "humidity"].includes(Ut(Lt).device_class)), ...r(ut, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [V, D].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((ut) => ut.ids.length) },
      media_players: C.length && { value: M ? M + " playing" : "No media playing", groups: s((ut) => r(ut, /^media_player\./)) },
      maintenance: X,
      energy: jt.grid && { value: Eo(Number(((At = k[j]) == null ? void 0 : At.state) || 0) * 1e3 + Number(k[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...A, jt.grid] }] },
      ...Ef(e, s, r)
    }, Dt = [], Ht = N.filter((ut) => ut.severity !== "warning" && ut.on);
    return Ht.length && Dt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: re(Ht.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Ht.map((ut) => ut.entity) }] }), Yi().forEach((ut) => {
      ut.type !== "summary" ? Dt.push({ key: "path:" + ut.path, name: ut.label || ut.path, icon: ut.icon || "mdi:link-variant", colour: "", value: "" }) : !ut.hidden && yt[ut.key] && (t || Zs(ut.key)) && Dt.push({ key: ut.key, ..._i[ut.key], ...yt[ut.key] });
    }), Dt;
  }
  const Bf = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + W(t.key) + '" data-k="sum:' + W(t.key) + '" aria-label="' + W(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + qi() + '"' : t.colour && Ga(t.colour) ? ' style="' + Ga(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Gs : "") + '<div class="tfIcon" aria-hidden="true"' + we(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + W(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + W(t.value) + "</div>" : "") + "</div></div>";
  function Fc(t) {
    const e = $t();
    xt = { ...xt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (xt.favHidden || []).filter((a) => a !== t) }, Ta(), Ee();
  }
  function qc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Vc(t, e) {
    if (t.startsWith("path:")) {
      qc(t.slice(5));
      return;
    }
    ds("summary:" + t, e);
  }
  async function Pf() {
    const t = (p) => Promise.resolve().then(() => K(p)).catch(() => null), [e, a, r, s] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Ru }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    xt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded, favsTitle: d.favsTitle, areaOrder: d.areaOrder }, Sn = (a == null ? void 0 : a.value) || {}, qr = (r == null ? void 0 : r.value) || {}, Bi = Array.isArray(s == null ? void 0 : s.entities) ? s.entities : [], er = null, Object.keys(k).length && Ee(), Rf(), po = !0, gr();
  }
  const Wc = "HomeCore";
  async function Rf() {
    var r, s, d;
    const t = location.pathname.split("/")[1], e = xt.named || [];
    if (!((s = (r = i()) == null ? void 0 : r.user) != null && s.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      xt = { ...xt, named: [...e, t] }, Ta();
    };
    try {
      const p = (d = await K({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((x) => x.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === Wc) {
        a();
        return;
      }
      const u = await K({ type: "lovelace/config", url_path: t }), h = ((u == null ? void 0 : u.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((C) => C.cards || [])]);
      if (!h.length || !h.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
      await K({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Wc }), a();
    } catch {
    }
  }
  let si = null, Ks = 0, Xs = !1;
  const jc = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return Tg.includes(e) && (e !== "binary_sensor" || Ls.includes(a) || !!Wu[a]);
  }, Js = (t) => t.startsWith("binary_sensor.") ? Wu[Ut(t).device_class] : null;
  async function Hf() {
    var t;
    if (!(Xs || Date.now() - Ks < 30 * 1e3)) {
      Xs = !0, Ks = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(jc), a = e.length ? await K({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        si = Array.isArray(a) ? a.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        si = null;
      }
      Xs = !1, Ee();
    }
  }
  function Nf() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (s) => {
      if (!k[s.entity_id] || !jc(s.entity_id) || !el(s.entity_id) || ["unavailable", "unknown"].includes(s.state)) return;
      if (Js(s.entity_id)) {
        const p = e.get(s.entity_id);
        s.state === "on" ? (!p || s.when > p.when + 1) && e.set(s.entity_id, { ...s, alarm: !0, cleared: null }) : p && !p.cleared && s.when > p.when && (p.cleared = s.when);
        return;
      }
      const d = t.get(s.entity_id);
      (!d || s.when > d.when + 1) && t.set(s.entity_id, s);
    };
    [...si || []].sort((s, d) => s.when - d.when).forEach(a);
    const r = si ? Ks / 1e3 - 5 : 0;
    return Object.keys(k).forEach((s) => {
      var u;
      const d = k[s], p = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      p > r && a({ entity_id: s, state: d.state, when: p, context_user_id: (u = d.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((s, d) => d.when - s.when).slice(0, Eg);
  }
  function Of(t) {
    var r;
    const e = t.context_user_id && Object.keys(k).find((s) => s.startsWith("person.") && Ut(s).user_id === t.context_user_id);
    if (e) return vt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function If(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Vu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function Ff(t) {
    const e = t.entity_id, a = t.alarm && Js(e), r = vt(e) + " " + (a ? a[0] : If(t)), s = a ? so(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + so(t.cleared * 1e3) : "") : [Of(t), so(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + we(e, Ea(e)) + '></div><button class="tfName" type="button" data-more="' + W(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + W(r + ", " + s + ". More info") + '"><span class="activityRowName">' + W(r) + '</span><span class="activityRowMeta">' + W(s) + "</span></button></div>";
  }
  let Ka = null, zc = 0;
  const qf = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Gc() {
    var e;
    if (Date.now() - zc < 5 * 60 * 1e3) return;
    zc = Date.now();
    const t = [];
    try {
      const a = ((e = await K({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (s) => a.filter((d) => d.type === s).flatMap((d) => s === "grid" ? (d.flow_from || []).map((p) => p.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [s, d, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const u = await Promise.all(p.map((h) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: s, name: d, id: p[0], ids: p, value: u.reduce((h, x) => h + x, 0), unit: Ut(p[0]).unit_of_measurement || (s === "gas" || s === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ka = t, Ee();
  }
  let wr = null, $c = [];
  function Qs() {
    var d;
    const t = $c = Ka != null && Ka.length ? Ka : qf.map(([p, u, h, x]) => {
      if (p === "solar") {
        const M = Object.keys(k).find((N) => N.endsWith("_solar_today") && !N.includes("made_up_energy"));
        M && Number.isFinite(Number(k[M].state)) && (h = Number(k[M].state));
      }
      const C = "sensor.made_up_energy_" + p;
      return k[C] = { entity_id: C, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: p, name: u, id: C, value: h, unit: x };
    });
    Ct.clear(), t.some((p) => p.id === wr) || (wr = t[0].id);
    const e = t.map((p) => {
      const u = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, h = Bg[p.key], x = p.id === wr;
      return Ct.set(p.id, { name: p.name, text: u, icon: h }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + W(p.id) + '" aria-pressed="' + x + '" aria-label="' + W(p.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + we("", h, p.name) + '></div><div><div class="activityRowName">' + W(p.name) + '</div><div class="activityRowMeta">' + W(u) + "</div></div></div>";
    }), a = t.find((p) => p.id === wr), r = (((d = ce().opts.energy) == null ? void 0 : d.graph) || "above") === "below", s = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + W(a.id) + '" role="img" aria-label="' + W(a.name) + ', last 24 hours"></svg></div>';
    return dn("dash:energy", 0, "Energy today", e, s, Zi().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Uc(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === wr || (wr = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const s = r.dataset.energyPick === t;
      r.classList.toggle("picked", s), r.setAttribute("aria-pressed", String(s));
    }), a.dataset.graph = t, a.dataset.drawn = "", ya.set("dash:energy", Qs()), Hd(!0));
  }
  const Yc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Zc = /* @__PURE__ */ new Map();
  async function Vf(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), s = e.getMinutes() / 60, d = Array.from({ length: 24 }, (u, h) => h <= r ? 0 : null);
    if (!t.ids) {
      const u = Yc[t.key] || Yc.electricity, h = u.map((C, M) => M < r ? C : M === r ? C * s : 0), x = h.reduce((C, M) => C + M, 0) || 1;
      return d.map((C, M) => C == null ? null : t.value * h[M] / x);
    }
    const p = Zc.get(t.id);
    if (p && p.day === a && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const u = await K({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((C) => ((u == null ? void 0 : u[C]) || []).forEach((M) => {
        const N = typeof M.start == "number" ? M.start : Date.parse(M.start), B = new Date(N).getHours();
        N >= a && B < r && (d[B] += Number(M.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((C) => Promise.resolve(K({ type: "recorder/statistic_during_period", statistic_id: C, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
      d[r] = x.reduce((C, M) => C + M, 0);
    } catch {
    }
    return Zc.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function Wf(t, e) {
    const a = await Vf(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), s = Math.max(60, t.clientHeight || 130), d = 18, p = s - 18, u = r / 24, h = u * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), C = a.map((V) => V ?? 0), M = Math.max(0, ...C), N = (V) => p - (M > 0 ? V / M * (p - d) : 0), B = (V) => V.toLocaleString(void 0, { maximumFractionDigits: V < 10 ? 2 : 1 }) + " " + e.unit, U = (V) => String(V).padStart(2, "0") + ":00", P = M > 0 ? C.indexOf(M) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + s), t.setAttribute("aria-label", e.name + " today by the hour: " + B(e.value) + (P >= 0 ? ", most " + B(M) + " at " + U(P) : "")), t.innerHTML = [d, (d + p) / 2, p].map((V) => '<line x1="0" x2="' + r + '" y1="' + V + '" y2="' + V + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((V, D) => V > 0 ? '<rect x="' + (D * u + (u - h) / 2).toFixed(1) + '" y="' + N(V).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (p - N(V)).toFixed(1) + '" rx="2" fill="' + (D === x ? "var(--primary)" : "var(--text)") + '"' + (D === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((V) => '<text x="' + (V * u).toFixed(1) + '" y="' + (s - 3) + '">' + String(V).padStart(2, "0") + "</text>").join("") + (P >= 0 ? '<text x="0" y="11">Most: ' + W(B(M)) + " at " + U(P) + "</text>" : "");
  }
  function jf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, r) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Kc(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    cf(t, a, [e].filter(Boolean));
  }
  let Ki = null, tl = 0;
  const el = (t) => !t.startsWith("light.") || Pg.includes((Se.get(t) || "").toLowerCase()), al = () => Math.max(2, mn((S == null ? void 0 : S.clientWidth) || 0).n), Xc = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, zf = (t) => Xc(t).slice(0, Pn(t) - 1);
  function Jc(t) {
    const e = ce().tiles;
    if (e) return e.filter((r) => k[r] || qt(r));
    if (!Ki) {
      const r = (s) => {
        var d;
        return (((d = k[s]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (_n[s] || 0);
      };
      Ki = {
        lights: jt.rooms.flatMap((s) => s.lights).filter((s) => {
          var d;
          return el(s) && ((d = k[s]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((s, d) => r(d) - r(s) || vt(s).localeCompare(vt(d))),
        climates: jt.rooms.flatMap((s) => s.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = Ki.climates.filter((r) => k[r]).slice(0, t > 3 ? 2 : 1);
    return [...Ki.lights.filter((r) => k[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const ol = () => {
    var t;
    return ((t = xt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Gf = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((r) => {
      var s;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((s = r.attributes) == null ? void 0 : s.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, $f = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Gf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Qc = (t, e, a, r) => (s) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + s + "</div></section>";
  function Uf(t, e) {
    var d, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? ol() : ce().welcome) ? '<span class="tfGreeting">' + W($f()) + "</span>" : "") + W(((p = (d = i()) == null ? void 0 : d.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Qc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Bf(u) })) }), !v && _t().length && t.push({ key: "areas", html: pt(0) });
    const a = ee();
    if (a.length && t.push({ key: "favs", wrap: Qc("tfDash-favs", "favs", "Favourites", Ji()), tiles: a.map((u) => ({ key: "fav:" + u, html: uo(u, { area: !0 }) })) }), v)
      return Gc(), fd() && t.push({ key: "dash:energy", html: Qs() }), tl = al(), Jc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
        tiles: [{ key: u, html: ve(qt(u), u) }]
      })), t;
    const r = Nf();
    t.push({ key: "dash:act", html: dn("dash:act", 0, "Activity", r.length ? r.map(Ff) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Qs() });
    const s = al();
    return tl = s, Jc(s >= 3 ? s : s * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
      tiles: [{ key: u, html: Ot(u) ? ve(qt(u), u) : pn(u, !1, zf(u)) }]
    })), Hf(), Gc(), t;
  }
  const li = 252, ue = 16, Yf = 200, Zf = Math.round(li * 1.25), Kf = 60, Ba = Kf + ue, Xf = 3, td = {
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
  }, Jf = ["wx", "favs", "act", "energy", "avg"], ed = ["XS", "S", "M", "L", "XL"], ad = ed.length, Qf = ["Narrow", "Wide", "Really wide"], th = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, od = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && En(t) ? ad : Math.min(ad, Xc(t).length + 1), Pn = (t) => {
    const e = ce().opts[t] || {}, a = od(t), r = Number(e.h) || (e.tall ? 5 : th[t] || nd);
    return Math.max(1, Math.min(a, r));
  }, nd = 2, eh = 90, rd = 60, Pa = (t) => {
    var e;
    return td[t] || (t.startsWith("room:") ? ((e = Bt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : vt(t));
  }, ah = 128;
  let ma = !1, ae = null, ia = null, nl = !1, Rn = /* @__PURE__ */ new Map(), Xi = 0, hn = 0;
  const Io = ["title", "sums"], mn = (t) => {
    const e = Math.max(1, Math.floor((t + ue) / (Yf + ue)));
    return { n: e, w: Math.max(1, Math.min(Zf, Math.floor((t - (e - 1) * ue) / e))) };
  }, rl = () => Et(Bt), oh = () => {
    var e;
    const t = new Set(((e = xt.home) == null ? void 0 : e.areasOff) || []);
    return rl().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function nh() {
    const t = oh();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(td).filter((e) => {
        var a, r;
        return !["title", ...((a = xt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((r = xt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...ch() ? ["wx"] : [], ...fd() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: rn,
      areasOff: []
    };
  }
  const ce = () => v ? nh() : il(), il = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...xt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = rn.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Hn(t) {
    v || (xt = { ...xt, dash: { ...t, known: rn } }, Ta());
  }
  function Nn() {
    const t = (e) => S.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", no.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", no.avg, 2],
      ...rn.map((e) => [e, no[e], qs[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, s = !1]) => ({ key: e, el: a, span: r, tile: s }));
  }
  const id = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const s = 2 * a + ue;
      t.el.style.setProperty("--area-open", s + "px");
      const d = Math.ceil((s + Math.max(0, _t().length - 1) * (ah + ue) + ue) / (a + ue));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((r = ce().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, ce().spans[t.key] ?? t.span);
  }, sd = (t) => Pn(t.key), ld = window.matchMedia("(max-width: 620px)"), rh = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(_t().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + ue) / Ba));
  };
  function cd(t, e, a = null) {
    const r = ce().cells, s = t.every((u) => !r[u.key] || r[u.key].col + u.cols <= e), d = (u) => r[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), x = (P, V, D, X) => {
        for (let A = V; A < V + X; A++) for (let j = P; j < P + D; j++) if (u.has(j + "," + A)) return !1;
        return !0;
      }, C = (P, V, D) => {
        for (let X = D; X < D + P.rows; X++) for (let A = V; A < V + P.cols; A++) u.add(A + "," + X);
        h.set(P.key, { col: V, row: D, cols: P.cols, rows: P.rows });
      }, M = (P, V, D) => {
        for (V = Math.max(0, Math.min(e - P.cols, V)), D = Math.max(0, D); !x(V, D, P.cols, P.rows); ) D++;
        C(P, V, D);
      }, N = (P) => {
        for (let V = 0; ; V++) for (let D = 0; D <= e - P.cols; D++) if (x(D, V, P.cols, P.rows)) {
          C(P, D, V);
          return;
        }
      };
      a && M(a, ae.col, ae.row);
      const B = t.filter((P) => P !== a), U = (P, V) => d(P).row - d(V).row || d(P).col - d(V).col;
      return s ? (B.filter((P) => r[P.key]).sort(U).forEach((P) => M(P, r[P.key].col, r[P.key].row)), B.filter((P) => !r[P.key]).forEach(N), h) : ([...B].sort(U).forEach(N), h);
    })();
  }
  function ih(t, e) {
    const a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = (d, p, u) => {
      for (let h = p; h < p + u.rows; h++) for (let x = d; x < d + u.cols; x++) if (a.has(x + "," + h)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let p = 0; ; p++) {
        let u = 0;
        for (; u <= e - d.cols && !s(u, p, d); ) u++;
        if (!(u > e - d.cols)) {
          for (let h = p; h < p + d.rows; h++) for (let x = u; x < u + d.cols; x++) a.add(x + "," + h);
          r.set(d.key, { col: u, row: p, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), r;
  }
  function sl() {
    const t = ce(), e = new Set(t.hidden), a = Nn().filter((p) => !Io.includes(p.key));
    let r = Rn;
    if (!r.size) {
      const p = t.pegs || 4, u = a.filter((h) => !e.has(h.key));
      u.forEach((h) => {
        h.cols = id(h, p, li), h.rows = sd(h) ?? nd;
      }), r = cd(u, p);
    }
    const s = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    a.sort((p, u) => s(p).row - s(u).row || s(p).col - s(u).col);
    const d = (t.phone || []).map((p) => a.find((u) => u.key === p && !e.has(p))).filter(Boolean);
    return [...d, ...a.filter((p) => !d.includes(p))];
  }
  const sh = () => {
    const t = sl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), ll([...Nn().filter((e) => Io.includes(e.key)), ...t].map((e) => e.el));
  };
  function ll(t) {
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
  const vr = (t, e) => Hn({ ...t, cells: e, pegs: mn(S.clientWidth).n });
  function cl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), s = a.getBoundingClientRect(), d = s.right > r.right ? s.right - r.right : s.left < r.left ? s.left - r.left : 0;
    d && e.scrollBy({ left: d, behavior: t ? "smooth" : "auto" });
  }
  function $e() {
    var X;
    if (requestAnimationFrame(() => cl(!1)), setTimeout(() => cl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * li + ue, a = f.classList.contains("tfDash");
    v && (ma = !1), f.classList.toggle("tfOverview", v);
    const { n: r, w: s } = e ? { n: 2, w: Math.floor((t - ue) / 2) } : mn(t);
    Da.classList.add("tfPegs"), Da.style.setProperty("--peg-n", r), Da.style.setProperty("--peg-w", s + "px");
    const d = new Set(ce().hidden);
    rn.forEach((A) => {
      var j;
      return (j = no[A]) == null ? void 0 : j.classList.toggle("tfNotAdded", d.has(A) && !(ae != null && ae.fromTray && ae.key === A));
    }), Oi(), f.classList.toggle("tfBoard", a), f.classList.toggle("tfEditing", a && ma && !e);
    const p = l("dashEditNav");
    !a && zo && Tl(!1), p && v ? (p.hidden = !a, zo || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = As)) : p && (p.hidden = !a || e, p.classList.toggle("active", ma), p.setAttribute("aria-pressed", String(ma)), p.setAttribute("aria-label", ma ? "Done editing" : "Edit custom dashboard"), p.title = ma ? "Done" : "Edit", p.innerHTML = ma ? Iu : As);
    const u = a ? Nn() : [];
    if ((!a || !v) && S.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((A) => A.remove()), !a) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((A) => {
        A.classList.remove("tfBoardItem", "tfBoardHidden"), A.style.left = A.style.top = A.style.width = A.style.height = "";
      }), (X = S.querySelector(".tfDash-act > .activityRows")) == null || X.style.removeProperty("max-height"), fl(!1), f.classList.contains("tfDash") && sh(), De();
      return;
    }
    if (v) {
      uh(u, t, e);
      return;
    }
    S.style.setProperty("--peg-w", s + "px");
    const h = new Set(ce().hidden), x = s + ue;
    ae != null && ae.fromTray && h.delete(ae.key), u.forEach((A) => A.el.classList.toggle("tfBoardHidden", h.has(A.key)));
    const C = u.filter((A) => !h.has(A.key) && getComputedStyle(A.el).display !== "none");
    let M = 0;
    C.filter((A) => Io.includes(A.key)).forEach((A) => {
      A.el.classList.add("tfBoardItem"), Object.assign(A.el.style, { width: t + "px", height: "", left: "0px", top: M + "px" });
      const j = A.key === "sums" && A.el.querySelector(".tfDash-bar"), yt = j ? j.querySelectorAll(".activityRow").length : 0;
      j && (j.style.maxWidth = "none");
      for (let Dt = 1; j && Dt <= yt && (j.style.setProperty("--bar-cols", String(Math.ceil(yt / Dt))), !(j.offsetWidth <= t)); Dt++)
        ;
      j && (j.style.maxWidth = ""), M += A.el.offsetHeight + ue;
    }), hn = M;
    const N = C.filter((A) => !Io.includes(A.key));
    N.forEach((A) => {
      A.cols = id(A, r, s), A.el.classList.add("tfBoardItem"), A.el.style.width = (A.cols === r ? t : A.cols * s + (A.cols - 1) * ue) + "px", A.el.style.height = "", A.rows = sd(A) ?? Math.max(1, Math.ceil((A.el.offsetHeight + ue - 6) / Ba)), A.key === "areas" && ld.matches && (A.rows = rh(parseFloat(A.el.style.width)));
    });
    const B = ae && N.find((A) => A.key === ae.key), U = e && sl().map((A) => A.key), P = (A) => U.includes(A.key) ? U.indexOf(A.key) : -1, V = e ? ih([...N].sort((A, j) => P(A) - P(j)), r) : cd(N, r, B);
    V.forEach((A) => Object.assign(A, { x: A.cols === r ? 0 : A.col * x, y: hn + A.row * Ba, w: A.cols === r ? t : A.cols * s + (A.cols - 1) * ue, h: A.rows * Ba - ue })), N.forEach((A) => {
      const j = V.get(A.key);
      A.el.style.height = j.h + "px", A.el.dataset.rows = e && A.key === "wx" ? 5 : Pn(A.key), A.key === "areas" && A.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((yt) => {
        yt.dataset.rows = A.el.dataset.rows;
      }), A.el.toggleAttribute("data-narrow", !e && j.cols === 1 && r > 1), A.el.dataset.cols = j.cols, A.el.classList.contains("tfDac") && A.el.style.setProperty("--tf-dac-pad", j.h - eh + "px"), !(A === B && !ae.fromTray) && (A.el.style.left = j.x + "px", A.el.style.top = j.y + "px");
    }), e || (Rn = V), ll([...C.filter((A) => Io.includes(A.key)), ...N.slice().sort((A, j) => V.get(A.key).row - V.get(j.key).row || V.get(A.key).col - V.get(j.key).col)].map((A) => A.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([A, j]) => {
      const yt = V.get(A), Dt = yt && S.querySelector(j), Ht = Dt == null ? void 0 : Dt.querySelector(":scope > .activityRows"), At = Dt == null ? void 0 : Dt.querySelector(":scope > .activityHeader");
      if (!Ht || !At) return;
      const ut = Ht.getBoundingClientRect().top - Dt.getBoundingClientRect().top, Lt = yt.rows === 1 ? yt.h : Math.floor(yt.h - ut - parseFloat(getComputedStyle(Dt).paddingBottom)), Qt = Math.max(1, Math.floor(Lt / rd));
      Ht.style.setProperty("--fill-gap", (Qt > 1 ? (Lt - Qt * rd) / (Qt - 1) : 0).toFixed(2) + "px"), Ht.style.maxHeight = Lt + "px";
    }), Xi = Math.max(0, ...[...V.values()].map((A) => A.row + A.rows));
    let D = hn + Xi * Ba - ue;
    D = fl(ma && !e, N, V, D, r, s), S.style.height = D + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), u.forEach((A) => ul.observe(A.el)), Hd(), De();
  }
  const Fo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, dd = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, pd = () => {
    var t;
    return dd[(t = xt.home) == null ? void 0 : t.areaSize] ? xt.home.areaSize : "s";
  }, dl = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = xt.home) == null ? void 0 : t.areaLayout) ? xt.home.areaLayout : "bento";
  }, ud = () => {
    var t;
    return ((t = xt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, lh = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ji = () => v ? qo("favsTitle") : xt.favsTitle !== !1, ch = () => {
    var t;
    return !!((t = xt.home) != null && t.weather && Oo());
  }, fd = () => {
    var t;
    return !!((t = xt.home) != null && t.energy && (Ka != null && Ka.length));
  }, qo = (t) => {
    var e;
    return ((e = xt.home) == null ? void 0 : e[t]) ?? lh[t];
  };
  function dh() {
    var s;
    const t = Object.values(((s = i()) == null ? void 0 : s.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: Bt.filter((p) => p.floor === d.floor_id) })), r = Bt.filter((d) => !e.has(d.floor));
    return r.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: r }), a;
  }
  const hd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let Ce = null, md = [], ci = /* @__PURE__ */ new Map();
  function pl(t) {
    let e = S.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), S.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function ph(t) {
    if (!v || !zo || t.button !== 0 || S.clientWidth < 2 * li + ue) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Nn().find((u) => u.el === e);
    if (!a || Io.includes(a.key) || Ot(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), s = ci.get(a.key);
    Ce = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: s.x, top: s.y, order: [...md] };
    const d = (u) => {
      const h = u.clientX - Ce.x0, x = u.clientY - Ce.y0;
      if (!Ce.on && Math.hypot(h, x) < 5) return;
      Ce.on || (Ce.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Ce.left + h + "px", top: Ce.top + x + "px" });
      const C = u.clientX - r.left, M = u.clientY - r.top + S.scrollTop;
      let N = null, B = 1 / 0;
      if (ci.forEach((D, X) => {
        if (X === a.key || !Ce.order.includes(X)) return;
        const A = Math.hypot(C - (D.x + D.w / 2), M - (D.y + D.h / 2));
        A < B && (B = A, N = { key: X, b: D });
      }), !N) return;
      const U = Ce.order.filter((D) => D !== a.key), P = U.indexOf(N.key) + (C > N.b.x + N.b.w / 2 ? 1 : 0), V = [...U.slice(0, P), a.key, ...U.slice(P)];
      V.join() !== Ce.order.join() ? (Ce.order = V, $e()) : pl(ci.get(a.key));
    }, p = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const u = Ce;
      Ce = null, e.classList.remove("tfDragging"), u.on && Sa({ order: u.order }), $e(), u.on && !We() && setTimeout(() => fc(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function uh(t, e, a) {
    var xp;
    const r = new Set(ce().hidden);
    t.forEach((ft) => ft.el.classList.toggle("tfBoardHidden", r.has(ft.key)));
    const s = t.filter((ft) => !r.has(ft.key) && getComputedStyle(ft.el).display !== "none"), d = ue, p = a ? { w: Math.floor((e - d) / 2) } : mn(e), u = Math.min(e, Fo.full);
    let h = 0;
    const x = is();
    f.classList.toggle("hcSumsFit", Sd()), f.classList.toggle("hcFavStrip", x);
    const C = s.filter((ft) => Io.includes(ft.key) || x && ft.key === "favs");
    C.sort((ft, It) => ["title", "sums", "favs"].indexOf(ft.key) - ["title", "sums", "favs"].indexOf(It.key)), C.forEach((ft) => {
      ft.el.classList.add("tfBoardItem"), ft.el.toggleAttribute("data-narrow", !1), Object.assign(ft.el.style, { width: (ft.key === "title" ? e : u) + "px", height: "", left: "0px", top: h + "px" });
      const It = ft.key !== "title" && (ft.el.querySelector(".tfDash-bar>.activityRows") || ft.key === "favs" && ft.el.querySelector(":scope>.activityRows")), Be = It ? It.children.length : 0;
      if (It && (It.classList.remove("hcBarRows"), !a && It.scrollWidth > It.clientWidth + 1))
        for (let Zt = 2; Zt <= Be && (It.classList.add("hcBarRows"), It.style.setProperty("--bar-cols", String(Math.ceil(Be / Zt))), !(It.scrollWidth <= It.clientWidth + 1)); Zt++)
          ;
      h += ft.el.offsetHeight + (ft.key === "title" ? Fo.nameGap : Fo.sumsGap);
    });
    const M = ["favs", "wx", "energy"], N = (Ce == null ? void 0 : Ce.order) || ((xp = xt.home) == null ? void 0 : xp.order), B = N ? [...N.filter((ft) => M.includes(ft)), ...M.filter((ft) => !N.includes(ft))] : M;
    md = B;
    const U = s.filter((ft) => M.includes(ft.key) && !(x && ft.key === "favs")).sort((ft, It) => B.indexOf(ft.key) - B.indexOf(It.key));
    ci = /* @__PURE__ */ new Map();
    const P = (ft, It) => {
      if (ci.set(ft.key, It), Object.assign(ft.el.style, { width: It.w + "px", height: It.h + "px" }), Ce != null && Ce.on && Ce.key === ft.key) {
        pl(It);
        return;
      }
      Object.assign(ft.el.style, { left: It.x + "px", top: It.y + "px" });
    }, V = a ? e : 2 * p.w + d, D = Fo.row, X = ud() === "stacked" && !a && U.length > 0;
    let A = 0, j = 0, yt = h;
    U.forEach((ft) => {
      ft.el.classList.add("tfBoardItem"), ft.el.dataset.rows = 5, ft.el.dataset.cols = 2, ft.el.toggleAttribute("data-narrow", !1), !X && A && A + V > e && (h += j + d, A = 0, j = 0);
      let It = D;
      if ((a || ft.key === "favs") && (Object.assign(ft.el.style, { width: V + "px", height: "" }), It = ft.el.offsetHeight), X) {
        P(ft, { x: 0, y: yt, w: V, h: It }), yt += It + d;
        return;
      }
      P(ft, { x: A, y: h, w: V, h: It }), A += V + d, j = Math.max(j, It);
    }), U.length && !X && (h += j + d);
    const Dt = X ? V + d : 0, Ht = X ? e - V - d : e, At = a ? "l" : pd(), ut = dd[At], Lt = dl(), Qt = qo("byFloor"), me = p.w, fe = ut.h, ye = a ? 2 : Math.max(1, Math.floor((Ht + d) / (me + d))), Ia = new Map(s.filter((ft) => Ot(ft.key)).map((ft) => [ft.key, ft])), Fa = (Qt ? dh() : [{ id: "", name: "", icon: "", rooms: Bt }]).map((ft) => ({ ...ft, cards: ft.rooms.map((It) => Ia.get("room:" + It.id)).filter(Boolean) })).filter((ft) => ft.cards.length), hs = Lt === "bento", ms = hs && qo("bentoMixed"), xm = hs && Qt && qo("bentoBoxes"), km = Lt === "columns" && Qt && !a, Uo = 12, vp = (ft) => ft.name ? Fo.floorHead + Fo.floorGap : 0, yi = (ft, It, Be) => {
      const Zt = /* @__PURE__ */ new Set(), de = [];
      ft.cards.forEach((Jt, bo) => {
        const bn = ms && bo === 0 && It >= 2 && ft.cards.length > 1, Ye = bn ? 2 : 1, Yo = bn && !a ? 2 : 1;
        Jt.el.classList.add("tfBoardItem"), Jt.el.dataset.cols = Ye, Jt.el.toggleAttribute("data-narrow", !1);
        for (let jn = 0; ; jn++) {
          const zn = [...Array(Math.max(0, It - Ye + 1)).keys()].find((xi) => [...Array(Ye).keys()].every((to) => [...Array(Yo).keys()].every((gs) => !Zt.has(jn + gs + "," + (xi + to)))));
          if (zn != null) {
            [...Array(Ye).keys()].forEach((xi) => [...Array(Yo).keys()].forEach((to) => Zt.add(jn + to + "," + (zn + xi)))), de.push({ it: Jt, r: jn, c: zn, sc: Ye, sr: Yo });
            break;
          }
        }
      });
      const pe = Math.max(0, ...de.map((Jt) => Jt.r + Jt.sr));
      hs && !a && de.forEach((Jt) => {
        for (; Jt.r + Jt.sr < pe && !Zt.has(Jt.r + Jt.sr + "," + Jt.c) && Jt.sc === 1; )
          Zt.add(Jt.r + Jt.sr + "," + Jt.c), Jt.sr++;
      }), de.forEach((Jt) => {
        Jt.it.el.dataset.rows = Math.min(5, Jt.sr * ut.rows), Object.assign(Jt.it.el.style, { width: Jt.sc * Be + (Jt.sc - 1) * d + "px", height: Jt.sr * fe + (Jt.sr - 1) * d + "px" });
      });
      const Kt = [...Array(pe)].map(() => fe), ke = [];
      let _a = vp(ft);
      return Kt.forEach((Jt, bo) => {
        ke[bo] = _a, _a += Jt + d;
      }), { h: _a - (pe ? d : 0), places: de.map((Jt) => ({ it: Jt.it, x: Jt.c * (Be + d), y: ke[Jt.r], w: Jt.sc * Be + (Jt.sc - 1) * d, h: Kt.slice(Jt.r, Jt.r + Jt.sr).reduce((bo, bn) => bo + bn, 0) + (Jt.sr - 1) * d })) };
    }, tc = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((ft) => [ft.dataset.floor, ft])), ec = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((ft) => [ft.dataset.floor, ft])), yp = [], Mm = (ft, It, Be, Zt) => {
      if (!ft.name) return;
      let de = tc.get(ft.id);
      tc.delete(ft.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ft.id, S.appendChild(de)), de.dataset.sig !== ft.name && (de.dataset.sig = ft.name, de.innerHTML = '<h2 class="hcFloorName">' + W(ft.name) + "</h2>"), Object.assign(de.style, { left: It + "px", top: Be + "px", width: Zt + "px" }), yp.push(de);
    }, Sm = (ft, It, Be, Zt, de) => {
      let pe = ec.get(ft.id);
      ec.delete(ft.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), pe.dataset.floor = ft.id, pe.setAttribute("aria-hidden", "true"), S.prepend(pe)), Object.assign(pe.style, { left: It + "px", top: Be + "px", width: Zt + "px", height: de + "px" });
    }, _m = (ft) => parseFloat(getComputedStyle(ft.cards[0].el).paddingLeft) || 0, ac = (ft, It, Be, Zt, de = 0) => {
      Mm(ft, Be + de, Zt, (It.w ?? e) - de), It.places.forEach((pe) => P(pe.it, { x: Be + pe.x, y: Zt + pe.y, w: pe.w, h: pe.h }));
    };
    if (Fa.length && U.length && !X && (h += Fo.floorTop), km) {
      let ft = 0, It = h;
      Fa.forEach((Be) => {
        const Zt = { ...yi(Be, 1, me), w: me };
        ft && ft + me > Ht && (h = It + d + Fo.floorTop, ft = 0), ac(Be, Zt, Dt + ft, h), It = Math.max(It, h + Zt.h), ft += me + d;
      }), h = It + d;
    } else if (xm) {
      let ft = [{ x0: 0, x1: Ht, t: h }];
      const It = (Zt, de) => Math.max(...ft.filter((pe) => pe.x1 > Zt && pe.x0 < de).map((pe) => pe.t)), Be = (Zt, de, pe) => {
        const Kt = [];
        ft.forEach((ke) => {
          ke.x1 <= Zt || ke.x0 >= de ? Kt.push(ke) : (ke.x0 < Zt && Kt.push({ x0: ke.x0, x1: Zt, t: ke.t }), ke.x1 > de && Kt.push({ x0: de, x1: ke.x1, t: ke.t }));
        }), Kt.push({ x0: Zt, x1: de, t: pe }), ft = Kt.sort((ke, _a) => ke.x0 - _a.x0);
      };
      Fa.forEach((Zt) => {
        const de = Zt.cards.length + (ms && Zt.cards.length > 1 ? 3 : 0);
        let pe = a ? 2 : Math.min(ye, Math.max(ms && Zt.cards.length > 1 ? 2 : 1, de <= 3 ? de : Math.ceil(de / 2)));
        for (; !a && pe > 1 && pe * me + (pe - 1) * d + 2 * Uo > Ht; ) pe--;
        let Kt = null;
        for (let Ye = pe; Ye >= (a ? pe : 1); Ye--) {
          const Yo = Math.min(me, Math.floor((Ht - 2 * Uo - (Ye - 1) * d) / Ye)), jn = { ...yi(Zt, Ye, Yo), w: Ye * Yo + (Ye - 1) * d }, zn = jn.w + 2 * Uo, xi = jn.h + 2 * Uo;
          ft.map((to) => to.x0).filter((to) => to + zn <= Ht + 0.5).forEach((to) => {
            const gs = It(to, to + zn);
            (!Kt || gs < Kt.t - 0.5) && (Kt = { cc: Ye, inner: Yo, bw: zn, h: xi, t: gs, x: to });
          });
        }
        if (!Kt) {
          const Ye = Math.min(me, Ht - 2 * Uo), Yo = yi(Zt, 1, Ye);
          Kt = { cc: 1, inner: Ye, bw: Ye + 2 * Uo, h: Yo.h + 2 * Uo, t: It(0, Ht), x: 0 };
        }
        const ke = { ...yi(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * d }, _a = Kt.bw, Jt = Kt.h, bo = Kt.x, bn = Kt.t;
        Sm(Zt, Dt + bo, bn, _a, Jt), ac(Zt, ke, Dt + bo + Uo, bn + Uo, _m(Zt)), Be(bo, Math.min(Ht, bo + _a + d), bn + Jt + d);
      }), h = Math.max(...ft.map((Zt) => Zt.t));
    } else {
      const ft = (It) => {
        var pe;
        if (!((pe = xt.home) != null && pe.fitTogether) || a) return ye;
        const Be = X ? yt - d - h : null, Zt = (Kt) => {
          const ke = It.cards.length + (ms && It.cards.length > 1 && Kt >= 2 ? 3 : 0), _a = Math.ceil(ke / Kt);
          return { holes: _a * Kt - ke, rows: _a, h: vp(It) + _a * fe + (_a - 1) * d, w: Kt * me + (Kt - 1) * d };
        }, de = (Kt) => Kt.holes === 0 || hs && Kt.holes === 1 && Kt.rows > 1;
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
        Be && (h += Fo.floorTop);
        const Zt = yi(It, ft(It), me);
        ac(It, { ...Zt, w: Ht }, Dt, h), h += Zt.h + d;
      });
    }
    X && (h = Math.max(h, yt)), tc.forEach((ft) => ft.remove()), ec.forEach((ft) => ft.remove()), Ce != null && Ce.on || pl(null), S.style.height = Math.max(0, h - d) + "px", ll([...C.map((ft) => ft.el), ...U.map((ft) => ft.el), ...yp, ...Fa.flatMap((ft) => ft.cards.map((It) => It.el))]), fl(!1), t.forEach((ft) => [...ft.el.children].forEach((It) => It.toggleAttribute("inert", zo)));
    const oc = S.querySelector(".tfDash-favs>.activityRows");
    oc && (oc.classList.toggle("hcFadeList", !x), hd(oc)), requestAnimationFrame(() => f.classList.add("tfBoardReady")), t.forEach((ft) => ul.observe(ft.el)), De();
  }
  const Qi = () => {
    nl || (nl = !0, requestAnimationFrame(() => {
      nl = !1, $e();
    }));
  }, ul = new ResizeObserver(() => {
    ae || Qi();
  });
  function fh(t, e, a) {
    const r = a + ue, s = t * a + (t - 1) * ue, d = e * Ba - ue, p = ue / 2, u = r / Math.max(1, Math.round(r / (Ba / 4))), h = Ba / 4, x = 6;
    let C = "";
    for (let M = 0; M <= t; M++) for (let N = 0; N <= e; N++) {
      const B = M * r - p, U = N * Ba - p;
      C += "M" + (B - x) + " " + U + "H" + (B + x) + "M" + B + " " + (U - x) + "V" + (U + x);
    }
    return '<svg width="' + s + '" height="' + d + '" viewBox="0 0 ' + s + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + u.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (s + ue) + '" height="' + (d + ue) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + C + '"></path></svg>';
  }
  function fl(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, s = 1, d = li) {
    S.querySelectorAll(".tfEditChips").forEach((C) => {
      (!t || !C.closest(".tfBoardItem")) && C.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((C) => C.remove()), S.querySelectorAll(".tfBoardItem").forEach((C) => [...C.children].forEach((M) => {
      M.classList.contains("tfEditChips") || M.toggleAttribute("inert", t);
    }));
    let p = S.querySelector(".tfBoardCells"), u = S.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), u == null || u.remove(), fo(), r;
    const h = Xi + Xf;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), S.prepend(p)), p.style.top = hn + "px", p.dataset.size !== s + "x" + h + "x" + d && (p.dataset.size = s + "x" + h + "x" + d, p.innerHTML = fh(s, h, d)), r = Math.max(r, hn + h * Ba - ue), e.forEach((C) => {
      const M = C.el;
      !M || M.querySelector(":scope > .tfEditChips") || M.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Ai + '</span><button class="tfEditChip" type="button" data-board-more="' + W(C.key) + '" aria-label="' + W(Pa(C.key)) + ' options" aria-haspopup="menu">' + Cg + "</button></div>");
    }), ae && a.has(ae.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(u));
      const C = a.get(ae.key);
      Object.assign(u.style, { left: C.x + "px", top: C.y + "px", width: C.w + "px", height: C.h + "px" });
    } else u == null || u.remove();
    const x = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const C = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((M) => {
        const N = M.getBoundingClientRect(), B = M.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + W(B) + '" aria-label="Hide ' + W(vt(B)) + ' from the dashboard" style="left:' + Math.round(N.right - C.left - 42) + "px;top:" + Math.round(N.top - C.top + (N.height - 32) / 2) + 'px">' + Ou + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let hl = "";
  function ml(t) {
    ma = t, t || (ae = null, Vo = Wo = !1, fo()), $e(), t ? (hl = JSON.stringify(xt), xr(Yt, "Edit custom dashboard", null)) : hl && JSON.stringify(xt) !== hl && Ra("Changes saved");
  }
  function hh(t, e) {
    var V, D;
    fo();
    const a = Rn.get(t), { n: r } = mn(S.clientWidth), s = ce(), d = s.spans[t] ?? (Ot(t) ? 1 : 2);
    if (!a) return;
    const p = a.cols >= r, u = (X, A, j) => '<button type="button" role="menuitem" data-board-act="' + X + '"' + (j ? " disabled" : "") + ">" + A + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", Pa(t) + " options");
    const x = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), C = od(t), M = Pn(t), N = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + ed.map((X, A) => '<button type="button" role="menuitemradio" aria-checked="' + (A + 1 === M) + '" aria-label="' + X + ", " + (A + 1) + (A ? " rows" : " row") + '" data-board-act="h:' + (A + 1) + '"' + (A < C ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>", B = Jf.includes(t) || Ot(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Qf.map((X, A) => '<button type="button" role="menuitemradio" aria-checked="' + (A + 1 === Math.min(d, r)) + '" aria-label="' + X + ", " + (A + 1) + (A ? " columns" : " column") + '" data-board-act="w:' + (A + 1) + '"' + (A < r ? "" : " disabled") + ">" + X + "</button>").join("") + "</div></div>" : "", U = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Vs().map(([X, A]) => '<button type="button" role="menuitemradio" aria-checked="' + (X === Gr()) + '" data-board-act="src:' + W(X) + '">' + W(A) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = N + B + U + (t === "energy" ? u("graph", (((V = s.opts.energy) == null ? void 0 : V.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", p || a.col === 0) + u("right", "Move right", p || a.col + a.cols >= r) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (x ? u("remove", "Remove") : u("hide", "Hide")), S.appendChild(h);
    const P = Math.min(a.x + a.w - h.offsetWidth, S.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, P) + "px", top: a.y + 28 + "px" }), ia = { key: t, menu: h, opener: e }, (D = h.querySelector("button:not([disabled])")) == null || D.focus();
  }
  function fo(t) {
    if (!ia) return;
    const { menu: e, opener: a } = ia;
    ia = null, e.remove(), t && (a == null || a.focus());
  }
  const On = () => Object.fromEntries([...Rn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function mh(t, e) {
    var u, h, x;
    if (e === "remove") {
      fo(), gh(t);
      return;
    }
    const a = xt, r = ce(), s = On(), d = s[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((u = r.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (s[t] = { ...d, col: d.col - 1 }), e === "right" && (s[t] = { ...d, col: d.col + 1 }), e === "up" && (s[t] = { ...d, row: d.row - 1 }), e === "down" && (s[t] = { ...d, row: d.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ae = { key: t, col: s[t].col, row: s[t].row }), vr(r, s), ae && ($e(), ae = null, vr(ce(), On()));
    const p = /^[hw]:/.test(e) && !We() && (ia == null ? void 0 : ia.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const C = ia;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((M) => M.setAttribute("aria-checked", String(M === p))), setTimeout(() => {
        ia === C && fo();
      }, Pe.tabs.dur);
    } else fo();
    e === "graph" && (ya.delete("dash:energy"), Ee()), e.startsWith("src:") && ((h = Te == null ? void 0 : Te.get("radar")) == null || h.refresh(), Le == null || Le.refresh()), e.startsWith("h:") && t.includes(".") && Ee(), $e(), e !== "hide" ? (x = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Ra(Pa(t) + " hidden", rs(a));
  }
  const gd = (t) => {
    var e;
    return rn.includes(t) && !(((e = xt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function gl(t) {
    const e = ce(), a = Pa(t) + gd(t);
    Hn({ ...e, hidden: e.hidden.filter((r) => r !== t) }), $e(), Ra(a);
  }
  const ts = () => ce().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ce().hidden.includes(t));
  function bd(t, e) {
    const a = ce();
    vr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), Ee(), De();
  }
  const wd = (t) => {
    bd([...ts().filter((e) => e !== t), t], On()), Ra(Pa(t) + " added"), yh(t);
  }, gh = (t) => {
    const e = xt, a = On();
    delete a[t], bd(ts().filter((r) => r !== t), a), Ra(Pa(t) + " removed", rs(e));
  };
  let bl = 0;
  function Ra(t, e = null) {
    var p;
    const a = l("toast");
    if (!a) return;
    if (G0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(bl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const r = f.getBoundingClientRect(), s = (p = o.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), d = Yt.classList.contains("open") && !ho ? Math.min(r.right, Yt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + d) / 2 + "px", a.style.bottom = (s != null && s.height ? window.innerHeight - s.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), $0(a), clearTimeout(bl), bl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Pe.confirm.stay);
  }
  const bh = 700, wh = 1e3, ga = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ga.setAttribute("role", "tooltip"), ga.setAttribute("aria-hidden", "true"), f.appendChild(ga);
  let di = null, pi = 0, In = 0, vd = -1 / 0;
  const wl = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, vh = (t) => {
    for (let e = t; e && e !== f; e = e.parentElement) if (wl(e)) return e;
    return null;
  };
  function es(t, e) {
    clearTimeout(pi), clearTimeout(In);
    const a = () => {
      if (!t.isConnected) return;
      di = t, ga.textContent = e, ga.hidden = !1;
      const r = t.getBoundingClientRect(), s = ga.getBoundingClientRect(), d = r.top - s.height - 8 >= 8 ? r.top - s.height - 8 : r.bottom + 8;
      ga.style.left = Math.max(8, Math.min(window.innerWidth - s.width - 8, r.left + r.width / 2 - s.width / 2)) + "px", ga.style.top = d + "px";
    };
    !ga.hidden || performance.now() - vd < wh ? a() : pi = setTimeout(a, bh);
  }
  function as() {
    clearTimeout(pi), clearTimeout(In), ga.hidden || (vd = performance.now()), ga.hidden = !0, di = null;
  }
  o.addEventListener("pointerover", (t) => {
    var r, s;
    if (t.pointerType === "touch") return;
    if (ga.contains(t.target)) {
      clearTimeout(In);
      return;
    }
    const e = (s = (r = t.target).closest) == null ? void 0 : s.call(r, ".tfAreaPick");
    if (e) {
      e !== di ? es(e, e.getAttribute("aria-label")) : clearTimeout(In);
      return;
    }
    const a = vh(t.target);
    if (a && Xt.names === "scroll" && a.matches(os)) {
      vl(a);
      return;
    }
    if (a) {
      a !== di ? es(a, a.textContent.trim()) : clearTimeout(In);
      return;
    }
    clearTimeout(pi), clearTimeout(In), In = setTimeout(as, 120);
  }), o.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      es(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(wl);
    Xt.names === "scroll" && (a.filter((s) => s.matches(os)).forEach(vl), a = a.filter((s) => !s.matches(os))), a.length && es(e, a.map((s) => s.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === di && as();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ga.hidden && (t.stopPropagation(), as());
  }, !0), window.addEventListener("scroll", () => {
    (!ga.hidden || pi) && as();
  }, { capture: !0, passive: !0 });
  const os = ".activityRowName,.activityRowMeta", ns = /* @__PURE__ */ new WeakSet();
  function vl(t) {
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
  const yd = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (yd.unobserve(e.target), vl(e.target));
  }), { threshold: 1 });
  let yl = !1;
  new MutationObserver(() => {
    yl || Xt.names !== "scroll" || (yl = !0, setTimeout(() => {
      yl = !1, o.querySelectorAll(os).forEach((t) => {
        !t.dataset.glided && wl(t) && (t.dataset.glided = "1", yd.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const rs = (t) => () => {
    xt = t, Ta(), Ee(), $e(), De();
  };
  function yh(t) {
    const e = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const a = e();
      if (!a) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, s = a.getBoundingClientRect();
      (s.top < 0 || s.bottom > window.innerHeight) && a.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const d = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, xh(t) ? 260 : 0);
  }
  function xh(t) {
    const e = Rn.get(t);
    if (!e || !Yt.classList.contains("open") || ho) return !1;
    const { n: a, w: r } = mn(S.clientWidth), s = Yt.getBoundingClientRect().left - S.getBoundingClientRect().left, d = (h) => h * (r + ue) + e.cols * r + (e.cols - 1) * ue <= s;
    if (d(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Rn.forEach((h, x) => {
      if (x !== t) for (let C = h.row; C < h.row + h.rows; C++) for (let M = h.col; M < h.col + h.cols; M++) p.add(M + "," + C);
    });
    const u = (h, x) => {
      for (let C = x; C < x + e.rows; C++) for (let M = h; M < h + e.cols; M++) if (p.has(M + "," + C)) return !1;
      return !0;
    };
    for (let h = 0; h <= Xi; h++) for (let x = 0; x + e.cols <= a && d(x); x++)
      if (u(x, h))
        return vr(ce(), { ...On(), [t]: { col: x, row: h } }), $e(), !0;
    return !1;
  }
  const xd = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, kd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let yr = "page";
  const kh = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + W(r) + '</span></span><span class="hcRowEnd">' + Ac + "</span></button>").join("") + "</section>", xr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Mh = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + kc + "</button>", Sh = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function xl(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let s = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = Sh(p) !== yr, p.classList.toggle("hcFirst", !p.hidden && s), p.hidden || (s = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const u = p.dataset.trayTab === yr;
      p.classList.toggle("active", u), p.setAttribute("aria-selected", String(u));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (r.style.transition = "none", t ? Bs(r, r.offsetLeft, r.offsetWidth, d.offsetLeft, d.offsetWidth) : (r.style.left = d.offsetLeft + "px", r.style.width = d.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + kd.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Cs + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Cs + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Cs + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Yt);
  let ho = !1, Vo = !1, Wo = !1, ui = !1, sa = null, jo = !1;
  const kl = {}, Xa = (t, e) => {
    if (kl[t] === e) return;
    kl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, lo(a);
  }, Ml = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + W(vt(t)) + '</span><span class="activityRowMeta">' + W(e) + "</span></span>", _h = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + W(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + '</span><span class="tfIcon"' + we(t, Ea(t)) + "></span>" + Ml(t, e ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + W(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + W(vt(t)) + ' on the dashboard">' + (e ? Ou : Ag) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + W(t) + '" aria-label="Remove ' + W(vt(t)) + ' from favourites">' + _c + "</button>" : "<span></span>") + "</li>";
  function Sl(t, e, a, r) {
    const s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((p) => e(p) && !a.has(p) && k[p].state !== "unavailable").filter((p) => {
      const u = (vt(p) + " " + (Se.get(p) || "") + " " + p).toLowerCase();
      return s.every((h) => u.includes(h));
    }).sort((p, u) => (Se.get(p) || "~").localeCompare(Se.get(u) || "~") || vt(p).localeCompare(vt(u))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + W(p) + '"><span class="tfIcon"' + we(p, Ea(p)) + "></span>" + Ml(p, Se.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Ch = "https://www.home-assistant.io/dashboards/", Md = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, xe = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  xe.setAttribute("aria-label", "Edit Home page"), xe.toggleAttribute("inert", !0);
  let zo = !1, Ha = !1, _l = "", Cl = null, kr = "page";
  function Al(t, e) {
    const a = xe.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), s = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(s != null && s.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = xe.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && Al(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Bs(r, e.left, e.width, s.offsetLeft, s.offsetWidth) : (r.style.left = s.offsetLeft + "px", r.style.width = s.offsetWidth + "px");
  }
  const Fn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + W(Md[t][0]) + '">' + Cc + "</button>", Ma = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + W(e) + '" ' + a + "></button>", Ll = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + W(t) + '. Use the up and down arrows">' + Ai + "</button>", Sd = () => {
    var t;
    return ((t = xt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, is = () => {
    var t;
    return ((t = xt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + W(t) + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + s + '" aria-pressed="' + (a === s) + '">' + d + "</button>").join("") + "</div></div>", _d = () => Zi(!0).filter((t) => _i[t.key]).map((t) => t.key);
  function qn() {
    var h, x, C, M, N, B, U;
    if (!zo) return;
    const t = $t(), e = (P) => '<li class="hcHeRow" data-he-id="' + W(P) + '">' + Ll(vt(P)) + '<span class="tfIcon"' + we(P, Ea(P)) + "></span>" + Ml(P, Se.get(P) || Oe(P)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + W(P) + '" aria-label="Take ' + W(vt(P)) + ' off Favourites">' + _c + "</button></li>", a = (P) => {
      const V = _i[P];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + W(P) + '"' + (V.colour && Ga(V.colour) ? ' style="' + Ga(V.colour).slice(1) + '"' : "") + ">" + Ll(V.name) + '<span class="tfIcon"' + we("", V.icon, V.name) + '></span><span class="activityRowName">' + W(V.name) + "</span>" + Ma(Zs(P), V.name, 'data-he-sum="' + W(P) + '"') + "</li>";
    }, r = ((h = xe.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", s = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], d = new Set(((x = xt.home) == null ? void 0 : x.areasOff) || []), p = (P) => '<li class="hcHeRow" data-he-id="' + W(P.id) + '">' + Ll(P.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="activityRowName">' + W(P.name) + "</span>" + Ma(!d.has(P.id), "Show " + P.name + " on Home", 'data-he-area="' + W(P.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Fn("welcome") + Ma(ol(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Oo() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Fn("weather") + Ma(!!((C = xt.home) != null && C.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Ka != null && Ka.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Fn("energy") + Ma(!!((M = xt.home) != null && M.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", ud(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Ma(qo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", dl(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (dl() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Ma(qo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Ma(qo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", pd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + Ma(!!((N = xt.home) != null && N.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Ma(((B = xt.home) == null ? void 0 : B.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Fn("favs") + "</div>" + fi("Show as", "data-he-favs-as", is() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (is() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + Ma(qo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ha + '">' + Cs + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ha ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + W(r) + '"><ul class="tfTrayList">' + (Ha ? Sl(r, (P) => xd.test(P), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Fn("suggest") + Ma(Ho(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Fn("sums") + Ma(((U = xt.home) == null ? void 0 : U.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Sd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + _d().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + rl().map(p).join("") + "</ul>"
    };
    xe.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + s.map(([P, V]) => '<button class="tab segBtn' + (P === kr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (P === kr) + '" data-he-tab="' + P + '">' + V + "</button>").join("") + "</div>" + kh(s, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[kr] + "</div>", Al(!1), lo(xe);
  }
  const Mr = (t) => {
    xt = { ...xt, ...t }, Ta(), Ee(), qn();
  }, Sa = (t) => Mr({ home: { ...xt.home || {}, ...t } });
  function Tl(t) {
    Vn(), zo = t, Ha = !1, xe.classList.toggle("open", t), xe.toggleAttribute("inert", !t), f.classList.toggle("hcHomeEditing", t), g && S && $e();
    const e = l("dashEditNav"), a = xe.querySelector(".tfTrayHead");
    e && t && (Cl = e.parentElement, a.appendChild(e)), e && !t && Cl && Cl.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Iu : As), t ? (_l = JSON.stringify(xt), qn(), xr(xe, "Edit Home page", null)) : _l && JSON.stringify(xt) !== _l && Ra("Changes saved");
  }
  xe.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Mh + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', f.appendChild(xe);
  let Go = null;
  const Ja = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ja.setAttribute("role", "dialog"), f.appendChild(Ja);
  function Vn() {
    Go && (Go.setAttribute("aria-expanded", "false"), Go = null, Ja.hidden = !0);
  }
  function Cd(t) {
    const e = Go;
    if (Vn(), e === t) return;
    const [a, r] = Md[t.dataset.info];
    Ja.setAttribute("aria-label", a), Ja.innerHTML = '<div class="hcInfoTitle">' + W(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Ch + '" target="_blank" rel="noopener">Learn more</a>', Ja.hidden = !1, Go = t, t.setAttribute("aria-expanded", "true");
    const s = t.getBoundingClientRect(), d = Ja.offsetWidth, p = Ja.offsetHeight;
    Ja.style.left = Math.max(8, Math.min(innerWidth - d - 8, s.left + s.width / 2 - d / 2)) + "px", Ja.style.top = (s.bottom + 8 + p > innerHeight - 8 ? Math.max(8, s.top - 8 - p) : s.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    Go && !t.composedPath().some((e) => e === Ja || e === Go) && Vn();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Go) {
        t.stopPropagation();
        const a = Go;
        Vn(), a.focus();
        return;
      }
      if (Ha) {
        t.stopPropagation(), Ha = !1, qn();
        return;
      }
      zo && (t.stopPropagation(), Tl(!1), (e = l("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Ah = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? rl().map((e) => e.id) : _d(), Ad = (t, e) => t.dataset.heList === "favs" ? Mr({ favourites: e }) : t.dataset.heList === "areas" ? (Mr({ areaOrder: e }), $e()) : Sa({ sumOrder: e });
  xe.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, s = Ah(r), d = s.indexOf(a.dataset.heId), p = d + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= s.length || (s.splice(p, 0, s.splice(d, 1)[0]), Ad(r, s), (u = xe.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), xe.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Pl(t, e.closest("[data-he-id]"), "heId", (s) => Ad(a, s), (s) => xe.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(s) + '"]'));
  }), xe.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      qn();
      const a = xe.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), xe.addEventListener("click", (t) => {
    var V, D, X, A;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Cd(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      kr = r.dataset.heGo, Ha = !1, Vn(), qn(), xr(xe, "Edit Home page", kr, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Vn(), xr(xe, "Edit Home page", null);
      return;
    }
    const s = e.closest("[data-he-tab]");
    if (s) {
      const j = xe.querySelector(".hcTrayTabs .rubberIndicator"), yt = { left: j.offsetLeft, width: j.offsetWidth };
      kr = s.dataset.heTab, Ha = !1, Vn(), qn(), Al(!0, yt), xe.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Sa({ welcome: !ol() });
      return;
    }
    const d = e.closest("[data-he-card]");
    if (d) {
      const j = d.dataset.heCard, yt = ["sums", "favs"].includes(j) ? ((V = xt.home) == null ? void 0 : V[j]) !== !1 : !!((D = xt.home) != null && D[j]);
      Sa({ [j]: !yt });
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
    const h = e.closest("[data-he-area-size]");
    if (h) {
      Sa({ areaSize: h.dataset.heAreaSize });
      return;
    }
    const x = e.closest("[data-he-area-layout]");
    if (x) {
      Sa({ areaLayout: x.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      Sa({ fitTogether: !((X = xt.home) != null && X.fitTogether) });
      return;
    }
    const C = e.closest("[data-he-cards-as]");
    if (C) {
      Sa({ cardsAs: C.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const j = M.dataset.heFlag;
      Sa({ [j]: !qo(j) }), j === "favsTitle" && Na();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Mr({ suggest: !Ho() });
      return;
    }
    const N = e.closest("[data-he-area]");
    if (N) {
      const j = new Set(((A = xt.home) == null ? void 0 : A.areasOff) || []), yt = N.dataset.heArea;
      j.has(yt) ? j.delete(yt) : j.add(yt), Sa({ areasOff: [...j] });
      return;
    }
    const B = e.closest("[data-he-sum]");
    if (B) {
      const j = B.dataset.heSum, yt = !Zs(j), Dt = xt.home || {};
      Sa(Pu.includes(j) ? { shownSums: yt ? [...Dt.shownSums || [], j] : (Dt.shownSums || []).filter((Ht) => Ht !== j) } : { hiddenSums: yt ? (Dt.hiddenSums || []).filter((Ht) => Ht !== j) : [...Dt.hiddenSums || [], j] });
      return;
    }
    const U = e.closest("[data-he-remove]");
    if (U) {
      Mr({ favourites: $t().filter((j) => j !== U.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ha = !Ha, qn(), Ha && xe.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const P = e.closest("[data-he-pick-id]");
    P && (Ha = !1, xe.querySelector("[data-he-search]").value = "", Mr({ favourites: [...$t(), P.dataset.hePickId] }));
  });
  function De() {
    var C, M, N;
    const t = ma && f.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && ho), Yt.toggleAttribute("inert", !t), t || (jo = !1), Pd(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = ho ? kc : Ac, e.setAttribute("aria-expanded", String(!ho)), e.setAttribute("aria-label", ho ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ce().hidden.filter((B) => !Io.includes(B) && Nn().some((U) => U.key === B)), r = (B, U) => '<button class="tfTrayCard" type="button" data-tray-card="' + W(B) + '" aria-label="' + W(Pa(B)) + ": drag it onto the board, or press to " + U + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + "</span>" + W(Pa(B)) + "</button>", s = a.filter((B) => !zr.includes(B)), d = zr.filter((B) => a.includes(B));
    Xa("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Fn("welcome") + '<button class="switch' + (ce().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ce().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((C = xt.dash) != null && C.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((M = xt.dash) != null && M.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => xl(!1)), Xa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((B) => r(B, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Xa("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((B) => r(B, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Xa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ce().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + jo + '">' + (jo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(xt.favHidden || []), u = $t(), h = [...u, ...[...p].filter((B) => !u.includes(B) && k[B])];
    Xa("favs", h.map((B) => _h(B, p.has(B), u.includes(B))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !Wo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Wo)), Wo && Xa("tilepick", Sl(Yt.querySelector("[data-tile-search]").value, (B) => Rr.includes(B.split(".")[0]), new Set(ts()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !ui, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ui));
    const x = new Set(((N = xt.dash) == null ? void 0 : N.areasOff) || []);
    if (Xa("areas", Et(Bt).map((B) => '<li class="hcHeRow" data-area-id="' + W(B.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + W(B.name) + '. Use the up and down arrows">' + Ai + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="activityRowName">' + W(B.name) + '</span><button class="switch' + (x.has(B.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(B.id) + '" aria-label="Show ' + W(B.name) + ' in the Areas card" data-area-on="' + W(B.id) + '"></button></li>').join("")), ui) {
      const B = new Set(ts());
      Xa("roompick", Et(Bt).filter((U) => !B.has("room:" + U.id)).map((U) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + W(U.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + we("area:" + U.id, U.icon || "mdi:texture-box", U.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + W(U.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Vo, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Vo)), Vo && Xa("pick", Sl(Yt.querySelector("[data-fav-search]").value, (B) => xd.test(B), new Set($t()), "data-fav-pick")), Xa("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ji() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ji() + '" data-fav-title aria-label="Title"></button>'), Xa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ho() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ho() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Wn = (t) => {
    xt = { ...xt, ...t }, Ta(), Ee(), De();
  };
  function Ld(t, e) {
    const a = xt, r = new Set(xt.favHidden || []);
    e ? r.delete(t) : r.add(t), Wn({ favHidden: [...r] }), e ? Ra(vt(t) + " put back") : Ra(vt(t) + " hidden", rs(a));
  }
  const Lh = (t) => {
    const e = xt;
    Wn({ favourites: $t().filter((a) => a !== t), favHidden: (xt.favHidden || []).filter((a) => a !== t) }), Ra(vt(t) + " removed from favourites", rs(e));
  }, Th = (t) => {
    Wn({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (xt.favHidden || []).filter((e) => e !== t) }), Ra(vt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, r, s;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        yr = e.dataset.trayTab, xl(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        yr = e.dataset.trayGo, xl(!1), xr(Yt, "Edit custom dashboard", yr, kd.find(([d]) => d === yr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        xr(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) ml(!1);
      else if (e.hasAttribute("data-info")) Cd(e);
      else if (e.hasAttribute("data-dash-sums"))
        Hn({ ...il(), hidden: il().hidden.filter((d) => d !== "sums"), sumsOff: !((a = xt.dash) != null && a.sumsOff) }), Ee(), De();
      else if (e.hasAttribute("data-dash-welcome")) {
        const d = ce();
        Hn({ ...d, welcome: !d.welcome }), Ee(), De();
      } else if (e.hasAttribute("data-tray-tuck"))
        ho = !ho, De();
      else if (e.hasAttribute("data-phone-toggle"))
        jo = !jo, De(), jo && ((r = ba.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (gl(e.dataset.trayCard), De());
      else if (e.dataset.favEye) Ld(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Lh(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Vo = !Vo, De(), Vo && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Th(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Wo = !Wo, De(), Wo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) wd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ui = !ui, De();
      else if (e.dataset.roomPick) wd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const d = new Set(((s = xt.dash) == null ? void 0 : s.areasOff) || []);
        d.has(e.dataset.areaOn) ? d.delete(e.dataset.areaOn) : d.add(e.dataset.areaOn), Hn({ ...ce(), areasOff: [...d] }), Ee(), De();
      } else e.hasAttribute("data-fav-suggest") ? Wn({ suggest: !Ho() }) : e.hasAttribute("data-fav-title") && (Wn({ favsTitle: !Ji() }), Na());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && De();
  });
  const Td = (t) => {
    xt = { ...xt, areaOrder: t }, Ta(), Ee(), De();
  };
  Yt.addEventListener("keydown", (t) => {
    var p, u, h;
    const e = (u = (p = t.target).closest) == null ? void 0 : u.call(p, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Et(Bt).map((x) => x.id), s = r.indexOf(a), d = s + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= r.length || (r.splice(d, 0, r.splice(s, 1)[0]), Td(r), (h = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Pl(t, e.closest("[data-area-id]"), "areaId", Td, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const $o = window.visualViewport, Dl = () => {
    if (!$o) return;
    const t = Math.max(0, Math.round(window.innerHeight - $o.height - $o.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  $o == null || $o.addEventListener("resize", Dl), $o == null || $o.addEventListener("scroll", Dl), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Dl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, r;
    const e = !!((r = (a = t.target).closest) != null && r.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Wo : Vo) || (t.stopPropagation(), e ? Wo = !1 : Vo = !1, De(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Dd(t, e, a, r) {
    t.preventDefault();
    const s = t.clientX, d = t.clientY;
    let p = null, u = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (M) => {
      if (!p) {
        if (Math.hypot(M.clientX - s, M.clientY - d) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", f.appendChild(p);
      }
      p.style.transform = "translate(" + (M.clientX - 24) + "px," + (M.clientY - 24) + "px)";
      const N = !ho && M.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const P = S.getBoundingClientRect(), { w: V } = mn(S.clientWidth);
        ae = !N && M.clientX >= P.left && M.clientX <= P.right && M.clientY >= P.top + hn ? { key: r, col: Math.max(0, Math.floor((M.clientX - P.left) / (V + ue))), row: Math.max(0, Math.floor((M.clientY - P.top - hn) / Ba)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, $e();
        }));
        return;
      }
      const B = S.querySelector(".tfDash-favs"), U = B == null ? void 0 : B.getBoundingClientRect();
      if (sa = null, U && !N && M.clientX >= U.left && M.clientX <= U.right && M.clientY >= U.top && M.clientY <= U.bottom) {
        let P = 1 / 0;
        B.querySelectorAll('[data-k^="fav:"]').forEach((V, D) => {
          const X = V.getBoundingClientRect(), A = Math.hypot(M.clientX - (X.left + X.width / 2), M.clientY - (X.top + X.height / 2));
          A < P && (P = A, sa = { i: D, r: X, after: M.clientX > X.left + X.width / 2 });
        }), sa || (sa = { i: 0, r: null, after: !1 });
      }
      sa != null && sa.r ? (h.isConnected || f.appendChild(h), Object.assign(h.style, { left: (sa.after ? sa.r.right : sa.r.left) - 2 + "px", top: sa.r.top + 8 + "px", height: sa.r.height - 16 + "px" })) : h.remove();
    }, C = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), cancelAnimationFrame(u), p == null || p.remove(), h.remove(), a === "card") {
        if (!p) gl(r);
        else if (ae != null && ae.fromTray) {
          $e();
          const P = Pa(r) + gd(r), V = ce(), D = On();
          ae = null, vr({ ...V, hidden: V.hidden.filter((X) => X !== r) }, D), Ra(P);
        }
        ae = null, $e(), Ee(), De();
        return;
      }
      if (!sa) return;
      const M = new Set(xt.favHidden || []);
      M.delete(r);
      const N = $t().filter((P) => P !== r), B = N.filter((P) => !M.has(P)), U = B[Math.min(sa.i + (sa.after ? 1 : 0), B.length)];
      N.splice(U ? N.indexOf(U) : N.length, 0, r), sa = null, Wn({ favourites: N, favHidden: [...M] }), Ra(vt(r) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", C), window.addEventListener("pointercancel", C);
  }
  const Ed = {
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
  }, Bd = 136, Dh = 288, Eh = 0.8, Bh = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ba.setAttribute("aria-label", "Phone order"), ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + _c + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(ba);
  let El = "";
  function Pd() {
    var u;
    const t = jo && ma && f.classList.contains("tfBoard") && !ho;
    if (ba.classList.toggle("open", t), ba.toggleAttribute("inert", !t), !t) return;
    const e = sl().filter((h) => !ce().hidden.includes(h.key)), a = e.length, r = (h) => Math.round(h * Eh * 10) / 10 + "px", s = (h, x) => {
      const C = h.el.classList.contains("tfDac"), M = h.tile ? C ? Dh : Bd : Ed[h.key] || Bd;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + W(h.key) + '" style="min-height:' + r(M) + '" aria-label="' + W(Pa(h.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? we(h.key, Ea(h.key)) : we(h.key, Bh[h.key])) + '></span><span class="tfPhoneName">' + W(Pa(h.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + W(((u = S.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Ed.sums) + '"><span class="tfPhoneName">' + W(Pa("sums")) + "</span></div>" + e.map(s).join("");
    if (ba.querySelector('[data-phone="note"]').innerHTML = ce().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === El) return;
    El = d;
    const p = ba.querySelector('[data-phone="list"]');
    p.innerHTML = d, lo(p);
  }
  function Rd(t, e) {
    var a;
    Hn({ ...ce(), phone: t }), De(), e && ((a = ba.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Bl = () => [...ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Ph(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = ba.querySelector(".tfPhoneScreen"), s = Bl().join();
    e.classList.add("moving");
    const d = (u) => {
      const h = r.getBoundingClientRect();
      u.clientY > h.bottom - 40 ? r.scrollTop += 12 : u.clientY < h.top + 40 && (r.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((N) => {
        const B = N.getBoundingClientRect();
        return N !== e && u.clientX >= B.left && u.clientX <= B.right && u.clientY >= B.top && u.clientY <= B.bottom;
      });
      if (!x) return;
      const C = x.getBoundingClientRect(), M = x.classList.contains("tile") ? u.clientX < C.left + C.width / 2 : u.clientY < C.top + C.height / 2;
      a.insertBefore(e, M ? x : x.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const u = Bl();
      El = "", u.join() !== s ? Rd(u) : Pd();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  ba.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Ph(t, e);
  }), ba.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      jo = !1, De(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...s } = ce();
      Hn(s), De();
    }
  }), ba.addEventListener("keydown", (t) => {
    var p, u, h, x;
    if (t.key === "Escape") {
      t.stopPropagation(), jo = !1, De(), (p = Yt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (h = (u = t.target).closest) == null ? void 0 : h.call(u, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Bl(), s = r.indexOf(e), d = s + a;
    d < 0 || d >= r.length || ([r[s], r[d]] = [r[d], r[s]], Rd(r, e));
  });
  function Pl(t, e, a, r, s) {
    t.preventDefault();
    const d = Pe.drag, p = We(), u = 1 + d.lift / 100, h = [...e.parentElement.children].filter((Lt) => Lt.dataset[a]), x = h.indexOf(e), C = h.map((Lt) => Lt.getBoundingClientRect()), M = h.length - 1, N = C[x].height + (h.length > 1 ? C[1].top - C[0].bottom : 0), B = (Lt) => C[Lt].top + C[Lt].height / 2, U = t.clientY, P = C[0].top - C[x].top, V = C[M].top - C[x].top;
    let D = 0, X = 0, A = 0, j = 1, yt = x, Dt = 0;
    e.classList.add("hcListDragging"), h.forEach((Lt) => {
      Lt !== e && (Lt.style.transition = p ? "none" : "transform " + d.gap + "ms " + Re.land);
    });
    const Ht = () => {
      if (Dt = requestAnimationFrame(Ht), p) {
        X = D, e.style.transform = "translateY(" + X + "px)";
        return;
      }
      A = uc(A, D - X, d.pull / 100, d.keep / 100), X += A, j += (u - j) * 0.25;
      const Lt = Math.min(Math.abs(A) / 48, 1);
      e.style.transform = "translateY(" + X.toFixed(2) + "px) scale(" + (j * (1 - 0.063 * Lt)).toFixed(4) + "," + (j * (1 + 0.1 * Lt)).toFixed(4) + ")";
    };
    Dt = requestAnimationFrame(Ht);
    const At = (Lt) => {
      D = Math.max(P, Math.min(V, Lt.clientY - U));
      const Qt = B(x) + D, me = h.filter((fe, ye) => ye !== x && B(ye) < Qt).length;
      me !== yt && (yt = me, h.forEach((fe, ye) => {
        fe !== e && (fe.style.transform = x < yt && ye > x && ye <= yt ? "translateY(" + -N + "px)" : yt < x && ye >= yt && ye < x ? "translateY(" + N + "px)" : "");
      }));
    }, ut = () => {
      window.removeEventListener("pointermove", At), window.removeEventListener("pointerup", ut), window.removeEventListener("pointercancel", ut), cancelAnimationFrame(Dt);
      const Lt = e.getBoundingClientRect(), Qt = e.dataset[a];
      h.forEach((Fa) => {
        Fa.style.transition = "none", Fa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const me = h.map((Fa) => Fa.dataset[a]);
      me.splice(yt, 0, me.splice(x, 1)[0]), r(me);
      const fe = s(Qt) || e;
      if (requestAnimationFrame(() => h.forEach((Fa) => {
        Fa.style.transition = "";
      })), p) return;
      const ye = fe.getBoundingClientRect(), Ia = Lt.top + Lt.height / 2 - (ye.top + ye.height / 2);
      fe.classList.add("hcListLanding"), fe.animate([{ transform: "translateY(" + Ia + "px) scale(" + j + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: d.slide, easing: Re.land }).finished.then(() => {
        fe.classList.remove("hcListLanding"), fc(fe);
      }, () => fe.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", At), window.addEventListener("pointerup", ut), window.addEventListener("pointercancel", ut);
  }
  function Rh(t, e) {
    Pl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set($t());
        kl.favs = null, Wn({ favourites: a.filter((s) => r.has(s)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Dd(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Rh(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Dd(t, a, "fav", a.dataset.trayFav);
  });
  function Hh(t) {
    if (!ma || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Nn().find((Ht) => Ht.el === e);
    if (!a || Io.includes(a.key)) return;
    const r = Rn.get(a.key), { w: s } = mn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), fo();
    const d = t.clientX, p = t.clientY;
    let u = !1, h = 0;
    const x = Pe.drag, C = We();
    let M = 0, N = 0, B = 0, U = 0, P = 0, V = 0, D = C || x.stick === 0, X = 0;
    const A = (Ht, At, ut, Lt) => {
      e.style.transform = "translate(" + B.toFixed(2) + "px," + U.toFixed(2) + "px) rotate(" + Ht.toFixed(2) + "deg) rotate(" + At + "rad) scale(" + ut.toFixed(4) + "," + Lt.toFixed(4) + ") rotate(" + -At + "rad)";
    }, j = () => {
      if (X = requestAnimationFrame(j), C) {
        B = M, U = N, A(0, 0, 1, 1);
        return;
      }
      if (!D) {
        const Qt = Math.min(Math.hypot(M, N) / Math.max(1, x.stick), 1);
        B = M * 0.35, U = N * 0.35, A(0, Math.atan2(N, M), 1 + 0.155 * Qt, 1 - 0.1 * Qt);
        return;
      }
      P = uc(P, M - B, x.pull / 100, x.keep / 100), V = uc(V, N - U, x.pull / 100, x.keep / 100), B += P, U += V;
      const Ht = Math.hypot(P, V), At = Math.min(Ht / 48, 1), ut = Math.max(-5, Math.min(x.tilt, P * 0.32)), Lt = 1 + x.lift / 100;
      A(ut, Math.atan2(V, P), Lt * (1 + 0.1 * At), Lt * (1 - 0.063 * At));
    }, yt = (Ht) => {
      if (M = Ht.clientX - d, N = Ht.clientY - p, !u) {
        if (Math.hypot(M, N) < 4) return;
        u = !0, ae = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), X = requestAnimationFrame(j);
      }
      !D && Math.hypot(M, N) > x.stick && (D = !0, P = M * 0.085, V = N * 0.085), ae.col = Math.round((r.x + M) / (s + ue)), ae.row = Math.round((r.y + N - hn) / Ba), h || (h = requestAnimationFrame(() => {
        h = 0, $e();
      }));
    }, Dt = () => {
      var Ia;
      if (window.removeEventListener("pointermove", yt), window.removeEventListener("pointerup", Dt), window.removeEventListener("pointercancel", Dt), !u) return;
      const Ht = (Tr) => {
        Tr.preventDefault(), Tr.stopImmediatePropagation();
      };
      window.addEventListener("click", Ht, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Ht, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(X);
      const At = e.getBoundingClientRect(), ut = a.key;
      e.style.transition = "none", $e(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ae = null, vr(ce(), On()), $e(), Ee();
      const Lt = (Ia = Nn().find((Tr) => Tr.key === ut)) == null ? void 0 : Ia.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Lt && (Lt.style.transition = "");
      }), !Lt || C) return;
      Lt.style.transition = "none";
      const Qt = Lt.getBoundingClientRect(), me = At.left + At.width / 2 - (Qt.left + Qt.width / 2), fe = At.top + At.height / 2 - (Qt.top + Qt.height / 2);
      Lt.style.zIndex = "20", Lt.animate([{ transform: "translate(" + me + "px," + fe + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Re.land }).finished.then(() => {
        Lt.style.zIndex = "", fc(Lt);
      }, () => {
        Lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", yt), window.addEventListener("pointerup", Dt), window.addEventListener("pointercancel", Dt);
  }
  function Hd(t = !1) {
    const e = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = a;
    const s = $c.find((d) => d.id === e.dataset.graph);
    s ? Wf(e, s).then(() => {
      (t || r) && jf(e);
    }) : dp(e.dataset.graph, e).then(() => {
      t && Kc(e);
    });
  }
  function Nd() {
    var h, x, C;
    jt = Hi.model(i(), { madeUp: !v }), gr(), k = jt.states, k[(h = xt.sources) == null ? void 0 : h.grid] && (jt.grid = xt.sources.grid), k[(x = xt.sources) == null ? void 0 : x.alarm] && (jt.security.alarms = [xt.sources.alarm]), ge.forEach((M, N) => {
      const B = k[N], U = (B == null ? void 0 : B.attributes) || {};
      if (!B || Date.now() - M.at > 2 * 60 * 1e3) {
        ge.delete(N);
        return;
      }
      M.pos != null && B.state !== "opening" && B.state !== "closing" && Math.abs($a(N) - M.pos) < 1 && delete M.pos, M.tilt != null && Math.abs((U.current_tilt_position ?? -1) - M.tilt) < 1 && delete M.tilt, M.pos == null && M.tilt == null && ge.delete(N);
    });
    const t = [];
    let e = 0;
    const a = Tt();
    Bt = a.filter((M) => M.room).map((M) => M.room), Bt.some((M) => M.id === nt) || (nt = ((C = Bt[0]) == null ? void 0 : C.id) || null);
    const r = lt === "weather" ? { key: "weather", name: "Weather" } : lt && a.find((M) => M.key === lt);
    if (r || (lt = null), f.classList.toggle("tfAreaOpen", !!r), f.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), f.classList.toggle("tfDash", !r), Se = /* @__PURE__ */ new Map(), jt.rooms.forEach((M) => [...M.actions, ...M.plugs, ...M.readings, ...M.openings, ...M.solar, ...M.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => Se.set(N, M.name))), !r) return Uf(t, Zi());
    if (t.push({ key: "areahead", html: Nh(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const s = r.ids, d = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: Ln(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Jr(p, ++e) }), p == null || p.plants.forEach((M) => t.push({ key: "plant:" + M.id, html: ji(M, ++e) }));
    const u = [...s, ...((p == null ? void 0 : p.plugs) || []).filter((M) => !s.includes(M))];
    return u.length && t.push({ key: "block:" + d, order: ++e, tiles: u.map((M) => ({ key: M, html: pn(M) })) }), t;
  }
  const Nh = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + kc + '</button><div class="settingsTitle">' + W(t.name) + "</div></div>";
  let Od = 0, Id = null;
  const Fd = (t) => t === "weather" ? no.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function qd(t) {
    var e, a;
    lt || (Od = mi().scrollTop, Id = ((e = Fd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), lt = t, t.startsWith("room:") && (nt = t.slice(5)), Na(), mi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let hi = null;
  function Oh(t, e) {
    if (hi == null || hi(), e == null) return;
    const a = mi(), r = performance.now() + 1500, s = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const p = () => {
      cancelAnimationFrame(d), s.forEach((h) => window.removeEventListener(h, p, !0)), hi = null;
    }, u = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const x = h.getBoundingClientRect().top - e;
        Math.abs(x) > 0.5 && (a.scrollTop += x);
      }
      performance.now() < r ? d = requestAnimationFrame(u) : p();
    };
    s.forEach((h) => window.addEventListener(h, p, { capture: !0, passive: !0 })), hi = p, u();
  }
  function Rl() {
    var a;
    const t = lt;
    lt = null, Na(), mi().scrollTop = Od, Oh(() => Fd(t), Id);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? no.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Ih = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + W(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Vd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function mi() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Wd(t) {
    const e = mi(), a = (u) => {
      const h = u.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, r = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), s = r == null ? void 0 : r.dataset.k, d = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const p = r != null && r.isConnected ? r : s && S.querySelector('[data-k="' + CSS.escape(s) + '"]');
    p != null && p.isConnected && d != null && (e.scrollTop += p.getBoundingClientRect().top - d);
  }
  function Na() {
    if (!g || !S) return;
    const t = Nd(), e = (s) => {
      var d;
      return (((d = s.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + s.dataset.iconFor + "|" + (s.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((s) => {
      s.firstElementChild && (a.get(e(s)) || a.set(e(s), []).get(e(s))).push(s.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((s) => s.remove()), ya.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((s) => s.tiles ? Ih(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => ya.set(d.key, d.html)) : ya.set(s.key, s.html)), Ri = Vd(t), r.querySelectorAll("[data-icon-for]").forEach((s) => {
      var p;
      const d = !s.firstElementChild && ((p = a.get(e(s))) == null ? void 0 : p.shift());
      d && s.appendChild(d);
    }), S.append(...r.children), Wr(t.weather), Co(), ul.disconnect(), $e(), lo(S), Gl(S), Bn(S), et(), pp(), Ar(), ap(), tp(), requestAnimationFrame(kt);
  }
  const jd = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Hl = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Nl(t, e) {
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
    return [...t.children].forEach((p, u) => Nl(p, d[u])), t;
  }
  function zd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = jd(t), s = Nl(t, a.firstElementChild);
    lo(s), Gl(s), Bn(s), Hl(s, r);
  }
  function Ee() {
    !g || !S || ae || Wd(Fh);
  }
  function Fh() {
    if (La = !1, !S.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = Nd();
    if (Vd(t) !== Ri) {
      Na();
      return;
    }
    const e = (a) => So().some((r) => {
      const s = r.slice(r.indexOf("|") + 1);
      return a === s || a.endsWith(":" + s);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (ya.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && nn) {
        La = !0;
        return;
      }
      const s = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      s && (ya.set(r.key, r.html), zd(s, r.html), r.key.startsWith("energy:") && pp());
    })), Ar(), ap(), tp(), c(), et(), Le == null || Le.update(), Te == null || Te.forEach((a) => a.update()), f.classList.contains("tfDash") && Qi(), requestAnimationFrame(kt);
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
  }, qh = (t) => eo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Vh(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + W(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((s) => uo(s, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const St = document.createElement("div");
  St.className = "tfMoreBackdrop", St.hidden = !0, f.appendChild(St);
  const Qa = document.createElement("div");
  Qa.className = "tfMoreBackdrop tfMoreUnder", Qa.hidden = !0, f.insertBefore(Qa, St);
  const Ol = (t, e) => {
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
    var s, d;
    if (!gi || t.touches.length > 1 || (d = (s = t.target).closest) != null && d.call(s, "input,textarea,select")) return;
    const e = t.touches[0], a = gi.x - e.clientX, r = gi.y - e.clientY;
    gi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Ol(t.target, r) && t.preventDefault();
  }, { passive: !1 }), St.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Ol(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Wh = () => window.innerWidth <= 620;
  let Ue = null;
  St.addEventListener("pointerdown", (t) => {
    const e = St.querySelector(".tfMorePair");
    !Wh() || !e || !e.contains(t.target) || !t.isPrimary || St._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (Ue = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), St.addEventListener("pointermove", (t) => {
    if (!Ue || !t.isPrimary) return;
    const e = t.clientY - Ue.y, a = performance.now();
    if (!Ue.on) {
      if (Math.abs(t.clientX - Ue.x) > 8 || e < -8 || !Ue.grab && Ol(Ue.from, -1)) {
        Ue = null;
        return;
      }
      if (e < 8) return;
      Ue.on = !0;
      try {
        St.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Ue.v = (e - Ue.dy) / Math.max(1, a - Ue.t), Ue.dy = e, Ue.t = a, Ue.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Gd = (t) => {
    if (!Ue || !t.isPrimary) return;
    const e = Ue;
    if (Ue = null, !e.on) return;
    const a = (x) => {
      x.preventDefault(), x.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), s = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || We()) {
      r ? Xl() : e.pair.animate([{ transform: s }, { transform: "none" }], { duration: 320, easing: Re.spring });
      return;
    }
    const d = I;
    St._closing = !0, St.style.pointerEvents = "none", St.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Re.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: s }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Re.exit, fill: "forwards" });
    let u = !1;
    const h = () => {
      u || (u = !0, St._closing = !1, St.style.pointerEvents = "", St.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), I === d && Xl());
    };
    p.finished.then(h, h), setTimeout(h, 300);
  };
  St.addEventListener("pointerup", Gd), St.addEventListener("pointercancel", Gd);
  function Il() {
    const t = St.querySelector(".tfMorePair"), e = St.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Il, { passive: !0 }), g && Vr();
  let mo = [];
  const jh = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function zh(t) {
    const e = (P, V = "") => '<div class="tfMoreHead">' + (I != null && I.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + W(P) + "</div>" + V + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Mc + "</button></div>", a = (P, V) => '<div class="tfMoreNow"><div class="tfMoreState">' + W(P) + "</div></div>", r = Vh;
    if (t === "favourites") {
      const P = $t(), V = new Set(P), D = [{ name: "Starred", ids: P }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((X) => ({ name: X.name, ids: [...X.actions, ...X.plugs] }))].map((X, A) => A ? { ...X, ids: X.ids.filter((j) => !V.has(j)) } : X).filter((X) => X.ids.length);
      return [e("Favourites"), a(P.length ? P.length + " starred" : "None starred"), r(D, { star: !0 }, !0)];
    }
    const s = (P, { name: V = "", alert: D = !1, plain: X = !1 } = {}) => {
      const A = X ? [] : P.filter((Dt) => Rr.includes(Dt.split(".")[0])), j = P.filter((Dt) => !A.includes(Dt)), yt = (Dt) => Dt.startsWith("vacuum.") && Ut(Dt).battery_level != null ? Ut(Dt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (V ? '<div class="tfMoreGroupName">' + W(V) + "</div>" : "") + '<div class="tfMoreActions">' + A.map((Dt) => pn(Dt, !0)).join("") + j.map((Dt) => uo(Dt, { plain: X, alert: D, say: X ? yt(Dt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const P = Zi().find((A) => A.key === t.slice(8));
      if (!P) return null;
      const V = P.key === "light" ? (P.groups || []).flatMap((A) => A.ids) : [], D = V.some((A) => {
        var j;
        return ((j = k[A]) == null ? void 0 : j.state) === "on";
      }), X = V.length ? '<button class="primary" type="button" data-acts="' + pr(V.map((A) => ["light", D ? "turn_off" : "turn_on", A])) + '">' + (D ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(P.name), '<div class="tfMoreNowRow">' + a(P.value) + X + "</div>", ...(P.groups || []).map((A) => s(A.ids, { name: A.name === P.name ? "" : A.name, alert: A.alert, plain: P.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, P, V] = t.split(":"), D = jt.rooms.find((j) => j.id === P), X = D && R(D).find((j) => j.key === V);
      if (!X) return null;
      const A = X.acts ? '<button class="primary" type="button" data-acts="' + pr(X.acts) + '">' + (X.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(D.name + " " + X.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(X.value) + A + "</div>", s(q(D, V))];
    }
    const d = t.split(".")[0];
    k[t];
    const p = Rr.includes(d) || Ci.includes(d) ? w(t) : Fl(t), u = nm(t), h = [...u ? u.pages.map((P) => ({ name: P.name, svg: P.svg, tabs: P.tabs, html: P.space + '<div class="tfMoreCtl"' + To(t).replace(" data-light", "") + ">" + P.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: da, ...Cr(t) ? { tabs: Xd() } : {}, html: Yh(t) + (Cr(t) ? Zd(t) : "") + (d === "plant" ? pm(t).join("") : "") + p.sections.filter(Boolean).join("") }], { name: "Info", svg: Cc, html: sm(t) }];
    I && I.page == null && (I.page = 0), I && (I.pages = h.length);
    const x = (I == null ? void 0 : I.page) || 0, C = (I == null ? void 0 : I.mode) || "", M = h.length - 1, N = !!(u != null && u.infoButton), B = h.flatMap((P, V) => (N && V === M ? [] : P.tabs || [{ name: P.name, svg: P.svg }]).map((D) => ({ ...D, page: V }))), U = (P) => P.page === x && (P.mode == null || P.mode === C);
    return [
      $h(t, p),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (C && x === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + h.map((P) => '<section class="tfMorePage" aria-label="' + P.name + '" data-mode="' + C + '">' + P.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (N ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (B.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (N ? "Views" : "Pages") + '">' + B.map((P) => '<button type="button" role="tab" aria-selected="' + U(P) + '" aria-label="' + P.name + '" title="' + P.name + '" data-more-page="' + P.page + '"' + (P.mode != null ? ' data-more-mode="' + P.mode + '"' : "") + (U(P) ? "" : ' tabindex="-1"') + ">" + P.svg + "</button>").join("") + "</div>" : "") + (N ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (x === M) + '" data-more-page="' + M + '" data-more-toggle>' + Cc + "</button></div>" : "")
    ];
  }
  const Gh = (t, e) => {
    const a = t.split(".")[0], r = k[t], s = r.attributes;
    if (a === "light") return Oe(t);
    const d = a === "climate" ? zt(s.hvac_action || r.state) : a === "humidifier" ? zt(s.action || r.state) : a === "water_heater" ? zt(s.operation_mode || r.state) : a === "fan" && r.state === "on" && s.percentage != null ? s.percentage + "%" : (a === "valve" || a === "cover") && s.current_position != null && r.state !== "closed" ? s.current_position + "%" : Oe(t);
    return [e, d].filter(Boolean).join(" · ");
  };
  function $h(t, e, a) {
    var p, u, h, x, C;
    const r = (p = jt.areaOf) == null ? void 0 : p.call(jt, t), s = r && (((u = jt.rooms.find((M) => M.id === r)) == null ? void 0 : u.name) || ((C = (x = (h = i()) == null ? void 0 : h.areas) == null ? void 0 : x[r]) == null ? void 0 : C.name)) || "", d = e.button ? xa(t, e) : '<div class="tfIcon"' + we(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + To(t) + ">" + (I != null && I.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Mu + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + W(vt(t)) + '</span><span class="activityRowMeta">' + W(Gh(t, s)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Mc + "</button></div>";
  }
  const Uh = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Fl(t) {
    var s;
    const e = t.split(".")[0], a = ((s = k[t]) == null ? void 0 : s.state) === "on", r = Ci.includes(e) ? { act: Rt(e, "toggle", t), label: "Turn " + vt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Rt(e, "turn_on", t), label: "Run " + vt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ea(t) };
  }
  function Yh(t) {
    const e = t.split(".")[0];
    if (Uh.includes(e) || e === "light" && !mr(t)) {
      const s = Rr.includes(e) ? w(t) : Fl(t);
      return s != null && s.button ? '<div class="tfMoreSpace tfMoreSwitch' + (s.on ? " on" : "") + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + To(t) + ">" + xa(t, s) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + W(t) + '"></div></div>';
    if (e === "light" && mr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>';
    const { big: a, lines: r } = im(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (m("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + W(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + W(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([s, d]) => '<div class="tfMoreFact"><span>' + W(s) + "</span><span>" + W(d) + "</span></div>").join("") + "</div></div>";
  }
  const Zh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Kh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Xh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], go = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + W(t) + "</div>" + e + "</div>", Oa = (t, e) => ze("tfSeg", t, e), ql = (t, e, a, r, s, d) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + W(s) + '" data-drag="' + W(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + W(s) + "</output></i>" + (d ? '<span class="tfBarIcon"' + we("", d, r) + "></span>" : "") + "</div>", _r = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + To(t) + ">" + xa(t, e) + "</div>", Vl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + W(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + W(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, s]) => '<div class="tfMoreFact"><span>' + W(r) + "</span><span>" + W(s) + "</span></div>").join("") + "</div></div>", $d = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + W((I == null ? void 0 : I.code) || "") + '">', ss = (t, e, a, r, s) => ({ label: r, pressed: s, html: null, coded: [t, e, a].join("|") }), Ud = (t, e) => '<div class="tfSeg" role="group" aria-label="' + W(t) + '">' + e.map((a) => '<button type="button" data-coded="' + W(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + W(a.label) + "</button>").join("") + "</div>", Yd = (t, e, a) => Oa(vt(t), [{ label: "Off", act: Rt(e, "turn_off", t), pressed: !a }, { label: "On", act: Rt(e, "turn_on", t), pressed: a }]), gn = /* @__PURE__ */ new Map(), Jh = [0, 33, 67, 100], Qh = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function Cr(t) {
    if (!L || !k[t]) return null;
    const e = t.split(".")[0], a = k[t].attributes, r = O === "rocker" ? "rocker" : "toggle";
    return e === "light" ? or(t).some((s) => s !== "onoff") ? "fader" : r : e === "climate" ? Number.isFinite(Number(a.temperature)) ? "dial" : null : e === "fan" ? a.percentage != null ? "rotary" : r : ["switch", "input_boolean", "lock", "automation", "siren"].includes(e) ? r : e === "cover" ? a.current_position == null ? r : null : e === "valve" ? "guarded" : e === "scene" || e === "script" || e === "button" ? "push" : null;
  }
  const Zd = (t) => '<div class="tfMoreSpace tfPhys" data-phys="' + W(t) + '"></div>', Wl = (t) => {
    const e = t.split(".")[0], a = k[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Kd = (t, e, a) => (t === "lock" ? la("lock", a ? "lock" : "unlock", e) : t === "cover" ? la("cover", a ? "open_cover" : "close_cover", e) : la(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), tm = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], em = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', Xd = (t) => [{ name: "Physical", svg: em, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: da, mode: "" }]], am = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function bi(t, e) {
    const a = k[t], r = a.attributes, s = a.state === "on";
    return e === "fader" ? [s ? ro(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [s ? am(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [Wl(t)];
  }
  function om(t, e) {
    const a = document.createElement("div");
    a.className = "tfMoreSpace tfPhys";
    const r = t.split(".")[0], s = k[t].attributes, d = { id: t, kind: e, el: a, quiet: 0, timer: 0 }, p = (C, M = 260) => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timer), d.timer = setTimeout(C, M);
    }, u = { camera: _, fill: E === "fill", label: vt(t) };
    if (e === "push" && (d.ctl = new fg(a, { ...u, onChange: () => la(r, r === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new fu(a, { ...u, on: Wl(t), onChange: (C) => p(() => Kd(r, t, C), 0) })), e === "toggle" && (d.ctl = new gu(a, { ...u, on: Wl(t), labels: tm(r), onChange: (C) => p(() => Kd(r, t, C), 0) })), e === "fader" && (d.ctl = new hu(a, { ...u, value: bi(t, e)[0], onChange: (C) => p(() => (Math.round(C * 100) ? la("light", "turn_on", t, { brightness_pct: Math.round(C * 100) }) : la("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [C, M] = bi(t, e), N = Number(s.min_temp), B = Number(s.max_temp);
      d.ctl = new mu(a, { ...u, value: C, now: M ?? C, min: Number.isFinite(N) ? N : 7, max: Number.isFinite(B) ? B : 35, onChange: (U) => p(() => la("climate", "set_temperature", t, { temperature: U }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new hg(a, { ...u, positions: Qh, index: bi(t, e)[0], onChange: (C) => p(() => (C ? la("fan", "set_percentage", t, { percentage: Jh[C] }) : la("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new mg(a, { ...u, on: bi(t, e)[0], onChange: (C) => p(() => la("valve", C ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) }));
    const h = "phys|" + t;
    a.addEventListener("pointerdown", () => {
      ne.add(h), fa(h);
    });
    const x = () => {
      ne.has(h) && (ne.delete(h), La && Ee());
    };
    return a.addEventListener("pointerup", x), a.addEventListener("pointercancel", x), d;
  }
  function Jd(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = Cr(a);
      if (!r) {
        e.remove();
        return;
      }
      let s = gn.get(a);
      (!s || s.kind !== r) && (s = om(a, r), gn.set(a, s)), e.replaceWith(s.el), Qd(s);
    });
  }
  function Qd(t) {
    !k[t.id] || performance.now() < t.quiet || t.ctl.show(...bi(t.id, t.kind));
  }
  const tp = () => {
    gn.forEach((t, e) => {
      t.el.isConnected ? Qd(t) : gn.delete(e);
    });
  };
  function nm(t) {
    const e = rm(t);
    return e && Cr(t) && (e.pages[0].space += Zd(t), e.pages[0].tabs = Xd(e.pages[0].tabs)), e;
  }
  function rm(t) {
    var d, p, u;
    const e = t.split(".")[0], a = k[t], r = a.attributes;
    if (!Xh.includes(e)) return null;
    const s = Rr.includes(e) || Ci.includes(e) ? w(t) : Fl(t);
    if (e === "light") {
      const h = a.state === "on", x = or(t), [C, M] = sr(t), N = m("bright", t, h ? ro(a) : 0), B = m("ctf", t, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), U = m("huev", t, h && sn.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), P = x.includes("color_temp"), V = x.some((Qt) => sn.includes(Qt)), D = mr(t), X = (Qt, me, fe, ye) => '<div class="tfBar tfVBar ' + Qt + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + W(vt(t) + " " + me.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(fe) + '" data-drag="' + Qt + "|" + W(t) + '">' + ye + "</div>", A = (Qt, me, fe = "") => '<div class="tfVCol' + fe + '">' + me + "</div>", j = A("Brightness", X("bright", "Brightness", N, '<i style="height:' + N + '%"></i><span class="tfBarIcon"' + we("", "mdi:white-balance-sunny", "Brightness") + "></span>")), yt = B == null ? null : (M - B) / (M - C), Dt = P ? A("Warmth", X("ctf", "Warmth", yt == null ? 0 : yt * 100, yt == null ? "" : '<b style="top:' + Math.round((1 - yt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Ht = V ? A("Colour", X("huev", "Colour", U == null ? 0 : (1 - U / 360) * 100, U == null ? "" : '<b style="top:' + Math.round(U / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", At = '<div class="tfVCols">' + j + (Dt || Ht ? '<div class="tfVSwap">' + Dt + Ht + "</div>" : "") + "</div>", ut = D ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>' : "", Lt = [V && { name: "Colour", svg: Zh, mode: "colour" }, D && { name: "Dual Axis Controller", svg: Kh, mode: "dac" }, { name: "Sliders", svg: da, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfLightSpace">' + At + ut + "</div>", rows: [], tabs: Lt.length > 1 ? Lt : [] }] };
    }
    if (e === "climate") {
      const h = r.target_temp_step || 0.5, x = Number(r.temperature), C = Number(r.target_temp_low), M = Number(r.target_temp_high), N = (V) => Rt("climate", "set_temperature", t, V), B = (V, D, X, A, j) => (D == null ? void 0 : D.length) && go(V, Oa(V, D.map((yt) => ({ label: zt(yt), act: Rt("climate", A, t, { [j]: yt }), pressed: (X === "state" ? a.state : r[X]) === yt })))), U = Number.isFinite(C) && Number.isFinite(M) && go("Range", '<div class="tfMoreRange">' + ha("Low", Fe(C) + " °C", N({ target_temp_low: C - h, target_temp_high: M }), N({ target_temp_low: C + h, target_temp_high: M })) + ha("High", Fe(M) + " °C", N({ target_temp_low: C, target_temp_high: M - h }), N({ target_temp_low: C, target_temp_high: M + h })) + "</div>"), P = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: da,
        space: Vl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(x) ? Fe(x) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ha("Target temperature", Fe(x) + " °C", N({ temperature: x - h }), N({ temperature: x + h })),
          U,
          B("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          B("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          B("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          B("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(P) && r.min_humidity != null && go("Humidity", ha("Target humidity", P + "%", Rt("climate", "set_humidity", t, { humidity: P - 1 }), Rt("climate", "set_humidity", t, { humidity: P + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const h = a.state === "on", x = m("fan", t, h && Number(r.percentage) || 0), C = r.percentage != null;
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: C ? [
        ql("fan", t, x, vt(t) + " speed", x + "%", "mdi:fan"),
        r.oscillating != null && go("Oscillate", Oa("Oscillate", [{ label: "Off", act: Rt("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Rt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && go("Direction", Oa("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([M, N]) => ({ label: N, act: Rt("fan", "set_direction", t, { direction: M }), pressed: r.direction === M })))),
        ((d = r.preset_modes) == null ? void 0 : d.length) && go("Preset", Oa("Preset", r.preset_modes.map((M) => ({ label: zt(M), act: Rt("fan", "set_preset_mode", t, { preset_mode: M }), pressed: r.preset_mode === M }))))
      ] : [Yd(t, "fan", h)] }] };
    }
    if (e === "humidifier") {
      const h = Number(r.humidity);
      return { pages: [{ name: "Control", svg: da, space: Vl(String(r.current_humidity), "%", [["Target", Number.isFinite(h) ? h + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(h) && ha("Target humidity", h + "%", Rt("humidifier", "set_humidity", t, { humidity: h - 1 }), Rt("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((p = r.available_modes) == null ? void 0 : p.length) && go("Mode", Oa("Mode", r.available_modes.map((x) => ({ label: zt(x), act: Rt("humidifier", "set_mode", t, { mode: x }), pressed: r.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const h = Number(r.temperature), x = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: da, space: Vl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(h) ? String(h).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(h) && ha("Target temperature", h + " °C", Rt("water_heater", "set_temperature", t, { temperature: h - x }), Rt("water_heater", "set_temperature", t, { temperature: h + x })),
        ((u = r.operation_list) == null ? void 0 : u.length) && go("Mode", Oa("Mode", r.operation_list.map((C) => ({ label: zt(C), act: Rt("water_heater", "set_operation_mode", t, { operation_mode: C }), pressed: (r.operation_mode || a.state) === C })))),
        r.away_mode != null && go("Away", Oa("Away", [{ label: "Off", act: Rt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Rt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const h = [...qu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , M]) => !M || be(t, M)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], C = '<div class="tfMoreSpace tfMoreKeypad">' + $d() + '<div class="tfKeypad">' + x.map((M) => '<button type="button" data-key="' + M + '"' + (M === "back" ? ' aria-label="Delete"' : "") + ">" + (M === "clear" ? "Clear" : M === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : M) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: da, space: C, rows: [Ud(vt(t), h.map(([M, N, B]) => ss("alarm_control_panel", B, t, N, a.state === M)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [Oa(vt(t), [{ label: "Open", act: Rt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Rt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const h = a.state === "opening" || a.state === "closing", x = An(t), C = Ur(t);
      return { pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + W(t) + '"></div></div>', rows: [
        be(t, Sc) && ei(t, x),
        C != null && go("Tilt", ql("tiltp", t, m("tiltp", t, C), vt(t) + " tilt", Math.round(m("tiltp", t, C)) + "%")),
        Oa(vt(t), [be(t, Tu) && { label: "Open", act: Rt("cover", "open_cover", t), disabled: x >= 100 && !h }, be(t, Eu) && { label: "Stop", act: Rt("cover", "stop_cover", t) }, be(t, Du) && { label: "Close", act: Rt("cover", "close_cover", t), disabled: x <= 0 && !h }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [
        $d(),
        Ud(vt(t), [ss("lock", "lock", t, "Lock", a.state === "locked"), ss("lock", "unlock", t, "Unlock", a.state === "unlocked"), be(t, Fu) && ss("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const h = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [Oa(vt(t), [{ label: "Open", act: Rt("valve", "open_valve", t), pressed: h }, { label: "Close", act: Rt("valve", "close_valve", t), pressed: !h }])] }] };
      const x = m("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [
        ql("valve", t, x, vt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Oa(vt(t), [{ label: "Open", act: Rt("valve", "open_valve", t) }, be(t, 8) && { label: "Stop", act: Rt("valve", "stop_valve", t) }, { label: "Close", act: Rt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: da, space: _r(t, s), rows: [Yd(t, e, a.state === "on")] }] };
  }
  function im(t) {
    var C;
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = (((C = Sr[r]) == null ? void 0 : C.call(Sr, a)) || []).filter(([, M]) => M != null && M !== ""), d = (M) => {
      const N = s.findIndex(([B]) => B === M);
      return N < 0 ? null : s.splice(N, 1)[0][1];
    }, p = (M) => {
      const N = String(M).match(/^(-?[\d.,]+)\s*(.*)$/);
      return N ? [N[1], N[2]] : [String(M), ""];
    }, u = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    r === "light" ? (d("Brightness"), h = e.state === "on" && Do(t) ? [String(ro(e)), "%"] : u()) : r === "climate" ? h = p(d("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (d("Position"), h = a.current_position != null ? [String($a(t)), "%"] : u()) : r === "humidifier" ? h = p(d("Current humidity") || e.state) : r === "vacuum" ? h = p(d("Battery") || e.state) : r === "plant" ? h = p(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? h = u() : h = p(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = s.length ? s.slice(0, 4) : [["State", Oe(t)]];
    return { big: h, lines: x };
  }
  function sm(t) {
    var x, C, M, N, B, U, P;
    const e = k[t], a = i(), r = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], s = r != null && r.device_id ? (C = a == null ? void 0 : a.devices) == null ? void 0 : C[r.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + W(t) + '" role="img" aria-label="' + W(vt(t)) + ', last 24 hours"></svg></div>', p = (M = jt.areaOf) == null ? void 0 : M.call(jt, t), u = p && (((N = jt.rooms.find((V) => V.id === p)) == null ? void 0 : N.name) || ((U = (B = a == null ? void 0 : a.areas) == null ? void 0 : B[p]) == null ? void 0 : U.name)) || "", h = [
      ...((P = Sr[t.split(".")[0]]) == null ? void 0 : P.call(Sr, Ut(t))) || [],
      ["Changed", e.last_changed && $s(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", s && (s.name_by_user || s.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, V]) => V != null && V !== "");
    return d + '<div class="tfMoreRows">' + h.map(([V, D]) => '<div class="tfMoreRow"><span>' + W(V) + "</span><span>" + W(D) + "</span></div>").join("") + "</div>" + qh(t) + (s ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + W(r.device_id) + '"><span>Device page</span>' + Ac + "</button>" : "");
  }
  const lm = () => "";
  let jl = "";
  function zl(t) {
    var e;
    I && (I.details = t, Ar(), (e = St.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ls = (t) => {
    const e = k[t], a = $a(t), r = An(t);
    return { kind: yc(e), name: vt(t), text: Oe(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Ur(t) ?? 100, canSet: be(t, Sc) };
  };
  function Gl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, r = e.dataset.artKey || "more:" + a;
      let s = Ze.get(r);
      s || (s = ng({ onMove: (d) => wi(a, d), onSet: (d) => {
        wi(a, d), vi("pos", a);
      } }), s.coverId = a, Ze.set(r, s)), e.replaceWith(s.el), s.update(ls(a));
    });
  }
  const ep = (t) => [...Ze.values()].filter((e) => e.coverId === t), $l = () => Ze.forEach((t) => {
    k[t.coverId] && t.update(ls(t.coverId));
  }), ap = () => {
    Ze.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ze.delete(e));
    }), $l();
  };
  function Ar() {
    var d, p;
    if (!I || !(jh(I.id) || k[I.id])) {
      St.hidden = !0;
      return;
    }
    if (So().some((u) => u.endsWith("|" + I.id))) {
      La = !0, $l();
      return;
    }
    const t = zh(I.id), e = St.querySelector(".tfMore");
    if (!t) {
      ps();
      return;
    }
    const a = jd(St), r = lm(I.id), s = I.frame ? I.frame.wide : I.id.startsWith("summary:") || I.id.startsWith("group:");
    if (St.hidden || !e || t.length !== mo.length || e.classList.contains("wide") !== s) {
      const u = Zl ? I.scroll || 0 : !St.hidden && e ? e.scrollTop : 0;
      if (St.innerHTML = '<div class="tfMorePair' + (St.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (s ? " wide" : "") + '"' + (I.frame ? ' style="height:' + I.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", jl = r, St.classList.toggle("wide", s), St.hidden = !1, Il(), Gl(St), Jd(St), Bn(St), lo(St), St.querySelectorAll("[data-day]").forEach((h) => lp(h.dataset.day, h, I.at)), rp(St), u && (St.querySelector(".tfMore").scrollTop = u), op(), Hl(St, a), !St.contains(o.activeElement)) {
        const h = St.querySelector("[data-more-close]");
        (d = h != null && h.offsetParent ? h : St.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, h) => {
        var N, B;
        if (u === mo[h] || u.includes("data-cover-art") || e.children[h].contains((B = (N = o.activeElement) == null ? void 0 : N.matches) != null && B.call(N, "input,select") ? o.activeElement : null)) return;
        if (So().some((U) => e.children[h].querySelector('[data-drag="' + CSS.escape(U) + '"]'))) {
          La = !0;
          return;
        }
        const x = document.createElement("div");
        x.innerHTML = u;
        const C = [...e.children[h].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((U) => U.scrollTop), M = Nl(e.children[h], x.firstElementChild);
        M.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((U, P) => {
          C[P] && (U.scrollTop = C[P]);
        }), lo(M), rp(M), Jd(M), Bn(M);
      }), r !== jl) {
        const u = St.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = r), jl = r;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || lp(u.dataset.day, u, I.at);
      }), op(), St.contains(o.activeElement) || Hl(St, a);
    }
    (p = St.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(I.details && r)), mo = t, $l();
  }
  function op() {
    const t = St.querySelector("[data-more-pages]");
    !t || !I || (t.scrollTo({ left: (I.page || 0) * t.clientWidth, behavior: "instant" }), Yl(), Ul(t));
  }
  function Ul(t) {
    const e = t.children[(I == null ? void 0 : I.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Yl() {
    var e;
    const t = (I == null ? void 0 : I.page) || 0;
    St.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (I.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = St.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!I.mode && t === 0);
  }
  function cm(t, e) {
    var r, s;
    const a = St.querySelector("[data-more-pages]");
    !a || !I || (I.page = Math.max(0, Math.min((I.pages || 2) - 1, t)), a.scrollTo({ left: I.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Yl(), Ul(a), e && ((s = St.querySelector('.tfMoreDots [aria-selected="true"]')) == null || s.focus({ preventScroll: !0 })));
  }
  function cs(t, e, a) {
    I && (e != null && e !== (I.mode || "") && (I.mode = e, St.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), cm(t, a));
  }
  let Lr = null;
  St.addEventListener("touchstart", (t) => {
    var a, r, s, d;
    const e = t.touches[0];
    Lr = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((d = (s = t.target).closest) != null && d.call(s, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), St.addEventListener("touchend", (t) => {
    if (!Lr || !I || (I.page || 0) !== 0 || !St.querySelector("[data-more-mode]")) {
      Lr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Lr.x, r = e.clientY - Lr.y;
    if (Lr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const s = [...St.querySelectorAll(".tfMoreDots [data-more-mode]")].map((p) => p.dataset.moreMode), d = s.indexOf(I.mode || "");
    a > 0 && d > 0 ? cs(0, s[d - 1]) : a < 0 && I.mode && d < s.length - 1 && cs(0, s[d + 1]);
  }, { passive: !0 });
  let np = 0;
  St.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !I || (clearTimeout(np), np = setTimeout(() => {
      if (!I) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (I.page || 0) && (I.page = r, Yl(), Ul(e));
    }, 80));
  }, !0), St.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && I && (I.code = t.target.value);
  }), St.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!I || !(e || a)) return;
    const r = St.querySelector("[data-code]");
    if (e) {
      const h = e.dataset.key, x = I.code || "";
      I.code = h === "clear" ? "" : h === "back" ? x.slice(0, -1) : (x + h).slice(0, 12), r && (r.value = I.code);
      return;
    }
    const [s, d, p] = a.dataset.coded.split("|"), u = I.code;
    I.code = "", r && (r.value = ""), la(s, d, p, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    I && Ar();
  }, 15 * 1e3);
  function ds(t, e) {
    var s, d;
    const a = !!(I && e && St.contains(e)), r = a && St.querySelector(".tfMore");
    if (a && (I.scroll = r.scrollTop), a && !I.under) {
      const p = St.querySelector(".tfMorePair"), u = { more: I, parts: mo, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Qa.innerHTML = "", Qa.appendChild(p), Qa.classList.toggle("wide", St.classList.contains("wide")), Qa.hidden = !1, St.hidden = !0, St.innerHTML = "", I = { id: t, opener: e, back: null, frame: null, under: u, at: Number((s = e == null ? void 0 : e.dataset) == null ? void 0 : s.at) || null, mode: Cr(t) ? "phys" : "" }, Kl();
      return;
    }
    I = { id: t, opener: a ? I.opener : e, back: a ? I : null, frame: a ? I.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? I.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null, mode: Cr(t) ? "phys" : "" }, Kl();
  }
  let Zl = !1;
  function Kl() {
    mo = [], Zl = !St.hidden, Ze.forEach((t, e) => {
      e !== I.id && St.contains(t.el) && (t.destroy(), Ze.delete(e));
    }), Ar(), Zl = !1;
  }
  function ps() {
    if (!I) return;
    const t = I;
    j0(St, () => {
      I === t && Xl();
    });
  }
  function Xl() {
    var r, s, d, p, u, h, x, C;
    const t = I == null ? void 0 : I.opener, e = I == null ? void 0 : I.under;
    I = null, Ze.forEach((M, N) => {
      St.contains(M.el) && (M.destroy(), Ze.delete(N));
    }), Je.forEach((M, N) => {
      /^more2?:/.test(N) && Je.delete(N);
    }), St.hidden = !0, St.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const M = Qa.firstElementChild;
      I = e.more, mo = e.parts, M && (M.inert = !1, St.appendChild(M)), St.classList.toggle("wide", Qa.classList.contains("wide")), Qa.hidden = !0, Qa.innerHTML = "", St.hidden = !1;
      const N = St.querySelector(".tfMore");
      N && (N.scrollTop = I.scroll || 0), Ar(), (s = (r = e.opener) != null && r.isConnected ? e.opener : St.querySelector("[data-more-close]")) == null || s.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (p = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((C = S.querySelector("[data-favs-edit]")) == null || C.focus(a));
  }
  const dm = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function pm(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, s]) => {
      const d = dm[r], p = a + d;
      if (!d || !k[p] || !Zn[d]) return "";
      const u = Ut(p).unit_of_measurement || "", [h, x] = Zn[d], C = s === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + W(vt(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + W(p) + '" data-guide="' + (C ? h : x) + '" data-guide-word="' + W("Wants " + (C ? "" : "up to ") + (C ? h : x).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (C ? " or more" : "")) + '" role="img" aria-label="' + W(vt(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const rp = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => dp(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Kc(e)));
  function Jl(t, e, a, r = {}) {
    const s = e.map((V) => V[1]).concat(r.guide != null ? [r.guide] : []), d = r.zero ? 0 : Math.min(...s), p = Math.max(...s), u = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), x = 8, C = h - 20, M = Date.now() - 24 * 3600 * 1e3, N = 24 * 3600 * 1e3, B = (V) => Math.max(0, Math.min(u, (V - M) / N * u)), U = (V) => p === d ? (x + C) / 2 : C - (V - d) / (p - d) * (C - x);
    let P = "M" + B(e[0][0]).toFixed(1) + " " + U(e[0][1]).toFixed(1);
    if (e.length > 2) P = sf(e.map((V) => [B(V[0]), U(V[1])]));
    else for (let V = 1; V < e.length; V++) P += r.smooth ? "L" + B(e[V][0]).toFixed(1) + " " + U(e[V][1]).toFixed(1) : "H" + B(e[V][0]).toFixed(1) + "V" + U(e[V][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + h), t.setAttribute("aria-label", a), t.innerHTML = lf(u, x, C) + '<path d="' + P + "V" + C + "H" + B(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + P + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Pe.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + u + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + U(r.guide).toFixed(1) + '" y2="' + U(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (U(r.guide) < 20 ? U(r.guide) + 14 : U(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + W(r.guideWord || "") + "</text>" : "");
  }
  const ip = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, um = (t, e) => {
    const a = t.split(".")[0];
    return ip[a] ? ip[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, fm = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ls.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, sp = /* @__PURE__ */ new Map();
  let hm = 0;
  async function mm(t) {
    var s;
    let e = sp.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (eo(t) && Number.isFinite(Number((s = k[t]) == null ? void 0 : s.state))) d = cp(t).map(([p, u]) => [p, String(u)]);
      else try {
        const p = await K({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((p == null ? void 0 : p[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      d.length || (d = (si || []).filter((p) => p.entity_id === t).map((p) => [p.when * 1e3, String(p.state)])), e = { at: Date.now(), pts: d }, sp.set(t, e);
    }
    const a = k[t], r = e.pts.slice().sort((d, p) => d[0] - p[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function lp(t, e, a) {
    const r = await mm(t);
    if (!e.isConnected) return;
    const s = r.map(([A, j]) => [A, Number(j)]);
    if (r.length > 1 && s.every(([, A]) => Number.isFinite(A))) {
      Jl(e, s, vt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), p = d - 864e5, u = Math.max(200, e.clientWidth || 360), h = 62, x = (A) => Math.max(0, Math.min(u, (A - p) / 864e5 * u)), C = [];
    let M = null;
    r.forEach(([A, j]) => {
      const yt = um(t, j);
      yt && M == null ? M = Math.max(A, p) : !yt && M != null && (C.push([M, Math.max(A, p)]), M = null);
    }), M != null && C.push([M, d]);
    const N = Js(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", B = fm(t), U = "tfDayClip" + ++hm, P = C.map(([A, j]) => B + (j >= d - 1e3 && A <= p + 1e3 ? " all day" : j >= d - 1e3 ? " since " + so(A) : A <= p + 1e3 ? " until " + so(j) : " " + so(A) + "–" + so(j)));
    let V = "", D = -1 / 0;
    C.forEach(([A], j) => {
      const yt = P[j].length * 5.4, Dt = Math.min(x(A), u - yt);
      Dt < D + 8 || (V += '<text x="' + Dt.toFixed(1) + '" y="10">' + W(P[j]) + "</text>", D = Dt + yt);
    });
    let X = '<text x="' + u + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((A) => {
      let j = new Date(d).setHours(A, 0, 0, 0);
      j > d && (j -= 864e5), x(j) > 8 && x(j) < u - 34 && (X += '<text x="' + x(j).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(A).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + h), e.setAttribute("aria-label", vt(t) + ", last 24 hours: " + (P.length ? P.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + U + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + V + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + U + ')">' + C.map(([A, j]) => '<rect x="' + x(A).toFixed(1) + '" y="18" width="' + Math.max(2, x(j) - x(A)).toFixed(1) + '" height="26" fill="' + N + '"/>').join("") + "</g>" + (a && a >= p ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + X;
  }
  function cp(t) {
    var r;
    const e = Number((r = k[t]) == null ? void 0 : r.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const s = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - s);
      return [...Array(49)].map((p, u) => s + d * u / 48).map((p) => [p, Math.round(e * Math.pow((p - s) / d, 1.3) * 100) / 100]);
    }
    if (eo(t) && t.endsWith("_moisture")) return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (eo(t) && t.endsWith("_light")) {
      const s = (p) => {
        const u = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, d = (p) => 0.8 + 0.2 * s(p);
      return [...Array(48)].map((p, u) => a - (48 - u) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * d(p) / d(a))]);
    }
    return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function dp(t, e, a = {}) {
    var U, P;
    let r = gt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: _p() };
    else if (eo(t)) r = { at: Date.now(), points: cp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const V = new Date(Date.now() - 864e5).toISOString(), D = await K({ type: "history/history_during_period", start_time: V, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), X = ((D == null ? void 0 : D[t]) || []).map((A) => [A.lu != null ? A.lu * 1e3 : Date.parse(A.last_updated || A.last_changed), Number(A.s ?? A.state)]).filter(([A, j]) => Number.isFinite(A) && Number.isFinite(j));
        r = { at: Date.now(), points: X };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      gt.set(t, r);
    }
    const s = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const d = k[t], p = ((U = d == null ? void 0 : d.attributes) == null ? void 0 : U.unit_of_measurement) || "", u = r.points.slice(), h = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && u.push([Date.now(), h]), u.length < 2) {
      s.setAttribute("aria-label", vt(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = u.map((V) => V[1]), C = Math.min(...x), M = Math.max(...x), N = (V) => V.toLocaleString(void 0, { maximumFractionDigits: Math.abs(V) >= 100 ? 0 : 1 }), B = ((P = d == null ? void 0 : d.attributes) == null ? void 0 : P.state_class) === "total_increasing";
    Jl(s, u, vt(t) + ", last 24 hours: " + (B ? "+" + N(x[x.length - 1] - x[0]) : C === M ? N(C) : N(C) + " to " + N(M)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function pp() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const e = _p();
    Jl(t, e, "Solar, last 24 hours: up to " + Fe(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function gm(t, e) {
    const a = e.entity_id, r = ge.get(a) || {}, s = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: $a(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    s != null && (r.pos = s), d != null && (r.tilt = d), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), ge.set(a, r);
  }
  function up(t, e, a) {
    var s;
    const r = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof r != "string" || !co[r] || !Do(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((s = k[r]) == null ? void 0 : s.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: co[r] }];
  }
  function la(t, e, a, r) {
    let s = { entity_id: a, ...r || {} };
    return [e, s] = up(t, e, s), t === "cover" && gm(e, s), _n[a] = (_n[a] || 0) + 1, Ve.set(Hu, JSON.stringify(_n)), Hi.call(t, e, s) ? Promise.resolve() : Promise.resolve(Q(t, e, s));
  }
  function Ql(t) {
    const [e, a, r, s] = t.split("|");
    la(e, a, r, s ? JSON.parse(s) : null).catch(() => {
    });
  }
  function wi(t, e) {
    Wt.set("pos|" + t, e), fa("pos|" + t), ya.delete(t), mo = mo.map(() => ""), [S, St].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((s) => hr(s, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (I == null ? void 0 : I.id) === t) {
      const r = St.querySelector(".tfMoreState"), s = St.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), s && (s.textContent = "Currently " + $a(t) + "%");
    }
    ep(t).forEach((r) => r.update(ls(t)));
  }
  const bm = (t, e) => {
    const a = t.shiftKey ? 10 : 1, r = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function wm(t, e) {
    var P;
    const a = t.dataset.blocks;
    (P = t.setPointerCapture) == null || P.call(t, e.pointerId), ne.add("pos|" + a), N("pos|" + a);
    const r = (V) => {
      const D = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (V.clientX - D.left) / D.width * 100));
    }, s = r(e), d = e.clientX;
    let p = !1, u = An(a), h = s, x = 0;
    const C = () => {
      u = Math.abs(h - u) < 0.2 ? h : u + (h - u) * 0.14, wi(a, u), x = requestAnimationFrame(C);
    }, M = () => {
      p || (p = !0, t.classList.add("fine"), x = requestAnimationFrame(C));
    }, N = setTimeout(M, 350), B = (V) => {
      h = r(V), Math.abs(V.clientX - d) > 6 && (clearTimeout(N), M());
    }, U = () => {
      clearTimeout(N), cancelAnimationFrame(x), t.removeEventListener("pointermove", B), t.removeEventListener("pointerup", U), t.removeEventListener("pointercancel", U), t.classList.remove("fine"), ne.delete("pos|" + a), wi(a, p ? Math.round(u) : (Math.min(3, Math.floor(s / 25)) + 1) * 25), vi("pos", a);
    };
    t.addEventListener("pointermove", B), t.addEventListener("pointerup", U), t.addEventListener("pointercancel", U);
  }
  function fp(t) {
    var e;
    nt = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var s;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (s = a.querySelector(".panelExpanded")) == null || s.toggleAttribute("inert", !r);
    }), ya.set("areas", pt(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => cl(!0), 340);
  }
  function hp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === nt) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !We() ? a.cloneNode(!0) : null, s = _t().map((x) => x.id), d = s.indexOf(t) > s.indexOf(nt) ? 1 : -1;
    nt = t;
    const p = pt(e.style.order || 1);
    ya.set("areas", p), zd(e, p);
    const u = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), h = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || We() || (u.style.setProperty("--dir", d), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), u.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(nn), nn = setTimeout(() => {
      nn = 0, La && Ee();
    }, 340)), h && (h.classList.add("tfAreaLand"), h.addEventListener("animationend", () => h.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const vm = 40;
  function ym(t) {
    var u, h;
    if (t.pointerType === "mouse" || !t.isPrimary || !((h = (u = t.target).closest) != null && h.call(u, ".tfAreaStage")) || !ld.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let s = null;
    const d = (x) => {
      x.pointerId === r && !s && Math.hypot(x.clientX - e, x.clientY - a) >= Mn && (s = Math.abs(x.clientX - e) > Math.abs(x.clientY - a) ? "x" : "y");
    }, p = (x) => {
      if (x.pointerId !== r) return;
      removeEventListener("pointermove", d, !0), removeEventListener("pointerup", p, !0), removeEventListener("pointercancel", p, !0);
      const C = x.clientX - e;
      if (x.type !== "pointerup" || s !== "x" || Math.abs(C) < vm) return;
      const M = (U) => {
        U.stopPropagation(), U.preventDefault();
      };
      o.addEventListener("click", M, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", M, !0), 400);
      const N = _t(), B = N[N.findIndex((U) => U.id === nt) + (C < 0 ? 1 : -1)];
      B && hp(B.id);
    };
    addEventListener("pointermove", d, !0), addEventListener("pointerup", p, !0), addEventListener("pointercancel", p, !0);
  }
  const us = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = sr(t);
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
      const [a, r] = sr(t);
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
  function fs(t, e, a, r) {
    var x;
    const s = us[e].value(a, r);
    Wt.set(e + "|" + a, s), fa(e + "|" + a);
    const d = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [C, M] = t.querySelectorAll("span");
      C.classList.toggle("lit", r > 0.08), M.classList.toggle("lit", r > 0.92), ya.delete(a), mo = mo.map(() => ""), ep(a).forEach((N) => N.update(ls(a)));
    } else if (t.dataset.axis === "y")
      if (p) p.style.height = d;
      else {
        let C = t.querySelector("b");
        C || (C = document.createElement("b"), t.appendChild(C)), C.style.top = Math.round((1 - r) * 1e3) / 10 + "%";
      }
    else if (p) p.style.width = d;
    else {
      let C = t.querySelector("b");
      C || (C = document.createElement("b"), t.appendChild(C)), C.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = us[e].text(a, s));
    const h = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    h && (h.textContent = us[e].text(a, s));
  }
  function vi(t, e) {
    const a = t + "|" + e, r = Wt.get(a), s = ra.get(a), [d, p, u] = us[t].send(e, r), h = () => setTimeout(() => {
      ra.get(a) === s && Wt.delete(a), Ee();
    }, 1500);
    la(d, p, e, u).then(h, h);
  }
  function mp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (ia && !e.target.closest(".tfBoardMenu,[data-board-more]") && fo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ia == null ? void 0 : ia.key) === a.dataset.boardMore ? fo(!0) : hh(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) mh(ia.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) gl(a.dataset.boardShow);
        else if (a.dataset.favHide) Ld(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Uc(a.dataset.energyPick);
        else if (a.dataset.areaPick) hp(a.dataset.areaPick);
        else if (a.dataset.act) Ql(a.dataset.act);
        else if (a.hasAttribute("data-details")) zl(!(I != null && I.details));
        else if (a.hasAttribute("data-details-close")) zl(!1);
        else if (a.dataset.summary) Vc(a.dataset.summary, a);
        else if (a.dataset.star) Fc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const s = I.id;
          I = I.back, Kl(), (r = St.querySelector('.tfMore [data-more="' + CSS.escape(s) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ds("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([s, d, p, u]) => la(s, d, p, u).catch(() => {
        })) : a.dataset.more ? ds(a.dataset.more, a) : a.hasAttribute("data-more-close") ? ps() : a.dataset.morePage ? cs(a.hasAttribute("data-more-toggle") && ((I == null ? void 0 : I.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? qc(a.dataset.path) : a.dataset.go ? qd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Rl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && fp(a);
    }), t.addEventListener("keydown", (e) => {
      var r, s, d, p, u, h, x;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ds(a.dataset.more, a)), (s = a.dataset) != null && s.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Uc(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), fp(a)), (p = a.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Vc(a.dataset.summary, a)), e.key === "Escape" && ia && t === S) {
        e.preventDefault(), fo(!0);
        return;
      }
      if (e.key === "Escape" && ma && t === S) {
        e.preventDefault(), ml(!1), (u = l("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && lt && t === S && (e.preventDefault(), Rl()), (h = a.dataset) != null && h.blocks) {
        const C = a.dataset.blocks, M = bm(e, Math.round(An(C)));
        if (M == null) return;
        e.preventDefault(), wi(C, M), clearTimeout(Fr.get(C)), Fr.set(C, setTimeout(() => vi("pos", C), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [C, M] = a.dataset.drag.split("|"), N = Number(a.getAttribute("aria-valuenow")) / 100, B = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, N + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        fs(a, C, M, B), vi(C, M);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Ht;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), wm(a, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [s, d] = r.dataset.drag.split("|"), p = s === "bright" && !Do(d), u = e.pointerType !== "mouse";
      if (p && !u) {
        Ql(Rt("light", "toggle", d));
        return;
      }
      const h = s === "bright" && ((Ht = k[d]) == null ? void 0 : Ht.state) !== "on", x = s + "|" + d;
      ne.add(x), fa(x);
      const C = s === "tilt" ? 4 : 0, M = r.dataset.axis === "y", N = () => M ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - C * 2, B = (At) => {
        const ut = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, M ? 1 - (At.clientY - ut.top) / N() : (At.clientX - ut.left - C) / N()));
      };
      let U = u ? "waiting" : h ? "pressed" : "dragging", P = 0;
      const V = e.clientX, D = e.clientY, X = (At, ut) => Math.hypot(At.clientX - V, At.clientY - D) > ut, A = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), A()), U === "dragging" && fs(r, s, d, B(e));
      const j = () => {
        var At, ut;
        U = "sliding", Vt = r, r.classList.add("held"), A(), (At = navigator.userActivation) != null && At.hasBeenActive && ((ut = navigator.vibrate) == null || ut.call(navigator, 8)), P = h ? (co[d] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, yt = (At) => {
        U === "waiting" && X(At, Mn) ? !p && (M ? Math.abs(At.clientY - D) > Math.abs(At.clientX - V) : Math.abs(At.clientX - V) > Math.abs(At.clientY - D)) ? j() : U = "gone" : U === "pressed" && X(At, 4) && (U = "dragging"), U === "sliding" ? fs(r, s, d, Math.max(0, Math.min(1, P + (M ? D - At.clientY : At.clientX - V) / N()))) : U === "dragging" && fs(r, s, d, B(At));
      }, Dt = (At) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((ut, Lt) => r.removeEventListener(ut, Lt ? Dt : yt)), r.classList.remove("held"), Vt === r && (Vt = null), ne.delete(x), U === "sliding" || U === "dragging" ? vi(s, d) : At.type === "pointerup" && p ? Ql(Rt("light", "toggle", d)) : At.type === "pointerup" && h && (U === "waiting" || U === "pressed") && la("light", "turn_on", d).catch(() => {
        }), La && U !== "sliding" && U !== "dragging" && Ee();
      };
      r.addEventListener("pointermove", yt), r.addEventListener("pointerup", Dt), r.addEventListener("pointercancel", Dt);
    }), t.addEventListener("touchmove", (e) => {
      Vt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Pf(), mp(S), S.addEventListener("pointerdown", ym), mp(St), St.addEventListener("click", (t) => {
    t.target === St && ps();
  }), (gp = o.getElementById("homeNav")) == null || gp.addEventListener("click", () => {
    lt && Rl();
  }), (bp = o.querySelector(".bottomNav")) == null || bp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + As + "</button>"), (wp = l("dashEditNav")) == null || wp.addEventListener("click", () => v ? Tl(!zo) : ml(!ma)), S.addEventListener("pointerdown", Hh), S.addEventListener("pointerdown", ph), S.addEventListener("click", (t) => {
    v && zo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && hd(t.target);
  }, !0), new ResizeObserver(() => {
    f.classList.contains("tfDash") && al() !== tl ? Ee() : Qi();
  }).observe(S), window.addEventListener("resize", Qi, { passive: !0 }), St.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), I != null && I.details ? zl(!1) : ps();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [...St.querySelectorAll(".tfMoreDots [data-more-page]")], s = r.findIndex((p) => p.getAttribute("aria-selected") === "true"), d = r[Math.max(0, Math.min(r.length - 1, s + (t.key === "ArrowRight" ? 1 : -1)))];
      d && cs(Number(d.dataset.morePage), d.dataset.moreMode ?? null, !0);
    }
  })), dt(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([r]) => eo(r))), ...t || {} };
      for (const r in k) r.startsWith("light.") && k[r].state === "on" && Do(r) && Dn(r, ro(k[r]));
      e ? Na() : Ee();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Cn = !0, Le == null || Le.destroy(), Le = null, Te == null || Te.forEach((t) => t.destroy()), Te = null;
    },
    resume() {
      Cn = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Da.isConnected && Wr(Da.style.order), Co());
    }
  };
}
const Hg = "0.17.1";
function Ng() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class Og extends HTMLElement {
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
    Ng();
    const n = this.shadowRoot || this.attachShadow({ mode: "open" });
    n.innerHTML = `<style>${Lm}${Tm}${Dm}${Em}</style>${Bm}`;
    const i = n.getElementById("app");
    i.style.opacity = "0", this._shell = Hm(n, {
      setLight: (l) => this.classList.toggle("lightBody", l),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = Rg(n, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), q0(n, i), W0(n), this.isConnected || this._test.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", Og), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Hg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
