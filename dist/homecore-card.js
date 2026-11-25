const Ch = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel:not(.active) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.hcAreaPanel:not(.active) .panelCollapsed{opacity:1;filter:blur(0)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}.hcAreaPanel:not(.active) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Ah = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:60px;row-gap:var(--fill-gap,0px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:60px;box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}#app .tfRoomTile .tfIcon.tfIconOpen{border:0;padding:0;background-color:transparent!important;color:var(--hc-icon-ink);cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:flex;flex-wrap:wrap}.tfRoomHeads{display:none;gap:0;margin:auto -10px -10px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;height:60px;padding:10px;box-sizing:border-box;border-radius:20px;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:background .15s ease,box-shadow .15s ease}#app.tfBoard .tfRoomTile:not([data-cols="1"])[data-rows="2"]{gap:10px}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}`, Th = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Lh = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Dh = `<main id="app"><div class="shell">
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
`, zd = "homecore-theme", Eh = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Bh = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Eh[n] || "") + "</svg>", Gd = {
  get: (n) => {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set: (n, i) => {
    try {
      localStorage.setItem(n, i);
    } catch {
    }
  }
};
function Rh(n, { setLight: i, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (ot) => n.getElementById(ot), y = g("app");
  n.querySelectorAll("[data-icon]").forEach((ot) => {
    ot.innerHTML = Bh(ot.dataset.icon);
  });
  const b = { home: g("homeView"), settings: g("settingsView") }, A = g("homeNav"), V = g("settingsNav");
  function M(ot) {
    Object.entries(b).forEach(([nt, K]) => K.classList.toggle("active", nt === ot)), A.classList.toggle("active", ot === "home"), V.classList.toggle("active", ot === "settings");
  }
  A.addEventListener("click", () => M("home")), V.addEventListener("click", () => M("settings")), g("settingsBack").addEventListener("click", () => M("home"));
  function L(ot) {
    const nt = ot === "light";
    n.querySelectorAll(".themeBtn").forEach((K) => K.classList.toggle("active", K.dataset.theme === ot)), y.classList.toggle("light", nt), i(nt);
  }
  L(Gd.get(zd) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((ot) => ot.addEventListener("click", () => {
    L(ot.dataset.theme), Gd.set(zd, ot.dataset.theme);
  }));
  const F = g("tvNav");
  d || (F.hidden = !0), F.addEventListener("click", () => p());
  let G;
  function J(ot) {
    const nt = g("toast");
    nt && (nt.textContent = ot, nt.classList.add("show"), clearTimeout(G), G = setTimeout(() => nt.classList.remove("show"), 2600));
  }
  return { showView: M, toast: J };
}
const Ph = /* @__PURE__ */ new Set(["roaming", "test_area"]), Hh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, In = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ce = "made_up_", $a = (n) => {
  var i;
  return (i = String(n).split(".")[1]) == null ? void 0 : i.startsWith(Ce);
}, Pn = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function pc(n) {
  const i = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((i - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function Nh(n) {
  const i = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +i; p < +n; p += 10 * 60 * 1e3) d += pc(new Date(p)) / 6;
  return d;
}
function Ud(n = /* @__PURE__ */ new Date()) {
  const i = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    i.push([p, pc(new Date(p))]);
  }
  return i;
}
function Oh({ onChange: n }) {
  const i = {}, d = {}, p = (K, N, it, dt) => {
    i[K] = { entity_id: K, state: it, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[K] = N;
  }, g = (K, N, it) => {
    const dt = i[K], wt = N ?? dt.state;
    i[K] = { ...dt, state: wt, attributes: { ...dt.attributes, ...it }, last_changed: wt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (K, N, it, dt) => p("binary_sensor." + Ce + (K ? K + "_" : "") + Pn(N), K, dt ? "on" : "off", { friendly_name: N, device_class: it });
  Object.entries(Hh).forEach(([K, N]) => {
    if (N.temperature != null && p("sensor." + Ce + K + "_temperature", K, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && p("sensor." + Ce + K + "_humidity", K, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && p("vacuum." + Ce + "robot", K, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && p("climate." + Ce + K, K, "heat", {
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
      const [it, dt] = N.fan;
      p("fan." + Ce + K + "_" + Pn(it), K, "on", dt != null ? { friendly_name: it, percentage: dt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: it, supported_features: 48 });
    }
    if (N.waterHeater && p("water_heater." + Ce + K, K, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [it, dt] = N.valvePos;
      p("valve." + Ce + K + "_" + Pn(it), K, dt == null || dt ? "open" : "closed", { friendly_name: it, device_class: "water", supported_features: 3 | (dt == null ? 0 : 12), ...dt == null ? {} : { current_position: dt } });
    }
    if (N.garage && p("cover." + Ce + K + "_" + Pn(N.garage), K, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [it, dt, wt, st] = N.cover;
      p("cover." + Ce + K + "_" + Pn(it), K, wt ? "open" : "closed", { friendly_name: it, device_class: dt, current_position: wt, ...st != null ? { current_tilt_position: st } : {} });
    }
    if (N.humidifier && p("humidifier." + Ce + K, K, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (p("sensor." + Ce + K + "_solar_power", K, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Ce + K + "_solar_today", K, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && p("valve." + Ce + K + "_" + Pn(N.valve), K, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && y(K, N.door, "door", N.doorOpen), N.window && y(K, N.window, "window", !1), N.motion && y(K, N.motion, "motion", !1), N.plant) {
      const [it, dt, wt, st, Z] = N.plant, Y = Ce + Pn(it), P = (Pt, ct, U, It, W) => p("sensor." + Y + "_" + Pt, K, String(U), { friendly_name: ct, device_class: W, state_class: "measurement", unit_of_measurement: It, plant_low: U < In[Pt][0], plant_high: U > In[Pt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Pt] });
      P("moisture", "Moisture", dt, "%", "moisture"), P("light", "Light", wt, "lx", "illuminance"), P("temperature", "Temperature", st, "°C", "temperature"), P("fertility", "Fertility", Z, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: dt, light: wt, temperature: st, fertility: Z }).filter(([Pt, ct]) => ct < In[Pt][0] || ct > In[Pt][1]).map(([Pt, ct]) => Pt + (ct < In[Pt][0] ? " low" : " high"));
      p("plant." + Y, K, xt.length ? "problem" : "ok", { friendly_name: it, moisture: dt, brightness: wt, temperature: st, conductivity: Z, problem: xt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), p("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const b = {}, A = {};
  let V = null;
  function M() {
    const K = /* @__PURE__ */ new Date();
    Object.keys(i).forEach((N) => {
      N.endsWith("_solar_power") && (i[N] = { ...i[N], state: pc(K).toFixed(2) }), N.endsWith("_solar_today") && (i[N] = { ...i[N], state: Nh(K).toFixed(1) });
    });
  }
  M();
  let L = 0;
  function F() {
    let K = !1;
    const N = ++L % 10 === 0, it = (st, Z, Y) => {
      g(st, Z, Y), K = !0;
    };
    Object.entries(b).forEach(([st, Z]) => {
      const Y = i[st].attributes.current_position, P = Y < Z ? Math.min(Z, Y + 10) : Math.max(Z, Y - 10);
      P === Z && delete b[st], it(st, P === Z ? P === 0 ? "closed" : "open" : Z > Y ? "opening" : "closing", { current_position: P });
    }), Object.entries(A).forEach(([st, Z]) => {
      const Y = i[st].attributes.current_tilt_position, P = Y < Z ? Math.min(Z, Y + 25) : Math.max(Z, Y - 25);
      P === Z && delete A[st], it(st, null, { current_tilt_position: P });
    }), Object.keys(i).filter((st) => st.startsWith("climate.")).forEach((st) => {
      const Z = i[st], Y = Z.attributes, P = Y.current_temperature, xt = (Z.state === "heat" || Z.state === "auto") && P < Y.temperature - 0.05, Pt = (Z.state === "cool" || Z.state === "auto") && P > Y.temperature + 0.05, ct = Z.state === "off" ? "off" : xt ? "heating" : Pt ? "cooling" : "idle", U = N ? Math.round((P + (xt ? 0.1 : Pt ? -0.1 : 0)) * 10) / 10 : P;
      (U !== P || ct !== Y.hvac_action) && it(st, null, { current_temperature: U, hvac_action: ct });
    }), Object.keys(i).filter((st) => st.startsWith("humidifier.")).forEach((st) => {
      const Z = i[st], Y = Z.attributes, P = Y.current_humidity, xt = Z.state === "on" && P < Y.humidity, Pt = xt && N ? P + 1 : P, ct = Z.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (Pt !== P || ct !== Y.action) {
        it(st, null, { current_humidity: Pt, action: ct });
        const U = "sensor." + Ce + d[st] + "_humidity";
        i[U] && it(U, String(Pt));
      }
    });
    const dt = i["vacuum." + Ce + "robot"], wt = dt.attributes;
    dt.state === "cleaning" && N && it(dt.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), dt.state === "returning" && it(dt.entity_id, "docked", {}), dt.state === "docked" && wt.battery_level < 100 && it(dt.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), V && Date.now() - V.at > 5e3 && (it("alarm_control_panel." + Ce + "house", "armed_" + V.mode, {}), V = null), K && n();
  }
  const G = setInterval(F, 1e3), J = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function ot(K, N, it) {
    const dt = it == null ? void 0 : it.entity_id;
    if (!i[dt]) return !1;
    const wt = i[dt], st = wt.attributes, Z = (Y, P) => g(dt, Y, P);
    if (K === "climate" && (N === "set_temperature" && it.temperature != null && Z(null, { temperature: Math.max(st.min_temp, Math.min(st.max_temp, it.temperature)) }), N === "set_hvac_mode" && Z(it.hvac_mode, it.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && Z(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && it.target_temp_low != null && Z(null, { target_temp_low: it.target_temp_low, target_temp_high: it.target_temp_high }), N === "set_fan_mode" && Z(null, { fan_mode: it.fan_mode }), N === "set_swing_mode" && Z(null, { swing_mode: it.swing_mode }), N === "set_preset_mode" && Z(null, { preset_mode: it.preset_mode }), N === "set_humidity" && Z(null, { humidity: Math.max(st.min_humidity, Math.min(st.max_humidity, it.humidity)) })), K === "fan" && (N === "set_percentage" && Z(it.percentage > 0 ? "on" : "off", { percentage: it.percentage }), N === "oscillate" && Z(null, { oscillating: it.oscillating }), N === "set_direction" && Z(null, { direction: it.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && Z(N === "turn_on" || N === "toggle" && wt.state !== "on" ? "on" : "off")), K === "water_heater" && (N === "set_temperature" && Z(null, { temperature: Math.max(st.min_temp, Math.min(st.max_temp, it.temperature)) }), N === "set_operation_mode" && Z(it.operation_mode, { operation_mode: it.operation_mode }), N === "set_away_mode" && Z(null, { away_mode: it.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && wt.state === "off";
      Z(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (K === "cover") {
      const Y = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? it.position : N === "toggle" ? st.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete b[dt], delete A[dt], Z(st.current_position === 0 ? "closed" : "open")), Y != null && st.current_position == null ? Z(Y > 0 ? "open" : "closed") : Y != null && Y !== st.current_position && (b[dt] = Y, Z(Y > st.current_position ? "opening" : "closing"));
      const P = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? it.tilt_position : null;
      N === "stop_cover_tilt" && delete A[dt], P != null && st.current_tilt_position != null && P !== st.current_tilt_position && (A[dt] = P);
    }
    if (K === "humidifier" && (N === "set_humidity" && Z(null, { humidity: Math.max(st.min_humidity, Math.min(st.max_humidity, it.humidity)) }), N === "set_mode" && Z(null, { mode: it.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && wt.state !== "on";
      Z(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (K === "vacuum" && (N === "start" && Z("cleaning", { rooms: it.rooms || st.rooms }), N === "pause" && Z("paused"), N === "return_to_base" && Z("returning", { rooms: [] }), N === "locate" && Z(null, { located: Date.now() }), N === "set_rooms" && Z(null, { rooms: it.rooms })), K === "valve") {
      const Y = N === "open_valve" || N === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && Z(Y ? "open" : "closed", st.current_position != null ? { current_position: Y ? 100 : 0 } : {}), N === "set_valve_position" && Z(it.position > 0 ? "open" : "closed", { current_position: it.position });
    }
    if (K === "alarm_control_panel") {
      N === "alarm_disarm" && (V = null, Z("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      Y && (V = { mode: Y, at: Date.now() }, Z("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function nt(K, { madeUp: N = !0 } = {}) {
    const it = N ? i : {}, dt = (K == null ? void 0 : K.states) || {}, wt = (K == null ? void 0 : K.entities) || {}, st = (K == null ? void 0 : K.devices) || {}, Z = (rt) => {
      var vt;
      const lt = wt[rt];
      return lt && (lt.area_id || lt.device_id && ((vt = st[lt.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (rt) => {
      const lt = wt[rt];
      return dt[rt] && dt[rt].state !== "unavailable" && !(lt != null && lt.hidden) && !(lt != null && lt.entity_category);
    }, P = {};
    Object.keys(dt).forEach((rt) => {
      const lt = Z(rt);
      lt && Y(rt) && (P[lt] || (P[lt] = [])).push(rt);
    });
    const xt = { ...dt, ...it }, Pt = (rt) => {
      var lt, vt;
      return (vt = (lt = xt[rt]) == null ? void 0 : lt.attributes) == null ? void 0 : vt.device_class;
    }, ct = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(dt).filter((rt) => rt.startsWith("vacuum.") && Y(rt)), It = Object.values((K == null ? void 0 : K.areas) || {}).filter((rt) => !Ph.has(rt.area_id)).map((rt) => {
      const lt = rt.area_id, vt = P[lt] || [], ht = (et) => vt.filter((ye) => ye.startsWith(et + ".")), _t = (et) => ht("sensor").filter((ye) => Pt(ye) === et), Vt = (et) => Object.keys(it).filter((ye) => d[ye] === lt && et(ye)), ae = (et, ye) => et.length ? et : Vt(ye), Ke = ae(_t("temperature"), (et) => et.endsWith(lt + "_temperature")), Sa = ae(_t("humidity"), (et) => et.endsWith(lt + "_humidity")), Xa = _t("power").filter((et) => /^(W|kW)$/.test(xt[et].attributes.unit_of_measurement || "")), _a = ht("binary_sensor").filter((et) => Pt(et) === "moisture"), na = ae(ht("plant"), (et) => et.startsWith("plant.")).map((et) => ({ id: et, readings: Vt((ye) => ye.startsWith("sensor." + et.split(".")[1] + "_")) })), nn = [...ht("binary_sensor").filter((et) => ct.includes(Pt(et))), ...Vt((et) => et.startsWith("binary_sensor."))];
      return {
        id: lt,
        name: rt.name,
        icon: rt.icon,
        floor: rt.floor_id || null,
        readings: [...Ke.slice(0, 1), ...Sa.slice(0, 1), ..._a],
        power: Xa.length ? Xa.reduce((et, ye) => et + Number(xt[ye].state) * (xt[ye].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ht("switch"),
        lights: ht("light"),
        actions: [
          ...ht("light"),
          ...ae(ht("climate"), (et) => et.startsWith("climate.")),
          ...ae(ht("cover"), (et) => et.startsWith("cover.")),
          ...ae(ht("humidifier"), (et) => et.startsWith("humidifier.")),
          ...ae(ht("valve"), (et) => et.startsWith("valve.")),
          ...ht("media_player"),
          ...ht("vacuum"),
          ...U.length ? [] : Vt((et) => et.startsWith("vacuum.")),
          ...ht("fan"),
          ...Vt((et) => et.startsWith("fan.")),
          ...ht("water_heater"),
          ...Vt((et) => et.startsWith("water_heater."))
        ],
        solar: Vt((et) => et.includes("_solar_")),
        plants: na,
        openings: nn,
        alerts: [..._a, ...nn].filter((et) => {
          var ye;
          return ((ye = xt[et]) == null ? void 0 : ye.state) === "on";
        })
      };
    }).filter((rt) => rt.readings.length || rt.plugs.length || rt.actions.length || rt.solar.length || rt.plants.length), W = Object.keys(dt).find((rt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(rt) && dt[rt].state !== "unavailable") || null, Q = (rt) => Object.keys(dt).filter((lt) => lt.startsWith(rt + ".") && Y(lt)), T = Q("alarm_control_panel"), ft = U.length ? U : N ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: xt,
      rooms: It,
      grid: W,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (rt) => it[rt] ? d[rt] : Z(rt),
      vacuums: ft,
      homeVacuums: ft.filter((rt) => !It.some((lt) => lt.actions.includes(rt))),
      security: {
        alarms: T.length ? T : N ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: Q("lock"),
        openings: [...Object.keys(it).filter((rt) => rt.startsWith("binary_sensor.")), ...N ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: nt, call: ot, stop() {
    clearInterval(G), clearInterval(J);
  } };
}
const Yd = (n) => +n.toFixed(2), Zd = (n) => n * Math.PI / 180, ri = (n, i, d, p) => [Yd(n + d * Math.cos(Zd(p))), Yd(i + d * Math.sin(Zd(p)))], cr = (n, i, d, p, g) => {
  const [y, b] = ri(n, i, d, p), [A, V] = ri(n, i, d, g);
  return `M${y} ${b}A${d} ${d} 0 ${g - p > 180 ? 1 : 0} 1 ${A} ${V}`;
}, Ge = (n, i, d, p, g, y = "") => `<rect x="${n}" y="${i}" width="${d}" height="${p}" rx="${g}"${y}/>`, ka = (n, i, d, p = "") => `<circle cx="${n}" cy="${i}" r="${d}"${p}/>`, fa = (n, i = "") => `<path d="${n}"${i}/>`, cs = (n, i = 2.5) => fa(n, ` fill="none" stroke="currentColor" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"`), Hn = (n, i = 1.5) => fa(n, ` stroke="currentColor" stroke-width="${i}" stroke-linejoin="round"`), Nn = (n) => n.replace(/\/>$/, ' fill="#000" stroke="none"/>'), Ih = (n, i, d, p = 0) => Array.from({ length: n }, (g, y) => {
  const b = p + 360 / n * y, [A, V] = ri(12, 12, i, b), [M, L] = ri(12, 12, d, b);
  return cs(`M${A} ${V}L${M} ${L}`, 2.2);
}).join(""), Fh = "M12 10.4C10.2 8.6 9.7 5 11.6 3.3C13.6 1.6 17.4 2.6 17.3 5.6C17.2 7.6 15.2 9.6 13.6 10.6Z", qh = [
  {
    id: "light",
    name: "Light",
    use: "lights, lamps",
    colour: "#ffc107",
    s: fa("M8.6 15.6A7 7 0 1 1 15.4 15.6V16.6Q15.4 17.6 14.4 17.6H9.6Q8.6 17.6 8.6 16.6Z") + Ge(9.4, 19.2, 5.2, 2.6, 1.3),
    c: fa(cr(12, 9.6, 3.6, 180, 270))
  },
  {
    id: "plug",
    name: "Plug",
    use: "switches, sockets",
    colour: "#ffc107",
    s: Ge(3, 3, 18, 18, 6),
    c: Nn(Ge(8.2, 8.8, 2.2, 6.4, 1.1)) + Nn(Ge(13.6, 8.8, 2.2, 6.4, 1.1))
  },
  {
    id: "thermostat",
    name: "Thermostat",
    use: "climate, heating",
    colour: "#ff5722",
    s: ka(12, 12, 9.6),
    c: fa(cr(12, 12, 6.2, 135, 405)) + fa(`M12 12L${ri(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: Ge(9.2, 2.4, 5.6, 14, 2.8) + ka(12, 17.4, 4.4),
    c: fa("M12 6.4V14")
  },
  {
    id: "humidity",
    name: "Humidity",
    use: "humidity, leaks, water",
    colour: "#2196f3",
    s: Hn("M12 3.1C12 3.1 5.2 10.2 5.2 15A6.8 6.8 0 0 0 18.8 15C18.8 10.2 12 3.1 12 3.1Z", 1.2),
    c: fa(cr(12, 15, 3.6, 90, 180))
  },
  {
    id: "fan",
    name: "Fan",
    use: "fans, ventilation",
    colour: "#03a9f4",
    s: [0, 120, 240].map((n) => fa(Fh, ` transform="rotate(${n} 12 12)"`)).join("") + ka(12, 12, 2.6),
    c: ka(12, 12, 3.6)
  },
  {
    id: "blinds",
    name: "Blinds",
    use: "covers, shades, shutters",
    colour: "#9c27b0",
    s: Ge(2.5, 2.5, 19, 3, 1.5) + [7, 11, 15, 19].map((n) => Ge(4, n, 16, 2.5, 1.25)).join(""),
    c: ""
  },
  {
    id: "lock",
    name: "Lock",
    use: "locks",
    colour: "#4caf50",
    s: cs("M7.6 10.4V7.6A4.4 4.4 0 0 1 16.4 7.6V10.4") + Ge(4, 10, 16, 11.6, 4.2),
    c: Nn(ka(12, 14.9, 1.7)) + fa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Ge(5, 2.4, 14, 19.2, 3.6),
    c: Nn(ka(15.2, 12.4, 1.5))
  },
  {
    id: "window",
    name: "Window",
    use: "windows, openings",
    colour: "#ff9800",
    s: Ge(3, 3, 18, 18, 4.4),
    c: fa("M12 3V21M3 12H21")
  },
  {
    id: "motion",
    name: "Motion",
    use: "motion, occupancy",
    colour: "#03a9f4",
    s: Hn("M7.6 21.2V18.6A4.4 4.4 0 0 1 16.4 18.6V21.2Z", 1.2) + cs(cr(12, 18.6, 8, 230, 310), 2.4) + cs(cr(12, 18.6, 12.4, 240, 300), 2.4),
    c: ""
  },
  {
    id: "person",
    name: "Person",
    use: "people, presence",
    colour: "#03a9f4",
    s: ka(12, 7.2, 4.2) + Hn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Ge(2.6, 5.4, 13.4, 8.6, 3.4) + Hn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Ge(7.2, 14.6, 2.4, 4.2, 1.2) + Ge(3.4, 18.6, 10, 2.6, 1.3),
    c: Nn(ka(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Ge(5, 2.4, 14, 19.2, 4.2),
    c: ka(12, 14.6, 3.6) + Nn(ka(12, 7.4, 1.5))
  },
  {
    id: "tv",
    name: "TV",
    use: "TVs, displays",
    colour: "#2196f3",
    s: Ge(2.4, 3.6, 19.2, 13.4, 3.4) + Ge(7.6, 18.8, 8.8, 2.6, 1.3),
    c: fa(cr(18.2, 7.2, 2.4, 270, 360))
  },
  {
    id: "vacuum",
    name: "Vacuum",
    use: "robot vacuums",
    colour: "#4caf50",
    s: ka(12, 12, 9.6),
    c: fa("M5.6 8.6H18.4") + ka(12, 14.4, 2.4)
  },
  {
    id: "energy",
    name: "Energy",
    use: "power, energy",
    colour: "#ffc107",
    s: Hn("M13.8 2.8L5.6 13.4H11.2L10.2 21.2L18.4 10.6H12.8Z", 1.6),
    c: ""
  },
  {
    id: "sun",
    name: "Sun",
    use: "brightness, solar, weather",
    colour: "#ffc107",
    s: ka(12, 12, 4.4) + Ih(8, 7.4, 9.6),
    c: ""
  },
  {
    id: "alarm",
    name: "Alarm",
    use: "security, alarm panels",
    colour: "#607d8b",
    s: Hn("M12 2.8L19.4 5.6V11C19.4 15.8 16.2 19.6 12 21.2C7.8 19.6 4.6 15.8 4.6 11V5.6Z", 1.4),
    c: fa("M8.6 11.8L11 14.2L15.4 9.6")
  },
  {
    id: "home",
    name: "Home",
    use: "home, areas",
    colour: "#03a9f4",
    s: Hn("M3.6 10.6L12 3.4L20.4 10.6V18.8A2.6 2.6 0 0 1 17.8 21.4H6.2A2.6 2.6 0 0 1 3.6 18.8Z", 1.4),
    c: Nn(Ge(9.8, 14.2, 4.4, 10, 2.2))
  }
];
let Wh = 0;
function Vh(n, i = 24, d = `hc${++Wh}`) {
  const p = n.c ? `<defs><mask id="${d}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff"/><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n.c.replace(/currentColor/g, "#fff")}</g></mask></defs>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${i}" height="${i}" aria-hidden="true">${p}<g fill="currentColor"${n.c ? ` mask="url(#${d})"` : ""}>${n.s}</g>${n.t ? `<g fill="currentColor">${n.t}</g>` : ""}</svg>`;
}
const Fa = {
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
}, Jr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, nc = (n) => {
  const i = String(n || "#000000").trim().replace("#", ""), d = i.length === 3 ? i.split("").map((p) => p + p).join("") : i;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, jh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), $d = {}, Oa = (n, i, d) => {
  const p = n + i + d;
  return $d[p] || ($d[p] = jh(nc(n).map((g, y) => g + (nc(i)[y] - g) * d)));
}, Kd = {}, Nl = (n) => Kd[n] || (Kd[n] = nc(n));
function Qp(n, i) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || i ? "night" : "day");
}
function zh(n) {
  const i = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return i.partly = [Oa(i.clear[0], i.cloudy[0], 0.12), Oa(i.clear[1], i.cloudy[1], 0.12)], i.storm = [Oa(i.rain[0], "#000000", 0.22), Oa(i.rain[1], "#000000", 0.22)], i;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ic = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], sc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Gh(n, i = Fa) {
  const d = { ...Fa, ...i }, p = zh(d), g = String(n).split("/"), y = p[g[0]] ? g[0] : "clear", b = g[1] === "night", A = p[y][b ? 1 : 0], V = {
    night: b,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: b ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: b ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: b ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: ic.map(() => ({ o: 0, dy: -16 })),
    snow: sc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (L) => rc.map(() => ({ o: L }));
  return y === "clear" ? b ? (V.moon.o = 1, V.stars = M(1)) : V.sun.o = 1 : y === "partly" ? (V.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: b ? 1 : 0 }, b ? (V.moon = { x: 34, y: 33, d: 48, o: 1 }, V.stars = M(0.7)) : V.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (V.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: b ? 1 : 0 }, b ? V.moon = { x: 40, y: 36, d: 40, o: 0 } : V.sun = { x: 40, y: 36, r: 20, o: 0 }) : (V.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, b ? V.moon = { x: 38, y: 28, d: 36, o: 0 } : V.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? V.snow = sc.map(() => ({ o: 1, dy: 0 })) : V.rain = ic.map((L, F) => ({ o: y === "storm" && F === 1 ? 0 : 1, dy: 0 })), y === "storm" && (V.bolt = { o: 1, dy: 0 })), V;
}
const Uh = [
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
], On = (n, i) => (Uh[(i & 7) * 8 + (n & 7)] + 0.5) / 64, Yh = 0, tu = 1, eu = 2, au = 3, ou = 4, ho = 5, hs = 6, hr = 7, nu = 8, Xd = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), Zh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], $h = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Kh = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const b = n[g], A = n[y];
    b[1] > d != A[1] > d && i < (A[0] - b[0]) * (d - b[1]) / (A[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function Xh(n, { size: i = 90, px: d = 2, oneBit: p = !1, colors: g = Fa, ink: y = "#26221e", paper: b = "#fbf9f6", clock: A = 0, idle: V = !1 } = {}) {
  const M = { ...Fa, ...g }, L = Math.sin, F = Math.PI * 2, G = Math.max(6, Math.round(i / d)), J = G / 90, ot = V ? Math.floor(A / 100) * 100 : 0, nt = V ? L(F * ot / 3600) : 0, K = V ? 1.8 * L(F * ot / 6400) : 0, N = V ? 0.9 * L(F * ot / 4100) : 0, it = V ? 0.8 * L(F * ot / 5200) : 0, dt = ot / 3400 % 1, wt = V && n.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), st = new Array(G * G), Z = new Uint8Array(G * G), Y = (W, Q, T, ft, rt) => {
    T == null || W < 0 || Q < 0 || W >= G || Q >= G || (ft >= 1 || ft > On(W + 5, Q + 3)) && (st[Q * G + W] = T, Z[Q * G + W] = rt);
  }, P = (W, Q, T, ft) => {
    for (let rt = Math.max(0, Math.floor(Q - T) - 1); rt <= Math.min(G - 1, Q + T + 1); rt++) for (let lt = Math.max(0, Math.floor(W - T) - 1); lt <= Math.min(G - 1, W + T + 1); lt++) ft(lt, rt, lt + 0.5 - W, rt + 0.5 - Q);
  }, xt = n.skyStops || [n.sky], Pt = n.skyT || 0;
  for (let W = 0; W < G; W++) {
    const Q = n.night ? Jr(1 - (W + 0.5) / (G * 0.7)) * 0.85 : Jr(((W + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let T = 0; T < G; T++) {
      let ft = xt[0];
      if (xt.length > 1) {
        const rt = Pt * (xt.length - 1), lt = Math.min(xt.length - 2, Math.floor(rt));
        ft = rt - lt > On(T, W) ? xt[lt + 1] : xt[lt];
      }
      Q > On(T + 2, W + 5) && (ft = n.night ? Oa(ft, "#000000", 0.28) : Oa(ft, "#ffffff", 0.2)), st[W * G + T] = wt ? Oa(ft, "#ffffff", 0.25) : ft;
    }
  }
  if (n.sun.o > 0.01) {
    const W = n.sun.x * J, Q = n.sun.y * J, T = Math.max(1, n.sun.r * J);
    if (V) {
      const ft = T * (1.45 + 0.06 * nt), rt = Oa(M.sun, "#ffffff", 0.55);
      if (P(W, Q, ft, (lt, vt, ht, _t) => {
        const Vt = Math.sqrt(ht * ht + _t * _t);
        Vt > T && Vt < ft && Y(lt, vt, rt, 0.26 * (1 - (Vt - T) / (ft - T)) * n.sun.o, Yh);
      }), n.sun.o > 0.5) {
        const lt = Math.floor(ot / 500) % 2, vt = Math.max(1, T * 0.22);
        for (let ht = 0; ht < 8; ht++) if (ht % 2 === lt) for (let _t = T + 1.5; _t < T + 1.5 + vt; _t += 0.7) Y(Math.floor(W + Math.cos(ht * Math.PI / 4) * _t), Math.floor(Q + Math.sin(ht * Math.PI / 4) * _t), M.sun, n.sun.o, nu);
      }
    }
    P(W, Q, T, (ft, rt, lt, vt) => {
      if (lt * lt + vt * vt > T * T) return;
      const ht = ((lt * 0.643 + vt * 0.766) / T + 1) / 2;
      Y(ft, rt, Jr((ht - 0.62) / 0.38) > On(ft, rt) ? M.sunEdge : M.sun, n.sun.o, tu);
    });
  }
  if (rc.forEach((W, Q) => {
    const T = n.stars[Q].o;
    if (T < 0.01) return;
    const ft = Math.floor(W[0] * J), rt = Math.floor(W[1] * J), lt = V ? (Math.floor(ot / 300) + Q * 3) % 6 : 0;
    if (lt === 5) return;
    const vt = Math.round(W[2] * J * (lt === 4 ? 0.3 : lt < 2 ? 1 : 0.6));
    Y(ft, rt, M.star, T, hr);
    for (let ht = 1; ht <= vt; ht++) {
      const _t = ht === vt && vt > 1 ? Oa(M.star, n.sky, 0.5) : M.star;
      Y(ft - ht, rt, _t, T, hr), Y(ft + ht, rt, _t, T, hr), Y(ft, rt - ht, _t, T, hr), Y(ft, rt + ht, _t, T, hr);
    }
  }), n.moon.o > 0.01) {
    const W = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, T = n.moon.y * J + (V && it > 0.4 ? -1 : 0), ft = Q + 0.547 * W, rt = T - 0.503 * W, lt = 0.82 * W, vt = Oa(M.moon, "#ffffff", 0.6);
    P(Q, T, W, (ht, _t, Vt, ae) => {
      if (Vt * Vt + ae * ae > W * W) return;
      const Ke = ht + 0.5 - ft, Sa = _t + 0.5 - rt;
      Ke * Ke + Sa * Sa <= lt * lt || Y(ht, _t, Jr((ae + W) / (2 * W) * 1.1 - 0.1) > On(ht, _t) ? M.moon : vt, n.moon.o, eu);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * J)), U = Math.max(1, Math.round(5.87 * J * 0.5));
  ic.forEach((W, Q) => {
    const T = n.rain[Q];
    let ft = T.dy, rt = T.o;
    if (rt < 0.01) return;
    if (V) {
      const ht = (ot / 950 + Q / 3) % 1;
      ft += -5 + ht * 14, rt *= ht < 0.18 ? ht / 0.18 : ht > 0.72 ? (1 - ht) / 0.28 : 1;
    }
    const lt = (W[0] + 3 + K) * J, vt = (W[1] + ft) * J;
    for (let ht = 0; ht < ct; ht++) for (let _t = 0; _t < U; _t++) Y(Math.floor(lt - 0.208 * ht) + _t, Math.floor(vt) + ht, M.rain, rt, ou);
  });
  const It = Math.max(0, Math.round(7.34 * J / 2.6));
  if (sc.forEach((W, Q) => {
    const T = n.snow[Q];
    let ft = T.dy, rt = 0, lt = T.o;
    if (lt < 0.01) return;
    if (V) {
      const _t = (ot / 3200 + Q / 5) % 1;
      ft += -6 + _t * 14, rt = 1.5 * L(F * (_t * 1.5 + Q / 5)), lt *= _t < 0.2 ? _t / 0.2 : _t > 0.75 ? (1 - _t) / 0.25 : 1;
    }
    const vt = Math.floor((W[0] + 3.67 + rt + K) * J), ht = Math.floor((W[1] + 3.67 + ft) * J);
    Y(vt, ht, M.snow, lt, ho);
    for (let _t = 1; _t <= It; _t++)
      Y(vt - _t, ht, M.snow, lt, ho), Y(vt + _t, ht, M.snow, lt, ho), Y(vt, ht - _t, M.snow, lt, ho), Y(vt, ht + _t, M.snow, lt, ho), It > 1 && _t < It && (Y(vt - _t, ht - _t, M.snow, lt, ho), Y(vt + _t, ht - _t, M.snow, lt, ho), Y(vt - _t, ht + _t, M.snow, lt, ho), Y(vt + _t, ht + _t, M.snow, lt, ho));
  }), n.bolt.o > 0.01)
    if (G >= 30) {
      const W = 39 + K, Q = 50 + n.bolt.dy;
      for (let T = Math.floor(Q * J); T <= (Q + 28) * J; T++) for (let ft = Math.floor(W * J); ft <= (W + 13) * J; ft++)
        Kh($h, (ft + 0.5) / J - W, (T + 0.5) / J - Q) && Y(ft, T, M.sun, n.bolt.o, hs);
    } else {
      const W = G / 18, Q = 7, T = 10 + Math.round(n.bolt.dy * 0.2);
      Zh.forEach((ft, rt) => ft.split("").forEach((lt, vt) => {
        if (lt !== "#") return;
        const ht = Math.floor((Q + vt) * W), _t = Math.floor((T + rt) * W);
        for (let Vt = _t; Vt < Math.max(_t + 1, Math.floor((T + rt + 1) * W)); Vt++) for (let ae = ht; ae < Math.max(ht + 1, Math.floor((Q + vt + 1) * W)); ae++) Y(ae, Vt, M.sun, n.bolt.o, hs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const W = Math.max(3, n.cloud.w * J), Q = W * 0.6665, T = (n.cloud.x + K) * J - W / 2, ft = (n.cloud.y + N) * J - Q / 2, rt = Oa(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), lt = Oa(rt, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ft) - 1); vt <= Math.min(G - 1, ft + Q + 1); vt++) for (let ht = Math.max(0, Math.floor(T) - 1); ht <= Math.min(G - 1, T + W + 1); ht++) {
      const _t = (ht + 0.5 - T) / W, Vt = (vt + 0.5 - ft) / W;
      Xd(_t, Vt) && Y(ht, vt, !Xd(_t, Vt + 1 / W) || Jr((Vt - 0.42) / 0.25) * 0.8 > On(ht, vt) ? lt : rt, n.cloud.o, au);
    }
  }
  return Jh(st, Z, G, G, { oneBit: p, ink: y, paper: b, snowInk: !n.night });
}
function Jh(n, i, d, p, { oneBit: g, ink: y, paper: b, snowInk: A }) {
  const V = new Uint8ClampedArray(d * p * 4), M = Nl(y), L = Nl(b);
  for (let F = 0; F < p; F++) for (let G = 0; G < d; G++) {
    const J = F * d + G, ot = i[J];
    if (n[J] == null) continue;
    let nt = Nl(n[J]);
    if (g) {
      let K;
      ot === ou || ot === nu ? K = !0 : ot === ho ? K = A : ot === hr || ot === hs ? K = !1 : K = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= On(G, F), (ot === tu || ot === eu || ot === au || ot === hs) && (G > 0 && i[J - 1] !== ot || G < d - 1 && i[J + 1] !== ot || F > 0 && i[J - d] !== ot || F < p - 1 && i[J + d] !== ot) && (K = !0), nt = K ? M : L;
    }
    V[J * 4] = nt[0], V[J * 4 + 1] = nt[1], V[J * 4 + 2] = nt[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const Vo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, lc = (n) => {
  const i = String(n || "#000000").trim().replace("#", ""), d = i.length === 3 ? i.split("").map((p) => p + p).join("") : i;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, Qh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), Jd = {}, Ia = (n, i, d) => {
  const p = n + i + d;
  return Jd[p] || (Jd[p] = Qh(lc(n).map((g, y) => g + (lc(i)[y] - g) * d)));
}, Qd = {}, ds = (n) => Qd[n] || (Qd[n] = lc(n));
function tm(n) {
  const i = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return i.partly = [Ia(i.clear[0], i.cloudy[0], 0.12), Ia(i.clear[1], i.cloudy[1], 0.12)], i.storm = [Ia(i.rain[0], "#000000", 0.22), Ia(i.rain[1], "#000000", 0.22)], i;
}
const em = [
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
], qo = (n, i) => (em[(i & 7) * 8 + (n & 7)] + 0.5) / 64, ru = 1, iu = 2, su = 3, lu = 4, mr = 5, ms = 6, cc = 7, cu = 8, tp = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), am = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const b = n[g], A = n[y];
    b[1] > d != A[1] > d && i < (A[0] - b[0]) * (d - b[1]) / (A[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function om(n, i, d, p, { oneBit: g, ink: y, paper: b, snowInk: A }) {
  const V = new Uint8ClampedArray(d * p * 4), M = ds(y), L = ds(b);
  for (let F = 0; F < p; F++) for (let G = 0; G < d; G++) {
    const J = F * d + G, ot = i[J];
    if (n[J] == null) continue;
    let nt = ds(n[J]);
    if (g) {
      let K;
      ot === lu || ot === cu ? K = !0 : ot === mr ? K = A : ot === cc || ot === ms ? K = !1 : K = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= qo(G, F), (ot === ru || ot === iu || ot === su || ot === ms) && (G > 0 && i[J - 1] !== ot || G < d - 1 && i[J + 1] !== ot || F > 0 && i[J - d] !== ot || F < p - 1 && i[J + d] !== ot) && (K = !0), nt = K ? M : L;
    }
    V[J * 4] = nt[0], V[J * 4 + 1] = nt[1], V[J * 4 + 2] = nt[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const nm = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, rm = (n) => Qp(n, !1).split("/")[0], Ol = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let i = Math.imul(n ^ n >>> 15, 1 | n);
  return i = i + Math.imul(i ^ i >>> 7, 61 | i) ^ i, ((i ^ i >>> 14) >>> 0) / 4294967296;
}, im = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sm = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", lm = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", cm = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", dm = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], pm = [".##", "##.", ".#.", "#.."];
function du(n, { width: i, height: d, colors: p, wave: g = 0.38, soft: y = 6, glow: b = 0.6, columns: A = 6 }) {
  const V = { ...Fa, dawn: "#e5a77e", ...p }, M = tm(V), L = i, F = d, G = L / A, J = G / 2, ot = Math.PI * 2, nt = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(A * 2)].map((wt, st) => {
    const Z = nt[Math.min(st, nt.length - 1)], Y = rm(Z.cond), P = st % 2 === 1;
    return { cond: Z.cond, k: Y, night: P, sky: M[Y][P ? 1 : 0], cover: nm[Y] };
  }), N = (wt) => F * (0.5 - g * Math.cos(ot * (wt / G - 0.25)));
  return { C: V, S: K, W: L, H: F, cw: G, sw: J, TAU: ot, yb: N, side: (wt, st, Z) => {
    const Y = (wt ? N(st) - Z : Z - N(st)) / Math.max(3, y * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (wt) => {
    const st = ((wt / G - 0.25) % 1 + 1) % 1, Z = Math.max(0, Math.min(A - 1, Math.round(wt / G - 0.25))), Y = Math.max(0, Math.min(A - 1, Math.round(wt / G - 0.75))), P = 1 - (K[2 * Z].cover + K[2 * Y + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(wt) / F)));
    return { c: st < 0.5 ? V.dusk : V.dawn, a: b * (0.2 + 0.8 * P) * xt * xt };
  }, soft: y, tw: G * 0.3, sy: F / 90 };
}
function pu(n, { clock: i = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: y, side: b, C: A, TAU: V, sy: M, H: L } = n, F = i, G = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((nt, K) => {
    const N = Ol(p * 977 + K * 131 + 7), it = (K + 0.5) * y, dt = nt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[nt.k] : 0;
    for (let wt = 0; wt < dt; wt++) {
      const st = it + (N() - 0.5) * y * 1.6, Z = (6 + N() * 76) * M, Y = N() < 0.35, P = 1.8 + N() * 1.6, xt = b(!0, st, Z) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(V * F / 2600 + wt * 1.7 + K) : 1);
      xt >= 0.03 && G.stars.push({ x: st, y: Z, big: Y, size: P, o: xt });
    }
    if (!nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = it + (N() - 0.5) * y * 0.3, st = Math.min(15, y * 0.29);
      G.suns.push({ x: wt, y: 32 * M, rad: st, halo: st * 2.8 * (d ? 1 + 0.07 * Math.sin(V * F / 3600 + K) : 1) });
    }
    if (nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = Math.min(0.78, y * 0.55 / 34), st = it - 23 * wt + (N() - 0.5) * y * 0.2;
      G.moons.push({ x: st + 23 * wt, y: (4 + (d ? 0.8 * Math.sin(V * F / 5200 + K) : 0)) * M + 23 * wt, d: 46 * wt });
    }
  });
  const J = Math.max(56, Math.min(100, L * 0.45)), ot = Math.max(1, y / (J * 2.4));
  return g.forEach((nt, K) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[nt.k];
    if (!N) return;
    const it = nt.k === "partly" ? 1 : Math.round(N * ot), dt = Ol(p * 577 + K * 71 + 3), wt = (K + 0.5) * y, st = nt.k === "rain" || nt.k === "storm" || nt.night ? A.cloudNight : A.cloudDay, Z = nt.night ? 0.82 : nt.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < it; Y++) {
      const P = J / 46 * (nt.k === "partly" ? 1 : 0.8 + dt() * 0.4), xt = wt + (nt.k === "partly" ? y * 0.12 : ((Y + 0.5) / it - 0.5) * y * 0.95 + (dt() - 0.5) * y * 0.5 / it), Pt = (nt.k === "partly" ? 40 : 6 + dt() * 26) * M, ct = d ? 2.5 * Math.sin(V * F / 9e3 + K * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(V * F / 6100 + K + Y) : 0;
      G.clouds.push({ x: xt - 23 * P + ct, y: Pt - 15.33 * P + U, w: 46 * P, h: 30.66 * P, fill: st, o: Z * (it > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((nt, K) => {
    const N = Ol(p * 313 + K * 29 + 11), it = (K + 0.5) * y, dt = nt.cond === "pouring" ? 16 : nt.cond === "rainy" || nt.cond === "hail" ? 9 : nt.cond === "lightning-rainy" ? 12 : nt.cond === "snowy-rainy" ? 5 : 0;
    for (let st = 0; st < dt; st++) {
      let Z = it + (N() - 0.5) * y * 1.05, Y = 44 + N() * 36, P = 1;
      if (d) {
        const Pt = ((Y - 44 + F * 0.04) % 36 + 36) % 36;
        Z -= 0.21 * (Pt - (Y - 44)), Y = 44 + Pt, P = Math.min(1, Pt / 6, (36 - Pt) / 6);
      }
      Y *= M;
      const xt = b(nt.night, Z, Y) * P;
      xt >= 0.05 && G.drops.push({ x: Z, y: Y, o: xt });
    }
    const wt = nt.cond === "snowy" ? 11 : nt.cond === "snowy-rainy" ? 6 : 0;
    for (let st = 0; st < wt; st++) {
      let Z = it + (N() - 0.5) * y * 1.05, Y = 40 + N() * 44, P = 1;
      if (d) {
        const Pt = ((Y - 40 + F * 9e-3) % 44 + 44) % 44;
        Y = 40 + Pt, Z += 1.6 * Math.sin(V * F / 2800 + st * 1.9 + K), P = Math.min(1, Pt / 6, (44 - Pt) / 6);
      }
      Y *= M;
      const xt = b(nt.night, Z, Y) * P;
      xt >= 0.05 && G.flakes.push({ x: Z, y: Y, o: xt });
    }
    if (nt.k === "fog") {
      const st = nt.night ? "#c8ccd6" : "#ffffff", Z = nt.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(V * F / 8e3 + K) : 0;
      for (let P = 0; P < 4; P++) G.fogs.push({ x: it - y * 0.75 + P % 2 * y * 0.18 + (P % 2 ? Y : -Y), y: (30 + P * 13) * M, w: y * 1.3, c: st, a: Z });
    }
    if (nt.k === "storm") {
      const st = (F / 3400 + K * 0.37) % 1;
      G.bolts.push({ x: it + (N() - 0.5) * y * 0.3 - 5, y: 36 * M, o: d && !(st < 0.05 || st > 0.09 && st < 0.12) ? 0.8 : 1 });
    }
  }), G;
}
function um(n, i, d, p, g, y, b, A) {
  const { S: V, C: M, cw: L, yb: F, glowAt: G, soft: J, tw: ot, sy: nt } = n, K = new Array(d * p), N = new Uint8Array(d * p), it = new Uint8Array(d * p), dt = (W, Q, T, ft, rt) => {
    T == null || W < 0 || Q < 0 || W >= d || Q >= p || (ft >= 1 || ft > qo(W + 5, Q + 3)) && (K[Q * d + W] = T, N[Q * d + W] = rt);
  }, wt = (W, Q, T, ft) => {
    for (let rt = Math.max(0, Math.floor(Q - T) - 1); rt <= Math.min(p - 1, Q + T + 1); rt++) for (let lt = Math.max(0, Math.floor(W - T) - 1); lt <= Math.min(d - 1, W + T + 1); lt++) ft(lt, rt, lt + 0.5 - W, rt + 0.5 - Q);
  }, st = (W, Q, T) => {
    for (let rt = 0; rt < W.length - 1; rt++) {
      const lt = (rt + Q) * L;
      if (T < lt - ot / 2) return [W[rt], W[rt], 0];
      if (T <= lt + ot / 2) return [W[rt], W[rt + 1], (T - lt + ot / 2) / ot];
    }
    const ft = W[W.length - 1];
    return [ft, ft, 0];
  }, Z = V.filter((W) => !W.night).map((W) => W.sky), Y = V.filter((W) => W.night).map((W) => W.sky), P = J / y, xt = 16 * nt / y;
  for (let W = 0; W < d; W++) {
    const Q = (W + 0.5) * g, T = F(Q) / y, ft = st(Z, 0.75, Q), rt = st(Y, 1.25, Q), lt = G(Q);
    for (let vt = 0; vt < p; vt++) {
      const ht = qo(W, vt), _t = vt + 0.5 - T, Vt = (P > 0.01 ? Vo(0.5 + _t / P) : _t > 0 ? 1 : 0) > ht;
      let ae = Vt ? ft[2] > ht ? ft[1] : ft[0] : rt[2] > ht ? rt[1] : rt[0];
      (Vt ? Vo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : Vo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > qo(W + 2, vt + 5) && (ae = Vt ? Ia(ae, "#ffffff", 0.18) : Ia(ae, "#000000", 0.25)), Vt && _t >= 0 && _t < xt && lt.a * 1.3 * (1 - _t / xt) > qo(W + 6, vt + 1) && (ae = lt.c), K[vt * d + W] = ae, it[vt * d + W] = Vt ? 0 : 1;
    }
  }
  const Pt = Ia(M.sun, "#ffffff", 0.55), ct = Ia(M.moon, "#ffffff", 0.6);
  i.stars.forEach((W) => {
    const Q = Math.floor(W.x / g), T = Math.floor(W.y / y);
    if (Q < 0 || T < 0 || Q >= d || T >= p || !it[T * d + Q] || W.o < 0.15) return;
    const ft = W.o > 0.45 ? M.star : Ia(M.star, K[T * d + Q], 0.5), rt = W.big && W.o > 0.6 ? Math.floor(W.size / g) : 0;
    dt(Q, T, ft, 1, cc);
    for (let lt = 1; lt <= rt; lt++) [[Q - lt, T], [Q + lt, T], [Q, T - lt], [Q, T + lt]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < d && vt[1] < p && it[vt[1] * d + vt[0]] && dt(vt[0], vt[1], ft, 1, cc);
    });
  }), i.suns.forEach((W) => {
    const Q = Math.max(1.5, W.rad / g), T = W.x / g, ft = W.y / y, rt = W.halo / g * 0.85;
    if (wt(T, ft, rt, (lt, vt, ht, _t) => {
      const Vt = Math.sqrt(ht * ht + _t * _t);
      Vt > Q && Vt < rt && !it[vt * d + lt] && dt(lt, vt, Pt, 0.3 * (1 - (Vt - Q) / (rt - Q)), 0);
    }), A) {
      const lt = Math.floor(b / 500) % 2, vt = Math.max(1, Q * 0.3);
      for (let ht = 0; ht < 8; ht++) if (ht % 2 === lt) for (let _t = Q + 1.2; _t < Q + 1.2 + vt; _t += 0.7) dt(Math.floor(T + Math.cos(ht * Math.PI / 4) * _t), Math.floor(ft + Math.sin(ht * Math.PI / 4) * _t), M.sun, 1, cu);
    }
    wt(T, ft, Q, (lt, vt, ht, _t) => {
      ht * ht + _t * _t <= Q * Q && dt(lt, vt, Vo(((_t / Q + 1) / 2 - 0.6) / 0.4) > qo(lt, vt) ? M.sunEdge : M.sun, 1, ru);
    });
  }), i.moons.forEach((W) => {
    const Q = Math.max(1.5, W.d * 0.37 / g), T = W.x / g, ft = W.y / y, rt = T + 0.547 * Q, lt = ft - 0.503 * Q, vt = 0.82 * Q;
    wt(T, ft, Q, (ht, _t, Vt, ae) => {
      if (Vt * Vt + ae * ae > Q * Q) return;
      const Ke = ht + 0.5 - rt, Sa = _t + 0.5 - lt;
      Ke * Ke + Sa * Sa > vt * vt && dt(ht, _t, Vo((ae + Q) / (2 * Q) * 1.1 - 0.1) > qo(ht, _t) ? M.moon : ct, 1, iu);
    });
  }), i.clouds.forEach((W) => {
    const Q = Math.max(3, W.w / g), T = Q * 0.6665, ft = W.x / g, rt = W.y / y, lt = Ia(W.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(rt) - 1); vt <= Math.min(p - 1, rt + T + 1); vt++) for (let ht = Math.max(0, Math.floor(ft) - 1); ht <= Math.min(d - 1, ft + Q + 1); ht++) {
      const _t = (ht + 0.5 - ft) / Q, Vt = (vt + 0.5 - rt) / Q;
      tp(_t, Vt) && dt(ht, vt, !tp(_t, Vt + 1 / Q) || Vo((Vt - 0.42) / 0.25) * 0.8 > qo(ht, vt) ? lt : W.fill, W.o, su);
    }
  }), i.fogs.forEach((W) => {
    const Q = Math.floor(W.y / y), T = Math.max(Q, Math.floor((W.y + 6 * nt) / y) - 1), ft = Math.floor(W.x / g), rt = Math.floor((W.x + W.w) / g);
    for (let lt = Q; lt <= T; lt++) for (let vt = ft; vt <= rt; vt++) {
      const ht = (vt - ft) / Math.max(1, rt - ft);
      dt(vt, lt, W.c, W.a * (ht < 0.25 ? ht / 0.25 : ht > 0.75 ? (1 - ht) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / y));
  i.drops.forEach((W) => {
    const Q = W.x / g, T = Math.floor(W.y / y);
    for (let ft = 0; ft < U; ft++) dt(Math.floor(Q - 0.208 * ft * y / g), T + ft, M.rain, W.o, lu);
  });
  const It = Math.max(0, Math.round(4.4 / g / 2.6));
  return i.flakes.forEach((W) => {
    const Q = Math.floor(W.x / g), T = Math.floor(W.y / y);
    dt(Q, T, M.snow, W.o, mr);
    for (let ft = 1; ft <= It; ft++)
      dt(Q - ft, T, M.snow, W.o, mr), dt(Q + ft, T, M.snow, W.o, mr), dt(Q, T - ft, M.snow, W.o, mr), dt(Q, T + ft, M.snow, W.o, mr);
  }), i.bolts.forEach((W) => {
    if (g <= 3.5)
      for (let Q = Math.floor(W.y / y); Q <= (W.y + 24) / y; Q++) for (let T = Math.floor(W.x / g); T <= (W.x + 11) / g; T++)
        am(dm, (T + 0.5) * g - W.x, (Q + 0.5) * y - W.y) && dt(T, Q, M.sun, 1, ms);
    else {
      const Q = Math.round(W.x / g), T = Math.round(W.y / y);
      pm.forEach((ft, rt) => ft.split("").forEach((lt, vt) => {
        lt === "#" && dt(Q + vt, T + rt, M.sun, 1, ms);
      }));
    }
  }), { col: K, ids: N };
}
function fm(n, i) {
  const d = i.px, p = Math.max(6, Math.round(i.width / d)), g = Math.max(6, Math.round(i.height / d)), y = i.width / p, b = i.height / g, A = i.ambient ? Math.floor((i.clock || 0) / 100) * 100 : 0, V = (J) => {
    const ot = du(J, i);
    return um(ot, pu(ot, { clock: A, ambient: i.ambient, seed: i.seed }), p, g, y, b, A, i.ambient);
  }, M = V(n), L = i.reveal == null ? 1 : Vo(i.reveal);
  let F = M.col, G = M.ids;
  if (L < 1) {
    const J = i.prev ? V(i.prev) : null, ot = L * (p + 12);
    F = new Array(p * g), G = new Uint8Array(p * g);
    for (let nt = 0; nt < p * g; nt++) {
      const K = nt % p, N = nt / p | 0;
      (i.reduce ? L : Vo((ot - K) / 12)) > qo(K, N) ? (F[nt] = M.col[nt], G[nt] = M.ids[nt]) : J ? (F[nt] = J.col[nt], G[nt] = J.ids[nt]) : (F[nt] = null, G[nt] = 255);
    }
  }
  return om(F, G, p, g, { oneBit: i.oneBit, ink: i.ink || "#26221e", paper: i.paper || "#fbf9f6", snowInk: !1 });
}
function hm(n, i, d) {
  const p = d.width, g = d.height, y = d.reveal == null ? 1 : Vo(d.reveal), b = (G, J) => {
    const ot = du(J, d);
    mm(G, ot, pu(ot, d));
  };
  if (n.clearRect(0, 0, p, g), y >= 1) {
    b(n, i);
    return;
  }
  if (d.prev && b(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = y, b(n, i), n.restore();
    return;
  }
  const A = n.canvas, V = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (V.width !== A.width || V.height !== A.height) && (V.width = A.width, V.height = A.height);
  const M = V.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, p, g), b(M, i);
  const L = y * (p + 64) - 64, F = M.createLinearGradient(L, 0, L + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, p, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(V, 0, 0), n.restore();
}
function mm(n, i, d) {
  const { W: p, H: g, S: y, C: b, cw: A, yb: V, glowAt: M, soft: L, tw: F, sy: G } = i, J = n.getTransform().a || 1, ot = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * J : 0, n.shadowOffsetY = U ? 1.5 * J : 0;
  }, nt = (U, It) => {
    const W = ds(U);
    return "rgba(" + W[0] + "," + W[1] + "," + W[2] + "," + Math.max(0, Math.min(1, It)).toFixed(3) + ")";
  }, K = (U, It) => {
    const W = n.createLinearGradient(0, 0, p, 0);
    W.addColorStop(0, U[0]);
    for (let Q = 0; Q < U.length - 1; Q++) {
      const T = (Q + It) * A, ft = (T - F / 2) / p, rt = (T + F / 2) / p;
      ft > 0 && ft < 1 && W.addColorStop(ft, U[Q]), rt > 0 && rt < 1 && W.addColorStop(rt, U[Q + 1]);
    }
    return W.addColorStop(1, U[U.length - 1]), W;
  }, N = Math.max(24, Math.ceil(p / 4)), it = (U, It) => {
    n.beginPath();
    for (let W = 0; W <= N; W++) {
      const Q = p * W / N, T = U == null ? 0 : V(Q) + U;
      W ? n.lineTo(Q, T) : n.moveTo(Q, T);
    }
    for (let W = N; W >= 0; W--) {
      const Q = p * W / N;
      n.lineTo(Q, V(Q) + It);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = K(y.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const dt = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const It = M(p * U / 64);
    dt.addColorStop(U / 64, nt(It.c, Math.min(1, It.a)));
  }
  n.fillStyle = dt;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, it(U * 2 * G, (U + 1) * 2 * G);
  n.fillStyle = K(y.filter((U) => U.night).map((U) => U.sky), 1.25);
  const wt = Math.max(0.5, L), st = 6;
  n.globalAlpha = 1, it(null, -wt);
  for (let U = 0; U < st; U++)
    n.globalAlpha = 1 - (U + 0.5) / st, it(-wt + 2 * wt * U / st, -wt + 2 * wt * (U + 1) / st);
  n.globalAlpha = 1;
  const Z = new Path2D(lm), Y = new Path2D(sm), P = new Path2D(im), xt = new Path2D(cm);
  n.fillStyle = b.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Pt = Ia(b.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const It = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    It.addColorStop(0, nt(Pt, 0.42)), It.addColorStop(0.7, nt(Pt, 0)), n.fillStyle = It, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const W = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    W.addColorStop(0.6, b.sun), W.addColorStop(1, b.sunEdge), n.fillStyle = W, ot(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), ot(!1);
  });
  const ct = Ia(b.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const It = n.createLinearGradient(0, 6, 0, 40);
    It.addColorStop(0, ct), It.addColorStop(1, b.moon), n.fillStyle = It, ot(!0), n.fill(Y), ot(!1), n.restore();
  }), d.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, ot(!0), n.fill(P), ot(!1), n.restore();
  }), d.fogs.forEach((U) => {
    const It = n.createLinearGradient(U.x, 0, U.x + U.w, 0);
    It.addColorStop(0, nt(U.c, 0)), It.addColorStop(0.25, nt(U.c, U.a)), It.addColorStop(0.75, nt(U.c, U.a)), It.addColorStop(1, nt(U.c, 0)), n.fillStyle = It, n.fillRect(U.x, U.y, U.w, 6 * G);
  }), n.fillStyle = b.rain, d.drops.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = b.snow, d.flakes.forEach((U) => {
    n.globalAlpha = U.o, n.beginPath(), n.arc(U.x, U.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = b.sun, d.bolts.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.fill(xt), n.restore();
  }), n.restore();
}
const gm = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", dr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Xi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Il = (n, i) => '<path class="' + i + '" d="' + n + '"/>', bm = (n, i) => ' style="animation-delay:-' + Math.round(n * 137 % i) + 'ms"', Ha = (n, i, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + bm(n, 2400) + ' d="M' + n + " " + (i - d) + "L" + (n + g) + " " + (i - g) + "L" + (n + d) + " " + i + "L" + (n + g) + " " + (i + g) + "L" + n + " " + (i + d) + "L" + (n - g) + " " + (i + g) + "L" + (n - d) + " " + i + "L" + (n - g) + " " + (i - g) + 'Z"/>';
}, ep = ([n, i, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + i + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', wm = (n, i) => i ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vm = (n) => (n ? ["29.35", "43.04", "56.74"].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), ym = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + i + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function xm(n, i, d, p) {
  const g = (y) => '<g filter="url(#' + p + '-sh)">' + y + "</g>";
  return n === "clear" ? i ? g(ep(d ? Xi.l : Xi.s, p)) + (d ? Ha(70, 20, 5.83, 1) + Ha(78.33, 41.67, 3.75, 0.8) + Ha(60, 71.67, 3.33, 0.6) : Ha(42, 12, 3.5, 1) + Ha(47, 25, 2.25, 0.8) + Ha(36, 43, 2, 0.6)) : g(wm(p, d)) : n === "partly" ? g(i ? ep(d ? Xi.lp : Xi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Il(d ? dr.lp : dr.sp, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ha(73.33, 16.67, 4.17, 0.9) : Ha(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Il(d ? dr.lc : dr.s, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ha(15, 15, 3.75, 0.8) + Ha(76.67, 13.33, 2.92, 0.6) : Ha(9, 9, 2.25, 0.8) + Ha(46, 8, 1.75, 0.6) : "") : g(Il(d ? dr.lr : dr.s, "wbCloudLight")) + (n === "rain" ? vm(d) : ym(d));
}
const Mm = (n, i) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (i ? 1.6 : 1) + '" stdDeviation="' + (i ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function km(n, i, d, p) {
  let g = gm(n);
  const y = g === "night" || !!d;
  g === "night" && (g = "clear");
  const b = i ? 90 : 54;
  return { k: g, night: y, svg: '<svg viewBox="0 0 ' + b + " " + b + '">' + Mm(p, i) + xm(g, y, i, p) + "</svg>" };
}
const Sm = [
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
], Ji = (n, i) => (Sm[i % 8 * 8 + n % 8] + 0.5) / 64, Ka = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], $e = (n, i, d) => [Math.round(n[0] + (i[0] - n[0]) * d), Math.round(n[1] + (i[1] - n[1]) * d), Math.round(n[2] + (i[2] - n[2]) * d)], Qr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, ap = (n, i) => {
  let d = n * 374761393 + i * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Fn = [255, 255, 255], aa = Ka("#26221e"), op = Ka("#0288d1"), _m = Ka("#01579b"), Fl = Ka(Fa.cloudDay), ql = Ka(Fa.cloudNight), Qi = Ka(Fa.dusk), Wl = Ka(Fa.sunEdge), Cm = Ka(Fa.sun), Am = 10, np = 0.3, jo = 56, uu = 21;
function Tm(n) {
  const i = Array.from({ length: uu }, () => new Array(jo).fill(void 0)), d = (b, A, V) => {
    i[A][b] = V;
  }, p = $e(Qi, aa, 0.35), g = $e(aa, Fn, 0.22);
  for (let b = 0; b <= 6; b++) {
    const A = b < 2 ? jo - 2 : jo - 1;
    for (let V = 6 - b; V <= A; V++) d(V, b, b < 2 ? p : b === 6 ? g : aa);
  }
  const y = [Qi, Wl, ql, Ka(Fa.skyRainDay), $e(Qi, aa, 0.2), $e(n, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((b, A) => {
    const V = 9 + A * 6;
    for (let M = 0; M < b; M++) {
      const L = y[(A * 2 + M * 3) % y.length];
      for (let F = V; F < V + 5; F++)
        d(F, 7 + M * 2, $e(L, aa, 0.12)), d(F, 8 + M * 2, M === b - 1 ? $e(L, Fn, 0.3) : L);
      d(V + 5, 7 + M * 2, aa), d(V + 5, 8 + M * 2, aa);
    }
  });
  for (let b = 7; b <= 12; b++) d(5, b, aa);
  d(5, 13, Wl);
  for (let b = 7; b <= 14; b++) for (let A = 42; A <= 51; A++) d(A, b, A === 51 ? ql : Fl);
  for (let b = 43; b <= 50; b += 2)
    d(b, 12, aa), d(b, 9, $e(aa, Fl, 0.4));
  for (let b = 40; b <= 53; b++) d(b, 14, b === 40 || b === 53 ? ql : Fl);
  for (let b = 15; b <= 18; b++) for (let A = 46; A <= 49; A++) d(A, b, b === 18 ? aa : b === 16 ? Wl : Qi);
  for (let b = 15; b <= 19; b++) d(44, b, aa);
  return d(44, 20, Cm), i;
}
function Lm(n, i, d, p) {
  const g = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(i)), b = new Uint8ClampedArray(g * y * 4), A = Ka(p.skyClearDay), V = Ka(p.skyFogDay), M = Tm(A), L = Math.round(y * 0.55), F = Qr(1 - Math.log(d / np) / Math.log(Am / np)), G = $e(A, V, F), J = (N) => Qr((N - 0.1) / 0.9), ot = Qr((1 - Math.exp(-2 / d) - 0.2) / 0.8), nt = Math.round(g / 2 - jo / 2), K = L + 3;
  for (let N = 0; N < y; N++) {
    const it = K - 1 - N, dt = N - K;
    for (let wt = 0; wt < g; wt++) {
      const st = wt - nt;
      let Z, Y;
      const P = it >= 0 && it < uu && st >= 0 && st < jo ? M[it][st] : void 0;
      if (P)
        Z = P, Y = ot;
      else if (it >= 0 && it <= 1 && st >= 4 - it && st <= 5 - it)
        Z = $e(Fn, op, 0.15), Y = ot;
      else if (N < L) {
        const ct = Qr(((N + 0.5) / L - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(ct + Ji(wt + 2, N + 5)));
        Z = $e(G, Fn, U * 0.1), Y = F * 0.95;
      } else {
        const ct = (N - L + 0.5) / (y - L), U = Math.min(1.5, 6e-3 / (ct * ct)), It = Qr(ct * 1.4) * 3, W = Math.min(3, Math.floor(It + Ji(wt + 1, N + 6)));
        Z = $e(op, _m, W / 3);
        const Q = 1 + Math.round(ct * 7), T = Math.floor(wt / (Q * 3)), ft = 0.06 + 0.16 * ct, rt = wt % (Q * 3) < Q;
        rt && ap(T, N) < ft ? Z = $e(Z, Fn, 0.18 + 0.1 * (1 - ct)) : rt && ct > 0.5 && ap(T, N - 1) < ft && (Z = $e(Z, aa, 0.12)), Y = J(1 - Math.exp(-U / d)), dt === 0 && st >= 3 && st <= 8 ? (Z = $e(Z, Fn, st < 6 ? 0.8 : 0.45), Y = ot) : dt >= 0 && dt <= 2 && st >= jo && st < jo + 40 ? ((1 - (st - jo) / 40) * (dt === 1 ? 0.9 : 0.5) > Ji(wt, N + 3) && (Z = $e(Z, Fn, 0.5)), Y = ot) : dt === 0 && st >= 6 && st < jo && (Z = $e(Z, aa, st % 2 === 0 ? 0.35 : 0.2), Y = ot);
      }
      const xt = Y > Ji(wt, N) ? V : Z, Pt = (N * g + wt) * 4;
      b[Pt] = xt[0], b[Pt + 1] = xt[1], b[Pt + 2] = xt[2], b[Pt + 3] = 255;
    }
  }
  return { data: b, w: g, h: y };
}
const Dm = {
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
}, Em = 1.6;
function Bm(n, i) {
  const d = n ? Dm[String(n).toUpperCase()] : void 0;
  if (!d || !(i > 0)) return;
  const p = (y) => Math.abs(Math.log(y[2] / i)), g = d.reduce((y, b) => p(b) < p(y) ? b : y);
  return p(g) <= Math.log(Em) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Rm = (n, i) => i === "mi" ? n * 1.609344 : i === "m" ? n / 1e3 : i === "ft" ? n * 3048e-7 : i === "yd" ? n * 9144e-7 : n, Pm = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", De = {
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
}, Ee = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Fe = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Hm() {
  const { pivot: n, slider: i, iconbtn: d, warp: p, outline: g } = De;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Ee[n.ease]],
    ["--ab-blur", i.glow + "px"],
    ["--ab-spread", i.spread + "px"],
    ["--ab-str", i.strength + "%"],
    ["--ab-blur2", i.glow + i.hold + "px"],
    ["--ab-spread2", i.spread + i.hold / 4 + "px"],
    ["--ab-str2", i.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (i.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", i.ein + "ms"],
    ["--ab-out", i.eout + "ms"],
    ["--ab-ease", Ee[i.ease]],
    ["--ih-s", d.scale / 100],
    ["--ih-p", d.press / 100],
    ["--ih-dur", d.dur + "ms"],
    ["--ih-ease", Ee[d.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", p.cdur + "ms"],
    ["--wc-delay", p.cdelay + "ms"],
    ["--wc-ease", Ee[p.ease]],
    ["--ol-esens", g.glowFrom],
    ["--ol-csens", g.colourFrom],
    ["--ol-cone", g.cone],
    ["--ol-glow", g.glow / 100],
    ["--ol-border", g.border / 100],
    ["--ol-fill", g.fill / 100],
    ["--ol-size", g.size / 100],
    ["--ol-h", g.hue + "deg"],
    ["--ol-in", g.fin + "ms"],
    ["--ol-out", g.fout + "ms"]
  ].map(([y, b]) => y + ":" + b).join(";");
}
const Vl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Nm = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", Om = 300, ps = (n) => Math.min(1, Om / Math.max(1, n)), jl = (n, i) => 1 + (i / 100 - 1) * ps(n.offsetWidth);
function Im(n, i) {
  i.style.cssText += ";" + Hm();
  let d = null;
  const p = (L) => {
    L.classList.remove("mvMoving", "mvLit"), L.style.setProperty("--rx", "0deg"), L.style.setProperty("--ry", "0deg"), L.style.setProperty("--sc", 1), L._down = !1;
  };
  n.addEventListener("pointermove", (L) => {
    var N, it;
    const F = L.pointerType === "touch" || Fe() ? null : (it = (N = L.target).closest) == null ? void 0 : it.call(N, Vl);
    if (d && d !== F && p(d), d = F, !F || F.disabled) return;
    const G = De.pivot, J = F.getBoundingClientRect(), ot = (L.clientX - J.left) / J.width, nt = (L.clientY - J.top) / J.height, K = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", G.persp / ps(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (K * (ot - 0.5) * 2 * G.tilt * ps(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (K * -(nt - 0.5) * 2 * G.tilt * ps(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (ot * 100).toFixed(1) + "%"), F.style.setProperty("--my", (nt * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", jl(F, G.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (L) => {
    d && !d.contains(L.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (L) => {
    var G, J;
    const F = Fe() ? null : (J = (G = L.target).closest) == null ? void 0 : J.call(G, Vl);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", jl(F, De.pivot.press)));
  }), n.addEventListener("pointerup", (L) => {
    var G, J;
    const F = (J = (G = L.target).closest) == null ? void 0 : J.call(G, Vl);
    F && (F._down = !1, F.style.setProperty("--sc", L.pointerType === "touch" ? 1 : jl(F, De.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (L) => {
    var F, G, J;
    L.pointerType !== "touch" && ((J = (G = (F = L.target).closest) == null ? void 0 : G.call(F, ".tfBar")) == null || J.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (L) => {
    var G, J;
    const F = (J = (G = L.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    F && !F.contains(L.relatedTarget) && F !== g && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (L) => {
    var G, J;
    const F = (J = (G = L.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    F && (g = F, F.classList.add("mvHold"));
  });
  const y = (L) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const F = g.getBoundingClientRect();
    (L.pointerType === "touch" || L.clientX < F.left || L.clientX > F.right || L.clientY < F.top || L.clientY > F.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), n.addEventListener("focusin", (L) => {
    var F, G;
    (G = (F = L.target).matches) != null && G.call(F, ".tfBar:focus-visible") && L.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (L) => {
    var F;
    (F = L.target.classList) == null || F.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (L) => {
    var G, J;
    const F = (J = (G = L.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    !F || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(L.key) || (F.classList.add("mvHold"), clearTimeout(F._k), F._k = setTimeout(() => F.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (L) => {
    var G, J;
    const F = (J = (G = L.target).closest) == null ? void 0 : J.call(G, "button.tfIcon[data-act]");
    F && Fm(F);
  });
  let b = null;
  const A = (L, F, G) => {
    L.querySelector(":scope>.mvEdge") || L.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = L.getBoundingClientRect(), ot = J.width / 2, nt = J.height / 2, K = F.clientX - J.left - ot, N = F.clientY - J.top - nt, it = K ? ot / Math.abs(K) : 1 / 0, dt = N ? nt / Math.abs(N) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(it, dt), 0), 1);
    let st = Math.atan2(N, K) * 180 / Math.PI + 90;
    st < 0 && (st += 360);
    const Z = G ? 100 : wt * 100;
    L.style.setProperty("--edge-proximity", Z.toFixed(3)), L.style.setProperty("--cursor-angle", st.toFixed(3) + "deg"), L.classList.toggle("mvLitEdge", G || Z >= De.outline.lightAt);
  }, V = (L) => {
    L.classList.remove("mvLitEdge"), L.style.setProperty("--edge-proximity", "0"), L._down = !1;
  }, M = (L) => {
    var G;
    const F = (G = L.closest) == null ? void 0 : G.call(L, Nm);
    return F && !i.classList.contains("tfEditing") ? F : null;
  };
  n.addEventListener("pointermove", (L) => {
    if (L.pointerType === "touch") return;
    const F = M(L.target);
    b && b !== F && V(b), b = F, F && !F._down && A(F, L, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (L) => {
    b && !b.contains(L.relatedTarget) && (V(b), b = null);
  }), n.addEventListener("pointerdown", (L) => {
    const F = M(L.target);
    F && De.outline.press && (F._down = !0, A(F, L, !0));
  }), n.addEventListener("pointerup", (L) => {
    const F = M(L.target);
    F && (F._down = !1, L.pointerType === "touch" ? V(F) : A(F, L, !1));
  }), new MutationObserver((L) => {
    var F;
    for (const G of L) {
      const J = G.target;
      if (G.type === "attributes") {
        (F = J.classList) != null && F.contains("tfMoreBackdrop") && !J.hidden && G.oldValue !== null && rp(J);
        continue;
      }
      G.addedNodes.forEach((ot) => {
        ot.nodeType === 1 && ot.classList.contains("tfMoreBackdrop") && !ot.hidden && rp(ot);
      });
    }
  }).observe(i, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const fu = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function hu(n, i) {
  const d = [];
  for (let p = n; p && p !== i && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const mu = (n, i) => i.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function Fm(n) {
  var J;
  if (Fe() || n._warp) return;
  const i = De.warp, d = i.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[i.style], y = "blur(" + 2 * d + "px)", b = n.getRootNode(), A = fu(n), V = (J = A.dataset) == null ? void 0 : J.k, M = hu(n, A), L = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: y }], { duration: i.win, easing: Ee.exit, fill: "forwards" }), G = performance.now();
  F.finished.then(() => {
    const ot = () => {
      var wt, st;
      const nt = V ? A.isConnected ? A : (wt = b.querySelector) == null ? void 0 : wt.call(b, '[data-k="' + CSS.escape(V) + '"]') : A, K = nt && mu(nt, M);
      if (K === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === L && performance.now() - G < 420) {
        requestAnimationFrame(ot);
        return;
      }
      (((st = K == null ? void 0 : K.matches) != null && st.call(K, "button.tfIcon") ? K : n).firstElementChild || p).animate([{ ...g, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: i.wout, easing: Ee[i.ease] }), F.cancel(), n._warp = 0;
    };
    ot();
  });
}
const gu = (n) => {
  let i = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], y = n[d + 1], b = n[d + 2] || y, A = [g[0] + (y[0] - p[0]) / 6, g[1] + (y[1] - p[1]) / 6], V = [y[0] - (b[0] - g[0]) / 6, y[1] - (b[1] - g[1]) / 6];
    i += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + V.map((M) => M.toFixed(1)).join(" ") + " " + y.map((M) => M.toFixed(1)).join(" ");
  }
  return i;
}, bu = (n, i, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const y = (i + (d - i) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function wu(n, i = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Fe() || !(i != null && i.getTotalLength)) return;
  const p = De.graphs, g = i.getTotalLength();
  i.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Ee.standard }), [...d].forEach((y, b) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + b * 12, easing: Ee.standard, fill: "backwards" }));
}
function us(n, i, d, p, g) {
  if (n.getAnimations().forEach((L) => L.cancel()), n.style.left = p + "px", n.style.width = g + "px", Fe() || i === p && d === g) return;
  const y = De.tabs, b = y.stretch / 100, A = (L, F) => ({ left: L + "px", width: F + "px" }), M = p > i ? A(i + (p - i) * (0.15 * (1 - b)), p + g - (i + (p - i) * (0.15 * (1 - b)))) : A(p, i + d - p - (i - p) * (0.15 * (1 - b)));
  n.animate([A(i, d), { offset: 0.5, ...M }, A(p, g)], { duration: y.dur, easing: Ee.standard });
}
function qm(n) {
  const i = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, y) => y ? [...g.children].indexOf(y) : -1;
  n.addEventListener("click", (g) => {
    var it, dt, wt;
    const y = (dt = (it = g.target).closest) == null ? void 0 : dt.call(it, i + ">button"), b = y == null ? void 0 : y.parentElement;
    if (!b || Fe() || y.disabled) return;
    const A = d(b);
    if (!A || A === y) return;
    const V = p(b, A), M = b.getBoundingClientRect(), L = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, G = b.getRootNode(), J = fu(b), ot = (wt = J.dataset) == null ? void 0 : wt.k, nt = hu(b, J), K = performance.now(), N = () => {
      var U, It, W;
      const st = ot && !J.isConnected ? (U = G.querySelector) == null ? void 0 : U.call(G, '[data-k="' + CSS.escape(ot) + '"]') : J, Z = st && mu(st, nt), Y = (It = Z == null ? void 0 : Z.matches) != null && It.call(Z, i) ? d(Z) : null;
      if (!Y || p(Z, Y) === V) {
        performance.now() - K < 700 && requestAnimationFrame(N);
        return;
      }
      const P = Z.getBoundingClientRect(), xt = Y.getBoundingClientRect(), Pt = getComputedStyle(Y);
      (W = Z.querySelector(":scope>.mvSegInd")) == null || W.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (xt.top - P.top - Z.clientTop) + "px;height:" + xt.height + "px;border-radius:" + F + ";background:" + Pt.backgroundColor + ";box-shadow:" + Pt.boxShadow, getComputedStyle(Z).position === "static" && (Z.style.position = "relative"), Z.prepend(ct), Z.classList.add("mvSegMoving"), us(ct, L.left - M.left - Z.clientLeft, L.width, xt.left - P.left - Z.clientLeft, xt.width), clearTimeout(Z._seg), Z._seg = setTimeout(() => {
        ct.remove(), Z.classList.remove("mvSegMoving");
      }, De.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const vu = (n) => getComputedStyle(n).placeItems.startsWith("end");
function rp(n) {
  const i = n.firstElementChild;
  if (Fe() || !i || i.classList.contains("still")) return;
  const d = De.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Ee.standard }), i.style.animation = "none", i.animate(vu(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Ee[d.ease] }), [...(i.classList.contains("tfMorePair") && i.querySelector(".tfMore") || i).children].forEach((g, y) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + y * 40, easing: Ee.standard, fill: "backwards" }));
}
function Wm(n, i) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (Fe() || !d || n.hidden || n._closing) {
    i();
    return;
  }
  const p = De.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  const g = d.animate(vu(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  let y = !1;
  const b = () => {
    y || (y = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), d.getAnimations().forEach((A) => A.cancel()), i());
  };
  g.finished.then(b, b), setTimeout(b, p.close + 80);
}
const Vm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function jm(n, i) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Vm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: i }));
}
function zm(n) {
  if (Fe()) return;
  const i = De.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: i.dur, easing: Ee.spring });
  const d = n.querySelector(".mvTick path");
  d && i.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: i.dur * 0.5, easing: Ee.standard, fill: "backwards" });
}
const zl = (n, i, d, p, g = 1) => (n + i * d * g) * Math.pow(p, g);
function Gl(n) {
  const i = De.drag.squash / 100;
  !n || Fe() || !i || n.animate([{ transform: "scale(" + (1 + i * 0.4) + "," + (1 - i) + ")" }, { transform: "scale(" + (1 - i * 0.1) + "," + (1 + i * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function ip(n) {
  if (!n || Fe()) return;
  const i = De.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: i.delay + p * i.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ie = 6e4, oe = 36e5, ha = 864e5, ni = 1440, Gm = 6, Um = 10 * Ie, sp = 3, Ym = 3, ts = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Zm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], $m = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", lp = (n, i, d, p) => '<circle cx="' + n + '" cy="' + i + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const y = Math.cos(g * Math.PI / 180), b = Math.sin(g * Math.PI / 180), A = d + 2, V = d + 2 + p;
  return "M" + (n + y * A).toFixed(2) + " " + (i + b * A).toFixed(2) + "L" + (n + y * V).toFixed(2) + " " + (i + b * V).toFixed(2);
}).join("") + '"/>', No = (n) => '<path d="' + $m + '"' + (n ? ' transform="' + n + '"' : "") + "/>", Oo = (n) => '<path d="' + n + '"/>', cp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Km(n, i) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return i ? cp : lp(12, 12, 4, 2.5);
    case "clear-night":
      return cp;
    case "partlycloudy":
      return (i ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : lp(7.5, 7.5, 2.6, 1.4)) + No("translate(3.6,3) scale(.85)");
    case "cloudy":
      return No();
    case "fog":
      return Oo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return No(d) + Oo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return No(d) + Oo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return No(d) + Oo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return No(d) + Oo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return No(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return No(d) + Oo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return No(d) + Oo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Oo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Oo("M12 8v5M12 16h.01");
  }
}
const Ul = (n, i) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Km(n, i) + "</svg>", Xm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Jm = 30 * Ie, Qm = 7, t0 = 3, dp = 1, e0 = Ie, a0 = 15 * Ie, o0 = 5, ne = {
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
}, dc = 7, Fo = 256, n0 = 3, pp = 700, r0 = 1800, yu = 5 * Ie;
let es = null, up = 0, ti = null;
function i0() {
  return es && Date.now() - up < yu ? Promise.resolve(es) : ti || (ti = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const i = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, n0);
    return es = { host: n.host, frames: [...i.map((y) => ({ ...y, past: !0 })), ...d] }, up = Date.now(), es;
  }).finally(() => {
    ti = null;
  }), ti);
}
function s0(n, i, d, p) {
  const g = dc, y = 2 ** g, b = n * Math.PI / 180, A = (i + 180) / 360 * y * Fo, V = (1 - Math.log(Math.tan(b) + 1 / Math.cos(b)) / Math.PI) / 2 * y * Fo, M = A - d / 2, L = V - p / 2, F = [];
  for (let G = Math.floor(M / Fo); G <= Math.floor((M + d - 1) / Fo); G++) for (let J = Math.floor(L / Fo); J <= Math.floor((L + p - 1) / Fo); J++)
    J < 0 || J >= y || F.push({ x: (G % y + y) % y, y: J, left: G * Fo - M, top: J * Fo - L });
  return F;
}
const l0 = {
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
}, c0 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], d0 = Object.keys(gt.phases), p0 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, fp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, xu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], as = 100, hp = "µg/m³", u0 = "weather_alerts.air_quality_pollen", gs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], f0 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, h0 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], m0 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, g0 = { daily: 1, hourly: 2 }, yt = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), Ze = (n, i) => n.replace(/\{(\w+)\}/g, (d, p) => i[p] ?? ""), Wo = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', mp = /* @__PURE__ */ new Map();
function Mu(n) {
  let i = mp.get(n);
  if (i === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const y = g.getBBox();
    p.remove();
    const b = Math.max(y.width, y.height), A = b ? 26 * 24 / b : 0, V = A / 24;
    i = b ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * V).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * V).toFixed(2) + "px" : "", mp.set(n, i);
  }
  return i ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + i + '"><path d="' + n + '"/></svg>' : Wo(n);
}
const b0 = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ue = (n) => n != null && n !== "" && Number.isFinite(Number(n)), gp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new WeakMap(), w0 = (n) => {
  switch (n == null ? void 0 : n.number_format) {
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
      return n == null ? void 0 : n.language;
  }
};
function Xt(n, i, d) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (i == null ? void 0 : i.number_format) === "none", y = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, b = g ? "en-US" : w0(i), A = JSON.stringify([b, y]);
  let V = gp.get(A);
  if (!V) {
    try {
      V = new Intl.NumberFormat(b, y);
    } catch {
      V = new Intl.NumberFormat(void 0, y);
    }
    gp.set(A, V);
  }
  return V.format(p);
}
const uc = (n) => {
  var i;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.language) || (n == null ? void 0 : n.language) || void 0;
};
function v0(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Yl.has(n)) return Yl.get(n);
  const i = n.time_format, d = i === "language" || i === "system" || !i ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(i === "language" ? n.language : void 0).includes("10") : i === "12";
  return Yl.set(n, d), d;
}
const ku = (n) => {
  var i, d;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function Su(n, i) {
  const d = JSON.stringify([n, i]);
  let p = bp.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, i);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...i, timeZone: void 0 });
    }
    bp.set(d, p);
  }
  return p;
}
const Ue = (n, i) => Su(uc(i), { hour: "numeric", minute: "2-digit", hourCycle: v0(i == null ? void 0 : i.locale) ? "h12" : "h23", timeZone: ku(i) }).format(n), wp = (n, i) => Su(uc(i), { weekday: "short", timeZone: ku(i) }).format(n), y0 = (n, i) => n.toLocaleDateString(uc(i), { weekday: "narrow" }), ve = (n, i) => ue(i) ? Xt(Math.round(Number(i)), n.locale) + "°" : "–", on = (n) => {
  const i = new Date(n);
  return i.setHours(0, 0, 0, 0), i;
}, pr = (n, i) => n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate(), oa = Math.PI / 180, x0 = 2440588, M0 = 2451545, bs = oa * 23.4397, k0 = 149598e3, S0 = -0.833 * oa, _0 = 0.133 * oa, vp = 5 * Ie, _u = (n) => n.getTime() / ha - 0.5 + x0 - M0, Cu = (n, i) => Math.atan2(Math.sin(n) * Math.cos(bs) - Math.tan(i) * Math.sin(bs), Math.cos(n)), Au = (n, i) => Math.asin(Math.sin(i) * Math.cos(bs) + Math.cos(i) * Math.sin(bs) * Math.sin(n)), C0 = (n, i) => oa * (280.16 + 360.9856235 * n) - i, A0 = (n, i, d) => Math.asin(Math.sin(i) * Math.sin(d) + Math.cos(i) * Math.cos(d) * Math.cos(n));
function Tu(n) {
  const i = oa * (357.5291 + 0.98560028 * n), d = oa * (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)), p = i + d + oa * 102.9372 + Math.PI;
  return { ra: Cu(p, 0), dec: Au(p, 0), dist: k0 };
}
function Lu(n) {
  const i = oa * (218.316 + 13.176396 * n), d = oa * (134.963 + 13.064993 * n), p = oa * (93.272 + 13.22935 * n), g = i + oa * 6.289 * Math.sin(d), y = oa * 5.128 * Math.sin(p);
  return { ra: Cu(g, y), dec: Au(g, y), dist: 385001 - 20905 * Math.cos(d) };
}
const Du = (n, i, d, p) => {
  const g = _u(i), y = n(g);
  return A0(C0(g, oa * -p) - y.ra, oa * d, y.dec);
}, ws = (n, i, d) => Du(Tu, n, i, d), T0 = (n, i, d) => Du(Lu, n, i, d);
function Eu(n, i, d, p) {
  const g = {};
  let y = d.getTime(), b = n(d) - i;
  for (let A = y + vp; A <= p.getTime(); A += vp) {
    const V = n(new Date(A)) - i;
    if (b < 0 != V < 0) {
      const M = new Date(y + (A - y) * b / (b - V));
      V > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    y = A, b = V;
  }
  return g;
}
const Bu = (n) => {
  const i = on(n);
  return [i, new Date(i.getTime() + ha)];
}, L0 = (n, i, d) => Eu((p) => ws(p, i, d), S0, ...Bu(n)), D0 = (n, i, d) => Eu((p) => T0(p, i, d), _0, ...Bu(n));
function Zl(n) {
  const i = _u(n), d = Tu(i), p = Lu(i), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), y = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), b = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (b < 0 ? -1 : 1) / Math.PI };
}
const E0 = (n) => {
  const i = n * 28;
  return i < 0.5 || i > 27.5 ? "new_moon" : i < 6.5 ? "waxing_crescent" : i < 7.5 ? "first_quarter" : i < 13.5 ? "waxing_gibbous" : i < 14.5 ? "full_moon" : i < 20.5 ? "waning_gibbous" : i < 21.5 ? "last_quarter" : "waning_crescent";
}, gr = (n) => {
  const i = n == null ? void 0 : n.config;
  return i && ue(i.latitude) && ue(i.longitude) ? { lat: Number(i.latitude), lon: Number(i.longitude) } : null;
};
function ur(n, i) {
  var M, L, F;
  const d = gr(n), p = d ? L0(i, d.lat, d.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], y = on(i).getTime(), b = (G) => {
    const J = G ? new Date(G) : null;
    return J && Number.isFinite(J.getTime()) && on(J).getTime() === y ? J : null;
  }, A = b((L = g == null ? void 0 : g.attributes) == null ? void 0 : L.next_rising), V = b((F = g == null ? void 0 : g.attributes) == null ? void 0 : F.next_setting);
  return A && (p.rise = A), V && (p.set = V), p;
}
function B0(n) {
  var p;
  const i = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((i == null ? void 0 : i.state) === "below_horizon" || (i == null ? void 0 : i.state) === "above_horizon") return i.state === "below_horizon";
  const d = gr(n);
  return d ? ws(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const qn = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", br = (n, i) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[i];
  return !d || !d.hidden && !d.entity_category;
}, Pe = (n, i, d) => {
  var p, g;
  for (const y of i) {
    const b = (p = n.states) == null ? void 0 : p[y];
    if (!qn(b)) continue;
    const A = (g = b.attributes) == null ? void 0 : g[d];
    if (A != null && A !== "") return { stateObj: b, value: A };
  }
}, R0 = (n, i) => i.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(qn), P0 = (n, i, d) => i.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return qn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & g0[d]);
});
function an(n, i, d) {
  var y, b, A, V;
  const p = ((b = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : b.length) || "", g = (i == null ? void 0 : i.attributes) || {};
  switch (d) {
    case "precipitation":
      return g.precipitation_unit || (p === "km" ? "mm" : "in");
    case "pressure":
      return g.pressure_unit || (p === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return g.wind_speed_unit || p + "/h";
    case "visibility":
      return g.visibility_unit || p;
    default:
      return g.temperature_unit || ((V = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : V.temperature) || "";
  }
}
function fs(n, i, d, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...y] = n.formatEntityAttributeValueToParts(i, d, p).map((b) => b.value);
      return { number: g, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: Xt(p, n.locale), unit: an(n, i, d) };
}
function yp(n, i, d, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(i, d, p);
  } catch {
  }
  const g = fs(n, i, d, p);
  return (g.number + " " + g.unit).trim();
}
function Io(n, i) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(i);
  } catch {
  }
  const d = (p = i.attributes) == null ? void 0 : p.unit_of_measurement;
  return l0[i.state] || (d && ue(i.state) ? Xt(i.state, n.locale) + " " + d : i.state);
}
function tn(n, i) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(i, { type: "entity" });
  } catch {
  }
  return ((d = i.attributes) == null ? void 0 : d.friendly_name) || i.entity_id;
}
const xp = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", os = (n) => xu.find(([, i]) => n <= i)[0];
function H0(n, i) {
  if (i === "Beaufort") return Math.round(n);
  const d = i ? f0[i] : void 0;
  if (d === void 0) return;
  const p = h0.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const Mp = (n, i) => {
  const d = i ? m0[i] : void 0;
  return d === void 0 ? void 0 : n * d;
}, kp = (n) => Object.keys(n.states || {}).find((i) => {
  var d, p;
  return i.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[i]) == null ? void 0 : p.platform) === "moon";
}), $l = (n) => Object.values(n.states || {}).filter((i) => {
  var d, p;
  return i.entity_id.startsWith("sensor.") && ((d = i.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = i.attributes) == null ? void 0 : p.state_class) ?? "") && br(n, i.entity_id);
}).map((i) => i.entity_id).sort()[0];
function N0(n) {
  var d;
  const i = {};
  for (const [p, g] of Object.entries(((d = n == null ? void 0 : n.core) == null ? void 0 : d.integration) ?? {})) {
    if (g && "integration_type" in g) {
      i[p] = g.categories;
      continue;
    }
    for (const [y, b] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) i[y] = b == null ? void 0 : b.categories;
  }
  return i;
}
const Ru = (n, i, d) => {
  var g, y, b;
  const p = (y = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : y.platform;
  return !!p && !!((b = i[p]) != null && b.includes(u0));
};
function O0(n, i) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && gs.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && br(n, p.entity_id) && Ru(n, i, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), gs.map((p) => d.get(p)).filter(Boolean);
}
const I0 = (n, i) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && br(n, d.entity_id) && Ru(n, i, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function Sp(n, i, d) {
  const p = Math.max(i - n, 1e-6), g = d[d.length - 1], y = d.find((M) => p / M <= 4) ?? g * Math.ceil(p / (4 * g)), b = Math.floor(n / y) * y;
  let A = Math.ceil(i / y) * y;
  A === b && (A = b + y);
  const V = [];
  for (let M = b; M <= A + y / 1e3; M += y) V.push(M);
  return { min: b, max: A, ticks: V };
}
const F0 = (n, i, d) => {
  const p = (b) => [1, 3, 5].map((A) => parseInt(b.slice(A, A + 2), 16)), g = p(n), y = p(i);
  return "rgb(" + g.map((b, A) => Math.round(b + (y[A] - b) * d)).join(", ") + ")";
}, q0 = (n, i, d, p) => {
  const g = d * Math.abs(1 - 2 * p), y = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (i - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (i + d) + " A " + g + " " + d + " 0 0 " + y + " " + n + " " + (i - d) + " Z";
}, ea = ({ icon: n, name: i, sub: d, visual: p, double: g, backdrop: y, cls: b, zone: A, callouts: V }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (b ? " " + b : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Mu(n) + '</div><div class="wbText"><span class="wbName">' + yt(i) + "</span>" + (d ? '<span class="wbSub">' + yt(d) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (V != null && V.length ? '<div class="wbCallouts">' + V.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + yt(M[0]) + "</span><span>" + yt(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", ns = (n) => '<div class="wbZoneM">' + n + "</div>", Na = (n, i) => '<div class="wbValue"><span class="wbNum">' + yt(n) + "</span>" + (i ? '<span class="wbUnitV">' + yt(i) + "</span>" : "") + "</div>";
function W0(n) {
  const i = n.max - n.min || 1, d = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / i * 100, p = (A) => A / ni * 100 + "%", g = (A) => A.map((V) => V.t + "," + d(V.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let b = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + p(A.t) + '">' + Wo(A.rise ? ne.sunsetUp : ne.sunsetDown) + yt(A.label) + "</span>").join("") + "</div>";
  return b += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + d(A) + '%">' + yt(n.format(A)) + "</span>").join("") + "</div>", b += '<div class="wbDcPlot"><svg viewBox="0 0 ' + ni + ' 100" preserveAspectRatio="none">' + n.night.map(([A, V]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (V - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + ni + '" y1="' + d(A) + '" y2="' + d(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + g(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + p(A.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + yt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + yt(n.note) + "</span>" : "") + "</div>", b += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + p(A.t) + '">' + yt(A.label) + "</span>").join("") + "</div></div>", b;
}
function _p(n, i, d = 120, p = 300) {
  const b = n.map((N) => N.value), A = Math.min(...b), V = Math.max(...b), M = V - A || 1, L = (N) => N / (n.length - 1) * p, F = (N) => 18 + (1 - (N - A) / M) * (d - 18 - 18), G = n.map((N, it) => [L(it), F(N.value)]), J = G.length > 2 ? gu(G) : "M" + G.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), ot = b.indexOf(V), nt = b.indexOf(A), K = (N) => N === 0 ? "start" : N === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + bu(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + L(ot) + '" y="' + (F(V) - 6) + '" text-anchor="' + K(ot) + '">' + yt(i(V)) + '</text><text x="' + L(nt) + '" y="' + (F(A) + 14) + '" text-anchor="' + K(nt) + '">' + yt(i(A)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + yt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + yt(n[n.length - 1].label) + "</text></svg>";
}
function V0(n, i) {
  const y = n.map((F) => F.value).concat([]), b = Math.min(...y) - 2, A = Math.max(...y) + 1, V = A - b || 1, M = 300 / n.length, L = (F) => (1 - (F - b) / V) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, G) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (G * M + M * 0.2) + '" y="' + L(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - L(F.value)) + '" rx="6"></rect><text x="' + (G * M + M / 2) + '" y="120" text-anchor="middle">' + yt(F.label) + "</text>").join("") + "</svg>";
}
const j0 = [
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
], z0 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Cp = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], G0 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let U0 = 0;
function Ap(n, { getHass: i, entityId: d, style: p = "bitmap", motion: g = !0, cards: y, onOpen: b, hoursWindow: A, radarSource: V } = {}) {
  var ro, Zo;
  const M = "wb" + ++U0 + "-", L = document.createElement("div");
  L.className = "wb", L.dataset.style = p;
  const F = document.createElement("div");
  F.className = "wbBento", L.appendChild(F), n.replaceChildren(L);
  const G = document.createElement("div");
  G.className = "wb wbPopup", G.dataset.style = p, G.hidden = !0;
  const J = ["aq_tile", "pollen_tile", "radar_tile"], ot = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !y || y.includes(s)), nt = { current: "wide", hourly: "wide", compared_to_average: "double" }, K = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  ot.forEach((s) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = s, h.dataset.size = nt[s] || "tile", h.hidden = !0, K.includes(s) && (h.dataset.xl = ""), F.appendChild(h), N[s] = { el: h, html: null };
  });
  let it = !1, dt = null, wt = 0, st = -1, Z = !1, Y = null, P = "";
  const xt = "homecore-next-view", Pt = (() => {
    try {
      return localStorage.getItem(xt);
    } catch {
      return null;
    }
  })(), ct = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Pt === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let It = /* @__PURE__ */ new Date(), W = /* @__PURE__ */ new Date();
  const Q = {}, T = {}, ft = {}, rt = (s) => {
    var h;
    return ((h = ft[s]) == null ? void 0 : h.forecast) ?? [];
  }, lt = (s, h) => {
    var m;
    return ft[h] ? (m = s.states) == null ? void 0 : m[ft[h].entityId] : void 0;
  };
  function vt(s) {
    const h = T[s];
    h && (h.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete T[s]), ft[s] && delete ft[s];
  }
  function ht(s, h, m) {
    var D;
    if (typeof ((D = s.connection) == null ? void 0 : D.subscribeMessage) != "function") return;
    const w = { entityId: m };
    try {
      w.unsub = Promise.resolve(s.connection.subscribeMessage((I) => {
        it || T[h] !== w || (I != null && I.forecast ? ft[h] = { entityId: m, forecast: I.forecast } : delete ft[h], fn());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: m }));
    } catch (I) {
      w.unsub = Promise.reject(I);
    }
    w.unsub.catch(() => {
      T[h] === w && delete T[h];
    }), T[h] = w;
  }
  function _t(s, h) {
    var m;
    for (const w of ["daily", "hourly"]) {
      const D = P0(s, h, w);
      ((m = T[w]) == null ? void 0 : m.entityId) !== (D == null ? void 0 : D.entity_id) && (vt(w), D && ht(s, w, D.entity_id));
    }
  }
  const Vt = (s, h, m, w = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [h],
    minimal_response: w,
    no_attributes: w,
    significant_changes_only: !1
  });
  async function ae(s, h) {
    var z, $, O;
    const m = Pe(s, h, "pressure");
    if (!m) return;
    const w = m.stateObj.entity_id, D = await Vt(s, w, new Date(Date.now() - 3 * oe)), I = (O = ($ = (z = D == null ? void 0 : D[w]) == null ? void 0 : z.find((X) => {
      var tt;
      return typeof ((tt = X.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : $.a) == null ? void 0 : O.pressure;
    U.pressureHistory = typeof I == "number" ? { entityId: w, value: I } : void 0;
  }
  async function Ke(s, h) {
    var $;
    const m = Pe(s, h, "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, D = on(/* @__PURE__ */ new Date()), I = await Vt(s, w, new Date(D.getTime() - Qm * ha)), z = /* @__PURE__ */ new Map();
    for (const O of (I == null ? void 0 : I[w]) ?? []) {
      const X = ($ = O.a) == null ? void 0 : $.temperature, tt = new Date((O.lc ?? O.lu) * 1e3);
      if (typeof X != "number" || tt >= D) continue;
      const mt = tt.toDateString();
      z.set(mt, Math.max(z.get(mt) ?? -1 / 0, X));
    }
    U.temperatureHistory = { entityId: w, dailyHighs: [...z.values()], days: [...z.entries()].map(([O, X]) => ({ date: new Date(O), high: X })) };
  }
  async function Sa(s) {
    const h = $l(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function Xa() {
    const s = i == null ? void 0 : i();
    if (!s || it || typeof s.callWS != "function") return;
    const h = et(s);
    U.lastFetch = Date.now(), [ae(s, h), Ke(s, h), Sa(s)].forEach((m) => m.then(() => fn(), () => {
    }));
  }
  async function _a() {
    const s = i == null ? void 0 : i();
    if (!s) return;
    const h = Pe(s, et(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, w = on(/* @__PURE__ */ new Date());
    try {
      const D = await Vt(s, m, w), I = (z) => ((D == null ? void 0 : D[m]) ?? []).map(($) => {
        var O;
        return { time: $.lu * 1e3, value: (O = $.a) == null ? void 0 : O[z] };
      }).filter(($) => typeof $.value == "number");
      U.todayHistory = { day: w.toDateString(), fetched: Date.now(), temperature: I("temperature"), humidity: I("humidity") }, fn();
    } catch {
    }
  }
  async function na(s) {
    const h = i == null ? void 0 : i();
    if (h)
      try {
        const m = await Vt(h, s, new Date(Date.now() - 24 * oe), !0), w = ((m == null ? void 0 : m[s]) ?? []).filter((I) => ue(I.s)), D = Math.max(1, Math.ceil(w.length / 48));
        U.aqHistory = { entityId: s, points: w.filter((I, z) => z % D === 0).map((I) => ({ label: Ue(new Date(I.lu * 1e3), h), value: Number(I.s) })) }, fn();
      } catch {
      }
  }
  function nn(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      U.categories = N0(h);
    }, () => {
      U.categories = {};
    }).then(() => fn()));
  }
  function et(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((w) => w.startsWith("weather.") && br(s, w)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((w) => w !== d)] : h;
  }
  const ye = (s) => U.categories ? { air: O0(s, U.categories), pollen: I0(s, U.categories) } : { air: [], pollen: [] };
  function Ja(s, h, m, w) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Ul(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const D = km(s, h === 90, m, M + "g-" + w);
      return '<span class="wbWx wbS' + h + " wb" + D.k[0].toUpperCase() + D.k.slice(1) + (D.night ? " wbNight" : "") + '" aria-hidden="true">' + D.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + yt(Qp(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const wr = () => rt("daily").filter((s) => s.templow != null).slice(0, Gm);
  function qa(s, h) {
    const m = new Date(h.datetime), w = /* @__PURE__ */ new Date();
    return pr(m, w) ? gt.today : pr(m, new Date(w.getTime() + ha)) ? gt.tomorrow : wp(m, s);
  }
  const rn = (s, h, m) => m === 0 ? qa(s, h) : wp(new Date(h.datetime), s);
  function xe(s, h) {
    var tt, mt, Ot, Et;
    const m = R0(s, h);
    if (!m) return "";
    const w = wr(), D = ct.openDay !== void 0 ? w[ct.openDay] : void 0, I = Pe(s, h, "temperature"), z = w[0], $ = z && pr(new Date(z.datetime), /* @__PURE__ */ new Date()), O = ((mt = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : mt.temperature) || ((Ot = m.attributes) == null ? void 0 : Ot.temperature_unit) || "";
    let X = '<div class="wbCard wbWeather' + (D ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (D ? " inert" : "") + '><div class="wbNow">' + (b ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(gt.openPage) + '">' : '<div class="wbCurrent">') + Ja(m.state, 90, B0(s), "now") + '<div class="wbTempBlock">' + (I && ue(I.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(Xt(Math.round(Number(I.value)), s.locale)) + '</span><span class="wbUnit">' + yt(O) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((Et = s.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (b ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(Io(s, m)) + "</div>" + ($ && z.templow != null ? '<div class="wbRange">' + yt(Ze(gt.range, { high: ve(s, z.temperature), low: ve(s, z.templow) })) + "</div>" : "") + "</div></div>";
    if (X += go(s) + vr(s), w.length) {
      const Ct = $ && I && ue(I.value) ? ve(s, I.value) : "", zt = (Lt, pt, Ht) => Lt === 0 && Ct ? '<span class="wbAsDay">' + yt(pt) + '</span><span class="wbAsNow">' + yt(Ht) + "</span>" : yt(pt);
      X += '<div class="wbColumns" role="list">' + w.map((Lt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + zt(pt, rn(s, Lt, pt), gt.now) + "</span>" + Ja(Lt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + zt(pt, ve(s, Lt.temperature), Ct) + '</span><span class="wbLo">' + yt(ve(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", X += '<div class="wbHalves" role="list">' + w.map((Lt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Ja(Lt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + yt(qa(s, Lt)) + '</span><span class="wbSub">' + yt(Ze(gt.highLow, { high: ve(s, Lt.temperature), low: ve(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return X + "</div>" + (D ? li(s, h, D) : "") + "</div>";
  }
  const si = {
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
  }, Ca = {
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
  function $t(s) {
    const h = Date.now(), m = rt("hourly").filter((mt) => new Date(mt.datetime).getTime() > h - oe).slice(0, 13);
    if (m.length < 2) return "";
    const w = (mt) => Ue(new Date(mt.datetime), s), D = (mt) => si[mt.condition] || "", I = (mt) => Ca[mt.condition] || mt.condition;
    let z = D(m[0]);
    if (!z) return "";
    let $ = m[0], O = 0;
    for (const mt of m.slice(1))
      O === 2 || I(mt) === I($) || !D(mt) || (z += (O ? " and " : ", ") + D(mt) + " from " + w(mt), $ = mt, O++);
    const X = Number(m[0].temperature), tt = m.filter((mt) => ue(mt.temperature));
    if (ue(X) && tt.length) {
      const mt = tt.reduce((Et, Ct) => Number(Ct.temperature) < Number(Et.temperature) ? Ct : Et), Ot = tt.reduce((Et, Ct) => Number(Ct.temperature) > Number(Et.temperature) ? Ct : Et);
      X - Number(mt.temperature) >= 3 ? z += ", down to " + ve(s, mt.temperature) + " by " + w(mt) : Number(Ot.temperature) - X >= 3 && (z += ", up to " + ve(s, Ot.temperature) + " by " + w(Ot));
    }
    return z[0].toUpperCase() + z.slice(1) + ".";
  }
  const go = (s) => {
    const h = $t(s);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + yt(h) + "</p></div>" : "";
  };
  function vr(s) {
    const [h, m] = ts[A == null ? void 0 : A()] || ts.day, w = Date.now(), D = rt("hourly").filter((I) => {
      const z = new Date(I.datetime), $ = z.getHours();
      return z.getTime() > w - oe / 2 && $ >= h && $ < m && ue(I.temperature);
    }).slice(0, 4);
    return D.length ? '<div class="wbNextHours" role="list">' + D.map((I, z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(Ue(new Date(I.datetime), s)) + "</span>" + Ja(I.condition ?? "cloudy", 40, I.is_daytime === !1, "hr" + z) + '<span class="wbHourTemp">' + yt(ve(s, I.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Gt(s) {
    const h = s.getTime(), m = Date.now() - oe;
    return rt("hourly").filter((w) => {
      const D = new Date(w.datetime).getTime();
      return D >= h && D < h + ha && D > m;
    });
  }
  function ma(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function li(s, h, m) {
    const w = on(new Date(m.datetime)), D = Gt(w), I = ma(D), z = I.includes(ct.dayMode) ? ct.dayMode : "temperature", $ = (O) => O === "humidity" ? gt.humidity : gt.modes[O];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ja(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(qa(s, m)) + '</span><span class="wbSub">' + yt(Ze(gt.highLow, { high: ve(s, m.temperature), low: ve(s, m.templow) })) + '</span></div><button class="wbBack" title="' + yt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Wo(ne.back) + "</button></div>" + (I.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + I.map((O) => '<button aria-pressed="' + (O === z) + '" data-wb="day-mode" data-mode="' + O + '" data-wb-focus="day-mode-' + O + '">' + yt($(O)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + W0(ci(s, h, w, D, z)) + "</div></div>";
  }
  function ci(s, h, m, w, D) {
    var yn;
    const I = m.getTime(), z = Date.now(), $ = pr(m, /* @__PURE__ */ new Date()), O = (Jt) => (Jt - I) / Ie, X = (Jt) => Ue(new Date(Jt), s), tt = (Jt) => new Date(Jt.datetime).getTime(), mt = [0, 3, 6, 9, 12, 15, 18, 21].map((Jt) => ({ t: Jt * 60, label: X(I + Jt * oe), minor: Jt % 6 !== 0 })), { rise: Ot, set: Et } = ur(s, m), Ct = [], zt = [];
    Ot && (Ct.push({ t: O(Ot.getTime()), label: X(Ot.getTime()), rise: !0 }), zt.push([0, O(Ot.getTime())])), Et && (Ct.push({ t: O(Et.getTime()), label: X(Et.getTime()), rise: !1 }), zt.push([O(Et.getTime()), ni]));
    const Lt = gr(s);
    !Ot && !Et && Lt && ws(new Date(I + ha / 2), Lt.lat, Lt.lon) < 0 && zt.push([0, ni]);
    const pt = $ ? O(z) : void 0, Ht = { hours: mt, sun: Ct, night: zt };
    if (!w.length && !$) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (D === "precipitation") {
      const Jt = w.some((la) => la.precipitation_probability != null), ko = w.map((la) => ({ t: O(tt(la)), v: Number((Jt ? la.precipitation_probability : la.precipitation) ?? 0) })), $o = an(s, lt(s, "hourly"), "precipitation"), Ko = Math.max(0, ...ko.map((la) => la.v)), xn = Jt ? 100 : Sp(0, Math.max(Ko, 1), [0.5, 1, 2, 5, 10]).max, Li = (la) => Jt ? Xt(la, s.locale) + "%" : Xt(la, s.locale, { maximumFractionDigits: 1 }) + " " + $o, So = ko.find((la) => la.v === Ko);
      return {
        ...Ht,
        kind: "bars",
        points: ko,
        min: 0,
        max: xn,
        ticks: [0, xn / 2, xn],
        format: Li,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: So && Ko > 0 ? { t: So.t + 30, v: So.v, label: Li(So.v) } : void 0,
        note: Ko > 0 ? void 0 : gt.noRain
      };
    }
    const Bt = D === "humidity" ? "humidity" : "temperature", Se = w.filter((Jt) => Jt[Bt] != null && (!$ || tt(Jt) >= z)).map((Jt) => ({ t: O(tt(Jt)), v: Number(Jt[Bt]) }));
    let At, le = [];
    if (pt !== void 0) {
      const Jt = Pe(s, h, Bt);
      Jt && ue(Jt.value) && (At = { t: pt, v: Number(Jt.value) }, Se.unshift(At)), le = (((yn = U.todayHistory) == null ? void 0 : yn.day) === m.toDateString() ? U.todayHistory[Bt] : []).filter(($o) => $o.time <= z).map(($o) => ({ t: Math.max(0, O($o.time)), v: $o.value })), At && le.length && le.push(At);
    }
    const ce = [...le, ...Se];
    if (!ce.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const We = ce.map((Jt) => Jt.v), Mo = Sp(Math.min(...We), Math.max(...We), Bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Bt === "humidity" && (Mo.min = Math.max(0, Mo.min), Mo.max = Math.min(100, Mo.max), Mo.ticks = Mo.ticks.filter((Jt) => Jt >= 0 && Jt <= 100));
    const Ti = Bt === "humidity" ? (Jt) => Xt(Jt, s.locale) + "%" : (Jt) => ve(s, Jt), vn = Bt === "temperature" ? ce.reduce((Jt, ko) => ko.v > Jt.v ? ko : Jt) : void 0;
    return { ...Ht, kind: "line", points: Se, past: le, ...Mo, format: Ti, now: At, peak: vn ? { ...vn, label: Ti(vn.v) } : void 0 };
  }
  function ga(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function Ae(s, h, m = sp) {
    var I, z;
    const w = rt("daily"), D = [];
    for (let $ = 0; $ < m; $++) for (const O of [!1, !0]) {
      const X = s.getTime() + ($ * 24 + (O ? 12 : 0)) * oe, tt = X + 12 * oe, mt = {};
      h.forEach((Et) => {
        const Ct = new Date(Et.datetime).getTime();
        Et.condition && Ct >= X && Ct < tt && (mt[Et.condition] = (mt[Et.condition] ?? 0) + (Xm.has(Et.condition) ? 2 : 1));
      });
      let Ot = (I = Object.entries(mt).sort((Et, Ct) => Ct[1] - Et[1])[0]) == null ? void 0 : I[0];
      if (!Ot) {
        const Et = new Date(X).toDateString();
        Ot = ((z = w.find((Ct) => new Date(Ct.datetime).toDateString() === Et)) == null ? void 0 : z.condition) ?? "cloudy";
      }
      D.push({ cond: O && Ot === "sunny" ? "clear-night" : Ot, night: O });
    }
    return D;
  }
  function di(s, h, m) {
    const w = lt(s, "hourly"), D = h.precipitation_probability != null ? Xt(h.precipitation_probability, s.locale) + "%" : "", I = h.precipitation ? Xt(h.precipitation, s.locale) + " " + an(s, w, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return D ? [D, I] : [I || "–", ""];
      case "wind":
        return h.wind_speed != null ? [Xt(Math.round(h.wind_speed), s.locale), an(s, w, "wind_speed")] : ["–", ""];
      default:
        return [ve(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? D : ""];
    }
  }
  function sn(s, h, m) {
    const [w, D] = ts[A == null ? void 0 : A()] || ts.day, I = [];
    for (let z = 0; z < 4 && I.length < 3; z++) {
      const $ = /* @__PURE__ */ new Date();
      $.setHours(0, 0, 0, 0), $.setDate($.getDate() + z);
      const O = new Date($);
      O.setHours(D, 0, 0, 0), $.setHours(w, 0, 0, 0), !(O.getTime() <= m || !h.some((X) => {
        const tt = new Date(X.datetime).getTime();
        return tt >= $.getTime() && tt <= O.getTime();
      })) && I.push({ a: $.getTime(), b: O.getTime(), label: qa(s, { datetime: $.toISOString() }) });
    }
    return I;
  }
  function pi(s, h, m, w, D, I) {
    const z = (m.b - h.a) / oe, $ = (pt) => ((pt - h.a) / oe).toFixed(3), O = 80, X = 32, tt = [];
    for (const pt = new Date(h.a - ha); pt.getTime() < m.b + ha; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ht, set: Bt } = ur(s, new Date(pt));
      Ht && Bt && tt.push({ rise: Ht.getTime(), set: Bt.getTime() });
    }
    const mt = (pt, Ht) => O - (O - X) * Math.sin(Math.PI * (Ht - pt.rise) / (pt.set - pt.rise)), Ot = (pt) => !tt.some((Ht) => pt >= Ht.rise && pt <= Ht.set);
    let Et = "", Ct = "", zt = "";
    tt.forEach((pt, Ht) => {
      const Bt = [];
      for (let At = pt.rise; At <= pt.set; At += 15 * Ie) Bt.push($(At) + "," + mt(pt, At).toFixed(2));
      Bt.push($(pt.set) + "," + O), Et += '<polyline class="wbLineArc" points="' + Bt.join(" ") + '"/>';
      const Se = tt[Ht + 1];
      Se && (Et += '<rect class="wbLineNight" x="' + $(pt.set) + '" y="0" width="' + ((Se.rise - pt.set) / oe).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([At, le]) => {
        At < h.a || At > m.b || (Ct += '<line class="wbLineEdge" x1="' + $(At) + '" x2="' + $(At) + '" y1="0" y2="100"/>', zt += '<span class="wbLineTime" style="left:' + I(At) + '">' + le + " " + yt(Ue(new Date(At), s)) + "</span>");
      });
    });
    const Lt = tt.find((pt) => D >= pt.rise && D <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + Ct + '<line class="wbLineHorizon" x1="0" x2="' + z + '" y1="' + O + '" y2="' + O + '"/></svg>' + zt + (Lt ? '<span class="wbLineNow" style="left:' + I(D) + ";top:" + mt(Lt, D) + '%">' + Ul("sunny", !1) + "</span>" : "") + w.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + I(pt.t) + '">' + Ul(pt.entry.condition ?? "cloudy", Ot(pt.t)) + "</span>").join("");
  }
  function yr(s, h) {
    delete Q.hourly;
    const m = ct.hourlyView === "bars" ? "bars" : "strip", w = '<div class="wbHeader"><h2 class="wbTitle">' + yt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(gt.showAs) + '">' + ["strip", "bars"].map((At) => '<button aria-pressed="' + (At === m) + '" data-wb="hourly-view" data-view="' + At + '" data-wb-focus="hourly-view-' + At + '">' + yt(gt.views[At]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return Go(s, h, w);
    const D = rt("hourly"), I = Math.floor(Date.now() / Ie) * Ie, z = D.filter((At) => new Date(At.datetime).getTime() > I - oe);
    if (!z.length) return "";
    const $ = ga(z), O = $.includes(ct.hourlyMode) ? ct.hourlyMode : "temperature", X = sn(s, D, I);
    if (!X.length) return "";
    const tt = X[0], mt = X[X.length - 1], Ot = (tt.b - tt.a) / oe, Et = (At) => "calc(var(--wb-u) * " + ((At - tt.a) / oe).toFixed(3) + ")", Ct = new Date(tt.a);
    Ct.setHours(6, 0, 0, 0), Ct.getTime() > tt.a && Ct.setDate(Ct.getDate() - 1);
    const zt = Math.ceil((mt.b - Ct.getTime()) / ha);
    p !== "line" && (Q.hourly = { segs: Ae(Ct, D, zt), seed: Ct.getDate(), columns: zt });
    const Lt = (At) => At === tt.a ? " wbFirst" : At === mt.b ? " wbLast" : "", pt = [];
    for (let At = tt.a; At < mt.b; ) {
      const le = new Date(At);
      le.setHours(24, 0, 0, 0);
      const ce = Math.min(le.getTime(), mt.b);
      pt.push({ a: At, b: ce, label: qa(s, { datetime: new Date(At).toISOString() }), page: X.find((We) => We.a >= At && We.a < ce) || X.find((We) => We.a < ce && We.b > At) }), At = ce;
    }
    const Ht = I > tt.a && I < mt.b ? Math.floor((I - tt.a) / (2 * oe)) * 2 : 0, Bt = [];
    for (let At = tt.a; At <= mt.b; At += oe) {
      const le = new Date(At), ce = Lt(At);
      !ce && le.getHours() % Ym || !ce && (Math.abs(tt.a - At) < 2 * oe || Math.abs(mt.b - At) < 2 * oe) || I >= tt.a && Math.abs(At - I) < 1.5 * oe && !ce || Bt.push({ t: At, edge: ce, label: Ue(le, s), entry: At >= I - oe ? D.find((We) => new Date(We.datetime).getTime() === At) : void 0 });
    }
    I > tt.a && I < tt.b && Bt.push({ t: I, edge: I - tt.a < oe ? " wbFirst" : tt.b - I < oe ? " wbLast" : "", label: gt.now, entry: z[0], now: !0 });
    const Se = (At, le) => '<span class="wbMark' + At.edge + (At.now ? " wbNowMark" : "") + '" style="left:' + Et(At.t) + '">' + le + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + w + ($.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + $.map((At) => '<button aria-pressed="' + (At === O) + '" data-wb="hourly-mode" data-mode="' + At + '" data-wb-focus="hourly-mode-' + At + '">' + yt(gt.modes[At]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(gt.nextHours) + '" data-span="' + Ot + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ot + ");width:calc(var(--wb-u) * " + (mt.b - tt.a) / oe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((mt.b - tt.a) / (2 * oe)) + 1)].map((At, le) => '<i class="wbSnap" style="left:' + Et(tt.a + le * 2 * oe) + '"></i>').join("") + '<div class="wbDays">' + pt.map((At, le) => {
      var ce;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((At.b - At.a) / oe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (le === 0 ? Ht : ((((ce = At.page) == null ? void 0 : ce.a) ?? At.a) - tt.a) / oe) + '" data-wb-focus="hours-day-' + le + '">' + yt(At.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Bt.map((At) => Se(At, yt(At.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + pi(s, tt, mt, Bt, I, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(Ct.getTime()) + ";width:calc(var(--wb-u) * " + zt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (I > tt.a ? '<i class="wbPast" style="width:' + Et(Math.min(I, mt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(I) + '"></i>' : "") + pt.slice(1).map((At) => '<i class="wbMidnight" style="left:' + Et(At.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Bt.map((At) => {
      if (!At.entry) return "";
      const [le, ce] = di(s, At.entry, O);
      return Se(At, '<span class="wbPrimaryV">' + yt(le) + '</span><span class="wbSecondary">' + yt(ce) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function ui(s) {
    const h = Zm, m = h.findIndex(([O]) => O >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [w, D] = h[m - 1], [I, z] = h[m], $ = (s - w) / (I - w);
    return "rgb(" + D.map((O, X) => Math.round(O + (z[X] - O) * $)).join(",") + ")";
  }
  function Go(s, h, m) {
    var Et;
    const w = rt("daily").filter((Ct) => ue(Ct.templow) && ue(Ct.temperature)).slice(0, 7);
    if (!w.length) return "";
    const D = Math.min(...w.map((Ct) => Number(Ct.templow))), I = Math.max(...w.map((Ct) => Number(Ct.temperature))), z = Math.max(1, I - D), $ = (Ct) => Math.max(0, Math.min(100, (Ct - D) / z * 100)).toFixed(2), O = /F/.test(an(s, lt(s, "daily"), "temperature")), X = (Ct) => O ? (Ct - 32) / 1.8 : Ct, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Ct) => ui(X(D + Ct * z)) + " " + Ct * 100 + "%").join(",") + ")", mt = (Et = Pe(s, h, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ga(rt("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > Date.now() - oe)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + w.map((Ct, zt) => {
      const Lt = qa(s, Ct), pt = pr(new Date(Ct.datetime), /* @__PURE__ */ new Date()), Ht = Number(Ct.templow), Bt = Number(Ct.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Ze(gt.rangeRow, { day: Lt, low: ve(s, Ht), high: ve(s, Bt) })) + '"><span class="wbRangeDay">' + yt(Lt) + "</span>" + Ja(Ct.condition, 40, !1, "r" + zt) + '<span class="wbRangeLo">' + yt(ve(s, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - $(Bt)) + "% 0 " + $(Ht) + '% round 4px)"></i>' + (pt && ue(mt) ? '<i class="wbRangeNow" style="left:' + $(Number(mt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(ve(s, Bt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const fi = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Qa = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], ke = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [w, D] = s[m - 1], [I, z] = s[m];
      return F0(D, z, (h - w) / (I - w));
    }
    return s[s.length - 1][1];
  }, xr = (s, h, m) => {
    if (!h || !m) return fi[5][1];
    const w = (s.getTime() - m.getTime()) / Ie;
    return w >= -90 ? ke(Qa, w) : ke(fi, (s.getTime() - h.getTime()) / Ie);
  }, hi = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function Mr(s) {
    const h = It, { rise: m, set: w } = ur(s, h), D = m && w ? Math.round((w.getTime() - m.getTime()) / Ie) : 0, I = Math.floor(D / 60), z = D % 60, $ = (Se) => Se ? Ue(Se, s) : "–", O = new Date(h);
    O.setDate(O.getDate() + 1);
    const X = ur(s, O), tt = X.rise && X.set ? Math.round((X.set.getTime() - X.rise.getTime()) / Ie) : 0, mt = new Date(h);
    mt.setDate(mt.getDate() - 1);
    const Ot = !!(m && w && h >= m && h <= w), Et = !!(m && h < m), Ct = Ot ? m : Et ? ur(s, mt).set : w, zt = Ot ? w : Et ? m : X.rise, Lt = Ct && zt ? Math.min(1, Math.max(0, (h.getTime() - Ct.getTime()) / (zt.getTime() - Ct.getTime()))) : 0, pt = zt ? Math.max(0, Math.round((zt.getTime() - h.getTime()) / Ie)) : 0, Ht = zt ? hi(pt) : "–", Bt = Ot ? gt.untilSunset : gt.untilSunrise;
    return ea({
      icon: ne.sunny,
      name: gt.sun,
      sub: D ? Ze(gt.daylightShort, { hours: I, minutes: z }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, $(X.rise)], [gt.callout.setTomorrow, $(X.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xr(h, m, w) + '"><svg class="wbSunTrack" data-up="' + (Ot ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ht) + '</span><span class="wbSunWord">' + yt(Bt) + '</span></div><span class="wbSunAt wbSunRise">' + yt($(m)) + '</span><span class="wbSunAt wbSunSet">' + yt($(w)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      ns(Na(Ht, ""))
    });
  }
  const vs = 22;
  function kr(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), w = vs, D = w / 2, I = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < w * 3 || m < w * 3 || s.dataset.drawn === I) return;
    s.dataset.drawn = I;
    const z = "M" + D + " " + (m - w) + "V" + w + "A" + D + " " + D + " 0 0 1 " + w + " " + D + "H" + (h - w) + "A" + D + " " + D + " 0 0 1 " + (h - D) + " " + w + "V" + (m - w), $ = "M" + (h - D) + " " + (m - w) + "A" + D + " " + D + " 0 0 1 " + (h - w) + " " + (m - D) + "H" + w + "A" + D + " " + D + " 0 0 1 " + D + " " + (m - w), O = 16, X = 6, tt = "M" + O + " 0H" + (h - O) + "A" + O + " " + O + " 0 0 1 " + h + " " + O + "V" + (m - O) + "A" + O + " " + O + " 0 0 1 " + (h - O) + " " + m + "H" + O + "A" + O + " " + O + " 0 0 1 0 " + (m - O) + "V" + O + "A" + O + " " + O + " 0 0 1 " + O + " 0ZM" + (w + X) + " " + w + "A" + X + " " + X + " 0 0 0 " + w + " " + (w + X) + "V" + (m - w - X) + "A" + X + " " + X + " 0 0 0 " + (w + X) + " " + (m - w) + "H" + (h - w - X) + "A" + X + " " + X + " 0 0 0 " + (h - w) + " " + (m - w - X) + "V" + (w + X) + "A" + X + " " + X + " 0 0 0 " + (h - w - X) + " " + w + "Z", mt = s.dataset.up === "1", Ot = Number(s.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const Ct = document.createElementNS(Et, "path");
    Ct.setAttribute("d", mt ? z : $), s.replaceChildren(Ct);
    const zt = Ct.getTotalLength(), Lt = Ct.getPointAtLength(zt * Ot), pt = mt ? zt : 0;
    s.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '" stroke-dasharray="' + (mt ? (pt * Ot).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (mt ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + D + '"></circle>';
  }
  const qt = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => kr(h.target))) : null;
  function bt() {
    qt == null || qt.disconnect(), L.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      kr(s), qt == null || qt.observe(s);
    });
  }
  function he(s, h, m) {
    const w = (z) => M + "moon-" + z, D = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + w("terminator") + ')" d="' + q0(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", I = (z, $, O, X, tt, mt) => '<filter id="' + w(z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + $ + '" numOctaves="' + O + '" seed="' + X + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ot) => "<feFunc" + Ot + ' type="linear" slope="' + tt + '" intercept="' + mt + '"></feFunc' + Ot + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + w("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + w("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + w("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + w("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + w("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + I("mottle", "0.045", 4, 3, 1.8, -0.4) + I("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + w("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + w("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + w("soften") + ')">' + j0.map(([z, $, O, X, tt, mt]) => '<ellipse cx="' + z + '" cy="' + $ + '" rx="' + O + '" ry="' + X + '" fill-opacity="' + mt + '" transform="rotate(' + tt + " " + z + " " + $ + ')"></ellipse>').join("") + "</g>" + z0.map(([z, $, O]) => '<circle class="wbCrater" cx="' + z + '" cy="' + $ + '" r="' + O + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + w("glow") + ')">' + G0.map(([z, $]) => '<line x1="54.4" y1="95" x2="' + z + '" y2="' + $ + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + w("glow") + ')">' + Cp.map(([z, $, O]) => '<circle cx="' + z + '" cy="' + $ + '" r="' + O * 2 + '"></circle>').join("") + "</g>" + Cp.map(([z, $, O]) => '<circle class="wbBrightCenter" cx="' + z + '" cy="' + $ + '" r="' + O + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + w("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + w("grain") + ')"></rect>' + D + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function jt(s) {
    const h = W, m = gr(s), w = (m == null ? void 0 : m.lat) ?? 0, D = Zl(h), I = kp(s), z = I ? s.states[I] : void 0, $ = qn(z) && d0.includes(z.state) ? z.state : E0(D.phase), { rise: O, set: X } = m ? D0(h, m.lat, m.lon) : {}, tt = D.phase > 0.5 != w < 0, mt = Xt(Math.round(D.fraction * 100), s.locale) + "%", Ot = O ?? X;
    return Ot && Ue(Ot, s), ea({
      icon: ne.night,
      name: gt.moon,
      sub: gt.phases[$],
      callouts: [...O ? [[gt.callout.moonrise, Ue(O, s)]] : [], ...X ? [[gt.callout.moonset, Ue(X, s)]] : [], [gt.callout.lit, mt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + he(D.fraction, tt, w < 0) + "</div>" + ns(Na(Xt(Math.round(D.fraction * 100), s.locale), "%"))
    });
  }
  function He(s, h) {
    var Ct;
    const m = Pe(s, h, "wind_speed");
    if (!m || !ue(m.value)) return "";
    const w = Pe(s, h, "wind_gust_speed"), D = Pe(s, h, "wind_bearing"), I = D && ue(D.value) ? Number(D.value) : void 0, z = H0(Number(m.value), (Ct = m.stateObj.attributes) == null ? void 0 : Ct.wind_speed_unit), $ = fs(s, m.stateObj, "wind_speed", m.value), O = I !== void 0 ? gt.cardinal[c0[((I + 11.25) / 22.5 | 0) % 16]] : void 0, X = w ? yp(s, w.stateObj, "wind_gust_speed", w.value) : void 0, tt = [O ? Ze(gt.windFrom, { direction: O }) : void 0, z !== void 0 ? z + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || X, mt = (zt, Lt) => {
      const pt = (zt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(pt), 100 + Lt * Math.sin(pt)];
    }, Ot = Array.from({ length: 36 }, (zt, Lt) => Lt * 10).map((zt) => {
      const Lt = zt % 90 === 0, [pt, Ht] = mt(zt, 97), [Bt, Se] = mt(zt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ht + '" x2="' + Bt + '" y2="' + Se + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([zt, Lt]) => {
      const [pt, Ht] = mt(Lt, 64);
      return '<text class="wbLetter' + (zt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ht + '">' + yt(gt.cardinal[zt]) + "</text>";
    }).join("");
    return ea({ icon: ne.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ot + Et + (I !== void 0 ? '<path class="wbMarker" transform="rotate(' + I + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt($.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt($.unit) + "</text></svg>" });
  }
  const bo = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), w = rt("hourly").find((D) => D.uv_index != null && new Date(D.datetime).getTime() > m && D.uv_index < 6);
    return w && new Date(w.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ze(gt.advice.avoidUntil, { time: Ue(new Date(w.datetime), h) }) : gt.advice.avoidToday;
  };
  function Sr(s, h) {
    const m = Pe(s, h, "uv_index");
    if (!m || !ue(m.value)) return "";
    const w = Number(m.value), D = gt.uvLevel[xp(w)], I = /* @__PURE__ */ new Date();
    I.setHours(23, 59, 59, 999);
    const z = rt("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= I).reduce((tt, mt) => !tt || mt.uv_index > tt.uv ? { uv: mt.uv_index, time: new Date(mt.datetime) } : tt, void 0), $ = p0[xp(w)], O = 216 * Math.min(1, Math.max(0.08, 0.4 + (w - 4.5) * (0.5 / 5.5))), X = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + O.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + $ + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + $ + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + $ + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + O.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(Xt(Math.round(w), s.locale)) + '</span><span class="wbUvWord">' + yt(D) + "</span></div>" + ns(Na(Xt(Math.round(w), s.locale), ""));
    return ea({
      icon: ne.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: z && z.uv > w ? Ze(gt.uvPeak, { level: D, uv_index: Xt(Math.round(z.uv), s.locale), time: Ue(z.time, s) }) : D,
      zone: X,
      cls: "wbUv",
      callouts: [bo(w, s), [gt.callout.now, Xt(Math.round(w), s.locale) + " · " + D], [gt.callout.peak, z && z.uv > w ? Xt(Math.round(z.uv), s.locale) + " at " + Ue(z.time, s) : gt.callout.now]]
    });
  }
  function ys(s) {
    const h = rt("daily")[0], m = U.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ue(h.temperature) || !m || m.dailyHighs.length < t0) return "";
    const w = Number(h.temperature), D = m.dailyHighs.reduce((Lt, pt) => Lt + pt, 0) / m.dailyHighs.length, I = Math.round(w - D) || 0, z = I > 0 ? "above" : I < 0 ? "below" : "same", $ = [...m.days, { date: /* @__PURE__ */ new Date(), high: w, today: !0 }], O = $.map((Lt) => Lt.high).concat(D), X = Math.min(...O) - 1, tt = Math.max(...O) + 1, mt = (Lt) => (1 - (Lt - X) / (tt - X)) * 100, Ot = (Lt) => (Lt + 0.5) / $.length * 100, Et = $.map((Lt, pt) => [Ot(pt), mt(Lt.high)]), Ct = Et.map(([Lt, pt], Ht) => (Ht ? "L" : "M") + Lt.toFixed(2) + " " + pt.toFixed(2)).join(""), zt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Ct + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + mt(D).toFixed(2) + '" y2="' + mt(D).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Ct + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + mt(D).toFixed(2) + '%">' + yt(ve(s, D)) + "</span>" + $.map((Lt, pt) => {
      const Ht = Lt.today ? " wbToday" : "", Bt = "left:" + Ot(pt).toFixed(2) + "%;top:" + mt(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + Bt + '"></i><span class="wbAvgValue' + Ht + '" style="' + Bt + '">' + yt(ve(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + $.map((Lt, pt) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Ot(pt).toFixed(2) + '%">' + yt(y0(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return ea({
      icon: ne.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Ze(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (I > 0 ? "+" : "") + yt(ve(s, I)) + '</div><div class="wbCompareWords">' + yt(gt.average[z]) + '</div><div class="wbCompareTemps">' + yt(Ze(gt.todayVsAverage, { today: ve(s, w), average: ve(s, D) })) + "</div></div>" + zt + "</div>"
    });
  }
  function _r(s, h) {
    const m = Pe(s, h, "humidity");
    if (!m || !ue(m.value)) return "";
    const w = Pe(s, h, "dew_point"), D = Math.max(0, Math.min(100, Number(m.value)));
    return ea({
      icon: ne.waterPercent,
      name: gt.metrics.humidity,
      sub: w && ue(w.value) ? Ze(gt.dewPoint, { dew_point: ve(s, w.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + D + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Na(Xt(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function mi(s, h) {
    var Lt, pt, Ht;
    const m = Pe(s, h, "pressure");
    if (!m || !ue(m.value)) return "";
    const w = Number(m.value), D = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, I = Mp(w, D), z = ((pt = U.pressureHistory) == null ? void 0 : pt.entityId) === m.stateObj.entity_id ? Mp(U.pressureHistory.value, D) : void 0;
    let $;
    if (I !== void 0 && z !== void 0) {
      const Bt = I - z;
      $ = Bt >= dp ? "rising" : Bt <= -dp ? "falling" : "steady";
    }
    const O = fs(s, m.stateObj, "pressure", Math.round(w)), X = m.stateObj, tt = (Bt) => D === "inHg" ? Math.round(Bt * 100) / 100 : Math.round(Bt), mt = (Bt) => yp(s, X, "pressure", tt(Bt)), Ot = z !== void 0 ? U.pressureHistory.value : void 0, Et = Ot !== void 0 ? tt(w - Ot) : void 0, Ct = (Ht = X.entity_id) != null && Ht.startsWith("weather.") ? rt("hourly").find((Bt) => ue(Bt.pressure) && new Date(Bt.datetime).getTime() >= Date.now() + 3 * oe - 30 * Ie) : void 0, zt = [
      ...$ ? [gt.advice[$]] : [],
      ...Ot !== void 0 ? [[gt.callout.hoursAgo, mt(Ot)], [gt.callout.change, (Et > 0 ? "+" : Et < 0 ? "−" : "") + mt(Math.abs(Et))]] : [],
      ...Ct ? [[gt.callout.inHours, mt(Number(Ct.pressure))]] : []
    ];
    return ea({
      icon: ne.gauge,
      name: gt.metrics.pressure,
      sub: $ ? gt.pressure[$] : void 0,
      cls: "wbPressure",
      callouts: zt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Na(O.number) + '<span class="wbTapeUnit">' + yt(O.unit) + "</span></div>" + (I !== void 0 ? xs(s, I) : "") + "</div>"
    });
  }
  function xs(s, h) {
    const D = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (I, z) => D + z).map((I) => {
      const z = 100 - (I - h) * 9;
      if (z < 22 || z > 178) return "";
      const $ = I % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(z - 100) / 100) + '"><line class="wbTapeTick" x1="' + ($ ? 2 : 8) + '" x2="26" y1="' + z + '" y2="' + z + '"></line>' + ($ ? '<text class="wbTapeLabel" x="33" y="' + z + '">' + yt(Xt(I, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Ms(s) {
    var O, X;
    const h = $l(s), m = h ? s.states[h] : void 0;
    if (!m || ((O = U.rain) == null ? void 0 : O.entityId) !== h || !ue(U.rain.change)) return "";
    const w = ((X = m.attributes) == null ? void 0 : X.unit_of_measurement) ?? "", D = lt(s, "hourly"), I = Date.now() + ha, z = rt("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= I), $ = z.reduce((tt, mt) => tt + Number(mt.precipitation), 0);
    return ea({
      icon: ne.rainy,
      name: gt.metrics.precipitation,
      sub: D && z.length ? Ze(gt.rainExpected, { amount: Xt($, s.locale, { maximumFractionDigits: 1 }) + " " + an(s, D, "precipitation") }) : gt.rainLast24h,
      visual: Na(Xt(U.rain.change, s.locale, { maximumFractionDigits: 1 }), w) + (z.length > 1 ? V0(z.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function Uo(s, h) {
    const m = Pe(s, h, "visibility");
    if (!m || !ue(m.value)) return "";
    const w = fs(s, m.stateObj, "visibility", m.value), D = Rm(Number(m.value), an(s, m.stateObj, "visibility"));
    return ea({
      icon: ne.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[Pm(D)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + D + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(gi(s, D)) + '</div><div class="wbSeaValue">' + Na(w.number, w.unit) + "</div></div>"
    });
  }
  function gi(s, h) {
    var I;
    const m = Bm((I = s.config) == null ? void 0 : I.country, h);
    if (m) return Ze(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const w = h / o0 * 60;
    if (w < 60) {
      const z = w < 5 ? Math.max(1, Math.round(w)) : 5 * Math.round(w / 5);
      if (z < 60) return Ze(gt.walkMinutes, { minutes: Xt(z, s.locale) });
    }
    const D = Math.max(1, Math.round(w / 30) / 2);
    return D < 8 ? Ze(gt.walkHours, { hours: Xt(D, s.locale) }) : gt.walkDay;
  }
  function ks(s) {
    U.categories === void 0 && nn(s);
    const h = ye(s), m = (O) => O.map((X) => s.states[X]).filter(qn), w = m(h.air), D = m(h.pollen);
    if (!w.length && !D.length) return "";
    const I = [...w, ...D], z = (O) => D.includes(O) ? ne.flower : ne.airFilter, $ = I.find((O) => O.entity_id === ct.aq);
    return $ ? ln(s, $, z($)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + I.map((O) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(O.entity_id) + '"><span class="wbChip">' + Wo(z(O)) + '</span><span class="wbText"><span class="wbName">' + yt(tn(s, O)) + '</span><span class="wbSub">' + yt(Io(s, O)) + "</span></span></button>").join("") + "</div></div>";
  }
  function ln(s, h, m) {
    var tt, mt, Ot;
    const w = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", D = ((mt = h.attributes) == null ? void 0 : mt.device_class) === "pm25" && w === hp && ue(h.state), I = Number(h.state), z = D ? os(I) : void 0, $ = ((Ot = U.aqHistory) == null ? void 0 : Ot.entityId) === h.entity_id ? U.aqHistory.points : void 0, O = (Et) => Math.min(100, Math.max(0, Et / as * 100));
    let X;
    if ($ && $.length > 1) X = _p($, (Et) => (Xt(Et, s.locale, { maximumFractionDigits: 1 }) + " " + w).trim());
    else if (z) {
      let Et = 0;
      const Ct = xu.map(([zt, Lt]) => {
        const pt = O(Math.min(Lt, as)), Ht = fp[zt] + " " + Et + "% " + pt + "%";
        return Et = pt, Ht;
      });
      X = '<div class="wbScale" role="meter" aria-label="' + yt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + as + '" aria-valuenow="' + I + '" style="background:linear-gradient(to right, ' + Ct.join(", ") + ')"><i style="left:' + O(I) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + as + " " + hp + "</span></div>";
    } else X = '<span class="wbGraphNote"><span>' + yt(Io(s, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Wo(m) + '</span><span class="wbText"><span class="wbName">' + yt(tn(s, h)) + '</span><span class="wbSub">' + yt(Io(s, h)) + (z ? " · " + yt(gt.aqLevel[z]) : "") + '</span></span><button class="wbBack" title="' + yt(gt.back) + '" data-wb="aq-close">' + Wo(ne.back) + '</button></div><div class="wbGraph">' + X + "</div></div></div>";
  }
  const Cr = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Wn = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function to(s) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var w;
      return m.entity_id.startsWith("sensor.") && gs.includes(((w = m.attributes) == null ? void 0 : w.device_class) ?? "") && qn(m) && br(s, m.entity_id);
    }).sort((m, w) => m.entity_id.localeCompare(w.entity_id)).forEach((m) => {
      h.has(m.attributes.device_class) || h.set(m.attributes.device_class, m);
    }), gs.map((m) => h.get(m)).filter(Boolean);
  }
  const Ar = (s) => Object.values(s.states || {}).filter((h) => {
    var m, w;
    return h.entity_id.startsWith("sensor.") && qn(h) && br(s, h.entity_id) && (((w = (m = s.entities) == null ? void 0 : m[h.entity_id]) == null ? void 0 : w.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), bi = ["none", "very_low", "low", "moderate", "high", "very_high"], Xe = (s) => ue(s.state) ? Number(s.state) : bi.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), Tr = (s) => {
    const h = String(s).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, wo = (s, h, m) => {
    const w = m ? s === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : s === "pm25" ? os(h) : null : null;
    return w === "good" || w === "fair" ? gt.advice.window : w === "moderate" || w === null ? gt.advice.fine : gt.advice.closed;
  }, vo = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Vn = (s) => vo[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], ba = "M43 43q1 8 0 10M77 42q1 8 -1 10", wi = {
    good: [ba, "M34 69Q61 98 86 67"],
    fair: [ba, "M40 74Q61 89 81 72"],
    moderate: [ba, "M41 79Q60 76 80 81"],
    poor: [ba, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Wa = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + wi[s][0] + '"></path><path d="' + wi[s][1] + '"></path></svg>';
  function cn(s) {
    const h = to(s), m = h[0];
    if (!m) return ea({ icon: ne.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Na("–", ""), cls: "wbBase" });
    const w = m.attributes.device_class, D = Number(m.state), I = ue(m.state), z = w === "aqi" && I ? Wn(D) : w === "pm25" && I ? Cr[os(D)] : Io(s, m), $ = I ? Xt(Math.round(D), s.locale) : String(m.state), O = w === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", X = I && w === "aqi" ? Vn(D) : I && w === "pm25" ? os(D) : null;
    return ea(X ? {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + fp[X] + '">' + Wa(X) + '<div class="wbAqBig"><span class="wbAqNum">' + yt($) + "</span>" + (O ? '<span class="wbAqUnit">' + yt(O) + "</span>" : "") + "</div></div>" + ns(Na($, O)),
      callouts: [wo(w, D, I), ...h.slice(1, 3).map((tt) => [tn(s, tt), Io(s, tt)])]
    } : {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbBase",
      zone: Na($, O),
      callouts: [wo(w, D, I), ...h.slice(1, 3).map((tt) => [tn(s, tt), Io(s, tt)])]
    });
  }
  const Lr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Oe = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, w) => {
      const [D, I] = Lr[w % 3], z = 10 + w * 7 % 9, $ = 2.6 + w * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + D + '" style="top:' + (4 + w * 37 % 52) + "%;--x:" + (w * 29 % 90 + 4) + "%;--s:" + (0.8 + w * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + z + "s;animation-delay:-" + (w * 2.3 % z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + $.toFixed(1) + "s;animation-delay:-" + (w * 0.7 % $).toFixed(1) + 's">' + I + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Dr(s) {
    const h = Ar(s).sort((D, I) => Xe(I) - Xe(D));
    if (!h.length) return ea({ icon: ne.flower, name: gt.pollen, sub: gt.noPollen, visual: Na("–", ""), cls: "wbBase" });
    const m = h[0], w = (D) => ue(D.state) ? Io(s, D) : Tr(D.state);
    return ea({
      icon: ne.flower,
      name: gt.pollen,
      sub: tn(s, m) + " · " + w(m),
      cls: "wbBase wbPollen",
      zone: Oe(Xe(m)) + Na(w(m), ""),
      callouts: h.slice(0, 3).map((D) => [tn(s, D), w(D)])
    });
  }
  function Ss(s) {
    var $;
    const h = Date.now(), m = rt("hourly").filter((O) => {
      const X = new Date(O.datetime).getTime();
      return X > h - oe && X < h + 12 * oe;
    }), w = m.find((O) => (O.precipitation_probability ?? 0) >= 50 || (O.precipitation ?? 0) >= 0.2), D = w ? Ze(gt.rainFrom, { time: Ue(new Date(Math.max(h, new Date(w.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, I = (V == null ? void 0 : V()) || "rainviewer";
    let z;
    if (I.startsWith("camera:")) {
      const O = s.states[I.slice(7)], X = O && O.state !== "unavailable" && (($ = O.attributes) == null ? void 0 : $.entity_picture);
      z = X ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + yt(X) + '" data-src="' + yt(X) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + yt(gt.cameraOff) + "</span></div>";
    } else {
      const O = gr(s);
      z = O ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + O.lat + '" data-lon="' + O.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + yt(gt.noLocation) + "</span></div>";
    }
    return ea({ icon: ne.radar, name: gt.rainRadar, sub: D, cls: "wbBase wbRadarTile", visual: z });
  }
  const _s = {
    current: xe,
    hourly: yr,
    sun: Mr,
    moon: jt,
    wind: He,
    uv_index: Sr,
    compared_to_average: ys,
    humidity: _r,
    pressure: mi,
    precipitation: Ms,
    visibility: Uo,
    air_quality: ks,
    aq_tile: cn,
    pollen_tile: Dr,
    radar_tile: Ss
  }, Er = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], dn = (s, h) => {
    var m;
    return h.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, Br = (s) => {
    const h = new Date(s);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, Aa = () => {
    const s = ct.range, h = Date.now();
    if (s.preset !== "custom") {
      const D = Er.find(([I]) => I === s.preset)[2];
      return [h - D * ha, h];
    }
    const m = on(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), w = Math.min(h, on(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ha);
    return [Math.min(m, w - oe), w];
  }, vi = (s) => {
    const h = ct.range;
    if (h.preset !== "custom") return Er.find(([D]) => D === h.preset)[1];
    const [m, w] = Aa();
    return h.from === h.to ? dn(s, new Date(m)) : dn(s, new Date(m)) + " – " + dn(s, new Date(w - 1));
  }, jn = () => ct.range.preset === "custom" ? ct.range.from + "_" + ct.range.to : ct.range.preset, Rr = (s, h) => h - s <= 2 * ha, yi = (s, h, m, w) => Rr(m, w) ? Ue(h, s) : dn(s, h), Pr = (s, h = 60) => {
    const m = Math.max(1, Math.ceil(s.length / h));
    return s.filter((w, D) => D % m === 0 || D === s.length - 1);
  }, pn = (s, h, m, w, D = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(w).toISOString(),
    entity_ids: [h],
    minimal_response: D,
    no_attributes: D,
    significant_changes_only: !1
  }), yo = (s) => async (h, m, w, D) => {
    const I = Pe(h, m, s);
    if (!I) return [];
    const z = I.stateObj.entity_id, $ = await pn(h, z, w, D);
    return Pr((($ == null ? void 0 : $[z]) ?? []).map((O) => {
      var mt;
      const X = ((mt = O.a) == null ? void 0 : mt[s]) ?? (ue(O.s) ? Number(O.s) : void 0), tt = (O.lu ?? O.lc) * 1e3;
      return typeof X == "number" && tt >= w && tt <= D ? { t: new Date(tt), value: X } : null;
    }).filter(Boolean)).map((O) => ({ label: yi(h, O.t, w, D), value: O.value }));
  }, xi = (s, h) => async (m, w, D, I) => {
    const z = s(m);
    if (!z) return [];
    const $ = z.entity_id, O = await pn(m, $, D, I, !0);
    return Pr(((O == null ? void 0 : O[$]) ?? []).map((X) => {
      const tt = h(X.s), mt = X.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || mt < D || mt > I ? null : { t: new Date(mt), value: tt };
    }).filter(Boolean)).map((X) => ({ label: yi(m, X.t, D, I), value: X.value }));
  }, Mi = (s, h) => async (m, w, D, I) => {
    const z = gr(m);
    if (!z) return [];
    const $ = [];
    if (Rr(D, I)) for (let O = D; O <= I; O += oe / 2) $.push({ label: Ue(new Date(O), m), value: s(new Date(O), z) });
    else for (let O = I; O >= D; O -= ha) {
      const X = new Date(O), tt = h(X, z, m);
      tt != null && $.unshift({ label: dn(m, X), value: tt });
    }
    return Pr($);
  }, fe = (s) => Ar(s).sort((h, m) => Xe(m) - Xe(h))[0], Je = (s, h, m) => {
    const w = Pe(s, h, m);
    return w ? an(s, w.stateObj, m) : "";
  }, Dt = {
    current: { name: () => gt.modes.temperature, icon: () => ne.sunny, load: yo("temperature"), fmt: (s, h, m) => ve(s, m), now: (s, h) => {
      var m;
      return ve(s, (m = Pe(s, h, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => ne.sunny,
      load: Mi((s, h) => Math.round(ws(s, h.lat, h.lon) / oa), (s, h, m) => {
        const w = ur(m, s);
        return w.rise && w.set ? Math.round((w.set - w.rise) / oe * 10) / 10 : null;
      }),
      fmt: (s, h, m, w) => w ? Xt(m, s.locale) + "°" : Xt(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => gt.moon,
      icon: () => ne.night,
      load: Mi((s) => Math.round(Zl(s).fraction * 100), (s) => Math.round(Zl(s).fraction * 100)),
      fmt: (s, h, m) => Xt(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => gt.metrics.uv_index, icon: () => ne.sunnyAlert, load: yo("uv_index"), fmt: (s, h, m) => Xt(Math.round(m * 10) / 10, s.locale), now: (s, h) => {
      const m = Pe(s, h, "uv_index");
      return m ? Xt(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => ne.waterPercent, load: yo("humidity"), fmt: (s, h, m) => Xt(Math.round(m), s.locale) + "%", now: (s, h) => {
      const m = Pe(s, h, "humidity");
      return m ? Xt(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => ne.gauge, load: yo("pressure"), fmt: (s, h, m) => Xt(Math.round(m), s.locale) + " " + Je(s, h, "pressure"), now: (s, h) => {
      const m = Pe(s, h, "pressure");
      return m ? Xt(Math.round(Number(m.value)), s.locale) + " " + Je(s, h, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => ne.windy, load: yo("wind_speed"), fmt: (s, h, m) => Xt(Math.round(m), s.locale) + " " + Je(s, h, "wind_speed"), now: (s, h) => {
      const m = Pe(s, h, "wind_speed");
      return m ? Xt(Math.round(Number(m.value)), s.locale) + " " + Je(s, h, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => ne.eyeOutline, load: yo("visibility"), fmt: (s, h, m) => Xt(Math.round(m * 10) / 10, s.locale) + " " + Je(s, h, "visibility"), now: (s, h) => {
      const m = Pe(s, h, "visibility");
      return m ? Xt(Number(m.value), s.locale) + " " + Je(s, h, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => to(s)[0] ? tn(s, to(s)[0]) : gt.airQuality,
      icon: () => ne.airFilter,
      load: xi((s) => to(s)[0], (s) => ue(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var I, z;
        const w = to(s)[0], D = (I = w == null ? void 0 : w.attributes) == null ? void 0 : I.device_class;
        return Xt(Math.round(m * 10) / 10, s.locale) + (D === "aqi" ? " AQI" : (z = w == null ? void 0 : w.attributes) != null && z.unit_of_measurement ? " " + w.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const h = to(s)[0];
        return h ? Io(s, h) : "";
      }
    },
    pollen_tile: {
      name: (s) => fe(s) ? tn(s, fe(s)) : gt.pollen,
      icon: () => ne.flower,
      load: xi(fe, (s) => {
        const h = Xe({ state: s });
        return h < 0 ? null : h;
      }),
      fmt: (s, h, m) => Tr(bi[Math.round(m)] || ""),
      now: (s) => {
        const h = fe(s);
        return h ? Tr(h.state) : "";
      }
    }
  }, Ta = {};
  let Yo = null;
  async function zn(s) {
    const h = i == null ? void 0 : i();
    if (!h || !Dt[s]) return;
    const m = s + "|" + jn(), [w, D] = Aa();
    if (Ta[m] && Date.now() - Ta[m].at < 5 * Ie) return;
    Ta[m] = { at: Date.now(), points: null };
    try {
      Ta[m].points = await Dt[s].load(h, et(h), w, D);
    } catch {
      Ta[m].points = [];
    }
    qe(!0), Yo === s && ct.graph === s && (Yo = null, ip(G.querySelector(".wbGraphCard")));
    const I = ct.graph === s && G.querySelector(".wbGraph .wbChart");
    I && wu(I, I.querySelector(".wbLine"), I.querySelectorAll(".wbArea"));
  }
  function un(s, h) {
    const m = ct.range, w = Br(Date.now()), [D, I] = Aa(), z = m.pickFrom || Br(D), $ = m.pickTo || Br(I - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Er.map(([O, X]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === O) + '" data-wb="graph-preset" data-range="' + O + '" data-wb-focus="graph-preset-' + O + '">' + yt(X) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + z + '" max="' + w + '"></label><label><span>To</span><input type="date" data-range-to value="' + $ + '" max="' + w + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Cs(s, h, m) {
    var mt;
    const w = Dt[m], [D, I] = Aa(), z = Rr(D, I), $ = (mt = Ta[m + "|" + jn()]) == null ? void 0 : mt.points, O = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = $ ? $.length > 1 ? _p($, (Ot) => w.fmt(s, h, Ot, z), 220, O) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(w.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Mu(w.icon(s)) + '</div><div class="wbText"><span class="wbName">' + yt(w.name(s)) + '</span><span class="wbSub">' + yt(w.sub ? w.sub(z) : w.now ? w.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + Wo(ne.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!ct.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Wo(ne.calendar) + "<span>" + yt(vi(s)) + "</span>" + Wo(ne.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (ct.picking ? un() : "") + "</div>";
  }
  function qe(s) {
    var Ot, Et, Ct, zt, Lt;
    const h = i == null ? void 0 : i();
    if (!h || it) return;
    const m = et(h);
    _t(h, m), U.lastFetch || Xa();
    const w = ye(h), D = kp(h), I = $l(h), z = [
      ...m.map((pt) => h.states[pt]),
      h.states["sun.sun"],
      D && h.states[D],
      I && h.states[I],
      ...w.air.map((pt) => h.states[pt]),
      ...w.pollen.map((pt) => h.states[pt]),
      ...ot.some((pt) => J.includes(pt)) ? [...to(h), ...Ar(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / Ie)
    ];
    if (!s && dt && z.length === dt.length && z.every((pt, Ht) => pt === dt[Ht])) return;
    dt = z;
    const $ = L.getRootNode(), O = $.activeElement || document.activeElement;
    for (const pt of ot) {
      const Ht = N[pt];
      let Bt = "";
      try {
        Bt = _s[pt](h, m) || "";
      } catch {
        Bt = "";
      }
      if (Bt === Ht.html) continue;
      const Se = O && Ht.el.contains(O) ? (Ot = O.dataset) == null ? void 0 : Ot.wbFocus : void 0, At = Ht.el.querySelector(".wbStripScroll"), le = At ? At.scrollLeft : null;
      Ht.html = Bt, Ht.el.hidden = !Bt, Ht.el.innerHTML = Bt;
      const ce = Ht.el.querySelector(".wbStripScroll");
      ce && le != null ? ce.scrollTo({ left: le }) : ce != null && ce.dataset.start && ce.scrollTo({ left: Number(ce.dataset.start) * ce.clientWidth / Number(ce.dataset.span) }), Se && !Y && ((Et = Ht.el.querySelector('[data-wb-focus="' + Se + '"]')) == null || Et.focus());
    }
    let X = "";
    if (ct.graph)
      try {
        X = Cs(h, m, ct.graph) || "";
      } catch {
        X = "";
      }
    if (X !== P) {
      const pt = O && G.contains(O) ? (Ct = O.dataset) == null ? void 0 : Ct.wbFocus : void 0;
      P = X, G.innerHTML = X, G.hidden = !X, X && !G.isConnected && (L.closest("#app") || L).appendChild(G), pt && !Y && ((zt = G.querySelector('[data-wb-focus="' + pt + '"]')) == null || zt.focus({ preventScroll: !0 }));
    }
    bt(), L.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || Kn(pt);
    }), Y && ((Lt = L.querySelector('[data-wb-focus="' + Y + '"]') || G.querySelector('[data-wb-focus="' + Y + '"]')) == null || Lt.focus({ preventScroll: !0 }), Y = null);
    let tt = !1, mt = !1;
    for (const pt of ot) {
      const Ht = N[pt], Bt = !Ht.el.hidden, Se = nt[pt] === "wide" || K.includes(pt), At = ot.indexOf(pt) >= ot.indexOf("moon"), le = Bt && (At && Se && !tt || !Se && !mt);
      le && Se && (tt = !0), le && !Se && (mt = !0), Ht.el.toggleAttribute("data-break", le);
    }
    ra(performance.now());
  }
  function fn() {
    Z || it || (Z = !0, queueMicrotask(() => {
      Z = !1, qe(!0);
    }));
  }
  function hn() {
    const s = getComputedStyle(L), h = (z) => s.getPropertyValue(z).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([z, $]) => {
      h($) && (m[z] = h($));
    });
    const w = h("--color-text-primary") || "#f1f1f1", D = h("--color-bg-card") || "#222222", I = !!L.closest(".light");
    return { colors: { ...Fa, ...m }, ink: I ? w : D, paper: I ? D : w };
  }
  const Gn = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, wa = () => g && !b0();
  function Hr(s, h) {
    L.querySelectorAll("canvas[data-wb-strip]").forEach((m) => ki(m, Q[m.dataset.wbStrip], s, h));
  }
  function ki(s, h, m, w) {
    if (!h || !s.getClientRects().length) return;
    const D = s.clientWidth, I = s.clientHeight;
    if (!D || !I) return;
    const z = { width: D, height: I, columns: h.columns || sp, colors: w.colors, clock: m, ambient: wa(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const $ = Math.min(2, window.devicePixelRatio || 1), O = Math.round(D * $), X = Math.round(I * $);
      s.width !== O && (s.width = O), s.height !== X && (s.height = X);
      const tt = s.getContext("2d");
      if (!tt) return;
      tt.setTransform($, 0, 0, $, 0, 0), hm(tt, h.segs, z);
    } else Gn(s, fm(h.segs, { ...z, px: 2, oneBit: p === "onebit", ink: w.ink, paper: w.paper }));
  }
  function ra(s) {
    if (it) return;
    const h = hn();
    if (p !== "smooth") {
      const m = wa();
      L.querySelectorAll("canvas[data-wb-wx]").forEach((w) => {
        w.getClientRects().length && Gn(w, Xh(Gh(w.dataset.wbWx, h.colors), { size: Number(w.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    L.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const w = m.clientWidth, D = m.clientHeight, I = Number(m.dataset.wbSea), z = w + "x" + D + ":" + I + ":" + h.colors.skyClearDay;
      !w || !D || !(I > 0) || m.dataset.painted === z || (m.dataset.painted = z, Gn(m, Lm(w, D, I, h.colors)));
    }), Hr(s, h);
  }
  function va(s) {
    if (wt = 0, !(it || !wa())) {
      if (!document.hidden)
        if (p === "smooth") Hr(s, hn());
        else {
          const h = Math.floor(s / 100);
          h !== st && (st = h, ra(s));
        }
      wt = requestAnimationFrame(va);
    }
  }
  function Un() {
    L.classList.toggle("wbMotion", wa()), !wt && !it && wa() && (wt = requestAnimationFrame(va));
  }
  function mn(s) {
    var m, w, D, I, z, $, O;
    if (s.target === G) {
      ct.graph = void 0, ct.picking = !1, qe(!0);
      return;
    }
    const h = (w = (m = s.target).closest) == null ? void 0 : w.call(m, "[data-wb]");
    if (!h || !(L.contains(h) || G.contains(h))) {
      const X = (I = (D = s.target).closest) == null ? void 0 : I.call(D, ".wbItem"), tt = X == null ? void 0 : X.dataset.card;
      if (!X || !L.contains(X) || !Dt[tt] || ct.graph === tt || L.closest(".tfEditing") || tt === "current" && b) return;
      ct.graph = tt, ct.picking = !1, Y = "graph-close", qe(!0), (z = Ta[tt + "|" + jn()]) != null && z.points ? ip(G.querySelector(".wbGraphCard")) : Yo = tt, zn(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        ct.openDay = Number(h.dataset.index), ct.opener = h.dataset.wbFocus, Y = "back-day";
        const X = wr()[ct.openDay], tt = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > Um;
        X && pr(new Date(X.datetime), /* @__PURE__ */ new Date()) && tt && _a();
        break;
      }
      case "close-day":
        ct.openDay = void 0, Y = ct.opener, ct.opener = void 0;
        break;
      case "open-page":
        b == null || b();
        return;
      case "day-mode":
        ct.dayMode = h.dataset.mode;
        break;
      case "hourly-mode":
        ct.hourlyMode = h.dataset.mode;
        break;
      case "hourly-view":
        ct.hourlyView = h.dataset.view;
        try {
          localStorage.setItem(xt, ct.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const X = L.querySelector(".wbStripScroll");
        X && X.scrollTo({ left: Number(h.dataset.hours) * X.clientWidth / Number(X.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        ct.aq = h.dataset.entity, na(ct.aq);
        break;
      case "aq-close":
        ct.aq = void 0;
        break;
      case "graph-close":
        ct.graph = void 0, ct.picking = !1;
        break;
      case "graph-pick":
        ct.picking = !ct.picking, Y = ct.picking ? "graph-preset-" + (ct.range.preset === "custom" ? "day" : ct.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        ct.range = { preset: h.dataset.range }, ct.picking = !1, Y = "graph-pick", qe(!0), zn(ct.graph);
        return;
      case "graph-apply": {
        let X = ct.range.pickFrom || (($ = L.querySelector("[data-range-from]")) == null ? void 0 : $.value), tt = ct.range.pickTo || ((O = L.querySelector("[data-range-to]")) == null ? void 0 : O.value);
        if (!X || !tt) return;
        X > tt && ([X, tt] = [tt, X]), ct.range = { preset: "custom", from: X, to: tt }, ct.picking = !1, Y = "graph-pick", qe(!0), zn(ct.graph);
        return;
      }
      default:
        return;
    }
    qe(!0);
  }
  function gn(s) {
    var h, m, w, D, I, z;
    s.key === "Escape" && ct.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (ct.openDay = void 0, Y = ct.opener, ct.opener = void 0, qe(!0)) : s.key === "Escape" && ct.picking && ((D = (w = s.target).closest) != null && D.call(w, ".wbGraphCard")) ? (ct.picking = !1, Y = "graph-pick", qe(!0)) : s.key === "Escape" && ct.graph && ((z = (I = s.target).closest) != null && z.call(I, ".wbGraphCard")) && (ct.graph = void 0, qe(!0));
  }
  let xo = null;
  function Si(s) {
    var m, w;
    const h = (w = (m = s.target).closest) == null ? void 0 : w.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (xo = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", _i), window.addEventListener("mouseup", bn, { once: !0 }));
  }
  function _i(s) {
    const h = L.querySelector(".wbStripScroll");
    if (!xo || !h) return;
    const m = s.pageX - xo.startX;
    !xo.moved && Math.abs(m) > 1 && (xo.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = xo.left - m;
  }
  function bn() {
    xo = null, window.removeEventListener("mousemove", _i);
    const s = L.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const h = [...s.querySelectorAll(".wbSnap")];
    if (h.length) {
      const m = h.reduce((w, D) => Math.abs(D.offsetLeft - s.scrollLeft) < Math.abs(w.offsetLeft - s.scrollLeft) ? D : w);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const Yn = (s) => {
    var m, w;
    const h = s.target;
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? ct.range.pickFrom = h.value : (w = h.matches) != null && w.call(h, "[data-range-to]") && (ct.range.pickTo = h.value);
  };
  L.addEventListener("change", Yn), L.addEventListener("click", mn), L.addEventListener("keydown", gn), G.addEventListener("change", Yn), G.addEventListener("click", mn), G.addEventListener("keydown", gn), L.addEventListener("mousedown", Si);
  const Zn = 64, eo = 30;
  let ao = null, ia = 0;
  const $n = () => {
    ia = 0, L.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (ao) {
        const w = s.parentElement.getBoundingClientRect(), D = w.left + w.width / 2 - ao.x, I = w.top + w.height / 2 - ao.y, z = Math.hypot(D, I) || 1;
        if (z < Zn) {
          const $ = (1 - z / Zn) * eo;
          h = D / z * $, m = I / z * $;
        }
      }
      s.style.transform = h || m ? "translate(" + h.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), ao && (ia = requestAnimationFrame($n));
  }, sa = (s) => {
    var m, w;
    if (!((w = (m = s.target).closest) == null ? void 0 : w.call(m, ".wbPollen")) || Ne != null && Ne.matches) {
      ao && (ao = null, ia || (ia = requestAnimationFrame($n)));
      return;
    }
    ao = { x: s.clientX, y: s.clientY }, ia || (ia = requestAnimationFrame($n));
  }, wn = () => {
    ao = null, ia || (ia = requestAnimationFrame($n));
  };
  L.addEventListener("pointermove", sa), L.addEventListener("pointerleave", wn);
  const oo = typeof ResizeObserver == "function" ? new ResizeObserver(() => ra(performance.now())) : null;
  oo == null || oo.observe(L);
  const Va = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && Kn(m);
  })) : null;
  function Kn(s) {
    var z;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || it) return;
    const w = s0(Number(s.dataset.lat), Number(s.dataset.lon), h, m), D = !!((z = L.closest("#app")) != null && z.classList.contains("light")), I = ($) => ' style="left:' + $.left + "px;top:" + $.top + 'px"';
    s._tiles = w, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + w.map(($) => '<img src="https://' + "abcd"[($.x + $.y) % 4] + ".basemaps.cartocdn.com/" + (D ? "light_all" : "dark_all") + "/" + dc + "/" + $.x + "/" + $.y + '.png"' + I($) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', Va == null || Va.observe(s), i0().then(($) => {
      !s.isConnected || it || s._tiles !== w || (s.querySelector(".wbRadarFrames").innerHTML = $.frames.map((O, X) => '<div class="wbRadarLayer wbRadarRain" data-i="' + X + '" hidden>' + w.map((tt) => '<img src="' + $.host + O.path + "/" + Fo + "/" + dc + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + I(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = $.frames, s._hold = 0, Nr(s, $.frames.findLastIndex((O) => O.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function Nr(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((D) => {
      D.hidden = Number(D.dataset.i) !== h;
    });
    const w = m[h];
    s.querySelector(".wbRadarTime").textContent = Ue(new Date(w.time * 1e3), i == null ? void 0 : i()) + (w.past ? "" : " · " + gt.forecastTag);
  }
  function As() {
    L.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > yu) {
        Kn(s);
        return;
      }
      if (Ne != null && Ne.matches) return;
      if (s._hold > 0) {
        s._hold -= pp;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((D) => D.past), w = s._i >= h ? 0 : s._i + 1;
      Nr(s, w), (w === m || w === h) && (s._hold = r0);
    });
  }
  const Ts = () => L.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), no = typeof MutationObserver == "function" ? new MutationObserver(() => L.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && Kn(s);
  })) : null, Ci = L.closest("#app");
  Ci && (no == null || no.observe(Ci, { attributes: !0, attributeFilter: ["class"] }));
  const Ne = (ro = window.matchMedia) == null ? void 0 : ro.call(window, "(prefers-reduced-motion: reduce)"), Ai = () => {
    Un(), ra(performance.now());
  };
  (Zo = Ne == null ? void 0 : Ne.addEventListener) == null || Zo.call(Ne, "change", Ai);
  const Ye = [
    setInterval(() => {
      It = /* @__PURE__ */ new Date(), qe(!0);
    }, e0),
    setInterval(() => {
      W = /* @__PURE__ */ new Date(), qe(!0);
    }, a0),
    setInterval(Xa, Jm),
    setInterval(As, pp),
    setInterval(Ts, Ie)
  ];
  return qe(!0), Un(), {
    update() {
      qe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      qe(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, L.dataset.style = p, G.dataset.style = p, qe(!0), Un());
    },
    destroy() {
      var s;
      cancelAnimationFrame(ia), L.removeEventListener("pointermove", sa), L.removeEventListener("pointerleave", wn), it = !0, Ye.forEach(clearInterval), wt && cancelAnimationFrame(wt), wt = 0, oo == null || oo.disconnect(), Va == null || Va.disconnect(), no == null || no.disconnect(), (s = Ne == null ? void 0 : Ne.removeEventListener) == null || s.call(Ne, "change", Ai), bn(), L.removeEventListener("click", mn), L.removeEventListener("change", Yn), L.removeEventListener("keydown", gn), L.removeEventListener("mousedown", Si), G.removeEventListener("click", mn), G.removeEventListener("change", Yn), G.removeEventListener("keydown", gn), ["daily", "hourly"].forEach(vt), L.remove(), G.remove();
    }
  };
}
const ii = "#E1E1E1", Tp = "#F7F4F0", Kl = "#03a9f4", te = 14, ee = 172;
let Y0 = 0;
const Me = (n) => Math.round(n * 100) / 100, mo = (n, i, d) => Math.max(i, Math.min(d, n)), zo = (n, i, d, p, g, y) => '<rect x="' + Me(n) + '" y="' + Me(i) + '" width="' + Me(d) + '" height="' + Me(p) + '" fill="' + g + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", Xl = (n) => n.map((i, d) => (d ? "L" : "M") + Me(i[0]) + " " + Me(i[1])).join("");
function Jl(n) {
  const i = (n == null ? void 0 : n.attributes) || {};
  return i.device_class === "curtain" ? "curtain" : i.device_class === "blind" || i.current_tilt_position != null ? "venetian" : "blind";
}
const en = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Z0(n) {
  const i = n < 2 ? n + 24 : n;
  let d = en[0], p = en[en.length - 1];
  for (let A = 0; A < en.length - 1; A++) if (i >= en[A][0] && i <= en[A + 1][0]) {
    d = en[A], p = en[A + 1];
    break;
  }
  const g = (i - d[0]) / (p[0] - d[0]), y = g * g * (3 - 2 * g), b = (A, V) => {
    const M = parseInt(A.slice(1), 16), L = parseInt(V.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((L >> F & 255) - (M >> F & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: b(d[1][0], p[1][0]), bot: b(d[1][1], p[1][1]), warm: b(d[1][2], p[1][2]), cool: b(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * y, t: i };
}
function $0(n) {
  const i = parseInt(n.slice(1), 16), d = (i >> 16 & 255) / 255, p = (i >> 8 & 255) / 255, g = (i & 255) / 255, y = Math.max(d, p, g), b = Math.min(d, p, g);
  let A = 0, V = 0;
  const M = (y + b) / 2;
  if (y !== b) {
    const L = y - b;
    V = M > 0.5 ? L / (2 - y - b) : L / (y + b), A = (y === d ? (p - g) / L + (p < g ? 6 : 0) : y === p ? (g - d) / L + 2 : (d - p) / L + 4) / 6;
  }
  return [A * 360, V * 100, M * 100];
}
function Pu(n, i, d) {
  i = mo(i, 0, 100) / 100, d = mo(d, 0, 100) / 100;
  const p = (b) => (b + n / 30) % 12, g = i * Math.min(d, 1 - d), y = (b) => d - g * Math.max(-1, Math.min(p(b) - 3, Math.min(9 - p(b), 1)));
  return "#" + [y(0), y(8), y(4)].map((b) => Math.round(b * 255).toString(16).padStart(2, "0")).join("");
}
const [Hu, Nu, Ou] = $0(ii), Lp = Pu(Hu, Nu, Math.max(6, Ou - 14)), K0 = Pu(Hu, Nu, Math.min(96, Ou + 16));
function X0(n, i, d, p, g) {
  const y = ee / 2, b = ee * 0.12, A = y - (y - b) * n, V = (ot) => ot ** 1.3, M = mo(d, -1.5, 1.5), L = (ot) => -(Math.abs(M) * 4.6 * ot ** 1.5) * Math.sign(M), F = n * 1.4, G = (ot, nt) => {
    const K = Math.min(4.8, Math.abs(d) * 2.6) * (nt ? 1 : -1) * Math.sign(d || 1), N = nt ? ot + A : ot, it = nt ? ot : ot + A, dt = (xt) => N + L(xt) + K * Math.sin(xt * Math.PI * 1.2 + p) * V(xt) * 1.4 + F * Math.sin(xt * Math.PI * 2 + p * 0.6) * V(xt) * (nt ? 1 : -1), wt = [[it, te]];
    for (let xt = 0; xt <= 12; xt++) wt.push([dt(xt / 12), te + ee * xt / 12]);
    wt.push([it, te + ee]);
    let st = '<path d="' + Xl(wt) + 'Z" fill="' + ii + '"/>';
    if (g) return st;
    const Z = 1.35 + ((nt ? d > 0 : d < 0) ? 0.35 : 0), Y = (xt) => {
      const Pt = xt / 7, ct = nt ? 1 - Pt : Pt, U = (1 - ct) ** 1.3, It = ot + A * Pt;
      return Array.from({ length: 13 }, (W, Q) => {
        const T = Q / 12;
        return [It + L(T) * U + K * Z * Math.sin(T * Math.PI * 1.2 + p - ct * 3.2) * V(T) * 1.4 * U + F * 1.6 * Math.sin(T * Math.PI * 2 + p * 0.6 - ct * 2.5) * V(T) * n * (0.4 + 0.6 * U), te + ee * T];
      });
    }, P = [1, 2, 3, 4, 5, 6].map(Y);
    for (let xt = 0; xt < 6; xt += 2) st += '<path d="' + Xl(P[xt]) + Xl(P[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return st;
  }, J = y - (y - b) * i;
  return { body: G(te, !0) + G(te + ee - A, !1), rails: [{ x: te + J - 4, y: te, w: 4, h: ee }, { x: te + ee - J, y: te, w: 4, h: ee }], head: 6.4 };
}
function J0(n, i, d) {
  const p = ee * (1 - n);
  let g = "";
  if (p > 1 && (g += zo(te, te, ee, p, ii), !d))
    for (let y = 1; y < 7; y += 2) g += zo(te + ee * y / 7, te, ee / 7, p, "#fff");
  return { body: g, rails: [{ x: te, y: te + ee * (1 - i) - 7, w: ee, h: 11 }], head: 10.4 };
}
function Q0(n, i, d, p) {
  const g = 9 - 7 * (d / 100), y = te + ee * (1 - n), b = Math.ceil(ee / 10) + 1, A = te + g / 2, V = (te + ee - g / 2 - A) / (b - 1), M = 0.8, L = 0.6, F = Array.from({ length: b }, (ot, nt) => Math.max(A + nt * L, Math.min(A + nt * V, y - g / 2 - (b - 1 - nt) * L))), G = F.slice(0, -1).map((ot, nt) => mo((F[nt + 1] - ot - L) / (V - L), 0, 1));
  G.push(G[b - 2]);
  let J = "";
  return F.forEach((ot, nt) => {
    const K = M + (g - M) * G[nt], N = Math.max(0.5, K / 2), it = Math.max(0.4, K * 0.114);
    J += zo(te, ot - N, ee, Math.max(1, K), ii), !p && K > 2.2 && (J += zo(te, ot + N - it, ee, it, Lp) + zo(te, ot - N, ee, it * 0.55, K0, 0.75));
  }), p || [0.22, 0.78].forEach((ot) => {
    J += zo(te + ee * ot - 0.7, te, 1.4, Math.max(0, F[b - 1] + 1 - te), Lp, 0.85);
  }), { body: J, rails: [{ x: te, y: te + ee * (1 - i) - 8, w: ee, h: 8 }], head: 8.8 };
}
const Dp = (n, i, d, p, g, y, b) => n === "curtain" ? X0(i, d, g, y, b) : n === "venetian" ? Q0(i, d, p, b) : J0(i, d, b);
function t1(n, i) {
  let d = "", p = "";
  return i.forEach((g) => {
    const y = g.w > g.h, b = mo(y ? te + ee / 2 : g.x + g.w / 2, 17, 183), A = mo(y ? g.y + g.h / 2 : te + ee / 2, 17, 183);
    d += y ? zo(te, mo(g.y + g.h / 2, te, te + ee) - 1, ee, 2, Kl) : zo(mo(g.x + g.w / 2, te, te + ee) - 1, te, 2, ee, Kl);
    const V = y ? "M" + Me(b - 4) + " " + Me(A - 3) + "l4 -3l4 3M" + Me(b - 4) + " " + Me(A + 3) + "l4 3l4 -3" : "M" + Me(b - 3) + " " + Me(A - 4) + "l-3 4l3 4M" + Me(b + 3) + " " + Me(A - 4) + "l3 4l-3 4";
    p += '<circle cx="' + Me(b) + '" cy="' + Me(A) + '" r="11" fill="' + Kl + '" filter="url(#' + n + 's)"/><path d="' + V + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function e1(n, i) {
  const d = /* @__PURE__ */ new Date(), p = Z0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), y = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, b = Dp(i.kind, i.pos / 100, i.bar / 100, i.tilt, i.vel, i.ph, !1), A = i.ghostAlpha > 4e-3 && i.ghost != null ? Dp(i.kind, i.ghost / 100, i.ghost / 100, i.tilt, 0, 0, !0).body : "", V = i.grip > 4e-3 ? t1(n, b.rails) : null, M = (L) => zo(te, te, ee, ee, L);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Me(g) + '%" cy="' + Me(y) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + Me(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Me(100 - g * 0.8) + '%" cy="' + Me(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + Me(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Tp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + Me(i.ghostAlpha) + '">' + A + "</g>" : "") + b.body + '<rect x="14" y="14" width="172" height="' + b.head + '" fill="' + ii + '" filter="url(#' + n + 's)"/></g>' + (V ? '<g clip-path="url(#' + n + 'c)" opacity="' + Me(i.grip) + '">' + V.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Tp + '" stroke-width="3"/>' + (V ? '<g opacity="' + Me(i.grip) + '">' + V.knobs + "</g>" : "") + "</svg>";
}
function a1({ onMove: n, onSet: i }) {
  var st;
  const d = "cv" + ++Y0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (st = window.matchMedia) == null ? void 0 : st.call(window, "(pointer: coarse)").matches;
  let y = null;
  const b = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, V = !1, M = !1, L = null, F = 0, G = 0;
  const J = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", ot = () => L || V || M || y.moving || y.target != null ? 1 : g ? performance.now() < G ? 1 : 0.4 : 0, nt = () => {
    p.innerHTML = e1(d, { kind: y.kind, pos: b.pos, bar: y.target ?? b.pos, tilt: b.tilt, vel: b.vel, ph: b.ph, ghost: b.gpos, ghostAlpha: b.ghost, grip: b.grip });
  };
  function K(Z) {
    A = 0;
    const Y = b.last ? Math.min(0.064, (Z - b.last) / 1e3) : 1 / 60, P = Y * 60;
    b.last = Z;
    const xt = y.pos - b.pos, Pt = b.pos;
    b.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * Y), Math.abs(y.pos - b.pos) < 0.03 && (b.pos = y.pos), b.vel = b.vel * 0.86 + (b.pos - Pt) / P * 0.14, Math.abs(b.vel) < 0.015 && b.pos === y.pos && (b.vel = 0), (b.pos !== Pt || b.vel) && (b.ph += (0.06 + Math.abs(b.vel) * 0.03) * P);
    const ct = y.tilt - b.tilt;
    b.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * Y);
    const U = ot();
    b.grip += (U - b.grip) * Math.min(1, Y * (U > b.grip ? 11 : 3.5)), Math.abs(U - b.grip) < 0.01 && (b.grip = U);
    const It = y.target != null && Math.abs(y.target - b.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (b.gpos = y.target), b.ghost += (It - b.ghost) * Math.min(1, Y * (It > b.ghost ? 16 : 3)), Math.abs(It - b.ghost) < 4e-3 && (b.ghost = It), nt(), b.pos !== y.pos || b.vel || b.tilt !== y.tilt || b.grip !== U || b.ghost !== It ? A = requestAnimationFrame(K) : b.last = 0;
  }
  const N = () => {
    y && !A && (A = requestAnimationFrame(K));
  }, it = setInterval(() => {
    y && !A && nt();
  }, 60 * 1e3), dt = (Z) => {
    const Y = p.getBoundingClientRect();
    return J() === "x" ? (Z.clientX - Y.left) / Y.width : (Z.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (Z) => {
    var xt;
    if (!(y != null && y.canSet) || Z.button > 0) return;
    Z.preventDefault(), (xt = p.setPointerCapture) == null || xt.call(p, Z.pointerId);
    const Y = y.target ?? y.pos, P = p.getBoundingClientRect();
    L = { p0: dt(Z), from: Y, x0: Z.clientX, value: null, side: null }, y.kind === "curtain" && Y > 0 && (L.side = (Z.clientX - P.left) / P.width < 0.5 ? "L" : "R"), N();
  }), p.addEventListener("pointermove", (Z) => {
    if (!L) return;
    let Y;
    if (y.kind === "curtain") {
      if (!L.side) {
        const xt = Z.clientX - L.x0;
        if (Math.abs(xt) < 4) return;
        L.side = xt < 0 ? "L" : "R";
      }
      const P = (ee / 2 - ee * 0.12) / 200;
      Y = L.from + (L.side === "L" ? -1 : 1) * ((dt(Z) - L.p0) / P) * 100;
    } else Y = L.from - (dt(Z) - L.p0) / (ee / 200) * 100;
    L.value = mo(Y, 0, 100), n(L.value);
  });
  const wt = () => {
    if (!L) return;
    const Z = L.value;
    L = null, Z != null && i(Math.round(Z)), N();
  };
  return p.addEventListener("pointerup", wt), p.addEventListener("pointercancel", wt), p.addEventListener("lostpointercapture", wt), p.addEventListener("pointerenter", () => {
    V = !0, N();
  }), p.addEventListener("pointerleave", () => {
    V = !1, N();
  }), p.addEventListener("focus", () => {
    M = p.matches(":focus-visible"), N();
  }), p.addEventListener("blur", () => {
    M = !1, N();
  }), p.addEventListener("keydown", (Z) => {
    if (!(y != null && y.canSet)) return;
    const Y = Math.round(y.target ?? y.pos), P = Z.shiftKey ? 10 : 1, xt = { ArrowUp: Y + P, ArrowRight: Y + P, ArrowDown: Y - P, ArrowLeft: Y - P, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[Z.key];
    if (xt == null) return;
    Z.preventDefault();
    const Pt = mo(xt, 0, 100);
    n(Pt), clearTimeout(F), F = setTimeout(() => i(Pt), 500);
  }), {
    el: p,
    update(Z) {
      const Y = !y;
      y = Z, Y && (b.pos = y.pos, b.tilt = y.tilt, G = performance.now() + 1500, g && setTimeout(N, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), y.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), p.setAttribute("aria-valuetext", y.text), N();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(it), clearTimeout(F), p.remove();
    }
  };
}
const Ep = "homecore-density", uo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, i) {
    try {
      localStorage.setItem(n, i);
    } catch {
    }
  }
}, q = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), Bp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Ql = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Rp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', rs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Pp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Hp = 1, o1 = 4, Np = 16, Op = 32, n1 = 128, r1 = 256, Ip = 16384, Fp = 1, qp = 2, tc = 4, Wp = 8, i1 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Vp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, s1 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ei = {
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
}, jp = ["covers", "people", "openings", "leaks", "vacuum"], zp = "homecore_house", Gp = "homecore-house-used", ai = ["switch", "fan", "input_boolean", "automation"], Up = "homecore-house-look", l1 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], c1 = [["popup", "Popup"], ["sheet", "Sheet"]], d1 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], p1 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], u1 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], oi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', f1 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', h1 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Yp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', ec = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ua = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', ac = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', is = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Iu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((i) => '<path d="' + i + '"/>').join("") + "</svg>", ss = Iu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Zp = Iu(["M20 6L9 17L4 12"]), fo = (n, i = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(n || "") + '"' + (i ? ' data-icon-name="' + q(i) + '"' : "") + "></span>", m1 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', $p = 1, Kp = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Xp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ls = ["door", "window", "garage_door", "opening"], Jp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, fr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], g1 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], b1 = 10, w1 = 20, v1 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, y1 = ["living room", "bedroom", "office"];
function x1(n, { config: i, getHass: d }) {
  var Id, Fd, qd;
  const p = (t) => n.getElementById(t), g = p("app"), y = i || {}, b = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(y.page || "").toLowerCase() === "overview";
  let V = uo.get(Ep) === "1", M = {};
  const L = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, F = (t, e, a) => L({ type: "call_service", domain: t, service: e, service_data: a }), G = n.querySelector("#appearancePane .toggleList");
  G && !p("densityToggle") && (G.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    V = !V, uo.set(Ep, V ? "1" : "0"), Y();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && qt(t).device_class === "power" && /^(W|kW)$/.test(qt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], ot = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + r + '">' + l + "</button>").join("") + "</div>", nt = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function K() {
    var R, E;
    if (!b || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (B, k) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + k + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([B, k]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + k + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", l1.map(([B, k]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + B + '"><div class="tfCardTitle">' + k + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([B, k, H]) => nt(k, H, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + k + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(ei).map(([B, k]) => nt(k.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + k.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (B) => t.querySelector('[data-look-group="' + B + '"]'), r = (B) => B == null ? void 0 : B.closest(".toggleRow");
    [r(t.querySelector(".themeBtn"))].forEach((B) => B && o("look").appendChild(B));
    const l = r(p("densityToggle"));
    l && (l.hidden = !0), [r(p("moreInfoChoice")), r(p("namesChoice"))].forEach((B) => B && o("house").appendChild(B)), o("house").insertAdjacentHTML("beforeend", nt("Lights", "How lights show on the house page.", ot("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + nt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", ot("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [r(p("hoursChoice")), r(p("wxStyleChoice"))].forEach((B) => B && o("weather").appendChild(B));
    const c = p("housePane"), u = c.querySelector(".houseTabs"), f = u.querySelector(".rubberIndicator"), v = "homecore-light-view", S = (B) => {
      c.classList.toggle("tfLightCardsOn", B === "cards"), c.querySelectorAll("[data-light-view]").forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.lightView === B))), uo.set(v, B);
    };
    S(uo.get(v) === "table" ? "table" : "cards"), c.querySelector(".tfLightView").addEventListener("click", (B) => {
      const k = B.target.closest("[data-light-view]");
      k && S(k.dataset.lightView);
    }), new ResizeObserver(() => it()).observe(c), (E = (R = document.fonts) == null ? void 0 : R.ready) == null || E.then(() => it());
    const x = (B) => {
      const k = u.querySelector(".tab.active");
      f.style.transition = "none", B ? us(f, f.offsetLeft, f.offsetWidth, k.offsetLeft, k.offsetWidth) : (f.style.left = k.offsetLeft + "px", f.style.width = k.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(u), c.addEventListener("click", (B) => {
      const k = B.target.closest("[data-house-tab]");
      if (k) {
        u.querySelectorAll(".tab").forEach((C) => C.classList.toggle("active", C === k)), c.querySelectorAll(".houseTab").forEach((C) => C.classList.toggle("active", C.dataset.housePane === k.dataset.houseTab)), k.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), it();
        return;
      }
      const H = B.target.closest("[data-light-fav]");
      if (H) {
        fc(H.dataset.lightFav);
        return;
      }
      const _ = B.target.closest("[data-light-pick]");
      if (_) {
        const [C, at] = _.dataset.lightPick.split("|"), St = { ...$t[C] };
        _.dataset.v ? St[at] = _.dataset.v : delete St[at], $t[C] = St, go(), [...sa.keys()].filter((Rt) => Rt.endsWith(":" + at)).forEach((Rt) => sa.delete(Rt)), Ua();
        return;
      }
      const j = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!j || j.disabled)) {
        if (j.dataset.lights && ($t.lights = j.dataset.lights), j.dataset.dacPad && ($t.dacPad = j.dataset.dacPad), (j.dataset.lights || j.dataset.dacPad) && (go(), sa.clear()), j.dataset.sumToggle) {
          const C = j.dataset.sumToggle, at = new Set(et.hiddenSums || []);
          at.has(C) ? at.delete(C) : at.add(C), et = { ...et, hiddenSums: [...at] }, Ca();
        }
        Ua();
      }
    }), c.addEventListener("change", (B) => {
      const k = B.target;
      k.dataset.source && (et = { ...et, sources: { ...et.sources || {}, [k.dataset.source]: k.value || void 0 } }, Ca());
      const H = k.dataset.lightStyle || k.dataset.lightPad;
      if (H) {
        const _ = k.dataset.lightStyle ? "lightStyles" : "lightPads", j = { ...$t[_] };
        k.value ? j[H] = k.value : delete j[H], $t[_] = j, go(), [...sa.keys()].filter((C) => C.endsWith(":" + H)).forEach((C) => sa.delete(C));
      }
      Ua();
    });
  }
  function N() {
    var x, R;
    oo() && $n();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(eo);
    t.querySelectorAll("[data-lights]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lights === $t.lights))), p("lightsRow").querySelector(".status").textContent = e || !oo() ? "How lights show on the house page." : ia === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.dacPad === $t.dacPad))), p("dacPadRow").hidden = !oo();
    for (const E of t.querySelectorAll("[data-source]")) {
      if (E === n.activeElement) continue;
      const [B] = J.find(([H]) => H === E.dataset.source), k = Object.keys(M).filter(J.find(([H]) => H === B)[3]).sort((H, _) => bt(H).localeCompare(bt(_)));
      E.dataset.sig !== k.join(",") && (E.innerHTML = '<option value="">Automatic</option>' + k.map((H) => '<option value="' + q(H) + '">' + q(bt(H)) + "</option>").join(""), E.dataset.sig = k.join(",")), E.value = k.includes((x = et.sources) == null ? void 0 : x[B]) ? et.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((E) => {
      const B = !(et.hiddenSums || []).includes(E.dataset.sumToggle);
      E.classList.toggle("on", B), E.setAttribute("aria-checked", String(B));
    });
    const a = p("lightRows"), o = p("lightCards"), r = n.activeElement, l = a != null && a.contains(r) || o != null && o.contains(r) ? r : null;
    if (!a || l != null && l.matches("select")) {
      it();
      return;
    }
    const c = new Set(Bt()), u = (E, B, k, H) => '<option value="' + E + '"' + (E === k ? " selected" : "") + ">" + B + "</option>", f = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, B) => !xe.get(E) - !xe.get(B) || (xe.get(E) || "").localeCompare(xe.get(B) || "") || bt(E).localeCompare(bt(B))).map((E) => {
      const B = $t.lightStyles[E] || "", k = $t.lightPads[E] || "", H = c.has(E), _ = q(bt(E));
      return "<tr><td><strong>" + _ + "</strong></td><td>" + q(xe.get(E) || "—") + "</td><td>" + q(Oe(E)) + '</td><td class="metaSwitchCol"><button class="switch' + (H ? " on" : "") + '" type="button" role="switch" aria-checked="' + H + '" data-light-fav="' + q(E) + '" aria-label="' + _ + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(E) + '" aria-label="' + _ + ' tile">' + u("", "Default", B) + u("tile", "HomeCore tile", B) + u("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(E) + '" aria-label="' + _ + ' pad"' + (wn(E) ? "" : " disabled") + ">" + u("", "Default", k) + u("temperature", "Temperature", k) + u("colour", "Colour", k) + "</select></td></tr>";
    }).join(""), v = (E, B, k, H, _) => '<div class="themeChoice" role="group" aria-label="' + k + '">' + H.map(([j, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (j === _) + '" data-light-pick="' + E + "|" + q(B) + '" data-v="' + j + '">' + C + "</button>").join("") + "</div>", S = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, B) => !xe.get(E) - !xe.get(B) || (xe.get(E) || "").localeCompare(xe.get(B) || "") || bt(E).localeCompare(bt(B))).map((E) => {
      const B = c.has(E), k = q(bt(E)), H = [xe.get(E), Oe(E)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + k + '</strong><div class="status">' + H + "</div></div></div>" + nt("Favourite", "", '<button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" data-light-fav="' + q(E) + '" aria-label="' + k + ' is a favourite"></button>') + nt("Tile", "", v("lightStyles", E, k + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], $t.lightStyles[E] || "")) + (wn(E) ? nt("Pad", "", v("lightPads", E, k + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], $t.lightPads[E] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), o.dataset.html !== S && (o.innerHTML = S, o.dataset.html = S), l != null && l.dataset.lightFav && ((R = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), it();
  }
  function it() {
    var e, a, o;
    const t = p("housePane");
    if (t)
      for (const r of t.querySelectorAll(".themeChoice")) {
        const l = [...r.querySelectorAll("button")];
        let c = (e = r.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? r.nextElementSibling : null;
        if (!c) {
          c = document.createElement("select"), c.className = "settingsSelect tfChoiceList", c.setAttribute("aria-label", r.getAttribute("aria-label") || ((o = (a = r.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : o.textContent) || ""), c.addEventListener("change", () => {
            var x;
            return (x = l[Number(c.value)]) == null ? void 0 : x.click();
          }), r.after(c);
          const S = () => {
            c.innerHTML = l.map((R, E) => '<option value="' + E + '"' + (R.disabled ? " disabled" : "") + ">" + q(R.textContent) + "</option>").join("");
            const x = l.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            x >= 0 && (c.value = String(x));
          };
          new MutationObserver(S).observe(r, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), S();
        }
        const u = (S) => {
          r.hidden !== !S && (r.hidden = !S), c.hidden !== S && (c.hidden = S);
        };
        if (l.length > 3) {
          u(!1);
          continue;
        }
        if (!r.getClientRects().length && !c.getClientRects().length) {
          c.dataset.fit || u(!0);
          continue;
        }
        const f = r.hidden;
        r.hidden = !1;
        const v = l.every((S) => S.scrollWidth <= S.clientWidth + 1);
        r.hidden = f, u(v), c.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, g.appendChild(dt);
  let wt = 0;
  function st() {
    if (!V) return;
    const t = p("homeView"), e = (l) => l.offsetParent !== null && !l.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((l) => {
      e(l) && (l.dataset.h = Math.round(l.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), o = window.innerHeight, r = a.filter((l) => {
      const c = l.getBoundingClientRect();
      return c.height > 0 && c.top >= 0 && c.bottom <= o + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + r + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Z = () => {
    V && requestAnimationFrame(st);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", V), (t = p("densityToggle")) == null || t.classList.toggle("on", V), dt.hidden = !V, clearInterval(wt), V && (wt = setInterval(st, 1e3), st());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const P = n.querySelector("#homeView .grid"), xt = document.createElement("style");
  n.appendChild(xt);
  const Pt = new ResizeObserver(() => It()), ct = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function It() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (P.classList.toggle("tfStack", t), ct.forEach((f) => {
      (!t || !f.isConnected) && (Pt.unobserve(f), ct.delete(f));
    }), !t) {
      xt.textContent = "";
      return;
    }
    const e = getComputedStyle(P), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, r = [...P.children].filter((f) => f.dataset.k && f.offsetParent);
    xt.disabled = !0;
    const l = r.map((f) => {
      const v = getComputedStyle(f), S = /span (\d+)/.exec(v.gridColumnStart + " " + v.gridColumnEnd);
      return Math.min(o, S ? +S[1] : v.gridColumnEnd === "-1" ? o : 1);
    });
    xt.disabled = !1;
    let c = 0;
    const u = r.map((f, v) => {
      ct.has(f) || (ct.add(f), Pt.observe(f));
      const S = l[v];
      c + S > o && (c = 0);
      const x = c + 1;
      return c = (c + S) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(f.dataset.k) + '"]{grid-column:' + x + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil(U(f) + a)) + "}";
    }).join(`
`);
    xt.textContent !== u && (xt.textContent = u);
  }
  new MutationObserver(It).observe(P, { childList: !0 }), new MutationObserver(It).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let W = null, Q = null, T = null;
  const ft = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Map(), _t = (t) => ht.set(t, (ht.get(t) || 0) + 1), Vt = () => [.../* @__PURE__ */ new Set([...lt.keys(), ...vt])];
  let ae = !1, Ke = 0;
  const Sa = 6;
  let Xa = null;
  const _a = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
  let et = { favourites: null }, ye = {}, Ja = {}, wr = [], qa = null;
  const rn = (() => {
    try {
      return JSON.parse(uo.get(Gp)) || {};
    } catch {
      return {};
    }
  })();
  let xe = /* @__PURE__ */ new Map(), si = 0;
  function Ca() {
    clearTimeout(si), si = setTimeout(() => Promise.resolve(L({ type: "frontend/set_user_data", key: zp, value: et })).catch(() => {
    }), 400);
  }
  const $t = (() => {
    let t = {};
    try {
      t = JSON.parse(uo.get(Up)) || {};
    } catch {
    }
    const e = (a, o) => Object.fromEntries(Object.entries(a || {}).filter(([, r]) => o.includes(r)));
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
  })(), go = () => uo.set(Up, JSON.stringify($t)), vr = () => {
    g.dataset.more = $t.more, g.dataset.names = $t.names, bl();
  };
  b && G && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + c1.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && ($t.more = e.dataset.moreStyle, go(), vr(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + d1.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && ($t.names = e.dataset.namesStyle, $t.namesPicked = !0, go(), vr(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + p1.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && ($t.hoursWindow = e.dataset.hoursWindow, go(), Ae == null || Ae.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + u1.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && ($t.wxStyle = e.dataset.wxStyle, go(), Ae == null || Ae.setStyle($t.wxStyle), ke == null || ke.forEach((a) => a.setStyle($t.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), K();
  let Gt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ma = /* @__PURE__ */ new Map();
  let li = "";
  const ci = b ? Oh({ onChange: () => Be() }) : null;
  b && g.classList.add("house");
  const ga = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ae = null, di = null, sn = !1;
  function pi(t) {
    const e = yn();
    if (g.classList.toggle("houseBento", !!e), Ae && (di !== e || t == null) && (Ae.destroy(), Ae = null), !e || t == null) {
      ga.remove();
      return;
    }
    ga.isConnected || P.append(ga), ga.style.order = t, !Ae && !sn && (Ae = Ap(ga, { getHass: d, entityId: e, style: $t.wxStyle, hoursWindow: () => $t.hoursWindow, radarSource: Mr }), di = e);
  }
  const yr = [
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
  ], ui = yr.map(([t]) => t), Go = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], fi = { hourly: 2 }, Qa = Object.fromEntries(yr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ke = null, xr = null;
  function hi(t) {
    const e = yn();
    ke && xr !== e && (ke.forEach((a) => a.destroy()), ke = null), Object.values(Qa).forEach((a) => e ? !a.isConnected && P.append(a) : a.remove()), e && !ke && !sn && (ke = /* @__PURE__ */ new Map(), xr = e), kr();
  }
  const Mr = () => {
    var t;
    return ((t = re().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, vs = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => bt(t.entity_id).localeCompare(bt(e.entity_id))).map((t) => ["camera:" + t.entity_id, bt(t.entity_id)])];
  function kr() {
    if (!ke || sn) return;
    const t = new Set(re().hidden);
    yr.forEach(([e, a]) => {
      ke.has(e) || t.has(e) && !(Qt != null && Qt.fromTray && Qt.key === e) || ke.set(e, Ap(Qa[e], { getHass: d, entityId: xr, style: $t.wxStyle, cards: a, onOpen: e === "wx" ? () => hd("weather") : void 0, radarSource: Mr }));
    });
  }
  const qt = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, bt = (t) => qt(t).friendly_name || t, he = (t, e) => $a(t) || (Number(qt(t).supported_features) & e) === e, jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, He = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), bo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Sr = (t) => qt(t).supported_color_modes || [], ys = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), _r = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), mi = (t) => 0.2126 * _r(t[0]) + 0.7152 * _r(t[1]) + 0.0722 * _r(t[2]), xs = (t, e) => {
    const a = mi(t), o = mi(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, Ms = 0.55, Uo = ["hs", "xy", "rgb", "rgbw", "rgbww"], gi = (t) => {
    const e = qt(t), a = Uo.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ys(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, ks = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function ln(t) {
    var o;
    const e = t.split(".")[0], a = (o = M[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? gi(t) : null : e === "climate" ? ks[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function Cr(t, e, a = !1) {
    const [o, r, l] = t.map((B) => B / 255), c = Math.max(o, r, l), u = Math.min(o, r, l), f = c - u, v = f ? (c === o ? (r - l) / f + (r < l ? 6 : 0) : c === r ? (l - o) / f + 2 : (o - r) / f + 4) * 60 : 0, S = (c + u) / 2, x = f ? f / (1 - Math.abs(2 * S - 1)) : 0, R = f < 0.1 ? Math.min(x, 0.25) : 1, E = (B) => {
      const k = (_) => (_ + v / 30) % 12, H = R * Math.min(B, 1 - B);
      return [0, 8, 4].map((_) => Math.round(255 * (B - H * Math.max(-1, Math.min(k(_) - 3, 9 - k(_), 1)))));
    };
    for (let B = 0.5; a ? B < 0.96 : B > 0.04; B += a ? 0.01 : -0.01) {
      const k = E(B);
      if (xs(k, e) >= 3) return "rgb(" + k.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Wn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Cr(e, [58, 58, 58], !0) + ";--sum-l:" + Cr(e, [230, 230, 230]);
  }, to = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Ar = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + to.d[t] + ";--g" + t + "-l:" + to.l[t]).join(";"), bi = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Xe = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * Ms));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Cr(t, e);
  }, Tr = (t) => Xe(gi(t)), wo = (t) => {
    const e = ln(t);
    return e ? ' data-light style="' + Xe(e) + '"' : "";
  }, vo = (t) => {
    const e = Sr(t);
    return e.length ? e.some((a) => a !== "onoff") : qt(t).brightness != null;
  }, Vn = (t) => [qt(t).min_color_temp_kelvin || 2e3, qt(t).max_color_temp_kelvin || 6500], ba = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function wi(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const o = Math.round(a / 60);
    if (o < 24) return o + (o === 1 ? " hour ago" : " hours ago");
    const r = Math.round(o / 24);
    return r + (r === 1 ? " day ago" : " days ago");
  }
  const Wa = (t) => {
    var e;
    return qt(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, cn = (t) => {
    var e;
    return Ye("pos", t, ((e = _a.get(t)) == null ? void 0 : e.pos) ?? Wa(t));
  }, Lr = (t) => {
    var e;
    return Ye("tilt", t, ((e = _a.get(t)) == null ? void 0 : e.tilt) ?? qt(t).current_tilt_position);
  };
  function Oe(t) {
    var c;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (vo(t) ? bo(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Uo.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : jt(a.hvac_action || e.state)) + " · " + He(a.current_temperature) + " °C now";
    if (o === "cover") {
      const u = Wa(t), f = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? jt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (f > 0 && f < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return jt(e.state) + (e.state === "cleaning" && ((c = a.rooms) != null && c.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : jt(e.state);
    if (o === "alarm_control_panel") return Xp[e.state] || jt(e.state);
    if (o === "lock" || o === "valve") return jt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : jt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : ls.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + ba(a.rang);
    const r = d();
    if (r != null && r.formatEntityState && !$a(t))
      try {
        return r.formatEntityState(e);
      } catch {
      }
    const l = Number(e.state);
    if (e.state !== "" && Number.isFinite(l)) {
      const u = Math.abs(l) >= 100 ? 0 : Math.abs(l) >= 10 ? 1 : 2, f = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return l.toLocaleString(void 0, { maximumFractionDigits: u }) + f + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return jt(e.state);
  }
  const Dr = (t) => t >= 1e3 ? He(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W", Ss = Object.fromEntries(qh.map((t) => [t.id, t])), _s = {
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
  }, Er = (t) => {
    var o;
    const e = t.entity_id.split(".")[0], a = (o = t.attributes) == null ? void 0 : o.device_class;
    return e === "light" ? "light" : e === "switch" ? "plug" : e === "climate" ? "thermostat" : e === "fan" ? "fan" : e === "cover" ? ["door", "garage", "gate"].includes(a) ? "door" : a === "window" ? "window" : "blinds" : e === "lock" ? "lock" : e === "camera" ? "camera" : e === "media_player" ? a === "tv" ? "tv" : "speaker" : e === "vacuum" ? "vacuum" : e === "alarm_control_panel" ? "alarm" : e === "person" ? "person" : e === "sun" ? "sun" : e === "binary_sensor" ? { door: "door", garage_door: "door", opening: "door", window: "window", motion: "motion", occupancy: "motion", presence: "motion", moisture: "humidity" }[a] || null : e === "sensor" && { temperature: "temperature", humidity: "humidity", moisture: "humidity", power: "energy", energy: "energy", illuminance: "sun" }[a] || null;
  }, dn = (t, e) => {
    var a, o, r, l;
    return e ? _s[e] || null : !t || (a = t.attributes) != null && a.icon || (l = (r = (o = d()) == null ? void 0 : o.entities) == null ? void 0 : r[t.entity_id]) != null && l.icon ? null : Er(t);
  };
  let Br = 0;
  function Aa(t) {
    var a, o;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((r) => {
      var f;
      const l = M[r.dataset.iconFor], c = r.dataset.iconName || "", u = dn(l, c);
      if (u) {
        (r.dataset.hc !== u || !r.querySelector(":scope>svg.hcGlyph")) && (r.innerHTML = Vh(Ss[u], 24, "hcg" + ++Br).replace("<svg ", '<svg class="hcGlyph" '), r.dataset.hc = u);
        return;
      }
      if (r.dataset.hc && (delete r.dataset.hc, r.textContent = ""), customElements.get("ha-state-icon") && l && !c) {
        let v = r.firstElementChild;
        (!v || v.localName !== "ha-state-icon") && (r.textContent = "", v = document.createElement("ha-state-icon"), r.appendChild(v)), v.hass = e, v.stateObj = l;
      } else if (customElements.get("ha-icon")) {
        let v = r.firstElementChild;
        (!v || v.localName !== "ha-icon") && (r.textContent = "", v = document.createElement("ha-icon"), r.appendChild(v)), v.icon = c || ((f = l == null ? void 0 : l.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || bt(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(jn), (o = t.classList) != null && o.contains("tfIcon") && jn(t), xi();
  }
  const vi = /* @__PURE__ */ new Map();
  function jn(t) {
    var l, c, u;
    const e = (((l = t.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + (t.dataset.iconFor || ((c = t.querySelector("[data-icon-for]")) == null ? void 0 : c.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), o = { backgroundColor: a.backgroundColor, color: a.color }, r = vi.get(e);
    vi.set(e, o), !(!r || r.backgroundColor === o.backgroundColor && r.color === o.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([r, o], { duration: De.warp.cdur, delay: De.warp.cdelay, easing: Ee[De.warp.ease], fill: "backwards" });
  }
  const Rr = "[data-icon-for]>:is(ha-state-icon,ha-icon,svg.hcGlyph),.tfIcon>svg", yi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Pr(t) {
    var E, B, k, H, _, j, C;
    const e = t.localName === "svg" ? t : yi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((at) => !at.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const o = (E = t.closest(".tfIcon")) == null ? void 0 : E.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const r = o + "|" + a.map((at) => at.getAttribute("d") || at.localName).join("|");
    if (t.dataset.fitted === r) return !0;
    let l = 1 / 0, c = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const at of a) {
      const St = at.getBBox(), Rt = getComputedStyle(at), Wt = Rt.stroke !== "none" ? (parseFloat(Rt.strokeWidth) || 0) / 2 : 0;
      if (!St.width && !St.height) continue;
      const Ft = (_ = (H = (k = (B = at.transform) == null ? void 0 : B.baseVal) == null ? void 0 : k.consolidate) == null ? void 0 : H.call(k)) == null ? void 0 : _.matrix, kt = Ft ? (() => {
        const Tt = [[St.x, St.y], [St.x + St.width, St.y], [St.x, St.y + St.height], [St.x + St.width, St.y + St.height]].map(([ge, Re]) => [Ft.a * ge + Ft.c * Re + Ft.e, Ft.b * ge + Ft.d * Re + Ft.f]), pe = Tt.map((ge) => ge[0]), me = Tt.map((ge) => ge[1]);
        return { x: Math.min(...pe), y: Math.min(...me), width: Math.max(...pe) - Math.min(...pe), height: Math.max(...me) - Math.min(...me) };
      })() : St;
      l = Math.min(l, kt.x - Wt), c = Math.min(c, kt.y - Wt), u = Math.max(u, kt.x + kt.width + Wt), f = Math.max(f, kt.y + kt.height + Wt);
    }
    if (!(u > l)) return !1;
    const v = (C = (j = e.viewBox) == null ? void 0 : j.baseVal) != null && C.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = o > 40 ? o * (26 / 40) : o - 14, x = S * v.width / Math.max(u - l, f - c), R = x / v.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((v.x + v.width / 2 - (l + u) / 2) * R).toFixed(2) + "px " + ((v.y + v.height / 2 - (c + f) / 2) * R).toFixed(2) + "px", t.dataset.fitted = r, !0;
  }
  let pn = 0;
  function yo(t = 0) {
    clearTimeout(pn), [...n.querySelectorAll(Rr)].filter((a) => !Pr(a)).length && t < 5 && (pn = setTimeout(() => yo(t + 1), 300));
  }
  function xi() {
    clearTimeout(pn), pn = setTimeout(() => yo(), 60);
  }
  const Mi = (t) => {
    var e, a, o;
    return t.startsWith("light.") && M[t] && !qt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, fe = (t, e, a) => (e = e || Mi(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), Je = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : qt(t).rang ? "mdi:doorbell" : "", Dt = (t, e, a, o) => q([t, e, a, o ? JSON.stringify(o) : ""].join("|")), Ta = (t) => q(JSON.stringify(t));
  function Yo(t) {
    const e = q(bt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + fe(t, Je(t)) + '></div><div><div class="activityRowName">' + q(bt(t)) + '</div><div class="activityRowMeta">' + q(Oe(t)) + "</div></div></div>";
  }
  const zn = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + fe("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function un(t, e, a, o, r = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(l) + '" aria-label="' + q(a + (M[l] ? ", " + Oe(l) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + r + "</section>";
  }
  function Cs(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((r) => Yo(r));
    return t.power != null && o.push(zn("Power now", Dr(t.power), "mdi:flash")), un(a, e, "Readings", o);
  }
  function qe(t, e) {
    var u;
    const a = "energy:" + t.id, [o, r] = [t.solar.find((f) => f.endsWith("_power")), t.solar.find((f) => f.endsWith("_today"))], l = [o, r].filter(Boolean).map((f) => Yo(f)), c = Number(((u = M[o]) == null ? void 0 : u.state) || 0) * 1e3;
    return Gt.grid && (l.push(Yo(Gt.grid)), l.push(zn("House use", Dr(c + Number(M[Gt.grid].state)), "mdi:home-lightning-bolt"))), un(a, e, "Energy", l, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const fn = (t, e) => un("plant:" + t.id, e, bt(t.id), t.readings.map((a) => Yo(a)), "", t.id);
  function hn(t, e, a, o, r, l, c = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), f = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + f + '"' + (r ? ' aria-valuetext="' + q(r) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (c != null ? '<span class="was" aria-hidden="true" style="left:' + c + '%"></span>' : "") + (l ? u == null ? "" : '<b style="left:' + f + '%"></b>' : '<i style="width:' + f + '%"></i>') + "</div>";
  }
  const Gn = "homecore-house-last-bright", wa = (() => {
    try {
      return JSON.parse(uo.get(Gn)) || {};
    } catch {
      return {};
    }
  })();
  let Hr = 0;
  const ki = (t, e) => {
    !e || wa[t] === e || (wa[t] = e, clearTimeout(Hr), Hr = setTimeout(() => uo.set(Gn, JSON.stringify(wa)), 500));
  }, ra = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + Pp.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + Pp.up + "</button></div>", va = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + q(o.aria) + '"' : "") + ">" + (o.html || q(o.label)) + "</button>").join("") + "</div>", Un = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), mn = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", gn = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Un(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + mn(e) + '">' + Math.round(e) + "%</output></div>";
  function xo(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, r) => {
      o.firstElementChild.setAttribute("style", Un(e, r)), o.lastElementChild.classList.toggle("lit", e >= (r + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", mn(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Si = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", _i = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(bt(t)) + '">' + [
    he(t, Fp) && ["open", "Open", "open_cover", e >= 100 && !a],
    he(t, Wp) && ["stop", "Stop", "stop_cover", !1],
    he(t, qp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, r, l, c]) => '<button type="button" data-act="' + Dt("cover", l, t) + '" aria-label="' + r + '"' + (c ? " disabled" : "") + ">" + i1[o] + "</button>").join("") + "</div>", bn = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : fe(t, e.icon)) + "></button>", Yn = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(bt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Oe(t)) + "</span></button>";
  function Zn(t, e = !1, a = null) {
    const o = ro(t), r = t.startsWith("light.") && Va(t) && !(a && Mn(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = r ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : o.sections.map((u, f) => u && (!l || l.includes((o.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (r ? " tfDac" : "") + (o.on ? " on" : "") + (!r && !c.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + wo(t) + '><div class="tfActionHead">' + bn(t, o) + Yn(t) + "</div>" + c.join("") + "</div>";
  }
  const eo = "dual-controller-v3", ao = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let ia = null;
  async function $n() {
    if (ia || customElements.get(eo)) return;
    ia = "loading";
    const t = await Promise.resolve().then(() => L({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(eo), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(eo)) return;
    const a = Object.assign(document.createElement("script"), { src: ao });
    a.onerror = () => {
      ia = "failed", N();
    }, document.head.appendChild(a);
  }
  const sa = /* @__PURE__ */ new Map(), wn = (t) => ($t.lightStyles[t] || $t.lights) === "dac", oo = () => $t.lights === "dac" || Object.values($t.lightStyles).includes("dac");
  function Va(t) {
    return wn(t) && !!customElements.get(eo);
  }
  const Kn = (t) => $t.lightPads[t] || $t.dacPad, Nr = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, o, ...r) => t.callService(e, ...Pd(e, a, o), ...r)
    };
  }, As = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", Ts = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: As })).dataset.tf = "");
  }, no = /* @__PURE__ */ new Map(), Ci = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), no.set(a.dataset.dac, a.offsetHeight));
  }));
  function Ne(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let o = sa.get(a);
      if (!o) {
        const r = a.slice(a.indexOf(":") + 1);
        o = document.createElement(eo), o.setConfig({ type: "custom:" + eo, entity: r, pad: Kn(r), tap_action: { action: "none" } }), sa.set(a, o);
      }
      o.hass = Nr(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && no.has(a) && (e.style.minHeight = no.get(a) + "px"), Ci.observe(o), Ts(o);
    });
  }
  function Ai() {
    const t = Nr();
    sa.forEach((e, a) => {
      e.isConnected ? e.hass = t : sa.delete(a);
    });
  }
  customElements.whenDefined(eo).then(() => {
    b && (P != null && P.querySelector("[data-tf]")) && gd(Ua);
  });
  const Ye = (t, e, a) => lt.has(t + "|" + e) ? lt.get(t + "|" + e) : a;
  function ro(t) {
    var l, c;
    const e = M[t], a = e.attributes, o = t.split(".")[0], r = (u, f) => ({ act: Dt(u, "toggle", t), label: f });
    if (o === "light") {
      const u = e.state === "on", f = Sr(t), [v, S] = Vn(t), x = Ye("bright", t, bo(e));
      u && ki(t, bo(e));
      const R = Ye("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), E = Ye("hue", t, u && Uo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: r("light", "Turn " + bt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        vo(t) && hn("bright", t, x / 100, bt(t) + " brightness", x + "%", !1, u ? null : wa[t] ?? null),
        f.includes("color_temp") && hn("ct", t, R == null ? null : (R - v) / (S - v), bt(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        f.some((B) => Uo.includes(B)) && hn("hue", t, E == null ? null : E / 360, bt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: r("climate", "Turn " + bt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ra("Target temperature", He(f) + " °C", Dt("climate", "set_temperature", t, { temperature: f - u }), Dt("climate", "set_temperature", t, { temperature: f + u })),
        va("tfSeg", "Mode", (a.hvac_modes || []).map((v) => ({ label: jt(v), act: Dt("climate", "set_hvac_mode", t, { hvac_mode: v }), pressed: e.state === v })))
      ] };
    }
    if (o === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", v = cn(t), S = Lr(t);
      return { on: !f, tone: "blue", icon: Vp[Jl(e)][f ? 1 : 0], button: r("cover", (f ? "Open " : "Close ") + bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        he(t, tc) && gn(t, v),
        S != null && Si(t, S),
        _i(t, v, u)
      ] };
    }
    if (o === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: r("humidifier", "Turn " + bt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ra("Target humidity", u + "%", Dt("humidifier", "set_humidity", t, { humidity: u - 1 }), Dt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && va("tfSeg", "Mode", a.available_modes.map((f) => ({ label: jt(f), act: Dt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (o === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", v = Ye("vol", t, a.volume_level), S = f ? { act: Dt("media_player", he(t, n1) ? "turn_on" : "toggle", t), label: "Turn " + bt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Dt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + bt(t) } : { act: Dt("media_player", he(t, r1) ? "turn_off" : "toggle", t), label: "Turn " + bt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: S, parts: ["playback", "volume"], sections: f ? [] : [
        (he(t, Np) || he(t, Op) || he(t, Hp) || he(t, Ip)) && va("tfSeg", "Playback", [
          { html: rs.prev, aria: "Previous", act: Dt("media_player", "media_previous_track", t), disabled: !he(t, Np) },
          { html: u ? rs.pause : rs.play, aria: u ? "Pause" : "Play", act: Dt("media_player", "media_play_pause", t), disabled: !(he(t, Hp) || he(t, Ip)) },
          { html: rs.next, aria: "Next", act: Dt("media_player", "media_next_track", t), disabled: !he(t, Op) }
        ]),
        he(t, o1) && v != null && hn("vol", t, v, bt(t) + " volume", Math.round(v * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], v = (x) => f.includes(x) ? f.filter((R) => R !== x) : f.concat(x), S = Dt("vacuum", u ? "pause" : "start", t, $a(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: S, label: (u ? "Pause " : "Start ") + bt(t) }, parts: ["controls", "rooms"], sections: [
        va("tfSeg", bt(t), [
          { label: u ? "Pause" : "Start", act: S },
          { label: "Dock", act: Dt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Dt("vacuum", "locate", t) }
        ]),
        $a(t) && va("tfChips", "Rooms to clean", Gt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Dt("vacuum", "set_rooms", t, { rooms: v(x.name) }), pressed: f.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Dt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + bt(t) }, parts: ["controls"], sections: [
        va("tfSeg", bt(t), [
          { label: "Lock", act: Dt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Dt("lock", "unlock", t), pressed: e.state === "unlocked" },
          he(t, $p) && { label: "Open", act: Dt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Dt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + bt(t) + ", away" : "Disarm " + bt(t) }, parts: ["controls"], sections: [
        va("tfSeg", bt(t), Kp.filter(([, , , f]) => !f || he(t, f)).map(([f, v, S]) => ({ label: v, act: Dt("alarm_control_panel", S, t), pressed: e.state === f })))
      ] };
    }
    if (o === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: r("valve", (u ? "Close " : "Open ") + bt(t)), parts: ["controls"], sections: [
        va("tfSeg", bt(t), [
          { label: "Open", act: Dt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Dt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (o === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, v = e.state !== "off";
      return { on: v, tone: "heat", icon: "mdi:water-boiler", button: { act: Dt("water_heater", v ? "turn_off" : "turn_on", t), label: "Turn " + bt(t) + (v ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ra("Target temperature", u + " °C", Dt("water_heater", "set_temperature", t, { temperature: u - f }), Dt("water_heater", "set_temperature", t, { temperature: u + f })),
        ((c = a.operation_list) == null ? void 0 : c.length) && va("tfSeg", "Mode", a.operation_list.map((S) => ({ label: jt(S), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (a.operation_mode || e.state) === S })))
      ] };
    }
    if (ai.includes(o)) {
      const u = e.state === "on";
      return { on: u, button: r(o, "Turn " + bt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: bt(t) }, sections: [] };
  }
  const Zo = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : He(t)) + "°";
  function s(t) {
    var H;
    const e = (_) => t.readings.find((j) => qt(j).device_class === _), a = e("temperature"), o = e("humidity"), r = (_) => {
      var j;
      return Number((j = M[_]) == null ? void 0 : j.state);
    }, l = (_) => t.actions.filter((j) => _.test(j)), c = t.lights.filter((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) === "on";
    }), u = l(/^cover\./), f = u.filter((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) !== "closed";
    }), v = [...new Set(u.map((_) => Jl(M[_])))], S = l(/^climate\./)[0], x = l(/^humidifier\./)[0], R = l(/^media_player\./), E = R.find((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) === "playing";
    }) || R.find((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) === "paused";
    }), B = t.plugs.filter((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) === "on";
    }), k = [];
    if (a && Number.isFinite(r(a)) && k.push({ key: "temp", id: a, kind: "reading", icon: fo(a), label: "Temperature", value: He(r(a)) + "°" }), o && Number.isFinite(r(o)) && k.push({ key: "hum", id: o, kind: "reading", icon: fo(o), label: "Humidity", value: Math.round(r(o)) + "%" }), t.lights.length && k.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: fo("", "mdi:lightbulb"),
      label: "Lights",
      value: c.length ? c.length + " of " + t.lights.length + " on" : "All off",
      short: c.length ? c.length + " on" : "Off",
      on: c.length > 0,
      light: c.length ? Tr(c[0]) : "",
      acts: t.lights.map((_) => ["light", c.length ? "turn_off" : "turn_on", _]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const _ = v.length === 1 ? s1[v[0]] : "covers", j = Math.round(u.reduce((C, at) => C + Wa(at), 0) / u.length);
      k.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? Xe([146, 107, 199]) : "",
        icon: fo("", ((H = Vp[v[0]]) == null ? void 0 : H[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: jt(_),
        value: j <= 0 ? "Closed" : j >= 100 ? "Open" : j + "% open",
        short: j <= 0 ? "Closed" : j + "%",
        on: f.length > 0,
        acts: u.map((C) => ["cover", f.length ? "close_cover" : "open_cover", C]),
        aria: (f.length ? "Close the " : "Open the ") + _ + " in " + t.name
      });
    }
    if (S) {
      const _ = qt(S), j = M[S].state === "off";
      k.push({
        key: "climate",
        kind: "control",
        tone: _.hvac_action === "cooling" ? "cool" : "heat",
        light: ln(S) ? Xe(ln(S)) : "",
        icon: fo(S),
        label: bt(S),
        value: j ? "Off" : jt(_.hvac_action || M[S].state) + " · " + Zo(_.temperature),
        short: j ? "Off" : Zo(_.temperature),
        on: !j,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + bt(S) + (j ? " on" : " off")
      });
    }
    if (x) {
      const _ = M[x].state === "on";
      k.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: _ ? Xe([33, 150, 243]) : "",
        icon: fo("", "mdi:air-humidifier"),
        label: bt(x),
        value: _ ? "On · " + qt(x).humidity + "%" : "Off",
        short: _ ? qt(x).humidity + "%" : "Off",
        on: _,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + bt(x) + (_ ? " off" : " on")
      });
    }
    if (R.length) {
      const _ = E || R[0], j = M[_], C = j.state === "playing";
      k.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: ln(_) ? Xe(ln(_)) : "",
        icon: fo(_),
        label: bt(_),
        value: Oe(_),
        short: C ? "Playing" : j.state === "paused" ? "Paused" : jt(j.state),
        on: C,
        acts: [["media_player", j.state === "playing" || j.state === "paused" ? "media_play_pause" : "toggle", _]],
        aria: (C ? "Pause " : "Play ") + bt(_)
      });
    }
    return t.plugs.length && k.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: B.length ? Xe([255, 193, 7]) : "",
      icon: fo("", "mdi:power-plug"),
      label: "Plugs",
      value: B.length ? B.length + " of " + t.plugs.length + " on" : "All off",
      short: B.length ? B.length + " on" : "Off",
      on: B.length > 0,
      acts: t.plugs.map((_) => ["switch", B.length ? "turn_off" : "turn_on", _]),
      aria: (B.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((_) => k.push(qt(_).device_class === "moisture" ? { key: "alert:" + _, kind: "alert", icon: fo(_), label: "Water leak" } : { key: "note:" + _, kind: "note", icon: fo(_), label: bt(_) + " " + Oe(_).toLowerCase() })), k;
  }
  const h = (t, e) => {
    const a = (o) => t.actions.filter((r) => o.test(r));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const o = a(/^media_player\./);
        return [o.find((r) => {
          var l;
          return ((l = M[r]) == null ? void 0 : l.state) === "playing";
        }) || o.find((r) => {
          var l;
          return ((l = M[r]) == null ? void 0 : l.state) === "paused";
        }) || o[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function m(t, e, a = !1) {
    const o = e.find((u) => u.key === "lights"), r = !!(o != null && o.on), l = "", c = '<span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (r ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (r ? " on" : "") + '" type="button"' + l + ' data-acts="' + Ta(o.acts) + '" aria-label="' + q(o.aria) + '" aria-pressed="' + r + '">' + c + "</button>";
  }
  const w = (t) => t.readings.find((e) => qt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, D = (t, e) => {
    const a = bt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? jt(a.slice(t.name.length + 1)) : a;
  };
  function I(t) {
    const e = M[t], a = qt(t), o = t.split(".")[0], r = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(r)) {
      if (a.device_class === "temperature") return { text: Zo(r) };
      const l = a.unit_of_measurement || "";
      return l === "%" ? { text: Math.round(r) + "%" } : { text: He(r, Number.isInteger(r) ? 0 : 1), unit: l };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: Zo(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : vo(t) ? bo(e) + "%" : "On" };
    if (o === "cover") {
      const l = Wa(t);
      return { text: l <= 0 ? "Closed" : l >= 100 ? "Open" : l + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : jt(e.state) } : { text: Oe(t) };
  }
  const z = (t, e, a) => {
    const o = a.find((u) => u.key === "temp"), r = a.find((u) => u.key === "hum"), l = qt(e), c = M[e].state === "off";
    return e.startsWith("climate.") ? [D(t, e), c ? "Off" : jt(l.hvac_action || M[e].state) + (l.temperature != null ? " · " + Zo(l.temperature) : ""), r && r.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && D(t, e), o && o.id !== e && o.value, r && r.id !== e && r.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function $(t) {
    const e = t.id === W, a = s(t), o = w(t), r = o && I(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + Lt(t, null, ' data-cols="2" data-rows="' + Mn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + m(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (r ? q(r.text + (r.unit ? " " + r.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let O = [];
  const X = (t) => {
    const e = et.areaOrder || [], a = (o) => {
      const r = e.indexOf(o.id);
      return r < 0 ? e.length + t.indexOf(o) : r;
    };
    return [...t].sort((o, r) => a(o) - a(r));
  }, tt = () => {
    var e;
    const t = new Set(((e = et.dash) == null ? void 0 : e.areasOff) || []);
    return X(O).filter((a) => !t.has(a.id));
  }, mt = Xe([255, 162, 75]), Ot = (t) => {
    const e = t.id === W;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + q(t.id) + '"' + (e ? ' data-light style="' + mt + '"' : "") + ' aria-label="' + q(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, Et = (t) => {
    var o;
    const e = tt();
    e.some((r) => r.id === W) || (W = ((o = e[0]) == null ? void 0 : o.id) || null);
    const a = e.find((r) => r.id === W);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map($).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? Lt(a, null, ' data-cols="2" data-rows="' + Mn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Ot).join("") + "</div></div></div>";
  }, Ct = (t) => t.startsWith("room:"), zt = (t) => O.find((e) => "room:" + e.id === t);
  function Lt(t, e, a = "") {
    const o = s(t), r = w(t), l = r && I(r), c = r ? z(t, r, o) : "", u = l ? l.text + (l.unit ? " " + l.unit : "") : "", f = (_) => {
      const j = h(t, _.key);
      return j.length === 1 ? j[0] : "group:" + t.id + ":" + _.key;
    }, v = o.filter((_) => _.kind === "control").slice(0, 4), S = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", x = (_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + S(_) + ' data-acts="' + Ta(_.acts) + '" aria-label="' + q(_.aria) + '" aria-pressed="' + _.on + '">' + _.icon + "</button>", R = (_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + S(_) + ' data-more="' + q(f(_)) + '" aria-label="' + q(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '">' + _.icon + "</button>", E = v.map(R), B = v.map((_) => '<div class="tfRoomDev' + (_.on ? " on" : "") + '" data-more="' + q(f(_)) + '">' + (_.acts ? x(_) : R(_)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + q(f(_)) + '" aria-label="' + q(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '"><span class="activityRowName">' + q(_.label) + '</span><span class="activityRowMeta">' + q(_.value) + "</span></button></div>"), k = '<span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", H = '<button class="tfIcon tfIconOpen tfRoomIcon" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '">' + k + "</button>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + q(e) + '"' : "") + a + ' data-go="' + q(t.id) + '"><div class="tfActionHead">' + H + '<button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (u || c ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + q(u) + (c ? " · " : "") + "</span>" : "") + q(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + q(r) + '" aria-label="' + q(bt(r) + ", " + Oe(r) + ". More info") + '"><span class="tfRoomBig">' + q(u) + "</span>" + (c ? '<span class="tfRoomSub">' + q(c) + "</span>" : "") + "</button>" : "") + (E.length ? '<div class="tfRoomDevices">' + E.join("") + '</div><div class="tfRoomHeads">' + B.join("") + "</div>" : "") + "</div>";
  }
  const pt = () => [
    { key: "home", name: "Home", ids: Gt.homeVacuums },
    ...Gt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ht = (t, e, a) => t + " " + (t === 1 ? e : a), Bt = () => (et.favourites ?? ye.favorite_entities ?? []).filter((t) => M[t]);
  function Se() {
    if (!qa) {
      const e = Object.entries(rn).sort((o, r) => r[1] - o[1]).map(([o]) => o), a = Gt.rooms.flatMap((o) => o.actions);
      qa = [.../* @__PURE__ */ new Set([...wr, ...e, ...a.filter((o) => ro(o).on), ...a])];
    }
    const t = Bt();
    return qa.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let At = !1;
  const le = 6;
  function ce() {
    if (!At || et.favSeeded || !Gt.rooms.length || A) return;
    const t = (a) => Object.keys(M).find((o) => $a(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Gt.security.locks[0]];
    et = { ...et, favourites: [.../* @__PURE__ */ new Set([...et.favourites ?? ye.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, le), favSeeded: !0 }, Ca();
  }
  const We = () => et.suggest ?? !ye.hide_suggested_entities;
  function Mo() {
    const t = new Set(A ? [] : et.favHidden || []), e = Bt().filter((r) => !t.has(r)), a = We() ? Se().filter((r) => !t.has(r) && Ps(r)) : [], o = Math.max(le, e.length);
    return [...e, ...a].slice(0, A && !qi() ? o : Math.min(b1, o));
  }
  const Ti = (t) => {
    const e = Bt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(bt(t)) + '">' + m1(e) + "</button>";
  };
  function vn(t, { area: e = !1, star: a = !1, plain: o = !1, say: r = null, alert: l = !1 } = {}) {
    var B, k, H, _, j, C;
    const c = o && ((j = (B = d()) == null ? void 0 : B.devices) == null ? void 0 : j[(_ = (H = (k = d()) == null ? void 0 : k.entities) == null ? void 0 : H[t]) == null ? void 0 : _.device_id]), u = c && (c.name_by_user || c.name) || bt(t), f = t.split(".")[0], v = !o && fr.includes(f) ? ro(t) : null, S = v ? v.on : ["on", "open", "playing"].includes((C = M[t]) == null ? void 0 : C.state), x = o ? null : v ? v.button : ai.includes(f) ? { act: Dt(f, "toggle", t), label: "Turn " + bt(t) + (S ? " off" : " on") } : f === "scene" || f === "script" ? { act: Dt(f, "turn_on", t), label: "Run " + bt(t) } : null, R = (r ?? Oe(t)) + (e && xe.get(t) ? " · " + xe.get(t) : ""), E = (v == null ? void 0 : v.icon) || Je(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (v == null ? void 0 : v.tone) || "blue") + '"' + wo(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + q(x.label) + '"' + fe(t, E) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + fe(t, E) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(u + ", " + R + ". More info") + '"><span class="activityRowName">' + q(u) + '</span><span class="activityRowMeta">' + q(R) + "</span></button>" + (a ? Ti(t) : "") + "</div>";
  }
  const yn = () => {
    var t;
    return M[(t = et.sources) == null ? void 0 : t.weather] ? et.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function Jt() {
    var a;
    const t = (o) => Object.keys(M).filter((r) => r.startsWith("binary_sensor.") && o.includes(qt(r).device_class));
    return ((a = Ja.alert_entities) != null && a.length ? Ja.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t(ls).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => M[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[o.entity].state) }));
  }
  function ko() {
    const t = Object.keys(ei), e = /* @__PURE__ */ new Set(), a = [];
    (ye.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || e.has(l.key)) return;
        e.add(l.key);
      }
      a.push(l);
    }), t.forEach((l) => {
      e.has(l) || a.push({ type: "summary", key: l });
    });
    const o = Ko().sumOrder || [], r = (l) => l.type === "summary" && o.includes(l.key) ? o.indexOf(l.key) : o.length;
    return o.length ? a.map((l, c) => [l, c]).sort((l, c) => r(l[0]) - r(c[0]) || l[1] - c[1]).map(([l]) => l) : a;
  }
  function $o() {
    var H;
    const t = ((H = d()) == null ? void 0 : H.entities) || {}, e = (_) => qt(_).device_class, a = Object.keys(M).filter((_) => _.startsWith("sensor.") && e(_) === "battery" || _.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(_))), o = Gt.rooms.flatMap((_) => _.plants.map((j) => j.id));
    if (!a.length && !o.length) return null;
    const r = (_) => {
      var C;
      const j = (C = t[_]) == null ? void 0 : C.device_id;
      return !!j && Object.keys(M).some((at) => {
        var St;
        return at.startsWith("binary_sensor.") && ((St = t[at]) == null ? void 0 : St.device_id) === j && e(at) === "battery_charging" && M[at].state === "on";
      });
    }, l = (_) => _.startsWith("vacuum.") ? qt(_).battery_level <= 20 && M[_].state !== "docked" : _.startsWith("binary_sensor.") ? e(_) === "battery" && M[_].state === "on" : parseFloat(M[_].state) <= 20 && !r(_), c = [...a, ...Gt.vacuums].filter((_) => M[_] && l(_)), u = [...a.filter((_) => e(_) === "problem" && M[_].state === "on"), ...o.filter((_) => {
      var j;
      return ((j = M[_]) == null ? void 0 : j.state) === "problem";
    })], f = a.filter((_) => M[_].state === "unavailable"), v = [.../* @__PURE__ */ new Set([...c, ...u, ...f])], S = (_) => {
      const j = parseFloat(M[_].state);
      return e(_) === "battery" && Number.isFinite(j) ? j : 101;
    }, x = [...o, ...Gt.vacuums, ...[...a].sort((_, j) => S(_) - S(j))].filter((_) => M[_] && !v.includes(_)), R = /* @__PURE__ */ new Map();
    x.forEach((_) => {
      var C;
      const j = ((C = Gt.areaOf) == null ? void 0 : C.call(Gt, _)) || "";
      R.set(j, [...R.get(j) || [], _]);
    });
    const E = (_) => {
      const j = Gt.rooms.findIndex((C) => C.id === _);
      return _ === "" ? 1 / 0 : j < 0 ? Gt.rooms.length : j;
    }, B = [...R.keys()].sort((_, j) => E(_) - E(j)), k = (_) => {
      var j, C, at, St;
      return ((j = Gt.rooms.find((Rt) => Rt.id === _)) == null ? void 0 : j.name) || ((St = (at = (C = d()) == null ? void 0 : C.areas) == null ? void 0 : at[_]) == null ? void 0 : St.name) || _;
    };
    return {
      value: [c.length && Ht(c.length, "low battery", "low batteries"), u.length && Ht(u.length, "problem", "problems"), f.length && Ht(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: v, alert: !0 }, ...B.map((_) => ({ name: _ ? k(_) : B.length > 1 ? "Other devices" : "Devices", ids: R.get(_) }))].filter((_) => _.ids.length)
    };
  }
  const Ko = () => A ? et.home || {} : et, xn = (t) => jp.includes(t) ? (Ko().shownSums || []).includes(t) : !(Ko().hiddenSums || []).includes(t);
  function Li(t, e, a) {
    const o = t.flatMap((R) => a(R, /^cover\./)), r = o.filter((R) => {
      var E;
      return ["open", "opening"].includes((E = M[R]) == null ? void 0 : E.state);
    }).length, l = Object.keys(M).filter((R) => R.startsWith("person.")), c = l.filter((R) => {
      var E;
      return ((E = M[R]) == null ? void 0 : E.state) === "home";
    }).length, u = Gt.security.openings.filter((R) => M[R]), f = u.filter((R) => M[R].state === "on").length, v = Object.keys(M).filter((R) => R.startsWith("binary_sensor.") && qt(R).device_class === "moisture"), S = v.filter((R) => M[R].state === "on").length, x = Gt.vacuums.filter((R) => M[R]);
    return {
      covers: o.length && { value: r ? r + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: v.length && { value: S ? Ht(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: v }] },
      vacuum: x.length && { value: jt(M[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function So(t = !1) {
    var Ft;
    const e = Gt.rooms, a = Gt.security, o = (kt, Tt) => kt.actions.filter((pe) => Tt.test(pe)), r = (kt) => e.map((Tt) => ({ name: Tt.name, ids: kt(Tt) })).filter((Tt) => Tt.ids.length), l = e.flatMap((kt) => kt.lights), c = l.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "on";
    }).length, u = e.map((kt) => kt.readings.find((Tt) => qt(Tt).device_class === "temperature")).filter(Boolean).map((kt) => Number(M[kt].state)).filter(Number.isFinite), [f, v] = [He(Math.min(...u)), He(Math.max(...u))], S = e.flatMap((kt) => o(kt, /^media_player\./)), x = S.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "playing";
    }).length, R = Jt(), E = R.filter((kt) => kt.severity === "warning" && kt.on).length, B = a.locks.filter((kt) => {
      var Tt;
      return ["unlocked", "jammed", "open"].includes((Tt = M[kt]) == null ? void 0 : Tt.state);
    }).length, k = a.alarms.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "disarmed";
    }).length, H = E ? Ht(E, "warning", "warnings") : null, _ = B ? B + " unlocked" : k ? k + " disarmed" : H ? null : "All secure", j = $o(), C = e.flatMap((kt) => kt.solar), at = C.find((kt) => kt.endsWith("_power")), St = {
      light: l.length && { value: c ? c + " on" : "All off", groups: r((kt) => kt.lights) },
      climate: u.length && { value: f === v ? f + "°" : f + " - " + v + "°", groups: r((kt) => [...kt.readings.filter((Tt) => ["temperature", "humidity"].includes(qt(Tt).device_class)), ...o(kt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [H, _].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((kt) => kt.ids.length) },
      media_players: S.length && { value: x ? x + " playing" : "No media playing", groups: r((kt) => o(kt, /^media_player\./)) },
      maintenance: j,
      energy: Gt.grid && { value: Dr(Number(((Ft = M[at]) == null ? void 0 : Ft.state) || 0) * 1e3 + Number(M[Gt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, Gt.grid] }] },
      ...Li(e, r, o)
    }, Rt = [], Wt = R.filter((kt) => kt.severity !== "warning" && kt.on);
    return Wt.length && Rt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ht(Wt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Wt.map((kt) => kt.entity) }] }), ko().forEach((kt) => {
      kt.type !== "summary" ? Rt.push({ key: "path:" + kt.path, name: kt.label || kt.path, icon: kt.icon || "mdi:link-variant", colour: "", value: "" }) : !kt.hidden && St[kt.key] && (t || xn(kt.key)) && Rt.push({ key: kt.key, ...ei[kt.key], ...St[kt.key] });
    }), Rt;
  }
  const la = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Ar() + '"' : t.colour && Wn(t.colour) ? ' style="' + Wn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? bi : "") + '<div class="tfIcon" aria-hidden="true"' + fe(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function fc(t) {
    const e = Bt();
    et = { ...et, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (et.favHidden || []).filter((a) => a !== t) }, Ca(), Be();
  }
  function hc(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function mc(t, e) {
    if (t.startsWith("path:")) {
      hc(t.slice(5));
      return;
    }
    zi("summary:" + t, e);
  }
  async function Fu() {
    const t = (c) => Promise.resolve().then(() => L(c)).catch(() => null), [e, a, o, r] = await Promise.all([
      t({ type: "frontend/get_user_data", key: zp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    et = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, ye = (a == null ? void 0 : a.value) || {}, Ja = (o == null ? void 0 : o.value) || {}, wr = Array.isArray(r == null ? void 0 : r.entities) ? r.entities : [], qa = null, Object.keys(M).length && Be(), qu(), At = !0, ce();
  }
  const gc = "HomeCore";
  async function qu() {
    var o, r, l;
    const t = location.pathname.split("/")[1], e = et.named || [];
    if (!((r = (o = d()) == null ? void 0 : o.user) != null && r.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      et = { ...et, named: [...e, t] }, Ca();
    };
    try {
      const c = (l = await L({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((v) => v.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === gc) {
        a();
        return;
      }
      const u = await L({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((v) => [...v.cards || [], ...(v.sections || []).flatMap((S) => S.cards || [])]);
      if (!f.length || !f.every((v) => (v == null ? void 0 : v.type) === "custom:homecore-card" && !v.page)) return;
      await L({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: gc }), a();
    } catch {
    }
  }
  let Or = null, Ls = 0, Ds = !1;
  const bc = (t) => {
    const e = t.split(".")[0], a = qt(t).device_class;
    return g1.includes(e) && (e !== "binary_sensor" || ls.includes(a) || !!Jp[a]);
  }, Es = (t) => t.startsWith("binary_sensor.") ? Jp[qt(t).device_class] : null;
  async function Wu() {
    var t;
    if (!(Ds || Date.now() - Ls < 30 * 1e3)) {
      Ds = !0, Ls = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(bc), a = e.length ? await L({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Or = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        Or = null;
      }
      Ds = !1, Be();
    }
  }
  function Vu() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (r) => {
      if (!M[r.entity_id] || !bc(r.entity_id) || !Ps(r.entity_id) || ["unavailable", "unknown"].includes(r.state)) return;
      if (Es(r.entity_id)) {
        const c = e.get(r.entity_id);
        r.state === "on" ? (!c || r.when > c.when + 1) && e.set(r.entity_id, { ...r, alarm: !0, cleared: null }) : c && !c.cleared && r.when > c.when && (c.cleared = r.when);
        return;
      }
      const l = t.get(r.entity_id);
      (!l || r.when > l.when + 1) && t.set(r.entity_id, r);
    };
    [...Or || []].sort((r, l) => r.when - l.when).forEach(a);
    const o = Or ? Ls / 1e3 - 5 : 0;
    return Object.keys(M).forEach((r) => {
      var u;
      const l = M[r], c = l.last_changed ? Date.parse(l.last_changed) / 1e3 : 0;
      c > o && a({ entity_id: r, state: l.state, when: c, context_user_id: (u = l.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((r, l) => l.when - r.when).slice(0, w1);
  }
  function ju(t) {
    var o;
    const e = t.context_user_id && Object.keys(M).find((r) => r.startsWith("person.") && qt(r).user_id === t.context_user_id);
    if (e) return bt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function zu(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || jt(a).toLowerCase() : e === "alarm_control_panel" ? (Xp[a] || jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : jt(a).toLowerCase();
  }
  function Gu(t) {
    const e = t.entity_id, a = t.alarm && Es(e), o = bt(e) + " " + (a ? a[0] : zu(t)), r = a ? ba(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + ba(t.cleared * 1e3) : "") : [ju(t), ba(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + fe(e, Je(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(o + ", " + r + ". More info") + '"><span class="activityRowName">' + q(o) + '</span><span class="activityRowMeta">' + q(r) + "</span></button></div>";
  }
  let ja = null, wc = 0;
  const Uu = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function vc() {
    var e;
    if (Date.now() - wc < 5 * 60 * 1e3) return;
    wc = Date.now();
    const t = [];
    try {
      const a = ((e = await L({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (r) => a.filter((l) => l.type === r).flatMap((l) => r === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [r, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const u = await Promise.all(c.map((f) => Promise.resolve(L({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
        t.push({ key: r, name: l, id: c[0], ids: c, value: u.reduce((f, v) => f + v, 0), unit: qt(c[0]).unit_of_measurement || (r === "gas" || r === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    ja = t, Be();
  }
  let Xn = null, yc = [];
  function Bs() {
    var l;
    const t = yc = ja != null && ja.length ? ja : Uu.map(([c, u, f, v]) => {
      if (c === "solar") {
        const x = Object.keys(M).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (f = Number(M[x].state));
      }
      const S = "sensor.made_up_energy_" + c;
      return M[S] = { entity_id: S, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: v, state_class: "total_increasing" } }, { key: c, name: u, id: S, value: f, unit: v };
    });
    rt.clear(), t.some((c) => c.id === Xn) || (Xn = t[0].id);
    const e = t.map((c) => {
      const u = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, f = v1[c.key], v = c.id === Xn;
      return rt.set(c.id, { name: c.name, text: u, icon: f }), '<div class="activityRow tap' + (v ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(c.id) + '" aria-pressed="' + v + '" aria-label="' + q(c.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + fe("", f, c.name) + '></div><div><div class="activityRowName">' + q(c.name) + '</div><div class="activityRowMeta">' + q(u) + "</div></div></div>";
    }), a = t.find((c) => c.id === Xn), o = (((l = re().opts.energy) == null ? void 0 : l.graph) || "above") === "below", r = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return un("dash:energy", 0, "Energy today", e, r, So().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function xc(t) {
    const e = P.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Xn || (Xn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const r = o.dataset.energyPick === t;
      o.classList.toggle("picked", r), o.setAttribute("aria-pressed", String(r));
    }), a.dataset.graph = t, a.dataset.drawn = "", ma.set("dash:energy", Bs()), cd(!0));
  }
  const Mc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, kc = /* @__PURE__ */ new Map();
  async function Yu(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), r = e.getMinutes() / 60, l = Array.from({ length: 24 }, (u, f) => f <= o ? 0 : null);
    if (!t.ids) {
      const u = Mc[t.key] || Mc.electricity, f = u.map((S, x) => x < o ? S : x === o ? S * r : 0), v = f.reduce((S, x) => S + x, 0) || 1;
      return l.map((S, x) => S == null ? null : t.value * f[x] / v);
    }
    const c = kc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const u = await L({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((u == null ? void 0 : u[S]) || []).forEach((x) => {
        const R = typeof x.start == "number" ? x.start : Date.parse(x.start), E = new Date(R).getHours();
        R >= a && E < o && (l[E] += Number(x.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), v = await Promise.all(t.ids.map((S) => Promise.resolve(L({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = v.reduce((S, x) => S + x, 0);
    } catch {
    }
    return kc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function Zu(t, e) {
    const a = await Yu(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), r = Math.max(60, t.clientHeight || 130), l = 18, c = r - 18, u = o / 24, f = u * 0.72, v = (/* @__PURE__ */ new Date()).getHours(), S = a.map((H) => H ?? 0), x = Math.max(0, ...S), R = (H) => c - (x > 0 ? H / x * (c - l) : 0), E = (H) => H.toLocaleString(void 0, { maximumFractionDigits: H < 10 ? 2 : 1 }) + " " + e.unit, B = (H) => String(H).padStart(2, "0") + ":00", k = x > 0 ? S.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + r), t.setAttribute("aria-label", e.name + " today by the hour: " + E(e.value) + (k >= 0 ? ", most " + E(x) + " at " + B(k) : "")), t.innerHTML = [l, (l + c) / 2, c].map((H) => '<line x1="0" x2="' + o + '" y1="' + H + '" y2="' + H + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((H, _) => H > 0 ? '<rect x="' + (_ * u + (u - f) / 2).toFixed(1) + '" y="' + R(H).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (c - R(H)).toFixed(1) + '" rx="2" fill="' + (_ === v ? "var(--primary)" : "var(--text)") + '"' + (_ === v ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((H) => '<text x="' + (H * u).toFixed(1) + '" y="' + (r - 3) + '">' + String(H).padStart(2, "0") + "</text>").join("") + (k >= 0 ? '<text x="0" y="11">Most: ' + q(E(x)) + " at " + B(k) + "</text>" : "");
  }
  function $u(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Sc(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    wu(t, a, [e].filter(Boolean));
  }
  let Di = null, Rs = 0;
  const Ps = (t) => !t.startsWith("light.") || y1.includes((xe.get(t) || "").toLowerCase()), Hs = () => Math.max(2, Jo((P == null ? void 0 : P.clientWidth) || 0).n), _c = (t) => {
    const e = ro(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, Ku = (t) => _c(t).slice(0, Mn(t) - 1);
  function Cc(t) {
    const e = re().tiles;
    if (e) return e.filter((o) => M[o] || zt(o));
    if (!Di) {
      const o = (r) => {
        var l;
        return (((l = M[r]) == null ? void 0 : l.state) === "on" ? 1e6 : 0) + (rn[r] || 0);
      };
      Di = {
        lights: Gt.rooms.flatMap((r) => r.lights).filter((r) => {
          var l;
          return Ps(r) && ((l = M[r]) == null ? void 0 : l.state) !== "unavailable";
        }).sort((r, l) => o(l) - o(r) || bt(r).localeCompare(bt(l))),
        climates: Gt.rooms.flatMap((r) => r.actions.filter((l) => l.startsWith("climate.")))
      };
    }
    const a = Di.climates.filter((o) => M[o]).slice(0, t > 3 ? 2 : 1);
    return [...Di.lights.filter((o) => M[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const Ns = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.welcome) ?? !0;
  }, Xu = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((o) => {
      var r;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((r = o.attributes) == null ? void 0 : r.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Ju = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Xu();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Ac = (t, e, a, o) => (r) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + r + "</div></section>";
  function Qu(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? Ns() : re().welcome) ? '<span class="tfGreeting">' + q(Ju()) + "</span>" : "") + q(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ac("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: la(u) })) }), !A && tt().length && t.push({ key: "areas", html: Et(0) });
    const a = Mo();
    if (a.length && t.push({ key: "favs", wrap: Ac("tfDash-favs", "favs", "Favourites", Bi()), tiles: a.map((u) => ({ key: "fav:" + u, html: vn(u, { area: !0 }) })) }), A)
      return vc(), Wc() && t.push({ key: "dash:energy", html: Bs() }), Rs = Hs(), Cc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: Lt(zt(u), u) }]
      })), t;
    const o = Vu();
    t.push({ key: "dash:act", html: un("dash:act", 0, "Activity", o.length ? o.map(Gu) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Bs() });
    const r = Hs();
    return Rs = r, Cc(r >= 3 ? r : r * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: Ct(u) ? Lt(zt(u), u) : Zn(u, !1, Ku(u)) }]
    })), Wu(), vc(), t;
  }
  const Ir = 252, de = 16, tf = 200, ef = Math.round(Ir * 1.25), af = 60, La = af + de, of = 3, Tc = {
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
  }, nf = ["wx", "favs", "act", "energy", "avg"], Lc = ["XS", "S", "M", "L", "XL"], Dc = Lc.length, rf = ["Narrow", "Wide", "Really wide"], sf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Ec = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && wn(t) ? Dc : Math.min(Dc, _c(t).length + 1), Mn = (t) => {
    const e = re().opts[t] || {}, a = Ec(t), o = Number(e.h) || (e.tall ? 5 : sf[t] || Bc);
    return Math.max(1, Math.min(a, o));
  }, Bc = 2, lf = 90, Rc = 60, Da = (t) => {
    var e;
    return Tc[t] || (t.startsWith("room:") ? ((e = O.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : bt(t));
  }, cf = 128;
  let ca = !1, Qt = null, Qe = null, Os = !1, kn = /* @__PURE__ */ new Map(), Ei = 0, Xo = 0;
  const _o = ["title", "sums"], Jo = (t) => {
    const e = Math.max(1, Math.floor((t + de) / (tf + de)));
    return { n: e, w: Math.max(1, Math.min(ef, Math.floor((t - (e - 1) * de) / e))) };
  }, Is = () => X(O), df = () => {
    var e;
    const t = new Set(((e = et.home) == null ? void 0 : e.areasOff) || []);
    return Is().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function pf() {
    const t = df();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Tc).filter((e) => {
        var a, o;
        return !["title", ...((a = et.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = et.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...gf() ? ["wx"] : [], ...Wc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Go,
      areasOff: []
    };
  }
  const re = () => A ? pf() : Fs(), Fs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...et.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Go.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Sn(t) {
    A || (et = { ...et, dash: { ...t, known: Go } }, Ca());
  }
  function _n() {
    const t = (e) => P.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Qa.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Qa.avg, 2],
      ...Go.map((e) => [e, Qa[e], fi[e] || 1]),
      ...[...P.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, r = !1]) => ({ key: e, el: a, span: o, tile: r }));
  }
  const Pc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const r = 2 * a + de;
      t.el.style.setProperty("--area-open", r + "px");
      const l = Math.ceil((r + Math.max(0, tt().length - 1) * (cf + de) + de) / (a + de));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = re().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, re().spans[t.key] ?? t.span);
  }, Hc = (t) => Mn(t.key), Nc = window.matchMedia("(max-width: 620px)"), uf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(tt().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + de) / La));
  };
  function Oc(t, e, a = null) {
    const o = re().cells, r = t.every((u) => !o[u.key] || o[u.key].col + u.cols <= e), l = (u) => o[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), v = (k, H, _, j) => {
        for (let C = H; C < H + j; C++) for (let at = k; at < k + _; at++) if (u.has(at + "," + C)) return !1;
        return !0;
      }, S = (k, H, _) => {
        for (let j = _; j < _ + k.rows; j++) for (let C = H; C < H + k.cols; C++) u.add(C + "," + j);
        f.set(k.key, { col: H, row: _, cols: k.cols, rows: k.rows });
      }, x = (k, H, _) => {
        for (H = Math.max(0, Math.min(e - k.cols, H)), _ = Math.max(0, _); !v(H, _, k.cols, k.rows); ) _++;
        S(k, H, _);
      }, R = (k) => {
        for (let H = 0; ; H++) for (let _ = 0; _ <= e - k.cols; _++) if (v(_, H, k.cols, k.rows)) {
          S(k, _, H);
          return;
        }
      };
      a && x(a, Qt.col, Qt.row);
      const E = t.filter((k) => k !== a), B = (k, H) => l(k).row - l(H).row || l(k).col - l(H).col;
      return r ? (E.filter((k) => o[k.key]).sort(B).forEach((k) => x(k, o[k.key].col, o[k.key].row)), E.filter((k) => !o[k.key]).forEach(R), f) : ([...E].sort(B).forEach(R), f);
    })();
  }
  function ff(t, e) {
    const a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), r = (l, c, u) => {
      for (let f = c; f < c + u.rows; f++) for (let v = l; v < l + u.cols; v++) if (a.has(v + "," + f)) return !1;
      return !0;
    };
    return t.forEach((l) => {
      for (let c = 0; ; c++) {
        let u = 0;
        for (; u <= e - l.cols && !r(u, c, l); ) u++;
        if (!(u > e - l.cols)) {
          for (let f = c; f < c + l.rows; f++) for (let v = u; v < u + l.cols; v++) a.add(v + "," + f);
          o.set(l.key, { col: u, row: c, cols: l.cols, rows: l.rows });
          return;
        }
      }
    }), o;
  }
  function qs() {
    const t = re(), e = new Set(t.hidden), a = _n().filter((c) => !_o.includes(c.key));
    let o = kn;
    if (!o.size) {
      const c = t.pegs || 4, u = a.filter((f) => !e.has(f.key));
      u.forEach((f) => {
        f.cols = Pc(f, c, Ir), f.rows = Hc(f) ?? Bc;
      }), o = Oc(u, c);
    }
    const r = (c) => !e.has(c.key) && o.get(c.key) || { row: 1e9, col: 0 };
    a.sort((c, u) => r(c).row - r(u).row || r(c).col - r(u).col);
    const l = (t.phone || []).map((c) => a.find((u) => u.key === c && !e.has(c))).filter(Boolean);
    return [...l, ...a.filter((c) => !l.includes(c))];
  }
  const hf = () => {
    const t = qs();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), Ws([..._n().filter((e) => _o.includes(e.key)), ...t].map((e) => e.el));
  };
  function Ws(t) {
    if (Qt) return;
    const e = n.activeElement;
    let a = null;
    for (const o of new Set(t.map((r) => {
      for (; r && r.parentElement !== P; ) r = r.parentElement;
      return r;
    }).filter(Boolean))) {
      const r = a ? a.nextSibling : P.querySelector(":scope > [data-tf]");
      if (o !== r)
        try {
          P.moveBefore ? P.moveBefore(o, r) : P.insertBefore(o, r);
        } catch {
          P.insertBefore(o, r);
        }
      a = o;
    }
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Jn = (t, e) => Sn({ ...t, cells: e, pegs: Jo(P.clientWidth).n });
  function Vs(t) {
    const e = P == null ? void 0 : P.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), r = a.getBoundingClientRect(), l = r.right > o.right ? r.right - o.right : r.left < o.left ? r.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function Ve() {
    var j;
    if (requestAnimationFrame(() => Vs(!1)), setTimeout(() => Vs(!1), 360), !b || !P) return;
    const t = P.clientWidth, e = t < 2 * Ir + de, a = g.classList.contains("tfDash");
    A && (ca = !1), g.classList.toggle("tfOverview", A);
    const { n: o, w: r } = e ? { n: 2, w: Math.floor((t - de) / 2) } : Jo(t);
    ga.classList.add("tfPegs"), ga.style.setProperty("--peg-n", o), ga.style.setProperty("--peg-w", r + "px");
    const l = new Set(re().hidden);
    Go.forEach((C) => {
      var at;
      return (at = Qa[C]) == null ? void 0 : at.classList.toggle("tfNotAdded", l.has(C) && !(Qt != null && Qt.fromTray && Qt.key === C));
    }), kr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && ca && !e);
    const c = p("dashEditNav");
    !a && Eo && ll(!1), c && A ? (c.hidden = !a, Eo || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = ss)) : c && (c.hidden = !a || e, c.classList.toggle("active", ca), c.setAttribute("aria-pressed", String(ca)), c.setAttribute("aria-label", ca ? "Done editing" : "Edit custom dashboard"), c.title = ca ? "Done" : "Edit", c.innerHTML = ca ? Zp : ss);
    const u = a ? _n() : [];
    if ((!a || !A) && P.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((C) => C.remove()), !a) {
      P.style.height = "", P.querySelectorAll(".tfBoardItem").forEach((C) => {
        C.classList.remove("tfBoardItem", "tfBoardHidden"), C.style.left = C.style.top = C.style.width = C.style.height = "";
      }), (j = P.querySelector(".tfDash-act > .activityRows")) == null || j.style.removeProperty("max-height"), Us(!1), g.classList.contains("tfDash") && hf(), Te();
      return;
    }
    if (A) {
      vf(u, t, e);
      return;
    }
    P.style.setProperty("--peg-w", r + "px");
    const f = new Set(re().hidden), v = r + de;
    Qt != null && Qt.fromTray && f.delete(Qt.key), u.forEach((C) => C.el.classList.toggle("tfBoardHidden", f.has(C.key)));
    const S = u.filter((C) => !f.has(C.key) && getComputedStyle(C.el).display !== "none");
    let x = 0;
    S.filter((C) => _o.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const at = C.key === "sums" && C.el.querySelector(".tfDash-bar"), St = at ? at.querySelectorAll(".activityRow").length : 0;
      at && (at.style.maxWidth = "none");
      for (let Rt = 1; at && Rt <= St && (at.style.setProperty("--bar-cols", String(Math.ceil(St / Rt))), !(at.offsetWidth <= t)); Rt++)
        ;
      at && (at.style.maxWidth = ""), x += C.el.offsetHeight + de;
    }), Xo = x;
    const R = S.filter((C) => !_o.includes(C.key));
    R.forEach((C) => {
      C.cols = Pc(C, o, r), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === o ? t : C.cols * r + (C.cols - 1) * de) + "px", C.el.style.height = "", C.rows = Hc(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + de - 6) / La)), C.key === "areas" && Nc.matches && (C.rows = uf(parseFloat(C.el.style.width)));
    });
    const E = Qt && R.find((C) => C.key === Qt.key), B = e && qs().map((C) => C.key), k = (C) => B.includes(C.key) ? B.indexOf(C.key) : -1, H = e ? ff([...R].sort((C, at) => k(C) - k(at)), o) : Oc(R, o, E);
    H.forEach((C) => Object.assign(C, { x: C.cols === o ? 0 : C.col * v, y: Xo + C.row * La, w: C.cols === o ? t : C.cols * r + (C.cols - 1) * de, h: C.rows * La - de })), R.forEach((C) => {
      const at = H.get(C.key);
      C.el.style.height = at.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : Mn(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((St) => {
        St.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && at.cols === 1 && o > 1), C.el.dataset.cols = at.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", at.h - lf + "px"), !(C === E && !Qt.fromTray) && (C.el.style.left = at.x + "px", C.el.style.top = at.y + "px");
    }), e || (kn = H), Ws([...S.filter((C) => _o.includes(C.key)), ...R.slice().sort((C, at) => H.get(C.key).row - H.get(at.key).row || H.get(C.key).col - H.get(at.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, at]) => {
      const St = H.get(C), Rt = St && P.querySelector(at), Wt = Rt == null ? void 0 : Rt.querySelector(":scope > .activityRows"), Ft = Rt == null ? void 0 : Rt.querySelector(":scope > .activityHeader");
      if (!Wt || !Ft) return;
      const kt = Wt.getBoundingClientRect().top - Rt.getBoundingClientRect().top, Tt = St.rows === 1 ? St.h : Math.floor(St.h - kt - parseFloat(getComputedStyle(Rt).paddingBottom)), pe = Math.max(1, Math.floor(Tt / Rc));
      Wt.style.setProperty("--fill-gap", (pe > 1 ? (Tt - pe * Rc) / (pe - 1) : 0).toFixed(2) + "px"), Wt.style.maxHeight = Tt + "px";
    }), Ei = Math.max(0, ...[...H.values()].map((C) => C.row + C.rows));
    let _ = Xo + Ei * La - de;
    _ = Us(ca && !e, R, H, _, o, r), P.style.height = _ + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), u.forEach((C) => Gs.observe(C.el)), cd(), Te();
  }
  const Co = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Ic = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, Fc = () => {
    var t;
    return Ic[(t = et.home) == null ? void 0 : t.areaSize] ? et.home.areaSize : "s";
  }, js = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = et.home) == null ? void 0 : t.areaLayout) ? et.home.areaLayout : "bento";
  }, qc = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, mf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Bi = () => A ? Ao("favsTitle") : et.favsTitle !== !1, gf = () => {
    var t;
    return !!((t = et.home) != null && t.weather && yn());
  }, Wc = () => {
    var t;
    return !!((t = et.home) != null && t.energy && (ja != null && ja.length));
  }, Ao = (t) => {
    var e;
    return ((e = et.home) == null ? void 0 : e[t]) ?? mf[t];
  };
  function bf() {
    var r;
    const t = Object.values(((r = d()) == null ? void 0 : r.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: O.filter((c) => c.floor === l.floor_id) })), o = O.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const Vc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let _e = null, jc = [], Fr = /* @__PURE__ */ new Map();
  function zs(t) {
    let e = P.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), P.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function wf(t) {
    if (!A || !Eo || t.button !== 0 || P.clientWidth < 2 * Ir + de) return;
    const e = t.target.closest(".tfBoardItem"), a = e && _n().find((u) => u.el === e);
    if (!a || _o.includes(a.key) || Ct(a.key)) return;
    t.preventDefault();
    const o = P.getBoundingClientRect(), r = Fr.get(a.key);
    _e = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: r.x, top: r.y, order: [...jc] };
    const l = (u) => {
      const f = u.clientX - _e.x0, v = u.clientY - _e.y0;
      if (!_e.on && Math.hypot(f, v) < 5) return;
      _e.on || (_e.on = !0, e.classList.add("tfDragging"), Fe() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: _e.left + f + "px", top: _e.top + v + "px" });
      const S = u.clientX - o.left, x = u.clientY - o.top + P.scrollTop;
      let R = null, E = 1 / 0;
      if (Fr.forEach((_, j) => {
        if (j === a.key || !_e.order.includes(j)) return;
        const C = Math.hypot(S - (_.x + _.w / 2), x - (_.y + _.h / 2));
        C < E && (E = C, R = { key: j, b: _ });
      }), !R) return;
      const B = _e.order.filter((_) => _ !== a.key), k = B.indexOf(R.key) + (S > R.b.x + R.b.w / 2 ? 1 : 0), H = [...B.slice(0, k), a.key, ...B.slice(k)];
      H.join() !== _e.order.join() ? (_e.order = H, Ve()) : zs(Fr.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const u = _e;
      _e = null, e.classList.remove("tfDragging"), u.on && xa({ order: u.order }), Ve(), u.on && !Fe() && setTimeout(() => Gl(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function vf(t, e, a) {
    var jd;
    const o = new Set(re().hidden);
    t.forEach((ut) => ut.el.classList.toggle("tfBoardHidden", o.has(ut.key)));
    const r = t.filter((ut) => !o.has(ut.key) && getComputedStyle(ut.el).display !== "none"), l = de, c = a ? { w: Math.floor((e - l) / 2) } : Jo(e), u = Math.min(e, Co.full);
    let f = 0;
    const v = qi();
    g.classList.toggle("hcSumsFit", Jc()), g.classList.toggle("hcFavStrip", v);
    const S = r.filter((ut) => _o.includes(ut.key) || v && ut.key === "favs");
    S.sort((ut, Nt) => ["title", "sums", "favs"].indexOf(ut.key) - ["title", "sums", "favs"].indexOf(Nt.key)), S.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.toggleAttribute("data-narrow", !1), Object.assign(ut.el.style, { width: (ut.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const Nt = ut.key !== "title" && (ut.el.querySelector(".tfDash-bar>.activityRows") || ut.key === "favs" && ut.el.querySelector(":scope>.activityRows")), Le = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let Yt = 2; Yt <= Le && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(Le / Yt))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); Yt++)
          ;
      f += ut.el.offsetHeight + (ut.key === "title" ? Co.nameGap : Co.sumsGap);
    });
    const x = ["favs", "wx", "energy"], R = (_e == null ? void 0 : _e.order) || ((jd = et.home) == null ? void 0 : jd.order), E = R ? [...R.filter((ut) => x.includes(ut)), ...x.filter((ut) => !R.includes(ut))] : x;
    jc = E;
    const B = r.filter((ut) => x.includes(ut.key) && !(v && ut.key === "favs")).sort((ut, Nt) => E.indexOf(ut.key) - E.indexOf(Nt.key));
    Fr = /* @__PURE__ */ new Map();
    const k = (ut, Nt) => {
      if (Fr.set(ut.key, Nt), Object.assign(ut.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), _e != null && _e.on && _e.key === ut.key) {
        zs(Nt);
        return;
      }
      Object.assign(ut.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, H = a ? e : 2 * c.w + l, _ = Co.row, j = qc() === "stacked" && !a && B.length > 0;
    let C = 0, at = 0, St = f;
    B.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.dataset.rows = 5, ut.el.dataset.cols = 2, ut.el.toggleAttribute("data-narrow", !1), !j && C && C + H > e && (f += at + l, C = 0, at = 0);
      let Nt = _;
      if ((a || ut.key === "favs") && (Object.assign(ut.el.style, { width: H + "px", height: "" }), Nt = ut.el.offsetHeight), j) {
        k(ut, { x: 0, y: St, w: H, h: Nt }), St += Nt + l;
        return;
      }
      k(ut, { x: C, y: f, w: H, h: Nt }), C += H + l, at = Math.max(at, Nt);
    }), B.length && !j && (f += at + l);
    const Rt = j ? H + l : 0, Wt = j ? e - H - l : e, Ft = a ? "l" : Fc(), kt = Ic[Ft], Tt = js(), pe = Ao("byFloor"), me = c.w, ge = kt.h, Re = a ? 2 : Math.max(1, Math.floor((Wt + l) / (me + l))), sr = new Map(r.filter((ut) => Ct(ut.key)).map((ut) => [ut.key, ut])), Pa = (pe ? bf() : [{ id: "", name: "", icon: "", rooms: O }]).map((ut) => ({ ...ut, cards: ut.rooms.map((Nt) => sr.get("room:" + Nt.id)).filter(Boolean) })).filter((ut) => ut.cards.length), Zi = Tt === "bento", $i = Zi && Ao("bentoMixed"), xh = Zi && pe && Ao("bentoBoxes"), Mh = Tt === "columns" && pe && !a, Po = 12, Wd = (ut) => ut.name ? Co.floorHead + Co.floorGap : 0, Kr = (ut, Nt, Le) => {
      const Yt = /* @__PURE__ */ new Set(), ie = [];
      ut.cards.forEach((Kt, po) => {
        const Qo = $i && po === 0 && Nt >= 2 && ut.cards.length > 1, ze = Qo ? 2 : 1, Ho = Qo && !a ? 2 : 1;
        Kt.el.classList.add("tfBoardItem"), Kt.el.dataset.cols = ze, Kt.el.toggleAttribute("data-narrow", !1);
        for (let Bn = 0; ; Bn++) {
          const Rn = [...Array(Math.max(0, Nt - ze + 1)).keys()].find((Xr) => [...Array(ze).keys()].every((Za) => [...Array(Ho).keys()].every((Ki) => !Yt.has(Bn + Ki + "," + (Xr + Za)))));
          if (Rn != null) {
            [...Array(ze).keys()].forEach((Xr) => [...Array(Ho).keys()].forEach((Za) => Yt.add(Bn + Za + "," + (Rn + Xr)))), ie.push({ it: Kt, r: Bn, c: Rn, sc: ze, sr: Ho });
            break;
          }
        }
      });
      const se = Math.max(0, ...ie.map((Kt) => Kt.r + Kt.sr));
      Zi && !a && ie.forEach((Kt) => {
        for (; Kt.r + Kt.sr < se && !Yt.has(Kt.r + Kt.sr + "," + Kt.c) && Kt.sc === 1; )
          Yt.add(Kt.r + Kt.sr + "," + Kt.c), Kt.sr++;
      }), ie.forEach((Kt) => {
        Kt.it.el.dataset.rows = Math.min(5, Kt.sr * kt.rows), Object.assign(Kt.it.el.style, { width: Kt.sc * Le + (Kt.sc - 1) * l + "px", height: Kt.sr * ge + (Kt.sr - 1) * l + "px" });
      });
      const Zt = [...Array(se)].map(() => ge), we = [];
      let Ma = Wd(ut);
      return Zt.forEach((Kt, po) => {
        we[po] = Ma, Ma += Kt + l;
      }), { h: Ma - (se ? l : 0), places: ie.map((Kt) => ({ it: Kt.it, x: Kt.c * (Le + l), y: we[Kt.r], w: Kt.sc * Le + (Kt.sc - 1) * l, h: Zt.slice(Kt.r, Kt.r + Kt.sr).reduce((po, Qo) => po + Qo, 0) + (Kt.sr - 1) * l })) };
    }, Bl = new Map([...P.querySelectorAll(":scope > .hcFloor")].map((ut) => [ut.dataset.floor, ut])), Rl = new Map([...P.querySelectorAll(":scope > .hcFloorBox")].map((ut) => [ut.dataset.floor, ut])), Vd = [], kh = (ut, Nt, Le, Yt) => {
      if (!ut.name) return;
      let ie = Bl.get(ut.id);
      Bl.delete(ut.id), ie || (ie = Object.assign(document.createElement("div"), { className: "hcFloor" }), ie.dataset.floor = ut.id, P.appendChild(ie)), ie.dataset.sig !== ut.name && (ie.dataset.sig = ut.name, ie.innerHTML = '<h2 class="hcFloorName">' + q(ut.name) + "</h2>"), Object.assign(ie.style, { left: Nt + "px", top: Le + "px", width: Yt + "px" }), Vd.push(ie);
    }, Sh = (ut, Nt, Le, Yt, ie) => {
      let se = Rl.get(ut.id);
      Rl.delete(ut.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), se.dataset.floor = ut.id, se.setAttribute("aria-hidden", "true"), P.prepend(se)), Object.assign(se.style, { left: Nt + "px", top: Le + "px", width: Yt + "px", height: ie + "px" });
    }, _h = (ut) => parseFloat(getComputedStyle(ut.cards[0].el).paddingLeft) || 0, Pl = (ut, Nt, Le, Yt, ie = 0) => {
      kh(ut, Le + ie, Yt, (Nt.w ?? e) - ie), Nt.places.forEach((se) => k(se.it, { x: Le + se.x, y: Yt + se.y, w: se.w, h: se.h }));
    };
    if (Pa.length && B.length && !j && (f += Co.floorTop), Mh) {
      let ut = 0, Nt = f;
      Pa.forEach((Le) => {
        const Yt = { ...Kr(Le, 1, me), w: me };
        ut && ut + me > Wt && (f = Nt + l + Co.floorTop, ut = 0), Pl(Le, Yt, Rt + ut, f), Nt = Math.max(Nt, f + Yt.h), ut += me + l;
      }), f = Nt + l;
    } else if (xh) {
      let ut = [{ x0: 0, x1: Wt, t: f }];
      const Nt = (Yt, ie) => Math.max(...ut.filter((se) => se.x1 > Yt && se.x0 < ie).map((se) => se.t)), Le = (Yt, ie, se) => {
        const Zt = [];
        ut.forEach((we) => {
          we.x1 <= Yt || we.x0 >= ie ? Zt.push(we) : (we.x0 < Yt && Zt.push({ x0: we.x0, x1: Yt, t: we.t }), we.x1 > ie && Zt.push({ x0: ie, x1: we.x1, t: we.t }));
        }), Zt.push({ x0: Yt, x1: ie, t: se }), ut = Zt.sort((we, Ma) => we.x0 - Ma.x0);
      };
      Pa.forEach((Yt) => {
        const ie = Yt.cards.length + ($i && Yt.cards.length > 1 ? 3 : 0);
        let se = a ? 2 : Math.min(Re, Math.max($i && Yt.cards.length > 1 ? 2 : 1, ie <= 3 ? ie : Math.ceil(ie / 2)));
        for (; !a && se > 1 && se * me + (se - 1) * l + 2 * Po > Wt; ) se--;
        let Zt = null;
        for (let ze = se; ze >= (a ? se : 1); ze--) {
          const Ho = Math.min(me, Math.floor((Wt - 2 * Po - (ze - 1) * l) / ze)), Bn = { ...Kr(Yt, ze, Ho), w: ze * Ho + (ze - 1) * l }, Rn = Bn.w + 2 * Po, Xr = Bn.h + 2 * Po;
          ut.map((Za) => Za.x0).filter((Za) => Za + Rn <= Wt + 0.5).forEach((Za) => {
            const Ki = Nt(Za, Za + Rn);
            (!Zt || Ki < Zt.t - 0.5) && (Zt = { cc: ze, inner: Ho, bw: Rn, h: Xr, t: Ki, x: Za });
          });
        }
        if (!Zt) {
          const ze = Math.min(me, Wt - 2 * Po), Ho = Kr(Yt, 1, ze);
          Zt = { cc: 1, inner: ze, bw: ze + 2 * Po, h: Ho.h + 2 * Po, t: Nt(0, Wt), x: 0 };
        }
        const we = { ...Kr(Yt, Zt.cc, Zt.inner), w: Zt.cc * Zt.inner + (Zt.cc - 1) * l }, Ma = Zt.bw, Kt = Zt.h, po = Zt.x, Qo = Zt.t;
        Sh(Yt, Rt + po, Qo, Ma, Kt), Pl(Yt, we, Rt + po + Po, Qo + Po, _h(Yt)), Le(po, Math.min(Wt, po + Ma + l), Qo + Kt + l);
      }), f = Math.max(...ut.map((Yt) => Yt.t));
    } else {
      const ut = (Nt) => {
        var se;
        if (!((se = et.home) != null && se.fitTogether) || a) return Re;
        const Le = j ? St - l - f : null, Yt = (Zt) => {
          const we = Nt.cards.length + ($i && Nt.cards.length > 1 && Zt >= 2 ? 3 : 0), Ma = Math.ceil(we / Zt);
          return { holes: Ma * Zt - we, rows: Ma, h: Wd(Nt) + Ma * ge + (Ma - 1) * l, w: Zt * me + (Zt - 1) * l };
        }, ie = (Zt) => Zt.holes === 0 || Zi && Zt.holes === 1 && Zt.rows > 1;
        for (let Zt = 1; Zt <= Re; Zt++) {
          const we = Yt(Zt);
          if (ie(we) && we.h <= (Le ?? we.w)) return Zt;
        }
        for (let Zt = 1; Zt <= Re; Zt++) {
          const we = Yt(Zt);
          if (we.h <= (Le ?? we.w)) return Zt;
        }
        return Re;
      };
      Pa.forEach((Nt, Le) => {
        Le && (f += Co.floorTop);
        const Yt = Kr(Nt, ut(Nt), me);
        Pl(Nt, { ...Yt, w: Wt }, Rt, f), f += Yt.h + l;
      });
    }
    j && (f = Math.max(f, St)), Bl.forEach((ut) => ut.remove()), Rl.forEach((ut) => ut.remove()), _e != null && _e.on || zs(null), P.style.height = Math.max(0, f - l) + "px", Ws([...S.map((ut) => ut.el), ...B.map((ut) => ut.el), ...Vd, ...Pa.flatMap((ut) => ut.cards.map((Nt) => Nt.el))]), Us(!1), t.forEach((ut) => [...ut.el.children].forEach((Nt) => Nt.toggleAttribute("inert", Eo)));
    const Hl = P.querySelector(".tfDash-favs>.activityRows");
    Hl && (Hl.classList.toggle("hcFadeList", !v), Vc(Hl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ut) => Gs.observe(ut.el)), Te();
  }
  const Ri = () => {
    Os || (Os = !0, requestAnimationFrame(() => {
      Os = !1, Ve();
    }));
  }, Gs = new ResizeObserver(() => {
    Qt || Ri();
  });
  function yf(t, e, a) {
    const o = a + de, r = t * a + (t - 1) * de, l = e * La - de, c = de / 2, u = o / Math.max(1, Math.round(o / (La / 4))), f = La / 4, v = 6;
    let S = "";
    for (let x = 0; x <= t; x++) for (let R = 0; R <= e; R++) {
      const E = x * o - c, B = R * La - c;
      S += "M" + (E - v) + " " + B + "H" + (E + v) + "M" + E + " " + (B - v) + "V" + (B + v);
    }
    return '<svg width="' + r + '" height="' + l + '" viewBox="0 0 ' + r + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (r + de) + '" height="' + (l + de) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function Us(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, r = 1, l = Ir) {
    P.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), P.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), P.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = P.querySelector(".tfBoardCells"), u = P.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), u == null || u.remove(), io(), o;
    const f = Ei + of;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), P.prepend(c)), c.style.top = Xo + "px", c.dataset.size !== r + "x" + f + "x" + l && (c.dataset.size = r + "x" + f + "x" + l, c.innerHTML = yf(r, f, l)), o = Math.max(o, Xo + f * La - de), e.forEach((S) => {
      const x = S.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + oi + '</span><button class="tfEditChip" type="button" data-board-more="' + q(S.key) + '" aria-label="' + q(Da(S.key)) + ' options" aria-haspopup="menu">' + f1 + "</button></div>");
    }), Qt && a.has(Qt.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), P.appendChild(u));
      const S = a.get(Qt.key);
      Object.assign(u.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else u == null || u.remove();
    const v = P.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (v) {
      const S = v.getBoundingClientRect();
      v.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...v.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const R = x.getBoundingClientRect(), E = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(E) + '" aria-label="Hide ' + q(bt(E)) + ' from the dashboard" style="left:' + Math.round(R.right - S.left - 42) + "px;top:" + Math.round(R.top - S.top + (R.height - 32) / 2) + 'px">' + Yp + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Ys = "";
  function Zs(t) {
    ca = t, t || (Qt = null, To = Lo = !1, io()), Ve(), t ? (Ys = JSON.stringify(et), tr(Ut, "Edit custom dashboard", null)) : Ys && JSON.stringify(et) !== Ys && Ea("Changes saved");
  }
  function xf(t, e) {
    var H, _;
    io();
    const a = kn.get(t), { n: o } = Jo(P.clientWidth), r = re(), l = r.spans[t] ?? (Ct(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, u = (j, C, at) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (at ? " disabled" : "") + ">" + C + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Da(t) + " options");
    const v = P.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = Ec(t), x = Mn(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Lc.map((j, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === x) + '" aria-label="' + j + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < S ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", E = nf.includes(t) || Ct(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + rf.map((j, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(l, o)) + '" aria-label="' + j + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < o ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "", B = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + vs().map(([j, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (j === Mr()) + '" data-board-act="src:' + q(j) + '">' + q(C) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = R + E + B + (t === "energy" ? u("graph", (((H = r.opts.energy) == null ? void 0 : H.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", c || a.col === 0) + u("right", "Move right", c || a.col + a.cols >= o) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (v ? u("remove", "Remove") : u("hide", "Hide")), P.appendChild(f);
    const k = Math.min(a.x + a.w - f.offsetWidth, P.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, k) + "px", top: a.y + 28 + "px" }), Qe = { key: t, menu: f, opener: e }, (_ = f.querySelector("button:not([disabled])")) == null || _.focus();
  }
  function io(t) {
    if (!Qe) return;
    const { menu: e, opener: a } = Qe;
    Qe = null, e.remove(), t && (a == null || a.focus());
  }
  const Cn = () => Object.fromEntries([...kn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Mf(t, e) {
    var u, f, v;
    if (e === "remove") {
      io(), kf(t);
      return;
    }
    const a = et, o = re(), r = Cn(), l = r[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((u = o.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (r[t] = { ...l, col: l.col - 1 }), e === "right" && (r[t] = { ...l, col: l.col + 1 }), e === "up" && (r[t] = { ...l, row: l.row - 1 }), e === "down" && (r[t] = { ...l, row: l.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Qt = { key: t, col: r[t].col, row: r[t].row }), Jn(o, r), Qt && (Ve(), Qt = null, Jn(re(), Cn()));
    const c = /^[hw]:/.test(e) && !Fe() && (Qe == null ? void 0 : Qe.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (c) {
      const S = Qe;
      c.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === c))), setTimeout(() => {
        Qe === S && io();
      }, De.tabs.dur);
    } else io();
    e === "graph" && (ma.delete("dash:energy"), Be()), e.startsWith("src:") && ((f = ke == null ? void 0 : ke.get("radar")) == null || f.refresh(), Ae == null || Ae.refresh()), e.startsWith("h:") && t.includes(".") && Be(), Ve(), e !== "hide" ? (v = P.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : Ea(Da(t) + " hidden", Fi(a));
  }
  const zc = (t) => {
    var e;
    return Go.includes(t) && !(((e = et.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function $s(t) {
    const e = re(), a = Da(t) + zc(t);
    Sn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), Ve(), Ea(a);
  }
  const Pi = () => re().tiles || [...P.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !re().hidden.includes(t));
  function Gc(t, e) {
    const a = re();
    Jn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Be(), Te();
  }
  const Uc = (t) => {
    Gc([...Pi().filter((e) => e !== t), t], Cn()), Ea(Da(t) + " added"), Af(t);
  }, kf = (t) => {
    const e = et, a = Cn();
    delete a[t], Gc(Pi().filter((o) => o !== t), a), Ea(Da(t) + " removed", Fi(e));
  };
  let Ks = 0;
  function Ea(t, e = null) {
    var c;
    const a = p("toast");
    if (!a) return;
    if (jm(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(Ks), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const o = g.getBoundingClientRect(), r = (c = n.querySelector(".bottomNav")) == null ? void 0 : c.getBoundingClientRect(), l = Ut.classList.contains("open") && !so ? Math.min(o.right, Ut.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + l) / 2 + "px", a.style.bottom = (r != null && r.height ? window.innerHeight - r.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), zm(a), clearTimeout(Ks), Ks = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : De.confirm.stay);
  }
  const Sf = 700, _f = 1e3, da = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  da.setAttribute("role", "tooltip"), da.setAttribute("aria-hidden", "true"), g.appendChild(da);
  let qr = null, Wr = 0, An = 0, Yc = -1 / 0;
  const Xs = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Cf = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (Xs(e)) return e;
    return null;
  };
  function Hi(t, e) {
    clearTimeout(Wr), clearTimeout(An);
    const a = () => {
      if (!t.isConnected) return;
      qr = t, da.textContent = e, da.hidden = !1;
      const o = t.getBoundingClientRect(), r = da.getBoundingClientRect(), l = o.top - r.height - 8 >= 8 ? o.top - r.height - 8 : o.bottom + 8;
      da.style.left = Math.max(8, Math.min(window.innerWidth - r.width - 8, o.left + o.width / 2 - r.width / 2)) + "px", da.style.top = l + "px";
    };
    !da.hidden || performance.now() - Yc < _f ? a() : Wr = setTimeout(a, Sf);
  }
  function Ni() {
    clearTimeout(Wr), clearTimeout(An), da.hidden || (Yc = performance.now()), da.hidden = !0, qr = null;
  }
  n.addEventListener("pointerover", (t) => {
    var o, r;
    if (t.pointerType === "touch") return;
    if (da.contains(t.target)) {
      clearTimeout(An);
      return;
    }
    const e = (r = (o = t.target).closest) == null ? void 0 : r.call(o, ".tfAreaPick");
    if (e) {
      e !== qr ? Hi(e, e.getAttribute("aria-label")) : clearTimeout(An);
      return;
    }
    const a = Cf(t.target);
    if (a && $t.names === "scroll" && a.matches(Oi)) {
      Js(a);
      return;
    }
    if (a) {
      a !== qr ? Hi(a, a.textContent.trim()) : clearTimeout(An);
      return;
    }
    clearTimeout(Wr), clearTimeout(An), An = setTimeout(Ni, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      Hi(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(Xs);
    $t.names === "scroll" && (a.filter((r) => r.matches(Oi)).forEach(Js), a = a.filter((r) => !r.matches(Oi))), a.length && Hi(e, a.map((r) => r.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === qr && Ni();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !da.hidden && (t.stopPropagation(), Ni());
  }, !0), window.addEventListener("scroll", () => {
    (!da.hidden || Wr) && Ni();
  }, { capture: !0, passive: !0 });
  const Oi = ".activityRowName,.activityRowMeta", Ii = /* @__PURE__ */ new WeakSet();
  function Js(t) {
    var a;
    if ($t.names !== "scroll" || Ii.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Ii.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((o) => o.getAnimations()).map((o) => o.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const o = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (o < 2) {
        Ii.delete(t);
        return;
      }
      const r = o / 30 * 1e3, l = r + 1e3 + r;
      t.style.textOverflow = "clip";
      const c = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -o + "px", offset: r / l },
        { textIndent: -o + "px", offset: (1e3 + r) / l, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: l });
      c.onfinish = c.oncancel = () => {
        t.style.textOverflow = "", Ii.delete(t);
      };
    }, 600);
  }
  const Zc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Zc.unobserve(e.target), Js(e.target));
  }), { threshold: 1 });
  let Qs = !1;
  new MutationObserver(() => {
    Qs || $t.names !== "scroll" || (Qs = !0, setTimeout(() => {
      Qs = !1, n.querySelectorAll(Oi).forEach((t) => {
        !t.dataset.glided && Xs(t) && (t.dataset.glided = "1", Zc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Fi = (t) => () => {
    et = t, Ca(), Be(), Ve(), Te();
  };
  function Af(t) {
    const e = () => P.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var c;
      const a = e();
      if (!a) return;
      const o = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)").matches, r = a.getBoundingClientRect();
      (r.top < 0 || r.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const l = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: l(55) }, { boxShadow: l(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, Tf(t) ? 260 : 0);
  }
  function Tf(t) {
    const e = kn.get(t);
    if (!e || !Ut.classList.contains("open") || so) return !1;
    const { n: a, w: o } = Jo(P.clientWidth), r = Ut.getBoundingClientRect().left - P.getBoundingClientRect().left, l = (f) => f * (o + de) + e.cols * o + (e.cols - 1) * de <= r;
    if (l(e.col)) return !1;
    const c = /* @__PURE__ */ new Set();
    kn.forEach((f, v) => {
      if (v !== t) for (let S = f.row; S < f.row + f.rows; S++) for (let x = f.col; x < f.col + f.cols; x++) c.add(x + "," + S);
    });
    const u = (f, v) => {
      for (let S = v; S < v + e.rows; S++) for (let x = f; x < f + e.cols; x++) if (c.has(x + "," + S)) return !1;
      return !0;
    };
    for (let f = 0; f <= Ei; f++) for (let v = 0; v + e.cols <= a && l(v); v++)
      if (u(v, f))
        return Jn(re(), { ...Cn(), [t]: { col: v, row: f } }), Ve(), !0;
    return !1;
  }
  const $c = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Kc = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Qn = "page";
  const Lf = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + q(o) + '</span></span><span class="hcRowEnd">' + oc + "</span></button>").join("") + "</section>", tr = (t, e, a, o) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? o : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, Df = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + Ql + "</button>", Ef = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function tl(t = !1) {
    const e = Ut.querySelector(".tfTrayInner"), a = Ut.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let r = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((c) => {
      c.hidden = Ef(c) !== Qn, c.classList.toggle("hcFirst", !c.hidden && r), c.hidden || (r = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((c) => {
      const u = c.dataset.trayTab === Qn;
      c.classList.toggle("active", u), c.setAttribute("aria-selected", String(u));
    });
    const l = a.querySelector(".tab.active");
    l != null && l.offsetWidth && (o.style.transition = "none", t ? us(o, o.offsetLeft, o.offsetWidth, l.offsetLeft, l.offsetWidth) : (o.style.left = l.offsetLeft + "px", o.style.width = l.offsetWidth + "px"));
  }
  const Ut = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ut.setAttribute("aria-label", "Edit custom dashboard"), Ut.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Kc.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + is + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + is + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + is + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Ut);
  let so = !1, To = !1, Lo = !1, Vr = !1, ta = null, Do = !1;
  const el = {}, za = (t, e) => {
    if (el[t] === e) return;
    el[t] = e;
    const a = Ut.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Aa(a);
  }, al = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", Bf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + oi + '</span><span class="tfIcon"' + fe(t, Je(t)) + "></span>" + al(t, e ? "Hidden" + (xe.get(t) ? " · " + xe.get(t) : "") : xe.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(bt(t)) + ' on the dashboard">' + (e ? Yp : h1) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(bt(t)) + ' from favourites">' + ec + "</button>" : "<span></span>") + "</li>";
  function ol(t, e, a, o) {
    const r = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((c) => e(c) && !a.has(c) && M[c].state !== "unavailable").filter((c) => {
      const u = (bt(c) + " " + (xe.get(c) || "") + " " + c).toLowerCase();
      return r.every((f) => u.includes(f));
    }).sort((c, u) => (xe.get(c) || "~").localeCompare(xe.get(u) || "~") || bt(c).localeCompare(bt(u))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + q(c) + '"><span class="tfIcon"' + fe(c, Je(c)) + "></span>" + al(c, xe.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Rf = "https://www.home-assistant.io/dashboards/", Xc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, be = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  be.setAttribute("aria-label", "Edit Home page"), be.toggleAttribute("inert", !0);
  let Eo = !1, Ba = !1, nl = "", rl = null, er = "page";
  function il(t, e) {
    const a = be.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), r = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(r != null && r.offsetWidth)) {
      requestAnimationFrame(() => {
        var l;
        return ((l = be.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : l.offsetWidth) && il(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? us(o, e.left, e.width, r.offsetLeft, r.offsetWidth) : (o.style.left = r.offsetLeft + "px", o.style.width = r.offsetWidth + "px");
  }
  const Tn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(Xc[t][0]) + '">' + ac + "</button>", ya = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", sl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + oi + "</button>", Jc = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, qi = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.favsAs) === "strip";
  }, jr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + r + '" aria-pressed="' + (a === r) + '">' + l + "</button>").join("") + "</div></div>", Qc = () => So(!0).filter((t) => ei[t.key]).map((t) => t.key);
  function Ln() {
    var f, v, S, x, R, E, B;
    if (!Eo) return;
    const t = Bt(), e = (k) => '<li class="hcHeRow" data-he-id="' + q(k) + '">' + sl(bt(k)) + '<span class="tfIcon"' + fe(k, Je(k)) + "></span>" + al(k, xe.get(k) || Oe(k)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(k) + '" aria-label="Take ' + q(bt(k)) + ' off Favourites">' + ec + "</button></li>", a = (k) => {
      const H = ei[k];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(k) + '"' + (H.colour && Wn(H.colour) ? ' style="' + Wn(H.colour).slice(1) + '"' : "") + ">" + sl(H.name) + '<span class="tfIcon"' + fe("", H.icon, H.name) + '></span><span class="activityRowName">' + q(H.name) + "</span>" + ya(xn(k), H.name, 'data-he-sum="' + q(k) + '"') + "</li>";
    }, o = ((f = be.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", r = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((v = et.home) == null ? void 0 : v.areasOff) || []), c = (k) => '<li class="hcHeRow" data-he-id="' + q(k.id) + '">' + sl(k.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + k.id, k.icon || "mdi:texture-box", k.name) + '></span></span><span class="activityRowName">' + q(k.name) + "</span>" + ya(!l.has(k.id), "Show " + k.name + " on Home", 'data-he-area="' + q(k.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Tn("welcome") + ya(Ns(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (yn() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Tn("weather") + ya(!!((S = et.home) != null && S.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (ja != null && ja.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Tn("energy") + ya(!!((x = et.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + jr("Cards", "data-he-cards-as", qc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ya(Ao("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + jr("Layout", "data-he-area-layout", js(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (js() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ya(Ao("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ya(Ao("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + jr("Area cards", "data-he-area-size", Fc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ya(!!((R = et.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ya(((E = et.home) == null ? void 0 : E.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Tn("favs") + "</div>" + jr("Show as", "data-he-favs-as", qi() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (qi() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ya(Ao("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ba + '">' + is + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ba ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(o) + '"><ul class="tfTrayList">' + (Ba ? ol(o, (k) => $c.test(k), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Tn("suggest") + ya(We(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Tn("sums") + ya(((B = et.home) == null ? void 0 : B.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + jr("Width", "data-he-sums-width", Jc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Qc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + Is().map(c).join("") + "</ul>"
    };
    be.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + r.map(([k, H]) => '<button class="tab segBtn' + (k === er ? " active" : "") + '" type="button" role="tab" aria-selected="' + (k === er) + '" data-he-tab="' + k + '">' + H + "</button>").join("") + "</div>" + Lf(r, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[er] + "</div>", il(!1), Aa(be);
  }
  const ar = (t) => {
    et = { ...et, ...t }, Ca(), Be(), Ln();
  }, xa = (t) => ar({ home: { ...et.home || {}, ...t } });
  function ll(t) {
    Dn(), Eo = t, Ba = !1, be.classList.toggle("open", t), be.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), b && P && Ve();
    const e = p("dashEditNav"), a = be.querySelector(".tfTrayHead");
    e && t && (rl = e.parentElement, a.appendChild(e)), e && !t && rl && rl.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Zp : ss), t ? (nl = JSON.stringify(et), Ln(), tr(be, "Edit Home page", null)) : nl && JSON.stringify(et) !== nl && Ea("Changes saved");
  }
  be.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Df + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(be);
  let Bo = null;
  const Ga = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ga.setAttribute("role", "dialog"), g.appendChild(Ga);
  function Dn() {
    Bo && (Bo.setAttribute("aria-expanded", "false"), Bo = null, Ga.hidden = !0);
  }
  function td(t) {
    const e = Bo;
    if (Dn(), e === t) return;
    const [a, o] = Xc[t.dataset.info];
    Ga.setAttribute("aria-label", a), Ga.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + Rf + '" target="_blank" rel="noopener">Learn more</a>', Ga.hidden = !1, Bo = t, t.setAttribute("aria-expanded", "true");
    const r = t.getBoundingClientRect(), l = Ga.offsetWidth, c = Ga.offsetHeight;
    Ga.style.left = Math.max(8, Math.min(innerWidth - l - 8, r.left + r.width / 2 - l / 2)) + "px", Ga.style.top = (r.bottom + 8 + c > innerHeight - 8 ? Math.max(8, r.top - 8 - c) : r.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Bo && !t.composedPath().some((e) => e === Ga || e === Bo) && Dn();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Bo) {
        t.stopPropagation();
        const a = Bo;
        Dn(), a.focus();
        return;
      }
      if (Ba) {
        t.stopPropagation(), Ba = !1, Ln();
        return;
      }
      Eo && (t.stopPropagation(), ll(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Pf = (t) => t.dataset.heList === "favs" ? Bt() : t.dataset.heList === "areas" ? Is().map((e) => e.id) : Qc(), ed = (t, e) => t.dataset.heList === "favs" ? ar({ favourites: e }) : t.dataset.heList === "areas" ? (ar({ areaOrder: e }), Ve()) : xa({ sumOrder: e });
  be.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, r = Pf(o), l = r.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= r.length || (r.splice(c, 0, r.splice(l, 1)[0]), ed(o, r), (u = be.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), be.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    ul(t, e.closest("[data-he-id]"), "heId", (r) => ed(a, r), (r) => be.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(r) + '"]'));
  }), be.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Ln();
      const a = be.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), be.addEventListener("click", (t) => {
    var H, _, j, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      td(a);
      return;
    }
    const o = e.closest("[data-he-go]");
    if (o) {
      er = o.dataset.heGo, Ba = !1, Dn(), Ln(), tr(be, "Edit Home page", er, o.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Dn(), tr(be, "Edit Home page", null);
      return;
    }
    const r = e.closest("[data-he-tab]");
    if (r) {
      const at = be.querySelector(".hcTrayTabs .rubberIndicator"), St = { left: at.offsetLeft, width: at.offsetWidth };
      er = r.dataset.heTab, Ba = !1, Dn(), Ln(), il(!0, St), be.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      xa({ welcome: !Ns() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const at = l.dataset.heCard, St = ["sums", "favs"].includes(at) ? ((H = et.home) == null ? void 0 : H[at]) !== !1 : !!((_ = et.home) != null && _[at]);
      xa({ [at]: !St });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      xa({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      xa({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      xa({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const v = e.closest("[data-he-area-layout]");
    if (v) {
      xa({ areaLayout: v.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      xa({ fitTogether: !((j = et.home) != null && j.fitTogether) });
      return;
    }
    const S = e.closest("[data-he-cards-as]");
    if (S) {
      xa({ cardsAs: S.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const at = x.dataset.heFlag;
      xa({ [at]: !Ao(at) }), at === "favsTitle" && Ua();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      ar({ suggest: !We() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const at = new Set(((C = et.home) == null ? void 0 : C.areasOff) || []), St = R.dataset.heArea;
      at.has(St) ? at.delete(St) : at.add(St), xa({ areasOff: [...at] });
      return;
    }
    const E = e.closest("[data-he-sum]");
    if (E) {
      const at = E.dataset.heSum, St = !xn(at), Rt = et.home || {};
      xa(jp.includes(at) ? { shownSums: St ? [...Rt.shownSums || [], at] : (Rt.shownSums || []).filter((Wt) => Wt !== at) } : { hiddenSums: St ? (Rt.hiddenSums || []).filter((Wt) => Wt !== at) : [...Rt.hiddenSums || [], at] });
      return;
    }
    const B = e.closest("[data-he-remove]");
    if (B) {
      ar({ favourites: Bt().filter((at) => at !== B.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ba = !Ba, Ln(), Ba && be.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const k = e.closest("[data-he-pick-id]");
    k && (Ba = !1, be.querySelector("[data-he-search]").value = "", ar({ favourites: [...Bt(), k.dataset.hePickId] }));
  });
  function Te() {
    var S, x, R;
    const t = ca && g.classList.contains("tfBoard");
    if (Ut.classList.toggle("open", t), Ut.classList.toggle("tucked", t && so), Ut.toggleAttribute("inert", !t), t || (Do = !1), sd(), !t) return;
    const e = Ut.querySelector("[data-tray-tuck]");
    e.innerHTML = so ? Ql : oc, e.setAttribute("aria-expanded", String(!so)), e.setAttribute("aria-label", so ? "Show the edit tray" : "Tuck the edit tray away");
    const a = re().hidden.filter((E) => !_o.includes(E) && _n().some((B) => B.key === E)), o = (E, B) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(E) + '" aria-label="' + q(Da(E)) + ": drag it onto the board, or press to " + B + '"><span class="tfTrayGrip" aria-hidden="true">' + oi + "</span>" + q(Da(E)) + "</button>", r = a.filter((E) => !ui.includes(E)), l = ui.filter((E) => a.includes(E));
    za("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Tn("welcome") + '<button class="switch' + (re().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!re().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((S = et.dash) != null && S.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = et.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => tl(!1)), za("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((E) => o(E, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), za("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((E) => o(E, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), za("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (re().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Do + '">' + (Do ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(et.favHidden || []), u = Bt(), f = [...u, ...[...c].filter((E) => !u.includes(E) && M[E])];
    za("favs", f.map((E) => Bf(E, c.has(E), u.includes(E))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ut.querySelector('[data-pick="tiles"]').hidden = !Lo, Ut.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Lo)), Lo && za("tilepick", ol(Ut.querySelector("[data-tile-search]").value, (E) => fr.includes(E.split(".")[0]), new Set(Pi()), "data-tile-pick")), Ut.querySelector('[data-tray="roompick"]').hidden = !Vr, Ut.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Vr));
    const v = new Set(((R = et.dash) == null ? void 0 : R.areasOff) || []);
    if (za("areas", X(O).map((E) => '<li class="hcHeRow" data-area-id="' + q(E.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + q(E.name) + '. Use the up and down arrows">' + oi + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="activityRowName">' + q(E.name) + '</span><button class="switch' + (v.has(E.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !v.has(E.id) + '" aria-label="Show ' + q(E.name) + ' in the Areas card" data-area-on="' + q(E.id) + '"></button></li>').join("")), Vr) {
      const E = new Set(Pi());
      za("roompick", X(O).filter((B) => !E.has("room:" + B.id)).map((B) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(B.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(B.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ut.querySelector('[data-pick="favs"]').hidden = !To, Ut.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(To)), To && za("pick", ol(Ut.querySelector("[data-fav-search]").value, (E) => $c.test(E), new Set(Bt()), "data-fav-pick")), za("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Bi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Bi() + '" data-fav-title aria-label="Title"></button>'), za("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (We() ? " on" : "") + '" type="button" role="switch" aria-checked="' + We() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const En = (t) => {
    et = { ...et, ...t }, Ca(), Be(), Te();
  };
  function ad(t, e) {
    const a = et, o = new Set(et.favHidden || []);
    e ? o.delete(t) : o.add(t), En({ favHidden: [...o] }), e ? Ea(bt(t) + " put back") : Ea(bt(t) + " hidden", Fi(a));
  }
  const Hf = (t) => {
    const e = et;
    En({ favourites: Bt().filter((a) => a !== t), favHidden: (et.favHidden || []).filter((a) => a !== t) }), Ea(bt(t) + " removed from favourites", Fi(e));
  }, Nf = (t) => {
    En({ favourites: [...Bt().filter((e) => e !== t), t], favHidden: (et.favHidden || []).filter((e) => e !== t) }), Ea(bt(t) + " added to favourites");
  };
  Ut.addEventListener("click", (t) => {
    var a, o, r;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Qn = e.dataset.trayTab, tl(!0), Ut.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Qn = e.dataset.trayGo, tl(!1), tr(Ut, "Edit custom dashboard", Qn, Kc.find(([l]) => l === Qn)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        tr(Ut, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) Zs(!1);
      else if (e.hasAttribute("data-info")) td(e);
      else if (e.hasAttribute("data-dash-sums"))
        Sn({ ...Fs(), hidden: Fs().hidden.filter((l) => l !== "sums"), sumsOff: !((a = et.dash) != null && a.sumsOff) }), Be(), Te();
      else if (e.hasAttribute("data-dash-welcome")) {
        const l = re();
        Sn({ ...l, welcome: !l.welcome }), Be(), Te();
      } else if (e.hasAttribute("data-tray-tuck"))
        so = !so, Te();
      else if (e.hasAttribute("data-phone-toggle"))
        Do = !Do, Te(), Do && ((o = pa.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && ($s(e.dataset.trayCard), Te());
      else if (e.dataset.favEye) ad(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Hf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        To = !To, Te(), To && Ut.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Nf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Lo = !Lo, Te(), Lo && Ut.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Uc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Vr = !Vr, Te();
      else if (e.dataset.roomPick) Uc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((r = et.dash) == null ? void 0 : r.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), Sn({ ...re(), areasOff: [...l] }), Be(), Te();
      } else e.hasAttribute("data-fav-suggest") ? En({ suggest: !We() }) : e.hasAttribute("data-fav-title") && (En({ favsTitle: !Bi() }), Ua());
    }
  }), Ut.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Te();
  });
  const od = (t) => {
    et = { ...et, areaOrder: t }, Ca(), Be(), Te();
  };
  Ut.addEventListener("keydown", (t) => {
    var c, u, f;
    const e = (u = (c = t.target).closest) == null ? void 0 : u.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = X(O).map((v) => v.id), r = o.indexOf(a), l = r + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(r, 1)[0]), od(o), (f = Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Ut.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || ul(t, e.closest("[data-area-id]"), "areaId", od, (a) => Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Ro = window.visualViewport, cl = () => {
    if (!Ro) return;
    const t = Math.max(0, Math.round(window.innerHeight - Ro.height - Ro.offsetTop));
    Ut.style.bottom = t > 40 ? t + "px" : "";
  };
  Ro == null || Ro.addEventListener("resize", cl), Ro == null || Ro.addEventListener("scroll", cl), Ut.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      cl(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Ut.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Lo : To) || (t.stopPropagation(), e ? Lo = !1 : To = !1, Te(), Ut.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function nd(t, e, a, o) {
    t.preventDefault();
    const r = t.clientX, l = t.clientY;
    let c = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), v = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - r, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const R = !so && x.clientX >= Ut.getBoundingClientRect().left;
      if (a === "card") {
        const k = P.getBoundingClientRect(), { w: H } = Jo(P.clientWidth);
        Qt = !R && x.clientX >= k.left && x.clientX <= k.right && x.clientY >= k.top + Xo ? { key: o, col: Math.max(0, Math.floor((x.clientX - k.left) / (H + de))), row: Math.max(0, Math.floor((x.clientY - k.top - Xo) / La)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ve();
        }));
        return;
      }
      const E = P.querySelector(".tfDash-favs"), B = E == null ? void 0 : E.getBoundingClientRect();
      if (ta = null, B && !R && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top && x.clientY <= B.bottom) {
        let k = 1 / 0;
        E.querySelectorAll('[data-k^="fav:"]').forEach((H, _) => {
          const j = H.getBoundingClientRect(), C = Math.hypot(x.clientX - (j.left + j.width / 2), x.clientY - (j.top + j.height / 2));
          C < k && (k = C, ta = { i: _, r: j, after: x.clientX > j.left + j.width / 2 });
        }), ta || (ta = { i: 0, r: null, after: !1 });
      }
      ta != null && ta.r ? (f.isConnected || g.appendChild(f), Object.assign(f.style, { left: (ta.after ? ta.r.right : ta.r.left) - 2 + "px", top: ta.r.top + 8 + "px", height: ta.r.height - 16 + "px" })) : f.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(u), c == null || c.remove(), f.remove(), a === "card") {
        if (!c) $s(o);
        else if (Qt != null && Qt.fromTray) {
          Ve();
          const k = Da(o) + zc(o), H = re(), _ = Cn();
          Qt = null, Jn({ ...H, hidden: H.hidden.filter((j) => j !== o) }, _), Ea(k);
        }
        Qt = null, Ve(), Be(), Te();
        return;
      }
      if (!ta) return;
      const x = new Set(et.favHidden || []);
      x.delete(o);
      const R = Bt().filter((k) => k !== o), E = R.filter((k) => !x.has(k)), B = E[Math.min(ta.i + (ta.after ? 1 : 0), E.length)];
      R.splice(B ? R.indexOf(B) : R.length, 0, o), ta = null, En({ favourites: R, favHidden: [...x] }), Ea(bt(o) + " put back");
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const rd = {
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
  }, id = 136, Of = 288, If = 0.8, Ff = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, pa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  pa.setAttribute("aria-label", "Phone order"), pa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + ec + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(pa);
  let dl = "";
  function sd() {
    var u;
    const t = Do && ca && g.classList.contains("tfBoard") && !so;
    if (pa.classList.toggle("open", t), pa.toggleAttribute("inert", !t), !t) return;
    const e = qs().filter((f) => !re().hidden.includes(f.key)), a = e.length, o = (f) => Math.round(f * If * 10) / 10 + "px", r = (f, v) => {
      const S = f.el.classList.contains("tfDac"), x = f.tile ? S ? Of : id : rd[f.key] || id;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(f.key) + '" style="min-height:' + o(x) + '" aria-label="' + q(Da(f.key) + ", " + (v + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? fe(f.key, Je(f.key)) : fe(f.key, Ff[f.key])) + '></span><span class="tfPhoneName">' + q(Da(f.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + q(((u = P.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(rd.sums) + '"><span class="tfPhoneName">' + q(Da("sums")) + "</span></div>" + e.map(r).join("");
    if (pa.querySelector('[data-phone="note"]').innerHTML = re().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === dl) return;
    dl = l;
    const c = pa.querySelector('[data-phone="list"]');
    c.innerHTML = l, Aa(c);
  }
  function ld(t, e) {
    var a;
    Sn({ ...re(), phone: t }), Te(), e && ((a = pa.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const pl = () => [...pa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function qf(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = pa.querySelector(".tfPhoneScreen"), r = pl().join();
    e.classList.add("moving");
    const l = (u) => {
      const f = o.getBoundingClientRect();
      u.clientY > f.bottom - 40 ? o.scrollTop += 12 : u.clientY < f.top + 40 && (o.scrollTop -= 12);
      const v = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const E = R.getBoundingClientRect();
        return R !== e && u.clientX >= E.left && u.clientX <= E.right && u.clientY >= E.top && u.clientY <= E.bottom;
      });
      if (!v) return;
      const S = v.getBoundingClientRect(), x = v.classList.contains("tile") ? u.clientX < S.left + S.width / 2 : u.clientY < S.top + S.height / 2;
      a.insertBefore(e, x ? v : v.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const u = pl();
      dl = "", u.join() !== r ? ld(u) : sd();
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  pa.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && qf(t, e);
  }), pa.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Do = !1, Te(), (a = Ut.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...r } = re();
      Sn(r), Te();
    }
  }), pa.addEventListener("keydown", (t) => {
    var c, u, f, v;
    if (t.key === "Escape") {
      t.stopPropagation(), Do = !1, Te(), (c = Ut.querySelector("[data-phone-toggle]")) == null || c.focus({ preventScroll: !0 });
      return;
    }
    const e = (v = (f = (u = t.target).closest) == null ? void 0 : f.call(u, "[data-phone-key]")) == null ? void 0 : v.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = pl(), r = o.indexOf(e), l = r + a;
    l < 0 || l >= o.length || ([o[r], o[l]] = [o[l], o[r]], ld(o, e));
  });
  function ul(t, e, a, o, r) {
    t.preventDefault();
    const l = De.drag, c = Fe(), u = 1 + l.lift / 100, f = [...e.parentElement.children].filter((Tt) => Tt.dataset[a]), v = f.indexOf(e), S = f.map((Tt) => Tt.getBoundingClientRect()), x = f.length - 1, R = S[v].height + (f.length > 1 ? S[1].top - S[0].bottom : 0), E = (Tt) => S[Tt].top + S[Tt].height / 2, B = t.clientY, k = S[0].top - S[v].top, H = S[x].top - S[v].top;
    let _ = 0, j = 0, C = 0, at = 1, St = v, Rt = 0;
    e.classList.add("hcListDragging"), f.forEach((Tt) => {
      Tt !== e && (Tt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Ee.land);
    });
    const Wt = () => {
      if (Rt = requestAnimationFrame(Wt), c) {
        j = _, e.style.transform = "translateY(" + j + "px)";
        return;
      }
      C = zl(C, _ - j, l.pull / 100, l.keep / 100), j += C, at += (u - at) * 0.25;
      const Tt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + j.toFixed(2) + "px) scale(" + (at * (1 - 0.063 * Tt)).toFixed(4) + "," + (at * (1 + 0.1 * Tt)).toFixed(4) + ")";
    };
    Rt = requestAnimationFrame(Wt);
    const Ft = (Tt) => {
      _ = Math.max(k, Math.min(H, Tt.clientY - B));
      const pe = E(v) + _, me = f.filter((ge, Re) => Re !== v && E(Re) < pe).length;
      me !== St && (St = me, f.forEach((ge, Re) => {
        ge !== e && (ge.style.transform = v < St && Re > v && Re <= St ? "translateY(" + -R + "px)" : St < v && Re >= St && Re < v ? "translateY(" + R + "px)" : "");
      }));
    }, kt = () => {
      window.removeEventListener("pointermove", Ft), window.removeEventListener("pointerup", kt), window.removeEventListener("pointercancel", kt), cancelAnimationFrame(Rt);
      const Tt = e.getBoundingClientRect(), pe = e.dataset[a];
      f.forEach((Pa) => {
        Pa.style.transition = "none", Pa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const me = f.map((Pa) => Pa.dataset[a]);
      me.splice(St, 0, me.splice(v, 1)[0]), o(me);
      const ge = r(pe) || e;
      if (requestAnimationFrame(() => f.forEach((Pa) => {
        Pa.style.transition = "";
      })), c) return;
      const Re = ge.getBoundingClientRect(), sr = Tt.top + Tt.height / 2 - (Re.top + Re.height / 2);
      ge.classList.add("hcListLanding"), ge.animate([{ transform: "translateY(" + sr + "px) scale(" + at + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: l.slide, easing: Ee.land }).finished.then(() => {
        ge.classList.remove("hcListLanding"), Gl(ge);
      }, () => ge.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Ft), window.addEventListener("pointerup", kt), window.addEventListener("pointercancel", kt);
  }
  function Wf(t, e) {
    ul(
      t,
      e,
      "trayFav",
      (a) => {
        const o = new Set(Bt());
        el.favs = null, En({ favourites: a.filter((r) => o.has(r)) });
      },
      (a) => Ut.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Ut.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? nd(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Wf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && nd(t, a, "fav", a.dataset.trayFav);
  });
  function Vf(t) {
    if (!ca || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && _n().find((Wt) => Wt.el === e);
    if (!a || _o.includes(a.key)) return;
    const o = kn.get(a.key), { w: r } = Jo(P.clientWidth);
    if (!o) return;
    t.preventDefault(), io();
    const l = t.clientX, c = t.clientY;
    let u = !1, f = 0;
    const v = De.drag, S = Fe();
    let x = 0, R = 0, E = 0, B = 0, k = 0, H = 0, _ = S || v.stick === 0, j = 0;
    const C = (Wt, Ft, kt, Tt) => {
      e.style.transform = "translate(" + E.toFixed(2) + "px," + B.toFixed(2) + "px) rotate(" + Wt.toFixed(2) + "deg) rotate(" + Ft + "rad) scale(" + kt.toFixed(4) + "," + Tt.toFixed(4) + ") rotate(" + -Ft + "rad)";
    }, at = () => {
      if (j = requestAnimationFrame(at), S) {
        E = x, B = R, C(0, 0, 1, 1);
        return;
      }
      if (!_) {
        const pe = Math.min(Math.hypot(x, R) / Math.max(1, v.stick), 1);
        E = x * 0.35, B = R * 0.35, C(0, Math.atan2(R, x), 1 + 0.155 * pe, 1 - 0.1 * pe);
        return;
      }
      k = zl(k, x - E, v.pull / 100, v.keep / 100), H = zl(H, R - B, v.pull / 100, v.keep / 100), E += k, B += H;
      const Wt = Math.hypot(k, H), Ft = Math.min(Wt / 48, 1), kt = Math.max(-5, Math.min(v.tilt, k * 0.32)), Tt = 1 + v.lift / 100;
      C(kt, Math.atan2(H, k), Tt * (1 + 0.1 * Ft), Tt * (1 - 0.063 * Ft));
    }, St = (Wt) => {
      if (x = Wt.clientX - l, R = Wt.clientY - c, !u) {
        if (Math.hypot(x, R) < 4) return;
        u = !0, Qt = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), j = requestAnimationFrame(at);
      }
      !_ && Math.hypot(x, R) > v.stick && (_ = !0, k = x * 0.085, H = R * 0.085), Qt.col = Math.round((o.x + x) / (r + de)), Qt.row = Math.round((o.y + R - Xo) / La), f || (f = requestAnimationFrame(() => {
        f = 0, Ve();
      }));
    }, Rt = () => {
      var sr;
      if (window.removeEventListener("pointermove", St), window.removeEventListener("pointerup", Rt), window.removeEventListener("pointercancel", Rt), !u) return;
      const Wt = (lr) => {
        lr.preventDefault(), lr.stopImmediatePropagation();
      };
      window.addEventListener("click", Wt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Wt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(j);
      const Ft = e.getBoundingClientRect(), kt = a.key;
      e.style.transition = "none", Ve(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Qt = null, Jn(re(), Cn()), Ve(), Be();
      const Tt = (sr = _n().find((lr) => lr.key === kt)) == null ? void 0 : sr.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Tt && (Tt.style.transition = "");
      }), !Tt || S) return;
      Tt.style.transition = "none";
      const pe = Tt.getBoundingClientRect(), me = Ft.left + Ft.width / 2 - (pe.left + pe.width / 2), ge = Ft.top + Ft.height / 2 - (pe.top + pe.height / 2);
      Tt.style.zIndex = "20", Tt.animate([{ transform: "translate(" + me + "px," + ge + "px) scale(" + (1 + v.lift / 100) + ")" }, { transform: "none" }], { duration: v.slide, easing: Ee.land }).finished.then(() => {
        Tt.style.zIndex = "", Gl(Tt);
      }, () => {
        Tt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", St), window.addEventListener("pointerup", Rt), window.addEventListener("pointercancel", Rt);
  }
  function cd(t = !1) {
    const e = P == null ? void 0 : P.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const r = yc.find((l) => l.id === e.dataset.graph);
    r ? Zu(e, r).then(() => {
      (t || o) && $u(e);
    }) : Bd(e.dataset.graph, e).then(() => {
      t && Sc(e);
    });
  }
  function dd() {
    var f, v, S;
    Gt = ci.model(d(), { madeUp: !A }), ce(), M = Gt.states, M[(f = et.sources) == null ? void 0 : f.grid] && (Gt.grid = et.sources.grid), M[(v = et.sources) == null ? void 0 : v.alarm] && (Gt.security.alarms = [et.sources.alarm]), _a.forEach((x, R) => {
      const E = M[R], B = (E == null ? void 0 : E.attributes) || {};
      if (!E || Date.now() - x.at > 2 * 60 * 1e3) {
        _a.delete(R);
        return;
      }
      x.pos != null && E.state !== "opening" && E.state !== "closing" && Math.abs(Wa(R) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((B.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && _a.delete(R);
    });
    const t = [];
    let e = 0;
    const a = pt();
    O = a.filter((x) => x.room).map((x) => x.room), O.some((x) => x.id === W) || (W = ((S = O[0]) == null ? void 0 : S.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), xe = /* @__PURE__ */ new Map(), Gt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => xe.set(R, x.name))), !o) return Qu(t, So());
    if (t.push({ key: "areahead", html: jf(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const r = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: qe(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: Cs(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: fn(x, ++e) }));
    const u = [...r, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !r.includes(x))];
    return u.length && t.push({ key: "block:" + l, order: ++e, tiles: u.map((x) => ({ key: x, html: Zn(x) })) }), t;
  }
  const jf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Ql + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let pd = 0, ud = null;
  const fd = (t) => t === "weather" ? Qa.wx : t.startsWith("room:") && P.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || P.querySelector(".tfAreas");
  function hd(t) {
    var e, a;
    Q || (pd = Gr().scrollTop, ud = ((e = fd(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (W = t.slice(5)), Ua(), Gr().scrollTop = 0, (a = P.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let zr = null;
  function zf(t, e) {
    if (zr == null || zr(), e == null) return;
    const a = Gr(), o = performance.now() + 1500, r = ["wheel", "touchstart", "pointerdown", "keydown"];
    let l = 0;
    const c = () => {
      cancelAnimationFrame(l), r.forEach((f) => window.removeEventListener(f, c, !0)), zr = null;
    }, u = () => {
      const f = t();
      if (f != null && f.isConnected) {
        const v = f.getBoundingClientRect().top - e;
        Math.abs(v) > 0.5 && (a.scrollTop += v);
      }
      performance.now() < o ? l = requestAnimationFrame(u) : c();
    };
    r.forEach((f) => window.addEventListener(f, c, { capture: !0, passive: !0 })), zr = c, u();
  }
  function fl() {
    var a;
    const t = Q;
    Q = null, Ua(), Gr().scrollTop = pd, zf(() => fd(t), ud);
    const e = t.startsWith("room:") ? P.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || P.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Qa.wx.querySelector(".wbOpenPage") : P.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Gf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", md = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function Gr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function gd(t) {
    const e = Gr(), a = (u) => {
      const f = u.getBoundingClientRect();
      return f.height && f.bottom > 0 && f.top < window.innerHeight;
    }, o = [...P.children, ...P.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), r = o == null ? void 0 : o.dataset.k, l = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const c = o != null && o.isConnected ? o : r && P.querySelector('[data-k="' + CSS.escape(r) + '"]');
    c != null && c.isConnected && l != null && (e.scrollTop += c.getBoundingClientRect().top - l);
  }
  function Ua() {
    if (!b || !P) return;
    const t = dd(), e = (r) => {
      var l;
      return (((l = r.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + r.dataset.iconFor + "|" + (r.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    P.querySelectorAll("[data-tf] [data-icon-for]").forEach((r) => {
      r.firstElementChild && (a.get(e(r)) || a.set(e(r), []).get(e(r))).push(r.firstElementChild);
    }), P.querySelectorAll("[data-tf]").forEach((r) => r.remove()), ma.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((r) => r.tiles ? Gf(r) : r.html).join(""), t.forEach((r) => r.tiles ? r.tiles.forEach((l) => ma.set(l.key, l.html)) : ma.set(r.key, r.html)), li = md(t), o.querySelectorAll("[data-icon-for]").forEach((r) => {
      var c;
      const l = !r.firstElementChild && ((c = a.get(e(r))) == null ? void 0 : c.shift());
      l && r.appendChild(l);
    }), P.append(...o.children), pi(t.weather), hi(), Gs.disconnect(), Ve(), Aa(P), kl(P), Ne(P), N(), Rd(), rr(), Sd(), requestAnimationFrame(st);
  }
  const bd = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, hl = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function ml(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), o = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (o == null ? void 0 : o.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((c) => e.hasAttribute(c) ? t.setAttribute(c, e.getAttribute(c)) : t.removeAttribute(c)), [...t.style].filter((c) => c.startsWith("--") && !c.startsWith("--tf-")).forEach((c) => t.style.removeProperty(c)), [...e.style].forEach((c) => t.style.setProperty(c, e.style.getPropertyValue(c))), t);
    const r = (c) => {
      var u;
      return ((u = c.dataset) == null ? void 0 : u.iconFor) !== void 0;
    };
    if (r(t) && r(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((c) => {
        e.hasAttribute(c.name) || t.removeAttribute(c.name);
      }), [...e.attributes].forEach((c) => {
        t.getAttribute(c.name) !== c.value && t.setAttribute(c.name, c.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((c) => {
      e.hasAttribute(c.name) || t.removeAttribute(c.name);
    }), [...e.attributes].forEach((c) => t.setAttribute(c.name, c.value));
    const l = [...e.children];
    return [...t.children].forEach((c, u) => ml(c, l[u])), t;
  }
  function wd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = bd(t), r = ml(t, a.firstElementChild);
    Aa(r), kl(r), Ne(r), hl(r, o);
  }
  function Be() {
    !b || !P || Qt || gd(Uf);
  }
  function Uf() {
    if (ae = !1, !P.querySelector("[data-tf]")) {
      Ua();
      return;
    }
    const t = dd();
    if (md(t) !== li) {
      Ua();
      return;
    }
    const e = (a) => Vt().some((o) => {
      const r = o.slice(o.indexOf("|") + 1);
      return a === r || a.endsWith(":" + r);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (ma.get(o.key) === o.html) return;
      if (e(o.key) || o.key === "areas" && Ke) {
        ae = !0;
        return;
      }
      const r = P.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      r && (ma.set(o.key, o.html), wd(r, o.html), o.key.startsWith("energy:") && Rd());
    })), rr(), Sd(), Ai(), N(), Ae == null || Ae.update(), ke == null || ke.forEach((a) => a.update()), g.classList.contains("tfDash") && Ri(), requestAnimationFrame(st);
  }
  const or = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && jt(t.color_mode)]],
    climate: (t) => [["Current temperature", He(t.current_temperature) + " °C"], ["Target", He(t.temperature) + " °C"], ["Action", jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && jt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && jt(t.operation_mode)], ["Away", t.away_mode && jt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", He(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Yf = (t) => $a(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Zf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((r) => vn(r, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Mt = document.createElement("div");
  Mt.className = "tfMoreBackdrop", Mt.hidden = !0, g.appendChild(Mt);
  const Ya = document.createElement("div");
  Ya.className = "tfMoreBackdrop tfMoreUnder", Ya.hidden = !0, g.insertBefore(Ya, Mt);
  const gl = (t, e) => {
    for (let a = t; a && a !== Mt; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ur = null;
  Mt.addEventListener("touchstart", (t) => {
    Ur = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Mt.addEventListener("touchmove", (t) => {
    var r, l;
    if (!Ur || t.touches.length > 1 || (l = (r = t.target).closest) != null && l.call(r, "input,textarea,select")) return;
    const e = t.touches[0], a = Ur.x - e.clientX, o = Ur.y - e.clientY;
    Ur = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !gl(t.target, o) && t.preventDefault();
  }, { passive: !1 }), Mt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || gl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const $f = () => window.innerWidth <= 620;
  let je = null;
  Mt.addEventListener("pointerdown", (t) => {
    const e = Mt.querySelector(".tfMorePair");
    !$f() || !e || !e.contains(t.target) || !t.isPrimary || Mt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide,[data-drag],[data-blocks]") || (je = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Mt.addEventListener("pointermove", (t) => {
    if (!je || !t.isPrimary) return;
    const e = t.clientY - je.y, a = performance.now();
    if (!je.on) {
      if (Math.abs(t.clientX - je.x) > 8 || e < -8 || !je.grab && gl(je.from, -1)) {
        je = null;
        return;
      }
      if (e < 8) return;
      je.on = !0;
      try {
        Mt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    je.v = (e - je.dy) / Math.max(1, a - je.t), je.dy = e, je.t = a, je.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const vd = (t) => {
    if (!je || !t.isPrimary) return;
    const e = je;
    if (je = null, !e.on) return;
    const a = (v) => {
      v.preventDefault(), v.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), r = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || Fe()) {
      o ? Ll() : e.pair.animate([{ transform: r }, { transform: "none" }], { duration: 320, easing: Ee.spring });
      return;
    }
    const l = T;
    Mt._closing = !0, Mt.style.pointerEvents = "none", Mt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: r }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, Mt._closing = !1, Mt.style.pointerEvents = "", Mt.getAnimations().forEach((v) => v.cancel()), e.pair.getAnimations().forEach((v) => v.cancel()), T === l && Ll());
    };
    c.finished.then(f, f), setTimeout(f, 300);
  };
  Mt.addEventListener("pointerup", vd), Mt.addEventListener("pointercancel", vd);
  function bl() {
    const t = Mt.querySelector(".tfMorePair"), e = Mt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", bl, { passive: !0 }), b && vr();
  let lo = [];
  const Kf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Xf(t) {
    const e = (k, H = "") => '<div class="tfMoreHead">' + (T != null && T.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Bp + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(k) + "</div>" + H + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Rp + "</button></div>", a = (k, H) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(k) + "</div></div>", o = Zf;
    if (t === "favourites") {
      const k = Bt(), H = new Set(k), _ = [{ name: "Starred", ids: k }, { name: "Home", ids: Gt.homeVacuums }, { name: "Security", ids: [...Gt.security.alarms, ...Gt.security.locks] }, ...Gt.rooms.map((j) => ({ name: j.name, ids: [...j.actions, ...j.plugs] }))].map((j, C) => C ? { ...j, ids: j.ids.filter((at) => !H.has(at)) } : j).filter((j) => j.ids.length);
      return [e("Favourites"), a(k.length ? k.length + " starred" : "None starred"), o(_, { star: !0 }, !0)];
    }
    const r = (k, { name: H = "", alert: _ = !1, plain: j = !1 } = {}) => {
      const C = j ? [] : k.filter((Rt) => fr.includes(Rt.split(".")[0])), at = k.filter((Rt) => !C.includes(Rt)), St = (Rt) => Rt.startsWith("vacuum.") && qt(Rt).battery_level != null ? qt(Rt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (H ? '<div class="tfMoreGroupName">' + q(H) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Rt) => Zn(Rt, !0)).join("") + at.map((Rt) => vn(Rt, { plain: j, alert: _, say: j ? St(Rt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = So().find((C) => C.key === t.slice(8));
      if (!k) return null;
      const H = k.key === "light" ? (k.groups || []).flatMap((C) => C.ids) : [], _ = H.some((C) => {
        var at;
        return ((at = M[C]) == null ? void 0 : at.state) === "on";
      }), j = H.length ? '<button class="primary" type="button" data-acts="' + Ta(H.map((C) => ["light", _ ? "turn_off" : "turn_on", C])) + '">' + (_ ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(k.name), '<div class="tfMoreNowRow">' + a(k.value) + j + "</div>", ...(k.groups || []).map((C) => r(C.ids, { name: C.name === k.name ? "" : C.name, alert: C.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, H] = t.split(":"), _ = Gt.rooms.find((at) => at.id === k), j = _ && s(_).find((at) => at.key === H);
      if (!j) return null;
      const C = j.acts ? '<button class="primary" type="button" data-acts="' + Ta(j.acts) + '">' + (j.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(_.name + " " + j.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(j.value) + C + "</div>", r(h(_, H))];
    }
    const l = t.split(".")[0];
    M[t];
    const c = fr.includes(l) || ai.includes(l) ? ro(t) : wl(t), u = rh(t), f = [...u ? u.pages.map((k) => ({ name: k.name, svg: k.svg, tabs: k.tabs, html: k.space + '<div class="tfMoreCtl"' + wo(t).replace(" data-light", "") + ">" + k.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ua, html: eh(t) + (l === "plant" ? ph(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: ac, html: sh(t) }];
    T && T.page == null && (T.page = 0), T && (T.pages = f.length);
    const v = (T == null ? void 0 : T.page) || 0, S = (T == null ? void 0 : T.mode) || "", x = f.length - 1, R = !!(u != null && u.infoButton), E = f.flatMap((k, H) => (R && H === x ? [] : k.tabs || [{ name: k.name, svg: k.svg }]).map((_) => ({ ..._, page: H }))), B = (k) => k.page === v && (k.mode == null || k.mode === S);
    return [
      Qf(t, c),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (S && v === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((k) => '<section class="tfMorePage" aria-label="' + k.name + '" data-mode="' + S + '">' + k.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (R ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (E.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (R ? "Views" : "Pages") + '">' + E.map((k) => '<button type="button" role="tab" aria-selected="' + B(k) + '" aria-label="' + k.name + '" title="' + k.name + '" data-more-page="' + k.page + '"' + (k.mode != null ? ' data-more-mode="' + k.mode + '"' : "") + (B(k) ? "" : ' tabindex="-1"') + ">" + k.svg + "</button>").join("") + "</div>" : "") + (R ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (v === x) + '" data-more-page="' + x + '" data-more-toggle>' + ac + "</button></div>" : "")
    ];
  }
  const Jf = (t, e) => {
    const a = t.split(".")[0], o = M[t], r = o.attributes;
    if (a === "light") return Oe(t);
    const l = a === "climate" ? jt(r.hvac_action || o.state) : a === "humidifier" ? jt(r.action || o.state) : a === "water_heater" ? jt(r.operation_mode || o.state) : a === "fan" && o.state === "on" && r.percentage != null ? r.percentage + "%" : (a === "valve" || a === "cover") && r.current_position != null && o.state !== "closed" ? r.current_position + "%" : Oe(t);
    return [e, l].filter(Boolean).join(" · ");
  };
  function Qf(t, e, a) {
    var c, u, f, v, S;
    const o = (c = Gt.areaOf) == null ? void 0 : c.call(Gt, t), r = o && (((u = Gt.rooms.find((x) => x.id === o)) == null ? void 0 : u.name) || ((S = (v = (f = d()) == null ? void 0 : f.areas) == null ? void 0 : v[o]) == null ? void 0 : S.name)) || "", l = e.button ? bn(t, e) : '<div class="tfIcon"' + fe(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + wo(t) + ">" + (T != null && T.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Bp + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Jf(t, r)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Rp + "</button></div>";
  }
  const th = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function wl(t) {
    var r;
    const e = t.split(".")[0], a = ((r = M[t]) == null ? void 0 : r.state) === "on", o = ai.includes(e) ? { act: Dt(e, "toggle", t), label: "Turn " + bt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Dt(e, "turn_on", t), label: "Run " + bt(t) } : null;
    return { sections: [], on: a, button: o, icon: Je(t) };
  }
  function eh(t) {
    const e = t.split(".")[0];
    if (th.includes(e) || e === "light" && !Va(t)) {
      const r = fr.includes(e) ? ro(t) : wl(t);
      return r != null && r.button ? '<div class="tfMoreSpace tfMoreSwitch' + (r.on ? " on" : "") + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + wo(t) + ">" + bn(t, r) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && Va(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: o } = ih(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ye("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([r, l]) => '<div class="tfMoreFact"><span>' + q(r) + "</span><span>" + q(l) + "</span></div>").join("") + "</div></div>";
  }
  const ah = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', oh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', nh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], co = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + q(t) + "</div>" + e + "</div>", Ra = (t, e) => va("tfSeg", t, e), vl = (t, e, a, o, r, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + q(r) + '" data-drag="' + q(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + q(r) + "</output></i>" + (l ? '<span class="tfBarIcon"' + fe("", l, o) + "></span>" : "") + "</div>", nr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + wo(t) + ">" + bn(t, e) + "</div>", yl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + q(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + q(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, r]) => '<div class="tfMoreFact"><span>' + q(o) + "</span><span>" + q(r) + "</span></div>").join("") + "</div></div>", yd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + q((T == null ? void 0 : T.code) || "") + '">', Wi = (t, e, a, o, r) => ({ label: o, pressed: r, html: null, coded: [t, e, a].join("|") }), xd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + q(t) + '">' + e.map((a) => '<button type="button" data-coded="' + q(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + q(a.label) + "</button>").join("") + "</div>", Md = (t, e, a) => Ra(bt(t), [{ label: "Off", act: Dt(e, "turn_off", t), pressed: !a }, { label: "On", act: Dt(e, "turn_on", t), pressed: a }]);
  function rh(t) {
    var l, c, u;
    const e = t.split(".")[0], a = M[t], o = a.attributes;
    if (!nh.includes(e)) return null;
    const r = fr.includes(e) || ai.includes(e) ? ro(t) : wl(t);
    if (e === "light") {
      const f = a.state === "on", v = Sr(t), [S, x] = Vn(t), R = Ye("bright", t, f ? bo(a) : 0), E = Ye("ctf", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = Ye("huev", t, f && Uo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), k = v.includes("color_temp"), H = v.some((pe) => Uo.includes(pe)), _ = Va(t), j = (pe, me, ge, Re) => '<div class="tfBar tfVBar ' + pe + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + q(bt(t) + " " + me.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(ge) + '" data-drag="' + pe + "|" + q(t) + '">' + Re + "</div>", C = (pe, me, ge = "") => '<div class="tfVCol' + ge + '">' + me + "</div>", at = C("Brightness", j("bright", "Brightness", R, '<i style="height:' + R + '%"></i><span class="tfBarIcon"' + fe("", "mdi:white-balance-sunny", "Brightness") + "></span>")), St = E == null ? null : (x - E) / (x - S), Rt = k ? C("Warmth", j("ctf", "Warmth", St == null ? 0 : St * 100, St == null ? "" : '<b style="top:' + Math.round((1 - St) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Wt = H ? C("Colour", j("huev", "Colour", B == null ? 0 : (1 - B / 360) * 100, B == null ? "" : '<b style="top:' + Math.round(B / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Ft = '<div class="tfVCols">' + at + (Rt || Wt ? '<div class="tfVSwap">' + Rt + Wt + "</div>" : "") + "</div>", kt = _ ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>' : "", Tt = [H && { name: "Colour", svg: ah, mode: "colour" }, _ && { name: "Dual Axis Controller", svg: oh, mode: "dac" }, { name: "Sliders", svg: ua, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ua, space: '<div class="tfMoreSpace tfLightSpace">' + Ft + kt + "</div>", rows: [], tabs: Tt.length > 1 ? Tt : [] }] };
    }
    if (e === "climate") {
      const f = o.target_temp_step || 0.5, v = Number(o.temperature), S = Number(o.target_temp_low), x = Number(o.target_temp_high), R = (H) => Dt("climate", "set_temperature", t, H), E = (H, _, j, C, at) => (_ == null ? void 0 : _.length) && co(H, Ra(H, _.map((St) => ({ label: jt(St), act: Dt("climate", C, t, { [at]: St }), pressed: (j === "state" ? a.state : o[j]) === St })))), B = Number.isFinite(S) && Number.isFinite(x) && co("Range", '<div class="tfMoreRange">' + ra("Low", He(S) + " °C", R({ target_temp_low: S - f, target_temp_high: x }), R({ target_temp_low: S + f, target_temp_high: x })) + ra("High", He(x) + " °C", R({ target_temp_low: S, target_temp_high: x - f }), R({ target_temp_low: S, target_temp_high: x + f })) + "</div>"), k = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: ua,
        space: yl(He(o.current_temperature), "°C", [["Target", Number.isFinite(v) ? He(v) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && jt(o.hvac_action)]]),
        rows: [
          Number.isFinite(v) && ra("Target temperature", He(v) + " °C", R({ temperature: v - f }), R({ temperature: v + f })),
          B,
          E("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          E("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          E("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          E("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(k) && o.min_humidity != null && co("Humidity", ra("Target humidity", k + "%", Dt("climate", "set_humidity", t, { humidity: k - 1 }), Dt("climate", "set_humidity", t, { humidity: k + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", v = Ye("fan", t, f && Number(o.percentage) || 0), S = o.percentage != null;
      return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: S ? [
        vl("fan", t, v, bt(t) + " speed", v + "%", "mdi:fan"),
        o.oscillating != null && co("Oscillate", Ra("Oscillate", [{ label: "Off", act: Dt("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Dt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && co("Direction", Ra("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, R]) => ({ label: R, act: Dt("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && co("Preset", Ra("Preset", o.preset_modes.map((x) => ({ label: jt(x), act: Dt("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [Md(t, "fan", f)] }] };
    }
    if (e === "humidifier") {
      const f = Number(o.humidity);
      return { pages: [{ name: "Control", svg: ua, space: yl(String(o.current_humidity), "%", [["Target", Number.isFinite(f) ? f + "%" : null], ["Action", o.action && jt(o.action)]]), rows: [
        Number.isFinite(f) && ra("Target humidity", f + "%", Dt("humidifier", "set_humidity", t, { humidity: f - 1 }), Dt("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((c = o.available_modes) == null ? void 0 : c.length) && co("Mode", Ra("Mode", o.available_modes.map((v) => ({ label: jt(v), act: Dt("humidifier", "set_mode", t, { mode: v }), pressed: o.mode === v }))))
      ] }] };
    }
    if (e === "water_heater") {
      const f = Number(o.temperature), v = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ua, space: yl(He(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(f) ? String(f).replace(/\.0$/, "") + " °C" : null], ["Mode", jt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(f) && ra("Target temperature", f + " °C", Dt("water_heater", "set_temperature", t, { temperature: f - v }), Dt("water_heater", "set_temperature", t, { temperature: f + v })),
        ((u = o.operation_list) == null ? void 0 : u.length) && co("Mode", Ra("Mode", o.operation_list.map((S) => ({ label: jt(S), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (o.operation_mode || a.state) === S })))),
        o.away_mode != null && co("Away", Ra("Away", [{ label: "Off", act: Dt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Dt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const f = [...Kp, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || he(t, x)), v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], S = '<div class="tfMoreSpace tfMoreKeypad">' + yd() + '<div class="tfKeypad">' + v.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ua, space: S, rows: [xd(bt(t), f.map(([x, R, E]) => Wi("alarm_control_panel", E, t, R, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [Ra(bt(t), [{ label: "Open", act: Dt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Dt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", v = cn(t), S = Lr(t);
      return { pages: [{ name: "Control", svg: ua, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + q(t) + '"></div></div>', rows: [
        he(t, tc) && gn(t, v),
        S != null && co("Tilt", vl("tiltp", t, Ye("tiltp", t, S), bt(t) + " tilt", Math.round(Ye("tiltp", t, S)) + "%")),
        Ra(bt(t), [he(t, Fp) && { label: "Open", act: Dt("cover", "open_cover", t), disabled: v >= 100 && !f }, he(t, Wp) && { label: "Stop", act: Dt("cover", "stop_cover", t) }, he(t, qp) && { label: "Close", act: Dt("cover", "close_cover", t), disabled: v <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [
        yd(),
        xd(bt(t), [Wi("lock", "lock", t, "Lock", a.state === "locked"), Wi("lock", "unlock", t, "Unlock", a.state === "unlocked"), he(t, $p) && Wi("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const f = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [Ra(bt(t), [{ label: "Open", act: Dt("valve", "open_valve", t), pressed: f }, { label: "Close", act: Dt("valve", "close_valve", t), pressed: !f }])] }] };
      const v = Ye("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [
        vl("valve", t, v, bt(t) + " position", Math.round(v) + "%", "mdi:valve"),
        Ra(bt(t), [{ label: "Open", act: Dt("valve", "open_valve", t) }, he(t, 8) && { label: "Stop", act: Dt("valve", "stop_valve", t) }, { label: "Close", act: Dt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [Md(t, e, a.state === "on")] }] };
  }
  function ih(t) {
    var S;
    const e = M[t], a = qt(t), o = t.split(".")[0], r = (((S = or[o]) == null ? void 0 : S.call(or, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const R = r.findIndex(([E]) => E === x);
      return R < 0 ? null : r.splice(R, 1)[0][1];
    }, c = (x) => {
      const R = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(x), ""];
    }, u = () => [jt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    o === "light" ? (l("Brightness"), f = e.state === "on" && vo(t) ? [String(bo(e)), "%"] : u()) : o === "climate" ? f = c(l("Current temperature") || He(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), f = a.current_position != null ? [String(Wa(t)), "%"] : u()) : o === "humidifier" ? f = c(l("Current humidity") || e.state) : o === "vacuum" ? f = c(l("Battery") || e.state) : o === "plant" ? f = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? f = u() : f = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const v = r.length ? r.slice(0, 4) : [["State", Oe(t)]];
    return { big: f, lines: v };
  }
  function sh(t) {
    var v, S, x, R, E, B, k;
    const e = M[t], a = d(), o = (v = a == null ? void 0 : a.entities) == null ? void 0 : v[t], r = o != null && o.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(bt(t)) + ', last 24 hours"></svg></div>', c = (x = Gt.areaOf) == null ? void 0 : x.call(Gt, t), u = c && (((R = Gt.rooms.find((H) => H.id === c)) == null ? void 0 : R.name) || ((B = (E = a == null ? void 0 : a.areas) == null ? void 0 : E[c]) == null ? void 0 : B.name)) || "", f = [
      ...((k = or[t.split(".")[0]]) == null ? void 0 : k.call(or, qt(t))) || [],
      ["Changed", e.last_changed && wi(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", r && (r.name_by_user || r.name)],
      ["Integration", (o == null ? void 0 : o.platform) && jt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, H]) => H != null && H !== "");
    return l + '<div class="tfMoreRows">' + f.map(([H, _]) => '<div class="tfMoreRow"><span>' + q(H) + "</span><span>" + q(_) + "</span></div>").join("") + "</div>" + Yf(t) + (r ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(o.device_id) + '"><span>Device page</span>' + oc + "</button>" : "");
  }
  const lh = () => "";
  let xl = "";
  function Ml(t) {
    var e;
    T && (T.details = t, rr(), (e = Mt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Vi = (t) => {
    const e = M[t], a = Wa(t), o = cn(t);
    return { kind: Jl(e), name: bt(t), text: Oe(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: Lr(t) ?? 100, canSet: he(t, tc) };
  };
  function kl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let r = na.get(o);
      r || (r = a1({ onMove: (l) => Zr(a, l), onSet: (l) => {
        Zr(a, l), $r("pos", a);
      } }), r.coverId = a, na.set(o, r)), e.replaceWith(r.el), r.update(Vi(a));
    });
  }
  const kd = (t) => [...na.values()].filter((e) => e.coverId === t), Sl = () => na.forEach((t) => {
    M[t.coverId] && t.update(Vi(t.coverId));
  }), Sd = () => {
    na.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), na.delete(e));
    }), Sl();
  };
  function rr() {
    var l, c;
    if (!T || !(Kf(T.id) || M[T.id])) {
      Mt.hidden = !0;
      return;
    }
    if (Vt().some((u) => u.endsWith("|" + T.id))) {
      ae = !0, Sl();
      return;
    }
    const t = Xf(T.id), e = Mt.querySelector(".tfMore");
    if (!t) {
      Gi();
      return;
    }
    const a = bd(Mt), o = lh(T.id), r = T.frame ? T.frame.wide : T.id.startsWith("summary:") || T.id.startsWith("group:");
    if (Mt.hidden || !e || t.length !== lo.length || e.classList.contains("wide") !== r) {
      const u = Al ? T.scroll || 0 : !Mt.hidden && e ? e.scrollTop : 0;
      if (Mt.innerHTML = '<div class="tfMorePair' + (Mt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (r ? " wide" : "") + '"' + (T.frame ? ' style="height:' + T.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", xl = o, Mt.classList.toggle("wide", r), Mt.hidden = !1, bl(), kl(Mt), Ne(Mt), Aa(Mt), Mt.querySelectorAll("[data-day]").forEach((f) => Dd(f.dataset.day, f, T.at)), Ad(Mt), u && (Mt.querySelector(".tfMore").scrollTop = u), _d(), hl(Mt, a), !Mt.contains(n.activeElement)) {
        const f = Mt.querySelector("[data-more-close]");
        (l = f != null && f.offsetParent ? f : Mt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var R, E;
        if (u === lo[f] || u.includes("data-cover-art") || e.children[f].contains((E = (R = n.activeElement) == null ? void 0 : R.matches) != null && E.call(R, "input,select") ? n.activeElement : null)) return;
        if (Vt().some((B) => e.children[f].querySelector('[data-drag="' + CSS.escape(B) + '"]'))) {
          ae = !0;
          return;
        }
        const v = document.createElement("div");
        v.innerHTML = u;
        const S = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((B) => B.scrollTop), x = ml(e.children[f], v.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((B, k) => {
          S[k] && (B.scrollTop = S[k]);
        }), Aa(x), Ad(x), Ne(x);
      }), o !== xl) {
        const u = Mt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = o), xl = o;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || Dd(u.dataset.day, u, T.at);
      }), _d(), Mt.contains(n.activeElement) || hl(Mt, a);
    }
    (c = Mt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(T.details && o)), lo = t, Sl();
  }
  function _d() {
    const t = Mt.querySelector("[data-more-pages]");
    !t || !T || (t.scrollTo({ left: (T.page || 0) * t.clientWidth, behavior: "instant" }), Cl(), _l(t));
  }
  function _l(t) {
    const e = t.children[(T == null ? void 0 : T.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Cl() {
    var e;
    const t = (T == null ? void 0 : T.page) || 0;
    Mt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (T.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(o));
        return;
      }
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    }), (e = Mt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!T.mode && t === 0);
  }
  function ch(t, e) {
    var o, r;
    const a = Mt.querySelector("[data-more-pages]");
    !a || !T || (T.page = Math.max(0, Math.min((T.pages || 2) - 1, t)), a.scrollTo({ left: T.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Cl(), _l(a), e && ((r = Mt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || r.focus({ preventScroll: !0 })));
  }
  function ji(t, e, a) {
    T && (e != null && e !== (T.mode || "") && (T.mode = e, Mt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), ch(t, a));
  }
  let ir = null;
  Mt.addEventListener("touchstart", (t) => {
    var a, o, r, l;
    const e = t.touches[0];
    ir = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && !((l = (r = t.target).closest) != null && l.call(r, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art]")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Mt.addEventListener("touchend", (t) => {
    if (!ir || !T || (T.page || 0) !== 0 || !Mt.querySelector("[data-more-mode]")) {
      ir = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - ir.x, o = e.clientY - ir.y;
    if (ir = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) return;
    const r = [...Mt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((c) => c.dataset.moreMode), l = r.indexOf(T.mode || "");
    a > 0 && l > 0 ? ji(0, r[l - 1]) : a < 0 && T.mode && l < r.length - 1 && ji(0, r[l + 1]);
  }, { passive: !0 });
  let Cd = 0;
  Mt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !T || (clearTimeout(Cd), Cd = setTimeout(() => {
      if (!T) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (T.page || 0) && (T.page = o, Cl(), _l(e));
    }, 80));
  }, !0), Mt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && T && (T.code = t.target.value);
  }), Mt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!T || !(e || a)) return;
    const o = Mt.querySelector("[data-code]");
    if (e) {
      const f = e.dataset.key, v = T.code || "";
      T.code = f === "clear" ? "" : f === "back" ? v.slice(0, -1) : (v + f).slice(0, 12), o && (o.value = T.code);
      return;
    }
    const [r, l, c] = a.dataset.coded.split("|"), u = T.code;
    T.code = "", o && (o.value = ""), Yr(r, l, c, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    T && rr();
  }, 15 * 1e3);
  function zi(t, e) {
    var r, l;
    const a = !!(T && e && Mt.contains(e)), o = a && Mt.querySelector(".tfMore");
    if (a && (T.scroll = o.scrollTop), a && !T.under) {
      const c = Mt.querySelector(".tfMorePair"), u = { more: T, parts: lo, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ya.innerHTML = "", Ya.appendChild(c), Ya.classList.toggle("wide", Mt.classList.contains("wide")), Ya.hidden = !1, Mt.hidden = !0, Mt.innerHTML = "", T = { id: t, opener: e, back: null, frame: null, under: u, at: Number((r = e == null ? void 0 : e.dataset) == null ? void 0 : r.at) || null }, Tl();
      return;
    }
    T = { id: t, opener: a ? T.opener : e, back: a ? T : null, frame: a ? T.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? T.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, Tl();
  }
  let Al = !1;
  function Tl() {
    lo = [], Al = !Mt.hidden, na.forEach((t, e) => {
      e !== T.id && Mt.contains(t.el) && (t.destroy(), na.delete(e));
    }), rr(), Al = !1;
  }
  function Gi() {
    if (!T) return;
    const t = T;
    Wm(Mt, () => {
      T === t && Ll();
    });
  }
  function Ll() {
    var o, r, l, c, u, f, v, S;
    const t = T == null ? void 0 : T.opener, e = T == null ? void 0 : T.under;
    T = null, na.forEach((x, R) => {
      Mt.contains(x.el) && (x.destroy(), na.delete(R));
    }), sa.forEach((x, R) => {
      /^more2?:/.test(R) && sa.delete(R);
    }), Mt.hidden = !0, Mt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ya.firstElementChild;
      T = e.more, lo = e.parts, x && (x.inert = !1, Mt.appendChild(x)), Mt.classList.toggle("wide", Ya.classList.contains("wide")), Ya.hidden = !0, Ya.innerHTML = "", Mt.hidden = !1;
      const R = Mt.querySelector(".tfMore");
      R && (R.scrollTop = T.scroll || 0), rr(), (r = (o = e.opener) != null && o.isConnected ? e.opener : Mt.querySelector("[data-more-close]")) == null || r.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = P.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = P.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (v = t == null ? void 0 : t.hasAttribute) != null && v.call(t, "data-favs-edit") && ((S = P.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const dh = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function ph(t) {
    const e = String(qt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, r]) => {
      const l = dh[o], c = a + l;
      if (!l || !M[c] || !In[l]) return "";
      const u = qt(c).unit_of_measurement || "", [f, v] = In[l], S = r === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(bt(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(c) + '" data-guide="' + (S ? f : v) + '" data-guide-word="' + q("Wants " + (S ? "" : "up to ") + (S ? f : v).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + q(bt(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Ad = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => Bd(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Sc(e)));
  function Dl(t, e, a, o = {}) {
    const r = e.map((H) => H[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...r), c = Math.max(...r), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), v = 8, S = f - 20, x = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, E = (H) => Math.max(0, Math.min(u, (H - x) / R * u)), B = (H) => c === l ? (v + S) / 2 : S - (H - l) / (c - l) * (S - v);
    let k = "M" + E(e[0][0]).toFixed(1) + " " + B(e[0][1]).toFixed(1);
    if (e.length > 2) k = gu(e.map((H) => [E(H[0]), B(H[1])]));
    else for (let H = 1; H < e.length; H++) k += o.smooth ? "L" + E(e[H][0]).toFixed(1) + " " + B(e[H][1]).toFixed(1) : "H" + E(e[H][0]).toFixed(1) + "V" + B(e[H][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = bu(u, v, S) + '<path d="' + k + "V" + S + "H" + E(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + k + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + De.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + B(o.guide).toFixed(1) + '" y2="' + B(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (B(o.guide) < 20 ? B(o.guide) + 14 : B(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(o.guideWord || "") + "</text>" : "");
  }
  const Td = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, uh = (t, e) => {
    const a = t.split(".")[0];
    return Td[a] ? Td[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, fh = (t) => {
    const e = t.split(".")[0], a = qt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (ls.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Ld = /* @__PURE__ */ new Map();
  let hh = 0;
  async function mh(t) {
    var r;
    let e = Ld.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if ($a(t) && Number.isFinite(Number((r = M[t]) == null ? void 0 : r.state))) l = Ed(t).map(([c, u]) => [c, String(u)]);
      else try {
        const c = await L({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      l.length || (l = (Or || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, Ld.set(t, e);
    }
    const a = M[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function Dd(t, e, a) {
    const o = await mh(t);
    if (!e.isConnected) return;
    const r = o.map(([C, at]) => [C, Number(at)]);
    if (o.length > 1 && r.every(([, C]) => Number.isFinite(C))) {
      Dl(e, r, bt(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, v = (C) => Math.max(0, Math.min(u, (C - c) / 864e5 * u)), S = [];
    let x = null;
    o.forEach(([C, at]) => {
      const St = uh(t, at);
      St && x == null ? x = Math.max(C, c) : !St && x != null && (S.push([x, Math.max(C, c)]), x = null);
    }), x != null && S.push([x, l]);
    const R = Es(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", E = fh(t), B = "tfDayClip" + ++hh, k = S.map(([C, at]) => E + (at >= l - 1e3 && C <= c + 1e3 ? " all day" : at >= l - 1e3 ? " since " + ba(C) : C <= c + 1e3 ? " until " + ba(at) : " " + ba(C) + "–" + ba(at)));
    let H = "", _ = -1 / 0;
    S.forEach(([C], at) => {
      const St = k[at].length * 5.4, Rt = Math.min(v(C), u - St);
      Rt < _ + 8 || (H += '<text x="' + Rt.toFixed(1) + '" y="10">' + q(k[at]) + "</text>", _ = Rt + St);
    });
    let j = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let at = new Date(l).setHours(C, 0, 0, 0);
      at > l && (at -= 864e5), v(at) > 8 && v(at) < u - 34 && (j += '<text x="' + v(at).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", bt(t) + ", last 24 hours: " + (k.length ? k.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + B + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + H + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + B + ')">' + S.map(([C, at]) => '<rect x="' + v(C).toFixed(1) + '" y="18" width="' + Math.max(2, v(at) - v(C)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + v(a).toFixed(1) + '" x2="' + v(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + j;
  }
  function Ed(t) {
    var o;
    const e = Number((o = M[t]) == null ? void 0 : o.state), a = Date.now();
    if (qt(t).state_class === "total_increasing") {
      const r = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), l = Math.max(1, a - r);
      return [...Array(49)].map((c, u) => r + l * u / 48).map((c) => [c, Math.round(e * Math.pow((c - r) / l, 1.3) * 100) / 100]);
    }
    if ($a(t) && t.endsWith("_moisture")) return [...Array(48)].map((r, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - l / 48, 1.2)) * 10) / 10]);
    if ($a(t) && t.endsWith("_light")) {
      const r = (c) => {
        const u = new Date(c).getHours() + new Date(c).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, l = (c) => 0.8 + 0.2 * r(c);
      return [...Array(48)].map((c, u) => a - (48 - u) * 30 * 60 * 1e3).map((c) => [c, Math.round(e * l(c) / l(a))]);
    }
    return [...Array(48)].map((r, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(l / 6)) * 10) / 10]);
  }
  async function Bd(t, e, a = {}) {
    var B, k;
    let o = ft.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: Ud() };
    else if ($a(t)) o = { at: Date.now(), points: Ed(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const H = new Date(Date.now() - 864e5).toISOString(), _ = await L({ type: "history/history_during_period", start_time: H, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), j = ((_ == null ? void 0 : _[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, at]) => Number.isFinite(C) && Number.isFinite(at));
        o = { at: Date.now(), points: j };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ft.set(t, o);
    }
    const r = e || P.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!r) return;
    const l = M[t], c = ((B = l == null ? void 0 : l.attributes) == null ? void 0 : B.unit_of_measurement) || "", u = o.points.slice(), f = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      r.setAttribute("aria-label", bt(t) + ": no history for the last 24 hours"), r.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const v = u.map((H) => H[1]), S = Math.min(...v), x = Math.max(...v), R = (H) => H.toLocaleString(void 0, { maximumFractionDigits: Math.abs(H) >= 100 ? 0 : 1 }), E = ((k = l == null ? void 0 : l.attributes) == null ? void 0 : k.state_class) === "total_increasing";
    Dl(r, u, bt(t) + ", last 24 hours: " + (E ? "+" + R(v[v.length - 1] - v[0]) : S === x ? R(S) : R(S) + " to " + R(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Rd() {
    const t = P == null ? void 0 : P.querySelector("[data-solar]");
    if (!t) return;
    const e = Ud();
    Dl(t, e, "Solar, last 24 hours: up to " + He(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function gh(t, e) {
    const a = e.entity_id, o = _a.get(a) || {}, r = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Wa(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    r != null && (o.pos = r), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), _a.set(a, o);
  }
  function Pd(t, e, a) {
    var r;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !wa[o] || !vo(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((r = M[o]) == null ? void 0 : r.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: wa[o] }];
  }
  function Yr(t, e, a, o) {
    let r = { entity_id: a, ...o || {} };
    return [e, r] = Pd(t, e, r), t === "cover" && gh(e, r), rn[a] = (rn[a] || 0) + 1, uo.set(Gp, JSON.stringify(rn)), ci.call(t, e, r) ? Promise.resolve() : Promise.resolve(F(t, e, r));
  }
  function El(t) {
    const [e, a, o, r] = t.split("|");
    Yr(e, a, o, r ? JSON.parse(r) : null).catch(() => {
    });
  }
  function Zr(t, e) {
    lt.set("pos|" + t, e), _t("pos|" + t), ma.delete(t), lo = lo.map(() => ""), [P, Mt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((r) => xo(r, e)));
    const a = P.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (T == null ? void 0 : T.id) === t) {
      const o = Mt.querySelector(".tfMoreState"), r = Mt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), r && (r.textContent = "Currently " + Wa(t) + "%");
    }
    kd(t).forEach((o) => o.update(Vi(t)));
  }
  const bh = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function wh(t, e) {
    var k;
    const a = t.dataset.blocks;
    (k = t.setPointerCapture) == null || k.call(t, e.pointerId), vt.add("pos|" + a), R("pos|" + a);
    const o = (H) => {
      const _ = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (H.clientX - _.left) / _.width * 100));
    }, r = o(e), l = e.clientX;
    let c = !1, u = cn(a), f = r, v = 0;
    const S = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, Zr(a, u), v = requestAnimationFrame(S);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), v = requestAnimationFrame(S));
    }, R = setTimeout(x, 350), E = (H) => {
      f = o(H), Math.abs(H.clientX - l) > 6 && (clearTimeout(R), x());
    }, B = () => {
      clearTimeout(R), cancelAnimationFrame(v), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", B), t.removeEventListener("pointercancel", B), t.classList.remove("fine"), vt.delete("pos|" + a), Zr(a, c ? Math.round(u) : (Math.min(3, Math.floor(r / 25)) + 1) * 25), $r("pos", a);
    };
    t.addEventListener("pointermove", E), t.addEventListener("pointerup", B), t.addEventListener("pointercancel", B);
  }
  function Hd(t) {
    var e;
    W = t.dataset.area, P.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var r;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (r = a.querySelector(".panelExpanded")) == null || r.toggleAttribute("inert", !o);
    }), ma.set("areas", Et(((e = P.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Vs(!0), 340);
  }
  function Nd(t) {
    const e = P.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === W) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), o = a && !Fe() ? a.cloneNode(!0) : null, r = tt().map((v) => v.id), l = r.indexOf(t) > r.indexOf(W) ? 1 : -1;
    W = t;
    const c = Et(e.style.order || 1);
    ma.set("areas", c), wd(e, c);
    const u = P.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), f = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || Fe() || (u.style.setProperty("--dir", l), o && (o.classList.add("tfAreaGoing"), o.inert = !0, o.setAttribute("aria-hidden", "true"), u.appendChild(o), setTimeout(() => o.remove(), 340), clearTimeout(Ke), Ke = setTimeout(() => {
      Ke = 0, ae && Be();
    }, 340)), f && (f.classList.add("tfAreaLand"), f.addEventListener("animationend", () => f.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const vh = 40;
  function yh(t) {
    var u, f;
    if (t.pointerType === "mouse" || !t.isPrimary || !((f = (u = t.target).closest) != null && f.call(u, ".tfAreaStage")) || !Nc.matches) return;
    const e = t.clientX, a = t.clientY, o = t.pointerId;
    let r = null;
    const l = (v) => {
      v.pointerId === o && !r && Math.hypot(v.clientX - e, v.clientY - a) >= Sa && (r = Math.abs(v.clientX - e) > Math.abs(v.clientY - a) ? "x" : "y");
    }, c = (v) => {
      if (v.pointerId !== o) return;
      removeEventListener("pointermove", l, !0), removeEventListener("pointerup", c, !0), removeEventListener("pointercancel", c, !0);
      const S = v.clientX - e;
      if (v.type !== "pointerup" || r !== "x" || Math.abs(S) < vh) return;
      const x = (B) => {
        B.stopPropagation(), B.preventDefault();
      };
      n.addEventListener("click", x, { capture: !0, once: !0 }), setTimeout(() => n.removeEventListener("click", x, !0), 400);
      const R = tt(), E = R[R.findIndex((B) => B.id === W) + (S < 0 ? 1 : -1)];
      E && Nd(E.id);
    };
    addEventListener("pointermove", l, !0), addEventListener("pointerup", c, !0), addEventListener("pointercancel", c, !0);
  }
  const Ui = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, o] = Vn(t);
      return Math.round(a + e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = qt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] },
    // the redrawn popups' tracks (17 Nov): warmth flipped (cold at the left), a fan's speed, a valve's position, a
    // cover's tilt as a level
    ctf: { value: (t, e) => {
      const [a, o] = Vn(t);
      return Math.round(o - e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = qt(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    // the light popup's vertical colour (17 Nov): red at the top, through the spectrum, to red at the bottom
    huev: { value: (t, e) => Math.round((1 - e) * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = qt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } }
  };
  function Yi(t, e, a, o) {
    var v;
    const r = Ui[e].value(a, o);
    lt.set(e + "|" + a, r), _t(e + "|" + a);
    const l = Math.round(o * 100) + "%", c = t.querySelector("i");
    if (e === "tilt") {
      c.style.width = "calc((100% - 8px) * " + o + ")";
      const [S, x] = t.querySelectorAll("span");
      S.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), ma.delete(a), lo = lo.map(() => ""), kd(a).forEach((R) => R.update(Vi(a)));
    } else if (t.dataset.axis === "y")
      if (c) c.style.height = l;
      else {
        let S = t.querySelector("b");
        S || (S = document.createElement("b"), t.appendChild(S)), S.style.top = Math.round((1 - o) * 1e3) / 10 + "%";
      }
    else if (c) c.style.width = l;
    else {
      let S = t.querySelector("b");
      S || (S = document.createElement("b"), t.appendChild(S)), S.style.left = l;
    }
    t.setAttribute("aria-valuenow", String(Math.round(o * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = Ui[e].text(a, r));
    const f = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (v = t.closest(".tfAction")) == null ? void 0 : v.querySelector(".tfName .activityRowMeta");
    f && (f.textContent = Ui[e].text(a, r));
  }
  function $r(t, e) {
    const a = t + "|" + e, o = lt.get(a), r = ht.get(a), [l, c, u] = Ui[t].send(e, o), f = () => setTimeout(() => {
      ht.get(a) === r && lt.delete(a), Be();
    }, 1500);
    Yr(l, c, e, u).then(f, f);
  }
  function Od(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (Qe && !e.target.closest(".tfBoardMenu,[data-board-more]") && io(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Qe == null ? void 0 : Qe.key) === a.dataset.boardMore ? io(!0) : xf(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Mf(Qe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) $s(a.dataset.boardShow);
        else if (a.dataset.favHide) ad(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) xc(a.dataset.energyPick);
        else if (a.dataset.areaPick) Nd(a.dataset.areaPick);
        else if (a.dataset.act) El(a.dataset.act);
        else if (a.hasAttribute("data-details")) Ml(!(T != null && T.details));
        else if (a.hasAttribute("data-details-close")) Ml(!1);
        else if (a.dataset.summary) mc(a.dataset.summary, a);
        else if (a.dataset.star) fc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const r = T.id;
          T = T.back, Tl(), (o = Mt.querySelector('.tfMore [data-more="' + CSS.escape(r) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? zi("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([r, l, c, u]) => Yr(r, l, c, u).catch(() => {
        })) : a.dataset.more ? zi(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Gi() : a.dataset.morePage ? ji(a.hasAttribute("data-more-toggle") && ((T == null ? void 0 : T.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? hc(a.dataset.path) : a.dataset.go ? hd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? fl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Hd(a);
    }), t.addEventListener("keydown", (e) => {
      var o, r, l, c, u, f, v;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), zi(a.dataset.more, a)), (r = a.dataset) != null && r.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), xc(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Hd(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), mc(a.dataset.summary, a)), e.key === "Escape" && Qe && t === P) {
        e.preventDefault(), io(!0);
        return;
      }
      if (e.key === "Escape" && ca && t === P) {
        e.preventDefault(), Zs(!1), (u = p("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === P && (e.preventDefault(), fl()), (f = a.dataset) != null && f.blocks) {
        const S = a.dataset.blocks, x = bh(e, Math.round(cn(S)));
        if (x == null) return;
        e.preventDefault(), Zr(S, x), clearTimeout(nn.get(S)), nn.set(S, setTimeout(() => $r("pos", S), 500));
        return;
      }
      if ((v = a.dataset) != null && v.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, x] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, E = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        Yi(a, S, x, E), $r(S, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Wt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), wh(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [r, l] = o.dataset.drag.split("|"), c = r === "bright" && !vo(l), u = e.pointerType !== "mouse";
      if (c && !u) {
        El(Dt("light", "toggle", l));
        return;
      }
      const f = r === "bright" && ((Wt = M[l]) == null ? void 0 : Wt.state) !== "on", v = r + "|" + l;
      vt.add(v), _t(v);
      const S = r === "tilt" ? 4 : 0, x = o.dataset.axis === "y", R = () => x ? o.getBoundingClientRect().height : o.getBoundingClientRect().width - S * 2, E = (Ft) => {
        const kt = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, x ? 1 - (Ft.clientY - kt.top) / R() : (Ft.clientX - kt.left - S) / R()));
      };
      let B = u ? "waiting" : f ? "pressed" : "dragging", k = 0;
      const H = e.clientX, _ = e.clientY, j = (Ft, kt) => Math.hypot(Ft.clientX - H, Ft.clientY - _) > kt, C = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), C()), B === "dragging" && Yi(o, r, l, E(e));
      const at = () => {
        var Ft, kt;
        B = "sliding", Xa = o, o.classList.add("held"), C(), (Ft = navigator.userActivation) != null && Ft.hasBeenActive && ((kt = navigator.vibrate) == null || kt.call(navigator, 8)), k = f ? (wa[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, St = (Ft) => {
        B === "waiting" && j(Ft, Sa) ? !c && (x ? Math.abs(Ft.clientY - _) > Math.abs(Ft.clientX - H) : Math.abs(Ft.clientX - H) > Math.abs(Ft.clientY - _)) ? at() : B = "gone" : B === "pressed" && j(Ft, 4) && (B = "dragging"), B === "sliding" ? Yi(o, r, l, Math.max(0, Math.min(1, k + (x ? _ - Ft.clientY : Ft.clientX - H) / R()))) : B === "dragging" && Yi(o, r, l, E(Ft));
      }, Rt = (Ft) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((kt, Tt) => o.removeEventListener(kt, Tt ? Rt : St)), o.classList.remove("held"), Xa === o && (Xa = null), vt.delete(v), B === "sliding" || B === "dragging" ? $r(r, l) : Ft.type === "pointerup" && c ? El(Dt("light", "toggle", l)) : Ft.type === "pointerup" && f && (B === "waiting" || B === "pressed") && Yr("light", "turn_on", l).catch(() => {
        }), ae && B !== "sliding" && B !== "dragging" && Be();
      };
      o.addEventListener("pointermove", St), o.addEventListener("pointerup", Rt), o.addEventListener("pointercancel", Rt);
    }), t.addEventListener("touchmove", (e) => {
      Xa && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return P && b && (Fu(), Od(P), P.addEventListener("pointerdown", yh), Od(Mt), Mt.addEventListener("click", (t) => {
    t.target === Mt && Gi();
  }), (Id = n.getElementById("homeNav")) == null || Id.addEventListener("click", () => {
    Q && fl();
  }), (Fd = n.querySelector(".bottomNav")) == null || Fd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ss + "</button>"), (qd = p("dashEditNav")) == null || qd.addEventListener("click", () => A ? ll(!Eo) : Zs(!ca)), P.addEventListener("pointerdown", Vf), P.addEventListener("pointerdown", wf), P.addEventListener("click", (t) => {
    A && Eo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), P.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Vc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Hs() !== Rs ? Be() : Ri();
  }).observe(P), window.addEventListener("resize", Ri, { passive: !0 }), Mt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), T != null && T.details ? Ml(!1) : Gi();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const o = [...Mt.querySelectorAll(".tfMoreDots [data-more-page]")], r = o.findIndex((c) => c.getAttribute("aria-selected") === "true"), l = o[Math.max(0, Math.min(o.length - 1, r + (t.key === "ArrowRight" ? 1 : -1)))];
      l && ji(Number(l.dataset.morePage), l.dataset.moreMode ?? null, !0);
    }
  })), Y(), {
    update(t) {
      if (!b) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([o]) => $a(o))), ...t || {} };
      for (const o in M) o.startsWith("light.") && M[o].state === "on" && vo(o) && ki(o, bo(M[o]));
      e ? Ua() : Be();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      sn = !0, Ae == null || Ae.destroy(), Ae = null, ke == null || ke.forEach((t) => t.destroy()), ke = null;
    },
    resume() {
      sn = !1, !(!b || !(P != null && P.querySelector("[data-tf]"))) && (ga.isConnected && pi(ga.style.order), hi());
    }
  };
}
const M1 = "0.14.4";
function k1() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class S1 extends HTMLElement {
  setConfig(i) {
    this._config = { layout: "test-focus", ...i || {} };
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
  set hass(i) {
    const d = !this._hass;
    if (this._hass = i, d) {
      this._init();
      return;
    }
    this._test && i.states !== this._lastStates && (this._lastStates = i.states, this._test.update(i.states));
  }
  connectedCallback() {
    var i;
    (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var i;
    (i = this._test) == null || i.suspend();
  }
  _init() {
    k1();
    const i = this.shadowRoot || this.attachShadow({ mode: "open" });
    i.innerHTML = `<style>${Ch}${Ah}${Th}${Lh}</style>${Dh}`;
    const d = i.getElementById("app");
    d.style.opacity = "0", this._shell = Rh(i, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = x1(i, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Im(i, d), qm(i), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
  }
  _toggleFullscreen() {
    const i = document;
    if (i.fullscreenElement || i.webkitFullscreenElement) {
      (i.exitFullscreen || i.webkitExitFullscreen).call(i);
      return;
    }
    const d = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(d.call(this)).catch(
      () => {
        var p;
        return (p = this._shell) == null ? void 0 : p.toast("Full screen isn't available here");
      }
    );
  }
}
customElements.get("homecore-card") || (customElements.define("homecore-card", S1), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${M1} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
