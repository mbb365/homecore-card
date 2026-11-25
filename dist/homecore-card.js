var hm = Object.defineProperty;
var mm = (o, r, i) => r in o ? hm(o, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[r] = i;
var mp = (o, r, i) => mm(o, typeof r != "symbol" ? r + "" : r, i);
const gm = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', bm = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}#app .tfMoreSpace.tfPhys{position:relative;padding:0;display:block;--face:var(--tile);--shade:var(--muted);--phys-accent:#d0ff00}#app.light .tfMoreSpace.tfPhys{--phys-accent:var(--text)}.tfPhys .iso{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;color:var(--text);touch-action:none;outline:none;-webkit-user-select:none;user-select:none}.tfPhys .iso:focus-visible{box-shadow:inset 0 0 0 2px var(--text);border-radius:16px}.tfPhys .iso .face{fill:var(--face);stroke:var(--face);stroke-width:.9;stroke-linejoin:round}.tfPhys .iso .edge,.tfPhys .iso .accent{fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.tfPhys .iso .accent{stroke:var(--phys-accent);stroke-width:1.6}.tfPhys .iso .mark{stroke-width:1.6}.tfPhys .iso .pointer{stroke-width:2}.tfPhys .iso .hatch{stroke:var(--shade);stroke-width:.8}.tfPhys .iso .level,.tfPhys .iso .dotfill{fill:currentColor;stroke:currentColor;stroke-width:1}.tfPhys .iso .st{fill:currentColor;font-family:inherit;font-weight:500}.tfPhys .iso .st.sel{font-weight:600;fill:var(--phys-accent)}.tfPhys .iso [data-part]{cursor:pointer}.tfPhys .iso .deco{pointer-events:none}`, wm = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, vm = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', ym = `<main id="app"><div class="shell">
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
`, gp = "homecore-theme", xm = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, km = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (xm[o] || "") + "</svg>", bp = {
  get: (o) => {
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  set: (o, r) => {
    try {
      localStorage.setItem(o, r);
    } catch {
    }
  }
};
function Mm(o, { setLight: r, fullscreenSupported: i, toggleFullscreen: l }) {
  const f = (J) => o.getElementById(J), b = f("app");
  o.querySelectorAll("[data-icon]").forEach((J) => {
    J.innerHTML = km(J.dataset.icon);
  });
  const g = { home: f("homeView"), settings: f("settingsView") }, v = f("homeNav"), L = f("settingsNav");
  function T(J) {
    Object.entries(g).forEach(([Q, z]) => z.classList.toggle("active", Q === J)), v.classList.toggle("active", J === "home"), L.classList.toggle("active", J === "settings");
  }
  v.addEventListener("click", () => T("home")), L.addEventListener("click", () => T("settings")), f("settingsBack").addEventListener("click", () => T("home"));
  function C(J) {
    const Q = J === "light";
    o.querySelectorAll(".themeBtn").forEach((z) => z.classList.toggle("active", z.dataset.theme === J)), b.classList.toggle("light", Q), r(Q);
  }
  C(bp.get(gp) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((J) => J.addEventListener("click", () => {
    C(J.dataset.theme), bp.set(gp, J.dataset.theme);
  }));
  const B = f("tvNav");
  i || (B.hidden = !0), B.addEventListener("click", () => l());
  let k;
  function q(J) {
    const Q = f("toast");
    Q && (Q.textContent = J, Q.classList.add("show"), clearTimeout(k), k = setTimeout(() => Q.classList.remove("show"), 2600));
  }
  return { showView: T, toast: q };
}
const Sm = /* @__PURE__ */ new Set(["roaming", "test_area"]), _m = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, $n = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ce = "made_up_", no = (o) => {
  var r;
  return (r = String(o).split(".")[1]) == null ? void 0 : r.startsWith(Ce);
}, Vn = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Bc(o) {
  const r = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Cm(o) {
  const r = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let l = +r; l < +o; l += 10 * 60 * 1e3) i += Bc(new Date(l)) / 6;
  return i;
}
function wp(o = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let i = 0; i <= 96; i++) {
    const l = +o - (96 - i) * 15 * 60 * 1e3;
    r.push([l, Bc(new Date(l))]);
  }
  return r;
}
function Am({ onChange: o }) {
  const r = {}, i = {}, l = (z, O, tt, rt) => {
    r[z] = { entity_id: z, state: tt, attributes: rt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = O;
  }, f = (z, O, tt) => {
    const rt = r[z], ct = O ?? rt.state;
    r[z] = { ...rt, state: ct, attributes: { ...rt.attributes, ...tt }, last_changed: ct === rt.state ? rt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, O, tt, rt) => l("binary_sensor." + Ce + (z ? z + "_" : "") + Vn(O), z, rt ? "on" : "off", { friendly_name: O, device_class: tt });
  Object.entries(_m).forEach(([z, O]) => {
    if (O.temperature != null && l("sensor." + Ce + z + "_temperature", z, String(O.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), O.humidity != null && l("sensor." + Ce + z + "_humidity", z, String(O.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), O.vacuum && l("vacuum." + Ce + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), O.climate && l("climate." + Ce + z, z, "heat", {
      friendly_name: "Thermostat",
      hvac_modes: ["off", "heat", "cool", "auto"],
      hvac_action: "heating",
      current_temperature: O.temperature,
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
      current_humidity: O.humidity,
      humidity: 45,
      min_humidity: 30,
      max_humidity: 70
    }), O.fan) {
      const [tt, rt] = O.fan;
      l("fan." + Ce + z + "_" + Vn(tt), z, "on", rt != null ? { friendly_name: tt, percentage: rt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: tt, supported_features: 48 });
    }
    if (O.waterHeater && l("water_heater." + Ce + z, z, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), O.valvePos) {
      const [tt, rt] = O.valvePos;
      l("valve." + Ce + z + "_" + Vn(tt), z, rt == null || rt ? "open" : "closed", { friendly_name: tt, device_class: "water", supported_features: 3 | (rt == null ? 0 : 12), ...rt == null ? {} : { current_position: rt } });
    }
    if (O.garage && l("cover." + Ce + z + "_" + Vn(O.garage), z, "closed", { friendly_name: O.garage, device_class: "garage", supported_features: 3 }), O.cover) {
      const [tt, rt, ct, et] = O.cover;
      l("cover." + Ce + z + "_" + Vn(tt), z, ct ? "open" : "closed", { friendly_name: tt, device_class: rt, current_position: ct, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (O.humidifier && l("humidifier." + Ce + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: O.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), O.solar && (l("sensor." + Ce + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), l("sensor." + Ce + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), O.valve && l("valve." + Ce + z + "_" + Vn(O.valve), z, "closed", { friendly_name: O.valve, device_class: "water" }), O.door && b(z, O.door, "door", O.doorOpen), O.window && b(z, O.window, "window", !1), O.motion && b(z, O.motion, "motion", !1), O.plant) {
      const [tt, rt, ct, et, F] = O.plant, $ = Ce + Vn(tt), ht = (Pt, H, Z, Wt, U) => l("sensor." + $ + "_" + Pt, z, String(Z), { friendly_name: H, device_class: U, state_class: "measurement", unit_of_measurement: Wt, plant_low: Z < $n[Pt][0], plant_high: Z > $n[Pt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Pt] });
      ht("moisture", "Moisture", rt, "%", "moisture"), ht("light", "Light", ct, "lx", "illuminance"), ht("temperature", "Temperature", et, "°C", "temperature"), ht("fertility", "Fertility", F, "µS/cm", "conductivity");
      const kt = Object.entries({ moisture: rt, light: ct, temperature: et, fertility: F }).filter(([Pt, H]) => H < $n[Pt][0] || H > $n[Pt][1]).map(([Pt, H]) => Pt + (H < $n[Pt][0] ? " low" : " high"));
      l("plant." + $, z, kt.length ? "problem" : "ok", { friendly_name: tt, moisture: rt, brightness: ct, temperature: et, conductivity: F, problem: kt.join(", ") || "none" });
    }
  }), l("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), l("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const g = {}, v = {};
  let L = null;
  function T() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((O) => {
      O.endsWith("_solar_power") && (r[O] = { ...r[O], state: Bc(z).toFixed(2) }), O.endsWith("_solar_today") && (r[O] = { ...r[O], state: Cm(z).toFixed(1) });
    });
  }
  T();
  let C = 0;
  function B() {
    let z = !1;
    const O = ++C % 10 === 0, tt = (et, F, $) => {
      f(et, F, $), z = !0;
    };
    Object.entries(g).forEach(([et, F]) => {
      const $ = r[et].attributes.current_position, ht = $ < F ? Math.min(F, $ + 10) : Math.max(F, $ - 10);
      ht === F && delete g[et], tt(et, ht === F ? ht === 0 ? "closed" : "open" : F > $ ? "opening" : "closing", { current_position: ht });
    }), Object.entries(v).forEach(([et, F]) => {
      const $ = r[et].attributes.current_tilt_position, ht = $ < F ? Math.min(F, $ + 25) : Math.max(F, $ - 25);
      ht === F && delete v[et], tt(et, null, { current_tilt_position: ht });
    }), Object.keys(r).filter((et) => et.startsWith("climate.")).forEach((et) => {
      const F = r[et], $ = F.attributes, ht = $.current_temperature, kt = (F.state === "heat" || F.state === "auto") && ht < $.temperature - 0.05, Pt = (F.state === "cool" || F.state === "auto") && ht > $.temperature + 0.05, H = F.state === "off" ? "off" : kt ? "heating" : Pt ? "cooling" : "idle", Z = O ? Math.round((ht + (kt ? 0.1 : Pt ? -0.1 : 0)) * 10) / 10 : ht;
      (Z !== ht || H !== $.hvac_action) && tt(et, null, { current_temperature: Z, hvac_action: H });
    }), Object.keys(r).filter((et) => et.startsWith("humidifier.")).forEach((et) => {
      const F = r[et], $ = F.attributes, ht = $.current_humidity, kt = F.state === "on" && ht < $.humidity, Pt = kt && O ? ht + 1 : ht, H = F.state !== "on" ? "off" : kt ? "humidifying" : "idle";
      if (Pt !== ht || H !== $.action) {
        tt(et, null, { current_humidity: Pt, action: H });
        const Z = "sensor." + Ce + i[et] + "_humidity";
        r[Z] && tt(Z, String(Pt));
      }
    });
    const rt = r["vacuum." + Ce + "robot"], ct = rt.attributes;
    rt.state === "cleaning" && O && tt(rt.entity_id, null, { battery_level: Math.max(5, ct.battery_level - 1) }), rt.state === "returning" && tt(rt.entity_id, "docked", {}), rt.state === "docked" && ct.battery_level < 100 && tt(rt.entity_id, null, { battery_level: Math.min(100, ct.battery_level + 2) }), L && Date.now() - L.at > 5e3 && (tt("alarm_control_panel." + Ce + "house", "armed_" + L.mode, {}), L = null), z && o();
  }
  const k = setInterval(B, 1e3), q = setInterval(() => {
    T(), o();
  }, 60 * 1e3);
  function J(z, O, tt) {
    const rt = tt == null ? void 0 : tt.entity_id;
    if (!r[rt]) return !1;
    const ct = r[rt], et = ct.attributes, F = ($, ht) => f(rt, $, ht);
    if (z === "climate" && (O === "set_temperature" && tt.temperature != null && F(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, tt.temperature)) }), O === "set_hvac_mode" && F(tt.hvac_mode, tt.hvac_mode === "off" ? { hvac_action: "off" } : {}), O === "toggle" && F(ct.state === "off" ? "heat" : "off", ct.state === "off" ? {} : { hvac_action: "off" }), O === "set_temperature" && tt.target_temp_low != null && F(null, { target_temp_low: tt.target_temp_low, target_temp_high: tt.target_temp_high }), O === "set_fan_mode" && F(null, { fan_mode: tt.fan_mode }), O === "set_swing_mode" && F(null, { swing_mode: tt.swing_mode }), O === "set_preset_mode" && F(null, { preset_mode: tt.preset_mode }), O === "set_humidity" && F(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, tt.humidity)) })), z === "fan" && (O === "set_percentage" && F(tt.percentage > 0 ? "on" : "off", { percentage: tt.percentage }), O === "oscillate" && F(null, { oscillating: tt.oscillating }), O === "set_direction" && F(null, { direction: tt.direction }), (O === "turn_on" || O === "turn_off" || O === "toggle") && F(O === "turn_on" || O === "toggle" && ct.state !== "on" ? "on" : "off")), z === "water_heater" && (O === "set_temperature" && F(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, tt.temperature)) }), O === "set_operation_mode" && F(tt.operation_mode, { operation_mode: tt.operation_mode }), O === "set_away_mode" && F(null, { away_mode: tt.away_mode ? "on" : "off" }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const $ = O === "turn_on" || O === "toggle" && ct.state === "off";
      F($ ? "eco" : "off", { operation_mode: $ ? "eco" : "off" });
    }
    if (z === "cover") {
      const $ = O === "open_cover" ? 100 : O === "close_cover" ? 0 : O === "set_cover_position" ? tt.position : O === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      O === "stop_cover" && (delete g[rt], delete v[rt], F(et.current_position === 0 ? "closed" : "open")), $ != null && et.current_position == null ? F($ > 0 ? "open" : "closed") : $ != null && $ !== et.current_position && (g[rt] = $, F($ > et.current_position ? "opening" : "closing"));
      const ht = O === "open_cover_tilt" ? 100 : O === "close_cover_tilt" ? 0 : O === "set_cover_tilt_position" ? tt.tilt_position : null;
      O === "stop_cover_tilt" && delete v[rt], ht != null && et.current_tilt_position != null && ht !== et.current_tilt_position && (v[rt] = ht);
    }
    if (z === "humidifier" && (O === "set_humidity" && F(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, tt.humidity)) }), O === "set_mode" && F(null, { mode: tt.mode }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const $ = O === "turn_on" || O === "toggle" && ct.state !== "on";
      F($ ? "on" : "off", { action: $ ? "idle" : "off" });
    }
    if (z === "vacuum" && (O === "start" && F("cleaning", { rooms: tt.rooms || et.rooms }), O === "pause" && F("paused"), O === "return_to_base" && F("returning", { rooms: [] }), O === "locate" && F(null, { located: Date.now() }), O === "set_rooms" && F(null, { rooms: tt.rooms })), z === "valve") {
      const $ = O === "open_valve" || O === "toggle" && ct.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(O) && F($ ? "open" : "closed", et.current_position != null ? { current_position: $ ? 100 : 0 } : {}), O === "set_valve_position" && F(tt.position > 0 ? "open" : "closed", { current_position: tt.position });
    }
    if (z === "alarm_control_panel") {
      O === "alarm_disarm" && (L = null, F("disarmed", { changed_by: "Matt" }));
      const $ = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[O];
      $ && (L = { mode: $, at: Date.now() }, F("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function Q(z, { madeUp: O = !0 } = {}) {
    const tt = O ? r : {}, rt = (z == null ? void 0 : z.states) || {}, ct = (z == null ? void 0 : z.entities) || {}, et = (z == null ? void 0 : z.devices) || {}, F = (nt) => {
      var vt;
      const N = ct[nt];
      return N && (N.area_id || N.device_id && ((vt = et[N.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, $ = (nt) => {
      const N = ct[nt];
      return rt[nt] && rt[nt].state !== "unavailable" && !(N != null && N.hidden) && !(N != null && N.entity_category);
    }, ht = {};
    Object.keys(rt).forEach((nt) => {
      const N = F(nt);
      N && $(nt) && (ht[N] || (ht[N] = [])).push(nt);
    });
    const kt = { ...rt, ...tt }, Pt = (nt) => {
      var N, vt;
      return (vt = (N = kt[nt]) == null ? void 0 : N.attributes) == null ? void 0 : vt.device_class;
    }, H = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], Z = Object.keys(rt).filter((nt) => nt.startsWith("vacuum.") && $(nt)), Wt = Object.values((z == null ? void 0 : z.areas) || {}).filter((nt) => !Sm.has(nt.area_id)).map((nt) => {
      const N = nt.area_id, vt = ht[N] || [], mt = (Nt) => vt.filter((fe) => fe.startsWith(Nt + ".")), Mt = (Nt) => mt("sensor").filter((fe) => Pt(fe) === Nt), Ft = (Nt) => Object.keys(tt).filter((fe) => i[fe] === N && Nt(fe)), ce = (Nt, fe) => Nt.length ? Nt : Ft(fe), ea = ce(Mt("temperature"), (Nt) => Nt.endsWith(N + "_temperature")), ba = ce(Mt("humidity"), (Nt) => Nt.endsWith(N + "_humidity")), wa = Mt("power").filter((Nt) => /^(W|kW)$/.test(kt[Nt].attributes.unit_of_measurement || "")), Ao = mt("binary_sensor").filter((Nt) => Pt(Nt) === "moisture"), Xn = ce(mt("plant"), (Nt) => Nt.startsWith("plant.")).map((Nt) => ({ id: Nt, readings: Ft((fe) => fe.startsWith("sensor." + Nt.split(".")[1] + "_")) })), To = [...mt("binary_sensor").filter((Nt) => H.includes(Pt(Nt))), ...Ft((Nt) => Nt.startsWith("binary_sensor."))];
      return {
        id: N,
        name: nt.name,
        icon: nt.icon,
        floor: nt.floor_id || null,
        readings: [...ea.slice(0, 1), ...ba.slice(0, 1), ...Ao],
        power: wa.length ? wa.reduce((Nt, fe) => Nt + Number(kt[fe].state) * (kt[fe].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: mt("switch"),
        lights: mt("light"),
        actions: [
          ...mt("light"),
          ...ce(mt("climate"), (Nt) => Nt.startsWith("climate.")),
          ...ce(mt("cover"), (Nt) => Nt.startsWith("cover.")),
          ...ce(mt("humidifier"), (Nt) => Nt.startsWith("humidifier.")),
          ...ce(mt("valve"), (Nt) => Nt.startsWith("valve.")),
          ...mt("media_player"),
          ...mt("vacuum"),
          ...Z.length ? [] : Ft((Nt) => Nt.startsWith("vacuum.")),
          ...mt("fan"),
          ...Ft((Nt) => Nt.startsWith("fan.")),
          ...mt("water_heater"),
          ...Ft((Nt) => Nt.startsWith("water_heater."))
        ],
        solar: Ft((Nt) => Nt.includes("_solar_")),
        plants: Xn,
        openings: To,
        alerts: [...Ao, ...To].filter((Nt) => {
          var fe;
          return ((fe = kt[Nt]) == null ? void 0 : fe.state) === "on";
        })
      };
    }).filter((nt) => nt.readings.length || nt.plugs.length || nt.actions.length || nt.solar.length || nt.plants.length), U = Object.keys(rt).find((nt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(nt) && rt[nt].state !== "unavailable") || null, st = (nt) => Object.keys(rt).filter((N) => N.startsWith(nt + ".") && $(N)), lt = st("alarm_control_panel"), dt = Z.length ? Z : O ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: kt,
      rooms: Wt,
      grid: U,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (nt) => tt[nt] ? i[nt] : F(nt),
      vacuums: dt,
      homeVacuums: dt.filter((nt) => !Wt.some((N) => N.actions.includes(nt))),
      security: {
        alarms: lt.length ? lt : O ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: st("lock"),
        openings: [...Object.keys(tt).filter((nt) => nt.startsWith("binary_sensor.")), ...O ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: Q, call: J, stop() {
    clearInterval(k), clearInterval(q);
  } };
}
const vp = (o) => +o.toFixed(2), yp = (o) => o * Math.PI / 180, xi = (o, r, i, l) => [vp(o + i * Math.cos(yp(l))), vp(r + i * Math.sin(yp(l)))], Cr = (o, r, i, l, f) => {
  const [b, g] = xi(o, r, i, l), [v, L] = xi(o, r, i, f);
  return `M${b} ${g}A${i} ${i} 0 ${f - l > 180 ? 1 : 0} 1 ${v} ${L}`;
}, Ye = (o, r, i, l, f, b = "") => `<rect x="${o}" y="${r}" width="${i}" height="${l}" rx="${f}"${b}/>`, Ca = (o, r, i, l = "") => `<circle cx="${o}" cy="${r}" r="${i}"${l}/>`, ma = (o, r = "") => `<path d="${o}"${r}/>`, _s = (o, r = 2.5) => ma(o, ` fill="none" stroke="currentColor" stroke-width="${r}" stroke-linecap="round" stroke-linejoin="round"`), jn = (o, r = 1.5) => ma(o, ` stroke="currentColor" stroke-width="${r}" stroke-linejoin="round"`), zn = (o) => o.replace(/\/>$/, ' fill="#000" stroke="none"/>'), Tm = (o, r, i, l = 0) => Array.from({ length: o }, (f, b) => {
  const g = l + 360 / o * b, [v, L] = xi(12, 12, r, g), [T, C] = xi(12, 12, i, g);
  return _s(`M${v} ${L}L${T} ${C}`, 2.2);
}).join(""), Lm = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", Dm = [
  {
    id: "light",
    name: "Light",
    use: "lights, lamps",
    colour: "#ffc107",
    s: ma("M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z") + Ye(9.4, 19.2, 5.2, 2.6, 1.3),
    c: ma(Cr(12, 9.6, 3.6, 180, 270))
  },
  {
    id: "plug",
    name: "Plug",
    use: "switches, sockets",
    colour: "#ffc107",
    s: Ye(3, 3, 18, 18, 6),
    c: zn(Ye(8.2, 8.8, 2.2, 6.4, 1.1)) + zn(Ye(13.6, 8.8, 2.2, 6.4, 1.1))
  },
  {
    id: "thermostat",
    name: "Thermostat",
    use: "climate, heating",
    colour: "#ff5722",
    s: Ca(12, 12, 9.6),
    c: ma(Cr(12, 12, 6.2, 135, 405)) + ma(`M12 12L${xi(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: Ye(9.2, 2.4, 5.6, 14, 2.8) + Ca(12, 17.4, 4.4),
    c: ma("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: jn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: ma(Cr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((o) => ma(Lm, ` transform="rotate(${o} 12 12)"`)).join("") + Ca(12, 12, 2.6),
    c: Ca(12, 12, 3.6)
  },
  {
    id: "blinds",
    name: "Blinds",
    use: "covers, shades, shutters",
    colour: "#9c27b0",
    s: Ye(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((o) => Ye(4, o, 16, 2.5, 1.25)).join(""),
    c: ""
  },
  {
    id: "lock",
    name: "Lock",
    use: "locks",
    colour: "#4caf50",
    s: _s("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Ye(4, 10, 16, 11.6, 4.2),
    c: zn(Ca(12, 14.9, 1.7)) + ma("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Ye(5, 2.4, 14, 19.2, 3.6),
    c: zn(Ca(15.2, 12.4, 1.5))
  },
  {
    id: "window",
    name: "Window",
    use: "windows, openings",
    colour: "#ff9800",
    s: Ye(3, 3, 18, 18, 4.4),
    c: ma("M12 3V21M3 12H21")
  },
  {
    id: "motion",
    name: "Motion",
    use: "motion, occupancy",
    colour: "#03a9f4",
    s: jn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + _s(Cr(12, 18.6, 8, 230, 310), 2.4) + _s(Cr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: Ca(12, 7.2, 4.2) + jn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Ye(2.6, 5.4, 13.4, 8.6, 3.4) + jn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Ye(7.2, 14.6, 2.4, 4.2, 1.2) + Ye(3.4, 18.6, 10, 2.6, 1.3),
    c: zn(Ca(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Ye(5, 2.4, 14, 19.2, 4.2),
    c: Ca(12, 14.6, 3.6) + zn(Ca(12, 7.4, 1.5))
  },
  {
    id: "tv",
    name: "TV",
    use: "TVs, displays",
    colour: "#2196f3",
    s: Ye(2.4, 3.6, 19.2, 13.4, 3.4) + Ye(7.6, 18.8, 8.8, 2.6, 1.3),
    c: ma(Cr(18.2, 7.2, 2.4, 270, 360))
  },
  {
    id: "vacuum",
    name: "Vacuum",
    use: "robot vacuums",
    colour: "#4caf50",
    s: Ca(12, 12, 9.6),
    c: ma("M5.6 8.6H18.4") + Ca(12, 14.4, 2.4)
  },
  {
    id: "energy",
    name: "Energy",
    use: "power, energy",
    colour: "#ffc107",
    s: jn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: Ca(12, 12, 4.4) + Tm(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: jn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: ma("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: jn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: zn(Ye(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Em = 0;
function Bm(o, r = 24, i = `hc${++Em}`) {
  const l = o.c ? `<defs><mask id="${i}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${o.c.replace(/currentColor/g, "#fff")}</g></mask></defs>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${r}" height="${r}" aria-hidden="true">${l}<g fill="currentColor"${o.c ? ` mask="url(#${i})"` : ""}>${o.s}</g>${o.t ? `<g fill="currentColor">${o.t}</g>` : ""}</svg>`;
}
const $a = {
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
}, hi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, _c = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), i = r.length === 3 ? r.split("").map((l) => l + l).join("") : r;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, Pm = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), xp = {}, ja = (o, r, i) => {
  const l = o + r + i;
  return xp[l] || (xp[l] = Pm(_c(o).map((f, b) => f + (_c(r)[b] - f) * i)));
}, kp = {}, ec = (o) => kp[o] || (kp[o] = _c(o));
function Bu(o, r) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || r ? "night" : "day");
}
function Rm(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [ja(r.clear[0], r.cloudy[0], 0.12), ja(r.clear[1], r.cloudy[1], 0.12)], r.storm = [ja(r.rain[0], "#000000", 0.22), ja(r.rain[1], "#000000", 0.22)], r;
}
const Cc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Ac = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Tc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Hm(o, r = $a) {
  const i = { ...$a, ...r }, l = Rm(i), f = String(o).split("/"), b = l[f[0]] ? f[0] : "clear", g = f[1] === "night", v = l[b][g ? 1 : 0], L = {
    night: g,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: v,
    skyStops: [v],
    skyT: 0,
    sun: { x: 45, y: g ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: g ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: g ? 1 : 0 },
    stars: Cc.map(() => ({ o: 0 })),
    rain: Ac.map(() => ({ o: 0, dy: -16 })),
    snow: Tc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, T = (C) => Cc.map(() => ({ o: C }));
  return b === "clear" ? g ? (L.moon.o = 1, L.stars = T(1)) : L.sun.o = 1 : b === "partly" ? (L.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: g ? 1 : 0 }, g ? (L.moon = { x: 34, y: 33, d: 48, o: 1 }, L.stars = T(0.7)) : L.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (L.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: g ? 1 : 0 }, g ? L.moon = { x: 40, y: 36, d: 40, o: 0 } : L.sun = { x: 40, y: 36, r: 20, o: 0 }) : (L.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, g ? L.moon = { x: 38, y: 28, d: 36, o: 0 } : L.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? L.snow = Tc.map(() => ({ o: 1, dy: 0 })) : L.rain = Ac.map((C, B) => ({ o: b === "storm" && B === 1 ? 0 : 1, dy: 0 })), b === "storm" && (L.bolt = { o: 1, dy: 0 })), L;
}
const Nm = [
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
], Gn = (o, r) => (Nm[(r & 7) * 8 + (o & 7)] + 0.5) / 64, Om = 0, Pu = 1, Ru = 2, Hu = 3, Nu = 4, Mo = 5, Es = 6, Er = 7, Ou = 8, Mp = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Im = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Fm = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), qm = (o, r, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && r < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function Wm(o, { size: r = 90, px: i = 2, oneBit: l = !1, colors: f = $a, ink: b = "#26221e", paper: g = "#fbf9f6", clock: v = 0, idle: L = !1 } = {}) {
  const T = { ...$a, ...f }, C = Math.sin, B = Math.PI * 2, k = Math.max(6, Math.round(r / i)), q = k / 90, J = L ? Math.floor(v / 100) * 100 : 0, Q = L ? C(B * J / 3600) : 0, z = L ? 1.8 * C(B * J / 6400) : 0, O = L ? 0.9 * C(B * J / 4100) : 0, tt = L ? 0.8 * C(B * J / 5200) : 0, rt = J / 3400 % 1, ct = L && o.bolt.o > 0.5 && (rt < 0.04 || rt > 0.08 && rt < 0.11), et = new Array(k * k), F = new Uint8Array(k * k), $ = (U, st, lt, dt, nt) => {
    lt == null || U < 0 || st < 0 || U >= k || st >= k || (dt >= 1 || dt > Gn(U + 5, st + 3)) && (et[st * k + U] = lt, F[st * k + U] = nt);
  }, ht = (U, st, lt, dt) => {
    for (let nt = Math.max(0, Math.floor(st - lt) - 1); nt <= Math.min(k - 1, st + lt + 1); nt++) for (let N = Math.max(0, Math.floor(U - lt) - 1); N <= Math.min(k - 1, U + lt + 1); N++) dt(N, nt, N + 0.5 - U, nt + 0.5 - st);
  }, kt = o.skyStops || [o.sky], Pt = o.skyT || 0;
  for (let U = 0; U < k; U++) {
    const st = o.night ? hi(1 - (U + 0.5) / (k * 0.7)) * 0.85 : hi(((U + 0.5) / k - 0.35) / 0.65) * 0.85;
    for (let lt = 0; lt < k; lt++) {
      let dt = kt[0];
      if (kt.length > 1) {
        const nt = Pt * (kt.length - 1), N = Math.min(kt.length - 2, Math.floor(nt));
        dt = nt - N > Gn(lt, U) ? kt[N + 1] : kt[N];
      }
      st > Gn(lt + 2, U + 5) && (dt = o.night ? ja(dt, "#000000", 0.28) : ja(dt, "#ffffff", 0.2)), et[U * k + lt] = ct ? ja(dt, "#ffffff", 0.25) : dt;
    }
  }
  if (o.sun.o > 0.01) {
    const U = o.sun.x * q, st = o.sun.y * q, lt = Math.max(1, o.sun.r * q);
    if (L) {
      const dt = lt * (1.45 + 0.06 * Q), nt = ja(T.sun, "#ffffff", 0.55);
      if (ht(U, st, dt, (N, vt, mt, Mt) => {
        const Ft = Math.sqrt(mt * mt + Mt * Mt);
        Ft > lt && Ft < dt && $(N, vt, nt, 0.26 * (1 - (Ft - lt) / (dt - lt)) * o.sun.o, Om);
      }), o.sun.o > 0.5) {
        const N = Math.floor(J / 500) % 2, vt = Math.max(1, lt * 0.22);
        for (let mt = 0; mt < 8; mt++) if (mt % 2 === N) for (let Mt = lt + 1.5; Mt < lt + 1.5 + vt; Mt += 0.7) $(Math.floor(U + Math.cos(mt * Math.PI / 4) * Mt), Math.floor(st + Math.sin(mt * Math.PI / 4) * Mt), T.sun, o.sun.o, Ou);
      }
    }
    ht(U, st, lt, (dt, nt, N, vt) => {
      if (N * N + vt * vt > lt * lt) return;
      const mt = ((N * 0.643 + vt * 0.766) / lt + 1) / 2;
      $(dt, nt, hi((mt - 0.62) / 0.38) > Gn(dt, nt) ? T.sunEdge : T.sun, o.sun.o, Pu);
    });
  }
  if (Cc.forEach((U, st) => {
    const lt = o.stars[st].o;
    if (lt < 0.01) return;
    const dt = Math.floor(U[0] * q), nt = Math.floor(U[1] * q), N = L ? (Math.floor(J / 300) + st * 3) % 6 : 0;
    if (N === 5) return;
    const vt = Math.round(U[2] * q * (N === 4 ? 0.3 : N < 2 ? 1 : 0.6));
    $(dt, nt, T.star, lt, Er);
    for (let mt = 1; mt <= vt; mt++) {
      const Mt = mt === vt && vt > 1 ? ja(T.star, o.sky, 0.5) : T.star;
      $(dt - mt, nt, Mt, lt, Er), $(dt + mt, nt, Mt, lt, Er), $(dt, nt - mt, Mt, lt, Er), $(dt, nt + mt, Mt, lt, Er);
    }
  }), o.moon.o > 0.01) {
    const U = Math.max(1.5, o.moon.d * q * 0.37), st = o.moon.x * q, lt = o.moon.y * q + (L && tt > 0.4 ? -1 : 0), dt = st + 0.547 * U, nt = lt - 0.503 * U, N = 0.82 * U, vt = ja(T.moon, "#ffffff", 0.6);
    ht(st, lt, U, (mt, Mt, Ft, ce) => {
      if (Ft * Ft + ce * ce > U * U) return;
      const ea = mt + 0.5 - dt, ba = Mt + 0.5 - nt;
      ea * ea + ba * ba <= N * N || $(mt, Mt, hi((ce + U) / (2 * U) * 1.1 - 0.1) > Gn(mt, Mt) ? T.moon : vt, o.moon.o, Ru);
    });
  }
  const H = Math.max(2, Math.round(15.65 * q)), Z = Math.max(1, Math.round(5.87 * q * 0.5));
  Ac.forEach((U, st) => {
    const lt = o.rain[st];
    let dt = lt.dy, nt = lt.o;
    if (nt < 0.01) return;
    if (L) {
      const mt = (J / 950 + st / 3) % 1;
      dt += -5 + mt * 14, nt *= mt < 0.18 ? mt / 0.18 : mt > 0.72 ? (1 - mt) / 0.28 : 1;
    }
    const N = (U[0] + 3 + z) * q, vt = (U[1] + dt) * q;
    for (let mt = 0; mt < H; mt++) for (let Mt = 0; Mt < Z; Mt++) $(Math.floor(N - 0.208 * mt) + Mt, Math.floor(vt) + mt, T.rain, nt, Nu);
  });
  const Wt = Math.max(0, Math.round(7.34 * q / 2.6));
  if (Tc.forEach((U, st) => {
    const lt = o.snow[st];
    let dt = lt.dy, nt = 0, N = lt.o;
    if (N < 0.01) return;
    if (L) {
      const Mt = (J / 3200 + st / 5) % 1;
      dt += -6 + Mt * 14, nt = 1.5 * C(B * (Mt * 1.5 + st / 5)), N *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const vt = Math.floor((U[0] + 3.67 + nt + z) * q), mt = Math.floor((U[1] + 3.67 + dt) * q);
    $(vt, mt, T.snow, N, Mo);
    for (let Mt = 1; Mt <= Wt; Mt++)
      $(vt - Mt, mt, T.snow, N, Mo), $(vt + Mt, mt, T.snow, N, Mo), $(vt, mt - Mt, T.snow, N, Mo), $(vt, mt + Mt, T.snow, N, Mo), Wt > 1 && Mt < Wt && ($(vt - Mt, mt - Mt, T.snow, N, Mo), $(vt + Mt, mt - Mt, T.snow, N, Mo), $(vt - Mt, mt + Mt, T.snow, N, Mo), $(vt + Mt, mt + Mt, T.snow, N, Mo));
  }), o.bolt.o > 0.01)
    if (k >= 30) {
      const U = 39 + z, st = 50 + o.bolt.dy;
      for (let lt = Math.floor(st * q); lt <= (st + 28) * q; lt++) for (let dt = Math.floor(U * q); dt <= (U + 13) * q; dt++)
        qm(Fm, (dt + 0.5) / q - U, (lt + 0.5) / q - st) && $(dt, lt, T.sun, o.bolt.o, Es);
    } else {
      const U = k / 18, st = 7, lt = 10 + Math.round(o.bolt.dy * 0.2);
      Im.forEach((dt, nt) => dt.split("").forEach((N, vt) => {
        if (N !== "#") return;
        const mt = Math.floor((st + vt) * U), Mt = Math.floor((lt + nt) * U);
        for (let Ft = Mt; Ft < Math.max(Mt + 1, Math.floor((lt + nt + 1) * U)); Ft++) for (let ce = mt; ce < Math.max(mt + 1, Math.floor((st + vt + 1) * U)); ce++) $(ce, Ft, T.sun, o.bolt.o, Es);
      }));
    }
  if (o.cloud.o > 0.01) {
    const U = Math.max(3, o.cloud.w * q), st = U * 0.6665, lt = (o.cloud.x + z) * q - U / 2, dt = (o.cloud.y + O) * q - st / 2, nt = ja(T.cloudDay, T.cloudNight, Math.round(o.cloud.f * 4) / 4), N = ja(nt, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(dt) - 1); vt <= Math.min(k - 1, dt + st + 1); vt++) for (let mt = Math.max(0, Math.floor(lt) - 1); mt <= Math.min(k - 1, lt + U + 1); mt++) {
      const Mt = (mt + 0.5 - lt) / U, Ft = (vt + 0.5 - dt) / U;
      Mp(Mt, Ft) && $(mt, vt, !Mp(Mt, Ft + 1 / U) || hi((Ft - 0.42) / 0.25) * 0.8 > Gn(mt, vt) ? N : nt, o.cloud.o, Hu);
    }
  }
  return Vm(et, F, k, k, { oneBit: l, ink: b, paper: g, snowInk: !o.night });
}
function Vm(o, r, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const L = new Uint8ClampedArray(i * l * 4), T = ec(b), C = ec(g);
  for (let B = 0; B < l; B++) for (let k = 0; k < i; k++) {
    const q = B * i + k, J = r[q];
    if (o[q] == null) continue;
    let Q = ec(o[q]);
    if (f) {
      let z;
      J === Nu || J === Ou ? z = !0 : J === Mo ? z = v : J === Er || J === Es ? z = !1 : z = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Gn(k, B), (J === Pu || J === Ru || J === Hu || J === Es) && (k > 0 && r[q - 1] !== J || k < i - 1 && r[q + 1] !== J || B > 0 && r[q - i] !== J || B < l - 1 && r[q + i] !== J) && (z = !0), Q = z ? T : C;
    }
    L[q * 4] = Q[0], L[q * 4 + 1] = Q[1], L[q * 4 + 2] = Q[2], L[q * 4 + 3] = 255;
  }
  return { w: i, h: l, data: L };
}
const Jo = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Lc = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), i = r.length === 3 ? r.split("").map((l) => l + l).join("") : r;
  return [0, 2, 4].map((l) => parseInt(i.slice(l, l + 2), 16) || 0);
}, jm = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Sp = {}, za = (o, r, i) => {
  const l = o + r + i;
  return Sp[l] || (Sp[l] = jm(Lc(o).map((f, b) => f + (Lc(r)[b] - f) * i)));
}, _p = {}, Cs = (o) => _p[o] || (_p[o] = Lc(o));
function zm(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [za(r.clear[0], r.cloudy[0], 0.12), za(r.clear[1], r.cloudy[1], 0.12)], r.storm = [za(r.rain[0], "#000000", 0.22), za(r.rain[1], "#000000", 0.22)], r;
}
const Gm = [
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
], Ko = (o, r) => (Gm[(r & 7) * 8 + (o & 7)] + 0.5) / 64, Iu = 1, Fu = 2, qu = 3, Wu = 4, Br = 5, Bs = 6, Dc = 7, Vu = 8, Cp = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), $m = (o, r, i) => {
  let l = !1;
  for (let f = 0, b = o.length - 1; f < o.length; b = f++) {
    const g = o[f], v = o[b];
    g[1] > i != v[1] > i && r < (v[0] - g[0]) * (i - g[1]) / (v[1] - g[1]) + g[0] && (l = !l);
  }
  return l;
};
function Um(o, r, i, l, { oneBit: f, ink: b, paper: g, snowInk: v }) {
  const L = new Uint8ClampedArray(i * l * 4), T = Cs(b), C = Cs(g);
  for (let B = 0; B < l; B++) for (let k = 0; k < i; k++) {
    const q = B * i + k, J = r[q];
    if (o[q] == null) continue;
    let Q = Cs(o[q]);
    if (f) {
      let z;
      J === Wu || J === Vu ? z = !0 : J === Br ? z = v : J === Dc || J === Bs ? z = !1 : z = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Ko(k, B), (J === Iu || J === Fu || J === qu || J === Bs) && (k > 0 && r[q - 1] !== J || k < i - 1 && r[q + 1] !== J || B > 0 && r[q - i] !== J || B < l - 1 && r[q + i] !== J) && (z = !0), Q = z ? T : C;
    }
    L[q * 4] = Q[0], L[q * 4 + 1] = Q[1], L[q * 4 + 2] = Q[2], L[q * 4 + 3] = 255;
  }
  return { w: i, h: l, data: L };
}
const Ym = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Zm = (o) => Bu(o, !1).split("/")[0], ac = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let r = Math.imul(o ^ o >>> 15, 1 | o);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Km = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Xm = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Jm = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Qm = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", t0 = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], e0 = [".##", "##.", ".#.", "#.."];
function ju(o, { width: r, height: i, colors: l, wave: f = 0.38, soft: b = 6, glow: g = 0.6, columns: v = 6 }) {
  const L = { ...$a, dawn: "#e5a77e", ...l }, T = zm(L), C = r, B = i, k = C / v, q = k / 2, J = Math.PI * 2, Q = o.length ? o : [{ cond: "cloudy", night: !1 }], z = [...Array(v * 2)].map((ct, et) => {
    const F = Q[Math.min(et, Q.length - 1)], $ = Zm(F.cond), ht = et % 2 === 1;
    return { cond: F.cond, k: $, night: ht, sky: T[$][ht ? 1 : 0], cover: Ym[$] };
  }), O = (ct) => B * (0.5 - f * Math.cos(J * (ct / k - 0.25)));
  return { C: L, S: z, W: C, H: B, cw: k, sw: q, TAU: J, yb: O, side: (ct, et, F) => {
    const $ = (ct ? O(et) - F : F - O(et)) / Math.max(3, b * 1.4) + 0.5;
    return $ <= 0 ? 0 : $ >= 1 ? 1 : $;
  }, glowAt: (ct) => {
    const et = ((ct / k - 0.25) % 1 + 1) % 1, F = Math.max(0, Math.min(v - 1, Math.round(ct / k - 0.25))), $ = Math.max(0, Math.min(v - 1, Math.round(ct / k - 0.75))), ht = 1 - (z[2 * F].cover + z[2 * $ + 1].cover) / 2, kt = Math.sin(Math.PI * Math.min(1, Math.max(0, O(ct) / B)));
    return { c: et < 0.5 ? L.dusk : L.dawn, a: g * (0.2 + 0.8 * ht) * kt * kt };
  }, soft: b, tw: k * 0.3, sy: B / 90 };
}
function zu(o, { clock: r = 0, ambient: i = !1, seed: l = 1 }) {
  const { S: f, sw: b, side: g, C: v, TAU: L, sy: T, H: C } = o, B = r, k = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Q, z) => {
    const O = ac(l * 977 + z * 131 + 7), tt = (z + 0.5) * b, rt = Q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Q.k] : 0;
    for (let ct = 0; ct < rt; ct++) {
      const et = tt + (O() - 0.5) * b * 1.6, F = (6 + O() * 76) * T, $ = O() < 0.35, ht = 1.8 + O() * 1.6, kt = g(!0, et, F) * ($ ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(L * B / 2600 + ct * 1.7 + z) : 1);
      kt >= 0.03 && k.stars.push({ x: et, y: F, big: $, size: ht, o: kt });
    }
    if (!Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const ct = tt + (O() - 0.5) * b * 0.3, et = Math.min(15, b * 0.29);
      k.suns.push({ x: ct, y: 32 * T, rad: et, halo: et * 2.8 * (i ? 1 + 0.07 * Math.sin(L * B / 3600 + z) : 1) });
    }
    if (Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const ct = Math.min(0.78, b * 0.55 / 34), et = tt - 23 * ct + (O() - 0.5) * b * 0.2;
      k.moons.push({ x: et + 23 * ct, y: (4 + (i ? 0.8 * Math.sin(L * B / 5200 + z) : 0)) * T + 23 * ct, d: 46 * ct });
    }
  });
  const q = Math.max(56, Math.min(100, C * 0.45)), J = Math.max(1, b / (q * 2.4));
  return f.forEach((Q, z) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Q.k];
    if (!O) return;
    const tt = Q.k === "partly" ? 1 : Math.round(O * J), rt = ac(l * 577 + z * 71 + 3), ct = (z + 0.5) * b, et = Q.k === "rain" || Q.k === "storm" || Q.night ? v.cloudNight : v.cloudDay, F = Q.night ? 0.82 : Q.k === "storm" ? 0.75 : 1;
    for (let $ = 0; $ < tt; $++) {
      const ht = q / 46 * (Q.k === "partly" ? 1 : 0.8 + rt() * 0.4), kt = ct + (Q.k === "partly" ? b * 0.12 : (($ + 0.5) / tt - 0.5) * b * 0.95 + (rt() - 0.5) * b * 0.5 / tt), Pt = (Q.k === "partly" ? 40 : 6 + rt() * 26) * T, H = i ? 2.5 * Math.sin(L * B / 9e3 + z * 1.3 + $ * 2.1) : 0, Z = i ? 0.9 * Math.sin(L * B / 6100 + z + $) : 0;
      k.clouds.push({ x: kt - 23 * ht + H, y: Pt - 15.33 * ht + Z, w: 46 * ht, h: 30.66 * ht, fill: et, o: F * (tt > 1 && $ === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Q, z) => {
    const O = ac(l * 313 + z * 29 + 11), tt = (z + 0.5) * b, rt = Q.cond === "pouring" ? 16 : Q.cond === "rainy" || Q.cond === "hail" ? 9 : Q.cond === "lightning-rainy" ? 12 : Q.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < rt; et++) {
      let F = tt + (O() - 0.5) * b * 1.05, $ = 44 + O() * 36, ht = 1;
      if (i) {
        const Pt = (($ - 44 + B * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (Pt - ($ - 44)), $ = 44 + Pt, ht = Math.min(1, Pt / 6, (36 - Pt) / 6);
      }
      $ *= T;
      const kt = g(Q.night, F, $) * ht;
      kt >= 0.05 && k.drops.push({ x: F, y: $, o: kt });
    }
    const ct = Q.cond === "snowy" ? 11 : Q.cond === "snowy-rainy" ? 6 : 0;
    for (let et = 0; et < ct; et++) {
      let F = tt + (O() - 0.5) * b * 1.05, $ = 40 + O() * 44, ht = 1;
      if (i) {
        const Pt = (($ - 40 + B * 9e-3) % 44 + 44) % 44;
        $ = 40 + Pt, F += 1.6 * Math.sin(L * B / 2800 + et * 1.9 + z), ht = Math.min(1, Pt / 6, (44 - Pt) / 6);
      }
      $ *= T;
      const kt = g(Q.night, F, $) * ht;
      kt >= 0.05 && k.flakes.push({ x: F, y: $, o: kt });
    }
    if (Q.k === "fog") {
      const et = Q.night ? "#c8ccd6" : "#ffffff", F = Q.night ? 0.28 : 0.62, $ = i ? 4 * Math.sin(L * B / 8e3 + z) : 0;
      for (let ht = 0; ht < 4; ht++) k.fogs.push({ x: tt - b * 0.75 + ht % 2 * b * 0.18 + (ht % 2 ? $ : -$), y: (30 + ht * 13) * T, w: b * 1.3, c: et, a: F });
    }
    if (Q.k === "storm") {
      const et = (B / 3400 + z * 0.37) % 1;
      k.bolts.push({ x: tt + (O() - 0.5) * b * 0.3 - 5, y: 36 * T, o: i && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), k;
}
function a0(o, r, i, l, f, b, g, v) {
  const { S: L, C: T, cw: C, yb: B, glowAt: k, soft: q, tw: J, sy: Q } = o, z = new Array(i * l), O = new Uint8Array(i * l), tt = new Uint8Array(i * l), rt = (U, st, lt, dt, nt) => {
    lt == null || U < 0 || st < 0 || U >= i || st >= l || (dt >= 1 || dt > Ko(U + 5, st + 3)) && (z[st * i + U] = lt, O[st * i + U] = nt);
  }, ct = (U, st, lt, dt) => {
    for (let nt = Math.max(0, Math.floor(st - lt) - 1); nt <= Math.min(l - 1, st + lt + 1); nt++) for (let N = Math.max(0, Math.floor(U - lt) - 1); N <= Math.min(i - 1, U + lt + 1); N++) dt(N, nt, N + 0.5 - U, nt + 0.5 - st);
  }, et = (U, st, lt) => {
    for (let nt = 0; nt < U.length - 1; nt++) {
      const N = (nt + st) * C;
      if (lt < N - J / 2) return [U[nt], U[nt], 0];
      if (lt <= N + J / 2) return [U[nt], U[nt + 1], (lt - N + J / 2) / J];
    }
    const dt = U[U.length - 1];
    return [dt, dt, 0];
  }, F = L.filter((U) => !U.night).map((U) => U.sky), $ = L.filter((U) => U.night).map((U) => U.sky), ht = q / b, kt = 16 * Q / b;
  for (let U = 0; U < i; U++) {
    const st = (U + 0.5) * f, lt = B(st) / b, dt = et(F, 0.75, st), nt = et($, 1.25, st), N = k(st);
    for (let vt = 0; vt < l; vt++) {
      const mt = Ko(U, vt), Mt = vt + 0.5 - lt, Ft = (ht > 0.01 ? Jo(0.5 + Mt / ht) : Mt > 0 ? 1 : 0) > mt;
      let ce = Ft ? dt[2] > mt ? dt[1] : dt[0] : nt[2] > mt ? nt[1] : nt[0];
      (Ft ? Jo(((vt + 0.5) / l - 0.45) / 0.55) * 0.7 : Jo(1 - (vt + 0.5) / (l * 0.55)) * 0.7) > Ko(U + 2, vt + 5) && (ce = Ft ? za(ce, "#ffffff", 0.18) : za(ce, "#000000", 0.25)), Ft && Mt >= 0 && Mt < kt && N.a * 1.3 * (1 - Mt / kt) > Ko(U + 6, vt + 1) && (ce = N.c), z[vt * i + U] = ce, tt[vt * i + U] = Ft ? 0 : 1;
    }
  }
  const Pt = za(T.sun, "#ffffff", 0.55), H = za(T.moon, "#ffffff", 0.6);
  r.stars.forEach((U) => {
    const st = Math.floor(U.x / f), lt = Math.floor(U.y / b);
    if (st < 0 || lt < 0 || st >= i || lt >= l || !tt[lt * i + st] || U.o < 0.15) return;
    const dt = U.o > 0.45 ? T.star : za(T.star, z[lt * i + st], 0.5), nt = U.big && U.o > 0.6 ? Math.floor(U.size / f) : 0;
    rt(st, lt, dt, 1, Dc);
    for (let N = 1; N <= nt; N++) [[st - N, lt], [st + N, lt], [st, lt - N], [st, lt + N]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < i && vt[1] < l && tt[vt[1] * i + vt[0]] && rt(vt[0], vt[1], dt, 1, Dc);
    });
  }), r.suns.forEach((U) => {
    const st = Math.max(1.5, U.rad / f), lt = U.x / f, dt = U.y / b, nt = U.halo / f * 0.85;
    if (ct(lt, dt, nt, (N, vt, mt, Mt) => {
      const Ft = Math.sqrt(mt * mt + Mt * Mt);
      Ft > st && Ft < nt && !tt[vt * i + N] && rt(N, vt, Pt, 0.3 * (1 - (Ft - st) / (nt - st)), 0);
    }), v) {
      const N = Math.floor(g / 500) % 2, vt = Math.max(1, st * 0.3);
      for (let mt = 0; mt < 8; mt++) if (mt % 2 === N) for (let Mt = st + 1.2; Mt < st + 1.2 + vt; Mt += 0.7) rt(Math.floor(lt + Math.cos(mt * Math.PI / 4) * Mt), Math.floor(dt + Math.sin(mt * Math.PI / 4) * Mt), T.sun, 1, Vu);
    }
    ct(lt, dt, st, (N, vt, mt, Mt) => {
      mt * mt + Mt * Mt <= st * st && rt(N, vt, Jo(((Mt / st + 1) / 2 - 0.6) / 0.4) > Ko(N, vt) ? T.sunEdge : T.sun, 1, Iu);
    });
  }), r.moons.forEach((U) => {
    const st = Math.max(1.5, U.d * 0.37 / f), lt = U.x / f, dt = U.y / b, nt = lt + 0.547 * st, N = dt - 0.503 * st, vt = 0.82 * st;
    ct(lt, dt, st, (mt, Mt, Ft, ce) => {
      if (Ft * Ft + ce * ce > st * st) return;
      const ea = mt + 0.5 - nt, ba = Mt + 0.5 - N;
      ea * ea + ba * ba > vt * vt && rt(mt, Mt, Jo((ce + st) / (2 * st) * 1.1 - 0.1) > Ko(mt, Mt) ? T.moon : H, 1, Fu);
    });
  }), r.clouds.forEach((U) => {
    const st = Math.max(3, U.w / f), lt = st * 0.6665, dt = U.x / f, nt = U.y / b, N = za(U.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(nt) - 1); vt <= Math.min(l - 1, nt + lt + 1); vt++) for (let mt = Math.max(0, Math.floor(dt) - 1); mt <= Math.min(i - 1, dt + st + 1); mt++) {
      const Mt = (mt + 0.5 - dt) / st, Ft = (vt + 0.5 - nt) / st;
      Cp(Mt, Ft) && rt(mt, vt, !Cp(Mt, Ft + 1 / st) || Jo((Ft - 0.42) / 0.25) * 0.8 > Ko(mt, vt) ? N : U.fill, U.o, qu);
    }
  }), r.fogs.forEach((U) => {
    const st = Math.floor(U.y / b), lt = Math.max(st, Math.floor((U.y + 6 * Q) / b) - 1), dt = Math.floor(U.x / f), nt = Math.floor((U.x + U.w) / f);
    for (let N = st; N <= lt; N++) for (let vt = dt; vt <= nt; vt++) {
      const mt = (vt - dt) / Math.max(1, nt - dt);
      rt(vt, N, U.c, U.a * (mt < 0.25 ? mt / 0.25 : mt > 0.75 ? (1 - mt) / 0.25 : 1), 0);
    }
  });
  const Z = Math.max(2, Math.round(9 / b));
  r.drops.forEach((U) => {
    const st = U.x / f, lt = Math.floor(U.y / b);
    for (let dt = 0; dt < Z; dt++) rt(Math.floor(st - 0.208 * dt * b / f), lt + dt, T.rain, U.o, Wu);
  });
  const Wt = Math.max(0, Math.round(4.4 / f / 2.6));
  return r.flakes.forEach((U) => {
    const st = Math.floor(U.x / f), lt = Math.floor(U.y / b);
    rt(st, lt, T.snow, U.o, Br);
    for (let dt = 1; dt <= Wt; dt++)
      rt(st - dt, lt, T.snow, U.o, Br), rt(st + dt, lt, T.snow, U.o, Br), rt(st, lt - dt, T.snow, U.o, Br), rt(st, lt + dt, T.snow, U.o, Br);
  }), r.bolts.forEach((U) => {
    if (f <= 3.5)
      for (let st = Math.floor(U.y / b); st <= (U.y + 24) / b; st++) for (let lt = Math.floor(U.x / f); lt <= (U.x + 11) / f; lt++)
        $m(t0, (lt + 0.5) * f - U.x, (st + 0.5) * b - U.y) && rt(lt, st, T.sun, 1, Bs);
    else {
      const st = Math.round(U.x / f), lt = Math.round(U.y / b);
      e0.forEach((dt, nt) => dt.split("").forEach((N, vt) => {
        N === "#" && rt(st + vt, lt + nt, T.sun, 1, Bs);
      }));
    }
  }), { col: z, ids: O };
}
function o0(o, r) {
  const i = r.px, l = Math.max(6, Math.round(r.width / i)), f = Math.max(6, Math.round(r.height / i)), b = r.width / l, g = r.height / f, v = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, L = (q) => {
    const J = ju(q, r);
    return a0(J, zu(J, { clock: v, ambient: r.ambient, seed: r.seed }), l, f, b, g, v, r.ambient);
  }, T = L(o), C = r.reveal == null ? 1 : Jo(r.reveal);
  let B = T.col, k = T.ids;
  if (C < 1) {
    const q = r.prev ? L(r.prev) : null, J = C * (l + 12);
    B = new Array(l * f), k = new Uint8Array(l * f);
    for (let Q = 0; Q < l * f; Q++) {
      const z = Q % l, O = Q / l | 0;
      (r.reduce ? C : Jo((J - z) / 12)) > Ko(z, O) ? (B[Q] = T.col[Q], k[Q] = T.ids[Q]) : q ? (B[Q] = q.col[Q], k[Q] = q.ids[Q]) : (B[Q] = null, k[Q] = 255);
    }
  }
  return Um(B, k, l, f, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function n0(o, r, i) {
  const l = i.width, f = i.height, b = i.reveal == null ? 1 : Jo(i.reveal), g = (k, q) => {
    const J = ju(q, i);
    r0(k, J, zu(J, i));
  };
  if (o.clearRect(0, 0, l, f), b >= 1) {
    g(o, r);
    return;
  }
  if (i.prev && g(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = b, g(o, r), o.restore();
    return;
  }
  const v = o.canvas, L = v.__wxOff || (v.__wxOff = document.createElement("canvas"));
  (L.width !== v.width || L.height !== v.height) && (L.width = v.width, L.height = v.height);
  const T = L.getContext("2d");
  T.setTransform(o.getTransform()), T.clearRect(0, 0, l, f), g(T, r);
  const C = b * (l + 64) - 64, B = T.createLinearGradient(C, 0, C + 64, 0);
  B.addColorStop(0, "rgba(0,0,0,1)"), B.addColorStop(1, "rgba(0,0,0,0)"), T.globalCompositeOperation = "destination-in", T.fillStyle = B, T.fillRect(0, 0, l, f), T.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(L, 0, 0), o.restore();
}
function r0(o, r, i) {
  const { W: l, H: f, S: b, C: g, cw: v, yb: L, glowAt: T, soft: C, tw: B, sy: k } = r, q = o.getTransform().a || 1, J = (Z) => {
    o.shadowColor = Z ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = Z ? 4 * q : 0, o.shadowOffsetY = Z ? 1.5 * q : 0;
  }, Q = (Z, Wt) => {
    const U = Cs(Z);
    return "rgba(" + U[0] + "," + U[1] + "," + U[2] + "," + Math.max(0, Math.min(1, Wt)).toFixed(3) + ")";
  }, z = (Z, Wt) => {
    const U = o.createLinearGradient(0, 0, l, 0);
    U.addColorStop(0, Z[0]);
    for (let st = 0; st < Z.length - 1; st++) {
      const lt = (st + Wt) * v, dt = (lt - B / 2) / l, nt = (lt + B / 2) / l;
      dt > 0 && dt < 1 && U.addColorStop(dt, Z[st]), nt > 0 && nt < 1 && U.addColorStop(nt, Z[st + 1]);
    }
    return U.addColorStop(1, Z[Z.length - 1]), U;
  }, O = Math.max(24, Math.ceil(l / 4)), tt = (Z, Wt) => {
    o.beginPath();
    for (let U = 0; U <= O; U++) {
      const st = l * U / O, lt = Z == null ? 0 : L(st) + Z;
      U ? o.lineTo(st, lt) : o.moveTo(st, lt);
    }
    for (let U = O; U >= 0; U--) {
      const st = l * U / O;
      o.lineTo(st, L(st) + Wt);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = z(b.filter((Z) => !Z.night).map((Z) => Z.sky), 0.75), o.fillRect(0, 0, l, f);
  const rt = o.createLinearGradient(0, 0, l, 0);
  for (let Z = 0; Z <= 64; Z++) {
    const Wt = T(l * Z / 64);
    rt.addColorStop(Z / 64, Q(Wt.c, Math.min(1, Wt.a)));
  }
  o.fillStyle = rt;
  for (let Z = 0; Z < 8; Z++)
    o.globalAlpha = 1 - Z / 8, tt(Z * 2 * k, (Z + 1) * 2 * k);
  o.fillStyle = z(b.filter((Z) => Z.night).map((Z) => Z.sky), 1.25);
  const ct = Math.max(0.5, C), et = 6;
  o.globalAlpha = 1, tt(null, -ct);
  for (let Z = 0; Z < et; Z++)
    o.globalAlpha = 1 - (Z + 0.5) / et, tt(-ct + 2 * ct * Z / et, -ct + 2 * ct * (Z + 1) / et);
  o.globalAlpha = 1;
  const F = new Path2D(Jm), $ = new Path2D(Xm), ht = new Path2D(Km), kt = new Path2D(Qm);
  o.fillStyle = g.star, i.stars.forEach((Z) => {
    o.globalAlpha = Z.o, Z.big ? (o.save(), o.translate(Z.x, Z.y), o.scale(Z.size, Z.size), o.fill(F), o.restore()) : (o.beginPath(), o.arc(Z.x, Z.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Pt = za(g.sun, "#ffffff", 0.55);
  i.suns.forEach((Z) => {
    const Wt = o.createRadialGradient(Z.x, Z.y, 0, Z.x, Z.y, Z.halo);
    Wt.addColorStop(0, Q(Pt, 0.42)), Wt.addColorStop(0.7, Q(Pt, 0)), o.fillStyle = Wt, o.beginPath(), o.arc(Z.x, Z.y, Z.halo, 0, Math.PI * 2), o.fill();
    const U = o.createLinearGradient(0, Z.y - Z.rad, 0, Z.y + Z.rad);
    U.addColorStop(0.6, g.sun), U.addColorStop(1, g.sunEdge), o.fillStyle = U, J(!0), o.beginPath(), o.arc(Z.x, Z.y, Z.rad, 0, Math.PI * 2), o.fill(), J(!1);
  });
  const H = za(g.moon, "#ffffff", 0.6);
  i.moons.forEach((Z) => {
    o.save(), o.translate(Z.x - Z.d / 2, Z.y - Z.d / 2), o.scale(Z.d / 46, Z.d / 46);
    const Wt = o.createLinearGradient(0, 6, 0, 40);
    Wt.addColorStop(0, H), Wt.addColorStop(1, g.moon), o.fillStyle = Wt, J(!0), o.fill($), J(!1), o.restore();
  }), i.clouds.forEach((Z) => {
    o.save(), o.globalAlpha = Z.o, o.translate(Z.x, Z.y), o.scale(Z.w / 46, Z.h / 30.66), o.translate(-4, -9.67), o.fillStyle = Z.fill, J(!0), o.fill(ht), J(!1), o.restore();
  }), i.fogs.forEach((Z) => {
    const Wt = o.createLinearGradient(Z.x, 0, Z.x + Z.w, 0);
    Wt.addColorStop(0, Q(Z.c, 0)), Wt.addColorStop(0.25, Q(Z.c, Z.a)), Wt.addColorStop(0.75, Q(Z.c, Z.a)), Wt.addColorStop(1, Q(Z.c, 0)), o.fillStyle = Wt, o.fillRect(Z.x, Z.y, Z.w, 6 * k);
  }), o.fillStyle = g.rain, i.drops.forEach((Z) => {
    o.save(), o.globalAlpha = Z.o, o.translate(Z.x, Z.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = g.snow, i.flakes.forEach((Z) => {
    o.globalAlpha = Z.o, o.beginPath(), o.arc(Z.x, Z.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = g.sun, i.bolts.forEach((Z) => {
    o.save(), o.globalAlpha = Z.o, o.translate(Z.x, Z.y), o.fill(kt), o.restore();
  }), o.restore();
}
const i0 = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Ar = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, fs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, oc = (o, r) => '<path class="' + r + '" d="' + o + '"/>', s0 = (o, r) => ' style="animation-delay:-' + Math.round(o * 137 % r) + 'ms"', Wa = (o, r, i, l) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + s0(o, 2400) + ' d="M' + o + " " + (r - i) + "L" + (o + f) + " " + (r - f) + "L" + (o + i) + " " + r + "L" + (o + f) + " " + (r + f) + "L" + o + " " + (r + i) + "L" + (o - f) + " " + (r + f) + "L" + (o - i) + " " + r + "L" + (o - f) + " " + (r - f) + 'Z"/>';
}, Ap = ([o, r, i], l) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + r + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', l0 = (o, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', c0 = (o) => (o ? ["29.35", "43.04", "56.74"].map((r, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), d0 = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, i], l) => '<circle class="wbFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + r + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function p0(o, r, i, l) {
  const f = (b) => '<g filter="url(#' + l + '-sh)">' + b + "</g>";
  return o === "clear" ? r ? f(Ap(i ? fs.l : fs.s, l)) + (i ? Wa(70, 20, 5.83, 1) + Wa(78.33, 41.67, 3.75, 0.8) + Wa(60, 71.67, 3.33, 0.6) : Wa(42, 12, 3.5, 1) + Wa(47, 25, 2.25, 0.8) + Wa(36, 43, 2, 0.6)) : f(l0(l, i)) : o === "partly" ? f(r ? Ap(i ? fs.lp : fs.sp, l) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(oc(i ? Ar.lp : Ar.sp, r ? "wbCloudLight" : "wbBright")) + (r ? i ? Wa(73.33, 16.67, 4.17, 0.9) : Wa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? f(oc(i ? Ar.lc : Ar.s, r ? "wbCloudLight" : "wbBright")) + (r ? i ? Wa(15, 15, 3.75, 0.8) + Wa(76.67, 13.33, 2.92, 0.6) : Wa(9, 9, 2.25, 0.8) + Wa(46, 8, 1.75, 0.6) : "") : f(oc(i ? Ar.lr : Ar.s, "wbCloudLight")) + (o === "rain" ? c0(i) : d0(i));
}
const u0 = (o, r) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function f0(o, r, i, l) {
  let f = i0(o);
  const b = f === "night" || !!i;
  f === "night" && (f = "clear");
  const g = r ? 90 : 54;
  return { k: f, night: b, svg: '<svg viewBox="0 0 ' + g + " " + g + '">' + u0(l, r) + p0(f, b, r, l) + "</svg>" };
}
const h0 = [
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
], hs = (o, r) => (h0[r % 8 * 8 + o % 8] + 0.5) / 64, ro = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], Qe = (o, r, i) => [Math.round(o[0] + (r[0] - o[0]) * i), Math.round(o[1] + (r[1] - o[1]) * i), Math.round(o[2] + (r[2] - o[2]) * i)], mi = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Tp = (o, r) => {
  let i = o * 374761393 + r * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Un = [255, 255, 255], ia = ro("#26221e"), Lp = ro("#0288d1"), m0 = ro("#01579b"), nc = ro($a.cloudDay), rc = ro($a.cloudNight), ms = ro($a.dusk), ic = ro($a.sunEdge), g0 = ro($a.sun), b0 = 10, Dp = 0.3, Qo = 56, Gu = 21;
function w0(o) {
  const r = Array.from({ length: Gu }, () => new Array(Qo).fill(void 0)), i = (g, v, L) => {
    r[v][g] = L;
  }, l = Qe(ms, ia, 0.35), f = Qe(ia, Un, 0.22);
  for (let g = 0; g <= 6; g++) {
    const v = g < 2 ? Qo - 2 : Qo - 1;
    for (let L = 6 - g; L <= v; L++) i(L, g, g < 2 ? l : g === 6 ? f : ia);
  }
  const b = [ms, ic, rc, ro($a.skyRainDay), Qe(ms, ia, 0.2), Qe(o, ia, 0.35)];
  [2, 3, 2, 3, 3].forEach((g, v) => {
    const L = 9 + v * 6;
    for (let T = 0; T < g; T++) {
      const C = b[(v * 2 + T * 3) % b.length];
      for (let B = L; B < L + 5; B++)
        i(B, 7 + T * 2, Qe(C, ia, 0.12)), i(B, 8 + T * 2, T === g - 1 ? Qe(C, Un, 0.3) : C);
      i(L + 5, 7 + T * 2, ia), i(L + 5, 8 + T * 2, ia);
    }
  });
  for (let g = 7; g <= 12; g++) i(5, g, ia);
  i(5, 13, ic);
  for (let g = 7; g <= 14; g++) for (let v = 42; v <= 51; v++) i(v, g, v === 51 ? rc : nc);
  for (let g = 43; g <= 50; g += 2)
    i(g, 12, ia), i(g, 9, Qe(ia, nc, 0.4));
  for (let g = 40; g <= 53; g++) i(g, 14, g === 40 || g === 53 ? rc : nc);
  for (let g = 15; g <= 18; g++) for (let v = 46; v <= 49; v++) i(v, g, g === 18 ? ia : g === 16 ? ic : ms);
  for (let g = 15; g <= 19; g++) i(44, g, ia);
  return i(44, 20, g0), r;
}
function v0(o, r, i, l) {
  const f = Math.max(1, Math.round(o)), b = Math.max(1, Math.round(r)), g = new Uint8ClampedArray(f * b * 4), v = ro(l.skyClearDay), L = ro(l.skyFogDay), T = w0(v), C = Math.round(b * 0.55), B = mi(1 - Math.log(i / Dp) / Math.log(b0 / Dp)), k = Qe(v, L, B), q = (O) => mi((O - 0.1) / 0.9), J = mi((1 - Math.exp(-2 / i) - 0.2) / 0.8), Q = Math.round(f / 2 - Qo / 2), z = C + 3;
  for (let O = 0; O < b; O++) {
    const tt = z - 1 - O, rt = O - z;
    for (let ct = 0; ct < f; ct++) {
      const et = ct - Q;
      let F, $;
      const ht = tt >= 0 && tt < Gu && et >= 0 && et < Qo ? T[tt][et] : void 0;
      if (ht)
        F = ht, $ = J;
      else if (tt >= 0 && tt <= 1 && et >= 4 - tt && et <= 5 - tt)
        F = Qe(Un, Lp, 0.15), $ = J;
      else if (O < C) {
        const H = mi(((O + 0.5) / C - 0.15) / 0.85) * 3, Z = Math.min(3, Math.floor(H + hs(ct + 2, O + 5)));
        F = Qe(k, Un, Z * 0.1), $ = B * 0.95;
      } else {
        const H = (O - C + 0.5) / (b - C), Z = Math.min(1.5, 6e-3 / (H * H)), Wt = mi(H * 1.4) * 3, U = Math.min(3, Math.floor(Wt + hs(ct + 1, O + 6)));
        F = Qe(Lp, m0, U / 3);
        const st = 1 + Math.round(H * 7), lt = Math.floor(ct / (st * 3)), dt = 0.06 + 0.16 * H, nt = ct % (st * 3) < st;
        nt && Tp(lt, O) < dt ? F = Qe(F, Un, 0.18 + 0.1 * (1 - H)) : nt && H > 0.5 && Tp(lt, O - 1) < dt && (F = Qe(F, ia, 0.12)), $ = q(1 - Math.exp(-Z / i)), rt === 0 && et >= 3 && et <= 8 ? (F = Qe(F, Un, et < 6 ? 0.8 : 0.45), $ = J) : rt >= 0 && rt <= 2 && et >= Qo && et < Qo + 40 ? ((1 - (et - Qo) / 40) * (rt === 1 ? 0.9 : 0.5) > hs(ct, O + 3) && (F = Qe(F, Un, 0.5)), $ = J) : rt === 0 && et >= 6 && et < Qo && (F = Qe(F, ia, et % 2 === 0 ? 0.35 : 0.2), $ = J);
      }
      const kt = $ > hs(ct, O) ? L : F, Pt = (O * f + ct) * 4;
      g[Pt] = kt[0], g[Pt + 1] = kt[1], g[Pt + 2] = kt[2], g[Pt + 3] = 255;
    }
  }
  return { data: g, w: f, h: b };
}
const y0 = {
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
}, x0 = 1.6;
function k0(o, r) {
  const i = o ? y0[String(o).toUpperCase()] : void 0;
  if (!i || !(r > 0)) return;
  const l = (b) => Math.abs(Math.log(b[2] / r)), f = i.reduce((b, g) => l(g) < l(b) ? g : b);
  return l(f) <= Math.log(x0) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const M0 = (o, r) => r === "mi" ? o * 1.609344 : r === "m" ? o / 1e3 : r === "ft" ? o * 3048e-7 : r === "yd" ? o * 9144e-7 : o, S0 = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Be = {
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
}, Pe = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, qe = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function _0() {
  const { pivot: o, slider: r, iconbtn: i, warp: l, outline: f } = Be;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Pe[o.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", Pe[r.ease]],
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
const sc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", C0 = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", A0 = 300, As = (o) => Math.min(1, A0 / Math.max(1, o)), lc = (o, r) => 1 + (r / 100 - 1) * As(o.offsetWidth);
function T0(o, r) {
  r.style.cssText += ";" + _0();
  let i = null;
  const l = (C) => {
    C.classList.remove("mvMoving", "mvLit"), C.style.setProperty("--rx", "0deg"), C.style.setProperty("--ry", "0deg"), C.style.setProperty("--sc", 1), C._down = !1;
  };
  o.addEventListener("pointermove", (C) => {
    var O, tt;
    const B = C.pointerType === "touch" || qe() ? null : (tt = (O = C.target).closest) == null ? void 0 : tt.call(O, sc);
    if (i && i !== B && l(i), i = B, !B || B.disabled) return;
    const k = Be.pivot, q = B.getBoundingClientRect(), J = (C.clientX - q.left) / q.width, Q = (C.clientY - q.top) / q.height, z = 1;
    B.classList.add("mvPv", "mvMoving", "mvLit"), B.style.setProperty("--pv-persp", k.persp / As(Math.max(B.offsetWidth, B.offsetHeight)) + "px"), B.style.setProperty("--ry", (z * (J - 0.5) * 2 * k.tilt * As(B.offsetWidth)).toFixed(3) + "deg"), B.style.setProperty("--rx", (z * -(Q - 0.5) * 2 * k.tilt * As(B.offsetHeight)).toFixed(3) + "deg"), B.style.setProperty("--mx", (J * 100).toFixed(1) + "%"), B.style.setProperty("--my", (Q * 100).toFixed(1) + "%"), B._down || B.style.setProperty("--sc", lc(B, k.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (C) => {
    i && !i.contains(C.relatedTarget) && (l(i), i = null);
  }), o.addEventListener("pointerdown", (C) => {
    var k, q;
    const B = qe() ? null : (q = (k = C.target).closest) == null ? void 0 : q.call(k, sc);
    B && (B._down = !0, B.classList.add("mvPv"), B.classList.remove("mvMoving"), B.style.setProperty("--sc", lc(B, Be.pivot.press)));
  }), o.addEventListener("pointerup", (C) => {
    var k, q;
    const B = (q = (k = C.target).closest) == null ? void 0 : q.call(k, sc);
    B && (B._down = !1, B.style.setProperty("--sc", C.pointerType === "touch" ? 1 : lc(B, Be.pivot.lift)));
  });
  let f = null;
  o.addEventListener("pointerover", (C) => {
    var B, k, q;
    C.pointerType !== "touch" && ((q = (k = (B = C.target).closest) == null ? void 0 : k.call(B, ".tfBar")) == null || q.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (C) => {
    var k, q;
    const B = (q = (k = C.target).closest) == null ? void 0 : q.call(k, ".tfBar");
    B && !B.contains(C.relatedTarget) && B !== f && B.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (C) => {
    var k, q;
    const B = (q = (k = C.target).closest) == null ? void 0 : q.call(k, ".tfBar");
    B && (f = B, B.classList.add("mvHold"));
  });
  const b = (C) => {
    if (!f) return;
    f.classList.remove("mvHold");
    const B = f.getBoundingClientRect();
    (C.pointerType === "touch" || C.clientX < B.left || C.clientX > B.right || C.clientY < B.top || C.clientY > B.bottom) && f.classList.remove("mvHover"), f = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), o.addEventListener("focusin", (C) => {
    var B, k;
    (k = (B = C.target).matches) != null && k.call(B, ".tfBar:focus-visible") && C.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (C) => {
    var B;
    (B = C.target.classList) == null || B.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (C) => {
    var k, q;
    const B = (q = (k = C.target).closest) == null ? void 0 : q.call(k, ".tfBar");
    !B || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(C.key) || (B.classList.add("mvHold"), clearTimeout(B._k), B._k = setTimeout(() => B.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (C) => {
    var k, q;
    const B = (q = (k = C.target).closest) == null ? void 0 : q.call(k, "button.tfIcon[data-act]");
    B && L0(B);
  });
  let g = null;
  const v = (C, B, k) => {
    C.querySelector(":scope>.mvEdge") || C.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const q = C.getBoundingClientRect(), J = q.width / 2, Q = q.height / 2, z = B.clientX - q.left - J, O = B.clientY - q.top - Q, tt = z ? J / Math.abs(z) : 1 / 0, rt = O ? Q / Math.abs(O) : 1 / 0, ct = Math.min(Math.max(1 / Math.min(tt, rt), 0), 1);
    let et = Math.atan2(O, z) * 180 / Math.PI + 90;
    et < 0 && (et += 360);
    const F = k ? 100 : ct * 100;
    C.style.setProperty("--edge-proximity", F.toFixed(3)), C.style.setProperty("--cursor-angle", et.toFixed(3) + "deg"), C.classList.toggle("mvLitEdge", k || F >= Be.outline.lightAt);
  }, L = (C) => {
    C.classList.remove("mvLitEdge"), C.style.setProperty("--edge-proximity", "0"), C._down = !1;
  }, T = (C) => {
    var k;
    const B = (k = C.closest) == null ? void 0 : k.call(C, C0);
    return B && !r.classList.contains("tfEditing") ? B : null;
  };
  o.addEventListener("pointermove", (C) => {
    if (C.pointerType === "touch") return;
    const B = T(C.target);
    g && g !== B && L(g), g = B, B && !B._down && v(B, C, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (C) => {
    g && !g.contains(C.relatedTarget) && (L(g), g = null);
  }), o.addEventListener("pointerdown", (C) => {
    const B = T(C.target);
    B && Be.outline.press && (B._down = !0, v(B, C, !0));
  }), o.addEventListener("pointerup", (C) => {
    const B = T(C.target);
    B && (B._down = !1, C.pointerType === "touch" ? L(B) : v(B, C, !1));
  }), new MutationObserver((C) => {
    var B;
    for (const k of C) {
      const q = k.target;
      if (k.type === "attributes") {
        (B = q.classList) != null && B.contains("tfMoreBackdrop") && !q.hidden && k.oldValue !== null && Ep(q);
        continue;
      }
      k.addedNodes.forEach((J) => {
        J.nodeType === 1 && J.classList.contains("tfMoreBackdrop") && !J.hidden && Ep(J);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const $u = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function Uu(o, r) {
  const i = [];
  for (let l = o; l && l !== r && l.parentNode; l = l.parentNode) i.unshift([...l.parentNode.children].indexOf(l));
  return i;
}
const Yu = (o, r) => r.reduce((i, l) => i == null ? void 0 : i.children[l], o);
function L0(o) {
  var q;
  if (qe() || o._warp) return;
  const r = Be.warp, i = r.amount / 100, l = o.firstElementChild;
  if (!l) return;
  const f = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[r.style], b = "blur(" + 2 * i + "px)", g = o.getRootNode(), v = $u(o), L = (q = v.dataset) == null ? void 0 : q.k, T = Uu(o, v), C = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const B = l.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...f, filter: b }], { duration: r.win, easing: Pe.exit, fill: "forwards" }), k = performance.now();
  B.finished.then(() => {
    const J = () => {
      var ct, et;
      const Q = L ? v.isConnected ? v : (ct = g.querySelector) == null ? void 0 : ct.call(g, '[data-k="' + CSS.escape(L) + '"]') : v, z = Q && Yu(Q, T);
      if (z === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === C && performance.now() - k < 420) {
        requestAnimationFrame(J);
        return;
      }
      (((et = z == null ? void 0 : z.matches) != null && et.call(z, "button.tfIcon") ? z : o).firstElementChild || l).animate([{ ...f, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Pe[r.ease] }), B.cancel(), o._warp = 0;
    };
    J();
  });
}
const Zu = (o) => {
  let r = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const l = o[i - 1] || o[i], f = o[i], b = o[i + 1], g = o[i + 2] || b, v = [f[0] + (b[0] - l[0]) / 6, f[1] + (b[1] - l[1]) / 6], L = [b[0] - (g[0] - f[0]) / 6, b[1] - (g[1] - f[1]) / 6];
    r += "C" + v.map((T) => T.toFixed(1)).join(" ") + " " + L.map((T) => T.toFixed(1)).join(" ") + " " + b.map((T) => T.toFixed(1)).join(" ");
  }
  return r;
}, Ku = (o, r, i, l = "mvGrid") => [0, 1, 2].map((f) => {
  const b = (r + (i - r) * f / 2).toFixed(1);
  return '<line class="' + l + '" x1="0" x2="' + o + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function Xu(o, r = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (qe() || !(r != null && r.getTotalLength)) return;
  const l = Be.graphs, f = r.getTotalLength();
  r.animate([{ strokeDasharray: f, strokeDashoffset: f }, { strokeDasharray: f, strokeDashoffset: 0 }], { duration: l.draw, easing: Pe.standard }), [...i].forEach((b, g) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: l.draw * 0.6, delay: l.draw * 0.3 + g * 12, easing: Pe.standard, fill: "backwards" }));
}
function Ts(o, r, i, l, f) {
  if (o.getAnimations().forEach((C) => C.cancel()), o.style.left = l + "px", o.style.width = f + "px", qe() || r === l && i === f) return;
  const b = Be.tabs, g = b.stretch / 100, v = (C, B) => ({ left: C + "px", width: B + "px" }), T = l > r ? v(r + (l - r) * (0.15 * (1 - g)), l + f - (r + (l - r) * (0.15 * (1 - g)))) : v(l, r + i - l - (r - l) * (0.15 * (1 - g)));
  o.animate([v(r, i), { offset: 0.5, ...T }, v(l, f)], { duration: b.dur, easing: Pe.standard });
}
function D0(o) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (f) => f.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), l = (f, b) => b ? [...f.children].indexOf(b) : -1;
  o.addEventListener("click", (f) => {
    var tt, rt, ct;
    const b = (rt = (tt = f.target).closest) == null ? void 0 : rt.call(tt, r + ">button"), g = b == null ? void 0 : b.parentElement;
    if (!g || qe() || b.disabled) return;
    const v = i(g);
    if (!v || v === b) return;
    const L = l(g, v), T = g.getBoundingClientRect(), C = v.getBoundingClientRect(), B = getComputedStyle(v).borderRadius, k = g.getRootNode(), q = $u(g), J = (ct = q.dataset) == null ? void 0 : ct.k, Q = Uu(g, q), z = performance.now(), O = () => {
      var Z, Wt, U;
      const et = J && !q.isConnected ? (Z = k.querySelector) == null ? void 0 : Z.call(k, '[data-k="' + CSS.escape(J) + '"]') : q, F = et && Yu(et, Q), $ = (Wt = F == null ? void 0 : F.matches) != null && Wt.call(F, r) ? i(F) : null;
      if (!$ || l(F, $) === L) {
        performance.now() - z < 700 && requestAnimationFrame(O);
        return;
      }
      const ht = F.getBoundingClientRect(), kt = $.getBoundingClientRect(), Pt = getComputedStyle($);
      (U = F.querySelector(":scope>.mvSegInd")) == null || U.remove();
      const H = document.createElement("span");
      H.className = "mvSegInd", H.style.cssText = "top:" + (kt.top - ht.top - F.clientTop) + "px;height:" + kt.height + "px;border-radius:" + B + ";background:" + Pt.backgroundColor + ";box-shadow:" + Pt.boxShadow, getComputedStyle(F).position === "static" && (F.style.position = "relative"), F.prepend(H), F.classList.add("mvSegMoving"), Ts(H, C.left - T.left - F.clientLeft, C.width, kt.left - ht.left - F.clientLeft, kt.width), clearTimeout(F._seg), F._seg = setTimeout(() => {
        H.remove(), F.classList.remove("mvSegMoving");
      }, Be.tabs.dur + 20);
    };
    requestAnimationFrame(O);
  }, !0);
}
const Ju = (o) => getComputedStyle(o).placeItems.startsWith("end");
function Ep(o) {
  const r = o.firstElementChild;
  if (qe() || !r || r.classList.contains("still")) return;
  const i = Be.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Pe.standard }), r.style.animation = "none", r.animate(Ju(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Pe[i.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((f, b) => f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + b * 40, easing: Pe.standard, fill: "backwards" }));
}
function E0(o, r) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (qe() || !i || o.hidden || o._closing) {
    r();
    return;
  }
  const l = Be.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + l.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: l.close, easing: Pe.exit, fill: "forwards" });
  const f = i.animate(Ju(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + l.from / 100 + ")" }], { duration: l.close, easing: Pe.exit, fill: "forwards" });
  let b = !1;
  const g = () => {
    b || (b = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((v) => v.cancel()), i.getAnimations().forEach((v) => v.cancel()), r());
  };
  f.finished.then(g, g), setTimeout(g, l.close + 80);
}
const B0 = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function P0(o, r) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", B0), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function R0(o) {
  if (qe()) return;
  const r = Be.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Pe.spring });
  const i = o.querySelector(".mvTick path");
  i && r.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Pe.standard, fill: "backwards" });
}
const cc = (o, r, i, l, f = 1) => (o + r * i * f) * Math.pow(l, f);
function dc(o) {
  const r = Be.drag.squash / 100;
  !o || qe() || !r || o.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Bp(o) {
  if (!o || qe()) return;
  const r = Be.expand;
  [...o.children].slice(1).forEach((i, l) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + l * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Fe = 6e4, ne = 36e5, ga = 864e5, yi = 1440, H0 = 6, N0 = 10 * Fe, Pp = 3, O0 = 3, gs = { day: [6, 22], waking: [7, 23], all: [0, 24] }, I0 = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], F0 = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Rp = (o, r, i, l) => '<circle cx="' + o + '" cy="' + r + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const b = Math.cos(f * Math.PI / 180), g = Math.sin(f * Math.PI / 180), v = i + 2, L = i + 2 + l;
  return "M" + (o + b * v).toFixed(2) + " " + (r + g * v).toFixed(2) + "L" + (o + b * L).toFixed(2) + " " + (r + g * L).toFixed(2);
}).join("") + '"/>', $o = (o) => '<path d="' + F0 + '"' + (o ? ' transform="' + o + '"' : "") + "/>", Uo = (o) => '<path d="' + o + '"/>', Hp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function q0(o, r) {
  const i = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return r ? Hp : Rp(12, 12, 4, 2.5);
    case "clear-night":
      return Hp;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Rp(7.5, 7.5, 2.6, 1.4)) + $o("translate(3.6,3) scale(.85)");
    case "cloudy":
      return $o();
    case "fog":
      return Uo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return $o(i) + Uo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return $o(i) + Uo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return $o(i) + Uo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return $o(i) + Uo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return $o(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return $o(i) + Uo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return $o(i) + Uo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Uo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Uo("M12 8v5M12 16h.01");
  }
}
const pc = (o, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + q0(o, r) + "</svg>", W0 = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), V0 = 30 * Fe, j0 = 7, z0 = 3, Np = 1, G0 = Fe, $0 = 15 * Fe, U0 = 5, re = {
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
}, gt = {
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
}, Ec = 7, Zo = 256, Y0 = 3, Op = 700, Z0 = 1800, Qu = 5 * Fe;
let bs = null, Ip = 0, gi = null;
function K0() {
  return bs && Date.now() - Ip < Qu ? Promise.resolve(bs) : gi || (gi = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var l, f;
    const r = (((l = o.radar) == null ? void 0 : l.past) || []).slice(-6), i = (((f = o.radar) == null ? void 0 : f.nowcast) || []).slice(0, Y0);
    return bs = { host: o.host, frames: [...r.map((b) => ({ ...b, past: !0 })), ...i] }, Ip = Date.now(), bs;
  }).finally(() => {
    gi = null;
  }), gi);
}
function X0(o, r, i, l) {
  const f = Ec, b = 2 ** f, g = o * Math.PI / 180, v = (r + 180) / 360 * b * Zo, L = (1 - Math.log(Math.tan(g) + 1 / Math.cos(g)) / Math.PI) / 2 * b * Zo, T = v - i / 2, C = L - l / 2, B = [];
  for (let k = Math.floor(T / Zo); k <= Math.floor((T + i - 1) / Zo); k++) for (let q = Math.floor(C / Zo); q <= Math.floor((C + l - 1) / Zo); q++)
    q < 0 || q >= b || B.push({ x: (k % b + b) % b, y: q, left: k * Zo - T, top: q * Zo - C });
  return B;
}
const J0 = {
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
}, Q0 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], t1 = Object.keys(gt.phases), e1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Fp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, tf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ws = 100, qp = "µg/m³", a1 = "weather_alerts.air_quality_pollen", Ps = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], o1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, n1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], r1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, i1 = { daily: 1, hourly: 2 }, yt = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Xe = (o, r) => o.replace(/\{(\w+)\}/g, (i, l) => r[l] ?? ""), Xo = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Wp = /* @__PURE__ */ new Map();
function ef(o) {
  let r = Wp.get(o);
  if (r === void 0) {
    const i = "http://www.w3.org/2000/svg", l = document.createElementNS(i, "svg"), f = document.createElementNS(i, "path");
    l.setAttribute("viewBox", "0 0 24 24"), l.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", o), l.append(f), document.body.append(l);
    const b = f.getBBox();
    l.remove();
    const g = Math.max(b.width, b.height), v = g ? 26 * 24 / g : 0, L = v / 24;
    r = g ? "width:" + v.toFixed(2) + "px;height:" + v.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * L).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * L).toFixed(2) + "px" : "", Wp.set(o, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + o + '"/></svg>' : Xo(o);
}
const s1 = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, me = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Vp = /* @__PURE__ */ new Map(), jp = /* @__PURE__ */ new Map(), uc = /* @__PURE__ */ new WeakMap(), l1 = (o) => {
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
function Qt(o, r, i) {
  const l = Number(o);
  if (Number.isNaN(l)) return String(o);
  const f = (r == null ? void 0 : r.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, g = f ? "en-US" : l1(r), v = JSON.stringify([g, b]);
  let L = Vp.get(v);
  if (!L) {
    try {
      L = new Intl.NumberFormat(g, b);
    } catch {
      L = new Intl.NumberFormat(void 0, b);
    }
    Vp.set(v, L);
  }
  return L.format(l);
}
const Pc = (o) => {
  var r;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.language) || (o == null ? void 0 : o.language) || void 0;
};
function c1(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (uc.has(o)) return uc.get(o);
  const r = o.time_format, i = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? o.language : void 0).includes("10") : r === "12";
  return uc.set(o, i), i;
}
const af = (o) => {
  var r, i;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function of(o, r) {
  const i = JSON.stringify([o, r]);
  let l = jp.get(i);
  if (!l) {
    try {
      l = new Intl.DateTimeFormat(o, r);
    } catch {
      l = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    jp.set(i, l);
  }
  return l;
}
const Ze = (o, r) => of(Pc(r), { hour: "numeric", minute: "2-digit", hourCycle: c1(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: af(r) }).format(o), zp = (o, r) => of(Pc(r), { weekday: "short", timeZone: af(r) }).format(o), d1 = (o, r) => o.toLocaleDateString(Pc(r), { weekday: "narrow" }), xe = (o, r) => me(r) ? Qt(Math.round(Number(r)), o.locale) + "°" : "–", fn = (o) => {
  const r = new Date(o);
  return r.setHours(0, 0, 0, 0), r;
}, Tr = (o, r) => o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth() && o.getDate() === r.getDate(), sa = Math.PI / 180, p1 = 2440588, u1 = 2451545, Rs = sa * 23.4397, f1 = 149598e3, h1 = -0.833 * sa, m1 = 0.133 * sa, Gp = 5 * Fe, nf = (o) => o.getTime() / ga - 0.5 + p1 - u1, rf = (o, r) => Math.atan2(Math.sin(o) * Math.cos(Rs) - Math.tan(r) * Math.sin(Rs), Math.cos(o)), sf = (o, r) => Math.asin(Math.sin(r) * Math.cos(Rs) + Math.cos(r) * Math.sin(Rs) * Math.sin(o)), g1 = (o, r) => sa * (280.16 + 360.9856235 * o) - r, b1 = (o, r, i) => Math.asin(Math.sin(r) * Math.sin(i) + Math.cos(r) * Math.cos(i) * Math.cos(o));
function lf(o) {
  const r = sa * (357.5291 + 0.98560028 * o), i = sa * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), l = r + i + sa * 102.9372 + Math.PI;
  return { ra: rf(l, 0), dec: sf(l, 0), dist: f1 };
}
function cf(o) {
  const r = sa * (218.316 + 13.176396 * o), i = sa * (134.963 + 13.064993 * o), l = sa * (93.272 + 13.22935 * o), f = r + sa * 6.289 * Math.sin(i), b = sa * 5.128 * Math.sin(l);
  return { ra: rf(f, b), dec: sf(f, b), dist: 385001 - 20905 * Math.cos(i) };
}
const df = (o, r, i, l) => {
  const f = nf(r), b = o(f);
  return b1(g1(f, sa * -l) - b.ra, sa * i, b.dec);
}, Hs = (o, r, i) => df(lf, o, r, i), w1 = (o, r, i) => df(cf, o, r, i);
function pf(o, r, i, l) {
  const f = {};
  let b = i.getTime(), g = o(i) - r;
  for (let v = b + Gp; v <= l.getTime(); v += Gp) {
    const L = o(new Date(v)) - r;
    if (g < 0 != L < 0) {
      const T = new Date(b + (v - b) * g / (g - L));
      L > 0 ? f.rise ?? (f.rise = T) : f.set ?? (f.set = T);
    }
    b = v, g = L;
  }
  return f;
}
const uf = (o) => {
  const r = fn(o);
  return [r, new Date(r.getTime() + ga)];
}, v1 = (o, r, i) => pf((l) => Hs(l, r, i), h1, ...uf(o)), y1 = (o, r, i) => pf((l) => w1(l, r, i), m1, ...uf(o));
function fc(o) {
  const r = nf(o), i = lf(r), l = cf(r), f = Math.acos(Math.sin(i.dec) * Math.sin(l.dec) + Math.cos(i.dec) * Math.cos(l.dec) * Math.cos(i.ra - l.ra)), b = Math.atan2(i.dist * Math.sin(f), l.dist - i.dist * Math.cos(f)), g = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - l.ra), Math.sin(i.dec) * Math.cos(l.dec) - Math.cos(i.dec) * Math.sin(l.dec) * Math.cos(i.ra - l.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (g < 0 ? -1 : 1) / Math.PI };
}
const x1 = (o) => {
  const r = o * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, Pr = (o) => {
  const r = o == null ? void 0 : o.config;
  return r && me(r.latitude) && me(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function Lr(o, r) {
  var T, C, B;
  const i = Pr(o), l = i ? v1(r, i.lat, i.lon) : {}, f = (T = o == null ? void 0 : o.states) == null ? void 0 : T["sun.sun"], b = fn(r).getTime(), g = (k) => {
    const q = k ? new Date(k) : null;
    return q && Number.isFinite(q.getTime()) && fn(q).getTime() === b ? q : null;
  }, v = g((C = f == null ? void 0 : f.attributes) == null ? void 0 : C.next_rising), L = g((B = f == null ? void 0 : f.attributes) == null ? void 0 : B.next_setting);
  return v && (l.rise = v), L && (l.set = L), l;
}
function k1(o) {
  var l;
  const r = (l = o == null ? void 0 : o.states) == null ? void 0 : l["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const i = Pr(o);
  return i ? Hs(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Yn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Hr = (o, r) => {
  var l;
  const i = (l = o.entities) == null ? void 0 : l[r];
  return !i || !i.hidden && !i.entity_category;
}, He = (o, r, i) => {
  var l, f;
  for (const b of r) {
    const g = (l = o.states) == null ? void 0 : l[b];
    if (!Yn(g)) continue;
    const v = (f = g.attributes) == null ? void 0 : f[i];
    if (v != null && v !== "") return { stateObj: g, value: v };
  }
}, M1 = (o, r) => r.map((i) => {
  var l;
  return (l = o.states) == null ? void 0 : l[i];
}).find(Yn), S1 = (o, r, i) => r.map((l) => {
  var f;
  return (f = o.states) == null ? void 0 : f[l];
}).find((l) => {
  var f;
  return Yn(l) && (((f = l.attributes) == null ? void 0 : f.supported_features) == null || Number(l.attributes.supported_features) & i1[i]);
});
function un(o, r, i) {
  var b, g, v, L;
  const l = ((g = (b = o.config) == null ? void 0 : b.unit_system) == null ? void 0 : g.length) || "", f = (r == null ? void 0 : r.attributes) || {};
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
      return f.temperature_unit || ((L = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : L.temperature) || "";
  }
}
function Ls(o, r, i, l) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [f, ...b] = o.formatEntityAttributeValueToParts(r, i, l).map((g) => g.value);
      return { number: f, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: Qt(l, o.locale), unit: un(o, r, i) };
}
function $p(o, r, i, l) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(r, i, l);
  } catch {
  }
  const f = Ls(o, r, i, l);
  return (f.number + " " + f.unit).trim();
}
function Yo(o, r) {
  var l;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(r);
  } catch {
  }
  const i = (l = r.attributes) == null ? void 0 : l.unit_of_measurement;
  return J0[r.state] || (i && me(r.state) ? Qt(r.state, o.locale) + " " + i : r.state);
}
function dn(o, r) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((i = r.attributes) == null ? void 0 : i.friendly_name) || r.entity_id;
}
const Up = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", vs = (o) => tf.find(([, r]) => o <= r)[0];
function _1(o, r) {
  if (r === "Beaufort") return Math.round(o);
  const i = r ? o1[r] : void 0;
  if (i === void 0) return;
  const l = n1.findIndex((f) => o * i < f);
  return l === -1 ? 12 : l;
}
const Yp = (o, r) => {
  const i = r ? r1[r] : void 0;
  return i === void 0 ? void 0 : o * i;
}, Zp = (o) => Object.keys(o.states || {}).find((r) => {
  var i, l;
  return r.startsWith("sensor.") && ((l = (i = o.entities) == null ? void 0 : i[r]) == null ? void 0 : l.platform) === "moon";
}), hc = (o) => Object.values(o.states || {}).filter((r) => {
  var i, l;
  return r.entity_id.startsWith("sensor.") && ((i = r.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((l = r.attributes) == null ? void 0 : l.state_class) ?? "") && Hr(o, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function C1(o) {
  var i;
  const r = {};
  for (const [l, f] of Object.entries(((i = o == null ? void 0 : o.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      r[l] = f.categories;
      continue;
    }
    for (const [b, g] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) r[b] = g == null ? void 0 : g.categories;
  }
  return r;
}
const ff = (o, r, i) => {
  var f, b, g;
  const l = (b = (f = o.entities) == null ? void 0 : f[i]) == null ? void 0 : b.platform;
  return !!l && !!((g = r[l]) != null && g.includes(a1));
};
function A1(o, r) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((l) => {
    var f;
    return l.entity_id.startsWith("sensor.") && Ps.includes(((f = l.attributes) == null ? void 0 : f.device_class) ?? "") && Hr(o, l.entity_id) && ff(o, r, l.entity_id);
  }).sort((l, f) => l.entity_id.localeCompare(f.entity_id)).forEach((l) => {
    i.has(l.attributes.device_class) || i.set(l.attributes.device_class, l.entity_id);
  }), Ps.map((l) => i.get(l)).filter(Boolean);
}
const T1 = (o, r) => Object.values(o.states || {}).filter((i) => {
  var l, f;
  return i.entity_id.startsWith("sensor.") && Hr(o, i.entity_id) && ff(o, r, i.entity_id) && (((f = (l = o.entities) == null ? void 0 : l[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Kp(o, r, i) {
  const l = Math.max(r - o, 1e-6), f = i[i.length - 1], b = i.find((T) => l / T <= 4) ?? f * Math.ceil(l / (4 * f)), g = Math.floor(o / b) * b;
  let v = Math.ceil(r / b) * b;
  v === g && (v = g + b);
  const L = [];
  for (let T = g; T <= v + b / 1e3; T += b) L.push(T);
  return { min: g, max: v, ticks: L };
}
const L1 = (o, r, i) => {
  const l = (g) => [1, 3, 5].map((v) => parseInt(g.slice(v, v + 2), 16)), f = l(o), b = l(r);
  return "rgb(" + f.map((g, v) => Math.round(g + (b[v] - g) * i)).join(", ") + ")";
}, D1 = (o, r, i, l) => {
  const f = i * Math.abs(1 - 2 * l), b = l < 0.5 ? 0 : 1;
  return "M " + o + " " + (r - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (r + i) + " A " + f + " " + i + " 0 0 " + b + " " + o + " " + (r - i) + " Z";
}, ra = ({ icon: o, name: r, sub: i, visual: l, double: f, backdrop: b, cls: g, zone: v, callouts: L }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (v != null ? " wbZoned" : "") + (g ? " " + g : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + ef(o) + '</div><div class="wbText"><span class="wbName">' + yt(r) + "</span>" + (i ? '<span class="wbSub">' + yt(i) + "</span>" : "") + "</div></div>" + (v != null ? '<div class="wbZone">' + v + "</div>" + (L != null && L.length ? '<div class="wbCallouts">' + L.slice(0, 3).map((T) => Array.isArray(T) ? '<span class="wbCallout"><span>' + yt(T[0]) + "</span><span>" + yt(T[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(T) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + l + "</div>") + "</div>", ys = (o) => '<div class="wbZoneM">' + o + "</div>", Va = (o, r) => '<div class="wbValue"><span class="wbNum">' + yt(o) + "</span>" + (r ? '<span class="wbUnitV">' + yt(r) + "</span>" : "") + "</div>";
function E1(o) {
  const r = o.max - o.min || 1, i = (v) => 100 - (Math.min(o.max, Math.max(o.min, v)) - o.min) / r * 100, l = (v) => v / yi * 100 + "%", f = (v) => v.map((L) => L.t + "," + i(L.v)).join(" "), b = o.kind === "line" ? o.points : [];
  let g = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((v) => '<span class="wbDcSunMark" style="left:' + l(v.t) + '">' + Xo(v.rise ? re.sunsetUp : re.sunsetDown) + yt(v.label) + "</span>").join("") + "</div>";
  return g += '<div class="wbDcY">' + o.ticks.map((v) => '<span style="top:' + i(v) + '%">' + yt(o.format(v)) + "</span>").join("") + "</div>", g += '<div class="wbDcPlot"><svg viewBox="0 0 ' + yi + ' 100" preserveAspectRatio="none">' + o.night.map(([v, L]) => '<rect class="wbDcNight" x="' + v + '" y="0" width="' + (L - v) + '" height="100"></rect>').join("") + o.ticks.map((v) => '<line class="wbDcGrid" x1="0" x2="' + yi + '" y1="' + i(v) + '" y2="' + i(v) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((v) => '<line class="wbDcSunLine" x1="' + v.t + '" x2="' + v.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + f(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((v) => v.v > 0).map((v) => '<i class="wbDcBar" style="left:' + l(v.t + 12) + ";width:" + l(36) + ";height:" + (100 - i(v.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + l(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + l(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + yt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + yt(o.note) + "</span>" : "") + "</div>", g += '<div class="wbDcX">' + o.hours.map((v) => '<span class="' + (v.minor ? "wbMinor" : "") + '" style="left:' + l(v.t) + '">' + yt(v.label) + "</span>").join("") + "</div></div>", g;
}
function Xp(o, r, i = 120, l = 300) {
  const g = o.map((O) => O.value), v = Math.min(...g), L = Math.max(...g), T = L - v || 1, C = (O) => O / (o.length - 1) * l, B = (O) => 18 + (1 - (O - v) / T) * (i - 18 - 18), k = o.map((O, tt) => [C(tt), B(O.value)]), q = k.length > 2 ? Zu(k) : "M" + k.map((O) => O[0].toFixed(1) + " " + O[1].toFixed(1)).join("L"), J = g.indexOf(L), Q = g.indexOf(v), z = (O) => O === 0 ? "start" : O === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + l + " " + i + '" aria-hidden="true">' + Ku(l, 18, i - 18) + ('<path class="wbArea" d="' + q + "L" + l + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + q + '" vector-effect="non-scaling-stroke"></path><text x="' + C(J) + '" y="' + (B(L) - 6) + '" text-anchor="' + z(J) + '">' + yt(r(L)) + '</text><text x="' + C(Q) + '" y="' + (B(v) + 14) + '" text-anchor="' + z(Q) + '">' + yt(r(v)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + yt(o[0].label) + '</text><text x="' + l + '" y="' + i + '" text-anchor="end">' + yt(o[o.length - 1].label) + "</text></svg>";
}
function B1(o, r) {
  const b = o.map((B) => B.value).concat([]), g = Math.min(...b) - 2, v = Math.max(...b) + 1, L = v - g || 1, T = 300 / o.length, C = (B) => (1 - (B - g) / L) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((B, k) => '<rect class="wbBar' + (B.now ? " wbNowBar" : "") + '" x="' + (k * T + T * 0.2) + '" y="' + C(B.value) + '" width="' + T * 0.6 + '" height="' + (104 - C(B.value)) + '" rx="6"></rect><text x="' + (k * T + T / 2) + '" y="120" text-anchor="middle">' + yt(B.label) + "</text>").join("") + "</svg>";
}
const P1 = [
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
], R1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Jp = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], H1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let N1 = 0;
function Qp(o, { getHass: r, entityId: i, style: l = "bitmap", motion: f = !0, cards: b, onOpen: g, hoursWindow: v, radarSource: L } = {}) {
  var Tn, Vi;
  const T = "wb" + ++N1 + "-", C = document.createElement("div");
  C.className = "wb", C.dataset.style = l;
  const B = document.createElement("div");
  B.className = "wbBento", C.appendChild(B), o.replaceChildren(C);
  const k = document.createElement("div");
  k.className = "wb wbPopup", k.dataset.style = l, k.hidden = !0;
  const q = ["aq_tile", "pollen_tile", "radar_tile"], J = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((c) => !b || b.includes(c)), Q = { current: "wide", hourly: "wide", compared_to_average: "double" }, z = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], O = {};
  J.forEach((c) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = c, m.dataset.size = Q[c] || "tile", m.hidden = !0, z.includes(c) && (m.dataset.xl = ""), B.appendChild(m), O[c] = { el: m, html: null };
  });
  let tt = !1, rt = null, ct = 0, et = -1, F = !1, $ = null, ht = "";
  const kt = "homecore-next-view", Pt = (() => {
    try {
      return localStorage.getItem(kt);
    } catch {
      return null;
    }
  })(), H = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Pt === "bars" ? "bars" : "strip", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Wt = /* @__PURE__ */ new Date(), U = /* @__PURE__ */ new Date();
  const st = {}, lt = {}, dt = {}, nt = (c) => {
    var m;
    return ((m = dt[c]) == null ? void 0 : m.forecast) ?? [];
  }, N = (c, m) => {
    var w;
    return dt[m] ? (w = c.states) == null ? void 0 : w[dt[m].entityId] : void 0;
  };
  function vt(c) {
    const m = lt[c];
    m && (m.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete lt[c]), dt[c] && delete dt[c];
  }
  function mt(c, m, w) {
    var R;
    if (typeof ((R = c.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const y = { entityId: w };
    try {
      y.unsub = Promise.resolve(c.connection.subscribeMessage((V) => {
        tt || lt[m] !== y || (V != null && V.forecast ? dt[m] = { entityId: w, forecast: V.forecast } : delete dt[m], Ka());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: w }));
    } catch (V) {
      y.unsub = Promise.reject(V);
    }
    y.unsub.catch(() => {
      lt[m] === y && delete lt[m];
    }), lt[m] = y;
  }
  function Mt(c, m) {
    var w;
    for (const y of ["daily", "hourly"]) {
      const R = S1(c, m, y);
      ((w = lt[y]) == null ? void 0 : w.entityId) !== (R == null ? void 0 : R.entity_id) && (vt(y), R && mt(c, y, R.entity_id));
    }
  }
  const Ft = (c, m, w, y = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: y,
    no_attributes: y,
    significant_changes_only: !1
  });
  async function ce(c, m) {
    var Y, X, j;
    const w = He(c, m, "pressure");
    if (!w) return;
    const y = w.stateObj.entity_id, R = await Ft(c, y, new Date(Date.now() - 3 * ne)), V = (j = (X = (Y = R == null ? void 0 : R[y]) == null ? void 0 : Y.find((at) => {
      var it;
      return typeof ((it = at.a) == null ? void 0 : it.pressure) == "number";
    })) == null ? void 0 : X.a) == null ? void 0 : j.pressure;
    Z.pressureHistory = typeof V == "number" ? { entityId: y, value: V } : void 0;
  }
  async function ea(c, m) {
    var X;
    const w = He(c, m, "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, R = fn(/* @__PURE__ */ new Date()), V = await Ft(c, y, new Date(R.getTime() - j0 * ga)), Y = /* @__PURE__ */ new Map();
    for (const j of (V == null ? void 0 : V[y]) ?? []) {
      const at = (X = j.a) == null ? void 0 : X.temperature, it = new Date((j.lc ?? j.lu) * 1e3);
      if (typeof at != "number" || it >= R) continue;
      const ut = it.toDateString();
      Y.set(ut, Math.max(Y.get(ut) ?? -1 / 0, at));
    }
    Z.temperatureHistory = { entityId: y, dailyHighs: [...Y.values()], days: [...Y.entries()].map(([j, at]) => ({ date: new Date(j), high: at })) };
  }
  async function ba(c) {
    const m = hc(c);
    if (!m) return;
    const w = await c.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: m, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function wa() {
    const c = r == null ? void 0 : r();
    if (!c || tt || typeof c.callWS != "function") return;
    const m = Nt(c);
    Z.lastFetch = Date.now(), [ce(c, m), ea(c, m), ba(c)].forEach((w) => w.then(() => Ka(), () => {
    }));
  }
  async function Ao() {
    const c = r == null ? void 0 : r();
    if (!c) return;
    const m = He(c, Nt(c), "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, y = fn(/* @__PURE__ */ new Date());
    try {
      const R = await Ft(c, w, y), V = (Y) => ((R == null ? void 0 : R[w]) ?? []).map((X) => {
        var j;
        return { time: X.lu * 1e3, value: (j = X.a) == null ? void 0 : j[Y] };
      }).filter((X) => typeof X.value == "number");
      Z.todayHistory = { day: y.toDateString(), fetched: Date.now(), temperature: V("temperature"), humidity: V("humidity") }, Ka();
    } catch {
    }
  }
  async function Xn(c) {
    const m = r == null ? void 0 : r();
    if (m)
      try {
        const w = await Ft(m, c, new Date(Date.now() - 24 * ne), !0), y = ((w == null ? void 0 : w[c]) ?? []).filter((V) => me(V.s)), R = Math.max(1, Math.ceil(y.length / 48));
        Z.aqHistory = { entityId: c, points: y.filter((V, Y) => Y % R === 0).map((V) => ({ label: Ze(new Date(V.lu * 1e3), m), value: Number(V.s) })) }, Ka();
      } catch {
      }
  }
  function To(c) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => c.callWS({ type: "integration/descriptions" })).then((m) => {
      Z.categories = C1(m);
    }, () => {
      Z.categories = {};
    }).then(() => Ka()));
  }
  function Nt(c) {
    var w;
    const m = Object.keys(c.states || {}).filter((y) => y.startsWith("weather.") && Hr(c, y)).sort();
    return i && ((w = c.states) != null && w[i]) ? [i, ...m.filter((y) => y !== i)] : m;
  }
  const fe = (c) => Z.categories ? { air: A1(c, Z.categories), pollen: T1(c, Z.categories) } : { air: [], pollen: [] };
  function Lo(c, m, w, y) {
    if (l === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + pc(c, w || c === "clear-night") + "</span>";
    if (l === "smooth") {
      const R = f0(c, m === 90, w, T + "g-" + y);
      return '<span class="wbWx wbS' + m + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + yt(Bu(c, w)) + '" data-size="' + m + '"></canvas></span>';
  }
  const wt = () => nt("daily").filter((c) => c.templow != null).slice(0, H0);
  function La(c, m) {
    const w = new Date(m.datetime), y = /* @__PURE__ */ new Date();
    return Tr(w, y) ? gt.today : Tr(w, new Date(y.getTime() + ga)) ? gt.tomorrow : zp(w, c);
  }
  const Or = (c, m, w) => w === 0 ? La(c, m) : zp(new Date(m.datetime), c);
  function Mi(c, m) {
    var it, ut, Rt, Tt;
    const w = M1(c, m);
    if (!w) return "";
    const y = wt(), R = H.openDay !== void 0 ? y[H.openDay] : void 0, V = He(c, m, "temperature"), Y = y[0], X = Y && Tr(new Date(Y.datetime), /* @__PURE__ */ new Date()), j = ((ut = (it = c.config) == null ? void 0 : it.unit_system) == null ? void 0 : ut.temperature) || ((Rt = w.attributes) == null ? void 0 : Rt.temperature_unit) || "";
    let at = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (g ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(gt.openPage) + '">' : '<div class="wbCurrent">') + Lo(w.state, 90, k1(c), "now") + '<div class="wbTempBlock">' + (V && me(V.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(Qt(Math.round(Number(V.value)), c.locale)) + '</span><span class="wbUnit">' + yt(j) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((Tt = c.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (g ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(Yo(c, w)) + "</div>" + (X && Y.templow != null ? '<div class="wbRange">' + yt(Xe(gt.range, { high: xe(c, Y.temperature), low: xe(c, Y.templow) })) + "</div>" : "") + "</div></div>";
    if (at += Si(c) + Da(c), y.length) {
      const At = X && V && me(V.value) ? xe(c, V.value) : "", Gt = (Dt, pt, Ot) => Dt === 0 && At ? '<span class="wbAsDay">' + yt(pt) + '</span><span class="wbAsNow">' + yt(Ot) + "</span>" : yt(pt);
      at += '<div class="wbColumns" role="list">' + y.map((Dt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + Gt(pt, Or(c, Dt, pt), gt.now) + "</span>" + Lo(Dt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + Gt(pt, xe(c, Dt.temperature), At) + '</span><span class="wbLo">' + yt(xe(c, Dt.templow)) + "</span></span></button>").join("") + "</div>", at += '<div class="wbHalves" role="list">' + y.map((Dt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Lo(Dt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + yt(La(c, Dt)) + '</span><span class="wbSub">' + yt(Xe(gt.highLow, { high: xe(c, Dt.temperature), low: xe(c, Dt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return at + "</div>" + (R ? Ir(c, m, R) : "") + "</div>";
  }
  const Jn = {
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
  }, gn = {
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
  function ke(c) {
    const m = Date.now(), w = nt("hourly").filter((ut) => new Date(ut.datetime).getTime() > m - ne).slice(0, 13);
    if (w.length < 2) return "";
    const y = (ut) => Ze(new Date(ut.datetime), c), R = (ut) => Jn[ut.condition] || "", V = (ut) => gn[ut.condition] || ut.condition;
    let Y = R(w[0]);
    if (!Y) return "";
    let X = w[0], j = 0;
    for (const ut of w.slice(1))
      j === 2 || V(ut) === V(X) || !R(ut) || (Y += (j ? " and " : ", ") + R(ut) + " from " + y(ut), X = ut, j++);
    const at = Number(w[0].temperature), it = w.filter((ut) => me(ut.temperature));
    if (me(at) && it.length) {
      const ut = it.reduce((Tt, At) => Number(At.temperature) < Number(Tt.temperature) ? At : Tt), Rt = it.reduce((Tt, At) => Number(At.temperature) > Number(Tt.temperature) ? At : Tt);
      at - Number(ut.temperature) >= 3 ? Y += ", down to " + xe(c, ut.temperature) + " by " + y(ut) : Number(Rt.temperature) - at >= 3 && (Y += ", up to " + xe(c, Rt.temperature) + " by " + y(Rt));
    }
    return Y[0].toUpperCase() + Y.slice(1) + ".";
  }
  const Si = (c) => {
    const m = ke(c);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + yt(m) + "</p></div>" : "";
  };
  function Da(c) {
    const [m, w] = gs[v == null ? void 0 : v()] || gs.day, y = Date.now(), R = nt("hourly").filter((V) => {
      const Y = new Date(V.datetime), X = Y.getHours();
      return Y.getTime() > y - ne / 2 && X >= m && X < w && me(V.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((V, Y) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(Ze(new Date(V.datetime), c)) + "</span>" + Lo(V.condition ?? "cloudy", 40, V.is_daytime === !1, "hr" + Y) + '<span class="wbHourTemp">' + yt(xe(c, V.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Xt(c) {
    const m = c.getTime(), w = Date.now() - ne;
    return nt("hourly").filter((y) => {
      const R = new Date(y.datetime).getTime();
      return R >= m && R < m + ga && R > w;
    });
  }
  function Do(c) {
    if (!c.length) return ["temperature"];
    const m = ["temperature"];
    return c.some((w) => w.precipitation != null || w.precipitation_probability != null) && m.push("precipitation"), c.some((w) => w.humidity != null) && m.push("humidity"), m;
  }
  function Ir(c, m, w) {
    const y = fn(new Date(w.datetime)), R = Xt(y), V = Do(R), Y = V.includes(H.dayMode) ? H.dayMode : "temperature", X = (j) => j === "humidity" ? gt.humidity : gt.modes[j];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Lo(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(La(c, w)) + '</span><span class="wbSub">' + yt(Xe(gt.highLow, { high: xe(c, w.temperature), low: xe(c, w.templow) })) + '</span></div><button class="wbBack" title="' + yt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Xo(re.back) + "</button></div>" + (V.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + V.map((j) => '<button aria-pressed="' + (j === Y) + '" data-wb="day-mode" data-mode="' + j + '" data-wb-focus="day-mode-' + j + '">' + yt(X(j)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + E1(zt(c, m, y, R, Y)) + "</div></div>";
  }
  function zt(c, m, w, y, R) {
    var ji;
    const V = w.getTime(), Y = Date.now(), X = Tr(w, /* @__PURE__ */ new Date()), j = (te) => (te - V) / Fe, at = (te) => Ze(new Date(te), c), it = (te) => new Date(te.datetime).getTime(), ut = [0, 3, 6, 9, 12, 15, 18, 21].map((te) => ({ t: te * 60, label: at(V + te * ne), minor: te % 6 !== 0 })), { rise: Rt, set: Tt } = Lr(c, w), At = [], Gt = [];
    Rt && (At.push({ t: j(Rt.getTime()), label: at(Rt.getTime()), rise: !0 }), Gt.push([0, j(Rt.getTime())])), Tt && (At.push({ t: j(Tt.getTime()), label: at(Tt.getTime()), rise: !1 }), Gt.push([j(Tt.getTime()), yi]));
    const Dt = Pr(c);
    !Rt && !Tt && Dt && Hs(new Date(V + ga / 2), Dt.lat, Dt.lon) < 0 && Gt.push([0, yi]);
    const pt = X ? j(Y) : void 0, Ot = { hours: ut, sun: At, night: Gt };
    if (!y.length && !X) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (R === "precipitation") {
      const te = y.some((Ke) => Ke.precipitation_probability != null), Xa = y.map((Ke) => ({ t: j(it(Ke)), v: Number((te ? Ke.precipitation_probability : Ke.precipitation) ?? 0) })), Ja = un(c, N(c, "hourly"), "precipitation"), fr = Math.max(0, ...Xa.map((Ke) => Ke.v)), Jr = te ? 100 : Kp(0, Math.max(fr, 1), [0.5, 1, 2, 5, 10]).max, zi = (Ke) => te ? Qt(Ke, c.locale) + "%" : Qt(Ke, c.locale, { maximumFractionDigits: 1 }) + " " + Ja, rn = Xa.find((Ke) => Ke.v === fr);
      return {
        ...Ot,
        kind: "bars",
        points: Xa,
        min: 0,
        max: Jr,
        ticks: [0, Jr / 2, Jr],
        format: zi,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: rn && fr > 0 ? { t: rn.t + 30, v: rn.v, label: zi(rn.v) } : void 0,
        note: fr > 0 ? void 0 : gt.noRain
      };
    }
    const It = R === "humidity" ? "humidity" : "temperature", Se = y.filter((te) => te[It] != null && (!X || it(te) >= Y)).map((te) => ({ t: j(it(te)), v: Number(te[It]) }));
    let Ct, $t = [];
    if (pt !== void 0) {
      const te = He(c, m, It);
      te && me(te.value) && (Ct = { t: pt, v: Number(te.value) }, Se.unshift(Ct)), $t = (((ji = Z.todayHistory) == null ? void 0 : ji.day) === w.toDateString() ? Z.todayHistory[It] : []).filter((Ja) => Ja.time <= Y).map((Ja) => ({ t: Math.max(0, j(Ja.time)), v: Ja.value })), Ct && $t.length && $t.push(Ct);
    }
    const he = [...$t, ...Se];
    if (!he.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const da = he.map((te) => te.v), mo = Kp(Math.min(...da), Math.max(...da), It === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    It === "humidity" && (mo.min = Math.max(0, mo.min), mo.max = Math.min(100, mo.max), mo.ticks = mo.ticks.filter((te) => te >= 0 && te <= 100));
    const Xr = It === "humidity" ? (te) => Qt(te, c.locale) + "%" : (te) => xe(c, te), go = It === "temperature" ? he.reduce((te, Xa) => Xa.v > te.v ? Xa : te) : void 0;
    return { ...Ot, kind: "line", points: Se, past: $t, ...mo, format: Xr, now: Ct, peak: go ? { ...go, label: Xr(go.v) } : void 0 };
  }
  function la(c) {
    const m = ["temperature"];
    return c.some((w) => w.precipitation_probability != null || w.precipitation != null) && m.push("precipitation"), c.some((w) => w.wind_speed != null) && m.push("wind"), m;
  }
  function _i(c, m, w = Pp) {
    var V, Y;
    const y = nt("daily"), R = [];
    for (let X = 0; X < w; X++) for (const j of [!1, !0]) {
      const at = c.getTime() + (X * 24 + (j ? 12 : 0)) * ne, it = at + 12 * ne, ut = {};
      m.forEach((Tt) => {
        const At = new Date(Tt.datetime).getTime();
        Tt.condition && At >= at && At < it && (ut[Tt.condition] = (ut[Tt.condition] ?? 0) + (W0.has(Tt.condition) ? 2 : 1));
      });
      let Rt = (V = Object.entries(ut).sort((Tt, At) => At[1] - Tt[1])[0]) == null ? void 0 : V[0];
      if (!Rt) {
        const Tt = new Date(at).toDateString();
        Rt = ((Y = y.find((At) => new Date(At.datetime).toDateString() === Tt)) == null ? void 0 : Y.condition) ?? "cloudy";
      }
      R.push({ cond: j && Rt === "sunny" ? "clear-night" : Rt, night: j });
    }
    return R;
  }
  function Ci(c, m, w) {
    const y = N(c, "hourly"), R = m.precipitation_probability != null ? Qt(m.precipitation_probability, c.locale) + "%" : "", V = m.precipitation ? Qt(m.precipitation, c.locale) + " " + un(c, y, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return R ? [R, V] : [V || "–", ""];
      case "wind":
        return m.wind_speed != null ? [Qt(Math.round(m.wind_speed), c.locale), un(c, y, "wind_speed")] : ["–", ""];
      default:
        return [xe(c, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Ea(c, m, w) {
    const [y, R] = gs[v == null ? void 0 : v()] || gs.day, V = [];
    for (let Y = 0; Y < 4 && V.length < 3; Y++) {
      const X = /* @__PURE__ */ new Date();
      X.setHours(0, 0, 0, 0), X.setDate(X.getDate() + Y);
      const j = new Date(X);
      j.setHours(R, 0, 0, 0), X.setHours(y, 0, 0, 0), !(j.getTime() <= w || !m.some((at) => {
        const it = new Date(at.datetime).getTime();
        return it >= X.getTime() && it <= j.getTime();
      })) && V.push({ a: X.getTime(), b: j.getTime(), label: La(c, { datetime: X.toISOString() }) });
    }
    return V;
  }
  function Ae(c, m, w, y, R, V) {
    const Y = (w.b - m.a) / ne, X = (pt) => ((pt - m.a) / ne).toFixed(3), j = 80, at = 32, it = [];
    for (const pt = new Date(m.a - ga); pt.getTime() < w.b + ga; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ot, set: It } = Lr(c, new Date(pt));
      Ot && It && it.push({ rise: Ot.getTime(), set: It.getTime() });
    }
    const ut = (pt, Ot) => j - (j - at) * Math.sin(Math.PI * (Ot - pt.rise) / (pt.set - pt.rise)), Rt = (pt) => !it.some((Ot) => pt >= Ot.rise && pt <= Ot.set);
    let Tt = "", At = "", Gt = "";
    it.forEach((pt, Ot) => {
      const It = [];
      for (let Ct = pt.rise; Ct <= pt.set; Ct += 15 * Fe) It.push(X(Ct) + "," + ut(pt, Ct).toFixed(2));
      It.push(X(pt.set) + "," + j), Tt += '<polyline class="wbLineArc" points="' + It.join(" ") + '"/>';
      const Se = it[Ot + 1];
      Se && (Tt += '<rect class="wbLineNight" x="' + X(pt.set) + '" y="0" width="' + ((Se.rise - pt.set) / ne).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([Ct, $t]) => {
        Ct < m.a || Ct > w.b || (At += '<line class="wbLineEdge" x1="' + X(Ct) + '" x2="' + X(Ct) + '" y1="0" y2="100"/>', Gt += '<span class="wbLineTime" style="left:' + V(Ct) + '">' + $t + " " + yt(Ze(new Date(Ct), c)) + "</span>");
      });
    });
    const Dt = it.find((pt) => R >= pt.rise && R <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Y + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + At + '<line class="wbLineHorizon" x1="0" x2="' + Y + '" y1="' + j + '" y2="' + j + '"/></svg>' + Gt + (Dt ? '<span class="wbLineNow" style="left:' + V(R) + ";top:" + ut(Dt, R) + '%">' + pc("sunny", !1) + "</span>" : "") + y.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + V(pt.t) + '">' + pc(pt.entry.condition ?? "cloudy", Rt(pt.t)) + "</span>").join("");
  }
  function Ai(c, m) {
    delete st.hourly;
    const w = H.hourlyView === "bars" ? "bars" : "strip", y = '<div class="wbHeader"><h2 class="wbTitle">' + yt(w === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(gt.showAs) + '">' + ["strip", "bars"].map((Ct) => '<button aria-pressed="' + (Ct === w) + '" data-wb="hourly-view" data-view="' + Ct + '" data-wb-focus="hourly-view-' + Ct + '">' + yt(gt.views[Ct]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return Ti(c, m, y);
    const R = nt("hourly"), V = Math.floor(Date.now() / Fe) * Fe, Y = R.filter((Ct) => new Date(Ct.datetime).getTime() > V - ne);
    if (!Y.length) return "";
    const X = la(Y), j = X.includes(H.hourlyMode) ? H.hourlyMode : "temperature", at = Ea(c, R, V);
    if (!at.length) return "";
    const it = at[0], ut = at[at.length - 1], Rt = (it.b - it.a) / ne, Tt = (Ct) => "calc(var(--wb-u) * " + ((Ct - it.a) / ne).toFixed(3) + ")", At = new Date(it.a);
    At.setHours(6, 0, 0, 0), At.getTime() > it.a && At.setDate(At.getDate() - 1);
    const Gt = Math.ceil((ut.b - At.getTime()) / ga);
    l !== "line" && (st.hourly = { segs: _i(At, R, Gt), seed: At.getDate(), columns: Gt });
    const Dt = (Ct) => Ct === it.a ? " wbFirst" : Ct === ut.b ? " wbLast" : "", pt = [];
    for (let Ct = it.a; Ct < ut.b; ) {
      const $t = new Date(Ct);
      $t.setHours(24, 0, 0, 0);
      const he = Math.min($t.getTime(), ut.b);
      pt.push({ a: Ct, b: he, label: La(c, { datetime: new Date(Ct).toISOString() }), page: at.find((da) => da.a >= Ct && da.a < he) || at.find((da) => da.a < he && da.b > Ct) }), Ct = he;
    }
    const Ot = V > it.a && V < ut.b ? Math.floor((V - it.a) / (2 * ne)) * 2 : 0, It = [];
    for (let Ct = it.a; Ct <= ut.b; Ct += ne) {
      const $t = new Date(Ct), he = Dt(Ct);
      !he && $t.getHours() % O0 || !he && (Math.abs(it.a - Ct) < 2 * ne || Math.abs(ut.b - Ct) < 2 * ne) || V >= it.a && Math.abs(Ct - V) < 1.5 * ne && !he || It.push({ t: Ct, edge: he, label: Ze($t, c), entry: Ct >= V - ne ? R.find((da) => new Date(da.datetime).getTime() === Ct) : void 0 });
    }
    V > it.a && V < it.b && It.push({ t: V, edge: V - it.a < ne ? " wbFirst" : it.b - V < ne ? " wbLast" : "", label: gt.now, entry: Y[0], now: !0 });
    const Se = (Ct, $t) => '<span class="wbMark' + Ct.edge + (Ct.now ? " wbNowMark" : "") + '" style="left:' + Tt(Ct.t) + '">' + $t + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + y + (X.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + X.map((Ct) => '<button aria-pressed="' + (Ct === j) + '" data-wb="hourly-mode" data-mode="' + Ct + '" data-wb-focus="hourly-mode-' + Ct + '">' + yt(gt.modes[Ct]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(gt.nextHours) + '" data-span="' + Rt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Rt + ");width:calc(var(--wb-u) * " + (ut.b - it.a) / ne + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ut.b - it.a) / (2 * ne)) + 1)].map((Ct, $t) => '<i class="wbSnap" style="left:' + Tt(it.a + $t * 2 * ne) + '"></i>').join("") + '<div class="wbDays">' + pt.map((Ct, $t) => {
      var he;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ct.b - Ct.a) / ne).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + ($t === 0 ? Ot : ((((he = Ct.page) == null ? void 0 : he.a) ?? Ct.a) - it.a) / ne) + '" data-wb-focus="hours-day-' + $t + '">' + yt(Ct.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + It.map((Ct) => Se(Ct, yt(Ct.label))).join("") + "</div>" + (l === "line" ? '<div class="wbSky wbLineSky">' + Ae(c, it, ut, It, V, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(At.getTime()) + ";width:calc(var(--wb-u) * " + Gt * 24 + ')"><canvas data-wb-strip="hourly"' + (l === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (V > it.a ? '<i class="wbPast" style="width:' + Tt(Math.min(V, ut.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(V) + '"></i>' : "") + pt.slice(1).map((Ct) => '<i class="wbMidnight" style="left:' + Tt(Ct.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + It.map((Ct) => {
      if (!Ct.entry) return "";
      const [$t, he] = Ci(c, Ct.entry, j);
      return Se(Ct, '<span class="wbPrimaryV">' + yt($t) + '</span><span class="wbSecondary">' + yt(he) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function bn(c) {
    const m = I0, w = m.findIndex(([j]) => j >= c);
    if (w <= 0) return "rgb(" + m[w < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [y, R] = m[w - 1], [V, Y] = m[w], X = (c - y) / (V - y);
    return "rgb(" + R.map((j, at) => Math.round(j + (Y[at] - j) * X)).join(",") + ")";
  }
  function Ti(c, m, w) {
    var Tt;
    const y = nt("daily").filter((At) => me(At.templow) && me(At.temperature)).slice(0, 7);
    if (!y.length) return "";
    const R = Math.min(...y.map((At) => Number(At.templow))), V = Math.max(...y.map((At) => Number(At.temperature))), Y = Math.max(1, V - R), X = (At) => Math.max(0, Math.min(100, (At - R) / Y * 100)).toFixed(2), j = /F/.test(un(c, N(c, "daily"), "temperature")), at = (At) => j ? (At - 32) / 1.8 : At, it = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((At) => bn(at(R + At * Y)) + " " + At * 100 + "%").join(",") + ")", ut = (Tt = He(c, m, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (la(nt("hourly").filter((At) => new Date(At.datetime).getTime() > Date.now() - ne)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + y.map((At, Gt) => {
      const Dt = La(c, At), pt = Tr(new Date(At.datetime), /* @__PURE__ */ new Date()), Ot = Number(At.templow), It = Number(At.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Xe(gt.rangeRow, { day: Dt, low: xe(c, Ot), high: xe(c, It) })) + '"><span class="wbRangeDay">' + yt(Dt) + "</span>" + Lo(At.condition, 40, !1, "r" + Gt) + '<span class="wbRangeLo">' + yt(xe(c, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + it + ";clip-path:inset(0 " + (100 - X(It)) + "% 0 " + X(Ot) + '% round 4px)"></i>' + (pt && me(ut) ? '<i class="wbRangeNow" style="left:' + X(Number(ut)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(xe(c, It)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Qn = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Li = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Eo = (c, m) => {
    if (m <= c[0][0]) return c[0][1];
    for (let w = 1; w < c.length; w++) if (m <= c[w][0]) {
      const [y, R] = c[w - 1], [V, Y] = c[w];
      return L1(R, Y, (m - y) / (V - y));
    }
    return c[c.length - 1][1];
  }, Ns = (c, m, w) => {
    if (!m || !w) return Qn[5][1];
    const y = (c.getTime() - w.getTime()) / Fe;
    return y >= -90 ? Eo(Li, y) : Eo(Qn, (c.getTime() - m.getTime()) / Fe);
  }, io = (c) => (c >= 60 ? Math.floor(c / 60) + "h " : "") + c % 60 + "m";
  function Te(c) {
    const m = Wt, { rise: w, set: y } = Lr(c, m), R = w && y ? Math.round((y.getTime() - w.getTime()) / Fe) : 0, V = Math.floor(R / 60), Y = R % 60, X = (Se) => Se ? Ze(Se, c) : "–", j = new Date(m);
    j.setDate(j.getDate() + 1);
    const at = Lr(c, j), it = at.rise && at.set ? Math.round((at.set.getTime() - at.rise.getTime()) / Fe) : 0, ut = new Date(m);
    ut.setDate(ut.getDate() - 1);
    const Rt = !!(w && y && m >= w && m <= y), Tt = !!(w && m < w), At = Rt ? w : Tt ? Lr(c, ut).set : y, Gt = Rt ? y : Tt ? w : at.rise, Dt = At && Gt ? Math.min(1, Math.max(0, (m.getTime() - At.getTime()) / (Gt.getTime() - At.getTime()))) : 0, pt = Gt ? Math.max(0, Math.round((Gt.getTime() - m.getTime()) / Fe)) : 0, Ot = Gt ? io(pt) : "–", It = Rt ? gt.untilSunset : gt.untilSunrise;
    return ra({
      icon: re.sunny,
      name: gt.sun,
      sub: R ? Xe(gt.daylightShort, { hours: V, minutes: Y }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, X(at.rise)], [gt.callout.setTomorrow, X(at.set)], ...it ? [[gt.callout.dayTomorrow, Math.floor(it / 60) + "h " + it % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Ns(m, w, y) + '"><svg class="wbSunTrack" data-up="' + (Rt ? 1 : 0) + '" data-f="' + Dt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ot) + '</span><span class="wbSunWord">' + yt(It) + '</span></div><span class="wbSunAt wbSunRise">' + yt(X(w)) + '</span><span class="wbSunAt wbSunSet">' + yt(X(y)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      ys(Va(Ot, ""))
    });
  }
  const Fr = 22;
  function qr(c) {
    const m = Math.round(c.clientWidth), w = Math.round(c.clientHeight), y = Fr, R = y / 2, V = m + "x" + w + ":" + c.dataset.f + ":" + c.dataset.up;
    if (m < y * 3 || w < y * 3 || c.dataset.drawn === V) return;
    c.dataset.drawn = V;
    const Y = "M" + R + " " + (w - y) + "V" + y + "A" + R + " " + R + " 0 0 1 " + y + " " + R + "H" + (m - y) + "A" + R + " " + R + " 0 0 1 " + (m - R) + " " + y + "V" + (w - y), X = "M" + (m - R) + " " + (w - y) + "A" + R + " " + R + " 0 0 1 " + (m - y) + " " + (w - R) + "H" + y + "A" + R + " " + R + " 0 0 1 " + R + " " + (w - y), j = 16, at = 6, it = "M" + j + " 0H" + (m - j) + "A" + j + " " + j + " 0 0 1 " + m + " " + j + "V" + (w - j) + "A" + j + " " + j + " 0 0 1 " + (m - j) + " " + w + "H" + j + "A" + j + " " + j + " 0 0 1 0 " + (w - j) + "V" + j + "A" + j + " " + j + " 0 0 1 " + j + " 0ZM" + (y + at) + " " + y + "A" + at + " " + at + " 0 0 0 " + y + " " + (y + at) + "V" + (w - y - at) + "A" + at + " " + at + " 0 0 0 " + (y + at) + " " + (w - y) + "H" + (m - y - at) + "A" + at + " " + at + " 0 0 0 " + (m - y) + " " + (w - y - at) + "V" + (y + at) + "A" + at + " " + at + " 0 0 0 " + (m - y - at) + " " + y + "Z", ut = c.dataset.up === "1", Rt = Number(c.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    c.setAttribute("viewBox", "0 0 " + m + " " + w);
    const At = document.createElementNS(Tt, "path");
    At.setAttribute("d", ut ? Y : X), c.replaceChildren(At);
    const Gt = At.getTotalLength(), Dt = At.getPointAtLength(Gt * Rt), pt = ut ? Gt : 0;
    c.innerHTML = '<defs><mask id="' + T + 'sun-day"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '"></path></mask><mask id="' + T + 'sun-done"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + y * 2 + '" stroke-dasharray="' + (ut ? (pt * Rt).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + it + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + it + '" mask="url(#' + T + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + it + '" mask="url(#' + T + 'sun-done)"></path><circle class="wbSunDot' + (ut ? "" : " wbSunNight") + '" cx="' + Dt.x.toFixed(1) + '" cy="' + Dt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const so = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => qr(m.target))) : null;
  function Os() {
    so == null || so.disconnect(), C.querySelectorAll("svg.wbSunTrack").forEach((c) => {
      qr(c), so == null || so.observe(c);
    });
  }
  function Di(c, m, w) {
    const y = (Y) => T + "moon-" + Y, R = c > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + y("terminator") + ')" d="' + D1(61, 61, 57.9, c) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", V = (Y, X, j, at, it, ut) => '<filter id="' + y(Y) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + X + '" numOctaves="' + j + '" seed="' + at + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Rt) => "<feFunc" + Rt + ' type="linear" slope="' + it + '" intercept="' + ut + '"></feFunc' + Rt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + V("mottle", "0.045", 4, 3, 1.8, -0.4) + V("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + y("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + y("soften") + ')">' + P1.map(([Y, X, j, at, it, ut]) => '<ellipse cx="' + Y + '" cy="' + X + '" rx="' + j + '" ry="' + at + '" fill-opacity="' + ut + '" transform="rotate(' + it + " " + Y + " " + X + ')"></ellipse>').join("") + "</g>" + R1.map(([Y, X, j]) => '<circle class="wbCrater" cx="' + Y + '" cy="' + X + '" r="' + j + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + y("glow") + ')">' + H1.map(([Y, X]) => '<line x1="54.4" y1="95" x2="' + Y + '" y2="' + X + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + y("glow") + ')">' + Jp.map(([Y, X, j]) => '<circle cx="' + Y + '" cy="' + X + '" r="' + j * 2 + '"></circle>').join("") + "</g>" + Jp.map(([Y, X, j]) => '<circle class="wbBrightCenter" cx="' + Y + '" cy="' + X + '" r="' + j + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + y("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ut(c) {
    const m = U, w = Pr(c), y = (w == null ? void 0 : w.lat) ?? 0, R = fc(m), V = Zp(c), Y = V ? c.states[V] : void 0, X = Yn(Y) && t1.includes(Y.state) ? Y.state : x1(R.phase), { rise: j, set: at } = w ? y1(m, w.lat, w.lon) : {}, it = R.phase > 0.5 != y < 0, ut = Qt(Math.round(R.fraction * 100), c.locale) + "%", Rt = j ?? at;
    return Rt && Ze(Rt, c), ra({
      icon: re.night,
      name: gt.moon,
      sub: gt.phases[X],
      callouts: [...j ? [[gt.callout.moonrise, Ze(j, c)]] : [], ...at ? [[gt.callout.moonset, Ze(at, c)]] : [], [gt.callout.lit, ut]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Di(R.fraction, it, y < 0) + "</div>" + ys(Va(Qt(Math.round(R.fraction * 100), c.locale), "%"))
    });
  }
  function bt(c, m) {
    var At;
    const w = He(c, m, "wind_speed");
    if (!w || !me(w.value)) return "";
    const y = He(c, m, "wind_gust_speed"), R = He(c, m, "wind_bearing"), V = R && me(R.value) ? Number(R.value) : void 0, Y = _1(Number(w.value), (At = w.stateObj.attributes) == null ? void 0 : At.wind_speed_unit), X = Ls(c, w.stateObj, "wind_speed", w.value), j = V !== void 0 ? gt.cardinal[Q0[((V + 11.25) / 22.5 | 0) % 16]] : void 0, at = y ? $p(c, y.stateObj, "wind_gust_speed", y.value) : void 0, it = [j ? Xe(gt.windFrom, { direction: j }) : void 0, Y !== void 0 ? Y + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || at, ut = (Gt, Dt) => {
      const pt = (Gt - 90) * Math.PI / 180;
      return [100 + Dt * Math.cos(pt), 100 + Dt * Math.sin(pt)];
    }, Rt = Array.from({ length: 36 }, (Gt, Dt) => Dt * 10).map((Gt) => {
      const Dt = Gt % 90 === 0, [pt, Ot] = ut(Gt, 97), [It, Se] = ut(Gt, Dt ? 83 : 89);
      return '<line class="wbTick' + (Dt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ot + '" x2="' + It + '" y2="' + Se + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Gt, Dt]) => {
      const [pt, Ot] = ut(Dt, 64);
      return '<text class="wbLetter' + (Gt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ot + '">' + yt(gt.cardinal[Gt]) + "</text>";
    }).join("");
    return ra({ icon: re.windy, name: gt.wind, sub: it, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Rt + Tt + (V !== void 0 ? '<path class="wbMarker" transform="rotate(' + V + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt(X.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt(X.unit) + "</text></svg>" });
  }
  const ge = (c, m) => {
    if (c < 3) return gt.advice.fine;
    if (c < 8) return gt.advice.sunblock;
    const w = Date.now(), y = nt("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > w && R.uv_index < 6);
    return y && new Date(y.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Xe(gt.advice.avoidUntil, { time: Ze(new Date(y.datetime), m) }) : gt.advice.avoidToday;
  };
  function jt(c, m) {
    const w = He(c, m, "uv_index");
    if (!w || !me(w.value)) return "";
    const y = Number(w.value), R = gt.uvLevel[Up(y)], V = /* @__PURE__ */ new Date();
    V.setHours(23, 59, 59, 999);
    const Y = nt("hourly").filter((it) => it.uv_index != null && new Date(it.datetime) > /* @__PURE__ */ new Date() && new Date(it.datetime) <= V).reduce((it, ut) => !it || ut.uv_index > it.uv ? { uv: ut.uv_index, time: new Date(ut.datetime) } : it, void 0), X = e1[Up(y)], j = 216 * Math.min(1, Math.max(0.08, 0.4 + (y - 4.5) * (0.5 / 5.5))), at = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + T + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + j.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + X + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + X + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + X + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + j.toFixed(1) + '" fill="url(#' + T + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(Qt(Math.round(y), c.locale)) + '</span><span class="wbUvWord">' + yt(R) + "</span></div>" + ys(Va(Qt(Math.round(y), c.locale), ""));
    return ra({
      icon: re.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: Y && Y.uv > y ? Xe(gt.uvPeak, { level: R, uv_index: Qt(Math.round(Y.uv), c.locale), time: Ze(Y.time, c) }) : R,
      zone: at,
      cls: "wbUv",
      callouts: [ge(y, c), [gt.callout.now, Qt(Math.round(y), c.locale) + " · " + R], [gt.callout.peak, Y && Y.uv > y ? Qt(Math.round(Y.uv), c.locale) + " at " + Ze(Y.time, c) : gt.callout.now]]
    });
  }
  function Ne(c) {
    const m = nt("daily")[0], w = Z.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !me(m.temperature) || !w || w.dailyHighs.length < z0) return "";
    const y = Number(m.temperature), R = w.dailyHighs.reduce((Dt, pt) => Dt + pt, 0) / w.dailyHighs.length, V = Math.round(y - R) || 0, Y = V > 0 ? "above" : V < 0 ? "below" : "same", X = [...w.days, { date: /* @__PURE__ */ new Date(), high: y, today: !0 }], j = X.map((Dt) => Dt.high).concat(R), at = Math.min(...j) - 1, it = Math.max(...j) + 1, ut = (Dt) => (1 - (Dt - at) / (it - at)) * 100, Rt = (Dt) => (Dt + 0.5) / X.length * 100, Tt = X.map((Dt, pt) => [Rt(pt), ut(Dt.high)]), At = Tt.map(([Dt, pt], Ot) => (Ot ? "L" : "M") + Dt.toFixed(2) + " " + pt.toFixed(2)).join(""), Gt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + T + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + At + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + T + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ut(R).toFixed(2) + '" y2="' + ut(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + At + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ut(R).toFixed(2) + '%">' + yt(xe(c, R)) + "</span>" + X.map((Dt, pt) => {
      const Ot = Dt.today ? " wbToday" : "", It = "left:" + Rt(pt).toFixed(2) + "%;top:" + ut(Dt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + It + '"></i><span class="wbAvgValue' + Ot + '" style="' + It + '">' + yt(xe(c, Dt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + X.map((Dt, pt) => '<span class="wbAvgDay' + (Dt.today ? " wbToday" : "") + '" style="left:' + Rt(pt).toFixed(2) + '%">' + yt(d1(Dt.date, c)) + "</span>").join("") + "</div></div>";
    return ra({
      icon: re.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Xe(gt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (V > 0 ? "+" : "") + yt(xe(c, V)) + '</div><div class="wbCompareWords">' + yt(gt.average[Y]) + '</div><div class="wbCompareTemps">' + yt(Xe(gt.todayVsAverage, { today: xe(c, y), average: xe(c, R) })) + "</div></div>" + Gt + "</div>"
    });
  }
  function lo(c, m) {
    const w = He(c, m, "humidity");
    if (!w || !me(w.value)) return "";
    const y = He(c, m, "dew_point"), R = Math.max(0, Math.min(100, Number(w.value)));
    return ra({
      icon: re.waterPercent,
      name: gt.metrics.humidity,
      sub: y && me(y.value) ? Xe(gt.dewPoint, { dew_point: xe(c, y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Va(Qt(Math.round(Number(w.value)), c.locale), "%") + "</div>"
    });
  }
  function tr(c, m) {
    var Dt, pt, Ot;
    const w = He(c, m, "pressure");
    if (!w || !me(w.value)) return "";
    const y = Number(w.value), R = (Dt = w.stateObj.attributes) == null ? void 0 : Dt.pressure_unit, V = Yp(y, R), Y = ((pt = Z.pressureHistory) == null ? void 0 : pt.entityId) === w.stateObj.entity_id ? Yp(Z.pressureHistory.value, R) : void 0;
    let X;
    if (V !== void 0 && Y !== void 0) {
      const It = V - Y;
      X = It >= Np ? "rising" : It <= -Np ? "falling" : "steady";
    }
    const j = Ls(c, w.stateObj, "pressure", Math.round(y)), at = w.stateObj, it = (It) => R === "inHg" ? Math.round(It * 100) / 100 : Math.round(It), ut = (It) => $p(c, at, "pressure", it(It)), Rt = Y !== void 0 ? Z.pressureHistory.value : void 0, Tt = Rt !== void 0 ? it(y - Rt) : void 0, At = (Ot = at.entity_id) != null && Ot.startsWith("weather.") ? nt("hourly").find((It) => me(It.pressure) && new Date(It.datetime).getTime() >= Date.now() + 3 * ne - 30 * Fe) : void 0, Gt = [
      ...X ? [gt.advice[X]] : [],
      ...Rt !== void 0 ? [[gt.callout.hoursAgo, ut(Rt)], [gt.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + ut(Math.abs(Tt))]] : [],
      ...At ? [[gt.callout.inHours, ut(Number(At.pressure))]] : []
    ];
    return ra({
      icon: re.gauge,
      name: gt.metrics.pressure,
      sub: X ? gt.pressure[X] : void 0,
      cls: "wbPressure",
      callouts: Gt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Va(j.number) + '<span class="wbTapeUnit">' + yt(j.unit) + "</span></div>" + (V !== void 0 ? Is(c, V) : "") + "</div>"
    });
  }
  function Is(c, m) {
    const R = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (V, Y) => R + Y).map((V) => {
      const Y = 100 - (V - m) * 9;
      if (Y < 22 || Y > 178) return "";
      const X = V % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Y - 100) / 100) + '"><line class="wbTapeTick" x1="' + (X ? 2 : 8) + '" x2="26" y1="' + Y + '" y2="' + Y + '"></line>' + (X ? '<text class="wbTapeLabel" x="33" y="' + Y + '">' + yt(Qt(V, c.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Wr(c) {
    var j, at;
    const m = hc(c), w = m ? c.states[m] : void 0;
    if (!w || ((j = Z.rain) == null ? void 0 : j.entityId) !== m || !me(Z.rain.change)) return "";
    const y = ((at = w.attributes) == null ? void 0 : at.unit_of_measurement) ?? "", R = N(c, "hourly"), V = Date.now() + ga, Y = nt("hourly").filter((it) => it.precipitation != null && new Date(it.datetime).getTime() <= V), X = Y.reduce((it, ut) => it + Number(ut.precipitation), 0);
    return ra({
      icon: re.rainy,
      name: gt.metrics.precipitation,
      sub: R && Y.length ? Xe(gt.rainExpected, { amount: Qt(X, c.locale, { maximumFractionDigits: 1 }) + " " + un(c, R, "precipitation") }) : gt.rainLast24h,
      visual: Va(Qt(Z.rain.change, c.locale, { maximumFractionDigits: 1 }), y) + (Y.length > 1 ? B1(Y.map((it) => ({ label: "", value: Number(it.precipitation) }))) : "")
    });
  }
  function Ei(c, m) {
    const w = He(c, m, "visibility");
    if (!w || !me(w.value)) return "";
    const y = Ls(c, w.stateObj, "visibility", w.value), R = M0(Number(w.value), un(c, w.stateObj, "visibility"));
    return ra({
      icon: re.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[S0(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(Fs(c, R)) + '</div><div class="wbSeaValue">' + Va(y.number, y.unit) + "</div></div>"
    });
  }
  function Fs(c, m) {
    var V;
    const w = k0((V = c.config) == null ? void 0 : V.country, m);
    if (w) return Xe(gt.visibilityLandmarks, { from: w.from, to: w.to });
    const y = m / U0 * 60;
    if (y < 60) {
      const Y = y < 5 ? Math.max(1, Math.round(y)) : 5 * Math.round(y / 5);
      if (Y < 60) return Xe(gt.walkMinutes, { minutes: Qt(Y, c.locale) });
    }
    const R = Math.max(1, Math.round(y / 30) / 2);
    return R < 8 ? Xe(gt.walkHours, { hours: Qt(R, c.locale) }) : gt.walkDay;
  }
  function qs(c) {
    Z.categories === void 0 && To(c);
    const m = fe(c), w = (j) => j.map((at) => c.states[at]).filter(Yn), y = w(m.air), R = w(m.pollen);
    if (!y.length && !R.length) return "";
    const V = [...y, ...R], Y = (j) => R.includes(j) ? re.flower : re.airFilter, X = V.find((j) => j.entity_id === H.aq);
    return X ? en(c, X, Y(X)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + V.map((j) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(j.entity_id) + '"><span class="wbChip">' + Xo(Y(j)) + '</span><span class="wbText"><span class="wbName">' + yt(dn(c, j)) + '</span><span class="wbSub">' + yt(Yo(c, j)) + "</span></span></button>").join("") + "</div></div>";
  }
  function en(c, m, w) {
    var it, ut, Rt;
    const y = ((it = m.attributes) == null ? void 0 : it.unit_of_measurement) ?? "", R = ((ut = m.attributes) == null ? void 0 : ut.device_class) === "pm25" && y === qp && me(m.state), V = Number(m.state), Y = R ? vs(V) : void 0, X = ((Rt = Z.aqHistory) == null ? void 0 : Rt.entityId) === m.entity_id ? Z.aqHistory.points : void 0, j = (Tt) => Math.min(100, Math.max(0, Tt / ws * 100));
    let at;
    if (X && X.length > 1) at = Xp(X, (Tt) => (Qt(Tt, c.locale, { maximumFractionDigits: 1 }) + " " + y).trim());
    else if (Y) {
      let Tt = 0;
      const At = tf.map(([Gt, Dt]) => {
        const pt = j(Math.min(Dt, ws)), Ot = Fp[Gt] + " " + Tt + "% " + pt + "%";
        return Tt = pt, Ot;
      });
      at = '<div class="wbScale" role="meter" aria-label="' + yt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ws + '" aria-valuenow="' + V + '" style="background:linear-gradient(to right, ' + At.join(", ") + ')"><i style="left:' + j(V) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ws + " " + qp + "</span></div>";
    } else at = '<span class="wbGraphNote"><span>' + yt(Yo(c, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Xo(w) + '</span><span class="wbText"><span class="wbName">' + yt(dn(c, m)) + '</span><span class="wbSub">' + yt(Yo(c, m)) + (Y ? " · " + yt(gt.aqLevel[Y]) : "") + '</span></span><button class="wbBack" title="' + yt(gt.back) + '" data-wb="aq-close">' + Xo(re.back) + '</button></div><div class="wbGraph">' + at + "</div></div></div>";
  }
  const Bi = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ws = (c) => c <= 50 ? "Good" : c <= 100 ? "Moderate" : c <= 150 ? "Unhealthy for some" : c <= 200 ? "Unhealthy" : c <= 300 ? "Very unhealthy" : "Hazardous";
  function va(c) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(c.states || {}).filter((w) => {
      var y;
      return w.entity_id.startsWith("sensor.") && Ps.includes(((y = w.attributes) == null ? void 0 : y.device_class) ?? "") && Yn(w) && Hr(c, w.entity_id);
    }).sort((w, y) => w.entity_id.localeCompare(y.entity_id)).forEach((w) => {
      m.has(w.attributes.device_class) || m.set(w.attributes.device_class, w);
    }), Ps.map((w) => m.get(w)).filter(Boolean);
  }
  const wn = (c) => Object.values(c.states || {}).filter((m) => {
    var w, y;
    return m.entity_id.startsWith("sensor.") && Yn(m) && Hr(c, m.entity_id) && (((y = (w = c.entities) == null ? void 0 : w[m.entity_id]) == null ? void 0 : y.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), vn = ["none", "very_low", "low", "moderate", "high", "very_high"], Bo = (c) => me(c.state) ? Number(c.state) : vn.indexOf(String(c.state).toLowerCase().replace(/ /g, "_")), Vr = (c) => {
    const m = String(c).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, Pi = (c, m, w) => {
    const y = w ? c === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : c === "pm25" ? vs(m) : null : null;
    return y === "good" || y === "fair" ? gt.advice.window : y === "moderate" || y === null ? gt.advice.fine : gt.advice.closed;
  }, co = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Vs = (c) => co[c <= 50 ? 0 : c <= 100 ? 1 : c <= 150 ? 2 : c <= 200 ? 3 : c <= 300 ? 4 : 5], Ua = "M43 43q1 8 0 10M77 42q1 8 -1 10", po = {
    good: [Ua, "M34 69Q61 98 86 67"],
    fair: [Ua, "M40 74Q61 89 81 72"],
    moderate: [Ua, "M41 79Q60 76 80 81"],
    poor: [Ua, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, er = (c) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + po[c][0] + '"></path><path d="' + po[c][1] + '"></path></svg>';
  function uo(c) {
    const m = va(c), w = m[0];
    if (!w) return ra({ icon: re.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Va("–", ""), cls: "wbBase" });
    const y = w.attributes.device_class, R = Number(w.state), V = me(w.state), Y = y === "aqi" && V ? Ws(R) : y === "pm25" && V ? Bi[vs(R)] : Yo(c, w), X = V ? Qt(Math.round(R), c.locale) : String(w.state), j = y === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", at = V && y === "aqi" ? Vs(R) : V && y === "pm25" ? vs(R) : null;
    return ra(at ? {
      icon: re.airFilter,
      name: gt.airQuality,
      sub: Y,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Fp[at] + '">' + er(at) + '<div class="wbAqBig"><span class="wbAqNum">' + yt(X) + "</span>" + (j ? '<span class="wbAqUnit">' + yt(j) + "</span>" : "") + "</div></div>" + ys(Va(X, j)),
      callouts: [Pi(y, R, V), ...m.slice(1, 3).map((it) => [dn(c, it), Yo(c, it)])]
    } : {
      icon: re.airFilter,
      name: gt.airQuality,
      sub: Y,
      cls: "wbBase",
      zone: Va(X, j),
      callouts: [Pi(y, R, V), ...m.slice(1, 3).map((it) => [dn(c, it), Yo(c, it)])]
    });
  }
  const js = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ya = (c) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(c) ? Math.round(c) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (w, y) => {
      const [R, V] = js[y % 3], Y = 10 + y * 7 % 9, X = 2.6 + y * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + y * 37 % 52) + "%;--x:" + (y * 29 % 90 + 4) + "%;--s:" + (0.8 + y * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Y + "s;animation-delay:-" + (y * 2.3 % Y).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + X.toFixed(1) + "s;animation-delay:-" + (y * 0.7 % X).toFixed(1) + 's">' + V + "</span></span></span>";
    }).join("") + "</div>";
  };
  function yn(c) {
    const m = wn(c).sort((R, V) => Bo(V) - Bo(R));
    if (!m.length) return ra({ icon: re.flower, name: gt.pollen, sub: gt.noPollen, visual: Va("–", ""), cls: "wbBase" });
    const w = m[0], y = (R) => me(R.state) ? Yo(c, R) : Vr(R.state);
    return ra({
      icon: re.flower,
      name: gt.pollen,
      sub: dn(c, w) + " · " + y(w),
      cls: "wbBase wbPollen",
      zone: Ya(Bo(w)) + Va(y(w), ""),
      callouts: m.slice(0, 3).map((R) => [dn(c, R), y(R)])
    });
  }
  function jr(c) {
    var X;
    const m = Date.now(), w = nt("hourly").filter((j) => {
      const at = new Date(j.datetime).getTime();
      return at > m - ne && at < m + 12 * ne;
    }), y = w.find((j) => (j.precipitation_probability ?? 0) >= 50 || (j.precipitation ?? 0) >= 0.2), R = y ? Xe(gt.rainFrom, { time: Ze(new Date(Math.max(m, new Date(y.datetime).getTime())), c) }) : w.length ? gt.noRain12 : void 0, V = (L == null ? void 0 : L()) || "rainviewer";
    let Y;
    if (V.startsWith("camera:")) {
      const j = c.states[V.slice(7)], at = j && j.state !== "unavailable" && ((X = j.attributes) == null ? void 0 : X.entity_picture);
      Y = at ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + yt(at) + '" data-src="' + yt(at) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + yt(gt.cameraOff) + "</span></div>";
    } else {
      const j = Pr(c);
      Y = j ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + j.lat + '" data-lon="' + j.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + yt(gt.noLocation) + "</span></div>";
    }
    return ra({ icon: re.radar, name: gt.rainRadar, sub: R, cls: "wbBase wbRadarTile", visual: Y });
  }
  const Oe = {
    current: Mi,
    hourly: Ai,
    sun: Te,
    moon: Ut,
    wind: bt,
    uv_index: jt,
    compared_to_average: Ne,
    humidity: lo,
    pressure: tr,
    precipitation: Wr,
    visibility: Ei,
    air_quality: qs,
    aq_tile: uo,
    pollen_tile: yn,
    radar_tile: jr
  }, xn = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], kn = (c, m) => {
    var w;
    return m.toLocaleDateString((w = c.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, zr = (c) => {
    const m = new Date(c);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, ar = () => {
    const c = H.range, m = Date.now();
    if (c.preset !== "custom") {
      const R = xn.find(([V]) => V === c.preset)[2];
      return [m - R * ga, m];
    }
    const w = fn(/* @__PURE__ */ new Date(c.from + "T00:00")).getTime(), y = Math.min(m, fn(/* @__PURE__ */ new Date(c.to + "T00:00")).getTime() + ga);
    return [Math.min(w, y - ne), y];
  }, zs = (c) => {
    const m = H.range;
    if (m.preset !== "custom") return xn.find(([R]) => R === m.preset)[1];
    const [w, y] = ar();
    return m.from === m.to ? kn(c, new Date(w)) : kn(c, new Date(w)) + " – " + kn(c, new Date(y - 1));
  }, Gr = () => H.range.preset === "custom" ? H.range.from + "_" + H.range.to : H.range.preset, Za = (c, m) => m - c <= 2 * ga, $r = (c, m, w, y) => Za(w, y) ? Ze(m, c) : kn(c, m), or = (c, m = 60) => {
    const w = Math.max(1, Math.ceil(c.length / m));
    return c.filter((y, R) => R % w === 0 || R === c.length - 1);
  }, Ri = (c, m, w, y, R = !1) => c.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(y).toISOString(),
    entity_ids: [m],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  }), an = (c) => async (m, w, y, R) => {
    const V = He(m, w, c);
    if (!V) return [];
    const Y = V.stateObj.entity_id, X = await Ri(m, Y, y, R);
    return or(((X == null ? void 0 : X[Y]) ?? []).map((j) => {
      var ut;
      const at = ((ut = j.a) == null ? void 0 : ut[c]) ?? (me(j.s) ? Number(j.s) : void 0), it = (j.lu ?? j.lc) * 1e3;
      return typeof at == "number" && it >= y && it <= R ? { t: new Date(it), value: at } : null;
    }).filter(Boolean)).map((j) => ({ label: $r(m, j.t, y, R), value: j.value }));
  }, Hi = (c, m) => async (w, y, R, V) => {
    const Y = c(w);
    if (!Y) return [];
    const X = Y.entity_id, j = await Ri(w, X, R, V, !0);
    return or(((j == null ? void 0 : j[X]) ?? []).map((at) => {
      const it = m(at.s), ut = at.lu * 1e3;
      return it == null || !Number.isFinite(it) || ut < R || ut > V ? null : { t: new Date(ut), value: it };
    }).filter(Boolean)).map((at) => ({ label: $r(w, at.t, R, V), value: at.value }));
  }, Mn = (c, m) => async (w, y, R, V) => {
    const Y = Pr(w);
    if (!Y) return [];
    const X = [];
    if (Za(R, V)) for (let j = R; j <= V; j += ne / 2) X.push({ label: Ze(new Date(j), w), value: c(new Date(j), Y) });
    else for (let j = V; j >= R; j -= ga) {
      const at = new Date(j), it = m(at, Y, w);
      it != null && X.unshift({ label: kn(w, at), value: it });
    }
    return or(X);
  }, Sn = (c) => wn(c).sort((m, w) => Bo(w) - Bo(m))[0], on = (c, m, w) => {
    const y = He(c, m, w);
    return y ? un(c, y.stateObj, w) : "";
  }, nr = {
    current: { name: () => gt.modes.temperature, icon: () => re.sunny, load: an("temperature"), fmt: (c, m, w) => xe(c, w), now: (c, m) => {
      var w;
      return xe(c, (w = He(c, m, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => re.sunny,
      load: Mn((c, m) => Math.round(Hs(c, m.lat, m.lon) / sa), (c, m, w) => {
        const y = Lr(w, c);
        return y.rise && y.set ? Math.round((y.set - y.rise) / ne * 10) / 10 : null;
      }),
      fmt: (c, m, w, y) => y ? Qt(w, c.locale) + "°" : Qt(w, c.locale) + " h",
      sub: (c) => c ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => gt.moon,
      icon: () => re.night,
      load: Mn((c) => Math.round(fc(c).fraction * 100), (c) => Math.round(fc(c).fraction * 100)),
      fmt: (c, m, w) => Qt(w, c.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => gt.metrics.uv_index, icon: () => re.sunnyAlert, load: an("uv_index"), fmt: (c, m, w) => Qt(Math.round(w * 10) / 10, c.locale), now: (c, m) => {
      const w = He(c, m, "uv_index");
      return w ? Qt(Number(w.value), c.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => re.waterPercent, load: an("humidity"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + "%", now: (c, m) => {
      const w = He(c, m, "humidity");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => re.gauge, load: an("pressure"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + " " + on(c, m, "pressure"), now: (c, m) => {
      const w = He(c, m, "pressure");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + " " + on(c, m, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => re.windy, load: an("wind_speed"), fmt: (c, m, w) => Qt(Math.round(w), c.locale) + " " + on(c, m, "wind_speed"), now: (c, m) => {
      const w = He(c, m, "wind_speed");
      return w ? Qt(Math.round(Number(w.value)), c.locale) + " " + on(c, m, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => re.eyeOutline, load: an("visibility"), fmt: (c, m, w) => Qt(Math.round(w * 10) / 10, c.locale) + " " + on(c, m, "visibility"), now: (c, m) => {
      const w = He(c, m, "visibility");
      return w ? Qt(Number(w.value), c.locale) + " " + on(c, m, "visibility") : "";
    } },
    aq_tile: {
      name: (c) => va(c)[0] ? dn(c, va(c)[0]) : gt.airQuality,
      icon: () => re.airFilter,
      load: Hi((c) => va(c)[0], (c) => me(c) ? Number(c) : null),
      fmt: (c, m, w) => {
        var V, Y;
        const y = va(c)[0], R = (V = y == null ? void 0 : y.attributes) == null ? void 0 : V.device_class;
        return Qt(Math.round(w * 10) / 10, c.locale) + (R === "aqi" ? " AQI" : (Y = y == null ? void 0 : y.attributes) != null && Y.unit_of_measurement ? " " + y.attributes.unit_of_measurement : "");
      },
      now: (c) => {
        const m = va(c)[0];
        return m ? Yo(c, m) : "";
      }
    },
    pollen_tile: {
      name: (c) => Sn(c) ? dn(c, Sn(c)) : gt.pollen,
      icon: () => re.flower,
      load: Hi(Sn, (c) => {
        const m = Bo({ state: c });
        return m < 0 ? null : m;
      }),
      fmt: (c, m, w) => Vr(vn[Math.round(w)] || ""),
      now: (c) => {
        const m = Sn(c);
        return m ? Vr(m.state) : "";
      }
    }
  }, de = {};
  let Ba = null;
  async function Bt(c) {
    const m = r == null ? void 0 : r();
    if (!m || !nr[c]) return;
    const w = c + "|" + Gr(), [y, R] = ar();
    if (de[w] && Date.now() - de[w].at < 5 * Fe) return;
    de[w] = { at: Date.now(), points: null };
    try {
      de[w].points = await nr[c].load(m, Nt(m), y, R);
    } catch {
      de[w].points = [];
    }
    Ie(!0), Ba === c && H.graph === c && (Ba = null, Bp(k.querySelector(".wbGraphCard")));
    const V = H.graph === c && k.querySelector(".wbGraph .wbChart");
    V && Xu(V, V.querySelector(".wbLine"), V.querySelectorAll(".wbArea"));
  }
  function rr(c, m) {
    const w = H.range, y = zr(Date.now()), [R, V] = ar(), Y = w.pickFrom || zr(R), X = w.pickTo || zr(V - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + xn.map(([j, at]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === j) + '" data-wb="graph-preset" data-range="' + j + '" data-wb-focus="graph-preset-' + j + '">' + yt(at) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Y + '" max="' + y + '"></label><label><span>To</span><input type="date" data-range-to value="' + X + '" max="' + y + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ir(c, m, w) {
    var ut;
    const y = nr[w], [R, V] = ar(), Y = Za(R, V), X = (ut = de[w + "|" + Gr()]) == null ? void 0 : ut.points, j = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), it = X ? X.length > 1 ? Xp(X, (Rt) => y.fmt(c, m, Rt, Y), 220, j) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(y.name(c)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + ef(y.icon(c)) + '</div><div class="wbText"><span class="wbName">' + yt(y.name(c)) + '</span><span class="wbSub">' + yt(y.sub ? y.sub(Y) : y.now ? y.now(c, m) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + Xo(re.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!H.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Xo(re.calendar) + "<span>" + yt(zs(c)) + "</span>" + Xo(re.chevronDown) + '</button><div class="wbGraph">' + it + "</div></div>" + (H.picking ? rr() : "") + "</div>";
  }
  function Ie(c) {
    var Rt, Tt, At, Gt, Dt;
    const m = r == null ? void 0 : r();
    if (!m || tt) return;
    const w = Nt(m);
    Mt(m, w), Z.lastFetch || wa();
    const y = fe(m), R = Zp(m), V = hc(m), Y = [
      ...w.map((pt) => m.states[pt]),
      m.states["sun.sun"],
      R && m.states[R],
      V && m.states[V],
      ...y.air.map((pt) => m.states[pt]),
      ...y.pollen.map((pt) => m.states[pt]),
      ...J.some((pt) => q.includes(pt)) ? [...va(m), ...wn(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / Fe)
    ];
    if (!c && rt && Y.length === rt.length && Y.every((pt, Ot) => pt === rt[Ot])) return;
    rt = Y;
    const X = C.getRootNode(), j = X.activeElement || document.activeElement;
    for (const pt of J) {
      const Ot = O[pt];
      let It = "";
      try {
        It = Oe[pt](m, w) || "";
      } catch {
        It = "";
      }
      if (It === Ot.html) continue;
      const Se = j && Ot.el.contains(j) ? (Rt = j.dataset) == null ? void 0 : Rt.wbFocus : void 0, Ct = Ot.el.querySelector(".wbStripScroll"), $t = Ct ? Ct.scrollLeft : null;
      Ot.html = It, Ot.el.hidden = !It, Ot.el.innerHTML = It;
      const he = Ot.el.querySelector(".wbStripScroll");
      he && $t != null ? he.scrollTo({ left: $t }) : he != null && he.dataset.start && he.scrollTo({ left: Number(he.dataset.start) * he.clientWidth / Number(he.dataset.span) }), Se && !$ && ((Tt = Ot.el.querySelector('[data-wb-focus="' + Se + '"]')) == null || Tt.focus());
    }
    let at = "";
    if (H.graph)
      try {
        at = ir(m, w, H.graph) || "";
      } catch {
        at = "";
      }
    if (at !== ht) {
      const pt = j && k.contains(j) ? (At = j.dataset) == null ? void 0 : At.wbFocus : void 0;
      ht = at, k.innerHTML = at, k.hidden = !at, at && !k.isConnected && (C.closest("#app") || C).appendChild(k), pt && !$ && ((Gt = k.querySelector('[data-wb-focus="' + pt + '"]')) == null || Gt.focus({ preventScroll: !0 }));
    }
    Os(), C.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || Po(pt);
    }), $ && ((Dt = C.querySelector('[data-wb-focus="' + $ + '"]') || k.querySelector('[data-wb-focus="' + $ + '"]')) == null || Dt.focus({ preventScroll: !0 }), $ = null);
    let it = !1, ut = !1;
    for (const pt of J) {
      const Ot = O[pt], It = !Ot.el.hidden, Se = Q[pt] === "wide" || z.includes(pt), Ct = J.indexOf(pt) >= J.indexOf("moon"), $t = It && (Ct && Se && !it || !Se && !ut);
      $t && Se && (it = !0), $t && !Se && (ut = !0), Ot.el.toggleAttribute("data-break", $t);
    }
    Pa(performance.now());
  }
  function Ka() {
    F || tt || (F = !0, queueMicrotask(() => {
      F = !1, Ie(!0);
    }));
  }
  function Ni() {
    const c = getComputedStyle(C), m = (Y) => c.getPropertyValue(Y).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Y, X]) => {
      m(X) && (w[Y] = m(X));
    });
    const y = m("--color-text-primary") || "#f1f1f1", R = m("--color-bg-card") || "#222222", V = !!C.closest(".light");
    return { colors: { ...$a, ...w }, ink: V ? y : R, paper: V ? R : y };
  }
  const Ur = (c, m) => {
    var w;
    c.width !== m.w && (c.width = m.w), c.height !== m.h && (c.height = m.h), (w = c.getContext("2d")) == null || w.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, _n = () => f && !s1();
  function Cn(c, m) {
    C.querySelectorAll("canvas[data-wb-strip]").forEach((w) => Oi(w, st[w.dataset.wbStrip], c, m));
  }
  function Oi(c, m, w, y) {
    if (!m || !c.getClientRects().length) return;
    const R = c.clientWidth, V = c.clientHeight;
    if (!R || !V) return;
    const Y = { width: R, height: V, columns: m.columns || Pp, colors: y.colors, clock: w, ambient: _n(), seed: m.seed, soft: 1.5 };
    if (l === "smooth") {
      const X = Math.min(2, window.devicePixelRatio || 1), j = Math.round(R * X), at = Math.round(V * X);
      c.width !== j && (c.width = j), c.height !== at && (c.height = at);
      const it = c.getContext("2d");
      if (!it) return;
      it.setTransform(X, 0, 0, X, 0, 0), n0(it, m.segs, Y);
    } else Ur(c, o0(m.segs, { ...Y, px: 2, oneBit: l === "onebit", ink: y.ink, paper: y.paper }));
  }
  function Pa(c) {
    if (tt) return;
    const m = Ni();
    if (l !== "smooth") {
      const w = _n();
      C.querySelectorAll("canvas[data-wb-wx]").forEach((y) => {
        y.getClientRects().length && Ur(y, Wm(Hm(y.dataset.wbWx, m.colors), { size: Number(y.dataset.size) || 40, px: 2, oneBit: l === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: c, idle: w }));
      });
    }
    C.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const y = w.clientWidth, R = w.clientHeight, V = Number(w.dataset.wbSea), Y = y + "x" + R + ":" + V + ":" + m.colors.skyClearDay;
      !y || !R || !(V > 0) || w.dataset.painted === Y || (w.dataset.painted = Y, Ur(w, v0(y, R, V, m.colors)));
    }), Cn(c, m);
  }
  function Yr(c) {
    if (ct = 0, !(tt || !_n())) {
      if (!document.hidden)
        if (l === "smooth") Cn(c, Ni());
        else {
          const m = Math.floor(c / 100);
          m !== et && (et = m, Pa(c));
        }
      ct = requestAnimationFrame(Yr);
    }
  }
  function sr() {
    C.classList.toggle("wbMotion", _n()), !ct && !tt && _n() && (ct = requestAnimationFrame(Yr));
  }
  function ca(c) {
    var w, y, R, V, Y, X, j;
    if (c.target === k) {
      H.graph = void 0, H.picking = !1, Ie(!0);
      return;
    }
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, "[data-wb]");
    if (!m || !(C.contains(m) || k.contains(m))) {
      const at = (V = (R = c.target).closest) == null ? void 0 : V.call(R, ".wbItem"), it = at == null ? void 0 : at.dataset.card;
      if (!at || !C.contains(at) || !nr[it] || H.graph === it || C.closest(".tfEditing") || it === "current" && g) return;
      H.graph = it, H.picking = !1, $ = "graph-close", Ie(!0), (Y = de[it + "|" + Gr()]) != null && Y.points ? Bp(k.querySelector(".wbGraphCard")) : Ba = it, Bt(it);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        H.openDay = Number(m.dataset.index), H.opener = m.dataset.wbFocus, $ = "back-day";
        const at = wt()[H.openDay], it = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > N0;
        at && Tr(new Date(at.datetime), /* @__PURE__ */ new Date()) && it && Ao();
        break;
      }
      case "close-day":
        H.openDay = void 0, $ = H.opener, H.opener = void 0;
        break;
      case "open-page":
        g == null || g();
        return;
      case "day-mode":
        H.dayMode = m.dataset.mode;
        break;
      case "hourly-mode":
        H.hourlyMode = m.dataset.mode;
        break;
      case "hourly-view":
        H.hourlyView = m.dataset.view;
        try {
          localStorage.setItem(kt, H.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const at = C.querySelector(".wbStripScroll");
        at && at.scrollTo({ left: Number(m.dataset.hours) * at.clientWidth / Number(at.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        H.aq = m.dataset.entity, Xn(H.aq);
        break;
      case "aq-close":
        H.aq = void 0;
        break;
      case "graph-close":
        H.graph = void 0, H.picking = !1;
        break;
      case "graph-pick":
        H.picking = !H.picking, $ = H.picking ? "graph-preset-" + (H.range.preset === "custom" ? "day" : H.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        H.range = { preset: m.dataset.range }, H.picking = !1, $ = "graph-pick", Ie(!0), Bt(H.graph);
        return;
      case "graph-apply": {
        let at = H.range.pickFrom || ((X = C.querySelector("[data-range-from]")) == null ? void 0 : X.value), it = H.range.pickTo || ((j = C.querySelector("[data-range-to]")) == null ? void 0 : j.value);
        if (!at || !it) return;
        at > it && ([at, it] = [it, at]), H.range = { preset: "custom", from: at, to: it }, H.picking = !1, $ = "graph-pick", Ie(!0), Bt(H.graph);
        return;
      }
      default:
        return;
    }
    Ie(!0);
  }
  function aa(c) {
    var m, w, y, R, V, Y;
    c.key === "Escape" && H.openDay !== void 0 && ((w = (m = c.target).closest) != null && w.call(m, '[data-wb-open="day"]')) ? (H.openDay = void 0, $ = H.opener, H.opener = void 0, Ie(!0)) : c.key === "Escape" && H.picking && ((R = (y = c.target).closest) != null && R.call(y, ".wbGraphCard")) ? (H.picking = !1, $ = "graph-pick", Ie(!0)) : c.key === "Escape" && H.graph && ((Y = (V = c.target).closest) != null && Y.call(V, ".wbGraphCard")) && (H.graph = void 0, Ie(!0));
  }
  let fo = null;
  function Zr(c) {
    var w, y;
    const m = (y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbStripScroll");
    !m || c.button !== 0 || (fo = { startX: c.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", Kr), window.addEventListener("mouseup", Ii, { once: !0 }));
  }
  function Kr(c) {
    const m = C.querySelector(".wbStripScroll");
    if (!fo || !m) return;
    const w = c.pageX - fo.startX;
    !fo.moved && Math.abs(w) > 1 && (fo.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = fo.left - w;
  }
  function Ii() {
    fo = null, window.removeEventListener("mousemove", Kr);
    const c = C.querySelector(".wbStripScroll");
    if (!c) return;
    c.classList.remove("wbDragging", "wbHeld");
    const m = [...c.querySelectorAll(".wbSnap")];
    if (m.length) {
      const w = m.reduce((y, R) => Math.abs(R.offsetLeft - c.scrollLeft) < Math.abs(y.offsetLeft - c.scrollLeft) ? R : y);
      c.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const lr = (c) => {
    var w, y;
    const m = c.target;
    (w = m.matches) != null && w.call(m, "[data-range-from]") ? H.range.pickFrom = m.value : (y = m.matches) != null && y.call(m, "[data-range-to]") && (H.range.pickTo = m.value);
  };
  C.addEventListener("change", lr), C.addEventListener("click", ca), C.addEventListener("keydown", aa), k.addEventListener("change", lr), k.addEventListener("click", ca), k.addEventListener("keydown", aa), C.addEventListener("mousedown", Zr);
  const Fi = 64, cr = 30;
  let ho = null, ya = 0;
  const xa = () => {
    ya = 0, C.querySelectorAll(".wbPollen .wbPush").forEach((c) => {
      let m = 0, w = 0;
      if (ho) {
        const y = c.parentElement.getBoundingClientRect(), R = y.left + y.width / 2 - ho.x, V = y.top + y.height / 2 - ho.y, Y = Math.hypot(R, V) || 1;
        if (Y < Fi) {
          const X = (1 - Y / Fi) * cr;
          m = R / Y * X, w = V / Y * X;
        }
      }
      c.style.transform = m || w ? "translate(" + m.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), ho && (ya = requestAnimationFrame(xa));
  }, qi = (c) => {
    var w, y;
    if (!((y = (w = c.target).closest) == null ? void 0 : y.call(w, ".wbPollen")) || Ve != null && Ve.matches) {
      ho && (ho = null, ya || (ya = requestAnimationFrame(xa)));
      return;
    }
    ho = { x: c.clientX, y: c.clientY }, ya || (ya = requestAnimationFrame(xa));
  }, An = () => {
    ho = null, ya || (ya = requestAnimationFrame(xa));
  };
  C.addEventListener("pointermove", qi), C.addEventListener("pointerleave", An);
  const nn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Pa(performance.now())) : null;
  nn == null || nn.observe(C);
  const We = typeof ResizeObserver == "function" ? new ResizeObserver((c) => c.forEach((m) => {
    const w = m.target;
    w._tiles && (w.clientWidth !== w._w || w.clientHeight !== w._h) && Po(w);
  })) : null;
  function Po(c) {
    var Y;
    const m = c.clientWidth, w = c.clientHeight;
    if (!m || !w || tt) return;
    const y = X0(Number(c.dataset.lat), Number(c.dataset.lon), m, w), R = !!((Y = C.closest("#app")) != null && Y.classList.contains("light")), V = (X) => ' style="left:' + X.left + "px;top:" + X.top + 'px"';
    c._tiles = y, c._w = m, c._h = w, c._frames = null, c._built = Date.now(), c.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + y.map((X) => '<img src="https://' + "abcd"[(X.x + X.y) % 4] + ".basemaps.cartocdn.com/" + (R ? "light_all" : "dark_all") + "/" + Ec + "/" + X.x + "/" + X.y + '.png"' + V(X) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', We == null || We.observe(c), K0().then((X) => {
      !c.isConnected || tt || c._tiles !== y || (c.querySelector(".wbRadarFrames").innerHTML = X.frames.map((j, at) => '<div class="wbRadarLayer wbRadarRain" data-i="' + at + '" hidden>' + y.map((it) => '<img src="' + X.host + j.path + "/" + Zo + "/" + Ec + "/" + it.x + "/" + it.y + '/2/1_1.png"' + V(it) + ' alt="">').join("") + "</div>").join(""), c._frames = X.frames, c._hold = 0, dr(c, X.frames.findLastIndex((j) => j.past)));
    }).catch(() => {
      c.isConnected && (c.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function dr(c, m) {
    const w = c._frames;
    if (!(w != null && w.length)) return;
    c._i = m, c.querySelectorAll(".wbRadarRain").forEach((R) => {
      R.hidden = Number(R.dataset.i) !== m;
    });
    const y = w[m];
    c.querySelector(".wbRadarTime").textContent = Ze(new Date(y.time * 1e3), r == null ? void 0 : r()) + (y.past ? "" : " · " + gt.forecastTag);
  }
  function pr() {
    C.querySelectorAll(".wbRadarMap").forEach((c) => {
      if (!c._frames) return;
      if (Date.now() - c._built > Qu) {
        Po(c);
        return;
      }
      if (Ve != null && Ve.matches) return;
      if (c._hold > 0) {
        c._hold -= Op;
        return;
      }
      const m = c._frames.length - 1, w = c._frames.findLastIndex((R) => R.past), y = c._i >= m ? 0 : c._i + 1;
      dr(c, y), (y === w || y === m) && (c._hold = Z0);
    });
  }
  const Gs = () => C.querySelectorAll(".wbRadarImg").forEach((c) => {
    const m = c.dataset.src;
    c.src = m + (m.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), Ro = typeof MutationObserver == "function" ? new MutationObserver(() => C.querySelectorAll(".wbRadarMap").forEach((c) => {
    c._tiles && Po(c);
  })) : null, Wi = C.closest("#app");
  Wi && (Ro == null || Ro.observe(Wi, { attributes: !0, attributeFilter: ["class"] }));
  const Ve = (Tn = window.matchMedia) == null ? void 0 : Tn.call(window, "(prefers-reduced-motion: reduce)"), ur = () => {
    sr(), Pa(performance.now());
  };
  (Vi = Ve == null ? void 0 : Ve.addEventListener) == null || Vi.call(Ve, "change", ur);
  const $s = [
    setInterval(() => {
      Wt = /* @__PURE__ */ new Date(), Ie(!0);
    }, G0),
    setInterval(() => {
      U = /* @__PURE__ */ new Date(), Ie(!0);
    }, $0),
    setInterval(wa, V0),
    setInterval(pr, Op),
    setInterval(Gs, Fe)
  ];
  return Ie(!0), sr(), {
    update() {
      Ie(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ie(!0);
    },
    setStyle(c) {
      !c || c === l || (l = c, C.dataset.style = l, k.dataset.style = l, Ie(!0), sr());
    },
    destroy() {
      var c;
      cancelAnimationFrame(ya), C.removeEventListener("pointermove", qi), C.removeEventListener("pointerleave", An), tt = !0, $s.forEach(clearInterval), ct && cancelAnimationFrame(ct), ct = 0, nn == null || nn.disconnect(), We == null || We.disconnect(), Ro == null || Ro.disconnect(), (c = Ve == null ? void 0 : Ve.removeEventListener) == null || c.call(Ve, "change", ur), Ii(), C.removeEventListener("click", ca), C.removeEventListener("change", lr), C.removeEventListener("keydown", aa), C.removeEventListener("mousedown", Zr), k.removeEventListener("click", ca), k.removeEventListener("change", lr), k.removeEventListener("keydown", aa), ["daily", "hourly"].forEach(vt), C.remove(), k.remove();
    }
  };
}
const ki = "#E1E1E1", tu = "#F7F4F0", mc = "#03a9f4", ae = 14, oe = 172;
let O1 = 0;
const Me = (o) => Math.round(o * 100) / 100, _o = (o, r, i) => Math.max(r, Math.min(i, o)), tn = (o, r, i, l, f, b) => '<rect x="' + Me(o) + '" y="' + Me(r) + '" width="' + Me(i) + '" height="' + Me(l) + '" fill="' + f + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", gc = (o) => o.map((r, i) => (i ? "L" : "M") + Me(r[0]) + " " + Me(r[1])).join("");
function bc(o) {
  const r = (o == null ? void 0 : o.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const pn = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function I1(o) {
  const r = o < 2 ? o + 24 : o;
  let i = pn[0], l = pn[pn.length - 1];
  for (let v = 0; v < pn.length - 1; v++) if (r >= pn[v][0] && r <= pn[v + 1][0]) {
    i = pn[v], l = pn[v + 1];
    break;
  }
  const f = (r - i[0]) / (l[0] - i[0]), b = f * f * (3 - 2 * f), g = (v, L) => {
    const T = parseInt(v.slice(1), 16), C = parseInt(L.slice(1), 16);
    return "#" + [16, 8, 0].map((B) => Math.round((T >> B & 255) + ((C >> B & 255) - (T >> B & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: g(i[1][0], l[1][0]), bot: g(i[1][1], l[1][1]), warm: g(i[1][2], l[1][2]), cool: g(i[1][3], l[1][3]), op: i[1][4] + (l[1][4] - i[1][4]) * b, t: r };
}
function F1(o) {
  const r = parseInt(o.slice(1), 16), i = (r >> 16 & 255) / 255, l = (r >> 8 & 255) / 255, f = (r & 255) / 255, b = Math.max(i, l, f), g = Math.min(i, l, f);
  let v = 0, L = 0;
  const T = (b + g) / 2;
  if (b !== g) {
    const C = b - g;
    L = T > 0.5 ? C / (2 - b - g) : C / (b + g), v = (b === i ? (l - f) / C + (l < f ? 6 : 0) : b === l ? (f - i) / C + 2 : (i - l) / C + 4) / 6;
  }
  return [v * 360, L * 100, T * 100];
}
function hf(o, r, i) {
  r = _o(r, 0, 100) / 100, i = _o(i, 0, 100) / 100;
  const l = (g) => (g + o / 30) % 12, f = r * Math.min(i, 1 - i), b = (g) => i - f * Math.max(-1, Math.min(l(g) - 3, Math.min(9 - l(g), 1)));
  return "#" + [b(0), b(8), b(4)].map((g) => Math.round(g * 255).toString(16).padStart(2, "0")).join("");
}
const [mf, gf, bf] = F1(ki), eu = hf(mf, gf, Math.max(6, bf - 14)), q1 = hf(mf, gf, Math.min(96, bf + 16));
function W1(o, r, i, l, f) {
  const b = oe / 2, g = oe * 0.12, v = b - (b - g) * o, L = (J) => J ** 1.3, T = _o(i, -1.5, 1.5), C = (J) => -(Math.abs(T) * 4.6 * J ** 1.5) * Math.sign(T), B = o * 1.4, k = (J, Q) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (Q ? 1 : -1) * Math.sign(i || 1), O = Q ? J + v : J, tt = Q ? J : J + v, rt = (kt) => O + C(kt) + z * Math.sin(kt * Math.PI * 1.2 + l) * L(kt) * 1.4 + B * Math.sin(kt * Math.PI * 2 + l * 0.6) * L(kt) * (Q ? 1 : -1), ct = [[tt, ae]];
    for (let kt = 0; kt <= 12; kt++) ct.push([rt(kt / 12), ae + oe * kt / 12]);
    ct.push([tt, ae + oe]);
    let et = '<path d="' + gc(ct) + 'Z" fill="' + ki + '"/>';
    if (f) return et;
    const F = 1.35 + ((Q ? i > 0 : i < 0) ? 0.35 : 0), $ = (kt) => {
      const Pt = kt / 7, H = Q ? 1 - Pt : Pt, Z = (1 - H) ** 1.3, Wt = J + v * Pt;
      return Array.from({ length: 13 }, (U, st) => {
        const lt = st / 12;
        return [Wt + C(lt) * Z + z * F * Math.sin(lt * Math.PI * 1.2 + l - H * 3.2) * L(lt) * 1.4 * Z + B * 1.6 * Math.sin(lt * Math.PI * 2 + l * 0.6 - H * 2.5) * L(lt) * o * (0.4 + 0.6 * Z), ae + oe * lt];
      });
    }, ht = [1, 2, 3, 4, 5, 6].map($);
    for (let kt = 0; kt < 6; kt += 2) et += '<path d="' + gc(ht[kt]) + gc(ht[kt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, q = b - (b - g) * r;
  return { body: k(ae, !0) + k(ae + oe - v, !1), rails: [{ x: ae + q - 4, y: ae, w: 4, h: oe }, { x: ae + oe - q, y: ae, w: 4, h: oe }], head: 6.4 };
}
function V1(o, r, i) {
  const l = oe * (1 - o);
  let f = "";
  if (l > 1 && (f += tn(ae, ae, oe, l, ki), !i))
    for (let b = 1; b < 7; b += 2) f += tn(ae + oe * b / 7, ae, oe / 7, l, "#fff");
  return { body: f, rails: [{ x: ae, y: ae + oe * (1 - r) - 7, w: oe, h: 11 }], head: 10.4 };
}
function j1(o, r, i, l) {
  const f = 9 - 7 * (i / 100), b = ae + oe * (1 - o), g = Math.ceil(oe / 10) + 1, v = ae + f / 2, L = (ae + oe - f / 2 - v) / (g - 1), T = 0.8, C = 0.6, B = Array.from({ length: g }, (J, Q) => Math.max(v + Q * C, Math.min(v + Q * L, b - f / 2 - (g - 1 - Q) * C))), k = B.slice(0, -1).map((J, Q) => _o((B[Q + 1] - J - C) / (L - C), 0, 1));
  k.push(k[g - 2]);
  let q = "";
  return B.forEach((J, Q) => {
    const z = T + (f - T) * k[Q], O = Math.max(0.5, z / 2), tt = Math.max(0.4, z * 0.114);
    q += tn(ae, J - O, oe, Math.max(1, z), ki), !l && z > 2.2 && (q += tn(ae, J + O - tt, oe, tt, eu) + tn(ae, J - O, oe, tt * 0.55, q1, 0.75));
  }), l || [0.22, 0.78].forEach((J) => {
    q += tn(ae + oe * J - 0.7, ae, 1.4, Math.max(0, B[g - 1] + 1 - ae), eu, 0.85);
  }), { body: q, rails: [{ x: ae, y: ae + oe * (1 - r) - 8, w: oe, h: 8 }], head: 8.8 };
}
const au = (o, r, i, l, f, b, g) => o === "curtain" ? W1(r, i, f, b, g) : o === "venetian" ? j1(r, i, l, g) : V1(r, i, g);
function z1(o, r) {
  let i = "", l = "";
  return r.forEach((f) => {
    const b = f.w > f.h, g = _o(b ? ae + oe / 2 : f.x + f.w / 2, 17, 183), v = _o(b ? f.y + f.h / 2 : ae + oe / 2, 17, 183);
    i += b ? tn(ae, _o(f.y + f.h / 2, ae, ae + oe) - 1, oe, 2, mc) : tn(_o(f.x + f.w / 2, ae, ae + oe) - 1, ae, 2, oe, mc);
    const L = b ? "M" + Me(g - 4) + " " + Me(v - 3) + "l4 -3l4 3M" + Me(g - 4) + " " + Me(v + 3) + "l4 3l4 -3" : "M" + Me(g - 3) + " " + Me(v - 4) + "l-3 4l3 4M" + Me(g + 3) + " " + Me(v - 4) + "l3 4l-3 4";
    l += '<circle cx="' + Me(g) + '" cy="' + Me(v) + '" r="11" fill="' + mc + '" filter="url(#' + o + 's)"/><path d="' + L + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: l };
}
function G1(o, r) {
  const i = /* @__PURE__ */ new Date(), l = I1(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(l.t * 0.5), b = l.t >= 5 && l.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (l.t - 5) / 15) : 80, g = au(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), v = r.ghostAlpha > 4e-3 && r.ghost != null ? au(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", L = r.grip > 4e-3 ? z1(o, g.rails) : null, T = (C) => tn(ae, ae, oe, oe, C);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + l.top + '"/><stop offset="1" stop-color="' + l.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + Me(f) + '%" cy="' + Me(b) + '%" r="58%"><stop offset="0" stop-color="' + l.warm + '" stop-opacity="' + Me(l.op * 0.8) + '"/><stop offset="1" stop-color="' + l.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + Me(100 - f * 0.8) + '%" cy="' + Me(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + l.cool + '" stop-opacity="' + Me(l.op * 0.64) + '"/><stop offset="1" stop-color="' + l.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + tu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + T("url(#" + o + "l)") + T("url(#" + o + "w)") + T("url(#" + o + "k)") + (v ? '<g opacity="' + Me(r.ghostAlpha) + '">' + v + "</g>" : "") + g.body + '<rect x="14" y="14" width="172" height="' + g.head + '" fill="' + ki + '" filter="url(#' + o + 's)"/></g>' + (L ? '<g clip-path="url(#' + o + 'c)" opacity="' + Me(r.grip) + '">' + L.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + tu + '" stroke-width="3"/>' + (L ? '<g opacity="' + Me(r.grip) + '">' + L.knobs + "</g>" : "") + "</svg>";
}
function $1({ onMove: o, onSet: r }) {
  var et;
  const i = "cv" + ++O1, l = document.createElement("div");
  l.className = "tfCoverArt";
  const f = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let b = null;
  const g = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let v = 0, L = !1, T = !1, C = null, B = 0, k = 0;
  const q = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", J = () => C || L || T || b.moving || b.target != null ? 1 : f ? performance.now() < k ? 1 : 0.4 : 0, Q = () => {
    l.innerHTML = G1(i, { kind: b.kind, pos: g.pos, bar: b.target ?? g.pos, tilt: g.tilt, vel: g.vel, ph: g.ph, ghost: g.gpos, ghostAlpha: g.ghost, grip: g.grip });
  };
  function z(F) {
    v = 0;
    const $ = g.last ? Math.min(0.064, (F - g.last) / 1e3) : 1 / 60, ht = $ * 60;
    g.last = F;
    const kt = b.pos - g.pos, Pt = g.pos;
    g.pos += Math.sign(kt) * Math.min(Math.abs(kt), Math.max(10.5, Math.abs(kt) * 1.4) * $), Math.abs(b.pos - g.pos) < 0.03 && (g.pos = b.pos), g.vel = g.vel * 0.86 + (g.pos - Pt) / ht * 0.14, Math.abs(g.vel) < 0.015 && g.pos === b.pos && (g.vel = 0), (g.pos !== Pt || g.vel) && (g.ph += (0.06 + Math.abs(g.vel) * 0.03) * ht);
    const H = b.tilt - g.tilt;
    g.tilt += Math.sign(H) * Math.min(Math.abs(H), Math.max(60, Math.abs(H) * 4) * $);
    const Z = J();
    g.grip += (Z - g.grip) * Math.min(1, $ * (Z > g.grip ? 11 : 3.5)), Math.abs(Z - g.grip) < 0.01 && (g.grip = Z);
    const Wt = b.target != null && Math.abs(b.target - g.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (g.gpos = b.target), g.ghost += (Wt - g.ghost) * Math.min(1, $ * (Wt > g.ghost ? 16 : 3)), Math.abs(Wt - g.ghost) < 4e-3 && (g.ghost = Wt), Q(), g.pos !== b.pos || g.vel || g.tilt !== b.tilt || g.grip !== Z || g.ghost !== Wt ? v = requestAnimationFrame(z) : g.last = 0;
  }
  const O = () => {
    b && !v && (v = requestAnimationFrame(z));
  }, tt = setInterval(() => {
    b && !v && Q();
  }, 60 * 1e3), rt = (F) => {
    const $ = l.getBoundingClientRect();
    return q() === "x" ? (F.clientX - $.left) / $.width : (F.clientY - $.top) / $.height;
  };
  l.addEventListener("pointerdown", (F) => {
    var kt;
    if (!(b != null && b.canSet) || F.button > 0) return;
    F.preventDefault(), (kt = l.setPointerCapture) == null || kt.call(l, F.pointerId);
    const $ = b.target ?? b.pos, ht = l.getBoundingClientRect();
    C = { p0: rt(F), from: $, x0: F.clientX, value: null, side: null }, b.kind === "curtain" && $ > 0 && (C.side = (F.clientX - ht.left) / ht.width < 0.5 ? "L" : "R"), O();
  }), l.addEventListener("pointermove", (F) => {
    if (!C) return;
    let $;
    if (b.kind === "curtain") {
      if (!C.side) {
        const kt = F.clientX - C.x0;
        if (Math.abs(kt) < 4) return;
        C.side = kt < 0 ? "L" : "R";
      }
      const ht = (oe / 2 - oe * 0.12) / 200;
      $ = C.from + (C.side === "L" ? -1 : 1) * ((rt(F) - C.p0) / ht) * 100;
    } else $ = C.from - (rt(F) - C.p0) / (oe / 200) * 100;
    C.value = _o($, 0, 100), o(C.value);
  });
  const ct = () => {
    if (!C) return;
    const F = C.value;
    C = null, F != null && r(Math.round(F)), O();
  };
  return l.addEventListener("pointerup", ct), l.addEventListener("pointercancel", ct), l.addEventListener("lostpointercapture", ct), l.addEventListener("pointerenter", () => {
    L = !0, O();
  }), l.addEventListener("pointerleave", () => {
    L = !1, O();
  }), l.addEventListener("focus", () => {
    T = l.matches(":focus-visible"), O();
  }), l.addEventListener("blur", () => {
    T = !1, O();
  }), l.addEventListener("keydown", (F) => {
    if (!(b != null && b.canSet)) return;
    const $ = Math.round(b.target ?? b.pos), ht = F.shiftKey ? 10 : 1, kt = { ArrowUp: $ + ht, ArrowRight: $ + ht, ArrowDown: $ - ht, ArrowLeft: $ - ht, PageUp: $ + 25, PageDown: $ - 25, Home: 0, End: 100 }[F.key];
    if (kt == null) return;
    F.preventDefault();
    const Pt = _o(kt, 0, 100);
    o(Pt), clearTimeout(B), B = setTimeout(() => r(Pt), 500);
  }), {
    el: l,
    update(F) {
      const $ = !b;
      b = F, $ && (g.pos = b.pos, g.tilt = b.tilt, k = performance.now() + 1500, f && setTimeout(O, 1600)), l.classList.toggle("x", q() === "x"), l.classList.toggle("y", q() === "y"), b.canSet ? (l.tabIndex = 0, l.setAttribute("role", "slider"), l.setAttribute("aria-valuemin", "0"), l.setAttribute("aria-valuemax", "100"), l.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), l.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : l.setAttribute("role", "img"), l.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), l.setAttribute("aria-valuetext", b.text), O();
    },
    destroy() {
      cancelAnimationFrame(v), v = 0, clearInterval(tt), clearTimeout(B), l.remove();
    }
  };
}
const ta = (o) => Math.round(o * 100) / 100, Aa = (o) => o * Math.PI / 180, hn = (o, r, i) => o + (r - o) * i, wc = {
  iso: { yaw: 45, pitch: 35.26, label: "Isometric" },
  three: { yaw: 22, pitch: 50, label: "Three-quarter" },
  tilted: { yaw: 7, pitch: 66, label: "Tilted" },
  front: { yaw: 0, pitch: 60, label: "Front" },
  // straight on, angled up 30° from Flat so the front edges show it is 3D
  flat: { yaw: 0, pitch: 90, label: "Flat" }
  // dead straight on; only the shadows show depth
};
function ou(o, r, i, l = 45, f = 35.26) {
  const b = o * Math.sqrt(1.5), g = Math.cos(Aa(l)), v = Math.sin(Aa(l)), L = Math.cos(Aa(f)), T = Math.sin(Aa(f)), C = 0.68, B = 0.12;
  return {
    U: o,
    ox: r,
    oy: i,
    yaw: l,
    V: [v * L, g * L, T],
    L: [C * g + B * v, -C * v + B * g],
    k: b,
    cy: g,
    sy: v,
    sp: T,
    cp: L,
    p: ([k, q, J]) => {
      const Q = k * g - q * v, z = k * v + q * g;
      return [r + Q * b, i + (z * T - J * L) * b];
    },
    // screen point → world x, y on the plane at height z
    ground(k, q, J) {
      const Q = (k - r) / b, z = ((q - i) / b + J * L) / T;
      return [Q * g + z * v, -Q * v + z * g];
    }
  };
}
const Kn = (o, r = !0) => "M" + o.map(([i, l]) => `${ta(i)} ${ta(l)}`).join("L") + (r ? "Z" : "");
function Co(o, r, i, l = 7) {
  const f = [], b = [[o / 2 - i, r / 2 - i, 0], [-(o / 2 - i), r / 2 - i, 90], [-(o / 2 - i), -(r / 2 - i), 180], [o / 2 - i, -(r / 2 - i), 270]];
  for (const [g, v, L] of b)
    for (let T = 0; T <= l; T++) {
      const C = Aa(L + 90 * T / l);
      f.push([g + i * Math.cos(C), v + i * Math.sin(C)]);
    }
  return f;
}
const Ga = (o, r = 56) => Array.from({ length: r }, (i, l) => [o * Math.cos(2 * Math.PI * l / r), o * Math.sin(2 * Math.PI * l / r)]);
function $e(o, r, i, l = !0, f = (b, g, v) => [b, g, v]) {
  const b = o.length, g = [...o.map(([L, T]) => f(L, T, r)), ...o.map(([L, T]) => f(L, T, i))], v = [
    { idx: o.map((L, T) => T), smooth: !1 },
    { idx: o.map((L, T) => b + T), smooth: !1 }
  ];
  for (let L = 0; L < b; L++) {
    const T = (L + 1) % b;
    v.push({ idx: [L, T, b + T, b + L], smooth: l });
  }
  return { verts: g, faces: v };
}
const Rr = (o, r) => ({ ...o, verts: o.verts.map(r) }), Ds = (o, r, i) => ([l, f, b]) => [l + o, f + r, b + i], vc = (o, r = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [r + (b - r) * l - (g - i) * f, i + (b - r) * f + (g - i) * l, v];
}, nu = (o, r = 0, i = 0) => {
  const l = Math.cos(Aa(o)), f = Math.sin(Aa(o));
  return ([b, g, v]) => [b, r + (g - r) * l + (v - i) * f, i - (g - r) * f + (v - i) * l];
}, U1 = (o, r) => [o[0] - r[0], o[1] - r[1], o[2] - r[2]], ru = (o, r) => o[0] * r[0] + o[1] * r[1] + o[2] * r[2], iu = (o) => o.reduce((r, i) => [r[0] + i[0] / o.length, r[1] + i[1] / o.length, r[2] + i[2] / o.length], [0, 0, 0]);
function Y1(o) {
  const r = [0, 0, 0];
  for (let i = 0; i < o.length; i++) {
    const l = o[i], f = o[(i + 1) % o.length];
    r[0] += (l[1] - f[1]) * (l[2] + f[2]), r[1] += (l[2] - f[2]) * (l[0] + f[0]), r[2] += (l[0] - f[0]) * (l[1] + f[1]);
  }
  return r;
}
function wf(o, r = [1, 1, 1]) {
  const i = iu(o.verts);
  return o.faces.map((l) => {
    const f = l.idx.map((g) => o.verts[g]);
    let b = Y1(f);
    return ru(b, U1(iu(f), i)) < 0 && (b = [-b[0], -b[1], -b[2]]), ru(b, r) > 1e-6 * Math.hypot(...b);
  });
}
const mn = (o, r, i) => Kn(r.faces[i].idx.map((l) => o.p(r.verts[l])));
function Ue(o, r, i = "", l = "") {
  const f = r.verts.map(o.p), b = wf(r, o.V);
  let g = "";
  r.faces.forEach((T, C) => {
    b[C] && (g += Kn(T.idx.map((B) => f[B])));
  });
  const v = /* @__PURE__ */ new Map();
  r.faces.forEach((T, C) => {
    for (let B = 0; B < T.idx.length; B++) {
      const k = T.idx[B], q = T.idx[(B + 1) % T.idx.length], J = k < q ? `${k}-${q}` : `${q}-${k}`;
      v.has(J) || v.set(J, { a: k, b: q, fs: [] }), v.get(J).fs.push(C);
    }
  });
  let L = "";
  for (const { a: T, b: C, fs: B } of v.values()) {
    const [k, q] = B, J = b[k], Q = q === void 0 ? !1 : b[q], z = q !== void 0 && r.faces[k].smooth && r.faces[q].smooth;
    (J !== Q || J && Q && !z) && (L += `M${ta(f[T][0])} ${ta(f[T][1])}L${ta(f[C][0])} ${ta(f[C][1])}`);
  }
  return `<g${i ? ` data-part="${i}"` : ""}${l ? ` class="${l}"` : ""}><path class="face" d="${g}"/><path class="edge" d="${L}"/></g>`;
}
function Z1(o) {
  const r = [...o].sort((b, g) => b[0] - g[0] || b[1] - g[1]), i = (b, g, v) => (g[0] - b[0]) * (v[1] - b[1]) - (g[1] - b[1]) * (v[0] - b[0]), l = [], f = [];
  for (const b of r) {
    for (; l.length >= 2 && i(l[l.length - 2], l[l.length - 1], b) <= 0; ) l.pop();
    l.push(b);
  }
  for (const b of r.reverse()) {
    for (; f.length >= 2 && i(f[f.length - 2], f[f.length - 1], b) <= 0; ) f.pop();
    f.push(b);
  }
  return l.slice(0, -1).concat(f.slice(0, -1));
}
let K1 = 0;
function Ta(o, r, i, l, f = "") {
  const b = r.verts.filter((L) => L[2] >= i - 0.01).map(([L, T, C]) => o.p([L + (C - i) * o.L[0], T + (C - i) * o.L[1], i]));
  if (b.length < 3) return "";
  const g = Kn(Z1(b));
  if (!f) return `<path class="shade" fill="url(#${l})" d="${g}"/>`;
  const v = `clip${++K1}`;
  return `<clipPath id="${v}"><path d="${f}"/></clipPath><path class="shade" fill="url(#${l})" clip-path="url(#${v})" d="${g}"/>`;
}
const Zn = (o, r, i = "edge", l = !0) => `<path class="${i}" d="${Kn(r.map(o.p), l)}"/>`, So = (o, r, i, l = "edge") => {
  const [f, b] = o.p(r), [g, v] = o.p(i);
  return `<path class="${l}" d="M${ta(f)} ${ta(b)}L${ta(g)} ${ta(v)}"/>`;
};
function vf(o, r, i, l, { part: f = "", cls: b = "", w: g = 0 } = {}) {
  const [v, L] = o.p(r), T = o.k, C = `matrix(${ta(T * o.cy)} ${ta(T * o.sy * o.sp)} ${ta(-T * o.sy)} ${ta(T * o.cy * o.sp)} ${ta(v)} ${ta(L)})`, B = g ? `<rect x="${-g / 2}" y="${-l * 0.9}" width="${g}" height="${l * 1.8}" fill="transparent"/>` : "";
  return `<g transform="${C}"${f ? ` data-part="${f}"` : ""}>${B}<text class="st ${b}" font-size="${l}" text-anchor="middle" dominant-baseline="central">${i}</text></g>`;
}
class X1 {
  constructor(r, i = 0.24, l = 0.62) {
    this.x = r, this.t = r, this.v = 0, this.k = i, this.d = l;
  }
  step() {
    return this.v = (this.v + (this.t - this.x) * this.k) * this.d, this.x += this.v, Math.abs(this.v) < 1e-3 && Math.abs(this.t - this.x) < 1e-3 ? (this.x = this.t, this.v = 0, !1) : !0;
  }
}
const J1 = "http://www.w3.org/2000/svg", Q1 = matchMedia("(prefers-reduced-motion: reduce)");
let tg = 0;
class Nr {
  constructor(r, i = {}) {
    mp(this, "tick", () => {
      let r = !1;
      for (const i of this.springs) r = i.step() || r;
      this.paint(), this.raf = r ? requestAnimationFrame(this.tick) : 0;
    });
    this.id = `ctl${++tg}`, this.opts = i, this.onChange = i.onChange || (() => {
    }), this.springs = [];
    const l = wc[i.camera] || wc.iso;
    this.yaw = this.spring(l.yaw, 0.12, 0.7), this.pitch = this.spring(l.pitch, 0.12, 0.7), this.fillAmt = this.spring(i.fill ? 1 : 0, 0.14, 0.7), this.lift = 20;
    const f = this.svg = document.createElementNS(J1, "svg");
    f.setAttribute("viewBox", "0 0 400 400"), f.setAttribute("class", "iso"), f.tabIndex = 0, r.prepend(f), f.addEventListener("pointerdown", (g) => {
      var L, T, C, B;
      const v = (C = (T = (L = g.target).closest) == null ? void 0 : T.call(L, "[data-part]")) == null ? void 0 : C.dataset.part;
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
  pt(r) {
    const i = this.svg.getBoundingClientRect();
    return [(r.clientX - i.left) * 400 / i.width, (r.clientY - i.top) * 400 / i.height];
  }
  // the view is worked out from the camera springs each frame, so a camera change glides
  get v() {
    const [r, i, l] = this.base, f = this.fillAmt.x, b = ou(r, i, l, this.yaw.x, this.pitch.x);
    return f < 1e-3 ? b : ou(r, hn(i, 200, f), hn(l, 200 + this.lift * b.cp * b.k / 2, f), this.yaw.x, this.pitch.x);
  }
  setFill(r) {
    this.fillAmt.t = r ? 1 : 0, this.kick();
  }
  // Fill: the plate's width and depth so it fills 352 × 352 of the Space at this camera. Only works while the
  // control faces us (yaw under ~30°); at isometric the corners point at us, so it keeps its drawn size.
  size(r, i) {
    const l = this.fillAmt.x;
    if (l < 1e-3) return [r, i];
    const f = this.v, b = f.cy, g = Math.abs(f.sy), v = b * b - g * g;
    if (v < 0.4) return [r, i];
    const L = 352 / f.k, T = (352 / f.k - this.lift * f.cp) / f.sp, C = Math.max(r * 0.6, (L * b - T * g) / v), B = Math.max(i * 0.6, (T * b - L * g) / v);
    return [hn(r, C, l), hn(i, B, l)];
  }
  setCamera(r) {
    const i = wc[r];
    i && (this.yaw.t = i.yaw, this.pitch.t = i.pitch, this.kick());
  }
  spring(r, i, l) {
    const f = new X1(r, i, l);
    return this.springs.push(f), f;
  }
  kick() {
    if (Q1.matches) {
      this.springs.forEach((r) => {
        r.x = r.t, r.v = 0;
      }), this.paint();
      return;
    }
    this.raf || (this.raf = requestAnimationFrame(this.tick));
  }
  paint() {
    const r = `${this.id}h`;
    this.svg.innerHTML = `<defs><pattern id="${r}" patternUnits="userSpaceOnUse" width="3.4" height="3.4" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="3.4" class="hatch"/></pattern></defs>` + this.render(r);
  }
}
class eg extends Nr {
  constructor(r, i) {
    super(r, i), this.base = [3.4, 200, 190], this.lift = 21, this.h = this.spring(10, 0.32, 0.55), this.glow = this.spring(0, 0.05, 0.8), this.svg.setAttribute("role", "button"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  down(r) {
    r === "cap" && (this.pressing = !0, this.h.t = 2.5);
  }
  up() {
    this.pressing && (this.pressing = !1, this.h.t = 10, this.glow.x = 1, this.glow.t = 0, this.onChange());
  }
  key(r, i) {
    return r.key !== " " && r.key !== "Enter" ? !1 : (i && !this.pressing && this.down("cap"), i || this.up(), !0);
  }
  show() {
  }
  render(r) {
    const i = this.v, l = 11 + this.h.x, [f, b] = this.size(68, 68), g = Math.min(f, b) / 68, v = $e(Co(f, b, 18 * g), 0, 8), L = $e(Ga(25 * g), 8, 11), T = $e(Ga(18.5 * g), 11, l), C = Ga(12.5 * g).map(([k, q]) => [k, q, l]), B = Math.max(0, Math.min(1, this.glow.x));
    return Ta(i, v, 0, r) + Ue(i, v) + Ue(i, L, "cap") + Ta(i, T, 11, r, mn(i, L, 1)) + Ue(i, T, "cap") + Zn(i, C) + (B > 0.01 ? `<g style="opacity:${B.toFixed(3)}">${Zn(i, C, "accent")}</g>` : "");
  }
}
class ag extends Nr {
  constructor(r, i) {
    super(r, i), this.on = !!i.on, this.base = [2.75, 200, 186], this.lift = 21, this.t = this.spring(this.on ? 1 : 0, 0.3, 0.5), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(r) {
    this.on = r, this.t.t = r ? 1 : 0, this.svg.setAttribute("aria-checked", r), this.onChange(r);
  }
  down(r) {
    r === "paddle" && this.set(!this.on);
  }
  key(r, i) {
    return r.key !== " " && r.key !== "Enter" ? !1 : (i && !r.repeat && this.set(!this.on), !0);
  }
  // from the device: moves without sending anything back
  show(r) {
    this.held || (this.on = r, this.t.t = r ? 1 : 0, this.svg.setAttribute("aria-checked", r), this.kick());
  }
  render(r) {
    const i = this.v, l = this.t.x, [f, b] = this.size(72, 96), g = f / 72, v = b / 96, L = Math.min(g, v), T = 9, C = hn(3, 12, l), B = hn(12, 3, l), k = (C + B) / 2 - 1.4, q = 31 * v, J = $e(Co(f, b, 16 * L), 0, 6), Q = $e(Co(48 * g, 72 * v, 9 * L), 6, T), z = [[-q, T], [q, T], [q, T + B], [0, T + k], [-q, T + C]], O = $e(z, -20 * g, 20 * g, !1, (et, F, $) => [$, et, F]), tt = (et) => T + (et < 0 ? hn(C, k, (et + q) / q) : hn(k, B, et / q)) + 0.05, rt = Ga(4.2 * L, 36).map(([et, F]) => [et, F - q / 2, tt(F - q / 2)]), ct = [[0, q * 0.32], [0, q * 0.68]].map(([et, F]) => [et, F, tt(F)]);
    return Ta(i, J, 0, r) + Ue(i, J) + Ue(i, Q, "paddle") + Ta(i, O, T, r, mn(i, Q, 1)) + Ue(i, O, "paddle") + Zn(i, rt, this.on ? "edge mark" : "accent mark") + So(i, ct[0], ct[1], this.on ? "accent mark" : "edge mark");
  }
}
class og extends Nr {
  constructor(r, i) {
    super(r, i), this.level = i.value ?? 0.6, this.base = [2.35, 200, 190], this.lift = 19, this.L = this.spring(this.level, 0.32, 0.6), this.kh = this.spring(13, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(r) {
    this.level = Math.max(0, Math.min(1, r)), this.L.t = this.level, this.svg.setAttribute("aria-valuenow", Math.round(this.level * 100)), this.onChange(this.level);
  }
  down(r, i) {
    this.grab = { p: i, level: this.level }, this.kh.t = 9.5;
  }
  drag(r) {
    if (!this.grab) return;
    const i = this.v, l = i.p([0, 0, 0]), f = i.p([0, 1, 0]), b = [f[0] - l[0], f[1] - l[1]], g = ((r[0] - this.grab.p[0]) * b[0] + (r[1] - this.grab.p[1]) * b[1]) / (b[0] ** 2 + b[1] ** 2);
    this.set(this.grab.level - g / (this.travel || 96));
  }
  up() {
    this.grab = null, this.kh.t = 13;
  }
  key(r, i) {
    const l = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05 }[r.key];
    return l === void 0 ? !1 : (i ? (this.set(Math.round((this.level + l) * 20) / 20), this.kh.t = 10.5) : this.kh.t = 13, !0);
  }
  show(r) {
    this.held || (this.level = Math.max(0, Math.min(1, r)), this.L.t = this.level, this.svg.setAttribute("aria-valuenow", Math.round(this.level * 100)), this.kick());
  }
  render(r) {
    const i = this.v, l = this.size(44, 136)[1], f = 44, b = 1, g = l / 136, v = 1, L = 48 * g, T = 6 + this.kh.x, C = L - this.L.x * 2 * L;
    this.travel = 2 * L;
    const B = Math.min(32 * b, f - 12), k = B / 32, q = $e(Co(f, l, 16 * v), 0, 6), J = Rr($e(Co(B, 16 * v, 5 * v), 6, T), Ds(0, C, 0));
    let Q = "";
    for (let tt = 0; tt <= 10; tt++) {
      const rt = L - tt * (2 * L) / 10, ct = (tt % 5 === 0 ? 7 : 4) * b, et = 9 * v;
      Q += So(i, [et, rt, 6], [et + ct, rt, 6]) + So(i, [-et, rt, 6], [-et - ct, rt, 6]);
    }
    const z = Co(6 * v, 2 * L + 6 * v, 3 * v).map(([tt, rt]) => [tt, rt, 6]), O = [[-3 * v, L + 3 * v, 6], [3 * v, L + 3 * v, 6], [3 * v, C, 6], [-3 * v, C, 6]];
    return Ta(i, q, 0, r) + Ue(i, q, "plate") + `<g class="deco">${Q}${Zn(i, z)}<path class="level" d="${Kn(O.map(i.p))}"/></g>` + Ta(i, J, 6, r, mn(i, q, 1)) + Ue(i, J, "knob") + `<g class="deco">${So(i, [-12 * k, C, T], [12 * k, C, T])}${So(i, [-8 * k, C - 3.5 * v, T], [8 * k, C - 3.5 * v, T])}${So(i, [-8 * k, C + 3.5 * v, T], [8 * k, C + 3.5 * v, T])}</g>`;
  }
}
class ng extends Nr {
  constructor(r, i) {
    super(r, i), this.min = i.min ?? 10, this.max = i.max ?? 30, this.now = i.now ?? 19.5, this.value = i.value ?? 21.5, this.base = [2.85, 200, 194], this.lift = 22, this.val = this.spring(this.value, 0.35, 0.5), this.kh = this.spring(15, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  // the scale's angle as the viewer sees it: the gap always faces us, min on the left, max on the right
  ang(r) {
    return 135 + (r - this.min) / (this.max - this.min) * 270 - this.yaw.x;
  }
  set(r) {
    const i = Math.max(this.min, Math.min(this.max, Math.round(r * 2) / 2));
    i !== this.value && (this.value = i, this.onChange(i)), this.val.t = i, this.svg.setAttribute("aria-valuenow", i);
  }
  angleAt(r) {
    const [i, l] = this.v.ground(r[0], r[1], 7 + this.kh.x);
    return Math.atan2(l, i) * 180 / Math.PI;
  }
  down(r, i) {
    this.grab = { last: this.angleAt(i), raw: this.value }, this.kh.t = 11.5;
  }
  drag(r) {
    if (!this.grab) return;
    const i = this.angleAt(r);
    let l = i - this.grab.last;
    l > 180 && (l -= 360), l < -180 && (l += 360), this.grab.last = i, this.grab.raw = Math.max(this.min, Math.min(this.max, this.grab.raw + l / 270 * (this.max - this.min))), this.set(this.grab.raw);
  }
  up() {
    this.grab = null, this.kh.t = 15;
  }
  key(r, i) {
    const l = { ArrowUp: 0.5, ArrowRight: 0.5, ArrowDown: -0.5, ArrowLeft: -0.5 }[r.key];
    return l === void 0 ? !1 : (i ? (this.set(this.value + l), this.kh.t = 12.5) : this.kh.t = 15, !0);
  }
  show(r, i) {
    this.held || (i != null && (this.now = i), r != null && (this.value = r, this.val.t = r, this.svg.setAttribute("aria-valuenow", r)), this.kick());
  }
  render(r) {
    const i = this.v, l = 7 + this.kh.x, f = this.ang(this.val.x), [b, g] = this.size(92, 92), v = b / 92, L = g / 92, T = Math.min(v, L), C = (rt, ct, et) => [rt * Math.cos(ct) * v, rt * Math.sin(ct) * L, et], B = $e(Ga(46, 72).map(([rt, ct]) => [rt * v, ct * L]), 0, 7), k = $e(Ga(22 * T, 64), 7, l), q = Math.min(this.now, this.value), J = Math.max(this.now, this.value);
    let Q = "";
    for (let rt = 0; rt <= (this.max - this.min) * 2; rt++) {
      const ct = this.min + rt / 2, et = Aa(this.ang(ct)), F = rt % 10 === 0 ? 36.5 : rt % 2 === 0 ? 34.5 : 33.2, $ = ct >= q && ct <= J && this.value > this.now;
      Q += So(i, C(30, et, 7), C(F, et, 7), $ ? "accent" : "edge"), rt % 10 === 0 && (Q += vf(i, C(41, et, 7), ct, 4 * T));
    }
    let z = "";
    for (let rt = 0; rt < 40; rt++) {
      const ct = Aa(f + rt * 9), et = Math.cos(ct), F = Math.sin(ct), $ = 22 * T;
      et * i.V[0] + F * i.V[1] > 0.12 * Math.hypot(i.V[0], i.V[1]) && (z += So(i, [$ * et, $ * F, 9], [$ * et, $ * F, l - 2.2]));
    }
    const O = Aa(f), tt = Ga(18.5 * T, 64).map(([rt, ct]) => [rt, ct, l]);
    return Ta(i, B, 0, r) + Ue(i, B, "knob") + `<g class="deco">${Q}</g>` + Ta(i, k, 7, r, mn(i, B, 1)) + Ue(i, k, "knob") + `<g class="deco">${z}${Zn(i, tt)}${So(i, [5 * T * Math.cos(O), 5 * T * Math.sin(O), l], [15.5 * T * Math.cos(O), 15.5 * T * Math.sin(O), l], "edge pointer")}</g>`;
  }
}
class rg extends Nr {
  constructor(r, i) {
    super(r, i), this.positions = i.positions, this.index = i.index ?? 0, this.base = [2.45, 200, 196], this.lift = 21, this.A = this.spring(this.positions[this.index].a, 0.22, 0.6), this.ph = this.spring(9, 0.3, 0.55), this.svg.setAttribute("role", "slider"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  set(r) {
    this.index = (r + this.positions.length) % this.positions.length, this.A.t = this.positions[this.index].a, this.svg.setAttribute("aria-valuetext", this.positions[this.index].label), this.onChange(this.index);
  }
  angleAt(r) {
    const [i, l] = this.v.ground(r[0], r[1], 12);
    return Math.atan2(l, i) * 180 / Math.PI + this.yaw.x;
  }
  down(r, i) {
    if (r.startsWith("pos-")) {
      this.set(+r.slice(4)), this.ph.t = 7, this.grab = null;
      return;
    }
    this.grab = { last: this.angleAt(i), moved: 0 }, this.ph.t = 6.5;
  }
  drag(r) {
    if (!this.grab) return;
    const i = this.angleAt(r);
    let l = i - this.grab.last;
    l > 180 && (l -= 360), l < -180 && (l += 360), this.grab.last = i, this.grab.moved += Math.abs(l);
    const f = this.positions[0].a, b = this.positions[this.positions.length - 1].a;
    this.A.t = Math.max(f - 8, Math.min(b + 8, this.A.t + l));
  }
  up() {
    if (this.ph.t = 9, !!this.grab) {
      if (this.grab.moved < 4) this.set(this.index + 1);
      else {
        let r = 0;
        this.positions.forEach((i, l) => {
          Math.abs(i.a - this.A.t) < Math.abs(this.positions[r].a - this.A.t) && (r = l);
        }), this.set(r);
      }
      this.grab = null;
    }
  }
  key(r, i) {
    const l = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, " ": 1, Enter: 1 }[r.key];
    if (l === void 0) return !1;
    if (i) {
      const f = Math.max(0, Math.min(this.positions.length - 1, this.index + l));
      this.set(r.key === " " || r.key === "Enter" ? this.index + 1 : f), this.ph.t = 7;
    } else this.ph.t = 9;
    return !0;
  }
  show(r) {
    this.held || r === this.index || (this.index = r, this.A.t = this.positions[r].a, this.svg.setAttribute("aria-valuetext", this.positions[r].label), this.kick());
  }
  render(r) {
    const i = this.v, l = this.A.x - this.yaw.x, f = 12 + this.ph.x, [b, g] = this.size(92, 92), v = b / 92, L = g / 92, T = Math.min(v, L), C = $e(Co(b, g, 20 * T), 0, 7), B = $e(Ga(15 * T, 48), 7, 12), k = Rr($e([[-12, -5], [16, -5], [24, 0], [16, 5], [-12, 5]].map(([J, Q]) => [J * T, Q * T]), 12, f, !1), vc(l));
    let q = "";
    return this.positions.forEach((J, Q) => {
      const z = Aa(J.a - this.yaw.x), O = Q === this.index, tt = Math.cos(z), rt = Math.sin(z), ct = Ga(1.7 * T, 20).map(([et, F]) => [et + 26.5 * tt * v, F + 26.5 * rt * L, 7]);
      q += O ? `<path class="dotfill" d="${Kn(ct.map(i.p))}"/>` : Zn(i, ct), q += vf(i, [37.5 * tt * v, 37.5 * rt * L, 7], J.label, 5.6 * T, { part: `pos-${Q}`, cls: O ? "sel" : "", w: 26 });
    }), Ta(i, C, 0, r) + Ue(i, C) + q + Ta(i, k, 7, r, mn(i, C, 1)) + Ue(i, B, "knob") + Ue(i, k, "knob") + `<g class="deco">${So(i, vc(l)([6 * T, 0, f]), vc(l)([19 * T, 0, f]))}</g>`;
  }
}
class ig extends Nr {
  constructor(r, i) {
    super(r, i), this.on = !!i.on, this.base = [2.4, 206, 214], this.lift = 30, this.phi = this.spring(this.on ? 24 : -24, 0.3, 0.5), this.lid = this.spring(0, 0.16, 0.66), this.svg.setAttribute("role", "switch"), this.svg.setAttribute("aria-label", i.label), this.paint();
  }
  get open() {
    return this.lid.t > 0;
  }
  setLid(r) {
    var i, l;
    this.lid.t = r ? 108 : 0, (l = (i = this.opts).onLid) == null || l.call(i, r);
  }
  flip() {
    this.on = !this.on, this.phi.t = this.on ? 24 : -24, this.svg.setAttribute("aria-checked", this.on), this.onChange(this.on);
  }
  down(r) {
    r === "cover" ? this.setLid(!this.open) : r === "toggle" && this.open && this.flip();
  }
  key(r, i) {
    return r.key === "Escape" ? (i && this.setLid(!1), !0) : r.key !== " " && r.key !== "Enter" ? !1 : (i && !r.repeat && (this.open ? this.flip() : this.setLid(!0)), !0);
  }
  show(r) {
    this.held || (this.on = r, this.phi.t = r ? 24 : -24, this.svg.setAttribute("aria-checked", r), this.kick());
  }
  render(r) {
    const i = this.v, l = 6, f = l - 23, b = 6, [g, v] = this.size(86, 104), L = Math.min(g / 86, v / 104), T = ([F, $, ht]) => [F * L, $ * L, 6 + (ht - 6) * L], C = $e(Co(g, v, 18 * L), 0, 6), B = Rr($e(Ga(8, 40), 6, 10), (F) => T(Ds(0, l, 0)(F))), k = (F) => T(Ds(0, l, 10)(nu(this.phi.x)(F))), q = Rr($e(Ga(2.2, 20), 0, 13.5), k), J = Rr($e(Ga(3.8, 24), 12.5, 17.5), k), Q = (F) => T(nu(-this.lid.x, f, b)(F)), z = Rr($e(Co(40, 46, 7), 6, 30), (F) => Q(Ds(0, l, 0)(F))), O = wf(z, i.V);
    let tt = "";
    if (O[1]) {
      let F = "";
      for (let ht = -84; ht <= 84; ht += 12) {
        const kt = [[ht - 40, l - 40], [ht - 34, l - 40], [ht + 46, l + 40], [ht + 40, l + 40]].map(([Pt, H]) => i.p(Q([Pt, H, 30])));
        F += `<path class="level" d="${Kn(kt)}"/>`;
      }
      const $ = `${this.id}s`;
      tt += `<clipPath id="${$}"><path d="${mn(i, z, 1)}"/></clipPath><g clip-path="url(#${$})">${F}</g>`;
    }
    O[0] && (tt += Zn(i, Co(32, 38, 4).map(([F, $]) => Q([F, $ + l, 6]))));
    const rt = `<g data-part="toggle">${Ue(i, B)}${Ue(i, q)}${Ue(i, J)}</g>`, ct = `<g data-part="cover">${Ue(i, z)}<g class="deco">${tt}</g></g>`, et = this.lid.x > 45;
    return Ta(i, C, 0, r) + Ue(i, C) + Ta(i, z, 6, r, mn(i, C, 1)) + Ta(i, J, 6, r, mn(i, C, 1)) + (et ? ct + rt : rt + ct);
  }
}
const su = "homecore-density", lu = "homecore-physical", cu = "homecore-physical-view", du = "homecore-physical-fit", Je = {
  get(o) {
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  set(o, r) {
    try {
      localStorage.setItem(o, r);
    } catch {
    }
  }
}, W = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), pu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', yc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', uu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', xs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, fu = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, hu = 1, sg = 4, mu = 16, gu = 32, lg = 128, cg = 256, bu = 16384, wu = 1, vu = 2, xc = 4, yu = 8, dg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, xu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, pg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, bi = {
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
}, ku = ["covers", "people", "openings", "leaks", "vacuum"], Mu = "homecore_house", Su = "homecore-house-used", wi = ["switch", "fan", "input_boolean", "automation"], _u = "homecore-house-look", ug = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], fg = [["popup", "Popup"], ["sheet", "Sheet"]], hg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], mg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], gg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], vi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', bg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', wg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Cu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', kc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ha = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Mc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', ks = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Sc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', yf = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Ms = yf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Au = yf(["M20 6L9 17L4 12"]), ko = (o, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + W(o || "") + '"' + (r ? ' data-icon-name="' + W(r) + '"' : "") + "></span>", vg = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Tu = 1, Lu = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Du = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ss = ["door", "window", "garage_door", "opening"], Eu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Dr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], yg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], xg = 10, kg = 20, Mg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Sg = ["living room", "bedroom", "office"];
function _g(o, { config: r, getHass: i }) {
  var cp, dp, pp;
  const l = (t) => o.getElementById(t), f = l("app"), b = r || {}, g = String(b.layout || "").toLowerCase().replace("_", "-") === "test-focus", v = String(b.page || "").toLowerCase() === "overview";
  let L = Je.get(su) === "1", T = Je.get(lu) === "1", C = Je.get(cu) || "front", B = Je.get(du) || "fill", k = {};
  const q = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, J = (t, e, a) => q({ type: "call_service", domain: t, service: e, service_data: a }), Q = o.querySelector("#appearancePane .toggleList");
  Q && !l("densityToggle") && (Q.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), l("densityToggle").addEventListener("click", () => {
    L = !L, Je.set(su, L ? "1" : "0"), Pt();
  }));
  const z = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], O = (t, e, a, n) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + n.map(([s, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + s + '">' + d + "</button>").join("") + "</div>", tt = (t, e, a, n) => '<div class="toggleRow"' + (n ? ' id="' + n + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function rt() {
    var P, G;
    if (!g || l("housePane")) return;
    const t = l("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (S, D) => '<div class="houseTab' + (S === "look" ? " active" : "") + '" data-house-pane="' + S + '"><section class="card">' + D + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([S, D]) => '<button class="tab segBtn' + (S === "look" ? " active" : "") + '" type="button" data-house-tab="' + S + '">' + D + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", ug.map(([S, D]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + S + '"><div class="tfCardTitle">' + D + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + z.map(([S, D, A]) => tt(D, A, '<select class="settingsSelect" data-source="' + S + '" aria-label="' + D + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(bi).map(([S, D]) => tt(D.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + S + '" aria-label="' + D.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const n = (S) => t.querySelector('[data-look-group="' + S + '"]'), s = (S) => S == null ? void 0 : S.closest(".toggleRow");
    [s(t.querySelector(".themeBtn"))].forEach((S) => S && n("look").appendChild(S));
    const d = s(l("densityToggle"));
    d && (d.hidden = !0), [s(l("moreInfoChoice")), s(l("namesChoice"))].forEach((S) => S && n("house").appendChild(S)), n("house").insertAdjacentHTML("beforeend", tt("Lights", "How lights show on the house page.", O("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + tt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", O("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), n("house").insertAdjacentHTML("beforeend", tt("Physical controls", "Buttons, rockers, faders, dials and switches you press, drawn in lines, in the more info space.", '<button class="switch" type="button" role="switch" id="physToggle" aria-label="Physical controls"></button>') + tt("Angle", "Where the physical controls are seen from.", O("physViewChoice", "Angle", "data-phys-view", [["iso", "Isometric"], ["three", "Three-quarter"], ["tilted", "Tilted"], ["front", "Front"], ["flat", "Flat"]]), "physViewRow") + tt("Fit", "Keep each control’s drawn size, or stretch it to fill the space.", O("physFitChoice", "Fit", "data-phys-fit", [["drawn", "As drawn"], ["fill", "Fill"]]), "physFitRow"));
    const p = () => {
      const S = l("physToggle");
      S.classList.toggle("on", T), S.setAttribute("aria-checked", String(T)), l("physViewRow").hidden = l("physFitRow").hidden = !T, t.querySelectorAll("[data-phys-view]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.physView === C))), t.querySelectorAll("[data-phys-fit]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.physFit === B)));
    };
    n("house").addEventListener("click", (S) => {
      const D = S.target.closest("#physToggle,[data-phys-view],[data-phys-fit]");
      D && (D.id === "physToggle" && (T = !T, Je.set(lu, T ? "1" : "0"), Fn.clear()), D.dataset.physView && (C = D.dataset.physView, Je.set(cu, C), Fn.forEach((A) => A.ctl.setCamera(C))), D.dataset.physFit && (B = D.dataset.physFit, Je.set(du, B), Fn.forEach((A) => A.ctl.setFill(B === "fill"))), p(), D.id === "physToggle" && Ia());
    }), p(), [s(l("hoursChoice")), s(l("wxStyleChoice"))].forEach((S) => S && n("weather").appendChild(S));
    const u = l("housePane"), h = u.querySelector(".houseTabs"), x = h.querySelector(".rubberIndicator"), _ = "homecore-light-view", M = (S) => {
      u.classList.toggle("tfLightCardsOn", S === "cards"), u.querySelectorAll("[data-light-view]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lightView === S))), Je.set(_, S);
    };
    M(Je.get(_) === "table" ? "table" : "cards"), u.querySelector(".tfLightView").addEventListener("click", (S) => {
      const D = S.target.closest("[data-light-view]");
      D && M(D.dataset.lightView);
    }), new ResizeObserver(() => et()).observe(u), (G = (P = document.fonts) == null ? void 0 : P.ready) == null || G.then(() => et());
    const I = (S) => {
      const D = h.querySelector(".tab.active");
      x.style.transition = "none", S ? Ts(x, x.offsetLeft, x.offsetWidth, D.offsetLeft, D.offsetWidth) : (x.style.left = D.offsetLeft + "px", x.style.width = D.offsetWidth + "px");
    };
    new ResizeObserver(() => I(!1)).observe(h), u.addEventListener("click", (S) => {
      const D = S.target.closest("[data-house-tab]");
      if (D) {
        h.querySelectorAll(".tab").forEach((ot) => ot.classList.toggle("active", ot === D)), u.querySelectorAll(".houseTab").forEach((ot) => ot.classList.toggle("active", ot.dataset.housePane === D.dataset.houseTab)), D.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), I(!0), et();
        return;
      }
      const A = S.target.closest("[data-light-fav]");
      if (A) {
        Rc(A.dataset.lightFav);
        return;
      }
      const K = S.target.closest("[data-light-pick]");
      if (K) {
        const [ot, xt] = K.dataset.lightPick.split("|"), Et = { ...Xt[ot] };
        K.dataset.v ? Et[xt] = K.dataset.v : delete Et[xt], Xt[ot] = Et, Do(), [...We.keys()].filter((qt) => qt.endsWith(":" + xt)).forEach((qt) => We.delete(qt)), Ia();
        return;
      }
      const E = S.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!E || E.disabled)) {
        if (E.dataset.lights && (Xt.lights = E.dataset.lights), E.dataset.dacPad && (Xt.dacPad = E.dataset.dacPad), (E.dataset.lights || E.dataset.dacPad) && (Do(), We.clear()), E.dataset.sumToggle) {
          const ot = E.dataset.sumToggle, xt = new Set(wt.hiddenSums || []);
          xt.has(ot) ? xt.delete(ot) : xt.add(ot), wt = { ...wt, hiddenSums: [...xt] }, Da();
        }
        Ia();
      }
    }), u.addEventListener("change", (S) => {
      const D = S.target;
      D.dataset.source && (wt = { ...wt, sources: { ...wt.sources || {}, [D.dataset.source]: D.value || void 0 } }, Da());
      const A = D.dataset.lightStyle || D.dataset.lightPad;
      if (A) {
        const K = D.dataset.lightStyle ? "lightStyles" : "lightPads", E = { ...Xt[K] };
        D.value ? E[A] = D.value : delete E[A], Xt[K] = E, Do(), [...We.keys()].filter((ot) => ot.endsWith(":" + A)).forEach((ot) => We.delete(ot));
      }
      Ia();
    });
  }
  function ct() {
    var M, I;
    dr() && nn();
    const t = l("housePane");
    if (!t) return;
    const e = !!customElements.get(xa);
    t.querySelectorAll("[data-lights]").forEach((P) => P.setAttribute("aria-pressed", String(P.dataset.lights === Xt.lights))), l("lightsRow").querySelector(".status").textContent = e || !dr() ? "How lights show on the house page." : An === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((P) => P.setAttribute("aria-pressed", String(P.dataset.dacPad === Xt.dacPad))), l("dacPadRow").hidden = !dr();
    for (const P of t.querySelectorAll("[data-source]")) {
      if (P === o.activeElement) continue;
      const [G] = z.find(([D]) => D === P.dataset.source), S = Object.keys(k).filter(z.find(([D]) => D === G)[3]).sort((D, A) => bt(D).localeCompare(bt(A)));
      P.dataset.sig !== S.join(",") && (P.innerHTML = '<option value="">Automatic</option>' + S.map((D) => '<option value="' + W(D) + '">' + W(bt(D)) + "</option>").join(""), P.dataset.sig = S.join(",")), P.value = S.includes((M = wt.sources) == null ? void 0 : M[G]) ? wt.sources[G] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((P) => {
      const G = !(wt.hiddenSums || []).includes(P.dataset.sumToggle);
      P.classList.toggle("on", G), P.setAttribute("aria-checked", String(G));
    });
    const a = l("lightRows"), n = l("lightCards"), s = o.activeElement, d = a != null && a.contains(s) || n != null && n.contains(s) ? s : null;
    if (!a || d != null && d.matches("select")) {
      et();
      return;
    }
    const p = new Set($t()), u = (P, G, S, D) => '<option value="' + P + '"' + (P === S ? " selected" : "") + ">" + G + "</option>", h = Object.keys(k).filter((P) => P.startsWith("light.")).sort((P, G) => !ke.get(P) - !ke.get(G) || (ke.get(P) || "").localeCompare(ke.get(G) || "") || bt(P).localeCompare(bt(G))).map((P) => {
      const G = Xt.lightStyles[P] || "", S = Xt.lightPads[P] || "", D = p.has(P), A = W(bt(P));
      return "<tr><td><strong>" + A + "</strong></td><td>" + W(ke.get(P) || "—") + "</td><td>" + W(Oe(P)) + '</td><td class="metaSwitchCol"><button class="switch' + (D ? " on" : "") + '" type="button" role="switch" aria-checked="' + D + '" data-light-fav="' + W(P) + '" aria-label="' + A + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + W(P) + '" aria-label="' + A + ' tile">' + u("", "Default", G) + u("tile", "HomeCore tile", G) + u("dac", "Dual Axis Controller", G) + '</select></td><td><select class="settingsSelect" data-light-pad="' + W(P) + '" aria-label="' + A + ' pad"' + (Po(P) ? "" : " disabled") + ">" + u("", "Default", S) + u("temperature", "Temperature", S) + u("colour", "Colour", S) + "</select></td></tr>";
    }).join(""), x = (P, G, S, D, A) => '<div class="themeChoice" role="group" aria-label="' + S + '">' + D.map(([K, E]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (K === A) + '" data-light-pick="' + P + "|" + W(G) + '" data-v="' + K + '">' + E + "</button>").join("") + "</div>", _ = Object.keys(k).filter((P) => P.startsWith("light.")).sort((P, G) => !ke.get(P) - !ke.get(G) || (ke.get(P) || "").localeCompare(ke.get(G) || "") || bt(P).localeCompare(bt(G))).map((P) => {
      const G = p.has(P), S = W(bt(P)), D = [ke.get(P), Oe(P)].filter(Boolean).map(W).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + S + '</strong><div class="status">' + D + "</div></div></div>" + tt("Favourite", "", '<button class="switch' + (G ? " on" : "") + '" type="button" role="switch" aria-checked="' + G + '" data-light-fav="' + W(P) + '" aria-label="' + S + ' is a favourite"></button>') + tt("Tile", "", x("lightStyles", P, S + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[P] || "")) + (Po(P) ? tt("Pad", "", x("lightPads", P, S + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[P] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), n.dataset.html !== _ && (n.innerHTML = _, n.dataset.html = _), d != null && d.dataset.lightFav && ((I = (n.contains(d) ? n : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || I.focus({ preventScroll: !0 })), et();
  }
  function et() {
    var e, a, n;
    const t = l("housePane");
    if (t)
      for (const s of t.querySelectorAll(".themeChoice")) {
        const d = [...s.querySelectorAll("button")];
        let p = (e = s.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? s.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", s.getAttribute("aria-label") || ((n = (a = s.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : n.textContent) || ""), p.addEventListener("change", () => {
            var M;
            return (M = d[Number(p.value)]) == null ? void 0 : M.click();
          }), s.after(p);
          const _ = () => {
            p.innerHTML = d.map((I, P) => '<option value="' + P + '"' + (I.disabled ? " disabled" : "") + ">" + W(I.textContent) + "</option>").join("");
            const M = d.findIndex((I) => I.getAttribute("aria-pressed") === "true" || I.classList.contains("active"));
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
  const F = document.createElement("div");
  F.className = "densityBadge", F.setAttribute("aria-live", "polite"), F.hidden = !0, f.appendChild(F);
  let $ = 0;
  function ht() {
    if (!L) return;
    const t = l("homeView"), e = (d) => d.offsetParent !== null && !d.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((d) => {
      e(d) && (d.dataset.h = Math.round(d.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), n = window.innerHeight, s = a.filter((d) => {
      const p = d.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= n + 0.5;
    }).length;
    F.hidden = !t.classList.contains("active"), F.innerHTML = "<b>" + s + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const kt = () => {
    L && requestAnimationFrame(ht);
  };
  function Pt() {
    var t;
    f.classList.toggle("showDensity", L), (t = l("densityToggle")) == null || t.classList.toggle("on", L), F.hidden = !L, clearInterval($), L && ($ = setInterval(ht, 1e3), ht());
  }
  window.addEventListener("scroll", kt, { capture: !0, passive: !0 }), window.addEventListener("resize", kt, { passive: !0 });
  const H = o.querySelector("#homeView .grid"), Z = document.createElement("style");
  o.appendChild(Z);
  const Wt = new ResizeObserver(() => lt()), U = /* @__PURE__ */ new Set(), st = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function lt() {
    const t = f.classList.contains("tfAreaOpen") && !f.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), U.forEach((h) => {
      (!t || !h.isConnected) && (Wt.unobserve(h), U.delete(h));
    }), !t) {
      Z.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, n = e.gridTemplateColumns.split(" ").length, s = [...H.children].filter((h) => h.dataset.k && h.offsetParent);
    Z.disabled = !0;
    const d = s.map((h) => {
      const x = getComputedStyle(h), _ = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(n, _ ? +_[1] : x.gridColumnEnd === "-1" ? n : 1);
    });
    Z.disabled = !1;
    let p = 0;
    const u = s.map((h, x) => {
      U.has(h) || (U.add(h), Wt.observe(h));
      const _ = d[x];
      p + _ > n && (p = 0);
      const M = p + 1;
      return p = (p + _) % n, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + M + " / span " + _ + ";grid-row-end:span " + Math.max(1, Math.ceil(st(h) + a)) + "}";
    }).join(`
`);
    Z.textContent !== u && (Z.textContent = u);
  }
  new MutationObserver(lt).observe(H, { childList: !0 }), new MutationObserver(lt).observe(f, { attributes: !0, attributeFilter: ["class"] });
  let dt = null, nt = null, N = null;
  const vt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map(), ea = (t) => ce.set(t, (ce.get(t) || 0) + 1), ba = () => [.../* @__PURE__ */ new Set([...Mt.keys(), ...Ft])];
  let wa = !1, Ao = 0;
  const Xn = 6;
  let To = null;
  const Nt = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map();
  let wt = { favourites: null }, La = {}, Or = {}, Mi = [], Jn = null;
  const gn = (() => {
    try {
      return JSON.parse(Je.get(Su)) || {};
    } catch {
      return {};
    }
  })();
  let ke = /* @__PURE__ */ new Map(), Si = 0;
  function Da() {
    clearTimeout(Si), Si = setTimeout(() => Promise.resolve(q({ type: "frontend/set_user_data", key: Mu, value: wt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(Je.get(_u)) || {};
    } catch {
    }
    const e = (a, n) => Object.fromEntries(Object.entries(a || {}).filter(([, s]) => n.includes(s)));
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
  })(), Do = () => Je.set(_u, JSON.stringify(Xt)), Ir = () => {
    f.dataset.more = Xt.more, f.dataset.names = Xt.names, Hl();
  };
  g && Q && !l("moreInfoChoice") && (l("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + fg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, Do(), Ir(), l("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + hg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, Do(), Ir(), l("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + mg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, Do(), Ae == null || Ae.refresh(), l("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), l("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + gg.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), l("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, Do(), Ae == null || Ae.setStyle(Xt.wxStyle), Te == null || Te.forEach((a) => a.setStyle(Xt.wxStyle)), l("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), rt();
  let zt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const la = /* @__PURE__ */ new Map();
  let _i = "";
  const Ci = g ? Am({ onChange: () => De() }) : null;
  g && f.classList.add("house");
  const Ea = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ae = null, Ai = null, bn = !1;
  function Ti(t) {
    const e = Ja();
    if (f.classList.toggle("houseBento", !!e), Ae && (Ai !== e || t == null) && (Ae.destroy(), Ae = null), !e || t == null) {
      Ea.remove();
      return;
    }
    Ea.isConnected || H.append(Ea), Ea.style.order = t, !Ae && !bn && (Ae = Qp(Ea, { getHass: i, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: so }), Ai = e);
  }
  const Qn = [
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
  ], Li = Qn.map(([t]) => t), Eo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ns = { hourly: 2 }, io = Object.fromEntries(Qn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Te = null, Fr = null;
  function qr(t) {
    const e = Ja();
    Te && Fr !== e && (Te.forEach((a) => a.destroy()), Te = null), Object.values(io).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !Te && !bn && (Te = /* @__PURE__ */ new Map(), Fr = e), Di();
  }
  const so = () => {
    var t;
    return ((t = ie().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Os = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => bt(t.entity_id).localeCompare(bt(e.entity_id))).map((t) => ["camera:" + t.entity_id, bt(t.entity_id)])];
  function Di() {
    if (!Te || bn) return;
    const t = new Set(ie().hidden);
    Qn.forEach(([e, a]) => {
      Te.has(e) || t.has(e) && !(ee != null && ee.fromTray && ee.key === e) || Te.set(e, Qp(io[e], { getHass: i, entityId: Fr, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => Hd("weather") : void 0, radarSource: so }));
    });
  }
  const Ut = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, bt = (t) => Ut(t).friendly_name || t, ge = (t, e) => no(t) || (Number(Ut(t).supported_features) & e) === e, jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Ne = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), lo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, tr = (t) => Ut(t).supported_color_modes || [], Is = (t, e) => [5, 3, 1].map((a) => {
    const n = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(n, 4 - n, 1)));
  }), Wr = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ei = (t) => 0.2126 * Wr(t[0]) + 0.7152 * Wr(t[1]) + 0.0722 * Wr(t[2]), Fs = (t, e) => {
    const a = Ei(t), n = Ei(e);
    return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
  }, qs = 0.55, en = ["hs", "xy", "rgb", "rgbw", "rgbww"], Bi = (t) => {
    const e = Ut(t), a = en.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? Is(...e.hs_color) : [255, 170, 0]).map((n) => Math.round(Math.max(0, Math.min(255, n))));
  }, Ws = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function va(t) {
    var n;
    const e = t.split(".")[0], a = (n = k[t]) == null ? void 0 : n.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Bi(t) : null : e === "climate" ? Ws[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function wn(t, e, a = !1) {
    const [n, s, d] = t.map((G) => G / 255), p = Math.max(n, s, d), u = Math.min(n, s, d), h = p - u, x = h ? (p === n ? (s - d) / h + (s < d ? 6 : 0) : p === s ? (d - n) / h + 2 : (n - s) / h + 4) * 60 : 0, _ = (p + u) / 2, M = h ? h / (1 - Math.abs(2 * _ - 1)) : 0, I = h < 0.1 ? Math.min(M, 0.25) : 1, P = (G) => {
      const S = (A) => (A + x / 30) % 12, D = I * Math.min(G, 1 - G);
      return [0, 8, 4].map((A) => Math.round(255 * (G - D * Math.max(-1, Math.min(S(A) - 3, 9 - S(A), 1)))));
    };
    for (let G = 0.5; a ? G < 0.96 : G > 0.04; G += a ? 0.01 : -0.01) {
      const S = P(G);
      if (Fs(S, e) >= 3) return "rgb(" + S.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const vn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + wn(e, [58, 58, 58], !0) + ";--sum-l:" + wn(e, [230, 230, 230]);
  }, Bo = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Vr = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Bo.d[t] + ";--g" + t + "-l:" + Bo.l[t]).join(";"), Pi = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", co = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * qs));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + wn(t, e);
  }, Vs = (t) => co(Bi(t)), Ua = (t) => {
    const e = va(t);
    return e ? ' data-light style="' + co(e) + '"' : "";
  }, po = (t) => {
    const e = tr(t);
    return e.length ? e.some((a) => a !== "onoff") : Ut(t).brightness != null;
  }, er = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], uo = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function js(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const n = Math.round(a / 60);
    if (n < 24) return n + (n === 1 ? " hour ago" : " hours ago");
    const s = Math.round(n / 24);
    return s + (s === 1 ? " day ago" : " days ago");
  }
  const Ya = (t) => {
    var e;
    return Ut(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, yn = (t) => {
    var e;
    return c("pos", t, ((e = Nt.get(t)) == null ? void 0 : e.pos) ?? Ya(t));
  }, jr = (t) => {
    var e;
    return c("tilt", t, ((e = Nt.get(t)) == null ? void 0 : e.tilt) ?? Ut(t).current_tilt_position);
  };
  function Oe(t) {
    var p;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, n = t.split(".")[0];
    if (n === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (po(t) ? lo(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : en.includes(a.color_mode) ? " · Colour" : "");
    }
    if (n === "climate") return (e.state === "off" ? "Off" : jt(a.hvac_action || e.state)) + " · " + Ne(a.current_temperature) + " °C now";
    if (n === "cover") {
      const u = Ya(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? jt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (n === "humidifier") return e.state !== "on" ? "Off" : jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (n === "vacuum") return jt(e.state) + (e.state === "cleaning" && ((p = a.rooms) != null && p.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (n === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : jt(e.state);
    if (n === "alarm_control_panel") return Du[e.state] || jt(e.state);
    if (n === "lock" || n === "valve") return jt(e.state);
    if (n === "switch") return e.state === "on" ? "On" : "Off";
    if (n === "plant") return e.state === "ok" ? "Healthy" : jt(a.problem);
    if (n === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ss.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + uo(a.rang);
    const s = i();
    if (s != null && s.formatEntityState && !no(t))
      try {
        return s.formatEntityState(e);
      } catch {
      }
    const d = Number(e.state);
    if (e.state !== "" && Number.isFinite(d)) {
      const u = Math.abs(d) >= 100 ? 0 : Math.abs(d) >= 10 ? 1 : 2, h = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return d.toLocaleString(void 0, { maximumFractionDigits: u }) + h + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return jt(e.state);
  }
  const xn = (t) => t >= 1e3 ? Ne(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", kn = Object.fromEntries(Dm.map((t) => [t.id, t])), zr = {
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
  }, ar = (t) => {
    var n;
    const e = t.entity_id.split(".")[0], a = (n = t.attributes) == null ? void 0 : n.device_class;
    return e === "light" ? "light" : e === "switch" ? "plug" : e === "climate" ? "thermostat" : e === "fan" ? "fan" : e === "cover" ? ["door", "garage", "gate"].includes(a) ? "door" : a === "window" ? "window" : "blinds" : e === "lock" ? "lock" : e === "camera" ? "camera" : e === "media_player" ? a === "tv" ? "tv" : "speaker" : e === "vacuum" ? "vacuum" : e === "alarm_control_panel" ? "alarm" : e === "person" ? "person" : e === "sun" ? "sun" : e === "binary_sensor" ? { door: "door", garage_door: "door", opening: "door", window: "window", motion: "motion", occupancy: "motion", presence: "motion", moisture: "humidity" }[a] || null : e === "sensor" && { temperature: "temperature", humidity: "humidity", moisture: "humidity", power: "energy", energy: "energy", illuminance: "sun" }[a] || null;
  }, zs = (t, e) => {
    var a, n, s, d;
    return e ? zr[e] || null : !t || (a = t.attributes) != null && a.icon || (d = (s = (n = i()) == null ? void 0 : n.entities) == null ? void 0 : s[t.entity_id]) != null && d.icon ? null : ar(t);
  };
  let Gr = 0;
  function Za(t) {
    var a, n;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var h;
      const d = k[s.dataset.iconFor], p = s.dataset.iconName || "", u = zs(d, p);
      if (u) {
        (s.dataset.hc !== u || !s.querySelector(":scope>svg.hcGlyph")) && (s.innerHTML = Bm(kn[u], 24, "hcg" + ++Gr).replace("<svg ", '<svg class="hcGlyph" '), s.dataset.hc = u);
        return;
      }
      if (s.dataset.hc && (delete s.dataset.hc, s.textContent = ""), customElements.get("ha-state-icon") && d && !p) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (s.textContent = "", x = document.createElement("ha-state-icon"), s.appendChild(x)), x.hass = e, x.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let x = s.firstElementChild;
        (!x || x.localName !== "ha-icon") && (s.textContent = "", x = document.createElement("ha-icon"), s.appendChild(x)), x.icon = p || ((h = d == null ? void 0 : d.attributes) == null ? void 0 : h.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || bt(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(or), (n = t.classList) != null && n.contains("tfIcon") && or(t), on();
  }
  const $r = /* @__PURE__ */ new Map();
  function or(t) {
    var d, p, u;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), n = { backgroundColor: a.backgroundColor, color: a.color }, s = $r.get(e);
    $r.set(e, n), !(!s || s.backgroundColor === n.backgroundColor && s.color === n.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([s, n], { duration: Be.warp.cdur, delay: Be.warp.cdelay, easing: Pe[Be.warp.ease], fill: "backwards" });
  }
  const Ri = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", an = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Hi(t) {
    var P, G, S, D, A, K, E;
    const e = t.localName === "svg" ? t : an(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((ot) => !ot.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const n = (P = t.closest(".tfIcon")) == null ? void 0 : P.offsetWidth;
    if (n === void 0) return !0;
    if (!n) return !1;
    const s = n + "|" + a.map((ot) => ot.getAttribute("d") || ot.localName).join("|");
    if (t.dataset.fitted === s) return !0;
    let d = 1 / 0, p = 1 / 0, u = -1 / 0, h = -1 / 0;
    for (const ot of a) {
      const xt = ot.getBBox(), Et = getComputedStyle(ot), qt = Et.stroke !== "none" ? (parseFloat(Et.strokeWidth) || 0) / 2 : 0;
      if (!xt.width && !xt.height) continue;
      const Vt = (A = (D = (S = (G = ot.transform) == null ? void 0 : G.baseVal) == null ? void 0 : S.consolidate) == null ? void 0 : D.call(S)) == null ? void 0 : A.matrix, _t = Vt ? (() => {
        const Lt = [[xt.x, xt.y], [xt.x + xt.width, xt.y], [xt.x, xt.y + xt.height], [xt.x + xt.width, xt.y + xt.height]].map(([we, Re]) => [Vt.a * we + Vt.c * Re + Vt.e, Vt.b * we + Vt.d * Re + Vt.f]), ue = Lt.map((we) => we[0]), be = Lt.map((we) => we[1]);
        return { x: Math.min(...ue), y: Math.min(...be), width: Math.max(...ue) - Math.min(...ue), height: Math.max(...be) - Math.min(...be) };
      })() : xt;
      d = Math.min(d, _t.x - qt), p = Math.min(p, _t.y - qt), u = Math.max(u, _t.x + _t.width + qt), h = Math.max(h, _t.y + _t.height + qt);
    }
    if (!(u > d)) return !1;
    const x = (E = (K = e.viewBox) == null ? void 0 : K.baseVal) != null && E.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, _ = n > 40 ? n * (26 / 40) : n - 14, M = _ * x.width / Math.max(u - d, h - p), I = M / x.width;
    return t.localName === "svg" ? (t.style.width = M + "px", t.style.height = M + "px") : t.style.setProperty("--mdc-icon-size", M + "px"), e.style.translate = ((x.x + x.width / 2 - (d + u) / 2) * I).toFixed(2) + "px " + ((x.y + x.height / 2 - (p + h) / 2) * I).toFixed(2) + "px", t.dataset.fitted = s, !0;
  }
  let Mn = 0;
  function Sn(t = 0) {
    clearTimeout(Mn), [...o.querySelectorAll(Ri)].filter((a) => !Hi(a)).length && t < 5 && (Mn = setTimeout(() => Sn(t + 1), 300));
  }
  function on() {
    clearTimeout(Mn), Mn = setTimeout(() => Sn(), 60);
  }
  const nr = (t) => {
    var e, a, n;
    return t.startsWith("light.") && k[t] && !Ut(t).icon && !((n = (a = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && n.icon) ? "mdi:lightbulb" : "";
  }, de = (t, e, a) => (e = e || nr(t), ' data-icon-for="' + W(t) + '"' + (e ? ' data-icon-name="' + W(e) + '"' : "") + (a ? ' data-letter="' + W(a) + '"' : "")), Ba = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", Bt = (t, e, a, n) => W([t, e, a, n ? JSON.stringify(n) : ""].join("|")), rr = (t) => W(JSON.stringify(t));
  function ir(t) {
    const e = W(bt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + W(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + de(t, Ba(t)) + '></div><div><div class="activityRowName">' + W(bt(t)) + '</div><div class="activityRowMeta">' + W(Oe(t)) + "</div></div></div>";
  }
  const Ie = (t, e, a) => '<div class="activityRow" aria-label="' + W(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + de("", a, t) + '></div><div><div class="activityRowName">' + W(t) + '</div><div class="activityRowMeta">' + W(e) + "</div></div></div>";
  function Ka(t, e, a, n, s = "", d = null, p = "") {
    return '<section class="card tfCard' + (p ? " " + p : "") + '" data-tf data-k="' + W(t) + '" style="order:' + e + '" aria-label="' + W(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + W(d) + '" aria-label="' + W(a + (k[d] ? ", " + Oe(d) : "") + ". More info") + '">' + W(a) + "</button>" : '<div class="activityTitle">' + W(a) + "</div>") + '</div><div class="activityRows">' + n.join("") + "</div>" + s + "</section>";
  }
  function Ni(t, e) {
    const a = "readings:" + t.id, n = t.readings.map((s) => ir(s));
    return t.power != null && n.push(Ie("Power now", xn(t.power), "mdi:flash")), Ka(a, e, "Readings", n);
  }
  function Ur(t, e) {
    var u;
    const a = "energy:" + t.id, [n, s] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], d = [n, s].filter(Boolean).map((h) => ir(h)), p = Number(((u = k[n]) == null ? void 0 : u.state) || 0) * 1e3;
    return zt.grid && (d.push(ir(zt.grid)), d.push(Ie("House use", xn(p + Number(k[zt.grid].state)), "mdi:home-lightning-bolt"))), Ka(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const _n = (t, e) => Ka("plant:" + t.id, e, bt(t.id), t.readings.map((a) => ir(a)), "", t.id);
  function Cn(t, e, a, n, s, d, p = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), h = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (s ? ' aria-valuetext="' + W(s) + '"' : "") + ' data-drag="' + W(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (d ? u == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Oi = "homecore-house-last-bright", Pa = (() => {
    try {
      return JSON.parse(Je.get(Oi)) || {};
    } catch {
      return {};
    }
  })();
  let Yr = 0;
  const sr = (t, e) => {
    !e || Pa[t] === e || (Pa[t] = e, clearTimeout(Yr), Yr = setTimeout(() => Je.set(Oi, JSON.stringify(Pa)), 500));
  }, ca = (t, e, a, n) => '<div class="tfStep" role="group" aria-label="' + W(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + W(t.toLowerCase()) + '">' + fu.down + "</button><output>" + W(e) + '</output><button type="button" data-act="' + n + '" aria-label="Raise ' + W(t.toLowerCase()) + '">' + fu.up + "</button></div>", aa = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + W(e) + '">' + a.filter(Boolean).map((n) => '<button type="button" data-act="' + n.act + '"' + (n.pressed != null ? ' aria-pressed="' + n.pressed + '"' : "") + (n.disabled ? " disabled" : "") + (n.aria ? ' aria-label="' + W(n.aria) + '"' : "") + ">" + (n.html || W(n.label)) + "</button>").join("") + "</div>", fo = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Zr = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Kr = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + W(bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + W(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + fo(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Zr(e) + '">' + Math.round(e) + "%</output></div>";
  function Ii(t, e) {
    t.querySelectorAll(":scope>span").forEach((n, s) => {
      n.firstElementChild.setAttribute("style", fo(e, s)), n.lastElementChild.classList.toggle("lit", e >= (s + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Zr(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const lr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + W(bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + W(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Fi = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + W(bt(t)) + '">' + [
    ge(t, wu) && ["open", "Open", "open_cover", e >= 100 && !a],
    ge(t, yu) && ["stop", "Stop", "stop_cover", !1],
    ge(t, vu) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([n, s, d, p]) => '<button type="button" data-act="' + Bt("cover", d, t) + '" aria-label="' + s + '"' + (p ? " disabled" : "") + ">" + dg[n] + "</button>").join("") + "</div>", cr = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + W(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + W(e.art) + '&quot;)"' : de(t, e.icon)) + "></button>", ho = (t) => '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(bt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(Oe(t)) + "</span></button>";
  function ya(t, e = !1, a = null) {
    const n = m(t), s = t.startsWith("light.") && pr(t) && !(a && Ln(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), p = s ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + W(t) + '"></div>'] : n.sections.map((u, h) => u && (!d || d.includes((n.parts || [])[h])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (s ? " tfDac" : "") + (n.on ? " on" : "") + (!s && !p.length ? " tfHeadOnly" : "") + '" data-k="' + W(t) + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + Ua(t) + '><div class="tfActionHead">' + cr(t, n) + ho(t) + "</div>" + p.join("") + "</div>";
  }
  const xa = "dual-controller-v3", qi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let An = null;
  async function nn() {
    if (An || customElements.get(xa)) return;
    An = "loading";
    const t = await Promise.resolve().then(() => q({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((n) => /dual-axis-controller/i.test(n.url || ""));
    if (await Promise.race([customElements.whenDefined(xa), new Promise((n) => setTimeout(n, e ? 8e3 : 0))]), customElements.get(xa)) return;
    const a = Object.assign(document.createElement("script"), { src: qi });
    a.onerror = () => {
      An = "failed", ct();
    }, document.head.appendChild(a);
  }
  const We = /* @__PURE__ */ new Map(), Po = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", dr = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function pr(t) {
    return Po(t) && !!customElements.get(xa);
  }
  const Gs = (t) => Xt.lightPads[t] || Xt.dacPad, Ro = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (e, a, n, ...s) => t.callService(e, ...rp(e, a, n), ...s)
    };
  }, Wi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", Ve = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Wi })).dataset.tf = "");
  }, ur = /* @__PURE__ */ new Map(), $s = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ur.set(a.dataset.dac, a.offsetHeight));
  }));
  function Tn(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let n = We.get(a);
      if (!n) {
        const s = a.slice(a.indexOf(":") + 1);
        n = document.createElement(xa), n.setConfig({ type: "custom:" + xa, entity: s, pad: Gs(s), tap_action: { action: "none" } }), We.set(a, n);
      }
      n.hass = Ro(), n.parentNode !== e && e.replaceChildren(n), !n.offsetHeight && ur.has(a) && (e.style.minHeight = ur.get(a) + "px"), $s.observe(n), Ve(n);
    });
  }
  function Vi() {
    const t = Ro();
    We.forEach((e, a) => {
      e.isConnected ? e.hass = t : We.delete(a);
    });
  }
  customElements.whenDefined(xa).then(() => {
    g && (H != null && H.querySelector("[data-tf]")) && Od(Ia);
  });
  const c = (t, e, a) => Mt.has(t + "|" + e) ? Mt.get(t + "|" + e) : a;
  function m(t) {
    var d, p;
    const e = k[t], a = e.attributes, n = t.split(".")[0], s = (u, h) => ({ act: Bt(u, "toggle", t), label: h });
    if (n === "light") {
      const u = e.state === "on", h = tr(t), [x, _] = er(t), M = c("bright", t, lo(e));
      u && sr(t, lo(e));
      const I = c("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), P = c("hue", t, u && en.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: s("light", "Turn " + bt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        po(t) && Cn("bright", t, M / 100, bt(t) + " brightness", M + "%", !1, u ? null : Pa[t] ?? null),
        h.includes("color_temp") && Cn("ct", t, I == null ? null : (I - x) / (_ - x), bt(t) + " warm to cool", I == null ? "" : Math.round(I) + " kelvin", !0),
        h.some((G) => en.includes(G)) && Cn("hue", t, P == null ? null : P / 360, bt(t) + " colour", "", !0)
      ] };
    }
    if (n === "climate") {
      const u = a.target_temp_step || 0.5, h = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: s("climate", "Turn " + bt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ca("Target temperature", Ne(h) + " °C", Bt("climate", "set_temperature", t, { temperature: h - u }), Bt("climate", "set_temperature", t, { temperature: h + u })),
        aa("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: jt(x), act: Bt("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (n === "cover") {
      const u = e.state === "opening" || e.state === "closing", h = e.state === "closed", x = yn(t), _ = jr(t);
      return { on: !h, tone: "blue", icon: xu[bc(e)][h ? 1 : 0], button: s("cover", (h ? "Open " : "Close ") + bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        ge(t, xc) && Kr(t, x),
        _ != null && lr(t, _),
        Fi(t, x, u)
      ] };
    }
    if (n === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: s("humidifier", "Turn " + bt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ca("Target humidity", u + "%", Bt("humidifier", "set_humidity", t, { humidity: u - 1 }), Bt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && aa("tfSeg", "Mode", a.available_modes.map((h) => ({ label: jt(h), act: Bt("humidifier", "set_mode", t, { mode: h }), pressed: a.mode === h })))
      ] };
    }
    if (n === "media_player") {
      const u = e.state === "playing", h = e.state === "off" || e.state === "standby", x = c("vol", t, a.volume_level), _ = h ? { act: Bt("media_player", ge(t, lg) ? "turn_on" : "toggle", t), label: "Turn " + bt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Bt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + bt(t) } : { act: Bt("media_player", ge(t, cg) ? "turn_off" : "toggle", t), label: "Turn " + bt(t) + " off" };
      return { on: !h, tone: "blue", art: !h && a.entity_picture ? a.entity_picture : null, button: _, parts: ["playback", "volume"], sections: h ? [] : [
        (ge(t, mu) || ge(t, gu) || ge(t, hu) || ge(t, bu)) && aa("tfSeg", "Playback", [
          { html: xs.prev, aria: "Previous", act: Bt("media_player", "media_previous_track", t), disabled: !ge(t, mu) },
          { html: u ? xs.pause : xs.play, aria: u ? "Pause" : "Play", act: Bt("media_player", "media_play_pause", t), disabled: !(ge(t, hu) || ge(t, bu)) },
          { html: xs.next, aria: "Next", act: Bt("media_player", "media_next_track", t), disabled: !ge(t, gu) }
        ]),
        ge(t, sg) && x != null && Cn("vol", t, x, bt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (n === "vacuum") {
      const u = e.state === "cleaning", h = a.rooms || [], x = (M) => h.includes(M) ? h.filter((I) => I !== M) : h.concat(M), _ = Bt("vacuum", u ? "pause" : "start", t, no(t) ? { rooms: h } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: _, label: (u ? "Pause " : "Start ") + bt(t) }, parts: ["controls", "rooms"], sections: [
        aa("tfSeg", bt(t), [
          { label: u ? "Pause" : "Start", act: _ },
          { label: "Dock", act: Bt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Bt("vacuum", "locate", t) }
        ]),
        no(t) && aa("tfChips", "Rooms to clean", zt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Bt("vacuum", "set_rooms", t, { rooms: x(M.name) }), pressed: h.includes(M.name) })))
      ] };
    }
    if (n === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Bt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + bt(t) }, parts: ["controls"], sections: [
        aa("tfSeg", bt(t), [
          { label: "Lock", act: Bt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Bt("lock", "unlock", t), pressed: e.state === "unlocked" },
          ge(t, Tu) && { label: "Open", act: Bt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (n === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Bt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + bt(t) + ", away" : "Disarm " + bt(t) }, parts: ["controls"], sections: [
        aa("tfSeg", bt(t), Lu.filter(([, , , h]) => !h || ge(t, h)).map(([h, x, _]) => ({ label: x, act: Bt("alarm_control_panel", _, t), pressed: e.state === h })))
      ] };
    }
    if (n === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: s("valve", (u ? "Close " : "Open ") + bt(t)), parts: ["controls"], sections: [
        aa("tfSeg", bt(t), [
          { label: "Open", act: Bt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Bt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (n === "water_heater") {
      const u = Number(a.temperature), h = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Bt("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + bt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ca("Target temperature", u + " °C", Bt("water_heater", "set_temperature", t, { temperature: u - h }), Bt("water_heater", "set_temperature", t, { temperature: u + h })),
        ((p = a.operation_list) == null ? void 0 : p.length) && aa("tfSeg", "Mode", a.operation_list.map((_) => ({ label: jt(_), act: Bt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (a.operation_mode || e.state) === _ })))
      ] };
    }
    if (wi.includes(n)) {
      const u = e.state === "on";
      return { on: u, button: s(n, "Turn " + bt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: bt(t) }, sections: [] };
  }
  const w = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ne(t)) + "°";
  function y(t) {
    var D;
    const e = (A) => t.readings.find((K) => Ut(K).device_class === A), a = e("temperature"), n = e("humidity"), s = (A) => {
      var K;
      return Number((K = k[A]) == null ? void 0 : K.state);
    }, d = (A) => t.actions.filter((K) => A.test(K)), p = t.lights.filter((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) === "on";
    }), u = d(/^cover\./), h = u.filter((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) !== "closed";
    }), x = [...new Set(u.map((A) => bc(k[A])))], _ = d(/^climate\./)[0], M = d(/^humidifier\./)[0], I = d(/^media_player\./), P = I.find((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) === "playing";
    }) || I.find((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) === "paused";
    }), G = t.plugs.filter((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) === "on";
    }), S = [];
    if (a && Number.isFinite(s(a)) && S.push({ key: "temp", id: a, kind: "reading", icon: ko(a), label: "Temperature", value: Ne(s(a)) + "°" }), n && Number.isFinite(s(n)) && S.push({ key: "hum", id: n, kind: "reading", icon: ko(n), label: "Humidity", value: Math.round(s(n)) + "%" }), t.lights.length && S.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ko("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? Vs(p[0]) : "",
      acts: t.lights.map((A) => ["light", p.length ? "turn_off" : "turn_on", A]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const A = x.length === 1 ? pg[x[0]] : "covers", K = Math.round(u.reduce((E, ot) => E + Ya(ot), 0) / u.length);
      S.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? co([146, 107, 199]) : "",
        icon: ko("", ((D = xu[x[0]]) == null ? void 0 : D[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: jt(A),
        value: K <= 0 ? "Closed" : K >= 100 ? "Open" : K + "% open",
        short: K <= 0 ? "Closed" : K + "%",
        on: h.length > 0,
        acts: u.map((E) => ["cover", h.length ? "close_cover" : "open_cover", E]),
        aria: (h.length ? "Close the " : "Open the ") + A + " in " + t.name
      });
    }
    if (_) {
      const A = Ut(_), K = k[_].state === "off";
      S.push({
        key: "climate",
        kind: "control",
        tone: A.hvac_action === "cooling" ? "cool" : "heat",
        light: va(_) ? co(va(_)) : "",
        icon: ko(_),
        label: bt(_),
        value: K ? "Off" : jt(A.hvac_action || k[_].state) + " · " + w(A.temperature),
        short: K ? "Off" : w(A.temperature),
        on: !K,
        acts: [["climate", "toggle", _]],
        aria: "Turn " + bt(_) + (K ? " on" : " off")
      });
    }
    if (M) {
      const A = k[M].state === "on";
      S.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: A ? co([33, 150, 243]) : "",
        icon: ko("", "mdi:air-humidifier"),
        label: bt(M),
        value: A ? "On · " + Ut(M).humidity + "%" : "Off",
        short: A ? Ut(M).humidity + "%" : "Off",
        on: A,
        acts: [["humidifier", "toggle", M]],
        aria: "Turn " + bt(M) + (A ? " off" : " on")
      });
    }
    if (I.length) {
      const A = P || I[0], K = k[A], E = K.state === "playing";
      S.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: va(A) ? co(va(A)) : "",
        icon: ko(A),
        label: bt(A),
        value: Oe(A),
        short: E ? "Playing" : K.state === "paused" ? "Paused" : jt(K.state),
        on: E,
        acts: [["media_player", K.state === "playing" || K.state === "paused" ? "media_play_pause" : "toggle", A]],
        aria: (E ? "Pause " : "Play ") + bt(A)
      });
    }
    return t.plugs.length && S.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: G.length ? co([255, 193, 7]) : "",
      icon: ko("", "mdi:power-plug"),
      label: "Plugs",
      value: G.length ? G.length + " of " + t.plugs.length + " on" : "All off",
      short: G.length ? G.length + " on" : "Off",
      on: G.length > 0,
      acts: t.plugs.map((A) => ["switch", G.length ? "turn_off" : "turn_on", A]),
      aria: (G.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((A) => S.push(Ut(A).device_class === "moisture" ? { key: "alert:" + A, kind: "alert", icon: ko(A), label: "Water leak" } : { key: "note:" + A, kind: "note", icon: ko(A), label: bt(A) + " " + Oe(A).toLowerCase() })), S;
  }
  const R = (t, e) => {
    const a = (n) => t.actions.filter((s) => n.test(s));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const n = a(/^media_player\./);
        return [n.find((s) => {
          var d;
          return ((d = k[s]) == null ? void 0 : d.state) === "playing";
        }) || n.find((s) => {
          var d;
          return ((d = k[s]) == null ? void 0 : d.state) === "paused";
        }) || n[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function V(t, e, a = !1) {
    const n = e.find((u) => u.key === "lights"), s = !!(n != null && n.on), d = "", p = '<span class="tfAreaGlyph"' + de("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !n ? '<span class="tfIcon tfAreaIcon' + (s ? " on" : "") + '"' + d + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (s ? " on" : "") + '" type="button"' + d + ' data-acts="' + rr(n.acts) + '" aria-label="' + W(n.aria) + '" aria-pressed="' + s + '">' + p + "</button>";
  }
  const Y = (t) => t.readings.find((e) => Ut(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, X = (t, e) => {
    const a = bt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? jt(a.slice(t.name.length + 1)) : a;
  };
  function j(t) {
    const e = k[t], a = Ut(t), n = t.split(".")[0], s = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (n === "sensor" && Number.isFinite(s)) {
      if (a.device_class === "temperature") return { text: w(s) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(s) + "%" } : { text: Ne(s, Number.isInteger(s) ? 0 : 1), unit: d };
    }
    if (n === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: w(a.current_temperature ?? a.temperature) };
    if (n === "light") return { text: e.state !== "on" ? "Off" : po(t) ? lo(e) + "%" : "On" };
    if (n === "cover") {
      const d = Ya(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return n === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : n === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : jt(e.state) } : { text: Oe(t) };
  }
  const at = (t, e, a) => {
    const n = a.find((u) => u.key === "temp"), s = a.find((u) => u.key === "hum"), d = Ut(e), p = k[e].state === "off";
    return e.startsWith("climate.") ? [X(t, e), p ? "Off" : jt(d.hvac_action || k[e].state) + (d.temperature != null ? " · " + w(d.temperature) : ""), s && s.value].filter(Boolean).join(" · ") : [!(n && n.id === e) && X(t, e), n && n.id !== e && n.value, s && s.id !== e && s.value + (n ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function it(t) {
    const e = t.id === dt, a = y(t), n = Y(t), s = n && j(n), d = [...a.filter((p) => p.kind === "control"), ...a.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + W(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + W(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + It(t, null, ' data-cols="2" data-rows="' + Ln("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + V(t, a, !0) + '<span class="tfACName">' + W(t.name) + '</span></div><span class="tfACMain">' + (s ? W(s.text + (s.unit ? " " + s.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let ut = [];
  const Rt = (t) => {
    const e = wt.areaOrder || [], a = (n) => {
      const s = e.indexOf(n.id);
      return s < 0 ? e.length + t.indexOf(n) : s;
    };
    return [...t].sort((n, s) => a(n) - a(s));
  }, Tt = () => {
    var e;
    const t = new Set(((e = wt.dash) == null ? void 0 : e.areasOff) || []);
    return Rt(ut).filter((a) => !t.has(a.id));
  }, At = co([255, 162, 75]), Gt = (t) => {
    const e = t.id === dt;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + W(t.id) + '"' + (e ? ' data-light style="' + At + '"' : "") + ' aria-label="' + W(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + de("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, Dt = (t) => {
    var n;
    const e = Tt();
    e.some((s) => s.id === dt) || (dt = ((n = e[0]) == null ? void 0 : n.id) || null);
    const a = e.find((s) => s.id === dt);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(it).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? It(a, null, ' data-cols="2" data-rows="' + Ln("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Gt).join("") + "</div></div></div>";
  }, pt = (t) => t.startsWith("room:"), Ot = (t) => ut.find((e) => "room:" + e.id === t);
  function It(t, e, a = "") {
    const n = y(t), s = Y(t), d = s && j(s), p = s ? at(t, s, n) : "", u = d ? d.text + (d.unit ? " " + d.unit : "") : "", h = (A) => {
      const K = R(t, A.key);
      return K.length === 1 ? K[0] : "group:" + t.id + ":" + A.key;
    }, x = n.filter((A) => A.kind === "control").slice(0, 4), _ = (A) => A.on && A.light ? ' data-light style="' + A.light + '"' : "", M = (A) => '<button class="tfIcon' + (A.on ? " on" : "") + '" type="button" data-tone="' + A.tone + '"' + _(A) + ' data-acts="' + rr(A.acts) + '" aria-label="' + W(A.aria) + '" aria-pressed="' + A.on + '">' + A.icon + "</button>", I = (A) => '<button class="tfIcon' + (A.on ? " on" : "") + '" type="button" data-tone="' + A.tone + '"' + _(A) + ' data-more="' + W(h(A)) + '" aria-label="' + W(t.name + " " + A.label.toLowerCase() + ", " + A.value + ". Open") + '">' + A.icon + "</button>", P = x.map(I), G = x.map((A) => '<div class="tfRoomDev' + (A.on ? " on" : "") + '" data-more="' + W(h(A)) + '">' + (A.acts ? M(A) : I(A)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + W(h(A)) + '" aria-label="' + W(t.name + " " + A.label.toLowerCase() + ", " + A.value + ". Open") + '"><span class="activityRowName">' + W(A.label) + '</span><span class="activityRowMeta">' + W(A.value) + "</span></button></div>"), S = '<span class="tfAreaGlyph"' + de("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", D = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '">' + S + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + W(e) + '"' : "") + a + ' data-go="' + W(t.id) + '"><div class="tfActionHead">' + D + '<button class="tfName" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '"><span class="activityRowName">' + W(t.name) + "</span>" + (u || p ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + W(u) + (p ? " · " : "") + "</span>" : "") + W(p) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + W(s) + '" aria-label="' + W(bt(s) + ", " + Oe(s) + ". More info") + '"><span class="tfRoomBig">' + W(u) + "</span>" + (p ? '<span class="tfRoomSub">' + W(p) + "</span>" : "") + "</button>" : "") + (P.length ? '<div class="tfRoomDevices">' + P.join("") + '</div><div class="tfRoomHeads">' + G.join("") + "</div>" : "") + "</div>";
  }
  const Se = () => [
    { key: "home", name: "Home", ids: zt.homeVacuums },
    ...zt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ct = (t, e, a) => t + " " + (t === 1 ? e : a), $t = () => (wt.favourites ?? La.favorite_entities ?? []).filter((t) => k[t]);
  function he() {
    if (!Jn) {
      const e = Object.entries(gn).sort((n, s) => s[1] - n[1]).map(([n]) => n), a = zt.rooms.flatMap((n) => n.actions);
      Jn = [.../* @__PURE__ */ new Set([...Mi, ...e, ...a.filter((n) => m(n).on), ...a])];
    }
    const t = $t();
    return Jn.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let da = !1;
  const mo = 6;
  function Xr() {
    if (!da || wt.favSeeded || !zt.rooms.length || v) return;
    const t = (a) => Object.keys(k).find((n) => no(n) && a(n)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), zt.security.locks[0]];
    wt = { ...wt, favourites: [.../* @__PURE__ */ new Set([...wt.favourites ?? La.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, mo), favSeeded: !0 }, Da();
  }
  const go = () => wt.suggest ?? !La.hide_suggested_entities;
  function ji() {
    const t = new Set(v ? [] : wt.favHidden || []), e = $t().filter((s) => !t.has(s)), a = go() ? he().filter((s) => !t.has(s) && Js(s)) : [], n = Math.max(mo, e.length);
    return [...e, ...a].slice(0, v && !as() ? n : Math.min(xg, n));
  }
  const te = (t) => {
    const e = $t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + W(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + W(bt(t)) + '">' + vg(e) + "</button>";
  };
  function Xa(t, { area: e = !1, star: a = !1, plain: n = !1, say: s = null, alert: d = !1 } = {}) {
    var G, S, D, A, K, E;
    const p = n && ((K = (G = i()) == null ? void 0 : G.devices) == null ? void 0 : K[(A = (D = (S = i()) == null ? void 0 : S.entities) == null ? void 0 : D[t]) == null ? void 0 : A.device_id]), u = p && (p.name_by_user || p.name) || bt(t), h = t.split(".")[0], x = !n && Dr.includes(h) ? m(t) : null, _ = x ? x.on : ["on", "open", "playing"].includes((E = k[t]) == null ? void 0 : E.state), M = n ? null : x ? x.button : wi.includes(h) ? { act: Bt(h, "toggle", t), label: "Turn " + bt(t) + (_ ? " off" : " on") } : h === "scene" || h === "script" ? { act: Bt(h, "turn_on", t), label: "Run " + bt(t) } : null, I = (s ?? Oe(t)) + (e && ke.get(t) ? " · " + ke.get(t) : ""), P = (x == null ? void 0 : x.icon) || Ba(t);
    return '<div class="activityRow' + (M ? " tfPlug" : "") + (_ ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + W((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + Ua(t) + ">" + (M && !a ? '<button class="tfIcon" type="button" data-act="' + M.act + '" aria-label="' + W(M.label) + '"' + de(t, P) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + de(t, P) + "></div>") + '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(u + ", " + I + ". More info") + '"><span class="activityRowName">' + W(u) + '</span><span class="activityRowMeta">' + W(I) + "</span></button>" + (a ? te(t) : "") + "</div>";
  }
  const Ja = () => {
    var t;
    return k[(t = wt.sources) == null ? void 0 : t.weather] ? wt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function fr() {
    var a;
    const t = (n) => Object.keys(k).filter((s) => s.startsWith("binary_sensor.") && n.includes(Ut(s).device_class));
    return ((a = Or.alert_entities) != null && a.length ? Or.alert_entities : [...t(["moisture", "smoke", "gas"]).map((n) => ({ entity: n, severity: "alert" })), ...t(Ss).map((n) => ({ entity: n, severity: "warning" }))]).filter((n) => k[n.entity]).map((n) => ({ ...n, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[n.entity].state) }));
  }
  function Jr() {
    const t = Object.keys(bi), e = /* @__PURE__ */ new Set(), a = [];
    (La.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const n = rn().sumOrder || [], s = (d) => d.type === "summary" && n.includes(d.key) ? n.indexOf(d.key) : n.length;
    return n.length ? a.map((d, p) => [d, p]).sort((d, p) => s(d[0]) - s(p[0]) || d[1] - p[1]).map(([d]) => d) : a;
  }
  function zi() {
    var D;
    const t = ((D = i()) == null ? void 0 : D.entities) || {}, e = (A) => Ut(A).device_class, a = Object.keys(k).filter((A) => A.startsWith("sensor.") && e(A) === "battery" || A.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(A))), n = zt.rooms.flatMap((A) => A.plants.map((K) => K.id));
    if (!a.length && !n.length) return null;
    const s = (A) => {
      var E;
      const K = (E = t[A]) == null ? void 0 : E.device_id;
      return !!K && Object.keys(k).some((ot) => {
        var xt;
        return ot.startsWith("binary_sensor.") && ((xt = t[ot]) == null ? void 0 : xt.device_id) === K && e(ot) === "battery_charging" && k[ot].state === "on";
      });
    }, d = (A) => A.startsWith("vacuum.") ? Ut(A).battery_level <= 20 && k[A].state !== "docked" : A.startsWith("binary_sensor.") ? e(A) === "battery" && k[A].state === "on" : parseFloat(k[A].state) <= 20 && !s(A), p = [...a, ...zt.vacuums].filter((A) => k[A] && d(A)), u = [...a.filter((A) => e(A) === "problem" && k[A].state === "on"), ...n.filter((A) => {
      var K;
      return ((K = k[A]) == null ? void 0 : K.state) === "problem";
    })], h = a.filter((A) => k[A].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...p, ...u, ...h])], _ = (A) => {
      const K = parseFloat(k[A].state);
      return e(A) === "battery" && Number.isFinite(K) ? K : 101;
    }, M = [...n, ...zt.vacuums, ...[...a].sort((A, K) => _(A) - _(K))].filter((A) => k[A] && !x.includes(A)), I = /* @__PURE__ */ new Map();
    M.forEach((A) => {
      var E;
      const K = ((E = zt.areaOf) == null ? void 0 : E.call(zt, A)) || "";
      I.set(K, [...I.get(K) || [], A]);
    });
    const P = (A) => {
      const K = zt.rooms.findIndex((E) => E.id === A);
      return A === "" ? 1 / 0 : K < 0 ? zt.rooms.length : K;
    }, G = [...I.keys()].sort((A, K) => P(A) - P(K)), S = (A) => {
      var K, E, ot, xt;
      return ((K = zt.rooms.find((Et) => Et.id === A)) == null ? void 0 : K.name) || ((xt = (ot = (E = i()) == null ? void 0 : E.areas) == null ? void 0 : ot[A]) == null ? void 0 : xt.name) || A;
    };
    return {
      value: [p.length && Ct(p.length, "low battery", "low batteries"), u.length && Ct(u.length, "problem", "problems"), h.length && Ct(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...G.map((A) => ({ name: A ? S(A) : G.length > 1 ? "Other devices" : "Devices", ids: I.get(A) }))].filter((A) => A.ids.length)
    };
  }
  const rn = () => v ? wt.home || {} : wt, Ke = (t) => ku.includes(t) ? (rn().shownSums || []).includes(t) : !(rn().hiddenSums || []).includes(t);
  function xf(t, e, a) {
    const n = t.flatMap((I) => a(I, /^cover\./)), s = n.filter((I) => {
      var P;
      return ["open", "opening"].includes((P = k[I]) == null ? void 0 : P.state);
    }).length, d = Object.keys(k).filter((I) => I.startsWith("person.")), p = d.filter((I) => {
      var P;
      return ((P = k[I]) == null ? void 0 : P.state) === "home";
    }).length, u = zt.security.openings.filter((I) => k[I]), h = u.filter((I) => k[I].state === "on").length, x = Object.keys(k).filter((I) => I.startsWith("binary_sensor.") && Ut(I).device_class === "moisture"), _ = x.filter((I) => k[I].state === "on").length, M = zt.vacuums.filter((I) => k[I]);
    return {
      covers: n.length && { value: s ? s + " open" : "All closed", groups: e((I) => a(I, /^cover\./)) },
      people: d.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: u.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: x.length && { value: _ ? Ct(_, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: M.length && { value: jt(k[M[0]].state), groups: [{ name: "Vacuum", ids: M }] }
    };
  }
  function Gi(t = !1) {
    var Vt;
    const e = zt.rooms, a = zt.security, n = (_t, Lt) => _t.actions.filter((ue) => Lt.test(ue)), s = (_t) => e.map((Lt) => ({ name: Lt.name, ids: _t(Lt) })).filter((Lt) => Lt.ids.length), d = e.flatMap((_t) => _t.lights), p = d.filter((_t) => {
      var Lt;
      return ((Lt = k[_t]) == null ? void 0 : Lt.state) === "on";
    }).length, u = e.map((_t) => _t.readings.find((Lt) => Ut(Lt).device_class === "temperature")).filter(Boolean).map((_t) => Number(k[_t].state)).filter(Number.isFinite), [h, x] = [Ne(Math.min(...u)), Ne(Math.max(...u))], _ = e.flatMap((_t) => n(_t, /^media_player\./)), M = _.filter((_t) => {
      var Lt;
      return ((Lt = k[_t]) == null ? void 0 : Lt.state) === "playing";
    }).length, I = fr(), P = I.filter((_t) => _t.severity === "warning" && _t.on).length, G = a.locks.filter((_t) => {
      var Lt;
      return ["unlocked", "jammed", "open"].includes((Lt = k[_t]) == null ? void 0 : Lt.state);
    }).length, S = a.alarms.filter((_t) => {
      var Lt;
      return ((Lt = k[_t]) == null ? void 0 : Lt.state) === "disarmed";
    }).length, D = P ? Ct(P, "warning", "warnings") : null, A = G ? G + " unlocked" : S ? S + " disarmed" : D ? null : "All secure", K = zi(), E = e.flatMap((_t) => _t.solar), ot = E.find((_t) => _t.endsWith("_power")), xt = {
      light: d.length && { value: p ? p + " on" : "All off", groups: s((_t) => _t.lights) },
      climate: u.length && { value: h === x ? h + "°" : h + " - " + x + "°", groups: s((_t) => [..._t.readings.filter((Lt) => ["temperature", "humidity"].includes(Ut(Lt).device_class)), ...n(_t, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [D, A].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((_t) => _t.ids.length) },
      media_players: _.length && { value: M ? M + " playing" : "No media playing", groups: s((_t) => n(_t, /^media_player\./)) },
      maintenance: K,
      energy: zt.grid && { value: xn(Number(((Vt = k[ot]) == null ? void 0 : Vt.state) || 0) * 1e3 + Number(k[zt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...E, zt.grid] }] },
      ...xf(e, s, n)
    }, Et = [], qt = I.filter((_t) => _t.severity !== "warning" && _t.on);
    return qt.length && Et.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ct(qt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: qt.map((_t) => _t.entity) }] }), Jr().forEach((_t) => {
      _t.type !== "summary" ? Et.push({ key: "path:" + _t.path, name: _t.label || _t.path, icon: _t.icon || "mdi:link-variant", colour: "", value: "" }) : !_t.hidden && xt[_t.key] && (t || Ke(_t.key)) && Et.push({ key: _t.key, ...bi[_t.key], ...xt[_t.key] });
    }), Et;
  }
  const kf = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + W(t.key) + '" data-k="sum:' + W(t.key) + '" aria-label="' + W(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Vr() + '"' : t.colour && vn(t.colour) ? ' style="' + vn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Pi : "") + '<div class="tfIcon" aria-hidden="true"' + de(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + W(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + W(t.value) + "</div>" : "") + "</div></div>";
  function Rc(t) {
    const e = $t();
    wt = { ...wt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (wt.favHidden || []).filter((a) => a !== t) }, Da(), De();
  }
  function Hc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Nc(t, e) {
    if (t.startsWith("path:")) {
      Hc(t.slice(5));
      return;
    }
    is("summary:" + t, e);
  }
  async function Mf() {
    const t = (p) => Promise.resolve().then(() => q(p)).catch(() => null), [e, a, n, s] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Mu }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    wt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded, favsTitle: d.favsTitle, areaOrder: d.areaOrder }, La = (a == null ? void 0 : a.value) || {}, Or = (n == null ? void 0 : n.value) || {}, Mi = Array.isArray(s == null ? void 0 : s.entities) ? s.entities : [], Jn = null, Object.keys(k).length && De(), Sf(), da = !0, Xr();
  }
  const Oc = "HomeCore";
  async function Sf() {
    var n, s, d;
    const t = location.pathname.split("/")[1], e = wt.named || [];
    if (!((s = (n = i()) == null ? void 0 : n.user) != null && s.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      wt = { ...wt, named: [...e, t] }, Da();
    };
    try {
      const p = (d = await q({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((x) => x.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === Oc) {
        a();
        return;
      }
      const u = await q({ type: "lovelace/config", url_path: t }), h = ((u == null ? void 0 : u.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((_) => _.cards || [])]);
      if (!h.length || !h.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
      await q({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Oc }), a();
    } catch {
    }
  }
  let Qr = null, Us = 0, Ys = !1;
  const Ic = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return yg.includes(e) && (e !== "binary_sensor" || Ss.includes(a) || !!Eu[a]);
  }, Zs = (t) => t.startsWith("binary_sensor.") ? Eu[Ut(t).device_class] : null;
  async function _f() {
    var t;
    if (!(Ys || Date.now() - Us < 30 * 1e3)) {
      Ys = !0, Us = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Ic), a = e.length ? await q({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Qr = Array.isArray(a) ? a.filter((n) => n.entity_id && n.state != null && n.when) : null;
      } catch {
        Qr = null;
      }
      Ys = !1, De();
    }
  }
  function Cf() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (s) => {
      if (!k[s.entity_id] || !Ic(s.entity_id) || !Js(s.entity_id) || ["unavailable", "unknown"].includes(s.state)) return;
      if (Zs(s.entity_id)) {
        const p = e.get(s.entity_id);
        s.state === "on" ? (!p || s.when > p.when + 1) && e.set(s.entity_id, { ...s, alarm: !0, cleared: null }) : p && !p.cleared && s.when > p.when && (p.cleared = s.when);
        return;
      }
      const d = t.get(s.entity_id);
      (!d || s.when > d.when + 1) && t.set(s.entity_id, s);
    };
    [...Qr || []].sort((s, d) => s.when - d.when).forEach(a);
    const n = Qr ? Us / 1e3 - 5 : 0;
    return Object.keys(k).forEach((s) => {
      var u;
      const d = k[s], p = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      p > n && a({ entity_id: s, state: d.state, when: p, context_user_id: (u = d.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((s, d) => d.when - s.when).slice(0, kg);
  }
  function Af(t) {
    var n;
    const e = t.context_user_id && Object.keys(k).find((s) => s.startsWith("person.") && Ut(s).user_id === t.context_user_id);
    if (e) return bt(e);
    const a = (n = i()) == null ? void 0 : n.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Tf(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || jt(a).toLowerCase() : e === "alarm_control_panel" ? (Du[a] || jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : jt(a).toLowerCase();
  }
  function Lf(t) {
    const e = t.entity_id, a = t.alarm && Zs(e), n = bt(e) + " " + (a ? a[0] : Tf(t)), s = a ? uo(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + uo(t.cleared * 1e3) : "") : [Af(t), uo(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + de(e, Ba(e)) + '></div><button class="tfName" type="button" data-more="' + W(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + W(n + ", " + s + ". More info") + '"><span class="activityRowName">' + W(n) + '</span><span class="activityRowMeta">' + W(s) + "</span></button></div>";
  }
  let Qa = null, Fc = 0;
  const Df = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function qc() {
    var e;
    if (Date.now() - Fc < 5 * 60 * 1e3) return;
    Fc = Date.now();
    const t = [];
    try {
      const a = ((e = await q({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], n = (s) => a.filter((d) => d.type === s).flatMap((d) => s === "grid" ? (d.flow_from || []).map((p) => p.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [s, d, p] of [["electricity", "Electricity", n("grid")], ["solar", "Solar", n("solar")], ["gas", "Gas", n("gas")], ["water", "Water", n("water")]]) {
        if (!p.length) continue;
        const u = await Promise.all(p.map((h) => Promise.resolve(q({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: s, name: d, id: p[0], ids: p, value: u.reduce((h, x) => h + x, 0), unit: Ut(p[0]).unit_of_measurement || (s === "gas" || s === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Qa = t, De();
  }
  let hr = null, Wc = [];
  function Ks() {
    var d;
    const t = Wc = Qa != null && Qa.length ? Qa : Df.map(([p, u, h, x]) => {
      if (p === "solar") {
        const M = Object.keys(k).find((I) => I.endsWith("_solar_today") && !I.includes("made_up_energy"));
        M && Number.isFinite(Number(k[M].state)) && (h = Number(k[M].state));
      }
      const _ = "sensor.made_up_energy_" + p;
      return k[_] = { entity_id: _, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: p, name: u, id: _, value: h, unit: x };
    });
    mt.clear(), t.some((p) => p.id === hr) || (hr = t[0].id);
    const e = t.map((p) => {
      const u = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, h = Mg[p.key], x = p.id === hr;
      return mt.set(p.id, { name: p.name, text: u, icon: h }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + W(p.id) + '" aria-pressed="' + x + '" aria-label="' + W(p.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + de("", h, p.name) + '></div><div><div class="activityRowName">' + W(p.name) + '</div><div class="activityRowMeta">' + W(u) + "</div></div></div>";
    }), a = t.find((p) => p.id === hr), n = (((d = ie().opts.energy) == null ? void 0 : d.graph) || "above") === "below", s = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + W(a.id) + '" role="img" aria-label="' + W(a.name) + ', last 24 hours"></svg></div>';
    return Ka("dash:energy", 0, "Energy today", e, s, Gi().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (n ? "" : " graphAbove"));
  }
  function Vc(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === hr || (hr = t, e.querySelectorAll("[data-energy-pick]").forEach((n) => {
      const s = n.dataset.energyPick === t;
      n.classList.toggle("picked", s), n.setAttribute("aria-pressed", String(s));
    }), a.dataset.graph = t, a.dataset.drawn = "", la.set("dash:energy", Ks()), Dd(!0));
  }
  const jc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, zc = /* @__PURE__ */ new Map();
  async function Ef(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), n = e.getHours(), s = e.getMinutes() / 60, d = Array.from({ length: 24 }, (u, h) => h <= n ? 0 : null);
    if (!t.ids) {
      const u = jc[t.key] || jc.electricity, h = u.map((_, M) => M < n ? _ : M === n ? _ * s : 0), x = h.reduce((_, M) => _ + M, 0) || 1;
      return d.map((_, M) => _ == null ? null : t.value * h[M] / x);
    }
    const p = zc.get(t.id);
    if (p && p.day === a && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const u = await q({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((_) => ((u == null ? void 0 : u[_]) || []).forEach((M) => {
        const I = typeof M.start == "number" ? M.start : Date.parse(M.start), P = new Date(I).getHours();
        I >= a && P < n && (d[P] += Number(M.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((_) => Promise.resolve(q({ type: "recorder/statistic_during_period", statistic_id: _, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
      d[n] = x.reduce((_, M) => _ + M, 0);
    } catch {
    }
    return zc.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function Bf(t, e) {
    const a = await Ef(e);
    if (!t.isConnected) return;
    const n = Math.max(120, t.clientWidth || 260), s = Math.max(60, t.clientHeight || 130), d = 18, p = s - 18, u = n / 24, h = u * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), _ = a.map((D) => D ?? 0), M = Math.max(0, ..._), I = (D) => p - (M > 0 ? D / M * (p - d) : 0), P = (D) => D.toLocaleString(void 0, { maximumFractionDigits: D < 10 ? 2 : 1 }) + " " + e.unit, G = (D) => String(D).padStart(2, "0") + ":00", S = M > 0 ? _.indexOf(M) : -1;
    t.setAttribute("viewBox", "0 0 " + n + " " + s), t.setAttribute("aria-label", e.name + " today by the hour: " + P(e.value) + (S >= 0 ? ", most " + P(M) + " at " + G(S) : "")), t.innerHTML = [d, (d + p) / 2, p].map((D) => '<line x1="0" x2="' + n + '" y1="' + D + '" y2="' + D + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((D, A) => D > 0 ? '<rect x="' + (A * u + (u - h) / 2).toFixed(1) + '" y="' + I(D).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (p - I(D)).toFixed(1) + '" rx="2" fill="' + (A === x ? "var(--primary)" : "var(--text)") + '"' + (A === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((D) => '<text x="' + (D * u).toFixed(1) + '" y="' + (s - 3) + '">' + String(D).padStart(2, "0") + "</text>").join("") + (S >= 0 ? '<text x="0" y="11">Most: ' + W(P(M)) + " at " + G(S) + "</text>" : "");
  }
  function Pf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, n) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: n * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Gc(t) {
    var n;
    if ((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Xu(t, a, [e].filter(Boolean));
  }
  let $i = null, Xs = 0;
  const Js = (t) => !t.startsWith("light.") || Sg.includes((ke.get(t) || "").toLowerCase()), Qs = () => Math.max(2, ln((H == null ? void 0 : H.clientWidth) || 0).n), $c = (t) => {
    const e = m(t);
    return e.sections.map((a, n) => a && (e.parts || [])[n]).filter(Boolean);
  }, Rf = (t) => $c(t).slice(0, Ln(t) - 1);
  function Uc(t) {
    const e = ie().tiles;
    if (e) return e.filter((n) => k[n] || Ot(n));
    if (!$i) {
      const n = (s) => {
        var d;
        return (((d = k[s]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (gn[s] || 0);
      };
      $i = {
        lights: zt.rooms.flatMap((s) => s.lights).filter((s) => {
          var d;
          return Js(s) && ((d = k[s]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((s, d) => n(d) - n(s) || bt(s).localeCompare(bt(d))),
        climates: zt.rooms.flatMap((s) => s.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = $i.climates.filter((n) => k[n]).slice(0, t > 3 ? 2 : 1);
    return [...$i.lights.filter((n) => k[n]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const tl = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Hf = () => {
    var e, a;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((n) => {
      var s;
      return n.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((s = n.attributes) == null ? void 0 : s.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Nf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Hf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Yc = (t, e, a, n) => (s) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (n ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + s + "</div></section>";
  function Of(t, e) {
    var d, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((v ? tl() : ie().welcome) ? '<span class="tfGreeting">' + W(Nf()) + "</span>" : "") + W(((p = (d = i()) == null ? void 0 : d.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Yc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: kf(u) })) }), !v && Tt().length && t.push({ key: "areas", html: Dt(0) });
    const a = ji();
    if (a.length && t.push({ key: "favs", wrap: Yc("tfDash-favs", "favs", "Favourites", Yi()), tiles: a.map((u) => ({ key: "fav:" + u, html: Xa(u, { area: !0 }) })) }), v)
      return qc(), ld() && t.push({ key: "dash:energy", html: Ks() }), Xs = Qs(), Uc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
        tiles: [{ key: u, html: It(Ot(u), u) }]
      })), t;
    const n = Cf();
    t.push({ key: "dash:act", html: Ka("dash:act", 0, "Activity", n.length ? n.map(Lf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Ks() });
    const s = Qs();
    return Xs = s, Uc(s >= 3 ? s : s * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + h + "</div>",
      tiles: [{ key: u, html: pt(u) ? It(Ot(u), u) : ya(u, !1, Rf(u)) }]
    })), _f(), qc(), t;
  }
  const ti = 252, pe = 16, If = 200, Ff = Math.round(ti * 1.25), qf = 60, Ra = qf + pe, Wf = 3, Zc = {
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
  }, Vf = ["wx", "favs", "act", "energy", "avg"], Kc = ["XS", "S", "M", "L", "XL"], Xc = Kc.length, jf = ["Narrow", "Wide", "Really wide"], zf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Jc = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && Po(t) ? Xc : Math.min(Xc, $c(t).length + 1), Ln = (t) => {
    const e = ie().opts[t] || {}, a = Jc(t), n = Number(e.h) || (e.tall ? 5 : zf[t] || Qc);
    return Math.max(1, Math.min(a, n));
  }, Qc = 2, Gf = 90, td = 60, Ha = (t) => {
    var e;
    return Zc[t] || (t.startsWith("room:") ? ((e = ut.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : bt(t));
  }, $f = 128;
  let pa = !1, ee = null, oa = null, el = !1, Dn = /* @__PURE__ */ new Map(), Ui = 0, sn = 0;
  const Ho = ["title", "sums"], ln = (t) => {
    const e = Math.max(1, Math.floor((t + pe) / (If + pe)));
    return { n: e, w: Math.max(1, Math.min(Ff, Math.floor((t - (e - 1) * pe) / e))) };
  }, al = () => Rt(ut), Uf = () => {
    var e;
    const t = new Set(((e = wt.home) == null ? void 0 : e.areasOff) || []);
    return al().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Yf() {
    const t = Uf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Zc).filter((e) => {
        var a, n;
        return !["title", ...((a = wt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((n = wt.home) == null ? void 0 : n.favs) === !1 ? [] : ["favs"], ...Qf() ? ["wx"] : [], ...ld() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Eo,
      areasOff: []
    };
  }
  const ie = () => v ? Yf() : ol(), ol = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...wt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Eo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function En(t) {
    v || (wt = { ...wt, dash: { ...t, known: Eo } }, Da());
  }
  function Bn() {
    const t = (e) => H.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", io.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", io.avg, 2],
      ...Eo.map((e) => [e, io[e], Ns[e] || 1]),
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, n, s = !1]) => ({ key: e, el: a, span: n, tile: s }));
  }
  const ed = (t, e, a) => {
    var n;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const s = 2 * a + pe;
      t.el.style.setProperty("--area-open", s + "px");
      const d = Math.ceil((s + Math.max(0, Tt().length - 1) * ($f + pe) + pe) / (a + pe));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((n = ie().cells.areas) == null ? void 0 : n.col) || 0)));
    }
    return Math.min(e, ie().spans[t.key] ?? t.span);
  }, ad = (t) => Ln(t.key), od = window.matchMedia("(max-width: 620px)"), Zf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(Tt().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + pe) / Ra));
  };
  function nd(t, e, a = null) {
    const n = ie().cells, s = t.every((u) => !n[u.key] || n[u.key].col + u.cols <= e), d = (u) => n[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), x = (S, D, A, K) => {
        for (let E = D; E < D + K; E++) for (let ot = S; ot < S + A; ot++) if (u.has(ot + "," + E)) return !1;
        return !0;
      }, _ = (S, D, A) => {
        for (let K = A; K < A + S.rows; K++) for (let E = D; E < D + S.cols; E++) u.add(E + "," + K);
        h.set(S.key, { col: D, row: A, cols: S.cols, rows: S.rows });
      }, M = (S, D, A) => {
        for (D = Math.max(0, Math.min(e - S.cols, D)), A = Math.max(0, A); !x(D, A, S.cols, S.rows); ) A++;
        _(S, D, A);
      }, I = (S) => {
        for (let D = 0; ; D++) for (let A = 0; A <= e - S.cols; A++) if (x(A, D, S.cols, S.rows)) {
          _(S, A, D);
          return;
        }
      };
      a && M(a, ee.col, ee.row);
      const P = t.filter((S) => S !== a), G = (S, D) => d(S).row - d(D).row || d(S).col - d(D).col;
      return s ? (P.filter((S) => n[S.key]).sort(G).forEach((S) => M(S, n[S.key].col, n[S.key].row)), P.filter((S) => !n[S.key]).forEach(I), h) : ([...P].sort(G).forEach(I), h);
    })();
  }
  function Kf(t, e) {
    const a = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), s = (d, p, u) => {
      for (let h = p; h < p + u.rows; h++) for (let x = d; x < d + u.cols; x++) if (a.has(x + "," + h)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let p = 0; ; p++) {
        let u = 0;
        for (; u <= e - d.cols && !s(u, p, d); ) u++;
        if (!(u > e - d.cols)) {
          for (let h = p; h < p + d.rows; h++) for (let x = u; x < u + d.cols; x++) a.add(x + "," + h);
          n.set(d.key, { col: u, row: p, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), n;
  }
  function nl() {
    const t = ie(), e = new Set(t.hidden), a = Bn().filter((p) => !Ho.includes(p.key));
    let n = Dn;
    if (!n.size) {
      const p = t.pegs || 4, u = a.filter((h) => !e.has(h.key));
      u.forEach((h) => {
        h.cols = ed(h, p, ti), h.rows = ad(h) ?? Qc;
      }), n = nd(u, p);
    }
    const s = (p) => !e.has(p.key) && n.get(p.key) || { row: 1e9, col: 0 };
    a.sort((p, u) => s(p).row - s(u).row || s(p).col - s(u).col);
    const d = (t.phone || []).map((p) => a.find((u) => u.key === p && !e.has(p))).filter(Boolean);
    return [...d, ...a.filter((p) => !d.includes(p))];
  }
  const Xf = () => {
    const t = nl();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), rl([...Bn().filter((e) => Ho.includes(e.key)), ...t].map((e) => e.el));
  };
  function rl(t) {
    if (ee) return;
    const e = o.activeElement;
    let a = null;
    for (const n of new Set(t.map((s) => {
      for (; s && s.parentElement !== H; ) s = s.parentElement;
      return s;
    }).filter(Boolean))) {
      const s = a ? a.nextSibling : H.querySelector(":scope > [data-tf]");
      if (n !== s)
        try {
          H.moveBefore ? H.moveBefore(n, s) : H.insertBefore(n, s);
        } catch {
          H.insertBefore(n, s);
        }
      a = n;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const mr = (t, e) => En({ ...t, cells: e, pegs: ln(H.clientWidth).n });
  function il(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const n = e.getBoundingClientRect(), s = a.getBoundingClientRect(), d = s.right > n.right ? s.right - n.right : s.left < n.left ? s.left - n.left : 0;
    d && e.scrollBy({ left: d, behavior: t ? "smooth" : "auto" });
  }
  function je() {
    var K;
    if (requestAnimationFrame(() => il(!1)), setTimeout(() => il(!1), 360), !g || !H) return;
    const t = H.clientWidth, e = t < 2 * ti + pe, a = f.classList.contains("tfDash");
    v && (pa = !1), f.classList.toggle("tfOverview", v);
    const { n, w: s } = e ? { n: 2, w: Math.floor((t - pe) / 2) } : ln(t);
    Ea.classList.add("tfPegs"), Ea.style.setProperty("--peg-n", n), Ea.style.setProperty("--peg-w", s + "px");
    const d = new Set(ie().hidden);
    Eo.forEach((E) => {
      var ot;
      return (ot = io[E]) == null ? void 0 : ot.classList.toggle("tfNotAdded", d.has(E) && !(ee != null && ee.fromTray && ee.key === E));
    }), Di(), f.classList.toggle("tfBoard", a), f.classList.toggle("tfEditing", a && pa && !e);
    const p = l("dashEditNav");
    !a && Wo && Cl(!1), p && v ? (p.hidden = !a, Wo || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = Ms)) : p && (p.hidden = !a || e, p.classList.toggle("active", pa), p.setAttribute("aria-pressed", String(pa)), p.setAttribute("aria-label", pa ? "Done editing" : "Edit custom dashboard"), p.title = pa ? "Done" : "Edit", p.innerHTML = pa ? Au : Ms);
    const u = a ? Bn() : [];
    if ((!a || !v) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((E) => E.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((E) => {
        E.classList.remove("tfBoardItem", "tfBoardHidden"), E.style.left = E.style.top = E.style.width = E.style.height = "";
      }), (K = H.querySelector(".tfDash-act > .activityRows")) == null || K.style.removeProperty("max-height"), dl(!1), f.classList.contains("tfDash") && Xf(), Le();
      return;
    }
    if (v) {
      ah(u, t, e);
      return;
    }
    H.style.setProperty("--peg-w", s + "px");
    const h = new Set(ie().hidden), x = s + pe;
    ee != null && ee.fromTray && h.delete(ee.key), u.forEach((E) => E.el.classList.toggle("tfBoardHidden", h.has(E.key)));
    const _ = u.filter((E) => !h.has(E.key) && getComputedStyle(E.el).display !== "none");
    let M = 0;
    _.filter((E) => Ho.includes(E.key)).forEach((E) => {
      E.el.classList.add("tfBoardItem"), Object.assign(E.el.style, { width: t + "px", height: "", left: "0px", top: M + "px" });
      const ot = E.key === "sums" && E.el.querySelector(".tfDash-bar"), xt = ot ? ot.querySelectorAll(".activityRow").length : 0;
      ot && (ot.style.maxWidth = "none");
      for (let Et = 1; ot && Et <= xt && (ot.style.setProperty("--bar-cols", String(Math.ceil(xt / Et))), !(ot.offsetWidth <= t)); Et++)
        ;
      ot && (ot.style.maxWidth = ""), M += E.el.offsetHeight + pe;
    }), sn = M;
    const I = _.filter((E) => !Ho.includes(E.key));
    I.forEach((E) => {
      E.cols = ed(E, n, s), E.el.classList.add("tfBoardItem"), E.el.style.width = (E.cols === n ? t : E.cols * s + (E.cols - 1) * pe) + "px", E.el.style.height = "", E.rows = ad(E) ?? Math.max(1, Math.ceil((E.el.offsetHeight + pe - 6) / Ra)), E.key === "areas" && od.matches && (E.rows = Zf(parseFloat(E.el.style.width)));
    });
    const P = ee && I.find((E) => E.key === ee.key), G = e && nl().map((E) => E.key), S = (E) => G.includes(E.key) ? G.indexOf(E.key) : -1, D = e ? Kf([...I].sort((E, ot) => S(E) - S(ot)), n) : nd(I, n, P);
    D.forEach((E) => Object.assign(E, { x: E.cols === n ? 0 : E.col * x, y: sn + E.row * Ra, w: E.cols === n ? t : E.cols * s + (E.cols - 1) * pe, h: E.rows * Ra - pe })), I.forEach((E) => {
      const ot = D.get(E.key);
      E.el.style.height = ot.h + "px", E.el.dataset.rows = e && E.key === "wx" ? 5 : Ln(E.key), E.key === "areas" && E.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((xt) => {
        xt.dataset.rows = E.el.dataset.rows;
      }), E.el.toggleAttribute("data-narrow", !e && ot.cols === 1 && n > 1), E.el.dataset.cols = ot.cols, E.el.classList.contains("tfDac") && E.el.style.setProperty("--tf-dac-pad", ot.h - Gf + "px"), !(E === P && !ee.fromTray) && (E.el.style.left = ot.x + "px", E.el.style.top = ot.y + "px");
    }), e || (Dn = D), rl([..._.filter((E) => Ho.includes(E.key)), ...I.slice().sort((E, ot) => D.get(E.key).row - D.get(ot.key).row || D.get(E.key).col - D.get(ot.key).col)].map((E) => E.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([E, ot]) => {
      const xt = D.get(E), Et = xt && H.querySelector(ot), qt = Et == null ? void 0 : Et.querySelector(":scope > .activityRows"), Vt = Et == null ? void 0 : Et.querySelector(":scope > .activityHeader");
      if (!qt || !Vt) return;
      const _t = qt.getBoundingClientRect().top - Et.getBoundingClientRect().top, Lt = xt.rows === 1 ? xt.h : Math.floor(xt.h - _t - parseFloat(getComputedStyle(Et).paddingBottom)), ue = Math.max(1, Math.floor(Lt / td));
      qt.style.setProperty("--fill-gap", (ue > 1 ? (Lt - ue * td) / (ue - 1) : 0).toFixed(2) + "px"), qt.style.maxHeight = Lt + "px";
    }), Ui = Math.max(0, ...[...D.values()].map((E) => E.row + E.rows));
    let A = sn + Ui * Ra - pe;
    A = dl(pa && !e, I, D, A, n, s), H.style.height = A + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), u.forEach((E) => cl.observe(E.el)), Dd(), Le();
  }
  const No = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, rd = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, id = () => {
    var t;
    return rd[(t = wt.home) == null ? void 0 : t.areaSize] ? wt.home.areaSize : "s";
  }, sl = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = wt.home) == null ? void 0 : t.areaLayout) ? wt.home.areaLayout : "bento";
  }, sd = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Jf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Yi = () => v ? Oo("favsTitle") : wt.favsTitle !== !1, Qf = () => {
    var t;
    return !!((t = wt.home) != null && t.weather && Ja());
  }, ld = () => {
    var t;
    return !!((t = wt.home) != null && t.energy && (Qa != null && Qa.length));
  }, Oo = (t) => {
    var e;
    return ((e = wt.home) == null ? void 0 : e[t]) ?? Jf[t];
  };
  function th() {
    var s;
    const t = Object.values(((s = i()) == null ? void 0 : s.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: ut.filter((p) => p.floor === d.floor_id) })), n = ut.filter((d) => !e.has(d.floor));
    return n.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: n }), a;
  }
  const cd = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let _e = null, dd = [], ei = /* @__PURE__ */ new Map();
  function ll(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function eh(t) {
    if (!v || !Wo || t.button !== 0 || H.clientWidth < 2 * ti + pe) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Bn().find((u) => u.el === e);
    if (!a || Ho.includes(a.key) || pt(a.key)) return;
    t.preventDefault();
    const n = H.getBoundingClientRect(), s = ei.get(a.key);
    _e = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: s.x, top: s.y, order: [...dd] };
    const d = (u) => {
      const h = u.clientX - _e.x0, x = u.clientY - _e.y0;
      if (!_e.on && Math.hypot(h, x) < 5) return;
      _e.on || (_e.on = !0, e.classList.add("tfDragging"), qe() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: _e.left + h + "px", top: _e.top + x + "px" });
      const _ = u.clientX - n.left, M = u.clientY - n.top + H.scrollTop;
      let I = null, P = 1 / 0;
      if (ei.forEach((A, K) => {
        if (K === a.key || !_e.order.includes(K)) return;
        const E = Math.hypot(_ - (A.x + A.w / 2), M - (A.y + A.h / 2));
        E < P && (P = E, I = { key: K, b: A });
      }), !I) return;
      const G = _e.order.filter((A) => A !== a.key), S = G.indexOf(I.key) + (_ > I.b.x + I.b.w / 2 ? 1 : 0), D = [...G.slice(0, S), a.key, ...G.slice(S)];
      D.join() !== _e.order.join() ? (_e.order = D, je()) : ll(ei.get(a.key));
    }, p = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const u = _e;
      _e = null, e.classList.remove("tfDragging"), u.on && Ma({ order: u.order }), je(), u.on && !qe() && setTimeout(() => dc(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function ah(t, e, a) {
    var hp;
    const n = new Set(ie().hidden);
    t.forEach((ft) => ft.el.classList.toggle("tfBoardHidden", n.has(ft.key)));
    const s = t.filter((ft) => !n.has(ft.key) && getComputedStyle(ft.el).display !== "none"), d = pe, p = a ? { w: Math.floor((e - d) / 2) } : ln(e), u = Math.min(e, No.full);
    let h = 0;
    const x = as();
    f.classList.toggle("hcSumsFit", vd()), f.classList.toggle("hcFavStrip", x);
    const _ = s.filter((ft) => Ho.includes(ft.key) || x && ft.key === "favs");
    _.sort((ft, Ht) => ["title", "sums", "favs"].indexOf(ft.key) - ["title", "sums", "favs"].indexOf(Ht.key)), _.forEach((ft) => {
      ft.el.classList.add("tfBoardItem"), ft.el.toggleAttribute("data-narrow", !1), Object.assign(ft.el.style, { width: (ft.key === "title" ? e : u) + "px", height: "", left: "0px", top: h + "px" });
      const Ht = ft.key !== "title" && (ft.el.querySelector(".tfDash-bar>.activityRows") || ft.key === "favs" && ft.el.querySelector(":scope>.activityRows")), Ee = Ht ? Ht.children.length : 0;
      if (Ht && (Ht.classList.remove("hcBarRows"), !a && Ht.scrollWidth > Ht.clientWidth + 1))
        for (let Zt = 2; Zt <= Ee && (Ht.classList.add("hcBarRows"), Ht.style.setProperty("--bar-cols", String(Math.ceil(Ee / Zt))), !(Ht.scrollWidth <= Ht.clientWidth + 1)); Zt++)
          ;
      h += ft.el.offsetHeight + (ft.key === "title" ? No.nameGap : No.sumsGap);
    });
    const M = ["favs", "wx", "energy"], I = (_e == null ? void 0 : _e.order) || ((hp = wt.home) == null ? void 0 : hp.order), P = I ? [...I.filter((ft) => M.includes(ft)), ...M.filter((ft) => !I.includes(ft))] : M;
    dd = P;
    const G = s.filter((ft) => M.includes(ft.key) && !(x && ft.key === "favs")).sort((ft, Ht) => P.indexOf(ft.key) - P.indexOf(Ht.key));
    ei = /* @__PURE__ */ new Map();
    const S = (ft, Ht) => {
      if (ei.set(ft.key, Ht), Object.assign(ft.el.style, { width: Ht.w + "px", height: Ht.h + "px" }), _e != null && _e.on && _e.key === ft.key) {
        ll(Ht);
        return;
      }
      Object.assign(ft.el.style, { left: Ht.x + "px", top: Ht.y + "px" });
    }, D = a ? e : 2 * p.w + d, A = No.row, K = sd() === "stacked" && !a && G.length > 0;
    let E = 0, ot = 0, xt = h;
    G.forEach((ft) => {
      ft.el.classList.add("tfBoardItem"), ft.el.dataset.rows = 5, ft.el.dataset.cols = 2, ft.el.toggleAttribute("data-narrow", !1), !K && E && E + D > e && (h += ot + d, E = 0, ot = 0);
      let Ht = A;
      if ((a || ft.key === "favs") && (Object.assign(ft.el.style, { width: D + "px", height: "" }), Ht = ft.el.offsetHeight), K) {
        S(ft, { x: 0, y: xt, w: D, h: Ht }), xt += Ht + d;
        return;
      }
      S(ft, { x: E, y: h, w: D, h: Ht }), E += D + d, ot = Math.max(ot, Ht);
    }), G.length && !K && (h += ot + d);
    const Et = K ? D + d : 0, qt = K ? e - D - d : e, Vt = a ? "l" : id(), _t = rd[Vt], Lt = sl(), ue = Oo("byFloor"), be = p.w, we = _t.h, Re = a ? 2 : Math.max(1, Math.floor((qt + d) / (be + d))), Sr = new Map(s.filter((ft) => pt(ft.key)).map((ft) => [ft.key, ft])), qa = (ue ? th() : [{ id: "", name: "", icon: "", rooms: ut }]).map((ft) => ({ ...ft, cards: ft.rooms.map((Ht) => Sr.get("room:" + Ht.id)).filter(Boolean) })).filter((ft) => ft.cards.length), ds = Lt === "bento", ps = ds && Oo("bentoMixed"), cm = ds && ue && Oo("bentoBoxes"), dm = Lt === "columns" && ue && !a, zo = 12, up = (ft) => ft.name ? No.floorHead + No.floorGap : 0, ui = (ft, Ht, Ee) => {
      const Zt = /* @__PURE__ */ new Set(), se = [];
      ft.cards.forEach((Jt, xo) => {
        const cn = ps && xo === 0 && Ht >= 2 && ft.cards.length > 1, Ge = cn ? 2 : 1, Go = cn && !a ? 2 : 1;
        Jt.el.classList.add("tfBoardItem"), Jt.el.dataset.cols = Ge, Jt.el.toggleAttribute("data-narrow", !1);
        for (let qn = 0; ; qn++) {
          const Wn = [...Array(Math.max(0, Ht - Ge + 1)).keys()].find((fi) => [...Array(Ge).keys()].every((oo) => [...Array(Go).keys()].every((us) => !Zt.has(qn + us + "," + (fi + oo)))));
          if (Wn != null) {
            [...Array(Ge).keys()].forEach((fi) => [...Array(Go).keys()].forEach((oo) => Zt.add(qn + oo + "," + (Wn + fi)))), se.push({ it: Jt, r: qn, c: Wn, sc: Ge, sr: Go });
            break;
          }
        }
      });
      const le = Math.max(0, ...se.map((Jt) => Jt.r + Jt.sr));
      ds && !a && se.forEach((Jt) => {
        for (; Jt.r + Jt.sr < le && !Zt.has(Jt.r + Jt.sr + "," + Jt.c) && Jt.sc === 1; )
          Zt.add(Jt.r + Jt.sr + "," + Jt.c), Jt.sr++;
      }), se.forEach((Jt) => {
        Jt.it.el.dataset.rows = Math.min(5, Jt.sr * _t.rows), Object.assign(Jt.it.el.style, { width: Jt.sc * Ee + (Jt.sc - 1) * d + "px", height: Jt.sr * we + (Jt.sr - 1) * d + "px" });
      });
      const Kt = [...Array(le)].map(() => we), ye = [];
      let _a = up(ft);
      return Kt.forEach((Jt, xo) => {
        ye[xo] = _a, _a += Jt + d;
      }), { h: _a - (le ? d : 0), places: se.map((Jt) => ({ it: Jt.it, x: Jt.c * (Ee + d), y: ye[Jt.r], w: Jt.sc * Ee + (Jt.sc - 1) * d, h: Kt.slice(Jt.r, Jt.r + Jt.sr).reduce((xo, cn) => xo + cn, 0) + (Jt.sr - 1) * d })) };
    }, Xl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((ft) => [ft.dataset.floor, ft])), Jl = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((ft) => [ft.dataset.floor, ft])), fp = [], pm = (ft, Ht, Ee, Zt) => {
      if (!ft.name) return;
      let se = Xl.get(ft.id);
      Xl.delete(ft.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloor" }), se.dataset.floor = ft.id, H.appendChild(se)), se.dataset.sig !== ft.name && (se.dataset.sig = ft.name, se.innerHTML = '<h2 class="hcFloorName">' + W(ft.name) + "</h2>"), Object.assign(se.style, { left: Ht + "px", top: Ee + "px", width: Zt + "px" }), fp.push(se);
    }, um = (ft, Ht, Ee, Zt, se) => {
      let le = Jl.get(ft.id);
      Jl.delete(ft.id), le || (le = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), le.dataset.floor = ft.id, le.setAttribute("aria-hidden", "true"), H.prepend(le)), Object.assign(le.style, { left: Ht + "px", top: Ee + "px", width: Zt + "px", height: se + "px" });
    }, fm = (ft) => parseFloat(getComputedStyle(ft.cards[0].el).paddingLeft) || 0, Ql = (ft, Ht, Ee, Zt, se = 0) => {
      pm(ft, Ee + se, Zt, (Ht.w ?? e) - se), Ht.places.forEach((le) => S(le.it, { x: Ee + le.x, y: Zt + le.y, w: le.w, h: le.h }));
    };
    if (qa.length && G.length && !K && (h += No.floorTop), dm) {
      let ft = 0, Ht = h;
      qa.forEach((Ee) => {
        const Zt = { ...ui(Ee, 1, be), w: be };
        ft && ft + be > qt && (h = Ht + d + No.floorTop, ft = 0), Ql(Ee, Zt, Et + ft, h), Ht = Math.max(Ht, h + Zt.h), ft += be + d;
      }), h = Ht + d;
    } else if (cm) {
      let ft = [{ x0: 0, x1: qt, t: h }];
      const Ht = (Zt, se) => Math.max(...ft.filter((le) => le.x1 > Zt && le.x0 < se).map((le) => le.t)), Ee = (Zt, se, le) => {
        const Kt = [];
        ft.forEach((ye) => {
          ye.x1 <= Zt || ye.x0 >= se ? Kt.push(ye) : (ye.x0 < Zt && Kt.push({ x0: ye.x0, x1: Zt, t: ye.t }), ye.x1 > se && Kt.push({ x0: se, x1: ye.x1, t: ye.t }));
        }), Kt.push({ x0: Zt, x1: se, t: le }), ft = Kt.sort((ye, _a) => ye.x0 - _a.x0);
      };
      qa.forEach((Zt) => {
        const se = Zt.cards.length + (ps && Zt.cards.length > 1 ? 3 : 0);
        let le = a ? 2 : Math.min(Re, Math.max(ps && Zt.cards.length > 1 ? 2 : 1, se <= 3 ? se : Math.ceil(se / 2)));
        for (; !a && le > 1 && le * be + (le - 1) * d + 2 * zo > qt; ) le--;
        let Kt = null;
        for (let Ge = le; Ge >= (a ? le : 1); Ge--) {
          const Go = Math.min(be, Math.floor((qt - 2 * zo - (Ge - 1) * d) / Ge)), qn = { ...ui(Zt, Ge, Go), w: Ge * Go + (Ge - 1) * d }, Wn = qn.w + 2 * zo, fi = qn.h + 2 * zo;
          ft.map((oo) => oo.x0).filter((oo) => oo + Wn <= qt + 0.5).forEach((oo) => {
            const us = Ht(oo, oo + Wn);
            (!Kt || us < Kt.t - 0.5) && (Kt = { cc: Ge, inner: Go, bw: Wn, h: fi, t: us, x: oo });
          });
        }
        if (!Kt) {
          const Ge = Math.min(be, qt - 2 * zo), Go = ui(Zt, 1, Ge);
          Kt = { cc: 1, inner: Ge, bw: Ge + 2 * zo, h: Go.h + 2 * zo, t: Ht(0, qt), x: 0 };
        }
        const ye = { ...ui(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * d }, _a = Kt.bw, Jt = Kt.h, xo = Kt.x, cn = Kt.t;
        um(Zt, Et + xo, cn, _a, Jt), Ql(Zt, ye, Et + xo + zo, cn + zo, fm(Zt)), Ee(xo, Math.min(qt, xo + _a + d), cn + Jt + d);
      }), h = Math.max(...ft.map((Zt) => Zt.t));
    } else {
      const ft = (Ht) => {
        var le;
        if (!((le = wt.home) != null && le.fitTogether) || a) return Re;
        const Ee = K ? xt - d - h : null, Zt = (Kt) => {
          const ye = Ht.cards.length + (ps && Ht.cards.length > 1 && Kt >= 2 ? 3 : 0), _a = Math.ceil(ye / Kt);
          return { holes: _a * Kt - ye, rows: _a, h: up(Ht) + _a * we + (_a - 1) * d, w: Kt * be + (Kt - 1) * d };
        }, se = (Kt) => Kt.holes === 0 || ds && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= Re; Kt++) {
          const ye = Zt(Kt);
          if (se(ye) && ye.h <= (Ee ?? ye.w)) return Kt;
        }
        for (let Kt = 1; Kt <= Re; Kt++) {
          const ye = Zt(Kt);
          if (ye.h <= (Ee ?? ye.w)) return Kt;
        }
        return Re;
      };
      qa.forEach((Ht, Ee) => {
        Ee && (h += No.floorTop);
        const Zt = ui(Ht, ft(Ht), be);
        Ql(Ht, { ...Zt, w: qt }, Et, h), h += Zt.h + d;
      });
    }
    K && (h = Math.max(h, xt)), Xl.forEach((ft) => ft.remove()), Jl.forEach((ft) => ft.remove()), _e != null && _e.on || ll(null), H.style.height = Math.max(0, h - d) + "px", rl([..._.map((ft) => ft.el), ...G.map((ft) => ft.el), ...fp, ...qa.flatMap((ft) => ft.cards.map((Ht) => Ht.el))]), dl(!1), t.forEach((ft) => [...ft.el.children].forEach((Ht) => Ht.toggleAttribute("inert", Wo)));
    const tc = H.querySelector(".tfDash-favs>.activityRows");
    tc && (tc.classList.toggle("hcFadeList", !x), cd(tc)), requestAnimationFrame(() => f.classList.add("tfBoardReady")), t.forEach((ft) => cl.observe(ft.el)), Le();
  }
  const Zi = () => {
    el || (el = !0, requestAnimationFrame(() => {
      el = !1, je();
    }));
  }, cl = new ResizeObserver(() => {
    ee || Zi();
  });
  function oh(t, e, a) {
    const n = a + pe, s = t * a + (t - 1) * pe, d = e * Ra - pe, p = pe / 2, u = n / Math.max(1, Math.round(n / (Ra / 4))), h = Ra / 4, x = 6;
    let _ = "";
    for (let M = 0; M <= t; M++) for (let I = 0; I <= e; I++) {
      const P = M * n - p, G = I * Ra - p;
      _ += "M" + (P - x) + " " + G + "H" + (P + x) + "M" + P + " " + (G - x) + "V" + (G + x);
    }
    return '<svg width="' + s + '" height="' + d + '" viewBox="0 0 ' + s + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + u.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (s + pe) + '" height="' + (d + pe) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + _ + '"></path></svg>';
  }
  function dl(t, e = [], a = /* @__PURE__ */ new Map(), n = 0, s = 1, d = ti) {
    H.querySelectorAll(".tfEditChips").forEach((_) => {
      (!t || !_.closest(".tfBoardItem")) && _.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((_) => _.remove()), H.querySelectorAll(".tfBoardItem").forEach((_) => [..._.children].forEach((M) => {
      M.classList.contains("tfEditChips") || M.toggleAttribute("inert", t);
    }));
    let p = H.querySelector(".tfBoardCells"), u = H.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), u == null || u.remove(), bo(), n;
    const h = Ui + Wf;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), H.prepend(p)), p.style.top = sn + "px", p.dataset.size !== s + "x" + h + "x" + d && (p.dataset.size = s + "x" + h + "x" + d, p.innerHTML = oh(s, h, d)), n = Math.max(n, sn + h * Ra - pe), e.forEach((_) => {
      const M = _.el;
      !M || M.querySelector(":scope > .tfEditChips") || M.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + vi + '</span><button class="tfEditChip" type="button" data-board-more="' + W(_.key) + '" aria-label="' + W(Ha(_.key)) + ' options" aria-haspopup="menu">' + bg + "</button></div>");
    }), ee && a.has(ee.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(u));
      const _ = a.get(ee.key);
      Object.assign(u.style, { left: _.x + "px", top: _.y + "px", width: _.w + "px", height: _.h + "px" });
    } else u == null || u.remove();
    const x = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const _ = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((M) => {
        const I = M.getBoundingClientRect(), P = M.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + W(P) + '" aria-label="Hide ' + W(bt(P)) + ' from the dashboard" style="left:' + Math.round(I.right - _.left - 42) + "px;top:" + Math.round(I.top - _.top + (I.height - 32) / 2) + 'px">' + Cu + "</button>";
      }).join("") + "</div>");
    }
    return n;
  }
  let pl = "";
  function ul(t) {
    pa = t, t || (ee = null, Io = Fo = !1, bo()), je(), t ? (pl = JSON.stringify(wt), br(Yt, "Edit custom dashboard", null)) : pl && JSON.stringify(wt) !== pl && Na("Changes saved");
  }
  function nh(t, e) {
    var D, A;
    bo();
    const a = Dn.get(t), { n } = ln(H.clientWidth), s = ie(), d = s.spans[t] ?? (pt(t) ? 1 : 2);
    if (!a) return;
    const p = a.cols >= n, u = (K, E, ot) => '<button type="button" role="menuitem" data-board-act="' + K + '"' + (ot ? " disabled" : "") + ">" + E + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", Ha(t) + " options");
    const x = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), _ = Jc(t), M = Ln(t), I = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Kc.map((K, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === M) + '" aria-label="' + K + ", " + (E + 1) + (E ? " rows" : " row") + '" data-board-act="h:' + (E + 1) + '"' + (E < _ ? "" : " disabled") + ">" + K + "</button>").join("") + "</div></div>", P = Vf.includes(t) || pt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + jf.map((K, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === Math.min(d, n)) + '" aria-label="' + K + ", " + (E + 1) + (E ? " columns" : " column") + '" data-board-act="w:' + (E + 1) + '"' + (E < n ? "" : " disabled") + ">" + K + "</button>").join("") + "</div></div>" : "", G = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Os().map(([K, E]) => '<button type="button" role="menuitemradio" aria-checked="' + (K === so()) + '" data-board-act="src:' + W(K) + '">' + W(E) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = I + P + G + (t === "energy" ? u("graph", (((D = s.opts.energy) == null ? void 0 : D.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", p || a.col === 0) + u("right", "Move right", p || a.col + a.cols >= n) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (x ? u("remove", "Remove") : u("hide", "Hide")), H.appendChild(h);
    const S = Math.min(a.x + a.w - h.offsetWidth, H.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, S) + "px", top: a.y + 28 + "px" }), oa = { key: t, menu: h, opener: e }, (A = h.querySelector("button:not([disabled])")) == null || A.focus();
  }
  function bo(t) {
    if (!oa) return;
    const { menu: e, opener: a } = oa;
    oa = null, e.remove(), t && (a == null || a.focus());
  }
  const Pn = () => Object.fromEntries([...Dn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function rh(t, e) {
    var u, h, x;
    if (e === "remove") {
      bo(), ih(t);
      return;
    }
    const a = wt, n = ie(), s = Pn(), d = s[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (n.spans = { ...n.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (n.opts = { ...n.opts, [t]: { ...n.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (n.opts = { ...n.opts, radar: { ...n.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (n.opts = { ...n.opts, energy: { ...n.opts.energy || {}, graph: (((u = n.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (s[t] = { ...d, col: d.col - 1 }), e === "right" && (s[t] = { ...d, col: d.col + 1 }), e === "up" && (s[t] = { ...d, row: d.row - 1 }), e === "down" && (s[t] = { ...d, row: d.row + 1 }), e === "hide" && (n.hidden = [.../* @__PURE__ */ new Set([...n.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (ee = { key: t, col: s[t].col, row: s[t].row }), mr(n, s), ee && (je(), ee = null, mr(ie(), Pn()));
    const p = /^[hw]:/.test(e) && !qe() && (oa == null ? void 0 : oa.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const _ = oa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((M) => M.setAttribute("aria-checked", String(M === p))), setTimeout(() => {
        oa === _ && bo();
      }, Be.tabs.dur);
    } else bo();
    e === "graph" && (la.delete("dash:energy"), De()), e.startsWith("src:") && ((h = Te == null ? void 0 : Te.get("radar")) == null || h.refresh(), Ae == null || Ae.refresh()), e.startsWith("h:") && t.includes(".") && De(), je(), e !== "hide" ? (x = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Na(Ha(t) + " hidden", es(a));
  }
  const pd = (t) => {
    var e;
    return Eo.includes(t) && !(((e = wt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function fl(t) {
    const e = ie(), a = Ha(t) + pd(t);
    En({ ...e, hidden: e.hidden.filter((n) => n !== t) }), je(), Na(a);
  }
  const Ki = () => ie().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ie().hidden.includes(t));
  function ud(t, e) {
    const a = ie();
    mr({ ...a, tiles: t, hidden: a.hidden.filter((n) => !n.includes(".")) }, e), De(), Le();
  }
  const fd = (t) => {
    ud([...Ki().filter((e) => e !== t), t], Pn()), Na(Ha(t) + " added"), dh(t);
  }, ih = (t) => {
    const e = wt, a = Pn();
    delete a[t], ud(Ki().filter((n) => n !== t), a), Na(Ha(t) + " removed", es(e));
  };
  let hl = 0;
  function Na(t, e = null) {
    var p;
    const a = l("toast");
    if (!a) return;
    if (P0(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(hl), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const n = f.getBoundingClientRect(), s = (p = o.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), d = Yt.classList.contains("open") && !wo ? Math.min(n.right, Yt.getBoundingClientRect().left) : n.right;
    a.style.left = (n.left + d) / 2 + "px", a.style.bottom = (s != null && s.height ? window.innerHeight - s.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), R0(a), clearTimeout(hl), hl = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Be.confirm.stay);
  }
  const sh = 700, lh = 1e3, ua = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ua.setAttribute("role", "tooltip"), ua.setAttribute("aria-hidden", "true"), f.appendChild(ua);
  let ai = null, oi = 0, Rn = 0, hd = -1 / 0;
  const ml = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, ch = (t) => {
    for (let e = t; e && e !== f; e = e.parentElement) if (ml(e)) return e;
    return null;
  };
  function Xi(t, e) {
    clearTimeout(oi), clearTimeout(Rn);
    const a = () => {
      if (!t.isConnected) return;
      ai = t, ua.textContent = e, ua.hidden = !1;
      const n = t.getBoundingClientRect(), s = ua.getBoundingClientRect(), d = n.top - s.height - 8 >= 8 ? n.top - s.height - 8 : n.bottom + 8;
      ua.style.left = Math.max(8, Math.min(window.innerWidth - s.width - 8, n.left + n.width / 2 - s.width / 2)) + "px", ua.style.top = d + "px";
    };
    !ua.hidden || performance.now() - hd < lh ? a() : oi = setTimeout(a, sh);
  }
  function Ji() {
    clearTimeout(oi), clearTimeout(Rn), ua.hidden || (hd = performance.now()), ua.hidden = !0, ai = null;
  }
  o.addEventListener("pointerover", (t) => {
    var n, s;
    if (t.pointerType === "touch") return;
    if (ua.contains(t.target)) {
      clearTimeout(Rn);
      return;
    }
    const e = (s = (n = t.target).closest) == null ? void 0 : s.call(n, ".tfAreaPick");
    if (e) {
      e !== ai ? Xi(e, e.getAttribute("aria-label")) : clearTimeout(Rn);
      return;
    }
    const a = ch(t.target);
    if (a && Xt.names === "scroll" && a.matches(Qi)) {
      gl(a);
      return;
    }
    if (a) {
      a !== ai ? Xi(a, a.textContent.trim()) : clearTimeout(Rn);
      return;
    }
    clearTimeout(oi), clearTimeout(Rn), Rn = setTimeout(Ji, 120);
  }), o.addEventListener("focusin", (t) => {
    var n;
    const e = t.target;
    if (!((n = e.matches) != null && n.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      Xi(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(ml);
    Xt.names === "scroll" && (a.filter((s) => s.matches(Qi)).forEach(gl), a = a.filter((s) => !s.matches(Qi))), a.length && Xi(e, a.map((s) => s.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === ai && Ji();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ua.hidden && (t.stopPropagation(), Ji());
  }, !0), window.addEventListener("scroll", () => {
    (!ua.hidden || oi) && Ji();
  }, { capture: !0, passive: !0 });
  const Qi = ".activityRowName,.activityRowMeta", ts = /* @__PURE__ */ new WeakSet();
  function gl(t) {
    var a;
    if (Xt.names !== "scroll" || ts.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ts.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((n) => n.getAnimations()).map((n) => n.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const n = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (n < 2) {
        ts.delete(t);
        return;
      }
      const s = n / 30 * 1e3, d = s + 1e3 + s;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -n + "px", offset: s / d },
        { textIndent: -n + "px", offset: (1e3 + s) / d, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: d });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", ts.delete(t);
      };
    }, 600);
  }
  const md = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (md.unobserve(e.target), gl(e.target));
  }), { threshold: 1 });
  let bl = !1;
  new MutationObserver(() => {
    bl || Xt.names !== "scroll" || (bl = !0, setTimeout(() => {
      bl = !1, o.querySelectorAll(Qi).forEach((t) => {
        !t.dataset.glided && ml(t) && (t.dataset.glided = "1", md.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const es = (t) => () => {
    wt = t, Da(), De(), je(), Le();
  };
  function dh(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const a = e();
      if (!a) return;
      const n = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, s = a.getBoundingClientRect();
      (s.top < 0 || s.bottom > window.innerHeight) && a.scrollIntoView({ behavior: n ? "auto" : "smooth", block: "center" });
      const d = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: n ? "steps(1, end)" : "ease-out" });
    }, ph(t) ? 260 : 0);
  }
  function ph(t) {
    const e = Dn.get(t);
    if (!e || !Yt.classList.contains("open") || wo) return !1;
    const { n: a, w: n } = ln(H.clientWidth), s = Yt.getBoundingClientRect().left - H.getBoundingClientRect().left, d = (h) => h * (n + pe) + e.cols * n + (e.cols - 1) * pe <= s;
    if (d(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Dn.forEach((h, x) => {
      if (x !== t) for (let _ = h.row; _ < h.row + h.rows; _++) for (let M = h.col; M < h.col + h.cols; M++) p.add(M + "," + _);
    });
    const u = (h, x) => {
      for (let _ = x; _ < x + e.rows; _++) for (let M = h; M < h + e.cols; M++) if (p.has(M + "," + _)) return !1;
      return !0;
    };
    for (let h = 0; h <= Ui; h++) for (let x = 0; x + e.cols <= a && d(x); x++)
      if (u(x, h))
        return mr(ie(), { ...Pn(), [t]: { col: x, row: h } }), je(), !0;
    return !1;
  }
  const gd = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, bd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let gr = "page";
  const uh = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, n]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + W(n) + '</span></span><span class="hcRowEnd">' + Sc + "</span></button>").join("") + "</section>", br = (t, e, a, n) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? n : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, fh = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + yc + "</button>", hh = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function wl(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), n = a.querySelector(".rubberIndicator");
    let s = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = hh(p) !== gr, p.classList.toggle("hcFirst", !p.hidden && s), p.hidden || (s = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const u = p.dataset.trayTab === gr;
      p.classList.toggle("active", u), p.setAttribute("aria-selected", String(u));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (n.style.transition = "none", t ? Ts(n, n.offsetLeft, n.offsetWidth, d.offsetLeft, d.offsetWidth) : (n.style.left = d.offsetLeft + "px", n.style.width = d.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + bd.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + ks + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + ks + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + ks + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Yt);
  let wo = !1, Io = !1, Fo = !1, ni = !1, na = null, qo = !1;
  const vl = {}, to = (t, e) => {
    if (vl[t] === e) return;
    vl[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Za(a);
  }, yl = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(e) + "</span></span>", mh = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + W(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + vi + '</span><span class="tfIcon"' + de(t, Ba(t)) + "></span>" + yl(t, e ? "Hidden" + (ke.get(t) ? " · " + ke.get(t) : "") : ke.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + W(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + W(bt(t)) + ' on the dashboard">' + (e ? Cu : wg) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + W(t) + '" aria-label="Remove ' + W(bt(t)) + ' from favourites">' + kc + "</button>" : "<span></span>") + "</li>";
  function xl(t, e, a, n) {
    const s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((p) => e(p) && !a.has(p) && k[p].state !== "unavailable").filter((p) => {
      const u = (bt(p) + " " + (ke.get(p) || "") + " " + p).toLowerCase();
      return s.every((h) => u.includes(h));
    }).sort((p, u) => (ke.get(p) || "~").localeCompare(ke.get(u) || "~") || bt(p).localeCompare(bt(u))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + n + '="' + W(p) + '"><span class="tfIcon"' + de(p, Ba(p)) + "></span>" + yl(p, ke.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const gh = "https://www.home-assistant.io/dashboards/", wd = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ve = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ve.setAttribute("aria-label", "Edit Home page"), ve.toggleAttribute("inert", !0);
  let Wo = !1, Oa = !1, kl = "", Ml = null, wr = "page";
  function Sl(t, e) {
    const a = ve.querySelector(".hcTrayTabs"), n = a == null ? void 0 : a.querySelector(".rubberIndicator"), s = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(s != null && s.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = ve.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && Sl(t, e);
      });
      return;
    }
    n.style.transition = "none", t && e ? Ts(n, e.left, e.width, s.offsetLeft, s.offsetWidth) : (n.style.left = s.offsetLeft + "px", n.style.width = s.offsetWidth + "px");
  }
  const Hn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + W(wd[t][0]) + '">' + Mc + "</button>", ka = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + W(e) + '" ' + a + "></button>", _l = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + W(t) + '. Use the up and down arrows">' + vi + "</button>", vd = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, as = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.favsAs) === "strip";
  }, ri = (t, e, a, n) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + W(t) + '">' + n.map(([s, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + s + '" aria-pressed="' + (a === s) + '">' + d + "</button>").join("") + "</div></div>", yd = () => Gi(!0).filter((t) => bi[t.key]).map((t) => t.key);
  function Nn() {
    var h, x, _, M, I, P, G;
    if (!Wo) return;
    const t = $t(), e = (S) => '<li class="hcHeRow" data-he-id="' + W(S) + '">' + _l(bt(S)) + '<span class="tfIcon"' + de(S, Ba(S)) + "></span>" + yl(S, ke.get(S) || Oe(S)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + W(S) + '" aria-label="Take ' + W(bt(S)) + ' off Favourites">' + kc + "</button></li>", a = (S) => {
      const D = bi[S];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + W(S) + '"' + (D.colour && vn(D.colour) ? ' style="' + vn(D.colour).slice(1) + '"' : "") + ">" + _l(D.name) + '<span class="tfIcon"' + de("", D.icon, D.name) + '></span><span class="activityRowName">' + W(D.name) + "</span>" + ka(Ke(S), D.name, 'data-he-sum="' + W(S) + '"') + "</li>";
    }, n = ((h = ve.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", s = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], d = new Set(((x = wt.home) == null ? void 0 : x.areasOff) || []), p = (S) => '<li class="hcHeRow" data-he-id="' + W(S.id) + '">' + _l(S.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + de("area:" + S.id, S.icon || "mdi:texture-box", S.name) + '></span></span><span class="activityRowName">' + W(S.name) + "</span>" + ka(!d.has(S.id), "Show " + S.name + " on Home", 'data-he-area="' + W(S.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Hn("welcome") + ka(tl(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Ja() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Hn("weather") + ka(!!((_ = wt.home) != null && _.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Qa != null && Qa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Hn("energy") + ka(!!((M = wt.home) != null && M.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + ri("Cards", "data-he-cards-as", sd(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ka(Oo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + ri("Layout", "data-he-area-layout", sl(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (sl() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ka(Oo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ka(Oo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + ri("Area cards", "data-he-area-size", id(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ka(!!((I = wt.home) != null && I.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ka(((P = wt.home) == null ? void 0 : P.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Hn("favs") + "</div>" + ri("Show as", "data-he-favs-as", as() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (as() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ka(Oo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Oa + '">' + ks + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Oa ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + W(n) + '"><ul class="tfTrayList">' + (Oa ? xl(n, (S) => gd.test(S), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Hn("suggest") + ka(go(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Hn("sums") + ka(((G = wt.home) == null ? void 0 : G.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + ri("Width", "data-he-sums-width", vd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + yd().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + al().map(p).join("") + "</ul>"
    };
    ve.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + s.map(([S, D]) => '<button class="tab segBtn' + (S === wr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (S === wr) + '" data-he-tab="' + S + '">' + D + "</button>").join("") + "</div>" + uh(s, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[wr] + "</div>", Sl(!1), Za(ve);
  }
  const vr = (t) => {
    wt = { ...wt, ...t }, Da(), De(), Nn();
  }, Ma = (t) => vr({ home: { ...wt.home || {}, ...t } });
  function Cl(t) {
    On(), Wo = t, Oa = !1, ve.classList.toggle("open", t), ve.toggleAttribute("inert", !t), f.classList.toggle("hcHomeEditing", t), g && H && je();
    const e = l("dashEditNav"), a = ve.querySelector(".tfTrayHead");
    e && t && (Ml = e.parentElement, a.appendChild(e)), e && !t && Ml && Ml.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Au : Ms), t ? (kl = JSON.stringify(wt), Nn(), br(ve, "Edit Home page", null)) : kl && JSON.stringify(wt) !== kl && Na("Changes saved");
  }
  ve.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + fh + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', f.appendChild(ve);
  let Vo = null;
  const eo = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  eo.setAttribute("role", "dialog"), f.appendChild(eo);
  function On() {
    Vo && (Vo.setAttribute("aria-expanded", "false"), Vo = null, eo.hidden = !0);
  }
  function xd(t) {
    const e = Vo;
    if (On(), e === t) return;
    const [a, n] = wd[t.dataset.info];
    eo.setAttribute("aria-label", a), eo.innerHTML = '<div class="hcInfoTitle">' + W(a) + '</div><div class="hcInfoText">' + n + '</div><a class="hcInfoMore" href="' + gh + '" target="_blank" rel="noopener">Learn more</a>', eo.hidden = !1, Vo = t, t.setAttribute("aria-expanded", "true");
    const s = t.getBoundingClientRect(), d = eo.offsetWidth, p = eo.offsetHeight;
    eo.style.left = Math.max(8, Math.min(innerWidth - d - 8, s.left + s.width / 2 - d / 2)) + "px", eo.style.top = (s.bottom + 8 + p > innerHeight - 8 ? Math.max(8, s.top - 8 - p) : s.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    Vo && !t.composedPath().some((e) => e === eo || e === Vo) && On();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Vo) {
        t.stopPropagation();
        const a = Vo;
        On(), a.focus();
        return;
      }
      if (Oa) {
        t.stopPropagation(), Oa = !1, Nn();
        return;
      }
      Wo && (t.stopPropagation(), Cl(!1), (e = l("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const bh = (t) => t.dataset.heList === "favs" ? $t() : t.dataset.heList === "areas" ? al().map((e) => e.id) : yd(), kd = (t, e) => t.dataset.heList === "favs" ? vr({ favourites: e }) : t.dataset.heList === "areas" ? (vr({ areaOrder: e }), je()) : Ma({ sumOrder: e });
  ve.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement, s = bh(n), d = s.indexOf(a.dataset.heId), p = d + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= s.length || (s.splice(p, 0, s.splice(d, 1)[0]), kd(n, s), (u = ve.querySelector('[data-he-list="' + n.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), ve.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), n = a.dataset.heList;
    Dl(t, e.closest("[data-he-id]"), "heId", (s) => kd(a, s), (s) => ve.querySelector('[data-he-list="' + n + '"] [data-he-id="' + CSS.escape(s) + '"]'));
  }), ve.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Nn();
      const a = ve.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ve.addEventListener("click", (t) => {
    var D, A, K, E;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      xd(a);
      return;
    }
    const n = e.closest("[data-he-go]");
    if (n) {
      wr = n.dataset.heGo, Oa = !1, On(), Nn(), br(ve, "Edit Home page", wr, n.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      On(), br(ve, "Edit Home page", null);
      return;
    }
    const s = e.closest("[data-he-tab]");
    if (s) {
      const ot = ve.querySelector(".hcTrayTabs .rubberIndicator"), xt = { left: ot.offsetLeft, width: ot.offsetWidth };
      wr = s.dataset.heTab, Oa = !1, On(), Nn(), Sl(!0, xt), ve.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Ma({ welcome: !tl() });
      return;
    }
    const d = e.closest("[data-he-card]");
    if (d) {
      const ot = d.dataset.heCard, xt = ["sums", "favs"].includes(ot) ? ((D = wt.home) == null ? void 0 : D[ot]) !== !1 : !!((A = wt.home) != null && A[ot]);
      Ma({ [ot]: !xt });
      return;
    }
    const p = e.closest("[data-he-favs-as]");
    if (p) {
      Ma({ favsAs: p.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      Ma({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const h = e.closest("[data-he-area-size]");
    if (h) {
      Ma({ areaSize: h.dataset.heAreaSize });
      return;
    }
    const x = e.closest("[data-he-area-layout]");
    if (x) {
      Ma({ areaLayout: x.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      Ma({ fitTogether: !((K = wt.home) != null && K.fitTogether) });
      return;
    }
    const _ = e.closest("[data-he-cards-as]");
    if (_) {
      Ma({ cardsAs: _.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const ot = M.dataset.heFlag;
      Ma({ [ot]: !Oo(ot) }), ot === "favsTitle" && Ia();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      vr({ suggest: !go() });
      return;
    }
    const I = e.closest("[data-he-area]");
    if (I) {
      const ot = new Set(((E = wt.home) == null ? void 0 : E.areasOff) || []), xt = I.dataset.heArea;
      ot.has(xt) ? ot.delete(xt) : ot.add(xt), Ma({ areasOff: [...ot] });
      return;
    }
    const P = e.closest("[data-he-sum]");
    if (P) {
      const ot = P.dataset.heSum, xt = !Ke(ot), Et = wt.home || {};
      Ma(ku.includes(ot) ? { shownSums: xt ? [...Et.shownSums || [], ot] : (Et.shownSums || []).filter((qt) => qt !== ot) } : { hiddenSums: xt ? (Et.hiddenSums || []).filter((qt) => qt !== ot) : [...Et.hiddenSums || [], ot] });
      return;
    }
    const G = e.closest("[data-he-remove]");
    if (G) {
      vr({ favourites: $t().filter((ot) => ot !== G.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Oa = !Oa, Nn(), Oa && ve.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const S = e.closest("[data-he-pick-id]");
    S && (Oa = !1, ve.querySelector("[data-he-search]").value = "", vr({ favourites: [...$t(), S.dataset.hePickId] }));
  });
  function Le() {
    var _, M, I;
    const t = pa && f.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && wo), Yt.toggleAttribute("inert", !t), t || (qo = !1), Td(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = wo ? yc : Sc, e.setAttribute("aria-expanded", String(!wo)), e.setAttribute("aria-label", wo ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ie().hidden.filter((P) => !Ho.includes(P) && Bn().some((G) => G.key === P)), n = (P, G) => '<button class="tfTrayCard" type="button" data-tray-card="' + W(P) + '" aria-label="' + W(Ha(P)) + ": drag it onto the board, or press to " + G + '"><span class="tfTrayGrip" aria-hidden="true">' + vi + "</span>" + W(Ha(P)) + "</button>", s = a.filter((P) => !Li.includes(P)), d = Li.filter((P) => a.includes(P));
    to("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Hn("welcome") + '<button class="switch' + (ie().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ie().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((_ = wt.dash) != null && _.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((M = wt.dash) != null && M.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => wl(!1)), to("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((P) => n(P, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), to("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((P) => n(P, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), to("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ie().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + qo + '">' + (qo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(wt.favHidden || []), u = $t(), h = [...u, ...[...p].filter((P) => !u.includes(P) && k[P])];
    to("favs", h.map((P) => mh(P, p.has(P), u.includes(P))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !Fo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Fo)), Fo && to("tilepick", xl(Yt.querySelector("[data-tile-search]").value, (P) => Dr.includes(P.split(".")[0]), new Set(Ki()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !ni, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ni));
    const x = new Set(((I = wt.dash) == null ? void 0 : I.areasOff) || []);
    if (to("areas", Rt(ut).map((P) => '<li class="hcHeRow" data-area-id="' + W(P.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + W(P.name) + '. Use the up and down arrows">' + vi + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + de("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="activityRowName">' + W(P.name) + '</span><button class="switch' + (x.has(P.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(P.id) + '" aria-label="Show ' + W(P.name) + ' in the Areas card" data-area-on="' + W(P.id) + '"></button></li>').join("")), ni) {
      const P = new Set(Ki());
      to("roompick", Rt(ut).filter((G) => !P.has("room:" + G.id)).map((G) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + W(G.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + de("area:" + G.id, G.icon || "mdi:texture-box", G.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + W(G.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Io, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Io)), Io && to("pick", xl(Yt.querySelector("[data-fav-search]").value, (P) => gd.test(P), new Set($t()), "data-fav-pick")), to("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Yi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Yi() + '" data-fav-title aria-label="Title"></button>'), to("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (go() ? " on" : "") + '" type="button" role="switch" aria-checked="' + go() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const In = (t) => {
    wt = { ...wt, ...t }, Da(), De(), Le();
  };
  function Md(t, e) {
    const a = wt, n = new Set(wt.favHidden || []);
    e ? n.delete(t) : n.add(t), In({ favHidden: [...n] }), e ? Na(bt(t) + " put back") : Na(bt(t) + " hidden", es(a));
  }
  const wh = (t) => {
    const e = wt;
    In({ favourites: $t().filter((a) => a !== t), favHidden: (wt.favHidden || []).filter((a) => a !== t) }), Na(bt(t) + " removed from favourites", es(e));
  }, vh = (t) => {
    In({ favourites: [...$t().filter((e) => e !== t), t], favHidden: (wt.favHidden || []).filter((e) => e !== t) }), Na(bt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, n, s;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        gr = e.dataset.trayTab, wl(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        gr = e.dataset.trayGo, wl(!1), br(Yt, "Edit custom dashboard", gr, bd.find(([d]) => d === gr)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        br(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) ul(!1);
      else if (e.hasAttribute("data-info")) xd(e);
      else if (e.hasAttribute("data-dash-sums"))
        En({ ...ol(), hidden: ol().hidden.filter((d) => d !== "sums"), sumsOff: !((a = wt.dash) != null && a.sumsOff) }), De(), Le();
      else if (e.hasAttribute("data-dash-welcome")) {
        const d = ie();
        En({ ...d, welcome: !d.welcome }), De(), Le();
      } else if (e.hasAttribute("data-tray-tuck"))
        wo = !wo, Le();
      else if (e.hasAttribute("data-phone-toggle"))
        qo = !qo, Le(), qo && ((n = fa.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (fl(e.dataset.trayCard), Le());
      else if (e.dataset.favEye) Md(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) wh(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Io = !Io, Le(), Io && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) vh(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Fo = !Fo, Le(), Fo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) fd(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ni = !ni, Le();
      else if (e.dataset.roomPick) fd("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const d = new Set(((s = wt.dash) == null ? void 0 : s.areasOff) || []);
        d.has(e.dataset.areaOn) ? d.delete(e.dataset.areaOn) : d.add(e.dataset.areaOn), En({ ...ie(), areasOff: [...d] }), De(), Le();
      } else e.hasAttribute("data-fav-suggest") ? In({ suggest: !go() }) : e.hasAttribute("data-fav-title") && (In({ favsTitle: !Yi() }), Ia());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Le();
  });
  const Sd = (t) => {
    wt = { ...wt, areaOrder: t }, Da(), De(), Le();
  };
  Yt.addEventListener("keydown", (t) => {
    var p, u, h;
    const e = (u = (p = t.target).closest) == null ? void 0 : u.call(p, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, n = Rt(ut).map((x) => x.id), s = n.indexOf(a), d = s + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= n.length || (n.splice(d, 0, n.splice(s, 1)[0]), Sd(n), (h = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Dl(t, e.closest("[data-area-id]"), "areaId", Sd, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const jo = window.visualViewport, Al = () => {
    if (!jo) return;
    const t = Math.max(0, Math.round(window.innerHeight - jo.height - jo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  jo == null || jo.addEventListener("resize", Al), jo == null || jo.addEventListener("scroll", Al), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Al(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, n;
    const e = !!((n = (a = t.target).closest) != null && n.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Fo : Io) || (t.stopPropagation(), e ? Fo = !1 : Io = !1, Le(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function _d(t, e, a, n) {
    t.preventDefault();
    const s = t.clientX, d = t.clientY;
    let p = null, u = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (M) => {
      if (!p) {
        if (Math.hypot(M.clientX - s, M.clientY - d) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", f.appendChild(p);
      }
      p.style.transform = "translate(" + (M.clientX - 24) + "px," + (M.clientY - 24) + "px)";
      const I = !wo && M.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const S = H.getBoundingClientRect(), { w: D } = ln(H.clientWidth);
        ee = !I && M.clientX >= S.left && M.clientX <= S.right && M.clientY >= S.top + sn ? { key: n, col: Math.max(0, Math.floor((M.clientX - S.left) / (D + pe))), row: Math.max(0, Math.floor((M.clientY - S.top - sn) / Ra)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, je();
        }));
        return;
      }
      const P = H.querySelector(".tfDash-favs"), G = P == null ? void 0 : P.getBoundingClientRect();
      if (na = null, G && !I && M.clientX >= G.left && M.clientX <= G.right && M.clientY >= G.top && M.clientY <= G.bottom) {
        let S = 1 / 0;
        P.querySelectorAll('[data-k^="fav:"]').forEach((D, A) => {
          const K = D.getBoundingClientRect(), E = Math.hypot(M.clientX - (K.left + K.width / 2), M.clientY - (K.top + K.height / 2));
          E < S && (S = E, na = { i: A, r: K, after: M.clientX > K.left + K.width / 2 });
        }), na || (na = { i: 0, r: null, after: !1 });
      }
      na != null && na.r ? (h.isConnected || f.appendChild(h), Object.assign(h.style, { left: (na.after ? na.r.right : na.r.left) - 2 + "px", top: na.r.top + 8 + "px", height: na.r.height - 16 + "px" })) : h.remove();
    }, _ = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), cancelAnimationFrame(u), p == null || p.remove(), h.remove(), a === "card") {
        if (!p) fl(n);
        else if (ee != null && ee.fromTray) {
          je();
          const S = Ha(n) + pd(n), D = ie(), A = Pn();
          ee = null, mr({ ...D, hidden: D.hidden.filter((K) => K !== n) }, A), Na(S);
        }
        ee = null, je(), De(), Le();
        return;
      }
      if (!na) return;
      const M = new Set(wt.favHidden || []);
      M.delete(n);
      const I = $t().filter((S) => S !== n), P = I.filter((S) => !M.has(S)), G = P[Math.min(na.i + (na.after ? 1 : 0), P.length)];
      I.splice(G ? I.indexOf(G) : I.length, 0, n), na = null, In({ favourites: I, favHidden: [...M] }), Na(bt(n) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _);
  }
  const Cd = {
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
  }, Ad = 136, yh = 288, xh = 0.8, kh = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, fa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  fa.setAttribute("aria-label", "Phone order"), fa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + kc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(fa);
  let Tl = "";
  function Td() {
    var u;
    const t = qo && pa && f.classList.contains("tfBoard") && !wo;
    if (fa.classList.toggle("open", t), fa.toggleAttribute("inert", !t), !t) return;
    const e = nl().filter((h) => !ie().hidden.includes(h.key)), a = e.length, n = (h) => Math.round(h * xh * 10) / 10 + "px", s = (h, x) => {
      const _ = h.el.classList.contains("tfDac"), M = h.tile ? _ ? yh : Ad : Cd[h.key] || Ad;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + W(h.key) + '" style="min-height:' + n(M) + '" aria-label="' + W(Ha(h.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? de(h.key, Ba(h.key)) : de(h.key, kh[h.key])) + '></span><span class="tfPhoneName">' + W(Ha(h.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + W(((u = H.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + n(Cd.sums) + '"><span class="tfPhoneName">' + W(Ha("sums")) + "</span></div>" + e.map(s).join("");
    if (fa.querySelector('[data-phone="note"]').innerHTML = ie().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === Tl) return;
    Tl = d;
    const p = fa.querySelector('[data-phone="list"]');
    p.innerHTML = d, Za(p);
  }
  function Ld(t, e) {
    var a;
    En({ ...ie(), phone: t }), Le(), e && ((a = fa.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Ll = () => [...fa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Mh(t, e) {
    t.preventDefault();
    const a = e.parentElement, n = fa.querySelector(".tfPhoneScreen"), s = Ll().join();
    e.classList.add("moving");
    const d = (u) => {
      const h = n.getBoundingClientRect();
      u.clientY > h.bottom - 40 ? n.scrollTop += 12 : u.clientY < h.top + 40 && (n.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((I) => {
        const P = I.getBoundingClientRect();
        return I !== e && u.clientX >= P.left && u.clientX <= P.right && u.clientY >= P.top && u.clientY <= P.bottom;
      });
      if (!x) return;
      const _ = x.getBoundingClientRect(), M = x.classList.contains("tile") ? u.clientX < _.left + _.width / 2 : u.clientY < _.top + _.height / 2;
      a.insertBefore(e, M ? x : x.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const u = Ll();
      Tl = "", u.join() !== s ? Ld(u) : Td();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  fa.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Mh(t, e);
  }), fa.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      qo = !1, Le(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: n, ...s } = ie();
      En(s), Le();
    }
  }), fa.addEventListener("keydown", (t) => {
    var p, u, h, x;
    if (t.key === "Escape") {
      t.stopPropagation(), qo = !1, Le(), (p = Yt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (h = (u = t.target).closest) == null ? void 0 : h.call(u, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const n = Ll(), s = n.indexOf(e), d = s + a;
    d < 0 || d >= n.length || ([n[s], n[d]] = [n[d], n[s]], Ld(n, e));
  });
  function Dl(t, e, a, n, s) {
    t.preventDefault();
    const d = Be.drag, p = qe(), u = 1 + d.lift / 100, h = [...e.parentElement.children].filter((Lt) => Lt.dataset[a]), x = h.indexOf(e), _ = h.map((Lt) => Lt.getBoundingClientRect()), M = h.length - 1, I = _[x].height + (h.length > 1 ? _[1].top - _[0].bottom : 0), P = (Lt) => _[Lt].top + _[Lt].height / 2, G = t.clientY, S = _[0].top - _[x].top, D = _[M].top - _[x].top;
    let A = 0, K = 0, E = 0, ot = 1, xt = x, Et = 0;
    e.classList.add("hcListDragging"), h.forEach((Lt) => {
      Lt !== e && (Lt.style.transition = p ? "none" : "transform " + d.gap + "ms " + Pe.land);
    });
    const qt = () => {
      if (Et = requestAnimationFrame(qt), p) {
        K = A, e.style.transform = "translateY(" + K + "px)";
        return;
      }
      E = cc(E, A - K, d.pull / 100, d.keep / 100), K += E, ot += (u - ot) * 0.25;
      const Lt = Math.min(Math.abs(E) / 48, 1);
      e.style.transform = "translateY(" + K.toFixed(2) + "px) scale(" + (ot * (1 - 0.063 * Lt)).toFixed(4) + "," + (ot * (1 + 0.1 * Lt)).toFixed(4) + ")";
    };
    Et = requestAnimationFrame(qt);
    const Vt = (Lt) => {
      A = Math.max(S, Math.min(D, Lt.clientY - G));
      const ue = P(x) + A, be = h.filter((we, Re) => Re !== x && P(Re) < ue).length;
      be !== xt && (xt = be, h.forEach((we, Re) => {
        we !== e && (we.style.transform = x < xt && Re > x && Re <= xt ? "translateY(" + -I + "px)" : xt < x && Re >= xt && Re < x ? "translateY(" + I + "px)" : "");
      }));
    }, _t = () => {
      window.removeEventListener("pointermove", Vt), window.removeEventListener("pointerup", _t), window.removeEventListener("pointercancel", _t), cancelAnimationFrame(Et);
      const Lt = e.getBoundingClientRect(), ue = e.dataset[a];
      h.forEach((qa) => {
        qa.style.transition = "none", qa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const be = h.map((qa) => qa.dataset[a]);
      be.splice(xt, 0, be.splice(x, 1)[0]), n(be);
      const we = s(ue) || e;
      if (requestAnimationFrame(() => h.forEach((qa) => {
        qa.style.transition = "";
      })), p) return;
      const Re = we.getBoundingClientRect(), Sr = Lt.top + Lt.height / 2 - (Re.top + Re.height / 2);
      we.classList.add("hcListLanding"), we.animate([{ transform: "translateY(" + Sr + "px) scale(" + ot + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: d.slide, easing: Pe.land }).finished.then(() => {
        we.classList.remove("hcListLanding"), dc(we);
      }, () => we.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Vt), window.addEventListener("pointerup", _t), window.addEventListener("pointercancel", _t);
  }
  function Sh(t, e) {
    Dl(
      t,
      e,
      "trayFav",
      (a) => {
        const n = new Set($t());
        vl.favs = null, In({ favourites: a.filter((s) => n.has(s)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? _d(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Sh(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && _d(t, a, "fav", a.dataset.trayFav);
  });
  function _h(t) {
    if (!pa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Bn().find((qt) => qt.el === e);
    if (!a || Ho.includes(a.key)) return;
    const n = Dn.get(a.key), { w: s } = ln(H.clientWidth);
    if (!n) return;
    t.preventDefault(), bo();
    const d = t.clientX, p = t.clientY;
    let u = !1, h = 0;
    const x = Be.drag, _ = qe();
    let M = 0, I = 0, P = 0, G = 0, S = 0, D = 0, A = _ || x.stick === 0, K = 0;
    const E = (qt, Vt, _t, Lt) => {
      e.style.transform = "translate(" + P.toFixed(2) + "px," + G.toFixed(2) + "px) rotate(" + qt.toFixed(2) + "deg) rotate(" + Vt + "rad) scale(" + _t.toFixed(4) + "," + Lt.toFixed(4) + ") rotate(" + -Vt + "rad)";
    }, ot = () => {
      if (K = requestAnimationFrame(ot), _) {
        P = M, G = I, E(0, 0, 1, 1);
        return;
      }
      if (!A) {
        const ue = Math.min(Math.hypot(M, I) / Math.max(1, x.stick), 1);
        P = M * 0.35, G = I * 0.35, E(0, Math.atan2(I, M), 1 + 0.155 * ue, 1 - 0.1 * ue);
        return;
      }
      S = cc(S, M - P, x.pull / 100, x.keep / 100), D = cc(D, I - G, x.pull / 100, x.keep / 100), P += S, G += D;
      const qt = Math.hypot(S, D), Vt = Math.min(qt / 48, 1), _t = Math.max(-5, Math.min(x.tilt, S * 0.32)), Lt = 1 + x.lift / 100;
      E(_t, Math.atan2(D, S), Lt * (1 + 0.1 * Vt), Lt * (1 - 0.063 * Vt));
    }, xt = (qt) => {
      if (M = qt.clientX - d, I = qt.clientY - p, !u) {
        if (Math.hypot(M, I) < 4) return;
        u = !0, ee = { key: a.key, col: n.col, row: n.row }, e.classList.add("tfDragging", "mvDrag"), K = requestAnimationFrame(ot);
      }
      !A && Math.hypot(M, I) > x.stick && (A = !0, S = M * 0.085, D = I * 0.085), ee.col = Math.round((n.x + M) / (s + pe)), ee.row = Math.round((n.y + I - sn) / Ra), h || (h = requestAnimationFrame(() => {
        h = 0, je();
      }));
    }, Et = () => {
      var Sr;
      if (window.removeEventListener("pointermove", xt), window.removeEventListener("pointerup", Et), window.removeEventListener("pointercancel", Et), !u) return;
      const qt = (_r) => {
        _r.preventDefault(), _r.stopImmediatePropagation();
      };
      window.addEventListener("click", qt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", qt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(K);
      const Vt = e.getBoundingClientRect(), _t = a.key;
      e.style.transition = "none", je(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", ee = null, mr(ie(), Pn()), je(), De();
      const Lt = (Sr = Bn().find((_r) => _r.key === _t)) == null ? void 0 : Sr.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Lt && (Lt.style.transition = "");
      }), !Lt || _) return;
      Lt.style.transition = "none";
      const ue = Lt.getBoundingClientRect(), be = Vt.left + Vt.width / 2 - (ue.left + ue.width / 2), we = Vt.top + Vt.height / 2 - (ue.top + ue.height / 2);
      Lt.style.zIndex = "20", Lt.animate([{ transform: "translate(" + be + "px," + we + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Pe.land }).finished.then(() => {
        Lt.style.zIndex = "", dc(Lt);
      }, () => {
        Lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", xt), window.addEventListener("pointerup", Et), window.addEventListener("pointercancel", Et);
  }
  function Dd(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const n = !e.dataset.drawn;
    e.dataset.drawn = a;
    const s = Wc.find((d) => d.id === e.dataset.graph);
    s ? Bf(e, s).then(() => {
      (t || n) && Pf(e);
    }) : op(e.dataset.graph, e).then(() => {
      t && Gc(e);
    });
  }
  function Ed() {
    var h, x, _;
    zt = Ci.model(i(), { madeUp: !v }), Xr(), k = zt.states, k[(h = wt.sources) == null ? void 0 : h.grid] && (zt.grid = wt.sources.grid), k[(x = wt.sources) == null ? void 0 : x.alarm] && (zt.security.alarms = [wt.sources.alarm]), Nt.forEach((M, I) => {
      const P = k[I], G = (P == null ? void 0 : P.attributes) || {};
      if (!P || Date.now() - M.at > 2 * 60 * 1e3) {
        Nt.delete(I);
        return;
      }
      M.pos != null && P.state !== "opening" && P.state !== "closing" && Math.abs(Ya(I) - M.pos) < 1 && delete M.pos, M.tilt != null && Math.abs((G.current_tilt_position ?? -1) - M.tilt) < 1 && delete M.tilt, M.pos == null && M.tilt == null && Nt.delete(I);
    });
    const t = [];
    let e = 0;
    const a = Se();
    ut = a.filter((M) => M.room).map((M) => M.room), ut.some((M) => M.id === dt) || (dt = ((_ = ut[0]) == null ? void 0 : _.id) || null);
    const n = nt === "weather" ? { key: "weather", name: "Weather" } : nt && a.find((M) => M.key === nt);
    if (n || (nt = null), f.classList.toggle("tfAreaOpen", !!n), f.classList.toggle("tfWeatherOpen", (n == null ? void 0 : n.key) === "weather"), f.classList.toggle("tfDash", !n), ke = /* @__PURE__ */ new Map(), zt.rooms.forEach((M) => [...M.actions, ...M.plugs, ...M.readings, ...M.openings, ...M.solar, ...M.plants.flatMap((I) => [I.id, ...I.readings])].forEach((I) => ke.set(I, M.name))), !n) return Of(t, Gi());
    if (t.push({ key: "areahead", html: Ch(n, ++e) }), n.key === "weather")
      return t.weather = ++e, t;
    const s = n.ids, d = n.room ? n.room.id : n.key, p = n.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: Ur(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Ni(p, ++e) }), p == null || p.plants.forEach((M) => t.push({ key: "plant:" + M.id, html: _n(M, ++e) }));
    const u = [...s, ...((p == null ? void 0 : p.plugs) || []).filter((M) => !s.includes(M))];
    return u.length && t.push({ key: "block:" + d, order: ++e, tiles: u.map((M) => ({ key: M, html: ya(M) })) }), t;
  }
  const Ch = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + yc + '</button><div class="settingsTitle">' + W(t.name) + "</div></div>";
  let Bd = 0, Pd = null;
  const Rd = (t) => t === "weather" ? io.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function Hd(t) {
    var e, a;
    nt || (Bd = si().scrollTop, Pd = ((e = Rd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), nt = t, t.startsWith("room:") && (dt = t.slice(5)), Ia(), si().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let ii = null;
  function Ah(t, e) {
    if (ii == null || ii(), e == null) return;
    const a = si(), n = performance.now() + 1500, s = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const p = () => {
      cancelAnimationFrame(d), s.forEach((h) => window.removeEventListener(h, p, !0)), ii = null;
    }, u = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const x = h.getBoundingClientRect().top - e;
        Math.abs(x) > 0.5 && (a.scrollTop += x);
      }
      performance.now() < n ? d = requestAnimationFrame(u) : p();
    };
    s.forEach((h) => window.addEventListener(h, p, { capture: !0, passive: !0 })), ii = p, u();
  }
  function El() {
    var a;
    const t = nt;
    nt = null, Ia(), si().scrollTop = Bd, Ah(() => Rd(t), Pd);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? io.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Th = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + W(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Nd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function si() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Od(t) {
    const e = si(), a = (u) => {
      const h = u.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, n = [...H.children, ...H.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), s = n == null ? void 0 : n.dataset.k, d = n == null ? void 0 : n.getBoundingClientRect().top;
    t();
    const p = n != null && n.isConnected ? n : s && H.querySelector('[data-k="' + CSS.escape(s) + '"]');
    p != null && p.isConnected && d != null && (e.scrollTop += p.getBoundingClientRect().top - d);
  }
  function Ia() {
    if (!g || !H) return;
    const t = Ed(), e = (s) => {
      var d;
      return (((d = s.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + s.dataset.iconFor + "|" + (s.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((s) => {
      s.firstElementChild && (a.get(e(s)) || a.set(e(s), []).get(e(s))).push(s.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((s) => s.remove()), la.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((s) => s.tiles ? Th(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => la.set(d.key, d.html)) : la.set(s.key, s.html)), _i = Nd(t), n.querySelectorAll("[data-icon-for]").forEach((s) => {
      var p;
      const d = !s.firstElementChild && ((p = a.get(e(s))) == null ? void 0 : p.shift());
      d && s.appendChild(d);
    }), H.append(...n.children), Ti(t.weather), qr(), cl.disconnect(), je(), Za(H), Vl(H), Tn(H), ct(), np(), kr(), Zd(), Ud(), requestAnimationFrame(ht);
  }
  const Id = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Bl = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Pl(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), n = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (n == null ? void 0 : n.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => e.hasAttribute(p) ? t.setAttribute(p, e.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...e.style].forEach((p) => t.style.setProperty(p, e.style.getPropertyValue(p))), t);
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
    return [...t.children].forEach((p, u) => Pl(p, d[u])), t;
  }
  function Fd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const n = Id(t), s = Pl(t, a.firstElementChild);
    Za(s), Vl(s), Tn(s), Bl(s, n);
  }
  function De() {
    !g || !H || ee || Od(Lh);
  }
  function Lh() {
    if (wa = !1, !H.querySelector("[data-tf]")) {
      Ia();
      return;
    }
    const t = Ed();
    if (Nd(t) !== _i) {
      Ia();
      return;
    }
    const e = (a) => ba().some((n) => {
      const s = n.slice(n.indexOf("|") + 1);
      return a === s || a.endsWith(":" + s);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((n) => {
      if (la.get(n.key) === n.html) return;
      if (e(n.key) || n.key === "areas" && Ao) {
        wa = !0;
        return;
      }
      const s = H.querySelector('[data-k="' + CSS.escape(n.key) + '"]');
      s && (la.set(n.key, n.html), Fd(s, n.html), n.key.startsWith("energy:") && np());
    })), kr(), Zd(), Ud(), Vi(), ct(), Ae == null || Ae.update(), Te == null || Te.forEach((a) => a.update()), f.classList.contains("tfDash") && Zi(), requestAnimationFrame(ht);
  }
  const yr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && jt(t.color_mode)]],
    climate: (t) => [["Current temperature", Ne(t.current_temperature) + " °C"], ["Target", Ne(t.temperature) + " °C"], ["Action", jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && jt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && jt(t.operation_mode)], ["Away", t.away_mode && jt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ne(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Dh = (t) => no(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Eh(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((n) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + W(n.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + n.ids.map((s) => Xa(s, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const St = document.createElement("div");
  St.className = "tfMoreBackdrop", St.hidden = !0, f.appendChild(St);
  const ao = document.createElement("div");
  ao.className = "tfMoreBackdrop tfMoreUnder", ao.hidden = !0, f.insertBefore(ao, St);
  const Rl = (t, e) => {
    for (let a = t; a && a !== St; a = a.parentElement) {
      const n = getComputedStyle(a).overflowY;
      if ((n === "auto" || n === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let li = null;
  St.addEventListener("touchstart", (t) => {
    li = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), St.addEventListener("touchmove", (t) => {
    var s, d;
    if (!li || t.touches.length > 1 || (d = (s = t.target).closest) != null && d.call(s, "input,textarea,select")) return;
    const e = t.touches[0], a = li.x - e.clientX, n = li.y - e.clientY;
    li = { x: e.clientX, y: e.clientY }, Math.abs(n) >= Math.abs(a) && !Rl(t.target, n) && t.preventDefault();
  }, { passive: !1 }), St.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Rl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Bh = () => window.innerWidth <= 620;
  let ze = null;
  St.addEventListener("pointerdown", (t) => {
    const e = St.querySelector(".tfMorePair");
    !Bh() || !e || !e.contains(t.target) || !t.isPrimary || St._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfPhys,.tfMoreSide,[data-drag],[data-blocks]") || (ze = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), St.addEventListener("pointermove", (t) => {
    if (!ze || !t.isPrimary) return;
    const e = t.clientY - ze.y, a = performance.now();
    if (!ze.on) {
      if (Math.abs(t.clientX - ze.x) > 8 || e < -8 || !ze.grab && Rl(ze.from, -1)) {
        ze = null;
        return;
      }
      if (e < 8) return;
      ze.on = !0;
      try {
        St.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    ze.v = (e - ze.dy) / Math.max(1, a - ze.t), ze.dy = e, ze.t = a, ze.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const qd = (t) => {
    if (!ze || !t.isPrimary) return;
    const e = ze;
    if (ze = null, !e.on) return;
    const a = (x) => {
      x.preventDefault(), x.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const n = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), s = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !n || qe()) {
      n ? Yl() : e.pair.animate([{ transform: s }, { transform: "none" }], { duration: 320, easing: Pe.spring });
      return;
    }
    const d = N;
    St._closing = !0, St.style.pointerEvents = "none", St.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Pe.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: s }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Pe.exit, fill: "forwards" });
    let u = !1;
    const h = () => {
      u || (u = !0, St._closing = !1, St.style.pointerEvents = "", St.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), N === d && Yl());
    };
    p.finished.then(h, h), setTimeout(h, 300);
  };
  St.addEventListener("pointerup", qd), St.addEventListener("pointercancel", qd);
  function Hl() {
    const t = St.querySelector(".tfMorePair"), e = St.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Hl, { passive: !0 }), g && Ir();
  let vo = [];
  const Ph = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Rh(t) {
    const e = (S, D = "") => '<div class="tfMoreHead">' + (N != null && N.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + pu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + W(S) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + uu + "</button></div>", a = (S, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + W(S) + "</div></div>", n = Eh;
    if (t === "favourites") {
      const S = $t(), D = new Set(S), A = [{ name: "Starred", ids: S }, { name: "Home", ids: zt.homeVacuums }, { name: "Security", ids: [...zt.security.alarms, ...zt.security.locks] }, ...zt.rooms.map((K) => ({ name: K.name, ids: [...K.actions, ...K.plugs] }))].map((K, E) => E ? { ...K, ids: K.ids.filter((ot) => !D.has(ot)) } : K).filter((K) => K.ids.length);
      return [e("Favourites"), a(S.length ? S.length + " starred" : "None starred"), n(A, { star: !0 }, !0)];
    }
    const s = (S, { name: D = "", alert: A = !1, plain: K = !1 } = {}) => {
      const E = K ? [] : S.filter((Et) => Dr.includes(Et.split(".")[0])), ot = S.filter((Et) => !E.includes(Et)), xt = (Et) => Et.startsWith("vacuum.") && Ut(Et).battery_level != null ? Ut(Et).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + W(D) + "</div>" : "") + '<div class="tfMoreActions">' + E.map((Et) => ya(Et, !0)).join("") + ot.map((Et) => Xa(Et, { plain: K, alert: A, say: K ? xt(Et) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const S = Gi().find((E) => E.key === t.slice(8));
      if (!S) return null;
      const D = S.key === "light" ? (S.groups || []).flatMap((E) => E.ids) : [], A = D.some((E) => {
        var ot;
        return ((ot = k[E]) == null ? void 0 : ot.state) === "on";
      }), K = D.length ? '<button class="primary" type="button" data-acts="' + rr(D.map((E) => ["light", A ? "turn_off" : "turn_on", E])) + '">' + (A ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(S.name), '<div class="tfMoreNowRow">' + a(S.value) + K + "</div>", ...(S.groups || []).map((E) => s(E.ids, { name: E.name === S.name ? "" : E.name, alert: E.alert, plain: S.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, S, D] = t.split(":"), A = zt.rooms.find((ot) => ot.id === S), K = A && y(A).find((ot) => ot.key === D);
      if (!K) return null;
      const E = K.acts ? '<button class="primary" type="button" data-acts="' + rr(K.acts) + '">' + (K.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(A.name + " " + K.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(K.value) + E + "</div>", s(R(A, D))];
    }
    const d = t.split(".")[0];
    k[t];
    const p = Dr.includes(d) || wi.includes(d) ? m(t) : Nl(t), u = $h(t), h = [...u ? u.pages.map((S) => ({ name: S.name, svg: S.svg, tabs: S.tabs, html: S.space + '<div class="tfMoreCtl"' + Ua(t).replace(" data-light", "") + ">" + S.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ha, html: Ih(t) + (d === "plant" ? Qh(t).join("") : "") + p.sections.filter(Boolean).join("") }], { name: "Info", svg: Mc, html: Zh(t) }];
    N && N.page == null && (N.page = 0), N && (N.pages = h.length);
    const x = (N == null ? void 0 : N.page) || 0, _ = (N == null ? void 0 : N.mode) || "", M = h.length - 1, I = !!(u != null && u.infoButton), P = h.flatMap((S, D) => (I && D === M ? [] : S.tabs || [{ name: S.name, svg: S.svg }]).map((A) => ({ ...A, page: D }))), G = (S) => S.page === x && (S.mode == null || S.mode === _);
    return [
      Nh(t, p),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (_ && x === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + h.map((S) => '<section class="tfMorePage" aria-label="' + S.name + '" data-mode="' + _ + '">' + S.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (I ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (P.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (I ? "Views" : "Pages") + '">' + P.map((S) => '<button type="button" role="tab" aria-selected="' + G(S) + '" aria-label="' + S.name + '" title="' + S.name + '" data-more-page="' + S.page + '"' + (S.mode != null ? ' data-more-mode="' + S.mode + '"' : "") + (G(S) ? "" : ' tabindex="-1"') + ">" + S.svg + "</button>").join("") + "</div>" : "") + (I ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (x === M) + '" data-more-page="' + M + '" data-more-toggle>' + Mc + "</button></div>" : "")
    ];
  }
  const Hh = (t, e) => {
    const a = t.split(".")[0], n = k[t], s = n.attributes;
    if (a === "light") return Oe(t);
    const d = a === "climate" ? jt(s.hvac_action || n.state) : a === "humidifier" ? jt(s.action || n.state) : a === "water_heater" ? jt(s.operation_mode || n.state) : a === "fan" && n.state === "on" && s.percentage != null ? s.percentage + "%" : (a === "valve" || a === "cover") && s.current_position != null && n.state !== "closed" ? s.current_position + "%" : Oe(t);
    return [e, d].filter(Boolean).join(" · ");
  };
  function Nh(t, e, a) {
    var p, u, h, x, _;
    const n = (p = zt.areaOf) == null ? void 0 : p.call(zt, t), s = n && (((u = zt.rooms.find((M) => M.id === n)) == null ? void 0 : u.name) || ((_ = (x = (h = i()) == null ? void 0 : h.areas) == null ? void 0 : x[n]) == null ? void 0 : _.name)) || "", d = e.button ? cr(t, e) : '<div class="tfIcon"' + de(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ua(t) + ">" + (N != null && N.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + pu + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(Hh(t, s)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + uu + "</button></div>";
  }
  const Oh = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Nl(t) {
    var s;
    const e = t.split(".")[0], a = ((s = k[t]) == null ? void 0 : s.state) === "on", n = wi.includes(e) ? { act: Bt(e, "toggle", t), label: "Turn " + bt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Bt(e, "turn_on", t), label: "Run " + bt(t) } : null;
    return { sections: [], on: a, button: n, icon: Ba(t) };
  }
  function Ih(t) {
    if (Fl(t)) return zd(t);
    const e = t.split(".")[0];
    if (Oh.includes(e) || e === "light" && !pr(t)) {
      const s = Dr.includes(e) ? m(t) : Nl(t);
      return s != null && s.button ? '<div class="tfMoreSpace tfMoreSwitch' + (s.on ? " on" : "") + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + Ua(t) + ">" + cr(t, s) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + W(t) + '"></div></div>';
    if (e === "light" && pr(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>';
    const { big: a, lines: n } = Yh(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (c("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + W(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + W(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + n.map(([s, d]) => '<div class="tfMoreFact"><span>' + W(s) + "</span><span>" + W(d) + "</span></div>").join("") + "</div></div>";
  }
  const Fh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', qh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Wh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], yo = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + W(t) + "</div>" + e + "</div>", Fa = (t, e) => aa("tfSeg", t, e), Ol = (t, e, a, n, s, d) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + W(s) + '" data-drag="' + W(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + W(s) + "</output></i>" + (d ? '<span class="tfBarIcon"' + de("", d, n) + "></span>" : "") + "</div>", xr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ua(t) + ">" + cr(t, e) + "</div>", Il = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + W(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + W(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, n]) => n != null && n !== "").map(([n, s]) => '<div class="tfMoreFact"><span>' + W(n) + "</span><span>" + W(s) + "</span></div>").join("") + "</div></div>", Wd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + W((N == null ? void 0 : N.code) || "") + '">', os = (t, e, a, n, s) => ({ label: n, pressed: s, html: null, coded: [t, e, a].join("|") }), Vd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + W(t) + '">' + e.map((a) => '<button type="button" data-coded="' + W(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + W(a.label) + "</button>").join("") + "</div>", jd = (t, e, a) => Fa(bt(t), [{ label: "Off", act: Bt(e, "turn_off", t), pressed: !a }, { label: "On", act: Bt(e, "turn_on", t), pressed: a }]), Fn = /* @__PURE__ */ new Map(), Vh = [0, 33, 67, 100], jh = [{ label: "Off", a: 180 }, { label: "Low", a: 240 }, { label: "Medium", a: 300 }, { label: "High", a: 360 }];
  function Fl(t) {
    if (!T || !k[t]) return null;
    const e = t.split(".")[0], a = k[t].attributes;
    return e === "light" ? tr(t).some((n) => n !== "onoff") ? "fader" : "rocker" : e === "climate" ? Number.isFinite(Number(a.temperature)) ? "dial" : null : e === "fan" ? a.percentage != null ? "rotary" : "rocker" : e === "switch" || e === "input_boolean" ? "rocker" : e === "valve" ? "guarded" : e === "scene" || e === "script" || e === "button" ? "push" : null;
  }
  const zd = (t) => '<div class="tfMoreSpace tfPhys" data-phys="' + W(t) + '"></div>', zh = (t) => t <= 0 ? 0 : t <= 33 ? 1 : t <= 67 ? 2 : 3;
  function ci(t, e) {
    const a = k[t], n = a.attributes, s = a.state === "on";
    return e === "fader" ? [s ? lo(a) / 100 : 0] : e === "dial" ? [Number(n.temperature), Number.isFinite(Number(n.current_temperature)) ? Number(n.current_temperature) : null] : e === "rotary" ? [s ? zh(Number(n.percentage) || 0) : 0] : e === "guarded" ? [a.state === "open" || a.state === "opening"] : [s];
  }
  function Gh(t, e) {
    const a = document.createElement("div");
    a.className = "tfMoreSpace tfPhys";
    const n = t.split(".")[0], s = k[t].attributes, d = { id: t, kind: e, el: a, quiet: 0, timer: 0 }, p = (_, M = 260) => {
      d.quiet = performance.now() + 2500, clearTimeout(d.timer), d.timer = setTimeout(_, M);
    }, u = { camera: C, fill: B === "fill", label: bt(t) };
    if (e === "push" && (d.ctl = new eg(a, { ...u, onChange: () => Sa(n, n === "button" ? "press" : "turn_on", t).catch(() => {
    }) })), e === "rocker" && (d.ctl = new ag(a, { ...u, on: k[t].state === "on", onChange: (_) => p(() => Sa(n, _ ? "turn_on" : "turn_off", t).catch(() => {
    }), 0) })), e === "fader" && (d.ctl = new og(a, { ...u, value: ci(t, e)[0], onChange: (_) => p(() => (Math.round(_ * 100) ? Sa("light", "turn_on", t, { brightness_pct: Math.round(_ * 100) }) : Sa("light", "turn_off", t)).catch(() => {
    })) })), e === "dial") {
      const [_, M] = ci(t, e), I = Number(s.min_temp), P = Number(s.max_temp);
      d.ctl = new ng(a, { ...u, value: _, now: M ?? _, min: Number.isFinite(I) ? I : 7, max: Number.isFinite(P) ? P : 35, onChange: (G) => p(() => Sa("climate", "set_temperature", t, { temperature: G }).catch(() => {
      }), 450) });
    }
    e === "rotary" && (d.ctl = new rg(a, { ...u, positions: jh, index: ci(t, e)[0], onChange: (_) => p(() => (_ ? Sa("fan", "set_percentage", t, { percentage: Vh[_] }) : Sa("fan", "turn_off", t)).catch(() => {
    })) })), e === "guarded" && (d.ctl = new ig(a, { ...u, on: ci(t, e)[0], onChange: (_) => p(() => Sa("valve", _ ? "open_valve" : "close_valve", t).catch(() => {
    }), 0) }));
    const h = "phys|" + t;
    a.addEventListener("pointerdown", () => {
      Ft.add(h), ea(h);
    });
    const x = () => {
      Ft.has(h) && (Ft.delete(h), wa && De());
    };
    return a.addEventListener("pointerup", x), a.addEventListener("pointercancel", x), d;
  }
  function Gd(t) {
    t.querySelectorAll("[data-phys]").forEach((e) => {
      const a = e.dataset.phys, n = Fl(a);
      if (!n) {
        e.remove();
        return;
      }
      let s = Fn.get(a);
      (!s || s.kind !== n) && (s = Gh(a, n), Fn.set(a, s)), e.replaceWith(s.el), $d(s);
    });
  }
  function $d(t) {
    !k[t.id] || performance.now() < t.quiet || t.ctl.show(...ci(t.id, t.kind));
  }
  const Ud = () => {
    Fn.forEach((t, e) => {
      t.el.isConnected ? $d(t) : Fn.delete(e);
    });
  };
  function $h(t) {
    const e = Uh(t);
    return e && Fl(t) && (e.pages[0].space = zd(t), e.pages[0].tabs = [], delete e.infoButton), e;
  }
  function Uh(t) {
    var d, p, u;
    const e = t.split(".")[0], a = k[t], n = a.attributes;
    if (!Wh.includes(e)) return null;
    const s = Dr.includes(e) || wi.includes(e) ? m(t) : Nl(t);
    if (e === "light") {
      const h = a.state === "on", x = tr(t), [_, M] = er(t), I = c("bright", t, h ? lo(a) : 0), P = c("ctf", t, h && n.color_mode === "color_temp" ? n.color_temp_kelvin : null), G = c("huev", t, h && en.includes(n.color_mode) && n.hs_color ? n.hs_color[0] : null), S = x.includes("color_temp"), D = x.some((ue) => en.includes(ue)), A = pr(t), K = (ue, be, we, Re) => '<div class="tfBar tfVBar ' + ue + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + W(bt(t) + " " + be.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(we) + '" data-drag="' + ue + "|" + W(t) + '">' + Re + "</div>", E = (ue, be, we = "") => '<div class="tfVCol' + we + '">' + be + "</div>", ot = E("Brightness", K("bright", "Brightness", I, '<i style="height:' + I + '%"></i><span class="tfBarIcon"' + de("", "mdi:white-balance-sunny", "Brightness") + "></span>")), xt = P == null ? null : (M - P) / (M - _), Et = S ? E("Warmth", K("ctf", "Warmth", xt == null ? 0 : xt * 100, xt == null ? "" : '<b style="top:' + Math.round((1 - xt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", qt = D ? E("Colour", K("huev", "Colour", G == null ? 0 : (1 - G / 360) * 100, G == null ? "" : '<b style="top:' + Math.round(G / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Vt = '<div class="tfVCols">' + ot + (Et || qt ? '<div class="tfVSwap">' + Et + qt + "</div>" : "") + "</div>", _t = A ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>' : "", Lt = [D && { name: "Colour", svg: Fh, mode: "colour" }, A && { name: "Dual Axis Controller", svg: qh, mode: "dac" }, { name: "Sliders", svg: ha, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ha, space: '<div class="tfMoreSpace tfLightSpace">' + Vt + _t + "</div>", rows: [], tabs: Lt.length > 1 ? Lt : [] }] };
    }
    if (e === "climate") {
      const h = n.target_temp_step || 0.5, x = Number(n.temperature), _ = Number(n.target_temp_low), M = Number(n.target_temp_high), I = (D) => Bt("climate", "set_temperature", t, D), P = (D, A, K, E, ot) => (A == null ? void 0 : A.length) && yo(D, Fa(D, A.map((xt) => ({ label: jt(xt), act: Bt("climate", E, t, { [ot]: xt }), pressed: (K === "state" ? a.state : n[K]) === xt })))), G = Number.isFinite(_) && Number.isFinite(M) && yo("Range", '<div class="tfMoreRange">' + ca("Low", Ne(_) + " °C", I({ target_temp_low: _ - h, target_temp_high: M }), I({ target_temp_low: _ + h, target_temp_high: M })) + ca("High", Ne(M) + " °C", I({ target_temp_low: _, target_temp_high: M - h }), I({ target_temp_low: _, target_temp_high: M + h })) + "</div>"), S = Number(n.humidity);
      return { pages: [{
        name: "Control",
        svg: ha,
        space: Il(Ne(n.current_temperature), "°C", [["Target", Number.isFinite(x) ? Ne(x) + " °C" : null], ["Humidity", n.current_humidity != null ? n.current_humidity + "%" : null], ["Action", n.hvac_action && jt(n.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ca("Target temperature", Ne(x) + " °C", I({ temperature: x - h }), I({ temperature: x + h })),
          G,
          P("Mode", n.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          P("Fan", n.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          P("Swing", n.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          P("Preset", n.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(S) && n.min_humidity != null && yo("Humidity", ca("Target humidity", S + "%", Bt("climate", "set_humidity", t, { humidity: S - 1 }), Bt("climate", "set_humidity", t, { humidity: S + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const h = a.state === "on", x = c("fan", t, h && Number(n.percentage) || 0), _ = n.percentage != null;
      return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: _ ? [
        Ol("fan", t, x, bt(t) + " speed", x + "%", "mdi:fan"),
        n.oscillating != null && yo("Oscillate", Fa("Oscillate", [{ label: "Off", act: Bt("fan", "oscillate", t, { oscillating: !1 }), pressed: !n.oscillating }, { label: "On", act: Bt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!n.oscillating }])),
        n.direction && yo("Direction", Fa("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([M, I]) => ({ label: I, act: Bt("fan", "set_direction", t, { direction: M }), pressed: n.direction === M })))),
        ((d = n.preset_modes) == null ? void 0 : d.length) && yo("Preset", Fa("Preset", n.preset_modes.map((M) => ({ label: jt(M), act: Bt("fan", "set_preset_mode", t, { preset_mode: M }), pressed: n.preset_mode === M }))))
      ] : [jd(t, "fan", h)] }] };
    }
    if (e === "humidifier") {
      const h = Number(n.humidity);
      return { pages: [{ name: "Control", svg: ha, space: Il(String(n.current_humidity), "%", [["Target", Number.isFinite(h) ? h + "%" : null], ["Action", n.action && jt(n.action)]]), rows: [
        Number.isFinite(h) && ca("Target humidity", h + "%", Bt("humidifier", "set_humidity", t, { humidity: h - 1 }), Bt("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((p = n.available_modes) == null ? void 0 : p.length) && yo("Mode", Fa("Mode", n.available_modes.map((x) => ({ label: jt(x), act: Bt("humidifier", "set_mode", t, { mode: x }), pressed: n.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const h = Number(n.temperature), x = n.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ha, space: Il(Ne(n.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(h) ? String(h).replace(/\.0$/, "") + " °C" : null], ["Mode", jt(n.operation_mode || a.state)]]), rows: [
        Number.isFinite(h) && ca("Target temperature", h + " °C", Bt("water_heater", "set_temperature", t, { temperature: h - x }), Bt("water_heater", "set_temperature", t, { temperature: h + x })),
        ((u = n.operation_list) == null ? void 0 : u.length) && yo("Mode", Fa("Mode", n.operation_list.map((_) => ({ label: jt(_), act: Bt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (n.operation_mode || a.state) === _ })))),
        n.away_mode != null && yo("Away", Fa("Away", [{ label: "Off", act: Bt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: n.away_mode !== "on" }, { label: "On", act: Bt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: n.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const h = [...Lu, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , M]) => !M || ge(t, M)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], _ = '<div class="tfMoreSpace tfMoreKeypad">' + Wd() + '<div class="tfKeypad">' + x.map((M) => '<button type="button" data-key="' + M + '"' + (M === "back" ? ' aria-label="Delete"' : "") + ">" + (M === "clear" ? "Clear" : M === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : M) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ha, space: _, rows: [Vd(bt(t), h.map(([M, I, P]) => os("alarm_control_panel", P, t, I, a.state === M)))] }] };
    }
    if (e === "cover") {
      if (n.current_position == null) return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: [Fa(bt(t), [{ label: "Open", act: Bt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Bt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const h = a.state === "opening" || a.state === "closing", x = yn(t), _ = jr(t);
      return { pages: [{ name: "Control", svg: ha, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + W(t) + '"></div></div>', rows: [
        ge(t, xc) && Kr(t, x),
        _ != null && yo("Tilt", Ol("tiltp", t, c("tiltp", t, _), bt(t) + " tilt", Math.round(c("tiltp", t, _)) + "%")),
        Fa(bt(t), [ge(t, wu) && { label: "Open", act: Bt("cover", "open_cover", t), disabled: x >= 100 && !h }, ge(t, yu) && { label: "Stop", act: Bt("cover", "stop_cover", t) }, ge(t, vu) && { label: "Close", act: Bt("cover", "close_cover", t), disabled: x <= 0 && !h }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: [
        Wd(),
        Vd(bt(t), [os("lock", "lock", t, "Lock", a.state === "locked"), os("lock", "unlock", t, "Unlock", a.state === "unlocked"), ge(t, Tu) && os("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const h = a.state === "open";
      if (n.current_position == null) return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: [Fa(bt(t), [{ label: "Open", act: Bt("valve", "open_valve", t), pressed: h }, { label: "Close", act: Bt("valve", "close_valve", t), pressed: !h }])] }] };
      const x = c("valve", t, Number(n.current_position) || 0);
      return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: [
        Ol("valve", t, x, bt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Fa(bt(t), [{ label: "Open", act: Bt("valve", "open_valve", t) }, ge(t, 8) && { label: "Stop", act: Bt("valve", "stop_valve", t) }, { label: "Close", act: Bt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ha, space: xr(t, s), rows: [jd(t, e, a.state === "on")] }] };
  }
  function Yh(t) {
    var _;
    const e = k[t], a = Ut(t), n = t.split(".")[0], s = (((_ = yr[n]) == null ? void 0 : _.call(yr, a)) || []).filter(([, M]) => M != null && M !== ""), d = (M) => {
      const I = s.findIndex(([P]) => P === M);
      return I < 0 ? null : s.splice(I, 1)[0][1];
    }, p = (M) => {
      const I = String(M).match(/^(-?[\d.,]+)\s*(.*)$/);
      return I ? [I[1], I[2]] : [String(M), ""];
    }, u = () => [jt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    n === "light" ? (d("Brightness"), h = e.state === "on" && po(t) ? [String(lo(e)), "%"] : u()) : n === "climate" ? h = p(d("Current temperature") || Ne(a.current_temperature) + " °C") : n === "cover" ? (d("Position"), h = a.current_position != null ? [String(Ya(t)), "%"] : u()) : n === "humidifier" ? h = p(d("Current humidity") || e.state) : n === "vacuum" ? h = p(d("Battery") || e.state) : n === "plant" ? h = p(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(n) ? h = u() : h = p(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = s.length ? s.slice(0, 4) : [["State", Oe(t)]];
    return { big: h, lines: x };
  }
  function Zh(t) {
    var x, _, M, I, P, G, S;
    const e = k[t], a = i(), n = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], s = n != null && n.device_id ? (_ = a == null ? void 0 : a.devices) == null ? void 0 : _[n.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + W(t) + '" role="img" aria-label="' + W(bt(t)) + ', last 24 hours"></svg></div>', p = (M = zt.areaOf) == null ? void 0 : M.call(zt, t), u = p && (((I = zt.rooms.find((D) => D.id === p)) == null ? void 0 : I.name) || ((G = (P = a == null ? void 0 : a.areas) == null ? void 0 : P[p]) == null ? void 0 : G.name)) || "", h = [
      ...((S = yr[t.split(".")[0]]) == null ? void 0 : S.call(yr, Ut(t))) || [],
      ["Changed", e.last_changed && js(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", s && (s.name_by_user || s.name)],
      ["Integration", (n == null ? void 0 : n.platform) && jt(n.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, D]) => D != null && D !== "");
    return d + '<div class="tfMoreRows">' + h.map(([D, A]) => '<div class="tfMoreRow"><span>' + W(D) + "</span><span>" + W(A) + "</span></div>").join("") + "</div>" + Dh(t) + (s ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + W(n.device_id) + '"><span>Device page</span>' + Sc + "</button>" : "");
  }
  const Kh = () => "";
  let ql = "";
  function Wl(t) {
    var e;
    N && (N.details = t, kr(), (e = St.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ns = (t) => {
    const e = k[t], a = Ya(t), n = yn(t);
    return { kind: bc(e), name: bt(t), text: Oe(t), pos: a, target: Math.abs(n - a) > 0.5 ? n : null, moving: e.state === "opening" || e.state === "closing", tilt: jr(t) ?? 100, canSet: ge(t, xc) };
  };
  function Vl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, n = e.dataset.artKey || "more:" + a;
      let s = fe.get(n);
      s || (s = $1({ onMove: (d) => di(a, d), onSet: (d) => {
        di(a, d), pi("pos", a);
      } }), s.coverId = a, fe.set(n, s)), e.replaceWith(s.el), s.update(ns(a));
    });
  }
  const Yd = (t) => [...fe.values()].filter((e) => e.coverId === t), jl = () => fe.forEach((t) => {
    k[t.coverId] && t.update(ns(t.coverId));
  }), Zd = () => {
    fe.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), fe.delete(e));
    }), jl();
  };
  function kr() {
    var d, p;
    if (!N || !(Ph(N.id) || k[N.id])) {
      St.hidden = !0;
      return;
    }
    if (ba().some((u) => u.endsWith("|" + N.id))) {
      wa = !0, jl();
      return;
    }
    const t = Rh(N.id), e = St.querySelector(".tfMore");
    if (!t) {
      ss();
      return;
    }
    const a = Id(St), n = Kh(N.id), s = N.frame ? N.frame.wide : N.id.startsWith("summary:") || N.id.startsWith("group:");
    if (St.hidden || !e || t.length !== vo.length || e.classList.contains("wide") !== s) {
      const u = $l ? N.scroll || 0 : !St.hidden && e ? e.scrollTop : 0;
      if (St.innerHTML = '<div class="tfMorePair' + (St.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (s ? " wide" : "") + '"' + (N.frame ? ' style="height:' + N.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", ql = n, St.classList.toggle("wide", s), St.hidden = !1, Hl(), Vl(St), Gd(St), Tn(St), Za(St), St.querySelectorAll("[data-day]").forEach((h) => ep(h.dataset.day, h, N.at)), Jd(St), u && (St.querySelector(".tfMore").scrollTop = u), Kd(), Bl(St, a), !St.contains(o.activeElement)) {
        const h = St.querySelector("[data-more-close]");
        (d = h != null && h.offsetParent ? h : St.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, h) => {
        var I, P;
        if (u === vo[h] || u.includes("data-cover-art") || e.children[h].contains((P = (I = o.activeElement) == null ? void 0 : I.matches) != null && P.call(I, "input,select") ? o.activeElement : null)) return;
        if (ba().some((G) => e.children[h].querySelector('[data-drag="' + CSS.escape(G) + '"]'))) {
          wa = !0;
          return;
        }
        const x = document.createElement("div");
        x.innerHTML = u;
        const _ = [...e.children[h].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((G) => G.scrollTop), M = Pl(e.children[h], x.firstElementChild);
        M.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((G, S) => {
          _[S] && (G.scrollTop = _[S]);
        }), Za(M), Jd(M), Gd(M), Tn(M);
      }), n !== ql) {
        const u = St.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = n), ql = n;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || ep(u.dataset.day, u, N.at);
      }), Kd(), St.contains(o.activeElement) || Bl(St, a);
    }
    (p = St.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(N.details && n)), vo = t, jl();
  }
  function Kd() {
    const t = St.querySelector("[data-more-pages]");
    !t || !N || (t.scrollTo({ left: (N.page || 0) * t.clientWidth, behavior: "instant" }), Gl(), zl(t));
  }
  function zl(t) {
    const e = t.children[(N == null ? void 0 : N.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Gl() {
    var e;
    const t = (N == null ? void 0 : N.page) || 0;
    St.querySelectorAll("[data-more-page]").forEach((a) => {
      const n = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (N.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(n));
        return;
      }
      a.setAttribute("aria-selected", String(n)), a.tabIndex = n ? 0 : -1;
    }), (e = St.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!N.mode && t === 0);
  }
  function Xh(t, e) {
    var n, s;
    const a = St.querySelector("[data-more-pages]");
    !a || !N || (N.page = Math.max(0, Math.min((N.pages || 2) - 1, t)), a.scrollTo({ left: N.page * a.clientWidth, behavior: (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Gl(), zl(a), e && ((s = St.querySelector('.tfMoreDots [aria-selected="true"]')) == null || s.focus({ preventScroll: !0 })));
  }
  function rs(t, e, a) {
    N && (e != null && e !== (N.mode || "") && (N.mode = e, St.querySelectorAll(".tfMorePage").forEach((n) => {
      n.dataset.mode = e;
    })), Xh(t, a));
  }
  let Mr = null;
  St.addEventListener("touchstart", (t) => {
    var a, n, s, d;
    const e = t.touches[0];
    Mr = (n = (a = t.target).closest) != null && n.call(a, "[data-more-pages]") && !((d = (s = t.target).closest) != null && d.call(s, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art],.tfPhys")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), St.addEventListener("touchend", (t) => {
    if (!Mr || !N || (N.page || 0) !== 0 || !St.querySelector("[data-more-mode]")) {
      Mr = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Mr.x, n = e.clientY - Mr.y;
    if (Mr = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(n) * 1.5) return;
    const s = [...St.querySelectorAll(".tfMoreDots [data-more-mode]")].map((p) => p.dataset.moreMode), d = s.indexOf(N.mode || "");
    a > 0 && d > 0 ? rs(0, s[d - 1]) : a < 0 && N.mode && d < s.length - 1 && rs(0, s[d + 1]);
  }, { passive: !0 });
  let Xd = 0;
  St.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !N || (clearTimeout(Xd), Xd = setTimeout(() => {
      if (!N) return;
      const n = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      n !== (N.page || 0) && (N.page = n, Gl(), zl(e));
    }, 80));
  }, !0), St.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && N && (N.code = t.target.value);
  }), St.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!N || !(e || a)) return;
    const n = St.querySelector("[data-code]");
    if (e) {
      const h = e.dataset.key, x = N.code || "";
      N.code = h === "clear" ? "" : h === "back" ? x.slice(0, -1) : (x + h).slice(0, 12), n && (n.value = N.code);
      return;
    }
    const [s, d, p] = a.dataset.coded.split("|"), u = N.code;
    N.code = "", n && (n.value = ""), Sa(s, d, p, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    N && kr();
  }, 15 * 1e3);
  function is(t, e) {
    var s, d;
    const a = !!(N && e && St.contains(e)), n = a && St.querySelector(".tfMore");
    if (a && (N.scroll = n.scrollTop), a && !N.under) {
      const p = St.querySelector(".tfMorePair"), u = { more: N, parts: vo, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, ao.innerHTML = "", ao.appendChild(p), ao.classList.toggle("wide", St.classList.contains("wide")), ao.hidden = !1, St.hidden = !0, St.innerHTML = "", N = { id: t, opener: e, back: null, frame: null, under: u, at: Number((s = e == null ? void 0 : e.dataset) == null ? void 0 : s.at) || null }, Ul();
      return;
    }
    N = { id: t, opener: a ? N.opener : e, back: a ? N : null, frame: a ? N.frame || { wide: n.classList.contains("wide"), h: n.offsetHeight } : null, under: a ? N.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, Ul();
  }
  let $l = !1;
  function Ul() {
    vo = [], $l = !St.hidden, fe.forEach((t, e) => {
      e !== N.id && St.contains(t.el) && (t.destroy(), fe.delete(e));
    }), kr(), $l = !1;
  }
  function ss() {
    if (!N) return;
    const t = N;
    E0(St, () => {
      N === t && Yl();
    });
  }
  function Yl() {
    var n, s, d, p, u, h, x, _;
    const t = N == null ? void 0 : N.opener, e = N == null ? void 0 : N.under;
    N = null, fe.forEach((M, I) => {
      St.contains(M.el) && (M.destroy(), fe.delete(I));
    }), We.forEach((M, I) => {
      /^more2?:/.test(I) && We.delete(I);
    }), St.hidden = !0, St.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const M = ao.firstElementChild;
      N = e.more, vo = e.parts, M && (M.inert = !1, St.appendChild(M)), St.classList.toggle("wide", ao.classList.contains("wide")), ao.hidden = !0, ao.innerHTML = "", St.hidden = !1;
      const I = St.querySelector(".tfMore");
      I && (I.scrollTop = N.scroll || 0), kr(), (s = (n = e.opener) != null && n.isConnected ? e.opener : St.querySelector("[data-more-close]")) == null || s.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (p = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (h = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((_ = H.querySelector("[data-favs-edit]")) == null || _.focus(a));
  }
  const Jh = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Qh(t) {
    const e = String(Ut(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((n) => n.trim().split(" ")).map(([n, s]) => {
      const d = Jh[n], p = a + d;
      if (!d || !k[p] || !$n[d]) return "";
      const u = Ut(p).unit_of_measurement || "", [h, x] = $n[d], _ = s === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + W(bt(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + W(p) + '" data-guide="' + (_ ? h : x) + '" data-guide-word="' + W("Wants " + (_ ? "" : "up to ") + (_ ? h : x).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (_ ? " or more" : "")) + '" role="img" aria-label="' + W(bt(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Jd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => op(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Gc(e)));
  function Zl(t, e, a, n = {}) {
    const s = e.map((D) => D[1]).concat(n.guide != null ? [n.guide] : []), d = n.zero ? 0 : Math.min(...s), p = Math.max(...s), u = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), x = 8, _ = h - 20, M = Date.now() - 24 * 3600 * 1e3, I = 24 * 3600 * 1e3, P = (D) => Math.max(0, Math.min(u, (D - M) / I * u)), G = (D) => p === d ? (x + _) / 2 : _ - (D - d) / (p - d) * (_ - x);
    let S = "M" + P(e[0][0]).toFixed(1) + " " + G(e[0][1]).toFixed(1);
    if (e.length > 2) S = Zu(e.map((D) => [P(D[0]), G(D[1])]));
    else for (let D = 1; D < e.length; D++) S += n.smooth ? "L" + P(e[D][0]).toFixed(1) + " " + G(e[D][1]).toFixed(1) : "H" + P(e[D][0]).toFixed(1) + "V" + G(e[D][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + h), t.setAttribute("aria-label", a), t.innerHTML = Ku(u, x, _) + '<path d="' + S + "V" + _ + "H" + P(e[0][0]).toFixed(1) + 'Z" fill="' + (n.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + S + '" fill="none" stroke="' + (n.colour || "var(--primary)") + '" stroke-width="' + Be.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + u + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (n.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + G(n.guide).toFixed(1) + '" y2="' + G(n.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (G(n.guide) < 20 ? G(n.guide) + 14 : G(n.guide) - 5).toFixed(1) + '" text-anchor="end">' + W(n.guideWord || "") + "</text>" : "");
  }
  const Qd = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, tm = (t, e) => {
    const a = t.split(".")[0];
    return Qd[a] ? Qd[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, em = (t) => {
    const e = t.split(".")[0], a = Ut(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ss.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, tp = /* @__PURE__ */ new Map();
  let am = 0;
  async function om(t) {
    var s;
    let e = tp.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (no(t) && Number.isFinite(Number((s = k[t]) == null ? void 0 : s.state))) d = ap(t).map(([p, u]) => [p, String(u)]);
      else try {
        const p = await q({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((p == null ? void 0 : p[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      d.length || (d = (Qr || []).filter((p) => p.entity_id === t).map((p) => [p.when * 1e3, String(p.state)])), e = { at: Date.now(), pts: d }, tp.set(t, e);
    }
    const a = k[t], n = e.pts.slice().sort((d, p) => d[0] - p[0]);
    return a && (!n.length || n[n.length - 1][1] !== a.state) && n.push([Date.parse(a.last_changed) || Date.now(), a.state]), n;
  }
  async function ep(t, e, a) {
    const n = await om(t);
    if (!e.isConnected) return;
    const s = n.map(([E, ot]) => [E, Number(ot)]);
    if (n.length > 1 && s.every(([, E]) => Number.isFinite(E))) {
      Zl(e, s, bt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), p = d - 864e5, u = Math.max(200, e.clientWidth || 360), h = 62, x = (E) => Math.max(0, Math.min(u, (E - p) / 864e5 * u)), _ = [];
    let M = null;
    n.forEach(([E, ot]) => {
      const xt = tm(t, ot);
      xt && M == null ? M = Math.max(E, p) : !xt && M != null && (_.push([M, Math.max(E, p)]), M = null);
    }), M != null && _.push([M, d]);
    const I = Zs(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", P = em(t), G = "tfDayClip" + ++am, S = _.map(([E, ot]) => P + (ot >= d - 1e3 && E <= p + 1e3 ? " all day" : ot >= d - 1e3 ? " since " + uo(E) : E <= p + 1e3 ? " until " + uo(ot) : " " + uo(E) + "–" + uo(ot)));
    let D = "", A = -1 / 0;
    _.forEach(([E], ot) => {
      const xt = S[ot].length * 5.4, Et = Math.min(x(E), u - xt);
      Et < A + 8 || (D += '<text x="' + Et.toFixed(1) + '" y="10">' + W(S[ot]) + "</text>", A = Et + xt);
    });
    let K = '<text x="' + u + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((E) => {
      let ot = new Date(d).setHours(E, 0, 0, 0);
      ot > d && (ot -= 864e5), x(ot) > 8 && x(ot) < u - 34 && (K += '<text x="' + x(ot).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(E).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + h), e.setAttribute("aria-label", bt(t) + ", last 24 hours: " + (S.length ? S.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + G + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + D + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + G + ')">' + _.map(([E, ot]) => '<rect x="' + x(E).toFixed(1) + '" y="18" width="' + Math.max(2, x(ot) - x(E)).toFixed(1) + '" height="26" fill="' + I + '"/>').join("") + "</g>" + (a && a >= p ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + K;
  }
  function ap(t) {
    var n;
    const e = Number((n = k[t]) == null ? void 0 : n.state), a = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const s = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - s);
      return [...Array(49)].map((p, u) => s + d * u / 48).map((p) => [p, Math.round(e * Math.pow((p - s) / d, 1.3) * 100) / 100]);
    }
    if (no(t) && t.endsWith("_moisture")) return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (no(t) && t.endsWith("_light")) {
      const s = (p) => {
        const u = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, d = (p) => 0.8 + 0.2 * s(p);
      return [...Array(48)].map((p, u) => a - (48 - u) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * d(p) / d(a))]);
    }
    return [...Array(48)].map((s, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function op(t, e, a = {}) {
    var G, S;
    let n = vt.get(t);
    if (t.endsWith("_solar_power")) n = { at: Date.now(), points: wp() };
    else if (no(t)) n = { at: Date.now(), points: ap(t) };
    else if (!n || Date.now() - n.at > 5 * 60 * 1e3) {
      try {
        const D = new Date(Date.now() - 864e5).toISOString(), A = await q({ type: "history/history_during_period", start_time: D, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), K = ((A == null ? void 0 : A[t]) || []).map((E) => [E.lu != null ? E.lu * 1e3 : Date.parse(E.last_updated || E.last_changed), Number(E.s ?? E.state)]).filter(([E, ot]) => Number.isFinite(E) && Number.isFinite(ot));
        n = { at: Date.now(), points: K };
      } catch {
        n = { at: Date.now(), points: [] };
      }
      vt.set(t, n);
    }
    const s = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const d = k[t], p = ((G = d == null ? void 0 : d.attributes) == null ? void 0 : G.unit_of_measurement) || "", u = n.points.slice(), h = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && u.push([Date.now(), h]), u.length < 2) {
      s.setAttribute("aria-label", bt(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = u.map((D) => D[1]), _ = Math.min(...x), M = Math.max(...x), I = (D) => D.toLocaleString(void 0, { maximumFractionDigits: Math.abs(D) >= 100 ? 0 : 1 }), P = ((S = d == null ? void 0 : d.attributes) == null ? void 0 : S.state_class) === "total_increasing";
    Zl(s, u, bt(t) + ", last 24 hours: " + (P ? "+" + I(x[x.length - 1] - x[0]) : _ === M ? I(_) : I(_) + " to " + I(M)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function np() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = wp();
    Zl(t, e, "Solar, last 24 hours: up to " + Ne(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function nm(t, e) {
    const a = e.entity_id, n = Nt.get(a) || {}, s = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ya(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    s != null && (n.pos = s), d != null && (n.tilt = d), t === "stop_cover" && (delete n.pos, delete n.tilt), t === "stop_cover_tilt" && delete n.tilt, n.at = Date.now(), Nt.set(a, n);
  }
  function rp(t, e, a) {
    var s;
    const n = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof n != "string" || !Pa[n] || !po(n) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((s = k[n]) == null ? void 0 : s.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: Pa[n] }];
  }
  function Sa(t, e, a, n) {
    let s = { entity_id: a, ...n || {} };
    return [e, s] = rp(t, e, s), t === "cover" && nm(e, s), gn[a] = (gn[a] || 0) + 1, Je.set(Su, JSON.stringify(gn)), Ci.call(t, e, s) ? Promise.resolve() : Promise.resolve(J(t, e, s));
  }
  function Kl(t) {
    const [e, a, n, s] = t.split("|");
    Sa(e, a, n, s ? JSON.parse(s) : null).catch(() => {
    });
  }
  function di(t, e) {
    Mt.set("pos|" + t, e), ea("pos|" + t), la.delete(t), vo = vo.map(() => ""), [H, St].forEach((n) => n.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((s) => Ii(s, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (N == null ? void 0 : N.id) === t) {
      const n = St.querySelector(".tfMoreState"), s = St.querySelector(".tfMoreSub");
      n && (n.textContent = Math.round(e) + "%", n.classList.add("live")), s && (s.textContent = "Currently " + Ya(t) + "%");
    }
    Yd(t).forEach((n) => n.update(ns(t)));
  }
  const rm = (t, e) => {
    const a = t.shiftKey ? 10 : 1, n = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  function im(t, e) {
    var S;
    const a = t.dataset.blocks;
    (S = t.setPointerCapture) == null || S.call(t, e.pointerId), Ft.add("pos|" + a), I("pos|" + a);
    const n = (D) => {
      const A = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (D.clientX - A.left) / A.width * 100));
    }, s = n(e), d = e.clientX;
    let p = !1, u = yn(a), h = s, x = 0;
    const _ = () => {
      u = Math.abs(h - u) < 0.2 ? h : u + (h - u) * 0.14, di(a, u), x = requestAnimationFrame(_);
    }, M = () => {
      p || (p = !0, t.classList.add("fine"), x = requestAnimationFrame(_));
    }, I = setTimeout(M, 350), P = (D) => {
      h = n(D), Math.abs(D.clientX - d) > 6 && (clearTimeout(I), M());
    }, G = () => {
      clearTimeout(I), cancelAnimationFrame(x), t.removeEventListener("pointermove", P), t.removeEventListener("pointerup", G), t.removeEventListener("pointercancel", G), t.classList.remove("fine"), Ft.delete("pos|" + a), di(a, p ? Math.round(u) : (Math.min(3, Math.floor(s / 25)) + 1) * 25), pi("pos", a);
    };
    t.addEventListener("pointermove", P), t.addEventListener("pointerup", G), t.addEventListener("pointercancel", G);
  }
  function ip(t) {
    var e;
    dt = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var s;
      const n = a === t;
      a.classList.toggle("active", n), a.setAttribute("aria-expanded", String(n)), (s = a.querySelector(".panelExpanded")) == null || s.toggleAttribute("inert", !n);
    }), la.set("areas", Dt(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => il(!0), 340);
  }
  function sp(t) {
    const e = H.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === dt) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), n = a && !qe() ? a.cloneNode(!0) : null, s = Tt().map((x) => x.id), d = s.indexOf(t) > s.indexOf(dt) ? 1 : -1;
    dt = t;
    const p = Dt(e.style.order || 1);
    la.set("areas", p), Fd(e, p);
    const u = H.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), h = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || qe() || (u.style.setProperty("--dir", d), n && (n.classList.add("tfAreaGoing"), n.inert = !0, n.setAttribute("aria-hidden", "true"), u.appendChild(n), setTimeout(() => n.remove(), 340), clearTimeout(Ao), Ao = setTimeout(() => {
      Ao = 0, wa && De();
    }, 340)), h && (h.classList.add("tfAreaLand"), h.addEventListener("animationend", () => h.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const sm = 40;
  function lm(t) {
    var u, h;
    if (t.pointerType === "mouse" || !t.isPrimary || !((h = (u = t.target).closest) != null && h.call(u, ".tfAreaStage")) || !od.matches) return;
    const e = t.clientX, a = t.clientY, n = t.pointerId;
    let s = null;
    const d = (x) => {
      x.pointerId === n && !s && Math.hypot(x.clientX - e, x.clientY - a) >= Xn && (s = Math.abs(x.clientX - e) > Math.abs(x.clientY - a) ? "x" : "y");
    }, p = (x) => {
      if (x.pointerId !== n) return;
      removeEventListener("pointermove", d, !0), removeEventListener("pointerup", p, !0), removeEventListener("pointercancel", p, !0);
      const _ = x.clientX - e;
      if (x.type !== "pointerup" || s !== "x" || Math.abs(_) < sm) return;
      const M = (G) => {
        G.stopPropagation(), G.preventDefault();
      };
      o.addEventListener("click", M, { capture: !0, once: !0 }), setTimeout(() => o.removeEventListener("click", M, !0), 400);
      const I = Tt(), P = I[I.findIndex((G) => G.id === dt) + (_ < 0 ? 1 : -1)];
      P && sp(P.id);
    };
    addEventListener("pointermove", d, !0), addEventListener("pointerup", p, !0), addEventListener("pointercancel", p, !0);
  }
  const ls = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, n] = er(t);
      return Math.round(a + e * (n - a));
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
      const [a, n] = er(t);
      return Math.round(n - e * (n - a));
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
  function cs(t, e, a, n) {
    var x;
    const s = ls[e].value(a, n);
    Mt.set(e + "|" + a, s), ea(e + "|" + a);
    const d = Math.round(n * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + n + ")";
      const [_, M] = t.querySelectorAll("span");
      _.classList.toggle("lit", n > 0.08), M.classList.toggle("lit", n > 0.92), la.delete(a), vo = vo.map(() => ""), Yd(a).forEach((I) => I.update(ns(a)));
    } else if (t.dataset.axis === "y")
      if (p) p.style.height = d;
      else {
        let _ = t.querySelector("b");
        _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.top = Math.round((1 - n) * 1e3) / 10 + "%";
      }
    else if (p) p.style.width = d;
    else {
      let _ = t.querySelector("b");
      _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(n * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = ls[e].text(a, s));
    const h = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    h && (h.textContent = ls[e].text(a, s));
  }
  function pi(t, e) {
    const a = t + "|" + e, n = Mt.get(a), s = ce.get(a), [d, p, u] = ls[t].send(e, n), h = () => setTimeout(() => {
      ce.get(a) === s && Mt.delete(a), De();
    }, 1500);
    Sa(d, p, e, u).then(h, h);
  }
  function lp(t) {
    t.addEventListener("click", (e) => {
      var n;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (oa && !e.target.closest(".tfBoardMenu,[data-board-more]") && bo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (oa == null ? void 0 : oa.key) === a.dataset.boardMore ? bo(!0) : nh(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) rh(oa.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) fl(a.dataset.boardShow);
        else if (a.dataset.favHide) Md(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Vc(a.dataset.energyPick);
        else if (a.dataset.areaPick) sp(a.dataset.areaPick);
        else if (a.dataset.act) Kl(a.dataset.act);
        else if (a.hasAttribute("data-details")) Wl(!(N != null && N.details));
        else if (a.hasAttribute("data-details-close")) Wl(!1);
        else if (a.dataset.summary) Nc(a.dataset.summary, a);
        else if (a.dataset.star) Rc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const s = N.id;
          N = N.back, Ul(), (n = St.querySelector('.tfMore [data-more="' + CSS.escape(s) + '"]')) == null || n.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? is("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([s, d, p, u]) => Sa(s, d, p, u).catch(() => {
        })) : a.dataset.more ? is(a.dataset.more, a) : a.hasAttribute("data-more-close") ? ss() : a.dataset.morePage ? rs(a.hasAttribute("data-more-toggle") && ((N == null ? void 0 : N.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? Hc(a.dataset.path) : a.dataset.go ? Hd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? El() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && ip(a);
    }), t.addEventListener("keydown", (e) => {
      var n, s, d, p, u, h, x;
      const a = e.target;
      if ((n = a.dataset) != null && n.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), is(a.dataset.more, a)), (s = a.dataset) != null && s.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Vc(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ip(a)), (p = a.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Nc(a.dataset.summary, a)), e.key === "Escape" && oa && t === H) {
        e.preventDefault(), bo(!0);
        return;
      }
      if (e.key === "Escape" && pa && t === H) {
        e.preventDefault(), ul(!1), (u = l("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && nt && t === H && (e.preventDefault(), El()), (h = a.dataset) != null && h.blocks) {
        const _ = a.dataset.blocks, M = rm(e, Math.round(yn(_)));
        if (M == null) return;
        e.preventDefault(), di(_, M), clearTimeout(Lo.get(_)), Lo.set(_, setTimeout(() => pi("pos", _), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [_, M] = a.dataset.drag.split("|"), I = Number(a.getAttribute("aria-valuenow")) / 100, P = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, I + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        cs(a, _, M, P), pi(_, M);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var qt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), im(a, e);
        return;
      }
      const n = e.target.closest("[data-drag]");
      if (!n || e.button > 0) return;
      const [s, d] = n.dataset.drag.split("|"), p = s === "bright" && !po(d), u = e.pointerType !== "mouse";
      if (p && !u) {
        Kl(Bt("light", "toggle", d));
        return;
      }
      const h = s === "bright" && ((qt = k[d]) == null ? void 0 : qt.state) !== "on", x = s + "|" + d;
      Ft.add(x), ea(x);
      const _ = s === "tilt" ? 4 : 0, M = n.dataset.axis === "y", I = () => M ? n.getBoundingClientRect().height : n.getBoundingClientRect().width - _ * 2, P = (Vt) => {
        const _t = n.getBoundingClientRect();
        return Math.max(0, Math.min(1, M ? 1 - (Vt.clientY - _t.top) / I() : (Vt.clientX - _t.left - _) / I()));
      };
      let G = u ? "waiting" : h ? "pressed" : "dragging", S = 0;
      const D = e.clientX, A = e.clientY, K = (Vt, _t) => Math.hypot(Vt.clientX - D, Vt.clientY - A) > _t, E = () => {
        try {
          n.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), E()), G === "dragging" && cs(n, s, d, P(e));
      const ot = () => {
        var Vt, _t;
        G = "sliding", To = n, n.classList.add("held"), E(), (Vt = navigator.userActivation) != null && Vt.hasBeenActive && ((_t = navigator.vibrate) == null || _t.call(navigator, 8)), S = h ? (Pa[d] ?? 100) / 100 : Number(n.getAttribute("aria-valuenow")) / 100;
      }, xt = (Vt) => {
        G === "waiting" && K(Vt, Xn) ? !p && (M ? Math.abs(Vt.clientY - A) > Math.abs(Vt.clientX - D) : Math.abs(Vt.clientX - D) > Math.abs(Vt.clientY - A)) ? ot() : G = "gone" : G === "pressed" && K(Vt, 4) && (G = "dragging"), G === "sliding" ? cs(n, s, d, Math.max(0, Math.min(1, S + (M ? A - Vt.clientY : Vt.clientX - D) / I()))) : G === "dragging" && cs(n, s, d, P(Vt));
      }, Et = (Vt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((_t, Lt) => n.removeEventListener(_t, Lt ? Et : xt)), n.classList.remove("held"), To === n && (To = null), Ft.delete(x), G === "sliding" || G === "dragging" ? pi(s, d) : Vt.type === "pointerup" && p ? Kl(Bt("light", "toggle", d)) : Vt.type === "pointerup" && h && (G === "waiting" || G === "pressed") && Sa("light", "turn_on", d).catch(() => {
        }), wa && G !== "sliding" && G !== "dragging" && De();
      };
      n.addEventListener("pointermove", xt), n.addEventListener("pointerup", Et), n.addEventListener("pointercancel", Et);
    }), t.addEventListener("touchmove", (e) => {
      To && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && g && (Mf(), lp(H), H.addEventListener("pointerdown", lm), lp(St), St.addEventListener("click", (t) => {
    t.target === St && ss();
  }), (cp = o.getElementById("homeNav")) == null || cp.addEventListener("click", () => {
    nt && El();
  }), (dp = o.querySelector(".bottomNav")) == null || dp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ms + "</button>"), (pp = l("dashEditNav")) == null || pp.addEventListener("click", () => v ? Cl(!Wo) : ul(!pa)), H.addEventListener("pointerdown", _h), H.addEventListener("pointerdown", eh), H.addEventListener("click", (t) => {
    v && Wo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && cd(t.target);
  }, !0), new ResizeObserver(() => {
    f.classList.contains("tfDash") && Qs() !== Xs ? De() : Zi();
  }).observe(H), window.addEventListener("resize", Zi, { passive: !0 }), St.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), N != null && N.details ? Wl(!1) : ss();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const n = [...St.querySelectorAll(".tfMoreDots [data-more-page]")], s = n.findIndex((p) => p.getAttribute("aria-selected") === "true"), d = n[Math.max(0, Math.min(n.length - 1, s + (t.key === "ArrowRight" ? 1 : -1)))];
      d && rs(Number(d.dataset.morePage), d.dataset.moreMode ?? null, !0);
    }
  })), Pt(), {
    update(t) {
      if (!g) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([n]) => no(n))), ...t || {} };
      for (const n in k) n.startsWith("light.") && k[n].state === "on" && po(n) && sr(n, lo(k[n]));
      e ? Ia() : De();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      bn = !0, Ae == null || Ae.destroy(), Ae = null, Te == null || Te.forEach((t) => t.destroy()), Te = null;
    },
    resume() {
      bn = !1, !(!g || !(H != null && H.querySelector("[data-tf]"))) && (Ea.isConnected && Ti(Ea.style.order), qr());
    }
  };
}
const Cg = "0.15.0";
function Ag() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class Tg extends HTMLElement {
  setConfig(r) {
    this._config = { layout: "test-focus", ...r || {} };
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
  set hass(r) {
    const i = !this._hass;
    if (this._hass = r, i) {
      this._init();
      return;
    }
    this._test && r.states !== this._lastStates && (this._lastStates = r.states, this._test.update(r.states));
  }
  connectedCallback() {
    var r;
    (r = this._test) == null || r.resume();
  }
  disconnectedCallback() {
    var r;
    (r = this._test) == null || r.suspend();
  }
  _init() {
    Ag();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${gm}${bm}${wm}${vm}</style>${ym}`;
    const i = r.getElementById("app");
    i.style.opacity = "0", this._shell = Mm(r, {
      setLight: (l) => this.classList.toggle("lightBody", l),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = _g(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), T0(r, i), D0(r), this.isConnected || this._test.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "";
  }
  _toggleFullscreen() {
    const r = document;
    if (r.fullscreenElement || r.webkitFullscreenElement) {
      (r.exitFullscreen || r.webkitExitFullscreen).call(r);
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
customElements.get("homecore-card") || (customElements.define("homecore-card", Tg), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Cg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
