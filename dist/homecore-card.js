var xm = Object.defineProperty;
var km = (o, n, i) => n in o ? xm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[n] = i;
var xp = (o, n, i) => km(o, typeof n != "symbol" ? n + "" : n, i);
const Mm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Sm = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;--face:var(--tile);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}#app .tfMorePage[data-mode=phys]>.tfMoreSpace:not(.tfPhys),#app .tfMorePage:not([data-mode=phys])>.tfMoreSpace.tfPhys{display:none!important}`, _m = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Cm = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Am = `<main id="app"><div class="shell">
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
`, kp = "homecore-theme", Tm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Lm = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Tm[o] || "") + "</svg>", Mp = {
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
function Dm(o, { setLight: n, fullscreenSupported: i, toggleFullscreen: l }) {
  const f = (Z) => o.getElementById(Z), b = f("app");
  o.querySelectorAll("[data-icon]").forEach((Z) => {
    Z.innerHTML = Lm(Z.dataset.icon);
  });
  const g = { home: f("homeView"), settings: f("settingsView") }, v = f("homeNav"), D = f("settingsNav");
  function L(Z) {
    Object.entries(g).forEach(([J, j]) => j.classList.toggle("active", J === Z)), v.classList.toggle("active", Z === "home"), D.classList.toggle("active", Z === "settings");
  }
  v.addEventListener("click", () => L("home")), D.addEventListener("click", () => L("settings")), f("settingsBack").addEventListener("click", () => L("home"));
  function A(Z) {
    const J = Z === "light";
    o.querySelectorAll(".themeBtn").forEach((j) => j.classList.toggle("active", j.dataset.theme === Z)), b.classList.toggle("light", J), n(J);
  }
  A(Mp.get(kp) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((Z) => Z.addEventListener("click", () => {
    A(Z.dataset.theme), Mp.set(kp, Z.dataset.theme);
  }));
  const B = f("tvNav");
  i || (B.hidden = !0), B.addEventListener("click", () => l());
  let I;
  function k(Z) {
    const J = f("toast");
    J && (J.textContent = Z, J.classList.add("show"), clearTimeout(I), I = setTimeout(() => J.classList.remove("show"), 2600));
  }
  return { showView: L, toast: k };
}
const Em = /* @__PURE__ */ new Set(["roaming", "test_area"]), Bm = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Yn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ce = "made_up_", to = (o) => {
  var n;
  return (n = String(o).split(".")[1]) == null ? void 0 : n.startsWith(Ce);
}, zn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Hc(o) {
  const n = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((n - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Pm(o) {
  const n = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let l = +n; l < +o; l += 10 * 60 * 1e3) i += Hc(new Date(l)) / 6;
  return i;
}
function Sp(o = /* @__PURE__ */ new Date()) {
  const n = [];
  for (let i = 0; i <= 96; i++) {
    const l = +o - (96 - i) * 15 * 60 * 1e3;
    n.push([l, Hc(new Date(l))]);
  }
  return n;
}
function Rm({ onChange: o }) {
  const n = {}, i = {}, l = (j, N, Q, at) => {
    n[j] = { entity_id: j, state: Q, attributes: at, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[j] = N;
  }, f = (j, N, Q) => {
    const at = n[j], ct = N ?? at.state;
    n[j] = { ...at, state: ct, attributes: { ...at.attributes, ...Q }, last_changed: ct === at.state ? at.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (j, N, Q, at) => l("binary_sensor." + Ce + (j ? j + "_" : "") + zn(N), j, at ? "on" : "off", { friendly_name: N, device_class: Q });
  Object.entries(Bm).forEach(([j, N]) => {
    if (N.temperature != null && l("sensor." + Ce + j + "_temperature", j, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && l("sensor." + Ce + j + "_humidity", j, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && l("vacuum." + Ce + "robot", j, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && l("climate." + Ce + j, j, "heat", {
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
      const [Q, at] = N.fan;
      l("fan." + Ce + j + "_" + zn(Q), j, "on", at != null ? { friendly_name: Q, percentage: at, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: Q, supported_features: 48 });
    }
    if (N.waterHeater && l("water_heater." + Ce + j, j, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [Q, at] = N.valvePos;
      l("valve." + Ce + j + "_" + zn(Q), j, at == null || at ? "open" : "closed", { friendly_name: Q, device_class: "water", supported_features: 3 | (at == null ? 0 : 12), ...at == null ? {} : { current_position: at } });
    }
    if (N.garage && l("cover." + Ce + j + "_" + zn(N.garage), j, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [Q, at, ct, tt] = N.cover;
      l("cover." + Ce + j + "_" + zn(Q), j, ct ? "open" : "closed", { friendly_name: Q, device_class: at, current_position: ct, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (N.humidifier && l("humidifier." + Ce + j, j, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (l("sensor." + Ce + j + "_solar_power", j, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), l("sensor." + Ce + j + "_solar_today", j, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && l("valve." + Ce + j + "_" + zn(N.valve), j, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && b(j, N.door, "door", N.doorOpen), N.window && b(j, N.window, "window", !1), N.motion && b(j, N.motion, "motion", !1), N.plant) {
      const [Q, at, ct, tt, q] = N.plant, z = Ce + zn(Q), ht = (Rt, dt, S, Ot, U) => l("sensor." + z + "_" + Rt, j, String(S), { friendly_name: dt, device_class: U, state_class: "measurement", unit_of_measurement: Ot, plant_low: S < Yn[Rt][0], plant_high: S > Yn[Rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Rt] });
      ht("moisture", "Moisture", at, "%", "moisture"), ht("light", "Light", ct, "lx", "illuminance"), ht("temperature", "Temperature", tt, "°C", "temperature"), ht("fertility", "Fertility", q, "µS/cm", "conductivity");
      const yt = Object.entries({ moisture: at, light: ct, temperature: tt, fertility: q }).filter(([Rt, dt]) => dt < Yn[Rt][0] || dt > Yn[Rt][1]).map(([Rt, dt]) => Rt + (dt < Yn[Rt][0] ? " low" : " high"));
      l("plant." + z, j, yt.length ? "problem" : "ok", { friendly_name: Q, moisture: at, brightness: ct, temperature: tt, conductivity: q, problem: yt.join(", ") || "none" });
    }
  }), l("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), l("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let D = null;
  function L() {
    const j = /* @__PURE__ */ new Date();
    Object.keys(n).forEach((N) => {
      N.endsWith("_solar_power") && (n[N] = { ...n[N], state: Hc(j).toFixed(2) }), N.endsWith("_solar_today") && (n[N] = { ...n[N], state: Pm(j).toFixed(1) });
    });
  }
  L();
  let A = 0;
  function B() {
    let j = !1;
    const N = ++A % 10 === 0, Q = (tt, q, z) => {
      f(tt, q, z), j = !0;
    };
    Object.entries(g).forEach(([tt, q]) => {
      const z = n[tt].attributes.current_position, ht = z < q ? Math.min(q, z + 10) : Math.max(q, z - 10);
      ht === q && delete g[tt], Q(tt, ht === q ? ht === 0 ? "closed" : "open" : q > z ? "opening" : "closing", { current_position: ht });
    }), Object.entries(v).forEach(([tt, q]) => {
      const z = n[tt].attributes.current_tilt_position, ht = z < q ? Math.min(q, z + 25) : Math.max(q, z - 25);
      ht === q && delete v[tt], Q(tt, null, { current_tilt_position: ht });
    }), Object.keys(n).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const q = n[tt], z = q.attributes, ht = z.current_temperature, yt = (q.state === "heat" || q.state === "auto") && ht < z.temperature - 0.05, Rt = (q.state === "cool" || q.state === "auto") && ht > z.temperature + 0.05, dt = q.state === "off" ? "off" : yt ? "heating" : Rt ? "cooling" : "idle", S = N ? Math.round((ht + (yt ? 0.1 : Rt ? -0.1 : 0)) * 10) / 10 : ht;
      (S !== ht || dt !== z.hvac_action) && Q(tt, null, { current_temperature: S, hvac_action: dt });
    }), Object.keys(n).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const q = n[tt], z = q.attributes, ht = z.current_humidity, yt = q.state === "on" && ht < z.humidity, Rt = yt && N ? ht + 1 : ht, dt = q.state !== "on" ? "off" : yt ? "humidifying" : "idle";
      if (Rt !== ht || dt !== z.action) {
        Q(tt, null, { current_humidity: Rt, action: dt });
        const S = "sensor." + Ce + i[tt] + "_humidity";
        n[S] && Q(S, String(Rt));
      }
    });
    const at = n["vacuum." + Ce + "robot"], ct = at.attributes;
    at.state === "cleaning" && N && Q(at.entity_id, null, { battery_level: Math.max(5, ct.battery_level - 1) }), at.state === "returning" && Q(at.entity_id, "docked", {}), at.state === "docked" && ct.battery_level < 100 && Q(at.entity_id, null, { battery_level: Math.min(100, ct.battery_level + 2) }), D && Date.now() - D.at > 5e3 && (Q("alarm_control_panel." + Ce + "house", "armed_" + D.mode, {}), D = null), j && o();
  }
  const I = setInterval(B, 1e3), k = setInterval(() => {
    L(), o();
  }, 60 * 1e3);
  function Z(j, N, Q) {
    const at = Q == null ? void 0 : Q.entity_id;
    if (!n[at]) return !1;
    const ct = n[at], tt = ct.attributes, q = (z, ht) => f(at, z, ht);
    if (j === "climate" && (N === "set_temperature" && Q.temperature != null && q(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, Q.temperature)) }), N === "set_hvac_mode" && q(Q.hvac_mode, Q.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && q(ct.state === "off" ? "heat" : "off", ct.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && Q.target_temp_low != null && q(null, { target_temp_low: Q.target_temp_low, target_temp_high: Q.target_temp_high }), N === "set_fan_mode" && q(null, { fan_mode: Q.fan_mode }), N === "set_swing_mode" && q(null, { swing_mode: Q.swing_mode }), N === "set_preset_mode" && q(null, { preset_mode: Q.preset_mode }), N === "set_humidity" && q(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, Q.humidity)) })), j === "fan" && (N === "set_percentage" && q(Q.percentage > 0 ? "on" : "off", { percentage: Q.percentage }), N === "oscillate" && q(null, { oscillating: Q.oscillating }), N === "set_direction" && q(null, { direction: Q.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && q(N === "turn_on" || N === "toggle" && ct.state !== "on" ? "on" : "off")), j === "water_heater" && (N === "set_temperature" && q(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, Q.temperature)) }), N === "set_operation_mode" && q(Q.operation_mode, { operation_mode: Q.operation_mode }), N === "set_away_mode" && q(null, { away_mode: Q.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const z = N === "turn_on" || N === "toggle" && ct.state === "off";
      q(z ? "eco" : "off", { operation_mode: z ? "eco" : "off" });
    }
    if (j === "cover") {
      const z = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? Q.position : N === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete g[at], delete v[at], q(tt.current_position === 0 ? "closed" : "open")), z != null && tt.current_position == null ? q(z > 0 ? "open" : "closed") : z != null && z !== tt.current_position && (g[at] = z, q(z > tt.current_position ? "opening" : "closing"));
      const ht = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? Q.tilt_position : null;
      N === "stop_cover_tilt" && delete v[at], ht != null && tt.current_tilt_position != null && ht !== tt.current_tilt_position && (v[at] = ht);
    }
    if (j === "humidifier" && (N === "set_humidity" && q(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, Q.humidity)) }), N === "set_mode" && q(null, { mode: Q.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const z = N === "turn_on" || N === "toggle" && ct.state !== "on";
      q(z ? "on" : "off", { action: z ? "idle" : "off" });
    }
    if (j === "vacuum" && (N === "start" && q("cleaning", { rooms: Q.rooms || tt.rooms }), N === "pause" && q("paused"), N === "return_to_base" && q("returning", { rooms: [] }), N === "locate" && q(null, { located: Date.now() }), N === "set_rooms" && q(null, { rooms: Q.rooms })), j === "valve") {
      const z = N === "open_valve" || N === "toggle" && ct.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && q(z ? "open" : "closed", tt.current_position != null ? { current_position: z ? 100 : 0 } : {}), N === "set_valve_position" && q(Q.position > 0 ? "open" : "closed", { current_position: Q.position });
    }
    if (j === "alarm_control_panel") {
      N === "alarm_disarm" && (D = null, q("disarmed", { changed_by: "Matt" }));
      const z = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      z && (D = { mode: z, at: Date.now() }, q("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function J(j, { madeUp: N = !0 } = {}) {
    const Q = N ? n : {}, at = (j == null ? void 0 : j.states) || {}, ct = (j == null ? void 0 : j.entities) || {}, tt = (j == null ? void 0 : j.devices) || {}, q = (nt) => {
      var F;
      const lt = ct[nt];
      return lt && (lt.area_id || lt.device_id && ((F = tt[lt.device_id]) == null ? void 0 : F.area_id)) || null;
    }, z = (nt) => {
      const lt = ct[nt];
      return at[nt] && at[nt].state !== "unavailable" && !(lt != null && lt.hidden) && !(lt != null && lt.entity_category);
    }, ht = {};
    Object.keys(at).forEach((nt) => {
      const lt = q(nt);
      lt && z(nt) && (ht[lt] || (ht[lt] = [])).push(nt);
    });
    const yt = { ...at, ...Q }, Rt = (nt) => {
      var lt, F;
      return (F = (lt = yt[nt]) == null ? void 0 : lt.attributes) == null ? void 0 : F.device_class;
    }, dt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], S = Object.keys(at).filter((nt) => nt.startsWith("vacuum.") && z(nt)), Ot = Object.values((j == null ? void 0 : j.areas) || {}).filter((nt) => !Em.has(nt.area_id)).map((nt) => {
      const lt = nt.area_id, F = ht[lt] || [], mt = (Ft) => F.filter((he) => he.startsWith(Ft + ".")), Ct = (Ft) => mt("sensor").filter((he) => Rt(he) === Ft), Vt = (Ft) => Object.keys(Q).filter((he) => i[he] === lt && Ft(he)), oe = (Ft, he) => Ft.length ? Ft : Vt(he), ra = oe(Ct("temperature"), (Ft) => Ft.endsWith(lt + "_temperature")), fa = oe(Ct("humidity"), (Ft) => Ft.endsWith(lt + "_humidity")), Mo = Ct("power").filter((Ft) => /^(W|kW)$/.test(yt[Ft].attributes.unit_of_measurement || "")), Ta = mt("binary_sensor").filter((Ft) => Rt(Ft) === "moisture"), on = oe(mt("plant"), (Ft) => Ft.startsWith("plant.")).map((Ft) => ({ id: Ft, readings: Vt((he) => he.startsWith("sensor." + Ft.split(".")[1] + "_")) })), kn = [...mt("binary_sensor").filter((Ft) => dt.includes(Rt(Ft))), ...Vt((Ft) => Ft.startsWith("binary_sensor."))];
      return {
        id: lt,
        name: nt.name,
        icon: nt.icon,
        floor: nt.floor_id || null,
        readings: [...ra.slice(0, 1), ...fa.slice(0, 1), ...Ta],
        power: Mo.length ? Mo.reduce((Ft, he) => Ft + Number(yt[he].state) * (yt[he].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: mt("switch"),
        lights: mt("light"),
        actions: [
          ...mt("light"),
          ...oe(mt("climate"), (Ft) => Ft.startsWith("climate.")),
          ...oe(mt("cover"), (Ft) => Ft.startsWith("cover.")),
          ...oe(mt("humidifier"), (Ft) => Ft.startsWith("humidifier.")),
          ...oe(mt("valve"), (Ft) => Ft.startsWith("valve.")),
          ...mt("media_player"),
          ...mt("vacuum"),
          ...S.length ? [] : Vt((Ft) => Ft.startsWith("vacuum.")),
          ...mt("fan"),
          ...Vt((Ft) => Ft.startsWith("fan.")),
          ...mt("water_heater"),
          ...Vt((Ft) => Ft.startsWith("water_heater."))
        ],
        solar: Vt((Ft) => Ft.includes("_solar_")),
        plants: on,
        openings: kn,
        alerts: [...Ta, ...kn].filter((Ft) => {
          var he;
          return ((he = yt[Ft]) == null ? void 0 : he.state) === "on";
        })
      };
    }).filter((nt) => nt.readings.length || nt.plugs.length || nt.actions.length || nt.solar.length || nt.plants.length), U = Object.keys(at).find((nt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(nt) && at[nt].state !== "unavailable") || null, rt = (nt) => Object.keys(at).filter((lt) => lt.startsWith(nt + ".") && z(lt)), st = rt("alarm_control_panel"), ft = S.length ? S : N ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: yt,
      rooms: Ot,
      grid: U,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (nt) => Q[nt] ? i[nt] : q(nt),
      vacuums: ft,
      homeVacuums: ft.filter((nt) => !Ot.some((lt) => lt.actions.includes(nt))),
      security: {
        alarms: st.length ? st : N ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: rt("lock"),
        openings: [...Object.keys(Q).filter((nt) => nt.startsWith("binary_sensor.")), ...N ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: J, call: Z, stop() {
    clearInterval(I), clearInterval(k);
  } };
}
const _p = (o) => +o.toFixed(2), Cp = (o) => o * Math.PI / 180, Di = (o, n, i, l) => [_p(o + i * Math.cos(Cp(l))), _p(n + i * Math.sin(Cp(l)))], Dr = (o, n, i, l, f) => {
  const [b, g] = Di(o, n, i, l), [v, D] = Di(o, n, i, f);
  return `M${b} ${g}A${i} ${i} 0 ${f - l > 180 ? 1 : 0} 1 ${v} ${D}`;
}, Ke = (o, n, i, l, f, b = "") => `<rect x="${o}" y="${n}" width="${i}" height="${l}" rx="${f}"${b}/>`, Ca = (o, n, i, l = "") => `<circle cx="${o}" cy="${n}" r="${i}"${l}/>`, wa = (o, n = "") => `<path d="${o}"${n}/>`, Ls = (o, n = 2.5) => wa(o, ` fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round"`), Gn = (o, n = 1.5) => wa(o, ` stroke="currentColor" stroke-width="${n}" stroke-linejoin="round"`), $n = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), Hm = (o, n, i, l = 0) => Array.from({ length: o }, (f, b) => {
  const g = l + 360 / o * b, [v, D] = Di(12, 12, n, g), [L, A] = Di(12, 12, i, g);
  return Ls(`M${v} ${D}L${L} ${A}`, 2.2);
}).join(""), Nm = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", Om = [
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
    c: $n(Ke(8.2, 8.8, 2.2, 6.4, 1.1)) + $n(Ke(13.6, 8.8, 2.2, 6.4, 1.1))
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
    s: Gn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: wa(Dr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => wa(Nm, ` transform="rotate(${o} 12 12)"`)).join("") + Ca(12, 12, 2.6),
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
    s: Ls("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Ke(4, 10, 16, 11.6, 4.2),
    c: $n(Ca(12, 14.9, 1.7)) + wa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Ke(5, 2.4, 14, 19.2, 3.6),
    c: $n(Ca(15.2, 12.4, 1.5))
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
    s: Gn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + Ls(Dr(12, 18.6, 8, 230, 310), 2.4) + Ls(Dr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: Ca(12, 7.2, 4.2) + Gn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Ke(2.6, 5.4, 13.4, 8.6, 3.4) + Gn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Ke(7.2, 14.6, 2.4, 4.2, 1.2) + Ke(3.4, 18.6, 10, 2.6, 1.3),
    c: $n(Ca(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Ke(5, 2.4, 14, 19.2, 4.2),
    c: Ca(12, 14.6, 3.6) + $n(Ca(12, 7.4, 1.5))
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
    s: Gn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: Ca(12, 12, 4.4) + Hm(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: Gn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: wa("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Gn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: $n(Ke(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Im = 0;
function Fm(o, n = 24, i = `hc${++Im}`) {
  const l = o.c ? `<defs><mask id="${i}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${o.c.replace(/currentColor/g, "#fff")}</g></mask></defs>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${n}" height="${n}" aria-hidden="true">${l}<g fill="currentColor"${o.c ? ` mask="url(#${i})"` : ""}>${o.s}</g>${o.t ? `<g fill="currentColor">${o.t}</g>` : ""}</svg>`;
}
const ja = {
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
}, ki = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ac = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, qm = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Ap = {}, Va = (o, n, i) => {
  const l = o + n + i;
  return Ap[l] || (Ap[l] = qm(Ac(o).map((f, b) => f + (Ac(n)[b] - f) * i)));
}, Tp = {}, nc = (o) => Tp[o] || (Tp[o] = Ac(o));
function Iu(o, n) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || n ? "night" : "day");
}
function Vm(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [Va(n.clear[0], n.cloudy[0], 0.12), Va(n.clear[1], n.cloudy[1], 0.12)], n.storm = [Va(n.rain[0], "#000000", 0.22), Va(n.rain[1], "#000000", 0.22)], n;
}
const Tc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Lc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Dc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Wm(o, n = ja) {
  const i = { ...ja, ...n }, l = Vm(i), f = String(o).split("/"), b = l[f[0]] ? f[0] : "clear", g = f[1] === "night", v = l[b][g ? 1 : 0], D = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Tc.map(() => ({ o: 0 })),
    rain: Lc.map(() => ({ o: 0, dy: -16 })),
    snow: Dc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, L = (A) => Tc.map(() => ({ o: A }));
  return b === "clear" ? g ? (D.moon.o = 1, D.stars = L(1)) : D.sun.o = 1 : b === "partly" ? (D.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (D.moon = { x: 34, y: 33, d: 48, o: 1 }, D.stars = L(0.7)) : D.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (D.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? D.moon = { x: 40, y: 36, d: 40, o: 0 } : D.sun = { x: 40, y: 36, r: 20, o: 0 }) : (D.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? D.moon = { x: 38, y: 28, d: 36, o: 0 } : D.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? D.snow = Dc.map(() => ({ o: 1, dy: 0 })) : D.rain = Lc.map((A, B) => ({ o: b === "storm" && B === 1 ? 0 : 1, dy: 0 })), b === "storm" && (D.bolt = { o: 1, dy: 0 })), D;
}
const jm = [
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
], Un = (o, n) => (jm[(n & 7) * 8 + (o & 7)] + 0.5) / 64, zm = 0, Fu = 1, qu = 2, Vu = 3, Wu = 4, wo = 5, Hs = 6, Hr = 7, ju = 8, Lp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), Gm = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], $m = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Um = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function Ym(o, { size: n = 90, px: i = 2, oneBit: l = !1, colors: f = ja, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: D = !1 } = {}) {
  const L = { ...ja, ...f }, A = Math.sin, B = Math.PI * 2, I = Math.max(6, Math.round(n / i)), k = I / 90, Z = D ? Math.floor(v / 100) * 100 : 0, J = D ? A(B * Z / 3600) : 0, j = D ? 1.8 * A(B * Z / 6400) : 0, N = D ? 0.9 * A(B * Z / 4100) : 0, Q = D ? 0.8 * A(B * Z / 5200) : 0, at = Z / 3400 % 1, ct = D && o.bolt.o > 0.5 && (at < 0.04 || at > 0.08 && at < 0.11), tt = new Array(I * I), q = new Uint8Array(I * I), z = (U, rt, st, ft, nt) => {
    st == null || U < 0 || rt < 0 || U >= I || rt >= I || (ft >= 1 || ft > Un(U + 5, rt + 3)) && (tt[rt * I + U] = st, q[rt * I + U] = nt);
  }, ht = (U, rt, st, ft) => {
    for (let nt = Math.max(0, Math.floor(rt - st) - 1); nt <= Math.min(I - 1, rt + st + 1); nt++) for (let lt = Math.max(0, Math.floor(U - st) - 1); lt <= Math.min(I - 1, U + st + 1); lt++) ft(lt, nt, lt + 0.5 - U, nt + 0.5 - rt);
  }, yt = o.skyStops || [o.sky], Rt = o.skyT || 0;
  for (let U = 0; U < I; U++) {
    const rt = o.night ? ki(1 - (U + 0.5) / (I * 0.7)) * 0.85 : ki(((U + 0.5) / I - 0.35) / 0.65) * 0.85;
    for (let st = 0; st < I; st++) {
      let ft = yt[0];
      if (yt.length > 1) {
        const nt = Rt * (yt.length - 1), lt = Math.min(yt.length - 2, Math.floor(nt));
        ft = nt - lt > Un(st, U) ? yt[lt + 1] : yt[lt];
      }
      rt > Un(st + 2, U + 5) && (ft = o.night ? Va(ft, "#000000", 0.28) : Va(ft, "#ffffff", 0.2)), tt[U * I + st] = ct ? Va(ft, "#ffffff", 0.25) : ft;
    }
  }
  if (o.sun.o > 0.01) {
    const U = o.sun.x * k, rt = o.sun.y * k, st = Math.max(1, o.sun.r * k);
    if (D) {
      const ft = st * (1.45 + 0.06 * J), nt = Va(L.sun, "#ffffff", 0.55);
      if (ht(U, rt, ft, (lt, F, mt, Ct) => {
        const Vt = Math.sqrt(mt * mt + Ct * Ct);
        Vt > st && Vt < ft && z(lt, F, nt, 0.26 * (1 - (Vt - st) / (ft - st)) * o.sun.o, zm);
      }), o.sun.o > 0.5) {
        const lt = Math.floor(Z / 500) % 2, F = Math.max(1, st * 0.22);
        for (let mt = 0; mt < 8; mt++) if (mt % 2 === lt) for (let Ct = st + 1.5; Ct < st + 1.5 + F; Ct += 0.7) z(Math.floor(U + Math.cos(mt * Math.PI / 4) * Ct), Math.floor(rt + Math.sin(mt * Math.PI / 4) * Ct), L.sun, o.sun.o, ju);
      }
    }
    ht(U, rt, st, (ft, nt, lt, F) => {
      if (lt * lt + F * F > st * st) return;
      const mt = ((lt * 0.643 + F * 0.766) / st + 1) / 2;
      z(ft, nt, ki((mt - 0.62) / 0.38) > Un(ft, nt) ? L.sunEdge : L.sun, o.sun.o, Fu);
    });
  }
  if (Tc.forEach((U, rt) => {
    const st = o.stars[rt].o;
    if (st < 0.01) return;
    const ft = Math.floor(U[0] * k), nt = Math.floor(U[1] * k), lt = D ? (Math.floor(Z / 300) + rt * 3) % 6 : 0;
    if (lt === 5) return;
    const F = Math.round(U[2] * k * (lt === 4 ? 0.3 : lt < 2 ? 1 : 0.6));
    z(ft, nt, L.star, st, Hr);
    for (let mt = 1; mt <= F; mt++) {
      const Ct = mt === F && F > 1 ? Va(L.star, o.sky, 0.5) : L.star;
      z(ft - mt, nt, Ct, st, Hr), z(ft + mt, nt, Ct, st, Hr), z(ft, nt - mt, Ct, st, Hr), z(ft, nt + mt, Ct, st, Hr);
    }
  }), o.moon.o > 0.01) {
    const U = Math.max(1.5, o.moon.d * k * 0.37), rt = o.moon.x * k, st = o.moon.y * k + (D && Q > 0.4 ? -1 : 0), ft = rt + 0.547 * U, nt = st - 0.503 * U, lt = 0.82 * U, F = Va(L.moon, "#ffffff", 0.6);
    ht(rt, st, U, (mt, Ct, Vt, oe) => {
      if (Vt * Vt + oe * oe > U * U) return;
      const ra = mt + 0.5 - ft, fa = Ct + 0.5 - nt;
      ra * ra + fa * fa <= lt * lt || z(mt, Ct, ki((oe + U) / (2 * U) * 1.1 - 0.1) > Un(mt, Ct) ? L.moon : F, o.moon.o, qu);
    });
  }
  const dt = Math.max(2, Math.round(15.65 * k)), S = Math.max(1, Math.round(5.87 * k * 0.5));
  Lc.forEach((U, rt) => {
    const st = o.rain[rt];
    let ft = st.dy, nt = st.o;
    if (nt < 0.01) return;
    if (D) {
      const mt = (Z / 950 + rt / 3) % 1;
      ft += -5 + mt * 14, nt *= mt < 0.18 ? mt / 0.18 : mt > 0.72 ? (1 - mt) / 0.28 : 1;
    }
    const lt = (U[0] + 3 + j) * k, F = (U[1] + ft) * k;
    for (let mt = 0; mt < dt; mt++) for (let Ct = 0; Ct < S; Ct++) z(Math.floor(lt - 0.208 * mt) + Ct, Math.floor(F) + mt, L.rain, nt, Wu);
  });
  const Ot = Math.max(0, Math.round(7.34 * k / 2.6));
  if (Dc.forEach((U, rt) => {
    const st = o.snow[rt];
    let ft = st.dy, nt = 0, lt = st.o;
    if (lt < 0.01) return;
    if (D) {
      const Ct = (Z / 3200 + rt / 5) % 1;
      ft += -6 + Ct * 14, nt = 1.5 * A(B * (Ct * 1.5 + rt / 5)), lt *= Ct < 0.2 ? Ct / 0.2 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1;
    }
    const F = Math.floor((U[0] + 3.67 + nt + j) * k), mt = Math.floor((U[1] + 3.67 + ft) * k);
    z(F, mt, L.snow, lt, wo);
    for (let Ct = 1; Ct <= Ot; Ct++)
      z(F - Ct, mt, L.snow, lt, wo), z(F + Ct, mt, L.snow, lt, wo), z(F, mt - Ct, L.snow, lt, wo), z(F, mt + Ct, L.snow, lt, wo), Ot > 1 && Ct < Ot && (z(F - Ct, mt - Ct, L.snow, lt, wo), z(F + Ct, mt - Ct, L.snow, lt, wo), z(F - Ct, mt + Ct, L.snow, lt, wo), z(F + Ct, mt + Ct, L.snow, lt, wo));
  }), o.bolt.o > 0.01)
    if (I >= 30) {
      const U = 39 + j, rt = 50 + o.bolt.dy;
      for (let st = Math.floor(rt * k); st <= (rt + 28) * k; st++) for (let ft = Math.floor(U * k); ft <= (U + 13) * k; ft++)
        Um($m, (ft + 0.5) / k - U, (st + 0.5) / k - rt) && z(ft, st, L.sun, o.bolt.o, Hs);
    } else {
      const U = I / 18, rt = 7, st = 10 + Math.round(o.bolt.dy * 0.2);
      Gm.forEach((ft, nt) => ft.split("").forEach((lt, F) => {
        if (lt !== "#") return;
        const mt = Math.floor((rt + F) * U), Ct = Math.floor((st + nt) * U);
        for (let Vt = Ct; Vt < Math.max(Ct + 1, Math.floor((st + nt + 1) * U)); Vt++) for (let oe = mt; oe < Math.max(mt + 1, Math.floor((rt + F + 1) * U)); oe++) z(oe, Vt, L.sun, o.bolt.o, Hs);
      }));
    }
  if (o.cloud.o > 0.01) {
    const U = Math.max(3, o.cloud.w * k), rt = U * 0.6665, st = (o.cloud.x + j) * k - U / 2, ft = (o.cloud.y + N) * k - rt / 2, nt = Va(L.cloudDay, L.cloudNight, Math.round(o.cloud.f * 4) / 4), lt = Va(nt, "#000000", 0.16);
    for (let F = Math.max(0, Math.floor(ft) - 1); F <= Math.min(I - 1, ft + rt + 1); F++) for (let mt = Math.max(0, Math.floor(st) - 1); mt <= Math.min(I - 1, st + U + 1); mt++) {
      const Ct = (mt + 0.5 - st) / U, Vt = (F + 0.5 - ft) / U;
      Lp(Ct, Vt) && z(mt, F, !Lp(Ct, Vt + 1 / U) || ki((Vt - 0.42) / 0.25) * 0.8 > Un(mt, F) ? lt : nt, o.cloud.o, Vu);
    }
  }
  return Zm(tt, q, I, I, { oneBit: l, ink: b, paper: g, snowInk: !o.night });
}
function Zm(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const D = new Uint8ClampedArray(i * l * 4), L = nc(b), A = nc(g);
  for (let B = 0; B < l; B++) for (let I = 0; I < i; I++) {
    const k = B * i + I, Z = n[k];
    if (o[k] == null) continue;
    let J = nc(o[k]);
    if (f) {
      let j;
      Z === Wu || Z === ju ? j = !0 : Z === wo ? j = v : Z === Hr || Z === Hs ? j = !1 : j = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Un(I, B), (Z === Fu || Z === qu || Z === Vu || Z === Hs) && (I > 0 && n[k - 1] !== Z || I < i - 1 && n[k + 1] !== Z || B > 0 && n[k - i] !== Z || B < l - 1 && n[k + i] !== Z) && (j = !0), J = j ? L : A;
    }
    D[k * 4] = J[0], D[k * 4 + 1] = J[1], D[k * 4 + 2] = J[2], D[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: D };
}
const tn = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ec = (o) => {
  const n = String(o || "#000000").trim().replace("#", ""), i = n.length === 3 ? n.split("").map((l) => l + l).join("") : n;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, Km = (o) => "#" + o.map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join(""), Dp = {}, Wa = (o, n, i) => {
  const l = o + n + i;
  return Dp[l] || (Dp[l] = Km(Ec(o).map((f, b) => f + (Ec(n)[b] - f) * i)));
}, Ep = {}, Ds = (o) => Ep[o] || (Ep[o] = Ec(o));
function Xm(o) {
  const n = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return n.partly = [Wa(n.clear[0], n.cloudy[0], 0.12), Wa(n.clear[1], n.cloudy[1], 0.12)], n.storm = [Wa(n.rain[0], "#000000", 0.22), Wa(n.rain[1], "#000000", 0.22)], n;
}
const Jm = [
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
], Jo = (o, n) => (Jm[(n & 7) * 8 + (o & 7)] + 0.5) / 64, zu = 1, Gu = 2, $u = 3, Uu = 4, Nr = 5, Ns = 6, Bc = 7, Yu = 8, Bp = (o, n) => n <= 0.6665 && ((o - 0.5) * (o - 0.5) + (n - 0.2877) * (n - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (n - 0.416) * (n - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (n - 0.458) * (n - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && n >= 0.416), Qm = (o, n, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && n < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function t0(o, n, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const D = new Uint8ClampedArray(i * l * 4), L = Ds(b), A = Ds(g);
  for (let B = 0; B < l; B++) for (let I = 0; I < i; I++) {
    const k = B * i + I, Z = n[k];
    if (o[k] == null) continue;
    let J = Ds(o[k]);
    if (f) {
      let j;
      Z === Uu || Z === Yu ? j = !0 : Z === Nr ? j = v : Z === Bc || Z === Ns ? j = !1 : j = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Jo(I, B), (Z === zu || Z === Gu || Z === $u || Z === Ns) && (I > 0 && n[k - 1] !== Z || I < i - 1 && n[k + 1] !== Z || B > 0 && n[k - i] !== Z || B < l - 1 && n[k + i] !== Z) && (j = !0), J = j ? L : A;
    }
    D[k * 4] = J[0], D[k * 4 + 1] = J[1], D[k * 4 + 2] = J[2], D[k * 4 + 3] = 255;
  }
  return { w: i, h: l, data: D };
}
const e0 = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, a0 = (o) => Iu(o, !1).split("/")[0], rc = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let n = Math.imul(o ^ o >>> 15, 1 | o);
  return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
}, o0 = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", n0 = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", r0 = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", i0 = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", s0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], l0 = [".##", "##.", ".#.", "#.."];
function Zu(o, { width: n, height: i, colors: l, wave: f = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const D = { ...ja, dawn: "#e5a77e", ...l }, L = Xm(D), A = n, B = i, I = A / v, k = I / 2, Z = Math.PI * 2, J = o.length ? o : [{ cond: "cloudy", night: !1 }], j = [...Array(v * 2)].map((ct, tt) => {
    const q = J[Math.min(tt, J.length - 1)], z = a0(q.cond), ht = tt % 2 === 1;
    return { cond: q.cond, k: z, night: ht, sky: L[z][ht ? 1 : 0], cover: e0[z] };
  }), N = (ct) => B * (0.5 - f * Math.cos(Z * (ct / I - 0.25)));
  return { C: D, S: j, W: A, H: B, cw: I, sw: k, TAU: Z, yb: N, side: (ct, tt, q) => {
    const z = (ct ? N(tt) - q : q - N(tt)) / Math.max(3, b * 1.4) + 0.5;
    return z <= 0 ? 0 : z >= 1 ? 1 : z;
  }, glowAt: (ct) => {
    const tt = ((ct / I - 0.25) % 1 + 1) % 1, q = Math.max(0, Math.min(v - 1, Math.round(ct / I - 0.25))), z = Math.max(0, Math.min(v - 1, Math.round(ct / I - 0.75))), ht = 1 - (j[2 * q].cover + j[2 * z + 1].cover) / 2, yt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(ct) / B)));
    return { c: tt < 0.5 ? D.dusk : D.dawn, a: g * (0.2 + 0.8 * ht) * yt * yt };
  }, soft: b, tw: I * 0.3, sy: B / 90 };
}
function Ku(o, { clock: n = 0, ambient: i = !1, seed: l = 1 }) {
  const { S: f, sw: b, side: g, C: v, TAU: D, sy: L, H: A } = o, B = n, I = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((J, j) => {
    const N = rc(l * 977 + j * 131 + 7), Q = (j + 0.5) * b, at = J.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[J.k] : 0;
    for (let ct = 0; ct < at; ct++) {
      const tt = Q + (N() - 0.5) * b * 1.6, q = (6 + N() * 76) * L, z = N() < 0.35, ht = 1.8 + N() * 1.6, yt = g(!0, tt, q) * (z ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(D * B / 2600 + ct * 1.7 + j) : 1);
      yt >= 0.03 && I.stars.push({ x: tt, y: q, big: z, size: ht, o: yt });
    }
    if (!J.night && (J.k === "clear" || J.k === "partly")) {
      const ct = Q + (N() - 0.5) * b * 0.3, tt = Math.min(15, b * 0.29);
      I.suns.push({ x: ct, y: 32 * L, rad: tt, halo: tt * 2.8 * (i ? 1 + 0.07 * Math.sin(D * B / 3600 + j) : 1) });
    }
    if (J.night && (J.k === "clear" || J.k === "partly")) {
      const ct = Math.min(0.78, b * 0.55 / 34), tt = Q - 23 * ct + (N() - 0.5) * b * 0.2;
      I.moons.push({ x: tt + 23 * ct, y: (4 + (i ? 0.8 * Math.sin(D * B / 5200 + j) : 0)) * L + 23 * ct, d: 46 * ct });
    }
  });
  const k = Math.max(56, Math.min(100, A * 0.45)), Z = Math.max(1, b / (k * 2.4));
  return f.forEach((J, j) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[J.k];
    if (!N) return;
    const Q = J.k === "partly" ? 1 : Math.round(N * Z), at = rc(l * 577 + j * 71 + 3), ct = (j + 0.5) * b, tt = J.k === "rain" || J.k === "storm" || J.night ? v.cloudNight : v.cloudDay, q = J.night ? 0.82 : J.k === "storm" ? 0.75 : 1;
    for (let z = 0; z < Q; z++) {
      const ht = k / 46 * (J.k === "partly" ? 1 : 0.8 + at() * 0.4), yt = ct + (J.k === "partly" ? b * 0.12 : ((z + 0.5) / Q - 0.5) * b * 0.95 + (at() - 0.5) * b * 0.5 / Q), Rt = (J.k === "partly" ? 40 : 6 + at() * 26) * L, dt = i ? 2.5 * Math.sin(D * B / 9e3 + j * 1.3 + z * 2.1) : 0, S = i ? 0.9 * Math.sin(D * B / 6100 + j + z) : 0;
      I.clouds.push({ x: yt - 23 * ht + dt, y: Rt - 15.33 * ht + S, w: 46 * ht, h: 30.66 * ht, fill: tt, o: q * (Q > 1 && z === 0 ? 0.85 : 1) });
    }
  }), f.forEach((J, j) => {
    const N = rc(l * 313 + j * 29 + 11), Q = (j + 0.5) * b, at = J.cond === "pouring" ? 16 : J.cond === "rainy" || J.cond === "hail" ? 9 : J.cond === "lightning-rainy" ? 12 : J.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < at; tt++) {
      let q = Q + (N() - 0.5) * b * 1.05, z = 44 + N() * 36, ht = 1;
      if (i) {
        const Rt = ((z - 44 + B * 0.04) % 36 + 36) % 36;
        q -= 0.21 * (Rt - (z - 44)), z = 44 + Rt, ht = Math.min(1, Rt / 6, (36 - Rt) / 6);
      }
      z *= L;
      const yt = g(J.night, q, z) * ht;
      yt >= 0.05 && I.drops.push({ x: q, y: z, o: yt });
    }
    const ct = J.cond === "snowy" ? 11 : J.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < ct; tt++) {
      let q = Q + (N() - 0.5) * b * 1.05, z = 40 + N() * 44, ht = 1;
      if (i) {
        const Rt = ((z - 40 + B * 9e-3) % 44 + 44) % 44;
        z = 40 + Rt, q += 1.6 * Math.sin(D * B / 2800 + tt * 1.9 + j), ht = Math.min(1, Rt / 6, (44 - Rt) / 6);
      }
      z *= L;
      const yt = g(J.night, q, z) * ht;
      yt >= 0.05 && I.flakes.push({ x: q, y: z, o: yt });
    }
    if (J.k === "fog") {
      const tt = J.night ? "#c8ccd6" : "#ffffff", q = J.night ? 0.28 : 0.62, z = i ? 4 * Math.sin(D * B / 8e3 + j) : 0;
      for (let ht = 0; ht < 4; ht++) I.fogs.push({ x: Q - b * 0.75 + ht % 2 * b * 0.18 + (ht % 2 ? z : -z), y: (30 + ht * 13) * L, w: b * 1.3, c: tt, a: q });
    }
    if (J.k === "storm") {
      const tt = (B / 3400 + j * 0.37) % 1;
      I.bolts.push({ x: Q + (N() - 0.5) * b * 0.3 - 5, y: 36 * L, o: i && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), I;
}
function c0(o, n, i, l, f, b, g, v) {
  const { S: D, C: L, cw: A, yb: B, glowAt: I, soft: k, tw: Z, sy: J } = o, j = new Array(i * l), N = new Uint8Array(i * l), Q = new Uint8Array(i * l), at = (U, rt, st, ft, nt) => {
    st == null || U < 0 || rt < 0 || U >= i || rt >= l || (ft >= 1 || ft > Jo(U + 5, rt + 3)) && (j[rt * i + U] = st, N[rt * i + U] = nt);
  }, ct = (U, rt, st, ft) => {
    for (let nt = Math.max(0, Math.floor(rt - st) - 1); nt <= Math.min(l - 1, rt + st + 1); nt++) for (let lt = Math.max(0, Math.floor(U - st) - 1); lt <= Math.min(i - 1, U + st + 1); lt++) ft(lt, nt, lt + 0.5 - U, nt + 0.5 - rt);
  }, tt = (U, rt, st) => {
    for (let nt = 0; nt < U.length - 1; nt++) {
      const lt = (nt + rt) * A;
      if (st < lt - Z / 2) return [U[nt], U[nt], 0];
      if (st <= lt + Z / 2) return [U[nt], U[nt + 1], (st - lt + Z / 2) / Z];
    }
    const ft = U[U.length - 1];
    return [ft, ft, 0];
  }, q = D.filter((U) => !U.night).map((U) => U.sky), z = D.filter((U) => U.night).map((U) => U.sky), ht = k / b, yt = 16 * J / b;
  for (let U = 0; U < i; U++) {
    const rt = (U + 0.5) * f, st = B(rt) / b, ft = tt(q, 0.75, rt), nt = tt(z, 1.25, rt), lt = I(rt);
    for (let F = 0; F < l; F++) {
      const mt = Jo(U, F), Ct = F + 0.5 - st, Vt = (ht > 0.01 ? tn(0.5 + Ct / ht) : Ct > 0 ? 1 : 0) > mt;
      let oe = Vt ? ft[2] > mt ? ft[1] : ft[0] : nt[2] > mt ? nt[1] : nt[0];
      (Vt ? tn(((F + 0.5) / l - 0.45) / 0.55) * 0.7 : tn(1 - (F + 0.5) / (l * 0.55)) * 0.7) > Jo(U + 2, F + 5) && (oe = Vt ? Wa(oe, "#ffffff", 0.18) : Wa(oe, "#000000", 0.25)), Vt && Ct >= 0 && Ct < yt && lt.a * 1.3 * (1 - Ct / yt) > Jo(U + 6, F + 1) && (oe = lt.c), j[F * i + U] = oe, Q[F * i + U] = Vt ? 0 : 1;
    }
  }
  const Rt = Wa(L.sun, "#ffffff", 0.55), dt = Wa(L.moon, "#ffffff", 0.6);
  n.stars.forEach((U) => {
    const rt = Math.floor(U.x / f), st = Math.floor(U.y / b);
    if (rt < 0 || st < 0 || rt >= i || st >= l || !Q[st * i + rt] || U.o < 0.15) return;
    const ft = U.o > 0.45 ? L.star : Wa(L.star, j[st * i + rt], 0.5), nt = U.big && U.o > 0.6 ? Math.floor(U.size / f) : 0;
    at(rt, st, ft, 1, Bc);
    for (let lt = 1; lt <= nt; lt++) [[rt - lt, st], [rt + lt, st], [rt, st - lt], [rt, st + lt]].forEach((F) => {
      F[0] >= 0 && F[1] >= 0 && F[0] < i && F[1] < l && Q[F[1] * i + F[0]] && at(F[0], F[1], ft, 1, Bc);
    });
  }), n.suns.forEach((U) => {
    const rt = Math.max(1.5, U.rad / f), st = U.x / f, ft = U.y / b, nt = U.halo / f * 0.85;
    if (ct(st, ft, nt, (lt, F, mt, Ct) => {
      const Vt = Math.sqrt(mt * mt + Ct * Ct);
      Vt > rt && Vt < nt && !Q[F * i + lt] && at(lt, F, Rt, 0.3 * (1 - (Vt - rt) / (nt - rt)), 0);
    }), v) {
      const lt = Math.floor(g / 500) % 2, F = Math.max(1, rt * 0.3);
      for (let mt = 0; mt < 8; mt++) if (mt % 2 === lt) for (let Ct = rt + 1.2; Ct < rt + 1.2 + F; Ct += 0.7) at(Math.floor(st + Math.cos(mt * Math.PI / 4) * Ct), Math.floor(ft + Math.sin(mt * Math.PI / 4) * Ct), L.sun, 1, Yu);
    }
    ct(st, ft, rt, (lt, F, mt, Ct) => {
      mt * mt + Ct * Ct <= rt * rt && at(lt, F, tn(((Ct / rt + 1) / 2 - 0.6) / 0.4) > Jo(lt, F) ? L.sunEdge : L.sun, 1, zu);
    });
  }), n.moons.forEach((U) => {
    const rt = Math.max(1.5, U.d * 0.37 / f), st = U.x / f, ft = U.y / b, nt = st + 0.547 * rt, lt = ft - 0.503 * rt, F = 0.82 * rt;
    ct(st, ft, rt, (mt, Ct, Vt, oe) => {
      if (Vt * Vt + oe * oe > rt * rt) return;
      const ra = mt + 0.5 - nt, fa = Ct + 0.5 - lt;
      ra * ra + fa * fa > F * F && at(mt, Ct, tn((oe + rt) / (2 * rt) * 1.1 - 0.1) > Jo(mt, Ct) ? L.moon : dt, 1, Gu);
    });
  }), n.clouds.forEach((U) => {
    const rt = Math.max(3, U.w / f), st = rt * 0.6665, ft = U.x / f, nt = U.y / b, lt = Wa(U.fill, "#000000", 0.16);
    for (let F = Math.max(0, Math.floor(nt) - 1); F <= Math.min(l - 1, nt + st + 1); F++) for (let mt = Math.max(0, Math.floor(ft) - 1); mt <= Math.min(i - 1, ft + rt + 1); mt++) {
      const Ct = (mt + 0.5 - ft) / rt, Vt = (F + 0.5 - nt) / rt;
      Bp(Ct, Vt) && at(mt, F, !Bp(Ct, Vt + 1 / rt) || tn((Vt - 0.42) / 0.25) * 0.8 > Jo(mt, F) ? lt : U.fill, U.o, $u);
    }
  }), n.fogs.forEach((U) => {
    const rt = Math.floor(U.y / b), st = Math.max(rt, Math.floor((U.y + 6 * J) / b) - 1), ft = Math.floor(U.x / f), nt = Math.floor((U.x + U.w) / f);
    for (let lt = rt; lt <= st; lt++) for (let F = ft; F <= nt; F++) {
      const mt = (F - ft) / Math.max(1, nt - ft);
      at(F, lt, U.c, U.a * (mt < 0.25 ? mt / 0.25 : mt > 0.75 ? (1 - mt) / 0.25 : 1), 0);
    }
  });
  const S = Math.max(2, Math.round(9 / b));
  n.drops.forEach((U) => {
    const rt = U.x / f, st = Math.floor(U.y / b);
    for (let ft = 0; ft < S; ft++) at(Math.floor(rt - 0.208 * ft * b / f), st + ft, L.rain, U.o, Uu);
  });
  const Ot = Math.max(0, Math.round(4.4 / f / 2.6));
  return n.flakes.forEach((U) => {
    const rt = Math.floor(U.x / f), st = Math.floor(U.y / b);
    at(rt, st, L.snow, U.o, Nr);
    for (let ft = 1; ft <= Ot; ft++)
      at(rt - ft, st, L.snow, U.o, Nr), at(rt + ft, st, L.snow, U.o, Nr), at(rt, st - ft, L.snow, U.o, Nr), at(rt, st + ft, L.snow, U.o, Nr);
  }), n.bolts.forEach((U) => {
    if (f <= 3.5)
      for (let rt = Math.floor(U.y / b); rt <= (U.y + 24) / b; rt++) for (let st = Math.floor(U.x / f); st <= (U.x + 11) / f; st++)
        Qm(s0, (st + 0.5) * f - U.x, (rt + 0.5) * b - U.y) && at(st, rt, L.sun, 1, Ns);
    else {
      const rt = Math.round(U.x / f), st = Math.round(U.y / b);
      l0.forEach((ft, nt) => ft.split("").forEach((lt, F) => {
        lt === "#" && at(rt + F, st + nt, L.sun, 1, Ns);
      }));
    }
  }), { col: j, ids: N };
}
function d0(o, n) {
  const i = n.px, l = Math.max(6, Math.round(n.width / i)), f = Math.max(6, Math.round(n.height / i)), b = n.width / l, g = n.height / f, v = n.ambient ? Math.floor((n.clock || 0) / 100) * 100 : 0, D = (k) => {
    const Z = Zu(k, n);
    return c0(Z, Ku(Z, { clock: v, ambient: n.ambient, seed: n.seed }), l, f, b, g, v, n.ambient);
  }, L = D(o), A = n.reveal == null ? 1 : tn(n.reveal);
  let B = L.col, I = L.ids;
  if (A < 1) {
    const k = n.prev ? D(n.prev) : null, Z = A * (l + 12);
    B = new Array(l * f), I = new Uint8Array(l * f);
    for (let J = 0; J < l * f; J++) {
      const j = J % l, N = J / l | 0;
      (n.reduce ? A : tn((Z - j) / 12)) > Jo(j, N) ? (B[J] = L.col[J], I[J] = L.ids[J]) : k ? (B[J] = k.col[J], I[J] = k.ids[J]) : (B[J] = null, I[J] = 255);
    }
  }
  return t0(B, I, l, f, { oneBit: n.oneBit, ink: n.ink || "#26221e", paper: n.paper || "#fbf9f6", snowInk: !1 });
}
function p0(o, n, i) {
  const l = i.width, f = i.height, b = i.reveal == null ? 1 : tn(i.reveal), g = (I, k) => {
    const Z = Zu(k, i);
    u0(I, Z, Ku(Z, i));
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
  const A = b * (l + 64) - 64, B = L.createLinearGradient(A, 0, A + 64, 0);
  B.addColorStop(0, "rgba(0,0,0,1)"), B.addColorStop(1, "rgba(0,0,0,0)"), L.globalCompositeOperation = "destination-in", L.fillStyle = B, L.fillRect(0, 0, l, f), L.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(D, 0, 0), o.restore();
}
function u0(o, n, i) {
  const { W: l, H: f, S: b, C: g, cw: v, yb: D, glowAt: L, soft: A, tw: B, sy: I } = n, k = o.getTransform().a || 1, Z = (S) => {
    o.shadowColor = S ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = S ? 4 * k : 0, o.shadowOffsetY = S ? 1.5 * k : 0;
  }, J = (S, Ot) => {
    const U = Ds(S);
    return "rgba(" + U[0] + "," + U[1] + "," + U[2] + "," + Math.max(0, Math.min(1, Ot)).toFixed(3) + ")";
  }, j = (S, Ot) => {
    const U = o.createLinearGradient(0, 0, l, 0);
    U.addColorStop(0, S[0]);
    for (let rt = 0; rt < S.length - 1; rt++) {
      const st = (rt + Ot) * v, ft = (st - B / 2) / l, nt = (st + B / 2) / l;
      ft > 0 && ft < 1 && U.addColorStop(ft, S[rt]), nt > 0 && nt < 1 && U.addColorStop(nt, S[rt + 1]);
    }
    return U.addColorStop(1, S[S.length - 1]), U;
  }, N = Math.max(24, Math.ceil(l / 4)), Q = (S, Ot) => {
    o.beginPath();
    for (let U = 0; U <= N; U++) {
      const rt = l * U / N, st = S == null ? 0 : D(rt) + S;
      U ? o.lineTo(rt, st) : o.moveTo(rt, st);
    }
    for (let U = N; U >= 0; U--) {
      const rt = l * U / N;
      o.lineTo(rt, D(rt) + Ot);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = j(b.filter((S) => !S.night).map((S) => S.sky), 0.75), o.fillRect(0, 0, l, f);
  const at = o.createLinearGradient(0, 0, l, 0);
  for (let S = 0; S <= 64; S++) {
    const Ot = L(l * S / 64);
    at.addColorStop(S / 64, J(Ot.c, Math.min(1, Ot.a)));
  }
  o.fillStyle = at;
  for (let S = 0; S < 8; S++)
    o.globalAlpha = 1 - S / 8, Q(S * 2 * I, (S + 1) * 2 * I);
  o.fillStyle = j(b.filter((S) => S.night).map((S) => S.sky), 1.25);
  const ct = Math.max(0.5, A), tt = 6;
  o.globalAlpha = 1, Q(null, -ct);
  for (let S = 0; S < tt; S++)
    o.globalAlpha = 1 - (S + 0.5) / tt, Q(-ct + 2 * ct * S / tt, -ct + 2 * ct * (S + 1) / tt);
  o.globalAlpha = 1;
  const q = new Path2D(r0), z = new Path2D(n0), ht = new Path2D(o0), yt = new Path2D(i0);
  o.fillStyle = g.star, i.stars.forEach((S) => {
    o.globalAlpha = S.o, S.big ? (o.save(), o.translate(S.x, S.y), o.scale(S.size, S.size), o.fill(q), o.restore()) : (o.beginPath(), o.arc(S.x, S.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Rt = Wa(g.sun, "#ffffff", 0.55);
  i.suns.forEach((S) => {
    const Ot = o.createRadialGradient(S.x, S.y, 0, S.x, S.y, S.halo);
    Ot.addColorStop(0, J(Rt, 0.42)), Ot.addColorStop(0.7, J(Rt, 0)), o.fillStyle = Ot, o.beginPath(), o.arc(S.x, S.y, S.halo, 0, Math.PI * 2), o.fill();
    const U = o.createLinearGradient(0, S.y - S.rad, 0, S.y + S.rad);
    U.addColorStop(0.6, g.sun), U.addColorStop(1, g.sunEdge), o.fillStyle = U, Z(!0), o.beginPath(), o.arc(S.x, S.y, S.rad, 0, Math.PI * 2), o.fill(), Z(!1);
  });
  const dt = Wa(g.moon, "#ffffff", 0.6);
  i.moons.forEach((S) => {
    o.save(), o.translate(S.x - S.d / 2, S.y - S.d / 2), o.scale(S.d / 46, S.d / 46);
    const Ot = o.createLinearGradient(0, 6, 0, 40);
    Ot.addColorStop(0, dt), Ot.addColorStop(1, g.moon), o.fillStyle = Ot, Z(!0), o.fill(z), Z(!1), o.restore();
  }), i.clouds.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.scale(S.w / 46, S.h / 30.66), o.translate(-4, -9.67), o.fillStyle = S.fill, Z(!0), o.fill(ht), Z(!1), o.restore();
  }), i.fogs.forEach((S) => {
    const Ot = o.createLinearGradient(S.x, 0, S.x + S.w, 0);
    Ot.addColorStop(0, J(S.c, 0)), Ot.addColorStop(0.25, J(S.c, S.a)), Ot.addColorStop(0.75, J(S.c, S.a)), Ot.addColorStop(1, J(S.c, 0)), o.fillStyle = Ot, o.fillRect(S.x, S.y, S.w, 6 * I);
  }), o.fillStyle = g.rain, i.drops.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((S) => {
    o.globalAlpha = S.o, o.beginPath(), o.arc(S.x, S.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((S) => {
    o.save(), o.globalAlpha = S.o, o.translate(S.x, S.y), o.fill(yt), o.restore();
  }), o.restore();
}
const f0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, bs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, ic = (o, n) => '<path class="' + n + '" d="' + o + '"/>', h0 = (o, n) => ' style="animation-delay:-' + Math.round(o * 137 % n) + 'ms"', Fa = (o, n, i, l) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + h0(o, 2400) + ' d="M' + o + " " + (n - i) + "L" + (o + f) + " " + (n - f) + "L" + (o + i) + " " + n + "L" + (o + f) + " " + (n + f) + "L" + o + " " + (n + i) + "L" + (o - f) + " " + (n + f) + "L" + (o - i) + " " + n + "L" + (o - f) + " " + (n - f) + 'Z"/>';
}, Pp = ([o, n, i], l) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + n + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', m0 = (o, n) => n ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', g0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + n + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + n + ' 60.65)"/></g>') : [19, 26, 33].map((n, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + n + ' 38)"/></g>')).join(""), b0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([n, i], l) => '<circle class="wbFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + n + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function w0(o, n, i, l) {
  const f = (b) => '<g filter="url(#' + l + '-sh)">' + b + "</g>";
  return o === "clear" ? n ? f(Pp(i ? bs.l : bs.s, l)) + (i ? Fa(70, 20, 5.83, 1) + Fa(78.33, 41.67, 3.75, 0.8) + Fa(60, 71.67, 3.33, 0.6) : Fa(42, 12, 3.5, 1) + Fa(47, 25, 2.25, 0.8) + Fa(36, 43, 2, 0.6)) : f(m0(l, i)) : o === "partly" ? f(n ? Pp(i ? bs.lp : bs.sp, l) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(ic(i ? Er.lp : Er.sp, n ? "wbCloudLight" : "wbBright")) + (n ? i ? Fa(73.33, 16.67, 4.17, 0.9) : Fa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? f(ic(i ? Er.lc : Er.s, n ? "wbCloudLight" : "wbBright")) + (n ? i ? Fa(15, 15, 3.75, 0.8) + Fa(76.67, 13.33, 2.92, 0.6) : Fa(9, 9, 2.25, 0.8) + Fa(46, 8, 1.75, 0.6) : "") : f(ic(i ? Er.lr : Er.s, "wbCloudLight")) + (o === "rain" ? g0(i) : b0(i));
}
const v0 = (o, n) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (n ? 1.6 : 1) + '" stdDeviation="' + (n ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function y0(o, n, i, l) {
  let f = f0(o);
  const b = f === "night" || !!i;
  f === "night" && (f = "clear");
  const g = n ? 90 : 54;
  return { k: f, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + v0(l, n) + w0(f, b, n, l) + "</svg>" };
}
const x0 = [
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
], ws = (o, n) => (x0[n % 8 * 8 + o % 8] + 0.5) / 64, ao = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], ea = (o, n, i) => [Math.round(o[0] + (n[0] - o[0]) * i), Math.round(o[1] + (n[1] - o[1]) * i), Math.round(o[2] + (n[2] - o[2]) * i)], Mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Rp = (o, n) => {
  let i = o * 374761393 + n * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Zn = [255, 255, 255], pa = ao("#26221e"), Hp = ao("#0288d1"), k0 = ao("#01579b"), sc = ao(ja.cloudDay), lc = ao(ja.cloudNight), vs = ao(ja.dusk), cc = ao(ja.sunEdge), M0 = ao(ja.sun), S0 = 10, Np = 0.3, en = 56, Xu = 21;
function _0(o) {
  const n = Array.from({ length: Xu }, () => new Array(en).fill(void 0)), i = (g, v, D) => {
    n[v][g] = D;
  }, l = ea(vs, pa, 0.35), f = ea(pa, Zn, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? en - 2 : en - 1;
    for (let D = 6 - g; D <= v; D++) i(D, g, g < 2 ? l : g === 6 ? f : pa);
  }
  const b = [vs, cc, lc, ao(ja.skyRainDay), ea(vs, pa, 0.2), ea(o, pa, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const D = 9 + v * 6;
    for (let L = 0; L < g; L++) {
      const A = b[(v * 2 + L * 3) % b.length];
      for (let B = D; B < D + 5; B++)
        i(B, 7 + L * 2, ea(A, pa, 0.12)), i(B, 8 + L * 2, L === g - 1 ? ea(A, Zn, 0.3) : A);
      i(D + 5, 7 + L * 2, pa), i(D + 5, 8 + L * 2, pa);
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
  return i(44, 20, M0), n;
}
function C0(o, n, i, l) {
  const f = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(n)), g = new Uint8ClampedArray(f * b * 4), v = ao(l.skyClearDay), D = ao(l.skyFogDay), L = _0(v), A = Math.round(b * 0.55), B = Mi(1 - Math.log(i / Np) / Math.log(S0 / Np)), I = ea(v, D, B), k = (N) => Mi((N - 0.1) / 0.9), Z = Mi((1 - Math.exp(-2 / i) - 0.2) / 0.8), J = Math.round(f / 2 - en / 2), j = A + 3;
  for (let N = 0; N < b; N++) {
    const Q = j - 1 - N, at = N - j;
    for (let ct = 0; ct < f; ct++) {
      const tt = ct - J;
      let q, z;
      const ht = Q >= 0 && Q < Xu && tt >= 0 && tt < en ? L[Q][tt] : void 0;
      if (ht)
        q = ht, z = Z;
      else if (Q >= 0 && Q <= 1 && tt >= 4 - Q && tt <= 5 - Q)
        q = ea(Zn, Hp, 0.15), z = Z;
      else if (N < A) {
        const dt = Mi(((N + 0.5) / A - 0.15) / 0.85) * 3, S = Math.min(3, Math.floor(dt + ws(ct + 2, N + 5)));
        q = ea(I, Zn, S * 0.1), z = B * 0.95;
      } else {
        const dt = (N - A + 0.5) / (b - A), S = Math.min(1.5, 6e-3 / (dt * dt)), Ot = Mi(dt * 1.4) * 3, U = Math.min(3, Math.floor(Ot + ws(ct + 1, N + 6)));
        q = ea(Hp, k0, U / 3);
        const rt = 1 + Math.round(dt * 7), st = Math.floor(ct / (rt * 3)), ft = 0.06 + 0.16 * dt, nt = ct % (rt * 3) < rt;
        nt && Rp(st, N) < ft ? q = ea(q, Zn, 0.18 + 0.1 * (1 - dt)) : nt && dt > 0.5 && Rp(st, N - 1) < ft && (q = ea(q, pa, 0.12)), z = k(1 - Math.exp(-S / i)), at === 0 && tt >= 3 && tt <= 8 ? (q = ea(q, Zn, tt < 6 ? 0.8 : 0.45), z = Z) : at >= 0 && at <= 2 && tt >= en && tt < en + 40 ? ((1 - (tt - en) / 40) * (at === 1 ? 0.9 : 0.5) > ws(ct, N + 3) && (q = ea(q, Zn, 0.5)), z = Z) : at === 0 && tt >= 6 && tt < en && (q = ea(q, pa, tt % 2 === 0 ? 0.35 : 0.2), z = Z);
      }
      const yt = z > ws(ct, N) ? D : q, Rt = (N * f + ct) * 4;
      g[Rt] = yt[0], g[Rt + 1] = yt[1], g[Rt + 2] = yt[2], g[Rt + 3] = 255;
    }
  }
  return { data: g, w: f, h: b };
}
const A0 = {
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
}, T0 = 1.6;
function L0(o, n) {
  const i = o ? A0[String(o).toUpperCase()] : void 0;
  if (!i || !(n > 0)) return;
  const l = (b) => Math.abs(Math.log(b[2] / n)), f = i.reduce((b, g) => l(g) < l(b) ? g : b);
  return l(f) <= Math.log(T0) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const D0 = (o, n) => n === "mi" ? o * 1.609344 : n === "m" ? o / 1e3 : n === "ft" ? o * 3048e-7 : n === "yd" ? o * 9144e-7 : o, E0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Be = {
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
}, Pe = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, We = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function B0() {
  const { pivot: o, slider: n, iconbtn: i, warp: l, outline: f } = Be;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Pe[o.ease]],
    ["--ab-blur", n.glow + "px"],
    ["--ab-spread", n.spread + "px"],
    ["--ab-str", n.strength + "%"],
    ["--ab-blur2", n.glow + n.hold + "px"],
    ["--ab-spread2", n.spread + n.hold / 4 + "px"],
    ["--ab-str2", n.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (n.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", n.ein + "ms"],
    ["--ab-out", n.eout + "ms"],
    ["--ab-ease", Pe[n.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Pe[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", l.cdur + "ms"],
    ["--wc-delay", l.cdelay + "ms"],
    ["--wc-ease", Pe[l.ease]],
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
const dc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", P0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", R0 = 300, Es = (o) => Math.min(1, R0 / Math.max(1, o)), pc = (o, n) => 1 + (n / 100 - 1) * Es(o.offsetWidth);
function H0(o, n) {
  n.style.cssText += ";" + B0();
  let i = null;
  const l = (A) => {
    A.classList.remove("mvMoving", "mvLit"), A.style.setProperty("--rx", "0deg"), A.style.setProperty("--ry", "0deg"), A.style.setProperty("--sc", 1), A._down = !1;
  };
  o.addEventListener("pointermove", (A) => {
    var N, Q;
    const B = A.pointerType === "touch" || We() ? null : (Q = (N = A.target).closest) == null ? void 0 : Q.call(N, dc);
    if (i && i !== B && l(i), i = B, !B || B.disabled) return;
    const I = Be.pivot, k = B.getBoundingClientRect(), Z = (A.clientX - k.left) / k.width, J = (A.clientY - k.top) / k.height, j = 1;
    B.classList.add("mvPv", "mvMoving", "mvLit"), B.style.setProperty("--pv-persp", I.persp / Es(Math.max(B.offsetWidth, B.offsetHeight)) + "px"), B.style.setProperty("--ry", (j * (Z - 0.5) * 2 * I.tilt * Es(B.offsetWidth)).toFixed(3) + "deg"), B.style.setProperty("--rx", (j * -(J - 0.5) * 2 * I.tilt * Es(B.offsetHeight)).toFixed(3) + "deg"), B.style.setProperty("--mx", (Z * 100).toFixed(1) + "%"), B.style.setProperty("--my", (J * 100).toFixed(1) + "%"), B._down || B.style.setProperty("--sc", pc(B, I.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (A) => {
    i && !i.contains(A.relatedTarget) && (l(i), i = null);
  }), o.addEventListener("pointerdown", (A) => {
    var I, k;
    const B = We() ? null : (k = (I = A.target).closest) == null ? void 0 : k.call(I, dc);
    B && (B._down = !0, B.classList.add("mvPv"), B.classList.remove("mvMoving"), B.style.setProperty("--sc", pc(B, Be.pivot.press)));
  }), o.addEventListener("pointerup", (A) => {
    var I, k;
    const B = (k = (I = A.target).closest) == null ? void 0 : k.call(I, dc);
    B && (B._down = !1, B.style.setProperty("--sc", A.pointerType === "touch" ? 1 : pc(B, Be.pivot.lift)));
  });
  let f = null;
  o.addEventListener("pointerover", (A) => {
    var B, I, k;
    A.pointerType !== "touch" && ((k = (I = (B = A.target).closest) == null ? void 0 : I.call(B, ".tfBar")) == null || k.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (A) => {
    var I, k;
    const B = (k = (I = A.target).closest) == null ? void 0 : k.call(I, ".tfBar");
    B && !B.contains(A.relatedTarget) && B !== f && B.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (A) => {
    var I, k;
    const B = (k = (I = A.target).closest) == null ? void 0 : k.call(I, ".tfBar");
    B && (f = B, B.classList.add("mvHold"));
  });
  const b = (A) => {
    if (!f) return;
    f.classList.remove("mvHold");
    const B = f.getBoundingClientRect();
    (A.pointerType === "touch" || A.clientX < B.left || A.clientX > B.right || A.clientY < B.top || A.clientY > B.bottom) && f.classList.remove("mvHover"), f = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (A) => {
    var B, I;
    (I = (B = A.target).matches) != null && I.call(B, ".tfBar:focus-visible") && A.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (A) => {
    var B;
    (B = A.target.classList) == null || B.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (A) => {
    var I, k;
    const B = (k = (I = A.target).closest) == null ? void 0 : k.call(I, ".tfBar");
    !B || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(A.key) || (B.classList.add("mvHold"), clearTimeout(B._k), B._k = setTimeout(() => B.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (A) => {
    var I, k;
    const B = (k = (I = A.target).closest) == null ? void 0 : k.call(I, "button.tfIcon[data-act]");
    B && N0(B);
  });
  let g = null;
  const v = (A, B, I) => {
    A.querySelector(":scope>.mvEdge") || A.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const k = A.getBoundingClientRect(), Z = k.width / 2, J = k.height / 2, j = B.clientX - k.left - Z, N = B.clientY - k.top - J, Q = j ? Z / Math.abs(j) : 1 / 0, at = N ? J / Math.abs(N) : 1 / 0, ct = Math.min(Math.max(1 / Math.min(Q, at), 0), 1);
    let tt = Math.atan2(N, j) * 180 / Math.PI + 90;
    tt < 0 && (tt += 360);
    const q = I ? 100 : ct * 100;
    A.style.setProperty("--edge-proximity", q.toFixed(3)), A.style.setProperty("--cursor-angle", tt.toFixed(3) + "deg"), A.classList.toggle("mvLitEdge", I || q >= Be.outline.lightAt);
  }, D = (A) => {
    A.classList.remove("mvLitEdge"), A.style.setProperty("--edge-proximity", "0"), A._down = !1;
  }, L = (A) => {
    var I;
    const B = (I = A.closest) == null ? void 0 : I.call(A, P0);
    return B && !n.classList.contains("tfEditing") ? B : null;
  };
  o.addEventListener("pointermove", (A) => {
    if (A.pointerType === "touch") return;
    const B = L(A.target);
    g && g !== B && D(g), g = B, B && !B._down && v(B, A, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (A) => {
    g && !g.contains(A.relatedTarget) && (D(g), g = null);
  }), o.addEventListener("pointerdown", (A) => {
    const B = L(A.target);
    B && Be.outline.press && (B._down = !0, v(B, A, !0));
  }), o.addEventListener("pointerup", (A) => {
    const B = L(A.target);
    B && (B._down = !1, A.pointerType === "touch" ? D(B) : v(B, A, !1));
  }), new MutationObserver((A) => {
    var B;
    for (const I of A) {
      const k = I.target;
      if (I.type === "attributes") {
        (B = k.classList) != null && B.contains("tfMoreBackdrop") && !k.hidden && I.oldValue !== null && Op(k);
        continue;
      }
      I.addedNodes.forEach((Z) => {
        Z.nodeType === 1 && Z.classList.contains("tfMoreBackdrop") && !Z.hidden && Op(Z);
      });
    }
  }).observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ju = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function Qu(o, n) {
  const i = [];
  for (let l = o; l && l !== n && l.parentNode; l = l.parentNode) i.unshift([...l.parentNode.children].indexOf(l));
  return i;
}
const tf = (o, n) => n.reduce((i, l) => i == null ? void 0 : i.children[l], o);
function N0(o) {
  var k;
  if (We() || o._warp) return;
  const n = Be.warp, i = n.amount / 100, l = o.firstElementChild;
  if (!l) return;
  const f = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[n.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = Ju(o), D = (k = v.dataset) == null ? void 0 : k.k, L = Qu(o, v), A = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const B = l.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...f, filter: b }], { duration: n.win, easing: Pe.exit, fill: "forwards" }), I = performance.now();
  B.finished.then(() => {
    const Z = () => {
      var ct, tt;
      const J = D ? v.isConnected ? v : (ct = g.querySelector) == null ? void 0 : ct.call(g, '[data-k="' + CSS.escape(D) + '"]') : v, j = J && tf(J, L);
      if (j === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === A && performance.now() - I < 420) {
        requestAnimationFrame(Z);
        return;
      }
      (((tt = j == null ? void 0 : j.matches) != null && tt.call(j, "button.tfIcon") ? j : o).firstElementChild || l).animate([{ ...f, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: n.wout, easing: Pe[n.ease] }), B.cancel(), o._warp = 0;
    };
    Z();
  });
}
const ef = (o) => {
  let n = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const l = o[i - 1] || o[i], f = o[i], b = o[i + 1], g = o[i + 2] || b, v = [f[0] + (b[0] - l[0]) / 6, f[1] + (b[1] - l[1]) / 6], D = [b[0] - (g[0] - f[0]) / 6, b[1] - (g[1] - f[1]) / 6];
    n += "C" + v.map((L) => L.toFixed(1)).join(" ") + " " + D.map((L) => L.toFixed(1)).join(" ") + " " + b.map((L) => L.toFixed(1)).join(" ");
  }
  return n;
}, af = (o, n, i, l = "mvGrid") => [0, 1, 2].map((f) => {
  const b = (n + (i - n) * f / 2).toFixed(1);
  return '<line class="' + l + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function of(o, n = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(n != null && n.getTotalLength)) return;
  const l = Be.graphs, f = n.getTotalLength();
  n.animate([{ strokeDasharray: f, strokeDashoffset: f }, { strokeDasharray: f, strokeDashoffset: 0 }], { duration: l.draw, easing: Pe.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: l.draw * 0.6, delay: l.draw * 0.3 + g * 12, easing: Pe.standard, fill: "backwards" }));
}
function Bs(o, n, i, l, f) {
  if (o.getAnimations().forEach((A) => A.cancel()), o.style.left = l + "px", o.style.width = f + "px", We() || n === l && i === f) return;
  const b = Be.tabs, g = b.stretch / 100, v = (A, B) => ({ left: A + "px", width: B + "px" }), L = l > n ? v(n + (l - n) * (0.15 * (1 - g)), l + f - (n + (l - n) * (0.15 * (1 - g)))) : v(l, n + i - l - (n - l) * (0.15 * (1 - g)));
  o.animate([v(n, i), { offset: 0.5, ...L }, v(l, f)], { duration: b.dur, easing: Pe.standard });
}
function O0(o) {
  const n = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (f) => f.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), l = (f, b) => b ? [...f.children].indexOf(b) : -1;
  o.addEventListener("click", (f) => {
    var Q, at, ct;
    const b = (at = (Q = f.target).closest) == null ? void 0 : at.call(Q, n + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || We() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const D = l(g, v), L = g.getBoundingClientRect(), A = v.getBoundingClientRect(), B = getComputedStyle(v).borderRadius, I = g.getRootNode(), k = Ju(g), Z = (ct = k.dataset) == null ? void 0 : ct.k, J = Qu(g, k), j = performance.now(), N = () => {
      var S, Ot, U;
      const tt = Z && !k.isConnected ? (S = I.querySelector) == null ? void 0 : S.call(I, '[data-k="' + CSS.escape(Z) + '"]') : k, q = tt && tf(tt, J), z = (Ot = q == null ? void 0 : q.matches) != null && Ot.call(q, n) ? i(q) : null;
      if (!z || l(q, z) === D) {
        performance.now() - j < 700 && requestAnimationFrame(N);
        return;
      }
      const ht = q.getBoundingClientRect(), yt = z.getBoundingClientRect(), Rt = getComputedStyle(z);
      (U = q.querySelector(":scope>.mvSegInd")) == null || U.remove();
      const dt = document.createElement("span");
      dt.className = "mvSegInd", dt.style.cssText = "top:" + (yt.top - ht.top - q.clientTop) + "px;height:" + yt.height + "px;border-radius:" + B + ";background:" + Rt.backgroundColor + ";box-shadow:" + Rt.boxShadow, getComputedStyle(q).position === "static" && (q.style.position = "relative"), q.prepend(dt), q.classList.add("mvSegMoving"), Bs(dt, A.left - L.left - q.clientLeft, A.width, yt.left - ht.left - q.clientLeft, yt.width), clearTimeout(q._seg), q._seg = setTimeout(() => {
        dt.remove(), q.classList.remove("mvSegMoving");
      }, Be.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const nf = (o) => getComputedStyle(o).placeItems.startsWith("end");
function Op(o) {
  const n = o.firstElementChild;
  if (We() || !n || n.classList.contains("still")) return;
  const i = Be.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Pe.standard }), n.style.animation = "none", n.animate(nf(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Pe[i.ease] }), [...(n.classList.contains("tfMorePair") && n.querySelector(".tfMore") || n).children].forEach((f, b) => f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Pe.standard, fill: "backwards" }));
}
function I0(o, n) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (We() || !i || o.hidden || o._closing) {
    n();
    return;
  }
  const l = Be.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + l.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: l.close, easing: Pe.exit, fill: "forwards" });
  const f = i.animate(nf(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + l.from / 100 + ")" }], { duration: l.close, easing: Pe.exit, fill: "forwards" });
  let b = !1;
  const g = () => {
    b || (b = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((v) => v.cancel()), i.getAnimations().forEach((v) => v.cancel()), n());
  };
  f.finished.then(g, g), setTimeout(g, l.close + 80);
}
const F0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function q0(o, n) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", F0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: n }));
}
function V0(o) {
  if (We()) return;
  const n = Be.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: n.dur, easing: Pe.spring });
  const i = o.querySelector(".mvTick path");
  i && n.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: n.dur * 0.5, easing: Pe.standard, fill: "backwards" });
}
const uc = (o, n, i, l, f = 1) => (o + n * i * f) * Math.pow(l, f);
function fc(o) {
  const n = Be.drag.squash / 100;
  !o || We() || !n || o.animate([{ transform: "scale(" + (1 + n * 0.4) + "," + (1 - n) + ")" }, { transform: "scale(" + (1 - n * 0.1) + "," + (1 + n * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Ip(o) {
  if (!o || We()) return;
  const n = Be.expand;
  [...o.children].slice(1).forEach((i, l) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: n.delay + l * n.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ve = 6e4, ie = 36e5, va = 864e5, Ti = 1440, W0 = 6, j0 = 10 * Ve, Fp = 3, z0 = 3, ys = { day: [6, 22], waking: [7, 23], all: [0, 24] }, G0 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], $0 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", qp = (o, n, i, l) => '<circle cx="' + o + '" cy="' + n + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const b = Math.cos(f * Math.PI / 180), g = Math.sin(f * Math.PI / 180), v = i + 2, D = i + 2 + l;
  return "M" + (o + b * v).toFixed(2) + " " + (n + g * v).toFixed(2) + "L" + (o + b * D).toFixed(2) + " " + (n + g * D).toFixed(2);
}).join("") + '"/>', Yo = (o) => '<path d="' + $0 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Zo = (o) => '<path d="' + o + '"/>', Vp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function U0(o, n) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return n ? Vp : qp(12, 12, 4, 2.5);
    case "clear-night":
      return Vp;
    case "partlycloudy":
      return (n ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : qp(7.5, 7.5, 2.6, 1.4)) + Yo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Yo();
    case "fog":
      return Zo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Yo(i) + Zo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Yo(i) + Zo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Yo(i) + Zo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Yo(i) + Zo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Yo(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Yo(i) + Zo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Yo(i) + Zo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Zo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Zo("M12 8v5M12 16h.01");
  }
}
const hc = (o, n) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + U0(o, n) + "</svg>", Y0 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Z0 = 30 * Ve, K0 = 7, X0 = 3, Wp = 1, J0 = Ve, Q0 = 15 * Ve, t1 = 5, se = {
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
}, bt = {
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
}, Pc = 7, Xo = 256, e1 = 3, jp = 700, a1 = 1800, rf = 5 * Ve;
let xs = null, zp = 0, Si = null;
function o1() {
  return xs && Date.now() - zp < rf ? Promise.resolve(xs) : Si || (Si = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var l, f;
    const n = (((l = o.radar) == null ? void 0 : l.past) || []).slice(-6), i = (((f = o.radar) == null ? void 0 : f.nowcast) || []).slice(0, e1);
    return xs = { host: o.host, frames: [...n.map((b) => ({ ...b, past: !0 })), ...i] }, zp = Date.now(), xs;
  }).finally(() => {
    Si = null;
  }), Si);
}
function n1(o, n, i, l) {
  const f = Pc, b = 2 ** f, g = o * Math.PI / 180, v = (n + 180) / 360 * b * Xo, D = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Xo, L = v - i / 2, A = D - l / 2, B = [];
  for (let I = Math.floor(L / Xo); I <= Math.floor((L + i - 1) / Xo); I++) for (let k = Math.floor(A / Xo); k <= Math.floor((A + l - 1) / Xo); k++)
    k < 0 || k >= b || B.push({ x: (I % b + b) % b, y: k, left: I * Xo - L, top: k * Xo - A });
  return B;
}
const r1 = {
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
}, i1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], s1 = Object.keys(bt.phases), l1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Gp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, sf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ks = 100, $p = "µg/m³", c1 = "weather_alerts.air_quality_pollen", Os = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], d1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, p1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], u1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, f1 = { daily: 1, hourly: 2 }, xt = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), ta = (o, n) => o.replace(/\{(\w+)\}/g, (i, l) => n[l] ?? ""), Qo = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Up = /* @__PURE__ */ new Map();
function lf(o) {
  let n = Up.get(o);
  if (n === void 0) {
    const i = "http://www.w3.org/2000/svg", l = document.createElementNS(i, "svg"), f = document.createElementNS(i, "path");
    l.setAttribute("viewBox", "0 0 24 24"), l.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", o), l.append(f), document.body.append(l);
    const b = f.getBBox();
    l.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, D = v / 24;
    n = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * D).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * D).toFixed(2) + "px" : "", Up.set(o, n);
  }
  return n ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + n + '"><path d="' + o + '"/></svg>' : Qo(o);
}
const h1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, fe = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Yp = /* @__PURE__ */ new Map(), Zp = /* @__PURE__ */ new Map(), mc = /* @__PURE__ */ new WeakMap(), m1 = (o) => {
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
function Qt(o, n, i) {
  const l = Number(o);
  if (Number.isNaN(l)) return String(o);
  const f = (n == null ? void 0 : n.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, g = f ? "en-US" : m1(n), v = JSON.stringify([g, b]);
  let D = Yp.get(v);
  if (!D) {
    try {
      D = new Intl.NumberFormat(g, b);
    } catch {
      D = new Intl.NumberFormat(void 0, b);
    }
    Yp.set(v, D);
  }
  return D.format(l);
}
const Nc = (o) => {
  var n;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.language) || (o == null ? void 0 : o.language) || void 0;
};
function g1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (mc.has(o)) return mc.get(o);
  const n = o.time_format, i = n === "language" || n === "system" || !n ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(n === "language" ? o.language : void 0).includes("10") : n === "12";
  return mc.set(o, i), i;
}
const cf = (o) => {
  var n, i;
  return ((n = o == null ? void 0 : o.locale) == null ? void 0 : n.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function df(o, n) {
  const i = JSON.stringify([o, n]);
  let l = Zp.get(i);
  if (!l) {
    try {
      l = new Intl.DateTimeFormat(o, n);
    } catch {
      l = new Intl.DateTimeFormat(void 0, { ...n, timeZone: void 0 });
    }
    Zp.set(i, l);
  }
  return l;
}
const Xe = (o, n) => df(Nc(n), { hour: "numeric", minute: "2-digit", hourCycle: g1(n == null ? void 0 : n.locale) ? "h12" : "h23", timeZone: cf(n) }).format(o), Kp = (o, n) => df(Nc(n), { weekday: "short", timeZone: cf(n) }).format(o), b1 = (o, n) => o.toLocaleDateString(Nc(n), { weekday: "narrow" }), ke = (o, n) => fe(n) ? Qt(Math.round(Number(n)), o.locale) + "°" : "–", yn = (o) => {
  const n = new Date(o);
  return n.setHours(0, 0, 0, 0), n;
}, Br = (o, n) => o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate(), ua = Math.PI / 180, w1 = 2440588, v1 = 2451545, Is = ua * 23.4397, y1 = 149598e3, x1 = -0.833 * ua, k1 = 0.133 * ua, Xp = 5 * Ve, pf = (o) => o.getTime() / va - 0.5 + w1 - v1, uf = (o, n) => Math.atan2(Math.sin(o) * Math.cos(Is) - Math.tan(n) * Math.sin(Is), Math.cos(o)), ff = (o, n) => Math.asin(Math.sin(n) * Math.cos(Is) + Math.cos(n) * Math.sin(Is) * Math.sin(o)), M1 = (o, n) => ua * (280.16 + 360.9856235 * o) - n, S1 = (o, n, i) => Math.asin(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(o));
function hf(o) {
  const n = ua * (357.5291 + 0.98560028 * o), i = ua * (1.9148 * Math.sin(n) + 0.02 * Math.sin(2 * n) + 3e-4 * Math.sin(3 * n)), l = n + i + ua * 102.9372 + Math.PI;
  return { ra: uf(l, 0), dec: ff(l, 0), dist: y1 };
}
function mf(o) {
  const n = ua * (218.316 + 13.176396 * o), i = ua * (134.963 + 13.064993 * o), l = ua * (93.272 + 13.22935 * o), f = n + ua * 6.289 * Math.sin(i), b = ua * 5.128 * Math.sin(l);
  return { ra: uf(f, b), dec: ff(f, b), dist: 385001 - 20905 * Math.cos(i) };
}
const gf = (o, n, i, l) => {
  const f = pf(n), b = o(f);
  return S1(M1(f, ua * -l) - b.ra, ua * i, b.dec);
}, Fs = (o, n, i) => gf(hf, o, n, i), _1 = (o, n, i) => gf(mf, o, n, i);
function bf(o, n, i, l) {
  const f = {};
  let b = i.getTime(), g = o(i) - n;
  for (let v = b + Xp; v <= l.getTime(); v += Xp) {
    const D = o(new Date(v)) - n;
    if (g < 0 != D < 0) {
      const L = new Date(b + (v - b) * g / (g - D));
      D > 0 ? f.rise ?? (f.rise = L) : f.set ?? (f.set = L);
    }
    b = v, g = D;
  }
  return f;
}
const wf = (o) => {
  const n = yn(o);
  return [n, new Date(n.getTime() + va)];
}, C1 = (o, n, i) => bf((l) => Fs(l, n, i), x1, ...wf(o)), A1 = (o, n, i) => bf((l) => _1(l, n, i), k1, ...wf(o));
function gc(o) {
  const n = pf(o), i = hf(n), l = mf(n), f = Math.acos(Math.sin(i.dec) * Math.sin(l.dec) + Math.cos(i.dec) * Math.cos(l.dec) * Math.cos(i.ra - l.ra)), b = Math.atan2(i.dist * Math.sin(f), l.dist - i.dist * Math.cos(f)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - l.ra), Math.sin(i.dec) * Math.cos(l.dec) - Math.cos(i.dec) * Math.sin(l.dec) * Math.cos(i.ra - l.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const T1 = (o) => {
  const n = o * 28;
  return n < 0.5 || n > 27.5 ? "new_moon" : n < 6.5 ? "waxing_crescent" : n < 7.5 ? "first_quarter" : n < 13.5 ? "waxing_gibbous" : n < 14.5 ? "full_moon" : n < 20.5 ? "waning_gibbous" : n < 21.5 ? "last_quarter" : "waning_crescent";
}, Or = (o) => {
  const n = o == null ? void 0 : o.config;
  return n && fe(n.latitude) && fe(n.longitude) ? { lat: Number(n.latitude), lon: Number(n.longitude) } : null;
};
function Pr(o, n) {
  var L, A, B;
  const i = Or(o), l = i ? C1(n, i.lat, i.lon) : {}, f = (L = o == null ? void 0 : o.states) == null ? void 0 : L["sun.sun"], b = yn(n).getTime(), g = (I) => {
    const k = I ? new Date(I) : null;
    return k && Number.isFinite(k.getTime()) && yn(k).getTime() === b ? k : null;
  }, v = g((A = f == null ? void 0 : f.attributes) == null ? void 0 : A.next_rising), D = g((B = f == null ? void 0 : f.attributes) == null ? void 0 : B.next_setting);
  return v && (l.rise = v), D && (l.set = D), l;
}
function L1(o) {
  var l;
  const n = (l = o == null ? void 0 : o.states) == null ? void 0 : l["sun.sun"];
  if ((n == null ? void 0 : n.state) === "below_horizon" || (n == null ? void 0 : n.state) === "above_horizon") return n.state === "below_horizon";
  const i = Or(o);
  return i ? Fs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Kn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Ir = (o, n) => {
  var l;
  const i = (l = o.entities) == null ? void 0 : l[n];
  return !i || !i.hidden && !i.entity_category;
}, Ie = (o, n, i) => {
  var l, f;
  for (const b of n) {
    const g = (l = o.states) == null ? void 0 : l[b];
    if (!Kn(g)) continue;
    const v = (f = g.attributes) == null ? void 0 : f[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, D1 = (o, n) => n.map((i) => {
  var l;
  return (l = o.states) == null ? void 0 : l[i];
}).find(Kn), E1 = (o, n, i) => n.map((l) => {
  var f;
  return (f = o.states) == null ? void 0 : f[l];
}).find((l) => {
  var f;
  return Kn(l) && (((f = l.attributes) == null ? void 0 : f.supported_features) == null || Number(l.attributes.supported_features) & f1[i]);
});
function vn(o, n, i) {
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
function Ps(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [f, ...b] = o.formatEntityAttributeValueToParts(n, i, l).map((g) => g.value);
      return { number: f, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: Qt(l, o.locale), unit: vn(o, n, i) };
}
function Jp(o, n, i, l) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(n, i, l);
  } catch {
  }
  const f = Ps(o, n, i, l);
  return (f.number + " " + f.unit).trim();
}
function Ko(o, n) {
  var l;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(n);
  } catch {
  }
  const i = (l = n.attributes) == null ? void 0 : l.unit_of_measurement;
  return r1[n.state] || (i && fe(n.state) ? Qt(n.state, o.locale) + " " + i : n.state);
}
function bn(o, n) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(n, { type: "entity" });
  } catch {
  }
  return ((i = n.attributes) == null ? void 0 : i.friendly_name) || n.entity_id;
}
const Qp = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ms = (o) => sf.find(([, n]) => o <= n)[0];
function B1(o, n) {
  if (n === "Beaufort") return Math.round(o);
  const i = n ? d1[n] : void 0;
  if (i === void 0) return;
  const l = p1.findIndex((f) => o * i < f);
  return l === -1 ? 12 : l;
}
const tu = (o, n) => {
  const i = n ? u1[n] : void 0;
  return i === void 0 ? void 0 : o * i;
}, eu = (o) => Object.keys(o.states || {}).find((n) => {
  var i, l;
  return n.startsWith("sensor.") && ((l = (i = o.entities) == null ? void 0 : i[n]) == null ? void 0 : l.platform) === "moon";
}), bc = (o) => Object.values(o.states || {}).filter((n) => {
  var i, l;
  return n.entity_id.startsWith("sensor.") && ((i = n.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((l = n.attributes) == null ? void 0 : l.state_class) ?? "") && Ir(o, n.entity_id);
}).map((n) => n.entity_id).sort()[0];
function P1(o) {
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
const vf = (o, n, i) => {
  var f, b, g;
  const l = (b = (f = o.entities) == null ? void 0 : f[i]) == null ? void 0 : b.platform;
  return !!l && !!((g = n[l]) != null && g.includes(c1));
};
function R1(o, n) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((l) => {
    var f;
    return l.entity_id.startsWith("sensor.") && Os.includes(((f = l.attributes) == null ? void 0 : f.device_class) ?? "") && Ir(o, l.entity_id) && vf(o, n, l.entity_id);
  }).sort((l, f) => l.entity_id.localeCompare(f.entity_id)).forEach((l) => {
    i.has(l.attributes.device_class) || i.set(l.attributes.device_class, l.entity_id);
  }), Os.map((l) => i.get(l)).filter(Boolean);
}
const H1 = (o, n) => Object.values(o.states || {}).filter((i) => {
  var l, f;
  return i.entity_id.startsWith("sensor.") && Ir(o, i.entity_id) && vf(o, n, i.entity_id) && (((f = (l = o.entities) == null ? void 0 : l[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function au(o, n, i) {
  const l = Math.max(n - o, 1e-6), f = i[i.length - 1], b = i.find((L) => l / L <= 4) ?? f * Math.ceil(l / (4 * f)), g = Math.floor(o / b) * b;
  let v = Math.ceil(n / b) * b;
  v === g && (v = g + b);
  const D = [];
  for (let L = g; L <= v + b / 1e3; L += b) D.push(L);
  return { min: g, max: v, ticks: D };
}
const N1 = (o, n, i) => {
  const l = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), f = l(o), b = l(n);
  return "rgb(" + f.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, O1 = (o, n, i, l) => {
  const f = i * Math.abs(1 - 2 * l), b = l < 0.5 ? 0 : 1;
  return "M " + o + " " + (n - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (n + i) + " A " + f + " " + i + " 0 0 " + b + " " + o + " " + (n - i) + " Z";
}, ca = ({ icon: o, name: n, sub: i, visual: l, double: f, backdrop: b, cls: g, zone: v, callouts: D }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + lf(o) + '</div><div class="wbText"><span class="wbName">' + xt(n) + "</span>" + (i ? '<span class="wbSub">' + xt(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (D != null && D.length ? '<div class="wbCallouts">' + D.slice(0, 3).map((L) => Array.isArray(L) ? '<span class="wbCallout"><span>' + xt(L[0]) + "</span><span>" + xt(L[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + xt(L) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + l + "</div>") + "</div>", Ss = (o) => '<div class="wbZoneM">' + o + "</div>", qa = (o, n) => '<div class="wbValue"><span class="wbNum">' + xt(o) + "</span>" + (n ? '<span class="wbUnitV">' + xt(n) + "</span>" : "") + "</div>";
function I1(o) {
  const n = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / n * 100, l = (v) => v / Ti * 100 + "%", f = (v) => v.map((D) => D.t + "," + i(D.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + l(v.t) + '">' + Qo(v.rise ? se.sunsetUp : se.sunsetDown) + xt(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + xt(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ti + ' 100" preserveAspectRatio="none">' + o.night.map(([v, D]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (D - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + Ti + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + f(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + l(v.t + 12) + ";width:" + l(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + l(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + l(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + xt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + xt(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + l(v.t) + '">' + xt(v.label) + "</span>").join("") + "</div></div>", g;
}
function ou(o, n, i = 120, l = 300) {
  const g = o.map((N) => N.value), v = Math.min(...g), D = Math.max(...g), L = D - v || 1, A = (N) => N / (o.length - 1) * l, B = (N) => 18 + (1 - (N - v) / L) * (i - 18 - 18), I = o.map((N, Q) => [A(Q), B(N.value)]), k = I.length > 2 ? ef(I) : "M" + I.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), Z = g.indexOf(D), J = g.indexOf(v), j = (N) => N === 0 ? "start" : N === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + l + " " + i + '" aria-hidden="true">' + af(l, 18, i - 18) + ('<path class="wbArea" d="' + k + "L" + l + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + k + '" vector-effect="non-scaling-stroke"></path><text x="' + A(Z) + '" y="' + (B(D) - 6) + '" text-anchor="' + j(Z) + '">' + xt(n(D)) + '</text><text x="' + A(J) + '" y="' + (B(v) + 14) + '" text-anchor="' + j(J) + '">' + xt(n(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + xt(o[0].label) + '</text><text x="' + l + '" y="' + i + '" text-anchor="end">' + xt(o[o.length - 1].label) + "</text></svg>";
}
function F1(o, n) {
  const b = o.map((B) => B.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, D = v - g || 1, L = 300 / o.length, A = (B) => (1 - (B - g) / D) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((B, I) => '<rect class="wbBar' + (B.now ? " wbNowBar" : "") + '" x="' + (I * L + L * 0.2) + '" y="' + A(B.value) + '" width="' + L * 0.6 + '" height="' + (104 - A(B.value)) + '" rx="6"></rect><text x="' + (I * L + L / 2) + '" y="120" text-anchor="middle">' + xt(B.label) + "</text>").join("") + "</svg>";
}
const q1 = [
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
], V1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], nu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], W1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let j1 = 0;
function ru(o, { getHass: n, entityId: i, style: l = "bitmap", motion: f = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: D } = {}) {
  var Ui, En;
  const L = "wb" + ++j1 + "-", A = document.createElement("div");
  A.className = "wb", A.dataset.style = l;
  const B = document.createElement("div");
  B.className = "wbBento", A.appendChild(B), o.replaceChildren(A);
  const I = document.createElement("div");
  I.className = "wb wbPopup", I.dataset.style = l, I.hidden = !0;
  const k = ["aq_tile", "pollen_tile", "radar_tile"], Z = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), J = { current: "wide", hourly: "wide", compared_to_average: "double" }, j = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  Z.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = J[c] || "tile", m.hidden = !0, j.includes(c) && (m.dataset.xl = ""), B.appendChild(m), N[c] = { el: m, html: null };
  });
  let Q = !1, at = null, ct = 0, tt = -1, q = !1, z = null, ht = "";
  const yt = "homecore-next-view", Rt = (() => {
    try {
      return localStorage.getItem(yt);
    } catch {
      return null;
    }
  })(), dt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Rt === "bars" ? "bars" : "strip", aq: void 0 }, S = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ot = /* @__PURE__ */ new Date(), U = /* @__PURE__ */ new Date();
  const rt = {}, st = {}, ft = {}, nt = (c) => {
    var m;
    return ((m = ft[c]) == null ? void 0 : m.forecast) ?? [];
  }, lt = (c, m) => {
    var w;
    return ft[m] ? (w = c.states) == null ? void 0 : w[ft[m].entityId] : void 0;
  };
  function F(c) {
    const m = st[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete st[c]), ft[c] && delete ft[c];
  }
  function mt(c, m, w) {
    var R;
    if (typeof ((R = c.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((V) => {
        Q || st[m] !== y || (V != null && V.forecast ? ft[m] = { entityId: w, forecast: V.forecast } : delete ft[m], ln());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (V) {
      y.unsub = Promise.reject(V);
    }
    y.unsub.catch(() => {
      st[m] === y && delete st[m];
    }), st[m] = y;
  }
  function Ct(c, m) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const R = E1(c, m, y);
      ((w = st[y]) == null ? void 0 : w.entityId) !== (R == null ? void 0 : R.entity_id) && (F(y), R && mt(c, y, R.entity_id));
    }
  }
  const Vt = (c, m, w, y = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: y,
    no_attributes: y,
    significant_changes_only: !1
  });
  async function oe(c, m) {
    var Y, X, G;
    const w = Ie(c, m, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, R = await Vt(c, y, new Date(Date.now() - 3 * ie)), V = (G = (X = (Y = R == null ? void 0 : R[y]) == null ? void 0 : Y.find((et) => {
      var it;
      return typeof ((it = et.a) == null ? void 0 : it.pressure) == "number";
    })) == null ? void 0 : X.a) == null ? void 0 : G.pressure;
    S.pressureHistory = typeof V == "number" ? { entityId: y, value: V } : void 0;
  }
  async function ra(c, m) {
    var X;
    const w = Ie(c, m, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, R = yn(/* @__PURE__ */ new Date()), V = await Vt(c, y, new Date(R.getTime() - K0 * va)), Y = /* @__PURE__ */ new Map();
    for (const G of (V == null ? void 0 : V[y]) ?? []) {
      const et = (X = G.a) == null ? void 0 : X.temperature, it = new Date((G.lc ?? G.lu) * 1e3);
      if (typeof et != "number" || it >= R) continue;
      const gt = it.toDateString();
      Y.set(gt, Math.max(Y.get(gt) ?? -1 / 0, et));
    }
    S.temperatureHistory = { entityId: y, dailyHighs: [...Y.values()], days: [...Y.entries()].map(([G, et]) => ({ date: new Date(G), high: et })) };
  }
  async function fa(c) {
    const m = bc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    S.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function Mo() {
    const c = n == null ? void 0 : n();
    if (!c || Q || typeof c.callWS != "function") return;
    const m = Ft(c);
    S.lastFetch = Date.now(), [oe(c, m), ra(c, m), fa(c)].forEach((w) => w.then(() => ln(), () => {
    }));
  }
  async function Ta() {
    const c = n == null ? void 0 : n();
    if (!c) return;
    const m = Ie(c, Ft(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, y = yn(/* @__PURE__ */ new Date());
    try {
      const R = await Vt(c, w, y), V = (Y) => ((R == null ? void 0 : R[w]) ?? []).map((X) => {
        var G;
        return { time: X.lu * 1e3, value: (G = X.a) == null ? void 0 : G[Y] };
      }).filter((X) => typeof X.value == "number");
      S.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: V("temperature"), humidity: V("humidity") }, ln();
    } catch {
    }
  }
  async function on(c) {
    const m = n == null ? void 0 : n();
    if (m)
      try {
        const w = await Vt(m, c, new Date(Date.now() - 24 * ie), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((V) => fe(V.s)), R = Math.max(1, Math.ceil(y.length / 48));
        S.aqHistory = { entityId: c, points: y.filter((V, Y) => Y % R === 0).map((V) => ({ label: Xe(new Date(V.lu * 1e3), m), value: Number(V.s) })) }, ln();
      } catch {
      }
  }
  function kn(c) {
    S.categories === void 0 && (S.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      S.categories = P1(m);
    }, () => {
      S.categories = {};
    }).then(() => ln()));
  }
  function Ft(c) {
    var w;
    const m = Object.keys(c.states || {}).filter((y) => y.startsWith("weather.") && Ir(c, y)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...m.filter((y) => y !== i)] : m;
  }
  const he = (c) => S.categories ? { air: R1(c, S.categories), pollen: H1(c, S.categories) } : { air: [], pollen: [] };
  function Ze(c, m, w, y) {
    if (l === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + hc(c, w || c === "clear-night") + "</span>";
    if (l === "smooth") {
      const R = y0(c, m === 90, w, L + "g-" + y);
      return '<span class="wbWx wbS' + m + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + xt(Iu(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const Fr = () => nt("daily").filter((c) => c.templow != null).slice(0, W0);
  function vt(c, m) {
    const w = new Date(m.datetime), y = /* @__PURE__ */ new Date();
    return Br(w, y) ? bt.today : Br(w, new Date(y.getTime() + va)) ? bt.tomorrow : Kp(w, c);
  }
  const Mn = (c, m, w) => w === 0 ? vt(c, m) : Kp(new Date(m.datetime), c);
  function qr(c, m) {
    var it, gt, Dt, Tt;
    const w = D1(c, m);
    if (!w) return "";
    const y = Fr(), R = dt.openDay !== void 0 ? y[dt.openDay] : void 0, V = Ie(c, m, "temperature"), Y = y[0], X = Y && Br(new Date(Y.datetime), /* @__PURE__ */ new Date()), G = ((gt = (it = c.config) == null ? void 0 : it.unit_system) == null ? void 0 : gt.temperature) || ((Dt = w.attributes) == null ? void 0 : Dt.temperature_unit) || "";
    let et = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + xt(bt.openPage) + '">' : '<div class="wbCurrent">') + Ze(w.state, 90, L1(c), "now") + '<div class="wbTempBlock">' + (V && fe(V.value) ? '<div class="wbTemp"><span class="wbDeg">' + xt(Qt(Math.round(Number(V.value)), c.locale)) + '</span><span class="wbUnit">' + xt(G) + "</span></div>" : "") + '<div class="wbPlace">' + xt(((Tt = c.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + xt(Ko(c, w)) + "</div>" + (X && Y.templow != null ? '<div class="wbRange">' + xt(ta(bt.range, { high: ke(c, Y.temperature), low: ke(c, Y.templow) })) + "</div>" : "") + "</div></div>";
    if (et += Me(c) + Pi(c), y.length) {
      const _t = X && V && fe(V.value) ? ke(c, V.value) : "", Gt = (Bt, pt, Ht) => Bt === 0 && _t ? '<span class="wbAsDay">' + xt(pt) + '</span><span class="wbAsNow">' + xt(Ht) + "</span>" : xt(pt);
      et += '<div class="wbColumns" role="list">' + y.map((Bt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + Gt(pt, Mn(c, Bt, pt), bt.now) + "</span>" + Ze(Bt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + Gt(pt, ke(c, Bt.temperature), _t) + '</span><span class="wbLo">' + xt(ke(c, Bt.templow)) + "</span></span></button>").join("") + "</div>", et += '<div class="wbHalves" role="list">' + y.map((Bt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Ze(Bt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + xt(vt(c, Bt)) + '</span><span class="wbSub">' + xt(ta(bt.highLow, { high: ke(c, Bt.temperature), low: ke(c, Bt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return et + "</div>" + (R ? So(c, m, R) : "") + "</div>";
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
  }, tr = {
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
  function Sn(c) {
    const m = Date.now(), w = nt("hourly").filter((gt) => new Date(gt.datetime).getTime() > m - ie).slice(0, 13);
    if (w.length < 2) return "";
    const y = (gt) => Xe(new Date(gt.datetime), c), R = (gt) => Bi[gt.condition] || "", V = (gt) => tr[gt.condition] || gt.condition;
    let Y = R(w[0]);
    if (!Y) return "";
    let X = w[0], G = 0;
    for (const gt of w.slice(1))
      G === 2 || V(gt) === V(X) || !R(gt) || (Y += (G ? " and " : ", ") + R(gt) + " from " + y(gt), X = gt, G++);
    const et = Number(w[0].temperature), it = w.filter((gt) => fe(gt.temperature));
    if (fe(et) && it.length) {
      const gt = it.reduce((Tt, _t) => Number(_t.temperature) < Number(Tt.temperature) ? _t : Tt), Dt = it.reduce((Tt, _t) => Number(_t.temperature) > Number(Tt.temperature) ? _t : Tt);
      et - Number(gt.temperature) >= 3 ? Y += ", down to " + ke(c, gt.temperature) + " by " + y(gt) : Number(Dt.temperature) - et >= 3 && (Y += ", up to " + ke(c, Dt.temperature) + " by " + y(Dt));
    }
    return Y[0].toUpperCase() + Y.slice(1) + ".";
  }
  const Me = (c) => {
    const m = Sn(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + xt(m) + "</p></div>" : "";
  };
  function Pi(c) {
    const [m, w] = ys[v == null ? void 0 : v()] || ys.day, y = Date.now(), R = nt("hourly").filter((V) => {
      const Y = new Date(V.datetime), X = Y.getHours();
      return Y.getTime() > y - ie / 2 && X >= m && X < w && fe(V.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((V, Y) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + xt(Xe(new Date(V.datetime), c)) + "</span>" + Ze(V.condition ?? "cloudy", 40, V.is_daytime === !1, "hr" + Y) + '<span class="wbHourTemp">' + xt(ke(c, V.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function La(c) {
    const m = c.getTime(), w = Date.now() - ie;
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
  function So(c, m, w) {
    const y = yn(new Date(w.datetime)), R = La(y), V = Xt(R), Y = V.includes(dt.dayMode) ? dt.dayMode : "temperature", X = (G) => G === "humidity" ? bt.humidity : bt.modes[G];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ze(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + xt(vt(c, w)) + '</span><span class="wbSub">' + xt(ta(bt.highLow, { high: ke(c, w.temperature), low: ke(c, w.templow) })) + '</span></div><button class="wbBack" title="' + xt(bt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Qo(se.back) + "</button></div>" + (V.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + V.map((G) => '<button aria-pressed="' + (G === Y) + '" data-wb="day-mode" data-mode="' + G + '" data-wb-focus="day-mode-' + G + '">' + xt(X(G)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + I1(Vr(c, m, y, R, Y)) + "</div></div>";
  }
  function Vr(c, m, w, y, R) {
    var Ro;
    const V = w.getTime(), Y = Date.now(), X = Br(w, /* @__PURE__ */ new Date()), G = (te) => (te - V) / Ve, et = (te) => Xe(new Date(te), c), it = (te) => new Date(te.datetime).getTime(), gt = [0, 3, 6, 9, 12, 15, 18, 21].map((te) => ({ t: te * 60, label: et(V + te * ie), minor: te % 6 !== 0 })), { rise: Dt, set: Tt } = Pr(c, w), _t = [], Gt = [];
    Dt && (_t.push({ t: G(Dt.getTime()), label: et(Dt.getTime()), rise: !0 }), Gt.push([0, G(Dt.getTime())])), Tt && (_t.push({ t: G(Tt.getTime()), label: et(Tt.getTime()), rise: !1 }), Gt.push([G(Tt.getTime()), Ti]));
    const Bt = Or(c);
    !Dt && !Tt && Bt && Fs(new Date(V + va / 2), Bt.lat, Bt.lon) < 0 && Gt.push([0, Ti]);
    const pt = X ? G(Y) : void 0, Ht = { hours: gt, sun: _t, night: Gt };
    if (!y.length && !X) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: bt.noHourly };
    if (R === "precipitation") {
      const te = y.some((Qe) => Qe.precipitation_probability != null), Ho = y.map((Qe) => ({ t: G(it(Qe)), v: Number((te ? Qe.precipitation_probability : Qe.precipitation) ?? 0) })), po = vn(c, lt(c, "hourly"), "precipitation"), No = Math.max(0, ...Ho.map((Qe) => Qe.v)), ii = te ? 100 : au(0, Math.max(No, 1), [0.5, 1, 2, 5, 10]).max, Yi = (Qe) => te ? Qt(Qe, c.locale) + "%" : Qt(Qe, c.locale, { maximumFractionDigits: 1 }) + " " + po, gr = Ho.find((Qe) => Qe.v === No);
      return {
        ...Ht,
        kind: "bars",
        points: Ho,
        min: 0,
        max: ii,
        ticks: [0, ii / 2, ii],
        format: Yi,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: gr && No > 0 ? { t: gr.t + 30, v: gr.v, label: Yi(gr.v) } : void 0,
        note: No > 0 ? void 0 : bt.noRain
      };
    }
    const It = R === "humidity" ? "humidity" : "temperature", be = y.filter((te) => te[It] != null && (!X || it(te) >= Y)).map((te) => ({ t: G(it(te)), v: Number(te[It]) }));
    let At, ne = [];
    if (pt !== void 0) {
      const te = Ie(c, m, It);
      te && fe(te.value) && (At = { t: pt, v: Number(te.value) }, be.unshift(At)), ne = (((Ro = S.todayHistory) == null ? void 0 : Ro.day) === w.toDateString() ? S.todayHistory[It] : []).filter((po) => po.time <= Y).map((po) => ({ t: Math.max(0, G(po.time)), v: po.value })), At && ne.length && ne.push(At);
    }
    const $t = [...ne, ...be];
    if (!$t.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: bt.noHourly };
    const ka = $t.map((te) => te.v), co = au(Math.min(...ka), Math.max(...ka), It === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    It === "humidity" && (co.min = Math.max(0, co.min), co.max = Math.min(100, co.max), co.ticks = co.ticks.filter((te) => te >= 0 && te <= 100));
    const ri = It === "humidity" ? (te) => Qt(te, c.locale) + "%" : (te) => ke(c, te), mr = It === "temperature" ? $t.reduce((te, Ho) => Ho.v > te.v ? Ho : te) : void 0;
    return { ...Ht, kind: "line", points: be, past: ne, ...co, format: ri, now: At, peak: mr ? { ...mr, label: ri(mr.v) } : void 0 };
  }
  function jt(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function ya(c, m, w = Fp) {
    var V, Y;
    const y = nt("daily"), R = [];
    for (let X = 0; X < w; X++) for (const G of [!1, !0]) {
      const et = c.getTime() + (X * 24 + (G ? 12 : 0)) * ie, it = et + 12 * ie, gt = {};
      m.forEach((Tt) => {
        const _t = new Date(Tt.datetime).getTime();
        Tt.condition && _t >= et && _t < it && (gt[Tt.condition] = (gt[Tt.condition] ?? 0) + (Y0.has(Tt.condition) ? 2 : 1));
      });
      let Dt = (V = Object.entries(gt).sort((Tt, _t) => _t[1] - Tt[1])[0]) == null ? void 0 : V[0];
      if (!Dt) {
        const Tt = new Date(et).toDateString();
        Dt = ((Y = y.find((_t) => new Date(_t.datetime).toDateString() === Tt)) == null ? void 0 : Y.condition) ?? "cloudy";
      }
      R.push({ cond: G && Dt === "sunny" ? "clear-night" : Dt, night: G });
    }
    return R;
  }
  function Ri(c, m, w) {
    const y = lt(c, "hourly"), R = m.precipitation_probability != null ? Qt(m.precipitation_probability, c.locale) + "%" : "", V = m.precipitation ? Qt(m.precipitation, c.locale) + " " + vn(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return R ? [R, V] : [V || "–", ""];
      case "wind":
        return m.wind_speed != null ? [Qt(Math.round(m.wind_speed), c.locale), vn(c, y, "wind_speed")] : ["–", ""];
      default:
        return [ke(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Hi(c, m, w) {
    const [y, R] = ys[v == null ? void 0 : v()] || ys.day, V = [];
    for (let Y = 0; Y < 4 && V.length < 3; Y++) {
      const X = /* @__PURE__ */ new Date();
      X.setHours(0, 0, 0, 0), X.setDate(X.getDate() + Y);
      const G = new Date(X);
      G.setHours(R, 0, 0, 0), X.setHours(y, 0, 0, 0), !(G.getTime() <= w || !m.some((et) => {
        const it = new Date(et.datetime).getTime();
        return it >= X.getTime() && it <= G.getTime();
      })) && V.push({ a: X.getTime(), b: G.getTime(), label: vt(c, { datetime: X.toISOString() }) });
    }
    return V;
  }
  function Da(c, m, w, y, R, V) {
    const Y = (w.b - m.a) / ie, X = (pt) => ((pt - m.a) / ie).toFixed(3), G = 80, et = 32, it = [];
    for (const pt = new Date(m.a - va); pt.getTime() < w.b + va; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ht, set: It } = Pr(c, new Date(pt));
      Ht && It && it.push({ rise: Ht.getTime(), set: It.getTime() });
    }
    const gt = (pt, Ht) => G - (G - et) * Math.sin(Math.PI * (Ht - pt.rise) / (pt.set - pt.rise)), Dt = (pt) => !it.some((Ht) => pt >= Ht.rise && pt <= Ht.set);
    let Tt = "", _t = "", Gt = "";
    it.forEach((pt, Ht) => {
      const It = [];
      for (let At = pt.rise; At <= pt.set; At += 15 * Ve) It.push(X(At) + "," + gt(pt, At).toFixed(2));
      It.push(X(pt.set) + "," + G), Tt += '<polyline class="wbLineArc" points="' + It.join(" ") + '"/>';
      const be = it[Ht + 1];
      be && (Tt += '<rect class="wbLineNight" x="' + X(pt.set) + '" y="0" width="' + ((be.rise - pt.set) / ie).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([At, ne]) => {
        At < m.a || At > w.b || (_t += '<line class="wbLineEdge" x1="' + X(At) + '" x2="' + X(At) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + V(At) + '">' + ne + " " + xt(Xe(new Date(At), c)) + "</span>");
      });
    });
    const Bt = it.find((pt) => R >= pt.rise && R <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Y + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + _t + '<line class="wbLineHorizon" x1="0" x2="' + Y + '" y1="' + G + '" y2="' + G + '"/></svg>' + Gt + (Bt ? '<span class="wbLineNow" style="left:' + V(R) + ";top:" + gt(Bt, R) + '%">' + hc("sunny", !1) + "</span>" : "") + y.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + V(pt.t) + '">' + hc(pt.entry.condition ?? "cloudy", Dt(pt.t)) + "</span>").join("");
  }
  function Ae(c, m) {
    delete rt.hourly;
    const w = dt.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + xt(w === "bars" ? bt.nextDays : bt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + xt(bt.showAs) + '">' + ["strip", "bars"].map((At) => '<button aria-pressed="' + (At === w) + '" data-wb="hourly-view" data-view="' + At + '" data-wb-focus="hourly-view-' + At + '">' + xt(bt.views[At]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return _n(c, m, y);
    const R = nt("hourly"), V = Math.floor(Date.now() / Ve) * Ve, Y = R.filter((At) => new Date(At.datetime).getTime() > V - ie);
    if (!Y.length) return "";
    const X = jt(Y), G = X.includes(dt.hourlyMode) ? dt.hourlyMode : "temperature", et = Hi(c, R, V);
    if (!et.length) return "";
    const it = et[0], gt = et[et.length - 1], Dt = (it.b - it.a) / ie, Tt = (At) => "calc(var(--wb-u) * " + ((At - it.a) / ie).toFixed(3) + ")", _t = new Date(it.a);
    _t.setHours(6, 0, 0, 0), _t.getTime() > it.a && _t.setDate(_t.getDate() - 1);
    const Gt = Math.ceil((gt.b - _t.getTime()) / va);
    l !== "line" && (rt.hourly = { segs: ya(_t, R, Gt), seed: _t.getDate(), columns: Gt });
    const Bt = (At) => At === it.a ? " wbFirst" : At === gt.b ? " wbLast" : "", pt = [];
    for (let At = it.a; At < gt.b; ) {
      const ne = new Date(At);
      ne.setHours(24, 0, 0, 0);
      const $t = Math.min(ne.getTime(), gt.b);
      pt.push({ a: At, b: $t, label: vt(c, { datetime: new Date(At).toISOString() }), page: et.find((ka) => ka.a >= At && ka.a < $t) || et.find((ka) => ka.a < $t && ka.b > At) }), At = $t;
    }
    const Ht = V > it.a && V < gt.b ? Math.floor((V - it.a) / (2 * ie)) * 2 : 0, It = [];
    for (let At = it.a; At <= gt.b; At += ie) {
      const ne = new Date(At), $t = Bt(At);
      !$t && ne.getHours() % z0 || !$t && (Math.abs(it.a - At) < 2 * ie || Math.abs(gt.b - At) < 2 * ie) || V >= it.a && Math.abs(At - V) < 1.5 * ie && !$t || It.push({ t: At, edge: $t, label: Xe(ne, c), entry: At >= V - ie ? R.find((ka) => new Date(ka.datetime).getTime() === At) : void 0 });
    }
    V > it.a && V < it.b && It.push({ t: V, edge: V - it.a < ie ? " wbFirst" : it.b - V < ie ? " wbLast" : "", label: bt.now, entry: Y[0], now: !0 });
    const be = (At, ne) => '<span class="wbMark' + At.edge + (At.now ? " wbNowMark" : "") + '" style="left:' + Tt(At.t) + '">' + ne + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (X.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + X.map((At) => '<button aria-pressed="' + (At === G) + '" data-wb="hourly-mode" data-mode="' + At + '" data-wb-focus="hourly-mode-' + At + '">' + xt(bt.modes[At]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + xt(bt.nextHours) + '" data-span="' + Dt + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Dt + ");width:calc(var(--wb-u) * " + (gt.b - it.a) / ie + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((gt.b - it.a) / (2 * ie)) + 1)].map((At, ne) => '<i class="wbSnap" style="left:' + Tt(it.a + ne * 2 * ie) + '"></i>').join("") + '<div class="wbDays">' + pt.map((At, ne) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((At.b - At.a) / ie).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ne === 0 ? Ht : (((($t = At.page) == null ? void 0 : $t.a) ?? At.a) - it.a) / ie) + '" data-wb-focus="hours-day-' + ne + '">' + xt(At.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + It.map((At) => be(At, xt(At.label))).join("") + "</div>" + (l === "line" ? '<div class="wbSky wbLineSky">' + Da(c, it, gt, It, V, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(_t.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (l === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (V > it.a ? '<i class="wbPast" style="width:' + Tt(Math.min(V, gt.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(V) + '"></i>' : "") + pt.slice(1).map((At) => '<i class="wbMidnight" style="left:' + Tt(At.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + It.map((At) => {
      if (!At.entry) return "";
      const [ne, $t] = Ri(c, At.entry, G);
      return be(At, '<span class="wbPrimaryV">' + xt(ne) + '</span><span class="wbSecondary">' + xt($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ni(c) {
    const m = G0, w = m.findIndex(([G]) => G >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [y, R] = m[w - 1], [V, Y] = m[w], X = (c - y) / (V - y);
    return "rgb(" + R.map((G, et) => Math.round(G + (Y[et] - G) * X)).join(",") + ")";
  }
  function _n(c, m, w) {
    var Tt;
    const y = nt("daily").filter((_t) => fe(_t.templow) && fe(_t.temperature)).slice(0, 7);
    if (!y.length) return "";
    const R = Math.min(...y.map((_t) => Number(_t.templow))), V = Math.max(...y.map((_t) => Number(_t.temperature))), Y = Math.max(1, V - R), X = (_t) => Math.max(0, Math.min(100, (_t - R) / Y * 100)).toFixed(2), G = /F/.test(vn(c, lt(c, "daily"), "temperature")), et = (_t) => G ? (_t - 32) / 1.8 : _t, it = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_t) => Ni(et(R + _t * Y)) + " " + _t * 100 + "%").join(",") + ")", gt = (Tt = Ie(c, m, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (jt(nt("hourly").filter((_t) => new Date(_t.datetime).getTime() > Date.now() - ie)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((_t, Gt) => {
      const Bt = vt(c, _t), pt = Br(new Date(_t.datetime), /* @__PURE__ */ new Date()), Ht = Number(_t.templow), It = Number(_t.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + xt(ta(bt.rangeRow, { day: Bt, low: ke(c, Ht), high: ke(c, It) })) + '"><span class="wbRangeDay">' + xt(Bt) + "</span>" + Ze(_t.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + xt(ke(c, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + it + ";clip-path:inset(0 " + (100 - X(It)) + "% 0 " + X(Ht) + '% round 4px)"></i>' + (pt && fe(gt) ? '<i class="wbRangeNow" style="left:' + X(Number(gt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + xt(ke(c, It)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Wr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], zr = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [y, R] = c[w - 1], [V, Y] = c[w];
      return N1(R, Y, (m - y) / (V - y));
    }
    return c[c.length - 1][1];
  }, nn = (c, m, w) => {
    if (!m || !w) return Wr[5][1];
    const y = (c.getTime() - w.getTime()) / Ve;
    return y >= -90 ? zr(jr, y) : zr(Wr, (c.getTime() - m.getTime()) / Ve);
  }, qs = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function oo(c) {
    const m = Ot, { rise: w, set: y } = Pr(c, m), R = w && y ? Math.round((y.getTime() - w.getTime()) / Ve) : 0, V = Math.floor(R / 60), Y = R % 60, X = (be) => be ? Xe(be, c) : "–", G = new Date(m);
    G.setDate(G.getDate() + 1);
    const et = Pr(c, G), it = et.rise && et.set ? Math.round((et.set.getTime() - et.rise.getTime()) / Ve) : 0, gt = new Date(m);
    gt.setDate(gt.getDate() - 1);
    const Dt = !!(w && y && m >= w && m <= y), Tt = !!(w && m < w), _t = Dt ? w : Tt ? Pr(c, gt).set : y, Gt = Dt ? y : Tt ? w : et.rise, Bt = _t && Gt ? Math.min(1, Math.max(0, (m.getTime() - _t.getTime()) / (Gt.getTime() - _t.getTime()))) : 0, pt = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / Ve)) : 0, Ht = Gt ? qs(pt) : "–", It = Dt ? bt.untilSunset : bt.untilSunrise;
    return ca({
      icon: se.sunny,
      name: bt.sun,
      sub: R ? ta(bt.daylightShort, { hours: V, minutes: Y }) : void 0,
      cls: "wbSunTile",
      callouts: [[bt.callout.riseTomorrow, X(et.rise)], [bt.callout.setTomorrow, X(et.set)], ...it ? [[bt.callout.dayTomorrow, Math.floor(it / 60) + "h " + it % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + nn(m, w, y) + '"><svg class="wbSunTrack" data-up="' + (Dt ? 1 : 0) + '" data-f="' + Bt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + xt(Ht) + '</span><span class="wbSunWord">' + xt(It) + '</span></div><span class="wbSunAt wbSunRise">' + xt(X(w)) + '</span><span class="wbSunAt wbSunSet">' + xt(X(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Ss(qa(Ht, ""))
    });
  }
  const Te = 22;
  function er(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Te, R = y / 2, V = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < y * 3 || w < y * 3 || c.dataset.drawn === V) return;
    c.dataset.drawn = V;
    const Y = "M" + R + " " + (w - y) + "V" + y + "A" + R + " " + R + " 0 0 1 " + y + " " + R + "H" + (m - y) + "A" + R + " " + R + " 0 0 1 " + (m - R) + " " + y + "V" + (w - y), X = "M" + (m - R) + " " + (w - y) + "A" + R + " " + R + " 0 0 1 " + (m - y) + " " + (w - R) + "H" + y + "A" + R + " " + R + " 0 0 1 " + R + " " + (w - y), G = 16, et = 6, it = "M" + G + " 0H" + (m - G) + "A" + G + " " + G + " 0 0 1 " + m + " " + G + "V" + (w - G) + "A" + G + " " + G + " 0 0 1 " + (m - G) + " " + w + "H" + G + "A" + G + " " + G + " 0 0 1 0 " + (w - G) + "V" + G + "A" + G + " " + G + " 0 0 1 " + G + " 0ZM" + (y + et) + " " + y + "A" + et + " " + et + " 0 0 0 " + y + " " + (y + et) + "V" + (w - y - et) + "A" + et + " " + et + " 0 0 0 " + (y + et) + " " + (w - y) + "H" + (m - y - et) + "A" + et + " " + et + " 0 0 0 " + (m - y) + " " + (w - y - et) + "V" + (y + et) + "A" + et + " " + et + " 0 0 0 " + (m - y - et) + " " + y + "Z", gt = c.dataset.up === "1", Dt = Number(c.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const _t = document.createElementNS(Tt, "path");
    _t.setAttribute("d", gt ? Y : X), c.replaceChildren(_t);
    const Gt = _t.getTotalLength(), Bt = _t.getPointAtLength(Gt * Dt), pt = gt ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + L + 'sun-day"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + L + 'sun-done"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (gt ? (pt * Dt).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + it + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + it + '" mask="url(#' + L + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + it + '" mask="url(#' + L + 'sun-done)"></path><circle class="wbSunDot' + (gt ? "" : " wbSunNight") + '" cx="' + Bt.x.toFixed(1) + '" cy="' + Bt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const _o = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => er(m.target))) : null;
  function Gr() {
    _o == null || _o.disconnect(), A.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      er(c), _o == null || _o.observe(c);
    });
  }
  function Vs(c, m, w) {
    const y = (Y) => L + "moon-" + Y, R = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + O1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", V = (Y, X, G, et, it, gt) => '<filter id="' + y(Y) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + X + '" numOctaves="' + G + '" seed="' + et + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Dt) => "<feFunc" + Dt + ' type="linear" slope="' + it + '" intercept="' + gt + '"></feFunc' + Dt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + V("mottle", "0.045", 4, 3, 1.8, -0.4) + V("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + q1.map(([Y, X, G, et, it, gt]) => '<ellipse cx="' + Y + '" cy="' + X + '" rx="' + G + '" ry="' + et + '" fill-opacity="' + gt + '" transform="rotate(' + it + " " + Y + " " + X + ')"></ellipse>').join("") + "</g>" + V1.map(([Y, X, G]) => '<circle class="wbCrater" cx="' + Y + '" cy="' + X + '" r="' + G + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + W1.map(([Y, X]) => '<line x1="54.4" y1="95" x2="' + Y + '" y2="' + X + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + nu.map(([Y, X, G]) => '<circle cx="' + Y + '" cy="' + X + '" r="' + G * 2 + '"></circle>').join("") + "</g>" + nu.map(([Y, X, G]) => '<circle class="wbBrightCenter" cx="' + Y + '" cy="' + X + '" r="' + G + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Oi(c) {
    const m = U, w = Or(c), y = (w == null ? void 0 : w.lat) ?? 0, R = gc(m), V = eu(c), Y = V ? c.states[V] : void 0, X = Kn(Y) && s1.includes(Y.state) ? Y.state : T1(R.phase), { rise: G, set: et } = w ? A1(m, w.lat, w.lon) : {}, it = R.phase > 0.5 != y < 0, gt = Qt(Math.round(R.fraction * 100), c.locale) + "%", Dt = G ?? et;
    return Dt && Xe(Dt, c), ca({
      icon: se.night,
      name: bt.moon,
      sub: bt.phases[X],
      callouts: [...G ? [[bt.callout.moonrise, Xe(G, c)]] : [], ...et ? [[bt.callout.moonset, Xe(et, c)]] : [], [bt.callout.lit, gt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Vs(R.fraction, it, y < 0) + "</div>" + Ss(qa(Qt(Math.round(R.fraction * 100), c.locale), "%"))
    });
  }
  function Ut(c, m) {
    var _t;
    const w = Ie(c, m, "wind_speed");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "wind_gust_speed"), R = Ie(c, m, "wind_bearing"), V = R && fe(R.value) ? Number(R.value) : void 0, Y = B1(Number(w.value), (_t = w.stateObj.attributes) == null ? void 0 : _t.wind_speed_unit), X = Ps(c, w.stateObj, "wind_speed", w.value), G = V !== void 0 ? bt.cardinal[i1[((V + 11.25) / 22.5 | 0) % 16]] : void 0, et = y ? Jp(c, y.stateObj, "wind_gust_speed", y.value) : void 0, it = [G ? ta(bt.windFrom, { direction: G }) : void 0, Y !== void 0 ? Y + " " + bt.beaufort : void 0].filter(Boolean).join(" · ") || et, gt = (Gt, Bt) => {
      const pt = (Gt - 90) * Math.PI / 180;
      return [100 + Bt * Math.cos(pt), 100 + Bt * Math.sin(pt)];
    }, Dt = Array.from({ length: 36 }, (Gt, Bt) => Bt * 10).map((Gt) => {
      const Bt = Gt % 90 === 0, [pt, Ht] = gt(Gt, 97), [It, be] = gt(Gt, Bt ? 83 : 89);
      return '<line class="wbTick' + (Bt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ht + '" x2="' + It + '" y2="' + be + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Bt]) => {
      const [pt, Ht] = gt(Bt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ht + '">' + xt(bt.cardinal[Gt]) + "</text>";
    }).join("");
    return ca({ icon: se.windy, name: bt.wind, sub: it, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Dt + Tt + (V !== void 0 ? '<path class="wbMarker" transform="rotate(' + V + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + xt(X.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + xt(X.unit) + "</text></svg>" });
  }
  const wt = (c, m) => {
    if (c < 3) return bt.advice.fine;
    if (c < 8) return bt.advice.sunblock;
    const w = Date.now(), y = nt("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > w && R.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? ta(bt.advice.avoidUntil, { time: Xe(new Date(y.datetime), m) }) : bt.advice.avoidToday;
  };
  function me(c, m) {
    const w = Ie(c, m, "uv_index");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), R = bt.uvLevel[Qp(y)], V = /* @__PURE__ */ new Date();
    V.setHours(23, 59, 59, 999);
    const Y = nt("hourly").filter((it) => it.uv_index != null && new Date(it.datetime) > /* @__PURE__ */ new Date() && new Date(it.datetime) <= V).reduce((it, gt) => !it || gt.uv_index > it.uv ? { uv: gt.uv_index, time: new Date(gt.datetime) } : it, void 0), X = l1[Qp(y)], G = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), et = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + L + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + G.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + X + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + X + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + X + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + G.toFixed(1) + '" fill="url(#' + L + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + xt(Qt(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + xt(R) + "</span></div>" + Ss(qa(Qt(Math.round(y), c.locale), ""));
    return ca({
      icon: se.sunnyAlert,
      name: bt.metrics.uv_index,
      sub: Y && Y.uv > y ? ta(bt.uvPeak, { level: R, uv_index: Qt(Math.round(Y.uv), c.locale), time: Xe(Y.time, c) }) : R,
      zone: et,
      cls: "wbUv",
      callouts: [wt(y, c), [bt.callout.now, Qt(Math.round(y), c.locale) + " · " + R], [bt.callout.peak, Y && Y.uv > y ? Qt(Math.round(Y.uv), c.locale) + " at " + Xe(Y.time, c) : bt.callout.now]]
    });
  }
  function zt(c) {
    const m = nt("daily")[0], w = S.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !fe(m.temperature) || !w || w.dailyHighs.length < X0) return "";
    const y = Number(m.temperature), R = w.dailyHighs.reduce((Bt, pt) => Bt + pt, 0) / w.dailyHighs.length, V = Math.round(y - R) || 0, Y = V > 0 ? "above" : V < 0 ? "below" : "same", X = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], G = X.map((Bt) => Bt.high).concat(R), et = Math.min(...G) - 1, it = Math.max(...G) + 1, gt = (Bt) => (1 - (Bt - et) / (it - et)) * 100, Dt = (Bt) => (Bt + 0.5) / X.length * 100, Tt = X.map((Bt, pt) => [Dt(pt), gt(Bt.high)]), _t = Tt.map(([Bt, pt], Ht) => (Ht ? "L" : "M") + Bt.toFixed(2) + " " + pt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + L + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _t + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + L + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + gt(R).toFixed(2) + '" y2="' + gt(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _t + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + gt(R).toFixed(2) + '%">' + xt(ke(c, R)) + "</span>" + X.map((Bt, pt) => {
      const Ht = Bt.today ? " wbToday" : "", It = "left:" + Dt(pt).toFixed(2) + "%;top:" + gt(Bt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + It + '"></i><span class="wbAvgValue' + Ht + '" style="' + It + '">' + xt(ke(c, Bt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + X.map((Bt, pt) => '<span class="wbAvgDay' + (Bt.today ? " wbToday" : "") + '" style="left:' + Dt(pt).toFixed(2) + '%">' + xt(b1(Bt.date, c)) + "</span>").join("") + "</div></div>";
    return ca({
      icon: se.chartLine,
      name: bt.metrics.compared_to_average,
      double: !0,
      sub: ta(bt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (V > 0 ? "+" : "") + xt(ke(c, V)) + '</div><div class="wbCompareWords">' + xt(bt.average[Y]) + '</div><div class="wbCompareTemps">' + xt(ta(bt.todayVsAverage, { today: ke(c, y), average: ke(c, R) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function Fe(c, m) {
    const w = Ie(c, m, "humidity");
    if (!w || !fe(w.value)) return "";
    const y = Ie(c, m, "dew_point"), R = Math.max(0, Math.min(100, Number(w.value)));
    return ca({
      icon: se.waterPercent,
      name: bt.metrics.humidity,
      sub: y && fe(y.value) ? ta(bt.dewPoint, { dew_point: ke(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + qa(Qt(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function no(c, m) {
    var Bt, pt, Ht;
    const w = Ie(c, m, "pressure");
    if (!w || !fe(w.value)) return "";
    const y = Number(w.value), R = (Bt = w.stateObj.attributes) == null ? void 0 : Bt.pressure_unit, V = tu(y, R), Y = ((pt = S.pressureHistory) == null ? void 0 : pt.entityId) === w.stateObj.entity_id ? tu(S.pressureHistory.value, R) : void 0;
    let X;
    if (V !== void 0 && Y !== void 0) {
      const It = V - Y;
      X = It >= Wp ? "rising" : It <= -Wp ? "falling" : "steady";
    }
    const G = Ps(c, w.stateObj, "pressure", Math.round(y)), et = w.stateObj, it = (It) => R === "inHg" ? Math.round(It * 100) / 100 : Math.round(It), gt = (It) => Jp(c, et, "pressure", it(It)), Dt = Y !== void 0 ? S.pressureHistory.value : void 0, Tt = Dt !== void 0 ? it(y - Dt) : void 0, _t = (Ht = et.entity_id) != null && Ht.startsWith("weather.") ? nt("hourly").find((It) => fe(It.pressure) && new Date(It.datetime).getTime() >= Date.now() + 3 * ie - 30 * Ve) : void 0, Gt = [
      ...X ? [bt.advice[X]] : [],
      ...Dt !== void 0 ? [[bt.callout.hoursAgo, gt(Dt)], [bt.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + gt(Math.abs(Tt))]] : [],
      ..._t ? [[bt.callout.inHours, gt(Number(_t.pressure))]] : []
    ];
    return ca({
      icon: se.gauge,
      name: bt.metrics.pressure,
      sub: X ? bt.pressure[X] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + qa(G.number) + '<span class="wbTapeUnit">' + xt(G.unit) + "</span></div>" + (V !== void 0 ? ar(c, V) : "") + "</div>"
    });
  }
  function ar(c, m) {
    const R = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (V, Y) => R + Y).map((V) => {
      const Y = 100 - (V - m) * 9;
      if (Y < 22 || Y > 178) return "";
      const X = V % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Y - 100) / 100) + '"><line class="wbTapeTick" x1="' + (X ? 2 : 8) + '" x2="26" y1="' + Y + '" y2="' + Y + '"></line>' + (X ? '<text class="wbTapeLabel" x="33" y="' + Y + '">' + xt(Qt(V, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + xt(bt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + xt(bt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Ws(c) {
    var G, et;
    const m = bc(c), w = m ? c.states[m] : void 0;
    if (!w || ((G = S.rain) == null ? void 0 : G.entityId) !== m || !fe(S.rain.change)) return "";
    const y = ((et = w.attributes) == null ? void 0 : et.unit_of_measurement) ?? "", R = lt(c, "hourly"), V = Date.now() + va, Y = nt("hourly").filter((it) => it.precipitation != null && new Date(it.datetime).getTime() <= V), X = Y.reduce((it, gt) => it + Number(gt.precipitation), 0);
    return ca({
      icon: se.rainy,
      name: bt.metrics.precipitation,
      sub: R && Y.length ? ta(bt.rainExpected, { amount: Qt(X, c.locale, { maximumFractionDigits: 1 }) + " " + vn(c, R, "precipitation") }) : bt.rainLast24h,
      visual: qa(Qt(S.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (Y.length > 1 ? F1(Y.map((it) => ({ label: "", value: Number(it.precipitation) }))) : "")
    });
  }
  function $r(c, m) {
    const w = Ie(c, m, "visibility");
    if (!w || !fe(w.value)) return "";
    const y = Ps(c, w.stateObj, "visibility", w.value), R = D0(Number(w.value), vn(c, w.stateObj, "visibility"));
    return ca({
      icon: se.eyeOutline,
      name: bt.metrics.visibility,
      sub: bt.visibilityLevel[E0(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + xt(Ii(c, R)) + '</div><div class="wbSeaValue">' + qa(y.number, y.unit) + "</div></div>"
    });
  }
  function Ii(c, m) {
    var V;
    const w = L0((V = c.config) == null ? void 0 : V.country, m);
    if (w) return ta(bt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = m / t1 * 60;
    if (y < 60) {
      const Y = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (Y < 60) return ta(bt.walkMinutes, { minutes: Qt(Y, c.locale) });
    }
    const R = Math.max(1, Math.round(y / 30) / 2);
    return R < 8 ? ta(bt.walkHours, { hours: Qt(R, c.locale) }) : bt.walkDay;
  }
  function js(c) {
    S.categories === void 0 && kn(c);
    const m = he(c), w = (G) => G.map((et) => c.states[et]).filter(Kn), y = w(m.air), R = w(m.pollen);
    if (!y.length && !R.length) return "";
    const V = [...y, ...R], Y = (G) => R.includes(G) ? se.flower : se.airFilter, X = V.find((G) => G.entity_id === dt.aq);
    return X ? zs(c, X, Y(X)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + xt(bt.airQuality) + '</h2></div><div class="wbAqTiles">' + V.map((G) => '<button class="wbTile" data-wb="aq-open" data-entity="' + xt(G.entity_id) + '"><span class="wbChip">' + Qo(Y(G)) + '</span><span class="wbText"><span class="wbName">' + xt(bn(c, G)) + '</span><span class="wbSub">' + xt(Ko(c, G)) + "</span></span></button>").join("") + "</div></div>";
  }
  function zs(c, m, w) {
    var it, gt, Dt;
    const y = ((it = m.attributes) == null ? void 0 : it.unit_of_measurement) ?? "", R = ((gt = m.attributes) == null ? void 0 : gt.device_class) === "pm25" && y === $p && fe(m.state), V = Number(m.state), Y = R ? Ms(V) : void 0, X = ((Dt = S.aqHistory) == null ? void 0 : Dt.entityId) === m.entity_id ? S.aqHistory.points : void 0, G = (Tt) => Math.min(100, Math.max(0, Tt / ks * 100));
    let et;
    if (X && X.length > 1) et = ou(X, (Tt) => (Qt(Tt, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (Y) {
      let Tt = 0;
      const _t = sf.map(([Gt, Bt]) => {
        const pt = G(Math.min(Bt, ks)), Ht = Gp[Gt] + " " + Tt + "% " + pt + "%";
        return Tt = pt, Ht;
      });
      et = '<div class="wbScale" role="meter" aria-label="' + xt(bt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ks + '" aria-valuenow="' + V + '" style="background:linear-gradient(to right, ' + _t.join(", ") + ')"><i style="left:' + G(V) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ks + " " + $p + "</span></div>";
    } else et = '<span class="wbGraphNote"><span>' + xt(Ko(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Qo(w) + '</span><span class="wbText"><span class="wbName">' + xt(bn(c, m)) + '</span><span class="wbSub">' + xt(Ko(c, m)) + (Y ? " · " + xt(bt.aqLevel[Y]) : "") + '</span></span><button class="wbBack" title="' + xt(bt.back) + '" data-wb="aq-close">' + Qo(se.back) + '</button></div><div class="wbGraph">' + et + "</div></div></div>";
  }
  const rn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Fi = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function Co(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Os.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && Kn(w) && Ir(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Os.map((w) => m.get(w)).filter(Boolean);
  }
  const Ao = (c) => Object.values(c.states || {}).filter((m) => {
    var w, y;
    return m.entity_id.startsWith("sensor.") && Kn(m) && Ir(c, m.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : y.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), or = ["none", "very_low", "low", "moderate", "high", "very_high"], za = (c) => fe(c.state) ? Number(c.state) : or.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), nr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, qi = (c, m, w) => {
    const y = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? Ms(m) : null : null;
    return y === "good" || y === "fair" ? bt.advice.window : y === "moderate" || y === null ? bt.advice.fine : bt.advice.closed;
  }, Gs = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], ro = (c) => Gs[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], rr = "M43 43q1 8 0 10M77 42q1 8 -1 10", To = {
    good: [rr, "M34 69Q61 98 86 67"],
    fair: [rr, "M40 74Q61 89 81 72"],
    moderate: [rr, "M41 79Q60 76 80 81"],
    poor: [rr, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Lo = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + To[c][0] + '"></path><path d="' + To[c][1] + '"></path></svg>';
  function ir(c) {
    const m = Co(c), w = m[0];
    if (!w) return ca({ icon: se.airFilter, name: bt.airQuality, sub: bt.noAir, visual: qa("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, R = Number(w.state), V = fe(w.state), Y = y === "aqi" && V ? Fi(R) : y === "pm25" && V ? rn[Ms(R)] : Ko(c, w), X = V ? Qt(Math.round(R), c.locale) : String(w.state), G = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", et = V && y === "aqi" ? ro(R) : V && y === "pm25" ? Ms(R) : null;
    return ca(et ? {
      icon: se.airFilter,
      name: bt.airQuality,
      sub: Y,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Gp[et] + '">' + Lo(et) + '<div class="wbAqBig"><span class="wbAqNum">' + xt(X) + "</span>" + (G ? '<span class="wbAqUnit">' + xt(G) + "</span>" : "") + "</div></div>" + Ss(qa(X, G)),
      callouts: [qi(y, R, V), ...m.slice(1, 3).map((it) => [bn(c, it), Ko(c, it)])]
    } : {
      icon: se.airFilter,
      name: bt.airQuality,
      sub: Y,
      cls: "wbBase",
      zone: qa(X, G),
      callouts: [qi(y, R, V), ...m.slice(1, 3).map((it) => [bn(c, it), Ko(c, it)])]
    });
  }
  const io = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], $s = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, y) => {
      const [R, V] = io[y % 3], Y = 10 + y * 7 % 9, X = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Y + "s;animation-delay:-" + (y * 2.3 % Y).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + X.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % X).toFixed(1) + 's">' + V + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ga(c) {
    const m = Ao(c).sort((R, V) => za(V) - za(R));
    if (!m.length) return ca({ icon: se.flower, name: bt.pollen, sub: bt.noPollen, visual: qa("–", ""), cls: "wbBase" });
    const w = m[0], y = (R) => fe(R.state) ? Ko(c, R) : nr(R.state);
    return ca({
      icon: se.flower,
      name: bt.pollen,
      sub: bn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: $s(za(w)) + qa(y(w), ""),
      callouts: m.slice(0, 3).map((R) => [bn(c, R), y(R)])
    });
  }
  function Cn(c) {
    var X;
    const m = Date.now(), w = nt("hourly").filter((G) => {
      const et = new Date(G.datetime).getTime();
      return et > m - ie && et < m + 12 * ie;
    }), y = w.find((G) => (G.precipitation_probability ?? 0) >= 50 || (G.precipitation ?? 0) >= 0.2), R = y ? ta(bt.rainFrom, { time: Xe(new Date(Math.max(m, new Date(y.datetime).getTime())), c) }) : w.length ? bt.noRain12 : void 0, V = (D == null ? void 0 : D()) || "rainviewer";
    let Y;
    if (V.startsWith("camera:")) {
      const G = c.states[V.slice(7)], et = G && G.state !== "unavailable" && ((X = G.attributes) == null ? void 0 : X.entity_picture);
      Y = et ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + xt(et) + '" data-src="' + xt(et) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + xt(bt.cameraOff) + "</span></div>";
    } else {
      const G = Or(c);
      Y = G ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + G.lat + '" data-lon="' + G.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + xt(bt.noLocation) + "</span></div>";
    }
    return ca({ icon: se.radar, name: bt.rainRadar, sub: R, cls: "wbBase wbRadarTile", visual: Y });
  }
  const Ur = {
    current: qr,
    hourly: Ae,
    sun: oo,
    moon: Oi,
    wind: Ut,
    uv_index: me,
    compared_to_average: zt,
    humidity: Fe,
    pressure: no,
    precipitation: Ws,
    visibility: $r,
    air_quality: js,
    aq_tile: ir,
    pollen_tile: Ga,
    radar_tile: Cn
  }, Ne = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Do = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Yr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, sr = () => {
    const c = dt.range, m = Date.now();
    if (c.preset !== "custom") {
      const R = Ne.find(([V]) => V === c.preset)[2];
      return [m - R * va, m];
    }
    const w = yn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(m, yn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + va);
    return [Math.min(w, y - ie), y];
  }, Us = (c) => {
    const m = dt.range;
    if (m.preset !== "custom") return Ne.find(([R]) => R === m.preset)[1];
    const [w, y] = sr();
    return m.from === m.to ? Do(c, new Date(w)) : Do(c, new Date(w)) + " – " + Do(c, new Date(y - 1));
  }, Zr = () => dt.range.preset === "custom" ? dt.range.from + "_" + dt.range.to : dt.range.preset, Kr = (c, m) => m - c <= 2 * va, so = (c, m, w, y) => Kr(w, y) ? Xe(m, c) : Do(c, m), lr = (c, m = 60) => {
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
  }), sn = (c) => async (m, w, y, R) => {
    const V = Ie(m, w, c);
    if (!V) return [];
    const Y = V.stateObj.entity_id, X = await Xr(m, Y, y, R);
    return lr(((X == null ? void 0 : X[Y]) ?? []).map((G) => {
      var gt;
      const et = ((gt = G.a) == null ? void 0 : gt[c]) ?? (fe(G.s) ? Number(G.s) : void 0), it = (G.lu ?? G.lc) * 1e3;
      return typeof et == "number" && it >= y && it <= R ? { t: new Date(it), value: et } : null;
    }).filter(Boolean)).map((G) => ({ label: so(m, G.t, y, R), value: G.value }));
  }, Vi = (c, m) => async (w, y, R, V) => {
    const Y = c(w);
    if (!Y) return [];
    const X = Y.entity_id, G = await Xr(w, X, R, V, !0);
    return lr(((G == null ? void 0 : G[X]) ?? []).map((et) => {
      const it = m(et.s), gt = et.lu * 1e3;
      return it == null || !Number.isFinite(it) || gt < R || gt > V ? null : { t: new Date(gt), value: it };
    }).filter(Boolean)).map((et) => ({ label: so(w, et.t, R, V), value: et.value }));
  }, Wi = (c, m) => async (w, y, R, V) => {
    const Y = Or(w);
    if (!Y) return [];
    const X = [];
    if (Kr(R, V)) for (let G = R; G <= V; G += ie / 2) X.push({ label: Xe(new Date(G), w), value: c(new Date(G), Y) });
    else for (let G = V; G >= R; G -= va) {
      const et = new Date(G), it = m(et, Y, w);
      it != null && X.unshift({ label: Do(w, et), value: it });
    }
    return lr(X);
  }, Eo = (c) => Ao(c).sort((m, w) => za(w) - za(m))[0], Bo = (c, m, w) => {
    const y = Ie(c, m, w);
    return y ? vn(c, y.stateObj, w) : "";
  }, cr = {
    current: { name: () => bt.modes.temperature, icon: () => se.sunny, load: sn("temperature"), fmt: (c, m, w) => ke(c, w), now: (c, m) => {
      var w;
      return ke(c, (w = Ie(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => bt.sun,
      icon: () => se.sunny,
      load: Wi((c, m) => Math.round(Fs(c, m.lat, m.lon) / ua), (c, m, w) => {
        const y = Pr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / ie * 10) / 10 : null;
      }),
      fmt: (c, m, w, y) => y ? Qt(w, c.locale) + "°" : Qt(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => bt.moon,
      icon: () => se.night,
      load: Wi((c) => Math.round(gc(c).fraction * 100), (c) => Math.round(gc(c).fraction * 100)),
      fmt: (c, m, w) => Qt(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => bt.metrics.uv_index, icon: () => se.sunnyAlert, load: sn("uv_index"), fmt: (c, m, w) => Qt(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = Ie(c, m, "uv_index");
      return w ? Qt(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => bt.metrics.humidity, icon: () => se.waterPercent, load: sn("humidity"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = Ie(c, m, "humidity");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => bt.metrics.pressure, icon: () => se.gauge, load: sn("pressure"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + " " + Bo(c, m, "pressure"), now: (c, m) => {
      const w = Ie(c, m, "pressure");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + " " + Bo(c, m, "pressure") : "";
    } },
    wind: { name: () => bt.wind, icon: () => se.windy, load: sn("wind_speed"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + " " + Bo(c, m, "wind_speed"), now: (c, m) => {
      const w = Ie(c, m, "wind_speed");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + " " + Bo(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => bt.metrics.visibility, icon: () => se.eyeOutline, load: sn("visibility"), fmt: (c, m, w) => Qt(Math.round(w * 10) / 10, c.locale) + " " + Bo(c, m, "visibility"), now: (c, m) => {
      const w = Ie(c, m, "visibility");
      return w ? Qt(Number(w.value), c.locale) + " " + Bo(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => Co(c)[0] ? bn(c, Co(c)[0]) : bt.airQuality,
      icon: () => se.airFilter,
      load: Vi((c) => Co(c)[0], (c) => fe(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var V, Y;
        const y = Co(c)[0], R = (V = y == null ? void 0 : y.attributes) == null ? void 0 : V.device_class;
        return Qt(Math.round(w * 10) / 10, c.locale) + (R === "aqi" ? " AQI" : (Y = y == null ? void 0 : y.attributes) != null && Y.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = Co(c)[0];
        return m ? Ko(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Eo(c) ? bn(c, Eo(c)) : bt.pollen,
      icon: () => se.flower,
      load: Vi(Eo, (c) => {
        const m = za({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => nr(or[Math.round(w)] || ""),
      now: (c) => {
        const m = Eo(c);
        return m ? nr(m.state) : "";
      }
    }
  }, Po = {};
  let ge = null;
  async function Ea(c) {
    const m = n == null ? void 0 : n();
    if (!m || !cr[c]) return;
    const w = c + "|" + Zr(), [y, R] = sr();
    if (Po[w] && Date.now() - Po[w].at < 5 * Ve) return;
    Po[w] = { at: Date.now(), points: null };
    try {
      Po[w].points = await cr[c].load(m, Ft(m), y, R);
    } catch {
      Po[w].points = [];
    }
    qe(!0), ge === c && dt.graph === c && (ge = null, Ip(I.querySelector(".wbGraphCard")));
    const V = dt.graph === c && I.querySelector(".wbGraph .wbChart");
    V && of(V, V.querySelector(".wbLine"), V.querySelectorAll(".wbArea"));
  }
  function Pt(c, m) {
    const w = dt.range, y = Yr(Date.now()), [R, V] = sr(), Y = w.pickFrom || Yr(R), X = w.pickTo || Yr(V - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Ne.map(([G, et]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === G) + '" data-wb="graph-preset" data-range="' + G + '" data-wb-focus="graph-preset-' + G + '">' + xt(et) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Y + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + X + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function dr(c, m, w) {
    var gt;
    const y = cr[w], [R, V] = sr(), Y = Kr(R, V), X = (gt = Po[w + "|" + Zr()]) == null ? void 0 : gt.points, G = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), it = X ? X.length > 1 ? ou(X, (Dt) => y.fmt(c, m, Dt, Y), 220, G) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + xt(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + lf(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + xt(y.name(c)) + '</span><span class="wbSub">' + xt(y.sub ? y.sub(Y) : y.now ? y.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + Qo(se.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!dt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Qo(se.calendar) + "<span>" + xt(Us(c)) + "</span>" + Qo(se.chevronDown) + '</button><div class="wbGraph">' + it + "</div></div>" + (dt.picking ? Pt() : "") + "</div>";
  }
  function qe(c) {
    var Dt, Tt, _t, Gt, Bt;
    const m = n == null ? void 0 : n();
    if (!m || Q) return;
    const w = Ft(m);
    Ct(m, w), S.lastFetch || Mo();
    const y = he(m), R = eu(m), V = bc(m), Y = [
      ...w.map((pt) => m.states[pt]),
      m.states["sun.sun"],
      R && m.states[R],
      V && m.states[V],
      ...y.air.map((pt) => m.states[pt]),
      ...y.pollen.map((pt) => m.states[pt]),
      ...Z.some((pt) => k.includes(pt)) ? [...Co(m), ...Ao(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / Ve)
    ];
    if (!c && at && Y.length === at.length && Y.every((pt, Ht) => pt === at[Ht])) return;
    at = Y;
    const X = A.getRootNode(), G = X.activeElement || document.activeElement;
    for (const pt of Z) {
      const Ht = N[pt];
      let It = "";
      try {
        It = Ur[pt](m, w) || "";
      } catch {
        It = "";
      }
      if (It === Ht.html) continue;
      const be = G && Ht.el.contains(G) ? (Dt = G.dataset) == null ? void 0 : Dt.wbFocus : void 0, At = Ht.el.querySelector(".wbStripScroll"), ne = At ? At.scrollLeft : null;
      Ht.html = It, Ht.el.hidden = !It, Ht.el.innerHTML = It;
      const $t = Ht.el.querySelector(".wbStripScroll");
      $t && ne != null ? $t.scrollTo({ left: ne }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), be && !z && ((Tt = Ht.el.querySelector('[data-wb-focus="' + be + '"]')) == null || Tt.focus());
    }
    let et = "";
    if (dt.graph)
      try {
        et = dr(m, w, dt.graph) || "";
      } catch {
        et = "";
      }
    if (et !== ht) {
      const pt = G && I.contains(G) ? (_t = G.dataset) == null ? void 0 : _t.wbFocus : void 0;
      ht = et, I.innerHTML = et, I.hidden = !et, et && !I.isConnected && (A.closest("#app") || A).appendChild(I), pt && !z && ((Gt = I.querySelector('[data-wb-focus="' + pt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    Gr(), A.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || Je(pt);
    }), z && ((Bt = A.querySelector('[data-wb-focus="' + z + '"]') || I.querySelector('[data-wb-focus="' + z + '"]')) == null || Bt.focus({ preventScroll: !0 }), z = null);
    let it = !1, gt = !1;
    for (const pt of Z) {
      const Ht = N[pt], It = !Ht.el.hidden, be = J[pt] === "wide" || j.includes(pt), At = Z.indexOf(pt) >= Z.indexOf("moon"), ne = It && (At && be && !it || !be && !gt);
      ne && be && (it = !0), ne && !be && (gt = !0), Ht.el.toggleAttribute("data-break", ne);
    }
    Tn(performance.now());
  }
  function ln() {
    q || Q || (q = !0, queueMicrotask(() => {
      q = !1, qe(!0);
    }));
  }
  function cn() {
    const c = getComputedStyle(A), m = (Y) => c.getPropertyValue(Y).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Y, X]) => {
      m(X) && (w[Y] = m(X));
    });
    const y = m("--color-text-primary") || "#f1f1f1", R = m("--color-bg-card") || "#222222", V = !!A.closest(".light");
    return { colors: { ...ja, ...w }, ink: V ? y : R, paper: V ? R : y };
  }
  const Jr = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, An = () => f && !h1();
  function ji(c, m) {
    A.querySelectorAll("canvas[data-wb-strip]").forEach((w) => pr(w, rt[w.dataset.wbStrip], c, m));
  }
  function pr(c, m, w, y) {
    if (!m || !c.getClientRects().length) return;
    const R = c.clientWidth, V = c.clientHeight;
    if (!R || !V) return;
    const Y = { width: R, height: V, columns: m.columns || Fp, colors: y.colors, clock: w, ambient: An(), seed: m.seed, soft: 1.5 };
    if (l === "smooth") {
      const X = Math.min(2, window.devicePixelRatio || 1), G = Math.round(R * X), et = Math.round(V * X);
      c.width !== G && (c.width = G), c.height !== et && (c.height = et);
      const it = c.getContext("2d");
      if (!it) return;
      it.setTransform(X, 0, 0, X, 0, 0), p0(it, m.segs, Y);
    } else Jr(c, d0(m.segs, { ...Y, px: 2, oneBit: l === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Tn(c) {
    if (Q) return;
    const m = cn();
    if (l !== "smooth") {
      const w = An();
      A.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Jr(y, Ym(Wm(y.dataset.wbWx, m.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: l === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    A.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, R = w.clientHeight, V = Number(w.dataset.wbSea), Y = y + "x" + R + ":" + V + ":" + m.colors.skyClearDay;
      !y || !R || !(V > 0) || w.dataset.painted === Y || (w.dataset.painted = Y, Jr(w, C0(y, R, V, m.colors)));
    }), ji(c, m);
  }
  function lo(c) {
    if (ct = 0, !(Q || !An())) {
      if (!document.hidden)
        if (l === "smooth") ji(c, cn());
        else {
          const m = Math.floor(c / 100);
          m !== tt && (tt = m, Tn(c));
        }
      ct = requestAnimationFrame(lo);
    }
  }
  function ur() {
    A.classList.toggle("wbMotion", An()), !ct && !Q && An() && (ct = requestAnimationFrame(lo));
  }
  function Ln(c) {
    var w, y, R, V, Y, X, G;
    if (c.target === I) {
      dt.graph = void 0, dt.picking = !1, qe(!0);
      return;
    }
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!m || !(A.contains(m) || I.contains(m))) {
      const et = (V = (R = c.target).closest) == null ? void 0 : V.call(R, ".wbItem"), it = et == null ? void 0 : et.dataset.card;
      if (!et || !A.contains(et) || !cr[it] || dt.graph === it || A.closest(".tfEditing") || it === "current" && g) return;
      dt.graph = it, dt.picking = !1, z = "graph-close", qe(!0), (Y = Po[it + "|" + Zr()]) != null && Y.points ? Ip(I.querySelector(".wbGraphCard")) : ge = it, Ea(it);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        dt.openDay = Number(m.dataset.index), dt.opener = m.dataset.wbFocus, z = "back-day";
        const et = Fr()[dt.openDay], it = !S.todayHistory || S.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - S.todayHistory.fetched > j0;
        et && Br(new Date(et.datetime), /* @__PURE__ */ new Date()) && it && Ta();
        break;
      }
      case "close-day":
        dt.openDay = void 0, z = dt.opener, dt.opener = void 0;
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
          localStorage.setItem(yt, dt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const et = A.querySelector(".wbStripScroll");
        et && et.scrollTo({ left: Number(m.dataset.hours) * et.clientWidth / Number(et.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        dt.aq = m.dataset.entity, on(dt.aq);
        break;
      case "aq-close":
        dt.aq = void 0;
        break;
      case "graph-close":
        dt.graph = void 0, dt.picking = !1;
        break;
      case "graph-pick":
        dt.picking = !dt.picking, z = dt.picking ? "graph-preset-" + (dt.range.preset === "custom" ? "day" : dt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        dt.range = { preset: m.dataset.range }, dt.picking = !1, z = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      case "graph-apply": {
        let et = dt.range.pickFrom || ((X = A.querySelector("[data-range-from]")) == null ? void 0 : X.value), it = dt.range.pickTo || ((G = A.querySelector("[data-range-to]")) == null ? void 0 : G.value);
        if (!et || !it) return;
        et > it && ([et, it] = [it, et]), dt.range = { preset: "custom", from: et, to: it }, dt.picking = !1, z = "graph-pick", qe(!0), Ea(dt.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function ha(c) {
    var m, w, y, R, V, Y;
    c.key === "Escape" && dt.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (dt.openDay = void 0, z = dt.opener, dt.opener = void 0, qe(!0)) : c.key === "Escape" && dt.picking && ((R = (y = c.target).closest) != null && R.call(y, ".wbGraphCard")) ? (dt.picking = !1, z = "graph-pick", qe(!0)) : c.key === "Escape" && dt.graph && ((Y = (V = c.target).closest) != null && Y.call(V, ".wbGraphCard")) && (dt.graph = void 0, qe(!0));
  }
  let je = null;
  function Qr(c) {
    var w, y;
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbStripScroll");
    !m || c.button !== 0 || (je = { startX: c.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", ti), window.addEventListener("mouseup", ei, { once: !0 }));
  }
  function ti(c) {
    const m = A.querySelector(".wbStripScroll");
    if (!je || !m) return;
    const w = c.pageX - je.startX;
    !je.moved && Math.abs(w) > 1 && (je.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = je.left - w;
  }
  function ei() {
    je = null, window.removeEventListener("mousemove", ti);
    const c = A.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const m = [...c.querySelectorAll(".wbSnap")];
    if (m.length) {
      const w = m.reduce((y, R) => Math.abs(R.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? R : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const fr = (c) => {
    var w, y;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? dt.range.pickFrom = m.value : (y = m.matches) != null && y.call(m, "[data-range-to]") && (dt.range.pickTo = m.value);
  };
  A.addEventListener("change", fr), A.addEventListener("click", Ln), A.addEventListener("keydown", ha), I.addEventListener("change", fr), I.addEventListener("click", Ln), I.addEventListener("keydown", ha), A.addEventListener("mousedown", Qr);
  const zi = 64, Ys = 30;
  let xa = null, $a = 0;
  const dn = () => {
    $a = 0, A.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (xa) {
        const y = c.parentElement.getBoundingClientRect(), R = y.left + y.width / 2 - xa.x, V = y.top + y.height / 2 - xa.y, Y = Math.hypot(R, V) || 1;
        if (Y < zi) {
          const X = (1 - Y / zi) * Ys;
          m = R / Y * X, w = V / Y * X;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), xa && ($a = requestAnimationFrame(dn));
  }, Ua = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || ze != null && ze.matches) {
      xa && (xa = null, $a || ($a = requestAnimationFrame(dn)));
      return;
    }
    xa = { x: c.clientX, y: c.clientY }, $a || ($a = requestAnimationFrame(dn));
  }, Gi = () => {
    xa = null, $a || ($a = requestAnimationFrame(dn));
  };
  A.addEventListener("pointermove", Ua), A.addEventListener("pointerleave", Gi);
  const Ya = typeof ResizeObserver == "function" ? new ResizeObserver(() => Tn(performance.now())) : null;
  Ya == null || Ya.observe(A);
  const pn = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && Je(w);
  })) : null;
  function Je(c) {
    var Y;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || Q) return;
    const y = n1(Number(c.dataset.lat), Number(c.dataset.lon), m, w), R = !!((Y = A.closest("#app")) != null && Y.classList.contains("light")), V = (X) => ' style="left:' + X.left + "px;top:" + X.top + 'px"';
    c._tiles = y, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((X) => '<img src="https://' + "abcd"[(X.x + X.y) % 4] + ".basemaps.cartocdn.com/" + (R ? "light_all" : "dark_all") + "/" + Pc + "/" + X.x + "/" + X.y + '.png"' + V(X) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', pn == null || pn.observe(c), o1().then((X) => {
      !c.isConnected || Q || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = X.frames.map((G, et) => '<div class="wbRadarLayer wbRadarRain" data-i="' + et + '" hidden>' + y.map((it) => '<img src="' + X.host + G.path + "/" + Xo + "/" + Pc + "/" + it.x + "/" + it.y + '/2/1_1.png"' + V(it) + ' alt="">').join("") + "</div>").join(""), c._frames = X.frames, c._hold = 0, Dn(c, X.frames.findLastIndex((G) => G.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = bt.radarOff);
    });
  }
  function Dn(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((R) => {
      R.hidden = Number(R.dataset.i) !== m;
    });
    const y = w[m];
    c.querySelector(".wbRadarTime").textContent = Xe(new Date(y.time * 1e3), n == null ? void 0 : n()) + (y.past ? "" : " · " + bt.forecastTag);
  }
  function ai() {
    A.querySelectorAll(".wbRadarMap").forEach((c) => {
      if (!c._frames) return;
      if (Date.now() - c._built > rf) {
        Je(c);
        return;
      }
      if (ze != null && ze.matches) return;
      if (c._hold > 0) {
        c._hold -= jp;
        return;
      }
      const m = c._frames.length - 1, w = c._frames.findLastIndex((R) => R.past), y = c._i >= m ? 0 : c._i + 1;
      Dn(c, y), (y === w || y === m) && (c._hold = a1);
    });
  }
  const hr = () => A.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), un = typeof MutationObserver == "function" ? new MutationObserver(() => A.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && Je(c);
  })) : null, oi = A.closest("#app");
  oi && (un == null || un.observe(oi, { attributes: !0, attributeFilter: ["class"] }));
  const ze = (Ui = window.matchMedia) == null ? void 0 : Ui.call(window, "(prefers-reduced-motion: reduce)"), $i = () => {
    ur(), Tn(performance.now());
  };
  (En = ze == null ? void 0 : ze.addEventListener) == null || En.call(ze, "change", $i);
  const ni = [
    setInterval(() => {
      Ot = /* @__PURE__ */ new Date(), qe(!0);
    }, J0),
    setInterval(() => {
      U = /* @__PURE__ */ new Date(), qe(!0);
    }, Q0),
    setInterval(Mo, Z0),
    setInterval(ai, jp),
    setInterval(hr, Ve)
  ];
  return qe(!0), ur(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(c) {
      !c || c === l || (l = c, A.dataset.style = l, I.dataset.style = l, qe(!0), ur());
    },
    destroy() {
      var c;
      cancelAnimationFrame($a), A.removeEventListener("pointermove", Ua), A.removeEventListener("pointerleave", Gi), Q = !0, ni.forEach(clearInterval), ct && cancelAnimationFrame(ct), ct = 0, Ya == null || Ya.disconnect(), pn == null || pn.disconnect(), un == null || un.disconnect(), (c = ze == null ? void 0 : ze.removeEventListener) == null || c.call(ze, "change", $i), ei(), A.removeEventListener("click", Ln), A.removeEventListener("change", fr), A.removeEventListener("keydown", ha), A.removeEventListener("mousedown", Qr), I.removeEventListener("click", Ln), I.removeEventListener("change", fr), I.removeEventListener("keydown", ha), ["daily", "hourly"].forEach(F), A.remove(), I.remove();
    }
  };
}
const Ei = "#E1E1E1", iu = "#F7F4F0", wc = "#03a9f4", ae = 14, re = 172;
let z1 = 0;
const Se = (o) => Math.round(o * 100) / 100, yo = (o, n, i) => Math.max(n, Math.min(i, o)), an = (o, n, i, l, f, b) => '<rect x="' + Se(o) + '" y="' + Se(n) + '" width="' + Se(i) + '" height="' + Se(l) + '" fill="' + f + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", vc = (o) => o.map((n, i) => (i ? "L" : "M") + Se(n[0]) + " " + Se(n[1])).join("");
function yc(o) {
  const n = (o == null ? void 0 : o.attributes) || {};
  return n.device_class === "curtain" ? "curtain" : n.device_class === "blind" || n.current_tilt_position != null ? "venetian" : "blind";
}
const wn = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function G1(o) {
  const n = o < 2 ? o + 24 : o;
  let i = wn[0], l = wn[wn.length - 1];
  for (let v = 0; v < wn.length - 1; v++) if (n >= wn[v][0] && n <= wn[v + 1][0]) {
    i = wn[v], l = wn[v + 1];
    break;
  }
  const f = (n - i[0]) / (l[0] - i[0]), b = f * f * (3 - 2 * f), g = (v, D) => {
    const L = parseInt(v.slice(1), 16), A = parseInt(D.slice(1), 16);
    return "#" + [16, 8, 0].map((B) => Math.round((L >> B & 255) + ((A >> B & 255) - (L >> B & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], l[1][0]), bot: g(i[1][1], l[1][1]), warm: g(i[1][2], l[1][2]), cool: g(i[1][3], l[1][3]), op: i[1][4] + (l[1][4] - i[1][4]) * b, t: n };
}
function $1(o) {
  const n = parseInt(o.slice(1), 16), i = (n >> 16 & 255) / 255, l = (n >> 8 & 255) / 255, f = (n & 255) / 255, b = Math.max(i, l, f), g = Math.min(i, l, f);
  let v = 0, D = 0;
  const L = (b + g) / 2;
  if (b !== g) {
    const A = b - g;
    D = L > 0.5 ? A / (2 - b - g) : A / (b + g), v = (b === i ? (l - f) / A + (l < f ? 6 : 0) : b === l ? (f - i) / A + 2 : (i - l) / A + 4) / 6;
  }
  return [v * 360, D * 100, L * 100];
}
function yf(o, n, i) {
  n = yo(n, 0, 100) / 100, i = yo(i, 0, 100) / 100;
  const l = (g) => (g + o / 30) % 12, f = n * Math.min(i, 1 - i), b = (g) => i - f * Math.max(-1, Math.min(l(g) - 3, Math.min(9 - l(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [xf, kf, Mf] = $1(Ei), su = yf(xf, kf, Math.max(6, Mf - 14)), U1 = yf(xf, kf, Math.min(96, Mf + 16));
function Y1(o, n, i, l, f) {
  const b = re / 2, g = re * 0.12, v = b - (b - g) * o, D = (Z) => Z ** 1.3, L = yo(i, -1.5, 1.5), A = (Z) => -(Math.abs(L) * 4.6 * Z ** 1.5) * Math.sign(L), B = o * 1.4, I = (Z, J) => {
    const j = Math.min(4.8, Math.abs(i) * 2.6) * (J ? 1 : -1) * Math.sign(i || 1), N = J ? Z + v : Z, Q = J ? Z : Z + v, at = (yt) => N + A(yt) + j * Math.sin(yt * Math.PI * 1.2 + l) * D(yt) * 1.4 + B * Math.sin(yt * Math.PI * 2 + l * 0.6) * D(yt) * (J ? 1 : -1), ct = [[Q, ae]];
    for (let yt = 0; yt <= 12; yt++) ct.push([at(yt / 12), ae + re * yt / 12]);
    ct.push([Q, ae + re]);
    let tt = '<path d="' + vc(ct) + 'Z" fill="' + Ei + '"/>';
    if (f) return tt;
    const q = 1.35 + ((J ? i > 0 : i < 0) ? 0.35 : 0), z = (yt) => {
      const Rt = yt / 7, dt = J ? 1 - Rt : Rt, S = (1 - dt) ** 1.3, Ot = Z + v * Rt;
      return Array.from({ length: 13 }, (U, rt) => {
        const st = rt / 12;
        return [Ot + A(st) * S + j * q * Math.sin(st * Math.PI * 1.2 + l - dt * 3.2) * D(st) * 1.4 * S + B * 1.6 * Math.sin(st * Math.PI * 2 + l * 0.6 - dt * 2.5) * D(st) * o * (0.4 + 0.6 * S), ae + re * st];
      });
    }, ht = [1, 2, 3, 4, 5, 6].map(z);
    for (let yt = 0; yt < 6; yt += 2) tt += '<path d="' + vc(ht[yt]) + vc(ht[yt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, k = b - (b - g) * n;
  return { body: I(ae, !0) + I(ae + re - v, !1), rails: [{ x: ae + k - 4, y: ae, w: 4, h: re }, { x: ae + re - k, y: ae, w: 4, h: re }], head: 6.4 };
}
function Z1(o, n, i) {
  const l = re * (1 - o);
  let f = "";
  if (l > 1 && (f += an(ae, ae, re, l, Ei), !i))
    for (let b = 1; b < 7; b += 2) f += an(ae + re * b / 7, ae, re / 7, l, "#fff");
  return { body: f, rails: [{ x: ae, y: ae + re * (1 - n) - 7, w: re, h: 11 }], head: 10.4 };
}
function K1(o, n, i, l) {
  const f = 9 - 7 * (i / 100), b = ae + re * (1 - o), g = Math.ceil(re / 10) + 1, v = ae + f / 2, D = (ae + re - f / 2 - v) / (g - 1), L = 0.8, A = 0.6, B = Array.from({ length: g }, (Z, J) => Math.max(v + J * A, Math.min(v + J * D, b - f / 2 - (g - 1 - J) * A))), I = B.slice(0, -1).map((Z, J) => yo((B[J + 1] - Z - A) / (D - A), 0, 1));
  I.push(I[g - 2]);
  let k = "";
  return B.forEach((Z, J) => {
    const j = L + (f - L) * I[J], N = Math.max(0.5, j / 2), Q = Math.max(0.4, j * 0.114);
    k += an(ae, Z - N, re, Math.max(1, j), Ei), !l && j > 2.2 && (k += an(ae, Z + N - Q, re, Q, su) + an(ae, Z - N, re, Q * 0.55, U1, 0.75));
  }), l || [0.22, 0.78].forEach((Z) => {
    k += an(ae + re * Z - 0.7, ae, 1.4, Math.max(0, B[g - 1] + 1 - ae), su, 0.85);
  }), { body: k, rails: [{ x: ae, y: ae + re * (1 - n) - 8, w: re, h: 8 }], head: 8.8 };
}
const lu = (o, n, i, l, f, b, g) => o === "curtain" ? Y1(n, i, f, b, g) : o === "venetian" ? K1(n, i, l, g) : Z1(n, i, g);
function X1(o, n) {
  let i = "", l = "";
  return n.forEach((f) => {
    const b = f.w > f.h, g = yo(b ? ae + re / 2 : f.x + f.w / 2, 17, 183), v = yo(b ? f.y + f.h / 2 : ae + re / 2, 17, 183);
    i += b ? an(ae, yo(f.y + f.h / 2, ae, ae + re) - 1, re, 2, wc) : an(yo(f.x + f.w / 2, ae, ae + re) - 1, ae, 2, re, wc);
    const D = b ? "M" + Se(g - 4) + " " + Se(v - 3) + "l4 -3l4 3M" + Se(g - 4) + " " + Se(v + 3) + "l4 3l4 -3" : "M" + Se(g - 3) + " " + Se(v - 4) + "l-3 4l3 4M" + Se(g + 3) + " " + Se(v - 4) + "l3 4l-3 4";
    l += '<circle cx="' + Se(g) + '" cy="' + Se(v) + '" r="11" fill="' + wc + '" filter="url(#' + o + 's)"/><path d="' + D + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: l };
}
function J1(o, n) {
  const i = /* @__PURE__ */ new Date(), l = G1(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(l.t * 0.5), b = l.t >= 5 && l.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (l.t - 5) / 15) : 80, g = lu(n.kind, n.pos / 100, n.bar / 100, n.tilt, n.vel, n.ph, !1), v = n.ghostAlpha > 4e-3 && n.ghost != null ? lu(n.kind, n.ghost / 100, n.ghost / 100, n.tilt, 0, 0, !0).body : "", D = n.grip > 4e-3 ? X1(o, g.rails) : null, L = (A) => an(ae, ae, re, re, A);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + l.top + '"/><stop offset="1" stop-color="' + l.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + Se(f) + '%" cy="' + Se(b) + '%" r="58%"><stop offset="0" stop-color="' + l.warm + '" stop-opacity="' + Se(l.op * 0.8) + '"/><stop offset="1" stop-color="' + l.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + Se(100 - f * 0.8) + '%" cy="' + Se(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + l.cool + '" stop-opacity="' + Se(l.op * 0.64) + '"/><stop offset="1" stop-color="' + l.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + iu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + L("url(#" + o + "l)") + L("url(#" + o + "w)") + L("url(#" + o + "k)") + (v ? '<g opacity="' + Se(n.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + Ei + '" filter="url(#' + o + 's)"/></g>' + (D ? '<g clip-path="url(#' + o + 'c)" opacity="' + Se(n.grip) + '">' + D.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + iu + '" stroke-width="3"/>' + (D ? '<g opacity="' + Se(n.grip) + '">' + D.knobs + "</g>" : "") + "</svg>";
}
function Q1({ onMove: o, onSet: n }) {
  var tt;
  const i = "cv" + ++z1, l = document.createElement("div");
  l.className = "tfCoverArt";
  const f = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, D = !1, L = !1, A = null, B = 0, I = 0;
  const k = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", Z = () => A || D || L || b.moving || b.target != null ? 1 : f ? performance.now() < I ? 1 : 0.4 : 0, J = () => {
    l.innerHTML = J1(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function j(q) {
    v = 0;
    const z = g.last ? Math.min(0.064, (q - g.last) / 1e3) : 1 / 60, ht = z * 60;
    g.last = q;
    const yt = b.pos - g.pos, Rt = g.pos;
    g.pos += Math.sign(yt) * Math.min(Math.abs(yt), Math.max(10.5, Math.abs(yt) * 1.4) * z), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Rt) / ht * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Rt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * ht);
    const dt = b.tilt - g.tilt;
    g.tilt += Math.sign(dt) * Math.min(Math.abs(dt), Math.max(60, Math.abs(dt) * 4) * z);
    const S = Z();
    g.grip += (S - g.grip) * Math.min(1, z * (S > g.grip ? 11 : 3.5)), Math.abs(S - g.grip) < 0.01 && (g.grip = S);
    const Ot = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Ot - g.ghost) * Math.min(1, z * (Ot > g.ghost ? 16 : 3)), Math.abs(Ot - g.ghost) < 4e-3 && (g.ghost = Ot), J(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== S || g.ghost !== Ot ? v = requestAnimationFrame(j) : g.last = 0;
  }
  const N = () => {
    b && !v && (v = requestAnimationFrame(j));
  }, Q = setInterval(() => {
    b && !v && J();
  }, 60 * 1e3), at = (q) => {
    const z = l.getBoundingClientRect();
    return k() === "x" ? (q.clientX - z.left) / z.width : (q.clientY - z.top) / z.height;
  };
  l.addEventListener("pointerdown", (q) => {
    var yt;
    if (!(b != null && b.canSet) || q.button > 0) return;
    q.preventDefault(), (yt = l.setPointerCapture) == null || yt.call(l, q.pointerId);
    const z = b.target ?? b.pos, ht = l.getBoundingClientRect();
    A = { p0: at(q), from: z, x0: q.clientX, value: null, side: null }, b.kind === "curtain" && z > 0 && (A.side = (q.clientX - ht.left) / ht.width < 0.5 ? "L" : "R"), N();
  }), l.addEventListener("pointermove", (q) => {
    if (!A) return;
    let z;
    if (b.kind === "curtain") {
      if (!A.side) {
        const yt = q.clientX - A.x0;
        if (Math.abs(yt) < 4) return;
        A.side = yt < 0 ? "L" : "R";
      }
      const ht = (re / 2 - re * 0.12) / 200;
      z = A.from + (A.side === "L" ? -1 : 1) * ((at(q) - A.p0) / ht) * 100;
    } else z = A.from - (at(q) - A.p0) / (re / 200) * 100;
    A.value = yo(z, 0, 100), o(A.value);
  });
  const ct = () => {
    if (!A) return;
    const q = A.value;
    A = null, q != null && n(Math.round(q)), N();
  };
  return l.addEventListener("pointerup", ct), l.addEventListener("pointercancel", ct), l.addEventListener("lostpointercapture", ct), l.addEventListener("pointerenter", () => {
    D = !0, N();
  }), l.addEventListener("pointerleave", () => {
    D = !1, N();
  }), l.addEventListener("focus", () => {
    L = l.matches(":focus-visible"), N();
  }), l.addEventListener("blur", () => {
    L = !1, N();
  }), l.addEventListener("keydown", (q) => {
    if (!(b != null && b.canSet)) return;
    const z = Math.round(b.target ?? b.pos), ht = q.shiftKey ? 10 : 1, yt = { ArrowUp: z + ht, ArrowRight: z + ht, ArrowDown: z - ht, ArrowLeft: z - ht, PageUp: z + 25, PageDown: z - 25, Home: 0, End: 100 }[q.key];
    if (yt == null) return;
    q.preventDefault();
    const Rt = yo(yt, 0, 100);
    o(Rt), clearTimeout(B), B = setTimeout(() => n(Rt), 500);
  }), {
    el: l,
    update(q) {
      const z = !b;
      b = q, z && (g.pos = b.pos, g.tilt = b.tilt, I = performance.now() + 1500, f && setTimeout(N, 1600)), l.classList.toggle("x", k() === "x"), l.classList.toggle("y", k() === "y"), b.canSet ? (l.tabIndex = 0, l.setAttribute("role", "slider"), l.setAttribute("aria-valuemin", "0"), l.setAttribute("aria-valuemax", "100"), l.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), l.setAttribute("aria-orientation", k() === "x" ? "horizontal" : "vertical")) : l.setAttribute("role", "img"), l.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), l.setAttribute("aria-valuetext", b.text), N();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(Q), clearTimeout(B), l.remove();
    }
  };
}
const aa = (o) => Math.round(o * 100) / 100, Aa = (o) => o * Math.PI / 180, xn = (o, n, i) => o + (n - o) * i, xc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function cu(o, n, i, l = 45, f = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(Aa(l)), v = Math.sin(Aa(l)), D = Math.cos(Aa(f)), L = Math.sin(Aa(f)), A = 0.68, B = 0.12;
  return {
    U: o,
    ox: n,
    oy: i,
    yaw: l,
    V: [v * D, g * D, L],
    L: [A * g + B * v, -A * v + B * g],
    k: b,
    cy: g,
    sy: v,
    sp: L,
    cp: D,
    p: ([I, k, Z]) => {
      const J = I * g - k * v, j = I * v + k * g;
      return [n + J * b, i + (j * L - Z * D) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(I, k, Z) {
      const J = (I - n) / b, j = ((k - i) / b + Z * D) / L;
      return [J * g + j * v, -J * v + j * g];
    }
  };
}
const Jn = (o, n = !0) => "M" + o.map(([i, l]) => `${aa(i)} ${aa(l)}`).join("L") + (n ? "Z" : "");
function eo(o, n, i, l = 7) {
  const f = [], b = [[o / 2 - i, n / 2 - i, 0], [-(o / 2 - i), n / 2 - i, 90], [-(o / 2 - i), -(n / 2 - i), 180], [o / 2 - i, -(n / 2 - i), 270]];
  for (const [g, v, D] of b)
    for (let L = 0; L <= l; L++) {
      const A = Aa(D + 90 * L / l);
      f.push([g + i * Math.cos(A), v + i * Math.sin(A)]);
    }
  return f;
}
const oa = (o, n = 56) => Array.from({ length: n }, (i, l) => [o * Math.cos(2 * Math.PI * l / n), o * Math.sin(2 * Math.PI * l / n)]);
function Re(o, n, i, l = !0, f = (b, g, v) => [b, g, v]) {
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
const xo = (o, n) => ({ ...o, verts: o.verts.map(n) }), Li = (o, n, i) => ([l, f, b]) => [l + o, f + n, b + i], Rs = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [n + (b - n) * l - (g - i) * f, i + (b - n) * f + (g - i) * l, v];
}, Rc = (o, n = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [b, n + (g - n) * l + (v - i) * f, i - (g - n) * f + (v - i) * l];
}, tg = (o, n) => [o[0] - n[0], o[1] - n[1], o[2] - n[2]], du = (o, n) => o[0] * n[0] + o[1] * n[1] + o[2] * n[2], pu = (o) => o.reduce((n, i) => [n[0] + i[0] / o.length, n[1] + i[1] / o.length, n[2] + i[2] / o.length], [0, 0, 0]);
function eg(o) {
  const n = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const l = o[i], f = o[(i + 1) % o.length];
    n[0] += (l[1] - f[1]) * (l[2] + f[2]), n[1] += (l[2] - f[2]) * (l[0] + f[0]), n[2] += (l[0] - f[0]) * (l[1] + f[1]);
  }
  return n;
}
function Sf(o, n = [1, 1, 1]) {
  const i = pu(o.verts);
  return o.faces.map((l) => {
    const f = l.idx.map((g) => o.verts[g]);
    let b = eg(f);
    return du(b, tg(pu(f), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), du(b, n) > 1e-6 * Math.hypot(...b);
  });
}
const ko = (o, n, i) => Jn(n.faces[i].idx.map((l) => o.p(n.verts[l])));
function He(o, n, i = "", l = "") {
  const f = n.verts.map(o.p), b = Sf(n, o.V);
  let g = "";
  n.faces.forEach((L, A) => {
    b[A] && (g += Jn(L.idx.map((B) => f[B])));
  });
  const v = /* @__PURE__ */ new Map();
  n.faces.forEach((L, A) => {
    for (let B = 0; B < L.idx.length; B++) {
      const I = L.idx[B], k = L.idx[(B + 1) % L.idx.length], Z = I < k ? `${I}-${k}` : `${k}-${I}`;
      v.has(Z) || v.set(Z, { a: I, b: k, fs: [] }), v.get(Z).fs.push(A);
    }
  });
  let D = "";
  for (const { a: L, b: A, fs: B } of v.values()) {
    const [I, k] = B, Z = b[I], J = k === void 0 ? !1 : b[k], j = k !== void 0 && n.faces[I].smooth && n.faces[k].smooth;
    (Z !== J || Z && J && !j) && (D += `M${aa(f[L][0])} ${aa(f[L][1])}L${aa(f[A][0])} ${aa(f[A][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${l ? ` class="${l}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${D}"/></g>`;
}
function ag(o) {
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
let og = 0;
function na(o, n, i, l, f = "") {
  const b = n.verts.filter((D) => D[2] >= i - 0.01).map(([D, L, A]) => o.p([D + (A - i) * o.L[0], L + (A - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = Jn(ag(b));
  if (!f) return `<path class="shade" fill="url(#${l})" d="${g}"/>`;
  const v = `clip${++og}`;
  return `<clipPath id="${v}"><path d="${f}"/></clipPath><path class="shade" fill="url(#${l})" clip-path="url(#${v})" d="${g}"/>`;
}
const Xn = (o, n, i = "edge", l = !0) => `<path class="${i}" d="${Jn(n.map(o.p), l)}"/>`, vo = (o, n, i, l = "edge") => {
  const [f, b] = o.p(n), [g, v] = o.p(i);
  return `<path class="${l}" d="M${aa(f)} ${aa(b)}L${aa(g)} ${aa(v)}"/>`;
};
function Oc(o, n, i, l, { part: f = "", cls: b = "", w: g = 0 } = {}) {
  const [v, D] = o.p(n), L = o.k, A = `matrix(${aa(L * o.cy)} ${aa(L * o.sy * o.sp)} ${aa(-L * o.sy)} ${aa(L * o.cy * o.sp)} ${aa(v)} ${aa(D)})`, B = g ? `<rect x="${-g / 2}" y="${-l * 0.9}" width="${g}" height="${l * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${A}"${f ? ` data-part="${f}"` : ""}>${B}<text class="st ${b}" font-size="${l}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class ng {
  constructor(n, i = 0.24, l = 0.62) {
    this.x = n, this.t = n, this.v = 0, this.k = i, this.d = l;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const rg = "http://www.w3.org/2000/svg", ig = matchMedia("(prefers-reduced-motion: reduce)");
let sg = 0;
class Qn {
  constructor(n, i = {}) {
    xp(this, "tick", () => {
      let n = !1;
      for (const i of this.springs) n = i.step() || n;
      this.paint(), this.raf = n ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++sg}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const l = xc[i.camera] || xc.iso;
    this.yaw = this.spring(l.yaw, 0.12, 0.7), this.pitch = this.spring(l.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const f = this.svg = document.createElementNS(rg, "svg");
    f.setAttribute("viewBox", "0 0 400 400"), f.setAttribute("class", "iso"), f.tabIndex = 0, n.prepend(f), f.addEventListener("pointerdown", (g) => {
      var D, L, A, B;
      const v = (A = (L = (D = g.target).closest) == null ? void 0 : L.call(D, "[data-part]")) == null ? void 0 : A.dataset.part;
      if (v) {
        try {
          f.setPointerCapture(g.pointerId);
        } catch {
        }
        this.held = !0, (B = this.down) == null || B.call(this, v, this.pt(g), g), this.kick();
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
    const [n, i, l] = this.base, f = this.fillAmt.x, b = cu(n, i, l, this.yaw.x, this.pitch.x);
    return f < 1e-3 ? b : cu(n, xn(i, 200, f), xn(l, 200 + this.lift * b.cp * b.k / 2, f), this.yaw.x, this.pitch.x);
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
    const D = 352 / f.k, L = (352 / f.k - this.lift * f.cp) / f.sp, A = Math.max(n * 0.6, (D * b - L * g) / v), B = Math.max(i * 0.6, (L * b - D * g) / v);
    return [xn(n, A, l), xn(i, B, l)];
  }
  setCamera(n) {
    const i = xc[n];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(n, i, l) {
    const f = new ng(n, i, l);
    return this.springs.push(f), f;
  }
  kick() {
    if (ig.matches) {
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
class lg extends Qn {
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
    const i = this.v, l = 11 + this.h.x, [f, b] = this.size(68, 68), g = Math.min(f, b) / 68, v = Re(eo(f, b, 18 * g), 0, 8), D = Re(oa(25 * g), 8, 11), L = Re(oa(18.5 * g), 11, l), A = oa(12.5 * g).map(([I, k]) => [I, k, l]), B = Math.max(0, Math.min(1, this.glow.x));
    return na(i, v, 0, n) + He(i, v) + He(i, D, "cap") + na(i, L, 11, n, ko(i, D, 1)) + He(i, L, "cap") + Xn(i, A) + (B > 0.01 ? `<g style="opacity:${B.toFixed(3)}">${Xn(i, A, "accent")}</g>` : "");
  }
}
class cg extends Qn {
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
    const i = this.v, l = this.t.x, [f, b] = this.size(72, 96), g = f / 72, v = b / 96, D = Math.min(g, v), L = 9, A = xn(3, 12, l), B = xn(12, 3, l), I = (A + B) / 2 - 1.4, k = 31 * v, Z = Re(eo(f, b, 16 * D), 0, 6), J = Re(eo(48 * g, 72 * v, 9 * D), 6, L), j = [[-k, L], [k, L], [k, L + B], [0, L + I], [-k, L + A]], N = Re(j, -20 * g, 20 * g, !1, (tt, q, z) => [z, tt, q]), Q = (tt) => L + (tt < 0 ? xn(A, I, (tt + k) / k) : xn(I, B, tt / k)) + 0.05, at = oa(4.2 * D, 36).map(([tt, q]) => [tt, q - k / 2, Q(q - k / 2)]), ct = [[0, k * 0.32], [0, k * 0.68]].map(([tt, q]) => [tt, q, Q(q)]);
    return na(i, Z, 0, n) + He(i, Z) + He(i, J, "paddle") + na(i, N, L, n, ko(i, J, 1)) + He(i, N, "paddle") + Xn(i, at, this.on ? "edge mark" : "accent mark") + vo(i, ct[0], ct[1], this.on ? "accent mark" : "edge mark");
  }
}
class dg extends Qn {
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
    const i = this.v, l = this.size(44, 136)[1], f = 44, b = 1, g = l / 136, v = 1, D = 48 * g, L = 6 + this.kh.x, A = D - this.L.x * 2 * D;
    this.travel = 2 * D;
    const B = Math.min(32 * b, f - 12), I = B / 32, k = Re(eo(f, l, 16 * v), 0, 6), Z = xo(Re(eo(B, 16 * v, 5 * v), 6, L), Li(0, A, 0));
    let J = "";
    for (let Q = 0; Q <= 10; Q++) {
      const at = D - Q * (2 * D) / 10, ct = (Q % 5 === 0 ? 7 : 4) * b, tt = 9 * v;
      J += vo(i, [tt, at, 6], [tt + ct, at, 6]) + vo(i, [-tt, at, 6], [-tt - ct, at, 6]);
    }
    const j = eo(6 * v, 2 * D + 6 * v, 3 * v).map(([Q, at]) => [Q, at, 6]), N = [[-3 * v, D + 3 * v, 6], [3 * v, D + 3 * v, 6], [3 * v, A, 6], [-3 * v, A, 6]];
    return na(i, k, 0, n) + He(i, k, "plate") + `<g class="deco">${J}${Xn(i, j)}<path class="level" d="${Jn(N.map(i.p))}"/></g>` + na(i, Z, 6, n, ko(i, k, 1)) + He(i, Z, "knob") + `<g class="deco">${vo(i, [-12 * I, A, L], [12 * I, A, L])}${vo(i, [-8 * I, A - 3.5 * v, L], [8 * I, A - 3.5 * v, L])}${vo(i, [-8 * I, A + 3.5 * v, L], [8 * I, A + 3.5 * v, L])}</g>`;
  }
}
class pg extends Qn {
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
    const i = this.v, l = 7 + this.kh.x, f = this.ang(this.val.x), [b, g] = this.size(92, 92), v = b / 92, D = g / 92, L = Math.min(v, D), A = (at, ct, tt) => [at * Math.cos(ct) * v, at * Math.sin(ct) * D, tt], B = Re(oa(46, 72).map(([at, ct]) => [at * v, ct * D]), 0, 7), I = Re(oa(22 * L, 64), 7, l), k = Math.min(this.now, this.value), Z = Math.max(this.now, this.value);
    let J = "";
    for (let at = 0; at <= (this.max - this.min) * 2; at++) {
      const ct = this.min + at / 2, tt = Aa(this.ang(ct)), q = at % 10 === 0 ? 36.5 : at % 2 === 0 ? 34.5 : 33.2, z = ct >= k && ct <= Z && this.value > this.now;
      J += vo(i, A(30, tt, 7), A(q, tt, 7), z ? "accent" : "edge"), at % 10 === 0 && (J += Oc(i, A(41, tt, 7), ct, 4 * L));
    }
    let j = "";
    for (let at = 0; at < 40; at++) {
      const ct = Aa(f + at * 9), tt = Math.cos(ct), q = Math.sin(ct), z = 22 * L;
      tt * i.V[0] + q * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (j += vo(i, [z * tt, z * q, 9], [z * tt, z * q, l - 2.2]));
    }
    const N = Aa(f), Q = oa(18.5 * L, 64).map(([at, ct]) => [at, ct, l]);
    return na(i, B, 0, n) + He(i, B, "knob") + `<g class="deco">${J}</g>` + na(i, I, 7, n, ko(i, B, 1)) + He(i, I, "knob") + `<g class="deco">${j}${Xn(i, Q)}${vo(i, [5 * L * Math.cos(N), 5 * L * Math.sin(N), l], [15.5 * L * Math.cos(N), 15.5 * L * Math.sin(N), l], "edge pointer")}</g>`;
  }
}
class ug extends Qn {
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
    const i = this.v, l = this.A.x - this.yaw.x, f = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, D = g / 92, L = Math.min(v, D), A = Re(eo(b, g, 20 * L), 0, 7), B = Re(oa(15 * L, 48), 7, 12), I = xo(Re([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([Z, J]) => [Z * L, J * L]), 12, f, !1), Rs(l));
    let k = "";
    return this.positions.forEach((Z, J) => {
      const j = Aa(Z.a - this.yaw.x), N = J === this.index, Q = Math.cos(j), at = Math.sin(j), ct = oa(1.7 * L, 20).map(([tt, q]) => [tt + 26.5 * Q * v, q + 26.5 * at * D, 7]);
      k += N ? `<path class="dotfill" d="${Jn(ct.map(i.p))}"/>` : Xn(i, ct), k += Oc(i, [37.5 * Q * v, 37.5 * at * D, 7], Z.label, 5.6 * L, { part: `pos-${J}`, cls: N ? "sel" : "", w: 26 });
    }), na(i, A, 0, n) + He(i, A) + k + na(i, I, 7, n, ko(i, A, 1)) + He(i, B, "knob") + He(i, I, "knob") + `<g class="deco">${vo(i, Rs(l)([6 * L, 0, f]), Rs(l)([19 * L, 0, f]))}</g>`;
  }
}
class fg extends Qn {
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
    const i = this.v, l = 6, f = l - 23, b = 6, [g, v] = this.size(86, 104), D = Math.min(g / 86, v / 104), L = ([q, z, ht]) => [q * D, z * D, 6 + (ht - 6) * D], A = Re(eo(g, v, 18 * D), 0, 6), B = xo(Re(oa(8, 40), 6, 10), (q) => L(Li(0, l, 0)(q))), I = (q) => L(Li(0, l, 10)(Rc(this.phi.x)(q))), k = xo(Re(oa(2.2, 20), 0, 13.5), I), Z = xo(Re(oa(3.8, 24), 12.5, 17.5), I), J = (q) => L(Rc(-this.lid.x, f, b)(q)), j = xo(Re(eo(40, 46, 7), 6, 30), (q) => J(Li(0, l, 0)(q))), N = Sf(j, i.V);
    let Q = "";
    if (N[1]) {
      let q = "";
      for (let ht = -84; ht <= 84; ht += 12) {
        const yt = [[ht - 40, l - 40], [ht - 34, l - 40], [ht + 46, l + 40], [ht + 40, l + 40]].map(([Rt, dt]) => i.p(J([Rt, dt, 30])));
        q += `<path class="level" d="${Jn(yt)}"/>`;
      }
      const z = `${this.id}s`;
      Q += `<clipPath id="${z}"><path d="${ko(i, j, 1)}"/></clipPath><g clip-path="url(#${z})">${q}</g>`;
    }
    N[0] && (Q += Xn(i, eo(32, 38, 4).map(([q, z]) => J([q, z + l, 6]))));
    const at = `<g data-part="toggle">${He(i, B)}${He(i, k)}${He(i, Z)}</g>`, ct = `<g data-part="cover">${He(i, j)}<g class="deco">${Q}</g></g>`, tt = this.lid.x > 45;
    return na(i, A, 0, n) + He(i, A) + na(i, j, 6, n, ko(i, A, 1)) + na(i, Z, 6, n, ko(i, A, 1)) + (tt ? ct + at : at + ct);
  }
}
class hg extends Qn {
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
    const i = this.v, [l, f] = this.size(64, 84), b = Math.min(l / 64, f / 84), g = ([j, N, Q]) => [j * b, N * b, 6 + (Q - 6) * b], v = this.press.x * 1.2, D = Re(eo(l, f, 16 * b), 0, 6), L = xo(Re(oa(10, 6).map(([j, N]) => [j, N]), 6, 9 - v, !1), (j) => g(Rs(30)(j))), A = xo(Re(oa(6.5, 36), 9 - v, 12 - v), g), B = (j) => g(Li(0, 0, 12 - v)(Rc(this.phi.x)(j))), I = xo(Re(oa(2.3, 20), 0, 15), B), k = xo(Re(oa(4, 24), 14, 19), B), Z = f / 2 - 13 * b, J = (j, N, Q) => Oc(i, [0, N, 6], j, 6 * b, { part: "lever", cls: Q ? "sel" : "", w: 30 });
    return na(i, D, 0, n) + He(i, D) + J(this.labels[0], -Z, this.on) + J(this.labels[1], Z, !this.on) + na(i, k, 6, n, ko(i, D, 1)) + na(i, I, 6, n, ko(i, D, 1)) + `<g data-part="lever">${He(i, L)}${He(i, A)}${He(i, I)}${He(i, k)}</g>`;
  }
}
const uu = "homecore-density", fu = "homecore-physical", hu = "homecore-physical-view", mu = "homecore-physical-fit", gu = "homecore-physical-binary", Ye = {
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
}, W = (o) => String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), bu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', kc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', wu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', _s = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, vu = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, yu = 1, mg = 4, xu = 16, ku = 32, gg = 128, bg = 256, Mu = 16384, Su = 1, _u = 2, Mc = 4, Cu = 8, wg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Au = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, vg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, _i = {
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
}, Tu = ["covers", "people", "openings", "leaks", "vacuum"], Lu = "homecore_house", Du = "homecore-house-used", Ci = ["switch", "fan", "input_boolean", "automation"], Eu = "homecore-house-look", yg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], xg = [["popup", "Popup"], ["sheet", "Sheet"]], kg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Mg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Sg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Ai = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', _g = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Bu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Sc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', da = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', _c = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Cs = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Cc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', _f = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((n) => '<path d="' + n + '"/>').join("") + "</svg>", As = _f(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Pu = _f(["M20 6L9 17L4 12"]), bo = (o, n = "") => '<span class="tfAreaGlyph" data-icon-for="' + W(o || "") + '"' + (n ? ' data-icon-name="' + W(n) + '"' : "") + "></span>", Ag = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Ru = 1, Hu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Nu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ts = ["door", "window", "garage_door", "opening"], Ou = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Rr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], Tg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Lg = 10, Dg = 20, Eg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Bg = ["living room", "bedroom", "office"];
function Pg(o, { config: n, getHass: i }) {
  var mp, gp, bp;
  const l = (t) => o.getElementById(t), f = l("app"), b = n || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let D = Ye.get(uu) === "1", L = Ye.get(fu) === "1", A = Ye.get(hu) || "front", B = Ye.get(mu) || "fill", I = Ye.get(gu) || "toggle", k = {};
  const Z = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, J = (t, e, a) => Z({ type: "call_service", domain: t, service: e, service_data: a }), j = o.querySelector("#appearancePane .toggleList");
  j && !l("densityToggle") && (j.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), l("densityToggle").addEventListener("click", () => {
    D = !D, Ye.set(uu, D ? "1" : "0"), dt();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], Q = (t, e, a, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + s + '">' + d + "</button>").join("") + "</div>", at = (t, e, a, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function ct() {
    var H, $;
    if (!g || l("housePane")) return;
    const t = l("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (C, E) => '<div class="houseTab' + (C === "look" ? " active" : "") + '" data-house-pane="' + C + '"><section class="card">' + E + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([C, E]) => '<button class="tab segBtn' + (C === "look" ? " active" : "") + '" type="button" data-house-tab="' + C + '">' + E + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", yg.map(([C, E]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + C + '"><div class="tfCardTitle">' + E + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + N.map(([C, E, T]) => at(E, T, '<select class="settingsSelect" data-source="' + C + '" aria-label="' + E + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(_i).map(([C, E]) => at(E.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + C + '" aria-label="' + E.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (C) => t.querySelector('[data-look-group="' + C + '"]'), s = (C) => C == null ? void 0 : C.closest(".toggleRow");
    [s(t.querySelector(".themeBtn"))].forEach((C) => C && r("look").appendChild(C));
    const d = s(l("densityToggle"));
    d && (d.hidden = !0), [s(l("moreInfoChoice")), s(l("namesChoice"))].forEach((C) => C && r("house").appendChild(C)), r("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", Q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", Q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), r("house").insertAdjacentHTML("beforeend", at("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + at("Angle", "Where the physical controls are seen from.", Q("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + at("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", Q("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow") + at("On and off", "How anything that is only on or off shows: switches, plugs, locks, simple lights and fans.", Q("physBinaryChoice", "On and off", "data-phys-binary", [["toggle", "Toggle"], ["rocker", "Rocker"]]), "physBinaryRow"));
    const p = () => {
      const C = l("physToggle");
      C.classList.toggle("on", L), C.setAttribute("aria-checked", String(L)), l("physViewRow").hidden = l("physFitRow").hidden = l("physBinaryRow").hidden = !L, t.querySelectorAll("[data-phys-view]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.physView === A))), t.querySelectorAll("[data-phys-fit]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.physFit === B))), t.querySelectorAll("[data-phys-binary]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.physBinary === I)));
    };
    r("house").addEventListener("click", (C) => {
      const E = C.target.closest("#physToggle,[data-phys-view],[data-phys-fit],[data-phys-binary]");
      E && (E.id === "physToggle" && (L = !L, Ye.set(fu, L ? "1" : "0"), mn.clear()), E.dataset.physView && (A = E.dataset.physView, Ye.set(hu, A), mn.forEach((T) => T.ctl.setCamera(A))), E.dataset.physFit && (B = E.dataset.physFit, Ye.set(mu, B), mn.forEach((T) => T.ctl.setFill(B === "fill"))), E.dataset.physBinary && (I = E.dataset.physBinary, Ye.set(gu, I), mn.clear()), p(), (E.id === "physToggle" || E.dataset.physBinary) && Na());
    }), p(), [s(l("hoursChoice")), s(l("wxStyleChoice"))].forEach((C) => C && r("weather").appendChild(C));
    const u = l("housePane"), h = u.querySelector(".houseTabs"), x = h.querySelector(".rubberIndicator"), _ = "homecore-light-view", M = (C) => {
      u.classList.toggle("tfLightCardsOn", C === "cards"), u.querySelectorAll("[data-light-view]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lightView === C))), Ye.set(_, C);
    };
    M(Ye.get(_) === "table" ? "table" : "cards"), u.querySelector(".tfLightView").addEventListener("click", (C) => {
      const E = C.target.closest("[data-light-view]");
      E && M(E.dataset.lightView);
    }), new ResizeObserver(() => q()).observe(u), ($ = (H = document.fonts) == null ? void 0 : H.ready) == null || $.then(() => q());
    const O = (C) => {
      const E = h.querySelector(".tab.active");
      x.style.transition = "none", C ? Bs(x, x.offsetLeft, x.offsetWidth, E.offsetLeft, E.offsetWidth) : (x.style.left = E.offsetLeft + "px", x.style.width = E.offsetWidth + "px");
    };
    new ResizeObserver(() => O(!1)).observe(h), u.addEventListener("click", (C) => {
      const E = C.target.closest("[data-house-tab]");
      if (E) {
        h.querySelectorAll(".tab").forEach((ot) => ot.classList.toggle("active", ot === E)), u.querySelectorAll(".houseTab").forEach((ot) => ot.classList.toggle("active", ot.dataset.housePane === E.dataset.houseTab)), E.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), O(!0), q();
        return;
      }
      const T = C.target.closest("[data-light-fav]");
      if (T) {
        Ic(T.dataset.lightFav);
        return;
      }
      const K = C.target.closest("[data-light-pick]");
      if (K) {
        const [ot, kt] = K.dataset.lightPick.split("|"), Et = { ...Xt[ot] };
        K.dataset.v ? Et[kt] = K.dataset.v : delete Et[kt], Xt[ot] = Et, So(), [...Je.keys()].filter((qt) => qt.endsWith(":" + kt)).forEach((qt) => Je.delete(qt)), Na();
        return;
      }
      const P = C.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!P || P.disabled)) {
        if (P.dataset.lights && (Xt.lights = P.dataset.lights), P.dataset.dacPad && (Xt.dacPad = P.dataset.dacPad), (P.dataset.lights || P.dataset.dacPad) && (So(), Je.clear()), P.dataset.sumToggle) {
          const ot = P.dataset.sumToggle, kt = new Set(vt.hiddenSums || []);
          kt.has(ot) ? kt.delete(ot) : kt.add(ot), vt = { ...vt, hiddenSums: [...kt] }, La();
        }
        Na();
      }
    }), u.addEventListener("change", (C) => {
      const E = C.target;
      E.dataset.source && (vt = { ...vt, sources: { ...vt.sources || {}, [E.dataset.source]: E.value || void 0 } }, La());
      const T = E.dataset.lightStyle || E.dataset.lightPad;
      if (T) {
        const K = E.dataset.lightStyle ? "lightStyles" : "lightPads", P = { ...Xt[K] };
        E.value ? P[T] = E.value : delete P[T], Xt[K] = P, So(), [...Je.keys()].filter((ot) => ot.endsWith(":" + T)).forEach((ot) => Je.delete(ot));
      }
      Na();
    });
  }
  function tt() {
    var M, O;
    ai() && pn();
    const t = l("housePane");
    if (!t) return;
    const e = !!customElements.get(Ua);
    t.querySelectorAll("[data-lights]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.lights === Xt.lights))), l("lightsRow").querySelector(".status").textContent = e || !ai() ? "How lights show on the house page." : Ya === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.dacPad === Xt.dacPad))), l("dacPadRow").hidden = !ai();
    for (const H of t.querySelectorAll("[data-source]")) {
      if (H === o.activeElement) continue;
      const [$] = N.find(([E]) => E === H.dataset.source), C = Object.keys(k).filter(N.find(([E]) => E === $)[3]).sort((E, T) => wt(E).localeCompare(wt(T)));
      H.dataset.sig !== C.join(",") && (H.innerHTML = '<option value="">Automatic</option>' + C.map((E) => '<option value="' + W(E) + '">' + W(wt(E)) + "</option>").join(""), H.dataset.sig = C.join(",")), H.value = C.includes((M = vt.sources) == null ? void 0 : M[$]) ? vt.sources[$] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((H) => {
      const $ = !(vt.hiddenSums || []).includes(H.dataset.sumToggle);
      H.classList.toggle("on", $), H.setAttribute("aria-checked", String($));
    });
    const a = l("lightRows"), r = l("lightCards"), s = o.activeElement, d = a != null && a.contains(s) || r != null && r.contains(s) ? s : null;
    if (!a || d != null && d.matches("select")) {
      q();
      return;
    }
    const p = new Set($t()), u = (H, $, C, E) => '<option value="' + H + '"' + (H === C ? " selected" : "") + ">" + $ + "</option>", h = Object.keys(k).filter((H) => H.startsWith("light.")).sort((H, $) => !Me.get(H) - !Me.get($) || (Me.get(H) || "").localeCompare(Me.get($) || "") || wt(H).localeCompare(wt($))).map((H) => {
      const $ = Xt.lightStyles[H] || "", C = Xt.lightPads[H] || "", E = p.has(H), T = W(wt(H));
      return "<tr><td><strong>" + T + "</strong></td><td>" + W(Me.get(H) || "—") + "</td><td>" + W(Ne(H)) + '</td><td class="metaSwitchCol"><button class="switch' + (E ? " on" : "") + '" type="button" role="switch" aria-checked="' + E + '" data-light-fav="' + W(H) + '" aria-label="' + T + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + W(H) + '" aria-label="' + T + ' tile">' + u("", "Default", $) + u("tile", "HomeCore tile", $) + u("dac", "Dual Axis Controller", $) + '</select></td><td><select class="settingsSelect" data-light-pad="' + W(H) + '" aria-label="' + T + ' pad"' + (Dn(H) ? "" : " disabled") + ">" + u("", "Default", C) + u("temperature", "Temperature", C) + u("colour", "Colour", C) + "</select></td></tr>";
    }).join(""), x = (H, $, C, E, T) => '<div class="themeChoice" role="group" aria-label="' + C + '">' + E.map(([K, P]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (K === T) + '" data-light-pick="' + H + "|" + W($) + '" data-v="' + K + '">' + P + "</button>").join("") + "</div>", _ = Object.keys(k).filter((H) => H.startsWith("light.")).sort((H, $) => !Me.get(H) - !Me.get($) || (Me.get(H) || "").localeCompare(Me.get($) || "") || wt(H).localeCompare(wt($))).map((H) => {
      const $ = p.has(H), C = W(wt(H)), E = [Me.get(H), Ne(H)].filter(Boolean).map(W).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + C + '</strong><div class="status">' + E + "</div></div></div>" + at("Favourite", "", '<button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + W(H) + '" aria-label="' + C + ' is a favourite"></button>') + at("Tile", "", x("lightStyles", H, C + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[H] || "")) + (Dn(H) ? at("Pad", "", x("lightPads", H, C + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[H] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), r.dataset.html !== _ && (r.innerHTML = _, r.dataset.html = _), d != null && d.dataset.lightFav && ((O = (r.contains(d) ? r : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || O.focus({ preventScroll: !0 })), q();
  }
  function q() {
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
          const _ = () => {
            p.innerHTML = d.map((O, H) => '<option value="' + H + '"' + (O.disabled ? " disabled" : "") + ">" + W(O.textContent) + "</option>").join("");
            const M = d.findIndex((O) => O.getAttribute("aria-pressed") === "true" || O.classList.contains("active"));
            M >= 0 && (p.value = String(M));
          };
          new MutationObserver(_).observe(s, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), _();
        }
        const u = (_) => {
          s.hidden !== !_ && (s.hidden = !_), p.hidden !== _ && (p.hidden = _);
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
        const x = d.every((_) => _.scrollWidth <= _.clientWidth + 1);
        s.hidden = h, u(x), p.dataset.fit = "1";
      }
  }
  const z = document.createElement("div");
  z.className = "densityBadge", z.setAttribute("aria-live", "polite"), z.hidden = !0, f.appendChild(z);
  let ht = 0;
  function yt() {
    if (!D) return;
    const t = l("homeView"), e = (d) => d.offsetParent !== null && !d.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((d) => {
      e(d) && (d.dataset.h = Math.round(d.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, s = a.filter((d) => {
      const p = d.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    z.hidden = !t.classList.contains("active"), z.innerHTML = "<b>" + s + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Rt = () => {
    D && requestAnimationFrame(yt);
  };
  function dt() {
    var t;
    f.classList.toggle("showDensity", D), (t = l("densityToggle")) == null || t.classList.toggle("on", D), z.hidden = !D, clearInterval(ht), D && (ht = setInterval(yt, 1e3), yt());
  }
  window.addEventListener("scroll", Rt, { capture: !0, passive: !0 }), window.addEventListener("resize", Rt, { passive: !0 });
  const S = o.querySelector("#homeView .grid"), Ot = document.createElement("style");
  o.appendChild(Ot);
  const U = new ResizeObserver(() => ft()), rt = /* @__PURE__ */ new Set(), st = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function ft() {
    const t = f.classList.contains("tfAreaOpen") && !f.classList.contains("tfWeatherOpen");
    if (S.classList.toggle("tfStack", t), rt.forEach((h) => {
      (!t || !h.isConnected) && (U.unobserve(h), rt.delete(h));
    }), !t) {
      Ot.textContent = "";
      return;
    }
    const e = getComputedStyle(S), a = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, s = [...S.children].filter((h) => h.dataset.k && h.offsetParent);
    Ot.disabled = !0;
    const d = s.map((h) => {
      const x = getComputedStyle(h), _ = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(r, _ ? +_[1] : x.gridColumnEnd === "-1" ? r : 1);
    });
    Ot.disabled = !1;
    let p = 0;
    const u = s.map((h, x) => {
      rt.has(h) || (rt.add(h), U.observe(h));
      const _ = d[x];
      p + _ > r && (p = 0);
      const M = p + 1;
      return p = (p + _) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + M + " / span " + _ + ";grid-row-end:span " + Math.max(1, Math.ceil(st(h) + a)) + "}";
    }).join(`
`);
    Ot.textContent !== u && (Ot.textContent = u);
  }
  new MutationObserver(ft).observe(S, { childList: !0 }), new MutationObserver(ft).observe(f, { attributes: !0, attributeFilter: ["class"] });
  let nt = null, lt = null, F = null;
  const mt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Map(), fa = (t) => ra.set(t, (ra.get(t) || 0) + 1), Mo = () => [.../* @__PURE__ */ new Set([...Vt.keys(), ...oe])];
  let Ta = !1, on = 0;
  const kn = 6;
  let Ft = null;
  const he = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
  let vt = { favourites: null }, Mn = {}, qr = {}, Bi = [], tr = null;
  const Sn = (() => {
    try {
      return JSON.parse(Ye.get(Du)) || {};
    } catch {
      return {};
    }
  })();
  let Me = /* @__PURE__ */ new Map(), Pi = 0;
  function La() {
    clearTimeout(Pi), Pi = setTimeout(() => Promise.resolve(Z({ type: "frontend/set_user_data", key: Lu, value: vt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ye.get(Eu)) || {};
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
  })(), So = () => Ye.set(Eu, JSON.stringify(Xt)), Vr = () => {
    f.dataset.more = Xt.more, f.dataset.names = Xt.names, Il();
  };
  g && j && !l("moreInfoChoice") && (l("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + xg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, So(), Vr(), l("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + kg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, So(), Vr(), l("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Mg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, So(), Ae == null || Ae.refresh(), l("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Sg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, So(), Ae == null || Ae.setStyle(Xt.wxStyle), Te == null || Te.forEach((a) => a.setStyle(Xt.wxStyle)), l("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), ct();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ya = /* @__PURE__ */ new Map();
  let Ri = "";
  const Hi = g ? Rm({ onChange: () => De() }) : null;
  g && f.classList.add("house");
  const Da = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ae = null, Ni = null, _n = !1;
  function Wr(t) {
    const e = No();
    if (f.classList.toggle("houseBento", !!e), Ae && (Ni !== e || t == null) && (Ae.destroy(), Ae = null), !e || t == null) {
      Da.remove();
      return;
    }
    Da.isConnected || S.append(Da), Da.style.order = t, !Ae && !_n && (Ae = ru(Da, { getHass: i, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: Gr }), Ni = e);
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
  ], zr = jr.map(([t]) => t), nn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], qs = { hourly: 2 }, oo = Object.fromEntries(jr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Te = null, er = null;
  function _o(t) {
    const e = No();
    Te && er !== e && (Te.forEach((a) => a.destroy()), Te = null), Object.values(oo).forEach((a) => e ? !a.isConnected && S.append(a) : a.remove()), e && !Te && !_n && (Te = /* @__PURE__ */ new Map(), er = e), Oi();
  }
  const Gr = () => {
    var t;
    return ((t = le().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Vs = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => wt(t.entity_id).localeCompare(wt(e.entity_id))).map((t) => ["camera:" + t.entity_id, wt(t.entity_id)])];
  function Oi() {
    if (!Te || _n) return;
    const t = new Set(le().hidden);
    jr.forEach(([e, a]) => {
      Te.has(e) || t.has(e) && !(ee != null && ee.fromTray && ee.key === e) || Te.set(e, ru(oo[e], { getHass: i, entityId: er, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => Fd("weather") : void 0, radarSource: Gr }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, wt = (t) => Ut(t).friendly_name || t, me = (t, e) => to(t) || (Number(Ut(t).supported_features) & e) === e, zt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Fe = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), no = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, ar = (t) => Ut(t).supported_color_modes || [], Ws = (t, e) => [5, 3, 1].map((a) => {
    const r = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), $r = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ii = (t) => 0.2126 * $r(t[0]) + 0.7152 * $r(t[1]) + 0.0722 * $r(t[2]), js = (t, e) => {
    const a = Ii(t), r = Ii(e);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }, zs = 0.55, rn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fi = (t) => {
    const e = Ut(t), a = rn.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? Ws(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Co = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Ao(t) {
    var r;
    const e = t.split(".")[0], a = (r = k[t]) == null ? void 0 : r.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Fi(t) : null : e === "climate" ? Co[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function or(t, e, a = !1) {
    const [r, s, d] = t.map(($) => $ / 255), p = Math.max(r, s, d), u = Math.min(r, s, d), h = p - u, x = h ? (p === r ? (s - d) / h + (s < d ? 6 : 0) : p === s ? (d - r) / h + 2 : (r - s) / h + 4) * 60 : 0, _ = (p + u) / 2, M = h ? h / (1 - Math.abs(2 * _ - 1)) : 0, O = h < 0.1 ? Math.min(M, 0.25) : 1, H = ($) => {
      const C = (T) => (T + x / 30) % 12, E = O * Math.min($, 1 - $);
      return [0, 8, 4].map((T) => Math.round(255 * ($ - E * Math.max(-1, Math.min(C(T) - 3, 9 - C(T), 1)))));
    };
    for (let $ = 0.5; a ? $ < 0.96 : $ > 0.04; $ += a ? 0.01 : -0.01) {
      const C = H($);
      if (js(C, e) >= 3) return "rgb(" + C.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const za = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + or(e, [58, 58, 58], !0) + ";--sum-l:" + or(e, [230, 230, 230]);
  }, nr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, qi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + nr.d[t] + ";--g" + t + "-l:" + nr.l[t]).join(";"), Gs = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", ro = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * zs));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + or(t, e);
  }, rr = (t) => ro(Fi(t)), To = (t) => {
    const e = Ao(t);
    return e ? ' data-light style="' + ro(e) + '"' : "";
  }, Lo = (t) => {
    const e = ar(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, ir = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], io = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
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
  const Ga = (t) => {
    var e;
    return Ut(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Cn = (t) => {
    var e;
    return m("pos", t, ((e = he.get(t)) == null ? void 0 : e.pos) ?? Ga(t));
  }, Ur = (t) => {
    var e;
    return m("tilt", t, ((e = he.get(t)) == null ? void 0 : e.tilt) ?? Ut(t).current_tilt_position);
  };
  function Ne(t) {
    var p;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (Lo(t) ? no(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : rn.includes(a.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : zt(a.hvac_action || e.state)) + " · " + Fe(a.current_temperature) + " °C now";
    if (r === "cover") {
      const u = Ga(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? zt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : zt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (r === "vacuum") return zt(e.state) + (e.state === "cleaning" && ((p = a.rooms) != null && p.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : zt(e.state);
    if (r === "alarm_control_panel") return Nu[e.state] || zt(e.state);
    if (r === "lock" || r === "valve") return zt(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : zt(a.problem);
    if (r === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ts.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + io(a.rang);
    const s = i();
    if (s != null && s.formatEntityState && !to(t))
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
  const Do = (t) => t >= 1e3 ? Fe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Yr = Object.fromEntries(Om.map((t) => [t.id, t])), sr = {
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
    return e ? sr[e] || null : !t || (a = t.attributes) != null && a.icon || (d = (s = (r = i()) == null ? void 0 : r.entities) == null ? void 0 : s[t.entity_id]) != null && d.icon ? null : Us(t);
  };
  let Kr = 0;
  function so(t) {
    var a, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var h;
      const d = k[s.dataset.iconFor], p = s.dataset.iconName || "", u = Zr(d, p);
      if (u) {
        (s.dataset.hc !== u || !s.querySelector(":scope>svg.hcGlyph")) && (s.innerHTML = Fm(Yr[u], 24, "hcg" + ++Kr).replace("<svg ", '<svg class="hcGlyph" '), s.dataset.hc = u);
        return;
      }
      if (s.dataset.hc && (delete s.dataset.hc, s.textContent = ""), customElements.get("ha-state-icon") && d && !p) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (s.textContent = "", x = document.createElement("ha-state-icon"), s.appendChild(x)), x.hass = e, x.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-icon") && (s.textContent = "", x = document.createElement("ha-icon"), s.appendChild(x)), x.icon = p || ((h = d == null ? void 0 : d.attributes) == null ? void 0 : h.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || wt(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Xr), (r = t.classList) != null && r.contains("tfIcon") && Xr(t), cr();
  }
  const lr = /* @__PURE__ */ new Map();
  function Xr(t) {
    var d, p, u;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), r = { backgroundColor: a.backgroundColor, color: a.color }, s = lr.get(e);
    lr.set(e, r), !(!s || s.backgroundColor === r.backgroundColor && s.color === r.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([s, r], { duration: Be.warp.cdur, delay: Be.warp.cdelay, easing: Pe[Be.warp.ease], fill: "backwards" });
  }
  const sn = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", Vi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Wi(t) {
    var H, $, C, E, T, K, P;
    const e = t.localName === "svg" ? t : Vi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((ot) => !ot.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const r = (H = t.closest(".tfIcon")) == null ? void 0 : H.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const s = r + "|" + a.map((ot) => ot.getAttribute("d") || ot.localName).join("|");
    if (t.dataset.fitted === s) return !0;
    let d = 1 / 0, p = 1 / 0, u = -1 / 0, h = -1 / 0;
    for (const ot of a) {
      const kt = ot.getBBox(), Et = getComputedStyle(ot), qt = Et.stroke !== "none" ? (parseFloat(Et.strokeWidth) || 0) / 2 : 0;
      if (!kt.width && !kt.height) continue;
      const Wt = (T = (E = (C = ($ = ot.transform) == null ? void 0 : $.baseVal) == null ? void 0 : C.consolidate) == null ? void 0 : E.call(C)) == null ? void 0 : T.matrix, St = Wt ? (() => {
        const Lt = [[kt.x, kt.y], [kt.x + kt.width, kt.y], [kt.x, kt.y + kt.height], [kt.x + kt.width, kt.y + kt.height]].map(([ve, Oe]) => [Wt.a * ve + Wt.c * Oe + Wt.e, Wt.b * ve + Wt.d * Oe + Wt.f]), ue = Lt.map((ve) => ve[0]), we = Lt.map((ve) => ve[1]);
        return { x: Math.min(...ue), y: Math.min(...we), width: Math.max(...ue) - Math.min(...ue), height: Math.max(...we) - Math.min(...we) };
      })() : kt;
      d = Math.min(d, St.x - qt), p = Math.min(p, St.y - qt), u = Math.max(u, St.x + St.width + qt), h = Math.max(h, St.y + St.height + qt);
    }
    if (!(u > d)) return !1;
    const x = (P = (K = e.viewBox) == null ? void 0 : K.baseVal) != null && P.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, _ = r > 40 ? r * (26 / 40) : r - 14, M = _ * x.width / Math.max(u - d, h - p), O = M / x.width;
    return t.localName === "svg" ? (t.style.width = M + "px", t.style.height = M + "px") : t.style.setProperty("--mdc-icon-size", M + "px"), e.style.translate = ((x.x + x.width / 2 - (d + u) / 2) * O).toFixed(2) + "px " + ((x.y + x.height / 2 - (p + h) / 2) * O).toFixed(2) + "px", t.dataset.fitted = s, !0;
  }
  let Eo = 0;
  function Bo(t = 0) {
    clearTimeout(Eo), [...o.querySelectorAll(sn)].filter((a) => !Wi(a)).length && t < 5 && (Eo = setTimeout(() => Bo(t + 1), 300));
  }
  function cr() {
    clearTimeout(Eo), Eo = setTimeout(() => Bo(), 60);
  }
  const Po = (t) => {
    var e, a, r;
    return t.startsWith("light.") && k[t] && !Ut(t).icon && !((r = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, ge = (t, e, a) => (e = e || Po(t), ' data-icon-for="' + W(t) + '"' + (e ? ' data-icon-name="' + W(e) + '"' : "") + (a ? ' data-letter="' + W(a) + '"' : "")), Ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Pt = (t, e, a, r) => W([t, e, a, r ? JSON.stringify(r) : ""].join("|")), dr = (t) => W(JSON.stringify(t));
  function qe(t) {
    const e = W(wt(t) + ", " + Ne(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + W(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + ge(t, Ea(t)) + '></div><div><div class="activityRowName">' + W(wt(t)) + '</div><div class="activityRowMeta">' + W(Ne(t)) + "</div></div></div>";
  }
  const ln = (t, e, a) => '<div class="activityRow" aria-label="' + W(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + ge("", a, t) + '></div><div><div class="activityRowName">' + W(t) + '</div><div class="activityRowMeta">' + W(e) + "</div></div></div>";
  function cn(t, e, a, r, s = "", d = null, p = "") {
    return '<section class="card tfCard' + (p ? " " + p : "") + '" data-tf data-k="' + W(t) + '" style="order:' + e + '" aria-label="' + W(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + W(d) + '" aria-label="' + W(a + (k[d] ? ", " + Ne(d) : "") + ". More info") + '">' + W(a) + "</button>" : '<div class="activityTitle">' + W(a) + "</div>") + '</div><div class="activityRows">' + r.join("") + "</div>" + s + "</section>";
  }
  function Jr(t, e) {
    const a = "readings:" + t.id, r = t.readings.map((s) => qe(s));
    return t.power != null && r.push(ln("Power now", Do(t.power), "mdi:flash")), cn(a, e, "Readings", r);
  }
  function An(t, e) {
    var u;
    const a = "energy:" + t.id, [r, s] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], d = [r, s].filter(Boolean).map((h) => qe(h)), p = Number(((u = k[r]) == null ? void 0 : u.state) || 0) * 1e3;
    return jt.grid && (d.push(qe(jt.grid)), d.push(ln("House use", Do(p + Number(k[jt.grid].state)), "mdi:home-lightning-bolt"))), cn(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ji = (t, e) => cn("plant:" + t.id, e, wt(t.id), t.readings.map((a) => qe(a)), "", t.id);
  function pr(t, e, a, r, s, d, p = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), h = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (s ? ' aria-valuetext="' + W(s) + '"' : "") + ' data-drag="' + W(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (d ? u == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Tn = "homecore-house-last-bright", lo = (() => {
    try {
      return JSON.parse(Ye.get(Tn)) || {};
    } catch {
      return {};
    }
  })();
  let ur = 0;
  const Ln = (t, e) => {
    !e || lo[t] === e || (lo[t] = e, clearTimeout(ur), ur = setTimeout(() => Ye.set(Tn, JSON.stringify(lo)), 500));
  }, ha = (t, e, a, r) => '<div class="tfStep" role="group" aria-label="' + W(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + W(t.toLowerCase()) + '">' + vu.down + "</button><output>" + W(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + W(t.toLowerCase()) + '">' + vu.up + "</button></div>", je = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + W(e) + '">' + a.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + W(r.aria) + '"' : "") + ">" + (r.html || W(r.label)) + "</button>").join("") + "</div>", Qr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ti = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", ei = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + W(wt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + W(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Qr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ti(e) + '">' + Math.round(e) + "%</output></div>";
  function fr(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, s) => {
      r.firstElementChild.setAttribute("style", Qr(e, s)), r.lastElementChild.classList.toggle("lit", e >= (s + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ti(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const zi = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + W(wt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + W(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ys = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + W(wt(t)) + '">' + [
    me(t, Su) && ["open", "Open", "open_cover", e >= 100 && !a],
    me(t, Cu) && ["stop", "Stop", "stop_cover", !1],
    me(t, _u) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([r, s, d, p]) => '<button type="button" data-act="' + Pt("cover", d, t) + '" aria-label="' + s + '"' + (p ? " disabled" : "") + ">" + wg[r] + "</button>").join("") + "</div>", xa = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + W(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + W(e.art) + '&quot;)"' : ge(t, e.icon)) + "></button>", $a = (t) => '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(wt(t) + ", " + Ne(t) + ". More info") + '"><span class="activityRowName">' + W(wt(t)) + '</span><span class="activityRowMeta">' + W(Ne(t)) + "</span></button>";
  function dn(t, e = !1, a = null) {
    const r = w(t), s = t.startsWith("light.") && hr(t) && !(a && Bn(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), p = s ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + W(t) + '"></div>'] : r.sections.map((u, h) => u && (!d || d.includes((r.parts || [])[h])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (s ? " tfDac" : "") + (r.on ? " on" : "") + (!s && !p.length ? " tfHeadOnly" : "") + '" data-k="' + W(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + To(t) + '><div class="tfActionHead">' + xa(t, r) + $a(t) + "</div>" + p.join("") + "</div>";
  }
  const Ua = "dual-controller-v3", Gi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ya = null;
  async function pn() {
    if (Ya || customElements.get(Ua)) return;
    Ya = "loading";
    const t = await Promise.resolve().then(() => Z({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Ua), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Ua)) return;
    const a = Object.assign(document.createElement("script"), { src: Gi });
    a.onerror = () => {
      Ya = "failed", tt();
    }, document.head.appendChild(a);
  }
  const Je = /* @__PURE__ */ new Map(), Dn = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", ai = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function hr(t) {
    return Dn(t) && !!customElements.get(Ua);
  }
  const un = (t) => Xt.lightPads[t] || Xt.dacPad, oi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (e, a, r, ...s) => t.callService(e, ...pp(e, a, r), ...s)
    };
  }, ze = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", $i = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ze })).dataset.tf = "");
  }, ni = /* @__PURE__ */ new Map(), Ui = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ni.set(a.dataset.dac, a.offsetHeight));
  }));
  function En(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let r = Je.get(a);
      if (!r) {
        const s = a.slice(a.indexOf(":") + 1);
        r = document.createElement(Ua), r.setConfig({ type: "custom:" + Ua, entity: s, pad: un(s), tap_action: { action: "none" } }), Je.set(a, r);
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
  customElements.whenDefined(Ua).then(() => {
    g && (S != null && S.querySelector("[data-tf]")) && Vd(Na);
  });
  const m = (t, e, a) => Vt.has(t + "|" + e) ? Vt.get(t + "|" + e) : a;
  function w(t) {
    var d, p;
    const e = k[t], a = e.attributes, r = t.split(".")[0], s = (u, h) => ({ act: Pt(u, "toggle", t), label: h });
    if (r === "light") {
      const u = e.state === "on", h = ar(t), [x, _] = ir(t), M = m("bright", t, no(e));
      u && Ln(t, no(e));
      const O = m("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), H = m("hue", t, u && rn.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: s("light", "Turn " + wt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Lo(t) && pr("bright", t, M / 100, wt(t) + " brightness", M + "%", !1, u ? null : lo[t] ?? null),
        h.includes("color_temp") && pr("ct", t, O == null ? null : (O - x) / (_ - x), wt(t) + " warm to cool", O == null ? "" : Math.round(O) + " kelvin", !0),
        h.some(($) => rn.includes($)) && pr("hue", t, H == null ? null : H / 360, wt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const u = a.target_temp_step || 0.5, h = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: s("climate", "Turn " + wt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ha("Target temperature", Fe(h) + " °C", Pt("climate", "set_temperature", t, { temperature: h - u }), Pt("climate", "set_temperature", t, { temperature: h + u })),
        je("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: zt(x), act: Pt("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (r === "cover") {
      const u = e.state === "opening" || e.state === "closing", h = e.state === "closed", x = Cn(t), _ = Ur(t);
      return { on: !h, tone: "blue", icon: Au[yc(e)][h ? 1 : 0], button: s("cover", (h ? "Open " : "Close ") + wt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        me(t, Mc) && ei(t, x),
        _ != null && zi(t, _),
        Ys(t, x, u)
      ] };
    }
    if (r === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: s("humidifier", "Turn " + wt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target humidity", u + "%", Pt("humidifier", "set_humidity", t, { humidity: u - 1 }), Pt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && je("tfSeg", "Mode", a.available_modes.map((h) => ({ label: zt(h), act: Pt("humidifier", "set_mode", t, { mode: h }), pressed: a.mode === h })))
      ] };
    }
    if (r === "media_player") {
      const u = e.state === "playing", h = e.state === "off" || e.state === "standby", x = m("vol", t, a.volume_level), _ = h ? { act: Pt("media_player", me(t, gg) ? "turn_on" : "toggle", t), label: "Turn " + wt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Pt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + wt(t) } : { act: Pt("media_player", me(t, bg) ? "turn_off" : "toggle", t), label: "Turn " + wt(t) + " off" };
      return { on: !h, tone: "blue", art: !h && a.entity_picture ? a.entity_picture : null, button: _, parts: ["playback", "volume"], sections: h ? [] : [
        (me(t, xu) || me(t, ku) || me(t, yu) || me(t, Mu)) && je("tfSeg", "Playback", [
          { html: _s.prev, aria: "Previous", act: Pt("media_player", "media_previous_track", t), disabled: !me(t, xu) },
          { html: u ? _s.pause : _s.play, aria: u ? "Pause" : "Play", act: Pt("media_player", "media_play_pause", t), disabled: !(me(t, yu) || me(t, Mu)) },
          { html: _s.next, aria: "Next", act: Pt("media_player", "media_next_track", t), disabled: !me(t, ku) }
        ]),
        me(t, mg) && x != null && pr("vol", t, x, wt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const u = e.state === "cleaning", h = a.rooms || [], x = (M) => h.includes(M) ? h.filter((O) => O !== M) : h.concat(M), _ = Pt("vacuum", u ? "pause" : "start", t, to(t) ? { rooms: h } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: _, label: (u ? "Pause " : "Start ") + wt(t) }, parts: ["controls", "rooms"], sections: [
        je("tfSeg", wt(t), [
          { label: u ? "Pause" : "Start", act: _ },
          { label: "Dock", act: Pt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Pt("vacuum", "locate", t) }
        ]),
        to(t) && je("tfChips", "Rooms to clean", jt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Pt("vacuum", "set_rooms", t, { rooms: x(M.name) }), pressed: h.includes(M.name) })))
      ] };
    }
    if (r === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Pt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + wt(t) }, parts: ["controls"], sections: [
        je("tfSeg", wt(t), [
          { label: "Lock", act: Pt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Pt("lock", "unlock", t), pressed: e.state === "unlocked" },
          me(t, Ru) && { label: "Open", act: Pt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Pt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + wt(t) + ", away" : "Disarm " + wt(t) }, parts: ["controls"], sections: [
        je("tfSeg", wt(t), Hu.filter(([, , , h]) => !h || me(t, h)).map(([h, x, _]) => ({ label: x, act: Pt("alarm_control_panel", _, t), pressed: e.state === h })))
      ] };
    }
    if (r === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: s("valve", (u ? "Close " : "Open ") + wt(t)), parts: ["controls"], sections: [
        je("tfSeg", wt(t), [
          { label: "Open", act: Pt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Pt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (r === "water_heater") {
      const u = Number(a.temperature), h = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Pt("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + wt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ha("Target temperature", u + " °C", Pt("water_heater", "set_temperature", t, { temperature: u - h }), Pt("water_heater", "set_temperature", t, { temperature: u + h })),
        ((p = a.operation_list) == null ? void 0 : p.length) && je("tfSeg", "Mode", a.operation_list.map((_) => ({ label: zt(_), act: Pt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (a.operation_mode || e.state) === _ })))
      ] };
    }
    if (Ci.includes(r)) {
      const u = e.state === "on";
      return { on: u, button: s(r, "Turn " + wt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: wt(t) }, sections: [] };
  }
  const y = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Fe(t)) + "°";
  function R(t) {
    var E;
    const e = (T) => t.readings.find((K) => Ut(K).device_class === T), a = e("temperature"), r = e("humidity"), s = (T) => {
      var K;
      return Number((K = k[T]) == null ? void 0 : K.state);
    }, d = (T) => t.actions.filter((K) => T.test(K)), p = t.lights.filter((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) === "on";
    }), u = d(/^cover\./), h = u.filter((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) !== "closed";
    }), x = [...new Set(u.map((T) => yc(k[T])))], _ = d(/^climate\./)[0], M = d(/^humidifier\./)[0], O = d(/^media_player\./), H = O.find((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) === "playing";
    }) || O.find((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) === "paused";
    }), $ = t.plugs.filter((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) === "on";
    }), C = [];
    if (a && Number.isFinite(s(a)) && C.push({ key: "temp", id: a, kind: "reading", icon: bo(a), label: "Temperature", value: Fe(s(a)) + "°" }), r && Number.isFinite(s(r)) && C.push({ key: "hum", id: r, kind: "reading", icon: bo(r), label: "Humidity", value: Math.round(s(r)) + "%" }), t.lights.length && C.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: bo("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? rr(p[0]) : "",
      acts: t.lights.map((T) => ["light", p.length ? "turn_off" : "turn_on", T]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const T = x.length === 1 ? vg[x[0]] : "covers", K = Math.round(u.reduce((P, ot) => P + Ga(ot), 0) / u.length);
      C.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? ro([146, 107, 199]) : "",
        icon: bo("", ((E = Au[x[0]]) == null ? void 0 : E[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: zt(T),
        value: K <= 0 ? "Closed" : K >= 100 ? "Open" : K + "% open",
        short: K <= 0 ? "Closed" : K + "%",
        on: h.length > 0,
        acts: u.map((P) => ["cover", h.length ? "close_cover" : "open_cover", P]),
        aria: (h.length ? "Close the " : "Open the ") + T + " in " + t.name
      });
    }
    if (_) {
      const T = Ut(_), K = k[_].state === "off";
      C.push({
        key: "climate",
        kind: "control",
        tone: T.hvac_action === "cooling" ? "cool" : "heat",
        light: Ao(_) ? ro(Ao(_)) : "",
        icon: bo(_),
        label: wt(_),
        value: K ? "Off" : zt(T.hvac_action || k[_].state) + " · " + y(T.temperature),
        short: K ? "Off" : y(T.temperature),
        on: !K,
        acts: [["climate", "toggle", _]],
        aria: "Turn " + wt(_) + (K ? " on" : " off")
      });
    }
    if (M) {
      const T = k[M].state === "on";
      C.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: T ? ro([33, 150, 243]) : "",
        icon: bo("", "mdi:air-humidifier"),
        label: wt(M),
        value: T ? "On · " + Ut(M).humidity + "%" : "Off",
        short: T ? Ut(M).humidity + "%" : "Off",
        on: T,
        acts: [["humidifier", "toggle", M]],
        aria: "Turn " + wt(M) + (T ? " off" : " on")
      });
    }
    if (O.length) {
      const T = H || O[0], K = k[T], P = K.state === "playing";
      C.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Ao(T) ? ro(Ao(T)) : "",
        icon: bo(T),
        label: wt(T),
        value: Ne(T),
        short: P ? "Playing" : K.state === "paused" ? "Paused" : zt(K.state),
        on: P,
        acts: [["media_player", K.state === "playing" || K.state === "paused" ? "media_play_pause" : "toggle", T]],
        aria: (P ? "Pause " : "Play ") + wt(T)
      });
    }
    return t.plugs.length && C.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: $.length ? ro([255, 193, 7]) : "",
      icon: bo("", "mdi:power-plug"),
      label: "Plugs",
      value: $.length ? $.length + " of " + t.plugs.length + " on" : "All off",
      short: $.length ? $.length + " on" : "Off",
      on: $.length > 0,
      acts: t.plugs.map((T) => ["switch", $.length ? "turn_off" : "turn_on", T]),
      aria: ($.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((T) => C.push(Ut(T).device_class === "moisture" ? { key: "alert:" + T, kind: "alert", icon: bo(T), label: "Water leak" } : { key: "note:" + T, kind: "note", icon: bo(T), label: wt(T) + " " + Ne(T).toLowerCase() })), C;
  }
  const V = (t, e) => {
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
  function Y(t, e, a = !1) {
    const r = e.find((u) => u.key === "lights"), s = !!(r != null && r.on), d = "", p = '<span class="tfAreaGlyph"' + ge("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !r ? '<span class="tfIcon tfAreaIcon' + (s ? " on" : "") + '"' + d + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (s ? " on" : "") + '" type="button"' + d + ' data-acts="' + dr(r.acts) + '" aria-label="' + W(r.aria) + '" aria-pressed="' + s + '">' + p + "</button>";
  }
  const X = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, G = (t, e) => {
    const a = wt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? zt(a.slice(t.name.length + 1)) : a;
  };
  function et(t) {
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(s)) {
      if (a.device_class === "temperature") return { text: y(s) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(s) + "%" } : { text: Fe(s, Number.isInteger(s) ? 0 : 1), unit: d };
    }
    if (r === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: y(a.current_temperature ?? a.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Lo(t) ? no(e) + "%" : "On" };
    if (r === "cover") {
      const d = Ga(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : zt(e.state) } : { text: Ne(t) };
  }
  const it = (t, e, a) => {
    const r = a.find((u) => u.key === "temp"), s = a.find((u) => u.key === "hum"), d = Ut(e), p = k[e].state === "off";
    return e.startsWith("climate.") ? [G(t, e), p ? "Off" : zt(d.hvac_action || k[e].state) + (d.temperature != null ? " · " + y(d.temperature) : ""), s && s.value].filter(Boolean).join(" · ") : [!(r && r.id === e) && G(t, e), r && r.id !== e && r.value, s && s.id !== e && s.value + (r ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function gt(t) {
    const e = t.id === nt, a = R(t), r = X(t), s = r && et(r), d = [...a.filter((p) => p.kind === "control"), ...a.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + W(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + W(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + be(t, null, ' data-cols="2" data-rows="' + Bn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Y(t, a, !0) + '<span class="tfACName">' + W(t.name) + '</span></div><span class="tfACMain">' + (s ? W(s.text + (s.unit ? " " + s.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Dt = [];
  const Tt = (t) => {
    const e = vt.areaOrder || [], a = (r) => {
      const s = e.indexOf(r.id);
      return s < 0 ? e.length + t.indexOf(r) : s;
    };
    return [...t].sort((r, s) => a(r) - a(s));
  }, _t = () => {
    var e;
    const t = new Set(((e = vt.dash) == null ? void 0 : e.areasOff) || []);
    return Tt(Dt).filter((a) => !t.has(a.id));
  }, Gt = ro([255, 162, 75]), Bt = (t) => {
    const e = t.id === nt;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + W(t.id) + '"' + (e ? ' data-light style="' + Gt + '"' : "") + ' aria-label="' + W(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + ge("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, pt = (t) => {
    var r;
    const e = _t();
    e.some((s) => s.id === nt) || (nt = ((r = e[0]) == null ? void 0 : r.id) || null);
    const a = e.find((s) => s.id === nt);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(gt).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? be(a, null, ' data-cols="2" data-rows="' + Bn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Bt).join("") + "</div></div></div>";
  }, Ht = (t) => t.startsWith("room:"), It = (t) => Dt.find((e) => "room:" + e.id === t);
  function be(t, e, a = "") {
    const r = R(t), s = X(t), d = s && et(s), p = s ? it(t, s, r) : "", u = d ? d.text + (d.unit ? " " + d.unit : "") : "", h = (T) => {
      const K = V(t, T.key);
      return K.length === 1 ? K[0] : "group:" + t.id + ":" + T.key;
    }, x = r.filter((T) => T.kind === "control").slice(0, 4), _ = (T) => T.on && T.light ? ' data-light style="' + T.light + '"' : "", M = (T) => '<button class="tfIcon' + (T.on ? " on" : "") + '" type="button" data-tone="' + T.tone + '"' + _(T) + ' data-acts="' + dr(T.acts) + '" aria-label="' + W(T.aria) + '" aria-pressed="' + T.on + '">' + T.icon + "</button>", O = (T) => '<button class="tfIcon' + (T.on ? " on" : "") + '" type="button" data-tone="' + T.tone + '"' + _(T) + ' data-more="' + W(h(T)) + '" aria-label="' + W(t.name + " " + T.label.toLowerCase() + ", " + T.value + ". Open") + '">' + T.icon + "</button>", H = x.map(O), $ = x.map((T) => '<div class="tfRoomDev' + (T.on ? " on" : "") + '" data-more="' + W(h(T)) + '">' + (T.acts ? M(T) : O(T)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + W(h(T)) + '" aria-label="' + W(t.name + " " + T.label.toLowerCase() + ", " + T.value + ". Open") + '"><span class="activityRowName">' + W(T.label) + '</span><span class="activityRowMeta">' + W(T.value) + "</span></button></div>"), C = '<span class="tfAreaGlyph"' + ge("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", E = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '">' + C + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + W(e) + '"' : "") + a + ' data-go="' + W(t.id) + '"><div class="tfActionHead">' + E + '<button class="tfName" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '"><span class="activityRowName">' + W(t.name) + "</span>" + (u || p ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + W(u) + (p ? " · " : "") + "</span>" : "") + W(p) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + W(s) + '" aria-label="' + W(wt(s) + ", " + Ne(s) + ". More info") + '"><span class="tfRoomBig">' + W(u) + "</span>" + (p ? '<span class="tfRoomSub">' + W(p) + "</span>" : "") + "</button>" : "") + (H.length ? '<div class="tfRoomDevices">' + H.join("") + '</div><div class="tfRoomHeads">' + $.join("") + "</div>" : "") + "</div>";
  }
  const At = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], ne = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (vt.favourites ?? Mn.favorite_entities ?? []).filter((t) => k[t]);
  function ka() {
    if (!tr) {
      const e = Object.entries(Sn).sort((r, s) => s[1] - r[1]).map(([r]) => r), a = jt.rooms.flatMap((r) => r.actions);
      tr = [.../* @__PURE__ */ new Set([...Bi, ...e, ...a.filter((r) => w(r).on), ...a])];
    }
    const t = $t();
    return tr.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let co = !1;
  const ri = 6;
  function mr() {
    if (!co || vt.favSeeded || !jt.rooms.length || v) return;
    const t = (a) => Object.keys(k).find((r) => to(r) && a(r)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    vt = { ...vt, favourites: [.../* @__PURE__ */ new Set([...vt.favourites ?? Mn.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, ri), favSeeded: !0 }, La();
  }
  const Ro = () => vt.suggest ?? !Mn.hide_suggested_entities;
  function te() {
    const t = new Set(v ? [] : vt.favHidden || []), e = $t().filter((s) => !t.has(s)), a = Ro() ? ka().filter((s) => !t.has(s) && el(s)) : [], r = Math.max(ri, e.length);
    return [...e, ...a].slice(0, v && !is() ? r : Math.min(Lg, r));
  }
  const Ho = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + W(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + W(wt(t)) + '">' + Ag(e) + "</button>";
  };
  function po(t, { area: e = !1, star: a = !1, plain: r = !1, say: s = null, alert: d = !1 } = {}) {
    var $, C, E, T, K, P;
    const p = r && ((K = ($ = i()) == null ? void 0 : $.devices) == null ? void 0 : K[(T = (E = (C = i()) == null ? void 0 : C.entities) == null ? void 0 : E[t]) == null ? void 0 : T.device_id]), u = p && (p.name_by_user || p.name) || wt(t), h = t.split(".")[0], x = !r && Rr.includes(h) ? w(t) : null, _ = x ? x.on : ["on", "open", "playing"].includes((P = k[t]) == null ? void 0 : P.state), M = r ? null : x ? x.button : Ci.includes(h) ? { act: Pt(h, "toggle", t), label: "Turn " + wt(t) + (_ ? " off" : " on") } : h === "scene" || h === "script" ? { act: Pt(h, "turn_on", t), label: "Run " + wt(t) } : null, O = (s ?? Ne(t)) + (e && Me.get(t) ? " · " + Me.get(t) : ""), H = (x == null ? void 0 : x.icon) || Ea(t);
    return '<div class="activityRow' + (M ? " tfPlug" : "") + (_ ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + W((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + To(t) + ">" + (M && !a ? '<button class="tfIcon" type="button" data-act="' + M.act + '" aria-label="' + W(M.label) + '"' + ge(t, H) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ge(t, H) + "></div>") + '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(u + ", " + O + ". More info") + '"><span class="activityRowName">' + W(u) + '</span><span class="activityRowMeta">' + W(O) + "</span></button>" + (a ? Ho(t) : "") + "</div>";
  }
  const No = () => {
    var t;
    return k[(t = vt.sources) == null ? void 0 : t.weather] ? vt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function ii() {
    var a;
    const t = (r) => Object.keys(k).filter((s) => s.startsWith("binary_sensor.") && r.includes(Ut(s).device_class));
    return ((a = qr.alert_entities) != null && a.length ? qr.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(Ts).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => k[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[r.entity].state) }));
  }
  function Yi() {
    const t = Object.keys(_i), e = /* @__PURE__ */ new Set(), a = [];
    (Mn.shortcuts || []).forEach((d) => {
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
  function gr() {
    var E;
    const t = ((E = i()) == null ? void 0 : E.entities) || {}, e = (T) => Ut(T).device_class, a = Object.keys(k).filter((T) => T.startsWith("sensor.") && e(T) === "battery" || T.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(T))), r = jt.rooms.flatMap((T) => T.plants.map((K) => K.id));
    if (!a.length && !r.length) return null;
    const s = (T) => {
      var P;
      const K = (P = t[T]) == null ? void 0 : P.device_id;
      return !!K && Object.keys(k).some((ot) => {
        var kt;
        return ot.startsWith("binary_sensor.") && ((kt = t[ot]) == null ? void 0 : kt.device_id) === K && e(ot) === "battery_charging" && k[ot].state === "on";
      });
    }, d = (T) => T.startsWith("vacuum.") ? Ut(T).battery_level <= 20 && k[T].state !== "docked" : T.startsWith("binary_sensor.") ? e(T) === "battery" && k[T].state === "on" : parseFloat(k[T].state) <= 20 && !s(T), p = [...a, ...jt.vacuums].filter((T) => k[T] && d(T)), u = [...a.filter((T) => e(T) === "problem" && k[T].state === "on"), ...r.filter((T) => {
      var K;
      return ((K = k[T]) == null ? void 0 : K.state) === "problem";
    })], h = a.filter((T) => k[T].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...p, ...u, ...h])], _ = (T) => {
      const K = parseFloat(k[T].state);
      return e(T) === "battery" && Number.isFinite(K) ? K : 101;
    }, M = [...r, ...jt.vacuums, ...[...a].sort((T, K) => _(T) - _(K))].filter((T) => k[T] && !x.includes(T)), O = /* @__PURE__ */ new Map();
    M.forEach((T) => {
      var P;
      const K = ((P = jt.areaOf) == null ? void 0 : P.call(jt, T)) || "";
      O.set(K, [...O.get(K) || [], T]);
    });
    const H = (T) => {
      const K = jt.rooms.findIndex((P) => P.id === T);
      return T === "" ? 1 / 0 : K < 0 ? jt.rooms.length : K;
    }, $ = [...O.keys()].sort((T, K) => H(T) - H(K)), C = (T) => {
      var K, P, ot, kt;
      return ((K = jt.rooms.find((Et) => Et.id === T)) == null ? void 0 : K.name) || ((kt = (ot = (P = i()) == null ? void 0 : P.areas) == null ? void 0 : ot[T]) == null ? void 0 : kt.name) || T;
    };
    return {
      value: [p.length && ne(p.length, "low battery", "low batteries"), u.length && ne(u.length, "problem", "problems"), h.length && ne(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...$.map((T) => ({ name: T ? C(T) : $.length > 1 ? "Other devices" : "Devices", ids: O.get(T) }))].filter((T) => T.ids.length)
    };
  }
  const Qe = () => v ? vt.home || {} : vt, Zs = (t) => Tu.includes(t) ? (Qe().shownSums || []).includes(t) : !(Qe().hiddenSums || []).includes(t);
  function Cf(t, e, a) {
    const r = t.flatMap((O) => a(O, /^cover\./)), s = r.filter((O) => {
      var H;
      return ["open", "opening"].includes((H = k[O]) == null ? void 0 : H.state);
    }).length, d = Object.keys(k).filter((O) => O.startsWith("person.")), p = d.filter((O) => {
      var H;
      return ((H = k[O]) == null ? void 0 : H.state) === "home";
    }).length, u = jt.security.openings.filter((O) => k[O]), h = u.filter((O) => k[O].state === "on").length, x = Object.keys(k).filter((O) => O.startsWith("binary_sensor.") && Ut(O).device_class === "moisture"), _ = x.filter((O) => k[O].state === "on").length, M = jt.vacuums.filter((O) => k[O]);
    return {
      covers: r.length && { value: s ? s + " open" : "All closed", groups: e((O) => a(O, /^cover\./)) },
      people: d.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: u.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: x.length && { value: _ ? ne(_, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: M.length && { value: zt(k[M[0]].state), groups: [{ name: "Vacuum", ids: M }] }
    };
  }
  function Zi(t = !1) {
    var Wt;
    const e = jt.rooms, a = jt.security, r = (St, Lt) => St.actions.filter((ue) => Lt.test(ue)), s = (St) => e.map((Lt) => ({ name: Lt.name, ids: St(Lt) })).filter((Lt) => Lt.ids.length), d = e.flatMap((St) => St.lights), p = d.filter((St) => {
      var Lt;
      return ((Lt = k[St]) == null ? void 0 : Lt.state) === "on";
    }).length, u = e.map((St) => St.readings.find((Lt) => Ut(Lt).device_class === "temperature")).filter(Boolean).map((St) => Number(k[St].state)).filter(Number.isFinite), [h, x] = [Fe(Math.min(...u)), Fe(Math.max(...u))], _ = e.flatMap((St) => r(St, /^media_player\./)), M = _.filter((St) => {
      var Lt;
      return ((Lt = k[St]) == null ? void 0 : Lt.state) === "playing";
    }).length, O = ii(), H = O.filter((St) => St.severity === "warning" && St.on).length, $ = a.locks.filter((St) => {
      var Lt;
      return ["unlocked", "jammed", "open"].includes((Lt = k[St]) == null ? void 0 : Lt.state);
    }).length, C = a.alarms.filter((St) => {
      var Lt;
      return ((Lt = k[St]) == null ? void 0 : Lt.state) === "disarmed";
    }).length, E = H ? ne(H, "warning", "warnings") : null, T = $ ? $ + " unlocked" : C ? C + " disarmed" : E ? null : "All secure", K = gr(), P = e.flatMap((St) => St.solar), ot = P.find((St) => St.endsWith("_power")), kt = {
      light: d.length && { value: p ? p + " on" : "All off", groups: s((St) => St.lights) },
      climate: u.length && { value: h === x ? h + "°" : h + " - " + x + "°", groups: s((St) => [...St.readings.filter((Lt) => ["temperature", "humidity"].includes(Ut(Lt).device_class)), ...r(St, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [E, T].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((St) => St.ids.length) },
      media_players: _.length && { value: M ? M + " playing" : "No media playing", groups: s((St) => r(St, /^media_player\./)) },
      maintenance: K,
      energy: jt.grid && { value: Do(Number(((Wt = k[ot]) == null ? void 0 : Wt.state) || 0) * 1e3 + Number(k[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...P, jt.grid] }] },
      ...Cf(e, s, r)
    }, Et = [], qt = O.filter((St) => St.severity !== "warning" && St.on);
    return qt.length && Et.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: ne(qt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: qt.map((St) => St.entity) }] }), Yi().forEach((St) => {
      St.type !== "summary" ? Et.push({ key: "path:" + St.path, name: St.label || St.path, icon: St.icon || "mdi:link-variant", colour: "", value: "" }) : !St.hidden && kt[St.key] && (t || Zs(St.key)) && Et.push({ key: St.key, ..._i[St.key], ...kt[St.key] });
    }), Et;
  }
  const Af = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + W(t.key) + '" data-k="sum:' + W(t.key) + '" aria-label="' + W(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + qi() + '"' : t.colour && za(t.colour) ? ' style="' + za(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Gs : "") + '<div class="tfIcon" aria-hidden="true"' + ge(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + W(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + W(t.value) + "</div>" : "") + "</div></div>";
  function Ic(t) {
    const e = $t();
    vt = { ...vt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (vt.favHidden || []).filter((a) => a !== t) }, La(), De();
  }
  function Fc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function qc(t, e) {
    if (t.startsWith("path:")) {
      Fc(t.slice(5));
      return;
    }
    ds("summary:" + t, e);
  }
  async function Tf() {
    const t = (p) => Promise.resolve().then(() => Z(p)).catch(() => null), [e, a, r, s] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Lu }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    vt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded, favsTitle: d.favsTitle, areaOrder: d.areaOrder }, Mn = (a == null ? void 0 : a.value) || {}, qr = (r == null ? void 0 : r.value) || {}, Bi = Array.isArray(s == null ? void 0 : s.entities) ? s.entities : [], tr = null, Object.keys(k).length && De(), Lf(), co = !0, mr();
  }
  const Vc = "HomeCore";
  async function Lf() {
    var r, s, d;
    const t = location.pathname.split("/")[1], e = vt.named || [];
    if (!((s = (r = i()) == null ? void 0 : r.user) != null && s.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      vt = { ...vt, named: [...e, t] }, La();
    };
    try {
      const p = (d = await Z({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((x) => x.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === Vc) {
        a();
        return;
      }
      const u = await Z({ type: "lovelace/config", url_path: t }), h = ((u == null ? void 0 : u.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((_) => _.cards || [])]);
      if (!h.length || !h.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
      await Z({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Vc }), a();
    } catch {
    }
  }
  let si = null, Ks = 0, Xs = !1;
  const Wc = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return Tg.includes(e) && (e !== "binary_sensor" || Ts.includes(a) || !!Ou[a]);
  }, Js = (t) => t.startsWith("binary_sensor.") ? Ou[Ut(t).device_class] : null;
  async function Df() {
    var t;
    if (!(Xs || Date.now() - Ks < 30 * 1e3)) {
      Xs = !0, Ks = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Wc), a = e.length ? await Z({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        si = Array.isArray(a) ? a.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        si = null;
      }
      Xs = !1, De();
    }
  }
  function Ef() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (s) => {
      if (!k[s.entity_id] || !Wc(s.entity_id) || !el(s.entity_id) || ["unavailable", "unknown"].includes(s.state)) return;
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
    }), [...t.values(), ...e.values()].sort((s, d) => d.when - s.when).slice(0, Dg);
  }
  function Bf(t) {
    var r;
    const e = t.context_user_id && Object.keys(k).find((s) => s.startsWith("person.") && Ut(s).user_id === t.context_user_id);
    if (e) return wt(e);
    const a = (r = i()) == null ? void 0 : r.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Pf(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || zt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || zt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + zt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || zt(a).toLowerCase() : e === "alarm_control_panel" ? (Nu[a] || zt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || zt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : zt(a).toLowerCase();
  }
  function Rf(t) {
    const e = t.entity_id, a = t.alarm && Js(e), r = wt(e) + " " + (a ? a[0] : Pf(t)), s = a ? io(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + io(t.cleared * 1e3) : "") : [Bf(t), io(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + ge(e, Ea(e)) + '></div><button class="tfName" type="button" data-more="' + W(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + W(r + ", " + s + ". More info") + '"><span class="activityRowName">' + W(r) + '</span><span class="activityRowMeta">' + W(s) + "</span></button></div>";
  }
  let Za = null, jc = 0;
  const Hf = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function zc() {
    var e;
    if (Date.now() - jc < 5 * 60 * 1e3) return;
    jc = Date.now();
    const t = [];
    try {
      const a = ((e = await Z({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (s) => a.filter((d) => d.type === s).flatMap((d) => s === "grid" ? (d.flow_from || []).map((p) => p.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [s, d, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const u = await Promise.all(p.map((h) => Promise.resolve(Z({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: s, name: d, id: p[0], ids: p, value: u.reduce((h, x) => h + x, 0), unit: Ut(p[0]).unit_of_measurement || (s === "gas" || s === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Za = t, De();
  }
  let br = null, Gc = [];
  function Qs() {
    var d;
    const t = Gc = Za != null && Za.length ? Za : Hf.map(([p, u, h, x]) => {
      if (p === "solar") {
        const M = Object.keys(k).find((O) => O.endsWith("_solar_today") && !O.includes("made_up_energy"));
        M && Number.isFinite(Number(k[M].state)) && (h = Number(k[M].state));
      }
      const _ = "sensor.made_up_energy_" + p;
      return k[_] = { entity_id: _, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: p, name: u, id: _, value: h, unit: x };
    });
    Ct.clear(), t.some((p) => p.id === br) || (br = t[0].id);
    const e = t.map((p) => {
      const u = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, h = Eg[p.key], x = p.id === br;
      return Ct.set(p.id, { name: p.name, text: u, icon: h }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + W(p.id) + '" aria-pressed="' + x + '" aria-label="' + W(p.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ge("", h, p.name) + '></div><div><div class="activityRowName">' + W(p.name) + '</div><div class="activityRowMeta">' + W(u) + "</div></div></div>";
    }), a = t.find((p) => p.id === br), r = (((d = le().opts.energy) == null ? void 0 : d.graph) || "above") === "below", s = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + W(a.id) + '" role="img" aria-label="' + W(a.name) + ', last 24 hours"></svg></div>';
    return cn("dash:energy", 0, "Energy today", e, s, Zi().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function $c(t) {
    const e = S.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === br || (br = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const s = r.dataset.energyPick === t;
      r.classList.toggle("picked", s), r.setAttribute("aria-pressed", String(s));
    }), a.dataset.graph = t, a.dataset.drawn = "", ya.set("dash:energy", Qs()), Rd(!0));
  }
  const Uc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Yc = /* @__PURE__ */ new Map();
  async function Nf(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), s = e.getMinutes() / 60, d = Array.from({ length: 24 }, (u, h) => h <= r ? 0 : null);
    if (!t.ids) {
      const u = Uc[t.key] || Uc.electricity, h = u.map((_, M) => M < r ? _ : M === r ? _ * s : 0), x = h.reduce((_, M) => _ + M, 0) || 1;
      return d.map((_, M) => _ == null ? null : t.value * h[M] / x);
    }
    const p = Yc.get(t.id);
    if (p && p.day === a && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const u = await Z({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((_) => ((u == null ? void 0 : u[_]) || []).forEach((M) => {
        const O = typeof M.start == "number" ? M.start : Date.parse(M.start), H = new Date(O).getHours();
        O >= a && H < r && (d[H] += Number(M.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((_) => Promise.resolve(Z({ type: "recorder/statistic_during_period", statistic_id: _, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
      d[r] = x.reduce((_, M) => _ + M, 0);
    } catch {
    }
    return Yc.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function Of(t, e) {
    const a = await Nf(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), s = Math.max(60, t.clientHeight || 130), d = 18, p = s - 18, u = r / 24, h = u * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), _ = a.map((E) => E ?? 0), M = Math.max(0, ..._), O = (E) => p - (M > 0 ? E / M * (p - d) : 0), H = (E) => E.toLocaleString(void 0, { maximumFractionDigits: E < 10 ? 2 : 1 }) + " " + e.unit, $ = (E) => String(E).padStart(2, "0") + ":00", C = M > 0 ? _.indexOf(M) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + s), t.setAttribute("aria-label", e.name + " today by the hour: " + H(e.value) + (C >= 0 ? ", most " + H(M) + " at " + $(C) : "")), t.innerHTML = [d, (d + p) / 2, p].map((E) => '<line x1="0" x2="' + r + '" y1="' + E + '" y2="' + E + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((E, T) => E > 0 ? '<rect x="' + (T * u + (u - h) / 2).toFixed(1) + '" y="' + O(E).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (p - O(E)).toFixed(1) + '" rx="2" fill="' + (T === x ? "var(--primary)" : "var(--text)") + '"' + (T === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((E) => '<text x="' + (E * u).toFixed(1) + '" y="' + (s - 3) + '">' + String(E).padStart(2, "0") + "</text>").join("") + (C >= 0 ? '<text x="0" y="11">Most: ' + W(H(M)) + " at " + $(C) + "</text>" : "");
  }
  function If(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, r) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Zc(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    of(t, a, [e].filter(Boolean));
  }
  let Ki = null, tl = 0;
  const el = (t) => !t.startsWith("light.") || Bg.includes((Me.get(t) || "").toLowerCase()), al = () => Math.max(2, hn((S == null ? void 0 : S.clientWidth) || 0).n), Kc = (t) => {
    const e = w(t);
    return e.sections.map((a, r) => a && (e.parts || [])[r]).filter(Boolean);
  }, Ff = (t) => Kc(t).slice(0, Bn(t) - 1);
  function Xc(t) {
    const e = le().tiles;
    if (e) return e.filter((r) => k[r] || It(r));
    if (!Ki) {
      const r = (s) => {
        var d;
        return (((d = k[s]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (Sn[s] || 0);
      };
      Ki = {
        lights: jt.rooms.flatMap((s) => s.lights).filter((s) => {
          var d;
          return el(s) && ((d = k[s]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((s, d) => r(d) - r(s) || wt(s).localeCompare(wt(d))),
        climates: jt.rooms.flatMap((s) => s.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = Ki.climates.filter((r) => k[r]).slice(0, t > 3 ? 2 : 1);
    return [...Ki.lights.filter((r) => k[r]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const ol = () => {
    var t;
    return ((t = vt.home) == null ? void 0 : t.welcome) ?? !0;
  }, qf = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((r) => {
      var s;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((s = r.attributes) == null ? void 0 : s.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Vf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = qf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Jc = (t, e, a, r) => (s) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + s + "</div></section>";
  function Wf(t, e) {
    var d, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? ol() : le().welcome) ? '<span class="tfGreeting">' + W(Vf()) + "</span>" : "") + W(((p = (d = i()) == null ? void 0 : d.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Jc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Af(u) })) }), !v && _t().length && t.push({ key: "areas", html: pt(0) });
    const a = te();
    if (a.length && t.push({ key: "favs", wrap: Jc("tfDash-favs", "favs", "Favourites", Ji()), tiles: a.map((u) => ({ key: "fav:" + u, html: po(u, { area: !0 }) })) }), v)
      return zc(), ud() && t.push({ key: "dash:energy", html: Qs() }), tl = al(), Xc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
        tiles: [{ key: u, html: be(It(u), u) }]
      })), t;
    const r = Ef();
    t.push({ key: "dash:act", html: cn("dash:act", 0, "Activity", r.length ? r.map(Rf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Qs() });
    const s = al();
    return tl = s, Xc(s >= 3 ? s : s * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
      tiles: [{ key: u, html: Ht(u) ? be(It(u), u) : dn(u, !1, Ff(u)) }]
    })), Df(), zc(), t;
  }
  const li = 252, pe = 16, jf = 200, zf = Math.round(li * 1.25), Gf = 60, Ba = Gf + pe, $f = 3, Qc = {
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
  }, Uf = ["wx", "favs", "act", "energy", "avg"], td = ["XS", "S", "M", "L", "XL"], ed = td.length, Yf = ["Narrow", "Wide", "Really wide"], Zf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, ad = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && Dn(t) ? ed : Math.min(ed, Kc(t).length + 1), Bn = (t) => {
    const e = le().opts[t] || {}, a = ad(t), r = Number(e.h) || (e.tall ? 5 : Zf[t] || od);
    return Math.max(1, Math.min(a, r));
  }, od = 2, Kf = 90, nd = 60, Pa = (t) => {
    var e;
    return Qc[t] || (t.startsWith("room:") ? ((e = Dt.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : wt(t));
  }, Xf = 128;
  let ma = !1, ee = null, ia = null, nl = !1, Pn = /* @__PURE__ */ new Map(), Xi = 0, fn = 0;
  const Oo = ["title", "sums"], hn = (t) => {
    const e = Math.max(1, Math.floor((t + pe) / (jf + pe)));
    return { n: e, w: Math.max(1, Math.min(zf, Math.floor((t - (e - 1) * pe) / e))) };
  }, rl = () => Tt(Dt), Jf = () => {
    var e;
    const t = new Set(((e = vt.home) == null ? void 0 : e.areasOff) || []);
    return rl().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Qf() {
    const t = Jf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Qc).filter((e) => {
        var a, r;
        return !["title", ...((a = vt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((r = vt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...nh() ? ["wx"] : [], ...ud() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: nn,
      areasOff: []
    };
  }
  const le = () => v ? Qf() : il(), il = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...vt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = nn.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Rn(t) {
    v || (vt = { ...vt, dash: { ...t, known: nn } }, La());
  }
  function Hn() {
    const t = (e) => S.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", oo.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", oo.avg, 2],
      ...nn.map((e) => [e, oo[e], qs[e] || 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, r, s = !1]) => ({ key: e, el: a, span: r, tile: s }));
  }
  const rd = (t, e, a) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const s = 2 * a + pe;
      t.el.style.setProperty("--area-open", s + "px");
      const d = Math.ceil((s + Math.max(0, _t().length - 1) * (Xf + pe) + pe) / (a + pe));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((r = le().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, le().spans[t.key] ?? t.span);
  }, id = (t) => Bn(t.key), sd = window.matchMedia("(max-width: 620px)"), th = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(_t().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + pe) / Ba));
  };
  function ld(t, e, a = null) {
    const r = le().cells, s = t.every((u) => !r[u.key] || r[u.key].col + u.cols <= e), d = (u) => r[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), x = (C, E, T, K) => {
        for (let P = E; P < E + K; P++) for (let ot = C; ot < C + T; ot++) if (u.has(ot + "," + P)) return !1;
        return !0;
      }, _ = (C, E, T) => {
        for (let K = T; K < T + C.rows; K++) for (let P = E; P < E + C.cols; P++) u.add(P + "," + K);
        h.set(C.key, { col: E, row: T, cols: C.cols, rows: C.rows });
      }, M = (C, E, T) => {
        for (E = Math.max(0, Math.min(e - C.cols, E)), T = Math.max(0, T); !x(E, T, C.cols, C.rows); ) T++;
        _(C, E, T);
      }, O = (C) => {
        for (let E = 0; ; E++) for (let T = 0; T <= e - C.cols; T++) if (x(T, E, C.cols, C.rows)) {
          _(C, T, E);
          return;
        }
      };
      a && M(a, ee.col, ee.row);
      const H = t.filter((C) => C !== a), $ = (C, E) => d(C).row - d(E).row || d(C).col - d(E).col;
      return s ? (H.filter((C) => r[C.key]).sort($).forEach((C) => M(C, r[C.key].col, r[C.key].row)), H.filter((C) => !r[C.key]).forEach(O), h) : ([...H].sort($).forEach(O), h);
    })();
  }
  function eh(t, e) {
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
    const t = le(), e = new Set(t.hidden), a = Hn().filter((p) => !Oo.includes(p.key));
    let r = Pn;
    if (!r.size) {
      const p = t.pegs || 4, u = a.filter((h) => !e.has(h.key));
      u.forEach((h) => {
        h.cols = rd(h, p, li), h.rows = id(h) ?? od;
      }), r = ld(u, p);
    }
    const s = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    a.sort((p, u) => s(p).row - s(u).row || s(p).col - s(u).col);
    const d = (t.phone || []).map((p) => a.find((u) => u.key === p && !e.has(p))).filter(Boolean);
    return [...d, ...a.filter((p) => !d.includes(p))];
  }
  const ah = () => {
    const t = sl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), ll([...Hn().filter((e) => Oo.includes(e.key)), ...t].map((e) => e.el));
  };
  function ll(t) {
    if (ee) return;
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
  const wr = (t, e) => Rn({ ...t, cells: e, pegs: hn(S.clientWidth).n });
  function cl(t) {
    const e = S == null ? void 0 : S.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const r = e.getBoundingClientRect(), s = a.getBoundingClientRect(), d = s.right > r.right ? s.right - r.right : s.left < r.left ? s.left - r.left : 0;
    d && e.scrollBy({ left: d, behavior: t ? "smooth" : "auto" });
  }
  function Ge() {
    var K;
    if (requestAnimationFrame(() => cl(!1)), setTimeout(() => cl(!1), 360), !g || !S) return;
    const t = S.clientWidth, e = t < 2 * li + pe, a = f.classList.contains("tfDash");
    v && (ma = !1), f.classList.toggle("tfOverview", v);
    const { n: r, w: s } = e ? { n: 2, w: Math.floor((t - pe) / 2) } : hn(t);
    Da.classList.add("tfPegs"), Da.style.setProperty("--peg-n", r), Da.style.setProperty("--peg-w", s + "px");
    const d = new Set(le().hidden);
    nn.forEach((P) => {
      var ot;
      return (ot = oo[P]) == null ? void 0 : ot.classList.toggle("tfNotAdded", d.has(P) && !(ee != null && ee.fromTray && ee.key === P));
    }), Oi(), f.classList.toggle("tfBoard", a), f.classList.toggle("tfEditing", a && ma && !e);
    const p = l("dashEditNav");
    !a && jo && Ll(!1), p && v ? (p.hidden = !a, jo || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = As)) : p && (p.hidden = !a || e, p.classList.toggle("active", ma), p.setAttribute("aria-pressed", String(ma)), p.setAttribute("aria-label", ma ? "Done editing" : "Edit custom dashboard"), p.title = ma ? "Done" : "Edit", p.innerHTML = ma ? Pu : As);
    const u = a ? Hn() : [];
    if ((!a || !v) && S.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((P) => P.remove()), !a) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((P) => {
        P.classList.remove("tfBoardItem", "tfBoardHidden"), P.style.left = P.style.top = P.style.width = P.style.height = "";
      }), (K = S.querySelector(".tfDash-act > .activityRows")) == null || K.style.removeProperty("max-height"), fl(!1), f.classList.contains("tfDash") && ah(), Le();
      return;
    }
    if (v) {
      sh(u, t, e);
      return;
    }
    S.style.setProperty("--peg-w", s + "px");
    const h = new Set(le().hidden), x = s + pe;
    ee != null && ee.fromTray && h.delete(ee.key), u.forEach((P) => P.el.classList.toggle("tfBoardHidden", h.has(P.key)));
    const _ = u.filter((P) => !h.has(P.key) && getComputedStyle(P.el).display !== "none");
    let M = 0;
    _.filter((P) => Oo.includes(P.key)).forEach((P) => {
      P.el.classList.add("tfBoardItem"), Object.assign(P.el.style, { width: t + "px", height: "", left: "0px", top: M + "px" });
      const ot = P.key === "sums" && P.el.querySelector(".tfDash-bar"), kt = ot ? ot.querySelectorAll(".activityRow").length : 0;
      ot && (ot.style.maxWidth = "none");
      for (let Et = 1; ot && Et <= kt && (ot.style.setProperty("--bar-cols", String(Math.ceil(kt / Et))), !(ot.offsetWidth <= t)); Et++)
        ;
      ot && (ot.style.maxWidth = ""), M += P.el.offsetHeight + pe;
    }), fn = M;
    const O = _.filter((P) => !Oo.includes(P.key));
    O.forEach((P) => {
      P.cols = rd(P, r, s), P.el.classList.add("tfBoardItem"), P.el.style.width = (P.cols === r ? t : P.cols * s + (P.cols - 1) * pe) + "px", P.el.style.height = "", P.rows = id(P) ?? Math.max(1, Math.ceil((P.el.offsetHeight + pe - 6) / Ba)), P.key === "areas" && sd.matches && (P.rows = th(parseFloat(P.el.style.width)));
    });
    const H = ee && O.find((P) => P.key === ee.key), $ = e && sl().map((P) => P.key), C = (P) => $.includes(P.key) ? $.indexOf(P.key) : -1, E = e ? eh([...O].sort((P, ot) => C(P) - C(ot)), r) : ld(O, r, H);
    E.forEach((P) => Object.assign(P, { x: P.cols === r ? 0 : P.col * x, y: fn + P.row * Ba, w: P.cols === r ? t : P.cols * s + (P.cols - 1) * pe, h: P.rows * Ba - pe })), O.forEach((P) => {
      const ot = E.get(P.key);
      P.el.style.height = ot.h + "px", P.el.dataset.rows = e && P.key === "wx" ? 5 : Bn(P.key), P.key === "areas" && P.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((kt) => {
        kt.dataset.rows = P.el.dataset.rows;
      }), P.el.toggleAttribute("data-narrow", !e && ot.cols === 1 && r > 1), P.el.dataset.cols = ot.cols, P.el.classList.contains("tfDac") && P.el.style.setProperty("--tf-dac-pad", ot.h - Kf + "px"), !(P === H && !ee.fromTray) && (P.el.style.left = ot.x + "px", P.el.style.top = ot.y + "px");
    }), e || (Pn = E), ll([..._.filter((P) => Oo.includes(P.key)), ...O.slice().sort((P, ot) => E.get(P.key).row - E.get(ot.key).row || E.get(P.key).col - E.get(ot.key).col)].map((P) => P.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([P, ot]) => {
      const kt = E.get(P), Et = kt && S.querySelector(ot), qt = Et == null ? void 0 : Et.querySelector(":scope > .activityRows"), Wt = Et == null ? void 0 : Et.querySelector(":scope > .activityHeader");
      if (!qt || !Wt) return;
      const St = qt.getBoundingClientRect().top - Et.getBoundingClientRect().top, Lt = kt.rows === 1 ? kt.h : Math.floor(kt.h - St - parseFloat(getComputedStyle(Et).paddingBottom)), ue = Math.max(1, Math.floor(Lt / nd));
      qt.style.setProperty("--fill-gap", (ue > 1 ? (Lt - ue * nd) / (ue - 1) : 0).toFixed(2) + "px"), qt.style.maxHeight = Lt + "px";
    }), Xi = Math.max(0, ...[...E.values()].map((P) => P.row + P.rows));
    let T = fn + Xi * Ba - pe;
    T = fl(ma && !e, O, E, T, r, s), S.style.height = T + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), u.forEach((P) => ul.observe(P.el)), Rd(), Le();
  }
  const Io = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, cd = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, dd = () => {
    var t;
    return cd[(t = vt.home) == null ? void 0 : t.areaSize] ? vt.home.areaSize : "s";
  }, dl = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = vt.home) == null ? void 0 : t.areaLayout) ? vt.home.areaLayout : "bento";
  }, pd = () => {
    var t;
    return ((t = vt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, oh = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ji = () => v ? Fo("favsTitle") : vt.favsTitle !== !1, nh = () => {
    var t;
    return !!((t = vt.home) != null && t.weather && No());
  }, ud = () => {
    var t;
    return !!((t = vt.home) != null && t.energy && (Za != null && Za.length));
  }, Fo = (t) => {
    var e;
    return ((e = vt.home) == null ? void 0 : e[t]) ?? oh[t];
  };
  function rh() {
    var s;
    const t = Object.values(((s = i()) == null ? void 0 : s.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: Dt.filter((p) => p.floor === d.floor_id) })), r = Dt.filter((d) => !e.has(d.floor));
    return r.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: r }), a;
  }
  const fd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let _e = null, hd = [], ci = /* @__PURE__ */ new Map();
  function pl(t) {
    let e = S.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), S.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function ih(t) {
    if (!v || !jo || t.button !== 0 || S.clientWidth < 2 * li + pe) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Hn().find((u) => u.el === e);
    if (!a || Oo.includes(a.key) || Ht(a.key)) return;
    t.preventDefault();
    const r = S.getBoundingClientRect(), s = ci.get(a.key);
    _e = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: s.x, top: s.y, order: [...hd] };
    const d = (u) => {
      const h = u.clientX - _e.x0, x = u.clientY - _e.y0;
      if (!_e.on && Math.hypot(h, x) < 5) return;
      _e.on || (_e.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: _e.left + h + "px", top: _e.top + x + "px" });
      const _ = u.clientX - r.left, M = u.clientY - r.top + S.scrollTop;
      let O = null, H = 1 / 0;
      if (ci.forEach((T, K) => {
        if (K === a.key || !_e.order.includes(K)) return;
        const P = Math.hypot(_ - (T.x + T.w / 2), M - (T.y + T.h / 2));
        P < H && (H = P, O = { key: K, b: T });
      }), !O) return;
      const $ = _e.order.filter((T) => T !== a.key), C = $.indexOf(O.key) + (_ > O.b.x + O.b.w / 2 ? 1 : 0), E = [...$.slice(0, C), a.key, ...$.slice(C)];
      E.join() !== _e.order.join() ? (_e.order = E, Ge()) : pl(ci.get(a.key));
    }, p = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const u = _e;
      _e = null, e.classList.remove("tfDragging"), u.on && Sa({ order: u.order }), Ge(), u.on && !We() && setTimeout(() => fc(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function sh(t, e, a) {
    var yp;
    const r = new Set(le().hidden);
    t.forEach((ut) => ut.el.classList.toggle("tfBoardHidden", r.has(ut.key)));
    const s = t.filter((ut) => !r.has(ut.key) && getComputedStyle(ut.el).display !== "none"), d = pe, p = a ? { w: Math.floor((e - d) / 2) } : hn(e), u = Math.min(e, Io.full);
    let h = 0;
    const x = is();
    f.classList.toggle("hcSumsFit", Md()), f.classList.toggle("hcFavStrip", x);
    const _ = s.filter((ut) => Oo.includes(ut.key) || x && ut.key === "favs");
    _.sort((ut, Nt) => ["title", "sums", "favs"].indexOf(ut.key) - ["title", "sums", "favs"].indexOf(Nt.key)), _.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.toggleAttribute("data-narrow", !1), Object.assign(ut.el.style, { width: (ut.key === "title" ? e : u) + "px", height: "", left: "0px", top: h + "px" });
      const Nt = ut.key !== "title" && (ut.el.querySelector(".tfDash-bar>.activityRows") || ut.key === "favs" && ut.el.querySelector(":scope>.activityRows")), Ee = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let Zt = 2; Zt <= Ee && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(Ee / Zt))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); Zt++)
          ;
      h += ut.el.offsetHeight + (ut.key === "title" ? Io.nameGap : Io.sumsGap);
    });
    const M = ["favs", "wx", "energy"], O = (_e == null ? void 0 : _e.order) || ((yp = vt.home) == null ? void 0 : yp.order), H = O ? [...O.filter((ut) => M.includes(ut)), ...M.filter((ut) => !O.includes(ut))] : M;
    hd = H;
    const $ = s.filter((ut) => M.includes(ut.key) && !(x && ut.key === "favs")).sort((ut, Nt) => H.indexOf(ut.key) - H.indexOf(Nt.key));
    ci = /* @__PURE__ */ new Map();
    const C = (ut, Nt) => {
      if (ci.set(ut.key, Nt), Object.assign(ut.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), _e != null && _e.on && _e.key === ut.key) {
        pl(Nt);
        return;
      }
      Object.assign(ut.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, E = a ? e : 2 * p.w + d, T = Io.row, K = pd() === "stacked" && !a && $.length > 0;
    let P = 0, ot = 0, kt = h;
    $.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.dataset.rows = 5, ut.el.dataset.cols = 2, ut.el.toggleAttribute("data-narrow", !1), !K && P && P + E > e && (h += ot + d, P = 0, ot = 0);
      let Nt = T;
      if ((a || ut.key === "favs") && (Object.assign(ut.el.style, { width: E + "px", height: "" }), Nt = ut.el.offsetHeight), K) {
        C(ut, { x: 0, y: kt, w: E, h: Nt }), kt += Nt + d;
        return;
      }
      C(ut, { x: P, y: h, w: E, h: Nt }), P += E + d, ot = Math.max(ot, Nt);
    }), $.length && !K && (h += ot + d);
    const Et = K ? E + d : 0, qt = K ? e - E - d : e, Wt = a ? "l" : dd(), St = cd[Wt], Lt = dl(), ue = Fo("byFloor"), we = p.w, ve = St.h, Oe = a ? 2 : Math.max(1, Math.floor((qt + d) / (we + d))), Tr = new Map(s.filter((ut) => Ht(ut.key)).map((ut) => [ut.key, ut])), Ia = (ue ? rh() : [{ id: "", name: "", icon: "", rooms: Dt }]).map((ut) => ({ ...ut, cards: ut.rooms.map((Nt) => Tr.get("room:" + Nt.id)).filter(Boolean) })).filter((ut) => ut.cards.length), hs = Lt === "bento", ms = hs && Fo("bentoMixed"), gm = hs && ue && Fo("bentoBoxes"), bm = Lt === "columns" && ue && !a, $o = 12, wp = (ut) => ut.name ? Io.floorHead + Io.floorGap : 0, yi = (ut, Nt, Ee) => {
      const Zt = /* @__PURE__ */ new Set(), ce = [];
      ut.cards.forEach((Jt, go) => {
        const gn = ms && go === 0 && Nt >= 2 && ut.cards.length > 1, Ue = gn ? 2 : 1, Uo = gn && !a ? 2 : 1;
        Jt.el.classList.add("tfBoardItem"), Jt.el.dataset.cols = Ue, Jt.el.toggleAttribute("data-narrow", !1);
        for (let Wn = 0; ; Wn++) {
          const jn = [...Array(Math.max(0, Nt - Ue + 1)).keys()].find((xi) => [...Array(Ue).keys()].every((Qa) => [...Array(Uo).keys()].every((gs) => !Zt.has(Wn + gs + "," + (xi + Qa)))));
          if (jn != null) {
            [...Array(Ue).keys()].forEach((xi) => [...Array(Uo).keys()].forEach((Qa) => Zt.add(Wn + Qa + "," + (jn + xi)))), ce.push({ it: Jt, r: Wn, c: jn, sc: Ue, sr: Uo });
            break;
          }
        }
      });
      const de = Math.max(0, ...ce.map((Jt) => Jt.r + Jt.sr));
      hs && !a && ce.forEach((Jt) => {
        for (; Jt.r + Jt.sr < de && !Zt.has(Jt.r + Jt.sr + "," + Jt.c) && Jt.sc === 1; )
          Zt.add(Jt.r + Jt.sr + "," + Jt.c), Jt.sr++;
      }), ce.forEach((Jt) => {
        Jt.it.el.dataset.rows = Math.min(5, Jt.sr * St.rows), Object.assign(Jt.it.el.style, { width: Jt.sc * Ee + (Jt.sc - 1) * d + "px", height: Jt.sr * ve + (Jt.sr - 1) * d + "px" });
      });
      const Kt = [...Array(de)].map(() => ve), xe = [];
      let _a = wp(ut);
      return Kt.forEach((Jt, go) => {
        xe[go] = _a, _a += Jt + d;
      }), { h: _a - (de ? d : 0), places: ce.map((Jt) => ({ it: Jt.it, x: Jt.c * (Ee + d), y: xe[Jt.r], w: Jt.sc * Ee + (Jt.sc - 1) * d, h: Kt.slice(Jt.r, Jt.r + Jt.sr).reduce((go, gn) => go + gn, 0) + (Jt.sr - 1) * d })) };
    }, tc = new Map([...S.querySelectorAll(":scope > .hcFloor")].map((ut) => [ut.dataset.floor, ut])), ec = new Map([...S.querySelectorAll(":scope > .hcFloorBox")].map((ut) => [ut.dataset.floor, ut])), vp = [], wm = (ut, Nt, Ee, Zt) => {
      if (!ut.name) return;
      let ce = tc.get(ut.id);
      tc.delete(ut.id), ce || (ce = Object.assign(document.createElement("div"), { className: "hcFloor" }), ce.dataset.floor = ut.id, S.appendChild(ce)), ce.dataset.sig !== ut.name && (ce.dataset.sig = ut.name, ce.innerHTML = '<h2 class="hcFloorName">' + W(ut.name) + "</h2>"), Object.assign(ce.style, { left: Nt + "px", top: Ee + "px", width: Zt + "px" }), vp.push(ce);
    }, vm = (ut, Nt, Ee, Zt, ce) => {
      let de = ec.get(ut.id);
      ec.delete(ut.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), de.dataset.floor = ut.id, de.setAttribute("aria-hidden", "true"), S.prepend(de)), Object.assign(de.style, { left: Nt + "px", top: Ee + "px", width: Zt + "px", height: ce + "px" });
    }, ym = (ut) => parseFloat(getComputedStyle(ut.cards[0].el).paddingLeft) || 0, ac = (ut, Nt, Ee, Zt, ce = 0) => {
      wm(ut, Ee + ce, Zt, (Nt.w ?? e) - ce), Nt.places.forEach((de) => C(de.it, { x: Ee + de.x, y: Zt + de.y, w: de.w, h: de.h }));
    };
    if (Ia.length && $.length && !K && (h += Io.floorTop), bm) {
      let ut = 0, Nt = h;
      Ia.forEach((Ee) => {
        const Zt = { ...yi(Ee, 1, we), w: we };
        ut && ut + we > qt && (h = Nt + d + Io.floorTop, ut = 0), ac(Ee, Zt, Et + ut, h), Nt = Math.max(Nt, h + Zt.h), ut += we + d;
      }), h = Nt + d;
    } else if (gm) {
      let ut = [{ x0: 0, x1: qt, t: h }];
      const Nt = (Zt, ce) => Math.max(...ut.filter((de) => de.x1 > Zt && de.x0 < ce).map((de) => de.t)), Ee = (Zt, ce, de) => {
        const Kt = [];
        ut.forEach((xe) => {
          xe.x1 <= Zt || xe.x0 >= ce ? Kt.push(xe) : (xe.x0 < Zt && Kt.push({ x0: xe.x0, x1: Zt, t: xe.t }), xe.x1 > ce && Kt.push({ x0: ce, x1: xe.x1, t: xe.t }));
        }), Kt.push({ x0: Zt, x1: ce, t: de }), ut = Kt.sort((xe, _a) => xe.x0 - _a.x0);
      };
      Ia.forEach((Zt) => {
        const ce = Zt.cards.length + (ms && Zt.cards.length > 1 ? 3 : 0);
        let de = a ? 2 : Math.min(Oe, Math.max(ms && Zt.cards.length > 1 ? 2 : 1, ce <= 3 ? ce : Math.ceil(ce / 2)));
        for (; !a && de > 1 && de * we + (de - 1) * d + 2 * $o > qt; ) de--;
        let Kt = null;
        for (let Ue = de; Ue >= (a ? de : 1); Ue--) {
          const Uo = Math.min(we, Math.floor((qt - 2 * $o - (Ue - 1) * d) / Ue)), Wn = { ...yi(Zt, Ue, Uo), w: Ue * Uo + (Ue - 1) * d }, jn = Wn.w + 2 * $o, xi = Wn.h + 2 * $o;
          ut.map((Qa) => Qa.x0).filter((Qa) => Qa + jn <= qt + 0.5).forEach((Qa) => {
            const gs = Nt(Qa, Qa + jn);
            (!Kt || gs < Kt.t - 0.5) && (Kt = { cc: Ue, inner: Uo, bw: jn, h: xi, t: gs, x: Qa });
          });
        }
        if (!Kt) {
          const Ue = Math.min(we, qt - 2 * $o), Uo = yi(Zt, 1, Ue);
          Kt = { cc: 1, inner: Ue, bw: Ue + 2 * $o, h: Uo.h + 2 * $o, t: Nt(0, qt), x: 0 };
        }
        const xe = { ...yi(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * d }, _a = Kt.bw, Jt = Kt.h, go = Kt.x, gn = Kt.t;
        vm(Zt, Et + go, gn, _a, Jt), ac(Zt, xe, Et + go + $o, gn + $o, ym(Zt)), Ee(go, Math.min(qt, go + _a + d), gn + Jt + d);
      }), h = Math.max(...ut.map((Zt) => Zt.t));
    } else {
      const ut = (Nt) => {
        var de;
        if (!((de = vt.home) != null && de.fitTogether) || a) return Oe;
        const Ee = K ? kt - d - h : null, Zt = (Kt) => {
          const xe = Nt.cards.length + (ms && Nt.cards.length > 1 && Kt >= 2 ? 3 : 0), _a = Math.ceil(xe / Kt);
          return { holes: _a * Kt - xe, rows: _a, h: wp(Nt) + _a * ve + (_a - 1) * d, w: Kt * we + (Kt - 1) * d };
        }, ce = (Kt) => Kt.holes === 0 || hs && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= Oe; Kt++) {
          const xe = Zt(Kt);
          if (ce(xe) && xe.h <= (Ee ?? xe.w)) return Kt;
        }
        for (let Kt = 1; Kt <= Oe; Kt++) {
          const xe = Zt(Kt);
          if (xe.h <= (Ee ?? xe.w)) return Kt;
        }
        return Oe;
      };
      Ia.forEach((Nt, Ee) => {
        Ee && (h += Io.floorTop);
        const Zt = yi(Nt, ut(Nt), we);
        ac(Nt, { ...Zt, w: qt }, Et, h), h += Zt.h + d;
      });
    }
    K && (h = Math.max(h, kt)), tc.forEach((ut) => ut.remove()), ec.forEach((ut) => ut.remove()), _e != null && _e.on || pl(null), S.style.height = Math.max(0, h - d) + "px", ll([..._.map((ut) => ut.el), ...$.map((ut) => ut.el), ...vp, ...Ia.flatMap((ut) => ut.cards.map((Nt) => Nt.el))]), fl(!1), t.forEach((ut) => [...ut.el.children].forEach((Nt) => Nt.toggleAttribute("inert", jo)));
    const oc = S.querySelector(".tfDash-favs>.activityRows");
    oc && (oc.classList.toggle("hcFadeList", !x), fd(oc)), requestAnimationFrame(() => f.classList.add("tfBoardReady")), t.forEach((ut) => ul.observe(ut.el)), Le();
  }
  const Qi = () => {
    nl || (nl = !0, requestAnimationFrame(() => {
      nl = !1, Ge();
    }));
  }, ul = new ResizeObserver(() => {
    ee || Qi();
  });
  function lh(t, e, a) {
    const r = a + pe, s = t * a + (t - 1) * pe, d = e * Ba - pe, p = pe / 2, u = r / Math.max(1, Math.round(r / (Ba / 4))), h = Ba / 4, x = 6;
    let _ = "";
    for (let M = 0; M <= t; M++) for (let O = 0; O <= e; O++) {
      const H = M * r - p, $ = O * Ba - p;
      _ += "M" + (H - x) + " " + $ + "H" + (H + x) + "M" + H + " " + ($ - x) + "V" + ($ + x);
    }
    return '<svg width="' + s + '" height="' + d + '" viewBox="0 0 ' + s + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + u.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (s + pe) + '" height="' + (d + pe) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + _ + '"></path></svg>';
  }
  function fl(t, e = [], a = /* @__PURE__ */ new Map(), r = 0, s = 1, d = li) {
    S.querySelectorAll(".tfEditChips").forEach((_) => {
      (!t || !_.closest(".tfBoardItem")) && _.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((_) => _.remove()), S.querySelectorAll(".tfBoardItem").forEach((_) => [..._.children].forEach((M) => {
      M.classList.contains("tfEditChips") || M.toggleAttribute("inert", t);
    }));
    let p = S.querySelector(".tfBoardCells"), u = S.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), u == null || u.remove(), uo(), r;
    const h = Xi + $f;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), S.prepend(p)), p.style.top = fn + "px", p.dataset.size !== s + "x" + h + "x" + d && (p.dataset.size = s + "x" + h + "x" + d, p.innerHTML = lh(s, h, d)), r = Math.max(r, fn + h * Ba - pe), e.forEach((_) => {
      const M = _.el;
      !M || M.querySelector(":scope > .tfEditChips") || M.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Ai + '</span><button class="tfEditChip" type="button" data-board-more="' + W(_.key) + '" aria-label="' + W(Pa(_.key)) + ' options" aria-haspopup="menu">' + _g + "</button></div>");
    }), ee && a.has(ee.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(u));
      const _ = a.get(ee.key);
      Object.assign(u.style, { left: _.x + "px", top: _.y + "px", width: _.w + "px", height: _.h + "px" });
    } else u == null || u.remove();
    const x = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const _ = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((M) => {
        const O = M.getBoundingClientRect(), H = M.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + W(H) + '" aria-label="Hide ' + W(wt(H)) + ' from the dashboard" style="left:' + Math.round(O.right - _.left - 42) + "px;top:" + Math.round(O.top - _.top + (O.height - 32) / 2) + 'px">' + Bu + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let hl = "";
  function ml(t) {
    ma = t, t || (ee = null, qo = Vo = !1, uo()), Ge(), t ? (hl = JSON.stringify(vt), yr(Yt, "Edit custom dashboard", null)) : hl && JSON.stringify(vt) !== hl && Ra("Changes saved");
  }
  function ch(t, e) {
    var E, T;
    uo();
    const a = Pn.get(t), { n: r } = hn(S.clientWidth), s = le(), d = s.spans[t] ?? (Ht(t) ? 1 : 2);
    if (!a) return;
    const p = a.cols >= r, u = (K, P, ot) => '<button type="button" role="menuitem" data-board-act="' + K + '"' + (ot ? " disabled" : "") + ">" + P + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", Pa(t) + " options");
    const x = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), _ = ad(t), M = Bn(t), O = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + td.map((K, P) => '<button type="button" role="menuitemradio" aria-checked="' + (P + 1 === M) + '" aria-label="' + K + ", " + (P + 1) + (P ? " rows" : " row") + '" data-board-act="h:' + (P + 1) + '"' + (P < _ ? "" : " disabled") + ">" + K + "</button>").join("") + "</div></div>", H = Uf.includes(t) || Ht(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Yf.map((K, P) => '<button type="button" role="menuitemradio" aria-checked="' + (P + 1 === Math.min(d, r)) + '" aria-label="' + K + ", " + (P + 1) + (P ? " columns" : " column") + '" data-board-act="w:' + (P + 1) + '"' + (P < r ? "" : " disabled") + ">" + K + "</button>").join("") + "</div></div>" : "", $ = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Vs().map(([K, P]) => '<button type="button" role="menuitemradio" aria-checked="' + (K === Gr()) + '" data-board-act="src:' + W(K) + '">' + W(P) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = O + H + $ + (t === "energy" ? u("graph", (((E = s.opts.energy) == null ? void 0 : E.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", p || a.col === 0) + u("right", "Move right", p || a.col + a.cols >= r) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (x ? u("remove", "Remove") : u("hide", "Hide")), S.appendChild(h);
    const C = Math.min(a.x + a.w - h.offsetWidth, S.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, C) + "px", top: a.y + 28 + "px" }), ia = { key: t, menu: h, opener: e }, (T = h.querySelector("button:not([disabled])")) == null || T.focus();
  }
  function uo(t) {
    if (!ia) return;
    const { menu: e, opener: a } = ia;
    ia = null, e.remove(), t && (a == null || a.focus());
  }
  const Nn = () => Object.fromEntries([...Pn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function dh(t, e) {
    var u, h, x;
    if (e === "remove") {
      uo(), ph(t);
      return;
    }
    const a = vt, r = le(), s = Nn(), d = s[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (r.opts = { ...r.opts, radar: { ...r.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((u = r.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (s[t] = { ...d, col: d.col - 1 }), e === "right" && (s[t] = { ...d, col: d.col + 1 }), e === "up" && (s[t] = { ...d, row: d.row - 1 }), e === "down" && (s[t] = { ...d, row: d.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ee = { key: t, col: s[t].col, row: s[t].row }), wr(r, s), ee && (Ge(), ee = null, wr(le(), Nn()));
    const p = /^[hw]:/.test(e) && !We() && (ia == null ? void 0 : ia.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const _ = ia;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((M) => M.setAttribute("aria-checked", String(M === p))), setTimeout(() => {
        ia === _ && uo();
      }, Be.tabs.dur);
    } else uo();
    e === "graph" && (ya.delete("dash:energy"), De()), e.startsWith("src:") && ((h = Te == null ? void 0 : Te.get("radar")) == null || h.refresh(), Ae == null || Ae.refresh()), e.startsWith("h:") && t.includes(".") && De(), Ge(), e !== "hide" ? (x = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Ra(Pa(t) + " hidden", rs(a));
  }
  const md = (t) => {
    var e;
    return nn.includes(t) && !(((e = vt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function gl(t) {
    const e = le(), a = Pa(t) + md(t);
    Rn({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Ge(), Ra(a);
  }
  const ts = () => le().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !le().hidden.includes(t));
  function gd(t, e) {
    const a = le();
    wr({ ...a, tiles: t, hidden: a.hidden.filter((r) => !r.includes(".")) }, e), De(), Le();
  }
  const bd = (t) => {
    gd([...ts().filter((e) => e !== t), t], Nn()), Ra(Pa(t) + " added"), mh(t);
  }, ph = (t) => {
    const e = vt, a = Nn();
    delete a[t], gd(ts().filter((r) => r !== t), a), Ra(Pa(t) + " removed", rs(e));
  };
  let bl = 0;
  function Ra(t, e = null) {
    var p;
    const a = l("toast");
    if (!a) return;
    if (q0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(bl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const r = f.getBoundingClientRect(), s = (p = o.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), d = Yt.classList.contains("open") && !fo ? Math.min(r.right, Yt.getBoundingClientRect().left) : r.right;
    a.style.left = (r.left + d) / 2 + "px", a.style.bottom = (s != null && s.height ? window.innerHeight - s.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), V0(a), clearTimeout(bl), bl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Be.confirm.stay);
  }
  const uh = 700, fh = 1e3, ga = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ga.setAttribute("role", "tooltip"), ga.setAttribute("aria-hidden", "true"), f.appendChild(ga);
  let di = null, pi = 0, On = 0, wd = -1 / 0;
  const wl = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, hh = (t) => {
    for (let e = t; e && e !== f; e = e.parentElement) if (wl(e)) return e;
    return null;
  };
  function es(t, e) {
    clearTimeout(pi), clearTimeout(On);
    const a = () => {
      if (!t.isConnected) return;
      di = t, ga.textContent = e, ga.hidden = !1;
      const r = t.getBoundingClientRect(), s = ga.getBoundingClientRect(), d = r.top - s.height - 8 >= 8 ? r.top - s.height - 8 : r.bottom + 8;
      ga.style.left = Math.max(8, Math.min(window.innerWidth - s.width - 8, r.left + r.width / 2 - s.width / 2)) + "px", ga.style.top = d + "px";
    };
    !ga.hidden || performance.now() - wd < fh ? a() : pi = setTimeout(a, uh);
  }
  function as() {
    clearTimeout(pi), clearTimeout(On), ga.hidden || (wd = performance.now()), ga.hidden = !0, di = null;
  }
  o.addEventListener("pointerover", (t) => {
    var r, s;
    if (t.pointerType === "touch") return;
    if (ga.contains(t.target)) {
      clearTimeout(On);
      return;
    }
    const e = (s = (r = t.target).closest) == null ? void 0 : s.call(r, ".tfAreaPick");
    if (e) {
      e !== di ? es(e, e.getAttribute("aria-label")) : clearTimeout(On);
      return;
    }
    const a = hh(t.target);
    if (a && Xt.names === "scroll" && a.matches(os)) {
      vl(a);
      return;
    }
    if (a) {
      a !== di ? es(a, a.textContent.trim()) : clearTimeout(On);
      return;
    }
    clearTimeout(pi), clearTimeout(On), On = setTimeout(as, 120);
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
  const vd = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (vd.unobserve(e.target), vl(e.target));
  }), { threshold: 1 });
  let yl = !1;
  new MutationObserver(() => {
    yl || Xt.names !== "scroll" || (yl = !0, setTimeout(() => {
      yl = !1, o.querySelectorAll(os).forEach((t) => {
        !t.dataset.glided && wl(t) && (t.dataset.glided = "1", vd.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const rs = (t) => () => {
    vt = t, La(), De(), Ge(), Le();
  };
  function mh(t) {
    const e = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const a = e();
      if (!a) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, s = a.getBoundingClientRect();
      (s.top < 0 || s.bottom > window.innerHeight) && a.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const d = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, gh(t) ? 260 : 0);
  }
  function gh(t) {
    const e = Pn.get(t);
    if (!e || !Yt.classList.contains("open") || fo) return !1;
    const { n: a, w: r } = hn(S.clientWidth), s = Yt.getBoundingClientRect().left - S.getBoundingClientRect().left, d = (h) => h * (r + pe) + e.cols * r + (e.cols - 1) * pe <= s;
    if (d(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Pn.forEach((h, x) => {
      if (x !== t) for (let _ = h.row; _ < h.row + h.rows; _++) for (let M = h.col; M < h.col + h.cols; M++) p.add(M + "," + _);
    });
    const u = (h, x) => {
      for (let _ = x; _ < x + e.rows; _++) for (let M = h; M < h + e.cols; M++) if (p.has(M + "," + _)) return !1;
      return !0;
    };
    for (let h = 0; h <= Xi; h++) for (let x = 0; x + e.cols <= a && d(x); x++)
      if (u(x, h))
        return wr(le(), { ...Nn(), [t]: { col: x, row: h } }), Ge(), !0;
    return !1;
  }
  const yd = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, xd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let vr = "page";
  const bh = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, r]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + W(r) + '</span></span><span class="hcRowEnd">' + Cc + "</span></button>").join("") + "</section>", yr = (t, e, a, r) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? r : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, wh = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + kc + "</button>", vh = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function xl(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), r = a.querySelector(".rubberIndicator");
    let s = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = vh(p) !== vr, p.classList.toggle("hcFirst", !p.hidden && s), p.hidden || (s = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const u = p.dataset.trayTab === vr;
      p.classList.toggle("active", u), p.setAttribute("aria-selected", String(u));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (r.style.transition = "none", t ? Bs(r, r.offsetLeft, r.offsetWidth, d.offsetLeft, d.offsetWidth) : (r.style.left = d.offsetLeft + "px", r.style.width = d.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + xd.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Cs + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Cs + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Cs + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Yt);
  let fo = !1, qo = !1, Vo = !1, ui = !1, sa = null, Wo = !1;
  const kl = {}, Ka = (t, e) => {
    if (kl[t] === e) return;
    kl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, so(a);
  }, Ml = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + W(wt(t)) + '</span><span class="activityRowMeta">' + W(e) + "</span></span>", yh = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + W(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + '</span><span class="tfIcon"' + ge(t, Ea(t)) + "></span>" + Ml(t, e ? "Hidden" + (Me.get(t) ? " · " + Me.get(t) : "") : Me.get(t) || Ne(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + W(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + W(wt(t)) + ' on the dashboard">' + (e ? Bu : Cg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + W(t) + '" aria-label="Remove ' + W(wt(t)) + ' from favourites">' + Sc + "</button>" : "<span></span>") + "</li>";
  function Sl(t, e, a, r) {
    const s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((p) => e(p) && !a.has(p) && k[p].state !== "unavailable").filter((p) => {
      const u = (wt(p) + " " + (Me.get(p) || "") + " " + p).toLowerCase();
      return s.every((h) => u.includes(h));
    }).sort((p, u) => (Me.get(p) || "~").localeCompare(Me.get(u) || "~") || wt(p).localeCompare(wt(u))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + W(p) + '"><span class="tfIcon"' + ge(p, Ea(p)) + "></span>" + Ml(p, Me.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const xh = "https://www.home-assistant.io/dashboards/", kd = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ye = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ye.setAttribute("aria-label", "Edit Home page"), ye.toggleAttribute("inert", !0);
  let jo = !1, Ha = !1, _l = "", Cl = null, xr = "page";
  function Al(t, e) {
    const a = ye.querySelector(".hcTrayTabs"), r = a == null ? void 0 : a.querySelector(".rubberIndicator"), s = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(s != null && s.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = ye.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && Al(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? Bs(r, e.left, e.width, s.offsetLeft, s.offsetWidth) : (r.style.left = s.offsetLeft + "px", r.style.width = s.offsetWidth + "px");
  }
  const In = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + W(kd[t][0]) + '">' + _c + "</button>", Ma = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + W(e) + '" ' + a + "></button>", Tl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + W(t) + '. Use the up and down arrows">' + Ai + "</button>", Md = () => {
    var t;
    return ((t = vt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, is = () => {
    var t;
    return ((t = vt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fi = (t, e, a, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + W(t) + '">' + r.map(([s, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + s + '" aria-pressed="' + (a === s) + '">' + d + "</button>").join("") + "</div></div>", Sd = () => Zi(!0).filter((t) => _i[t.key]).map((t) => t.key);
  function Fn() {
    var h, x, _, M, O, H, $;
    if (!jo) return;
    const t = $t(), e = (C) => '<li class="hcHeRow" data-he-id="' + W(C) + '">' + Tl(wt(C)) + '<span class="tfIcon"' + ge(C, Ea(C)) + "></span>" + Ml(C, Me.get(C) || Ne(C)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + W(C) + '" aria-label="Take ' + W(wt(C)) + ' off Favourites">' + Sc + "</button></li>", a = (C) => {
      const E = _i[C];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + W(C) + '"' + (E.colour && za(E.colour) ? ' style="' + za(E.colour).slice(1) + '"' : "") + ">" + Tl(E.name) + '<span class="tfIcon"' + ge("", E.icon, E.name) + '></span><span class="activityRowName">' + W(E.name) + "</span>" + Ma(Zs(C), E.name, 'data-he-sum="' + W(C) + '"') + "</li>";
    }, r = ((h = ye.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", s = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], d = new Set(((x = vt.home) == null ? void 0 : x.areasOff) || []), p = (C) => '<li class="hcHeRow" data-he-id="' + W(C.id) + '">' + Tl(C.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + ge("area:" + C.id, C.icon || "mdi:texture-box", C.name) + '></span></span><span class="activityRowName">' + W(C.name) + "</span>" + Ma(!d.has(C.id), "Show " + C.name + " on Home", 'data-he-area="' + W(C.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + In("welcome") + Ma(ol(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (No() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + In("weather") + Ma(!!((_ = vt.home) != null && _.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Za != null && Za.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + In("energy") + Ma(!!((M = vt.home) != null && M.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fi("Cards", "data-he-cards-as", pd(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Ma(Fo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fi("Layout", "data-he-area-layout", dl(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (dl() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Ma(Fo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Ma(Fo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fi("Area cards", "data-he-area-size", dd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + Ma(!!((O = vt.home) != null && O.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Ma(((H = vt.home) == null ? void 0 : H.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + In("favs") + "</div>" + fi("Show as", "data-he-favs-as", is() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (is() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + Ma(Fo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ha + '">' + Cs + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ha ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + W(r) + '"><ul class="tfTrayList">' + (Ha ? Sl(r, (C) => yd.test(C), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + In("suggest") + Ma(Ro(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + In("sums") + Ma((($ = vt.home) == null ? void 0 : $.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fi("Width", "data-he-sums-width", Md() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Sd().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + rl().map(p).join("") + "</ul>"
    };
    ye.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + s.map(([C, E]) => '<button class="tab segBtn' + (C === xr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (C === xr) + '" data-he-tab="' + C + '">' + E + "</button>").join("") + "</div>" + bh(s, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[xr] + "</div>", Al(!1), so(ye);
  }
  const kr = (t) => {
    vt = { ...vt, ...t }, La(), De(), Fn();
  }, Sa = (t) => kr({ home: { ...vt.home || {}, ...t } });
  function Ll(t) {
    qn(), jo = t, Ha = !1, ye.classList.toggle("open", t), ye.toggleAttribute("inert", !t), f.classList.toggle("hcHomeEditing", t), g && S && Ge();
    const e = l("dashEditNav"), a = ye.querySelector(".tfTrayHead");
    e && t && (Cl = e.parentElement, a.appendChild(e)), e && !t && Cl && Cl.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Pu : As), t ? (_l = JSON.stringify(vt), Fn(), yr(ye, "Edit Home page", null)) : _l && JSON.stringify(vt) !== _l && Ra("Changes saved");
  }
  ye.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + wh + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', f.appendChild(ye);
  let zo = null;
  const Xa = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Xa.setAttribute("role", "dialog"), f.appendChild(Xa);
  function qn() {
    zo && (zo.setAttribute("aria-expanded", "false"), zo = null, Xa.hidden = !0);
  }
  function _d(t) {
    const e = zo;
    if (qn(), e === t) return;
    const [a, r] = kd[t.dataset.info];
    Xa.setAttribute("aria-label", a), Xa.innerHTML = '<div class="hcInfoTitle">' + W(a) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + xh + '" target="_blank" rel="noopener">Learn more</a>', Xa.hidden = !1, zo = t, t.setAttribute("aria-expanded", "true");
    const s = t.getBoundingClientRect(), d = Xa.offsetWidth, p = Xa.offsetHeight;
    Xa.style.left = Math.max(8, Math.min(innerWidth - d - 8, s.left + s.width / 2 - d / 2)) + "px", Xa.style.top = (s.bottom + 8 + p > innerHeight - 8 ? Math.max(8, s.top - 8 - p) : s.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    zo && !t.composedPath().some((e) => e === Xa || e === zo) && qn();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (zo) {
        t.stopPropagation();
        const a = zo;
        qn(), a.focus();
        return;
      }
      if (Ha) {
        t.stopPropagation(), Ha = !1, Fn();
        return;
      }
      jo && (t.stopPropagation(), Ll(!1), (e = l("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const kh = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? rl().map((e) => e.id) : Sd(), Cd = (t, e) => t.dataset.heList === "favs" ? kr({ favourites: e }) : t.dataset.heList === "areas" ? (kr({ areaOrder: e }), Ge()) : Sa({ sumOrder: e });
  ye.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), r = a.parentElement, s = kh(r), d = s.indexOf(a.dataset.heId), p = d + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= s.length || (s.splice(p, 0, s.splice(d, 1)[0]), Cd(r, s), (u = ye.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), ye.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), r = a.dataset.heList;
    Pl(t, e.closest("[data-he-id]"), "heId", (s) => Cd(a, s), (s) => ye.querySelector('[data-he-list="' + r + '"] [data-he-id="' + CSS.escape(s) + '"]'));
  }), ye.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Fn();
      const a = ye.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ye.addEventListener("click", (t) => {
    var E, T, K, P;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      _d(a);
      return;
    }
    const r = e.closest("[data-he-go]");
    if (r) {
      xr = r.dataset.heGo, Ha = !1, qn(), Fn(), yr(ye, "Edit Home page", xr, r.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      qn(), yr(ye, "Edit Home page", null);
      return;
    }
    const s = e.closest("[data-he-tab]");
    if (s) {
      const ot = ye.querySelector(".hcTrayTabs .rubberIndicator"), kt = { left: ot.offsetLeft, width: ot.offsetWidth };
      xr = s.dataset.heTab, Ha = !1, qn(), Fn(), Al(!0, kt), ye.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Sa({ welcome: !ol() });
      return;
    }
    const d = e.closest("[data-he-card]");
    if (d) {
      const ot = d.dataset.heCard, kt = ["sums", "favs"].includes(ot) ? ((E = vt.home) == null ? void 0 : E[ot]) !== !1 : !!((T = vt.home) != null && T[ot]);
      Sa({ [ot]: !kt });
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
      Sa({ fitTogether: !((K = vt.home) != null && K.fitTogether) });
      return;
    }
    const _ = e.closest("[data-he-cards-as]");
    if (_) {
      Sa({ cardsAs: _.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const ot = M.dataset.heFlag;
      Sa({ [ot]: !Fo(ot) }), ot === "favsTitle" && Na();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      kr({ suggest: !Ro() });
      return;
    }
    const O = e.closest("[data-he-area]");
    if (O) {
      const ot = new Set(((P = vt.home) == null ? void 0 : P.areasOff) || []), kt = O.dataset.heArea;
      ot.has(kt) ? ot.delete(kt) : ot.add(kt), Sa({ areasOff: [...ot] });
      return;
    }
    const H = e.closest("[data-he-sum]");
    if (H) {
      const ot = H.dataset.heSum, kt = !Zs(ot), Et = vt.home || {};
      Sa(Tu.includes(ot) ? { shownSums: kt ? [...Et.shownSums || [], ot] : (Et.shownSums || []).filter((qt) => qt !== ot) } : { hiddenSums: kt ? (Et.hiddenSums || []).filter((qt) => qt !== ot) : [...Et.hiddenSums || [], ot] });
      return;
    }
    const $ = e.closest("[data-he-remove]");
    if ($) {
      kr({ favourites: $t().filter((ot) => ot !== $.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ha = !Ha, Fn(), Ha && ye.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const C = e.closest("[data-he-pick-id]");
    C && (Ha = !1, ye.querySelector("[data-he-search]").value = "", kr({ favourites: [...$t(), C.dataset.hePickId] }));
  });
  function Le() {
    var _, M, O;
    const t = ma && f.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && fo), Yt.toggleAttribute("inert", !t), t || (Wo = !1), Bd(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = fo ? kc : Cc, e.setAttribute("aria-expanded", String(!fo)), e.setAttribute("aria-label", fo ? "Show the edit tray" : "Tuck the edit tray away");
    const a = le().hidden.filter((H) => !Oo.includes(H) && Hn().some(($) => $.key === H)), r = (H, $) => '<button class="tfTrayCard" type="button" data-tray-card="' + W(H) + '" aria-label="' + W(Pa(H)) + ": drag it onto the board, or press to " + $ + '"><span class="tfTrayGrip" aria-hidden="true">' + Ai + "</span>" + W(Pa(H)) + "</button>", s = a.filter((H) => !zr.includes(H)), d = zr.filter((H) => a.includes(H));
    Ka("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + In("welcome") + '<button class="switch' + (le().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!le().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((_ = vt.dash) != null && _.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((M = vt.dash) != null && M.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => xl(!1)), Ka("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((H) => r(H, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Ka("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((H) => r(H, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Ka("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (le().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Wo + '">' + (Wo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(vt.favHidden || []), u = $t(), h = [...u, ...[...p].filter((H) => !u.includes(H) && k[H])];
    Ka("favs", h.map((H) => yh(H, p.has(H), u.includes(H))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !Vo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Vo)), Vo && Ka("tilepick", Sl(Yt.querySelector("[data-tile-search]").value, (H) => Rr.includes(H.split(".")[0]), new Set(ts()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !ui, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ui));
    const x = new Set(((O = vt.dash) == null ? void 0 : O.areasOff) || []);
    if (Ka("areas", Tt(Dt).map((H) => '<li class="hcHeRow" data-area-id="' + W(H.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + W(H.name) + '. Use the up and down arrows">' + Ai + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + ge("area:" + H.id, H.icon || "mdi:texture-box", H.name) + '></span></span><span class="activityRowName">' + W(H.name) + '</span><button class="switch' + (x.has(H.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(H.id) + '" aria-label="Show ' + W(H.name) + ' in the Areas card" data-area-on="' + W(H.id) + '"></button></li>').join("")), ui) {
      const H = new Set(ts());
      Ka("roompick", Tt(Dt).filter(($) => !H.has("room:" + $.id)).map(($) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + W($.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ge("area:" + $.id, $.icon || "mdi:texture-box", $.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + W($.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !qo, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(qo)), qo && Ka("pick", Sl(Yt.querySelector("[data-fav-search]").value, (H) => yd.test(H), new Set($t()), "data-fav-pick")), Ka("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ji() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ji() + '" data-fav-title aria-label="Title"></button>'), Ka("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ro() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ro() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Vn = (t) => {
    vt = { ...vt, ...t }, La(), De(), Le();
  };
  function Ad(t, e) {
    const a = vt, r = new Set(vt.favHidden || []);
    e ? r.delete(t) : r.add(t), Vn({ favHidden: [...r] }), e ? Ra(wt(t) + " put back") : Ra(wt(t) + " hidden", rs(a));
  }
  const Mh = (t) => {
    const e = vt;
    Vn({ favourites: $t().filter((a) => a !== t), favHidden: (vt.favHidden || []).filter((a) => a !== t) }), Ra(wt(t) + " removed from favourites", rs(e));
  }, Sh = (t) => {
    Vn({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (vt.favHidden || []).filter((e) => e !== t) }), Ra(wt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, r, s;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        vr = e.dataset.trayTab, xl(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        vr = e.dataset.trayGo, xl(!1), yr(Yt, "Edit custom dashboard", vr, xd.find(([d]) => d === vr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        yr(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) ml(!1);
      else if (e.hasAttribute("data-info")) _d(e);
      else if (e.hasAttribute("data-dash-sums"))
        Rn({ ...il(), hidden: il().hidden.filter((d) => d !== "sums"), sumsOff: !((a = vt.dash) != null && a.sumsOff) }), De(), Le();
      else if (e.hasAttribute("data-dash-welcome")) {
        const d = le();
        Rn({ ...d, welcome: !d.welcome }), De(), Le();
      } else if (e.hasAttribute("data-tray-tuck"))
        fo = !fo, Le();
      else if (e.hasAttribute("data-phone-toggle"))
        Wo = !Wo, Le(), Wo && ((r = ba.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (gl(e.dataset.trayCard), Le());
      else if (e.dataset.favEye) Ad(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Mh(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        qo = !qo, Le(), qo && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Sh(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Vo = !Vo, Le(), Vo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) bd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ui = !ui, Le();
      else if (e.dataset.roomPick) bd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const d = new Set(((s = vt.dash) == null ? void 0 : s.areasOff) || []);
        d.has(e.dataset.areaOn) ? d.delete(e.dataset.areaOn) : d.add(e.dataset.areaOn), Rn({ ...le(), areasOff: [...d] }), De(), Le();
      } else e.hasAttribute("data-fav-suggest") ? Vn({ suggest: !Ro() }) : e.hasAttribute("data-fav-title") && (Vn({ favsTitle: !Ji() }), Na());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Le();
  });
  const Td = (t) => {
    vt = { ...vt, areaOrder: t }, La(), De(), Le();
  };
  Yt.addEventListener("keydown", (t) => {
    var p, u, h;
    const e = (u = (p = t.target).closest) == null ? void 0 : u.call(p, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, r = Tt(Dt).map((x) => x.id), s = r.indexOf(a), d = s + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= r.length || (r.splice(d, 0, r.splice(s, 1)[0]), Td(r), (h = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Pl(t, e.closest("[data-area-id]"), "areaId", Td, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Go = window.visualViewport, Dl = () => {
    if (!Go) return;
    const t = Math.max(0, Math.round(window.innerHeight - Go.height - Go.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  Go == null || Go.addEventListener("resize", Dl), Go == null || Go.addEventListener("scroll", Dl), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Dl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, r;
    const e = !!((r = (a = t.target).closest) != null && r.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Vo : qo) || (t.stopPropagation(), e ? Vo = !1 : qo = !1, Le(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Ld(t, e, a, r) {
    t.preventDefault();
    const s = t.clientX, d = t.clientY;
    let p = null, u = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (M) => {
      if (!p) {
        if (Math.hypot(M.clientX - s, M.clientY - d) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", f.appendChild(p);
      }
      p.style.transform = "translate(" + (M.clientX - 24) + "px," + (M.clientY - 24) + "px)";
      const O = !fo && M.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const C = S.getBoundingClientRect(), { w: E } = hn(S.clientWidth);
        ee = !O && M.clientX >= C.left && M.clientX <= C.right && M.clientY >= C.top + fn ? { key: r, col: Math.max(0, Math.floor((M.clientX - C.left) / (E + pe))), row: Math.max(0, Math.floor((M.clientY - C.top - fn) / Ba)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ge();
        }));
        return;
      }
      const H = S.querySelector(".tfDash-favs"), $ = H == null ? void 0 : H.getBoundingClientRect();
      if (sa = null, $ && !O && M.clientX >= $.left && M.clientX <= $.right && M.clientY >= $.top && M.clientY <= $.bottom) {
        let C = 1 / 0;
        H.querySelectorAll('[data-k^="fav:"]').forEach((E, T) => {
          const K = E.getBoundingClientRect(), P = Math.hypot(M.clientX - (K.left + K.width / 2), M.clientY - (K.top + K.height / 2));
          P < C && (C = P, sa = { i: T, r: K, after: M.clientX > K.left + K.width / 2 });
        }), sa || (sa = { i: 0, r: null, after: !1 });
      }
      sa != null && sa.r ? (h.isConnected || f.appendChild(h), Object.assign(h.style, { left: (sa.after ? sa.r.right : sa.r.left) - 2 + "px", top: sa.r.top + 8 + "px", height: sa.r.height - 16 + "px" })) : h.remove();
    }, _ = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), cancelAnimationFrame(u), p == null || p.remove(), h.remove(), a === "card") {
        if (!p) gl(r);
        else if (ee != null && ee.fromTray) {
          Ge();
          const C = Pa(r) + md(r), E = le(), T = Nn();
          ee = null, wr({ ...E, hidden: E.hidden.filter((K) => K !== r) }, T), Ra(C);
        }
        ee = null, Ge(), De(), Le();
        return;
      }
      if (!sa) return;
      const M = new Set(vt.favHidden || []);
      M.delete(r);
      const O = $t().filter((C) => C !== r), H = O.filter((C) => !M.has(C)), $ = H[Math.min(sa.i + (sa.after ? 1 : 0), H.length)];
      O.splice($ ? O.indexOf($) : O.length, 0, r), sa = null, Vn({ favourites: O, favHidden: [...M] }), Ra(wt(r) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _);
  }
  const Dd = {
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
  }, Ed = 136, _h = 288, Ch = 0.8, Ah = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ba.setAttribute("aria-label", "Phone order"), ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Sc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(ba);
  let El = "";
  function Bd() {
    var u;
    const t = Wo && ma && f.classList.contains("tfBoard") && !fo;
    if (ba.classList.toggle("open", t), ba.toggleAttribute("inert", !t), !t) return;
    const e = sl().filter((h) => !le().hidden.includes(h.key)), a = e.length, r = (h) => Math.round(h * Ch * 10) / 10 + "px", s = (h, x) => {
      const _ = h.el.classList.contains("tfDac"), M = h.tile ? _ ? _h : Ed : Dd[h.key] || Ed;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + W(h.key) + '" style="min-height:' + r(M) + '" aria-label="' + W(Pa(h.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? ge(h.key, Ea(h.key)) : ge(h.key, Ah[h.key])) + '></span><span class="tfPhoneName">' + W(Pa(h.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + W(((u = S.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Dd.sums) + '"><span class="tfPhoneName">' + W(Pa("sums")) + "</span></div>" + e.map(s).join("");
    if (ba.querySelector('[data-phone="note"]').innerHTML = le().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === El) return;
    El = d;
    const p = ba.querySelector('[data-phone="list"]');
    p.innerHTML = d, so(p);
  }
  function Pd(t, e) {
    var a;
    Rn({ ...le(), phone: t }), Le(), e && ((a = ba.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Bl = () => [...ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Th(t, e) {
    t.preventDefault();
    const a = e.parentElement, r = ba.querySelector(".tfPhoneScreen"), s = Bl().join();
    e.classList.add("moving");
    const d = (u) => {
      const h = r.getBoundingClientRect();
      u.clientY > h.bottom - 40 ? r.scrollTop += 12 : u.clientY < h.top + 40 && (r.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((O) => {
        const H = O.getBoundingClientRect();
        return O !== e && u.clientX >= H.left && u.clientX <= H.right && u.clientY >= H.top && u.clientY <= H.bottom;
      });
      if (!x) return;
      const _ = x.getBoundingClientRect(), M = x.classList.contains("tile") ? u.clientX < _.left + _.width / 2 : u.clientY < _.top + _.height / 2;
      a.insertBefore(e, M ? x : x.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const u = Bl();
      El = "", u.join() !== s ? Pd(u) : Bd();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  ba.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Th(t, e);
  }), ba.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Wo = !1, Le(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...s } = le();
      Rn(s), Le();
    }
  }), ba.addEventListener("keydown", (t) => {
    var p, u, h, x;
    if (t.key === "Escape") {
      t.stopPropagation(), Wo = !1, Le(), (p = Yt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (h = (u = t.target).closest) == null ? void 0 : h.call(u, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const r = Bl(), s = r.indexOf(e), d = s + a;
    d < 0 || d >= r.length || ([r[s], r[d]] = [r[d], r[s]], Pd(r, e));
  });
  function Pl(t, e, a, r, s) {
    t.preventDefault();
    const d = Be.drag, p = We(), u = 1 + d.lift / 100, h = [...e.parentElement.children].filter((Lt) => Lt.dataset[a]), x = h.indexOf(e), _ = h.map((Lt) => Lt.getBoundingClientRect()), M = h.length - 1, O = _[x].height + (h.length > 1 ? _[1].top - _[0].bottom : 0), H = (Lt) => _[Lt].top + _[Lt].height / 2, $ = t.clientY, C = _[0].top - _[x].top, E = _[M].top - _[x].top;
    let T = 0, K = 0, P = 0, ot = 1, kt = x, Et = 0;
    e.classList.add("hcListDragging"), h.forEach((Lt) => {
      Lt !== e && (Lt.style.transition = p ? "none" : "transform " + d.gap + "ms " + Pe.land);
    });
    const qt = () => {
      if (Et = requestAnimationFrame(qt), p) {
        K = T, e.style.transform = "translateY(" + K + "px)";
        return;
      }
      P = uc(P, T - K, d.pull / 100, d.keep / 100), K += P, ot += (u - ot) * 0.25;
      const Lt = Math.min(Math.abs(P) / 48, 1);
      e.style.transform = "translateY(" + K.toFixed(2) + "px) scale(" + (ot * (1 - 0.063 * Lt)).toFixed(4) + "," + (ot * (1 + 0.1 * Lt)).toFixed(4) + ")";
    };
    Et = requestAnimationFrame(qt);
    const Wt = (Lt) => {
      T = Math.max(C, Math.min(E, Lt.clientY - $));
      const ue = H(x) + T, we = h.filter((ve, Oe) => Oe !== x && H(Oe) < ue).length;
      we !== kt && (kt = we, h.forEach((ve, Oe) => {
        ve !== e && (ve.style.transform = x < kt && Oe > x && Oe <= kt ? "translateY(" + -O + "px)" : kt < x && Oe >= kt && Oe < x ? "translateY(" + O + "px)" : "");
      }));
    }, St = () => {
      window.removeEventListener("pointermove", Wt), window.removeEventListener("pointerup", St), window.removeEventListener("pointercancel", St), cancelAnimationFrame(Et);
      const Lt = e.getBoundingClientRect(), ue = e.dataset[a];
      h.forEach((Ia) => {
        Ia.style.transition = "none", Ia.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const we = h.map((Ia) => Ia.dataset[a]);
      we.splice(kt, 0, we.splice(x, 1)[0]), r(we);
      const ve = s(ue) || e;
      if (requestAnimationFrame(() => h.forEach((Ia) => {
        Ia.style.transition = "";
      })), p) return;
      const Oe = ve.getBoundingClientRect(), Tr = Lt.top + Lt.height / 2 - (Oe.top + Oe.height / 2);
      ve.classList.add("hcListLanding"), ve.animate([{ transform: "translateY(" + Tr + "px) scale(" + ot + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: d.slide, easing: Pe.land }).finished.then(() => {
        ve.classList.remove("hcListLanding"), fc(ve);
      }, () => ve.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Wt), window.addEventListener("pointerup", St), window.addEventListener("pointercancel", St);
  }
  function Lh(t, e) {
    Pl(
      t,
      e,
      "trayFav",
      (a) => {
        const r = new Set($t());
        kl.favs = null, Vn({ favourites: a.filter((s) => r.has(s)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Ld(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Lh(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Ld(t, a, "fav", a.dataset.trayFav);
  });
  function Dh(t) {
    if (!ma || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Hn().find((qt) => qt.el === e);
    if (!a || Oo.includes(a.key)) return;
    const r = Pn.get(a.key), { w: s } = hn(S.clientWidth);
    if (!r) return;
    t.preventDefault(), uo();
    const d = t.clientX, p = t.clientY;
    let u = !1, h = 0;
    const x = Be.drag, _ = We();
    let M = 0, O = 0, H = 0, $ = 0, C = 0, E = 0, T = _ || x.stick === 0, K = 0;
    const P = (qt, Wt, St, Lt) => {
      e.style.transform = "translate(" + H.toFixed(2) + "px," + $.toFixed(2) + "px) rotate(" + qt.toFixed(2) + "deg) rotate(" + Wt + "rad) scale(" + St.toFixed(4) + "," + Lt.toFixed(4) + ") rotate(" + -Wt + "rad)";
    }, ot = () => {
      if (K = requestAnimationFrame(ot), _) {
        H = M, $ = O, P(0, 0, 1, 1);
        return;
      }
      if (!T) {
        const ue = Math.min(Math.hypot(M, O) / Math.max(1, x.stick), 1);
        H = M * 0.35, $ = O * 0.35, P(0, Math.atan2(O, M), 1 + 0.155 * ue, 1 - 0.1 * ue);
        return;
      }
      C = uc(C, M - H, x.pull / 100, x.keep / 100), E = uc(E, O - $, x.pull / 100, x.keep / 100), H += C, $ += E;
      const qt = Math.hypot(C, E), Wt = Math.min(qt / 48, 1), St = Math.max(-5, Math.min(x.tilt, C * 0.32)), Lt = 1 + x.lift / 100;
      P(St, Math.atan2(E, C), Lt * (1 + 0.1 * Wt), Lt * (1 - 0.063 * Wt));
    }, kt = (qt) => {
      if (M = qt.clientX - d, O = qt.clientY - p, !u) {
        if (Math.hypot(M, O) < 4) return;
        u = !0, ee = { key: a.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), K = requestAnimationFrame(ot);
      }
      !T && Math.hypot(M, O) > x.stick && (T = !0, C = M * 0.085, E = O * 0.085), ee.col = Math.round((r.x + M) / (s + pe)), ee.row = Math.round((r.y + O - fn) / Ba), h || (h = requestAnimationFrame(() => {
        h = 0, Ge();
      }));
    }, Et = () => {
      var Tr;
      if (window.removeEventListener("pointermove", kt), window.removeEventListener("pointerup", Et), window.removeEventListener("pointercancel", Et), !u) return;
      const qt = (Lr) => {
        Lr.preventDefault(), Lr.stopImmediatePropagation();
      };
      window.addEventListener("click", qt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", qt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(K);
      const Wt = e.getBoundingClientRect(), St = a.key;
      e.style.transition = "none", Ge(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ee = null, wr(le(), Nn()), Ge(), De();
      const Lt = (Tr = Hn().find((Lr) => Lr.key === St)) == null ? void 0 : Tr.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Lt && (Lt.style.transition = "");
      }), !Lt || _) return;
      Lt.style.transition = "none";
      const ue = Lt.getBoundingClientRect(), we = Wt.left + Wt.width / 2 - (ue.left + ue.width / 2), ve = Wt.top + Wt.height / 2 - (ue.top + ue.height / 2);
      Lt.style.zIndex = "20", Lt.animate([{ transform: "translate(" + we + "px," + ve + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Pe.land }).finished.then(() => {
        Lt.style.zIndex = "", fc(Lt);
      }, () => {
        Lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", kt), window.addEventListener("pointerup", Et), window.addEventListener("pointercancel", Et);
  }
  function Rd(t = !1) {
    const e = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = a;
    const s = Gc.find((d) => d.id === e.dataset.graph);
    s ? Of(e, s).then(() => {
      (t || r) && If(e);
    }) : cp(e.dataset.graph, e).then(() => {
      t && Zc(e);
    });
  }
  function Hd() {
    var h, x, _;
    jt = Hi.model(i(), { madeUp: !v }), mr(), k = jt.states, k[(h = vt.sources) == null ? void 0 : h.grid] && (jt.grid = vt.sources.grid), k[(x = vt.sources) == null ? void 0 : x.alarm] && (jt.security.alarms = [vt.sources.alarm]), he.forEach((M, O) => {
      const H = k[O], $ = (H == null ? void 0 : H.attributes) || {};
      if (!H || Date.now() - M.at > 2 * 60 * 1e3) {
        he.delete(O);
        return;
      }
      M.pos != null && H.state !== "opening" && H.state !== "closing" && Math.abs(Ga(O) - M.pos) < 1 && delete M.pos, M.tilt != null && Math.abs(($.current_tilt_position ?? -1) - M.tilt) < 1 && delete M.tilt, M.pos == null && M.tilt == null && he.delete(O);
    });
    const t = [];
    let e = 0;
    const a = At();
    Dt = a.filter((M) => M.room).map((M) => M.room), Dt.some((M) => M.id === nt) || (nt = ((_ = Dt[0]) == null ? void 0 : _.id) || null);
    const r = lt === "weather" ? { key: "weather", name: "Weather" } : lt && a.find((M) => M.key === lt);
    if (r || (lt = null), f.classList.toggle("tfAreaOpen", !!r), f.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), f.classList.toggle("tfDash", !r), Me = /* @__PURE__ */ new Map(), jt.rooms.forEach((M) => [...M.actions, ...M.plugs, ...M.readings, ...M.openings, ...M.solar, ...M.plants.flatMap((O) => [O.id, ...O.readings])].forEach((O) => Me.set(O, M.name))), !r) return Wf(t, Zi());
    if (t.push({ key: "areahead", html: Eh(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const s = r.ids, d = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: An(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Jr(p, ++e) }), p == null || p.plants.forEach((M) => t.push({ key: "plant:" + M.id, html: ji(M, ++e) }));
    const u = [...s, ...((p == null ? void 0 : p.plugs) || []).filter((M) => !s.includes(M))];
    return u.length && t.push({ key: "block:" + d, order: ++e, tiles: u.map((M) => ({ key: M, html: dn(M) })) }), t;
  }
  const Eh = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + kc + '</button><div class="settingsTitle">' + W(t.name) + "</div></div>";
  let Nd = 0, Od = null;
  const Id = (t) => t === "weather" ? oo.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function Fd(t) {
    var e, a;
    lt || (Nd = mi().scrollTop, Od = ((e = Id(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), lt = t, t.startsWith("room:") && (nt = t.slice(5)), Na(), mi().scrollTop = 0, (a = S.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let hi = null;
  function Bh(t, e) {
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
    lt = null, Na(), mi().scrollTop = Nd, Bh(() => Id(t), Od);
    const e = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? oo.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Ph = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + W(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", qd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function mi() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Vd(t) {
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
    const t = Hd(), e = (s) => {
      var d;
      return (((d = s.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + s.dataset.iconFor + "|" + (s.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((s) => {
      s.firstElementChild && (a.get(e(s)) || a.set(e(s), []).get(e(s))).push(s.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((s) => s.remove()), ya.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((s) => s.tiles ? Ph(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => ya.set(d.key, d.html)) : ya.set(s.key, s.html)), Ri = qd(t), r.querySelectorAll("[data-icon-for]").forEach((s) => {
      var p;
      const d = !s.firstElementChild && ((p = a.get(e(s))) == null ? void 0 : p.shift());
      d && s.appendChild(d);
    }), S.append(...r.children), Wr(t.weather), _o(), ul.disconnect(), Ge(), so(S), Gl(S), En(S), tt(), dp(), Cr(), ep(), Qd(), requestAnimationFrame(yt);
  }
  const Wd = (t) => {
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
  function jd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const r = Wd(t), s = Nl(t, a.firstElementChild);
    so(s), Gl(s), En(s), Hl(s, r);
  }
  function De() {
    !g || !S || ee || Vd(Rh);
  }
  function Rh() {
    if (Ta = !1, !S.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = Hd();
    if (qd(t) !== Ri) {
      Na();
      return;
    }
    const e = (a) => Mo().some((r) => {
      const s = r.slice(r.indexOf("|") + 1);
      return a === s || a.endsWith(":" + s);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((r) => {
      if (ya.get(r.key) === r.html) return;
      if (e(r.key) || r.key === "areas" && on) {
        Ta = !0;
        return;
      }
      const s = S.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      s && (ya.set(r.key, r.html), jd(s, r.html), r.key.startsWith("energy:") && dp());
    })), Cr(), ep(), Qd(), c(), tt(), Ae == null || Ae.update(), Te == null || Te.forEach((a) => a.update()), f.classList.contains("tfDash") && Qi(), requestAnimationFrame(yt);
  }
  const Mr = {
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
  }, Hh = (t) => to(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Nh(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + W(r.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + r.ids.map((s) => po(s, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Mt = document.createElement("div");
  Mt.className = "tfMoreBackdrop", Mt.hidden = !0, f.appendChild(Mt);
  const Ja = document.createElement("div");
  Ja.className = "tfMoreBackdrop tfMoreUnder", Ja.hidden = !0, f.insertBefore(Ja, Mt);
  const Ol = (t, e) => {
    for (let a = t; a && a !== Mt; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if ((r === "auto" || r === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let gi = null;
  Mt.addEventListener("touchstart", (t) => {
    gi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Mt.addEventListener("touchmove", (t) => {
    var s, d;
    if (!gi || t.touches.length > 1 || (d = (s = t.target).closest) != null && d.call(s, "input,textarea,select")) return;
    const e = t.touches[0], a = gi.x - e.clientX, r = gi.y - e.clientY;
    gi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(a) && !Ol(t.target, r) && t.preventDefault();
  }, { passive: !1 }), Mt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Ol(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Oh = () => window.innerWidth <= 620;
  let $e = null;
  Mt.addEventListener("pointerdown", (t) => {
    const e = Mt.querySelector(".tfMorePair");
    !Oh() || !e || !e.contains(t.target) || !t.isPrimary || Mt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || ($e = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Mt.addEventListener("pointermove", (t) => {
    if (!$e || !t.isPrimary) return;
    const e = t.clientY - $e.y, a = performance.now();
    if (!$e.on) {
      if (Math.abs(t.clientX - $e.x) > 8 || e < -8 || !$e.grab && Ol($e.from, -1)) {
        $e = null;
        return;
      }
      if (e < 8) return;
      $e.on = !0;
      try {
        Mt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    $e.v = (e - $e.dy) / Math.max(1, a - $e.t), $e.dy = e, $e.t = a, $e.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const zd = (t) => {
    if (!$e || !t.isPrimary) return;
    const e = $e;
    if ($e = null, !e.on) return;
    const a = (x) => {
      x.preventDefault(), x.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), s = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || We()) {
      r ? Xl() : e.pair.animate([{ transform: s }, { transform: "none" }], { duration: 320, easing: Pe.spring });
      return;
    }
    const d = F;
    Mt._closing = !0, Mt.style.pointerEvents = "none", Mt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Pe.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: s }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Pe.exit, fill: "forwards" });
    let u = !1;
    const h = () => {
      u || (u = !0, Mt._closing = !1, Mt.style.pointerEvents = "", Mt.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), F === d && Xl());
    };
    p.finished.then(h, h), setTimeout(h, 300);
  };
  Mt.addEventListener("pointerup", zd), Mt.addEventListener("pointercancel", zd);
  function Il() {
    const t = Mt.querySelector(".tfMorePair"), e = Mt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Il, { passive: !0 }), g && Vr();
  let ho = [];
  const Ih = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Fh(t) {
    const e = (C, E = "") => '<div class="tfMoreHead">' + (F != null && F.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + W(C) + "</div>" + E + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + wu + "</button></div>", a = (C, E) => '<div class="tfMoreNow"><div class="tfMoreState">' + W(C) + "</div></div>", r = Nh;
    if (t === "favourites") {
      const C = $t(), E = new Set(C), T = [{ name: "Starred", ids: C }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((K) => ({ name: K.name, ids: [...K.actions, ...K.plugs] }))].map((K, P) => P ? { ...K, ids: K.ids.filter((ot) => !E.has(ot)) } : K).filter((K) => K.ids.length);
      return [e("Favourites"), a(C.length ? C.length + " starred" : "None starred"), r(T, { star: !0 }, !0)];
    }
    const s = (C, { name: E = "", alert: T = !1, plain: K = !1 } = {}) => {
      const P = K ? [] : C.filter((Et) => Rr.includes(Et.split(".")[0])), ot = C.filter((Et) => !P.includes(Et)), kt = (Et) => Et.startsWith("vacuum.") && Ut(Et).battery_level != null ? Ut(Et).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (E ? '<div class="tfMoreGroupName">' + W(E) + "</div>" : "") + '<div class="tfMoreActions">' + P.map((Et) => dn(Et, !0)).join("") + ot.map((Et) => po(Et, { plain: K, alert: T, say: K ? kt(Et) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const C = Zi().find((P) => P.key === t.slice(8));
      if (!C) return null;
      const E = C.key === "light" ? (C.groups || []).flatMap((P) => P.ids) : [], T = E.some((P) => {
        var ot;
        return ((ot = k[P]) == null ? void 0 : ot.state) === "on";
      }), K = E.length ? '<button class="primary" type="button" data-acts="' + dr(E.map((P) => ["light", T ? "turn_off" : "turn_on", P])) + '">' + (T ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(C.name), '<div class="tfMoreNowRow">' + a(C.value) + K + "</div>", ...(C.groups || []).map((P) => s(P.ids, { name: P.name === C.name ? "" : P.name, alert: P.alert, plain: C.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, C, E] = t.split(":"), T = jt.rooms.find((ot) => ot.id === C), K = T && R(T).find((ot) => ot.key === E);
      if (!K) return null;
      const P = K.acts ? '<button class="primary" type="button" data-acts="' + dr(K.acts) + '">' + (K.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(T.name + " " + K.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(K.value) + P + "</div>", s(V(T, E))];
    }
    const d = t.split(".")[0];
    k[t];
    const p = Rr.includes(d) || Ci.includes(d) ? w(t) : Fl(t), u = Qh(t), h = [...u ? u.pages.map((C) => ({ name: C.name, svg: C.svg, tabs: C.tabs, html: C.space + '<div class="tfMoreCtl"' + To(t).replace(" data-light", "") + ">" + C.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: da, ..._r(t) ? { tabs: Kd() } : {}, html: jh(t) + (_r(t) ? Yd(t) : "") + (d === "plant" ? im(t).join("") : "") + p.sections.filter(Boolean).join("") }], { name: "Info", svg: _c, html: am(t) }];
    F && F.page == null && (F.page = 0), F && (F.pages = h.length);
    const x = (F == null ? void 0 : F.page) || 0, _ = (F == null ? void 0 : F.mode) || "", M = h.length - 1, O = !!(u != null && u.infoButton), H = h.flatMap((C, E) => (O && E === M ? [] : C.tabs || [{ name: C.name, svg: C.svg }]).map((T) => ({ ...T, page: E }))), $ = (C) => C.page === x && (C.mode == null || C.mode === _);
    return [
      Vh(t, p),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (_ && x === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + h.map((C) => '<section class="tfMorePage" aria-label="' + C.name + '" data-mode="' + _ + '">' + C.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (O ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (H.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (O ? "Views" : "Pages") + '">' + H.map((C) => '<button type="button" role="tab" aria-selected="' + $(C) + '" aria-label="' + C.name + '" title="' + C.name + '" data-more-page="' + C.page + '"' + (C.mode != null ? ' data-more-mode="' + C.mode + '"' : "") + ($(C) ? "" : ' tabindex="-1"') + ">" + C.svg + "</button>").join("") + "</div>" : "") + (O ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (x === M) + '" data-more-page="' + M + '" data-more-toggle>' + _c + "</button></div>" : "")
    ];
  }
  const qh = (t, e) => {
    const a = t.split(".")[0], r = k[t], s = r.attributes;
    if (a === "light") return Ne(t);
    const d = a === "climate" ? zt(s.hvac_action || r.state) : a === "humidifier" ? zt(s.action || r.state) : a === "water_heater" ? zt(s.operation_mode || r.state) : a === "fan" && r.state === "on" && s.percentage != null ? s.percentage + "%" : (a === "valve" || a === "cover") && s.current_position != null && r.state !== "closed" ? s.current_position + "%" : Ne(t);
    return [e, d].filter(Boolean).join(" · ");
  };
  function Vh(t, e, a) {
    var p, u, h, x, _;
    const r = (p = jt.areaOf) == null ? void 0 : p.call(jt, t), s = r && (((u = jt.rooms.find((M) => M.id === r)) == null ? void 0 : u.name) || ((_ = (x = (h = i()) == null ? void 0 : h.areas) == null ? void 0 : x[r]) == null ? void 0 : _.name)) || "", d = e.button ? xa(t, e) : '<div class="tfIcon"' + ge(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + To(t) + ">" + (F != null && F.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bu + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + W(wt(t)) + '</span><span class="activityRowMeta">' + W(qh(t, s)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + wu + "</button></div>";
  }
  const Wh = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Fl(t) {
    var s;
    const e = t.split(".")[0], a = ((s = k[t]) == null ? void 0 : s.state) === "on", r = Ci.includes(e) ? { act: Pt(e, "toggle", t), label: "Turn " + wt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Pt(e, "turn_on", t), label: "Run " + wt(t) } : null;
    return { sections: [], on: a, button: r, icon: Ea(t) };
  }
  function jh(t) {
    const e = t.split(".")[0];
    if (Wh.includes(e) || e === "light" && !hr(t)) {
      const s = Rr.includes(e) ? w(t) : Fl(t);
      return s != null && s.button ? '<div class="tfMoreSpace tfMoreSwitch' + (s.on ? " on" : "") + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + To(t) + ">" + xa(t, s) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + W(t) + '"></div></div>';
    if (e === "light" && hr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>';
    const { big: a, lines: r } = em(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (m("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + W(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + W(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([s, d]) => '<div class="tfMoreFact"><span>' + W(s) + "</span><span>" + W(d) + "</span></div>").join("") + "</div></div>";
  }
  const zh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Gh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', $h = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], mo = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + W(t) + "</div>" + e + "</div>", Oa = (t, e) => je("tfSeg", t, e), ql = (t, e, a, r, s, d) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + W(s) + '" data-drag="' + W(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + W(s) + "</output></i>" + (d ? '<span class="tfBarIcon"' + ge("", d, r) + "></span>" : "") + "</div>", Sr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + To(t) + ">" + xa(t, e) + "</div>", Vl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + W(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + W(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, r]) => r != null && r !== "").map(([r, s]) => '<div class="tfMoreFact"><span>' + W(r) + "</span><span>" + W(s) + "</span></div>").join("") + "</div></div>", Gd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + W((F == null ? void 0 : F.code) || "") + '">', ss = (t, e, a, r, s) => ({ label: r, pressed: s, html: null, coded: [t, e, a].join("|") }), $d = (t, e) => '<div class="tfSeg" role="group" aria-label="' + W(t) + '">' + e.map((a) => '<button type="button" data-coded="' + W(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + W(a.label) + "</button>").join("") + "</div>", Ud = (t, e, a) => Oa(wt(t), [{ label: "Off", act: Pt(e, "turn_off", t), pressed: !a }, { label: "On", act: Pt(e, "turn_on", t), pressed: a }]), mn = /* @__PURE__ */ new Map(), Uh = [0, 33, 67, 100], Yh = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function _r(t) {
    if (!L || !k[t]) return null;
    const e = t.split(".")[0], a = k[t].attributes, r = I === "rocker" ? "rocker" : "toggle";
    return e === "light" ? ar(t).some((s) => s !== "onoff") ? "fader" : r : e === "climate" ? Number.isFinite(Number(a.temperature)) ? "dial" : null : e === "fan" ? a.percentage != null ? "rotary" : r : ["switch", "input_boolean", "lock", "automation", "siren"].includes(e) ? r : e === "cover" ? a.current_position == null ? r : null : e === "valve" ? "guarded" : e === "scene" || e === "script" || e === "button" ? "push" : null;
  }
  const Yd = (t) => '<div class="tfMoreSpace tfPhys" data-phys="' + W(t) + '"></div>', Wl = (t) => {
    const e = t.split(".")[0], a = k[t].state;
    return e === "lock" ? a === "locked" : e === "cover" ? a !== "closed" : a === "on";
  }, Zd = (t, e, a) => (t === "lock" ? la("lock", a ? "lock" : "unlock", e) : t === "cover" ? la("cover", a ? "open_cover" : "close_cover", e) : la(t, a ? "turn_on" : "turn_off", e)).catch(() => {
  }), Zh = (t) => t === "lock" ? ["Locked", "Unlocked"] : t === "cover" ? ["Open", "Closed"] : ["On", "Off"], Kh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/></svg>', Kd = (t) => [{ name: "Physical", svg: Kh, mode: "phys" }, ...t != null && t.length ? t : [{ name: "Control", svg: da, mode: "" }]], Xh = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function bi(t, e) {
    const a = k[t], r = a.attributes, s = a.state === "on";
    return e === "fader" ? [s ? no(a) / 100 : 0] : e === "dial" ? [Number(r.temperature), Number.isFinite(Number(r.current_temperature)) ? Number(r.current_temperature) : null] : e === "rotary" ? [s ? Xh(Number(r.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [Wl(t)];
  }
  function Jh(t, e) {
    const a = document.createElement("div");
    a.className = "tfMoreSpace tfPhys";
    const r = t.split(".")[0], s = k[t].attributes, d = { id: t, kind: e, el: a, quiet: 0, timer: 0 }, p = (_, M = 260) => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timer), d.timer = setTimeout(_, M);
    }, u = { camera: A, fill: B === "fill", label: wt(t) };
    if (e === "push" && (d.ctl = new lg(a, { ...u, onChange: () => la(r, r === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new cg(a, { ...u, on: Wl(t), onChange: (_) => p(() => Zd(r, t, _), 0) })), e === "toggle" && (d.ctl = new hg(a, { ...u, on: Wl(t), labels: Zh(r), onChange: (_) => p(() => Zd(r, t, _), 0) })), e === "fader" && (d.ctl = new dg(a, { ...u, value: bi(t, e)[0], onChange: (_) => p(() => (Math.round(_ * 100) ? la("light", "turn_on", t, { brightness_pct: Math.round(_ * 100) }) : la("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [_, M] = bi(t, e), O = Number(s.min_temp), H = Number(s.max_temp);
      d.ctl = new pg(a, { ...u, value: _, now: M ?? _, min: Number.isFinite(O) ? O : 7, max: Number.isFinite(H) ? H : 35, onChange: ($) => p(() => la("climate", "set_temperature", t, { temperature: $ }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new ug(a, { ...u, positions: Yh, index: bi(t, e)[0], onChange: (_) => p(() => (_ ? la("fan", "set_percentage", t, { percentage: Uh[_] }) : la("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new fg(a, { ...u, on: bi(t, e)[0], onChange: (_) => p(() => la("valve", _ ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) }));
    const h = "phys|" + t;
    a.addEventListener("pointerdown", () => {
      oe.add(h), fa(h);
    });
    const x = () => {
      oe.has(h) && (oe.delete(h), Ta && De());
    };
    return a.addEventListener("pointerup", x), a.addEventListener("pointercancel", x), d;
  }
  function Xd(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, r = _r(a);
      if (!r) {
        e.remove();
        return;
      }
      let s = mn.get(a);
      (!s || s.kind !== r) && (s = Jh(a, r), mn.set(a, s)), e.replaceWith(s.el), Jd(s);
    });
  }
  function Jd(t) {
    !k[t.id] || performance.now() < t.quiet || t.ctl.show(...bi(t.id, t.kind));
  }
  const Qd = () => {
    mn.forEach((t, e) => {
      t.el.isConnected ? Jd(t) : mn.delete(e);
    });
  };
  function Qh(t) {
    const e = tm(t);
    return e && _r(t) && (e.pages[0].space += Yd(t), e.pages[0].tabs = Kd(e.pages[0].tabs)), e;
  }
  function tm(t) {
    var d, p, u;
    const e = t.split(".")[0], a = k[t], r = a.attributes;
    if (!$h.includes(e)) return null;
    const s = Rr.includes(e) || Ci.includes(e) ? w(t) : Fl(t);
    if (e === "light") {
      const h = a.state === "on", x = ar(t), [_, M] = ir(t), O = m("bright", t, h ? no(a) : 0), H = m("ctf", t, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), $ = m("huev", t, h && rn.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null), C = x.includes("color_temp"), E = x.some((ue) => rn.includes(ue)), T = hr(t), K = (ue, we, ve, Oe) => '<div class="tfBar tfVBar ' + ue + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + W(wt(t) + " " + we.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(ve) + '" data-drag="' + ue + "|" + W(t) + '">' + Oe + "</div>", P = (ue, we, ve = "") => '<div class="tfVCol' + ve + '">' + we + "</div>", ot = P("Brightness", K("bright", "Brightness", O, '<i style="height:' + O + '%"></i><span class="tfBarIcon"' + ge("", "mdi:white-balance-sunny", "Brightness") + "></span>")), kt = H == null ? null : (M - H) / (M - _), Et = C ? P("Warmth", K("ctf", "Warmth", kt == null ? 0 : kt * 100, kt == null ? "" : '<b style="top:' + Math.round((1 - kt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", qt = E ? P("Colour", K("huev", "Colour", $ == null ? 0 : (1 - $ / 360) * 100, $ == null ? "" : '<b style="top:' + Math.round($ / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Wt = '<div class="tfVCols">' + ot + (Et || qt ? '<div class="tfVSwap">' + Et + qt + "</div>" : "") + "</div>", St = T ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>' : "", Lt = [E && { name: "Colour", svg: zh, mode: "colour" }, T && { name: "Dual Axis Controller", svg: Gh, mode: "dac" }, { name: "Sliders", svg: da, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfLightSpace">' + Wt + St + "</div>", rows: [], tabs: Lt.length > 1 ? Lt : [] }] };
    }
    if (e === "climate") {
      const h = r.target_temp_step || 0.5, x = Number(r.temperature), _ = Number(r.target_temp_low), M = Number(r.target_temp_high), O = (E) => Pt("climate", "set_temperature", t, E), H = (E, T, K, P, ot) => (T == null ? void 0 : T.length) && mo(E, Oa(E, T.map((kt) => ({ label: zt(kt), act: Pt("climate", P, t, { [ot]: kt }), pressed: (K === "state" ? a.state : r[K]) === kt })))), $ = Number.isFinite(_) && Number.isFinite(M) && mo("Range", '<div class="tfMoreRange">' + ha("Low", Fe(_) + " °C", O({ target_temp_low: _ - h, target_temp_high: M }), O({ target_temp_low: _ + h, target_temp_high: M })) + ha("High", Fe(M) + " °C", O({ target_temp_low: _, target_temp_high: M - h }), O({ target_temp_low: _, target_temp_high: M + h })) + "</div>"), C = Number(r.humidity);
      return { pages: [{
        name: "Control",
        svg: da,
        space: Vl(Fe(r.current_temperature), "°C", [["Target", Number.isFinite(x) ? Fe(x) + " °C" : null], ["Humidity", r.current_humidity != null ? r.current_humidity + "%" : null], ["Action", r.hvac_action && zt(r.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ha("Target temperature", Fe(x) + " °C", O({ temperature: x - h }), O({ temperature: x + h })),
          $,
          H("Mode", r.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          H("Fan", r.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          H("Swing", r.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          H("Preset", r.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(C) && r.min_humidity != null && mo("Humidity", ha("Target humidity", C + "%", Pt("climate", "set_humidity", t, { humidity: C - 1 }), Pt("climate", "set_humidity", t, { humidity: C + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const h = a.state === "on", x = m("fan", t, h && Number(r.percentage) || 0), _ = r.percentage != null;
      return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: _ ? [
        ql("fan", t, x, wt(t) + " speed", x + "%", "mdi:fan"),
        r.oscillating != null && mo("Oscillate", Oa("Oscillate", [{ label: "Off", act: Pt("fan", "oscillate", t, { oscillating: !1 }), pressed: !r.oscillating }, { label: "On", act: Pt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!r.oscillating }])),
        r.direction && mo("Direction", Oa("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([M, O]) => ({ label: O, act: Pt("fan", "set_direction", t, { direction: M }), pressed: r.direction === M })))),
        ((d = r.preset_modes) == null ? void 0 : d.length) && mo("Preset", Oa("Preset", r.preset_modes.map((M) => ({ label: zt(M), act: Pt("fan", "set_preset_mode", t, { preset_mode: M }), pressed: r.preset_mode === M }))))
      ] : [Ud(t, "fan", h)] }] };
    }
    if (e === "humidifier") {
      const h = Number(r.humidity);
      return { pages: [{ name: "Control", svg: da, space: Vl(String(r.current_humidity), "%", [["Target", Number.isFinite(h) ? h + "%" : null], ["Action", r.action && zt(r.action)]]), rows: [
        Number.isFinite(h) && ha("Target humidity", h + "%", Pt("humidifier", "set_humidity", t, { humidity: h - 1 }), Pt("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((p = r.available_modes) == null ? void 0 : p.length) && mo("Mode", Oa("Mode", r.available_modes.map((x) => ({ label: zt(x), act: Pt("humidifier", "set_mode", t, { mode: x }), pressed: r.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const h = Number(r.temperature), x = r.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: da, space: Vl(Fe(r.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(h) ? String(h).replace(/\.0$/, "") + " °C" : null], ["Mode", zt(r.operation_mode || a.state)]]), rows: [
        Number.isFinite(h) && ha("Target temperature", h + " °C", Pt("water_heater", "set_temperature", t, { temperature: h - x }), Pt("water_heater", "set_temperature", t, { temperature: h + x })),
        ((u = r.operation_list) == null ? void 0 : u.length) && mo("Mode", Oa("Mode", r.operation_list.map((_) => ({ label: zt(_), act: Pt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (r.operation_mode || a.state) === _ })))),
        r.away_mode != null && mo("Away", Oa("Away", [{ label: "Off", act: Pt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: r.away_mode !== "on" }, { label: "On", act: Pt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: r.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const h = [...Hu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , M]) => !M || me(t, M)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], _ = '<div class="tfMoreSpace tfMoreKeypad">' + Gd() + '<div class="tfKeypad">' + x.map((M) => '<button type="button" data-key="' + M + '"' + (M === "back" ? ' aria-label="Delete"' : "") + ">" + (M === "clear" ? "Clear" : M === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : M) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: da, space: _, rows: [$d(wt(t), h.map(([M, O, H]) => ss("alarm_control_panel", H, t, O, a.state === M)))] }] };
    }
    if (e === "cover") {
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: [Oa(wt(t), [{ label: "Open", act: Pt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Pt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const h = a.state === "opening" || a.state === "closing", x = Cn(t), _ = Ur(t);
      return { pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + W(t) + '"></div></div>', rows: [
        me(t, Mc) && ei(t, x),
        _ != null && mo("Tilt", ql("tiltp", t, m("tiltp", t, _), wt(t) + " tilt", Math.round(m("tiltp", t, _)) + "%")),
        Oa(wt(t), [me(t, Su) && { label: "Open", act: Pt("cover", "open_cover", t), disabled: x >= 100 && !h }, me(t, Cu) && { label: "Stop", act: Pt("cover", "stop_cover", t) }, me(t, _u) && { label: "Close", act: Pt("cover", "close_cover", t), disabled: x <= 0 && !h }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: [
        Gd(),
        $d(wt(t), [ss("lock", "lock", t, "Lock", a.state === "locked"), ss("lock", "unlock", t, "Unlock", a.state === "unlocked"), me(t, Ru) && ss("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const h = a.state === "open";
      if (r.current_position == null) return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: [Oa(wt(t), [{ label: "Open", act: Pt("valve", "open_valve", t), pressed: h }, { label: "Close", act: Pt("valve", "close_valve", t), pressed: !h }])] }] };
      const x = m("valve", t, Number(r.current_position) || 0);
      return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: [
        ql("valve", t, x, wt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Oa(wt(t), [{ label: "Open", act: Pt("valve", "open_valve", t) }, me(t, 8) && { label: "Stop", act: Pt("valve", "stop_valve", t) }, { label: "Close", act: Pt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: da, space: Sr(t, s), rows: [Ud(t, e, a.state === "on")] }] };
  }
  function em(t) {
    var _;
    const e = k[t], a = Ut(t), r = t.split(".")[0], s = (((_ = Mr[r]) == null ? void 0 : _.call(Mr, a)) || []).filter(([, M]) => M != null && M !== ""), d = (M) => {
      const O = s.findIndex(([H]) => H === M);
      return O < 0 ? null : s.splice(O, 1)[0][1];
    }, p = (M) => {
      const O = String(M).match(/^(-?[\d.,]+)\s*(.*)$/);
      return O ? [O[1], O[2]] : [String(M), ""];
    }, u = () => [zt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    r === "light" ? (d("Brightness"), h = e.state === "on" && Lo(t) ? [String(no(e)), "%"] : u()) : r === "climate" ? h = p(d("Current temperature") || Fe(a.current_temperature) + " °C") : r === "cover" ? (d("Position"), h = a.current_position != null ? [String(Ga(t)), "%"] : u()) : r === "humidifier" ? h = p(d("Current humidity") || e.state) : r === "vacuum" ? h = p(d("Battery") || e.state) : r === "plant" ? h = p(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? h = u() : h = p(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = s.length ? s.slice(0, 4) : [["State", Ne(t)]];
    return { big: h, lines: x };
  }
  function am(t) {
    var x, _, M, O, H, $, C;
    const e = k[t], a = i(), r = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], s = r != null && r.device_id ? (_ = a == null ? void 0 : a.devices) == null ? void 0 : _[r.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + W(t) + '" role="img" aria-label="' + W(wt(t)) + ', last 24 hours"></svg></div>', p = (M = jt.areaOf) == null ? void 0 : M.call(jt, t), u = p && (((O = jt.rooms.find((E) => E.id === p)) == null ? void 0 : O.name) || (($ = (H = a == null ? void 0 : a.areas) == null ? void 0 : H[p]) == null ? void 0 : $.name)) || "", h = [
      ...((C = Mr[t.split(".")[0]]) == null ? void 0 : C.call(Mr, Ut(t))) || [],
      ["Changed", e.last_changed && $s(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", s && (s.name_by_user || s.name)],
      ["Integration", (r == null ? void 0 : r.platform) && zt(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, E]) => E != null && E !== "");
    return d + '<div class="tfMoreRows">' + h.map(([E, T]) => '<div class="tfMoreRow"><span>' + W(E) + "</span><span>" + W(T) + "</span></div>").join("") + "</div>" + Hh(t) + (s ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + W(r.device_id) + '"><span>Device page</span>' + Cc + "</button>" : "");
  }
  const om = () => "";
  let jl = "";
  function zl(t) {
    var e;
    F && (F.details = t, Cr(), (e = Mt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ls = (t) => {
    const e = k[t], a = Ga(t), r = Cn(t);
    return { kind: yc(e), name: wt(t), text: Ne(t), pos: a, target: Math.abs(r - a) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Ur(t) ?? 100, canSet: me(t, Mc) };
  };
  function Gl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, r = e.dataset.artKey || "more:" + a;
      let s = Ze.get(r);
      s || (s = Q1({ onMove: (d) => wi(a, d), onSet: (d) => {
        wi(a, d), vi("pos", a);
      } }), s.coverId = a, Ze.set(r, s)), e.replaceWith(s.el), s.update(ls(a));
    });
  }
  const tp = (t) => [...Ze.values()].filter((e) => e.coverId === t), $l = () => Ze.forEach((t) => {
    k[t.coverId] && t.update(ls(t.coverId));
  }), ep = () => {
    Ze.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ze.delete(e));
    }), $l();
  };
  function Cr() {
    var d, p;
    if (!F || !(Ih(F.id) || k[F.id])) {
      Mt.hidden = !0;
      return;
    }
    if (Mo().some((u) => u.endsWith("|" + F.id))) {
      Ta = !0, $l();
      return;
    }
    const t = Fh(F.id), e = Mt.querySelector(".tfMore");
    if (!t) {
      ps();
      return;
    }
    const a = Wd(Mt), r = om(F.id), s = F.frame ? F.frame.wide : F.id.startsWith("summary:") || F.id.startsWith("group:");
    if (Mt.hidden || !e || t.length !== ho.length || e.classList.contains("wide") !== s) {
      const u = Zl ? F.scroll || 0 : !Mt.hidden && e ? e.scrollTop : 0;
      if (Mt.innerHTML = '<div class="tfMorePair' + (Mt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (s ? " wide" : "") + '"' + (F.frame ? ' style="height:' + F.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", jl = r, Mt.classList.toggle("wide", s), Mt.hidden = !1, Il(), Gl(Mt), Xd(Mt), En(Mt), so(Mt), Mt.querySelectorAll("[data-day]").forEach((h) => sp(h.dataset.day, h, F.at)), np(Mt), u && (Mt.querySelector(".tfMore").scrollTop = u), ap(), Hl(Mt, a), !Mt.contains(o.activeElement)) {
        const h = Mt.querySelector("[data-more-close]");
        (d = h != null && h.offsetParent ? h : Mt.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, h) => {
        var O, H;
        if (u === ho[h] || u.includes("data-cover-art") || e.children[h].contains((H = (O = o.activeElement) == null ? void 0 : O.matches) != null && H.call(O, "input,select") ? o.activeElement : null)) return;
        if (Mo().some(($) => e.children[h].querySelector('[data-drag="' + CSS.escape($) + '"]'))) {
          Ta = !0;
          return;
        }
        const x = document.createElement("div");
        x.innerHTML = u;
        const _ = [...e.children[h].querySelectorAll(".tfMoreCtl,.tfMorePage")].map(($) => $.scrollTop), M = Nl(e.children[h], x.firstElementChild);
        M.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach(($, C) => {
          _[C] && ($.scrollTop = _[C]);
        }), so(M), np(M), Xd(M), En(M);
      }), r !== jl) {
        const u = Mt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = r), jl = r;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || sp(u.dataset.day, u, F.at);
      }), ap(), Mt.contains(o.activeElement) || Hl(Mt, a);
    }
    (p = Mt.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(F.details && r)), ho = t, $l();
  }
  function ap() {
    const t = Mt.querySelector("[data-more-pages]");
    !t || !F || (t.scrollTo({ left: (F.page || 0) * t.clientWidth, behavior: "instant" }), Yl(), Ul(t));
  }
  function Ul(t) {
    const e = t.children[(F == null ? void 0 : F.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Yl() {
    var e;
    const t = (F == null ? void 0 : F.page) || 0;
    Mt.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (F.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(r));
        return;
      }
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    }), (e = Mt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!F.mode && t === 0);
  }
  function nm(t, e) {
    var r, s;
    const a = Mt.querySelector("[data-more-pages]");
    !a || !F || (F.page = Math.max(0, Math.min((F.pages || 2) - 1, t)), a.scrollTo({ left: F.page * a.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Yl(), Ul(a), e && ((s = Mt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || s.focus({ preventScroll: !0 })));
  }
  function cs(t, e, a) {
    F && (e != null && e !== (F.mode || "") && (F.mode = e, Mt.querySelectorAll(".tfMorePage").forEach((r) => {
      r.dataset.mode = e;
    })), nm(t, a));
  }
  let Ar = null;
  Mt.addEventListener("touchstart", (t) => {
    var a, r, s, d;
    const e = t.touches[0];
    Ar = (r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]") && !((d = (s = t.target).closest) != null && d.call(s, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Mt.addEventListener("touchend", (t) => {
    if (!Ar || !F || (F.page || 0) !== 0 || !Mt.querySelector("[data-more-mode]")) {
      Ar = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Ar.x, r = e.clientY - Ar.y;
    if (Ar = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(r) * 1.5) return;
    const s = [...Mt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((p) => p.dataset.moreMode), d = s.indexOf(F.mode || "");
    a > 0 && d > 0 ? cs(0, s[d - 1]) : a < 0 && F.mode && d < s.length - 1 && cs(0, s[d + 1]);
  }, { passive: !0 });
  let op = 0;
  Mt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !F || (clearTimeout(op), op = setTimeout(() => {
      if (!F) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (F.page || 0) && (F.page = r, Yl(), Ul(e));
    }, 80));
  }, !0), Mt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && F && (F.code = t.target.value);
  }), Mt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!F || !(e || a)) return;
    const r = Mt.querySelector("[data-code]");
    if (e) {
      const h = e.dataset.key, x = F.code || "";
      F.code = h === "clear" ? "" : h === "back" ? x.slice(0, -1) : (x + h).slice(0, 12), r && (r.value = F.code);
      return;
    }
    const [s, d, p] = a.dataset.coded.split("|"), u = F.code;
    F.code = "", r && (r.value = ""), la(s, d, p, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    F && Cr();
  }, 15 * 1e3);
  function ds(t, e) {
    var s, d;
    const a = !!(F && e && Mt.contains(e)), r = a && Mt.querySelector(".tfMore");
    if (a && (F.scroll = r.scrollTop), a && !F.under) {
      const p = Mt.querySelector(".tfMorePair"), u = { more: F, parts: ho, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Ja.innerHTML = "", Ja.appendChild(p), Ja.classList.toggle("wide", Mt.classList.contains("wide")), Ja.hidden = !1, Mt.hidden = !0, Mt.innerHTML = "", F = { id: t, opener: e, back: null, frame: null, under: u, at: Number((s = e == null ? void 0 : e.dataset) == null ? void 0 : s.at) || null, mode: _r(t) ? "phys" : "" }, Kl();
      return;
    }
    F = { id: t, opener: a ? F.opener : e, back: a ? F : null, frame: a ? F.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: a ? F.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null, mode: _r(t) ? "phys" : "" }, Kl();
  }
  let Zl = !1;
  function Kl() {
    ho = [], Zl = !Mt.hidden, Ze.forEach((t, e) => {
      e !== F.id && Mt.contains(t.el) && (t.destroy(), Ze.delete(e));
    }), Cr(), Zl = !1;
  }
  function ps() {
    if (!F) return;
    const t = F;
    I0(Mt, () => {
      F === t && Xl();
    });
  }
  function Xl() {
    var r, s, d, p, u, h, x, _;
    const t = F == null ? void 0 : F.opener, e = F == null ? void 0 : F.under;
    F = null, Ze.forEach((M, O) => {
      Mt.contains(M.el) && (M.destroy(), Ze.delete(O));
    }), Je.forEach((M, O) => {
      /^more2?:/.test(O) && Je.delete(O);
    }), Mt.hidden = !0, Mt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const M = Ja.firstElementChild;
      F = e.more, ho = e.parts, M && (M.inert = !1, Mt.appendChild(M)), Mt.classList.toggle("wide", Ja.classList.contains("wide")), Ja.hidden = !0, Ja.innerHTML = "", Mt.hidden = !1;
      const O = Mt.querySelector(".tfMore");
      O && (O.scrollTop = F.scroll || 0), Cr(), (s = (r = e.opener) != null && r.isConnected ? e.opener : Mt.querySelector("[data-more-close]")) == null || s.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (p = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((_ = S.querySelector("[data-favs-edit]")) == null || _.focus(a));
  }
  const rm = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function im(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, s]) => {
      const d = rm[r], p = a + d;
      if (!d || !k[p] || !Yn[d]) return "";
      const u = Ut(p).unit_of_measurement || "", [h, x] = Yn[d], _ = s === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + W(wt(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + W(p) + '" data-guide="' + (_ ? h : x) + '" data-guide-word="' + W("Wants " + (_ ? "" : "up to ") + (_ ? h : x).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (_ ? " or more" : "")) + '" role="img" aria-label="' + W(wt(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const np = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => cp(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Zc(e)));
  function Jl(t, e, a, r = {}) {
    const s = e.map((E) => E[1]).concat(r.guide != null ? [r.guide] : []), d = r.zero ? 0 : Math.min(...s), p = Math.max(...s), u = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), x = 8, _ = h - 20, M = Date.now() - 24 * 3600 * 1e3, O = 24 * 3600 * 1e3, H = (E) => Math.max(0, Math.min(u, (E - M) / O * u)), $ = (E) => p === d ? (x + _) / 2 : _ - (E - d) / (p - d) * (_ - x);
    let C = "M" + H(e[0][0]).toFixed(1) + " " + $(e[0][1]).toFixed(1);
    if (e.length > 2) C = ef(e.map((E) => [H(E[0]), $(E[1])]));
    else for (let E = 1; E < e.length; E++) C += r.smooth ? "L" + H(e[E][0]).toFixed(1) + " " + $(e[E][1]).toFixed(1) : "H" + H(e[E][0]).toFixed(1) + "V" + $(e[E][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + h), t.setAttribute("aria-label", a), t.innerHTML = af(u, x, _) + '<path d="' + C + "V" + _ + "H" + H(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + C + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Be.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + u + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + $(r.guide).toFixed(1) + '" y2="' + $(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + ($(r.guide) < 20 ? $(r.guide) + 14 : $(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + W(r.guideWord || "") + "</text>" : "");
  }
  const rp = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, sm = (t, e) => {
    const a = t.split(".")[0];
    return rp[a] ? rp[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, lm = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ts.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, ip = /* @__PURE__ */ new Map();
  let cm = 0;
  async function dm(t) {
    var s;
    let e = ip.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (to(t) && Number.isFinite(Number((s = k[t]) == null ? void 0 : s.state))) d = lp(t).map(([p, u]) => [p, String(u)]);
      else try {
        const p = await Z({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((p == null ? void 0 : p[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      d.length || (d = (si || []).filter((p) => p.entity_id === t).map((p) => [p.when * 1e3, String(p.state)])), e = { at: Date.now(), pts: d }, ip.set(t, e);
    }
    const a = k[t], r = e.pts.slice().sort((d, p) => d[0] - p[0]);
    return a && (!r.length || r[r.length - 1][1] !== a.state) && r.push([Date.parse(a.last_changed) || Date.now(), a.state]), r;
  }
  async function sp(t, e, a) {
    const r = await dm(t);
    if (!e.isConnected) return;
    const s = r.map(([P, ot]) => [P, Number(ot)]);
    if (r.length > 1 && s.every(([, P]) => Number.isFinite(P))) {
      Jl(e, s, wt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), p = d - 864e5, u = Math.max(200, e.clientWidth || 360), h = 62, x = (P) => Math.max(0, Math.min(u, (P - p) / 864e5 * u)), _ = [];
    let M = null;
    r.forEach(([P, ot]) => {
      const kt = sm(t, ot);
      kt && M == null ? M = Math.max(P, p) : !kt && M != null && (_.push([M, Math.max(P, p)]), M = null);
    }), M != null && _.push([M, d]);
    const O = Js(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", H = lm(t), $ = "tfDayClip" + ++cm, C = _.map(([P, ot]) => H + (ot >= d - 1e3 && P <= p + 1e3 ? " all day" : ot >= d - 1e3 ? " since " + io(P) : P <= p + 1e3 ? " until " + io(ot) : " " + io(P) + "–" + io(ot)));
    let E = "", T = -1 / 0;
    _.forEach(([P], ot) => {
      const kt = C[ot].length * 5.4, Et = Math.min(x(P), u - kt);
      Et < T + 8 || (E += '<text x="' + Et.toFixed(1) + '" y="10">' + W(C[ot]) + "</text>", T = Et + kt);
    });
    let K = '<text x="' + u + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((P) => {
      let ot = new Date(d).setHours(P, 0, 0, 0);
      ot > d && (ot -= 864e5), x(ot) > 8 && x(ot) < u - 34 && (K += '<text x="' + x(ot).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(P).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + h), e.setAttribute("aria-label", wt(t) + ", last 24 hours: " + (C.length ? C.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + $ + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + E + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + $ + ')">' + _.map(([P, ot]) => '<rect x="' + x(P).toFixed(1) + '" y="18" width="' + Math.max(2, x(ot) - x(P)).toFixed(1) + '" height="26" fill="' + O + '"/>').join("") + "</g>" + (a && a >= p ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + K;
  }
  function lp(t) {
    var r;
    const e = Number((r = k[t]) == null ? void 0 : r.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const s = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - s);
      return [...Array(49)].map((p, u) => s + d * u / 48).map((p) => [p, Math.round(e * Math.pow((p - s) / d, 1.3) * 100) / 100]);
    }
    if (to(t) && t.endsWith("_moisture")) return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (to(t) && t.endsWith("_light")) {
      const s = (p) => {
        const u = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, d = (p) => 0.8 + 0.2 * s(p);
      return [...Array(48)].map((p, u) => a - (48 - u) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * d(p) / d(a))]);
    }
    return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function cp(t, e, a = {}) {
    var $, C;
    let r = mt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Sp() };
    else if (to(t)) r = { at: Date.now(), points: lp(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const E = new Date(Date.now() - 864e5).toISOString(), T = await Z({ type: "history/history_during_period", start_time: E, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), K = ((T == null ? void 0 : T[t]) || []).map((P) => [P.lu != null ? P.lu * 1e3 : Date.parse(P.last_updated || P.last_changed), Number(P.s ?? P.state)]).filter(([P, ot]) => Number.isFinite(P) && Number.isFinite(ot));
        r = { at: Date.now(), points: K };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      mt.set(t, r);
    }
    const s = e || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const d = k[t], p = (($ = d == null ? void 0 : d.attributes) == null ? void 0 : $.unit_of_measurement) || "", u = r.points.slice(), h = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && u.push([Date.now(), h]), u.length < 2) {
      s.setAttribute("aria-label", wt(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = u.map((E) => E[1]), _ = Math.min(...x), M = Math.max(...x), O = (E) => E.toLocaleString(void 0, { maximumFractionDigits: Math.abs(E) >= 100 ? 0 : 1 }), H = ((C = d == null ? void 0 : d.attributes) == null ? void 0 : C.state_class) === "total_increasing";
    Jl(s, u, wt(t) + ", last 24 hours: " + (H ? "+" + O(x[x.length - 1] - x[0]) : _ === M ? O(_) : O(_) + " to " + O(M)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function dp() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const e = Sp();
    Jl(t, e, "Solar, last 24 hours: up to " + Fe(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function pm(t, e) {
    const a = e.entity_id, r = he.get(a) || {}, s = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ga(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    s != null && (r.pos = s), d != null && (r.tilt = d), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), he.set(a, r);
  }
  function pp(t, e, a) {
    var s;
    const r = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof r != "string" || !lo[r] || !Lo(r) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((s = k[r]) == null ? void 0 : s.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: lo[r] }];
  }
  function la(t, e, a, r) {
    let s = { entity_id: a, ...r || {} };
    return [e, s] = pp(t, e, s), t === "cover" && pm(e, s), Sn[a] = (Sn[a] || 0) + 1, Ye.set(Du, JSON.stringify(Sn)), Hi.call(t, e, s) ? Promise.resolve() : Promise.resolve(J(t, e, s));
  }
  function Ql(t) {
    const [e, a, r, s] = t.split("|");
    la(e, a, r, s ? JSON.parse(s) : null).catch(() => {
    });
  }
  function wi(t, e) {
    Vt.set("pos|" + t, e), fa("pos|" + t), ya.delete(t), ho = ho.map(() => ""), [S, Mt].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((s) => fr(s, e)));
    const a = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (F == null ? void 0 : F.id) === t) {
      const r = Mt.querySelector(".tfMoreState"), s = Mt.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), s && (s.textContent = "Currently " + Ga(t) + "%");
    }
    tp(t).forEach((r) => r.update(ls(t)));
  }
  const um = (t, e) => {
    const a = t.shiftKey ? 10 : 1, r = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function fm(t, e) {
    var C;
    const a = t.dataset.blocks;
    (C = t.setPointerCapture) == null || C.call(t, e.pointerId), oe.add("pos|" + a), O("pos|" + a);
    const r = (E) => {
      const T = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (E.clientX - T.left) / T.width * 100));
    }, s = r(e), d = e.clientX;
    let p = !1, u = Cn(a), h = s, x = 0;
    const _ = () => {
      u = Math.abs(h - u) < 0.2 ? h : u + (h - u) * 0.14, wi(a, u), x = requestAnimationFrame(_);
    }, M = () => {
      p || (p = !0, t.classList.add("fine"), x = requestAnimationFrame(_));
    }, O = setTimeout(M, 350), H = (E) => {
      h = r(E), Math.abs(E.clientX - d) > 6 && (clearTimeout(O), M());
    }, $ = () => {
      clearTimeout(O), cancelAnimationFrame(x), t.removeEventListener("pointermove", H), t.removeEventListener("pointerup", $), t.removeEventListener("pointercancel", $), t.classList.remove("fine"), oe.delete("pos|" + a), wi(a, p ? Math.round(u) : (Math.min(3, Math.floor(s / 25)) + 1) * 25), vi("pos", a);
    };
    t.addEventListener("pointermove", H), t.addEventListener("pointerup", $), t.addEventListener("pointercancel", $);
  }
  function up(t) {
    var e;
    nt = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var s;
      const r = a === t;
      a.classList.toggle("active", r), a.setAttribute("aria-expanded", String(r)), (s = a.querySelector(".panelExpanded")) == null || s.toggleAttribute("inert", !r);
    }), ya.set("areas", pt(((e = S.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => cl(!0), 340);
  }
  function fp(t) {
    const e = S.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === nt) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), r = a && !We() ? a.cloneNode(!0) : null, s = _t().map((x) => x.id), d = s.indexOf(t) > s.indexOf(nt) ? 1 : -1;
    nt = t;
    const p = pt(e.style.order || 1);
    ya.set("areas", p), jd(e, p);
    const u = S.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), h = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || We() || (u.style.setProperty("--dir", d), r && (r.classList.add("tfAreaGoing"), r.inert = !0, r.setAttribute("aria-hidden", "true"), u.appendChild(r), setTimeout(() => r.remove(), 340), clearTimeout(on), on = setTimeout(() => {
      on = 0, Ta && De();
    }, 340)), h && (h.classList.add("tfAreaLand"), h.addEventListener("animationend", () => h.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const hm = 40;
  function mm(t) {
    var u, h;
    if (t.pointerType === "mouse" || !t.isPrimary || !((h = (u = t.target).closest) != null && h.call(u, ".tfAreaStage")) || !sd.matches) return;
    const e = t.clientX, a = t.clientY, r = t.pointerId;
    let s = null;
    const d = (x) => {
      x.pointerId === r && !s && Math.hypot(x.clientX - e, x.clientY - a) >= kn && (s = Math.abs(x.clientX - e) > Math.abs(x.clientY - a) ? "x" : "y");
    }, p = (x) => {
      if (x.pointerId !== r) return;
      removeEventListener("pointermove", d, !0), removeEventListener("pointerup", p, !0), removeEventListener("pointercancel", p, !0);
      const _ = x.clientX - e;
      if (x.type !== "pointerup" || s !== "x" || Math.abs(_) < hm) return;
      const M = ($) => {
        $.stopPropagation(), $.preventDefault();
      };
      o.addEventListener("click", M, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", M, !0), 400);
      const O = _t(), H = O[O.findIndex(($) => $.id === nt) + (_ < 0 ? 1 : -1)];
      H && fp(H.id);
    };
    addEventListener("pointermove", d, !0), addEventListener("pointerup", p, !0), addEventListener("pointercancel", p, !0);
  }
  const us = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, r] = ir(t);
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
      const [a, r] = ir(t);
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
    Vt.set(e + "|" + a, s), fa(e + "|" + a);
    const d = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [_, M] = t.querySelectorAll("span");
      _.classList.toggle("lit", r > 0.08), M.classList.toggle("lit", r > 0.92), ya.delete(a), ho = ho.map(() => ""), tp(a).forEach((O) => O.update(ls(a)));
    } else if (t.dataset.axis === "y")
      if (p) p.style.height = d;
      else {
        let _ = t.querySelector("b");
        _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.top = Math.round((1 - r) * 1e3) / 10 + "%";
      }
    else if (p) p.style.width = d;
    else {
      let _ = t.querySelector("b");
      _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = us[e].text(a, s));
    const h = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    h && (h.textContent = us[e].text(a, s));
  }
  function vi(t, e) {
    const a = t + "|" + e, r = Vt.get(a), s = ra.get(a), [d, p, u] = us[t].send(e, r), h = () => setTimeout(() => {
      ra.get(a) === s && Vt.delete(a), De();
    }, 1500);
    la(d, p, e, u).then(h, h);
  }
  function hp(t) {
    t.addEventListener("click", (e) => {
      var r;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (ia && !e.target.closest(".tfBoardMenu,[data-board-more]") && uo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ia == null ? void 0 : ia.key) === a.dataset.boardMore ? uo(!0) : ch(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) dh(ia.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) gl(a.dataset.boardShow);
        else if (a.dataset.favHide) Ad(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) $c(a.dataset.energyPick);
        else if (a.dataset.areaPick) fp(a.dataset.areaPick);
        else if (a.dataset.act) Ql(a.dataset.act);
        else if (a.hasAttribute("data-details")) zl(!(F != null && F.details));
        else if (a.hasAttribute("data-details-close")) zl(!1);
        else if (a.dataset.summary) qc(a.dataset.summary, a);
        else if (a.dataset.star) Ic(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const s = F.id;
          F = F.back, Kl(), (r = Mt.querySelector('.tfMore [data-more="' + CSS.escape(s) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ds("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([s, d, p, u]) => la(s, d, p, u).catch(() => {
        })) : a.dataset.more ? ds(a.dataset.more, a) : a.hasAttribute("data-more-close") ? ps() : a.dataset.morePage ? cs(a.hasAttribute("data-more-toggle") && ((F == null ? void 0 : F.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? Fc(a.dataset.path) : a.dataset.go ? Fd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Rl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && up(a);
    }), t.addEventListener("keydown", (e) => {
      var r, s, d, p, u, h, x;
      const a = e.target;
      if ((r = a.dataset) != null && r.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ds(a.dataset.more, a)), (s = a.dataset) != null && s.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), $c(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), up(a)), (p = a.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), qc(a.dataset.summary, a)), e.key === "Escape" && ia && t === S) {
        e.preventDefault(), uo(!0);
        return;
      }
      if (e.key === "Escape" && ma && t === S) {
        e.preventDefault(), ml(!1), (u = l("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && lt && t === S && (e.preventDefault(), Rl()), (h = a.dataset) != null && h.blocks) {
        const _ = a.dataset.blocks, M = um(e, Math.round(Cn(_)));
        if (M == null) return;
        e.preventDefault(), wi(_, M), clearTimeout(Fr.get(_)), Fr.set(_, setTimeout(() => vi("pos", _), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [_, M] = a.dataset.drag.split("|"), O = Number(a.getAttribute("aria-valuenow")) / 100, H = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, O + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        fs(a, _, M, H), vi(_, M);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var qt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), fm(a, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [s, d] = r.dataset.drag.split("|"), p = s === "bright" && !Lo(d), u = e.pointerType !== "mouse";
      if (p && !u) {
        Ql(Pt("light", "toggle", d));
        return;
      }
      const h = s === "bright" && ((qt = k[d]) == null ? void 0 : qt.state) !== "on", x = s + "|" + d;
      oe.add(x), fa(x);
      const _ = s === "tilt" ? 4 : 0, M = r.dataset.axis === "y", O = () => M ? r.getBoundingClientRect().height : r.getBoundingClientRect().width - _ * 2, H = (Wt) => {
        const St = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, M ? 1 - (Wt.clientY - St.top) / O() : (Wt.clientX - St.left - _) / O()));
      };
      let $ = u ? "waiting" : h ? "pressed" : "dragging", C = 0;
      const E = e.clientX, T = e.clientY, K = (Wt, St) => Math.hypot(Wt.clientX - E, Wt.clientY - T) > St, P = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), P()), $ === "dragging" && fs(r, s, d, H(e));
      const ot = () => {
        var Wt, St;
        $ = "sliding", Ft = r, r.classList.add("held"), P(), (Wt = navigator.userActivation) != null && Wt.hasBeenActive && ((St = navigator.vibrate) == null || St.call(navigator, 8)), C = h ? (lo[d] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, kt = (Wt) => {
        $ === "waiting" && K(Wt, kn) ? !p && (M ? Math.abs(Wt.clientY - T) > Math.abs(Wt.clientX - E) : Math.abs(Wt.clientX - E) > Math.abs(Wt.clientY - T)) ? ot() : $ = "gone" : $ === "pressed" && K(Wt, 4) && ($ = "dragging"), $ === "sliding" ? fs(r, s, d, Math.max(0, Math.min(1, C + (M ? T - Wt.clientY : Wt.clientX - E) / O()))) : $ === "dragging" && fs(r, s, d, H(Wt));
      }, Et = (Wt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((St, Lt) => r.removeEventListener(St, Lt ? Et : kt)), r.classList.remove("held"), Ft === r && (Ft = null), oe.delete(x), $ === "sliding" || $ === "dragging" ? vi(s, d) : Wt.type === "pointerup" && p ? Ql(Pt("light", "toggle", d)) : Wt.type === "pointerup" && h && ($ === "waiting" || $ === "pressed") && la("light", "turn_on", d).catch(() => {
        }), Ta && $ !== "sliding" && $ !== "dragging" && De();
      };
      r.addEventListener("pointermove", kt), r.addEventListener("pointerup", Et), r.addEventListener("pointercancel", Et);
    }), t.addEventListener("touchmove", (e) => {
      Ft && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return S && g && (Tf(), hp(S), S.addEventListener("pointerdown", mm), hp(Mt), Mt.addEventListener("click", (t) => {
    t.target === Mt && ps();
  }), (mp = o.getElementById("homeNav")) == null || mp.addEventListener("click", () => {
    lt && Rl();
  }), (gp = o.querySelector(".bottomNav")) == null || gp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + As + "</button>"), (bp = l("dashEditNav")) == null || bp.addEventListener("click", () => v ? Ll(!jo) : ml(!ma)), S.addEventListener("pointerdown", Dh), S.addEventListener("pointerdown", ih), S.addEventListener("click", (t) => {
    v && jo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), S.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && fd(t.target);
  }, !0), new ResizeObserver(() => {
    f.classList.contains("tfDash") && al() !== tl ? De() : Qi();
  }).observe(S), window.addEventListener("resize", Qi, { passive: !0 }), Mt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), F != null && F.details ? zl(!1) : ps();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const r = [...Mt.querySelectorAll(".tfMoreDots [data-more-page]")], s = r.findIndex((p) => p.getAttribute("aria-selected") === "true"), d = r[Math.max(0, Math.min(r.length - 1, s + (t.key === "ArrowRight" ? 1 : -1)))];
      d && cs(Number(d.dataset.morePage), d.dataset.moreMode ?? null, !0);
    }
  })), dt(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([r]) => to(r))), ...t || {} };
      for (const r in k) r.startsWith("light.") && k[r].state === "on" && Lo(r) && Ln(r, no(k[r]));
      e ? Na() : De();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      _n = !0, Ae == null || Ae.destroy(), Ae = null, Te == null || Te.forEach((t) => t.destroy()), Te = null;
    },
    resume() {
      _n = !1, !(!g || !(S != null && S.querySelector("[data-tf]"))) && (Da.isConnected && Wr(Da.style.order), _o());
    }
  };
}
const Rg = "0.16.0";
function Hg() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class Ng extends HTMLElement {
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
    Hg();
    const n = this.shadowRoot || this.attachShadow({ mode: "open" });
    n.innerHTML = `<style>${Mm}${Sm}${_m}${Cm}</style>${Am}`;
    const i = n.getElementById("app");
    i.style.opacity = "0", this._shell = Dm(n, {
      setLight: (l) => this.classList.toggle("lightBody", l),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = Pg(n, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), H0(n, i), O0(n), this.isConnected || this._test.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", Ng), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Rg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
